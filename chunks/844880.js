n.d(t, { s: () => a });
var r = n(688560),
    i = n(889929);
let a = (0, r._I)(() => ({
    name: "HttpContext",
    preprocessEvent(e) {
        if (!i.m9.navigator && !i.m9.location && !i.m9.document) return;
        let t = (e.request && e.request.url) || (i.m9.location && i.m9.location.href),
            { referrer: n } = i.m9.document || {},
            { userAgent: r } = i.m9.navigator || {},
            a = {
                ...(e.request && e.request.headers),
                ...(n && { Referer: n }),
                ...(r && { "User-Agent": r }),
            },
            o = {
                ...e.request,
                ...(t && { url: t }),
                headers: a,
            };
        e.request = o;
    },
}));
