n.d(t, {
    Dq: () => m,
    hf: () => _,
    li: () => A,
    oP: () => T,
    rJ: () => E,
    rm: () => b,
    ul: () => v
}),
    n(653041),
    n(47120);
var r = n(200651);
n(192379);
var c = n(120356),
    l = n.n(c),
    a = n(392711),
    o = n.n(a),
    i = n(481060),
    s = n(930153),
    u = n(275759),
    d = n(856651),
    p = n(388032),
    O = n(738581);
function T(e) {
    var t;
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
        c = [],
        l = Number(null !== (t = e[d.PC.REDDIT_TOTAL_KARMA]) && void 0 !== t ? t : -1),
        a = '1' === e[d.PC.REDDIT_GOLD],
        o = '1' === e[d.PC.REDDIT_MOD];
    return (
        l > -1 &&
            c.push(
                (0, r.jsx)(
                    N,
                    {
                        className: n,
                        count: l,
                        label: p.t.SbCNo6
                    },
                    d.PC.REDDIT_TOTAL_KARMA
                )
            ),
        a &&
            c.push(
                (0, r.jsx)(
                    y,
                    {
                        className: n,
                        label: p.NW.string(p.t['06rDHR'])
                    },
                    d.PC.REDDIT_GOLD
                )
            ),
        o &&
            c.push(
                (0, r.jsx)(
                    y,
                    {
                        className: n,
                        label: p.NW.string(p.t.oWM95O)
                    },
                    d.PC.REDDIT_MOD
                )
            ),
        c
    );
}
function E(e) {
    var t, n;
    let c = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
        l = [],
        a = Number(null !== (t = e[d.PC.TWITTER_STATUSES_COUNT]) && void 0 !== t ? t : -1),
        o = Number(null !== (n = e[d.PC.TWITTER_FOLLOWERS_COUNT]) && void 0 !== n ? n : -1);
    return (
        a > -1 &&
            l.push(
                (0, r.jsx)(
                    N,
                    {
                        className: c,
                        count: a,
                        label: p.t.llwqqa
                    },
                    d.PC.TWITTER_STATUSES_COUNT
                )
            ),
        o > -1 &&
            l.push(
                (0, r.jsx)(
                    N,
                    {
                        className: c,
                        count: o,
                        label: p.t.LMNOUV
                    },
                    d.PC.TWITTER_FOLLOWERS_COUNT
                )
            ),
        l
    );
}
function m(e) {
    var t, c, l;
    let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
        o = [],
        i = Number(null !== (t = e[d.PC.STEAM_GAME_COUNT]) && void 0 !== t ? t : -1),
        s = Number(null !== (c = e[d.PC.STEAM_ITEM_COUNT_DOTA2]) && void 0 !== c ? c : -1),
        u = Number(null !== (l = e[d.PC.STEAM_ITEM_COUNT_TF2]) && void 0 !== l ? l : -1);
    return (
        i > -1 &&
            o.push(
                (0, r.jsx)(
                    N,
                    {
                        className: a,
                        count: i,
                        label: p.t.ppXMu7
                    },
                    d.PC.STEAM_GAME_COUNT
                )
            ),
        s > -1 &&
            o.push(
                (0, r.jsx)(
                    f,
                    {
                        className: a,
                        label: p.NW.format(p.t['Y88M5+'], { count: s }),
                        imageSrc: n(738535),
                        imageAlt: p.NW.string(p.t.HKUEZm)
                    },
                    d.PC.STEAM_ITEM_COUNT_DOTA2
                )
            ),
        u > -1 &&
            o.push(
                (0, r.jsx)(
                    f,
                    {
                        className: a,
                        label: p.NW.format(p.t['Y88M5+'], { count: u }),
                        imageSrc: n(80730),
                        imageAlt: p.NW.string(p.t.C8p1Sk)
                    },
                    d.PC.STEAM_ITEM_COUNT_TF2
                )
            ),
        o
    );
}
function A(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
        n = [];
    return (
        '1' === e[d.PC.PAYPAL_VERIFIED] &&
            n.push(
                (0, r.jsx)(
                    y,
                    {
                        className: l()(t, O.paypalVerifiedTag),
                        label: p.NW.string(p.t.IhXLy8)
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
        c = [],
        l = Number(null !== (t = e[d.PC.EBAY_POSITIVE_FEEDBACK_PERCENTAGE]) && void 0 !== t ? t : -1),
        a = '1' === e[d.PC.EBAY_TOP_RATED_SELLER];
    return (
        l > 0 &&
            c.push(
                (0, r.jsx)(
                    N,
                    {
                        className: n,
                        count: l,
                        label: p.t.YmL22d,
                        percent: !0
                    },
                    d.PC.EBAY_POSITIVE_FEEDBACK_PERCENTAGE
                )
            ),
        a &&
            c.push(
                (0, r.jsx)(
                    y,
                    {
                        className: n,
                        label: p.NW.string(p.t.TEEYwc)
                    },
                    d.PC.EBAY_TOP_RATED_SELLER
                )
            ),
        c
    );
}
function _(e) {
    var t, n, c;
    let l = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
        a = [],
        o = '1' === e[d.PC.TIKTOK_VERIFIED],
        i = Number(null !== (t = e[d.PC.TIKTOK_FOLLOWER_COUNT]) && void 0 !== t ? t : -1),
        s = Number(null !== (n = e[d.PC.TIKTOK_FOLLOWING_COUNT]) && void 0 !== n ? n : -1),
        u = Number(null !== (c = e[d.PC.TIKTOK_LIKES_COUNT]) && void 0 !== c ? c : -1);
    return (
        i > -1 &&
            a.push(
                (0, r.jsx)(
                    N,
                    {
                        className: l,
                        count: i,
                        label: p.t['Mpm/BQ']
                    },
                    d.PC.TIKTOK_FOLLOWER_COUNT
                )
            ),
        s > -1 &&
            a.push(
                (0, r.jsx)(
                    N,
                    {
                        className: l,
                        count: s,
                        label: p.t.ftf12t
                    },
                    d.PC.TIKTOK_FOLLOWING_COUNT
                )
            ),
        u > -1 &&
            a.push(
                (0, r.jsx)(
                    N,
                    {
                        className: l,
                        count: u,
                        label: p.t.Qwhe5u
                    },
                    d.PC.TIKTOK_LIKES_COUNT
                )
            ),
        o &&
            a.push(
                (0, r.jsx)(
                    y,
                    {
                        className: l,
                        label: p.NW.string(p.t.QHHwRU)
                    },
                    d.PC.TIKTOK_VERIFIED
                )
            ),
        a
    );
}
function b(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0,
        c = [],
        l = Object.keys(e.metadata);
    if (null == e.application_metadata || 0 === Object.keys(e.application_metadata).length || 0 === l.length) return c;
    for (let a of o().sortBy(l, (t) => {
        var n, r;
        return null === (r = e.application_metadata) || void 0 === r ? void 0 : null === (n = r[t]) || void 0 === n ? void 0 : n.name;
    })) {
        let l = e.application_metadata[a];
        if (null == l) continue;
        let o = e.metadata[a];
        try {
            switch (l.type) {
                case d.xn.BOOLEAN_EQUAL:
                case d.xn.BOOLEAN_NOT_EQUAL:
                    ((l.type === d.xn.BOOLEAN_EQUAL && '1' === o) || (l.type === d.xn.BOOLEAN_NOT_EQUAL && '1' !== o)) &&
                        c.push(
                            (0, r.jsx)(
                                y,
                                {
                                    className: t,
                                    label: l.name
                                },
                                l.key
                            )
                        );
                    break;
                case d.xn.DATETIME_GREATER_THAN_EQUAL:
                case d.xn.DATETIME_LESS_THAN_EQUAL:
                    c.push(
                        (0, r.jsx)(
                            I,
                            {
                                className: t,
                                date: o,
                                locale: n,
                                label: l.name
                            },
                            l.key
                        )
                    );
                    break;
                case d.xn.INTEGER_EQUAL:
                case d.xn.INTEGER_NOT_EQUAL:
                case d.xn.INTEGER_GREATER_THAN_EQUAL:
                case d.xn.INTEGER_LESS_THAN_EQUAL:
                    c.push(
                        (0, r.jsx)(
                            N,
                            {
                                className: t,
                                count: Number(o),
                                label: l.name
                            },
                            l.key
                        )
                    );
            }
        } catch (e) {}
    }
    return c;
}
function N(e) {
    let t,
        { count: n, label: c, className: a, percent: o } = e,
        u = (0, s.$U)(n) + (o ? '%' : '');
    return (
        (t =
            'string' == typeof c
                ? p.NW.format(p.t.HLoinJ, {
                      name: c,
                      value: u
                  })
                : p.NW.format(c, { value: u })),
        (0, r.jsx)(i.Text, {
            className: l()(O.connectedAccountVanityMetadata, a),
            variant: 'text-xs/normal',
            color: 'interactive-active',
            children: t
        })
    );
}
function I(e) {
    let { date: t, locale: n, label: c, className: a } = e;
    return (0, r.jsx)(i.Text, {
        className: l()(O.connectedAccountVanityMetadata, a),
        variant: 'text-xs/normal',
        color: 'interactive-active',
        children: p.NW.format(p.t.HLoinJ, {
            value: (0, u.FI)(t, n),
            name: c
        })
    });
}
function f(e) {
    let { label: t, imageSrc: n, imageAlt: c, className: a } = e;
    return (0, r.jsxs)('div', {
        className: l()(O.connectedAccountVanityMetadata, O.connectedAccountVanityMetadataItem, a),
        children: [
            (0, r.jsx)(i.ua7, {
                text: c,
                children: (e) => {
                    var t, l;
                    return (0, r.jsx)(
                        'img',
                        ((t = (function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {},
                                    r = Object.keys(n);
                                'function' == typeof Object.getOwnPropertySymbols &&
                                    (r = r.concat(
                                        Object.getOwnPropertySymbols(n).filter(function (e) {
                                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                        })
                                    )),
                                    r.forEach(function (t) {
                                        var r;
                                        (r = n[t]),
                                            t in e
                                                ? Object.defineProperty(e, t, {
                                                      value: r,
                                                      enumerable: !0,
                                                      configurable: !0,
                                                      writable: !0
                                                  })
                                                : (e[t] = r);
                                    });
                            }
                            return e;
                        })({}, e)),
                        (l = l =
                            {
                                src: n,
                                alt: c,
                                className: O.connectedAccountVanityMetadataItemIcon
                            }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(l))
                            : (function (e, t) {
                                  var n = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var r = Object.getOwnPropertySymbols(e);
                                      n.push.apply(n, r);
                                  }
                                  return n;
                              })(Object(l)).forEach(function (e) {
                                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(l, e));
                              }),
                        t)
                    );
                }
            }),
            (0, r.jsx)(i.Text, {
                variant: 'text-xs/normal',
                color: 'interactive-active',
                children: t
            })
        ]
    });
}
function y(e) {
    let { label: t, className: n } = e;
    return (0, r.jsx)(i.Text, {
        variant: 'text-xs/semibold',
        color: 'interactive-active',
        className: l()(O.connectedAccountVanityMetadata, O.connectedAccountVanityMetadataTag, n),
        children: t
    });
}
