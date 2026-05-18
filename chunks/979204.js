n.d(t, { A: () => h });
var r = n(627968),
    l = n(64700),
    s = n(717421),
    a = n(17928),
    i = n(287809),
    u = n(801365),
    o = n(503698),
    c = n.n(o),
    d = n(873174),
    E = n(939249),
    m = n(834730),
    f = n(613373),
    _ = n(507107),
    S = n(646764);
n(795068);
var p = n(190107),
    v = n(777555);
let C = { duration: 250 },
    g = (e) => {
        let {
                currentPx: t,
                indicator: n,
                isAnimated: a,
                quest: i,
                sourceQuestContent: u,
                expansionSpring: o,
                onClick: p,
                onMouseEnter: g,
                onMouseLeave: A,
            } = e,
            { label: h, targetSec: D, leftPx: x, rightPx: T, index: I } = n,
            O = i.userStatus?.completedAt != null,
            [b, R] = l.useState(!1),
            L = x - 4,
            k = t >= L ? Math.min(1, (t - L) / (T - L)) : 0,
            N = 0 === I && !O,
            { fill: P } = (0, s.z)({
                fill: 100 * k,
                config: C,
                onRest: () => {
                    k <= 0 && R(!1);
                },
                onStart: () => {
                    R(!0);
                },
            }),
            y = (e) => e.stopPropagation(),
            M =
                null != p
                    ? (e) => {
                          e.stopPropagation(), p();
                      }
                    : void 0;
        return (0, r.jsxs)(d.animated.div, {
            className: c()(v.ck, { [v.a]: N && b, [v.C9]: !N && b }),
            style: {
                left: a ? o.to((e) => x - e) : x,
                "--custom-indicator-size": a ? o.to((e) => `${26 + 2 * e}px`) : "26px",
                "--custom-indicator-fill": P.to((e) => e),
            },
            onMouseDown: y,
            children: [
                (0, r.jsx)(E.D, {
                    className: v.E6,
                    "data-testid": "video-quest-reward-indicator",
                    onClick: M,
                    onMouseDown: y,
                    onMouseEnter: g,
                    onMouseLeave: A,
                    children: (0, r.jsx)(S.A, {
                        fullWidth: !0,
                        quest: i,
                        questContent: _.uF.VIDEO_MODAL,
                        sourceQuestContent: u,
                        autoplay: !1,
                    }),
                }),
                (0, r.jsxs)("div", {
                    className: v.Ru,
                    role: "tooltip",
                    "aria-label": null != h ? `${(0, f.rB)(D)} - ${h}` : (0, f.rB)(D),
                    children: [
                        (0, r.jsx)(m.E, { variant: "text-xs/normal", color: "always-white", children: (0, f.rB)(D) }),
                        null != h &&
                            (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)("span", { className: v.AE, "aria-hidden": "true" }),
                                    (0, r.jsx)(m.E, { variant: "text-xs/normal", color: "always-white", children: h }),
                                ],
                            }),
                    ],
                }),
            ],
        });
    },
    A = { tension: 500, friction: 30, clamp: !0 };
function h(e) {
    let { targetSec: t, quest: n, sourceQuestContent: o, questConfig: c, clickable: d = !1 } = e,
        E = (0, a.bG)([i.default], () => i.default.getCurrentUser()),
        m = l.useMemo(() => c?.features.includes(p.Li.FULL_EPISODE_VIDEO_QUEST) === !0, [c?.features]),
        [f, _] = l.useState(null),
        S = l.useRef(null),
        [{ expansion: v }, C] = (0, s.z)(() => ({
            expansion: 0,
            config: A,
            onRest: () => {
                null == S.current && _(null);
            },
        })),
        h = l.useCallback(
            (e) => {
                (S.current = e), null != e ? (_(e), C({ expansion: 4 })) : C({ expansion: 0 });
            },
            [C],
        ),
        D = l.useMemo(() => [{ index: 0, timeSec: t, widthPx: 32, gapPx: 4, align: "end", clickable: d }], [t, d]),
        x = l.useMemo(() => (m ? (0, u.mq)(c, E) : void 0), [c, m, E]),
        T = l.useCallback(
            (e, l, s) => {
                let a = { leftPx: e.leftPx, rightPx: e.rightPx, targetSec: t, index: e.index, label: x };
                return (0, r.jsx)(
                    g,
                    {
                        currentPx: l,
                        indicator: a,
                        isAnimated: f === e.index,
                        expansionSpring: v,
                        quest: n,
                        sourceQuestContent: o,
                        onMouseEnter: () => h(e.index),
                        onMouseLeave: () => h(null),
                        onClick: s,
                    },
                    `indicator-${e.index}`,
                );
            },
            [t, x, f, v, n, o, h],
        );
    if (m) return { indicators: D, animatingIndex: f, expansionSpring: v, hoverExpansionPx: 4, renderIndicator: T };
}
