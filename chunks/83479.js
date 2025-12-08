n.d(t, { G: () => u }), n(539854), n(704826), n(35282);
var r = n(473749),
    i = n(979554),
    l = n(215023),
    a = n(388032);
let o = function (e) {
        var t, n, r, l;
        let o = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (o)
            return a.intl.formatToPlainString(a.t["/0Yndu"], {
                num: null == (t = e.bundledProducts) ? void 0 : t.length,
            });
        let s = null != (n = e.bundledProducts) ? n : [],
            c = s.find((e) => e.type === i.Z.AVATAR_DECORATION),
            u = s.find((e) => e.type === i.Z.PROFILE_EFFECT),
            d = s.find((e) => e.type === i.Z.NAMEPLATE);
        if (null != d) {
            let e = [];
            null != c && e.push(a.intl.formatToPlainString(a.t.Ntv9Jt, { itemName: c.name })),
                null != u && e.push(a.intl.formatToPlainString(a.t["3Y8q7a"], { itemName: u.name })),
                null != d && e.push(a.intl.formatToPlainString(a.t["2keXky"], { itemName: d.name }));
            let t = e.join(", ").replace(/, ([^,]*)$/, " & $1");
            return a.intl.formatToPlainString(a.t.Ofrqj6, { joinedItems: t });
        }
        return a.intl.formatToPlainString(a.t.BS1Cuy, {
            decoName: null != (r = null == c ? void 0 : c.name) ? r : "",
            pfxName: null != (l = null == u ? void 0 : u.name) ? l : "",
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
                return a.intl.string(a.t["3lv7q2"]);
            case i.Z.PROFILE_EFFECT:
                return a.intl.string(a.t.VhJL72);
            case i.Z.NAMEPLATE:
                return a.intl.string(a.t.ik37EZ);
            case i.Z.BUNDLE:
                return o(e, t);
            default:
                return "";
        }
    },
    u = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = arguments.length > 2 ? arguments[2] : void 0,
            i = (null == e ? void 0 : e.skuId) != null && (0, l.o0)(null == e ? void 0 : e.skuId);
        return (0, r.useMemo)(
            () =>
                null != n
                    ? 3 === n
                        ? a.intl.string(a.t.QUjmjp)
                        : 7 === n
                          ? a.intl.string(a.t.yPxJA2)
                          : a.intl.string(a.t["o+VpXZ"])
                    : i
                      ? s(e, t)
                      : c(e, t),
            [i, e, t, n],
        );
    };
