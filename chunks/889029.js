n.d(t, { Z: () => b });
var r = n(54381);
n(473749);
var i = n(442837),
    a = n(481060),
    o = n(223245),
    s = n(921801),
    l = n(246946),
    c = n(358085),
    u = n(313789),
    d = n(273313),
    f = n(518596),
    p = n(726985),
    _ = n(981631),
    m = n(388032),
    h = n(40086);
function g(e, t, n) {
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
function E(e) {
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
                g(e, t, n[t]);
            });
    }
    return e;
}
function b() {
    let {
            enabled: e,
            autoToggle: t,
            hideInstantInvites: g,
            hidePersonalInformation: b,
            disableSounds: y,
            disableNotifications: O,
            enableContentProtection: v,
        } = (0, i.cj)([l.Z], () => E({}, l.Z.getSettings())),
        S = () =>
            (0, r.jsxs)(a.Zbd, {
                type: a.Zbd.Types.PRIMARY,
                className: h.noticeCard,
                children: [
                    (0, r.jsxs)("div", {
                        children: [
                            (0, r.jsx)(a.Heading, {
                                variant: "heading-md/medium",
                                children: m.intl.string(m.t.bxGbHL),
                            }),
                            (0, r.jsx)(a.Text, {
                                variant: "text-sm/normal",
                                children: m.intl.format(m.t["4rmZnx"], { streamkitURL: _.EYA.STREAMKIT }),
                            }),
                        ],
                    }),
                    (0, r.jsx)("img", {
                        src: n(560264),
                        width: 184,
                        height: 110,
                        alt: "",
                        className: h.noticeImage,
                    }),
                ],
            }),
        I = () => {
            if (c.isPlatformEmbedded)
                return (0, r.jsx)(a.rsf, {
                    label: m.intl.string(m.t["PKDAJ/"]),
                    description: m.intl.string(m.t.ZPi4lM),
                    checked: t,
                    onChange: (e) => T("autoToggle", e),
                });
        },
        T = (e, t) => {
            o.Z.update({ [e]: t });
        },
        A = () => {
            (0, f.openUserSettings)(u.n.KEYBINDS_PANEL, { section: _.oAB.KEYBINDS });
        };
    return (0, r.jsx)(d.Z, {
        title: m.intl.string(m.t.S5GfOW),
        children: (0, r.jsxs)(a.Kqy, {
            gap: 24,
            children: [
                (0, r.jsx)(s.F, {
                    setting: p.s6.STREAMER_MODE_INTEGRATIONS,
                    children: S(),
                }),
                (0, r.jsx)(s.F, {
                    setting: p.s6.STREAMER_MODE_ENABLE,
                    children: (0, r.jsxs)(a.Kqy, {
                        gap: 16,
                        children: [
                            (0, r.jsx)(a.rsf, {
                                label: m.intl.string(m.t.p9ZAJZ),
                                description: m.intl.format(m.t.MLVL2M, { onClick: A }),
                                checked: e,
                                onChange: (e) => T("enabled", e),
                            }),
                            I(),
                            (0, r.jsx)(a.izJ, {}),
                        ],
                    }),
                }),
                (0, r.jsxs)(a.C3N, {
                    label: m.intl.string(m.t["+1H47t"]),
                    className: h.sectionLabel,
                    children: [
                        (0, r.jsx)(s.F, {
                            setting: p.s6.STREAMER_MODE_HIDE_PERSONAL_INFORMATION,
                            children: (0, r.jsx)(a.rsf, {
                                label: m.intl.string(m.t.UpQziA),
                                description: m.intl.string(m.t["+9Lra7"]),
                                checked: b,
                                onChange: (e) => T("hidePersonalInformation", e),
                            }),
                        }),
                        (0, r.jsx)(s.F, {
                            setting: p.s6.STREAMER_MODE_HIDE_INVITE_LINKS,
                            children: (0, r.jsx)(a.rsf, {
                                label: m.intl.string(m.t.q7WNGv),
                                description: m.intl.string(m.t.m7mS2U),
                                checked: g,
                                onChange: (e) => T("hideInstantInvites", e),
                            }),
                        }),
                        (0, r.jsx)(s.F, {
                            setting: p.s6.STREAMER_MODE_DISABLE_SOUNDS,
                            children: (0, r.jsx)(a.rsf, {
                                label: m.intl.string(m.t.o56OZu),
                                description: m.intl.string(m.t.eAkaik),
                                checked: y,
                                onChange: (e) => T("disableSounds", e),
                            }),
                        }),
                        (0, r.jsx)(s.F, {
                            setting: p.s6.STREAMER_MODE_DISABLE_NOTIFICATIONS,
                            children: (0, r.jsx)(a.rsf, {
                                label: m.intl.string(m.t.qmYiYd),
                                description: m.intl.string(m.t["ZAmpQ/"]),
                                checked: O,
                                onChange: (e) => T("disableNotifications", e),
                            }),
                        }),
                        (0, r.jsx)(s.F, {
                            setting: p.s6.STREAMER_MODE_HIDE_DISCORD_WINDOW_FROM_SCREEN_CAPTURE,
                            children: (0, r.jsx)(a.rsf, {
                                label: m.intl.string(m.t["iA81+a"]),
                                description: m.intl.string(m.t.P4vj0h),
                                checked: v,
                                onChange: (e) => T("enableContentProtection", e),
                            }),
                        }),
                    ],
                }),
            ],
        }),
    });
}
