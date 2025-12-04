r.d(t, { s: () => i });
var n = r(688560),
    a = r(889929);
let i = (0, n._I)(() => ({
    name: "HttpContext",
    preprocessEvent(e) {
        if (!a.m9.navigator && !a.m9.location && !a.m9.document) return;
        let t = (e.request && e.request.url) || (a.m9.location && a.m9.location.href),
            { referrer: r } = a.m9.document || {},
            { userAgent: n } = a.m9.navigator || {},
            i = {
                ...(e.request && e.request.headers),
                ...(r && { Referer: r }),
                ...(n && { "User-Agent": n }),
            },
            o = {
                ...e.request,
                ...(t && { url: t }),
                headers: i,
            };
        e.request = o;
    },
}));
