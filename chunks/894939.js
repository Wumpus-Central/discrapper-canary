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
    C = n(738486),
    j = n(918257),
    O = n(970813),
    S = n(726985),
    v = n(981631),
    T = n(710111),
    I = n(388032),
    N = n(576813),
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
                    children: [(0, i.jsx)(j.Z, { refreshStyles: t }), (0, i.jsx)(O.Z, { refreshStyles: t })]
                }),
                (0, i.jsxs)(p.F, {
                    setting: S.s6.VOICE_AND_VIDEO_ENTRANCE_SOUNDS,
                    children: [t ? null : (0, i.jsx)(o.$i$, { className: N.callSoundsDivider }), (0, i.jsx)(R, { refreshStyles: t })]
                })
            ]
        });
    return t
        ? n
        : (0, i.jsx)(o.hjN, {
              className: N.container,
              tag: o.RB0.H1,
              titleClassName: y.__invalid_marginBottom16,
              title: I.intl.string(I.t.ABjMWF),
              children: n
          });
}
function R(e) {
    let { refreshStyles: t } = e,
        { analyticsLocations: n } = (0, d.ZP)(),
        [s, c] = r.useState(T.hY),
        p = (0, b.tT)(s),
        E = A(p),
        j = (null == p ? void 0 : p.type) === b.zx.GLOBAL,
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
                    title: I.intl.string(I.t.nzUc3N),
                    children: (0, i.jsx)(o.R94, { children: I.intl.format(I.t.u9RWmp, { helpdeskArticle: x.Z.getArticleURL(v.BhN.SOUNDBOARD) }) })
                }),
                (0, i.jsx)(u.Z, {
                    guildId: s,
                    className: l()(N.guildSelector, { [N.refreshGuildSelector]: t }),
                    globalOption: {
                        label: I.intl.string(I.t.CpEUPz),
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
                    title: I.intl.format(I.t.I2TsYG, {
                        nitroWheelHook: () =>
                            (0, i.jsx)(o.SrA, {
                                size: 'md',
                                color: 'currentColor',
                                className: N.nitroWheel
                            })
                    }),
                    forcedDivider: !t,
                    children: [
                        (0, i.jsx)(_.Z, {
                            sound: E,
                            isGlobal: j,
                            onSelect: (e) => {
                                null == e ? (0, f.aC)(s, n) : (0, f.SZ)(s, e, n);
                            }
                        }),
                        O &&
                            (0, i.jsx)(o.Wn, {
                                className: N.notice,
                                messageType: o.QYI.WARNING,
                                children: I.intl.string(I.t.WkPsFR)
                            })
                    ]
                })
            ]
        });
    return t ? (0, i.jsx)(C.Z, { children: P }) : P;
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
        className: N.pill,
        children: [
            d
                ? (0, i.jsx)(c.Z, {
                      emojiId: s,
                      emojiName: l,
                      className: N.pillIcon
                  })
                : (0, i.jsx)(o.gj8, {
                      size: 'md',
                      color: 'currentColor',
                      className: N.pillIcon
                  }),
            (0, i.jsx)(o.Text, {
                className: N.pillText,
                variant: 'text-xs/medium',
                children: r.name
            })
        ]
    });
}
