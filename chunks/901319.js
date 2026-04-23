n.d(t, { A: () => A });
var i = n(627968),
    s = n(64700),
    l = n(884362),
    a = n(837381),
    r = n(311907),
    o = n(73939),
    c = n(573613),
    d = n(775602),
    u = n(652215),
    m = n(795733);
let A = function (e) {
    let {
            rows: t,
            renderRow: n,
            renderSection: A,
            hasSearchQuery: h,
            sectionFilter: x,
            footer: p,
            renderSectionFooter: g,
        } = e,
        N = (0, r.bG)([d.A], () => d.A.keyboardModeEnabled),
        f = (0, r.bG)([d.A], () => d.A.useReducedMotion),
        _ = (0, l.Ay)({ id: "people", isEnabled: N, async scrollToStart() {}, async scrollToEnd() {} }),
        I = x !== u.m3P.ONLINE && x !== u.m3P.ALL,
        v = f || h || I,
        j = s.useMemo(
            () =>
                t.map((e, t) =>
                    0 === e.length
                        ? null
                        : v
                          ? (0, i.jsxs)("div", { children: [A(t), e.map((e) => n(e, t)), g?.(t)] }, t)
                          : (0, i.jsxs)(
                                o.F,
                                {
                                    transitionAppear: !1,
                                    component: "div",
                                    children: [A(t), e.map((e) => n(e, t)), g?.(t)],
                                },
                                t,
                            ),
                ),
            [n, A, g, t, v],
        );
    return (0, i.jsx)(a.hD, {
        navigator: _,
        children: (0, i.jsx)(a.PR, {
            children: (e) => {
                let { ref: t, ...n } = e;
                return (0, i.jsxs)(c.Ar, { ref: t, className: m.e3, ...n, children: [j, p] });
            },
        }),
    });
};
