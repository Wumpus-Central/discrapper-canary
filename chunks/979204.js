n.d(t, { A: () => h });
var r = n(627968),
    l = n(64700),
    i = n(717421),
    a = n(17928),
    s = n(287809),
    u = n(801365),
    o = n(503698),
    c = n.n(o),
    d = n(308186),
    E = n(939249),
    f = n(834730),
    _ = n(613373),
    m = n(24001),
    p = n(646764);
n(795068);
var S = n(190107),
    C = n(777555);
let v = { duration: 250 },
    A = function (e) {
        let {
                currentPx: t,
                indicator: n,
                isAnimated: a,
                quest: s,
                sourceQuestContent: u,
                expansionSpring: o,
                onClick: S,
                onMouseEnter: A,
                onMouseLeave: g,
            } = e,
            { label: h, targetSec: I, leftPx: T, rightPx: D, index: R } = n,
            x = s.userStatus?.completedAt != null,
            [O, L] = l.useState(!1),
            P = T - 4,
            N = t >= P ? Math.min(1, (t - P) / (D - P)) : 0,
            k = 0 === R && !x,
            { fill: b } = (0, i.z)({
                fill: 100 * N,
                config: v,
                onRest: () => {
                    N <= 0 && L(!1);
                },
                onStart: () => {
                    L(!0);
                },
            });
        function y(e) {
            return e.stopPropagation();
        }
        let V =
            null != S
                ? (e) => {
                      e.stopPropagation(), S();
                  }
                : void 0;
        return (0, r.jsxs)(d.animated.div, {
            className: c()(C.ck, { [C.a]: k && O, [C.C9]: !k && O }),
            style: {
                left: a ? o.to((e) => T - e) : T,
                "--custom-indicator-size": a ? o.to((e) => `${26 + 2 * e}px`) : "26px",
                "--custom-indicator-fill": b.to((e) => e),
            },
            onMouseDown: y,
            children: [
                (0, r.jsx)(E.D, {
                    className: C.E6,
                    "data-testid": "video-quest-reward-indicator",
                    onClick: V,
                    onMouseDown: y,
                    onMouseEnter: A,
                    onMouseLeave: g,
                    children: (0, r.jsx)(p.A, {
                        fullWidth: !0,
                        quest: s,
                        questContent: m.uF.VIDEO_MODAL,
                        sourceQuestContent: u,
                        autoplay: !1,
                    }),
                }),
                (0, r.jsxs)("div", {
                    className: C.Ru,
                    role: "tooltip",
                    "aria-label": null != h ? `${(0, _.rB)(I)} - ${h}` : (0, _.rB)(I),
                    children: [
                        (0, r.jsx)(f.E, { variant: "text-xs/normal", color: "always-white", children: (0, _.rB)(I) }),
                        null != h &&
                            (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)("span", { className: C.AE, "aria-hidden": "true" }),
                                    (0, r.jsx)(f.E, { variant: "text-xs/normal", color: "always-white", children: h }),
                                ],
                            }),
                    ],
                }),
            ],
        });
    },
    g = { tension: 500, friction: 30, clamp: !0 };
function h(e) {
    let { targetSec: t, quest: n, sourceQuestContent: o, questConfig: c, clickable: d = !1 } = e,
        E = (0, a.bG)([s.default], () => s.default.getCurrentUser()),
        f = l.useMemo(() => c?.features.includes(S.Li.FULL_EPISODE_VIDEO_QUEST) === !0, [c?.features]),
        [_, m] = l.useState(null),
        p = l.useRef(null),
        [{ expansion: C }, v] = (0, i.z)(() => ({
            expansion: 0,
            config: g,
            onRest: () => {
                null == p.current && m(null);
            },
        })),
        h = l.useCallback(
            (e) => {
                (p.current = e), null != e ? (m(e), v({ expansion: 4 })) : v({ expansion: 0 });
            },
            [v],
        ),
        I = l.useMemo(() => [{ index: 0, timeSec: t, widthPx: 32, gapPx: 4, align: "end", clickable: d }], [t, d]),
        T = l.useMemo(() => (f ? (0, u.mq)(c, E) : void 0), [c, f, E]),
        D = l.useCallback(
            (e, l, i) => {
                let a = { leftPx: e.leftPx, rightPx: e.rightPx, targetSec: t, index: e.index, label: T };
                return (0, r.jsx)(
                    A,
                    {
                        currentPx: l,
                        indicator: a,
                        isAnimated: _ === e.index,
                        expansionSpring: C,
                        quest: n,
                        sourceQuestContent: o,
                        onMouseEnter: () => h(e.index),
                        onMouseLeave: () => h(null),
                        onClick: i,
                    },
                    `indicator-${e.index}`,
                );
            },
            [t, T, _, C, n, o, h],
        );
    if (f) return { indicators: I, animatingIndex: _, expansionSpring: C, hoverExpansionPx: 4, renderIndicator: D };
}
