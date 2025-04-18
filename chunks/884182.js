n.d(t, { Z: () => L }), n(388685);
var i = n(200651),
    o = n(192379),
    r = n(120356),
    l = n.n(r),
    s = n(512722),
    a = n.n(s),
    u = n(392711),
    c = n.n(u),
    d = n(947849),
    m = n(499376),
    h = n(546432),
    p = n(217702),
    g = n(400003);
function f(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                var i;
                (i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = i);
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
                      var i = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, i);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let I = Math.round((p.mT - 8) / 3),
    x = Math.round((p.mT - 4) / 2),
    O = Math.round((p.Jj - 4) / 2),
    j = Math.round((2 * (p.mT - 4)) / 3),
    b = j / 2;
function C(e) {
    let { visualMediaItems: t, footer: n } = e;
    null != n && a()(1 === t.length, 'footer only gets applied to single items');
    let o = t.length;
    if (1 === o)
        return (0, i.jsx)(v, {
            itemsForLayout: t,
            isSingleImage: !0,
            footer: n
        });
    if (2 === o) return (0, i.jsx)(w, { itemsForLayout: t });
    if (3 === o) return (0, i.jsx)(E, { itemsForLayout: t });
    if (4 === o) return (0, i.jsx)(P, { itemsForLayout: t });
    let r = o % 3;
    return (0, i.jsxs)(i.Fragment, {
        children: [1 === r && (0, i.jsx)(v, { itemsForLayout: t.slice(0, r) }), 2 === r && (0, i.jsx)(w, { itemsForLayout: t.slice(0, r) }), 0 === r ? (0, i.jsx)(N, { itemsForLayout: t }) : (0, i.jsx)(N, { itemsForLayout: t.slice(r) })]
    });
}
function v(e) {
    let { itemsForLayout: t, isSingleImage: n, footer: o } = e,
        r = t[0];
    return (0, i.jsx)('div', {
        className: l()(g.oneByOneGrid, {
            [g.oneByOneGridSingle]: n,
            [g.oneByOneGridMosaic]: !n,
            [g.hasFooter]: null != o
        }),
        children: (0, i.jsx)(A, {
            props: r,
            useFullWidth: !n,
            isSingleItem: !0,
            footer: o
        })
    });
}
function w(e) {
    let { itemsForLayout: t } = e;
    return (0, i.jsx)('div', {
        className: g.oneByTwoGrid,
        children: t.map((e) =>
            (0, i.jsx)(
                'div',
                {
                    className: g.oneByTwoGridItem,
                    children: (0, i.jsx)(A, {
                        props: e,
                        maxWidth: x,
                        maxHeight: x
                    })
                },
                e.item.uniqueId
            )
        )
    });
}
function E(e) {
    let { itemsForLayout: t } = e;
    return (0, i.jsxs)('div', {
        className: l()(g.oneByTwoGrid, g.oneByTwoLayoutThreeGrid),
        children: [
            (0, i.jsx)('div', {
                className: g.oneByTwoSoloItem,
                children: (0, i.jsx)(A, {
                    props: t[0],
                    maxWidth: j
                })
            }),
            (0, i.jsx)('div', {
                className: g.oneByTwoDuoItem,
                children: (0, i.jsx)('div', {
                    className: g.twoByOneGrid,
                    children: t.splice(1).map((e) =>
                        (0, i.jsx)(
                            'div',
                            {
                                className: g.twoByOneGridItem,
                                children: (0, i.jsx)(A, {
                                    props: e,
                                    maxWidth: b,
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
function P(e) {
    let { itemsForLayout: t } = e;
    return (0, i.jsx)('div', {
        className: g.twoByTwoGrid,
        children: t.map((e) =>
            (0, i.jsx)(
                A,
                {
                    props: e,
                    maxWidth: x,
                    maxHeight: O
                },
                e.item.uniqueId
            )
        )
    });
}
function N(e) {
    let { itemsForLayout: t } = e;
    return (0, i.jsx)('div', {
        className: g.threeByThreeGrid,
        children: t.map((e) =>
            (0, i.jsx)(
                A,
                {
                    props: e,
                    maxWidth: I,
                    maxHeight: I
                },
                e.item.uniqueId
            )
        )
    });
}
let M = (e) => ({
        className: l()(e, g.itemContentContainer),
        imgContainerClassName: g.lazyImgContainer,
        imgClassName: g.lazyImg
    }),
    T = (e) => ({ className: l()(e, g.lazyImg) });
function A(e) {
    let { props: t, maxWidth: n = p.mT, maxHeight: o = p.Jj, useFullWidth: r = !0, isSingleItem: l = !1, footer: s } = e,
        a = t.item.type,
        u = y(f({}, t, 'IMAGE' === a && M(t.className), 'VIDEO' === a && T(t.className)), {
            mediaLayoutType: p.hV.MOSAIC,
            maxWidth: n,
            maxHeight: o,
            useFullWidth: r,
            isSingleMosaicItem: l
        });
    return (0, i.jsx)(d.h.Provider, {
        value: t.gifFavoriteButton,
        children: (0, i.jsx)(h.ZP, y(f({}, u), { footer: s }))
    });
}
let L = function (e) {
    var t;
    let { items: n, isInAppComponentsV2: r = !1 } = e,
        {
            groupableVisualMediaItems: s,
            nonGroupableVisualMediaItems: a,
            nonVisualMediaItems: u
        } = ((t = n),
        o.useMemo(() => {
            let [e, n] = c().partition(t, (e) => (0, m.R_)(e.item.type)),
                [i, o] = c().partition(e, (e) => (0, m.Ld)(e.item.type));
            return {
                groupableVisualMediaItems: i,
                nonGroupableVisualMediaItems: o,
                nonVisualMediaItems: n
            };
        }, [t]));
    return (0, i.jsxs)(i.Fragment, {
        children: [
            s.length > 0 &&
                (0, i.jsx)('div', {
                    className: l()(g.visualMediaItemContainer, { [g.isInAppComponentsV2]: r }),
                    children: (0, i.jsx)(C, { visualMediaItems: s })
                }),
            a.length > 0 &&
                a.map((e) => {
                    let t = e.renderMosaicItemFooter({
                        item: e.item,
                        message: e.message
                    });
                    return (0, i.jsx)(
                        'div',
                        {
                            className: l()(g.visualMediaItemContainer, { [g.isInAppComponentsV2]: r }),
                            children: (0, i.jsx)(C, {
                                visualMediaItems: [e],
                                footer: t
                            })
                        },
                        e.item.uniqueId
                    );
                }),
            u.length > 0 &&
                (0, i.jsx)('div', {
                    className: g.nonVisualMediaItemContainer,
                    children: u.map((e) =>
                        (0, i.jsx)(
                            'div',
                            {
                                className: g.nonVisualMediaItem,
                                children: (0, i.jsx)(A, { props: e })
                            },
                            e.item.uniqueId
                        )
                    )
                })
        ]
    });
};
