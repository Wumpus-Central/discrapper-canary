n.d(t, { Z: () => M }), n(388685);
var i = n(200651),
    o = n(192379),
    r = n(120356),
    l = n.n(r),
    a = n(512722),
    s = n.n(a),
    u = n(392711),
    d = n.n(u),
    c = n(947849),
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
function x(e, t) {
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
let y = Math.round((p.Jj - 4) / 2);
function I(e) {
    let { visualMediaItems: t, maxWidth: n, footer: o } = e;
    null != o && s()(1 === t.length, 'footer only gets applied to single items');
    let r = t.length;
    if (1 === r)
        return (0, i.jsx)(O, {
            itemsForLayout: t,
            isSingleImage: !0,
            footer: o,
            maxWidth: n
        });
    if (2 === r)
        return (0, i.jsx)(j, {
            itemsForLayout: t,
            maxWidth: n
        });
    if (3 === r)
        return (0, i.jsx)(b, {
            itemsForLayout: t,
            maxWidth: n
        });
    if (4 === r)
        return (0, i.jsx)(C, {
            itemsForLayout: t,
            maxWidth: n
        });
    let l = r % 3;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            1 === l &&
                (0, i.jsx)(O, {
                    itemsForLayout: t.slice(0, l),
                    maxWidth: n
                }),
            2 === l &&
                (0, i.jsx)(j, {
                    itemsForLayout: t.slice(0, l),
                    maxWidth: n
                }),
            0 === l
                ? (0, i.jsx)(v, {
                      itemsForLayout: t,
                      maxWidth: n
                  })
                : (0, i.jsx)(v, {
                      itemsForLayout: t.slice(l),
                      maxWidth: n
                  })
        ]
    });
}
function O(e) {
    let { itemsForLayout: t, maxWidth: n, isSingleImage: o, footer: r } = e,
        a = t[0];
    return (0, i.jsx)('div', {
        className: l()(g.oneByOneGrid, {
            [g.oneByOneGridSingle]: o,
            [g.oneByOneGridMosaic]: !o,
            [g.hasFooter]: null != r
        }),
        children: (0, i.jsx)(P, {
            props: a,
            useFullWidth: !o,
            isSingleItem: !0,
            maxWidth: n,
            footer: r
        })
    });
}
function j(e) {
    let { itemsForLayout: t, maxWidth: n } = e,
        o = Math.round((n - 4) / 2);
    return (0, i.jsx)('div', {
        className: g.oneByTwoGrid,
        children: t.map((e) =>
            (0, i.jsx)(
                'div',
                {
                    className: g.oneByTwoGridItem,
                    children: (0, i.jsx)(P, {
                        props: e,
                        maxWidth: o,
                        maxHeight: o
                    })
                },
                e.item.uniqueId
            )
        )
    });
}
function b(e) {
    let { itemsForLayout: t, maxWidth: n } = e,
        o = Math.round((2 * (n - 4)) / 3),
        r = o / 2;
    return (0, i.jsxs)('div', {
        className: l()(g.oneByTwoGrid, g.oneByTwoLayoutThreeGrid),
        children: [
            (0, i.jsx)('div', {
                className: g.oneByTwoSoloItem,
                children: (0, i.jsx)(P, {
                    props: t[0],
                    maxWidth: o
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
                                children: (0, i.jsx)(P, {
                                    props: e,
                                    maxWidth: r,
                                    maxHeight: y
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
function C(e) {
    let { itemsForLayout: t, maxWidth: n } = e,
        o = Math.round((n - 4) / 2);
    return (0, i.jsx)('div', {
        className: g.twoByTwoGrid,
        children: t.map((e) =>
            (0, i.jsx)(
                P,
                {
                    props: e,
                    maxWidth: o,
                    maxHeight: y
                },
                e.item.uniqueId
            )
        )
    });
}
function v(e) {
    let { itemsForLayout: t, maxWidth: n } = e,
        o = Math.round((n - 8) / 3);
    return (0, i.jsx)('div', {
        className: g.threeByThreeGrid,
        children: t.map((e) =>
            (0, i.jsx)(
                P,
                {
                    props: e,
                    maxWidth: o,
                    maxHeight: o
                },
                e.item.uniqueId
            )
        )
    });
}
let w = (e) => ({
        className: l()(e, g.itemContentContainer),
        imgContainerClassName: g.lazyImgContainer,
        imgClassName: g.lazyImg
    }),
    E = (e) => ({ className: l()(e, g.lazyImg) });
function P(e) {
    let { props: t, maxWidth: n = p.mT, maxHeight: o = p.Jj, useFullWidth: r = !0, isSingleItem: l = !1, footer: a } = e,
        s = t.item.type,
        u = x(f({}, t, 'IMAGE' === s && w(t.className), 'VIDEO' === s && E(t.className)), {
            mediaLayoutType: p.hV.MOSAIC,
            maxWidth: n,
            maxHeight: o,
            useFullWidth: r,
            isSingleMosaicItem: l
        });
    return (0, i.jsx)(c.h.Provider, {
        value: t.gifFavoriteButton,
        children: (0, i.jsx)(h.ZP, x(f({}, u), { footer: a }))
    });
}
let M = function (e) {
    var t;
    let { items: n, isInAppComponentsV2: r = !1 } = e,
        {
            groupableVisualMediaItems: a,
            nonGroupableVisualMediaItems: s,
            nonVisualMediaItems: u
        } = ((t = n),
        o.useMemo(() => {
            let [e, n] = d().partition(t, (e) => (0, m.R_)(e.item.type)),
                [i, o] = d().partition(e, (e) => (0, m.Ld)(e.item.type));
            return {
                groupableVisualMediaItems: i,
                nonGroupableVisualMediaItems: o,
                nonVisualMediaItems: n
            };
        }, [t])),
        c = r ? p.Y9 : p.mT;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            a.length > 0 &&
                (0, i.jsx)('div', {
                    className: l()(g.visualMediaItemContainer, { [g.isInAppComponentsV2]: r }),
                    children: (0, i.jsx)(I, {
                        visualMediaItems: a,
                        maxWidth: c
                    })
                }),
            s.length > 0 &&
                s.map((e) => {
                    let t = e.renderMosaicItemFooter({
                        item: e.item,
                        message: e.message
                    });
                    return (0, i.jsx)(
                        'div',
                        {
                            className: l()(g.visualMediaItemContainer, { [g.isInAppComponentsV2]: r }),
                            children: (0, i.jsx)(I, {
                                visualMediaItems: [e],
                                footer: t,
                                maxWidth: c
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
                                children: (0, i.jsx)(P, { props: e })
                            },
                            e.item.uniqueId
                        )
                    )
                })
        ]
    });
};
