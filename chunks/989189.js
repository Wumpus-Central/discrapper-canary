t.d(a, {
    $H: () => c,
    MJ: () => d,
    Vq: () => m,
});
var u = t(188366),
    n = t(922387),
    r = t(386843),
    i = t(749468),
    o = t(735437),
    l = t(43341),
    s = t(647438);
let d = (0, s.createContext)(null),
    c = (0, s.createContext)(null),
    m = (0, s.forwardRef)(function (e, a) {
        let t = e["aria-labelledby"];
        [e, a] = (0, n.pE)(e, a, d);
        let { dialogProps: m, titleProps: D } = (0, i.R)(
                {
                    ...e,
                    "aria-labelledby": t,
                },
                a,
            ),
            h = (0, s.useContext)(c);
        m["aria-label"] ||
            m["aria-labelledby"] ||
            (e["aria-labelledby"] && (m["aria-labelledby"] = e["aria-labelledby"]));
        let f = (0, n.aX)({
                defaultClassName: "react-aria-Dialog",
                className: e.className,
                style: e.style,
                children: e.children,
                values: {
                    close: (null == h ? void 0 : h.close) || (() => {}),
                },
            }),
            y = (0, o.z)(e, { global: !0 });
        return s.createElement(
            "section",
            {
                ...(0, l.d)(y, f, m),
                ref: a,
                slot: e.slot || void 0,
            },
            s.createElement(
                n.zt,
                {
                    values: [
                        [
                            r.ni,
                            {
                                slots: {
                                    [n.hO]: {},
                                    title: {
                                        ...D,
                                        level: 2,
                                    },
                                },
                            },
                        ],
                        [
                            u.b,
                            {
                                slots: {
                                    [n.hO]: {},
                                    close: { onPress: () => (null == h ? void 0 : h.close()) },
                                },
                            },
                        ],
                    ],
                },
                f.children,
            ),
        );
    });
