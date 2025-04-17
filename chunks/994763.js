t.r(n), t.d(n, { default: () => B });
var i = t(200651),
    l = t(192379),
    a = t(442837),
    o = t(37234),
    r = t(503089),
    s = t(100527),
    c = t(367907),
    d = t(906732),
    u = t(456268),
    p = t(745752),
    g = t(45966),
    h = t(526120),
    m = t(751189),
    b = t(409059),
    f = t(918658),
    y = t(163400),
    C = t(210887),
    v = t(524329),
    O = t(995532),
    Z = t(984933),
    S = t(650774),
    j = t(496675),
    E = t(434404),
    w = t(600553),
    P = t(999382),
    M = t(359191),
    x = t(896007),
    G = t(978946),
    N = t(981631),
    _ = t(388032);
function T(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        t = arguments.length > 2 ? arguments[2] : void 0;
    c.ZP.trackWithMetadata(N.rMx.SETTINGS_PANE_VIEWED, {
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
class A extends l.PureComponent {
    componentDidMount() {
        T(this.props.section, null, this.props.analyticsLocation);
    }
    componentWillUnmount() {
        E.Z.close();
    }
    componentDidUpdate(e) {
        let { section: n } = e,
            { section: t, isGuildAdmin: i, canManageGuild: l, canManageRoles: a, canManageBans: r, canManageNicknames: s, canManageGuildExpressions: c, canViewAuditLog: d, canManageWebhooks: u, canUnlinkChannels: p, canAccessMembersPage: g, canViewGuildAnalytics: h } = this.props;
        t !== n && T(t, n), ((i || l || a || r || s || c || d || g || u || p) && (d || t !== N.pNK.AUDIT_LOG) && (a || t !== N.pNK.ROLES) && (c || t !== N.pNK.EMOJI) && (c || t !== N.pNK.STICKERS) && (c || t !== N.pNK.SOUNDBOARD) && (r || t !== N.pNK.BANS) && (h || t !== N.pNK.ANALYTICS) && (g || t !== N.pNK.MEMBERS)) || (0, o.xf)();
    }
    render() {
        var e, n;
        let { theme: t, sidebarTheme: l, section: a, guild: s, isGuildAdmin: c, canManageGuild: d, canViewAuditLog: u, canManageRoles: p, canManageGuildExpressions: g, canManageWebhooks: h, canUnlinkChannels: m, canManageBans: b, canAccessMembersPage: y, canViewGuildAnalytics: C, isOwner: v, isOwnerWithRequiredMfaLevel: O, showDirtyGuildTemplateIndicator: Z, memberCount: S, onboardingStep: j, onboardingEnabled: w, welcomeScreenEmpty: P, guildMetadata: M, isGuildSettingsFoundationEnabled: N } = this.props;
        if (null == s) return null;
        let T = (0, x.vE)({
                guild: s,
                isGuildAdmin: c,
                canManageGuild: d,
                canViewAuditLog: u,
                canManageRoles: p,
                canManageGuildExpressions: g,
                canManageWebhooks: h,
                canUnlinkChannels: m,
                canManageBans: b,
                canAccessMembersPage: y,
                canViewGuildAnalytics: C,
                isOwner: v,
                isOwnerWithRequiredMfaLevel: O,
                showDirtyGuildTemplateIndicator: Z,
                memberCount: S,
                onboardingStep: j,
                onboardingEnabled: w,
                welcomeScreenEmpty: P,
                guildMetadata: M,
                section: a,
                isGuildSettingsFoundationEnabled: N
            }),
            k = (null == (n = T.find((e) => e.section === a)) || null == (e = n.predicate) ? void 0 : e.call(n)) !== !1,
            A = (0, G.r)(s.id);
        return (0, i.jsxs)('div', {
            children: [
                (0, i.jsx)(r.ZP, {
                    theme: t,
                    sidebarTheme: l,
                    section: k && null != a ? a : A,
                    onSetSection: E.Z.setSection,
                    onClose: o.xf,
                    title: '' !== s.toString() ? s.toString() : _.NW.string(_.t['154/bG']),
                    sections: T
                }),
                (0, i.jsx)(f.d, { guildId: s.id })
            ]
        });
    }
}
function B() {
    var e, n, t;
    let { guild: o, section: r, analyticsLocation: c, guildMetadata: f, isGuildMetadataLoaded: x } = (0, a.cj)([P.Z], () => P.Z.getProps()),
        { analyticsLocations: G } = (0, d.ZP)(s.Z.GUILD_SETTINGS),
        _ = (0, a.e7)([C.Z], () => C.Z.theme),
        T = (0, a.e7)([C.Z], () => (C.Z.darkSidebar ? N.BRd.DARK : void 0)),
        B = (0, a.e7)([Z.ZP], () => (null != o ? Z.ZP.getChannels(o.id).SELECTABLE : null), [o]),
        D = (0, a.cj)([j.Z], () => (null != o ? j.Z.getGuildPermissionProps(o) : k)),
        I = null == o ? void 0 : o.id,
        R = (0, a.e7)([j.Z], () => null != o && j.Z.canAccessGuildSettings(o));
    l.useEffect(() => {
        x || null == I || (0, u.aC)(I);
    }, [x, I]);
    let F = null != (e = null == o ? void 0 : o.hasFeature(N.oNc.COMMUNITY)) && e;
    l.useEffect(() => {
        null != I && F && ((0, p.eM)(I), (0, v.RM)(I));
    }, [I, F]),
        l.useEffect(() => {
            null != I && (0, h.cP)(I);
        }, [I]);
    let K = (0, a.e7)(
            [b.Z],
            () => {
                var e;
                return (null == o ? void 0 : o.id) != null && (null == (e = b.Z.getForGuild(o.id)) ? void 0 : e.isDirty) === !0;
            },
            [o]
        ),
        L = (0, a.e7)([S.Z], () => S.Z.getMemberCount(null == o ? void 0 : o.id), [o]);
    l.useEffect(() => {
        null != I && D.canManageGuild && m.Z.loadTemplatesForGuild(I);
    }, [I, D.canManageGuild]),
        l.useEffect(() => {
            R || E.Z.close();
        }, [R]);
    let W = (0, a.e7)([M.Z], () => M.Z.getCurrentPage()),
        U = (0, a.e7)([g.Z], () => null != I && g.Z.getEnabled(I)),
        V = (0, a.e7)([O.Z], () => null != I && O.Z.isEmpty(I)),
        q = (0, y.F)(I).length > 0,
        Y = (0, w.Dj)({
            guildId: I,
            location: 'GuildSettings'
        });
    return (0, i.jsx)(d.Gt, {
        value: G,
        children: (0, i.jsx)(
            A,
            ((n = (function (e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {},
                        i = Object.keys(t);
                    'function' == typeof Object.getOwnPropertySymbols &&
                        (i = i.concat(
                            Object.getOwnPropertySymbols(t).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(t, e).enumerable;
                            })
                        )),
                        i.forEach(function (n) {
                            var i;
                            (i = t[n]),
                                n in e
                                    ? Object.defineProperty(e, n, {
                                          value: i,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0
                                      })
                                    : (e[n] = i);
                        });
                }
                return e;
            })(
                {
                    guild: o,
                    section: r,
                    theme: _,
                    sidebarTheme: T,
                    channels: B,
                    showDirtyGuildTemplateIndicator: K,
                    analyticsLocation: c,
                    memberCount: L
                },
                D
            )),
            (t = t =
                {
                    canUnlinkChannels: q,
                    canViewGuildAnalytics: D.canViewGuildAnalytics,
                    onboardingStep: W,
                    onboardingEnabled: U,
                    welcomeScreenEmpty: V,
                    guildMetadata: f,
                    isGuildSettingsFoundationEnabled: Y
                }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t))
                : (function (e, n) {
                      var t = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                          var i = Object.getOwnPropertySymbols(e);
                          t.push.apply(t, i);
                      }
                      return t;
                  })(Object(t)).forEach(function (e) {
                      Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(t, e));
                  }),
            n)
        )
    });
}
