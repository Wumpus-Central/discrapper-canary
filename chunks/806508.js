a.r(l), a.d(l, { playgroundConfig: () => v, aiVisualIdentityCollection: () => p });
var t = a(477900),
    s = a(582128),
    i = a(834730),
    o = a(661531),
    r = a(503698),
    n = a.n(r),
    d = a(374839);
let c = ["1", "2", "3", "4", "5", "6", "7"],
    u = s.memo(function (e) {
        let { size: l = 16, "aria-label": a, className: s, ref: i, color: o = "currentColor" } = e;
        return (0, t.jsx)("div", {
            ref: i,
            className: n()(d.wG, s),
            style: { "--custom-ai-loader-size": `${l}px`, color: "string" == typeof o ? o : o.css },
            role: null == a ? void 0 : "img",
            "aria-label": a,
            "aria-hidden": null == a,
            children: Array.from({ length: 3 }, (e, l) =>
                (0, t.jsx)(
                    "span",
                    {
                        className: d.NI,
                        children: (0, t.jsx)("span", {
                            className: d.u4,
                            children: c.map((e) => (0, t.jsx)("span", { className: d.Vq, children: e }, e)),
                        }),
                    },
                    l,
                ),
            ),
        });
    });
var x = a(935651);
let m = [12, 16, 24, 32, 48, 64],
    h = [
        { label: "Default", className: void 0, note: "2400ms loop" },
        { label: "reduce-motion", className: "reduce-motion", note: "half speed (4800ms)" },
        { label: "stop-animation", className: "stop-animation", note: "frozen on the dot" },
    ],
    p = {
        id: "ai-visual-identity",
        name: "AI Visual Identity",
        groups: [
            {
                title: "AILoader",
                stories: [
                    {
                        name: "AILoader",
                        id: "ai-loader",
                        component: function (e) {
                            let { size: l, color: a } = e;
                            return (0, t.jsx)("div", {
                                style: "" === a ? void 0 : { color: a },
                                children: (0, t.jsx)(u, { size: l }),
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
                            return (0, t.jsxs)("div", {
                                className: x.UP,
                                children: [
                                    (0, t.jsxs)("div", {
                                        className: x.uW,
                                        children: [
                                            (0, t.jsx)(i.E, {
                                                variant: "text-sm/semibold",
                                                color: "text-default",
                                                children: "Sizes",
                                            }),
                                            (0, t.jsxs)(i.E, {
                                                variant: "text-xs/normal",
                                                color: "text-subtle",
                                                children: [
                                                    "Glyphs should stay optically centered at every size, and the clip window should never reveal a neighbouring glyph. The dashed outline is the loader's own box: ",
                                                    "size",
                                                    " tall by 3.75 \xd7 ",
                                                    "size",
                                                    " wide.",
                                                ],
                                            }),
                                            (0, t.jsx)("div", {
                                                className: x.nM,
                                                children: m.map((e) =>
                                                    (0, t.jsxs)(
                                                        "div",
                                                        {
                                                            className: x.Hn,
                                                            children: [
                                                                (0, t.jsx)(u, {
                                                                    size: e,
                                                                    className: x.O,
                                                                    color: o.A.colors.TEXT_DEFAULT,
                                                                }),
                                                                (0, t.jsxs)(i.E, {
                                                                    variant: "text-xs/normal",
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
                                    (0, t.jsxs)("div", {
                                        className: x.uW,
                                        children: [
                                            (0, t.jsx)(i.E, {
                                                variant: "text-sm/semibold",
                                                color: "text-default",
                                                children: "Motion states",
                                            }),
                                            (0, t.jsx)(i.E, {
                                                variant: "text-xs/normal",
                                                color: "text-subtle",
                                                children:
                                                    "Reduced motion slows the cycle rather than freezing it, so the loader still reads as \u201Cworking\u201D. The loader also stops entirely while the app is unfocused, matching Mana's Spinner.",
                                            }),
                                            (0, t.jsx)("div", {
                                                className: x.nM,
                                                children: h.map((e) => {
                                                    let { label: l, className: a, note: s } = e;
                                                    return (0, t.jsxs)(
                                                        "div",
                                                        {
                                                            className: x.Hn,
                                                            children: [
                                                                (0, t.jsx)("div", {
                                                                    className: a,
                                                                    children: (0, t.jsx)(u, {
                                                                        size: 48,
                                                                        color: o.A.colors.TEXT_DEFAULT,
                                                                    }),
                                                                }),
                                                                (0, t.jsx)(i.E, {
                                                                    variant: "text-xs/normal",
                                                                    color: "text-subtle",
                                                                    children: l,
                                                                }),
                                                                (0, t.jsx)(i.E, {
                                                                    variant: "text-xs/normal",
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
            },
        ],
    },
    v = { collections: [p] };
