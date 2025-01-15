n.d(t, {
    Z: function () {
        return j;
    }
}),
    n(47120);
var i = n(200651),
    s = n(192379),
    r = n(442837),
    a = n(481060),
    l = n(596454),
    o = n(906732),
    c = n(856768),
    d = n(993413),
    u = n(921801),
    m = n(208049),
    g = n(763296),
    h = n(242291),
    p = n(893663),
    x = n(331642),
    f = n(63063),
    _ = n(581883),
    E = n(918257),
    C = n(970813),
    T = n(726985),
    S = n(981631),
    b = n(710111),
    I = n(388032),
    N = n(518782),
    v = n(232186);
function A(e) {
    return (0, r.e7)([g.Z], () => {
        if (null == e) return null;
        let { guildId: t, soundId: n } = e;
        return g.Z.getSound(t === b.hY ? b.X8 : t, n);
    });
}
function j() {
    let { analyticsLocations: e } = (0, o.ZP)(),
        [t, n] = s.useState(b.hY),
        l = (0, p.tT)(t),
        _ = A(l),
        j = (0, r.e7)([g.Z], () => g.Z.hasFetchedAllSounds()),
        O = (null == l ? void 0 : l.type) === p.zx.GLOBAL,
        P = j && null != l && null == _;
    s.useEffect(() => {
        P && (0, h.tt)({ location: e });
    }, [P, e]),
        s.useEffect(() => {
            (0, m.w)();
        }, []);
    let y = s.useCallback((e, t) => {
        let { inDropdown: n } = t;
        return null == e ? null : n ? (0, i.jsx)(R, { guildId: e.value }) : null;
    }, []);
    return (0, i.jsxs)(a.FormSection, {
        className: N.container,
        tag: a.FormTitleTags.H1,
        titleClassName: v.__invalid_marginBottom16,
        title: I.intl.string(I.t.ABjMWF),
        children: [
            (0, i.jsxs)(u.F, {
                setting: T.s6.VOICE_AND_VIDEO_SOUNDBOARD,
                children: [(0, i.jsx)(E.Z, {}), (0, i.jsx)(C.Z, {})]
            }),
            (0, i.jsxs)(u.F, {
                setting: T.s6.VOICE_AND_VIDEO_ENTRANCE_SOUNDS,
                children: [
                    (0, i.jsx)(a.FormDivider, { className: N.callSoundsDivider }),
                    (0, i.jsx)(a.Heading, {
                        variant: 'text-md/medium',
                        color: 'header-primary',
                        className: N.callSoundsTitle,
                        children: I.intl.string(I.t.nzUc3N)
                    }),
                    (0, i.jsx)(a.Text, {
                        variant: 'text-sm/medium',
                        color: 'header-secondary',
                        children: I.intl.format(I.t.u9RWmp, { helpdeskArticle: f.Z.getArticleURL(S.BhN.SOUNDBOARD) })
                    }),
                    (0, i.jsx)(c.Z, {
                        guildId: t,
                        className: N.guildSelector,
                        globalOption: {
                            label: I.intl.string(I.t.CpEUPz),
                            value: b.hY
                        },
                        onChange: (e) => n(null == e ? b.hY : e.id),
                        renderOptionSuffix: y,
                        hideDivider: !0
                    }),
                    (0, i.jsxs)(d.Z, {
                        className: v.marginTop20,
                        title: I.intl.format(I.t.I2TsYG, {
                            nitroWheelHook: () =>
                                (0, i.jsx)(a.NitroWheelIcon, {
                                    size: 'md',
                                    color: 'currentColor',
                                    className: N.nitroWheel
                                })
                        }),
                        forcedDivider: !0,
                        children: [
                            (0, i.jsx)(x.Z, {
                                sound: _,
                                isGlobal: O,
                                onSelect: (n) => {
                                    null == n ? (0, h.aC)(t, e) : (0, h.SZ)(t, n, e);
                                }
                            }),
                            P &&
                                (0, i.jsx)(a.HelpMessage, {
                                    className: N.notice,
                                    messageType: a.HelpMessageTypes.WARNING,
                                    children: I.intl.string(I.t.WkPsFR)
                                })
                        ]
                    })
                ]
            })
        ]
    });
}
function R(e) {
    let { guildId: t } = e,
        n = (0, r.e7)([_.Z], () => {
            var e, n, i;
            return null === (i = _.Z.settings.guilds) || void 0 === i ? void 0 : null === (n = i.guilds) || void 0 === n ? void 0 : null === (e = n[t]) || void 0 === e ? void 0 : e.joinSound;
        }),
        s = A(n);
    if (null == n || null == s) return null;
    let { emojiId: o, emojiName: c } = s,
        d = null != o || null != c;
    return (0, i.jsxs)('div', {
        className: N.pill,
        children: [
            d
                ? (0, i.jsx)(l.Z, {
                      emojiId: o,
                      emojiName: c,
                      className: N.pillIcon
                  })
                : (0, i.jsx)(a.VoiceNormalIcon, {
                      size: 'md',
                      color: 'currentColor',
                      className: N.pillIcon
                  }),
            (0, i.jsx)(a.Text, {
                className: N.pillText,
                variant: 'text-xs/medium',
                children: s.name
            })
        ]
    });
}
