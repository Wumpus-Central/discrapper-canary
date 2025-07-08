(n.d(t, { G: () => u }), n(388685));
var r = n(73800),
    i = n(979554),
    l = n(215023),
    a = n(388032);
let o = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (t) {
            var n;
            return a.intl.formatToPlainString(a.t['/0Yndn'], { num: null == (n = e.bundledProducts) ? void 0 : n.length });
        }
        let [r, i] = null != e.bundledProducts ? e.bundledProducts : [];
        return a.intl.formatToPlainString(a.t.WQbNhI, {
            decoName: r.name,
            pfxName: i.name
        });
    },
    s = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return null == e ? '' : e.type === i.Z.BUNDLE ? o(e, t) : e.summary;
    },
    c = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        switch (null == e ? void 0 : e.type) {
            case i.Z.AVATAR_DECORATION:
                return a.intl.string(a.t['3lv7q6']);
            case i.Z.PROFILE_EFFECT:
                return a.intl.string(a.t['VhJL7+']);
            case i.Z.NAMEPLATE:
                return a.intl.string(a.t.ik37ER);
            case i.Z.BUNDLE:
                return o(e, t);
            default:
                return '';
        }
    },
    u = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = (null == e ? void 0 : e.skuId) != null && (0, l.o0)(null == e ? void 0 : e.skuId);
        return (0, r.useMemo)(() => (n ? s(e, t) : c(e, t)), [n, e, t]);
    };
