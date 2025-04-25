n.d(t, { Z: () => C }), n(388685), n(539854);
var i = n(200651),
    r = n(192379),
    s = n(442837),
    l = n(704215),
    a = n(481060),
    o = n(931240),
    c = n(313201),
    d = n(243778),
    u = n(731722),
    m = n(993413),
    p = n(996073),
    g = n(594174),
    h = n(583899),
    f = n(981631),
    b = n(921944),
    _ = n(526761),
    x = n(388032),
    E = n(805589);
let j = (0, c.hQ)(),
    C = r.memo(function (e) {
        let { availableClans: t } = e,
            [n, c] = (0, d.US)([l.z.GUILD_TAG_USER_PROFILE_NEW_BADGE]),
            C = r.useMemo(() => new Map(t.map((e) => [e.id, e])), [t]),
            O = (0, s.e7)([g.default], () => {
                var e;
                return (0, u.Pb)(null == (e = g.default.getCurrentUser()) ? void 0 : e.primaryGuild).guildId;
            }),
            S = r.useMemo(
                () =>
                    t.reduce((e, t) => {
                        var n;
                        return (
                            (null == (n = t.profile) ? void 0 : n.tag) != null &&
                                e.push({
                                    label: t.name,
                                    value: t.id
                                }),
                            e
                        );
                    }, []),
                [t]
            ),
            v = r.useCallback(
                (e) => {
                    var t, n, r;
                    if (null == e) return null;
                    let s = C.get(e.value);
                    if (null == s) return null;
                    let l = null == (t = s.profile) ? void 0 : t.tag;
                    return null == l
                        ? null
                        : (0, i.jsx)(h.Z, {
                              clanTag: l,
                              clanBadge: null != (r = null == (n = s.profile) ? void 0 : n.badge) ? r : void 0,
                              guildId: s.id,
                              guildName: e.label,
                              guildIcon: s.icon,
                              guildIconSize: 32
                          });
                },
                [C]
            ),
            T = r.useCallback(
                (e) => {
                    let t = e[0];
                    return null == t ? null : (0, i.jsx)(i.Fragment, { children: v(t) });
                },
                [v]
            ),
            I = r.useCallback(
                (e) => {
                    c(b.L.TAKE_ACTION), (0, o.nE)(e, !0, f.Sbl.USER_SETTINGS);
                },
                [c]
            ),
            N = r.useCallback((e) => e === O, [O]),
            y = r.useCallback((e) => e, []),
            A = r.useCallback(() => {
                c(b.L.TAKE_ACTION), (0, o.nE)(null, !1);
            }, [c]),
            P = r.useRef(null);
        return (
            (0, p.Z)(P, _.Y_.GUILD_TAG),
            (0, i.jsxs)(m.Z, {
                title: x.intl.string(x.t.Pdd1nZ),
                titleId: j,
                ref: P,
                titleIcon:
                    n === l.z.GUILD_TAG_USER_PROFILE_NEW_BADGE &&
                    (0, i.jsx)(a.IGR, {
                        text: x.intl.string(x.t.y2b7CA),
                        className: E.newBadge
                    }),
                children: [
                    (0, i.jsx)(a.Text, {
                        className: E.subtitle,
                        variant: 'text-sm/normal',
                        children: x.intl.string(x.t.mlZ6Jy)
                    }),
                    (0, i.jsx)(a.PhF, {
                        className: E.select,
                        optionClassName: E.selectPopout,
                        isSelected: N,
                        options: S,
                        select: I,
                        renderOptionValue: T,
                        renderOptionLabel: v,
                        serialize: y,
                        clear: A,
                        clearable: null != O
                    })
                ]
            })
        );
    });
