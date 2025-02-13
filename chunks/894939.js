n.d(t, { Z: () => D }), n(47120);
var i = n(200651),
    s = n(192379),
    l = n(120356),
    r = n.n(l),
    a = n(442837),
    o = n(481060),
    c = n(596454),
    d = n(906732),
    u = n(856768),
    h = n(993413),
    m = n(921801),
    g = n(208049),
    x = n(763296),
    _ = n(242291),
    p = n(893663),
    E = n(331642),
    C = n(63063),
    N = n(581883),
    I = n(738486),
    f = n(918257),
    T = n(970813),
    S = n(726985),
    j = n(981631),
    v = n(710111),
    b = n(388032),
    A = n(630673),
    O = n(814632);
function R(e) {
    return (0, a.e7)([x.Z], () => {
        if (null == e) return null;
        let { guildId: t, soundId: n } = e;
        return x.Z.getSound(t === v.hY ? v.X8 : t, n);
    });
}
function D(e) {
    let { refreshStyles: t = !1 } = e,
        n = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)(m.F, {
                    setting: S.s6.VOICE_AND_VIDEO_SOUNDBOARD,
                    children: [(0, i.jsx)(f.Z, { refreshStyles: t }), (0, i.jsx)(T.Z, { refreshStyles: t })]
                }),
                (0, i.jsxs)(m.F, {
                    setting: S.s6.VOICE_AND_VIDEO_ENTRANCE_SOUNDS,
                    children: [t ? null : (0, i.jsx)(o.$i$, { className: A.callSoundsDivider }), (0, i.jsx)(P, { refreshStyles: t })]
                })
            ]
        });
    return t
        ? n
        : (0, i.jsx)(o.hjN, {
              className: A.container,
              tag: o.RB0.H1,
              titleClassName: O.__invalid_marginBottom16,
              title: b.intl.string(b.t.ABjMWF),
              children: n
          });
}
function P(e) {
    let { refreshStyles: t } = e,
        { analyticsLocations: n } = (0, d.ZP)(),
        [l, c] = s.useState(v.hY),
        m = (0, p.tT)(l),
        N = R(m),
        f = (null == m ? void 0 : m.type) === p.zx.GLOBAL,
        T = (0, a.e7)([x.Z], () => x.Z.hasFetchedAllSounds()) && null != m && null == N;
    s.useEffect(() => {
        T && (0, _.tt)({ location: n });
    }, [T, n]),
        s.useEffect(() => {
            (0, g.w)();
        }, []);
    let S = s.useCallback((e, t) => {
            let { inDropdown: n } = t;
            return null == e ? null : n ? (0, i.jsx)(y, { guildId: e.value }) : null;
        }, []),
        D = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(o.xJW, {
                    title: b.intl.string(b.t.nzUc3N),
                    children: (0, i.jsx)(o.R94, { children: b.intl.format(b.t.u9RWmp, { helpdeskArticle: C.Z.getArticleURL(j.BhN.SOUNDBOARD) }) })
                }),
                (0, i.jsx)(u.Z, {
                    guildId: l,
                    className: r()(A.guildSelector, { [A.refreshGuildSelector]: t }),
                    globalOption: {
                        label: b.intl.string(b.t.CpEUPz),
                        value: v.hY
                    },
                    onChange: (e) => {
                        c(null == e ? v.hY : e.id);
                    },
                    renderOptionSuffix: S,
                    hideDivider: !0
                }),
                (0, i.jsxs)(h.Z, {
                    className: r()({ [O.marginTop20]: !t }),
                    title: b.intl.format(b.t.I2TsYG, {
                        nitroWheelHook: () =>
                            (0, i.jsx)(o.SrA, {
                                size: 'md',
                                color: 'currentColor',
                                className: A.nitroWheel
                            })
                    }),
                    forcedDivider: !t,
                    children: [
                        (0, i.jsx)(E.Z, {
                            sound: N,
                            isGlobal: f,
                            onSelect: (e) => {
                                null == e ? (0, _.aC)(l, n) : (0, _.SZ)(l, e, n);
                            }
                        }),
                        T &&
                            (0, i.jsx)(o.Wn, {
                                className: A.notice,
                                messageType: o.QYI.WARNING,
                                children: b.intl.string(b.t.WkPsFR)
                            })
                    ]
                })
            ]
        });
    return t ? (0, i.jsx)(I.Z, { children: D }) : D;
}
function y(e) {
    let { guildId: t } = e,
        n = (0, a.e7)([N.Z], () => {
            var e, n, i;
            return null === (i = N.Z.settings.guilds) || void 0 === i ? void 0 : null === (n = i.guilds) || void 0 === n ? void 0 : null === (e = n[t]) || void 0 === e ? void 0 : e.joinSound;
        }),
        s = R(n);
    if (null == n || null == s) return null;
    let { emojiId: l, emojiName: r } = s,
        d = null != l || null != r;
    return (0, i.jsxs)('div', {
        className: A.pill,
        children: [
            d
                ? (0, i.jsx)(c.Z, {
                      emojiId: l,
                      emojiName: r,
                      className: A.pillIcon
                  })
                : (0, i.jsx)(o.gj8, {
                      size: 'md',
                      color: 'currentColor',
                      className: A.pillIcon
                  }),
            (0, i.jsx)(o.Text, {
                className: A.pillText,
                variant: 'text-xs/medium',
                children: s.name
            })
        ]
    });
}
