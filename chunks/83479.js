n.d(t, { G: () => o }), n(539854), n(388685), n(704826), n(35282);
var r = n(473749),
    i = n(979554),
    a = n(388032);
let l = function (e) {
        var t, n;
        let r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (r)
            return a.intl.formatToPlainString(a.t["/0Yndu"], {
                num: null == (t = e.bundledProducts) ? void 0 : t.length,
            });
        let l = null != (n = e.bundledProducts) ? n : [],
            o = [],
            c = !1;
        for (let e of l)
            switch (e.type) {
                case i.Z.AVATAR_DECORATION:
                    o.push(a.intl.formatToPlainString(a.t.Ntv9Jt, { itemName: e.name }));
                    break;
                case i.Z.PROFILE_EFFECT:
                    o.push(a.intl.formatToPlainString(a.t["3Y8q7a"], { itemName: e.name }));
                    break;
                case i.Z.NAMEPLATE:
                    o.push(a.intl.formatToPlainString(a.t["2keXky"], { itemName: e.name })), (c = !0);
            }
        if (c) {
            let e = o.join(", ").replace(/, ([^,]*)$/, " & $1");
            return a.intl.formatToPlainString(a.t.Ofrqj6, { joinedItems: e });
        }
        let s = o.join(" & ");
        return a.intl.formatToPlainString(a.t.Ofrqj6, { joinedItems: s });
    },
    o = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = arguments.length > 2 ? arguments[2] : void 0;
        return (0, r.useMemo)(() => {
            if (null != n)
                return 3 === n
                    ? a.intl.string(a.t.QUjmjp)
                    : 7 === n
                      ? a.intl.string(a.t.yPxJA2)
                      : a.intl.string(a.t["o+VpXZ"]);
            if (null != e && null != e.summary && "" !== e.summary) {
                if (e.type === i.Z.BUNDLE && e.summary.includes("{joinedItems}")) {
                    let n = l(e, t);
                    return e.summary.replace("{joinedItems}", n);
                }
                return e.summary;
            }
            switch (null == e ? void 0 : e.type) {
                case i.Z.AVATAR_DECORATION:
                    return a.intl.string(a.t["3lv7q2"]);
                case i.Z.PROFILE_EFFECT:
                    return a.intl.string(a.t.VhJL72);
                case i.Z.NAMEPLATE:
                    return a.intl.string(a.t.ik37EZ);
                case i.Z.BUNDLE:
                    return l(e, t);
                default:
                    return "";
            }
        }, [e, t, n]);
    };
