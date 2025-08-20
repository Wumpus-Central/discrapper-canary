n.d(t, { Z: () => y });
var r = n(951288);
n(647438);
var i = n(120356),
    a = n.n(i),
    o = n(442837),
    s = n(481060),
    l = n(223245),
    c = n(230711),
    u = n(921801),
    d = n(246946),
    f = n(358085),
    _ = n(726985),
    p = n(981631),
    h = n(388032),
    m = n(40086),
    g = n(197571);
function E(e, t, n) {
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
function b(e) {
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
                E(e, t, n[t]);
            });
    }
    return e;
}
function y() {
    let {
            enabled: e,
            autoToggle: t,
            hideInstantInvites: i,
            hidePersonalInformation: E,
            disableSounds: y,
            disableNotifications: O,
            enableContentProtection: v,
        } = (0, o.cj)([d.Z], () => b({}, d.Z.getSettings())),
        I = () =>
            (0, r.jsx)(s.ToO, {
                className: g.marginBottom40,
                iconClassName: m.noticeIcon,
                type: s.Dd5.PRIMARY,
                imageData: {
                    src: n(560264),
                    width: 184,
                    height: 110,
                    position: s.SwA.RIGHT,
                },
                title: h.intl.string(h.t.bxGbHB),
                body: h.intl.format(h.t["4rmZn5"], { streamkitURL: p.EYA.STREAMKIT }),
            }),
        T = () => {
            if (f.isPlatformEmbedded)
                return (0, r.jsx)(s.j7V, {
                    value: t,
                    onChange: (e) => S("autoToggle", e),
                    note: h.intl.string(h.t.ZPi4lJ),
                    children: h.intl.string(h.t.PKDAJy),
                });
        },
        S = (e, t) => {
            l.Z.update({ [e]: t });
        },
        A = () => {
            c.Z.setSection(p.oAB.KEYBINDS);
        };
    return (0, r.jsxs)(s.hjN, {
        className: m.container,
        tag: s.RB0.H1,
        title: h.intl.string(h.t.S5GfOT),
        children: [
            (0, r.jsx)(u.F, {
                setting: _.s6.STREAMER_MODE_INTEGRATIONS,
                children: I(),
            }),
            (0, r.jsxs)(u.F, {
                setting: _.s6.STREAMER_MODE_ENABLE,
                children: [
                    (0, r.jsx)(s.j7V, {
                        value: e,
                        onChange: (e) => S("enabled", e),
                        note: h.intl.format(h.t.MLVL2N, { onClick: A }),
                        children: h.intl.string(h.t.p9ZAJS),
                    }),
                    T(),
                ],
            }),
            (0, r.jsxs)("div", {
                children: [
                    (0, r.jsx)(s.vwX, {
                        className: a()(g.marginTop40, g.marginBottom8, m.sectionLabel),
                        children: h.intl.string(h.t["+1H47u"]),
                    }),
                    (0, r.jsx)(u.F, {
                        setting: _.s6.STREAMER_MODE_HIDE_PERSONAL_INFORMATION,
                        children: (0, r.jsx)(s.j7V, {
                            value: E,
                            onChange: (e) => S("hidePersonalInformation", e),
                            note: h.intl.string(h.t["+9Lra2"]),
                            children: h.intl.string(h.t.UpQziI),
                        }),
                    }),
                    (0, r.jsx)(u.F, {
                        setting: _.s6.STREAMER_MODE_HIDE_INVITE_LINKS,
                        children: (0, r.jsx)(s.j7V, {
                            value: i,
                            onChange: (e) => S("hideInstantInvites", e),
                            note: h.intl.string(h.t.m7mS2d),
                            children: h.intl.string(h.t.q7WNGh),
                        }),
                    }),
                    (0, r.jsx)(u.F, {
                        setting: _.s6.STREAMER_MODE_DISABLE_SOUNDS,
                        children: (0, r.jsx)(s.j7V, {
                            value: y,
                            onChange: (e) => S("disableSounds", e),
                            note: h.intl.string(h.t.eAkaio),
                            children: h.intl.string(h.t.o56OZm),
                        }),
                    }),
                    (0, r.jsx)(u.F, {
                        setting: _.s6.STREAMER_MODE_DISABLE_NOTIFICATIONS,
                        children: (0, r.jsx)(s.j7V, {
                            value: O,
                            onChange: (e) => S("disableNotifications", e),
                            note: h.intl.string(h.t.ZAmpQ0),
                            children: h.intl.string(h.t.qmYiYW),
                        }),
                    }),
                    (0, r.jsx)(u.F, {
                        setting: _.s6.STREAMER_MODE_HIDE_DISCORD_WINDOW_FROM_SCREEN_CAPTURE,
                        children: (0, r.jsx)(s.j7V, {
                            value: v,
                            onChange: (e) => S("enableContentProtection", e),
                            note: h.intl.string(h.t.P4vj0t),
                            children: h.intl.string(h.t["iA81+f"]),
                        }),
                    }),
                ],
            }),
        ],
    });
}
