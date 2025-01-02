n(47120);
var i = n(200651),
    l = n(192379),
    o = n(120356),
    s = n.n(o),
    a = n(512722),
    r = n.n(a),
    u = n(392711),
    d = n.n(u),
    m = n(947849),
    c = n(499376),
    h = n(546432),
    I = n(217702),
    x = n(665817);
let g = Math.round((I.mT - 8) / 3),
    p = Math.round((I.mT - 4) / 2),
    f = Math.round((I.Jj - 4) / 2),
    C = Math.round((2 * (I.mT - 4)) / 3),
    j = C / 2;
function v(e) {
    let { visualMediaItems: t, footer: n } = e;
    null != n && r()(1 === t.length, 'footer only gets applied to single items');
    let l = t.length;
    if (1 === l)
        return (0, i.jsx)(y, {
            itemsForLayout: t,
            isSingleImage: !0,
            footer: n
        });
    if (2 === l) return (0, i.jsx)(E, { itemsForLayout: t });
    if (3 === l) return (0, i.jsx)(M, { itemsForLayout: t });
    if (4 === l) return (0, i.jsx)(N, { itemsForLayout: t });
    let o = l % 3;
    return (0, i.jsxs)(i.Fragment, {
        children: [1 === o && (0, i.jsx)(y, { itemsForLayout: t.slice(0, o) }), 2 === o && (0, i.jsx)(E, { itemsForLayout: t.slice(0, o) }), 0 === o ? (0, i.jsx)(T, { itemsForLayout: t }) : (0, i.jsx)(T, { itemsForLayout: t.slice(o) })]
    });
}
function y(e) {
    let { itemsForLayout: t, isSingleImage: n, footer: l } = e,
        o = t[0];
    return (0, i.jsx)('div', {
        className: s()(x.oneByOneGrid, {
            [x.oneByOneGridSingle]: n,
            [x.oneByOneGridMosaic]: !n,
            [x.hasFooter]: null != l
        }),
        children: (0, i.jsx)(A, {
            props: o,
            useFullWidth: !n,
            isSingleItem: !0,
            footer: l
        })
    });
}
function E(e) {
    let { itemsForLayout: t } = e;
    return (0, i.jsx)('div', {
        className: x.oneByTwoGrid,
        children: t.map((e) =>
            (0, i.jsx)(
                'div',
                {
                    className: x.oneByTwoGridItem,
                    children: (0, i.jsx)(A, {
                        props: e,
                        maxWidth: p,
                        maxHeight: p
                    })
                },
                e.item.uniqueId
            )
        )
    });
}
function M(e) {
    let { itemsForLayout: t } = e;
    return (0, i.jsxs)('div', {
        className: s()(x.oneByTwoGrid, x.oneByTwoLayoutThreeGrid),
        children: [
            (0, i.jsx)('div', {
                className: x.oneByTwoSoloItem,
                children: (0, i.jsx)(A, {
                    props: t[0],
                    maxWidth: C
                })
            }),
            (0, i.jsx)('div', {
                className: x.oneByTwoDuoItem,
                children: (0, i.jsx)('div', {
                    className: x.twoByOneGrid,
                    children: t.splice(1).map((e) =>
                        (0, i.jsx)(
                            'div',
                            {
                                className: x.twoByOneGridItem,
                                children: (0, i.jsx)(A, {
                                    props: e,
                                    maxWidth: j,
                                    maxHeight: f
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
function N(e) {
    let { itemsForLayout: t } = e;
    return (0, i.jsx)('div', {
        className: x.twoByTwoGrid,
        children: t.map((e) =>
            (0, i.jsx)(
                A,
                {
                    props: e,
                    maxWidth: p,
                    maxHeight: f
                },
                e.item.uniqueId
            )
        )
    });
}
function T(e) {
    let { itemsForLayout: t } = e;
    return (0, i.jsx)('div', {
        className: x.threeByThreeGrid,
        children: t.map((e) =>
            (0, i.jsx)(
                A,
                {
                    props: e,
                    maxWidth: g,
                    maxHeight: g
                },
                e.item.uniqueId
            )
        )
    });
}
let w = (e) => ({
        className: s()(e, x.itemContentContainer),
        imgContainerClassName: x.lazyImgContainer,
        imgClassName: x.lazyImg
    }),
    O = (e) => ({ className: s()(e, x.lazyImg) });
function A(e) {
    let { props: t, maxWidth: n = I.mT, maxHeight: l = I.Jj, useFullWidth: o = !0, isSingleItem: s = !1, footer: a } = e,
        r = t.item.type,
        u = {
            ...t,
            ...('IMAGE' === r && w(t.className)),
            ...('VIDEO' === r && O(t.className)),
            mediaLayoutType: I.hV.MOSAIC,
            maxWidth: n,
            maxHeight: l,
            useFullWidth: o,
            isSingleMosaicItem: s
        };
    return (0, i.jsx)(m.h.Provider, {
        value: t.gifFavoriteButton,
        children: (0, i.jsx)(h.ZP, {
            ...u,
            footer: a
        })
    });
}
t.Z = function (e) {
    let { items: t, inlineForwardButton: n } = e,
        {
            groupableVisualMediaItems: o,
            nonGroupableVisualMediaItems: a,
            nonVisualMediaItems: r
        } = (function (e) {
            return l.useMemo(() => {
                let [t, n] = d().partition(e, (e) => (0, c.R_)(e.item.type)),
                    [i, l] = d().partition(t, (e) => (0, c.Ld)(e.item.type));
                return {
                    groupableVisualMediaItems: i,
                    nonGroupableVisualMediaItems: l,
                    nonVisualMediaItems: n
                };
            }, [e]);
        })(t);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            o.length > 0 &&
                (null != n
                    ? (0, i.jsxs)('div', {
                          className: s()(x.mosaicContainer, 1 === o.length && x.single),
                          children: [
                              (0, i.jsx)('div', {
                                  className: x.visualMediaItemContainer,
                                  children: (0, i.jsx)(v, { visualMediaItems: o })
                              }),
                              n
                          ]
                      })
                    : (0, i.jsx)('div', {
                          className: x.visualMediaItemContainer,
                          children: (0, i.jsx)(v, { visualMediaItems: o })
                      })),
            a.length > 0 &&
                a.map((e) => {
                    let t = e.renderMosaicItemFooter({
                        item: e.item,
                        message: e.message
                    });
                    return (0, i.jsx)(
                        'div',
                        {
                            className: x.visualMediaItemContainer,
                            children: (0, i.jsx)(v, {
                                visualMediaItems: [e],
                                footer: t
                            })
                        },
                        e.item.uniqueId
                    );
                }),
            r.length > 0 &&
                (0, i.jsx)('div', {
                    className: x.nonVisualMediaItemContainer,
                    children: r.map((e) =>
                        (0, i.jsx)(
                            'div',
                            {
                                className: x.nonVisualMediaItem,
                                children: (0, i.jsx)(A, { props: e })
                            },
                            e.item.uniqueId
                        )
                    )
                })
        ]
    });
};
