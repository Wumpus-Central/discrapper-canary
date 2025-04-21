n.r(t), n.d(t, { default: () => L });
var r = n(200651),
    i = n(192379),
    o = n(442837),
    l = n(37234),
    a = n(503089),
    c = n(100527),
    s = n(367907),
    u = n(906732),
    d = n(456268),
    b = n(745752),
    p = n(45966),
    g = n(526120),
    f = n(751189),
    _ = n(409059),
    h = n(918658),
    m = n(163400),
    O = n(210887),
    y = n(524329),
    S = n(995532),
    P = n(984933),
    v = n(650774),
    C = n(496675),
    w = n(434404),
    I = n(600553),
    j = n(999382),
    x = n(359191),
    E = n(896007),
    N = n(978946),
    T = n(981631),
    Z = n(388032);
function R(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        n = arguments.length > 2 ? arguments[2] : void 0;
    s.ZP.trackWithMetadata(T.rMx.SETTINGS_PANE_VIEWED, {
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
class D extends i.PureComponent {
    componentDidMount() {
        R(this.props.section, null, this.props.analyticsLocation);
    }
    componentWillUnmount() {
        w.Z.close();
    }
    componentDidUpdate(e) {
        let { section: t } = e,
            { section: n, isGuildAdmin: r, canManageGuild: i, canManageRoles: o, canManageBans: a, canManageNicknames: c, canManageGuildExpressions: s, canViewAuditLog: u, canManageWebhooks: d, canUnlinkChannels: b, canAccessMembersPage: p, canViewGuildAnalytics: g } = this.props;
        n !== t && R(n, t), ((r || i || o || a || c || s || u || p || d || b) && (u || n !== T.pNK.AUDIT_LOG) && (o || n !== T.pNK.ROLES) && (s || n !== T.pNK.EMOJI) && (s || n !== T.pNK.STICKERS) && (s || n !== T.pNK.SOUNDBOARD) && (a || n !== T.pNK.BANS) && (g || n !== T.pNK.ANALYTICS) && (p || n !== T.pNK.MEMBERS)) || (0, l.xf)();
    }
    render() {
        var e, t;
        let { theme: n, sidebarTheme: i, section: o, guild: c, isGuildAdmin: s, canManageGuild: u, canViewAuditLog: d, canManageRoles: b, canManageGuildExpressions: p, canManageWebhooks: g, canUnlinkChannels: f, canManageBans: _, canAccessMembersPage: m, canViewGuildAnalytics: O, isOwner: y, isOwnerWithRequiredMfaLevel: S, showDirtyGuildTemplateIndicator: P, memberCount: v, onboardingStep: C, onboardingEnabled: I, welcomeScreenEmpty: j, guildMetadata: x, isGuildSettingsFoundationEnabled: T } = this.props;
        if (null == c) return null;
        let R = (0, E.vE)({
                guild: c,
                isGuildAdmin: s,
                canManageGuild: u,
                canViewAuditLog: d,
                canManageRoles: b,
                canManageGuildExpressions: p,
                canManageWebhooks: g,
                canUnlinkChannels: f,
                canManageBans: _,
                canAccessMembersPage: m,
                canViewGuildAnalytics: O,
                isOwner: y,
                isOwnerWithRequiredMfaLevel: S,
                showDirtyGuildTemplateIndicator: P,
                memberCount: v,
                onboardingStep: C,
                onboardingEnabled: I,
                welcomeScreenEmpty: j,
                guildMetadata: x,
                section: o,
                isGuildSettingsFoundationEnabled: T
            }),
            A = (null == (t = R.find((e) => e.section === o)) || null == (e = t.predicate) ? void 0 : e.call(t)) !== !1,
            D = (0, N.r)(c.id);
        return (0, r.jsxs)('div', {
            children: [
                (0, r.jsx)(a.ZP, {
                    theme: n,
                    sidebarTheme: i,
                    section: A && null != o ? o : D,
                    onSetSection: w.Z.setSection,
                    onClose: l.xf,
                    title: '' !== c.toString() ? c.toString() : Z.intl.string(Z.t['154/bG']),
                    sections: R
                }),
                (0, r.jsx)(h.d, { guildId: c.id })
            ]
        });
    }
}
function L() {
    var e, t, n;
    let { guild: l, section: a, analyticsLocation: s, guildMetadata: h, isGuildMetadataLoaded: E } = (0, o.cj)([j.Z], () => j.Z.getProps()),
        { analyticsLocations: N } = (0, u.ZP)(c.Z.GUILD_SETTINGS),
        Z = (0, o.e7)([O.Z], () => O.Z.theme),
        R = (0, o.e7)([O.Z], () => (O.Z.darkSidebar ? T.BRd.DARK : void 0)),
        L = (0, o.e7)([P.ZP], () => (null != l ? P.ZP.getChannels(l.id).SELECTABLE : null), [l]),
        k = (0, o.cj)([C.Z], () => (null != l ? C.Z.getGuildPermissionProps(l) : A)),
        G = null == l ? void 0 : l.id,
        B = (0, o.e7)([C.Z], () => null != l && C.Z.canAccessGuildSettings(l));
    i.useEffect(() => {
        E || null == G || (0, d.aC)(G);
    }, [E, G]);
    let F = null != (e = null == l ? void 0 : l.hasFeature(T.oNc.COMMUNITY)) && e;
    i.useEffect(() => {
        null != G && F && ((0, b.eM)(G), (0, y.RM)(G));
    }, [G, F]),
        i.useEffect(() => {
            null != G && (0, g.cP)(G);
        }, [G]);
    let M = (0, o.e7)(
            [_.Z],
            () => {
                var e;
                return (null == l ? void 0 : l.id) != null && (null == (e = _.Z.getForGuild(l.id)) ? void 0 : e.isDirty) === !0;
            },
            [l]
        ),
        U = (0, o.e7)([v.Z], () => v.Z.getMemberCount(null == l ? void 0 : l.id), [l]);
    i.useEffect(() => {
        null != G && k.canManageGuild && f.Z.loadTemplatesForGuild(G);
    }, [G, k.canManageGuild]),
        i.useEffect(() => {
            B || w.Z.close();
        }, [B]);
    let W = (0, o.e7)([x.Z], () => x.Z.getCurrentPage()),
        V = (0, o.e7)([p.Z], () => null != G && p.Z.getEnabled(G)),
        K = (0, o.e7)([S.Z], () => null != G && S.Z.isEmpty(G)),
        q = (0, m.F)(G).length > 0,
        H = (0, I.Dj)({
            guildId: G,
            location: 'GuildSettings'
        });
    return (0, r.jsx)(u.Gt, {
        value: N,
        children: (0, r.jsx)(
            D,
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
                    guild: l,
                    section: a,
                    theme: Z,
                    sidebarTheme: R,
                    channels: L,
                    showDirtyGuildTemplateIndicator: M,
                    analyticsLocation: s,
                    memberCount: U
                },
                k
            )),
            (n = n =
                {
                    canUnlinkChannels: q,
                    canViewGuildAnalytics: k.canViewGuildAnalytics,
                    onboardingStep: W,
                    onboardingEnabled: V,
                    welcomeScreenEmpty: K,
                    guildMetadata: h,
                    isGuildSettingsFoundationEnabled: H
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
