t.r(n), t.d(n, { default: () => A });
var r = t(54381),
    i = t(473749),
    a = t(442837),
    o = t(37234),
    c = t(503089),
    s = t(100527),
    l = t(367907),
    u = t(906732),
    d = t(456268),
    h = t(745752),
    g = t(45966),
    f = t(526120),
    p = t(751189),
    v = t(409059),
    _ = t(918658),
    b = t(163400),
    y = t(194201),
    I = t(984802),
    m = t(210887),
    S = t(524329),
    O = t(995532),
    w = t(984933),
    C = t(650774),
    P = t(496675),
    k = t(434404),
    D = t(999382),
    M = t(359191),
    T = t(896007),
    E = t(978946),
    N = t(981631),
    R = t(388032);
function j(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        t = arguments.length > 2 ? arguments[2] : void 0;
    l.ZP.trackWithMetadata(N.rMx.SETTINGS_PANE_VIEWED, {
        settings_type: "guild",
        origin_pane: n,
        destination_pane: e,
        location: t,
    });
}
let G = {
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
    isGuildAdmin: !1,
};
class x extends i.PureComponent {
    componentDidMount() {
        j(this.props.section, null, this.props.analyticsLocation);
    }
    componentWillUnmount() {
        k.Z.close();
    }
    componentDidUpdate(e) {
        let { section: n } = e,
            {
                section: t,
                isGuildAdmin: r,
                canManageGuild: i,
                canManageRoles: a,
                canManageBans: c,
                canManageNicknames: s,
                canManageGuildExpressions: l,
                canViewAuditLog: u,
                canManageWebhooks: d,
                canUnlinkChannels: h,
                canAccessMembersPage: g,
                canViewGuildAnalytics: f,
            } = this.props;
        t !== n && j(t, n),
            ((r || i || a || c || s || l || u || g || d || h) &&
                (u || t !== N.pNK.AUDIT_LOG) &&
                (a || t !== N.pNK.ROLES) &&
                (l || t !== N.pNK.EMOJI) &&
                (l || t !== N.pNK.STICKERS) &&
                (l || t !== N.pNK.SOUNDBOARD) &&
                (c || t !== N.pNK.BANS) &&
                (f || t !== N.pNK.ANALYTICS) &&
                (g || t !== N.pNK.MEMBERS)) ||
                (0, o.xf)();
    }
    render() {
        var e, n;
        let {
            theme: t,
            sidebarTheme: i,
            section: a,
            guild: s,
            isGuildAdmin: l,
            canManageGuild: u,
            canViewAuditLog: d,
            canManageRoles: h,
            canManageGuildExpressions: g,
            canManageWebhooks: f,
            canUnlinkChannels: p,
            canManageBans: v,
            canAccessMembersPage: b,
            canViewGuildAnalytics: y,
            isOwner: I,
            isOwnerWithRequiredMfaLevel: m,
            showDirtyGuildTemplateIndicator: S,
            memberCount: O,
            onboardingStep: w,
            onboardingEnabled: C,
            welcomeScreenEmpty: P,
            guildMetadata: D,
            permissionMigrationAvailable: M,
        } = this.props;
        if (null == s) return null;
        let N = (0, T.vE)({
                guild: s,
                isGuildAdmin: l,
                canManageGuild: u,
                canViewAuditLog: d,
                canManageRoles: h,
                canManageGuildExpressions: g,
                canManageWebhooks: f,
                canUnlinkChannels: p,
                canManageBans: v,
                canAccessMembersPage: b,
                canViewGuildAnalytics: y,
                isOwner: I,
                isOwnerWithRequiredMfaLevel: m,
                showDirtyGuildTemplateIndicator: S,
                memberCount: O,
                onboardingStep: w,
                onboardingEnabled: C,
                welcomeScreenEmpty: P,
                guildMetadata: D,
                section: a,
                permissionMigrationAvailable: M,
            }),
            j = (null == (n = N.find((e) => e.section === a)) || null == (e = n.predicate) ? void 0 : e.call(n)) !== !1,
            G = (0, E.r)();
        return (0, r.jsxs)("div", {
            children: [
                (0, r.jsx)(c.ZP, {
                    theme: t,
                    sidebarTheme: i,
                    section: j && null != a ? a : G,
                    onSetSection: k.Z.setSection,
                    onClose: o.xf,
                    title: "" !== s.name ? s.name : R.intl.string(R.t["154/bL"]),
                    sections: N,
                }),
                (0, r.jsx)(_.d, { guildId: s.id }),
            ],
        });
    }
}
function A() {
    var e, n, t;
    let {
            guild: o,
            section: c,
            analyticsLocation: l,
            guildMetadata: _,
            isGuildMetadataLoaded: T,
        } = (0, a.cj)([D.Z], () => D.Z.getProps()),
        { analyticsLocations: E } = (0, u.ZP)(s.Z.GUILD_SETTINGS),
        R = (0, a.e7)([m.Z], () => m.Z.theme),
        j = (0, I.Ll)(),
        A = (0, a.e7)([w.ZP], () => (null != o ? w.ZP.getChannels(o.id).SELECTABLE : null), [o]),
        Z = (0, a.cj)([P.Z], () => (null != o ? P.Z.getGuildPermissionProps(o) : G)),
        L = null == o ? void 0 : o.id,
        W = (0, a.e7)([P.Z], () => null != o && P.Z.canAccessGuildSettings(o));
    i.useEffect(() => {
        T || null == L || (0, d.aC)(L);
    }, [T, L]);
    let U = null != (e = null == o ? void 0 : o.features.has(N.GuildFeatures.COMMUNITY)) && e;
    i.useEffect(() => {
        null != L && U && ((0, h.eM)(L), (0, S.RM)(L));
    }, [L, U]),
        i.useEffect(() => {
            null != L && (0, f.cP)(L);
        }, [L]);
    let B = (0, a.e7)([v.Z], () => {
            var e;
            return (
                (null == o ? void 0 : o.id) != null && (null == (e = v.Z.getForGuild(o.id)) ? void 0 : e.isDirty) === !0
            );
        }, [o]),
        H = (0, a.e7)([C.Z], () => C.Z.getMemberCount(null == o ? void 0 : o.id), [o]);
    i.useEffect(() => {
        null != L && Z.canManageGuild && p.Z.loadTemplatesForGuild(L);
    }, [L, Z.canManageGuild]),
        i.useEffect(() => {
            W || k.Z.close();
        }, [W]);
    let F = (0, a.e7)([M.Z], () => M.Z.getCurrentPage()),
        K = (0, a.e7)([g.Z], () => null != L && g.Z.getEnabled(L)),
        V = (0, a.e7)([O.Z], () => null != L && O.Z.isEmpty(L)),
        Y = (0, b.F)(L).length > 0,
        q = (0, y.Z)(o);
    return (0, r.jsx)(u.Gt, {
        value: E,
        children: (0, r.jsx)(
            x,
            ((n = (function (e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {},
                        r = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols &&
                        (r = r.concat(
                            Object.getOwnPropertySymbols(t).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(t, e).enumerable;
                            }),
                        )),
                        r.forEach(function (n) {
                            var r;
                            (r = t[n]),
                                n in e
                                    ? Object.defineProperty(e, n, {
                                          value: r,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0,
                                      })
                                    : (e[n] = r);
                        });
                }
                return e;
            })(
                {
                    guild: o,
                    section: c,
                    theme: R,
                    sidebarTheme: j,
                    channels: A,
                    showDirtyGuildTemplateIndicator: B,
                    analyticsLocation: l,
                    memberCount: H,
                },
                Z,
            )),
            (t = t =
                {
                    canUnlinkChannels: Y,
                    canViewGuildAnalytics: Z.canViewGuildAnalytics,
                    onboardingStep: F,
                    onboardingEnabled: K,
                    welcomeScreenEmpty: V,
                    guildMetadata: _,
                    permissionMigrationAvailable: q,
                }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t))
                : (function (e, n) {
                      var t = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                          var r = Object.getOwnPropertySymbols(e);
                          t.push.apply(t, r);
                      }
                      return t;
                  })(Object(t)).forEach(function (e) {
                      Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(t, e));
                  }),
            n),
        ),
    });
}
