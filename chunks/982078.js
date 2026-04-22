a.d(t, { A: () => y });
var n = a(627968),
    l = a(573613),
    i = a(331322),
    s = a(834730),
    r = a(821609),
    o = a(885574),
    d = a(404778),
    c = a(825484),
    u = a(691885),
    m = a(243721),
    h = a(311907),
    p = a(311678),
    x = a(508274),
    g = a(817281),
    v = a(736653),
    b = a(837529),
    _ = a(617617),
    f = a(652215);
let j = [5793266, 2303016],
    A = [
        { id: "nitro", label: "Nitro", value: "nitro" },
        { id: "non-nitro", label: "Non-Nitro", value: "non-nitro" },
    ];
function y() {
    let { themeOverride: e, setThemeOverride: t, savedClientTheme: a, setSavedClientTheme: y } = (0, b.Zt)(),
        C = (0, v.Ay)(),
        E = (0, h.bG)([_.A], () => _.A.settings.appearance?.clientThemeSettings),
        S =
            E?.customUserThemeSettings != null &&
            null != E.customUserThemeSettings.colors &&
            E.customUserThemeSettings.colors.length > 0;
    function N() {
        null != a && ((0, g.u_)({ theme: a.theme, customUserThemeSettings: a.customUserThemeSettings }), y(null));
    }
    return (0, n.jsx)(l.Ar, {
        children: (0, n.jsxs)(i.B, {
            gap: 16,
            padding: 8,
            style: { boxSizing: "border-box" },
            children: [
                (0, n.jsxs)("div", {
                    children: [
                        (0, n.jsx)(p.N, {
                            collapsibleContent: (0, n.jsxs)(i.B, {
                                gap: 8,
                                padding: 4,
                                children: [
                                    (0, n.jsx)(s.E, {
                                        variant: "text-md/normal",
                                        color: "text-muted",
                                        children:
                                            "This panel allows you to override the theme and theme colors that are used when rendering user profiles. The overrides you set here will apply to all user profiles, not just your own.",
                                    }),
                                    (0, n.jsx)(s.E, {
                                        variant: "text-md/normal",
                                        color: "text-muted",
                                        children:
                                            "The intended use case for this tool is to allow you to preview both Nitro and non-Nitro profile component styles across a variety of user profiles regardless of their Nitro status or chosen theme colors.",
                                    }),
                                ],
                            }),
                            children: (e) => {
                                let { onClick: t } = e;
                                return (0, n.jsx)(r.$, {
                                    variant: "secondary",
                                    size: "sm",
                                    text: "What is this?",
                                    icon: o.m,
                                    onClick: t,
                                });
                            },
                        }),
                        (0, n.jsx)(d.c, {}),
                    ],
                }),
                null == e
                    ? (0, n.jsx)(r.$, {
                          variant: "primary",
                          text: "Enable Theme Override",
                          onClick: () => t({ mode: "nitro", themeType: null, themeColors: j }),
                      })
                    : (0, n.jsxs)(n.Fragment, {
                          children: [
                              (0, n.jsx)(c.e, {
                                  children: (0, n.jsx)(r.$, {
                                      variant: "critical-primary",
                                      text: "Clear Theme Override",
                                      onClick: function () {
                                          N(), t(null);
                                      },
                                  }),
                              }),
                              (0, n.jsx)(u.l, {
                                  label: "Profile Type",
                                  selectionMode: "single",
                                  value: e.mode,
                                  options: A,
                                  onSelectionChange: (a) => t({ ...e, mode: a }),
                              }),
                              "nitro" === e.mode
                                  ? (0, n.jsxs)(n.Fragment, {
                                        children: [
                                            (0, n.jsx)(m.d, {
                                                label: "Disable Banner",
                                                checked: !0 === e.disableBanner,
                                                onChange: (a) => t({ ...e, disableBanner: a }),
                                            }),
                                            (0, n.jsx)(r.$, {
                                                variant: "secondary",
                                                text: "Reset Colors",
                                                onClick: () => t({ ...e, themeColors: j }),
                                            }),
                                            (0, n.jsxs)(i.B, {
                                                gap: 8,
                                                children: [
                                                    (0, n.jsx)(s.E, {
                                                        variant: "text-md/medium",
                                                        color: "text-strong",
                                                        children: "Primary Color",
                                                    }),
                                                    (0, n.jsx)(x.VN, {
                                                        wrapperComponentType: "div",
                                                        showEyeDropper: !0,
                                                        eagerUpdate: !0,
                                                        value: e.themeColors?.[0] ?? 0,
                                                        onChange: (a) =>
                                                            t({ ...e, themeColors: [a, e.themeColors?.[1] ?? null] }),
                                                    }),
                                                ],
                                            }),
                                            (0, n.jsxs)(i.B, {
                                                gap: 8,
                                                children: [
                                                    (0, n.jsx)(s.E, {
                                                        variant: "text-md/medium",
                                                        color: "text-strong",
                                                        children: "Secondary Color",
                                                    }),
                                                    (0, n.jsx)(x.VN, {
                                                        wrapperComponentType: "div",
                                                        showEyeDropper: !0,
                                                        eagerUpdate: !0,
                                                        value: e.themeColors?.[1] ?? 0,
                                                        onChange: (a) =>
                                                            t({ ...e, themeColors: [e.themeColors?.[0] ?? null, a] }),
                                                    }),
                                                ],
                                            }),
                                        ],
                                    })
                                  : (0, n.jsxs)(i.B, {
                                        gap: 8,
                                        children: [
                                            (0, n.jsx)(u.l, {
                                                label: "Theme Type",
                                                selectionMode: "single",
                                                value: e.themeType,
                                                options: Object.values(f.NJ8).map((e) => ({
                                                    id: e,
                                                    label: e,
                                                    value: e,
                                                })),
                                                onSelectionChange: (a) => t({ ...e, themeType: a }),
                                                clearable: !0,
                                                disabled: S,
                                            }),
                                            S &&
                                                (0, n.jsxs)(n.Fragment, {
                                                    children: [
                                                        (0, n.jsx)(s.E, {
                                                            variant: "text-sm/normal",
                                                            color: "text-feedback-warning",
                                                            children:
                                                                "You have an active custom theme so setting a theme type does nothing.",
                                                        }),
                                                        (0, n.jsx)(s.E, {
                                                            variant: "text-sm/normal",
                                                            color: "text-muted",
                                                            children:
                                                                "Your custom theme will be saved and can be restored manually, or automatically when you clear the override.",
                                                        }),
                                                        (0, n.jsx)(r.$, {
                                                            variant: "critical-secondary",
                                                            size: "sm",
                                                            text: "Use System Theme",
                                                            onClick: function () {
                                                                E?.customUserThemeSettings != null &&
                                                                    y({
                                                                        theme: C,
                                                                        customUserThemeSettings:
                                                                            E.customUserThemeSettings,
                                                                    }),
                                                                    (0, g.u_)({ theme: "system" });
                                                            },
                                                        }),
                                                    ],
                                                }),
                                            null != a &&
                                                (0, n.jsxs)(n.Fragment, {
                                                    children: [
                                                        (0, n.jsx)(s.E, {
                                                            variant: "text-sm/normal",
                                                            color: "text-muted",
                                                            children:
                                                                "Your custom theme will be automatically restored when you clear the override.",
                                                        }),
                                                        (0, n.jsx)(r.$, {
                                                            variant: "secondary",
                                                            size: "sm",
                                                            text: "Restore Custom Theme",
                                                            onClick: N,
                                                        }),
                                                    ],
                                                }),
                                        ],
                                    }),
                          ],
                      }),
            ],
        }),
    });
}
