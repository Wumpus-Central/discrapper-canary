n.d(t, { A: () => p });
var r = n(627968),
    s = n(64700),
    a = n(503698),
    l = n.n(a),
    i = n(419354),
    u = n(717421),
    o = n(939249),
    c = n(834730),
    d = n(697397),
    E = n(341915),
    m = n(646764),
    f = n(80026),
    _ = n(777555);
let S = { duration: 250 },
    p = (e) => {
        let {
                currentPx: t,
                indicator: n,
                isAnimated: a,
                quest: p,
                sourceQuestContent: v,
                expansionSpring: g,
                onClick: h,
                onMouseEnter: A,
                onMouseLeave: C,
            } = e,
            { label: x, targetSec: D, leftPx: I, rightPx: T, index: b } = n,
            O = p.userStatus?.completedAt != null,
            [y, L] = s.useState(!1),
            R = I - f.Ue,
            k = t >= R ? Math.min(1, (t - R) / (T - R)) : 0,
            N = 0 === b && !O,
            { fill: M } = (0, u.z)({
                fill: 100 * k,
                config: S,
                onRest: () => {
                    k <= 0 && L(!1);
                },
                onStart: () => {
                    L(!0);
                },
            });
        return (0, r.jsxs)(i.animated.div, {
            className: l()(_.ck, { [_.a]: N && y, [_.C9]: !N && y }),
            style: {
                left: a ? g.to((e) => I - e) : I,
                "--custom-indicator-size": a ? g.to((e) => `${f.lS + 2 * e}px`) : `${f.lS}px`,
                "--custom-indicator-fill": M.to((e) => e),
            },
            children: [
                (0, r.jsx)(o.D, {
                    className: _.E6,
                    "data-testid": "video-quest-reward-indicator",
                    onClick:
                        null != h
                            ? (e) => {
                                  e.stopPropagation(), h();
                              }
                            : void 0,
                    onMouseDown: null != h ? (e) => e.stopPropagation() : void 0,
                    onMouseEnter: A,
                    onMouseLeave: C,
                    children: (0, r.jsx)(m.A, {
                        fullWidth: !0,
                        quest: p,
                        questContent: E.uF.VIDEO_MODAL,
                        sourceQuestContent: v,
                        autoplay: !1,
                    }),
                }),
                (0, r.jsxs)("div", {
                    className: _.Ru,
                    role: "tooltip",
                    "aria-label": null != x ? `${(0, d.rB)(D)} - ${x}` : (0, d.rB)(D),
                    children: [
                        (0, r.jsx)(c.E, { variant: "text-xs/normal", color: "always-white", children: (0, d.rB)(D) }),
                        null != x &&
                            (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)("span", { className: _.AE, "aria-hidden": "true" }),
                                    (0, r.jsx)(c.E, { variant: "text-xs/normal", color: "always-white", children: x }),
                                ],
                            }),
                    ],
                }),
            ],
        });
    };
