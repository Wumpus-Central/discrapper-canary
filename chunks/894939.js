n.d(t, {
    C: () => P,
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
    p = n(763296),
    _ = n(242291),
    m = n(893663),
    h = n(331642),
    g = n(63063),
    E = n(581883),
    b = n(738486),
    y = n(918257),
    O = n(970813),
    v = n(726985),
    S = n(981631),
    I = n(710111),
    T = n(388032),
    C = n(647484);
function A(e) {
    return (0, a.e7)([p.Z], () => {
        if (null == e) return null;
        let { guildId: t, soundId: n } = e;
        return p.Z.getSound(t === I.hY ? I.X8 : t, n);
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
                children: (0, r.jsx)(P, {}),
            }),
        ],
    });
}
function P() {
    let { analyticsLocations: e } = (0, l.ZP)(),
        [t, n] = i.useState(I.hY),
        s = (0, m.tT)(t),
        d = A(s),
        E = (null == s ? void 0 : s.type) === m.zx.GLOBAL,
        y = (0, a.e7)([p.Z], () => p.Z.hasFetchedAllSounds()) && null != s && null == d;
    i.useEffect(() => {
        y && (0, _.tt)({ location: e });
    }, [y, e]),
        i.useEffect(() => {
            (0, f.w)();
        }, []);
    let O = i.useCallback((e, t) => {
        let { inDropdown: n } = t;
        return null == e ? null : n ? (0, r.jsx)(R, { guildId: e.value }) : null;
    }, []);
    return (0, r.jsx)(b.Z, {
        children: (0, r.jsxs)(o.C3N, {
            label: T.intl.string(T.t.nzUc3B),
            description: T.intl.format(T.t.u9RWmv, { helpdeskArticle: g.Z.getArticleURL(S.BhN.SOUNDBOARD) }),
            children: [
                (0, r.jsx)(c.Z, {
                    guildId: t,
                    className: C.guildSelector,
                    globalOption: {
                        label: T.intl.string(T.t["CpEUP/"]),
                        value: I.hY,
                    },
                    onChange: (e) => {
                        n(null == e ? I.hY : e.id);
                    },
                    renderOptionSuffix: O,
                    hideDivider: !0,
                }),
                (0, r.jsxs)(u.Z, {
                    title: T.intl.format(T.t.I2TsYN, {
                        nitroWheelHook: () =>
                            (0, r.jsx)(o.SrA, {
                                size: "md",
                                color: "currentColor",
                                className: C.nitroWheel,
                            }),
                    }),
                    children: [
                        (0, r.jsx)(h.Z, {
                            sound: d,
                            isGlobal: E,
                            onSelect: (n) => {
                                null == n ? (0, _.aC)(t, e) : (0, _.SZ)(t, n, e);
                            },
                        }),
                        y &&
                            (0, r.jsx)(o.Wn, {
                                className: C.notice,
                                messageType: o.QYI.WARNING,
                                children: T.intl.string(T.t.WkPsFR),
                            }),
                    ],
                }),
            ],
        }),
    });
}
function R(e) {
    let { guildId: t } = e,
        n = (0, a.e7)([E.Z], () => {
            var e, n, r;
            return null == (r = E.Z.settings.guilds) || null == (n = r.guilds) || null == (e = n[t])
                ? void 0
                : e.joinSound;
        }),
        i = A(n);
    if (null == n || null == i) return null;
    let { emojiId: l, emojiName: c } = i,
        u = null != l || null != c;
    return (0, r.jsxs)("div", {
        className: C.pill,
        children: [
            u
                ? (0, r.jsx)(s.Z, {
                      emojiId: l,
                      emojiName: c,
                      className: C.pillIcon,
                  })
                : (0, r.jsx)(o.gj8, {
                      size: "md",
                      color: "currentColor",
                      className: C.pillIcon,
                  }),
            (0, r.jsx)(o.Text, {
                className: C.pillText,
                variant: "text-xs/medium",
                children: i.name,
            }),
        ],
    });
}
