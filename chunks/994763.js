i.r(n), i.d(n, { default: () => j });
var l = i(200651),
    t = i(192379),
    a = i(442837),
    s = i(37234),
    o = i(503089),
    d = i(100527),
    u = i(367907),
    c = i(906732),
    r = i(456268),
    p = i(63568),
    g = i(745752),
    Z = i(45966),
    h = i(526120),
    E = i(751189),
    S = i(409059),
    m = i(918658),
    v = i(163400),
    G = i(210887),
    M = i(524329),
    f = i(995532),
    N = i(984933),
    A = i(650774),
    b = i(496675),
    C = i(434404),
    P = i(600553),
    T = i(999382),
    D = i(359191),
    I = i(896007),
    L = i(978946),
    w = i(981631),
    x = i(388032);
function y(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        i = arguments.length > 2 ? arguments[2] : void 0;
    u.ZP.trackWithMetadata(w.rMx.SETTINGS_PANE_VIEWED, {
        settings_type: 'guild',
        origin_pane: n,
        destination_pane: e,
        location: i
    });
}
let K = {
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
class R extends t.PureComponent {
    componentDidMount() {
        y(this.props.section, null, this.props.analyticsLocation);
    }
    componentWillUnmount() {
        C.Z.close();
    }
    componentDidUpdate(e) {
        let { section: n } = e,
            { section: i, isGuildAdmin: l, canManageGuild: t, canManageRoles: a, canManageBans: o, canManageNicknames: d, canManageGuildExpressions: u, canViewAuditLog: c, canManageWebhooks: r, canUnlinkChannels: p, canAccessMembersPage: g, canViewGuildAnalytics: Z } = this.props;
        i !== n && y(i, n), ((l || t || a || o || d || u || c || g || r || p) && (c || i !== w.pNK.AUDIT_LOG) && (a || i !== w.pNK.ROLES) && (u || i !== w.pNK.EMOJI) && (u || i !== w.pNK.STICKERS) && (u || i !== w.pNK.SOUNDBOARD) && (o || i !== w.pNK.BANS) && (Z || i !== w.pNK.ANALYTICS) && (g || i !== w.pNK.MEMBERS)) || (0, s.xf)();
    }
    render() {
        var e, n;
        let { theme: i, sidebarTheme: t, section: a, guild: d, isGuildAdmin: u, canManageGuild: c, canViewAuditLog: r, canManageRoles: p, canManageGuildExpressions: g, canManageWebhooks: Z, canUnlinkChannels: h, canManageBans: E, canAccessMembersPage: S, canViewGuildAnalytics: v, isOwner: G, isOwnerWithRequiredMfaLevel: M, showDirtyGuildTemplateIndicator: f, memberCount: N, onboardingStep: A, onboardingEnabled: b, welcomeScreenEmpty: P, guildMetadata: T, canAccessClanSettings: D, memberVerificationRolloutEnabled: w, isGuildSettingsFoundationEnabled: y } = this.props;
        if (null == d) return null;
        let K = (0, I.vE)({
                guild: d,
                isGuildAdmin: u,
                canManageGuild: c,
                canViewAuditLog: r,
                canManageRoles: p,
                canManageGuildExpressions: g,
                canManageWebhooks: Z,
                canUnlinkChannels: h,
                canManageBans: E,
                canAccessMembersPage: S,
                canViewGuildAnalytics: v,
                isOwner: G,
                isOwnerWithRequiredMfaLevel: M,
                showDirtyGuildTemplateIndicator: f,
                memberCount: N,
                onboardingStep: A,
                onboardingEnabled: b,
                welcomeScreenEmpty: P,
                guildMetadata: T,
                section: a,
                canAccessClanSettings: D,
                memberVerificationRolloutEnabled: w,
                isGuildSettingsFoundationEnabled: y
            }),
            R = (null === (n = K.find((e) => e.section === a)) || void 0 === n ? void 0 : null === (e = n.predicate) || void 0 === e ? void 0 : e.call(n)) !== !1,
            j = (0, L.r)(d.id);
        return (0, l.jsxs)('div', {
            children: [
                (0, l.jsx)(o.ZP, {
                    theme: i,
                    sidebarTheme: t,
                    section: R && null != a ? a : j,
                    onSetSection: C.Z.setSection,
                    onClose: s.xf,
                    title: '' !== d.toString() ? d.toString() : x.intl.string(x.t['154/bG']),
                    sections: K
                }),
                (0, l.jsx)(m.d, { guildId: d.id })
            ]
        });
    }
}
function j() {
    var e;
    let { guild: n, section: i, analyticsLocation: s, guildMetadata: o, isGuildMetadataLoaded: u } = (0, a.cj)([T.Z], () => T.Z.getProps()),
        { analyticsLocations: m } = (0, c.ZP)(d.Z.GUILD_SETTINGS),
        I = (0, a.e7)([G.Z], () => G.Z.theme),
        L = (0, a.e7)([G.Z], () => (G.Z.darkSidebar ? w.BRd.DARK : void 0)),
        x = (0, a.e7)([N.ZP], () => (null != n ? N.ZP.getChannels(n.id).SELECTABLE : null), [n]),
        y = (0, a.cj)([b.Z], () => (null != n ? b.Z.getGuildPermissionProps(n) : K)),
        j = null == n ? void 0 : n.id,
        k = (0, a.e7)([b.Z], () => null != n && b.Z.canAccessGuildSettings(n));
    t.useEffect(() => {
        u || null == j || (0, r.aC)(j);
    }, [u, j]);
    let _ = null !== (e = null == n ? void 0 : n.hasFeature(w.oNc.COMMUNITY)) && void 0 !== e && e;
    t.useEffect(() => {
        null != j && _ && ((0, g.eM)(j), (0, M.RM)(j));
    }, [j, _]),
        t.useEffect(() => {
            null != j && (0, h.cP)(j);
        }, [j]);
    let O = y.isGuildAdmin && (null == n ? void 0 : n.hasFeature(w.oNc.CLAN)),
        U = (0, a.e7)(
            [S.Z],
            () => {
                var e;
                return (null == n ? void 0 : n.id) != null && (null === (e = S.Z.getForGuild(n.id)) || void 0 === e ? void 0 : e.isDirty) === !0;
            },
            [n]
        ),
        B = (0, a.e7)([A.Z], () => A.Z.getMemberCount(null == n ? void 0 : n.id), [n]);
    t.useEffect(() => {
        null != j && y.canManageGuild && E.Z.loadTemplatesForGuild(j);
    }, [j, y.canManageGuild]),
        t.useEffect(() => {
            k || C.Z.close();
        }, [k]);
    let F = (0, a.e7)([D.Z], () => D.Z.getCurrentPage()),
        V = (0, a.e7)([Z.Z], () => null != j && Z.Z.getEnabled(j)),
        W = (0, a.e7)([f.Z], () => null != j && f.Z.isEmpty(j)),
        Y = (0, v.F)(j).length > 0,
        q = (0, p.jS)(j, 'GuildSettings'),
        J = (0, P.Dj)({
            guildId: j,
            location: 'GuildSettings'
        });
    return (0, l.jsx)(c.Gt, {
        value: m,
        children: (0, l.jsx)(R, {
            guild: n,
            section: i,
            theme: I,
            sidebarTheme: L,
            channels: x,
            showDirtyGuildTemplateIndicator: U,
            analyticsLocation: s,
            memberCount: B,
            ...y,
            canUnlinkChannels: Y,
            canViewGuildAnalytics: y.canViewGuildAnalytics,
            onboardingStep: F,
            onboardingEnabled: V,
            welcomeScreenEmpty: W,
            guildMetadata: o,
            canAccessClanSettings: O,
            memberVerificationRolloutEnabled: q,
            isGuildSettingsFoundationEnabled: J
        })
    });
}
