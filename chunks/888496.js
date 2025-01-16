n.d(t, {
    Dq: function () {
        return x;
    },
    hf: function () {
        return E;
    },
    li: function () {
        return f;
    },
    oP: function () {
        return h;
    },
    rJ: function () {
        return p;
    },
    rm: function () {
        return C;
    },
    ul: function () {
        return _;
    }
}),
    n(653041),
    n(47120);
var i = n(200651);
n(192379);
var r = n(120356),
    s = n.n(r),
    a = n(392711),
    l = n.n(a),
    o = n(481060),
    c = n(930153),
    d = n(275759),
    u = n(856651),
    m = n(388032),
    g = n(119028);
function h(e) {
    var t;
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
        r = [],
        s = Number(null !== (t = e[u.PC.REDDIT_TOTAL_KARMA]) && void 0 !== t ? t : -1),
        a = '1' === e[u.PC.REDDIT_GOLD],
        l = '1' === e[u.PC.REDDIT_MOD];
    return (
        s > -1 &&
            r.push(
                (0, i.jsx)(
                    T,
                    {
                        className: n,
                        count: s,
                        label: m.t.SbCNo6
                    },
                    u.PC.REDDIT_TOTAL_KARMA
                )
            ),
        a &&
            r.push(
                (0, i.jsx)(
                    I,
                    {
                        className: n,
                        label: m.intl.string(m.t['06rDHR'])
                    },
                    u.PC.REDDIT_GOLD
                )
            ),
        l &&
            r.push(
                (0, i.jsx)(
                    I,
                    {
                        className: n,
                        label: m.intl.string(m.t.oWM95O)
                    },
                    u.PC.REDDIT_MOD
                )
            ),
        r
    );
}
function p(e) {
    var t, n;
    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
        s = [],
        a = Number(null !== (t = e[u.PC.TWITTER_STATUSES_COUNT]) && void 0 !== t ? t : -1),
        l = Number(null !== (n = e[u.PC.TWITTER_FOLLOWERS_COUNT]) && void 0 !== n ? n : -1);
    return (
        a > -1 &&
            s.push(
                (0, i.jsx)(
                    T,
                    {
                        className: r,
                        count: a,
                        label: m.t.llwqqa
                    },
                    u.PC.TWITTER_STATUSES_COUNT
                )
            ),
        l > -1 &&
            s.push(
                (0, i.jsx)(
                    T,
                    {
                        className: r,
                        count: l,
                        label: m.t.LMNOUV
                    },
                    u.PC.TWITTER_FOLLOWERS_COUNT
                )
            ),
        s
    );
}
function x(e) {
    var t, r, s;
    let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
        l = [],
        o = Number(null !== (t = e[u.PC.STEAM_GAME_COUNT]) && void 0 !== t ? t : -1),
        c = Number(null !== (r = e[u.PC.STEAM_ITEM_COUNT_DOTA2]) && void 0 !== r ? r : -1),
        d = Number(null !== (s = e[u.PC.STEAM_ITEM_COUNT_TF2]) && void 0 !== s ? s : -1);
    return (
        o > -1 &&
            l.push(
                (0, i.jsx)(
                    T,
                    {
                        className: a,
                        count: o,
                        label: m.t.ppXMu7
                    },
                    u.PC.STEAM_GAME_COUNT
                )
            ),
        c > -1 &&
            l.push(
                (0, i.jsx)(
                    b,
                    {
                        className: a,
                        label: m.intl.format(m.t['Y88M5+'], { count: c }),
                        imageSrc: n(738535),
                        imageAlt: m.intl.string(m.t.HKUEZm)
                    },
                    u.PC.STEAM_ITEM_COUNT_DOTA2
                )
            ),
        d > -1 &&
            l.push(
                (0, i.jsx)(
                    b,
                    {
                        className: a,
                        label: m.intl.format(m.t['Y88M5+'], { count: d }),
                        imageSrc: n(80730),
                        imageAlt: m.intl.string(m.t.C8p1Sk)
                    },
                    u.PC.STEAM_ITEM_COUNT_TF2
                )
            ),
        l
    );
}
function f(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
        n = [];
    return (
        '1' === e[u.PC.PAYPAL_VERIFIED] &&
            n.push(
                (0, i.jsx)(
                    I,
                    {
                        className: s()(t, g.paypalVerifiedTag),
                        label: m.intl.string(m.t.IhXLy8)
                    },
                    u.PC.PAYPAL_VERIFIED
                )
            ),
        n
    );
}
function _(e) {
    var t;
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
        r = [],
        s = Number(null !== (t = e[u.PC.EBAY_POSITIVE_FEEDBACK_PERCENTAGE]) && void 0 !== t ? t : -1),
        a = '1' === e[u.PC.EBAY_TOP_RATED_SELLER];
    return (
        s > 0 &&
            r.push(
                (0, i.jsx)(
                    T,
                    {
                        className: n,
                        count: s,
                        label: m.t.YmL22d,
                        percent: !0
                    },
                    u.PC.EBAY_POSITIVE_FEEDBACK_PERCENTAGE
                )
            ),
        a &&
            r.push(
                (0, i.jsx)(
                    I,
                    {
                        className: n,
                        label: m.intl.string(m.t.TEEYwc)
                    },
                    u.PC.EBAY_TOP_RATED_SELLER
                )
            ),
        r
    );
}
function E(e) {
    var t, n, r;
    let s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
        a = [],
        l = '1' === e[u.PC.TIKTOK_VERIFIED],
        o = Number(null !== (t = e[u.PC.TIKTOK_FOLLOWER_COUNT]) && void 0 !== t ? t : -1),
        c = Number(null !== (n = e[u.PC.TIKTOK_FOLLOWING_COUNT]) && void 0 !== n ? n : -1),
        d = Number(null !== (r = e[u.PC.TIKTOK_LIKES_COUNT]) && void 0 !== r ? r : -1);
    return (
        o > -1 &&
            a.push(
                (0, i.jsx)(
                    T,
                    {
                        className: s,
                        count: o,
                        label: m.t['Mpm/BQ']
                    },
                    u.PC.TIKTOK_FOLLOWER_COUNT
                )
            ),
        c > -1 &&
            a.push(
                (0, i.jsx)(
                    T,
                    {
                        className: s,
                        count: c,
                        label: m.t.ftf12t
                    },
                    u.PC.TIKTOK_FOLLOWING_COUNT
                )
            ),
        d > -1 &&
            a.push(
                (0, i.jsx)(
                    T,
                    {
                        className: s,
                        count: d,
                        label: m.t.Qwhe5u
                    },
                    u.PC.TIKTOK_LIKES_COUNT
                )
            ),
        l &&
            a.push(
                (0, i.jsx)(
                    I,
                    {
                        className: s,
                        label: m.intl.string(m.t.QHHwRU)
                    },
                    u.PC.TIKTOK_VERIFIED
                )
            ),
        a
    );
}
function C(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0,
        r = [],
        s = Object.keys(e.metadata);
    if (null == e.application_metadata || 0 === Object.keys(e.application_metadata).length || 0 === s.length) return r;
    for (let a of l().sortBy(s, (t) => {
        var n, i;
        return null === (i = e.application_metadata) || void 0 === i ? void 0 : null === (n = i[t]) || void 0 === n ? void 0 : n.name;
    })) {
        let s = e.application_metadata[a];
        if (null == s) continue;
        let l = e.metadata[a];
        try {
            switch (s.type) {
                case u.xn.BOOLEAN_EQUAL:
                case u.xn.BOOLEAN_NOT_EQUAL:
                    ((s.type === u.xn.BOOLEAN_EQUAL && '1' === l) || (s.type === u.xn.BOOLEAN_NOT_EQUAL && '1' !== l)) &&
                        r.push(
                            (0, i.jsx)(
                                I,
                                {
                                    className: t,
                                    label: s.name
                                },
                                s.key
                            )
                        );
                    break;
                case u.xn.DATETIME_GREATER_THAN_EQUAL:
                case u.xn.DATETIME_LESS_THAN_EQUAL:
                    r.push(
                        (0, i.jsx)(
                            S,
                            {
                                className: t,
                                date: l,
                                locale: n,
                                label: s.name
                            },
                            s.key
                        )
                    );
                    break;
                case u.xn.INTEGER_EQUAL:
                case u.xn.INTEGER_NOT_EQUAL:
                case u.xn.INTEGER_GREATER_THAN_EQUAL:
                case u.xn.INTEGER_LESS_THAN_EQUAL:
                    r.push(
                        (0, i.jsx)(
                            T,
                            {
                                className: t,
                                count: Number(l),
                                label: s.name
                            },
                            s.key
                        )
                    );
            }
        } catch (e) {}
    }
    return r;
}
function T(e) {
    let t,
        { count: n, label: r, className: a, percent: l } = e,
        d = (0, c.$U)(n) + (l ? '%' : '');
    return (
        (t =
            'string' == typeof r
                ? m.intl.format(m.t.HLoinJ, {
                      name: r,
                      value: d
                  })
                : m.intl.format(r, { value: d })),
        (0, i.jsx)(o.Text, {
            className: s()(g.connectedAccountVanityMetadata, a),
            variant: 'text-xs/normal',
            color: 'interactive-active',
            children: t
        })
    );
}
function S(e) {
    let { date: t, locale: n, label: r, className: a } = e;
    return (0, i.jsx)(o.Text, {
        className: s()(g.connectedAccountVanityMetadata, a),
        variant: 'text-xs/normal',
        color: 'interactive-active',
        children: m.intl.format(m.t.HLoinJ, {
            value: (0, d.FI)(t, n),
            name: r
        })
    });
}
function b(e) {
    let { label: t, imageSrc: n, imageAlt: r, className: a } = e;
    return (0, i.jsxs)('div', {
        className: s()(g.connectedAccountVanityMetadata, g.connectedAccountVanityMetadataItem, a),
        children: [
            (0, i.jsx)(o.Tooltip, {
                text: r,
                children: (e) =>
                    (0, i.jsx)('img', {
                        ...e,
                        src: n,
                        alt: r,
                        className: g.connectedAccountVanityMetadataItemIcon
                    })
            }),
            (0, i.jsx)(o.Text, {
                variant: 'text-xs/normal',
                color: 'interactive-active',
                children: t
            })
        ]
    });
}
function I(e) {
    let { label: t, className: n } = e;
    return (0, i.jsx)(o.Text, {
        variant: 'text-xs/semibold',
        color: 'interactive-active',
        className: s()(g.connectedAccountVanityMetadata, g.connectedAccountVanityMetadataTag, n),
        children: t
    });
}
