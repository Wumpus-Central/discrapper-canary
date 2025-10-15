n.d(t, { Z: () => b });
var r = n(951288);
n(647438);
var i = n(442837),
    a = n(481060),
    o = n(223245),
    s = n(921801),
    l = n(246946),
    c = n(358085),
    u = n(313789),
    d = n(273313),
    f = n(518596),
    _ = n(726985),
    p = n(981631),
    h = n(388032),
    m = n(40086);
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
        I = () =>
            (0, r.jsx)(a.ToO, {
                iconClassName: m.noticeIcon,
                type: a.Dd5.PRIMARY,
                imageData: {
                    src: n(560264),
                    width: 184,
                    height: 110,
                    position: a.SwA.RIGHT,
                },
                title: h.intl.string(h.t.bxGbHB),
                body: h.intl.format(h.t["4rmZn5"], { streamkitURL: p.EYA.STREAMKIT }),
            }),
        T = () => {
            if (c.isPlatformEmbedded)
                return (0, r.jsx)(a.rsf, {
                    label: h.intl.string(h.t.PKDAJy),
                    description: h.intl.string(h.t.ZPi4lJ),
                    checked: t,
                    onChange: (e) => S("autoToggle", e),
                });
        },
        S = (e, t) => {
            o.Z.update({ [e]: t });
        },
        A = () => {
            (0, f.openUserSettings)(u.n.KEYBINDS_PANEL, { section: p.oAB.KEYBINDS });
        };
    return (0, r.jsx)(d.Z, {
        title: h.intl.string(h.t.S5GfOT),
        children: (0, r.jsxs)(a.Kqy, {
            gap: 24,
            children: [
                (0, r.jsx)(s.F, {
                    setting: _.s6.STREAMER_MODE_INTEGRATIONS,
                    children: I(),
                }),
                (0, r.jsx)(s.F, {
                    setting: _.s6.STREAMER_MODE_ENABLE,
                    children: (0, r.jsxs)(a.Kqy, {
                        gap: 16,
                        children: [
                            (0, r.jsx)(a.rsf, {
                                label: h.intl.string(h.t.p9ZAJS),
                                description: h.intl.format(h.t.MLVL2N, { onClick: A }),
                                checked: e,
                                onChange: (e) => S("enabled", e),
                            }),
                            T(),
                            (0, r.jsx)(a.izJ, {}),
                        ],
                    }),
                }),
                (0, r.jsxs)(a.C3N, {
                    label: h.intl.string(h.t["+1H47u"]),
                    className: m.sectionLabel,
                    children: [
                        (0, r.jsx)(s.F, {
                            setting: _.s6.STREAMER_MODE_HIDE_PERSONAL_INFORMATION,
                            children: (0, r.jsx)(a.rsf, {
                                label: h.intl.string(h.t.UpQziI),
                                description: h.intl.string(h.t["+9Lra2"]),
                                checked: b,
                                onChange: (e) => S("hidePersonalInformation", e),
                            }),
                        }),
                        (0, r.jsx)(s.F, {
                            setting: _.s6.STREAMER_MODE_HIDE_INVITE_LINKS,
                            children: (0, r.jsx)(a.rsf, {
                                label: h.intl.string(h.t.q7WNGh),
                                description: h.intl.string(h.t.m7mS2d),
                                checked: g,
                                onChange: (e) => S("hideInstantInvites", e),
                            }),
                        }),
                        (0, r.jsx)(s.F, {
                            setting: _.s6.STREAMER_MODE_DISABLE_SOUNDS,
                            children: (0, r.jsx)(a.rsf, {
                                label: h.intl.string(h.t.o56OZm),
                                description: h.intl.string(h.t.eAkaio),
                                checked: y,
                                onChange: (e) => S("disableSounds", e),
                            }),
                        }),
                        (0, r.jsx)(s.F, {
                            setting: _.s6.STREAMER_MODE_DISABLE_NOTIFICATIONS,
                            children: (0, r.jsx)(a.rsf, {
                                label: h.intl.string(h.t.qmYiYW),
                                description: h.intl.string(h.t.ZAmpQ0),
                                checked: O,
                                onChange: (e) => S("disableNotifications", e),
                            }),
                        }),
                        (0, r.jsx)(s.F, {
                            setting: _.s6.STREAMER_MODE_HIDE_DISCORD_WINDOW_FROM_SCREEN_CAPTURE,
                            children: (0, r.jsx)(a.rsf, {
                                label: h.intl.string(h.t["iA81+f"]),
                                description: h.intl.string(h.t.P4vj0t),
                                checked: v,
                                onChange: (e) => S("enableContentProtection", e),
                            }),
                        }),
                    ],
                }),
            ],
        }),
    });
}
