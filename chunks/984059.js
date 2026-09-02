a.r(t), a.d(t, { collectiblesCollection: () => Y, playgroundConfig: () => J });
var n = a(34188),
    o = a(477900),
    r = a(582128),
    l = a(331322),
    s = a(834730),
    i = a(440938),
    c = a(161918),
    u = a(395856),
    d = a(682301),
    m = a(258245),
    p = a(484469),
    h = a(73870),
    g = a(758836),
    x = a(107481);
function v(e) {
    return e.split(/[\s,]+/).filter((e) => "" !== e);
}
let f = {
    title: "Shop Loading",
    stories: [
        {
            name: "Batched SKU Loader",
            id: "shop-batched-sku-loader",
            component: function (e) {
                let { skuIds: t } = e,
                    a = r.useMemo(() => v(t), [t]),
                    n = (0, d.hv)(a, { needsCategory: !1 });
                return (0, o.jsxs)(l.B, {
                    direction: "vertical",
                    gap: 16,
                    align: "start",
                    children: [
                        (0, o.jsx)(s.E, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children:
                                "Comma- or space-separate shop SKU IDs in the controls. Each tile resolves via the storefront APIs through CollectiblesShopManager \u2014 all IDs entered here coalesce into one batched request. Tiles show the skeleton until the SKU resolves.",
                        }),
                        (0, o.jsx)("div", {
                            className: x.Vg,
                            children: a.map((e) => {
                                let { state: t, product: a } = n[e] ?? { state: "loading", product: null };
                                return (0, o.jsx)(
                                    "div",
                                    {
                                        className: x.Vs,
                                        children:
                                            "ready" === t && null != a
                                                ? (0, o.jsxs)(o.Fragment, {
                                                      children: [
                                                          (0, o.jsx)(s.E, {
                                                              variant: "text-sm/semibold",
                                                              children: a.name,
                                                          }),
                                                          (0, o.jsx)(s.E, {
                                                              variant: "text-xs/normal",
                                                              color: "text-muted",
                                                              children: e,
                                                          }),
                                                      ],
                                                  })
                                                : "error" === t
                                                  ? (0, o.jsxs)(s.E, {
                                                        variant: "text-sm/semibold",
                                                        color: "text-feedback-critical",
                                                        children: ["error: ", e],
                                                    })
                                                  : (0, o.jsx)(p.A, {}),
                                    },
                                    e,
                                );
                            }),
                        }),
                    ],
                });
            },
            controls: { skuIds: { label: "SKU IDs", type: "text", defaultValue: "" } },
        },
        {
            name: "Product Card",
            id: "shop-product-card",
            component: function (e) {
                let { skuIds: t, improvedLoading: a } = e,
                    n = r.useMemo(() => v(t), [t]);
                return (0, o.jsx)(u.k, {
                    value: a,
                    children: (0, o.jsx)(c.iM, {
                        tab: g.G2.HOME,
                        children: (0, o.jsx)(i.R9, {
                            newValue: { sessionId: "playground" },
                            children: (0, o.jsxs)(l.B, {
                                direction: "vertical",
                                gap: 16,
                                align: "start",
                                children: [
                                    (0, o.jsx)(s.E, {
                                        variant: "text-sm/normal",
                                        color: "text-muted",
                                        children:
                                            "Renders real ProductCards. With the experiment toggle on, each card resolves through CollectiblesShopManager and shows a skeleton until ready; with it off, cards use the legacy CollectiblesCategoryStore path (empty in the playground).",
                                    }),
                                    (0, o.jsx)("div", {
                                        className: x.Vg,
                                        children: n.map((e) => (0, o.jsx)(m.A, { skuId: e }, e)),
                                    }),
                                ],
                            }),
                        }),
                    }),
                });
            },
            controls: {
                skuIds: { label: "SKU IDs", type: "text", defaultValue: "" },
                improvedLoading: { label: "ImprovedShopLoading experiment", type: "boolean", defaultValue: !0 },
            },
        },
        {
            name: "Shop Home Feed",
            id: "shop-home-feed",
            component: function (e) {
                let { improvedLoading: t } = e;
                return (0, o.jsx)(u.k, {
                    value: t,
                    children: (0, o.jsx)(c.iM, {
                        tab: g.G2.HOME,
                        children: (0, o.jsx)(i.R9, {
                            newValue: { sessionId: "playground" },
                            children: (0, o.jsx)("div", {
                                className: x.rO,
                                children: (0, o.jsx)(h.A, {
                                    handleTransition: () => {},
                                    tab: g.G2.HOME,
                                    transitionState: g.Pf.VISIBLE,
                                }),
                            }),
                        }),
                    }),
                });
            },
            controls: {
                improvedLoading: { label: "ImprovedShopLoading experiment", type: "boolean", defaultValue: !0 },
            },
        },
    ],
};
var b = a(297264),
    y = a(503698),
    k = a.n(y),
    C = a(3666),
    j = a(508770),
    S = a(939249),
    w = a(477782),
    A = a(847374),
    E = a(922016),
    L = a(980707),
    I = a(955572),
    M = a(775602),
    D = a(421773),
    N = a(361779);
