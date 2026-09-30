i.d(t, { M: () => c });
var l = i(407815),
    n = i(957478),
    s = i(961082),
    a = i(184093),
    o = i(582128);
let r = (0, o.createContext)({}),
    c = (0, o.forwardRef)(function (e, t) {
        [e, t] = (0, l.JT)(e, t, r);
        let { toolbarProps: i } = (0, n.t)(e, t),
            c = (0, l.Sl)({
                ...e,
                values: { orientation: e.orientation || "horizontal" },
                defaultClassName: "react-aria-Toolbar",
            }),
            d = (0, s.$)(e, { global: !0 });
        return (
            delete d.id,
            o.createElement(
                l.tT.div,
                {
                    ...(0, a.v)(d, c, i),
                    ref: t,
                    slot: e.slot || void 0,
                    "data-orientation": e.orientation || "horizontal",
                },
                c.children,
            )
        );
    });
