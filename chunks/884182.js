n.d(t, { Z: () => w }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(512722),
    l = n.n(s),
    c = n(392711),
    u = n.n(c),
    d = n(947849),
    f = n(499376),
    p = n(546432),
    _ = n(217702),
    m = n(809186);
function h(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function g(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                h(e, t, n[t]);
            });
    }
    return e;
}
function E(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function b(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : E(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let y = 4,
    O = Math.round((_.Jj - y) / 2);
function v(e) {
    return i.useMemo(() => {
        let [t, n] = u().partition(e, (e) => (0, f.R_)(e.item.type)),
            [r, i] = u().partition(t, (e) => (0, f.Ld)(e.item.type));
        return {
            groupableVisualMediaItems: r,
            nonGroupableVisualMediaItems: i,
            nonVisualMediaItems: n,
        };
    }, [e]);
}
function S(e) {
    let { visualMediaItems: t, maxWidth: n, footer: i } = e;
    null != i && l()(1 === t.length, "footer only gets applied to single items");
    let a = t.length;
    if (1 === a)
        return (0, r.jsx)(I, {
            itemsForLayout: t,
            isSingleImage: !0,
            footer: i,
            maxWidth: n,
        });
    if (2 === a)
        return (0, r.jsx)(T, {
            itemsForLayout: t,
            maxWidth: n,
        });
    if (3 === a)
        return (0, r.jsx)(A, {
            itemsForLayout: t,
            maxWidth: n,
        });
    if (4 === a)
        return (0, r.jsx)(C, {
            itemsForLayout: t,
            maxWidth: n,
        });
    let o = a % 3;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            1 === o &&
                (0, r.jsx)(I, {
                    itemsForLayout: t.slice(0, o),
                    maxWidth: n,
                }),
            2 === o &&
                (0, r.jsx)(T, {
                    itemsForLayout: t.slice(0, o),
                    maxWidth: n,
                }),
            0 === o
                ? (0, r.jsx)(N, {
                      itemsForLayout: t,
                      maxWidth: n,
                  })
                : (0, r.jsx)(N, {
                      itemsForLayout: t.slice(o),
                      maxWidth: n,
                  }),
        ],
    });
}
function I(e) {
    let { itemsForLayout: t, maxWidth: n, isSingleImage: i, footer: a } = e,
        s = t[0];
    return (0, r.jsx)("div", {
        className: o()(m.oneByOneGrid, {
            [m.oneByOneGridSingle]: i,
            [m.oneByOneGridMosaic]: !i,
            [m.hasFooter]: null != a,
        }),
        children: (0, r.jsx)(D, {
            props: s,
            useFullWidth: !i,
            isSingleItem: !0,
            maxWidth: n,
            footer: a,
        }),
    });
}
function T(e) {
    let { itemsForLayout: t, maxWidth: n } = e,
        i = Math.round((n - y) / 2);
    return (0, r.jsx)("div", {
        className: m.oneByTwoGrid,
        children: t.map((e) =>
            (0, r.jsx)(
                "div",
                {
                    className: m.oneByTwoGridItem,
                    children: (0, r.jsx)(D, {
                        props: e,
                        maxWidth: i,
                        maxHeight: i,
                    }),
                },
                e.item.uniqueId,
            ),
        ),
    });
}
function A(e) {
    let { itemsForLayout: t, maxWidth: n } = e,
        i = Math.round((2 * (n - y)) / 3),
        a = i / 2;
    return (0, r.jsxs)("div", {
        className: o()(m.oneByTwoGrid, m.oneByTwoLayoutThreeGrid),
        children: [
            (0, r.jsx)("div", {
                className: m.oneByTwoSoloItem,
                children: (0, r.jsx)(D, {
                    props: t[0],
                    maxWidth: i,
                }),
            }),
            (0, r.jsx)("div", {
                className: m.oneByTwoDuoItem,
                children: (0, r.jsx)("div", {
                    className: m.twoByOneGrid,
                    children: t.splice(1).map((e) =>
                        (0, r.jsx)(
                            "div",
                            {
                                className: m.twoByOneGridItem,
                                children: (0, r.jsx)(D, {
                                    props: e,
                                    maxWidth: a,
                                    maxHeight: O,
                                }),
                            },
                            e.item.uniqueId,
                        ),
                    ),
                }),
            }),
        ],
    });
}
function C(e) {
    let { itemsForLayout: t, maxWidth: n } = e,
        i = Math.round((n - y) / 2);
    return (0, r.jsx)("div", {
        className: m.twoByTwoGrid,
        children: t.map((e) =>
            (0, r.jsx)(
                D,
                {
                    props: e,
                    maxWidth: i,
                    maxHeight: O,
                    displayGridItem: !0,
                },
                e.item.uniqueId,
            ),
        ),
    });
}
function N(e) {
    let { itemsForLayout: t, maxWidth: n } = e,
        i = Math.round((n - 2 * y) / 3);
    return (0, r.jsx)("div", {
        className: m.threeByThreeGrid,
        children: t.map((e) =>
            (0, r.jsx)(
                D,
                {
                    props: e,
                    maxWidth: i,
                    maxHeight: i,
                    displayGridItem: !0,
                },
                e.item.uniqueId,
            ),
        ),
    });
}
let P = (e) => ({
        className: o()(e, m.itemContentContainer),
        imgContainerClassName: m.lazyImgContainer,
        imgClassName: m.lazyImg,
    }),
    R = (e) => ({ className: o()(e, m.lazyImg) });
