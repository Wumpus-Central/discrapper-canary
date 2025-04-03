n.d(t, { Z: () => N });
var r = n(200651);
n(192379);
var i = n(120356),
    s = n.n(i),
    a = n(442837),
    l = n(481060),
    o = n(223245),
    c = n(230711),
    d = n(921801),
    u = n(246946),
    m = n(358085),
    g = n(726985),
    p = n(981631),
    h = n(388032),
    f = n(700195),
    b = n(20493);
function N() {
    let {
            enabled: e,
            autoToggle: t,
            hideInstantInvites: i,
            hidePersonalInformation: N,
            disableSounds: x,
            disableNotifications: _,
            enableContentProtection: E
        } = (0, a.cj)([u.Z], () =>
            (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    'function' == typeof Object.getOwnPropertySymbols &&
                        (r = r.concat(
                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                            })
                        )),
                        r.forEach(function (t) {
                            var r;
                            (r = n[t]),
                                t in e
                                    ? Object.defineProperty(e, t, {
                                          value: r,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0
                                      })
                                    : (e[t] = r);
                        });
                }
                return e;
            })({}, u.Z.getSettings())
        ),
        j = (e, t) => {
            o.Z.update({ [e]: t });
        };
    return (0, r.jsxs)(l.hjN, {
        className: f.container,
        tag: l.RB0.H1,
        title: h.NW.string(h.t.S5GfOT),
        children: [
            (0, r.jsx)(d.F, {
                setting: g.s6.STREAMER_MODE_INTEGRATIONS,
                children: (0, r.jsx)(l.ToO, {
                    className: b.marginBottom40,
                    iconClassName: f.noticeIcon,
                    type: l.Dd5.PRIMARY,
                    imageData: {
                        src: n(560264),
                        width: 184,
                        height: 110,
                        position: l.SwA.RIGHT
                    },
                    title: h.NW.string(h.t.bxGbHB),
                    body: h.NW.format(h.t['4rmZn5'], { streamkitURL: p.EYA.STREAMKIT })
                })
            }),
            (0, r.jsxs)(d.F, {
                setting: g.s6.STREAMER_MODE_ENABLE,
                children: [
                    (0, r.jsx)(l.j7V, {
                        value: e,
                        onChange: (e) => j('enabled', e),
                        note: h.NW.format(h.t.MLVL2N, {
                            onClick: () => {
                                c.Z.setSection(p.oAB.KEYBINDS);
                            }
                        }),
                        children: h.NW.string(h.t.p9ZAJS)
                    }),
                    (() => {
                        if (m.isPlatformEmbedded)
                            return (0, r.jsx)(l.j7V, {
                                value: t,
                                onChange: (e) => j('autoToggle', e),
                                note: h.NW.string(h.t.ZPi4lJ),
                                children: h.NW.string(h.t.PKDAJy)
                            });
                    })()
                ]
            }),
            (0, r.jsxs)('div', {
                children: [
                    (0, r.jsx)(l.vwX, {
                        className: s()(b.marginTop40, b.marginBottom8, f.sectionLabel),
                        children: h.NW.string(h.t['+1H47u'])
                    }),
                    (0, r.jsx)(d.F, {
                        setting: g.s6.STREAMER_MODE_HIDE_PERSONAL_INFORMATION,
                        children: (0, r.jsx)(l.j7V, {
                            value: N,
                            onChange: (e) => j('hidePersonalInformation', e),
                            note: h.NW.string(h.t['+9Lra2']),
                            children: h.NW.string(h.t.UpQziI)
                        })
                    }),
                    (0, r.jsx)(d.F, {
                        setting: g.s6.STREAMER_MODE_HIDE_INVITE_LINKS,
                        children: (0, r.jsx)(l.j7V, {
                            value: i,
                            onChange: (e) => j('hideInstantInvites', e),
                            note: h.NW.string(h.t.m7mS2d),
                            children: h.NW.string(h.t.q7WNGh)
                        })
                    }),
                    (0, r.jsx)(d.F, {
                        setting: g.s6.STREAMER_MODE_DISABLE_SOUNDS,
                        children: (0, r.jsx)(l.j7V, {
                            value: x,
                            onChange: (e) => j('disableSounds', e),
                            note: h.NW.string(h.t.eAkaio),
                            children: h.NW.string(h.t.o56OZm)
                        })
                    }),
                    (0, r.jsx)(d.F, {
                        setting: g.s6.STREAMER_MODE_DISABLE_NOTIFICATIONS,
                        children: (0, r.jsx)(l.j7V, {
                            value: _,
                            onChange: (e) => j('disableNotifications', e),
                            note: h.NW.string(h.t.ZAmpQ0),
                            children: h.NW.string(h.t.qmYiYW)
                        })
                    }),
                    (0, r.jsx)(d.F, {
                        setting: g.s6.STREAMER_MODE_HIDE_DISCORD_WINDOW_FROM_SCREEN_CAPTURE,
                        children: (0, r.jsx)(l.j7V, {
                            value: E,
                            onChange: (e) => j('enableContentProtection', e),
                            note: h.NW.string(h.t.P4vj0t),
                            children: h.NW.string(h.t['iA81+f'])
                        })
                    })
                ]
            })
        ]
    });
}
