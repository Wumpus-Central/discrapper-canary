n.d(t, { M: () => u });
var r = n(407815),
    i = n(957478),
    l = n(961082),
    a = n(184093),
    o = n(582128);
let s = (0, o.createContext)({}),
    u = (0, o.forwardRef)(function (e, t) {
        [e, t] = (0, r.JT)(e, t, s);
        let { toolbarProps: n } = (0, i.t)(e, t),
            u = (0, r.Sl)({
                ...e,
                values: { orientation: e.orientation || "horizontal" },
                defaultClassName: "react-aria-Toolbar",
            }),
            c = (0, l.$)(e, { global: !0 });
        return (
            delete c.id,
            o.createElement(
                r.tT.div,
                {
                    ...(0, a.v)(c, u, n),
                    ref: t,
                    slot: e.slot || void 0,
                    "data-orientation": e.orientation || "horizontal",
                },
                u.children,
            )
        );
    });
