(n.d(t, { G: () => u }), n(388685));
var r = n(73800),
    a = n(979554),
    i = n(215023),
    o = n(388032);
let c = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (t) {
            var n;
            return o.intl.formatToPlainString(o.t['/0Yndn'], { num: null == (n = e.bundledProducts) ? void 0 : n.length });
        }
        let [r, a] = null != e.bundledProducts ? e.bundledProducts : [];
        return o.intl.formatToPlainString(o.t.WQbNhI, {
            decoName: r.name,
            pfxName: a.name
        });
    },
    s = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return null == e ? '' : e.type === a.Z.BUNDLE ? c(e, t) : e.summary;
    },
    l = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        switch (null == e ? void 0 : e.type) {
            case a.Z.AVATAR_DECORATION:
                return o.intl.string(o.t['3lv7q6']);
            case a.Z.PROFILE_EFFECT:
                return o.intl.string(o.t['VhJL7+']);
            case a.Z.NAMEPLATE:
                return o.intl.string(o.t.ik37ER);
            case a.Z.BUNDLE:
                return c(e, t);
            default:
                return '';
        }
    },
    u = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = (null == e ? void 0 : e.skuId) != null && (0, i.o0)(null == e ? void 0 : e.skuId);
        return (0, r.useMemo)(() => (n ? s(e, t) : l(e, t)), [n, e, t]);
    };
