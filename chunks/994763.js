t.r(n), t.d(n, { default: () => L });
var l = t(951288),
    i = t(647438),
    a = t(442837),
    r = t(37234),
    o = t(503089),
    s = t(100527),
    c = t(367907),
    u = t(906732),
    d = t(456268),
    p = t(745752),
    g = t(45966),
    f = t(526120),
    h = t(751189),
    b = t(409059),
    O = t(918658),
    m = t(163400),
    v = t(190263),
    P = t(984802),
    E = t(210887),
    M = t(524329),
    Z = t(995532),
    y = t(984933),
    S = t(650774),
    I = t(496675),
    N = t(434404),
    j = t(999382),
    G = t(359191),
    A = t(896007),
    C = t(978946),
    T = t(981631),
    w = t(388032);
function x(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        t = arguments.length > 2 ? arguments[2] : void 0;
    c.ZP.trackWithMetadata(T.rMx.SETTINGS_PANE_VIEWED, {
        settings_type: "guild",
        origin_pane: n,
        destination_pane: e,
        location: t,
    });
}
let D = {
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
class _ extends i.PureComponent {
    componentDidMount() {
        x(this.props.section, null, this.props.analyticsLocation);
    }
    componentWillUnmount() {
        N.Z.close();
    }
    componentDidUpdate(e) {
        let { section: n } = e,
            {
                section: t,
                isGuildAdmin: l,
                canManageGuild: i,
                canManageRoles: a,
                canManageBans: o,
                canManageNicknames: s,
                canManageGuildExpressions: c,
                canViewAuditLog: u,
                canManageWebhooks: d,
                canUnlinkChannels: p,
                canAccessMembersPage: g,
                canViewGuildAnalytics: f,
            } = this.props;
        t !== n && x(t, n),
            ((l || i || a || o || s || c || u || g || d || p) &&
                (u || t !== T.pNK.AUDIT_LOG) &&
                (a || t !== T.pNK.ROLES) &&
                (c || t !== T.pNK.EMOJI) &&
                (c || t !== T.pNK.STICKERS) &&
                (c || t !== T.pNK.SOUNDBOARD) &&
                (o || t !== T.pNK.BANS) &&
                (f || t !== T.pNK.ANALYTICS) &&
                (g || t !== T.pNK.MEMBERS)) ||
                (0, r.xf)();
    }
    render() {
        var e, n;
        let {
            theme: t,
            sidebarTheme: i,
            section: a,
            guild: s,
            isGuildAdmin: c,
            canManageGuild: u,
            canViewAuditLog: d,
            canManageRoles: p,
            canManageGuildExpressions: g,
            canManageWebhooks: f,
            canUnlinkChannels: h,
            canManageBans: b,
            canAccessMembersPage: m,
            canViewGuildAnalytics: v,
            isOwner: P,
            isOwnerWithRequiredMfaLevel: E,
            showDirtyGuildTemplateIndicator: M,
            memberCount: Z,
            onboardingStep: y,
            onboardingEnabled: S,
            welcomeScreenEmpty: I,
            guildMetadata: j,
            pinPermissionMigrationAvailable: G,
        } = this.props;
        if (null == s) return null;
        let T = (0, A.vE)({
                guild: s,
                isGuildAdmin: c,
                canManageGuild: u,
                canViewAuditLog: d,
                canManageRoles: p,
                canManageGuildExpressions: g,
                canManageWebhooks: f,
                canUnlinkChannels: h,
                canManageBans: b,
                canAccessMembersPage: m,
                canViewGuildAnalytics: v,
                isOwner: P,
                isOwnerWithRequiredMfaLevel: E,
                showDirtyGuildTemplateIndicator: M,
                memberCount: Z,
                onboardingStep: y,
                onboardingEnabled: S,
                welcomeScreenEmpty: I,
                guildMetadata: j,
                section: a,
                pinPermissionMigrationAvailable: G,
            }),
            x = (null == (n = T.find((e) => e.section === a)) || null == (e = n.predicate) ? void 0 : e.call(n)) !== !1,
            D = (0, C.r)();
        return (0, l.jsxs)("div", {
            children: [
                (0, l.jsx)(o.ZP, {
                    theme: t,
                    sidebarTheme: i,
                    section: x && null != a ? a : D,
                    onSetSection: N.Z.setSection,
                    onClose: r.xf,
                    title: "" !== s.name ? s.name : w.intl.string(w.t["154/bG"]),
                    sections: T,
                }),
                (0, l.jsx)(O.d, { guildId: s.id }),
            ],
        });
    }
}
function L() {
    var e, n, t;
    let {
            guild: r,
            section: o,
            analyticsLocation: c,
            guildMetadata: O,
            isGuildMetadataLoaded: A,
        } = (0, a.cj)([j.Z], () => j.Z.getProps()),
        { analyticsLocations: C } = (0, u.ZP)(s.Z.GUILD_SETTINGS),
        w = (0, a.e7)([E.Z], () => E.Z.theme),
        x = (0, P.Ll)(),
        L = (0, a.e7)([y.ZP], () => (null != r ? y.ZP.getChannels(r.id).SELECTABLE : null), [r]),
        R = (0, a.cj)([I.Z], () => (null != r ? I.Z.getGuildPermissionProps(r) : D)),
        K = null == r ? void 0 : r.id,
        k = (0, a.e7)([I.Z], () => null != r && I.Z.canAccessGuildSettings(r));
    i.useEffect(() => {
        A || null == K || (0, d.aC)(K);
    }, [A, K]);
    let U = null != (e = null == r ? void 0 : r.features.has(T.oNc.COMMUNITY)) && e;
    i.useEffect(() => {
        null != K && U && ((0, p.eM)(K), (0, M.RM)(K));
    }, [K, U]),
        i.useEffect(() => {
            null != K && (0, f.cP)(K);
        }, [K]);
    let W = (0, a.e7)([b.Z], () => {
            var e;
            return (
                (null == r ? void 0 : r.id) != null && (null == (e = b.Z.getForGuild(r.id)) ? void 0 : e.isDirty) === !0
            );
        }, [r]),
        B = (0, a.e7)([S.Z], () => S.Z.getMemberCount(null == r ? void 0 : r.id), [r]);
    i.useEffect(() => {
        null != K && R.canManageGuild && h.Z.loadTemplatesForGuild(K);
    }, [K, R.canManageGuild]),
        i.useEffect(() => {
            k || N.Z.close();
        }, [k]);
    let F = (0, a.e7)([G.Z], () => G.Z.getCurrentPage()),
        V = (0, a.e7)([g.Z], () => null != K && g.Z.getEnabled(K)),
        Y = (0, a.e7)([Z.Z], () => null != K && Z.Z.isEmpty(K)),
        q = (0, m.F)(K).length > 0,
        z = (0, v.D)(r);
    return (0, l.jsx)(u.Gt, {
        value: C,
        children: (0, l.jsx)(
            _,
            ((n = (function (e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {},
                        l = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols &&
                        (l = l.concat(
                            Object.getOwnPropertySymbols(t).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(t, e).enumerable;
                            }),
                        )),
                        l.forEach(function (n) {
                            var l;
                            (l = t[n]),
                                n in e
                                    ? Object.defineProperty(e, n, {
                                          value: l,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0,
                                      })
                                    : (e[n] = l);
                        });
                }
                return e;
            })(
                {
                    guild: r,
                    section: o,
                    theme: w,
                    sidebarTheme: x,
                    channels: L,
                    showDirtyGuildTemplateIndicator: W,
                    analyticsLocation: c,
                    memberCount: B,
                },
                R,
            )),
            (t = t =
                {
                    canUnlinkChannels: q,
                    canViewGuildAnalytics: R.canViewGuildAnalytics,
                    onboardingStep: F,
                    onboardingEnabled: V,
                    welcomeScreenEmpty: Y,
                    guildMetadata: O,
                    pinPermissionMigrationAvailable: z,
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
            n),
        ),
    });
}
