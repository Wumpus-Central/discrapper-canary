n.d(t, {
    Z: function () {
        return _;
    }
});
var i = n(200651);
n(192379);
var r = n(120356),
    s = n.n(r),
    a = n(442837),
    l = n(481060),
    o = n(223245),
    c = n(230711),
    d = n(921801),
    u = n(246946),
    m = n(358085),
    g = n(726985),
    h = n(981631),
    p = n(388032),
    x = n(381578),
    f = n(232186);
function _() {
    let { enabled: e, autoToggle: t, hideInstantInvites: r, hidePersonalInformation: _, disableSounds: E, disableNotifications: C, enableContentProtection: T } = (0, a.cj)([u.Z], () => ({ ...u.Z.getSettings() })),
        S = (e, t) => {
            o.Z.update({ [e]: t });
        };
    return (0, i.jsxs)(l.FormSection, {
        className: x.container,
        tag: l.FormTitleTags.H1,
        title: p.intl.string(p.t.S5GfOT),
        children: [
            (0, i.jsx)(d.F, {
                setting: g.s6.STREAMER_MODE_INTEGRATIONS,
                children: (0, i.jsx)(l.FormNotice, {
                    className: f.marginBottom40,
                    iconClassName: x.noticeIcon,
                    type: l.FormNoticeTypes.PRIMARY,
                    imageData: {
                        src: n(560264),
                        width: 184,
                        height: 110,
                        position: l.FormNoticeImagePositions.RIGHT
                    },
                    title: p.intl.string(p.t.bxGbHB),
                    body: p.intl.format(p.t['4rmZn5'], { streamkitURL: h.EYA.STREAMKIT })
                })
            }),
            (0, i.jsxs)(d.F, {
                setting: g.s6.STREAMER_MODE_ENABLE,
                children: [
                    (0, i.jsx)(l.FormSwitch, {
                        value: e,
                        onChange: (e) => S('enabled', e),
                        note: p.intl.format(p.t.MLVL2N, {
                            onClick: () => {
                                c.Z.setSection(h.oAB.KEYBINDS);
                            }
                        }),
                        children: p.intl.string(p.t.p9ZAJS)
                    }),
                    (() => {
                        if (m.isPlatformEmbedded)
                            return (0, i.jsx)(l.FormSwitch, {
                                value: t,
                                onChange: (e) => S('autoToggle', e),
                                note: p.intl.string(p.t.ZPi4lJ),
                                children: p.intl.string(p.t.PKDAJy)
                            });
                    })()
                ]
            }),
            (0, i.jsxs)('div', {
                children: [
                    (0, i.jsx)(l.FormTitle, {
                        className: s()(f.marginTop40, f.marginBottom8, x.sectionLabel),
                        children: p.intl.string(p.t['+1H47u'])
                    }),
                    (0, i.jsx)(d.F, {
                        setting: g.s6.STREAMER_MODE_HIDE_PERSONAL_INFORMATION,
                        children: (0, i.jsx)(l.FormSwitch, {
                            value: _,
                            onChange: (e) => S('hidePersonalInformation', e),
                            note: p.intl.string(p.t['+9Lra2']),
                            children: p.intl.string(p.t.UpQziI)
                        })
                    }),
                    (0, i.jsx)(d.F, {
                        setting: g.s6.STREAMER_MODE_HIDE_INVITE_LINKS,
                        children: (0, i.jsx)(l.FormSwitch, {
                            value: r,
                            onChange: (e) => S('hideInstantInvites', e),
                            note: p.intl.string(p.t.m7mS2d),
                            children: p.intl.string(p.t.q7WNGh)
                        })
                    }),
                    (0, i.jsx)(d.F, {
                        setting: g.s6.STREAMER_MODE_DISABLE_SOUNDS,
                        children: (0, i.jsx)(l.FormSwitch, {
                            value: E,
                            onChange: (e) => S('disableSounds', e),
                            note: p.intl.string(p.t.eAkaio),
                            children: p.intl.string(p.t.o56OZm)
                        })
                    }),
                    (0, i.jsx)(d.F, {
                        setting: g.s6.STREAMER_MODE_DISABLE_NOTIFICATIONS,
                        children: (0, i.jsx)(l.FormSwitch, {
                            value: C,
                            onChange: (e) => S('disableNotifications', e),
                            note: p.intl.string(p.t.ZAmpQ0),
                            children: p.intl.string(p.t.qmYiYW)
                        })
                    }),
                    (0, i.jsx)(d.F, {
                        setting: g.s6.STREAMER_MODE_HIDE_DISCORD_WINDOW_FROM_SCREEN_CAPTURE,
                        children: (0, i.jsx)(l.FormSwitch, {
                            value: T,
                            onChange: (e) => S('enableContentProtection', e),
                            note: p.intl.string(p.t.P4vj0t),
                            children: p.intl.string(p.t['iA81+f'])
                        })
                    })
                ]
            })
        ]
    });
}
