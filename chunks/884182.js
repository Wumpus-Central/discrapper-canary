(n.d(t, { Z: () => T }), n(388685));
var r = n(255367),
    i = n(73800),
    l = n(120356),
    o = n.n(l),
    a = n(512722),
    s = n.n(a),
    u = n(392711),
    c = n.n(u),
    d = n(947849),
    m = n(499376),
    h = n(546432),
    p = n(217702),
    f = n(400003);
function y(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                ((r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r));
            }));
    }
    return e;
}
function g(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let O = Math.round((p.Jj - 4) / 2);
function I(e) {
    let { visualMediaItems: t, maxWidth: n, footer: i } = e;
    null != i && s()(1 === t.length, 'footer only gets applied to single items');
    let l = t.length;
    if (1 === l)
        return (0, r.jsx)(x, {
            itemsForLayout: t,
            isSingleImage: !0,
            footer: i,
            maxWidth: n
        });
    if (2 === l)
        return (0, r.jsx)(j, {
            itemsForLayout: t,
            maxWidth: n
        });
    if (3 === l)
        return (0, r.jsx)(E, {
            itemsForLayout: t,
            maxWidth: n
        });
    if (4 === l)
        return (0, r.jsx)(b, {
            itemsForLayout: t,
            maxWidth: n
        });
    let o = l % 3;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            1 === o &&
                (0, r.jsx)(x, {
                    itemsForLayout: t.slice(0, o),
                    maxWidth: n
                }),
            2 === o &&
                (0, r.jsx)(j, {
                    itemsForLayout: t.slice(0, o),
                    maxWidth: n
                }),
            0 === o
                ? (0, r.jsx)(w, {
                      itemsForLayout: t,
                      maxWidth: n
                  })
                : (0, r.jsx)(w, {
                      itemsForLayout: t.slice(o),
                      maxWidth: n
                  })
        ]
    });
}
function x(e) {
    let { itemsForLayout: t, maxWidth: n, isSingleImage: i, footer: l } = e,
        a = t[0];
    return (0, r.jsx)('div', {
        className: o()(f.oneByOneGrid, {
            [f.oneByOneGridSingle]: i,
            [f.oneByOneGridMosaic]: !i,
            [f.hasFooter]: null != l
        }),
        children: (0, r.jsx)(P, {
            props: a,
            useFullWidth: !i,
            isSingleItem: !0,
            maxWidth: n,
            footer: l
        })
    });
}
function j(e) {
    let { itemsForLayout: t, maxWidth: n } = e,
        i = Math.round((n - 4) / 2);
    return (0, r.jsx)('div', {
        className: f.oneByTwoGrid,
        children: t.map((e) =>
            (0, r.jsx)(
                'div',
                {
                    className: f.oneByTwoGridItem,
                    children: (0, r.jsx)(P, {
                        props: e,
                        maxWidth: i,
                        maxHeight: i
                    })
                },
                e.item.uniqueId
            )
        )
    });
}
function E(e) {
    let { itemsForLayout: t, maxWidth: n } = e,
        i = Math.round((2 * (n - 4)) / 3),
        l = i / 2;
    return (0, r.jsxs)('div', {
        className: o()(f.oneByTwoGrid, f.oneByTwoLayoutThreeGrid),
        children: [
            (0, r.jsx)('div', {
                className: f.oneByTwoSoloItem,
                children: (0, r.jsx)(P, {
                    props: t[0],
                    maxWidth: i
                })
            }),
            (0, r.jsx)('div', {
                className: f.oneByTwoDuoItem,
                children: (0, r.jsx)('div', {
                    className: f.twoByOneGrid,
                    children: t.splice(1).map((e) =>
                        (0, r.jsx)(
                            'div',
                            {
                                className: f.twoByOneGridItem,
                                children: (0, r.jsx)(P, {
                                    props: e,
                                    maxWidth: l,
                                    maxHeight: O
                                })
                            },
                            e.item.uniqueId
                        )
                    )
                })
            })
        ]
    });
}
function b(e) {
    let { itemsForLayout: t, maxWidth: n } = e,
        i = Math.round((n - 4) / 2);
    return (0, r.jsx)('div', {
        className: f.twoByTwoGrid,
        children: t.map((e) =>
            (0, r.jsx)(
                P,
                {
                    props: e,
                    maxWidth: i,
                    maxHeight: O,
                    displayGridItem: !0
                },
                e.item.uniqueId
            )
        )
    });
}
function w(e) {
    let { itemsForLayout: t, maxWidth: n } = e,
        i = Math.round((n - 8) / 3);
    return (0, r.jsx)('div', {
        className: f.threeByThreeGrid,
        children: t.map((e) =>
            (0, r.jsx)(
                P,
                {
                    props: e,
                    maxWidth: i,
                    maxHeight: i,
                    displayGridItem: !0
                },
                e.item.uniqueId
            )
        )
    });
}
let C = (e) => ({
        className: o()(e, f.itemContentContainer),
        imgContainerClassName: f.lazyImgContainer,
        imgClassName: f.lazyImg
    }),
    v = (e) => ({ className: o()(e, f.lazyImg) });
