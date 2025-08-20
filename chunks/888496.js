n.d(t, {
    Dq: () => y,
    hf: () => I,
    li: () => O,
    oP: () => E,
    rJ: () => b,
    rm: () => T,
    ul: () => v,
}),
    n(539854),
    n(388685);
var r = n(951288);
n(647438);
var i = n(120356),
    a = n.n(i),
    o = n(392711),
    s = n.n(o),
    l = n(481060),
    c = n(930153),
    u = n(275759),
    d = n(856651),
    f = n(388032),
    _ = n(402987);
function p(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function h(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                p(e, t, n[t]);
            });
    }
    return e;
}
function m(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function g(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : m(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function E(e) {
    var t;
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
        i = [],
        a = Number(null != (t = e[d.PC.REDDIT_TOTAL_KARMA]) ? t : -1),
        o = "1" === e[d.PC.REDDIT_GOLD],
        s = "1" === e[d.PC.REDDIT_MOD];
    return (
        a > -1 &&
            i.push(
                (0, r.jsx)(
                    S,
                    {
                        className: n,
                        count: a,
                        label: f.t.SbCNo6,
                    },
                    d.PC.REDDIT_TOTAL_KARMA,
                ),
            ),
        o &&
            i.push(
                (0, r.jsx)(
                    N,
                    {
                        className: n,
                        label: f.intl.string(f.t["06rDHR"]),
                    },
                    d.PC.REDDIT_GOLD,
                ),
            ),
        s &&
            i.push(
                (0, r.jsx)(
                    N,
                    {
                        className: n,
                        label: f.intl.string(f.t.oWM95O),
                    },
                    d.PC.REDDIT_MOD,
                ),
            ),
        i
    );
}
function b(e) {
    var t, n;
    let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
        a = [],
        o = Number(null != (t = e[d.PC.TWITTER_STATUSES_COUNT]) ? t : -1),
        s = Number(null != (n = e[d.PC.TWITTER_FOLLOWERS_COUNT]) ? n : -1);
    return (
        o > -1 &&
            a.push(
                (0, r.jsx)(
                    S,
                    {
                        className: i,
                        count: o,
                        label: f.t.llwqqa,
                    },
                    d.PC.TWITTER_STATUSES_COUNT,
                ),
            ),
        s > -1 &&
            a.push(
                (0, r.jsx)(
                    S,
                    {
                        className: i,
                        count: s,
                        label: f.t.LMNOUV,
                    },
                    d.PC.TWITTER_FOLLOWERS_COUNT,
                ),
            ),
        a
    );
}
function y(e) {
    var t, i, a;
    let o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
        s = [],
        l = Number(null != (t = e[d.PC.STEAM_GAME_COUNT]) ? t : -1),
        c = Number(null != (i = e[d.PC.STEAM_ITEM_COUNT_DOTA2]) ? i : -1),
        u = Number(null != (a = e[d.PC.STEAM_ITEM_COUNT_TF2]) ? a : -1);
    return (
        l > -1 &&
            s.push(
                (0, r.jsx)(
                    S,
                    {
                        className: o,
                        count: l,
                        label: f.t.ppXMu7,
                    },
                    d.PC.STEAM_GAME_COUNT,
                ),
            ),
        c > -1 &&
            s.push(
                (0, r.jsx)(
                    C,
                    {
                        className: o,
                        label: f.intl.format(f.t["Y88M5+"], { count: c }),
                        imageSrc: n(738535),
                        imageAlt: f.intl.string(f.t.HKUEZm),
                    },
                    d.PC.STEAM_ITEM_COUNT_DOTA2,
                ),
            ),
        u > -1 &&
            s.push(
                (0, r.jsx)(
                    C,
                    {
                        className: o,
                        label: f.intl.format(f.t["Y88M5+"], { count: u }),
                        imageSrc: n(80730),
                        imageAlt: f.intl.string(f.t.C8p1Sk),
                    },
                    d.PC.STEAM_ITEM_COUNT_TF2,
                ),
            ),
        s
    );
}
function O(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
        n = [];
    return (
        "1" === e[d.PC.PAYPAL_VERIFIED] &&
            n.push(
                (0, r.jsx)(
                    N,
                    {
                        className: a()(t, _.paypalVerifiedTag),
                        label: f.intl.string(f.t.IhXLy8),
                    },
                    d.PC.PAYPAL_VERIFIED,
                ),
            ),
        n
    );
}
function v(e) {
    var t;
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
        i = [],
        a = Number(null != (t = e[d.PC.EBAY_POSITIVE_FEEDBACK_PERCENTAGE]) ? t : -1),
        o = "1" === e[d.PC.EBAY_TOP_RATED_SELLER];
    return (
        a > 0 &&
            i.push(
                (0, r.jsx)(
                    S,
                    {
                        className: n,
                        count: a,
                        label: f.t.YmL22d,
                        percent: !0,
                    },
                    d.PC.EBAY_POSITIVE_FEEDBACK_PERCENTAGE,
                ),
            ),
        o &&
            i.push(
                (0, r.jsx)(
                    N,
                    {
                        className: n,
                        label: f.intl.string(f.t.TEEYwc),
                    },
                    d.PC.EBAY_TOP_RATED_SELLER,
                ),
            ),
        i
    );
}
function I(e) {
    var t, n, i;
    let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
        o = [],
        s = "1" === e[d.PC.TIKTOK_VERIFIED],
        l = Number(null != (t = e[d.PC.TIKTOK_FOLLOWER_COUNT]) ? t : -1),
        c = Number(null != (n = e[d.PC.TIKTOK_FOLLOWING_COUNT]) ? n : -1),
        u = Number(null != (i = e[d.PC.TIKTOK_LIKES_COUNT]) ? i : -1);
    return (
        l > -1 &&
            o.push(
                (0, r.jsx)(
                    S,
                    {
                        className: a,
                        count: l,
                        label: f.t["Mpm/BQ"],
                    },
                    d.PC.TIKTOK_FOLLOWER_COUNT,
                ),
            ),
        c > -1 &&
            o.push(
                (0, r.jsx)(
                    S,
                    {
                        className: a,
                        count: c,
                        label: f.t.ftf12t,
                    },
                    d.PC.TIKTOK_FOLLOWING_COUNT,
                ),
            ),
        u > -1 &&
            o.push(
                (0, r.jsx)(
                    S,
                    {
                        className: a,
                        count: u,
                        label: f.t.Qwhe5u,
                    },
                    d.PC.TIKTOK_LIKES_COUNT,
                ),
            ),
        s &&
            o.push(
                (0, r.jsx)(
                    N,
                    {
                        className: a,
                        label: f.intl.string(f.t.QHHwRU),
                    },
                    d.PC.TIKTOK_VERIFIED,
                ),
            ),
        o
    );
}
function T(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0,
        i = [],
        a = Object.keys(e.metadata);
    if (null == e.application_metadata || 0 === Object.keys(e.application_metadata).length || 0 === a.length) return i;
    for (let o of s().sortBy(a, (t) => {
        var n, r;
        return null == (r = e.application_metadata) || null == (n = r[t]) ? void 0 : n.name;
    })) {
        let a = e.application_metadata[o];
        if (null == a) continue;
        let s = e.metadata[o];
        try {
            switch (a.type) {
                case d.xn.BOOLEAN_EQUAL:
                case d.xn.BOOLEAN_NOT_EQUAL:
                    ((a.type === d.xn.BOOLEAN_EQUAL && "1" === s) ||
                        (a.type === d.xn.BOOLEAN_NOT_EQUAL && "1" !== s)) &&
                        i.push(
                            (0, r.jsx)(
                                N,
                                {
                                    className: t,
                                    label: a.name,
                                },
                                a.key,
                            ),
                        );
                    break;
                case d.xn.DATETIME_GREATER_THAN_EQUAL:
                case d.xn.DATETIME_LESS_THAN_EQUAL:
                    i.push(
                        (0, r.jsx)(
                            A,
                            {
                                className: t,
                                date: s,
                                locale: n,
                                label: a.name,
                            },
                            a.key,
                        ),
                    );
                    break;
                case d.xn.INTEGER_EQUAL:
                case d.xn.INTEGER_NOT_EQUAL:
                case d.xn.INTEGER_GREATER_THAN_EQUAL:
                case d.xn.INTEGER_LESS_THAN_EQUAL:
                    i.push(
                        (0, r.jsx)(
                            S,
                            {
                                className: t,
                                count: Number(s),
                                label: a.name,
                            },
                            a.key,
                        ),
                    );
            }
        } catch (e) {}
    }
    return i;
}
function S(e) {
    let t,
        { count: n, label: i, className: o, percent: s } = e,
        u = (0, c.$U)(n) + (s ? "%" : "");
    return (
        (t =
            "string" == typeof i
                ? f.intl.format(f.t.HLoinJ, {
                      name: i,
                      value: u,
                  })
                : f.intl.format(i, { value: u })),
        (0, r.jsx)(l.Text, {
            className: a()(_.connectedAccountVanityMetadata, o),
            variant: "text-xs/normal",
            color: "interactive-active",
            children: t,
        })
    );
}
function A(e) {
    let { date: t, locale: n, label: i, className: o } = e;
    return (0, r.jsx)(l.Text, {
        className: a()(_.connectedAccountVanityMetadata, o),
        variant: "text-xs/normal",
        color: "interactive-active",
        children: f.intl.format(f.t.HLoinJ, {
            value: (0, u.FI)(t, n),
            name: i,
        }),
    });
}
function C(e) {
    let { label: t, imageSrc: n, imageAlt: i, className: o } = e;
    return (0, r.jsxs)("div", {
        className: a()(_.connectedAccountVanityMetadata, _.connectedAccountVanityMetadataItem, o),
        children: [
            (0, r.jsx)(l.ua7, {
                text: i,
                children: (e) =>
                    (0, r.jsx)(
                        "img",
                        g(h({}, e), {
                            src: n,
                            alt: i,
                            className: _.connectedAccountVanityMetadataItemIcon,
                        }),
                    ),
            }),
            (0, r.jsx)(l.Text, {
                variant: "text-xs/normal",
                color: "interactive-active",
                children: t,
            }),
        ],
    });
}
function N(e) {
    let { label: t, className: n } = e;
    return (0, r.jsx)(l.Text, {
        variant: "text-xs/semibold",
        color: "interactive-active",
        className: a()(_.connectedAccountVanityMetadata, _.connectedAccountVanityMetadataTag, n),
        children: t,
    });
}
