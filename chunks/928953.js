n.d(t, { i: () => x });
var a = n(627968),
    s = n(64700),
    i = n(503698),
    l = n.n(i),
    r = n(397927),
    o = n(961895),
    d = n(343991),
    c = n(698638),
    u = n(727489);
let m = () => {
        (0, r.mMO)(
            async () => {
                let { default: e } = await Promise.resolve().then(n.bind(n, 343991));
                return (t) =>
                    (0, a.jsx)(e, {
                        title: "No image or video files found!",
                        help: "Please drop one or more image or video files.",
                        ...t,
                    });
            },
            { modalKey: d.D },
        );
    },
    h = (e) => {
        e.stopPropagation(), e.preventDefault();
    },
    x = (e) => {
        let { className: t, onDrop: n, children: i } = e,
            [x, p] = s.useState(!1),
            g = s.useRef(null),
            _ = s.useCallback((e) => {
                h(e), p(!0), (0, r.OoC)(d.D);
            }, []),
            f = s.useCallback((e) => {
                h(e);
                let t = g.current,
                    n = e.relatedTarget;
                (null != n && (null == t || t.contains(n))) || p(!1);
            }, []),
            v = s.useCallback(
                async (e) => {
                    h(e), p(!1);
                    let t = e.dataTransfer;
                    if (null == t) return void m();
                    let a = await Promise.all(
                        Array.from(t.items).map((e) => e.webkitGetAsEntry() ?? e.getAsEntry()),
                    ).then((e) => e.filter((e) => null != e));
                    a.length > 0 ? n(a) : m();
                },
                [n],
            );
        return (0, a.jsxs)("div", {
            ref: g,
            className: l()(t, u.iE),
            onDragEnter: _,
            onDragOver: h,
            onDragLeave: f,
            onDrop: v,
            children: [
                i,
                x &&
                    (0, a.jsx)("div", {
                        className: u.d2,
                        children: (0, a.jsxs)("div", {
                            className: u.vW,
                            children: [
                                (0, a.jsx)(o.A, { icons: c.ir }),
                                (0, a.jsx)(r.Heading, { variant: "heading-lg/bold", children: "Upload Shop Assets" }),
                                (0, a.jsxs)("div", {
                                    className: u.GA,
                                    children: [
                                        (0, a.jsx)(r.Text, {
                                            variant: "text-sm/normal",
                                            children: "Drop file(s) into this panel to preview Shop assets!",
                                        }),
                                        (0, a.jsxs)(r.Text, {
                                            variant: "text-sm/normal",
                                            children: [
                                                "Click",
                                                (0, a.jsx)(r.cBN, {
                                                    className: u.q4,
                                                    size: "xs",
                                                    color: r.LU0.colors.TEXT_DEFAULT,
                                                }),
                                                "above for more instructions.",
                                            ],
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    }),
            ],
        });
    };
