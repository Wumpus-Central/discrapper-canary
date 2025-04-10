n.r(t), n.d(t, { default: () => D });
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
    f = n(751189),
    p = n(409059),
    m = n(918658),
    h = n(163400),
    O = n(210887),
    S = n(524329),
    C = n(995532),
    v = n(984933),
    y = n(650774),
    P = n(496675),
    x = n(434404),
    T = n(600553),
    w = n(999382),
    N = n(359191),
    I = n(896007),
    j = n(978946),
    k = n(981631),
    E = n(388032);
function R(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        n = arguments.length > 2 ? arguments[2] : void 0;
    s.ZP.trackWithMetadata(k.rMx.SETTINGS_PANE_VIEWED, {
        settings_type: 'guild',
        origin_pane: t,
        destination_pane: e,
        location: n
    });
}
let A = {
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
        R(this.props.section, null, this.props.analyticsLocation);
    }
    componentWillUnmount() {
        x.Z.close();
    }
    componentDidUpdate(e) {
        let { section: t } = e,
            { section: n, isGuildAdmin: r, canManageGuild: o, canManageRoles: i, canManageBans: c, canManageNicknames: l, canManageGuildExpressions: s, canViewAuditLog: u, canManageWebhooks: d, canUnlinkChannels: _, canAccessMembersPage: b, canViewGuildAnalytics: g } = this.props;
        n !== t && R(n, t), ((r || o || i || c || l || s || u || b || d || _) && (u || n !== k.pNK.AUDIT_LOG) && (i || n !== k.pNK.ROLES) && (s || n !== k.pNK.EMOJI) && (s || n !== k.pNK.STICKERS) && (s || n !== k.pNK.SOUNDBOARD) && (c || n !== k.pNK.BANS) && (g || n !== k.pNK.ANALYTICS) && (b || n !== k.pNK.MEMBERS)) || (0, a.xf)();
    }
    render() {
        var e, t;
        let { theme: n, sidebarTheme: o, section: i, guild: l, isGuildAdmin: s, canManageGuild: u, canViewAuditLog: d, canManageRoles: _, canManageGuildExpressions: b, canManageWebhooks: g, canUnlinkChannels: f, canManageBans: p, canAccessMembersPage: h, canViewGuildAnalytics: O, isOwner: S, isOwnerWithRequiredMfaLevel: C, showDirtyGuildTemplateIndicator: v, memberCount: y, onboardingStep: P, onboardingEnabled: T, welcomeScreenEmpty: w, guildMetadata: N, canAccessClanSettings: k, isGuildSettingsFoundationEnabled: R } = this.props;
        if (null == l) return null;
        let A = (0, I.vE)({
                guild: l,
                isGuildAdmin: s,
                canManageGuild: u,
                canViewAuditLog: d,
                canManageRoles: _,
                canManageGuildExpressions: b,
                canManageWebhooks: g,
                canUnlinkChannels: f,
                canManageBans: p,
                canAccessMembersPage: h,
                canViewGuildAnalytics: O,
                isOwner: S,
                isOwnerWithRequiredMfaLevel: C,
                showDirtyGuildTemplateIndicator: v,
                memberCount: y,
                onboardingStep: P,
                onboardingEnabled: T,
                welcomeScreenEmpty: w,
                guildMetadata: N,
                section: i,
                canAccessClanSettings: k,
                isGuildSettingsFoundationEnabled: R
            }),
            B = (null == (t = A.find((e) => e.section === i)) || null == (e = t.predicate) ? void 0 : e.call(t)) !== !1,
            D = (0, j.r)(l.id);
        return (0, r.jsxs)('div', {
            children: [
                (0, r.jsx)(c.ZP, {
                    theme: n,
                    sidebarTheme: o,
                    section: B && null != i ? i : D,
                    onSetSection: x.Z.setSection,
                    onClose: a.xf,
                    title: '' !== l.toString() ? l.toString() : E.NW.string(E.t['154/bG']),
                    sections: A
                }),
                (0, r.jsx)(m.d, { guildId: l.id })
            ]
        });
    }
}
function D() {
    var e, t, n;
    let { guild: a, section: c, analyticsLocation: s, guildMetadata: m, isGuildMetadataLoaded: I } = (0, i.cj)([w.Z], () => w.Z.getProps()),
        { analyticsLocations: j } = (0, u.ZP)(l.Z.GUILD_SETTINGS),
        E = (0, i.e7)([O.Z], () => O.Z.theme),
        R = (0, i.e7)([O.Z], () => (O.Z.darkSidebar ? k.BRd.DARK : void 0)),
        D = (0, i.e7)([v.ZP], () => (null != a ? v.ZP.getChannels(a.id).SELECTABLE : null), [a]),
        L = (0, i.cj)([P.Z], () => (null != a ? P.Z.getGuildPermissionProps(a) : A)),
        Z = null == a ? void 0 : a.id,
        W = (0, i.e7)([P.Z], () => null != a && P.Z.canAccessGuildSettings(a));
    o.useEffect(() => {
        I || null == Z || (0, d.aC)(Z);
    }, [I, Z]);
    let G = null != (e = null == a ? void 0 : a.hasFeature(k.oNc.COMMUNITY)) && e;
    o.useEffect(() => {
        null != Z && G && ((0, _.eM)(Z), (0, S.RM)(Z));
    }, [Z, G]),
        o.useEffect(() => {
            null != Z && (0, g.cP)(Z);
        }, [Z]);
    let M = L.isGuildAdmin && (null == a ? void 0 : a.hasFeature(k.oNc.CLAN)),
        U = (0, i.e7)(
            [p.Z],
            () => {
                var e;
                return (null == a ? void 0 : a.id) != null && (null == (e = p.Z.getForGuild(a.id)) ? void 0 : e.isDirty) === !0;
            },
            [a]
        ),
        H = (0, i.e7)([y.Z], () => y.Z.getMemberCount(null == a ? void 0 : a.id), [a]);
    o.useEffect(() => {
        null != Z && L.canManageGuild && f.Z.loadTemplatesForGuild(Z);
    }, [Z, L.canManageGuild]),
        o.useEffect(() => {
            W || x.Z.close();
        }, [W]);
    let F = (0, i.e7)([N.Z], () => N.Z.getCurrentPage()),
        V = (0, i.e7)([b.Z], () => null != Z && b.Z.getEnabled(Z)),
        z = (0, i.e7)([C.Z], () => null != Z && C.Z.isEmpty(Z)),
        K = (0, h.F)(Z).length > 0,
        Y = (0, T.Dj)({
            guildId: Z,
            location: 'GuildSettings'
        });
    return (0, r.jsx)(u.Gt, {
        value: j,
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
                    theme: E,
                    sidebarTheme: R,
                    channels: D,
                    showDirtyGuildTemplateIndicator: U,
                    analyticsLocation: s,
                    memberCount: H
                },
                L
            )),
            (n = n =
                {
                    canUnlinkChannels: K,
                    canViewGuildAnalytics: L.canViewGuildAnalytics,
                    onboardingStep: F,
                    onboardingEnabled: V,
                    welcomeScreenEmpty: z,
                    guildMetadata: m,
                    canAccessClanSettings: M,
                    isGuildSettingsFoundationEnabled: Y
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
