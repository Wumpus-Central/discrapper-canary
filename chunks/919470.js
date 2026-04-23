l.d(t, { A: () => b });
var a = l(627968),
    n = l(64700),
    r = l(827734),
    i = l(116833),
    o = l(834730),
    s = l(821609),
    d = l(301679),
    c = l(149757),
    u = l(788868),
    p = l(985018);
let m = {
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
    b = (e) => {
        let {
                title: t,
                body: l,
                showGraphic: r,
                showActions: b,
                badgeId: h,
                showProgress: x,
                progressCircleText: y,
                progressCirclePercent: v,
                progressCircleUrgency: g,
                delay: f,
                size: _,
                gradientColor: E,
                estimatedTooltipHeight: C,
            } = e,
            S = n.useRef(null),
            j = n.useRef(null),
            T = n.useMemo(
                () =>
                    ({
                        bronze: u.Ac.PREMIUM_TENURE_1_MONTH,
                        silver: u.Ac.PREMIUM_TENURE_3_MONTH,
                        gold: u.Ac.PREMIUM_TENURE_6_MONTH,
                        platinum: u.Ac.PREMIUM_TENURE_12_MONTH,
                        diamond: u.Ac.PREMIUM_TENURE_24_MONTH,
                        emerald: u.Ac.PREMIUM_TENURE_36_MONTH,
                        ruby: u.Ac.PREMIUM_TENURE_60_MONTH,
                        opal: u.Ac.PREMIUM_TENURE_72_MONTH,
                    })[h],
                [h],
            ),
            P = null != T ? (0, c.I)(T).standard : null,
            I = n.useMemo(() => {
                if (null == T) return "";
                let e = u.VD[T];
                return (p.intl.string(p.t.lG6a5x) + " " + p.intl.string(e.nameUnformatted)).toLocaleUpperCase();
            }, [T]),
            A = n.useMemo(() => {
                if (!r || null == P) return;
                let e = x ? { progressCircleText: y, progressCirclePercent: v, progressCircleUrgency: g } : {};
                return {
                    type: "dynamic",
                    component: i.DynamicGraphicComponent.BADGE_IMAGE_WITH_PROGRESS_CIRCLE,
                    aspectRatio: "6/4",
                    props: { src: P, alt: I, ...e },
                };
            }, [r, P, I, x, y, v, g]),
            k = {
                title: t,
                body: l,
                graphic: A,
                actions: n.useMemo(() => {
                    if (b) return [{ text: "Got it", variant: "primary" }];
                }, [b]),
                delay: f,
                size: _,
                gradientColor: n.useMemo(() => ("string" == typeof E && E in m ? m[E] : E), [E]),
                estimatedTooltipHeight: C,
            };
        return (0, a.jsxs)("div", {
            children: [
                (0, a.jsx)(o.E, {
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
                        (0, a.jsx)(d.L, {
                            targetElementRef: S,
                            ...k,
                            children: (0, a.jsx)(s.$, { buttonRef: S, variant: "primary", text: "Left" }),
                        }),
                        (0, a.jsx)(d.L, {
                            targetElementRef: j,
                            ...k,
                            children: (0, a.jsx)(s.$, { buttonRef: j, variant: "primary", text: "Right" }),
                        }),
                    ],
                }),
            ],
        });
    };
