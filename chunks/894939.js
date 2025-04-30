n.d(t, { Z: () => P }), n(388685);
var i = n(200651),
    r = n(192379),
    s = n(120356),
    l = n.n(s),
    a = n(442837),
    o = n(481060),
    c = n(596454),
    d = n(906732),
    u = n(856768),
    m = n(993413),
    p = n(921801),
    g = n(208049),
    h = n(763296),
    f = n(242291),
    b = n(893663),
    _ = n(331642),
    x = n(63063),
    E = n(581883),
    j = n(738486),
    C = n(918257),
    O = n(970813),
    S = n(726985),
    v = n(981631),
    T = n(710111),
    N = n(388032),
    I = n(576813),
    y = n(20493);
function A(e) {
    return (0, a.e7)([h.Z], () => {
        if (null == e) return null;
        let { guildId: t, soundId: n } = e;
        return h.Z.getSound(t === T.hY ? T.X8 : t, n);
    });
}
function P(e) {
    let { refreshStyles: t = !1 } = e,
        n = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)(p.F, {
                    setting: S.s6.VOICE_AND_VIDEO_SOUNDBOARD,
                    children: [(0, i.jsx)(C.Z, { refreshStyles: t }), (0, i.jsx)(O.Z, { refreshStyles: t })]
                }),
                (0, i.jsxs)(p.F, {
                    setting: S.s6.VOICE_AND_VIDEO_ENTRANCE_SOUNDS,
                    children: [t ? null : (0, i.jsx)(o.$i$, { className: I.callSoundsDivider }), (0, i.jsx)(R, { refreshStyles: t })]
                })
            ]
        });
    return t
        ? n
        : (0, i.jsx)(o.hjN, {
              className: I.container,
              tag: o.RB0.H1,
              titleClassName: y.__invalid_marginBottom16,
              title: N.intl.string(N.t.ABjMWF),
              children: n
          });
}
function R(e) {
    let { refreshStyles: t } = e,
        { analyticsLocations: n } = (0, d.ZP)(),
        [s, c] = r.useState(T.hY),
        p = (0, b.tT)(s),
        E = A(p),
        C = (null == p ? void 0 : p.type) === b.zx.GLOBAL,
        O = (0, a.e7)([h.Z], () => h.Z.hasFetchedAllSounds()) && null != p && null == E;
    r.useEffect(() => {
        O && (0, f.tt)({ location: n });
    }, [O, n]),
        r.useEffect(() => {
            (0, g.w)();
        }, []);
    let S = r.useCallback((e, t) => {
            let { inDropdown: n } = t;
            return null == e ? null : n ? (0, i.jsx)(D, { guildId: e.value }) : null;
        }, []),
        P = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(o.xJW, {
                    title: N.intl.string(N.t.nzUc3N),
                    children: (0, i.jsx)(o.R94, { children: N.intl.format(N.t.u9RWmp, { helpdeskArticle: x.Z.getArticleURL(v.BhN.SOUNDBOARD) }) })
                }),
                (0, i.jsx)(u.Z, {
                    guildId: s,
                    className: l()(I.guildSelector, { [I.refreshGuildSelector]: t }),
                    globalOption: {
                        label: N.intl.string(N.t.CpEUPz),
                        value: T.hY
                    },
                    onChange: (e) => {
                        c(null == e ? T.hY : e.id);
                    },
                    renderOptionSuffix: S,
                    hideDivider: !0
                }),
                (0, i.jsxs)(m.Z, {
                    className: l()({ [y.marginTop20]: !t }),
                    title: N.intl.format(N.t.I2TsYG, {
                        nitroWheelHook: () =>
                            (0, i.jsx)(o.SrA, {
                                size: 'md',
                                color: 'currentColor',
                                className: I.nitroWheel
                            })
                    }),
                    forcedDivider: !t,
                    children: [
                        (0, i.jsx)(_.Z, {
                            sound: E,
                            isGlobal: C,
                            onSelect: (e) => {
                                null == e ? (0, f.aC)(s, n) : (0, f.SZ)(s, e, n);
                            }
                        }),
                        O &&
                            (0, i.jsx)(o.Wn, {
                                className: I.notice,
                                messageType: o.QYI.WARNING,
                                children: N.intl.string(N.t.WkPsFR)
                            })
                    ]
                })
            ]
        });
    return t ? (0, i.jsx)(j.Z, { children: P }) : P;
}
function D(e) {
    let { guildId: t } = e,
        n = (0, a.e7)([E.Z], () => {
            var e, n, i;
            return null == (i = E.Z.settings.guilds) || null == (n = i.guilds) || null == (e = n[t]) ? void 0 : e.joinSound;
        }),
        r = A(n);
    if (null == n || null == r) return null;
    let { emojiId: s, emojiName: l } = r,
        d = null != s || null != l;
    return (0, i.jsxs)('div', {
        className: I.pill,
        children: [
            d
                ? (0, i.jsx)(c.Z, {
                      emojiId: s,
                      emojiName: l,
                      className: I.pillIcon
                  })
                : (0, i.jsx)(o.gj8, {
                      size: 'md',
                      color: 'currentColor',
                      className: I.pillIcon
                  }),
            (0, i.jsx)(o.Text, {
                className: I.pillText,
                variant: 'text-xs/medium',
                children: r.name
            })
        ]
    });
}
