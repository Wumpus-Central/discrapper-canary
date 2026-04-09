n.d(t, { A: () => _ });
var i = n(627968),
    a = n(64700),
    r = n(884362),
    l = n(837381),
    s = n(311907),
    o = n(73939),
    d = n(397927),
    c = n(775602),
    u = n(652215),
    A = n(63461);
let _ = function (e) {
    let {
            rows: t,
            renderRow: n,
            renderSection: _,
            hasSearchQuery: h,
            sectionFilter: m,
            footer: g,
            renderSectionFooter: p,
        } = e,
        E = (0, s.bG)([c.A], () => c.A.keyboardModeEnabled),
        I = (0, s.bG)([c.A], () => c.A.useReducedMotion),
        f = (0, r.Ay)({ id: "people", isEnabled: E, async scrollToStart() {}, async scrollToEnd() {} }),
        C = m !== u.m3P.ONLINE && m !== u.m3P.ALL,
        T = I || h || C,
        N = a.useMemo(
            () =>
                t.map((e, t) =>
                    0 === e.length
                        ? null
                        : T
                          ? (0, i.jsxs)("div", { children: [_(t), e.map((e) => n(e, t)), p?.(t)] }, t)
                          : (0, i.jsxs)(
                                o.F,
                                {
                                    transitionAppear: !1,
                                    component: "div",
                                    children: [_(t), e.map((e) => n(e, t)), p?.(t)],
                                },
                                t,
                            ),
                ),
            [n, _, p, t, T],
        );
    return (0, i.jsx)(l.hD, {
        navigator: f,
        children: (0, i.jsx)(l.PR, {
            children: (e) => {
                let { ref: t, ...n } = e;
                return (0, i.jsxs)(d.ArX, { ref: t, className: A.e3, ...n, children: [N, g] });
            },
        }),
    });
};
