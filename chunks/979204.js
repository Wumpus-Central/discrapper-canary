n.d(t, { A: () => h });
var r = n(627968),
    s = n(64700),
    a = n(717421),
    l = n(801365),
    i = n(503698),
    u = n.n(i),
    o = n(419354),
    c = n(939249),
    d = n(834730),
    E = n(611051),
    m = n(507107),
    f = n(646764);
n(795068);
var _ = n(654487),
    S = n(777555);
let p = { duration: 250 },
    v = (e) => {
        let {
                currentPx: t,
                indicator: n,
                isAnimated: l,
                quest: i,
                sourceQuestContent: _,
                expansionSpring: v,
                onClick: g,
                onMouseEnter: h,
                onMouseLeave: C,
            } = e,
            { label: A, targetSec: x, leftPx: D, rightPx: I, index: T } = n,
            b = i.userStatus?.completedAt != null,
            [O, L] = s.useState(!1),
            R = D - 4,
            k = t >= R ? Math.min(1, (t - R) / (I - R)) : 0,
            N = 0 === T && !b,
            { fill: y } = (0, a.z)({
                fill: 100 * k,
                config: p,
                onRest: () => {
                    k <= 0 && L(!1);
                },
                onStart: () => {
                    L(!0);
                },
            });
        return (0, r.jsxs)(o.animated.div, {
            className: u()(S.ck, { [S.a]: N && O, [S.C9]: !N && O }),
            style: {
                left: l ? v.to((e) => D - e) : D,
                "--custom-indicator-size": l ? v.to((e) => `${26 + 2 * e}px`) : "26px",
                "--custom-indicator-fill": y.to((e) => e),
            },
            children: [
                (0, r.jsx)(c.D, {
                    className: S.E6,
                    "data-testid": "video-quest-reward-indicator",
                    onClick:
                        null != g
                            ? (e) => {
                                  e.stopPropagation(), g();
                              }
                            : void 0,
                    onMouseDown: null != g ? (e) => e.stopPropagation() : void 0,
                    onMouseEnter: h,
                    onMouseLeave: C,
                    children: (0, r.jsx)(f.A, {
                        fullWidth: !0,
                        quest: i,
                        questContent: m.uF.VIDEO_MODAL,
                        sourceQuestContent: _,
                        autoplay: !1,
                    }),
                }),
                (0, r.jsxs)("div", {
                    className: S.Ru,
                    role: "tooltip",
                    "aria-label": null != A ? `${(0, E.rB)(x)} - ${A}` : (0, E.rB)(x),
                    children: [
                        (0, r.jsx)(d.E, { variant: "text-xs/normal", color: "always-white", children: (0, E.rB)(x) }),
                        null != A &&
                            (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)("span", { className: S.AE, "aria-hidden": "true" }),
                                    (0, r.jsx)(d.E, { variant: "text-xs/normal", color: "always-white", children: A }),
                                ],
                            }),
                    ],
                }),
            ],
        });
    },
    g = { tension: 500, friction: 30, clamp: !0 };
function h(e) {
    let { targetSec: t, quest: n, sourceQuestContent: i, questConfig: u, onIndicatorClick: o } = e,
        c = s.useMemo(() => u?.features.includes(_.Li.FULL_EPISODE_VIDEO_QUEST) === !0, [u?.features]),
        [d, E] = s.useState(null),
        m = s.useRef(null),
        [{ expansion: f }, S] = (0, a.z)(() => ({
            expansion: 0,
            config: g,
            onRest: () => {
                null == m.current && E(null);
            },
        })),
        p = s.useCallback(
            (e) => {
                (m.current = e), null != e ? (E(e), S({ expansion: 4 })) : S({ expansion: 0 });
            },
            [S],
        ),
        h = s.useMemo(() => [{ index: 0, timeSec: t, widthPx: 32, gapPx: 4 }], [t]),
        C = s.useMemo(() => (c ? (0, l.mq)(u) : void 0), [u, c]),
        A = s.useCallback(
            (e, s) => {
                let a = { leftPx: e.leftPx, rightPx: e.rightPx, targetSec: t, index: e.index, label: C };
                return (0, r.jsx)(
                    v,
                    {
                        currentPx: s,
                        indicator: a,
                        isAnimated: d === e.index,
                        expansionSpring: f,
                        quest: n,
                        sourceQuestContent: i,
                        onMouseEnter: () => p(e.index),
                        onMouseLeave: () => p(null),
                        onClick: null != o ? () => o(a.targetSec) : void 0,
                    },
                    `indicator-${e.index}`,
                );
            },
            [t, C, d, f, n, i, p, o],
        );
    if (c) return { indicators: h, animatingIndex: d, expansionSpring: f, hoverExpansionPx: 4, renderIndicator: A };
}
