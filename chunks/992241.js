a.d(e, { M: () => s });
var o = a(980807),
    r = a(534502),
    i = a(892730),
    n = a(519837),
    l = a(582128);
let d = (0, l.createContext)({}),
    s = (0, l.forwardRef)(function (t, e) {
        [t, e] = (0, o.JT)(t, e, d);
        let { toolbarProps: a } = (0, r.t)(t, e),
            s = (0, o.Sl)({
                ...t,
                values: { orientation: t.orientation || "horizontal" },
                defaultClassName: "react-aria-Toolbar",
            }),
            c = (0, i.$)(t, { global: !0 });
        return (
            delete c.id,
            l.createElement(
                o.tT.div,
                {
                    ...(0, n.v)(c, s, a),
                    ref: e,
                    slot: t.slot || void 0,
                    "data-orientation": t.orientation || "horizontal",
                },
                s.children,
            )
        );
    });
