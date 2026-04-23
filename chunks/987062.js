t.d(a, { lG: () => y, MV: () => h, RG: () => D });
var n = t(197867),
    r = t(825913),
    i = t(257537),
    l = t(985620),
    o = t(290424),
    u = t(805447),
    s = t(64700);
t(340287);
var d = t(3388);
let c = s.createContext(null);
var m = t(318473);
let h = (0, s.createContext)(null),
    D = (0, s.createContext)(null),
    y = (0, s.forwardRef)(function (e, a) {
        let t = e["aria-labelledby"];
        [e, a] = (0, r.JT)(e, a, h);
        let { dialogProps: y, titleProps: p } = (function (e, a) {
                let t,
                    n,
                    { role: r = "dialog" } = e,
                    i = (0, l.X1)();
                i = e["aria-label"] ? void 0 : i;
                let m = (0, s.useRef)(!1);
                return (
                    (0, s.useEffect)(() => {
                        if (a.current && !a.current.contains(document.activeElement)) {
                            (0, u.l)(a.current);
                            let e = setTimeout(() => {
                                (document.activeElement === a.current || document.activeElement === document.body) &&
                                    ((m.current = !0),
                                    a.current && (a.current.blur(), (0, u.l)(a.current)),
                                    (m.current = !1));
                            }, 500);
                            return () => {
                                clearTimeout(e);
                            };
                        }
                    }, [a]),
                    (n = null == (t = (0, s.useContext)(c)) ? void 0 : t.setContain),
                    (0, d.N)(() => {
                        null == n || n(!0);
                    }, [n]),
                    {
                        dialogProps: {
                            ...(0, o.$)(e, { labelable: !0 }),
                            role: r,
                            tabIndex: -1,
                            "aria-labelledby": e["aria-labelledby"] || i,
                            onBlur: (e) => {
                                m.current && e.stopPropagation();
                            },
                        },
                        titleProps: { id: i },
                    }
                );
            })({ ...e, "aria-labelledby": t }, a),
            g = (0, s.useContext)(D);
        y["aria-label"] ||
            y["aria-labelledby"] ||
            (e["aria-labelledby"] && (y["aria-labelledby"] = e["aria-labelledby"]));
        let f = (0, r.Sl)({
                defaultClassName: "react-aria-Dialog",
                className: e.className,
                style: e.style,
                children: e.children,
                values: { close: (null == g ? void 0 : g.close) || (() => {}) },
            }),
            v = (0, o.$)(e, { global: !0 });
        return s.createElement(
            "section",
            { ...(0, m.v)(v, f, y), ref: a, slot: e.slot || void 0 },
            s.createElement(
                r.Kq,
                {
                    values: [
                        [i.A3, { slots: { [r.P_]: {}, title: { ...p, level: 2 } } }],
                        [n.k, { slots: { [r.P_]: {}, close: { onPress: () => (null == g ? void 0 : g.close()) } } }],
                    ],
                },
                f.children,
            ),
        );
    });
