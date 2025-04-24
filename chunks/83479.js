n.d(t, { G: () => d }), n(388685);
var l = n(192379),
    i = n(979554),
    r = n(911535),
    s = n(388032);
let o = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (t) {
            var n;
            return s.intl.formatToPlainString(s.t['/0Yndn'], { num: null == (n = e.bundledProducts) ? void 0 : n.length });
        }
        let [l, i] = null != e.bundledProducts ? e.bundledProducts : [];
        return s.intl.formatToPlainString(s.t.WQbNhI, {
            decoName: l.name,
            pfxName: i.name
        });
    },
    a = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return null == e ? '' : e.type === i.Z.BUNDLE ? o(e, t) : e.summary;
    },
    c = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        switch (null == e ? void 0 : e.type) {
            case i.Z.AVATAR_DECORATION:
                return s.intl.string(s.t['3lv7q6']);
            case i.Z.PROFILE_EFFECT:
                return s.intl.string(s.t['VhJL7+']);
            case i.Z.NAMEPLATE:
                return s.intl.string(s.t.ik37ER);
            case i.Z.BUNDLE:
                return o(e, t);
            default:
                return '';
        }
    },
    d = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = (0, r.P)('ShopProductPreviewActionSheet');
        return (0, l.useMemo)(() => (n ? c(e, t) : a(e, t)), [e, t, n]);
    };
