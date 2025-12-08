t.r(n), t.d(n, { default: () => A });
var r = t(54381),
    i = t(473749),
    o = t(442837),
    a = t(37234),
    c = t(503089),
    s = t(100527),
    l = t(367907),
    u = t(906732),
    d = t(456268),
    h = t(745752),
    g = t(45966),
    f = t(526120),
    v = t(751189),
    p = t(409059),
    _ = t(918658),
    b = t(163400),
    y = t(194201),
    I = t(984802),
    m = t(210887),
    C = t(524329),
    S = t(995532),
    O = t(984933),
    w = t(650774),
    P = t(496675),
    k = t(434404),
    D = t(999382),
    M = t(359191),
    T = t(896007),
    N = t(978946),
    E = t(981631),
    R = t(388032);
function j(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        t = arguments.length > 2 ? arguments[2] : void 0;
    l.ZP.trackWithMetadata(E.rMx.SETTINGS_PANE_VIEWED, {
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
                canManageRoles: o,
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
            ((r || i || o || c || s || l || u || g || d || h) &&
                (u || t !== E.pNK.AUDIT_LOG) &&
                (o || t !== E.pNK.ROLES) &&
                (l || t !== E.pNK.EMOJI) &&
                (l || t !== E.pNK.STICKERS) &&
                (l || t !== E.pNK.SOUNDBOARD) &&
                (c || t !== E.pNK.BANS) &&
                (f || t !== E.pNK.ANALYTICS) &&
                (g || t !== E.pNK.MEMBERS)) ||
                (0, a.xf)();
    }
    render() {
        var e, n;
        let {
            theme: t,
            sidebarTheme: i,
            section: o,
            guild: s,
            isGuildAdmin: l,
            canManageGuild: u,
            canViewAuditLog: d,
            canManageRoles: h,
            canManageGuildExpressions: g,
            canManageWebhooks: f,
            canUnlinkChannels: v,
            canManageBans: p,
            canAccessMembersPage: b,
            canViewGuildAnalytics: y,
            isOwner: I,
            isOwnerWithRequiredMfaLevel: m,
            showDirtyGuildTemplateIndicator: C,
            memberCount: S,
            onboardingStep: O,
            onboardingEnabled: w,
            welcomeScreenEmpty: P,
            guildMetadata: D,
            permissionMigrationAvailable: M,
        } = this.props;
        if (null == s) return null;
        let E = (0, T.vE)({
                guild: s,
                isGuildAdmin: l,
                canManageGuild: u,
                canViewAuditLog: d,
                canManageRoles: h,
                canManageGuildExpressions: g,
                canManageWebhooks: f,
                canUnlinkChannels: v,
                canManageBans: p,
                canAccessMembersPage: b,
                canViewGuildAnalytics: y,
                isOwner: I,
                isOwnerWithRequiredMfaLevel: m,
                showDirtyGuildTemplateIndicator: C,
                memberCount: S,
                onboardingStep: O,
                onboardingEnabled: w,
                welcomeScreenEmpty: P,
                guildMetadata: D,
                section: o,
                permissionMigrationAvailable: M,
            }),
            j = (null == (n = E.find((e) => e.section === o)) || null == (e = n.predicate) ? void 0 : e.call(n)) !== !1,
            G = (0, N.r)();
        return (0, r.jsxs)("div", {
            children: [
                (0, r.jsx)(c.ZP, {
                    theme: t,
                    sidebarTheme: i,
                    section: j && null != o ? o : G,
                    onSetSection: k.Z.setSection,
                    onClose: a.xf,
                    title: "" !== s.name ? s.name : R.intl.string(R.t["154/bL"]),
                    sections: E,
                }),
                (0, r.jsx)(_.d, { guildId: s.id }),
            ],
        });
    }
}
function A() {
    var e, n, t;
    let {
            guild: a,
            section: c,
            analyticsLocation: l,
            guildMetadata: _,
            isGuildMetadataLoaded: T,
        } = (0, o.cj)([D.Z], () => D.Z.getProps()),
        { analyticsLocations: N } = (0, u.ZP)(s.Z.GUILD_SETTINGS),
        R = (0, o.e7)([m.Z], () => m.Z.theme),
        j = (0, I.Ll)(),
        A = (0, o.e7)([O.ZP], () => (null != a ? O.ZP.getChannels(a.id).SELECTABLE : null), [a]),
        Z = (0, o.cj)([P.Z], () => (null != a ? P.Z.getGuildPermissionProps(a) : G)),
        L = null == a ? void 0 : a.id,
        W = (0, o.e7)([P.Z], () => null != a && P.Z.canAccessGuildSettings(a));
    i.useEffect(() => {
        T || null == L || (0, d.aC)(L);
    }, [T, L]);
    let U = null != (e = null == a ? void 0 : a.features.has(E.GuildFeatures.COMMUNITY)) && e;
    i.useEffect(() => {
        null != L && U && ((0, h.eM)(L), (0, C.RM)(L));
    }, [L, U]),
        i.useEffect(() => {
            null != L && (0, f.cP)(L);
        }, [L]);
    let H = (0, o.e7)([p.Z], () => {
            var e;
            return (
                (null == a ? void 0 : a.id) != null && (null == (e = p.Z.getForGuild(a.id)) ? void 0 : e.isDirty) === !0
            );
        }, [a]),
        B = (0, o.e7)([w.Z], () => w.Z.getMemberCount(null == a ? void 0 : a.id), [a]);
    i.useEffect(() => {
        null != L && Z.canManageGuild && v.Z.loadTemplatesForGuild(L);
    }, [L, Z.canManageGuild]),
        i.useEffect(() => {
            W || k.Z.close();
        }, [W]);
    let F = (0, o.e7)([M.Z], () => M.Z.getCurrentPage()),
        K = (0, o.e7)([g.Z], () => null != L && g.Z.getEnabled(L)),
        V = (0, o.e7)([S.Z], () => null != L && S.Z.isEmpty(L)),
        Y = (0, b.F)(L).length > 0,
        q = (0, y.Z)(a);
    return (0, r.jsx)(u.Gt, {
        value: N,
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
                    guild: a,
                    section: c,
                    theme: R,
                    sidebarTheme: j,
                    channels: A,
                    showDirtyGuildTemplateIndicator: H,
                    analyticsLocation: l,
                    memberCount: B,
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
