n.d(t, { Z: () => P }), n(47120);
var i = n(200651),
    s = n(192379),
    r = n(120356),
    l = n.n(r),
    a = n(442837),
    o = n(481060),
    c = n(596454),
    d = n(906732),
    u = n(856768),
    m = n(993413),
    h = n(921801),
    g = n(208049),
    _ = n(763296),
    x = n(242291),
    p = n(893663),
    E = n(331642),
    C = n(63063),
    f = n(581883),
    T = n(738486),
    N = n(918257),
    S = n(970813),
    I = n(726985),
    b = n(981631),
    v = n(710111),
    j = n(388032),
    A = n(518782),
    O = n(232186);
function R(e) {
    return (0, a.e7)([_.Z], () => {
        if (null == e) return null;
        let { guildId: t, soundId: n } = e;
        return _.Z.getSound(t === v.hY ? v.X8 : t, n);
    });
}
function P(e) {
    let { refreshStyles: t = !1 } = e,
        n = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)(h.F, {
                    setting: I.s6.VOICE_AND_VIDEO_SOUNDBOARD,
                    children: [(0, i.jsx)(N.Z, { refreshStyles: t }), (0, i.jsx)(S.Z, { refreshStyles: t })]
                }),
                (0, i.jsxs)(h.F, {
                    setting: I.s6.VOICE_AND_VIDEO_ENTRANCE_SOUNDS,
                    children: [t ? null : (0, i.jsx)(o.$i$, { className: A.callSoundsDivider }), (0, i.jsx)(D, { refreshStyles: t })]
                })
            ]
        });
    return t
        ? n
        : (0, i.jsx)(o.hjN, {
              className: A.container,
              tag: o.RB0.H1,
              titleClassName: O.__invalid_marginBottom16,
              title: j.intl.string(j.t.ABjMWF),
              children: n
          });
}
function D(e) {
    let { refreshStyles: t } = e,
        { analyticsLocations: n } = (0, d.ZP)(),
        [r, c] = s.useState(v.hY),
        h = (0, p.tT)(r),
        f = R(h),
        N = (null == h ? void 0 : h.type) === p.zx.GLOBAL,
        S = (0, a.e7)([_.Z], () => _.Z.hasFetchedAllSounds()) && null != h && null == f;
    s.useEffect(() => {
        S && (0, x.tt)({ location: n });
    }, [S, n]),
        s.useEffect(() => {
            (0, g.w)();
        }, []);
    let I = s.useCallback((e, t) => {
            let { inDropdown: n } = t;
            return null == e ? null : n ? (0, i.jsx)(y, { guildId: e.value }) : null;
        }, []),
        P = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(o.xJW, {
                    title: j.intl.string(j.t.nzUc3N),
                    children: (0, i.jsx)(o.R94, { children: j.intl.format(j.t.u9RWmp, { helpdeskArticle: C.Z.getArticleURL(b.BhN.SOUNDBOARD) }) })
                }),
                (0, i.jsx)(u.Z, {
                    guildId: r,
                    className: l()(A.guildSelector, { [A.refreshGuildSelector]: t }),
                    globalOption: {
                        label: j.intl.string(j.t.CpEUPz),
                        value: v.hY
                    },
                    onChange: (e) => {
                        c(null == e ? v.hY : e.id);
                    },
                    renderOptionSuffix: I,
                    hideDivider: !0
                }),
                (0, i.jsxs)(m.Z, {
                    className: l()({ [O.marginTop20]: !t }),
                    title: j.intl.format(j.t.I2TsYG, {
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
                            sound: f,
                            isGlobal: N,
                            onSelect: (e) => {
                                null == e ? (0, x.aC)(r, n) : (0, x.SZ)(r, e, n);
                            }
                        }),
                        S &&
                            (0, i.jsx)(o.Wn, {
                                className: A.notice,
                                messageType: o.QYI.WARNING,
                                children: j.intl.string(j.t.WkPsFR)
                            })
                    ]
                })
            ]
        });
    return t ? (0, i.jsx)(T.Z, { children: P }) : P;
}
function y(e) {
    let { guildId: t } = e,
        n = (0, a.e7)([f.Z], () => {
            var e, n, i;
            return null === (i = f.Z.settings.guilds) || void 0 === i ? void 0 : null === (n = i.guilds) || void 0 === n ? void 0 : null === (e = n[t]) || void 0 === e ? void 0 : e.joinSound;
        }),
        s = R(n);
    if (null == n || null == s) return null;
    let { emojiId: r, emojiName: l } = s,
        d = null != r || null != l;
    return (0, i.jsxs)('div', {
        className: A.pill,
        children: [
            d
                ? (0, i.jsx)(c.Z, {
                      emojiId: r,
                      emojiName: l,
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
