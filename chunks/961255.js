n.d(t, { A: () => h });
var r = n(627968),
    l = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(442215),
    o = n(397927),
    u = n(892358),
    c = n(341915),
    d = n(890687),
    m = n(646764),
    p = n(203908),
    E = n(828080);
let f = { duration: 250 },
    h = (e) => {
        let {
                currentPx: t,
                indicator: n,
                isAnimated: i,
                quest: h,
                sourceQuestContent: v,
                expansionSpring: x,
                onClick: g,
                onMouseEnter: S,
                onMouseLeave: A,
            } = e,
            { label: C, targetSec: _, leftPx: b, rightPx: T, index: y } = n,
            { completedRatio: N } = (0, d.O9)(h),
            [D, I] = l.useState(!1),
            L = b - p.Ue,
            j = t >= L ? Math.min(1, (t - L) / (T - L)) : 0,
            M = 0 === y && N < 1,
            { fill: w } = (0, o.zhh)({
                fill: 100 * j,
                config: f,
                onRest: () => {
                    j <= 0 && I(!1);
                },
                onStart: () => {
                    I(!0);
                },
            });
        return (0, r.jsxs)(s.animated.div, {
            className: a()(E.ck, { [E.a]: M && D, [E.C9]: !M && D }),
            style: {
                left: i ? x.to((e) => b - e) : b,
                "--custom-indicator-size": i ? x.to((e) => `${p.lS + 2 * e}px`) : `${p.lS}px`,
                "--custom-indicator-fill": w.to((e) => e),
            },
            children: [
                (0, r.jsx)(o.DUT, {
                    className: E.E6,
                    onClick:
                        null != g
                            ? (e) => {
                                  e.stopPropagation(), g();
                              }
                            : void 0,
                    onMouseEnter: S,
                    onMouseLeave: A,
                    children: (0, r.jsx)(m.A, {
                        fullWidth: !0,
                        quest: h,
                        questContent: c.uF.VIDEO_MODAL,
                        sourceQuestContent: v,
                        autoplay: !1,
                    }),
                }),
                (0, r.jsxs)("div", {
                    className: E.Ru,
                    role: "tooltip",
                    "aria-label": null != C ? `${(0, u.rB)(_)} - ${C}` : (0, u.rB)(_),
                    children: [
                        (0, r.jsx)(o.Text, {
                            variant: "text-xs/normal",
                            color: "always-white",
                            children: (0, u.rB)(_),
                        }),
                        null != C &&
                            (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)("span", { className: E.AE, "aria-hidden": "true" }),
                                    (0, r.jsx)(o.Text, {
                                        variant: "text-xs/normal",
                                        color: "always-white",
                                        children: C,
                                    }),
                                ],
                            }),
                    ],
                }),
            ],
        });
    };
