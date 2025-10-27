n.d(t, { Z: () => w }), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(512722),
    l = n.n(s),
    c = n(392711),
    u = n.n(c),
    d = n(947849),
    f = n(499376),
    _ = n(546432),
    p = n(217702),
    h = n(809186);
function m(e, t, n) {
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
                m(e, t, n[t]);
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
    O = Math.round((p.Jj - y) / 2);
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
function I(e) {
    let { visualMediaItems: t, maxWidth: n, footer: i } = e;
    null != i && l()(1 === t.length, "footer only gets applied to single items");
    let a = t.length;
    if (1 === a)
        return (0, r.jsx)(T, {
            itemsForLayout: t,
            isSingleImage: !0,
            footer: i,
            maxWidth: n,
        });
    if (2 === a)
        return (0, r.jsx)(S, {
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
                (0, r.jsx)(T, {
                    itemsForLayout: t.slice(0, o),
                    maxWidth: n,
                }),
            2 === o &&
                (0, r.jsx)(S, {
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
function T(e) {
    let { itemsForLayout: t, maxWidth: n, isSingleImage: i, footer: a } = e,
        s = t[0];
    return (0, r.jsx)("div", {
        className: o()(h.oneByOneGrid, {
            [h.oneByOneGridSingle]: i,
            [h.oneByOneGridMosaic]: !i,
            [h.hasFooter]: null != a,
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
function S(e) {
    let { itemsForLayout: t, maxWidth: n } = e,
        i = Math.round((n - y) / 2);
    return (0, r.jsx)("div", {
        className: h.oneByTwoGrid,
        children: t.map((e) =>
            (0, r.jsx)(
                "div",
                {
                    className: h.oneByTwoGridItem,
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
        className: o()(h.oneByTwoGrid, h.oneByTwoLayoutThreeGrid),
        children: [
            (0, r.jsx)("div", {
                className: h.oneByTwoSoloItem,
                children: (0, r.jsx)(D, {
                    props: t[0],
                    maxWidth: i,
                }),
            }),
            (0, r.jsx)("div", {
                className: h.oneByTwoDuoItem,
                children: (0, r.jsx)("div", {
                    className: h.twoByOneGrid,
                    children: t.splice(1).map((e) =>
                        (0, r.jsx)(
                            "div",
                            {
                                className: h.twoByOneGridItem,
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
        className: h.twoByTwoGrid,
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
        className: h.threeByThreeGrid,
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
let R = (e) => ({
        className: o()(e, h.itemContentContainer),
        imgContainerClassName: h.lazyImgContainer,
        imgClassName: h.lazyImg,
    }),
    P = (e) => ({ className: o()(e, h.lazyImg) });
function D(e) {
    let {
            props: t,
            maxWidth: n = p.mT,
            maxHeight: i = p.Jj,
            useFullWidth: a = !0,
            isSingleItem: o = !1,
            footer: s,
            displayGridItem: l,
        } = e,
        c = t.item.type,
        u = b(g({}, t, "IMAGE" === c && R(t.className), "VIDEO" === c && P(t.className)), {
            displayGridItem: l,
            mediaLayoutType: p.hV.MOSAIC,
            maxWidth: n,
            maxHeight: i,
            useFullWidth: a,
            isSingleMosaicItem: o,
        });
    return (0, r.jsx)(d.h.Provider, {
        value: t.gifFavoriteButton,
        children: (0, r.jsx)(_.ZP, b(g({}, u), { footer: s })),
    });
}
let w = function (e) {
    let { items: t, isInAppComponentsV2: n = !1 } = e,
        { groupableVisualMediaItems: i, nonGroupableVisualMediaItems: a, nonVisualMediaItems: s } = v(t),
        l = n ? p.Y9 : p.mT;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            i.length > 0 &&
                (0, r.jsx)("div", {
                    className: o()(h.visualMediaItemContainer, { [h.isInAppComponentsV2]: n }),
                    children: (0, r.jsx)(I, {
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
                            className: o()(h.visualMediaItemContainer, { [h.isInAppComponentsV2]: n }),
                            children: (0, r.jsx)(I, {
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
                    className: h.nonVisualMediaItemContainer,
                    children: s.map((e) =>
                        (0, r.jsx)(
                            "div",
                            {
                                className: h.nonVisualMediaItem,
                                children: (0, r.jsx)(D, { props: e }),
                            },
                            e.item.uniqueId,
                        ),
                    ),
                }),
        ],
    });
};
