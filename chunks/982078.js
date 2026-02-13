n.d(t, { A: () => x });
var a = n(627968),
    i = n(158954),
    s = n(311907),
    l = n(397927),
    r = n(817281),
    o = n(736653),
    d = n(837529),
    c = n(617617),
    u = n(652215);
let m = [5793266, 2303016],
    h = [
        { id: "nitro", label: "Nitro", value: "nitro" },
        { id: "non-nitro", label: "Non-Nitro", value: "non-nitro" },
    ];
function x() {
    let { themeOverride: e, setThemeOverride: t, savedClientTheme: n, setSavedClientTheme: x } = (0, d.Zt)(),
        p = (0, o.Ay)(),
        g = (0, s.bG)([c.A], () => c.A.settings.appearance?.clientThemeSettings),
        _ =
            g?.customUserThemeSettings != null &&
            null != g.customUserThemeSettings.colors &&
            g.customUserThemeSettings.colors.length > 0;
    function f() {
        null != n && ((0, r.u_)({ theme: n.theme, customUserThemeSettings: n.customUserThemeSettings }), x(null));
    }
    return (0, a.jsx)(i.ArX, {
        children: (0, a.jsxs)(i.BJc, {
            gap: 16,
            padding: 8,
            style: { boxSizing: "border-box" },
            children: [
                (0, a.jsxs)("div", {
                    children: [
                        (0, a.jsx)(l.Nt8, {
                            collapsibleContent: (0, a.jsxs)(i.BJc, {
                                gap: 8,
                                padding: 4,
                                children: [
                                    (0, a.jsx)(i.EYj, {
                                        variant: "text-md/normal",
                                        color: "text-muted",
                                        children:
                                            "This panel allows you to override the theme and theme colors that are used when rendering user profiles. The overrides you set here will apply to all user profiles, not just your own.",
                                    }),
                                    (0, a.jsx)(i.EYj, {
                                        variant: "text-md/normal",
                                        color: "text-muted",
                                        children:
                                            "The intended use case for this tool is to allow you to preview both Nitro and non-Nitro profile component styles across a variety of user profiles regardless of their Nitro status or chosen theme colors.",
                                    }),
                                ],
                            }),
                            children: (e) => {
                                let { onClick: t } = e;
                                return (0, a.jsx)(i.$nd, {
                                    variant: "secondary",
                                    size: "sm",
                                    text: "What is this?",
                                    icon: i.mir,
                                    onClick: t,
                                });
                            },
                        }),
                        (0, a.jsx)(i.cGx, {}),
                    ],
                }),
                null == e
                    ? (0, a.jsx)(i.$nd, {
                          variant: "primary",
                          text: "Enable Theme Override",
                          onClick: () => t({ mode: "nitro", themeType: null, themeColors: m }),
                      })
                    : (0, a.jsxs)(a.Fragment, {
                          children: [
                              (0, a.jsx)(i.e2v, {
                                  children: (0, a.jsx)(i.$nd, {
                                      variant: "critical-primary",
                                      text: "Clear Theme Override",
                                      onClick: function () {
                                          f(), t(null);
                                      },
                                  }),
                              }),
                              (0, a.jsx)(i.l6P, {
                                  label: "Profile Type",
                                  selectionMode: "single",
                                  value: e.mode,
                                  options: h,
                                  onSelectionChange: (n) => t({ ...e, mode: n }),
                              }),
                              "nitro" === e.mode
                                  ? (0, a.jsxs)(a.Fragment, {
                                        children: [
                                            (0, a.jsx)(i.dOG, {
                                                label: "Disable Banner",
                                                checked: !0 === e.disableBanner,
                                                onChange: (n) => t({ ...e, disableBanner: n }),
                                            }),
                                            (0, a.jsx)(i.$nd, {
                                                variant: "secondary",
                                                text: "Reset Colors",
                                                onClick: () => t({ ...e, themeColors: m }),
                                            }),
                                            (0, a.jsxs)(i.BJc, {
                                                gap: 8,
                                                children: [
                                                    (0, a.jsx)(i.EYj, {
                                                        variant: "text-md/medium",
                                                        color: "text-strong",
                                                        children: "Primary Color",
                                                    }),
                                                    (0, a.jsx)(l.VNw, {
                                                        wrapperComponentType: "div",
                                                        showEyeDropper: !0,
                                                        eagerUpdate: !0,
                                                        value: e.themeColors?.[0] ?? 0,
                                                        onChange: (n) =>
                                                            t({ ...e, themeColors: [n, e.themeColors?.[1] ?? null] }),
                                                    }),
                                                ],
                                            }),
                                            (0, a.jsxs)(i.BJc, {
                                                gap: 8,
                                                children: [
                                                    (0, a.jsx)(i.EYj, {
                                                        variant: "text-md/medium",
                                                        color: "text-strong",
                                                        children: "Secondary Color",
                                                    }),
                                                    (0, a.jsx)(l.VNw, {
                                                        wrapperComponentType: "div",
                                                        showEyeDropper: !0,
                                                        eagerUpdate: !0,
                                                        value: e.themeColors?.[1] ?? 0,
                                                        onChange: (n) =>
                                                            t({ ...e, themeColors: [e.themeColors?.[0] ?? null, n] }),
                                                    }),
                                                ],
                                            }),
                                        ],
                                    })
                                  : (0, a.jsxs)(i.BJc, {
                                        gap: 8,
                                        children: [
                                            (0, a.jsx)(i.l6P, {
                                                label: "Theme Type",
                                                selectionMode: "single",
                                                value: e.themeType,
                                                options: Object.values(u.NJ8).map((e) => ({
                                                    id: e,
                                                    label: e,
                                                    value: e,
                                                })),
                                                onSelectionChange: (n) => t({ ...e, themeType: n }),
                                                clearable: !0,
                                                disabled: _,
                                            }),
                                            _ &&
                                                (0, a.jsxs)(a.Fragment, {
                                                    children: [
                                                        (0, a.jsx)(i.EYj, {
                                                            variant: "text-sm/normal",
                                                            color: "text-feedback-warning",
                                                            children:
                                                                "You have an active custom theme so setting a theme type does nothing.",
                                                        }),
                                                        (0, a.jsx)(i.EYj, {
                                                            variant: "text-sm/normal",
                                                            color: "text-muted",
                                                            children:
                                                                "Your custom theme will be saved and can be restored manually, or automatically when you clear the override.",
                                                        }),
                                                        (0, a.jsx)(i.$nd, {
                                                            variant: "critical-secondary",
                                                            size: "sm",
                                                            text: "Use System Theme",
                                                            onClick: function () {
                                                                g?.customUserThemeSettings != null &&
                                                                    x({
                                                                        theme: p,
                                                                        customUserThemeSettings:
                                                                            g.customUserThemeSettings,
                                                                    }),
                                                                    (0, r.u_)({ theme: "system" });
                                                            },
                                                        }),
                                                    ],
                                                }),
                                            null != n &&
                                                (0, a.jsxs)(a.Fragment, {
                                                    children: [
                                                        (0, a.jsx)(i.EYj, {
                                                            variant: "text-sm/normal",
                                                            color: "text-muted",
                                                            children:
                                                                "Your custom theme will be automatically restored when you clear the override.",
                                                        }),
                                                        (0, a.jsx)(i.$nd, {
                                                            variant: "secondary",
                                                            size: "sm",
                                                            text: "Restore Custom Theme",
                                                            onClick: f,
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
