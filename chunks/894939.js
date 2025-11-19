n.d(t, {
    C: () => R,
    Z: () => N,
}),
    n(388685);
var r = n(54381),
    i = n(473749),
    a = n(442837),
    o = n(481060),
    s = n(596454),
    l = n(906732),
    c = n(856768),
    u = n(993413),
    d = n(921801),
    f = n(208049),
    _ = n(763296),
    p = n(242291),
    h = n(893663),
    m = n(331642),
    g = n(63063),
    E = n(581883),
    b = n(738486),
    y = n(918257),
    O = n(970813),
    v = n(726985),
    I = n(981631),
    T = n(710111),
    S = n(388032),
    A = n(985597);
function C(e) {
    return (0, a.e7)([_.Z], () => {
        if (null == e) return null;
        let { guildId: t, soundId: n } = e;
        return _.Z.getSound(t === T.hY ? T.X8 : t, n);
    });
}
function N() {
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)(d.F, {
                setting: v.s6.VOICE_AND_VIDEO_SOUNDBOARD,
                children: [(0, r.jsx)(y.Z, {}), (0, r.jsx)(O.Z, {})],
            }),
            (0, r.jsx)(d.F, {
                setting: v.s6.VOICE_AND_VIDEO_ENTRANCE_SOUNDS,
                children: (0, r.jsx)(R, {}),
            }),
        ],
    });
}
function R() {
    let { analyticsLocations: e } = (0, l.ZP)(),
        [t, n] = i.useState(T.hY),
        s = (0, h.tT)(t),
        d = C(s),
        E = (null == s ? void 0 : s.type) === h.zx.GLOBAL,
        y = (0, a.e7)([_.Z], () => _.Z.hasFetchedAllSounds()) && null != s && null == d;
    i.useEffect(() => {
        y && (0, p.tt)({ location: e });
    }, [y, e]),
        i.useEffect(() => {
            (0, f.w)();
        }, []);
    let O = i.useCallback((e, t) => {
        let { inDropdown: n } = t;
        return null == e ? null : n ? (0, r.jsx)(P, { guildId: e.value }) : null;
    }, []);
    return (0, r.jsx)(b.Z, {
        children: (0, r.jsxs)(o.C3N, {
            label: S.intl.string(S.t.nzUc3B),
            description: S.intl.format(S.t.u9RWmv, { helpdeskArticle: g.Z.getArticleURL(I.BhN.SOUNDBOARD) }),
            children: [
                (0, r.jsx)(c.Z, {
                    guildId: t,
                    className: A.guildSelector,
                    globalOption: {
                        label: S.intl.string(S.t["CpEUP/"]),
                        value: T.hY,
                    },
                    onChange: (e) => {
                        n(null == e ? T.hY : e.id);
                    },
                    renderOptionSuffix: O,
                    hideDivider: !0,
                }),
                (0, r.jsxs)(u.Z, {
                    title: S.intl.format(S.t.I2TsYN, {
                        nitroWheelHook: () =>
                            (0, r.jsx)(o.SrA, {
                                size: "md",
                                color: "currentColor",
                                className: A.nitroWheel,
                            }),
                    }),
                    children: [
                        (0, r.jsx)(m.Z, {
                            sound: d,
                            isGlobal: E,
                            onSelect: (n) => {
                                null == n ? (0, p.aC)(t, e) : (0, p.SZ)(t, n, e);
                            },
                        }),
                        y &&
                            (0, r.jsx)(o.Wn, {
                                className: A.notice,
                                messageType: o.QYI.WARNING,
                                children: S.intl.string(S.t.WkPsFR),
                            }),
                    ],
                }),
            ],
        }),
    });
}
function P(e) {
    let { guildId: t } = e,
        n = (0, a.e7)([E.Z], () => {
            var e, n, r;
            return null == (r = E.Z.settings.guilds) || null == (n = r.guilds) || null == (e = n[t])
                ? void 0
                : e.joinSound;
        }),
        i = C(n);
    if (null == n || null == i) return null;
    let { emojiId: l, emojiName: c } = i,
        u = null != l || null != c;
    return (0, r.jsxs)("div", {
        className: A.pill,
        children: [
            u
                ? (0, r.jsx)(s.Z, {
                      emojiId: l,
                      emojiName: c,
                      className: A.pillIcon,
                  })
                : (0, r.jsx)(o.gj8, {
                      size: "md",
                      color: "currentColor",
                      className: A.pillIcon,
                  }),
            (0, r.jsx)(o.Text, {
                className: A.pillText,
                variant: "text-xs/medium",
                children: i.name,
            }),
        ],
    });
}