function P(e) {
    let { props: t, maxWidth: n = p.mT, maxHeight: i = p.Jj, useFullWidth: l = !0, isSingleItem: o = !1, footer: a, displayGridItem: s } = e,
        u = t.item.type,
        c = g(y({}, t, 'IMAGE' === u && C(t.className), 'VIDEO' === u && v(t.className)), {
            displayGridItem: s,
            mediaLayoutType: p.hV.MOSAIC,
            maxWidth: n,
            maxHeight: i,
            useFullWidth: l,
            isSingleMosaicItem: o
        });
    return (0, r.jsx)(d.h.Provider, {
        value: t.gifFavoriteButton,
        children: (0, r.jsx)(h.ZP, g(y({}, c), { footer: a }))
    });
}
let T = function (e) {
    var t;
    let { items: n, isInAppComponentsV2: l = !1 } = e,
        {
            groupableVisualMediaItems: a,
            nonGroupableVisualMediaItems: s,
            nonVisualMediaItems: u
        } = ((t = n),
        i.useMemo(() => {
            let [e, n] = c().partition(t, (e) => (0, m.R_)(e.item.type)),
                [r, i] = c().partition(e, (e) => (0, m.Ld)(e.item.type));
            return {
                groupableVisualMediaItems: r,
                nonGroupableVisualMediaItems: i,
                nonVisualMediaItems: n
            };
        }, [t])),
        d = l ? p.Y9 : p.mT;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            a.length > 0 &&
                (0, r.jsx)('div', {
                    className: o()(f.visualMediaItemContainer, { [f.isInAppComponentsV2]: l }),
                    children: (0, r.jsx)(I, {
                        visualMediaItems: a,
                        maxWidth: d
                    })
                }),
            s.length > 0 &&
                s.map((e) => {
                    let t = e.renderMosaicItemFooter({
                        item: e.item,
                        message: e.message
                    });
                    return (0, r.jsx)(
                        'div',
                        {
                            className: o()(f.visualMediaItemContainer, { [f.isInAppComponentsV2]: l }),
                            children: (0, r.jsx)(I, {
                                visualMediaItems: [e],
                                footer: t,
                                maxWidth: d
                            })
                        },
                        e.item.uniqueId
                    );
                }),
            u.length > 0 &&
                (0, r.jsx)('div', {
                    className: f.nonVisualMediaItemContainer,
                    children: u.map((e) =>
                        (0, r.jsx)(
                            'div',
                            {
                                className: f.nonVisualMediaItem,
                                children: (0, r.jsx)(P, { props: e })
                            },
                            e.item.uniqueId
                        )
                    )
                })
        ]
    });
};
