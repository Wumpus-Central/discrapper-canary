n.d(t, { Z: () => v });
var r = n(951288);
n(647438);
var i = n(120356),
    a = n.n(i),
    o = n(442837),
    s = n(481060),
    l = n(223245),
    c = n(921801),
    u = n(246946),
    d = n(358085),
    f = n(313789),
    _ = n(273313),
    p = n(947889),
    h = n(726985),
    m = n(981631),
    g = n(388032),
    E = n(40086),
    b = n(197571);
function y(e, t, n) {
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
function O(e) {
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
                y(e, t, n[t]);
            });
    }
    return e;
}
function v() {
    let {
            enabled: e,
            autoToggle: t,
            hideInstantInvites: i,
            hidePersonalInformation: y,
            disableSounds: v,
            disableNotifications: I,
            enableContentProtection: T,
        } = (0, o.cj)([u.Z], () => O({}, u.Z.getSettings())),
        S = (0, p.Z)(),
        A = () =>
            (0, r.jsx)(s.ToO, {
                className: b.marginBottom40,
                iconClassName: E.noticeIcon,
                type: s.Dd5.PRIMARY,
                imageData: {
                    src: n(560264),
                    width: 184,
                    height: 110,
                    position: s.SwA.RIGHT,
                },
                title: g.intl.string(g.t.bxGbHB),
                body: g.intl.format(g.t["4rmZn5"], { streamkitURL: m.EYA.STREAMKIT }),
            }),
        C = () => {
            if (d.isPlatformEmbedded)
                return (0, r.jsx)(s.j7V, {
                    value: t,
                    onChange: (e) => N("autoToggle", e),
                    note: g.intl.string(g.t.ZPi4lJ),
                    children: g.intl.string(g.t.PKDAJy),
                });
        },
        N = (e, t) => {
            l.Z.update({ [e]: t });
        },
        R = () => {
            S(f.n.KEYBINDS_PANEL, { section: m.oAB.KEYBINDS });
        };
    return (0, r.jsxs)(_.Z, {
        title: g.intl.string(g.t.S5GfOT),
        children: [
            (0, r.jsx)(c.F, {
                setting: h.s6.STREAMER_MODE_INTEGRATIONS,
                children: A(),
            }),
            (0, r.jsxs)(c.F, {
                setting: h.s6.STREAMER_MODE_ENABLE,
                children: [
                    (0, r.jsx)(s.j7V, {
                        value: e,
                        onChange: (e) => N("enabled", e),
                        note: g.intl.format(g.t.MLVL2N, { onClick: R }),
                        children: g.intl.string(g.t.p9ZAJS),
                    }),
                    C(),
                ],
            }),
            (0, r.jsxs)("div", {
                children: [
                    (0, r.jsx)(s.vwX, {
                        className: a()(b.marginTop40, b.marginBottom8, E.sectionLabel),
                        children: g.intl.string(g.t["+1H47u"]),
                    }),
                    (0, r.jsx)(c.F, {
                        setting: h.s6.STREAMER_MODE_HIDE_PERSONAL_INFORMATION,
                        children: (0, r.jsx)(s.j7V, {
                            value: y,
                            onChange: (e) => N("hidePersonalInformation", e),
                            note: g.intl.string(g.t["+9Lra2"]),
                            children: g.intl.string(g.t.UpQziI),
                        }),
                    }),
                    (0, r.jsx)(c.F, {
                        setting: h.s6.STREAMER_MODE_HIDE_INVITE_LINKS,
                        children: (0, r.jsx)(s.j7V, {
                            value: i,
                            onChange: (e) => N("hideInstantInvites", e),
                            note: g.intl.string(g.t.m7mS2d),
                            children: g.intl.string(g.t.q7WNGh),
                        }),
                    }),
                    (0, r.jsx)(c.F, {
                        setting: h.s6.STREAMER_MODE_DISABLE_SOUNDS,
                        children: (0, r.jsx)(s.j7V, {
                            value: v,
                            onChange: (e) => N("disableSounds", e),
                            note: g.intl.string(g.t.eAkaio),
                            children: g.intl.string(g.t.o56OZm),
                        }),
                    }),
                    (0, r.jsx)(c.F, {
                        setting: h.s6.STREAMER_MODE_DISABLE_NOTIFICATIONS,
                        children: (0, r.jsx)(s.j7V, {
                            value: I,
                            onChange: (e) => N("disableNotifications", e),
                            note: g.intl.string(g.t.ZAmpQ0),
                            children: g.intl.string(g.t.qmYiYW),
                        }),
                    }),
                    (0, r.jsx)(c.F, {
                        setting: h.s6.STREAMER_MODE_HIDE_DISCORD_WINDOW_FROM_SCREEN_CAPTURE,
                        children: (0, r.jsx)(s.j7V, {
                            value: T,
                            onChange: (e) => N("enableContentProtection", e),
                            note: g.intl.string(g.t.P4vj0t),
                            children: g.intl.string(g.t["iA81+f"]),
                        }),
                    }),
                ],
            }),
        ],
    });
}
