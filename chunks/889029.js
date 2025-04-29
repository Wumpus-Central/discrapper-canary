n.d(t, { Z: () => _ });
var i = n(255367);
n(73800);
var r = n(120356),
    s = n.n(r),
    l = n(442837),
    a = n(481060),
    o = n(223245),
    c = n(230711),
    d = n(921801),
    u = n(246946),
    m = n(358085),
    p = n(726985),
    g = n(981631),
    h = n(388032),
    f = n(700195),
    b = n(20493);
function _() {
    let {
            enabled: e,
            autoToggle: t,
            hideInstantInvites: r,
            hidePersonalInformation: _,
            disableSounds: x,
            disableNotifications: E,
            enableContentProtection: j
        } = (0, l.cj)([u.Z], () =>
            (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        i = Object.keys(n);
                    'function' == typeof Object.getOwnPropertySymbols &&
                        (i = i.concat(
                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                            })
                        )),
                        i.forEach(function (t) {
                            var i;
                            (i = n[t]),
                                t in e
                                    ? Object.defineProperty(e, t, {
                                          value: i,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0
                                      })
                                    : (e[t] = i);
                        });
                }
                return e;
            })({}, u.Z.getSettings())
        ),
        C = (e, t) => {
            o.Z.update({ [e]: t });
        };
    return (0, i.jsxs)(a.hjN, {
        className: f.container,
        tag: a.RB0.H1,
        title: h.intl.string(h.t.S5GfOT),
        children: [
            (0, i.jsx)(d.F, {
                setting: p.s6.STREAMER_MODE_INTEGRATIONS,
                children: (0, i.jsx)(a.ToO, {
                    className: b.marginBottom40,
                    iconClassName: f.noticeIcon,
                    type: a.Dd5.PRIMARY,
                    imageData: {
                        src: n(560264),
                        width: 184,
                        height: 110,
                        position: a.SwA.RIGHT
                    },
                    title: h.intl.string(h.t.bxGbHB),
                    body: h.intl.format(h.t['4rmZn5'], { streamkitURL: g.EYA.STREAMKIT })
                })
            }),
            (0, i.jsxs)(d.F, {
                setting: p.s6.STREAMER_MODE_ENABLE,
                children: [
                    (0, i.jsx)(a.j7V, {
                        value: e,
                        onChange: (e) => C('enabled', e),
                        note: h.intl.format(h.t.MLVL2N, {
                            onClick: () => {
                                c.Z.setSection(g.oAB.KEYBINDS);
                            }
                        }),
                        children: h.intl.string(h.t.p9ZAJS)
                    }),
                    (() => {
                        if (m.isPlatformEmbedded)
                            return (0, i.jsx)(a.j7V, {
                                value: t,
                                onChange: (e) => C('autoToggle', e),
                                note: h.intl.string(h.t.ZPi4lJ),
                                children: h.intl.string(h.t.PKDAJy)
                            });
                    })()
                ]
            }),
            (0, i.jsxs)('div', {
                children: [
                    (0, i.jsx)(a.vwX, {
                        className: s()(b.marginTop40, b.marginBottom8, f.sectionLabel),
                        children: h.intl.string(h.t['+1H47u'])
                    }),
                    (0, i.jsx)(d.F, {
                        setting: p.s6.STREAMER_MODE_HIDE_PERSONAL_INFORMATION,
                        children: (0, i.jsx)(a.j7V, {
                            value: _,
                            onChange: (e) => C('hidePersonalInformation', e),
                            note: h.intl.string(h.t['+9Lra2']),
                            children: h.intl.string(h.t.UpQziI)
                        })
                    }),
                    (0, i.jsx)(d.F, {
                        setting: p.s6.STREAMER_MODE_HIDE_INVITE_LINKS,
                        children: (0, i.jsx)(a.j7V, {
                            value: r,
                            onChange: (e) => C('hideInstantInvites', e),
                            note: h.intl.string(h.t.m7mS2d),
                            children: h.intl.string(h.t.q7WNGh)
                        })
                    }),
                    (0, i.jsx)(d.F, {
                        setting: p.s6.STREAMER_MODE_DISABLE_SOUNDS,
                        children: (0, i.jsx)(a.j7V, {
                            value: x,
                            onChange: (e) => C('disableSounds', e),
                            note: h.intl.string(h.t.eAkaio),
                            children: h.intl.string(h.t.o56OZm)
                        })
                    }),
                    (0, i.jsx)(d.F, {
                        setting: p.s6.STREAMER_MODE_DISABLE_NOTIFICATIONS,
                        children: (0, i.jsx)(a.j7V, {
                            value: E,
                            onChange: (e) => C('disableNotifications', e),
                            note: h.intl.string(h.t.ZAmpQ0),
                            children: h.intl.string(h.t.qmYiYW)
                        })
                    }),
                    (0, i.jsx)(d.F, {
                        setting: p.s6.STREAMER_MODE_HIDE_DISCORD_WINDOW_FROM_SCREEN_CAPTURE,
                        children: (0, i.jsx)(a.j7V, {
                            value: j,
                            onChange: (e) => C('enableContentProtection', e),
                            note: h.intl.string(h.t.P4vj0t),
                            children: h.intl.string(h.t['iA81+f'])
                        })
                    })
                ]
            })
        ]
    });
}
