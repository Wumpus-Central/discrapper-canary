t.r(n), t.d(n, { default: () => B });
var a = t(951288),
    c = t(647438),
    o = t(442837),
    r = t(37234),
    i = t(503089),
    l = t(100527),
    s = t(367907),
    d = t(906732),
    _ = t(456268),
    u = t(745752),
    p = t(45966),
    m = t(526120),
    b = t(751189),
    g = t(409059),
    h = t(918658),
    f = t(163400),
    y = t(190263),
    C = t(984802),
    I = t(210887),
    v = t(524329),
    O = t(995532),
    T = t(984933),
    w = t(650774),
    x = t(496675),
    S = t(434404),
    M = t(999382),
    P = t(359191),
    k = t(896007),
    A = t(978946),
    j = t(981631),
    L = t(388032);
function N(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        t = arguments.length > 2 ? arguments[2] : void 0;
    s.ZP.trackWithMetadata(j.rMx.SETTINGS_PANE_VIEWED, {
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
class E extends c.PureComponent {
    componentDidMount() {
        N(this.props.section, null, this.props.analyticsLocation);
    }
    componentWillUnmount() {
        S.Z.close();
    }
    componentDidUpdate(e) {
        let { section: n } = e,
            {
                section: t,
                isGuildAdmin: a,
                canManageGuild: c,
                canManageRoles: o,
                canManageBans: i,
                canManageNicknames: l,
                canManageGuildExpressions: s,
                canViewAuditLog: d,
                canManageWebhooks: _,
                canUnlinkChannels: u,
                canAccessMembersPage: p,
                canViewGuildAnalytics: m,
            } = this.props;
        t !== n && N(t, n),
            ((a || c || o || i || l || s || d || p || _ || u) &&
                (d || t !== j.pNK.AUDIT_LOG) &&
                (o || t !== j.pNK.ROLES) &&
                (s || t !== j.pNK.EMOJI) &&
                (s || t !== j.pNK.STICKERS) &&
                (s || t !== j.pNK.SOUNDBOARD) &&
                (i || t !== j.pNK.BANS) &&
                (m || t !== j.pNK.ANALYTICS) &&
                (p || t !== j.pNK.MEMBERS)) ||
                (0, r.xf)();
    }
    render() {
        var e, n;
        let {
            theme: t,
            sidebarTheme: c,
            section: o,
            guild: l,
            isGuildAdmin: s,
            canManageGuild: d,
            canViewAuditLog: _,
            canManageRoles: u,
            canManageGuildExpressions: p,
            canManageWebhooks: m,
            canUnlinkChannels: b,
            canManageBans: g,
            canAccessMembersPage: f,
            canViewGuildAnalytics: y,
            isOwner: C,
            isOwnerWithRequiredMfaLevel: I,
            showDirtyGuildTemplateIndicator: v,
            memberCount: O,
            onboardingStep: T,
            onboardingEnabled: w,
            welcomeScreenEmpty: x,
            guildMetadata: M,
            pinPermissionMigrationAvailable: P,
        } = this.props;
        if (null == l) return null;
        let j = (0, k.vE)({
                guild: l,
                isGuildAdmin: s,
                canManageGuild: d,
                canViewAuditLog: _,
                canManageRoles: u,
                canManageGuildExpressions: p,
                canManageWebhooks: m,
                canUnlinkChannels: b,
                canManageBans: g,
                canAccessMembersPage: f,
                canViewGuildAnalytics: y,
                isOwner: C,
                isOwnerWithRequiredMfaLevel: I,
                showDirtyGuildTemplateIndicator: v,
                memberCount: O,
                onboardingStep: T,
                onboardingEnabled: w,
                welcomeScreenEmpty: x,
                guildMetadata: M,
                section: o,
                pinPermissionMigrationAvailable: P,
            }),
            N = (null == (n = j.find((e) => e.section === o)) || null == (e = n.predicate) ? void 0 : e.call(n)) !== !1,
            D = (0, A.r)();
        return (0, a.jsxs)("div", {
            children: [
                (0, a.jsx)(i.ZP, {
                    theme: t,
                    sidebarTheme: c,
                    section: N && null != o ? o : D,
                    onSetSection: S.Z.setSection,
                    onClose: r.xf,
                    title: "" !== l.name ? l.name : L.intl.string(L.t["154/bG"]),
                    sections: j,
                }),
                (0, a.jsx)(h.d, { guildId: l.id }),
            ],
        });
    }
}
function B() {
    var e, n, t;
    let {
            guild: r,
            section: i,
            analyticsLocation: s,
            guildMetadata: h,
            isGuildMetadataLoaded: k,
        } = (0, o.cj)([M.Z], () => M.Z.getProps()),
        { analyticsLocations: A } = (0, d.ZP)(l.Z.GUILD_SETTINGS),
        L = (0, o.e7)([I.Z], () => I.Z.theme),
        N = (0, C.Ll)(),
        B = (0, o.e7)([T.ZP], () => (null != r ? T.ZP.getChannels(r.id).SELECTABLE : null), [r]),
        Z = (0, o.cj)([x.Z], () => (null != r ? x.Z.getGuildPermissionProps(r) : D)),
        G = null == r ? void 0 : r.id,
        U = (0, o.e7)([x.Z], () => null != r && x.Z.canAccessGuildSettings(r));
    c.useEffect(() => {
        k || null == G || (0, _.aC)(G);
    }, [k, G]);
    let R = null != (e = null == r ? void 0 : r.features.has(j.oNc.COMMUNITY)) && e;
    c.useEffect(() => {
        null != G && R && ((0, u.eM)(G), (0, v.RM)(G));
    }, [G, R]),
        c.useEffect(() => {
            null != G && (0, m.cP)(G);
        }, [G]);
    let H = (0, o.e7)([g.Z], () => {
            var e;
            return (
                (null == r ? void 0 : r.id) != null && (null == (e = g.Z.getForGuild(r.id)) ? void 0 : e.isDirty) === !0
            );
        }, [r]),
        F = (0, o.e7)([w.Z], () => w.Z.getMemberCount(null == r ? void 0 : r.id), [r]);
    c.useEffect(() => {
        null != G && Z.canManageGuild && b.Z.loadTemplatesForGuild(G);
    }, [G, Z.canManageGuild]),
        c.useEffect(() => {
            U || S.Z.close();
        }, [U]);
    let W = (0, o.e7)([P.Z], () => P.Z.getCurrentPage()),
        K = (0, o.e7)([p.Z], () => null != G && p.Z.getEnabled(G)),
        z = (0, o.e7)([O.Z], () => null != G && O.Z.isEmpty(G)),
        V = (0, f.F)(G).length > 0,
        q = (0, y.o)(r);
    return (0, a.jsx)(d.Gt, {
        value: A,
        children: (0, a.jsx)(
            E,
            ((n = (function (e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {},
                        a = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols &&
                        (a = a.concat(
                            Object.getOwnPropertySymbols(t).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(t, e).enumerable;
                            }),
                        )),
                        a.forEach(function (n) {
                            var a;
                            (a = t[n]),
                                n in e
                                    ? Object.defineProperty(e, n, {
                                          value: a,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0,
                                      })
                                    : (e[n] = a);
                        });
                }
                return e;
            })(
                {
                    guild: r,
                    section: i,
                    theme: L,
                    sidebarTheme: N,
                    channels: B,
                    showDirtyGuildTemplateIndicator: H,
                    analyticsLocation: s,
                    memberCount: F,
                },
                Z,
            )),
            (t = t =
                {
                    canUnlinkChannels: V,
                    canViewGuildAnalytics: Z.canViewGuildAnalytics,
                    onboardingStep: W,
                    onboardingEnabled: K,
                    welcomeScreenEmpty: z,
                    guildMetadata: h,
                    pinPermissionMigrationAvailable: q,
                }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t))
                : (function (e, n) {
                      var t = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                          var a = Object.getOwnPropertySymbols(e);
                          t.push.apply(t, a);
                      }
                      return t;
                  })(Object(t)).forEach(function (e) {
                      Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(t, e));
                  }),
            n),
        ),
    });
}
