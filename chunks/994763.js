t.r(n), t.d(n, { default: () => L });
var l = t(200651),
    i = t(192379),
    a = t(442837),
    o = t(37234),
    r = t(503089),
    s = t(100527),
    c = t(367907),
    u = t(906732),
    d = t(456268),
    p = t(63568),
    g = t(745752),
    b = t(45966),
    f = t(526120),
    h = t(751189),
    m = t(409059),
    y = t(918658),
    O = t(163400),
    S = t(210887),
    Z = t(524329),
    v = t(995532),
    j = t(984933),
    E = t(650774),
    G = t(496675),
    P = t(434404),
    M = t(600553),
    N = t(999382),
    w = t(359191),
    C = t(896007),
    x = t(978946),
    A = t(981631),
    D = t(388032);
function I(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        t = arguments.length > 2 ? arguments[2] : void 0;
    c.ZP.trackWithMetadata(A.rMx.SETTINGS_PANE_VIEWED, {
        settings_type: 'guild',
        origin_pane: n,
        destination_pane: e,
        location: t
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
class K extends i.PureComponent {
    componentDidMount() {
        I(this.props.section, null, this.props.analyticsLocation);
    }
    componentWillUnmount() {
        P.Z.close();
    }
    componentDidUpdate(e) {
        let { section: n } = e,
            { section: t, isGuildAdmin: l, canManageGuild: i, canManageRoles: a, canManageBans: r, canManageNicknames: s, canManageGuildExpressions: c, canViewAuditLog: u, canManageWebhooks: d, canUnlinkChannels: p, canAccessMembersPage: g, canViewGuildAnalytics: b } = this.props;
        t !== n && I(t, n), ((l || i || a || r || s || c || u || g || d || p) && (u || t !== A.pNK.AUDIT_LOG) && (a || t !== A.pNK.ROLES) && (c || t !== A.pNK.EMOJI) && (c || t !== A.pNK.STICKERS) && (c || t !== A.pNK.SOUNDBOARD) && (r || t !== A.pNK.BANS) && (b || t !== A.pNK.ANALYTICS) && (g || t !== A.pNK.MEMBERS)) || (0, o.xf)();
    }
    render() {
        var e, n;
        let { theme: t, sidebarTheme: i, section: a, guild: s, isGuildAdmin: c, canManageGuild: u, canViewAuditLog: d, canManageRoles: p, canManageGuildExpressions: g, canManageWebhooks: b, canUnlinkChannels: f, canManageBans: h, canAccessMembersPage: m, canViewGuildAnalytics: O, isOwner: S, isOwnerWithRequiredMfaLevel: Z, showDirtyGuildTemplateIndicator: v, memberCount: j, onboardingStep: E, onboardingEnabled: G, welcomeScreenEmpty: M, guildMetadata: N, canAccessClanSettings: w, memberVerificationRolloutEnabled: A, isGuildSettingsFoundationEnabled: I } = this.props;
        if (null == s) return null;
        let k = (0, C.vE)({
                guild: s,
                isGuildAdmin: c,
                canManageGuild: u,
                canViewAuditLog: d,
                canManageRoles: p,
                canManageGuildExpressions: g,
                canManageWebhooks: b,
                canUnlinkChannels: f,
                canManageBans: h,
                canAccessMembersPage: m,
                canViewGuildAnalytics: O,
                isOwner: S,
                isOwnerWithRequiredMfaLevel: Z,
                showDirtyGuildTemplateIndicator: v,
                memberCount: j,
                onboardingStep: E,
                onboardingEnabled: G,
                welcomeScreenEmpty: M,
                guildMetadata: N,
                section: a,
                canAccessClanSettings: w,
                memberVerificationRolloutEnabled: A,
                isGuildSettingsFoundationEnabled: I
            }),
            K = (null == (n = k.find((e) => e.section === a)) || null == (e = n.predicate) ? void 0 : e.call(n)) !== !1,
            L = (0, x.r)(s.id);
        return (0, l.jsxs)('div', {
            children: [
                (0, l.jsx)(r.ZP, {
                    theme: t,
                    sidebarTheme: i,
                    section: K && null != a ? a : L,
                    onSetSection: P.Z.setSection,
                    onClose: o.xf,
                    title: '' !== s.toString() ? s.toString() : D.NW.string(D.t['154/bG']),
                    sections: k
                }),
                (0, l.jsx)(y.d, { guildId: s.id })
            ]
        });
    }
}
function L() {
    var e, n, t;
    let { guild: o, section: r, analyticsLocation: c, guildMetadata: y, isGuildMetadataLoaded: C } = (0, a.cj)([N.Z], () => N.Z.getProps()),
        { analyticsLocations: x } = (0, u.ZP)(s.Z.GUILD_SETTINGS),
        D = (0, a.e7)([S.Z], () => S.Z.theme),
        I = (0, a.e7)([S.Z], () => (S.Z.darkSidebar ? A.BRd.DARK : void 0)),
        L = (0, a.e7)([j.ZP], () => (null != o ? j.ZP.getChannels(o.id).SELECTABLE : null), [o]),
        T = (0, a.cj)([G.Z], () => (null != o ? G.Z.getGuildPermissionProps(o) : k)),
        B = null == o ? void 0 : o.id,
        F = (0, a.e7)([G.Z], () => null != o && G.Z.canAccessGuildSettings(o));
    i.useEffect(() => {
        C || null == B || (0, d.aC)(B);
    }, [C, B]);
    let R = null != (e = null == o ? void 0 : o.hasFeature(A.oNc.COMMUNITY)) && e;
    i.useEffect(() => {
        null != B && R && ((0, g.eM)(B), (0, Z.RM)(B));
    }, [B, R]),
        i.useEffect(() => {
            null != B && (0, f.cP)(B);
        }, [B]);
    let _ = T.isGuildAdmin && (null == o ? void 0 : o.hasFeature(A.oNc.CLAN)),
        U = (0, a.e7)(
            [m.Z],
            () => {
                var e;
                return (null == o ? void 0 : o.id) != null && (null == (e = m.Z.getForGuild(o.id)) ? void 0 : e.isDirty) === !0;
            },
            [o]
        ),
        V = (0, a.e7)([E.Z], () => E.Z.getMemberCount(null == o ? void 0 : o.id), [o]);
    i.useEffect(() => {
        null != B && T.canManageGuild && h.Z.loadTemplatesForGuild(B);
    }, [B, T.canManageGuild]),
        i.useEffect(() => {
            F || P.Z.close();
        }, [F]);
    let W = (0, a.e7)([w.Z], () => w.Z.getCurrentPage()),
        Y = (0, a.e7)([b.Z], () => null != B && b.Z.getEnabled(B)),
        J = (0, a.e7)([v.Z], () => null != B && v.Z.isEmpty(B)),
        q = (0, O.F)(B).length > 0,
        z = (0, p.jS)(B, 'GuildSettings'),
        H = (0, M.Dj)({
            guildId: B,
            location: 'GuildSettings'
        });
    return (0, l.jsx)(u.Gt, {
        value: x,
        children: (0, l.jsx)(
            K,
            ((n = (function (e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {},
                        l = Object.keys(t);
                    'function' == typeof Object.getOwnPropertySymbols &&
                        (l = l.concat(
                            Object.getOwnPropertySymbols(t).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(t, e).enumerable;
                            })
                        )),
                        l.forEach(function (n) {
                            var l;
                            (l = t[n]),
                                n in e
                                    ? Object.defineProperty(e, n, {
                                          value: l,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0
                                      })
                                    : (e[n] = l);
                        });
                }
                return e;
            })(
                {
                    guild: o,
                    section: r,
                    theme: D,
                    sidebarTheme: I,
                    channels: L,
                    showDirtyGuildTemplateIndicator: U,
                    analyticsLocation: c,
                    memberCount: V
                },
                T
            )),
            (t = t =
                {
                    canUnlinkChannels: q,
                    canViewGuildAnalytics: T.canViewGuildAnalytics,
                    onboardingStep: W,
                    onboardingEnabled: Y,
                    welcomeScreenEmpty: J,
                    guildMetadata: y,
                    canAccessClanSettings: _,
                    memberVerificationRolloutEnabled: z,
                    isGuildSettingsFoundationEnabled: H
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
