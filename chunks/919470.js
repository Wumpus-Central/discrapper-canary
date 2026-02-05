"use strict";
n.d(t, { A: () => f });
var r = n(627968),
    i = n(64700),
    a = n(827734),
    s = n(116833),
    o = n(397927),
    l = n(301679),
    u = n(149757),
    c = n(788868),
    d = n(985018);
let _ = {
        bronze: {
            type: "custom",
            start: a.A.colors.EXPRESSIVE_GRADIENT_TENURE_BADGE_BRONZE_START,
            end: a.A.colors.EXPRESSIVE_GRADIENT_TENURE_BADGE_BRONZE_END,
        },
        silver: {
            type: "custom",
            start: a.A.colors.EXPRESSIVE_GRADIENT_TENURE_BADGE_SILVER_START,
            end: a.A.colors.EXPRESSIVE_GRADIENT_TENURE_BADGE_SILVER_END,
        },
        gold: {
            type: "custom",
            start: a.A.colors.EXPRESSIVE_GRADIENT_TENURE_BADGE_GOLD_START,
            end: a.A.colors.EXPRESSIVE_GRADIENT_TENURE_BADGE_GOLD_END,
        },
        platinum: {
            type: "custom",
            start: a.A.colors.EXPRESSIVE_GRADIENT_TENURE_BADGE_PLATINUM_START,
            end: a.A.colors.EXPRESSIVE_GRADIENT_TENURE_BADGE_PLATINUM_END,
        },
        diamond: {
            type: "custom",
            start: a.A.colors.EXPRESSIVE_GRADIENT_TENURE_BADGE_DIAMOND_START,
            end: a.A.colors.EXPRESSIVE_GRADIENT_TENURE_BADGE_DIAMOND_END,
        },
        emerald: {
            type: "custom",
            start: a.A.colors.EXPRESSIVE_GRADIENT_TENURE_BADGE_EMERALD_START,
            end: a.A.colors.EXPRESSIVE_GRADIENT_TENURE_BADGE_EMERALD_END,
        },
        ruby: {
            type: "custom",
            start: a.A.colors.EXPRESSIVE_GRADIENT_TENURE_BADGE_RUBY_START,
            end: a.A.colors.EXPRESSIVE_GRADIENT_TENURE_BADGE_RUBY_END,
        },
        opal: {
            type: "custom",
            start: a.A.colors.EXPRESSIVE_GRADIENT_TENURE_BADGE_OPAL_START,
            end: a.A.colors.EXPRESSIVE_GRADIENT_TENURE_BADGE_OPAL_END,
        },
    },
    f = (e) => {
        let {
                title: t,
                body: n,
                showGraphic: a,
                showActions: f,
                badgeId: p,
                showProgress: h,
                progressCircleText: m,
                progressCirclePercent: g,
                progressCircleUrgency: E,
                delay: A,
                size: I,
                gradientColor: T,
                estimatedTooltipHeight: y,
            } = e,
            S = i.useRef(null),
            v = i.useRef(null),
            C = i.useMemo(
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
                    })[p],
                [p],
            ),
            b = null != C ? (0, u.I)(C) : null,
            N = i.useMemo(() => {
                if (null == C) return "";
                let e = c.VD[C];
                return (d.intl.string(d.t.lG6a5x) + " " + d.intl.string(e.nameUnformatted)).toLocaleUpperCase();
            }, [C]),
            R = i.useMemo(() => {
                if (!a || null == b) return;
                let e = h ? { progressCircleText: m, progressCirclePercent: g, progressCircleUrgency: E } : {};
                return {
                    type: "dynamic",
                    component: s.DynamicGraphicComponent.BADGE_IMAGE_WITH_PROGRESS_CIRCLE,
                    aspectRatio: "6/4",
                    props: { src: b, alt: N, ...e },
                };
            }, [a, b, N, h, m, g, E]),
            O = {
                title: t,
                body: n,
                graphic: R,
                actions: i.useMemo(() => {
                    if (f) return [{ text: "Got it", variant: "primary" }];
                }, [f]),
                delay: A,
                size: I,
                gradientColor: i.useMemo(() => ("string" == typeof T && T in _ ? _[T] : T), [T]),
                estimatedTooltipHeight: y,
            };
        return (0, r.jsxs)("div", {
            children: [
                (0, r.jsx)(o.Text, {
                    variant: "text-md/normal",
                    color: "text-muted",
                    children: "Hover or focus these buttons.",
                }),
                (0, r.jsxs)("div", {
                    style: {
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        gap: "16px",
                        width: "100%",
                        marginTop: "200px",
                    },
                    children: [
                        (0, r.jsx)(l.L, {
                            targetElementRef: S,
                            ...O,
                            children: (0, r.jsx)(o.Button, { buttonRef: S, variant: "primary", text: "Left" }),
                        }),
                        (0, r.jsx)(l.L, {
                            targetElementRef: v,
                            ...O,
                            children: (0, r.jsx)(o.Button, { buttonRef: v, variant: "primary", text: "Right" }),
                        }),
                    ],
                }),
            ],
        });
    };
