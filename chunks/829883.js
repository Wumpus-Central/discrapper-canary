n.d(t, {
    _b: () => h,
    o: () => f,
    zt: () => _,
    zy: () => d
}),
    n(757143),
    n(301563);
var r = n(633302),
    i = n(134432),
    o = n(768581),
    a = n(358085),
    s = n(981631);
let l = ''.concat(location.protocol, '//').concat(window.GLOBAL_ENV.CDN_HOST, '/role-icons'),
    c = ''.concat(location.protocol).concat(window.GLOBAL_ENV.API_ENDPOINT),
    u = (0, a.isAndroid)(),
    d = (e, t) => {
        if (null == e) return null;
        let n = null != e.unicodeEmoji ? r.ZP.getByName(r.ZP.convertSurrogateToName(e.unicodeEmoji, !1)) : void 0;
        return {
            customIconSrc: p(e, t),
            unicodeEmoji: null != n ? n : void 0
        };
    },
    f = (e, t) => e.replace(/size=[0-9]+/g, 'size='.concat((0, i.oO)(t * (0, i.x_)()))),
    p = (e, t) => {
        let { id: n, icon: r } = e;
        if (null == r) return;
        if (r.startsWith('data:')) return r;
        let a = o.$k ? 'webp' : 'png',
            d = '',
            f = 'quality=lossless';
        return (null != t && ((d = 'size=' + (0, i.oO)(t * (0, i.x_)())), (f = u ? '' : '&' + f)), null != window.GLOBAL_ENV.CDN_HOST) ? ''.concat(l, '/').concat(n, '/').concat(r, '.').concat(a, '?').concat(d).concat(f) : ''.concat(c).concat(s.ANM.ROLE_ICON(n, r), '?').concat(d);
    },
    _ = (e) => e.startsWith(l) || (e.startsWith(''.concat(c, '/roles')) && e.includes('/icons/')),
    h = (e, t) => {
        var n;
        return (null == t ? void 0 : null === (n = t.tags) || void 0 === n ? void 0 : n.subscription_listing_id) != null || e.features.has(s.oNc.ROLE_ICONS);
    };
