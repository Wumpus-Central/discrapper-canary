(a.r(t), a.d(t, { default: () => N }));
var n = a(255367),
    r = a(73800),
    o = a(442837),
    c = a(37234),
    i = a(503089),
    l = a(100527),
    s = a(367907),
    d = a(906732),
    u = a(456268),
    p = a(745752),
    g = a(45966),
    m = a(526120),
    _ = a(751189),
    b = a(409059),
    h = a(918658),
    y = a(163400),
    f = a(190263),
    O = a(210887),
    C = a(524329),
    S = a(995532),
    I = a(984933),
    v = a(650774),
    P = a(496675),
    T = a(434404),
    w = a(999382),
    E = a(359191),
    A = a(896007),
    D = a(978946),
    j = a(981631),
    R = a(388032);
function x(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        a = arguments.length > 2 ? arguments[2] : void 0;
    s.ZP.trackWithMetadata(j.rMx.SETTINGS_PANE_VIEWED, {
        settings_type: 'guild',
        origin_pane: t,
        destination_pane: e,
        location: a
    });
}
let M = {
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
class L extends r.PureComponent {
    componentDidMount() {
        x(this.props.section, null, this.props.analyticsLocation);
    }
    componentWillUnmount() {
        T.Z.close();
    }
    componentDidUpdate(e) {
        let { section: t } = e,
            { section: a, isGuildAdmin: n, canManageGuild: r, canManageRoles: o, canManageBans: i, canManageNicknames: l, canManageGuildExpressions: s, canViewAuditLog: d, canManageWebhooks: u, canUnlinkChannels: p, canAccessMembersPage: g, canViewGuildAnalytics: m } = this.props;
        (a !== t && x(a, t), ((n || r || o || i || l || s || d || g || u || p) && (d || a !== j.pNK.AUDIT_LOG) && (o || a !== j.pNK.ROLES) && (s || a !== j.pNK.EMOJI) && (s || a !== j.pNK.STICKERS) && (s || a !== j.pNK.SOUNDBOARD) && (i || a !== j.pNK.BANS) && (m || a !== j.pNK.ANALYTICS) && (g || a !== j.pNK.MEMBERS)) || (0, c.xf)());
    }
    render() {
        var e, t;
        let { theme: a, sidebarTheme: r, section: o, guild: l, isGuildAdmin: s, canManageGuild: d, canViewAuditLog: u, canManageRoles: p, canManageGuildExpressions: g, canManageWebhooks: m, canUnlinkChannels: _, canManageBans: b, canAccessMembersPage: y, canViewGuildAnalytics: f, isOwner: O, isOwnerWithRequiredMfaLevel: C, showDirtyGuildTemplateIndicator: S, memberCount: I, onboardingStep: v, onboardingEnabled: P, welcomeScreenEmpty: w, guildMetadata: E, pinPermissionMigrationAvailable: j } = this.props;
        if (null == l) return null;
        let x = (0, A.vE)({
                guild: l,
                isGuildAdmin: s,
                canManageGuild: d,
                canViewAuditLog: u,
                canManageRoles: p,
                canManageGuildExpressions: g,
                canManageWebhooks: m,
                canUnlinkChannels: _,
                canManageBans: b,
                canAccessMembersPage: y,
                canViewGuildAnalytics: f,
                isOwner: O,
                isOwnerWithRequiredMfaLevel: C,
                showDirtyGuildTemplateIndicator: S,
                memberCount: I,
                onboardingStep: v,
                onboardingEnabled: P,
                welcomeScreenEmpty: w,
                guildMetadata: E,
                section: o,
                pinPermissionMigrationAvailable: j
            }),
            M = (null == (t = x.find((e) => e.section === o)) || null == (e = t.predicate) ? void 0 : e.call(t)) !== !1,
            L = (0, D.r)();
        return (0, n.jsxs)('div', {
            children: [
                (0, n.jsx)(i.ZP, {
                    theme: a,
                    sidebarTheme: r,
                    section: M && null != o ? o : L,
                    onSetSection: T.Z.setSection,
                    onClose: c.xf,
                    title: '' !== l.name ? l.name : R.intl.string(R.t['154/bG']),
                    sections: x
                }),
                (0, n.jsx)(h.d, { guildId: l.id })
            ]
        });
    }
}
function N() {
    var e, t, a;
    let { guild: c, section: i, analyticsLocation: s, guildMetadata: h, isGuildMetadataLoaded: A } = (0, o.cj)([w.Z], () => w.Z.getProps()),
        { analyticsLocations: D } = (0, d.ZP)(l.Z.GUILD_SETTINGS),
        R = (0, o.e7)([O.Z], () => O.Z.theme),
        x = (0, o.e7)([O.Z], () => (O.Z.darkSidebar ? j.BRd.DARK : void 0)),
        N = (0, o.e7)([I.ZP], () => (null != c ? I.ZP.getChannels(c.id).SELECTABLE : null), [c]),
        Z = (0, o.cj)([P.Z], () => (null != c ? P.Z.getGuildPermissionProps(c) : M)),
        G = null == c ? void 0 : c.id,
        k = (0, o.e7)([P.Z], () => null != c && P.Z.canAccessGuildSettings(c));
    r.useEffect(() => {
        A || null == G || (0, u.aC)(G);
    }, [A, G]);
    let B = null != (e = null == c ? void 0 : c.features.has(j.oNc.COMMUNITY)) && e;
    (r.useEffect(() => {
        null != G && B && ((0, p.eM)(G), (0, C.RM)(G));
    }, [G, B]),
        r.useEffect(() => {
            null != G && (0, m.cP)(G);
        }, [G]));
    let U = (0, o.e7)(
            [b.Z],
            () => {
                var e;
                return (null == c ? void 0 : c.id) != null && (null == (e = b.Z.getForGuild(c.id)) ? void 0 : e.isDirty) === !0;
            },
            [c]
        ),
        F = (0, o.e7)([v.Z], () => v.Z.getMemberCount(null == c ? void 0 : c.id), [c]);
    (r.useEffect(() => {
        null != G && Z.canManageGuild && _.Z.loadTemplatesForGuild(G);
    }, [G, Z.canManageGuild]),
        r.useEffect(() => {
            k || T.Z.close();
        }, [k]));
    let H = (0, o.e7)([E.Z], () => E.Z.getCurrentPage()),
        V = (0, o.e7)([g.Z], () => null != G && g.Z.getEnabled(G)),
        K = (0, o.e7)([S.Z], () => null != G && S.Z.isEmpty(G)),
        Y = (0, y.F)(G).length > 0,
        W = (0, f.Y)(c);
    return (0, n.jsx)(d.Gt, {
        value: D,
        children: (0, n.jsx)(
            L,
            ((t = (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var a = null != arguments[t] ? arguments[t] : {},
                        n = Object.keys(a);
                    ('function' == typeof Object.getOwnPropertySymbols &&
                        (n = n.concat(
                            Object.getOwnPropertySymbols(a).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(a, e).enumerable;
                            })
                        )),
                        n.forEach(function (t) {
                            var n;
                            ((n = a[t]),
                                t in e
                                    ? Object.defineProperty(e, t, {
                                          value: n,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0
                                      })
                                    : (e[t] = n));
                        }));
                }
                return e;
            })(
                {
                    guild: c,
                    section: i,
                    theme: R,
                    sidebarTheme: x,
                    channels: N,
                    showDirtyGuildTemplateIndicator: U,
                    analyticsLocation: s,
                    memberCount: F
                },
                Z
            )),
            (a = a =
                {
                    canUnlinkChannels: Y,
                    canViewGuildAnalytics: Z.canViewGuildAnalytics,
                    onboardingStep: H,
                    onboardingEnabled: V,
                    welcomeScreenEmpty: K,
                    guildMetadata: h,
                    pinPermissionMigrationAvailable: W
                }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a))
                : (function (e, t) {
                      var a = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                          var n = Object.getOwnPropertySymbols(e);
                          a.push.apply(a, n);
                      }
                      return a;
                  })(Object(a)).forEach(function (e) {
                      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(a, e));
                  }),
            t)
        )
    });
}
