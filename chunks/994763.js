(t.r(n), t.d(n, { default: () => B }));
var l = t(255367),
    i = t(73800),
    a = t(442837),
    o = t(37234),
    r = t(503089),
    s = t(100527),
    c = t(367907),
    u = t(906732),
    d = t(456268),
    p = t(745752),
    g = t(45966),
    m = t(526120),
    h = t(751189),
    b = t(409059),
    f = t(918658),
    y = t(163400),
    C = t(190263),
    v = t(984802),
    O = t(210887),
    Z = t(524329),
    j = t(995532),
    w = t(984933),
    E = t(650774),
    P = t(496675),
    M = t(434404),
    S = t(999382),
    x = t(359191),
    _ = t(896007),
    G = t(978946),
    N = t(981631),
    T = t(388032);
function A(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        t = arguments.length > 2 ? arguments[2] : void 0;
    c.ZP.trackWithMetadata(N.rMx.SETTINGS_PANE_VIEWED, {
        settings_type: 'guild',
        origin_pane: n,
        destination_pane: e,
        location: t
    });
}
let I = {
    canManageGuild: !1,
    canManageChannels: !1,
    canManageRoles: !1,
    canManageBans: !1,
    canManageNicknames: !1,
    canManageGuildExpressions: !1,
    canViewAuditLog: !1,
    canManageWebhooks: !1,
    canAccessMembersPage: !1,
    canViewGuildAnalytics: !1,
    isOwner: !1,
    isOwnerWithRequiredMfaLevel: !1,
    isGuildAdmin: !1
};
class k extends i.PureComponent {
    componentDidMount() {
        A(this.props.section, null, this.props.analyticsLocation);
    }
    componentWillUnmount() {
        M.Z.close();
    }
    componentDidUpdate(e) {
        let { section: n } = e,
            { section: t, isGuildAdmin: l, canManageGuild: i, canManageRoles: a, canManageBans: r, canManageNicknames: s, canManageGuildExpressions: c, canViewAuditLog: u, canManageWebhooks: d, canUnlinkChannels: p, canAccessMembersPage: g, canViewGuildAnalytics: m } = this.props;
        (t !== n && A(t, n), ((l || i || a || r || s || c || u || g || d || p) && (u || t !== N.pNK.AUDIT_LOG) && (a || t !== N.pNK.ROLES) && (c || t !== N.pNK.EMOJI) && (c || t !== N.pNK.STICKERS) && (c || t !== N.pNK.SOUNDBOARD) && (r || t !== N.pNK.BANS) && (m || t !== N.pNK.ANALYTICS) && (g || t !== N.pNK.MEMBERS)) || (0, o.xf)());
    }
    render() {
        var e, n;
        let { theme: t, sidebarTheme: i, section: a, guild: s, isGuildAdmin: c, canManageGuild: u, canViewAuditLog: d, canManageRoles: p, canManageGuildExpressions: g, canManageWebhooks: m, canUnlinkChannels: h, canManageBans: b, canAccessMembersPage: y, canViewGuildAnalytics: C, isOwner: v, isOwnerWithRequiredMfaLevel: O, showDirtyGuildTemplateIndicator: Z, memberCount: j, onboardingStep: w, onboardingEnabled: E, welcomeScreenEmpty: P, guildMetadata: S, pinPermissionMigrationAvailable: x } = this.props;
        if (null == s) return null;
        let N = (0, _.vE)({
                guild: s,
                isGuildAdmin: c,
                canManageGuild: u,
                canViewAuditLog: d,
                canManageRoles: p,
                canManageGuildExpressions: g,
                canManageWebhooks: m,
                canUnlinkChannels: h,
                canManageBans: b,
                canAccessMembersPage: y,
                canViewGuildAnalytics: C,
                isOwner: v,
                isOwnerWithRequiredMfaLevel: O,
                showDirtyGuildTemplateIndicator: Z,
                memberCount: j,
                onboardingStep: w,
                onboardingEnabled: E,
                welcomeScreenEmpty: P,
                guildMetadata: S,
                section: a,
                pinPermissionMigrationAvailable: x
            }),
            A = (null == (n = N.find((e) => e.section === a)) || null == (e = n.predicate) ? void 0 : e.call(n)) !== !1,
            I = (0, G.r)();
        return (0, l.jsxs)('div', {
            children: [
                (0, l.jsx)(r.ZP, {
                    theme: t,
                    sidebarTheme: i,
                    section: A && null != a ? a : I,
                    onSetSection: M.Z.setSection,
                    onClose: o.xf,
                    title: '' !== s.name ? s.name : T.intl.string(T.t['154/bG']),
                    sections: N
                }),
                (0, l.jsx)(f.d, { guildId: s.id })
            ]
        });
    }
}
function B() {
    var e, n, t;
    let { guild: o, section: r, analyticsLocation: c, guildMetadata: f, isGuildMetadataLoaded: _ } = (0, a.cj)([S.Z], () => S.Z.getProps()),
        { analyticsLocations: G } = (0, u.ZP)(s.Z.GUILD_SETTINGS),
        T = (0, a.e7)([O.Z], () => O.Z.theme),
        A = (0, v.Ll)(),
        B = (0, a.e7)([w.ZP], () => (null != o ? w.ZP.getChannels(o.id).SELECTABLE : null), [o]),
        D = (0, a.cj)([P.Z], () => (null != o ? P.Z.getGuildPermissionProps(o) : I)),
        L = null == o ? void 0 : o.id,
        R = (0, a.e7)([P.Z], () => null != o && P.Z.canAccessGuildSettings(o));
    i.useEffect(() => {
        _ || null == L || (0, d.aC)(L);
    }, [_, L]);
    let F = null != (e = null == o ? void 0 : o.features.has(N.oNc.COMMUNITY)) && e;
    (i.useEffect(() => {
        null != L && F && ((0, p.eM)(L), (0, Z.RM)(L));
    }, [L, F]),
        i.useEffect(() => {
            null != L && (0, m.cP)(L);
        }, [L]));
    let K = (0, a.e7)(
            [b.Z],
            () => {
                var e;
                return (null == o ? void 0 : o.id) != null && (null == (e = b.Z.getForGuild(o.id)) ? void 0 : e.isDirty) === !0;
            },
            [o]
        ),
        U = (0, a.e7)([E.Z], () => E.Z.getMemberCount(null == o ? void 0 : o.id), [o]);
    (i.useEffect(() => {
        null != L && D.canManageGuild && h.Z.loadTemplatesForGuild(L);
    }, [L, D.canManageGuild]),
        i.useEffect(() => {
            R || M.Z.close();
        }, [R]));
    let W = (0, a.e7)([x.Z], () => x.Z.getCurrentPage()),
        V = (0, a.e7)([g.Z], () => null != L && g.Z.getEnabled(L)),
        Y = (0, a.e7)([j.Z], () => null != L && j.Z.isEmpty(L)),
        q = (0, y.F)(L).length > 0,
        J = (0, C.Y)(o);
    return (0, l.jsx)(u.Gt, {
        value: G,
        children: (0, l.jsx)(
            k,
            ((n = (function (e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {},
                        l = Object.keys(t);
                    ('function' == typeof Object.getOwnPropertySymbols &&
                        (l = l.concat(
                            Object.getOwnPropertySymbols(t).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(t, e).enumerable;
                            })
                        )),
                        l.forEach(function (n) {
                            var l;
                            ((l = t[n]),
                                n in e
                                    ? Object.defineProperty(e, n, {
                                          value: l,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0
                                      })
                                    : (e[n] = l));
                        }));
                }
                return e;
            })(
                {
                    guild: o,
                    section: r,
                    theme: T,
                    sidebarTheme: A,
                    channels: B,
                    showDirtyGuildTemplateIndicator: K,
                    analyticsLocation: c,
                    memberCount: U
                },
                D
            )),
            (t = t =
                {
                    canUnlinkChannels: q,
                    canViewGuildAnalytics: D.canViewGuildAnalytics,
                    onboardingStep: W,
                    onboardingEnabled: V,
                    welcomeScreenEmpty: Y,
                    guildMetadata: f,
                    pinPermissionMigrationAvailable: J
                }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t))
                : (function (e, n) {
                      var t = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                          var l = Object.getOwnPropertySymbols(e);
                          t.push.apply(t, l);
                      }
                      return t;
                  })(Object(t)).forEach(function (e) {
                      Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(t, e));
                  }),
            n)
        )
    });
}
