l.r(n), l.d(n, { default: () => D });
var t = l(200651),
    i = l(192379),
    a = l(442837),
    s = l(37234),
    o = l(503089),
    u = l(100527),
    d = l(367907),
    c = l(906732),
    r = l(456268),
    p = l(63568),
    g = l(745752),
    h = l(45966),
    Z = l(526120),
    m = l(751189),
    v = l(409059),
    f = l(918658),
    E = l(163400),
    S = l(210887),
    G = l(524329),
    M = l(995532),
    N = l(984933),
    b = l(650774),
    C = l(496675),
    x = l(434404),
    A = l(600553),
    I = l(999382),
    j = l(359191),
    K = l(896007),
    L = l(978946),
    P = l(981631),
    T = l(388032);
function y(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        l = arguments.length > 2 ? arguments[2] : void 0;
    d.ZP.trackWithMetadata(P.rMx.SETTINGS_PANE_VIEWED, {
        settings_type: 'guild',
        origin_pane: n,
        destination_pane: e,
        location: l
    });
}
let k = {
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
class w extends i.PureComponent {
    componentDidMount() {
        y(this.props.section, null, this.props.analyticsLocation);
    }
    componentWillUnmount() {
        x.Z.close();
    }
    componentDidUpdate(e) {
        let { section: n } = e,
            { section: l, isGuildAdmin: t, canManageGuild: i, canManageRoles: a, canManageBans: o, canManageNicknames: u, canManageGuildExpressions: d, canViewAuditLog: c, canManageWebhooks: r, canUnlinkChannels: p, canAccessMembersPage: g, canViewGuildAnalytics: h } = this.props;
        l !== n && y(l, n), ((t || i || a || o || u || d || c || g || r || p) && (c || l !== P.pNK.AUDIT_LOG) && (a || l !== P.pNK.ROLES) && (d || l !== P.pNK.EMOJI) && (d || l !== P.pNK.STICKERS) && (d || l !== P.pNK.SOUNDBOARD) && (o || l !== P.pNK.BANS) && (h || l !== P.pNK.ANALYTICS) && (g || l !== P.pNK.MEMBERS)) || (0, s.xf)();
    }
    render() {
        var e, n;
        let { theme: l, sidebarTheme: i, section: a, guild: u, isGuildAdmin: d, canManageGuild: c, canViewAuditLog: r, canManageRoles: p, canManageGuildExpressions: g, canManageWebhooks: h, canUnlinkChannels: Z, canManageBans: m, canAccessMembersPage: v, canViewGuildAnalytics: E, isOwner: S, isOwnerWithRequiredMfaLevel: G, showDirtyGuildTemplateIndicator: M, memberCount: N, onboardingStep: b, onboardingEnabled: C, welcomeScreenEmpty: A, guildMetadata: I, canAccessClanSettings: j, memberVerificationRolloutEnabled: P, isGuildSettingsFoundationEnabled: y } = this.props;
        if (null == u) return null;
        let k = (0, K.vE)({
                guild: u,
                isGuildAdmin: d,
                canManageGuild: c,
                canViewAuditLog: r,
                canManageRoles: p,
                canManageGuildExpressions: g,
                canManageWebhooks: h,
                canUnlinkChannels: Z,
                canManageBans: m,
                canAccessMembersPage: v,
                canViewGuildAnalytics: E,
                isOwner: S,
                isOwnerWithRequiredMfaLevel: G,
                showDirtyGuildTemplateIndicator: M,
                memberCount: N,
                onboardingStep: b,
                onboardingEnabled: C,
                welcomeScreenEmpty: A,
                guildMetadata: I,
                section: a,
                canAccessClanSettings: j,
                memberVerificationRolloutEnabled: P,
                isGuildSettingsFoundationEnabled: y
            }),
            w = (null === (n = k.find((e) => e.section === a)) || void 0 === n ? void 0 : null === (e = n.predicate) || void 0 === e ? void 0 : e.call(n)) !== !1,
            D = (0, L.r)(u.id);
        return (0, t.jsxs)('div', {
            children: [
                (0, t.jsx)(o.ZP, {
                    theme: l,
                    sidebarTheme: i,
                    section: w && null != a ? a : D,
                    onSetSection: x.Z.setSection,
                    onClose: s.xf,
                    title: '' !== u.toString() ? u.toString() : T.intl.string(T.t['154/bG']),
                    sections: k
                }),
                (0, t.jsx)(f.d, { guildId: u.id })
            ]
        });
    }
}
function D() {
    var e;
    let { guild: n, section: l, analyticsLocation: s, guildMetadata: o, isGuildMetadataLoaded: d } = (0, a.cj)([I.Z], () => I.Z.getProps()),
        { analyticsLocations: f } = (0, c.ZP)(u.Z.GUILD_SETTINGS),
        K = (0, a.e7)([S.Z], () => S.Z.theme),
        L = (0, a.e7)([S.Z], () => (S.Z.darkSidebar ? P.BRd.DARK : void 0)),
        T = (0, a.e7)([N.ZP], () => (null != n ? N.ZP.getChannels(n.id).SELECTABLE : null), [n]),
        y = (0, a.cj)([C.Z], () => (null != n ? C.Z.getGuildPermissionProps(n) : k)),
        D = null == n ? void 0 : n.id,
        B = (0, a.e7)([C.Z], () => null != n && C.Z.canAccessGuildSettings(n));
    i.useEffect(() => {
        d || null == D || (0, r.aC)(D);
    }, [d, D]);
    let F = null !== (e = null == n ? void 0 : n.hasFeature(P.oNc.COMMUNITY)) && void 0 !== e && e;
    i.useEffect(() => {
        null != D && F && ((0, g.eM)(D), (0, G.RM)(D));
    }, [D, F]),
        i.useEffect(() => {
            null != D && (0, Z.cP)(D);
        }, [D]);
    let R = y.isGuildAdmin && (null == n ? void 0 : n.hasFeature(P.oNc.CLAN)),
        _ = (0, a.e7)(
            [v.Z],
            () => {
                var e;
                return (null == n ? void 0 : n.id) != null && (null === (e = v.Z.getForGuild(n.id)) || void 0 === e ? void 0 : e.isDirty) === !0;
            },
            [n]
        ),
        O = (0, a.e7)([b.Z], () => b.Z.getMemberCount(null == n ? void 0 : n.id), [n]);
    i.useEffect(() => {
        null != D && y.canManageGuild && m.Z.loadTemplatesForGuild(D);
    }, [D, y.canManageGuild]),
        i.useEffect(() => {
            B || x.Z.close();
        }, [B]);
    let U = (0, a.e7)([j.Z], () => j.Z.getCurrentPage()),
        V = (0, a.e7)([h.Z], () => null != D && h.Z.getEnabled(D)),
        W = (0, a.e7)([M.Z], () => null != D && M.Z.isEmpty(D)),
        Y = (0, E.F)(D).length > 0,
        J = (0, p.jS)(D, 'GuildSettings'),
        q = (0, A.Dj)({
            guildId: D,
            location: 'GuildSettings'
        });
    return (0, t.jsx)(c.Gt, {
        value: f,
        children: (0, t.jsx)(w, {
            guild: n,
            section: l,
            theme: K,
            sidebarTheme: L,
            channels: T,
            showDirtyGuildTemplateIndicator: _,
            analyticsLocation: s,
            memberCount: O,
            ...y,
            canUnlinkChannels: Y,
            canViewGuildAnalytics: y.canViewGuildAnalytics,
            onboardingStep: U,
            onboardingEnabled: V,
            welcomeScreenEmpty: W,
            guildMetadata: o,
            canAccessClanSettings: R,
            memberVerificationRolloutEnabled: J,
            isGuildSettingsFoundationEnabled: q
        })
    });
}
