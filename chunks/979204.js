n.d(t, { A: () => g });
var r = n(477900),
    l = n(582128),
    i = n(717421),
    u = n(17928),
    s = n(287809),
    a = n(801365),
    o = n(503698),
    c = n.n(o),
    d = n(892437),
    E = n(939249),
    f = n(834730),
    _ = n(613373),
    m = n(738822),
    p = n(62405);
n(795068);
var S = n(190107),
    C = n(774041);
let v = { duration: 250 },
    A = function (e) {
        let {
                currentPx: t,
                indicator: n,
                isAnimated: u,
                quest: s,
                sourceQuestContent: a,
                expansionSpring: o,
                onClick: A,
                onMouseEnter: h,
                onMouseLeave: g,
            } = e,
            { label: I, targetSec: D, leftPx: T, rightPx: R, index: x } = n,
            L = s.userStatus?.completedAt != null,
            [O, P] = l.useState(!1),
            k = T - 4,
            N = t >= k ? Math.min(1, (t - k) / (R - k)) : 0,
            b = 0 === x && !L,
            { fill: y } = (0, i.z)({
                fill: 100 * N,
                config: v,
                onRest: () => {
                    N <= 0 && P(!1);
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
            className: c()(C.ck, { [C.a]: b && O, [C.C9]: !b && O }),
            style: {
                left: u ? o.to((e) => T - e) : T,
                "--custom-indicator-size": u ? o.to((e) => `${26 + 2 * e}px`) : "26px",
                "--custom-indicator-fill": y.to((e) => e),
            },
            onMouseDown: V,
            children: [
                (0, r.jsx)(E.D, {
                    className: C.E6,
                    "data-testid": "video-quest-reward-indicator",
                    onClick: U,
                    onMouseDown: V,
                    onMouseEnter: h,
                    onMouseLeave: g,
                    children: (0, r.jsx)(p.A, {
                        fullWidth: !0,
                        quest: s,
                        location: S.rE.VIDEO_MODAL,
                        questContent: m.uF.VIDEO_MODAL,
                        sourceQuestContent: a,
                        autoplay: !1,
                    }),
                }),
                (0, r.jsxs)("div", {
                    className: C.Ru,
                    role: "tooltip",
                    "aria-label": null != I ? `${(0, _.rB)(D)} - ${I}` : (0, _.rB)(D),
                    children: [
                        (0, r.jsx)(f.E, {
                            variant: "text-xs/normal",
                            color: "text-overlay-light",
                            children: (0, _.rB)(D),
                        }),
                        null != I &&
                            (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)("span", { className: C.AE, "aria-hidden": "true" }),
                                    (0, r.jsx)(f.E, {
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
        E = (0, u.bG)([s.default], () => s.default.getCurrentUser()),
        f = l.useMemo(() => c?.features.includes(S.Li.FULL_EPISODE_VIDEO_QUEST) === !0, [c?.features]),
        [_, m] = l.useState(null),
        p = l.useRef(null),
        [{ expansion: C }, v] = (0, i.z)(() => ({
            expansion: 0,
            config: h,
            onRest: () => {
                null == p.current && m(null);
            },
        })),
        g = l.useCallback(
            (e) => {
                ((p.current = e), null != e ? (m(e), v({ expansion: 4 })) : v({ expansion: 0 }));
            },
            [v],
        ),
        I = l.useMemo(() => [{ index: 0, timeSec: t, widthPx: 32, gapPx: 4, align: "end", clickable: d }], [t, d]),
        D = l.useMemo(() => (f ? (0, a.mq)(c, E) : void 0), [c, f, E]),
        T = l.useCallback(
            (e, l, i) => {
                let u = { leftPx: e.leftPx, rightPx: e.rightPx, targetSec: t, index: e.index, label: D };
                return (0, r.jsx)(
                    A,
                    {
                        currentPx: l,
                        indicator: u,
                        isAnimated: _ === e.index,
                        expansionSpring: C,
                        quest: n,
                        sourceQuestContent: o,
                        onMouseEnter: () => g(e.index),
                        onMouseLeave: () => g(null),
                        onClick: i,
                    },
                    `indicator-${e.index}`,
                );
            },
            [t, D, _, C, n, o, g],
        );
    if (f) return { indicators: I, animatingIndex: _, expansionSpring: C, hoverExpansionPx: 4, renderIndicator: T };
}
