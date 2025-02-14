n.d(t, { Z: () => E });
var i = n(200651);
n(192379);
var s = n(120356),
    r = n.n(s),
    l = n(442837),
    a = n(481060),
    o = n(223245),
    c = n(230711),
    d = n(921801),
    u = n(246946),
    m = n(358085),
    h = n(726985),
    g = n(981631),
    x = n(388032),
    _ = n(430387),
    p = n(483938);
function E() {
    let { enabled: e, autoToggle: t, hideInstantInvites: s, hidePersonalInformation: E, disableSounds: C, disableNotifications: f, enableContentProtection: T } = (0, l.cj)([u.Z], () => ({ ...u.Z.getSettings() })),
        N = (e, t) => {
            o.Z.update({ [e]: t });
        };
    return (0, i.jsxs)(a.hjN, {
        className: _.container,
        tag: a.RB0.H1,
        title: x.intl.string(x.t.S5GfOT),
        children: [
            (0, i.jsx)(d.F, {
                setting: h.s6.STREAMER_MODE_INTEGRATIONS,
                children: (0, i.jsx)(a.ToO, {
                    className: p.marginBottom40,
                    iconClassName: _.noticeIcon,
                    type: a.Dd5.PRIMARY,
                    imageData: {
                        src: n(560264),
                        width: 184,
                        height: 110,
                        position: a.SwA.RIGHT
                    },
                    title: x.intl.string(x.t.bxGbHB),
                    body: x.intl.format(x.t['4rmZn5'], { streamkitURL: g.EYA.STREAMKIT })
                })
            }),
            (0, i.jsxs)(d.F, {
                setting: h.s6.STREAMER_MODE_ENABLE,
                children: [
                    (0, i.jsx)(a.j7V, {
                        value: e,
                        onChange: (e) => N('enabled', e),
                        note: x.intl.format(x.t.MLVL2N, {
                            onClick: () => {
                                c.Z.setSection(g.oAB.KEYBINDS);
                            }
                        }),
                        children: x.intl.string(x.t.p9ZAJS)
                    }),
                    (() => {
                        if (m.isPlatformEmbedded)
                            return (0, i.jsx)(a.j7V, {
                                value: t,
                                onChange: (e) => N('autoToggle', e),
                                note: x.intl.string(x.t.ZPi4lJ),
                                children: x.intl.string(x.t.PKDAJy)
                            });
                    })()
                ]
            }),
            (0, i.jsxs)('div', {
                children: [
                    (0, i.jsx)(a.vwX, {
                        className: r()(p.marginTop40, p.marginBottom8, _.sectionLabel),
                        children: x.intl.string(x.t['+1H47u'])
                    }),
                    (0, i.jsx)(d.F, {
                        setting: h.s6.STREAMER_MODE_HIDE_PERSONAL_INFORMATION,
                        children: (0, i.jsx)(a.j7V, {
                            value: E,
                            onChange: (e) => N('hidePersonalInformation', e),
                            note: x.intl.string(x.t['+9Lra2']),
                            children: x.intl.string(x.t.UpQziI)
                        })
                    }),
                    (0, i.jsx)(d.F, {
                        setting: h.s6.STREAMER_MODE_HIDE_INVITE_LINKS,
                        children: (0, i.jsx)(a.j7V, {
                            value: s,
                            onChange: (e) => N('hideInstantInvites', e),
                            note: x.intl.string(x.t.m7mS2d),
                            children: x.intl.string(x.t.q7WNGh)
                        })
                    }),
                    (0, i.jsx)(d.F, {
                        setting: h.s6.STREAMER_MODE_DISABLE_SOUNDS,
                        children: (0, i.jsx)(a.j7V, {
                            value: C,
                            onChange: (e) => N('disableSounds', e),
                            note: x.intl.string(x.t.eAkaio),
                            children: x.intl.string(x.t.o56OZm)
                        })
                    }),
                    (0, i.jsx)(d.F, {
                        setting: h.s6.STREAMER_MODE_DISABLE_NOTIFICATIONS,
                        children: (0, i.jsx)(a.j7V, {
                            value: f,
                            onChange: (e) => N('disableNotifications', e),
                            note: x.intl.string(x.t.ZAmpQ0),
                            children: x.intl.string(x.t.qmYiYW)
                        })
                    }),
                    (0, i.jsx)(d.F, {
                        setting: h.s6.STREAMER_MODE_HIDE_DISCORD_WINDOW_FROM_SCREEN_CAPTURE,
                        children: (0, i.jsx)(a.j7V, {
                            value: T,
                            onChange: (e) => N('enableContentProtection', e),
                            note: x.intl.string(x.t.P4vj0t),
                            children: x.intl.string(x.t['iA81+f'])
                        })
                    })
                ]
            })
        ]
    });
}
