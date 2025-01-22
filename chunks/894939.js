n.d(t, {
    Z: function () {
        return P;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(442837),
    o = n(481060),
    c = n(596454),
    d = n(906732),
    u = n(856768),
    m = n(993413),
    g = n(921801),
    h = n(208049),
    p = n(763296),
    x = n(242291),
    f = n(893663),
    E = n(331642),
    _ = n(63063),
    C = n(581883),
    T = n(738486),
    S = n(918257),
    b = n(970813),
    I = n(726985),
    N = n(981631),
    v = n(710111),
    A = n(388032),
    j = n(518782),
    O = n(232186);
function R(e) {
    return (0, l.e7)([p.Z], () => {
        if (null == e) return null;
        let { guildId: t, soundId: n } = e;
        return p.Z.getSound(t === v.hY ? v.X8 : t, n);
    });
}
function P(e) {
    let { refreshStyles: t = !1 } = e,
        n = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)(g.F, {
                    setting: I.s6.VOICE_AND_VIDEO_SOUNDBOARD,
                    children: [(0, i.jsx)(S.Z, { refreshStyles: t }), (0, i.jsx)(b.Z, { refreshStyles: t })]
                }),
                (0, i.jsxs)(g.F, {
                    setting: I.s6.VOICE_AND_VIDEO_ENTRANCE_SOUNDS,
                    children: [t ? null : (0, i.jsx)(o.FormDivider, { className: j.callSoundsDivider }), (0, i.jsx)(D, { refreshStyles: t })]
                })
            ]
        });
    return t
        ? n
        : (0, i.jsx)(o.FormSection, {
              className: j.container,
              tag: o.FormTitleTags.H1,
              titleClassName: O.__invalid_marginBottom16,
              title: A.intl.string(A.t.ABjMWF),
              children: n
          });
}
function D(e) {
    let { refreshStyles: t } = e,
        { analyticsLocations: n } = (0, d.ZP)(),
        [s, c] = r.useState(v.hY),
        g = (0, f.tT)(s),
        C = R(g),
        S = (null == g ? void 0 : g.type) === f.zx.GLOBAL,
        b = (0, l.e7)([p.Z], () => p.Z.hasFetchedAllSounds()) && null != g && null == C;
    r.useEffect(() => {
        b && (0, x.tt)({ location: n });
    }, [b, n]),
        r.useEffect(() => {
            (0, h.w)();
        }, []);
    let I = r.useCallback((e, t) => {
            let { inDropdown: n } = t;
            return null == e ? null : n ? (0, i.jsx)(y, { guildId: e.value }) : null;
        }, []),
        P = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(o.FormItem, {
                    title: A.intl.string(A.t.nzUc3N),
                    children: (0, i.jsx)(o.FormText, { children: A.intl.format(A.t.u9RWmp, { helpdeskArticle: _.Z.getArticleURL(N.BhN.SOUNDBOARD) }) })
                }),
                (0, i.jsx)(u.Z, {
                    guildId: s,
                    className: a()(j.guildSelector, { [j.refreshGuildSelector]: t }),
                    globalOption: {
                        label: A.intl.string(A.t.CpEUPz),
                        value: v.hY
                    },
                    onChange: (e) => {
                        c(null == e ? v.hY : e.id);
                    },
                    renderOptionSuffix: I,
                    hideDivider: !0
                }),
                (0, i.jsxs)(m.Z, {
                    className: a()({ [O.marginTop20]: !t }),
                    title: A.intl.format(A.t.I2TsYG, {
                        nitroWheelHook: () =>
                            (0, i.jsx)(o.NitroWheelIcon, {
                                size: 'md',
                                color: 'currentColor',
                                className: j.nitroWheel
                            })
                    }),
                    forcedDivider: !t,
                    children: [
                        (0, i.jsx)(E.Z, {
                            sound: C,
                            isGlobal: S,
                            onSelect: (e) => {
                                null == e ? (0, x.aC)(s, n) : (0, x.SZ)(s, e, n);
                            }
                        }),
                        b &&
                            (0, i.jsx)(o.HelpMessage, {
                                className: j.notice,
                                messageType: o.HelpMessageTypes.WARNING,
                                children: A.intl.string(A.t.WkPsFR)
                            })
                    ]
                })
            ]
        });
    return t ? (0, i.jsx)(T.Z, { children: P }) : P;
}
function y(e) {
    let { guildId: t } = e,
        n = (0, l.e7)([C.Z], () => {
            var e, n, i;
            return null === (i = C.Z.settings.guilds) || void 0 === i ? void 0 : null === (n = i.guilds) || void 0 === n ? void 0 : null === (e = n[t]) || void 0 === e ? void 0 : e.joinSound;
        }),
        r = R(n);
    if (null == n || null == r) return null;
    let { emojiId: s, emojiName: a } = r,
        d = null != s || null != a;
    return (0, i.jsxs)('div', {
        className: j.pill,
        children: [
            d
                ? (0, i.jsx)(c.Z, {
                      emojiId: s,
                      emojiName: a,
                      className: j.pillIcon
                  })
                : (0, i.jsx)(o.VoiceNormalIcon, {
                      size: 'md',
                      color: 'currentColor',
                      className: j.pillIcon
                  }),
            (0, i.jsx)(o.Text, {
                className: j.pillText,
                variant: 'text-xs/medium',
                children: r.name
            })
        ]
    });
}