function K(e) {
    return !e.defaultPrevented && 0 === e.button && !e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey;
}
function R(e) {
    let { navId: t, option: a, selectedKey: n } = e;
    return "page" === a.type
        ? (0, o.jsx)(T, { option: a, selectedKey: n })
        : (0, o.jsx)(H, { navId: t, option: a, selectedKey: n });
}
function T(e) {
    var t;
    let { option: a, selectedKey: n } = e,
        l = a.key === n,
        i = r.useCallback(
            (e) => {
                K(e) && (e.preventDefault(), a.onClick(e));
            },
            [a],
        );
    return (0, o.jsx)("li", {
        children: (0, o.jsxs)(S.D, {
            tag: "a",
            role: "link",
            href: a.route,
            onClick: i,
            "aria-current": l ? "page" : void 0,
            className: k()(N.ie, N.LA, { [N.wH]: l, [N.C3]: null != a.badge }),
            children: [
                (0, o.jsx)(s.E, { variant: "text-md/medium", color: "none", children: a.text }),
                null == (t = a.badge)
                    ? null
                    : "object" == typeof t && "type" in t
                      ? (0, o.jsx)(j.E, { ...t })
                      : (0, o.jsx)(j.E, { type: t }),
            ],
        }),
    });
}
function H(e) {
    let { navId: t, option: a, selectedKey: n } = e,
        { route: l } = a,
        i = `${t}-${a.key}`,
        c = (function e(t, a) {
            return t.key === a || ("menu" === t.type && t.options.some((t) => e(t, a)));
        })(a, n),
        u = r.useRef(null),
        d = r.useRef(null),
        m = r.useRef(!1),
        { isHovered: p, setIsHovered: h, onMouseEnter: g, onMouseLeave: x, cancelTimers: v } = (0, D.A)(100, 100),
        f = r.useCallback(() => {
            (m.current = M.Ay.keyboardModeEnabled), g();
        }, [g]),
        b = r.useCallback(() => {
            v(), h(!0), (m.current = M.Ay.keyboardModeEnabled);
        }, [v, h]),
        y = r.useCallback(
            (e) => {
                v(),
                    m.current && !M.Ay.keyboardModeEnabled && (0, I.uS)(),
                    h(!1),
                    e && requestAnimationFrame(() => (null != d.current ? d.current.focus() : u.current?.focus()));
            },
            [v, h],
        ),
        C = r.useCallback(() => {
            p ? y(!1) : b();
        }, [p, b, y]),
        j = r.useCallback(
            (e) => {
                y(!1), null != a.route && K(e) && (e.preventDefault(), a.onClick(e));
            },
            [a, y],
        ),
        R = r.useCallback(
            (e) => {
                "ArrowDown" === e.key &&
                    (e.preventDefault(), e.stopPropagation(), p ? (y(!1), requestAnimationFrame(b)) : b());
            },
            [p, b, y],
        ),
        T = (0, o.jsx)(s.E, { variant: "text-md/medium", color: "none", children: a.text }),
        H = (0, o.jsx)(A.a, { size: "sm", color: "currentColor", className: k()(N.OW, { [N.g3]: p }) });
    return (0, o.jsx)("li", {
        children: (0, o.jsx)(E.Y, {
            targetElementRef: u,
            shouldShow: p,
            position: "bottom",
            align: "left",
            spacing: 4,
            onRequestOpen: b,
            onRequestClose: () => y(!0),
            animation: E.Y.Animation.NONE,
            renderPopout: () =>
                (0, o.jsx)("div", {
                    onMouseEnter: g,
                    onMouseLeave: x,
                    children: (0, o.jsx)(L.W, {
                        navId: i,
                        "aria-label": a.expandLabel,
                        onClose: () => y(!0),
                        onSelect: void 0,
                        children: (function e(t) {
                            return t.map((t) =>
                                "page" === t.type
                                    ? (0, o.jsx)(
                                          w.Dr,
                                          {
                                              id: t.key,
                                              label: t.text,
                                              leadingAccessory:
                                                  null != t.iconSrc ? { type: "image", src: t.iconSrc } : void 0,
                                              badge: t.badge,
                                              action: t.onClick,
                                          },
                                          t.key,
                                      )
                                    : (0, o.jsx)(
                                          w.Dr,
                                          { id: t.key, label: t.text, action: t.onClick, children: e(t.options) },
                                          t.key,
                                      ),
                            );
                        })(a.options),
                    }),
                }),
            children: (e) =>
                null != l
                    ? (0, o.jsxs)("span", {
                          ref: u,
                          className: k()(N.ie, N.iL, { [N.wH]: c }),
                          children: [
                              (0, o.jsx)(S.D, {
                                  tag: "a",
                                  role: "link",
                                  href: l,
                                  onClick: j,
                                  onMouseEnter: f,
                                  onMouseLeave: x,
                                  "aria-current": a.key === n ? "page" : void 0,
                                  focusProps: { offset: { bottom: -2 } },
                                  className: k()(N.LA, N.tH),
                                  children: T,
                              }),
                              (0, o.jsx)(S.D, {
                                  ...e,
                                  innerRef: d,
                                  role: "button",
                                  "aria-haspopup": "true",
                                  "aria-label": a.expandLabel,
                                  onClick: C,
                                  onKeyDown: R,
                                  onMouseEnter: f,
                                  onMouseLeave: x,
                                  focusProps: { offset: { bottom: -2 } },
                                  className: k()(N.LA, N.nE),
                                  children: H,
                              }),
                          ],
                      })
                    : (0, o.jsxs)(S.D, {
                          ...e,
                          innerRef: u,
                          role: "button",
                          "aria-haspopup": "true",
                          onClick: C,
                          onKeyDown: R,
                          onMouseEnter: f,
                          onMouseLeave: x,
                          className: k()(N.ie, N.LA, { [N.wH]: c }),
                          children: [T, H],
                      }),
        }),
    });
}
var B = a(765671);
let O = 'a[href], [role="button"]';
function G(e, t) {
    let a = Array.from(e.querySelectorAll(O)),
        n = a.indexOf(document.activeElement);
    -1 !== n && a[n + t]?.focus();
}
function P(e) {
    switch (e.key) {
        case "ArrowRight":
            e.preventDefault(), G(e.currentTarget, 1);
            return;
        case "ArrowLeft":
            e.preventDefault(), G(e.currentTarget, -1);
            return;
        case "Home":
            e.preventDefault(), e.currentTarget.querySelector(O)?.focus();
            return;
        case "End": {
            e.preventDefault();
            let t = e.currentTarget.querySelectorAll(O);
            t[t.length - 1]?.focus();
        }
    }
}
function U(e) {
    let { options: t, selectedKey: a, overflowLabel: n, overflowExpandLabel: l, className: s, ...i } = e,
        c = r.useId(),
        u = `collectibles-shop-navigation-menu-${c}`,
        {
            containerRef: d,
            isMeasured: m,
            visibleOptions: p,
            onItemLayout: h,
            overflowItemsRef: g,
        } = (function (e, t, a, n) {
            let { ref: o, width: l } = (0, B.Ay)(),
                {
                    lastVisibleIndex: s,
                    onItemLayout: i,
                    overflowItemsRef: c,
                } = (0, C.Wv)({ items: e, itemGapPx: 32, maxLines: 1, containerWidth: l ?? 0 });
            return {
                containerRef: o,
                isMeasured: null != l,
                visibleOptions: r.useMemo(() => {
                    if (s >= e.length - 1) return e;
                    let o = { type: "menu", key: t, text: a, expandLabel: n, options: e.slice(s + 1) };
                    return [...e.slice(0, s + 1), o];
                }, [e, s, t, a, n]),
                onItemLayout: i,
                overflowItemsRef: c,
            };
        })(t, `${u}-more`, n, l);
    return (0, o.jsxs)("nav", {
        "aria-label": i["aria-label"],
        className: k()(N.C$, s),
        ref: d,
        children: [
            (0, o.jsx)(V, {
                navId: u,
                options: t,
                overflowLabel: n,
                overflowExpandLabel: l,
                onItemLayout: h,
                overflowItemsRef: g,
            }),
            m &&
                (0, o.jsx)("ul", {
                    onKeyDown: P,
                    className: N.P_,
                    children: p.map((e) => (0, o.jsx)(R, { navId: u, option: e, selectedKey: a }, e.key)),
                }),
        ],
    });
}
function V(e) {
    let { options: t, navId: a, overflowLabel: n, overflowExpandLabel: r, onItemLayout: l, overflowItemsRef: s } = e,
        i = `${a}-measure`;
    return (0, o.jsxs)("div", {
        "aria-hidden": !0,
        className: N.Zb,
        children: [
            t.map((e, t) =>
                (0, o.jsx)(
                    C.Ae,
                    { index: t, onItemLayout: l, children: (0, o.jsx)(R, { navId: i, option: e }) },
                    e.key,
                ),
            ),
            (0, o.jsx)("div", {
                ref: s,
                children: (0, o.jsx)(R, {
                    navId: i,
                    option: { type: "menu", key: "more-measure", text: n, expandLabel: r, options: [] },
                }),
            }),
        ],
    });
}
var _ = a(703086);
let q = {
    home: "Home",
    catalog: "Catalog",
    browse: "Browse",
    "avatar decorations": "Avatar Decorations",
    nameplates: "Nameplates",
    "game shops": "Game Shops",
    "games-a": "Game A",
    "games-b": "Game B",
    "game servers": "Game Servers",
};
var F = a(821609),
    $ = a(793574),
    W = a(722258);
