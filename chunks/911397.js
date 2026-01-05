n.d(t, { Z: () => f });
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(481060),
    l = n(195045),
    c = n(663537);
let u = 5500,
    d = 150,
    f = (e) => {
        let {
                id: t,
                occupant: n,
                x: a,
                y: f,
                assetKey: p,
                onClick: _,
                skipNewUserEducation: m = !1,
                shadowPosition: h,
            } = e,
            g = (0, l.Z)(),
            E = i.useMemo(() => (null == g ? void 0 : g.seats[p]), [g, p]),
            b = i.useMemo(() => (null == E ? void 0 : E.seat), [E]),
            y = i.useMemo(() => (null == E ? void 0 : E.shadow), [E]);
        return (0, r.jsx)(s.P3F, {
            "aria-label": "claim seat",
            onClick:
                null != _
                    ? (e) => {
                          e.preventDefault(), e.stopPropagation(), _(t);
                      }
                    : void 0,
            className: o()(c.seat, { [c.claimed]: null != n }),
            style: { transform: "translate(".concat(a, "px, ").concat(f, "px)") },
            children: (0, r.jsxs)("div", {
                className: c.seatWrapper,
                children: [
                    null != y &&
                        null != h &&
                        (0, r.jsx)("img", {
                            className: o()(c.image, c.shadow),
                            style: { transform: "translate(".concat(h.x, "px, ").concat(h.y, "px)") },
                            src: null == E ? void 0 : E.shadow,
                            alt: "",
                        }),
                    null != b &&
                        (0, r.jsx)("img", {
                            onDragStart: (e) => e.preventDefault(),
                            className: o()(c.image, {
                                [c.claimed]: null != n,
                                [c.noAnimation]: m,
                            }),
                            style: { animationDelay: "".concat(u + d * t, "ms") },
                            src: null == E ? void 0 : E.seat,
                            alt: "",
                        }),
                ],
            }),
        });
    };
