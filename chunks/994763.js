(a.r(t), a.d(t, { default: () => Z }));
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
    O = a(984802),
    C = a(210887),
    S = a(524329),
    I = a(995532),
    P = a(984933),
    v = a(650774),
    T = a(496675),
    w = a(434404),
    E = a(999382),
    A = a(359191),
    j = a(896007),
    D = a(978946),
    L = a(981631),
    R = a(388032);
function x(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        a = arguments.length > 2 ? arguments[2] : void 0;
    s.ZP.trackWithMetadata(L.rMx.SETTINGS_PANE_VIEWED, {
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
class N extends r.PureComponent {
    componentDidMount() {
        x(this.props.section, null, this.props.analyticsLocation);
    }
    componentWillUnmount() {
        w.Z.close();
    }
    componentDidUpdate(e) {
        let { section: t } = e,
            { section: a, isGuildAdmin: n, canManageGuild: r, canManageRoles: o, canManageBans: i, canManageNicknames: l, canManageGuildExpressions: s, canViewAuditLog: d, canManageWebhooks: u, canUnlinkChannels: p, canAccessMembersPage: g, canViewGuildAnalytics: m } = this.props;
        (a !== t && x(a, t), ((n || r || o || i || l || s || d || g || u || p) && (d || a !== L.pNK.AUDIT_LOG) && (o || a !== L.pNK.ROLES) && (s || a !== L.pNK.EMOJI) && (s || a !== L.pNK.STICKERS) && (s || a !== L.pNK.SOUNDBOARD) && (i || a !== L.pNK.BANS) && (m || a !== L.pNK.ANALYTICS) && (g || a !== L.pNK.MEMBERS)) || (0, c.xf)());
    }
    render() {
        var e, t;
        let { theme: a, sidebarTheme: r, section: o, guild: l, isGuildAdmin: s, canManageGuild: d, canViewAuditLog: u, canManageRoles: p, canManageGuildExpressions: g, canManageWebhooks: m, canUnlinkChannels: _, canManageBans: b, canAccessMembersPage: y, canViewGuildAnalytics: f, isOwner: O, isOwnerWithRequiredMfaLevel: C, showDirtyGuildTemplateIndicator: S, memberCount: I, onboardingStep: P, onboardingEnabled: v, welcomeScreenEmpty: T, guildMetadata: E, pinPermissionMigrationAvailable: A } = this.props;
        if (null == l) return null;
        let L = (0, j.vE)({
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
                onboardingStep: P,
                onboardingEnabled: v,
                welcomeScreenEmpty: T,
                guildMetadata: E,
                section: o,
                pinPermissionMigrationAvailable: A
            }),
            x = (null == (t = L.find((e) => e.section === o)) || null == (e = t.predicate) ? void 0 : e.call(t)) !== !1,
            M = (0, D.r)();
        return (0, n.jsxs)('div', {
            children: [
                (0, n.jsx)(i.ZP, {
                    theme: a,
                    sidebarTheme: r,
                    section: x && null != o ? o : M,
                    onSetSection: w.Z.setSection,
                    onClose: c.xf,
                    title: '' !== l.name ? l.name : R.intl.string(R.t['154/bG']),
                    sections: L
                }),
                (0, n.jsx)(h.d, { guildId: l.id })
            ]
        });
    }
}
function Z() {
    var e, t, a;
    let { guild: c, section: i, analyticsLocation: s, guildMetadata: h, isGuildMetadataLoaded: j } = (0, o.cj)([E.Z], () => E.Z.getProps()),
        { analyticsLocations: D } = (0, d.ZP)(l.Z.GUILD_SETTINGS),
        R = (0, o.e7)([C.Z], () => C.Z.theme),
        x = (0, O.Ll)(),
        Z = (0, o.e7)([P.ZP], () => (null != c ? P.ZP.getChannels(c.id).SELECTABLE : null), [c]),
        G = (0, o.cj)([T.Z], () => (null != c ? T.Z.getGuildPermissionProps(c) : M)),
        k = null == c ? void 0 : c.id,
        B = (0, o.e7)([T.Z], () => null != c && T.Z.canAccessGuildSettings(c));
    r.useEffect(() => {
        j || null == k || (0, u.aC)(k);
    }, [j, k]);
    let U = null != (e = null == c ? void 0 : c.features.has(L.oNc.COMMUNITY)) && e;
    (r.useEffect(() => {
        null != k && U && ((0, p.eM)(k), (0, S.RM)(k));
    }, [k, U]),
        r.useEffect(() => {
            null != k && (0, m.cP)(k);
        }, [k]));
    let F = (0, o.e7)(
            [b.Z],
            () => {
                var e;
                return (null == c ? void 0 : c.id) != null && (null == (e = b.Z.getForGuild(c.id)) ? void 0 : e.isDirty) === !0;
            },
            [c]
        ),
        H = (0, o.e7)([v.Z], () => v.Z.getMemberCount(null == c ? void 0 : c.id), [c]);
    (r.useEffect(() => {
        null != k && G.canManageGuild && _.Z.loadTemplatesForGuild(k);
    }, [k, G.canManageGuild]),
        r.useEffect(() => {
            B || w.Z.close();
        }, [B]));
    let V = (0, o.e7)([A.Z], () => A.Z.getCurrentPage()),
        Y = (0, o.e7)([g.Z], () => null != k && g.Z.getEnabled(k)),
        K = (0, o.e7)([I.Z], () => null != k && I.Z.isEmpty(k)),
        W = (0, y.F)(k).length > 0,
        q = (0, f.Y)(c);
    return (0, n.jsx)(d.Gt, {
        value: D,
        children: (0, n.jsx)(
            N,
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
                    channels: Z,
                    showDirtyGuildTemplateIndicator: F,
                    analyticsLocation: s,
                    memberCount: H
                },
                G
            )),
            (a = a =
                {
                    canUnlinkChannels: W,
                    canViewGuildAnalytics: G.canViewGuildAnalytics,
                    onboardingStep: V,
                    onboardingEnabled: Y,
                    welcomeScreenEmpty: K,
                    guildMetadata: h,
                    pinPermissionMigrationAvailable: q
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
