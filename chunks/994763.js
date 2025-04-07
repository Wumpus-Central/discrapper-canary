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
    _ = n(63568),
    b = n(745752),
    g = n(45966),
    f = n(526120),
    p = n(751189),
    m = n(409059),
    h = n(918658),
    O = n(163400),
    S = n(210887),
    C = n(524329),
    v = n(995532),
    y = n(984933),
    P = n(650774),
    x = n(496675),
    T = n(434404),
    w = n(600553),
    N = n(999382),
    j = n(359191),
    I = n(896007),
    k = n(978946),
    E = n(981631),
    R = n(388032);
function A(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        n = arguments.length > 2 ? arguments[2] : void 0;
    s.ZP.trackWithMetadata(E.rMx.SETTINGS_PANE_VIEWED, {
        settings_type: 'guild',
        origin_pane: t,
        destination_pane: e,
        location: n
    });
}
let B = {
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
class L extends o.PureComponent {
    componentDidMount() {
        A(this.props.section, null, this.props.analyticsLocation);
    }
    componentWillUnmount() {
        T.Z.close();
    }
    componentDidUpdate(e) {
        let { section: t } = e,
            { section: n, isGuildAdmin: r, canManageGuild: o, canManageRoles: i, canManageBans: c, canManageNicknames: l, canManageGuildExpressions: s, canViewAuditLog: u, canManageWebhooks: d, canUnlinkChannels: _, canAccessMembersPage: b, canViewGuildAnalytics: g } = this.props;
        n !== t && A(n, t), ((r || o || i || c || l || s || u || b || d || _) && (u || n !== E.pNK.AUDIT_LOG) && (i || n !== E.pNK.ROLES) && (s || n !== E.pNK.EMOJI) && (s || n !== E.pNK.STICKERS) && (s || n !== E.pNK.SOUNDBOARD) && (c || n !== E.pNK.BANS) && (g || n !== E.pNK.ANALYTICS) && (b || n !== E.pNK.MEMBERS)) || (0, a.xf)();
    }
    render() {
        var e, t;
        let { theme: n, sidebarTheme: o, section: i, guild: l, isGuildAdmin: s, canManageGuild: u, canViewAuditLog: d, canManageRoles: _, canManageGuildExpressions: b, canManageWebhooks: g, canUnlinkChannels: f, canManageBans: p, canAccessMembersPage: m, canViewGuildAnalytics: O, isOwner: S, isOwnerWithRequiredMfaLevel: C, showDirtyGuildTemplateIndicator: v, memberCount: y, onboardingStep: P, onboardingEnabled: x, welcomeScreenEmpty: w, guildMetadata: N, canAccessClanSettings: j, memberVerificationRolloutEnabled: E, isGuildSettingsFoundationEnabled: A } = this.props;
        if (null == l) return null;
        let B = (0, I.vE)({
                guild: l,
                isGuildAdmin: s,
                canManageGuild: u,
                canViewAuditLog: d,
                canManageRoles: _,
                canManageGuildExpressions: b,
                canManageWebhooks: g,
                canUnlinkChannels: f,
                canManageBans: p,
                canAccessMembersPage: m,
                canViewGuildAnalytics: O,
                isOwner: S,
                isOwnerWithRequiredMfaLevel: C,
                showDirtyGuildTemplateIndicator: v,
                memberCount: y,
                onboardingStep: P,
                onboardingEnabled: x,
                welcomeScreenEmpty: w,
                guildMetadata: N,
                section: i,
                canAccessClanSettings: j,
                memberVerificationRolloutEnabled: E,
                isGuildSettingsFoundationEnabled: A
            }),
            L = (null == (t = B.find((e) => e.section === i)) || null == (e = t.predicate) ? void 0 : e.call(t)) !== !1,
            D = (0, k.r)(l.id);
        return (0, r.jsxs)('div', {
            children: [
                (0, r.jsx)(c.ZP, {
                    theme: n,
                    sidebarTheme: o,
                    section: L && null != i ? i : D,
                    onSetSection: T.Z.setSection,
                    onClose: a.xf,
                    title: '' !== l.toString() ? l.toString() : R.NW.string(R.t['154/bG']),
                    sections: B
                }),
                (0, r.jsx)(h.d, { guildId: l.id })
            ]
        });
    }
}
function D() {
    var e, t, n;
    let { guild: a, section: c, analyticsLocation: s, guildMetadata: h, isGuildMetadataLoaded: I } = (0, i.cj)([N.Z], () => N.Z.getProps()),
        { analyticsLocations: k } = (0, u.ZP)(l.Z.GUILD_SETTINGS),
        R = (0, i.e7)([S.Z], () => S.Z.theme),
        A = (0, i.e7)([S.Z], () => (S.Z.darkSidebar ? E.BRd.DARK : void 0)),
        D = (0, i.e7)([y.ZP], () => (null != a ? y.ZP.getChannels(a.id).SELECTABLE : null), [a]),
        Z = (0, i.cj)([x.Z], () => (null != a ? x.Z.getGuildPermissionProps(a) : B)),
        W = null == a ? void 0 : a.id,
        G = (0, i.e7)([x.Z], () => null != a && x.Z.canAccessGuildSettings(a));
    o.useEffect(() => {
        I || null == W || (0, d.aC)(W);
    }, [I, W]);
    let M = null != (e = null == a ? void 0 : a.hasFeature(E.oNc.COMMUNITY)) && e;
    o.useEffect(() => {
        null != W && M && ((0, b.eM)(W), (0, C.RM)(W));
    }, [W, M]),
        o.useEffect(() => {
            null != W && (0, f.cP)(W);
        }, [W]);
    let U = Z.isGuildAdmin && (null == a ? void 0 : a.hasFeature(E.oNc.CLAN)),
        F = (0, i.e7)(
            [m.Z],
            () => {
                var e;
                return (null == a ? void 0 : a.id) != null && (null == (e = m.Z.getForGuild(a.id)) ? void 0 : e.isDirty) === !0;
            },
            [a]
        ),
        H = (0, i.e7)([P.Z], () => P.Z.getMemberCount(null == a ? void 0 : a.id), [a]);
    o.useEffect(() => {
        null != W && Z.canManageGuild && p.Z.loadTemplatesForGuild(W);
    }, [W, Z.canManageGuild]),
        o.useEffect(() => {
            G || T.Z.close();
        }, [G]);
    let V = (0, i.e7)([j.Z], () => j.Z.getCurrentPage()),
        K = (0, i.e7)([g.Z], () => null != W && g.Z.getEnabled(W)),
        z = (0, i.e7)([v.Z], () => null != W && v.Z.isEmpty(W)),
        Y = (0, O.F)(W).length > 0,
        q = (0, _.jS)(W, 'GuildSettings'),
        Q = (0, w.Dj)({
            guildId: W,
            location: 'GuildSettings'
        });
    return (0, r.jsx)(u.Gt, {
        value: k,
        children: (0, r.jsx)(
            L,
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
                    sidebarTheme: A,
                    channels: D,
                    showDirtyGuildTemplateIndicator: F,
                    analyticsLocation: s,
                    memberCount: H
                },
                Z
            )),
            (n = n =
                {
                    canUnlinkChannels: Y,
                    canViewGuildAnalytics: Z.canViewGuildAnalytics,
                    onboardingStep: V,
                    onboardingEnabled: K,
                    welcomeScreenEmpty: z,
                    guildMetadata: h,
                    canAccessClanSettings: U,
                    memberVerificationRolloutEnabled: q,
                    isGuildSettingsFoundationEnabled: Q
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
