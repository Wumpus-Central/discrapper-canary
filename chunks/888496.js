n.d(t, {
    Dq: () => g,
    hf: () => y,
    li: () => E,
    oP: () => m,
    rJ: () => h,
    rm: () => O,
    ul: () => b,
}),
    n(539854),
    n(388685);
var r = n(54381);
n(473749);
var i = n(120356),
    a = n.n(i),
    o = n(392711),
    s = n.n(o),
    l = n(28664),
    c = n(481060),
    u = n(930153),
    d = n(275759),
    f = n(856651),
    p = n(388032),
    _ = n(883337);
function m(e) {
    var t;
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
        i = [],
        a = Number(null != (t = e[f.PC.REDDIT_TOTAL_KARMA]) ? t : -1),
        o = "1" === e[f.PC.REDDIT_GOLD],
        s = "1" === e[f.PC.REDDIT_MOD];
    return (
        a > -1 &&
            i.push(
                (0, r.jsx)(
                    v,
                    {
                        className: n,
                        count: a,
                        label: p.t.SbCNox,
                    },
                    f.PC.REDDIT_TOTAL_KARMA,
                ),
            ),
        o &&
            i.push(
                (0, r.jsx)(
                    T,
                    {
                        className: n,
                        label: p.intl.string(p.t["06rDHU"]),
                    },
                    f.PC.REDDIT_GOLD,
                ),
            ),
        s &&
            i.push(
                (0, r.jsx)(
                    T,
                    {
                        className: n,
                        label: p.intl.string(p.t.oWM95M),
                    },
                    f.PC.REDDIT_MOD,
                ),
            ),
        i
    );
}
function h(e) {
    var t, n;
    let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
        a = [],
        o = Number(null != (t = e[f.PC.TWITTER_STATUSES_COUNT]) ? t : -1),
        s = Number(null != (n = e[f.PC.TWITTER_FOLLOWERS_COUNT]) ? n : -1);
    return (
        o > -1 &&
            a.push(
                (0, r.jsx)(
                    v,
                    {
                        className: i,
                        count: o,
                        label: p.t.llwqqe,
                    },
                    f.PC.TWITTER_STATUSES_COUNT,
                ),
            ),
        s > -1 &&
            a.push(
                (0, r.jsx)(
                    v,
                    {
                        className: i,
                        count: s,
                        label: p.t.LMNOUQ,
                    },
                    f.PC.TWITTER_FOLLOWERS_COUNT,
                ),
            ),
        a
    );
}
function g(e) {
    var t, i, a;
    let o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
        s = [],
        l = Number(null != (t = e[f.PC.STEAM_GAME_COUNT]) ? t : -1),
        c = Number(null != (i = e[f.PC.STEAM_ITEM_COUNT_DOTA2]) ? i : -1),
        u = Number(null != (a = e[f.PC.STEAM_ITEM_COUNT_TF2]) ? a : -1);
    return (
        l > -1 &&
            s.push(
                (0, r.jsx)(
                    v,
                    {
                        className: o,
                        count: l,
                        label: p.t["ppXMu/"],
                    },
                    f.PC.STEAM_GAME_COUNT,
                ),
            ),
        c > -1 &&
            s.push(
                (0, r.jsx)(
                    I,
                    {
                        className: o,
                        label: p.intl.format(p.t.Y88M5x, { count: c }),
                        imageSrc: n(738535),
                        imageAlt: p.intl.string(p.t.HKUEZo),
                    },
                    f.PC.STEAM_ITEM_COUNT_DOTA2,
                ),
            ),
        u > -1 &&
            s.push(
                (0, r.jsx)(
                    I,
                    {
                        className: o,
                        label: p.intl.format(p.t.Y88M5x, { count: u }),
                        imageSrc: n(80730),
                        imageAlt: p.intl.string(p.t.C8p1Sh),
                    },
                    f.PC.STEAM_ITEM_COUNT_TF2,
                ),
            ),
        s
    );
}
function E(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
        n = [];
    return (
        "1" === e[f.PC.PAYPAL_VERIFIED] &&
            n.push(
                (0, r.jsx)(
                    T,
                    {
                        className: a()(t, _.paypalVerifiedTag),
                        label: p.intl.string(p.t.IhXLyx),
                    },
                    f.PC.PAYPAL_VERIFIED,
                ),
            ),
        n
    );
}
function b(e) {
    var t;
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
        i = [],
        a = Number(null != (t = e[f.PC.EBAY_POSITIVE_FEEDBACK_PERCENTAGE]) ? t : -1),
        o = "1" === e[f.PC.EBAY_TOP_RATED_SELLER];
    return (
        a > 0 &&
            i.push(
                (0, r.jsx)(
                    v,
                    {
                        className: n,
                        count: a,
                        label: p.t.YmL22d,
                        percent: !0,
                    },
                    f.PC.EBAY_POSITIVE_FEEDBACK_PERCENTAGE,
                ),
            ),
        o &&
            i.push(
                (0, r.jsx)(
                    T,
                    {
                        className: n,
                        label: p.intl.string(p.t.TEEYwa),
                    },
                    f.PC.EBAY_TOP_RATED_SELLER,
                ),
            ),
        i
    );
}
function y(e) {
    var t, n, i;
    let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
        o = [],
        s = "1" === e[f.PC.TIKTOK_VERIFIED],
        l = Number(null != (t = e[f.PC.TIKTOK_FOLLOWER_COUNT]) ? t : -1),
        c = Number(null != (n = e[f.PC.TIKTOK_FOLLOWING_COUNT]) ? n : -1),
        u = Number(null != (i = e[f.PC.TIKTOK_LIKES_COUNT]) ? i : -1);
    return (
        l > -1 &&
            o.push(
                (0, r.jsx)(
                    v,
                    {
                        className: a,
                        count: l,
                        label: p.t["Mpm/Bc"],
                    },
                    f.PC.TIKTOK_FOLLOWER_COUNT,
                ),
            ),
        c > -1 &&
            o.push(
                (0, r.jsx)(
                    v,
                    {
                        className: a,
                        count: c,
                        label: p.t.ftf12v,
                    },
                    f.PC.TIKTOK_FOLLOWING_COUNT,
                ),
            ),
        u > -1 &&
            o.push(
                (0, r.jsx)(
                    v,
                    {
                        className: a,
                        count: u,
                        label: p.t.Qwhe5j,
                    },
                    f.PC.TIKTOK_LIKES_COUNT,
                ),
            ),
        s &&
            o.push(
                (0, r.jsx)(
                    T,
                    {
                        className: a,
                        label: p.intl.string(p.t.QHHwRR),
                    },
                    f.PC.TIKTOK_VERIFIED,
                ),
            ),
        o
    );
}
function O(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
        n = [],
        i = Object.keys(e.metadata);
    if (null == e.application_metadata || 0 === Object.keys(e.application_metadata).length || 0 === i.length) return n;
    for (let a of s().sortBy(i, (t) => {
        var n, r;
        return null == (r = e.application_metadata) || null == (n = r[t]) ? void 0 : n.name;
    })) {
        let i = e.application_metadata[a];
        if (null == i) continue;
        let o = e.metadata[a];
        try {
            switch (i.type) {
                case f.xn.BOOLEAN_EQUAL:
                case f.xn.BOOLEAN_NOT_EQUAL:
                    ((i.type === f.xn.BOOLEAN_EQUAL && "1" === o) ||
                        (i.type === f.xn.BOOLEAN_NOT_EQUAL && "1" !== o)) &&
                        n.push((0, r.jsx)(T, { label: i.name }, i.key));
                    break;
                case f.xn.DATETIME_GREATER_THAN_EQUAL:
                case f.xn.DATETIME_LESS_THAN_EQUAL:
                    n.push(
                        (0, r.jsx)(
                            S,
                            {
                                date: o,
                                locale: t,
                                label: i.name,
                            },
                            i.key,
                        ),
                    );
                    break;
                case f.xn.INTEGER_EQUAL:
                case f.xn.INTEGER_NOT_EQUAL:
                case f.xn.INTEGER_GREATER_THAN_EQUAL:
                case f.xn.INTEGER_LESS_THAN_EQUAL:
                    n.push(
                        (0, r.jsx)(
                            v,
                            {
                                count: Number(o),
                                label: i.name,
                            },
                            i.key,
                        ),
                    );
            }
        } catch (e) {}
    }
    return n;
}
function v(e) {
    let t,
        { count: n, label: i, className: o, percent: s } = e,
        l = (0, u.$U)(n) + (s ? "%" : "");
    return (
        (t =
            "string" == typeof i
                ? p.intl.format(p.t.HLoinF, {
                      name: i,
                      value: l,
                  })
                : p.intl.format(i, { value: l })),
        (0, r.jsx)(c.Text, {
            className: a()(_.connectedAccountVanityMetadata, o),
            variant: "text-xxs/normal",
            color: "text-default",
            children: t,
        })
    );
}
function S(e) {
    let { date: t, locale: n, label: i, className: o } = e;
    return (0, r.jsx)(c.Text, {
        className: a()(_.connectedAccountVanityMetadata, o),
        variant: "text-xxs/normal",
        color: "text-default",
        children: p.intl.format(p.t.HLoinF, {
            value: (0, d.FI)(t, n),
            name: i,
        }),
    });
}
function I(e) {
    let { label: t, imageSrc: n, imageAlt: i, className: o } = e;
    return (0, r.jsxs)("div", {
        className: a()(_.connectedAccountVanityMetadata, _.connectedAccountVanityMetadataItem, o),
        children: [
            (0, r.jsx)(l.u, {
                __unsupportedReactNodeAsText: i,
                children: (0, r.jsx)("img", {
                    src: n,
                    alt: i,
                    className: _.connectedAccountVanityMetadataItemIcon,
                }),
            }),
            (0, r.jsx)(c.Text, {
                variant: "text-xxs/normal",
                color: "text-default",
                children: t,
            }),
        ],
    });
}
function T(e) {
    let { label: t, className: n } = e;
    return (0, r.jsx)(c.Text, {
        variant: "text-xxs/normal",
        color: "text-default",
        className: a()(_.connectedAccountVanityMetadata, _.connectedAccountVanityMetadataTag, n),
        children: t,
    });
}
