(t.r(n), t.d(n, { default: () => B }));
var i = t(255367),
    l = t(73800),
    a = t(442837),
    o = t(37234),
    r = t(503089),
    s = t(100527),
    c = t(367907),
    d = t(906732),
    u = t(456268),
    p = t(745752),
    g = t(45966),
    m = t(526120),
    h = t(751189),
    b = t(409059),
    f = t(918658),
    y = t(163400),
    v = t(190263),
    C = t(210887),
    O = t(524329),
    Z = t(995532),
    j = t(984933),
    w = t(650774),
    E = t(496675),
    P = t(434404),
    M = t(999382),
    S = t(359191),
    x = t(896007),
    _ = t(978946),
    G = t(981631),
    N = t(388032);
function A(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        t = arguments.length > 2 ? arguments[2] : void 0;
    c.ZP.trackWithMetadata(G.rMx.SETTINGS_PANE_VIEWED, {
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
class k extends l.PureComponent {
    componentDidMount() {
        A(this.props.section, null, this.props.analyticsLocation);
    }
    componentWillUnmount() {
        P.Z.close();
    }
    componentDidUpdate(e) {
        let { section: n } = e,
            { section: t, isGuildAdmin: i, canManageGuild: l, canManageRoles: a, canManageBans: r, canManageNicknames: s, canManageGuildExpressions: c, canViewAuditLog: d, canManageWebhooks: u, canUnlinkChannels: p, canAccessMembersPage: g, canViewGuildAnalytics: m } = this.props;
        (t !== n && A(t, n), ((i || l || a || r || s || c || d || g || u || p) && (d || t !== G.pNK.AUDIT_LOG) && (a || t !== G.pNK.ROLES) && (c || t !== G.pNK.EMOJI) && (c || t !== G.pNK.STICKERS) && (c || t !== G.pNK.SOUNDBOARD) && (r || t !== G.pNK.BANS) && (m || t !== G.pNK.ANALYTICS) && (g || t !== G.pNK.MEMBERS)) || (0, o.xf)());
    }
    render() {
        var e, n;
        let { theme: t, sidebarTheme: l, section: a, guild: s, isGuildAdmin: c, canManageGuild: d, canViewAuditLog: u, canManageRoles: p, canManageGuildExpressions: g, canManageWebhooks: m, canUnlinkChannels: h, canManageBans: b, canAccessMembersPage: y, canViewGuildAnalytics: v, isOwner: C, isOwnerWithRequiredMfaLevel: O, showDirtyGuildTemplateIndicator: Z, memberCount: j, onboardingStep: w, onboardingEnabled: E, welcomeScreenEmpty: M, guildMetadata: S, pinPermissionMigrationAvailable: G } = this.props;
        if (null == s) return null;
        let A = (0, x.vE)({
                guild: s,
                isGuildAdmin: c,
                canManageGuild: d,
                canViewAuditLog: u,
                canManageRoles: p,
                canManageGuildExpressions: g,
                canManageWebhooks: m,
                canUnlinkChannels: h,
                canManageBans: b,
                canAccessMembersPage: y,
                canViewGuildAnalytics: v,
                isOwner: C,
                isOwnerWithRequiredMfaLevel: O,
                showDirtyGuildTemplateIndicator: Z,
                memberCount: j,
                onboardingStep: w,
                onboardingEnabled: E,
                welcomeScreenEmpty: M,
                guildMetadata: S,
                section: a,
                pinPermissionMigrationAvailable: G
            }),
            T = (null == (n = A.find((e) => e.section === a)) || null == (e = n.predicate) ? void 0 : e.call(n)) !== !1,
            k = (0, _.r)();
        return (0, i.jsxs)('div', {
            children: [
                (0, i.jsx)(r.ZP, {
                    theme: t,
                    sidebarTheme: l,
                    section: T && null != a ? a : k,
                    onSetSection: P.Z.setSection,
                    onClose: o.xf,
                    title: '' !== s.name ? s.name : N.intl.string(N.t['154/bG']),
                    sections: A
                }),
                (0, i.jsx)(f.d, { guildId: s.id })
            ]
        });
    }
}
function B() {
    var e, n, t;
    let { guild: o, section: r, analyticsLocation: c, guildMetadata: f, isGuildMetadataLoaded: x } = (0, a.cj)([M.Z], () => M.Z.getProps()),
        { analyticsLocations: _ } = (0, d.ZP)(s.Z.GUILD_SETTINGS),
        N = (0, a.e7)([C.Z], () => C.Z.theme),
        A = (0, a.e7)([C.Z], () => (C.Z.darkSidebar ? G.BRd.DARK : void 0)),
        B = (0, a.e7)([j.ZP], () => (null != o ? j.ZP.getChannels(o.id).SELECTABLE : null), [o]),
        I = (0, a.cj)([E.Z], () => (null != o ? E.Z.getGuildPermissionProps(o) : T)),
        R = null == o ? void 0 : o.id,
        D = (0, a.e7)([E.Z], () => null != o && E.Z.canAccessGuildSettings(o));
    l.useEffect(() => {
        x || null == R || (0, u.aC)(R);
    }, [x, R]);
    let F = null != (e = null == o ? void 0 : o.features.has(G.oNc.COMMUNITY)) && e;
    (l.useEffect(() => {
        null != R && F && ((0, p.eM)(R), (0, O.RM)(R));
    }, [R, F]),
        l.useEffect(() => {
            null != R && (0, m.cP)(R);
        }, [R]));
    let K = (0, a.e7)(
            [b.Z],
            () => {
                var e;
                return (null == o ? void 0 : o.id) != null && (null == (e = b.Z.getForGuild(o.id)) ? void 0 : e.isDirty) === !0;
            },
            [o]
        ),
        L = (0, a.e7)([w.Z], () => w.Z.getMemberCount(null == o ? void 0 : o.id), [o]);
    (l.useEffect(() => {
        null != R && I.canManageGuild && h.Z.loadTemplatesForGuild(R);
    }, [R, I.canManageGuild]),
        l.useEffect(() => {
            D || P.Z.close();
        }, [D]));
    let U = (0, a.e7)([S.Z], () => S.Z.getCurrentPage()),
        W = (0, a.e7)([g.Z], () => null != R && g.Z.getEnabled(R)),
        V = (0, a.e7)([Z.Z], () => null != R && Z.Z.isEmpty(R)),
        Y = (0, y.F)(R).length > 0,
        q = (0, v.Y)(o);
    return (0, i.jsx)(d.Gt, {
        value: _,
        children: (0, i.jsx)(
            k,
            ((n = (function (e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {},
                        i = Object.keys(t);
                    ('function' == typeof Object.getOwnPropertySymbols &&
                        (i = i.concat(
                            Object.getOwnPropertySymbols(t).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(t, e).enumerable;
                            })
                        )),
                        i.forEach(function (n) {
                            var i;
                            ((i = t[n]),
                                n in e
                                    ? Object.defineProperty(e, n, {
                                          value: i,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0
                                      })
                                    : (e[n] = i));
                        }));
                }
                return e;
            })(
                {
                    guild: o,
                    section: r,
                    theme: N,
                    sidebarTheme: A,
                    channels: B,
                    showDirtyGuildTemplateIndicator: K,
                    analyticsLocation: c,
                    memberCount: L
                },
                I
            )),
            (t = t =
                {
                    canUnlinkChannels: Y,
                    canViewGuildAnalytics: I.canViewGuildAnalytics,
                    onboardingStep: U,
                    onboardingEnabled: W,
                    welcomeScreenEmpty: V,
                    guildMetadata: f,
                    pinPermissionMigrationAvailable: q
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
