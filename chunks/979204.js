n.d(t, { A: () => g });
var r = n(477900),
    l = n(582128),
    i = n(717421),
    s = n(17928),
    u = n(287809),
    a = n(801365),
    o = n(503698),
    c = n.n(o),
    d = n(202091),
    E = n(939249),
    _ = n(834730),
    f = n(613373),
    p = n(738822),
    m = n(62405);
n(795068);
var S = n(190107),
    v = n(774041);
let C = { duration: 250 },
    A = function (e) {
        let {
                currentPx: t,
                indicator: n,
                isAnimated: s,
                quest: u,
                sourceQuestContent: a,
                expansionSpring: o,
                onClick: A,
                onMouseEnter: h,
                onMouseLeave: g,
            } = e,
            { label: I, targetSec: D, leftPx: T, rightPx: R, index: x } = n,
            L = u.userStatus?.completedAt != null,
            [O, P] = l.useState(!1),
            N = T - 4,
            k = t >= N ? Math.min(1, (t - N) / (R - N)) : 0,
            b = 0 === x && !L,
            { fill: y } = (0, i.z)({
                fill: 100 * k,
                config: C,
                onRest: () => {
                    k <= 0 && P(!1);
                },
                onStart: () => {
                    P(!0);
                },
            });
        function V(e) {
            return e.stopPropagation();
        }
        let U =
            null != A
                ? (e) => {
                      (e.stopPropagation(), A());
                  }
                : void 0;
        return (0, r.jsxs)(d.animated.div, {
            className: c()(v.ck, { [v.a]: b && O, [v.C9]: !b && O }),
            style: {
                left: s ? o.to((e) => T - e) : T,
                "--custom-indicator-size": s ? o.to((e) => `${26 + 2 * e}px`) : "26px",
                "--custom-indicator-fill": y.to((e) => e),
            },
            onMouseDown: V,
            children: [
                (0, r.jsx)(E.D, {
                    className: v.E6,
                    "data-testid": "video-quest-reward-indicator",
                    onClick: U,
                    onMouseDown: V,
                    onMouseEnter: h,
                    onMouseLeave: g,
                    children: (0, r.jsx)(m.A, {
                        fullWidth: !0,
                        quest: u,
                        location: S.rE.VIDEO_MODAL,
                        questContent: p.uF.VIDEO_MODAL,
                        sourceQuestContent: a,
                        autoplay: !1,
                    }),
                }),
                (0, r.jsxs)("div", {
                    className: v.Ru,
                    role: "tooltip",
                    "aria-label": null != I ? `${(0, f.rB)(D)} - ${I}` : (0, f.rB)(D),
                    children: [
                        (0, r.jsx)(_.E, {
                            variant: "text-xs/normal",
                            color: "text-overlay-light",
                            children: (0, f.rB)(D),
                        }),
                        null != I &&
                            (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)("span", { className: v.AE, "aria-hidden": "true" }),
                                    (0, r.jsx)(_.E, {
                                        variant: "text-xs/normal",
                                        color: "text-overlay-light",
                                        children: I,
                                    }),
                                ],
                            }),
                    ],
                }),
            ],
        });
    },
    h = { tension: 500, friction: 30, clamp: !0 };
function g(e) {
    let { targetSec: t, quest: n, sourceQuestContent: o, questConfig: c, clickable: d = !1 } = e,
        E = (0, s.bG)([u.default], () => u.default.getCurrentUser()),
        _ = l.useMemo(() => c?.features.includes(S.Li.FULL_EPISODE_VIDEO_QUEST) === !0, [c?.features]),
        [f, p] = l.useState(null),
        m = l.useRef(null),
        [{ expansion: v }, C] = (0, i.z)(() => ({
            expansion: 0,
            config: h,
            onRest: () => {
                null == m.current && p(null);
            },
        })),
        g = l.useCallback(
            (e) => {
                ((m.current = e), null != e ? (p(e), C({ expansion: 4 })) : C({ expansion: 0 }));
            },
            [C],
        ),
        I = l.useMemo(() => [{ index: 0, timeSec: t, widthPx: 32, gapPx: 4, align: "end", clickable: d }], [t, d]),
        D = l.useMemo(() => (_ ? (0, a.mq)(c, E) : void 0), [c, _, E]),
        T = l.useCallback(
            (e, l, i) => {
                let s = { leftPx: e.leftPx, rightPx: e.rightPx, targetSec: t, index: e.index, label: D };
                return (0, r.jsx)(
                    A,
                    {
                        currentPx: l,
                        indicator: s,
                        isAnimated: f === e.index,
                        expansionSpring: v,
                        quest: n,
                        sourceQuestContent: o,
                        onMouseEnter: () => g(e.index),
                        onMouseLeave: () => g(null),
                        onClick: i,
                    },
                    `indicator-${e.index}`,
                );
            },
            [t, D, f, v, n, o, g],
        );
    if (_) return { indicators: I, animatingIndex: f, expansionSpring: v, hoverExpansionPx: 4, renderIndicator: T };
}
