t.d(l, { playgroundConfig: () => N });
var a = t(477900),
    s = t(582128),
    o = t(646514),
    i = t(844222),
    n = t(586036);
function r(e) {
    let {
            area: l = 0,
            glyphSize: t = 16,
            radius: r = { x: 5, y: 5 },
            color: d = o.A.colors.TEXT_DEFAULT,
            fpsLimit: c = 30,
            edgeBand: u = 3,
        } = e,
        x = s.useContext(i.C),
        {
            top: m = 0,
            bottom: h = 0,
            left: b = 0,
            right: y = 0,
        } = "number" == typeof l ? { top: l, bottom: l, left: l, right: l } : l;
    return (0, a.jsx)(n.j, {
        fit: "layout",
        style: {
            position: "absolute",
            left: -b,
            top: -m,
            width: `calc(100% + ${b}px + ${y}px)`,
            height: `calc(100% + ${m}px + ${h}px)`,
            pointerEvents: "none",
        },
        listenOnDocumentBody: !0,
        withReducedMotion: "play",
        dataBinding: {
            edgeBand: u,
            insetTop: m,
            insetBottom: h,
            insetLeft: b,
            insetRight: y,
            color: d,
            radiusX: "number" == typeof r ? r : r.x,
            radiusY: "number" == typeof r ? r : r.y,
            glyphSize: t,
            fpsLimit: c,
            reducedMotion: x.reducedMotion.enabled,
        },
    });
}
var d = t(13316);
let c = {
        "text-default": o.A.colors.TEXT_DEFAULT,
        "text-muted": o.A.colors.TEXT_MUTED,
        "text-brand": o.A.colors.TEXT_BRAND,
    },
    u = {
        title: "AIBloom",
        stories: [
            {
                name: "AIBloom",
                id: "ai-bloom",
                component: function (e) {
                    let {
                            placeholderElementArea: l,
                            areaSize: t,
                            top: s,
                            right: o,
                            bottom: i,
                            left: n,
                            glyphSize: u,
                            radius: x,
                            color: m,
                            edgeBand: h,
                        } = e,
                        b = { "--__demo-area": `${l}px` };
                    return (0, a.jsx)("div", {
                        className: d.q,
                        children: (0, a.jsx)("div", {
                            className: d.M,
                            style: b,
                            children: (0, a.jsx)(r, {
                                area: { top: s ? t : 0, right: o ? t : 0, bottom: i ? t : 0, left: n ? t : 0 },
                                glyphSize: u,
                                radius: x,
                                color: c[m],
                                edgeBand: h,
                            }),
                        }),
                    });
                },
                controls: {
                    placeholderElementArea: {
                        label: "Placeholder element area",
                        type: "slider",
                        defaultValue: 400,
                        minValue: 100,
                        maxValue: 600,
                    },
                    areaSize: { label: "Animation area (px)", type: "number", defaultValue: 64, minValue: 0 },
                    top: { label: "Top", type: "boolean", defaultValue: !0 },
                    right: { label: "Right", type: "boolean", defaultValue: !0 },
                    bottom: { label: "Bottom", type: "boolean", defaultValue: !0 },
                    left: { label: "Left", type: "boolean", defaultValue: !0 },
                    glyphSize: { label: "Glyph size (px)", type: "number", defaultValue: 16, minValue: 8 },
                    radius: { label: "Reveal radius (glyphs)", type: "number", defaultValue: 3, minValue: 1 },
                    color: {
                        label: "Color",
                        type: "select",
                        defaultValue: "text-default",
                        options: Object.keys(c).map((e) => ({ label: e, value: e })),
                    },
                    edgeBand: { label: "Edge band (glyphs)", type: "number", defaultValue: 3, minValue: 0 },
                },
            },
        ],
    };
var x = t(834730),
    m = t(336288),
    h = t(935651);
