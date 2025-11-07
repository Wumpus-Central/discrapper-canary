t.r(n), t.d(n, { default: () => Z });
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
    _ = t(751189),
    p = t(409059),
    v = t(918658),
    b = t(163400),
    I = t(194201),
    y = t(984802),
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
    N = t(981631),
    R = t(388032);
function A(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        t = arguments.length > 2 ? arguments[2] : void 0;
    s.ZP.trackWithMetadata(N.rMx.SETTINGS_PANE_VIEWED, {
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
class L extends i.PureComponent {
    componentDidMount() {
        A(this.props.section, null, this.props.analyticsLocation);
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
        t !== n && A(t, n),
            ((r || i || a || c || l || s || u || g || d || h) &&
                (u || t !== N.pNK.AUDIT_LOG) &&
                (a || t !== N.pNK.ROLES) &&
                (s || t !== N.pNK.EMOJI) &&
                (s || t !== N.pNK.STICKERS) &&
                (s || t !== N.pNK.SOUNDBOARD) &&
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
            guild: l,
            isGuildAdmin: s,
            canManageGuild: u,
            canViewAuditLog: d,
            canManageRoles: h,
            canManageGuildExpressions: g,
            canManageWebhooks: f,
            canUnlinkChannels: _,
            canManageBans: p,
            canAccessMembersPage: b,
            canViewGuildAnalytics: I,
            isOwner: y,
            isOwnerWithRequiredMfaLevel: S,
            showDirtyGuildTemplateIndicator: m,
            memberCount: C,
            onboardingStep: w,
            onboardingEnabled: O,
            welcomeScreenEmpty: D,
            guildMetadata: k,
            permissionMigrationAvailable: E,
        } = this.props;
        if (null == l) return null;
        let N = (0, M.vE)({
                guild: l,
                isGuildAdmin: s,
                canManageGuild: u,
                canViewAuditLog: d,
                canManageRoles: h,
                canManageGuildExpressions: g,
                canManageWebhooks: f,
                canUnlinkChannels: _,
                canManageBans: p,
                canAccessMembersPage: b,
                canViewGuildAnalytics: I,
                isOwner: y,
                isOwnerWithRequiredMfaLevel: S,
                showDirtyGuildTemplateIndicator: m,
                memberCount: C,
                onboardingStep: w,
                onboardingEnabled: O,
                welcomeScreenEmpty: D,
                guildMetadata: k,
                section: a,
                permissionMigrationAvailable: E,
            }),
            A = (null == (n = N.find((e) => e.section === a)) || null == (e = n.predicate) ? void 0 : e.call(n)) !== !1,
            G = (0, T.r)();
        return (0, r.jsxs)("div", {
            children: [
                (0, r.jsx)(c.ZP, {
                    theme: t,
                    sidebarTheme: i,
                    section: A && null != a ? a : G,
                    onSetSection: P.Z.setSection,
                    onClose: o.xf,
                    title: "" !== l.name ? l.name : R.intl.string(R.t["154/bL"]),
                    sections: N,
                }),
                (0, r.jsx)(v.d, { guildId: l.id }),
            ],
        });
    }
}
function Z() {
    var e, n, t;
    let {
            guild: o,
            section: c,
            analyticsLocation: s,
            guildMetadata: v,
            isGuildMetadataLoaded: M,
        } = (0, a.cj)([k.Z], () => k.Z.getProps()),
        { analyticsLocations: T } = (0, u.ZP)(l.Z.GUILD_SETTINGS),
        R = (0, a.e7)([S.Z], () => S.Z.theme),
        A = (0, y.Ll)(),
        Z = (0, a.e7)([w.ZP], () => (null != o ? w.ZP.getChannels(o.id).SELECTABLE : null), [o]),
        j = (0, a.cj)([D.Z], () => (null != o ? D.Z.getGuildPermissionProps(o) : G)),
        x = null == o ? void 0 : o.id,
        U = (0, a.e7)([D.Z], () => null != o && D.Z.canAccessGuildSettings(o));
    i.useEffect(() => {
        M || null == x || (0, d.aC)(x);
    }, [M, x]);
    let W = null != (e = null == o ? void 0 : o.features.has(N.GuildFeatures.COMMUNITY)) && e;
    i.useEffect(() => {
        null != x && W && ((0, h.eM)(x), (0, m.RM)(x));
    }, [x, W]),
        i.useEffect(() => {
            null != x && (0, f.cP)(x);
        }, [x]);
    let H = (0, a.e7)([p.Z], () => {
            var e;
            return (
                (null == o ? void 0 : o.id) != null && (null == (e = p.Z.getForGuild(o.id)) ? void 0 : e.isDirty) === !0
            );
        }, [o]),
        B = (0, a.e7)([O.Z], () => O.Z.getMemberCount(null == o ? void 0 : o.id), [o]);
    i.useEffect(() => {
        null != x && j.canManageGuild && _.Z.loadTemplatesForGuild(x);
    }, [x, j.canManageGuild]),
        i.useEffect(() => {
            U || P.Z.close();
        }, [U]);
    let F = (0, a.e7)([E.Z], () => E.Z.getCurrentPage()),
        K = (0, a.e7)([g.Z], () => null != x && g.Z.getEnabled(x)),
        Y = (0, a.e7)([C.Z], () => null != x && C.Z.isEmpty(x)),
        z = (0, b.F)(x).length > 0,
        V = (0, I.Z)(o);
    return (0, r.jsx)(u.Gt, {
        value: T,
        children: (0, r.jsx)(
            L,
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
                    sidebarTheme: A,
                    channels: Z,
                    showDirtyGuildTemplateIndicator: H,
                    analyticsLocation: s,
                    memberCount: B,
                },
                j,
            )),
            (t = t =
                {
                    canUnlinkChannels: z,
                    canViewGuildAnalytics: j.canViewGuildAnalytics,
                    onboardingStep: F,
                    onboardingEnabled: K,
                    welcomeScreenEmpty: Y,
                    guildMetadata: v,
                    permissionMigrationAvailable: V,
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
