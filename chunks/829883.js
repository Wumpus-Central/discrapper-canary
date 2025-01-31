n.d(t, {
    _b: () => h,
    o: () => f,
    zt: () => p,
    zy: () => d
}),
    n(757143);
var i = n(633302),
    r = n(134432),
    a = n(768581),
    s = n(358085),
    o = n(981631);
let l = ''.concat(location.protocol, '//').concat(window.GLOBAL_ENV.CDN_HOST, '/role-icons'),
    u = ''.concat(location.protocol).concat(window.GLOBAL_ENV.API_ENDPOINT),
    c = (0, s.isAndroid)(),
    d = (e, t) => {
        if (null == e) return null;
        let n = null != e.unicodeEmoji ? i.ZP.getByName(i.ZP.convertSurrogateToName(e.unicodeEmoji, !1)) : void 0;
        return {
            customIconSrc: _(e, t),
            unicodeEmoji: null != n ? n : void 0
        };
    },
    f = (e, t) => e.replace(/size=[0-9]+/g, 'size='.concat((0, r.oO)(t * (0, r.x_)()))),
    _ = (e, t) => {
        let { id: n, icon: i } = e;
        if (null == i) return;
        if (i.startsWith('data:')) return i;
        let s = a.$k ? 'webp' : 'png',
            d = '',
            f = 'quality=lossless';
        return (null != t && ((d = 'size=' + (0, r.oO)(t * (0, r.x_)())), (f = c ? '' : '&' + f)), null != window.GLOBAL_ENV.CDN_HOST) ? ''.concat(l, '/').concat(n, '/').concat(i, '.').concat(s, '?').concat(d).concat(f) : ''.concat(u).concat(o.ANM.ROLE_ICON(n, i), '?').concat(d);
    },
    p = (e) => e.startsWith(l) || (e.startsWith(''.concat(u, '/roles')) && e.includes('/icons/')),
    h = (e, t) => {
        var n;
        return (null == t ? void 0 : null === (n = t.tags) || void 0 === n ? void 0 : n.subscription_listing_id) != null || e.features.has(o.oNc.ROLE_ICONS);
    };
