t.r(n), t.d(n, { default: () => y });
var l = t(54381),
    i = t(473749),
    r = t(442837),
    s = t(37234),
    u = t(503089),
    o = t(100527),
    a = t(367907),
    c = t(906732),
    d = t(456268),
    E = t(745752),
    I = t(45966),
    _ = t(526120),
    S = t(751189),
    N = t(409059),
    O = t(918658),
    g = t(163400),
    f = t(194201),
    T = t(984802),
    G = t(210887),
    h = t(524329),
    A = t(995532),
    D = t(984933),
    M = t(650774),
    b = t(496675),
    C = t(434404),
    p = t(999382),
    m = t(359191),
    R = t(896007),
    P = t(978946),
    U = t(981631),
    v = t(388032);
function L(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        t = arguments.length > 2 ? arguments[2] : void 0;
    a.ZP.trackWithMetadata(U.rMx.SETTINGS_PANE_VIEWED, {
        settings_type: "guild",
        origin_pane: n,
        destination_pane: e,
        location: t,
    });
}
let w = {
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
class Z extends i.PureComponent {
    componentDidMount() {
        L(this.props.section, null, this.props.analyticsLocation);
    }
    componentWillUnmount() {
        C.Z.close();
    }
    componentDidUpdate(e) {
        let { section: n } = e,
            {
                section: t,
                isGuildAdmin: l,
                canManageGuild: i,
                canManageRoles: r,
                canManageBans: u,
                canManageNicknames: o,
                canManageGuildExpressions: a,
                canViewAuditLog: c,
                canManageWebhooks: d,
                canUnlinkChannels: E,
                canAccessMembersPage: I,
                canViewGuildAnalytics: _,
            } = this.props;
        t !== n && L(t, n),
            ((l || i || r || u || o || a || c || I || d || E) &&
                (c || t !== U.pNK.AUDIT_LOG) &&
                (r || t !== U.pNK.ROLES) &&
                (a || t !== U.pNK.EMOJI) &&
                (a || t !== U.pNK.STICKERS) &&
                (a || t !== U.pNK.SOUNDBOARD) &&
                (u || t !== U.pNK.BANS) &&
                (_ || t !== U.pNK.ANALYTICS) &&
                (I || t !== U.pNK.MEMBERS)) ||
                (0, s.xf)();
    }
    render() {
        var e, n;
        let {
            theme: t,
            sidebarTheme: i,
            section: r,
            guild: o,
            isGuildAdmin: a,
            canManageGuild: c,
            canViewAuditLog: d,
            canManageRoles: E,
            canManageGuildExpressions: I,
            canManageWebhooks: _,
            canUnlinkChannels: S,
            canManageBans: N,
            canAccessMembersPage: g,
            canViewGuildAnalytics: f,
            isOwner: T,
            isOwnerWithRequiredMfaLevel: G,
            showDirtyGuildTemplateIndicator: h,
            memberCount: A,
            onboardingStep: D,
            onboardingEnabled: M,
            welcomeScreenEmpty: b,
            guildMetadata: p,
            permissionMigrationAvailable: m,
        } = this.props;
        if (null == o) return null;
        let U = (0, R.vE)({
                guild: o,
                isGuildAdmin: a,
                canManageGuild: c,
                canViewAuditLog: d,
                canManageRoles: E,
                canManageGuildExpressions: I,
                canManageWebhooks: _,
                canUnlinkChannels: S,
                canManageBans: N,
                canAccessMembersPage: g,
                canViewGuildAnalytics: f,
                isOwner: T,
                isOwnerWithRequiredMfaLevel: G,
                showDirtyGuildTemplateIndicator: h,
                memberCount: A,
                onboardingStep: D,
                onboardingEnabled: M,
                welcomeScreenEmpty: b,
                guildMetadata: p,
                section: r,
                permissionMigrationAvailable: m,
            }),
            L = (null == (n = U.find((e) => e.section === r)) || null == (e = n.predicate) ? void 0 : e.call(n)) !== !1,
            w = (0, P.r)();
        return (0, l.jsxs)("div", {
            children: [
                (0, l.jsx)(u.ZP, {
                    theme: t,
                    sidebarTheme: i,
                    section: L && null != r ? r : w,
                    onSetSection: C.Z.setSection,
                    onClose: s.xf,
                    title: "" !== o.name ? o.name : v.intl.string(v.t["154/bL"]),
                    sections: U,
                }),
                (0, l.jsx)(O.d, { guildId: o.id }),
            ],
        });
    }
}
function y() {
    var e, n, t;
    let {
            guild: s,
            section: u,
            analyticsLocation: a,
            guildMetadata: O,
            isGuildMetadataLoaded: R,
        } = (0, r.cj)([p.Z], () => p.Z.getProps()),
        { analyticsLocations: P } = (0, c.ZP)(o.Z.GUILD_SETTINGS),
        v = (0, r.e7)([G.Z], () => G.Z.theme),
        L = (0, T.Ll)(),
        y = (0, r.e7)([D.ZP], () => (null != s ? D.ZP.getChannels(s.id).SELECTABLE : null), [s]),
        j = (0, r.cj)([b.Z], () => (null != s ? b.Z.getGuildPermissionProps(s) : w)),
        B = null == s ? void 0 : s.id,
        x = (0, r.e7)([b.Z], () => null != s && b.Z.canAccessGuildSettings(s));
    i.useEffect(() => {
        R || null == B || (0, d.aC)(B);
    }, [R, B]);
    let W = null != (e = null == s ? void 0 : s.features.has(U.GuildFeatures.COMMUNITY)) && e;
    i.useEffect(() => {
        null != B && W && ((0, E.eM)(B), (0, h.RM)(B));
    }, [B, W]),
        i.useEffect(() => {
            null != B && (0, _.cP)(B);
        }, [B]);
    let H = (0, r.e7)([N.Z], () => {
            var e;
            return (
                (null == s ? void 0 : s.id) != null && (null == (e = N.Z.getForGuild(s.id)) ? void 0 : e.isDirty) === !0
            );
        }, [s]),
        F = (0, r.e7)([M.Z], () => M.Z.getMemberCount(null == s ? void 0 : s.id), [s]);
    i.useEffect(() => {
        null != B && j.canManageGuild && S.Z.loadTemplatesForGuild(B);
    }, [B, j.canManageGuild]),
        i.useEffect(() => {
            x || C.Z.close();
        }, [x]);
    let K = (0, r.e7)([m.Z], () => m.Z.getCurrentPage()),
        k = (0, r.e7)([I.Z], () => null != B && I.Z.getEnabled(B)),
        V = (0, r.e7)([A.Z], () => null != B && A.Z.isEmpty(B)),
        Y = (0, g.F)(B).length > 0,
        q = (0, f.Z)(s);
    return (0, l.jsx)(c.Gt, {
        value: P,
        children: (0, l.jsx)(
            Z,
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
                    guild: s,
                    section: u,
                    theme: v,
                    sidebarTheme: L,
                    channels: y,
                    showDirtyGuildTemplateIndicator: H,
                    analyticsLocation: a,
                    memberCount: F,
                },
                j,
            )),
            (t = t =
                {
                    canUnlinkChannels: Y,
                    canViewGuildAnalytics: j.canViewGuildAnalytics,
                    onboardingStep: K,
                    onboardingEnabled: k,
                    welcomeScreenEmpty: V,
                    guildMetadata: O,
                    permissionMigrationAvailable: q,
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
