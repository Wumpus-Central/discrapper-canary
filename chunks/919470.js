l.d(t, { A: () => m });
var a = l(627968),
    n = l(64700),
    r = l(827734),
    i = l(116833),
    s = l(397927),
    o = l(301679),
    u = l(149757),
    c = l(788868),
    d = l(985018);
let p = {
        bronze: {
            type: "custom",
            start: r.A.colors.EXPRESSIVE_GRADIENT_TENURE_BADGE_BRONZE_START,
            end: r.A.colors.EXPRESSIVE_GRADIENT_TENURE_BADGE_BRONZE_END,
        },
        silver: {
            type: "custom",
            start: r.A.colors.EXPRESSIVE_GRADIENT_TENURE_BADGE_SILVER_START,
            end: r.A.colors.EXPRESSIVE_GRADIENT_TENURE_BADGE_SILVER_END,
        },
        gold: {
            type: "custom",
            start: r.A.colors.EXPRESSIVE_GRADIENT_TENURE_BADGE_GOLD_START,
            end: r.A.colors.EXPRESSIVE_GRADIENT_TENURE_BADGE_GOLD_END,
        },
        platinum: {
            type: "custom",
            start: r.A.colors.EXPRESSIVE_GRADIENT_TENURE_BADGE_PLATINUM_START,
            end: r.A.colors.EXPRESSIVE_GRADIENT_TENURE_BADGE_PLATINUM_END,
        },
        diamond: {
            type: "custom",
            start: r.A.colors.EXPRESSIVE_GRADIENT_TENURE_BADGE_DIAMOND_START,
            end: r.A.colors.EXPRESSIVE_GRADIENT_TENURE_BADGE_DIAMOND_END,
        },
        emerald: {
            type: "custom",
            start: r.A.colors.EXPRESSIVE_GRADIENT_TENURE_BADGE_EMERALD_START,
            end: r.A.colors.EXPRESSIVE_GRADIENT_TENURE_BADGE_EMERALD_END,
        },
        ruby: {
            type: "custom",
            start: r.A.colors.EXPRESSIVE_GRADIENT_TENURE_BADGE_RUBY_START,
            end: r.A.colors.EXPRESSIVE_GRADIENT_TENURE_BADGE_RUBY_END,
        },
        opal: {
            type: "custom",
            start: r.A.colors.EXPRESSIVE_GRADIENT_TENURE_BADGE_OPAL_START,
            end: r.A.colors.EXPRESSIVE_GRADIENT_TENURE_BADGE_OPAL_END,
        },
    },
    m = (e) => {
        let {
                title: t,
                body: l,
                showGraphic: r,
                showActions: m,
                badgeId: h,
                showProgress: x,
                progressCircleText: b,
                progressCirclePercent: g,
                progressCircleUrgency: y,
                delay: f,
                size: E,
                gradientColor: v,
                estimatedTooltipHeight: S,
            } = e,
            j = n.useRef(null),
            T = n.useRef(null),
            C = n.useMemo(
                () =>
                    ({
                        bronze: c.Ac.PREMIUM_TENURE_1_MONTH,
                        silver: c.Ac.PREMIUM_TENURE_3_MONTH,
                        gold: c.Ac.PREMIUM_TENURE_6_MONTH,
                        platinum: c.Ac.PREMIUM_TENURE_12_MONTH,
                        diamond: c.Ac.PREMIUM_TENURE_24_MONTH,
                        emerald: c.Ac.PREMIUM_TENURE_36_MONTH,
                        ruby: c.Ac.PREMIUM_TENURE_60_MONTH,
                        opal: c.Ac.PREMIUM_TENURE_72_MONTH,
                    })[h],
                [h],
            ),
            P = null != C ? (0, u.I)(C).standard : null,
            R = n.useMemo(() => {
                if (null == C) return "";
                let e = c.VD[C];
                return (d.intl.string(d.t.lG6a5x) + " " + d.intl.string(e.nameUnformatted)).toLocaleUpperCase();
            }, [C]),
            A = n.useMemo(() => {
                if (!r || null == P) return;
                let e = x ? { progressCircleText: b, progressCirclePercent: g, progressCircleUrgency: y } : {};
                return {
                    type: "dynamic",
                    component: i.DynamicGraphicComponent.BADGE_IMAGE_WITH_PROGRESS_CIRCLE,
                    aspectRatio: "6/4",
                    props: { src: P, alt: R, ...e },
                };
            }, [r, P, R, x, b, g, y]),
            _ = {
                title: t,
                body: l,
                graphic: A,
                actions: n.useMemo(() => {
                    if (m) return [{ text: "Got it", variant: "primary" }];
                }, [m]),
                delay: f,
                size: E,
                gradientColor: n.useMemo(() => ("string" == typeof v && v in p ? p[v] : v), [v]),
                estimatedTooltipHeight: S,
            };
        return (0, a.jsxs)("div", {
            children: [
                (0, a.jsx)(s.Text, {
                    variant: "text-md/normal",
                    color: "text-muted",
                    children: "Hover or focus these buttons.",
                }),
                (0, a.jsxs)("div", {
                    style: {
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        gap: "16px",
                        width: "100%",
                        marginTop: "200px",
                    },
                    children: [
                        (0, a.jsx)(o.L, {
                            targetElementRef: j,
                            ..._,
                            children: (0, a.jsx)(s.Button, { buttonRef: j, variant: "primary", text: "Left" }),
                        }),
                        (0, a.jsx)(o.L, {
                            targetElementRef: T,
                            ..._,
                            children: (0, a.jsx)(s.Button, { buttonRef: T, variant: "primary", text: "Right" }),
                        }),
                    ],
                }),
            ],
        });
    };
