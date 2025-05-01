t.r(n), t.d(n, { default: () => A });
var l = t(200651),
    i = t(192379),
    a = t(442837),
    o = t(37234),
    r = t(503089),
    c = t(100527),
    s = t(367907),
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
    j = t(650774),
    w = t(496675),
    E = t(434404),
    S = t(999382),
    P = t(359191),
    M = t(896007),
    x = t(978946),
    _ = t(981631),
    G = t(388032);
function N(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        t = arguments.length > 2 ? arguments[2] : void 0;
    s.ZP.trackWithMetadata(_.rMx.SETTINGS_PANE_VIEWED, {
        settings_type: 'guild',
        origin_pane: n,
        destination_pane: e,
        location: t
    });
}
let T = {
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
        N(this.props.section, null, this.props.analyticsLocation);
    }
    componentWillUnmount() {
        E.Z.close();
    }
    componentDidUpdate(e) {
        let { section: n } = e,
            { section: t, isGuildAdmin: l, canManageGuild: i, canManageRoles: a, canManageBans: r, canManageNicknames: c, canManageGuildExpressions: s, canViewAuditLog: d, canManageWebhooks: u, canUnlinkChannels: p, canAccessMembersPage: g, canViewGuildAnalytics: h } = this.props;
        t !== n && N(t, n), ((l || i || a || r || c || s || d || g || u || p) && (d || t !== _.pNK.AUDIT_LOG) && (a || t !== _.pNK.ROLES) && (s || t !== _.pNK.EMOJI) && (s || t !== _.pNK.STICKERS) && (s || t !== _.pNK.SOUNDBOARD) && (r || t !== _.pNK.BANS) && (h || t !== _.pNK.ANALYTICS) && (g || t !== _.pNK.MEMBERS)) || (0, o.xf)();
    }
    render() {
        var e, n;
        let { theme: t, sidebarTheme: i, section: a, guild: c, isGuildAdmin: s, canManageGuild: d, canViewAuditLog: u, canManageRoles: p, canManageGuildExpressions: g, canManageWebhooks: h, canUnlinkChannels: m, canManageBans: b, canAccessMembersPage: y, canViewGuildAnalytics: C, isOwner: v, isOwnerWithRequiredMfaLevel: O, showDirtyGuildTemplateIndicator: Z, memberCount: j, onboardingStep: w, onboardingEnabled: S, welcomeScreenEmpty: P, guildMetadata: _ } = this.props;
        if (null == c) return null;
        let N = (0, M.vE)({
                guild: c,
                isGuildAdmin: s,
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
                memberCount: j,
                onboardingStep: w,
                onboardingEnabled: S,
                welcomeScreenEmpty: P,
                guildMetadata: _,
                section: a
            }),
            T = (null == (n = N.find((e) => e.section === a)) || null == (e = n.predicate) ? void 0 : e.call(n)) !== !1,
            k = (0, x.r)();
        return (0, l.jsxs)('div', {
            children: [
                (0, l.jsx)(r.ZP, {
                    theme: t,
                    sidebarTheme: i,
                    section: T && null != a ? a : k,
                    onSetSection: E.Z.setSection,
                    onClose: o.xf,
                    title: '' !== c.toString() ? c.toString() : G.intl.string(G.t['154/bG']),
                    sections: N
                }),
                (0, l.jsx)(f.d, { guildId: c.id })
            ]
        });
    }
}
function A() {
    var e, n, t;
    let { guild: o, section: r, analyticsLocation: s, guildMetadata: f, isGuildMetadataLoaded: M } = (0, a.cj)([S.Z], () => S.Z.getProps()),
        { analyticsLocations: x } = (0, d.ZP)(c.Z.GUILD_SETTINGS),
        G = (0, a.e7)([C.Z], () => C.Z.theme),
        N = (0, a.e7)([C.Z], () => (C.Z.darkSidebar ? _.BRd.DARK : void 0)),
        A = (0, a.e7)([Z.ZP], () => (null != o ? Z.ZP.getChannels(o.id).SELECTABLE : null), [o]),
        B = (0, a.cj)([w.Z], () => (null != o ? w.Z.getGuildPermissionProps(o) : T)),
        I = null == o ? void 0 : o.id,
        R = (0, a.e7)([w.Z], () => null != o && w.Z.canAccessGuildSettings(o));
    i.useEffect(() => {
        M || null == I || (0, u.aC)(I);
    }, [M, I]);
    let D = null != (e = null == o ? void 0 : o.hasFeature(_.oNc.COMMUNITY)) && e;
    i.useEffect(() => {
        null != I && D && ((0, p.eM)(I), (0, v.RM)(I));
    }, [I, D]),
        i.useEffect(() => {
            null != I && (0, h.cP)(I);
        }, [I]);
    let F = (0, a.e7)(
            [b.Z],
            () => {
                var e;
                return (null == o ? void 0 : o.id) != null && (null == (e = b.Z.getForGuild(o.id)) ? void 0 : e.isDirty) === !0;
            },
            [o]
        ),
        K = (0, a.e7)([j.Z], () => j.Z.getMemberCount(null == o ? void 0 : o.id), [o]);
    i.useEffect(() => {
        null != I && B.canManageGuild && m.Z.loadTemplatesForGuild(I);
    }, [I, B.canManageGuild]),
        i.useEffect(() => {
            R || E.Z.close();
        }, [R]);
    let L = (0, a.e7)([P.Z], () => P.Z.getCurrentPage()),
        U = (0, a.e7)([g.Z], () => null != I && g.Z.getEnabled(I)),
        W = (0, a.e7)([O.Z], () => null != I && O.Z.isEmpty(I)),
        V = (0, y.F)(I).length > 0;
    return (0, l.jsx)(d.Gt, {
        value: x,
        children: (0, l.jsx)(
            k,
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
                    theme: G,
                    sidebarTheme: N,
                    channels: A,
                    showDirtyGuildTemplateIndicator: F,
                    analyticsLocation: s,
                    memberCount: K
                },
                B
            )),
            (t = t =
                {
                    canUnlinkChannels: V,
                    canViewGuildAnalytics: B.canViewGuildAnalytics,
                    onboardingStep: L,
                    onboardingEnabled: U,
                    welcomeScreenEmpty: W,
                    guildMetadata: f
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
