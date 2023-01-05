export { default } from "next-auth/middleware";

export const config = { matcher: ["/secret/:path*"]}

/secret
/secret/a
/secret/a/b