let b = [12, 16, 24, 32, 48, 64],
    y = [
        { label: "Default", className: void 0, note: "2400ms loop" },
        { label: "reduce-motion", className: "reduce-motion", note: "half speed (4800ms)" },
        { label: "stop-animation", className: "stop-animation", note: "frozen on the dot" },
    ],
    p = {
        title: "AILoader",
        stories: [
            {
                name: "AILoader",
                id: "ai-loader",
                component: function (e) {
                    let { size: l, color: t } = e;
                    return (0, a.jsx)("div", {
                        style: "" === t ? void 0 : { color: t },
                        children: (0, a.jsx)(m.i, { size: l }),
                    });
                },
                controls: {
                    size: {
                        label: "Size (px per glyph)",
                        type: "slider",
                        defaultValue: 32,
                        minValue: 8,
                        maxValue: 128,
                    },
                    color: {
                        label: "Color",
                        type: "select",
                        defaultValue: "var(--text-default)",
                        options: [
                            { label: "text-default", value: "var(--text-default)" },
                            { label: "text-muted", value: "var(--text-muted)" },
                            { label: "text-brand", value: "var(--text-brand)" },
                            { label: "white", value: "var(--white)" },
                        ],
                    },
                },
            },
            {
                name: "Sizes & Motion States",
                id: "ai-loader-matrix",
                component: function () {
                    return (0, a.jsxs)("div", {
                        className: h.UP,
                        children: [
                            (0, a.jsxs)("div", {
                                className: h.uW,
                                children: [
                                    (0, a.jsx)(x.E, {
                                        variant: "body-sm/semibold",
                                        color: "text-default",
                                        children: "Sizes",
                                    }),
                                    (0, a.jsx)(x.E, {
                                        variant: "body-xs/normal",
                                        color: "text-subtle",
                                        children:
                                            "Glyphs should stay optically centered at every size, and the clip window should never reveal a neighbouring glyph. The dashed outline is the loader's own box: size tall by 3.75 \xd7 size wide.",
                                    }),
                                    (0, a.jsx)("div", {
                                        className: h.nM,
                                        children: b.map((e) =>
                                            (0, a.jsxs)(
                                                "div",
                                                {
                                                    className: h.Hn,
                                                    children: [
                                                        (0, a.jsx)(m.i, {
                                                            size: e,
                                                            className: h.O,
                                                            color: o.A.colors.TEXT_DEFAULT,
                                                        }),
                                                        (0, a.jsxs)(x.E, {
                                                            variant: "body-xs/normal",
                                                            color: "text-subtle",
                                                            children: [e, "px"],
                                                        }),
                                                    ],
                                                },
                                                e,
                                            ),
                                        ),
                                    }),
                                ],
                            }),
                            (0, a.jsxs)("div", {
                                className: h.uW,
                                children: [
                                    (0, a.jsx)(x.E, {
                                        variant: "body-sm/semibold",
                                        color: "text-default",
                                        children: "Motion states",
                                    }),
                                    (0, a.jsx)(x.E, {
                                        variant: "body-xs/normal",
                                        color: "text-subtle",
                                        children:
                                            "Reduced motion slows the cycle rather than freezing it, so the loader still reads as \u201Cworking\u201D. The loader also stops entirely while the app is unfocused, matching Mana's Spinner.",
                                    }),
                                    (0, a.jsx)("div", {
                                        className: h.nM,
                                        children: y.map((e) => {
                                            let { label: l, className: t, note: s } = e;
                                            return (0, a.jsxs)(
                                                "div",
                                                {
                                                    className: h.Hn,
                                                    children: [
                                                        (0, a.jsx)("div", {
                                                            className: t,
                                                            children: (0, a.jsx)(m.i, {
                                                                size: 48,
                                                                color: o.A.colors.TEXT_DEFAULT,
                                                            }),
                                                        }),
                                                        (0, a.jsx)(x.E, {
                                                            variant: "body-xs/normal",
                                                            color: "text-subtle",
                                                            children: l,
                                                        }),
                                                        (0, a.jsx)(x.E, {
                                                            variant: "body-xs/normal",
                                                            color: "text-subtle",
                                                            children: s,
                                                        }),
                                                    ],
                                                },
                                                l,
                                            );
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    });
                },
            },
        ],
    };
var v = t(331322),
    f = t(286251),
    j = t(829888);
let g = ["Ask about day one survival strategies", "Ask how to build your first mineshaft", "Ask about Minecraft"];
function E(e) {
    let { children: l } = e,
        t = s.useContext(i.C),
        o = s.useMemo(() => ({ ...t, reducedMotion: { ...t.reducedMotion, enabled: !0 } }), [t]);
    return (0, a.jsx)(i.C.Provider, { value: o, children: l });
}
function A() {
    let e = s.useRef(null),
        l = s.useCallback(() => e.current?.play(), []);
    return (0, a.jsx)("div", {
        className: j.dw,
        tabIndex: 0,
        onMouseEnter: l,
        onFocus: l,
        children: (0, a.jsx)(f.o, { ref: e, text: g, delay: null }),
    });
}
let N = {
    collections: [
        {
            id: "ai-visual-identity",
            name: "AI Visual Identity",
            groups: [
                p,
                u,
                {
                    title: "AIShimmer",
                    stories: [
                        {
                            name: "AIShimmer",
                            id: "ai-shimmer",
                            component: function () {
                                return (0, a.jsxs)(v.B, {
                                    gap: 16,
                                    children: [
                                        (0, a.jsx)(x.E, { variant: "body-md/normal", children: "Example showcase" }),
                                        (0, a.jsxs)("div", {
                                            className: j.GG,
                                            children: [
                                                (0, a.jsxs)("div", {
                                                    className: j.uW,
                                                    children: [
                                                        (0, a.jsx)(x.E, {
                                                            variant: "body-sm/semibold",
                                                            color: "text-default",
                                                            children: "Cycling placeholders",
                                                        }),
                                                        (0, a.jsx)(x.E, {
                                                            variant: "body-xs/normal",
                                                            color: "text-subtle",
                                                            children:
                                                                "Suggested prompts rotate after the configured delay.",
                                                        }),
                                                        (0, a.jsx)("div", {
                                                            className: j.dw,
                                                            children: (0, a.jsx)(f.o, { text: g, delay: 1500 }),
                                                        }),
                                                    ],
                                                }),
                                                (0, a.jsxs)("div", {
                                                    className: j.uW,
                                                    children: [
                                                        (0, a.jsx)(x.E, {
                                                            variant: "body-sm/semibold",
                                                            color: "text-default",
                                                            children: "Staggered offsets",
                                                        }),
                                                        (0, a.jsx)(x.E, {
                                                            variant: "body-xs/normal",
                                                            color: "text-subtle",
                                                            children:
                                                                "`initialDelay` offsets effects that start together.",
                                                        }),
                                                        (0, a.jsx)(f.o, { text: g, delay: 1500, initialDelay: 0 }),
                                                        (0, a.jsx)(f.o, { text: g, delay: 1500, initialDelay: 100 }),
                                                        (0, a.jsx)(f.o, { text: g, delay: 1500, initialDelay: 200 }),
                                                    ],
                                                }),
                                                (0, a.jsxs)("div", {
                                                    className: j.uW,
                                                    children: [
                                                        (0, a.jsx)(x.E, {
                                                            variant: "body-sm/semibold",
                                                            color: "text-default",
                                                            children: "Reduced motion",
                                                        }),
                                                        (0, a.jsx)(x.E, {
                                                            variant: "body-xs/normal",
                                                            color: "text-subtle",
                                                            children:
                                                                "This example forces a simple cross-fade regardless of your system setting.",
                                                        }),
                                                        (0, a.jsx)("div", {
                                                            className: j.dw,
                                                            children: (0, a.jsx)(E, {
                                                                children: (0, a.jsx)(f.o, { text: g, delay: 1500 }),
                                                            }),
                                                        }),
                                                    ],
                                                }),
                                                (0, a.jsxs)("div", {
                                                    className: j.uW,
                                                    children: [
                                                        (0, a.jsx)(x.E, {
                                                            variant: "body-sm/semibold",
                                                            color: "text-default",
                                                            children: "Hover to play",
                                                        }),
                                                        (0, a.jsx)(x.E, {
                                                            variant: "body-xs/normal",
                                                            color: "text-subtle",
                                                            children:
                                                                "A `null` delay never cycles on its own; each hover or focus calls `play()` on the ref.",
                                                        }),
                                                        (0, a.jsx)(A, {}),
                                                    ],
                                                }),
                                                (0, a.jsxs)("div", {
                                                    className: j.uW,
                                                    children: [
                                                        (0, a.jsx)(x.E, {
                                                            variant: "body-sm/semibold",
                                                            color: "text-default",
                                                            children: "Single line",
                                                        }),
                                                        (0, a.jsx)(x.E, {
                                                            variant: "body-xs/normal",
                                                            color: "text-subtle",
                                                            children:
                                                                "A single string animates back to itself after the initial delay.",
                                                        }),
                                                        (0, a.jsx)("div", {
                                                            className: j.dw,
                                                            children: (0, a.jsx)(f.o, {
                                                                text: "Ask about day one survival strategies",
                                                                delay: 1500,
                                                            }),
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                    ],
                                });
                            },
                        },
                    ],
                },
            ],
        },
    ],
};
