n.d(t, { Z: () => w }), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(481060),
    c = n(596454),
    u = n(906732),
    d = n(856768),
    f = n(993413),
    _ = n(921801),
    p = n(208049),
    h = n(763296),
    m = n(242291),
    g = n(893663),
    E = n(331642),
    b = n(63063),
    y = n(581883),
    O = n(738486),
    v = n(918257),
    I = n(970813),
    T = n(726985),
    S = n(981631),
    A = n(710111),
    C = n(388032),
    N = n(647484),
    R = n(197571);
function P(e) {
    return (0, s.e7)([h.Z], () => {
        if (null == e) return null;
        let { guildId: t, soundId: n } = e;
        return h.Z.getSound(t === A.hY ? A.X8 : t, n);
    });
}
function w(e) {
    let { refreshStyles: t = !1 } = e,
        n = (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsxs)(_.F, {
                    setting: T.s6.VOICE_AND_VIDEO_SOUNDBOARD,
                    children: [(0, r.jsx)(v.Z, { refreshStyles: t }), (0, r.jsx)(I.Z, { refreshStyles: t })],
                }),
                (0, r.jsxs)(_.F, {
                    setting: T.s6.VOICE_AND_VIDEO_ENTRANCE_SOUNDS,
                    children: [
                        t ? null : (0, r.jsx)(l.$i$, { className: N.callSoundsDivider }),
                        (0, r.jsx)(D, { refreshStyles: t }),
                    ],
                }),
            ],
        });
    return t
        ? n
        : (0, r.jsx)(l.hjN, {
              className: N.container,
              tag: l.RB0.H1,
              titleClassName: R.__invalid_marginBottom16,
              title: C.intl.string(C.t.ABjMWF),
              children: n,
          });
}
function D(e) {
    let { refreshStyles: t } = e,
        { analyticsLocations: n } = (0, u.ZP)(),
        [a, c] = i.useState(A.hY),
        _ = (0, g.tT)(a),
        y = P(_),
        v = (null == _ ? void 0 : _.type) === g.zx.GLOBAL,
        I = (0, s.e7)([h.Z], () => h.Z.hasFetchedAllSounds()) && null != _ && null == y;
    i.useEffect(() => {
        I && (0, m.tt)({ location: n });
    }, [I, n]),
        i.useEffect(() => {
            (0, p.w)();
        }, []);
    let T = i.useCallback((e, t) => {
            let { inDropdown: n } = t;
            return null == e ? null : n ? (0, r.jsx)(x, { guildId: e.value }) : null;
        }, []),
        w = (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(l.xJW, {
                    title: C.intl.string(C.t.nzUc3N),
                    children: (0, r.jsx)(l.R94, {
                        children: C.intl.format(C.t.u9RWmp, { helpdeskArticle: b.Z.getArticleURL(S.BhN.SOUNDBOARD) }),
                    }),
                }),
                (0, r.jsx)(d.Z, {
                    guildId: a,
                    className: o()(N.guildSelector, { [N.refreshGuildSelector]: t }),
                    globalOption: {
                        label: C.intl.string(C.t.CpEUPz),
                        value: A.hY,
                    },
                    onChange: (e) => {
                        c(null == e ? A.hY : e.id);
                    },
                    renderOptionSuffix: T,
                    hideDivider: !0,
                }),
                (0, r.jsxs)(f.Z, {
                    className: o()({ [R.marginTop20]: !t }),
                    title: C.intl.format(C.t.I2TsYG, {
                        nitroWheelHook: () =>
                            (0, r.jsx)(l.SrA, {
                                size: "md",
                                color: "currentColor",
                                className: N.nitroWheel,
                            }),
                    }),
                    forcedDivider: !t,
                    children: [
                        (0, r.jsx)(E.Z, {
                            sound: y,
                            isGlobal: v,
                            onSelect: (e) => {
                                null == e ? (0, m.aC)(a, n) : (0, m.SZ)(a, e, n);
                            },
                        }),
                        I &&
                            (0, r.jsx)(l.Wn, {
                                className: N.notice,
                                messageType: l.QYI.WARNING,
                                children: C.intl.string(C.t.WkPsFR),
                            }),
                    ],
                }),
            ],
        });
    return t ? (0, r.jsx)(O.Z, { children: w }) : w;
}
function x(e) {
    let { guildId: t } = e,
        n = (0, s.e7)([y.Z], () => {
            var e, n, r;
            return null == (r = y.Z.settings.guilds) || null == (n = r.guilds) || null == (e = n[t])
                ? void 0
                : e.joinSound;
        }),
        i = P(n);
    if (null == n || null == i) return null;
    let { emojiId: a, emojiName: o } = i,
        u = null != a || null != o;
    return (0, r.jsxs)("div", {
        className: N.pill,
        children: [
            u
                ? (0, r.jsx)(c.Z, {
                      emojiId: a,
                      emojiName: o,
                      className: N.pillIcon,
                  })
                : (0, r.jsx)(l.gj8, {
                      size: "md",
                      color: "currentColor",
                      className: N.pillIcon,
                  }),
            (0, r.jsx)(l.Text, {
                className: N.pillText,
                variant: "text-xs/medium",
                children: i.name,
            }),
        ],
    });
}
