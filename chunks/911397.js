n.d(t, { Z: () => u });
var i = n(54381),
    r = n(473749),
    l = n(120356),
    a = n.n(l),
    o = n(481060),
    s = n(195045),
    c = n(663537);
let u = (e) => {
    let {
            id: t,
            occupant: n,
            x: l,
            y: u,
            assetKey: d,
            onClick: p,
            skipNewUserEducation: f = !1,
            shadowPosition: h,
        } = e,
        m = (0, s.Z)(),
        g = r.useMemo(() => (null == m ? void 0 : m.seats[d]), [m, d]),
        b = r.useMemo(() => (null == g ? void 0 : g.seat), [g]),
        y = r.useMemo(() => (null == g ? void 0 : g.shadow), [g]);
    return (0, i.jsx)(o.P3F, {
        "aria-label": "claim seat",
        onClick: (e) => {
            e.preventDefault(), e.stopPropagation(), p(t);
        },
        className: a()(c.seat, { [c.claimed]: null != n }),
        style: { transform: "translate(".concat(l, "px, ").concat(u, "px)") },
        children: (0, i.jsxs)("div", {
            className: c.seatWrapper,
            children: [
                null != y &&
                    null != h &&
                    (0, i.jsx)("img", {
                        className: a()(c.image, c.shadow),
                        style: { transform: "translate(".concat(h.x, "px, ").concat(h.y, "px)") },
                        src: null == g ? void 0 : g.shadow,
                        alt: "",
                    }),
                null != b &&
                    (0, i.jsx)("img", {
                        onDragStart: (e) => e.preventDefault(),
                        className: a()(c.image, {
                            [c.claimed]: null != n,
                            [c.noAnimation]: f,
                        }),
                        style: { animationDelay: "".concat(5500 + 150 * t, "ms") },
                        src: null == g ? void 0 : g.seat,
                        alt: "",
                    }),
            ],
        }),
    });
};
