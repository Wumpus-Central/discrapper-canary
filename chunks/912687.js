"use strict";
n.d(t, { G0: () => d, WK: () => _ });
var r = n(825913),
    i = n(357710),
    s = n(587771),
    a = n(290424),
    o = n(803082),
    l = n(64700),
    u = n(551208);
let c = (0, l.createContext)({}),
    d = (0, l.createContext)(null),
    _ = (0, l.forwardRef)(function (e, t) {
        [e, t] = (0, r.JT)(e, t, c);
        let n = (0, u.k)(e),
            { groupProps: _ } = (0, s.$)(e, n, t),
            f = (0, r.Sl)({
                ...e,
                values: { isDisabled: n.isDisabled, state: n },
                defaultClassName: "react-aria-ToggleButtonGroup",
            }),
            p = (0, a.$)(e, { global: !0 });
        return l.createElement(
            "div",
            {
                ...(0, o.v)(p, f, _),
                ref: t,
                slot: e.slot || void 0,
                "data-orientation": e.orientation || "horizontal",
                "data-disabled": e.isDisabled || void 0,
            },
            l.createElement(d.Provider, { value: n }, l.createElement(i.D, null, f.children)),
        );
    });
