n.d(t, { G: () => u }), n(388685);
var r = n(192379),
    i = n(979554),
    a = n(911535),
    l = n(388032);
let s = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (t) {
            var n;
            return l.NW.formatToPlainString(l.t['/0Yndn'], { num: null == (n = e.bundledProducts) ? void 0 : n.length });
        }
        let [r, i] = null != e.bundledProducts ? e.bundledProducts : [];
        return l.NW.formatToPlainString(l.t.WQbNhI, {
            decoName: r.name,
            pfxName: i.name
        });
    },
    o = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return null == e ? '' : e.type === i.Z.BUNDLE ? s(e, t) : e.summary;
    },
    c = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        switch (null == e ? void 0 : e.type) {
            case i.Z.AVATAR_DECORATION:
                return l.NW.string(l.t['3lv7q6']);
            case i.Z.PROFILE_EFFECT:
                return l.NW.string(l.t['VhJL7+']);
            case i.Z.NAMEPLATE:
                return l.NW.string(l.t.ik37ER);
            case i.Z.BUNDLE:
                return s(e, t);
            default:
                return '';
        }
    },
    u = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = (0, a.P)('ShopProductPreviewActionSheet');
        return (0, r.useMemo)(() => (n ? c(e, t) : o(e, t)), [e, t, n]);
    };
