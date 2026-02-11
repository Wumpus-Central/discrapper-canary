n.d(t, { A: () => v }), n(323874), n(14289), n(35956);
var a = n(627968),
    s = n(64700),
    i = n(311907),
    l = n(397927),
    r = n(110574),
    o = n(65593),
    d = n(70040),
    c = n(287809),
    u = n(581057),
    m = n(270704),
    h = n(369496),
    x = n(565832),
    p = n(622697),
    g = n(259059),
    f = n(698638),
    _ = n(465692);
function v() {
    let [e, t] = (0, s.useState)(!1),
        [n, i] = (0, s.useState)(!1),
        [r, c] = (0, s.useState)(null),
        x = (0, u.Ay)((e) => e.toolsCache),
        { setToolsCache: g, removeToolsCache: v } = (0, u.DE)(),
        { setImgCache: S } = (0, u.TW)(),
        T = (0, s.useCallback)(
            (e) => {
                let t = x[e];
                null != t && c({ src: t.url, palette: t.palette, preview: !0 }),
                    c((t) => (null == t ? { src: e, palette: m.Wj, preview: !0 } : { ...t, src: e, preview: !0 }));
            },
            [x],
        ),
        y = (0, s.useCallback)((e) => {
            c((t) => (null == t ? null : { ...t, palette: e, preview: !0 }));
        }, []),
        N = (0, s.useCallback)(
            (e) => {
                v(e);
            },
            [v],
        );
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsxs)("div", {
                className: _.ne,
                children: [
                    (0, a.jsxs)("div", {
                        className: _.gO,
                        children: [
                            (0, a.jsx)(l.Button, {
                                size: "sm",
                                onClick: () => {
                                    i(!1), t((e) => !e);
                                },
                                variant: "secondary",
                                text: "Toggle Themes",
                            }),
                            (0, a.jsx)(l.Button, {
                                size: "sm",
                                onClick: () => {
                                    t(!1), i((e) => !e);
                                },
                                variant: "secondary",
                                text: "Toggle Gradients",
                            }),
                        ],
                    }),
                    (0, a.jsxs)("div", {
                        className: _.uQ,
                        children: [
                            e && (0, a.jsx)(d.Ix, {}),
                            n &&
                                (0, a.jsx)(p.A, {
                                    selected: r?.palette?.name,
                                    onSelect: (e) => {
                                        r?.src != null && g(r.src, r.src, e), y(e);
                                    },
                                }),
                        ],
                    }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: _.iW,
                children: [
                    (0, a.jsx)(b, { nameplate: r }, r?.palette?.name),
                    (0, a.jsxs)("div", {
                        className: _.Uo,
                        children: [
                            (0, a.jsx)(l.Text, {
                                variant: "text-sm/semibold",
                                children: "Drag background image to screen",
                            }),
                            (0, a.jsx)(o.A, {
                                title: "upload image",
                                description: "upload the background",
                                icons: f.xi,
                                onDrop: async (e) => {
                                    let t = URL.createObjectURL(e[0]),
                                        n = e[0],
                                        a = await n.arrayBuffer();
                                    S(t, t, (0, h.nI)(a)), g(t, t, m.Wj);
                                },
                            }),
                            (0, a.jsx)("div", {
                                className: _.is,
                                children: Object.values(x).map((e) => {
                                    let { url: t } = e;
                                    return (0, a.jsx)(j, { src: t, onSetStatic: T, removeAsset: N }, t);
                                }),
                            }),
                            (0, a.jsx)(C, {
                                label: "gradient override",
                                onChange: (e) => y({ name: m.AK, darkBackground: e, lightBackground: e }),
                            }),
                            (0, a.jsx)(A, { label: "set", onClick: () => {} }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function b(e) {
    let { nameplate: t } = e,
        [n, i] = (0, s.useState)(320),
        r = (0, s.useRef)(null),
        o = (0, s.useRef)(null),
        d = (0, s.useRef)(null),
        c = (0, s.useRef)(document),
        u = (0, s.useCallback)((e) => {
            if (null != r.current) {
                let t = r.current.getBoundingClientRect();
                i(Math.max(264, Math.min(432, e.clientX - t.left)));
            }
        }, []),
        m = (0, s.useCallback)(
            (e) => {
                e.preventDefault(), e.stopPropagation();
                let t = e.currentTarget.ownerDocument;
                c.current = t;
                let n = (e) => {
                        e.preventDefault(), u(e);
                    },
                    a = () => {
                        null != o.current && (t.removeEventListener("mousemove", o.current), (o.current = null)),
                            null != d.current && (t.removeEventListener("mouseup", d.current), (d.current = null));
                    };
                (o.current = n), (d.current = a), t.addEventListener("mousemove", n), t.addEventListener("mouseup", a);
            },
            [u],
        );
    return (
        (0, s.useEffect)(
            () => () => {
                null != o.current && (c.current.removeEventListener("mousemove", o.current), (o.current = null)),
                    null != d.current && (c.current.removeEventListener("mouseup", d.current), (d.current = null));
            },
            [],
        ),
        (0, a.jsx)(l.IpV, {
            className: _.Fp,
            orientation: "horizontal",
            children: (0, a.jsxs)("div", {
                ref: r,
                className: _.ey,
                style: { width: `${n}px` },
                children: [
                    (0, a.jsx)(l.Text, { variant: "text-sm/semibold", children: "Memberlist" }),
                    (0, a.jsx)(S, { nameplate: t }),
                    (0, a.jsx)(l.Text, { variant: "text-sm/semibold", children: "DMs" }),
                    (0, a.jsx)(T, { nameplate: t }),
                    (0, a.jsx)(l.Text, { variant: "text-sm/semibold", children: "RTC" }),
                    (0, a.jsx)(y, { nameplate: t }),
                    (0, a.jsx)("div", { className: _.Di, onMouseDown: m }),
                ],
            }),
        })
    );
}
function j(e) {
    let { src: t, onSetStatic: n, removeAsset: s } = e;
    return (0, a.jsxs)("div", {
        className: _.xO,
        children: [
            (0, a.jsx)(l.DUT, {
                onClick: () => s(t),
                className: _.yV,
                children: (0, a.jsx)(l.PGe, { size: "custom", width: 16, height: 16, name: "x" }),
            }),
            (0, a.jsx)("img", { className: _.Ez, src: t, alt: "" }),
            (0, a.jsx)("div", {
                className: _.Lu,
                children: (0, a.jsx)(l.Button, {
                    onClick: () => n(t),
                    size: "sm",
                    variant: "secondary",
                    text: "set nameplate",
                }),
            }),
        ],
    });
}
function A(e) {
    let { label: t, onClick: n } = e;
    return (0, a.jsxs)("div", {
        className: _.Uu,
        children: [
            (0, a.jsx)(l.Text, { variant: "text-sm/normal", children: "coming soon" }),
            (0, a.jsx)(l.Button, { variant: "secondary", size: "sm", text: t, disabled: !0, onClick: n }),
        ],
    });
}
function C(e) {
    let { label: t, onChange: n } = e;
    return (0, a.jsxs)("div", {
        className: _.Im,
        children: [
            (0, a.jsx)(l.Text, { variant: "text-sm/normal", children: t }),
            (0, a.jsx)("input", {
                onChange: (e) => {
                    n(e.target.value);
                },
                className: _.QL,
                placeholder: "#000000",
            }),
        ],
    });
}
function S(e) {
    let { nameplate: t } = e,
        n = (0, i.bG)([c.default], () => c.default.getCurrentUser());
    return (0, a.jsx)("div", {
        className: _.VH,
        children: (0, a.jsxs)("div", {
            className: _.H1,
            children: [
                (0, a.jsx)(l.Text, { className: _.Pf, variant: "text-sm/semibold", children: "DEFAULT" }),
                (0, a.jsx)(r.A, { nameplate: t, user: n, currentUser: n }),
                (0, a.jsx)(l.Text, { className: _.Pf, variant: "text-sm/semibold", children: "FOCUSED" }),
                (0, a.jsxs)("div", {
                    children: [
                        (0, a.jsx)(r.A, { nameplate: t, selected: !0, user: n, currentUser: n }),
                        (0, a.jsx)(r.A, { selected: !0, user: n, currentUser: n }),
                    ],
                }),
            ],
        }),
    });
}
function T(e) {
    let { nameplate: t } = e;
    return (0, a.jsx)("div", {
        className: _.VH,
        children: (0, a.jsxs)("div", {
            className: _.H1,
            children: [
                (0, a.jsx)(l.Text, { className: _.Pf, variant: "text-sm/semibold", children: "DEFAULT" }),
                (0, a.jsx)(g.A, { nameplate: t }),
                (0, a.jsx)(l.Text, { className: _.Pf, variant: "text-sm/semibold", children: "FOCUSED" }),
                (0, a.jsxs)("div", {
                    children: [(0, a.jsx)(g.A, { selected: !0, nameplate: t }), (0, a.jsx)(g.A, { selected: !0 })],
                }),
            ],
        }),
    });
}
function y(e) {
    let { nameplate: t } = e;
    return (0, a.jsx)("div", {
        className: _.VH,
        children: (0, a.jsx)("div", { className: _.X2, children: (0, a.jsx)(x.A, { nameplate: t }) }),
    });
}
