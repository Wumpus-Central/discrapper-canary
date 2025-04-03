n.d(t, {
    Dq: () => E,
    hf: () => A,
    li: () => b,
    oP: () => p,
    rJ: () => m,
    rm: () => _,
    ul: () => N
}),
    n(653041),
    n(47120);
var r = n(200651);
n(192379);
var c = n(120356),
    a = n.n(c),
    l = n(392711),
    o = n.n(l),
    i = n(481060),
    s = n(930153),
    u = n(275759),
    d = n(856651),
    O = n(388032),
    T = n(566825);
function p(e) {
    var t;
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
        c = [],
        a = Number(null != (t = e[d.PC.REDDIT_TOTAL_KARMA]) ? t : -1),
        l = '1' === e[d.PC.REDDIT_GOLD],
        o = '1' === e[d.PC.REDDIT_MOD];
    return (
        a > -1 &&
            c.push(
                (0, r.jsx)(
                    f,
                    {
                        className: n,
                        count: a,
                        label: O.t.SbCNo6
                    },
                    d.PC.REDDIT_TOTAL_KARMA
                )
            ),
        l &&
            c.push(
                (0, r.jsx)(
                    v,
                    {
                        className: n,
                        label: O.NW.string(O.t['06rDHR'])
                    },
                    d.PC.REDDIT_GOLD
                )
            ),
        o &&
            c.push(
                (0, r.jsx)(
                    v,
                    {
                        className: n,
                        label: O.NW.string(O.t.oWM95O)
                    },
                    d.PC.REDDIT_MOD
                )
            ),
        c
    );
}
function m(e) {
    var t, n;
    let c = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
        a = [],
        l = Number(null != (t = e[d.PC.TWITTER_STATUSES_COUNT]) ? t : -1),
        o = Number(null != (n = e[d.PC.TWITTER_FOLLOWERS_COUNT]) ? n : -1);
    return (
        l > -1 &&
            a.push(
                (0, r.jsx)(
                    f,
                    {
                        className: c,
                        count: l,
                        label: O.t.llwqqa
                    },
                    d.PC.TWITTER_STATUSES_COUNT
                )
            ),
        o > -1 &&
            a.push(
                (0, r.jsx)(
                    f,
                    {
                        className: c,
                        count: o,
                        label: O.t.LMNOUV
                    },
                    d.PC.TWITTER_FOLLOWERS_COUNT
                )
            ),
        a
    );
}
function E(e) {
    var t, c, a;
    let l = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
        o = [],
        i = Number(null != (t = e[d.PC.STEAM_GAME_COUNT]) ? t : -1),
        s = Number(null != (c = e[d.PC.STEAM_ITEM_COUNT_DOTA2]) ? c : -1),
        u = Number(null != (a = e[d.PC.STEAM_ITEM_COUNT_TF2]) ? a : -1);
    return (
        i > -1 &&
            o.push(
                (0, r.jsx)(
                    f,
                    {
                        className: l,
                        count: i,
                        label: O.t.ppXMu7
                    },
                    d.PC.STEAM_GAME_COUNT
                )
            ),
        s > -1 &&
            o.push(
                (0, r.jsx)(
                    h,
                    {
                        className: l,
                        label: O.NW.format(O.t['Y88M5+'], { count: s }),
                        imageSrc: n(738535),
                        imageAlt: O.NW.string(O.t.HKUEZm)
                    },
                    d.PC.STEAM_ITEM_COUNT_DOTA2
                )
            ),
        u > -1 &&
            o.push(
                (0, r.jsx)(
                    h,
                    {
                        className: l,
                        label: O.NW.format(O.t['Y88M5+'], { count: u }),
                        imageSrc: n(80730),
                        imageAlt: O.NW.string(O.t.C8p1Sk)
                    },
                    d.PC.STEAM_ITEM_COUNT_TF2
                )
            ),
        o
    );
}
function b(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
        n = [];
    return (
        '1' === e[d.PC.PAYPAL_VERIFIED] &&
            n.push(
                (0, r.jsx)(
                    v,
                    {
                        className: a()(t, T.paypalVerifiedTag),
                        label: O.NW.string(O.t.IhXLy8)
                    },
                    d.PC.PAYPAL_VERIFIED
                )
            ),
        n
    );
}
function N(e) {
    var t;
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
        c = [],
        a = Number(null != (t = e[d.PC.EBAY_POSITIVE_FEEDBACK_PERCENTAGE]) ? t : -1),
        l = '1' === e[d.PC.EBAY_TOP_RATED_SELLER];
    return (
        a > 0 &&
            c.push(
                (0, r.jsx)(
                    f,
                    {
                        className: n,
                        count: a,
                        label: O.t.YmL22d,
                        percent: !0
                    },
                    d.PC.EBAY_POSITIVE_FEEDBACK_PERCENTAGE
                )
            ),
        l &&
            c.push(
                (0, r.jsx)(
                    v,
                    {
                        className: n,
                        label: O.NW.string(O.t.TEEYwc)
                    },
                    d.PC.EBAY_TOP_RATED_SELLER
                )
            ),
        c
    );
}
function A(e) {
    var t, n, c;
    let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
        l = [],
        o = '1' === e[d.PC.TIKTOK_VERIFIED],
        i = Number(null != (t = e[d.PC.TIKTOK_FOLLOWER_COUNT]) ? t : -1),
        s = Number(null != (n = e[d.PC.TIKTOK_FOLLOWING_COUNT]) ? n : -1),
        u = Number(null != (c = e[d.PC.TIKTOK_LIKES_COUNT]) ? c : -1);
    return (
        i > -1 &&
            l.push(
                (0, r.jsx)(
                    f,
                    {
                        className: a,
                        count: i,
                        label: O.t['Mpm/BQ']
                    },
                    d.PC.TIKTOK_FOLLOWER_COUNT
                )
            ),
        s > -1 &&
            l.push(
                (0, r.jsx)(
                    f,
                    {
                        className: a,
                        count: s,
                        label: O.t.ftf12t
                    },
                    d.PC.TIKTOK_FOLLOWING_COUNT
                )
            ),
        u > -1 &&
            l.push(
                (0, r.jsx)(
                    f,
                    {
                        className: a,
                        count: u,
                        label: O.t.Qwhe5u
                    },
                    d.PC.TIKTOK_LIKES_COUNT
                )
            ),
        o &&
            l.push(
                (0, r.jsx)(
                    v,
                    {
                        className: a,
                        label: O.NW.string(O.t.QHHwRU)
                    },
                    d.PC.TIKTOK_VERIFIED
                )
            ),
        l
    );
}
function _(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0,
        c = [],
        a = Object.keys(e.metadata);
    if (null == e.application_metadata || 0 === Object.keys(e.application_metadata).length || 0 === a.length) return c;
    for (let l of o().sortBy(a, (t) => {
        var n, r;
        return null == (r = e.application_metadata) || null == (n = r[t]) ? void 0 : n.name;
    })) {
        let a = e.application_metadata[l];
        if (null == a) continue;
        let o = e.metadata[l];
        try {
            switch (a.type) {
                case d.xn.BOOLEAN_EQUAL:
                case d.xn.BOOLEAN_NOT_EQUAL:
                    ((a.type === d.xn.BOOLEAN_EQUAL && '1' === o) || (a.type === d.xn.BOOLEAN_NOT_EQUAL && '1' !== o)) &&
                        c.push(
                            (0, r.jsx)(
                                v,
                                {
                                    className: t,
                                    label: a.name
                                },
                                a.key
                            )
                        );
                    break;
                case d.xn.DATETIME_GREATER_THAN_EQUAL:
                case d.xn.DATETIME_LESS_THAN_EQUAL:
                    c.push(
                        (0, r.jsx)(
                            y,
                            {
                                className: t,
                                date: o,
                                locale: n,
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
                    c.push(
                        (0, r.jsx)(
                            f,
                            {
                                className: t,
                                count: Number(o),
                                label: a.name
                            },
                            a.key
                        )
                    );
            }
        } catch (e) {}
    }
    return c;
}
function f(e) {
    let t,
        { count: n, label: c, className: l, percent: o } = e,
        u = (0, s.$U)(n) + (o ? '%' : '');
    return (
        (t =
            'string' == typeof c
                ? O.NW.format(O.t.HLoinJ, {
                      name: c,
                      value: u
                  })
                : O.NW.format(c, { value: u })),
        (0, r.jsx)(i.Text, {
            className: a()(T.connectedAccountVanityMetadata, l),
            variant: 'text-xs/normal',
            color: 'interactive-active',
            children: t
        })
    );
}
function y(e) {
    let { date: t, locale: n, label: c, className: l } = e;
    return (0, r.jsx)(i.Text, {
        className: a()(T.connectedAccountVanityMetadata, l),
        variant: 'text-xs/normal',
        color: 'interactive-active',
        children: O.NW.format(O.t.HLoinJ, {
            value: (0, u.FI)(t, n),
            name: c
        })
    });
}
function h(e) {
    let { label: t, imageSrc: n, imageAlt: c, className: l } = e;
    return (0, r.jsxs)('div', {
        className: a()(T.connectedAccountVanityMetadata, T.connectedAccountVanityMetadataItem, l),
        children: [
            (0, r.jsx)(i.ua7, {
                text: c,
                children: (e) => {
                    var t, a;
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
                        (a = a =
                            {
                                src: n,
                                alt: c,
                                className: T.connectedAccountVanityMetadataItemIcon
                            }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a))
                            : (function (e, t) {
                                  var n = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var r = Object.getOwnPropertySymbols(e);
                                      n.push.apply(n, r);
                                  }
                                  return n;
                              })(Object(a)).forEach(function (e) {
                                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(a, e));
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
function v(e) {
    let { label: t, className: n } = e;
    return (0, r.jsx)(i.Text, {
        variant: 'text-xs/semibold',
        color: 'interactive-active',
        className: a()(T.connectedAccountVanityMetadata, T.connectedAccountVanityMetadataTag, n),
        children: t
    });
}