function D(e) {
    let {
            props: t,
            maxWidth: n = _.mT,
            maxHeight: i = _.Jj,
            useFullWidth: a = !0,
            isSingleItem: o = !1,
            footer: s,
            displayGridItem: l,
        } = e,
        c = t.item.type,
        u = b(g({}, t, "IMAGE" === c && P(t.className), "VIDEO" === c && R(t.className)), {
            displayGridItem: l,
            mediaLayoutType: _.hV.MOSAIC,
            maxWidth: n,
            maxHeight: i,
            useFullWidth: a,
            isSingleMosaicItem: o,
        });
    return (0, r.jsx)(d.h.Provider, {
        value: t.gifFavoriteButton,
        children: (0, r.jsx)(p.ZP, b(g({}, u), { footer: s })),
    });
}
let w = function (e) {
    let { items: t, isInAppComponentsV2: n = !1 } = e,
        { groupableVisualMediaItems: i, nonGroupableVisualMediaItems: a, nonVisualMediaItems: s } = v(t),
        l = n ? _.Y9 : _.mT;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            i.length > 0 &&
                (0, r.jsx)("div", {
                    className: o()(m.visualMediaItemContainer, { [m.isInAppComponentsV2]: n }),
                    children: (0, r.jsx)(S, {
                        visualMediaItems: i,
                        maxWidth: l,
                    }),
                }),
            a.length > 0 &&
                a.map((e) => {
                    let t = e.renderMosaicItemFooter({
                        item: e.item,
                        message: e.message,
                    });
                    return (0, r.jsx)(
                        "div",
                        {
                            className: o()(m.visualMediaItemContainer, { [m.isInAppComponentsV2]: n }),
                            children: (0, r.jsx)(S, {
                                visualMediaItems: [e],
                                footer: t,
                                maxWidth: l,
                            }),
                        },
                        e.item.uniqueId,
                    );
                }),
            s.length > 0 &&
                (0, r.jsx)("div", {
                    className: m.nonVisualMediaItemContainer,
                    children: s.map((e) =>
                        (0, r.jsx)(
                            "div",
                            {
                                className: m.nonVisualMediaItem,
                                children: (0, r.jsx)(D, { props: e }),
                            },
                            e.item.uniqueId,
                        ),
                    ),
                }),
        ],
    });
};