let Y = {
        id: "collectibles",
        name: "Collectibles Shop",
        groups: [
            {
                title: "Single-SKU Surfaces",
                stories: [
                    {
                        name: "Standalone Product Details Modal",
                        id: "standalone-product-details-modal",
                        component: function (e) {
                            let { skuId: t } = e,
                                a = t.trim(),
                                { state: n } = (0, d.IK)(a, { needsCategory: !0 });
                            return (0, o.jsxs)(l.B, {
                                direction: "vertical",
                                gap: 16,
                                align: "start",
                                children: [
                                    (0, o.jsx)(s.E, {
                                        variant: "text-sm/normal",
                                        color: "text-muted",
                                        children:
                                            "Enter a shop SKU ID in the controls, then open the product details modal. The loader resolves the product + category from the storefront APIs (store-first, single item).",
                                    }),
                                    (0, o.jsxs)(s.E, {
                                        variant: "text-sm/semibold",
                                        children: ["Resolver state: ", "" === a ? "idle (no skuId)" : n],
                                    }),
                                    (0, o.jsx)(F.$, {
                                        text: "Open product details",
                                        disabled: "" === a,
                                        onClick: () =>
                                            (0, W.B)({ skuId: a, analyticsLocations: [$.A.COLLECTIBLES_SHOP] }),
                                    }),
                                ],
                            });
                        },
                        controls: { skuId: { label: "SKU ID", type: "text", defaultValue: "" } },
                    },
                ],
            },
            f,
            {
                title: "Navigation",
                stories: [
                    {
                        name: "Navigation Menu",
                        id: "navigation-menu",
                        component: function () {
                            let [e, t] = r.useState("home"),
                                a = r.useCallback(
                                    (e, a) => () => {
                                        window.history.pushState(null, "", a), t(e);
                                    },
                                    [],
                                ),
                                n = r.useMemo(
                                    () => [
                                        {
                                            type: "page",
                                            key: "home",
                                            text: "Home",
                                            route: "#home",
                                            onClick: a("home", "#home"),
                                        },
                                        {
                                            type: "page",
                                            key: "catalog",
                                            text: "Catalog",
                                            route: "#catalog",
                                            onClick: a("catalog", "#catalog"),
                                        },
                                        {
                                            type: "menu",
                                            key: "browse",
                                            text: "Browse",
                                            expandLabel: "Browse Submenu",
                                            route: "#browse",
                                            onClick: a("browse", "#browse"),
                                            options: [
                                                {
                                                    type: "page",
                                                    key: "avatar decorations",
                                                    text: "Avatar Decorations",
                                                    route: "#avatardecorations",
                                                    onClick: a("avatar decorations", "#avatardecorations"),
                                                },
                                                {
                                                    type: "page",
                                                    key: "nameplates",
                                                    text: "Nameplates",
                                                    badge: "new",
                                                    route: "#nameplates",
                                                    onClick: a("nameplates", "#nameplates"),
                                                },
                                            ],
                                        },
                                        {
                                            type: "menu",
                                            key: "game shops",
                                            text: "Game Shops",
                                            expandLabel: "Game Shops submenu",
                                            options: [
                                                {
                                                    type: "page",
                                                    key: "games-a",
                                                    text: "Game A",
                                                    iconSrc:
                                                        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24'%3E%3Crect width='24' height='24' rx='6' fill='%235865F2'/%3E%3C/svg%3E",
                                                    route: "#game-a",
                                                    onClick: a("games-a", "#game-a"),
                                                },
                                                {
                                                    type: "page",
                                                    key: "games-b",
                                                    text: "Game B",
                                                    iconSrc:
                                                        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24'%3E%3Crect width='24' height='24' rx='6' fill='%2323A55A'/%3E%3C/svg%3E",
                                                    route: "#game-b",
                                                    onClick: a("games-b", "#game-b"),
                                                },
                                            ],
                                        },
                                        {
                                            type: "page",
                                            key: "game servers",
                                            text: "Game Servers",
                                            badge: { type: "beta", variant: "brand" },
                                            route: "#gameservers",
                                            onClick: a("game servers", "#gameservers"),
                                        },
                                    ],
                                    [a],
                                );
                            return (0, o.jsxs)("div", {
                                className: _.MY,
                                children: [
                                    (0, o.jsx)("div", {
                                        className: _.jr,
                                        children: (0, o.jsx)(U, {
                                            "aria-label": "Playground Navigation",
                                            options: n,
                                            selectedKey: e,
                                            overflowLabel: "More",
                                            overflowExpandLabel: "More navigation options",
                                        }),
                                    }),
                                    (0, o.jsx)("div", {
                                        className: _.Qs,
                                        children: (0, o.jsx)(b.D, { variant: "heading-lg/bold", children: q[e] ?? e }),
                                    }),
                                ],
                            });
                        },
                    },
                ],
            },
        ],
        tags: ["Collectibles", "Shop", "Storefront"],
        IconComponent: n.U,
    },
    J = { playgroundBaseUrl: "collectibles", collections: [Y] };
