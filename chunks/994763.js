t.r(n), t.d(n, { default: () => j });
var r = t(951288),
    i = t(647438),
    a = t(442837),
    o = t(37234),
    c = t(503089),
    l = t(100527),
    s = t(367907),
    u = t(906732),
    d = t(456268),
    h = t(745752),
    g = t(45966),
    f = t(526120),
    p = t(751189),
    _ = t(409059),
    v = t(918658),
    b = t(163400),
    y = t(190263),
    I = t(984802),
    S = t(210887),
    m = t(524329),
    C = t(995532),
    w = t(984933),
    O = t(650774),
    D = t(496675),
    P = t(434404),
    k = t(999382),
    E = t(359191),
    M = t(896007),
    T = t(978946),
    R = t(981631),
    N = t(388032);
function G(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        t = arguments.length > 2 ? arguments[2] : void 0;
    s.ZP.trackWithMetadata(R.rMx.SETTINGS_PANE_VIEWED, {
        settings_type: "guild",
        origin_pane: n,
        destination_pane: e,
        location: t,
    });
}
let L = {
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
class A extends i.PureComponent {
    componentDidMount() {
        G(this.props.section, null, this.props.analyticsLocation);
    }
    componentWillUnmount() {
        P.Z.close();
    }
    componentDidUpdate(e) {
        let { section: n } = e,
            {
                section: t,
                isGuildAdmin: r,
                canManageGuild: i,
                canManageRoles: a,
                canManageBans: c,
                canManageNicknames: l,
                canManageGuildExpressions: s,
                canViewAuditLog: u,
                canManageWebhooks: d,
                canUnlinkChannels: h,
                canAccessMembersPage: g,
                canViewGuildAnalytics: f,
            } = this.props;
        t !== n && G(t, n),
            ((r || i || a || c || l || s || u || g || d || h) &&
                (u || t !== R.pNK.AUDIT_LOG) &&
                (a || t !== R.pNK.ROLES) &&
                (s || t !== R.pNK.EMOJI) &&
                (s || t !== R.pNK.STICKERS) &&
                (s || t !== R.pNK.SOUNDBOARD) &&
                (c || t !== R.pNK.BANS) &&
                (f || t !== R.pNK.ANALYTICS) &&
                (g || t !== R.pNK.MEMBERS)) ||
                (0, o.xf)();
    }
    render() {
        var e, n;
        let {
            theme: t,
            sidebarTheme: i,
            section: a,
            guild: l,
            isGuildAdmin: s,
            canManageGuild: u,
            canViewAuditLog: d,
            canManageRoles: h,
            canManageGuildExpressions: g,
            canManageWebhooks: f,
            canUnlinkChannels: p,
            canManageBans: _,
            canAccessMembersPage: b,
            canViewGuildAnalytics: y,
            isOwner: I,
            isOwnerWithRequiredMfaLevel: S,
            showDirtyGuildTemplateIndicator: m,
            memberCount: C,
            onboardingStep: w,
            onboardingEnabled: O,
            welcomeScreenEmpty: D,
            guildMetadata: k,
            pinPermissionMigrationAvailable: E,
        } = this.props;
        if (null == l) return null;
        let R = (0, M.vE)({
                guild: l,
                isGuildAdmin: s,
                canManageGuild: u,
                canViewAuditLog: d,
                canManageRoles: h,
                canManageGuildExpressions: g,
                canManageWebhooks: f,
                canUnlinkChannels: p,
                canManageBans: _,
                canAccessMembersPage: b,
                canViewGuildAnalytics: y,
                isOwner: I,
                isOwnerWithRequiredMfaLevel: S,
                showDirtyGuildTemplateIndicator: m,
                memberCount: C,
                onboardingStep: w,
                onboardingEnabled: O,
                welcomeScreenEmpty: D,
                guildMetadata: k,
                section: a,
                pinPermissionMigrationAvailable: E,
            }),
            G = (null == (n = R.find((e) => e.section === a)) || null == (e = n.predicate) ? void 0 : e.call(n)) !== !1,
            L = (0, T.r)();
        return (0, r.jsxs)("div", {
            children: [
                (0, r.jsx)(c.ZP, {
                    theme: t,
                    sidebarTheme: i,
                    section: G && null != a ? a : L,
                    onSetSection: P.Z.setSection,
                    onClose: o.xf,
                    title: "" !== l.name ? l.name : N.intl.string(N.t["154/bL"]),
                    sections: R,
                }),
                (0, r.jsx)(v.d, { guildId: l.id }),
            ],
        });
    }
}
function j() {
    var e, n, t;
    let {
            guild: o,
            section: c,
            analyticsLocation: s,
            guildMetadata: v,
            isGuildMetadataLoaded: M,
        } = (0, a.cj)([k.Z], () => k.Z.getProps()),
        { analyticsLocations: T } = (0, u.ZP)(l.Z.GUILD_SETTINGS),
        N = (0, a.e7)([S.Z], () => S.Z.theme),
        G = (0, I.Ll)(),
        j = (0, a.e7)([w.ZP], () => (null != o ? w.ZP.getChannels(o.id).SELECTABLE : null), [o]),
        x = (0, a.cj)([D.Z], () => (null != o ? D.Z.getGuildPermissionProps(o) : L)),
        Z = null == o ? void 0 : o.id,
        U = (0, a.e7)([D.Z], () => null != o && D.Z.canAccessGuildSettings(o));
    i.useEffect(() => {
        M || null == Z || (0, d.aC)(Z);
    }, [M, Z]);
    let H = null != (e = null == o ? void 0 : o.features.has(R.GuildFeatures.COMMUNITY)) && e;
    i.useEffect(() => {
        null != Z && H && ((0, h.eM)(Z), (0, m.RM)(Z));
    }, [Z, H]),
        i.useEffect(() => {
            null != Z && (0, f.cP)(Z);
        }, [Z]);
    let W = (0, a.e7)([_.Z], () => {
            var e;
            return (
                (null == o ? void 0 : o.id) != null && (null == (e = _.Z.getForGuild(o.id)) ? void 0 : e.isDirty) === !0
            );
        }, [o]),
        B = (0, a.e7)([O.Z], () => O.Z.getMemberCount(null == o ? void 0 : o.id), [o]);
    i.useEffect(() => {
        null != Z && x.canManageGuild && p.Z.loadTemplatesForGuild(Z);
    }, [Z, x.canManageGuild]),
        i.useEffect(() => {
            U || P.Z.close();
        }, [U]);
    let F = (0, a.e7)([E.Z], () => E.Z.getCurrentPage()),
        K = (0, a.e7)([g.Z], () => null != Z && g.Z.getEnabled(Z)),
        Y = (0, a.e7)([C.Z], () => null != Z && C.Z.isEmpty(Z)),
        z = (0, b.F)(Z).length > 0,
        V = (0, y.D)(o);
    return (0, r.jsx)(u.Gt, {
        value: T,
        children: (0, r.jsx)(
            A,
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
                    theme: N,
                    sidebarTheme: G,
                    channels: j,
                    showDirtyGuildTemplateIndicator: W,
                    analyticsLocation: s,
                    memberCount: B,
                },
                x,
            )),
            (t = t =
                {
                    canUnlinkChannels: z,
                    canViewGuildAnalytics: x.canViewGuildAnalytics,
                    onboardingStep: F,
                    onboardingEnabled: K,
                    welcomeScreenEmpty: Y,
                    guildMetadata: v,
                    pinPermissionMigrationAvailable: V,
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
