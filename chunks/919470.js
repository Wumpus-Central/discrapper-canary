n.d(t, {
    A: () => g,
});
var r = n(627968),
    i = n(64700),
    a = n(827734),
    s = n(116833),
    o = n(397927),
    l = n(301679),
    c = n(149757),
    u = n(788868),
    d = n(985018);

function f(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}

function p(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                f(e, t, n[t]);
            });
    }
    return e;
}

function _(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}

function h(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : _(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let m = {
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
    g = (e) => {
        let {
                title: t,
                body: n,
                showGraphic: a,
                showActions: f,
                badgeId: _,
                showProgress: g,
                progressCircleText: E,
                progressCirclePercent: b,
                progressCircleUrgency: y,
                delay: O,
                size: A,
                gradientColor: v,
                estimatedTooltipHeight: S,
            } = e,
            I = i.useRef(null),
            T = i.useRef(null),
            C = i.useMemo(
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
                    })[_],
                [_],
            ),
            N = null != C ? (0, c.I)(C) : null,
            R = i.useMemo(() => {
                if (null == C) return "";
                let e = u.VD[C];
                return (d.intl.string(d.t.lG6a5x) + " " + d.intl.string(e.nameUnformatted)).toLocaleUpperCase();
            }, [C]),
            w = i.useMemo(() => {
                if (!a || null == N) return;
                let e = g
                    ? {
                          progressCircleText: E,
                          progressCirclePercent: b,
                          progressCircleUrgency: y,
                      }
                    : {};
                return {
                    type: "dynamic",
                    component: s.DynamicGraphicComponent.BADGE_IMAGE_WITH_PROGRESS_CIRCLE,
                    aspectRatio: "6/4",
                    props: p(
                        {
                            src: N,
                            alt: R,
                        },
                        e,
                    ),
                };
            }, [a, N, R, g, E, b, y]),
            P = {
                title: t,
                body: n,
                graphic: w,
                actions: i.useMemo(() => {
                    if (f)
                        return [
                            {
                                text: "Got it",
                                variant: "primary",
                            },
                        ];
                }, [f]),
                delay: O,
                size: A,
                gradientColor: i.useMemo(() => ("string" == typeof v && v in m ? m[v] : v), [v]),
                estimatedTooltipHeight: S,
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
                        (0, r.jsx)(
                            l.L,
                            h(
                                p(
                                    {
                                        targetElementRef: I,
                                    },
                                    P,
                                ),
                                {
                                    children: (0, r.jsx)(o.Button, {
                                        buttonRef: I,
                                        variant: "primary",
                                        text: "Left",
                                    }),
                                },
                            ),
                        ),
                        (0, r.jsx)(
                            l.L,
                            h(
                                p(
                                    {
                                        targetElementRef: T,
                                    },
                                    P,
                                ),
                                {
                                    children: (0, r.jsx)(o.Button, {
                                        buttonRef: T,
                                        variant: "primary",
                                        text: "Right",
                                    }),
                                },
                            ),
                        ),
                    ],
                }),
            ],
        });
    };
