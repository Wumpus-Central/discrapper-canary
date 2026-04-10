n.d(t, { A: () => f });
var r = n(627968),
    s = n(64700),
    i = n(503698),
    a = n.n(i),
    l = n(687498),
    o = n(397927),
    u = n(697397),
    c = n(341915),
    d = n(646764),
    m = n(80026),
    E = n(684739);
let _ = { duration: 250 },
    f = (e) => {
        let {
                currentPx: t,
                indicator: n,
                isAnimated: i,
                quest: f,
                sourceQuestContent: p,
                expansionSpring: S,
                onClick: v,
                onMouseEnter: h,
                onMouseLeave: g,
            } = e,
            { label: A, targetSec: C, leftPx: x, rightPx: T, index: D } = n,
            I = f.userStatus?.completedAt != null,
            [y, R] = s.useState(!1),
            N = x - m.Ue,
            b = t >= N ? Math.min(1, (t - N) / (T - N)) : 0,
            O = 0 === D && !I,
            { fill: L } = (0, o.zhh)({
                fill: 100 * b,
                config: _,
                onRest: () => {
                    b <= 0 && R(!1);
                },
                onStart: () => {
                    R(!0);
                },
            });
        return (0, r.jsxs)(l.animated.div, {
            className: a()(E.ck, { [E.a]: O && y, [E.C9]: !O && y }),
            style: {
                left: i ? S.to((e) => x - e) : x,
                "--custom-indicator-size": i ? S.to((e) => `${m.lS + 2 * e}px`) : `${m.lS}px`,
                "--custom-indicator-fill": L.to((e) => e),
            },
            children: [
                (0, r.jsx)(o.DUT, {
                    className: E.E6,
                    onClick:
                        null != v
                            ? (e) => {
                                  e.stopPropagation(), v();
                              }
                            : void 0,
                    onMouseEnter: h,
                    onMouseLeave: g,
                    children: (0, r.jsx)(d.A, {
                        fullWidth: !0,
                        quest: f,
                        questContent: c.uF.VIDEO_MODAL,
                        sourceQuestContent: p,
                        autoplay: !1,
                    }),
                }),
                (0, r.jsxs)("div", {
                    className: E.Ru,
                    role: "tooltip",
                    "aria-label": null != A ? `${(0, u.rB)(C)} - ${A}` : (0, u.rB)(C),
                    children: [
                        (0, r.jsx)(o.Text, {
                            variant: "text-xs/normal",
                            color: "always-white",
                            children: (0, u.rB)(C),
                        }),
                        null != A &&
                            (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)("span", { className: E.AE, "aria-hidden": "true" }),
                                    (0, r.jsx)(o.Text, {
                                        variant: "text-xs/normal",
                                        color: "always-white",
                                        children: A,
                                    }),
                                ],
                            }),
                    ],
                }),
            ],
        });
    };
