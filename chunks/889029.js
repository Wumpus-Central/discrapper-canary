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
    _ = n(726985),
    p = n(981631),
    h = n(388032),
    m = n(459289);
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
            (0, r.jsxs)(a.Zbd, {
                type: a.Zbd.Types.PRIMARY,
                className: m.noticeCard,
                children: [
                    (0, r.jsxs)("div", {
                        children: [
                            (0, r.jsx)(a.Heading, {
                                variant: "heading-md/medium",
                                children: h.intl.string(h.t.bxGbHL),
                            }),
                            (0, r.jsx)(a.Text, {
                                variant: "text-sm/normal",
                                children: h.intl.format(h.t["4rmZnx"], { streamkitURL: p.EYA.STREAMKIT }),
                            }),
                        ],
                    }),
                    (0, r.jsx)("img", {
                        src: n(560264),
                        width: 184,
                        height: 110,
                        alt: "",
                        className: m.noticeImage,
                    }),
                ],
            }),
        T = () => {
            if (c.isPlatformEmbedded)
                return (0, r.jsx)(a.rsf, {
                    label: h.intl.string(h.t["PKDAJ/"]),
                    description: h.intl.string(h.t.ZPi4lM),
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
        title: h.intl.string(h.t.S5GfOW),
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
                                label: h.intl.string(h.t.p9ZAJZ),
                                description: h.intl.format(h.t.MLVL2M, { onClick: A }),
                                checked: e,
                                onChange: (e) => S("enabled", e),
                            }),
                            T(),
                            (0, r.jsx)(a.izJ, {}),
                        ],
                    }),
                }),
                (0, r.jsxs)(a.C3N, {
                    label: h.intl.string(h.t["+1H47t"]),
                    className: m.sectionLabel,
                    children: [
                        (0, r.jsx)(s.F, {
                            setting: _.s6.STREAMER_MODE_HIDE_PERSONAL_INFORMATION,
                            children: (0, r.jsx)(a.rsf, {
                                label: h.intl.string(h.t.UpQziA),
                                description: h.intl.string(h.t["+9Lra7"]),
                                checked: b,
                                onChange: (e) => S("hidePersonalInformation", e),
                            }),
                        }),
                        (0, r.jsx)(s.F, {
                            setting: _.s6.STREAMER_MODE_HIDE_INVITE_LINKS,
                            children: (0, r.jsx)(a.rsf, {
                                label: h.intl.string(h.t.q7WNGv),
                                description: h.intl.string(h.t.m7mS2U),
                                checked: g,
                                onChange: (e) => S("hideInstantInvites", e),
                            }),
                        }),
                        (0, r.jsx)(s.F, {
                            setting: _.s6.STREAMER_MODE_DISABLE_SOUNDS,
                            children: (0, r.jsx)(a.rsf, {
                                label: h.intl.string(h.t.o56OZu),
                                description: h.intl.string(h.t.eAkaik),
                                checked: y,
                                onChange: (e) => S("disableSounds", e),
                            }),
                        }),
                        (0, r.jsx)(s.F, {
                            setting: _.s6.STREAMER_MODE_DISABLE_NOTIFICATIONS,
                            children: (0, r.jsx)(a.rsf, {
                                label: h.intl.string(h.t.qmYiYd),
                                description: h.intl.string(h.t["ZAmpQ/"]),
                                checked: O,
                                onChange: (e) => S("disableNotifications", e),
                            }),
                        }),
                        (0, r.jsx)(s.F, {
                            setting: _.s6.STREAMER_MODE_HIDE_DISCORD_WINDOW_FROM_SCREEN_CAPTURE,
                            children: (0, r.jsx)(a.rsf, {
                                label: h.intl.string(h.t["iA81+a"]),
                                description: h.intl.string(h.t.P4vj0h),
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
