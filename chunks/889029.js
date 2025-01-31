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
    _ = n(388032),
    x = n(381578),
    p = n(232186);
function E() {
    let { enabled: e, autoToggle: t, hideInstantInvites: s, hidePersonalInformation: E, disableSounds: C, disableNotifications: f, enableContentProtection: T } = (0, l.cj)([u.Z], () => ({ ...u.Z.getSettings() })),
        N = (e, t) => {
            o.Z.update({ [e]: t });
        };
    return (0, i.jsxs)(a.hjN, {
        className: x.container,
        tag: a.RB0.H1,
        title: _.intl.string(_.t.S5GfOT),
        children: [
            (0, i.jsx)(d.F, {
                setting: h.s6.STREAMER_MODE_INTEGRATIONS,
                children: (0, i.jsx)(a.ToO, {
                    className: p.marginBottom40,
                    iconClassName: x.noticeIcon,
                    type: a.Dd5.PRIMARY,
                    imageData: {
                        src: n(560264),
                        width: 184,
                        height: 110,
                        position: a.SwA.RIGHT
                    },
                    title: _.intl.string(_.t.bxGbHB),
                    body: _.intl.format(_.t['4rmZn5'], { streamkitURL: g.EYA.STREAMKIT })
                })
            }),
            (0, i.jsxs)(d.F, {
                setting: h.s6.STREAMER_MODE_ENABLE,
                children: [
                    (0, i.jsx)(a.j7V, {
                        value: e,
                        onChange: (e) => N('enabled', e),
                        note: _.intl.format(_.t.MLVL2N, {
                            onClick: () => {
                                c.Z.setSection(g.oAB.KEYBINDS);
                            }
                        }),
                        children: _.intl.string(_.t.p9ZAJS)
                    }),
                    (() => {
                        if (m.isPlatformEmbedded)
                            return (0, i.jsx)(a.j7V, {
                                value: t,
                                onChange: (e) => N('autoToggle', e),
                                note: _.intl.string(_.t.ZPi4lJ),
                                children: _.intl.string(_.t.PKDAJy)
                            });
                    })()
                ]
            }),
            (0, i.jsxs)('div', {
                children: [
                    (0, i.jsx)(a.vwX, {
                        className: r()(p.marginTop40, p.marginBottom8, x.sectionLabel),
                        children: _.intl.string(_.t['+1H47u'])
                    }),
                    (0, i.jsx)(d.F, {
                        setting: h.s6.STREAMER_MODE_HIDE_PERSONAL_INFORMATION,
                        children: (0, i.jsx)(a.j7V, {
                            value: E,
                            onChange: (e) => N('hidePersonalInformation', e),
                            note: _.intl.string(_.t['+9Lra2']),
                            children: _.intl.string(_.t.UpQziI)
                        })
                    }),
                    (0, i.jsx)(d.F, {
                        setting: h.s6.STREAMER_MODE_HIDE_INVITE_LINKS,
                        children: (0, i.jsx)(a.j7V, {
                            value: s,
                            onChange: (e) => N('hideInstantInvites', e),
                            note: _.intl.string(_.t.m7mS2d),
                            children: _.intl.string(_.t.q7WNGh)
                        })
                    }),
                    (0, i.jsx)(d.F, {
                        setting: h.s6.STREAMER_MODE_DISABLE_SOUNDS,
                        children: (0, i.jsx)(a.j7V, {
                            value: C,
                            onChange: (e) => N('disableSounds', e),
                            note: _.intl.string(_.t.eAkaio),
                            children: _.intl.string(_.t.o56OZm)
                        })
                    }),
                    (0, i.jsx)(d.F, {
                        setting: h.s6.STREAMER_MODE_DISABLE_NOTIFICATIONS,
                        children: (0, i.jsx)(a.j7V, {
                            value: f,
                            onChange: (e) => N('disableNotifications', e),
                            note: _.intl.string(_.t.ZAmpQ0),
                            children: _.intl.string(_.t.qmYiYW)
                        })
                    }),
                    (0, i.jsx)(d.F, {
                        setting: h.s6.STREAMER_MODE_HIDE_DISCORD_WINDOW_FROM_SCREEN_CAPTURE,
                        children: (0, i.jsx)(a.j7V, {
                            value: T,
                            onChange: (e) => N('enableContentProtection', e),
                            note: _.intl.string(_.t.P4vj0t),
                            children: _.intl.string(_.t['iA81+f'])
                        })
                    })
                ]
            })
        ]
    });
}
