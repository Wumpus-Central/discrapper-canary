n.d(t, { Z: () => L }), n(47120);
var i = n(200651),
    l = n(192379),
    s = n(120356),
    o = n.n(s),
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
    C = Math.round((I.Jj - 4) / 2),
    f = Math.round((2 * (I.mT - 4)) / 3),
    j = f / 2;
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
    let s = l % 3;
    return (0, i.jsxs)(i.Fragment, {
        children: [1 === s && (0, i.jsx)(y, { itemsForLayout: t.slice(0, s) }), 2 === s && (0, i.jsx)(E, { itemsForLayout: t.slice(0, s) }), 0 === s ? (0, i.jsx)(w, { itemsForLayout: t }) : (0, i.jsx)(w, { itemsForLayout: t.slice(s) })]
    });
}
function y(e) {
    let { itemsForLayout: t, isSingleImage: n, footer: l } = e,
        s = t[0];
    return (0, i.jsx)('div', {
        className: o()(x.oneByOneGrid, {
            [x.oneByOneGridSingle]: n,
            [x.oneByOneGridMosaic]: !n,
            [x.hasFooter]: null != l
        }),
        children: (0, i.jsx)(A, {
            props: s,
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
        className: o()(x.oneByTwoGrid, x.oneByTwoLayoutThreeGrid),
        children: [
            (0, i.jsx)('div', {
                className: x.oneByTwoSoloItem,
                children: (0, i.jsx)(A, {
                    props: t[0],
                    maxWidth: f
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
                                    maxHeight: C
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
                    maxHeight: C
                },
                e.item.uniqueId
            )
        )
    });
}
function w(e) {
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
let T = (e) => ({
        className: o()(e, x.itemContentContainer),
        imgContainerClassName: x.lazyImgContainer,
        imgClassName: x.lazyImg
    }),
    O = (e) => ({ className: o()(e, x.lazyImg) });
function A(e) {
    let { props: t, maxWidth: n = I.mT, maxHeight: l = I.Jj, useFullWidth: s = !0, isSingleItem: o = !1, footer: a } = e,
        r = t.item.type,
        u = {
            ...t,
            ...('IMAGE' === r && T(t.className)),
            ...('VIDEO' === r && O(t.className)),
            mediaLayoutType: I.hV.MOSAIC,
            maxWidth: n,
            maxHeight: l,
            useFullWidth: s,
            isSingleMosaicItem: o
        };
    return (0, i.jsx)(m.h.Provider, {
        value: t.gifFavoriteButton,
        children: (0, i.jsx)(h.ZP, {
            ...u,
            footer: a
        })
    });
}
let L = function (e) {
    var t;
    let { items: n, inlineForwardButton: s } = e,
        {
            groupableVisualMediaItems: a,
            nonGroupableVisualMediaItems: r,
            nonVisualMediaItems: u
        } = ((t = n),
        l.useMemo(() => {
            let [e, n] = d().partition(t, (e) => (0, c.R_)(e.item.type)),
                [i, l] = d().partition(e, (e) => (0, c.Ld)(e.item.type));
            return {
                groupableVisualMediaItems: i,
                nonGroupableVisualMediaItems: l,
                nonVisualMediaItems: n
            };
        }, [t]));
    return (0, i.jsxs)(i.Fragment, {
        children: [
            a.length > 0 &&
                (null != s
                    ? (0, i.jsxs)('div', {
                          className: o()(x.mosaicContainer, 1 === a.length && x.single),
                          children: [
                              (0, i.jsx)('div', {
                                  className: x.visualMediaItemContainer,
                                  children: (0, i.jsx)(v, { visualMediaItems: a })
                              }),
                              s
                          ]
                      })
                    : (0, i.jsx)('div', {
                          className: x.visualMediaItemContainer,
                          children: (0, i.jsx)(v, { visualMediaItems: a })
                      })),
            r.length > 0 &&
                r.map((e) => {
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
            u.length > 0 &&
                (0, i.jsx)('div', {
                    className: x.nonVisualMediaItemContainer,
                    children: u.map((e) =>
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
