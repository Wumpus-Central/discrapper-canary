t.d(n, {
    Dq: function () {
        return N;
    },
    hf: function () {
        return h;
    },
    li: function () {
        return x;
    },
    oP: function () {
        return E;
    },
    rJ: function () {
        return A;
    },
    rm: function () {
        return v;
    },
    ul: function () {
        return _;
    }
}),
    t(653041),
    t(47120);
var c = t(200651);
t(192379);
var l = t(120356),
    a = t.n(l),
    o = t(392711),
    i = t.n(o),
    r = t(481060),
    s = t(930153),
    u = t(275759),
    d = t(856651),
    T = t(388032),
    m = t(119028);
function E(e) {
    var n;
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
        l = [],
        a = Number(null !== (n = e[d.PC.REDDIT_TOTAL_KARMA]) && void 0 !== n ? n : -1),
        o = '1' === e[d.PC.REDDIT_GOLD],
        i = '1' === e[d.PC.REDDIT_MOD];
    return (
        a > -1 &&
            l.push(
                (0, c.jsx)(
                    p,
                    {
                        className: t,
                        count: a,
                        label: T.t.SbCNo6
                    },
                    d.PC.REDDIT_TOTAL_KARMA
                )
            ),
        o &&
            l.push(
                (0, c.jsx)(
                    O,
                    {
                        className: t,
                        label: T.intl.string(T.t['06rDHR'])
                    },
                    d.PC.REDDIT_GOLD
                )
            ),
        i &&
            l.push(
                (0, c.jsx)(
                    O,
                    {
                        className: t,
                        label: T.intl.string(T.t.oWM95O)
                    },
                    d.PC.REDDIT_MOD
                )
            ),
        l
    );
}
function A(e) {
    var n, t;
    let l = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
        a = [],
        o = Number(null !== (n = e[d.PC.TWITTER_STATUSES_COUNT]) && void 0 !== n ? n : -1),
        i = Number(null !== (t = e[d.PC.TWITTER_FOLLOWERS_COUNT]) && void 0 !== t ? t : -1);
    return (
        o > -1 &&
            a.push(
                (0, c.jsx)(
                    p,
                    {
                        className: l,
                        count: o,
                        label: T.t.llwqqa
                    },
                    d.PC.TWITTER_STATUSES_COUNT
                )
            ),
        i > -1 &&
            a.push(
                (0, c.jsx)(
                    p,
                    {
                        className: l,
                        count: i,
                        label: T.t.LMNOUV
                    },
                    d.PC.TWITTER_FOLLOWERS_COUNT
                )
            ),
        a
    );
}
function N(e) {
    var n, l, a;
    let o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
        i = [],
        r = Number(null !== (n = e[d.PC.STEAM_GAME_COUNT]) && void 0 !== n ? n : -1),
        s = Number(null !== (l = e[d.PC.STEAM_ITEM_COUNT_DOTA2]) && void 0 !== l ? l : -1),
        u = Number(null !== (a = e[d.PC.STEAM_ITEM_COUNT_TF2]) && void 0 !== a ? a : -1);
    return (
        r > -1 &&
            i.push(
                (0, c.jsx)(
                    p,
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
                (0, c.jsx)(
                    I,
                    {
                        className: o,
                        label: T.intl.format(T.t['Y88M5+'], { count: s }),
                        imageSrc: t(738535),
                        imageAlt: T.intl.string(T.t.HKUEZm)
                    },
                    d.PC.STEAM_ITEM_COUNT_DOTA2
                )
            ),
        u > -1 &&
            i.push(
                (0, c.jsx)(
                    I,
                    {
                        className: o,
                        label: T.intl.format(T.t['Y88M5+'], { count: u }),
                        imageSrc: t(80730),
                        imageAlt: T.intl.string(T.t.C8p1Sk)
                    },
                    d.PC.STEAM_ITEM_COUNT_TF2
                )
            ),
        i
    );
}
function x(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
        t = [];
    return (
        '1' === e[d.PC.PAYPAL_VERIFIED] &&
            t.push(
                (0, c.jsx)(
                    O,
                    {
                        className: a()(n, m.paypalVerifiedTag),
                        label: T.intl.string(T.t.IhXLy8)
                    },
                    d.PC.PAYPAL_VERIFIED
                )
            ),
        t
    );
}
function _(e) {
    var n;
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
        l = [],
        a = Number(null !== (n = e[d.PC.EBAY_POSITIVE_FEEDBACK_PERCENTAGE]) && void 0 !== n ? n : -1),
        o = '1' === e[d.PC.EBAY_TOP_RATED_SELLER];
    return (
        a > 0 &&
            l.push(
                (0, c.jsx)(
                    p,
                    {
                        className: t,
                        count: a,
                        label: T.t.YmL22d,
                        percent: !0
                    },
                    d.PC.EBAY_POSITIVE_FEEDBACK_PERCENTAGE
                )
            ),
        o &&
            l.push(
                (0, c.jsx)(
                    O,
                    {
                        className: t,
                        label: T.intl.string(T.t.TEEYwc)
                    },
                    d.PC.EBAY_TOP_RATED_SELLER
                )
            ),
        l
    );
}
function h(e) {
    var n, t, l;
    let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
        o = [],
        i = '1' === e[d.PC.TIKTOK_VERIFIED],
        r = Number(null !== (n = e[d.PC.TIKTOK_FOLLOWER_COUNT]) && void 0 !== n ? n : -1),
        s = Number(null !== (t = e[d.PC.TIKTOK_FOLLOWING_COUNT]) && void 0 !== t ? t : -1),
        u = Number(null !== (l = e[d.PC.TIKTOK_LIKES_COUNT]) && void 0 !== l ? l : -1);
    return (
        r > -1 &&
            o.push(
                (0, c.jsx)(
                    p,
                    {
                        className: a,
                        count: r,
                        label: T.t['Mpm/BQ']
                    },
                    d.PC.TIKTOK_FOLLOWER_COUNT
                )
            ),
        s > -1 &&
            o.push(
                (0, c.jsx)(
                    p,
                    {
                        className: a,
                        count: s,
                        label: T.t.ftf12t
                    },
                    d.PC.TIKTOK_FOLLOWING_COUNT
                )
            ),
        u > -1 &&
            o.push(
                (0, c.jsx)(
                    p,
                    {
                        className: a,
                        count: u,
                        label: T.t.Qwhe5u
                    },
                    d.PC.TIKTOK_LIKES_COUNT
                )
            ),
        i &&
            o.push(
                (0, c.jsx)(
                    O,
                    {
                        className: a,
                        label: T.intl.string(T.t.QHHwRU)
                    },
                    d.PC.TIKTOK_VERIFIED
                )
            ),
        o
    );
}
function v(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
        t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0,
        l = [],
        a = Object.keys(e.metadata);
    if (null == e.application_metadata || 0 === Object.keys(e.application_metadata).length || 0 === a.length) return l;
    for (let o of i().sortBy(a, (n) => {
        var t, c;
        return null === (c = e.application_metadata) || void 0 === c ? void 0 : null === (t = c[n]) || void 0 === t ? void 0 : t.name;
    })) {
        let a = e.application_metadata[o];
        if (null == a) continue;
        let i = e.metadata[o];
        try {
            switch (a.type) {
                case d.xn.BOOLEAN_EQUAL:
                case d.xn.BOOLEAN_NOT_EQUAL:
                    ((a.type === d.xn.BOOLEAN_EQUAL && '1' === i) || (a.type === d.xn.BOOLEAN_NOT_EQUAL && '1' !== i)) &&
                        l.push(
                            (0, c.jsx)(
                                O,
                                {
                                    className: n,
                                    label: a.name
                                },
                                a.key
                            )
                        );
                    break;
                case d.xn.DATETIME_GREATER_THAN_EQUAL:
                case d.xn.DATETIME_LESS_THAN_EQUAL:
                    l.push(
                        (0, c.jsx)(
                            C,
                            {
                                className: n,
                                date: i,
                                locale: t,
                                label: a.name
                            },
                            a.key
                        )
                    );
                    break;
                case d.xn.INTEGER_EQUAL:
                case d.xn.INTEGER_NOT_EQUAL:
                case d.xn.INTEGER_GREATER_THAN_EQUAL:
                case d.xn.INTEGER_LESS_THAN_EQUAL:
                    l.push(
                        (0, c.jsx)(
                            p,
                            {
                                className: n,
                                count: Number(i),
                                label: a.name
                            },
                            a.key
                        )
                    );
            }
        } catch (e) {}
    }
    return l;
}
function p(e) {
    let n,
        { count: t, label: l, className: o, percent: i } = e,
        u = (0, s.$U)(t) + (i ? '%' : '');
    return (
        (n =
            'string' == typeof l
                ? T.intl.format(T.t.HLoinJ, {
                      name: l,
                      value: u
                  })
                : T.intl.format(l, { value: u })),
        (0, c.jsx)(r.Text, {
            className: a()(m.connectedAccountVanityMetadata, o),
            variant: 'text-xs/normal',
            color: 'interactive-active',
            children: n
        })
    );
}
function C(e) {
    let { date: n, locale: t, label: l, className: o } = e;
    return (0, c.jsx)(r.Text, {
        className: a()(m.connectedAccountVanityMetadata, o),
        variant: 'text-xs/normal',
        color: 'interactive-active',
        children: T.intl.format(T.t.HLoinJ, {
            value: (0, u.FI)(n, t),
            name: l
        })
    });
}
function I(e) {
    let { label: n, imageSrc: t, imageAlt: l, className: o } = e;
    return (0, c.jsxs)('div', {
        className: a()(m.connectedAccountVanityMetadata, m.connectedAccountVanityMetadataItem, o),
        children: [
            (0, c.jsx)(r.Tooltip, {
                text: l,
                children: (e) =>
                    (0, c.jsx)('img', {
                        ...e,
                        src: t,
                        alt: l,
                        className: m.connectedAccountVanityMetadataItemIcon
                    })
            }),
            (0, c.jsx)(r.Text, {
                variant: 'text-xs/normal',
                color: 'interactive-active',
                children: n
            })
        ]
    });
}
function O(e) {
    let { label: n, className: t } = e;
    return (0, c.jsx)(r.Text, {
        variant: 'text-xs/semibold',
        color: 'interactive-active',
        className: a()(m.connectedAccountVanityMetadata, m.connectedAccountVanityMetadataTag, t),
        children: n
    });
}
