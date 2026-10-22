n.d(t, { A: () => g });
var l = n(477900),
    r = n(503698),
    a = n.n(r),
    i = n(582128),
    s = n(835517),
    o = n(399667),
    c = n(819648),
    u = n(881245);
function d(e) {
    let { character: t, size: n, className: r } = e,
        d = i.useMemo(() => (0, c.vF)(t, Math.round(n * (0, s.A)())), [t, n]),
        m = i.useMemo(() => (0, o.O)(t), [t]),
        h = i.useRef(new Set()),
        [p, x] = i.useState(!1);
    function g(e) {
        (h.current.add(e), d.every((e) => h.current.has(e)) && x(!0));
    }
    return (
        i.useLayoutEffect(() => {
            let e = d.filter((e) => h.current.has(e));
            ((h.current = new Set(e)), x(e.length === d.length));
        }, [d]),
        (0, l.jsx)("div", {
            role: "img",
            "aria-label": m,
            className: a()(u.GG, { [u.Kc]: p }, r),
            children: d.map((e) =>
                (0, l.jsx)(
                    "img",
                    { src: e, alt: "", draggable: !1, className: u.qd, onLoad: () => g(e), onError: () => g(e) },
                    e,
                ),
            ),
        })
    );
}
var m = n(343053),
    h = n(48763),
    p = n(955671);
let x = { [h.W.SM]: 224, [h.W.LG]: 448 };
function g(e) {
    let { character: t } = e,
        { size: n } = (0, m.Z)();
    return (0, l.jsx)("div", {
        className: a()(p.characterColumn, p[n]),
        children: (0, l.jsx)(d, { character: t, size: x[n], className: p.character }),
    });
}
