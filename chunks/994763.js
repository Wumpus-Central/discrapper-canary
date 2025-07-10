(a.r(t), a.d(t, { default: () => M }));
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
    f = a(210887),
    O = a(524329),
    C = a(995532),
    S = a(984933),
    I = a(650774),
    v = a(496675),
    P = a(434404),
    T = a(999382),
    w = a(359191),
    E = a(896007),
    A = a(978946),
    D = a(981631),
    j = a(388032);
function R(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        a = arguments.length > 2 ? arguments[2] : void 0;
    s.ZP.trackWithMetadata(D.rMx.SETTINGS_PANE_VIEWED, {
        settings_type: 'guild',
        origin_pane: t,
        destination_pane: e,
        location: a
    });
}
let x = {
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
        R(this.props.section, null, this.props.analyticsLocation);
    }
    componentWillUnmount() {
        P.Z.close();
    }
    componentDidUpdate(e) {
        let { section: t } = e,
            { section: a, isGuildAdmin: n, canManageGuild: r, canManageRoles: o, canManageBans: i, canManageNicknames: l, canManageGuildExpressions: s, canViewAuditLog: d, canManageWebhooks: u, canUnlinkChannels: p, canAccessMembersPage: g, canViewGuildAnalytics: m } = this.props;
        (a !== t && R(a, t), ((n || r || o || i || l || s || d || g || u || p) && (d || a !== D.pNK.AUDIT_LOG) && (o || a !== D.pNK.ROLES) && (s || a !== D.pNK.EMOJI) && (s || a !== D.pNK.STICKERS) && (s || a !== D.pNK.SOUNDBOARD) && (i || a !== D.pNK.BANS) && (m || a !== D.pNK.ANALYTICS) && (g || a !== D.pNK.MEMBERS)) || (0, c.xf)());
    }
    render() {
        var e, t;
        let { theme: a, sidebarTheme: r, section: o, guild: l, isGuildAdmin: s, canManageGuild: d, canViewAuditLog: u, canManageRoles: p, canManageGuildExpressions: g, canManageWebhooks: m, canUnlinkChannels: _, canManageBans: b, canAccessMembersPage: y, canViewGuildAnalytics: f, isOwner: O, isOwnerWithRequiredMfaLevel: C, showDirtyGuildTemplateIndicator: S, memberCount: I, onboardingStep: v, onboardingEnabled: T, welcomeScreenEmpty: w, guildMetadata: D } = this.props;
        if (null == l) return null;
        let R = (0, E.vE)({
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
                onboardingEnabled: T,
                welcomeScreenEmpty: w,
                guildMetadata: D,
                section: o
            }),
            x = (null == (t = R.find((e) => e.section === o)) || null == (e = t.predicate) ? void 0 : e.call(t)) !== !1,
            L = (0, A.r)();
        return (0, n.jsxs)('div', {
            children: [
                (0, n.jsx)(i.ZP, {
                    theme: a,
                    sidebarTheme: r,
                    section: x && null != o ? o : L,
                    onSetSection: P.Z.setSection,
                    onClose: c.xf,
                    title: '' !== l.name ? l.name : j.intl.string(j.t['154/bG']),
                    sections: R
                }),
                (0, n.jsx)(h.d, { guildId: l.id })
            ]
        });
    }
}
function M() {
    var e, t, a;
    let { guild: c, section: i, analyticsLocation: s, guildMetadata: h, isGuildMetadataLoaded: E } = (0, o.cj)([T.Z], () => T.Z.getProps()),
        { analyticsLocations: A } = (0, d.ZP)(l.Z.GUILD_SETTINGS),
        j = (0, o.e7)([f.Z], () => f.Z.theme),
        R = (0, o.e7)([f.Z], () => (f.Z.darkSidebar ? D.BRd.DARK : void 0)),
        M = (0, o.e7)([S.ZP], () => (null != c ? S.ZP.getChannels(c.id).SELECTABLE : null), [c]),
        N = (0, o.cj)([v.Z], () => (null != c ? v.Z.getGuildPermissionProps(c) : x)),
        Z = null == c ? void 0 : c.id,
        G = (0, o.e7)([v.Z], () => null != c && v.Z.canAccessGuildSettings(c));
    r.useEffect(() => {
        E || null == Z || (0, u.aC)(Z);
    }, [E, Z]);
    let k = null != (e = null == c ? void 0 : c.features.has(D.oNc.COMMUNITY)) && e;
    (r.useEffect(() => {
        null != Z && k && ((0, p.eM)(Z), (0, O.RM)(Z));
    }, [Z, k]),
        r.useEffect(() => {
            null != Z && (0, m.cP)(Z);
        }, [Z]));
    let B = (0, o.e7)(
            [b.Z],
            () => {
                var e;
                return (null == c ? void 0 : c.id) != null && (null == (e = b.Z.getForGuild(c.id)) ? void 0 : e.isDirty) === !0;
            },
            [c]
        ),
        U = (0, o.e7)([I.Z], () => I.Z.getMemberCount(null == c ? void 0 : c.id), [c]);
    (r.useEffect(() => {
        null != Z && N.canManageGuild && _.Z.loadTemplatesForGuild(Z);
    }, [Z, N.canManageGuild]),
        r.useEffect(() => {
            G || P.Z.close();
        }, [G]));
    let F = (0, o.e7)([w.Z], () => w.Z.getCurrentPage()),
        H = (0, o.e7)([g.Z], () => null != Z && g.Z.getEnabled(Z)),
        V = (0, o.e7)([C.Z], () => null != Z && C.Z.isEmpty(Z)),
        K = (0, y.F)(Z).length > 0;
    return (0, n.jsx)(d.Gt, {
        value: A,
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
                    theme: j,
                    sidebarTheme: R,
                    channels: M,
                    showDirtyGuildTemplateIndicator: B,
                    analyticsLocation: s,
                    memberCount: U
                },
                N
            )),
            (a = a =
                {
                    canUnlinkChannels: K,
                    canViewGuildAnalytics: N.canViewGuildAnalytics,
                    onboardingStep: F,
                    onboardingEnabled: H,
                    welcomeScreenEmpty: V,
                    guildMetadata: h
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
