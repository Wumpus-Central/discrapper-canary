n.d(t, { G: () => u }), n(539854), n(704826), n(35282);
var r = n(647438),
    i = n(979554),
    a = n(215023),
    l = n(388032);
let o = function (e) {
        var t, n, r, a;
        let o = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (o)
            return l.intl.formatToPlainString(l.t["/0Yndn"], {
                num: null == (t = e.bundledProducts) ? void 0 : t.length,
            });
        let s = null != (n = e.bundledProducts) ? n : [],
            c = s.find((e) => e.type === i.Z.AVATAR_DECORATION),
            u = s.find((e) => e.type === i.Z.PROFILE_EFFECT),
            d = s.find((e) => e.type === i.Z.NAMEPLATE);
        if (null != d) {
            let e = [];
            null != c && e.push(l.intl.formatToPlainString(l.t.Ntv9Ji, { itemName: c.name })),
                null != u && e.push(l.intl.formatToPlainString(l.t["3Y8q7e"], { itemName: u.name })),
                null != d && e.push(l.intl.formatToPlainString(l.t["2keXk5"], { itemName: d.name }));
            let t = e.join(", ").replace(/, ([^,]*)$/, " & $1");
            return l.intl.formatToPlainString(l.t.Ofrqj4, { joinedItems: t });
        }
        return l.intl.formatToPlainString(l.t.BS1Cu7, {
            decoName: null != (r = null == c ? void 0 : c.name) ? r : "",
            pfxName: null != (a = null == u ? void 0 : u.name) ? a : "",
        });
    },
    s = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return null == e ? "" : e.type === i.Z.BUNDLE ? o(e, t) : e.summary;
    },
    c = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        switch (null == e ? void 0 : e.type) {
            case i.Z.AVATAR_DECORATION:
                return l.intl.string(l.t["3lv7q6"]);
            case i.Z.PROFILE_EFFECT:
                return l.intl.string(l.t["VhJL7+"]);
            case i.Z.NAMEPLATE:
                return l.intl.string(l.t.ik37ER);
            case i.Z.BUNDLE:
                return o(e, t);
            default:
                return "";
        }
    },
    u = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = (null == e ? void 0 : e.skuId) != null && (0, a.o0)(null == e ? void 0 : e.skuId);
        return (0, r.useMemo)(() => (n ? s(e, t) : c(e, t)), [n, e, t]);
    };
