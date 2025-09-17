n.d(t, { Z: () => O });
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
    _ = n(947889),
    p = n(726985),
    h = n(981631),
    m = n(388032),
    g = n(40086),
    E = n(197571);
function b(e, t, n) {
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
function y(e) {
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
                b(e, t, n[t]);
            });
    }
    return e;
}
function O() {
    let {
            enabled: e,
            autoToggle: t,
            hideInstantInvites: i,
            hidePersonalInformation: b,
            disableSounds: O,
            disableNotifications: v,
            enableContentProtection: I,
        } = (0, o.cj)([u.Z], () => y({}, u.Z.getSettings())),
        T = (0, _.Z)(),
        S = () =>
            (0, r.jsx)(s.ToO, {
                className: E.marginBottom40,
                iconClassName: g.noticeIcon,
                type: s.Dd5.PRIMARY,
                imageData: {
                    src: n(560264),
                    width: 184,
                    height: 110,
                    position: s.SwA.RIGHT,
                },
                title: m.intl.string(m.t.bxGbHB),
                body: m.intl.format(m.t["4rmZn5"], { streamkitURL: h.EYA.STREAMKIT }),
            }),
        A = () => {
            if (d.isPlatformEmbedded)
                return (0, r.jsx)(s.j7V, {
                    value: t,
                    onChange: (e) => C("autoToggle", e),
                    note: m.intl.string(m.t.ZPi4lJ),
                    children: m.intl.string(m.t.PKDAJy),
                });
        },
        C = (e, t) => {
            l.Z.update({ [e]: t });
        },
        N = () => {
            T(f.n.KEYBINDS_PANEL, { section: h.oAB.KEYBINDS });
        };
    return (0, r.jsxs)(s.hjN, {
        className: g.container,
        tag: s.RB0.H1,
        title: m.intl.string(m.t.S5GfOT),
        children: [
            (0, r.jsx)(c.F, {
                setting: p.s6.STREAMER_MODE_INTEGRATIONS,
                children: S(),
            }),
            (0, r.jsxs)(c.F, {
                setting: p.s6.STREAMER_MODE_ENABLE,
                children: [
                    (0, r.jsx)(s.j7V, {
                        value: e,
                        onChange: (e) => C("enabled", e),
                        note: m.intl.format(m.t.MLVL2N, { onClick: N }),
                        children: m.intl.string(m.t.p9ZAJS),
                    }),
                    A(),
                ],
            }),
            (0, r.jsxs)("div", {
                children: [
                    (0, r.jsx)(s.vwX, {
                        className: a()(E.marginTop40, E.marginBottom8, g.sectionLabel),
                        children: m.intl.string(m.t["+1H47u"]),
                    }),
                    (0, r.jsx)(c.F, {
                        setting: p.s6.STREAMER_MODE_HIDE_PERSONAL_INFORMATION,
                        children: (0, r.jsx)(s.j7V, {
                            value: b,
                            onChange: (e) => C("hidePersonalInformation", e),
                            note: m.intl.string(m.t["+9Lra2"]),
                            children: m.intl.string(m.t.UpQziI),
                        }),
                    }),
                    (0, r.jsx)(c.F, {
                        setting: p.s6.STREAMER_MODE_HIDE_INVITE_LINKS,
                        children: (0, r.jsx)(s.j7V, {
                            value: i,
                            onChange: (e) => C("hideInstantInvites", e),
                            note: m.intl.string(m.t.m7mS2d),
                            children: m.intl.string(m.t.q7WNGh),
                        }),
                    }),
                    (0, r.jsx)(c.F, {
                        setting: p.s6.STREAMER_MODE_DISABLE_SOUNDS,
                        children: (0, r.jsx)(s.j7V, {
                            value: O,
                            onChange: (e) => C("disableSounds", e),
                            note: m.intl.string(m.t.eAkaio),
                            children: m.intl.string(m.t.o56OZm),
                        }),
                    }),
                    (0, r.jsx)(c.F, {
                        setting: p.s6.STREAMER_MODE_DISABLE_NOTIFICATIONS,
                        children: (0, r.jsx)(s.j7V, {
                            value: v,
                            onChange: (e) => C("disableNotifications", e),
                            note: m.intl.string(m.t.ZAmpQ0),
                            children: m.intl.string(m.t.qmYiYW),
                        }),
                    }),
                    (0, r.jsx)(c.F, {
                        setting: p.s6.STREAMER_MODE_HIDE_DISCORD_WINDOW_FROM_SCREEN_CAPTURE,
                        children: (0, r.jsx)(s.j7V, {
                            value: I,
                            onChange: (e) => C("enableContentProtection", e),
                            note: m.intl.string(m.t.P4vj0t),
                            children: m.intl.string(m.t["iA81+f"]),
                        }),
                    }),
                ],
            }),
        ],
    });
}
