t.r(a), t.d(a, { default: () => Z });
var n = t(951288),
    c = t(647438),
    o = t(442837),
    r = t(37234),
    i = t(503089),
    l = t(100527),
    s = t(367907),
    d = t(906732),
    p = t(456268),
    u = t(745752),
    _ = t(45966),
    g = t(526120),
    m = t(751189),
    h = t(409059),
    b = t(918658),
    f = t(163400),
    y = t(190263),
    C = t(984802),
    O = t(210887),
    I = t(524329),
    v = t(995532),
    T = t(984933),
    w = t(650774),
    S = t(496675),
    P = t(434404),
    M = t(999382),
    x = t(359191),
    j = t(896007),
    A = t(978946),
    D = t(981631),
    E = t(388032);
function N(e) {
    let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        t = arguments.length > 2 ? arguments[2] : void 0;
    s.ZP.trackWithMetadata(D.rMx.SETTINGS_PANE_VIEWED, {
        settings_type: "guild",
        origin_pane: a,
        destination_pane: e,
        location: t,
    });
}
let k = {
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
class L extends c.PureComponent {
    componentDidMount() {
        N(this.props.section, null, this.props.analyticsLocation);
    }
    componentWillUnmount() {
        P.Z.close();
    }
    componentDidUpdate(e) {
        let { section: a } = e,
            {
                section: t,
                isGuildAdmin: n,
                canManageGuild: c,
                canManageRoles: o,
                canManageBans: i,
                canManageNicknames: l,
                canManageGuildExpressions: s,
                canViewAuditLog: d,
                canManageWebhooks: p,
                canUnlinkChannels: u,
                canAccessMembersPage: _,
                canViewGuildAnalytics: g,
            } = this.props;
        t !== a && N(t, a),
            ((n || c || o || i || l || s || d || _ || p || u) &&
                (d || t !== D.pNK.AUDIT_LOG) &&
                (o || t !== D.pNK.ROLES) &&
                (s || t !== D.pNK.EMOJI) &&
                (s || t !== D.pNK.STICKERS) &&
                (s || t !== D.pNK.SOUNDBOARD) &&
                (i || t !== D.pNK.BANS) &&
                (g || t !== D.pNK.ANALYTICS) &&
                (_ || t !== D.pNK.MEMBERS)) ||
                (0, r.xf)();
    }
    render() {
        var e, a;
        let {
            theme: t,
            sidebarTheme: c,
            section: o,
            guild: l,
            isGuildAdmin: s,
            canManageGuild: d,
            canViewAuditLog: p,
            canManageRoles: u,
            canManageGuildExpressions: _,
            canManageWebhooks: g,
            canUnlinkChannels: m,
            canManageBans: h,
            canAccessMembersPage: f,
            canViewGuildAnalytics: y,
            isOwner: C,
            isOwnerWithRequiredMfaLevel: O,
            showDirtyGuildTemplateIndicator: I,
            memberCount: v,
            onboardingStep: T,
            onboardingEnabled: w,
            welcomeScreenEmpty: S,
            guildMetadata: M,
            pinPermissionMigrationAvailable: x,
        } = this.props;
        if (null == l) return null;
        let D = (0, j.vE)({
                guild: l,
                isGuildAdmin: s,
                canManageGuild: d,
                canViewAuditLog: p,
                canManageRoles: u,
                canManageGuildExpressions: _,
                canManageWebhooks: g,
                canUnlinkChannels: m,
                canManageBans: h,
                canAccessMembersPage: f,
                canViewGuildAnalytics: y,
                isOwner: C,
                isOwnerWithRequiredMfaLevel: O,
                showDirtyGuildTemplateIndicator: I,
                memberCount: v,
                onboardingStep: T,
                onboardingEnabled: w,
                welcomeScreenEmpty: S,
                guildMetadata: M,
                section: o,
                pinPermissionMigrationAvailable: x,
            }),
            N = (null == (a = D.find((e) => e.section === o)) || null == (e = a.predicate) ? void 0 : e.call(a)) !== !1,
            k = (0, A.r)();
        return (0, n.jsxs)("div", {
            children: [
                (0, n.jsx)(i.ZP, {
                    theme: t,
                    sidebarTheme: c,
                    section: N && null != o ? o : k,
                    onSetSection: P.Z.setSection,
                    onClose: r.xf,
                    title: "" !== l.name ? l.name : E.intl.string(E.t["154/bG"]),
                    sections: D,
                }),
                (0, n.jsx)(b.d, { guildId: l.id }),
            ],
        });
    }
}
function Z() {
    var e, a, t;
    let {
            guild: r,
            section: i,
            analyticsLocation: s,
            guildMetadata: b,
            isGuildMetadataLoaded: j,
        } = (0, o.cj)([M.Z], () => M.Z.getProps()),
        { analyticsLocations: A } = (0, d.ZP)(l.Z.GUILD_SETTINGS),
        E = (0, o.e7)([O.Z], () => O.Z.theme),
        N = (0, C.Ll)(),
        Z = (0, o.e7)([T.ZP], () => (null != r ? T.ZP.getChannels(r.id).SELECTABLE : null), [r]),
        G = (0, o.cj)([S.Z], () => (null != r ? S.Z.getGuildPermissionProps(r) : k)),
        R = null == r ? void 0 : r.id,
        B = (0, o.e7)([S.Z], () => null != r && S.Z.canAccessGuildSettings(r));
    c.useEffect(() => {
        j || null == R || (0, p.aC)(R);
    }, [j, R]);
    let U = null != (e = null == r ? void 0 : r.features.has(D.oNc.COMMUNITY)) && e;
    c.useEffect(() => {
        null != R && U && ((0, u.eM)(R), (0, I.RM)(R));
    }, [R, U]),
        c.useEffect(() => {
            null != R && (0, g.cP)(R);
        }, [R]);
    let H = (0, o.e7)([h.Z], () => {
            var e;
            return (
                (null == r ? void 0 : r.id) != null && (null == (e = h.Z.getForGuild(r.id)) ? void 0 : e.isDirty) === !0
            );
        }, [r]),
        F = (0, o.e7)([w.Z], () => w.Z.getMemberCount(null == r ? void 0 : r.id), [r]);
    c.useEffect(() => {
        null != R && G.canManageGuild && m.Z.loadTemplatesForGuild(R);
    }, [R, G.canManageGuild]),
        c.useEffect(() => {
            B || P.Z.close();
        }, [B]);
    let W = (0, o.e7)([x.Z], () => x.Z.getCurrentPage()),
        K = (0, o.e7)([_.Z], () => null != R && _.Z.getEnabled(R)),
        z = (0, o.e7)([v.Z], () => null != R && v.Z.isEmpty(R)),
        V = (0, f.F)(R).length > 0,
        J = (0, y.o)(r);
    return (0, n.jsx)(d.Gt, {
        value: A,
        children: (0, n.jsx)(
            L,
            ((a = (function (e) {
                for (var a = 1; a < arguments.length; a++) {
                    var t = null != arguments[a] ? arguments[a] : {},
                        n = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols &&
                        (n = n.concat(
                            Object.getOwnPropertySymbols(t).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(t, e).enumerable;
                            }),
                        )),
                        n.forEach(function (a) {
                            var n;
                            (n = t[a]),
                                a in e
                                    ? Object.defineProperty(e, a, {
                                          value: n,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0,
                                      })
                                    : (e[a] = n);
                        });
                }
                return e;
            })(
                {
                    guild: r,
                    section: i,
                    theme: E,
                    sidebarTheme: N,
                    channels: Z,
                    showDirtyGuildTemplateIndicator: H,
                    analyticsLocation: s,
                    memberCount: F,
                },
                G,
            )),
            (t = t =
                {
                    canUnlinkChannels: V,
                    canViewGuildAnalytics: G.canViewGuildAnalytics,
                    onboardingStep: W,
                    onboardingEnabled: K,
                    welcomeScreenEmpty: z,
                    guildMetadata: b,
                    pinPermissionMigrationAvailable: J,
                }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(t))
                : (function (e, a) {
                      var t = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                          var n = Object.getOwnPropertySymbols(e);
                          t.push.apply(t, n);
                      }
                      return t;
                  })(Object(t)).forEach(function (e) {
                      Object.defineProperty(a, e, Object.getOwnPropertyDescriptor(t, e));
                  }),
            a),
        ),
    });
}
