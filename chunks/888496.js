n.d(t, {
    Dq: () => p,
    hf: () => I,
    li: () => m,
    oP: () => A,
    rJ: () => _,
    rm: () => O,
    ul: () => v
}),
    n(653041),
    n(47120);
var l = n(200651);
n(192379);
var a = n(120356),
    c = n.n(a),
    o = n(392711),
    i = n.n(o),
    r = n(481060),
    s = n(930153),
    u = n(275759),
    d = n(856651),
    T = n(388032),
    E = n(119028);
function A(e) {
    var t;
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
        a = [],
        c = Number(null !== (t = e[d.PC.REDDIT_TOTAL_KARMA]) && void 0 !== t ? t : -1),
        o = '1' === e[d.PC.REDDIT_GOLD],
        i = '1' === e[d.PC.REDDIT_MOD];
    return (
        c > -1 &&
            a.push(
                (0, l.jsx)(
                    N,
                    {
                        className: n,
                        count: c,
                        label: T.t.SbCNo6
                    },
                    d.PC.REDDIT_TOTAL_KARMA
                )
            ),
        o &&
            a.push(
                (0, l.jsx)(
                    C,
                    {
                        className: n,
                        label: T.intl.string(T.t['06rDHR'])
                    },
                    d.PC.REDDIT_GOLD
                )
            ),
        i &&
            a.push(
                (0, l.jsx)(
                    C,
                    {
                        className: n,
                        label: T.intl.string(T.t.oWM95O)
                    },
                    d.PC.REDDIT_MOD
                )
            ),
        a
    );
}
function _(e) {
    var t, n;
    let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
        c = [],
        o = Number(null !== (t = e[d.PC.TWITTER_STATUSES_COUNT]) && void 0 !== t ? t : -1),
        i = Number(null !== (n = e[d.PC.TWITTER_FOLLOWERS_COUNT]) && void 0 !== n ? n : -1);
    return (
        o > -1 &&
            c.push(
                (0, l.jsx)(
                    N,
                    {
                        className: a,
                        count: o,
                        label: T.t.llwqqa
                    },
                    d.PC.TWITTER_STATUSES_COUNT
                )
            ),
        i > -1 &&
            c.push(
                (0, l.jsx)(
                    N,
                    {
                        className: a,
                        count: i,
                        label: T.t.LMNOUV
                    },
                    d.PC.TWITTER_FOLLOWERS_COUNT
                )
            ),
        c
    );
}
function p(e) {
    var t, a, c;
    let o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
        i = [],
        r = Number(null !== (t = e[d.PC.STEAM_GAME_COUNT]) && void 0 !== t ? t : -1),
        s = Number(null !== (a = e[d.PC.STEAM_ITEM_COUNT_DOTA2]) && void 0 !== a ? a : -1),
        u = Number(null !== (c = e[d.PC.STEAM_ITEM_COUNT_TF2]) && void 0 !== c ? c : -1);
    return (
        r > -1 &&
            i.push(
                (0, l.jsx)(
                    N,
                    {
                        className: o,
                        count: r,
                        label: T.t.ppXMu7
                    },
                    d.PC.STEAM_GAME_COUNT
                )
            ),
        s > -1 &&
            i.push(
                (0, l.jsx)(
                    x,
                    {
                        className: o,
                        label: T.intl.format(T.t['Y88M5+'], { count: s }),
                        imageSrc: n(738535),
                        imageAlt: T.intl.string(T.t.HKUEZm)
                    },
                    d.PC.STEAM_ITEM_COUNT_DOTA2
                )
            ),
        u > -1 &&
            i.push(
                (0, l.jsx)(
                    x,
                    {
                        className: o,
                        label: T.intl.format(T.t['Y88M5+'], { count: u }),
                        imageSrc: n(80730),
                        imageAlt: T.intl.string(T.t.C8p1Sk)
                    },
                    d.PC.STEAM_ITEM_COUNT_TF2
                )
            ),
        i
    );
}
function m(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
        n = [];
    return (
        '1' === e[d.PC.PAYPAL_VERIFIED] &&
            n.push(
                (0, l.jsx)(
                    C,
                    {
                        className: c()(t, E.paypalVerifiedTag),
                        label: T.intl.string(T.t.IhXLy8)
                    },
                    d.PC.PAYPAL_VERIFIED
                )
            ),
        n
    );
}
function v(e) {
    var t;
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
        a = [],
        c = Number(null !== (t = e[d.PC.EBAY_POSITIVE_FEEDBACK_PERCENTAGE]) && void 0 !== t ? t : -1),
        o = '1' === e[d.PC.EBAY_TOP_RATED_SELLER];
    return (
        c > 0 &&
            a.push(
                (0, l.jsx)(
                    N,
                    {
                        className: n,
                        count: c,
                        label: T.t.YmL22d,
                        percent: !0
                    },
                    d.PC.EBAY_POSITIVE_FEEDBACK_PERCENTAGE
                )
            ),
        o &&
            a.push(
                (0, l.jsx)(
                    C,
                    {
                        className: n,
                        label: T.intl.string(T.t.TEEYwc)
                    },
                    d.PC.EBAY_TOP_RATED_SELLER
                )
            ),
        a
    );
}
function I(e) {
    var t, n, a;
    let c = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
        o = [],
        i = '1' === e[d.PC.TIKTOK_VERIFIED],
        r = Number(null !== (t = e[d.PC.TIKTOK_FOLLOWER_COUNT]) && void 0 !== t ? t : -1),
        s = Number(null !== (n = e[d.PC.TIKTOK_FOLLOWING_COUNT]) && void 0 !== n ? n : -1),
        u = Number(null !== (a = e[d.PC.TIKTOK_LIKES_COUNT]) && void 0 !== a ? a : -1);
    return (
        r > -1 &&
            o.push(
                (0, l.jsx)(
                    N,
                    {
                        className: c,
                        count: r,
                        label: T.t['Mpm/BQ']
                    },
                    d.PC.TIKTOK_FOLLOWER_COUNT
                )
            ),
        s > -1 &&
            o.push(
                (0, l.jsx)(
                    N,
                    {
                        className: c,
                        count: s,
                        label: T.t.ftf12t
                    },
                    d.PC.TIKTOK_FOLLOWING_COUNT
                )
            ),
        u > -1 &&
            o.push(
                (0, l.jsx)(
                    N,
                    {
                        className: c,
                        count: u,
                        label: T.t.Qwhe5u
                    },
                    d.PC.TIKTOK_LIKES_COUNT
                )
            ),
        i &&
            o.push(
                (0, l.jsx)(
                    C,
                    {
                        className: c,
                        label: T.intl.string(T.t.QHHwRU)
                    },
                    d.PC.TIKTOK_VERIFIED
                )
            ),
        o
    );
}
function O(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0,
        a = [],
        c = Object.keys(e.metadata);
    if (null == e.application_metadata || 0 === Object.keys(e.application_metadata).length || 0 === c.length) return a;
    for (let o of i().sortBy(c, (t) => {
        var n, l;
        return null === (l = e.application_metadata) || void 0 === l ? void 0 : null === (n = l[t]) || void 0 === n ? void 0 : n.name;
    })) {
        let c = e.application_metadata[o];
        if (null == c) continue;
        let i = e.metadata[o];
        try {
            switch (c.type) {
                case d.xn.BOOLEAN_EQUAL:
                case d.xn.BOOLEAN_NOT_EQUAL:
                    ((c.type === d.xn.BOOLEAN_EQUAL && '1' === i) || (c.type === d.xn.BOOLEAN_NOT_EQUAL && '1' !== i)) &&
                        a.push(
                            (0, l.jsx)(
                                C,
                                {
                                    className: t,
                                    label: c.name
                                },
                                c.key
                            )
                        );
                    break;
                case d.xn.DATETIME_GREATER_THAN_EQUAL:
                case d.xn.DATETIME_LESS_THAN_EQUAL:
                    a.push(
                        (0, l.jsx)(
                            h,
                            {
                                className: t,
                                date: i,
                                locale: n,
                                label: c.name
                            },
                            c.key
                        )
                    );
                    break;
                case d.xn.INTEGER_EQUAL:
                case d.xn.INTEGER_NOT_EQUAL:
                case d.xn.INTEGER_GREATER_THAN_EQUAL:
                case d.xn.INTEGER_LESS_THAN_EQUAL:
                    a.push(
                        (0, l.jsx)(
                            N,
                            {
                                className: t,
                                count: Number(i),
                                label: c.name
                            },
                            c.key
                        )
                    );
            }
        } catch (e) {}
    }
    return a;
}
function N(e) {
    let t,
        { count: n, label: a, className: o, percent: i } = e,
        u = (0, s.$U)(n) + (i ? '%' : '');
    return (
        (t =
            'string' == typeof a
                ? T.intl.format(T.t.HLoinJ, {
                      name: a,
                      value: u
                  })
                : T.intl.format(a, { value: u })),
        (0, l.jsx)(r.Text, {
            className: c()(E.connectedAccountVanityMetadata, o),
            variant: 'text-xs/normal',
            color: 'interactive-active',
            children: t
        })
    );
}
function h(e) {
    let { date: t, locale: n, label: a, className: o } = e;
    return (0, l.jsx)(r.Text, {
        className: c()(E.connectedAccountVanityMetadata, o),
        variant: 'text-xs/normal',
        color: 'interactive-active',
        children: T.intl.format(T.t.HLoinJ, {
            value: (0, u.FI)(t, n),
            name: a
        })
    });
}
function x(e) {
    let { label: t, imageSrc: n, imageAlt: a, className: o } = e;
    return (0, l.jsxs)('div', {
        className: c()(E.connectedAccountVanityMetadata, E.connectedAccountVanityMetadataItem, o),
        children: [
            (0, l.jsx)(r.ua7, {
                text: a,
                children: (e) =>
                    (0, l.jsx)('img', {
                        ...e,
                        src: n,
                        alt: a,
                        className: E.connectedAccountVanityMetadataItemIcon
                    })
            }),
            (0, l.jsx)(r.Text, {
                variant: 'text-xs/normal',
                color: 'interactive-active',
                children: t
            })
        ]
    });
}
function C(e) {
    let { label: t, className: n } = e;
    return (0, l.jsx)(r.Text, {
        variant: 'text-xs/semibold',
        color: 'interactive-active',
        className: c()(E.connectedAccountVanityMetadata, E.connectedAccountVanityMetadataTag, n),
        children: t
    });
}
