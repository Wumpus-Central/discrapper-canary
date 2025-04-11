n.r(t), n.d(t, { default: () => E });
var r = n(200651),
    o = n(192379),
    i = n(442837),
    a = n(37234),
    c = n(503089),
    l = n(100527),
    s = n(367907),
    u = n(906732),
    d = n(456268),
    _ = n(745752),
    b = n(45966),
    g = n(526120),
    p = n(751189),
    f = n(409059),
    m = n(918658),
    h = n(163400),
    O = n(210887),
    C = n(524329),
    S = n(995532),
    y = n(984933),
    P = n(650774),
    v = n(496675),
    w = n(434404),
    x = n(600553),
    j = n(999382),
    I = n(359191),
    T = n(896007),
    k = n(978946),
    N = n(981631),
    R = n(388032);
function Z(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        n = arguments.length > 2 ? arguments[2] : void 0;
    s.ZP.trackWithMetadata(N.rMx.SETTINGS_PANE_VIEWED, {
        settings_type: 'guild',
        origin_pane: t,
        destination_pane: e,
        location: n
    });
}
let D = {
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
class B extends o.PureComponent {
    componentDidMount() {
        Z(this.props.section, null, this.props.analyticsLocation);
    }
    componentWillUnmount() {
        w.Z.close();
    }
    componentDidUpdate(e) {
        let { section: t } = e,
            { section: n, isGuildAdmin: r, canManageGuild: o, canManageRoles: i, canManageBans: c, canManageNicknames: l, canManageGuildExpressions: s, canViewAuditLog: u, canManageWebhooks: d, canUnlinkChannels: _, canAccessMembersPage: b, canViewGuildAnalytics: g } = this.props;
        n !== t && Z(n, t), ((r || o || i || c || l || s || u || b || d || _) && (u || n !== N.pNK.AUDIT_LOG) && (i || n !== N.pNK.ROLES) && (s || n !== N.pNK.EMOJI) && (s || n !== N.pNK.STICKERS) && (s || n !== N.pNK.SOUNDBOARD) && (c || n !== N.pNK.BANS) && (g || n !== N.pNK.ANALYTICS) && (b || n !== N.pNK.MEMBERS)) || (0, a.xf)();
    }
    render() {
        var e, t;
        let { theme: n, sidebarTheme: o, section: i, guild: l, isGuildAdmin: s, canManageGuild: u, canViewAuditLog: d, canManageRoles: _, canManageGuildExpressions: b, canManageWebhooks: g, canUnlinkChannels: p, canManageBans: f, canAccessMembersPage: h, canViewGuildAnalytics: O, isOwner: C, isOwnerWithRequiredMfaLevel: S, showDirtyGuildTemplateIndicator: y, memberCount: P, onboardingStep: v, onboardingEnabled: x, welcomeScreenEmpty: j, guildMetadata: I, canAccessClanSettings: N, isGuildSettingsFoundationEnabled: Z } = this.props;
        if (null == l) return null;
        let D = (0, T.vE)({
                guild: l,
                isGuildAdmin: s,
                canManageGuild: u,
                canViewAuditLog: d,
                canManageRoles: _,
                canManageGuildExpressions: b,
                canManageWebhooks: g,
                canUnlinkChannels: p,
                canManageBans: f,
                canAccessMembersPage: h,
                canViewGuildAnalytics: O,
                isOwner: C,
                isOwnerWithRequiredMfaLevel: S,
                showDirtyGuildTemplateIndicator: y,
                memberCount: P,
                onboardingStep: v,
                onboardingEnabled: x,
                welcomeScreenEmpty: j,
                guildMetadata: I,
                section: i,
                canAccessClanSettings: N,
                isGuildSettingsFoundationEnabled: Z
            }),
            B = (null == (t = D.find((e) => e.section === i)) || null == (e = t.predicate) ? void 0 : e.call(t)) !== !1,
            E = (0, k.r)(l.id);
        return (0, r.jsxs)('div', {
            children: [
                (0, r.jsx)(c.ZP, {
                    theme: n,
                    sidebarTheme: o,
                    section: B && null != i ? i : E,
                    onSetSection: w.Z.setSection,
                    onClose: a.xf,
                    title: '' !== l.toString() ? l.toString() : R.NW.string(R.t['154/bG']),
                    sections: D
                }),
                (0, r.jsx)(m.d, { guildId: l.id })
            ]
        });
    }
}
function E() {
    var e, t, n;
    let { guild: a, section: c, analyticsLocation: s, guildMetadata: m, isGuildMetadataLoaded: T } = (0, i.cj)([j.Z], () => j.Z.getProps()),
        { analyticsLocations: k } = (0, u.ZP)(l.Z.GUILD_SETTINGS),
        R = (0, i.e7)([O.Z], () => O.Z.theme),
        Z = (0, i.e7)([O.Z], () => (O.Z.darkSidebar ? N.BRd.DARK : void 0)),
        E = (0, i.e7)([y.ZP], () => (null != a ? y.ZP.getChannels(a.id).SELECTABLE : null), [a]),
        A = (0, i.cj)([v.Z], () => (null != a ? v.Z.getGuildPermissionProps(a) : D)),
        L = null == a ? void 0 : a.id,
        G = (0, i.e7)([v.Z], () => null != a && v.Z.canAccessGuildSettings(a));
    o.useEffect(() => {
        T || null == L || (0, d.aC)(L);
    }, [T, L]);
    let W = null != (e = null == a ? void 0 : a.hasFeature(N.oNc.COMMUNITY)) && e;
    o.useEffect(() => {
        null != L && W && ((0, _.eM)(L), (0, C.RM)(L));
    }, [L, W]),
        o.useEffect(() => {
            null != L && (0, g.cP)(L);
        }, [L]);
    let M = A.isGuildAdmin && (null == a ? void 0 : a.hasFeature(N.oNc.CLAN)),
        U = (0, i.e7)(
            [f.Z],
            () => {
                var e;
                return (null == a ? void 0 : a.id) != null && (null == (e = f.Z.getForGuild(a.id)) ? void 0 : e.isDirty) === !0;
            },
            [a]
        ),
        H = (0, i.e7)([P.Z], () => P.Z.getMemberCount(null == a ? void 0 : a.id), [a]);
    o.useEffect(() => {
        null != L && A.canManageGuild && p.Z.loadTemplatesForGuild(L);
    }, [L, A.canManageGuild]),
        o.useEffect(() => {
            G || w.Z.close();
        }, [G]);
    let F = (0, i.e7)([I.Z], () => I.Z.getCurrentPage()),
        V = (0, i.e7)([b.Z], () => null != L && b.Z.getEnabled(L)),
        z = (0, i.e7)([S.Z], () => null != L && S.Z.isEmpty(L)),
        q = (0, h.F)(L).length > 0,
        K = (0, x.Dj)({
            guildId: L,
            location: 'GuildSettings'
        });
    return (0, r.jsx)(u.Gt, {
        value: k,
        children: (0, r.jsx)(
            B,
            ((t = (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    'function' == typeof Object.getOwnPropertySymbols &&
                        (r = r.concat(
                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                            })
                        )),
                        r.forEach(function (t) {
                            var r;
                            (r = n[t]),
                                t in e
                                    ? Object.defineProperty(e, t, {
                                          value: r,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0
                                      })
                                    : (e[t] = r);
                        });
                }
                return e;
            })(
                {
                    guild: a,
                    section: c,
                    theme: R,
                    sidebarTheme: Z,
                    channels: E,
                    showDirtyGuildTemplateIndicator: U,
                    analyticsLocation: s,
                    memberCount: H
                },
                A
            )),
            (n = n =
                {
                    canUnlinkChannels: q,
                    canViewGuildAnalytics: A.canViewGuildAnalytics,
                    onboardingStep: F,
                    onboardingEnabled: V,
                    welcomeScreenEmpty: z,
                    guildMetadata: m,
                    canAccessClanSettings: M,
                    isGuildSettingsFoundationEnabled: K
                }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                : (function (e, t) {
                      var n = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                          var r = Object.getOwnPropertySymbols(e);
                          n.push.apply(n, r);
                      }
                      return n;
                  })(Object(n)).forEach(function (e) {
                      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                  }),
            t)
        )
    });
}
