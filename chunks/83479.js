n.d(t, { G: () => s }), n(539854), n(704826), n(35282);
var r = n(473749),
    i = n(979554),
    a = n(215023),
    l = n(388032);
let o = function (e) {
        var t, n, r, a;
        let o = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (o)
            return l.intl.formatToPlainString(l.t["/0Yndu"], {
                num: null == (t = e.bundledProducts) ? void 0 : t.length,
            });
        let s = null != (n = e.bundledProducts) ? n : [],
            c = s.find((e) => e.type === i.Z.AVATAR_DECORATION),
            u = s.find((e) => e.type === i.Z.PROFILE_EFFECT),
            d = s.find((e) => e.type === i.Z.NAMEPLATE);
        if (null != d) {
            let e = [];
            null != c && e.push(l.intl.formatToPlainString(l.t.Ntv9Jt, { itemName: c.name })),
                null != u && e.push(l.intl.formatToPlainString(l.t["3Y8q7a"], { itemName: u.name })),
                null != d && e.push(l.intl.formatToPlainString(l.t["2keXky"], { itemName: d.name }));
            let t = e.join(", ").replace(/, ([^,]*)$/, " & $1");
            return l.intl.formatToPlainString(l.t.Ofrqj6, { joinedItems: t });
        }
        return l.intl.formatToPlainString(l.t.BS1Cuy, {
            decoName: null != (r = null == c ? void 0 : c.name) ? r : "",
            pfxName: null != (a = null == u ? void 0 : u.name) ? a : "",
        });
    },
    s = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = arguments.length > 2 ? arguments[2] : void 0;
        return (0, r.useMemo)(() => {
            if (null != n)
                return 3 === n
                    ? l.intl.string(l.t.QUjmjp)
                    : 7 === n
                      ? l.intl.string(l.t.yPxJA2)
                      : l.intl.string(l.t["o+VpXZ"]);
            if (null != e && (0, a.o0)(e.skuId) && e.type !== i.Z.BUNDLE && null != e.summary && "" !== e.summary)
                return e.summary;
            switch (null == e ? void 0 : e.type) {
                case i.Z.AVATAR_DECORATION:
                    return l.intl.string(l.t["3lv7q2"]);
                case i.Z.PROFILE_EFFECT:
                    return l.intl.string(l.t.VhJL72);
                case i.Z.NAMEPLATE:
                    return l.intl.string(l.t.ik37EZ);
                case i.Z.BUNDLE:
                    return o(e, t);
                default:
                    return "";
            }
        }, [e, t, n]);
    };
