n.d(t, { A: () => f });
var l = n(477900),
    a = n(503698),
    r = n.n(a),
    s = n(582128),
    i = n(835517),
    o = n(399667),
    c = n(819648),
    d = n(881245);
function u(e) {
    let { character: t, size: n, className: a } = e,
        u = s.useMemo(() => (0, c.vF)(t, Math.round(n * (0, i.A)())), [t, n]),
        m = s.useMemo(() => (0, o.O)(t), [t]),
        p = s.useRef(new Set()),
        [h, x] = s.useState(!1);
    function f(e) {
        (p.current.add(e), u.every((e) => p.current.has(e)) && x(!0));
    }
    return (
        s.useLayoutEffect(() => {
            let e = u.filter((e) => p.current.has(e));
            ((p.current = new Set(e)), x(e.length === u.length));
        }, [u]),
        (0, l.jsx)("div", {
            role: "img",
            "aria-label": m,
            className: r()(d.GG, { [d.Kc]: h }, a),
            children: u.map((e) =>
                (0, l.jsx)(
                    "img",
                    { src: e, alt: "", draggable: !1, className: d.qd, onLoad: () => f(e), onError: () => f(e) },
                    e,
                ),
            ),
        })
    );
}
var m = n(343053),
    p = n(48763),
    h = n(955671);
let x = { [p.W.SM]: 224, [p.W.LG]: 448 };
function f(e) {
    let { character: t } = e,
        { size: n } = (0, m.Z)();
    return (0, l.jsx)("div", {
        className: r()(h.characterColumn, h[n]),
        children: (0, l.jsx)(u, { character: t, size: x[n], className: h.character }),
    });
}
