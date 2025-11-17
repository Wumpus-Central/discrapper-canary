n.d(t, {
    $H: () => d,
    MJ: () => u,
    Vq: () => f,
});
var r = n(23893),
    i = n(595707),
    a = n(900090),
    o = n(152810),
    s = n(880016),
    l = n(158821),
    c = n(473749);
let u = (0, c.createContext)(null),
    d = (0, c.createContext)(null),
    f = (0, c.forwardRef)(function (e, t) {
        let n = e["aria-labelledby"];
        [e, t] = (0, i.pE)(e, t, u);
        let { dialogProps: f, titleProps: _ } = (0, o.R)(
                {
                    ...e,
                    "aria-labelledby": n,
                },
                t,
            ),
            p = (0, c.useContext)(d);
        f["aria-label"] ||
            f["aria-labelledby"] ||
            (e["aria-labelledby"] && (f["aria-labelledby"] = e["aria-labelledby"]));
        let h = (0, i.aX)({
                defaultClassName: "react-aria-Dialog",
                className: e.className,
                style: e.style,
                children: e.children,
                values: {
                    close: (null == p ? void 0 : p.close) || (() => {}),
                },
            }),
            m = (0, s.z)(e, { global: !0 });
        return c.createElement(
            "section",
            {
                ...(0, l.d)(m, h, f),
                ref: t,
                slot: e.slot || void 0,
            },
            c.createElement(
                i.zt,
                {
                    values: [
                        [
                            a.ni,
                            {
                                slots: {
                                    [i.hO]: {},
                                    title: {
                                        ..._,
                                        level: 2,
                                    },
                                },
                            },
                        ],
                        [
                            r.b,
                            {
                                slots: {
                                    [i.hO]: {},
                                    close: { onPress: () => (null == p ? void 0 : p.close()) },
                                },
                            },
                        ],
                    ],
                },
                h.children,
            ),
        );
    });
