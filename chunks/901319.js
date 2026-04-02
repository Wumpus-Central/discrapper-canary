n.d(t, { A: () => h });
var i = n(627968),
    l = n(64700),
    a = n(884362),
    r = n(837381),
    s = n(311907),
    o = n(73939),
    d = n(397927),
    c = n(775602),
    u = n(652215),
    A = n(998838);
let h = function (e) {
    let {
            rows: t,
            renderRow: n,
            renderSection: h,
            hasSearchQuery: _,
            sectionFilter: m,
            footer: p,
            renderSectionFooter: g,
        } = e,
        E = (0, s.bG)([c.A], () => c.A.keyboardModeEnabled),
        I = (0, s.bG)([c.A], () => c.A.useReducedMotion),
        f = (0, a.Ay)({ id: "people", isEnabled: E, async scrollToStart() {}, async scrollToEnd() {} }),
        C = m !== u.m3P.ONLINE && m !== u.m3P.ALL,
        T = I || _ || C,
        N = l.useMemo(
            () =>
                t.map((e, t) =>
                    0 === e.length
                        ? null
                        : T
                          ? (0, i.jsxs)("div", { children: [h(t), e.map((e) => n(e, t)), g?.(t)] }, t)
                          : (0, i.jsxs)(
                                o.F,
                                {
                                    transitionAppear: !1,
                                    component: "div",
                                    children: [h(t), e.map((e) => n(e, t)), g?.(t)],
                                },
                                t,
                            ),
                ),
            [n, h, g, t, T],
        );
    return (0, i.jsx)(r.hD, {
        navigator: f,
        children: (0, i.jsx)(r.PR, {
            children: (e) => {
                let { ref: t, ...n } = e;
                return (0, i.jsxs)(d.ArX, { ref: t, className: A.e3, ...n, children: [N, p] });
            },
        }),
    });
};
