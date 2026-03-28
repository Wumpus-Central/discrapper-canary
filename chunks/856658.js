n.d(t, { A: () => f });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    l = n(382222),
    o = n(397927),
    u = n(892358),
    c = n(341915),
    d = n(890687),
    m = n(646764),
    E = n(80026),
    _ = n(684739);
let p = { duration: 250 },
    f = (e) => {
        let {
                currentPx: t,
                indicator: n,
                isAnimated: s,
                quest: f,
                sourceQuestContent: v,
                expansionSpring: S,
                onClick: h,
                onMouseEnter: g,
                onMouseLeave: A,
            } = e,
            { label: C, targetSec: T, leftPx: b, rightPx: x, index: D } = n,
            { completedRatio: y } = (0, d.O9)(f),
            [I, L] = i.useState(!1),
            N = b - E.Ue,
            R = t >= N ? Math.min(1, (t - N) / (x - N)) : 0,
            O = 0 === D && y < 1,
            { fill: k } = (0, o.zhh)({
                fill: 100 * R,
                config: p,
                onRest: () => {
                    R <= 0 && L(!1);
                },
                onStart: () => {
                    L(!0);
                },
            });
        return (0, r.jsxs)(l.animated.div, {
            className: a()(_.ck, { [_.a]: O && I, [_.C9]: !O && I }),
            style: {
                left: s ? S.to((e) => b - e) : b,
                "--custom-indicator-size": s ? S.to((e) => `${E.lS + 2 * e}px`) : `${E.lS}px`,
                "--custom-indicator-fill": k.to((e) => e),
            },
            children: [
                (0, r.jsx)(o.DUT, {
                    className: _.E6,
                    onClick:
                        null != h
                            ? (e) => {
                                  e.stopPropagation(), h();
                              }
                            : void 0,
                    onMouseEnter: g,
                    onMouseLeave: A,
                    children: (0, r.jsx)(m.A, {
                        fullWidth: !0,
                        quest: f,
                        questContent: c.uF.VIDEO_MODAL,
                        sourceQuestContent: v,
                        autoplay: !1,
                    }),
                }),
                (0, r.jsxs)("div", {
                    className: _.Ru,
                    role: "tooltip",
                    "aria-label": null != C ? `${(0, u.rB)(T)} - ${C}` : (0, u.rB)(T),
                    children: [
                        (0, r.jsx)(o.Text, {
                            variant: "text-xs/normal",
                            color: "always-white",
                            children: (0, u.rB)(T),
                        }),
                        null != C &&
                            (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)("span", { className: _.AE, "aria-hidden": "true" }),
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
