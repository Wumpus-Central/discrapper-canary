a.d(t, { i: () => b });
var n = a(627968),
    l = a(64700),
    i = a(503698),
    s = a.n(i),
    r = a(192308),
    o = a(534514),
    d = a(834730),
    c = a(290136),
    u = a(827734),
    m = a(961895),
    h = a(343991),
    p = a(698638),
    x = a(699666);
let g = () => {
        (0, r.openModalLazy)(
            async () => {
                let { default: e } = await Promise.resolve().then(a.bind(a, 343991));
                return (t) =>
                    (0, n.jsx)(e, {
                        title: "No image or video files found!",
                        help: "Please drop one or more image or video files.",
                        ...t,
                    });
            },
            { modalKey: h.D },
        );
    },
    v = (e) => {
        e.stopPropagation(), e.preventDefault();
    },
    b = (e) => {
        let { className: t, onDrop: a, children: i } = e,
            [b, _] = l.useState(!1),
            f = l.useRef(null),
            j = l.useCallback((e) => {
                v(e), _(!0), (0, r.closeModal)(h.D);
            }, []),
            A = l.useCallback((e) => {
                v(e);
                let t = f.current,
                    a = e.relatedTarget;
                (null != a && (null == t || t.contains(a))) || _(!1);
            }, []),
            y = l.useCallback(
                async (e) => {
                    v(e), _(!1);
                    let t = e.dataTransfer;
                    if (null == t) return void g();
                    let n = await Promise.all(
                        Array.from(t.items).map((e) => e.webkitGetAsEntry() ?? e.getAsEntry()),
                    ).then((e) => e.filter((e) => null != e));
                    n.length > 0 ? a(n) : g();
                },
                [a],
            );
        return (0, n.jsxs)("div", {
            ref: f,
            className: s()(t, x.iE),
            onDragEnter: j,
            onDragOver: v,
            onDragLeave: A,
            onDrop: y,
            children: [
                i,
                b &&
                    (0, n.jsx)("div", {
                        className: x.d2,
                        children: (0, n.jsxs)("div", {
                            className: x.vW,
                            children: [
                                (0, n.jsx)(m.A, { icons: p.ir }),
                                (0, n.jsx)(o.D, { variant: "heading-lg/bold", children: "Upload Shop Assets" }),
                                (0, n.jsxs)("div", {
                                    className: x.GA,
                                    children: [
                                        (0, n.jsx)(d.E, {
                                            variant: "text-sm/normal",
                                            children: "Drop file(s) into this panel to preview Shop assets!",
                                        }),
                                        (0, n.jsxs)(d.E, {
                                            variant: "text-sm/normal",
                                            children: [
                                                "Click",
                                                (0, n.jsx)(c.c, {
                                                    className: x.q4,
                                                    size: "xs",
                                                    color: u.A.colors.TEXT_DEFAULT,
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
