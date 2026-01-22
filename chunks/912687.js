n.d(t, {
    G0: () => d,
    WK: () => f,
});
var r = n(825913),
    i = n(357710),
    a = n(587771),
    s = n(290424),
    o = n(803082),
    l = n(64700),
    c = n(551208);
let u = (0, l.createContext)({}),
    d = (0, l.createContext)(null),
    f = (0, l.forwardRef)(function (e, t) {
        [e, t] = (0, r.JT)(e, t, u);
        let n = (0, c.k)(e),
            { groupProps: f } = (0, a.$)(e, n, t),
            p = (0, r.Sl)({
                ...e,
                values: {
                    isDisabled: n.isDisabled,
                    state: n,
                },
                defaultClassName: "react-aria-ToggleButtonGroup",
            }),
            _ = (0, s.$)(e, { global: !0 });
        return l.createElement(
            "div",
            {
                ...(0, o.v)(_, p, f),
                ref: t,
                slot: e.slot || void 0,
                "data-orientation": e.orientation || "horizontal",
                "data-disabled": e.isDisabled || void 0,
            },
            l.createElement(d.Provider, { value: n }, l.createElement(i.D, null, p.children)),
        );
    });
