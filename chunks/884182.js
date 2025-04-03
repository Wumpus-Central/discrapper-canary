n.d(t, { Z: () => S }), n(47120);
var r = n(200651),
    o = n(192379),
    i = n(120356),
    l = n.n(i),
    s = n(512722),
    a = n.n(s),
    u = n(392711),
    c = n.n(u),
    d = n(947849),
    m = n(499376),
    h = n(546432),
    p = n(217702),
    f = n(400003);
function g(e) {
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
}
function y(e, t) {
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
let O = Math.round((p.mT - 8) / 3),
    j = Math.round((p.mT - 4) / 2),
    I = Math.round((p.Jj - 4) / 2),
    x = Math.round((2 * (p.mT - 4)) / 3),
    b = x / 2;
function v(e) {
    let { visualMediaItems: t, footer: n } = e;
    null != n && a()(1 === t.length, 'footer only gets applied to single items');
    let o = t.length;
    if (1 === o)
        return (0, r.jsx)(C, {
            itemsForLayout: t,
            isSingleImage: !0,
            footer: n
        });
    if (2 === o) return (0, r.jsx)(w, { itemsForLayout: t });
    if (3 === o) return (0, r.jsx)(P, { itemsForLayout: t });
    if (4 === o) return (0, r.jsx)(E, { itemsForLayout: t });
    let i = o % 3;
    return (0, r.jsxs)(r.Fragment, {
        children: [1 === i && (0, r.jsx)(C, { itemsForLayout: t.slice(0, i) }), 2 === i && (0, r.jsx)(w, { itemsForLayout: t.slice(0, i) }), 0 === i ? (0, r.jsx)(N, { itemsForLayout: t }) : (0, r.jsx)(N, { itemsForLayout: t.slice(i) })]
    });
}
function C(e) {
    let { itemsForLayout: t, isSingleImage: n, footer: o } = e,
        i = t[0];
    return (0, r.jsx)('div', {
        className: l()(f.oneByOneGrid, {
            [f.oneByOneGridSingle]: n,
            [f.oneByOneGridMosaic]: !n,
            [f.hasFooter]: null != o
        }),
        children: (0, r.jsx)(A, {
            props: i,
            useFullWidth: !n,
            isSingleItem: !0,
            footer: o
        })
    });
}
function w(e) {
    let { itemsForLayout: t } = e;
    return (0, r.jsx)('div', {
        className: f.oneByTwoGrid,
        children: t.map((e) =>
            (0, r.jsx)(
                'div',
                {
                    className: f.oneByTwoGridItem,
                    children: (0, r.jsx)(A, {
                        props: e,
                        maxWidth: j,
                        maxHeight: j
                    })
                },
                e.item.uniqueId
            )
        )
    });
}
function P(e) {
    let { itemsForLayout: t } = e;
    return (0, r.jsxs)('div', {
        className: l()(f.oneByTwoGrid, f.oneByTwoLayoutThreeGrid),
        children: [
            (0, r.jsx)('div', {
                className: f.oneByTwoSoloItem,
                children: (0, r.jsx)(A, {
                    props: t[0],
                    maxWidth: x
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
                                children: (0, r.jsx)(A, {
                                    props: e,
                                    maxWidth: b,
                                    maxHeight: I
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
function E(e) {
    let { itemsForLayout: t } = e;
    return (0, r.jsx)('div', {
        className: f.twoByTwoGrid,
        children: t.map((e) =>
            (0, r.jsx)(
                A,
                {
                    props: e,
                    maxWidth: j,
                    maxHeight: I
                },
                e.item.uniqueId
            )
        )
    });
}
function N(e) {
    let { itemsForLayout: t } = e;
    return (0, r.jsx)('div', {
        className: f.threeByThreeGrid,
        children: t.map((e) =>
            (0, r.jsx)(
                A,
                {
                    props: e,
                    maxWidth: O,
                    maxHeight: O
                },
                e.item.uniqueId
            )
        )
    });
}
let M = (e) => ({
        className: l()(e, f.itemContentContainer),
        imgContainerClassName: f.lazyImgContainer,
        imgClassName: f.lazyImg
    }),
    T = (e) => ({ className: l()(e, f.lazyImg) });
function A(e) {
    let { props: t, maxWidth: n = p.mT, maxHeight: o = p.Jj, useFullWidth: i = !0, isSingleItem: l = !1, footer: s } = e,
        a = t.item.type,
        u = y(g({}, t, 'IMAGE' === a && M(t.className), 'VIDEO' === a && T(t.className)), {
            mediaLayoutType: p.hV.MOSAIC,
            maxWidth: n,
            maxHeight: o,
            useFullWidth: i,
            isSingleMosaicItem: l
        });
    return (0, r.jsx)(d.h.Provider, {
        value: t.gifFavoriteButton,
        children: (0, r.jsx)(h.ZP, y(g({}, u), { footer: s }))
    });
}
let S = function (e) {
    var t;
    let { items: n, inlineForwardButton: i, isInAppComponentsV2: s = !1 } = e,
        {
            groupableVisualMediaItems: a,
            nonGroupableVisualMediaItems: u,
            nonVisualMediaItems: d
        } = ((t = n),
        o.useMemo(() => {
            let [e, n] = c().partition(t, (e) => (0, m.R_)(e.item.type)),
                [r, o] = c().partition(e, (e) => (0, m.Ld)(e.item.type));
            return {
                groupableVisualMediaItems: r,
                nonGroupableVisualMediaItems: o,
                nonVisualMediaItems: n
            };
        }, [t]));
    return (0, r.jsxs)(r.Fragment, {
        children: [
            a.length > 0 &&
                (null != i
                    ? (0, r.jsxs)('div', {
                          className: l()(f.mosaicContainer, { [f.single]: 1 === a.length }),
                          children: [
                              (0, r.jsx)('div', {
                                  className: l()(f.visualMediaItemContainer, { [f.isInAppComponentsV2]: s }),
                                  children: (0, r.jsx)(v, { visualMediaItems: a })
                              }),
                              i
                          ]
                      })
                    : (0, r.jsx)('div', {
                          className: l()(f.visualMediaItemContainer, { [f.isInAppComponentsV2]: s }),
                          children: (0, r.jsx)(v, { visualMediaItems: a })
                      })),
            u.length > 0 &&
                u.map((e) => {
                    let t = e.renderMosaicItemFooter({
                        item: e.item,
                        message: e.message
                    });
                    return (0, r.jsx)(
                        'div',
                        {
                            className: l()(f.visualMediaItemContainer, { [f.isInAppComponentsV2]: s }),
                            children: (0, r.jsx)(v, {
                                visualMediaItems: [e],
                                footer: t
                            })
                        },
                        e.item.uniqueId
                    );
                }),
            d.length > 0 &&
                (0, r.jsx)('div', {
                    className: f.nonVisualMediaItemContainer,
                    children: d.map((e) =>
                        (0, r.jsx)(
                            'div',
                            {
                                className: f.nonVisualMediaItem,
                                children: (0, r.jsx)(A, { props: e })
                            },
                            e.item.uniqueId
                        )
                    )
                })
        ]
    });
};
