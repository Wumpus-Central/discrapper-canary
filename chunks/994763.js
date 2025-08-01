(a.r(t), a.d(t, { default: () => Z }));
var n = a(255367),
    r = a(73800),
    c = a(442837),
    o = a(37234),
    i = a(503089),
    l = a(100527),
    s = a(367907),
    d = a(906732),
    u = a(456268),
    p = a(745752),
    _ = a(45966),
    g = a(526120),
    m = a(751189),
    b = a(409059),
    h = a(918658),
    y = a(163400),
    f = a(190263),
    O = a(984802),
    C = a(210887),
    I = a(524329),
    S = a(995532),
    v = a(984933),
    P = a(650774),
    T = a(496675),
    w = a(434404),
    E = a(999382),
    A = a(359191),
    D = a(896007),
    j = a(978946),
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
            { section: a, isGuildAdmin: n, canManageGuild: r, canManageRoles: c, canManageBans: i, canManageNicknames: l, canManageGuildExpressions: s, canViewAuditLog: d, canManageWebhooks: u, canUnlinkChannels: p, canAccessMembersPage: _, canViewGuildAnalytics: g } = this.props;
        (a !== t && x(a, t), ((n || r || c || i || l || s || d || _ || u || p) && (d || a !== L.pNK.AUDIT_LOG) && (c || a !== L.pNK.ROLES) && (s || a !== L.pNK.EMOJI) && (s || a !== L.pNK.STICKERS) && (s || a !== L.pNK.SOUNDBOARD) && (i || a !== L.pNK.BANS) && (g || a !== L.pNK.ANALYTICS) && (_ || a !== L.pNK.MEMBERS)) || (0, o.xf)());
    }
    render() {
        var e, t;
        let { theme: a, sidebarTheme: r, section: c, guild: l, isGuildAdmin: s, canManageGuild: d, canViewAuditLog: u, canManageRoles: p, canManageGuildExpressions: _, canManageWebhooks: g, canUnlinkChannels: m, canManageBans: b, canAccessMembersPage: y, canViewGuildAnalytics: f, isOwner: O, isOwnerWithRequiredMfaLevel: C, showDirtyGuildTemplateIndicator: I, memberCount: S, onboardingStep: v, onboardingEnabled: P, welcomeScreenEmpty: T, guildMetadata: E, pinPermissionMigrationAvailable: A } = this.props;
        if (null == l) return null;
        let L = (0, D.vE)({
                guild: l,
                isGuildAdmin: s,
                canManageGuild: d,
                canViewAuditLog: u,
                canManageRoles: p,
                canManageGuildExpressions: _,
                canManageWebhooks: g,
                canUnlinkChannels: m,
                canManageBans: b,
                canAccessMembersPage: y,
                canViewGuildAnalytics: f,
                isOwner: O,
                isOwnerWithRequiredMfaLevel: C,
                showDirtyGuildTemplateIndicator: I,
                memberCount: S,
                onboardingStep: v,
                onboardingEnabled: P,
                welcomeScreenEmpty: T,
                guildMetadata: E,
                section: c,
                pinPermissionMigrationAvailable: A
            }),
            x = (null == (t = L.find((e) => e.section === c)) || null == (e = t.predicate) ? void 0 : e.call(t)) !== !1,
            M = (0, j.r)();
        return (0, n.jsxs)('div', {
            children: [
                (0, n.jsx)(i.ZP, {
                    theme: a,
                    sidebarTheme: r,
                    section: x && null != c ? c : M,
                    onSetSection: w.Z.setSection,
                    onClose: o.xf,
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
    let { guild: o, section: i, analyticsLocation: s, guildMetadata: h, isGuildMetadataLoaded: D } = (0, c.cj)([E.Z], () => E.Z.getProps()),
        { analyticsLocations: j } = (0, d.ZP)(l.Z.GUILD_SETTINGS),
        R = (0, c.e7)([C.Z], () => C.Z.theme),
        x = (0, O.Ll)(),
        Z = (0, c.e7)([v.ZP], () => (null != o ? v.ZP.getChannels(o.id).SELECTABLE : null), [o]),
        G = (0, c.cj)([T.Z], () => (null != o ? T.Z.getGuildPermissionProps(o) : M)),
        B = null == o ? void 0 : o.id,
        k = (0, c.e7)([T.Z], () => null != o && T.Z.canAccessGuildSettings(o));
    r.useEffect(() => {
        D || null == B || (0, u.aC)(B);
    }, [D, B]);
    let U = null != (e = null == o ? void 0 : o.features.has(L.oNc.COMMUNITY)) && e;
    (r.useEffect(() => {
        null != B && U && ((0, p.eM)(B), (0, I.RM)(B));
    }, [B, U]),
        r.useEffect(() => {
            null != B && (0, g.cP)(B);
        }, [B]));
    let F = (0, c.e7)(
            [b.Z],
            () => {
                var e;
                return (null == o ? void 0 : o.id) != null && (null == (e = b.Z.getForGuild(o.id)) ? void 0 : e.isDirty) === !0;
            },
            [o]
        ),
        H = (0, c.e7)([P.Z], () => P.Z.getMemberCount(null == o ? void 0 : o.id), [o]);
    (r.useEffect(() => {
        null != B && G.canManageGuild && m.Z.loadTemplatesForGuild(B);
    }, [B, G.canManageGuild]),
        r.useEffect(() => {
            k || w.Z.close();
        }, [k]));
    let V = (0, c.e7)([A.Z], () => A.Z.getCurrentPage()),
        W = (0, c.e7)([_.Z], () => null != B && _.Z.getEnabled(B)),
        Y = (0, c.e7)([S.Z], () => null != B && S.Z.isEmpty(B)),
        q = (0, y.F)(B).length > 0,
        K = (0, f.o)(o);
    return (0, n.jsx)(d.Gt, {
        value: j,
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
                    guild: o,
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
                    canUnlinkChannels: q,
                    canViewGuildAnalytics: G.canViewGuildAnalytics,
                    onboardingStep: V,
                    onboardingEnabled: W,
                    welcomeScreenEmpty: Y,
                    guildMetadata: h,
                    pinPermissionMigrationAvailable: K
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
