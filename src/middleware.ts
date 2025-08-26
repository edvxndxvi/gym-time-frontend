import { MiddlewareConfig, NextRequest, NextResponse } from "next/server"
import { isValidJWT } from "./lib/jwt"

const publicRoutes = [
    { path: '/auth/login', whenAuthenticated: 'redirect' },
    { path: '/auth/signup', whenAuthenticated: 'redirect' },
] as const

const REDIRECT_WHEN_NOT_AUTHENTICATED_ROUTE = '/auth/login'

export async function middleware(request: NextRequest) {
    const path = request.nextUrl.pathname
    const publicRoute = publicRoutes.find(route => route.path === path)
    const authToken = request.cookies.get('auth-token')

    if(!authToken && publicRoute){
        return NextResponse.next()
    }

    if(!authToken && !publicRoute){
        const redirectUrl = request.nextUrl.clone()
        redirectUrl.pathname = REDIRECT_WHEN_NOT_AUTHENTICATED_ROUTE

        return NextResponse.redirect(redirectUrl)
    }

    if(authToken && publicRoute && publicRoute.whenAuthenticated === 'redirect'){
        const redirectUrl = request.nextUrl.clone()
        redirectUrl.pathname = '/feed'

        return NextResponse.redirect(redirectUrl)
    }

    if(authToken && !publicRoute){
        if (!authToken?.value) {
            return new Response("Unauthorized", { status: 401 })
        }
        if(!(await isValidJWT(authToken.value))){
            const redirectUrl = request.nextUrl.clone()
            redirectUrl.pathname = REDIRECT_WHEN_NOT_AUTHENTICATED_ROUTE

            return NextResponse.redirect(redirectUrl)
        }
        
        return NextResponse.next()
    }


    return NextResponse.next()
}

export const config: MiddlewareConfig = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}