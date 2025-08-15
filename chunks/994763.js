t.r(n), t.d(n, { default: () => k });
var l = t(255367),
    i = t(73800),
    a = t(442837),
    r = t(37234),
    o = t(503089),
    s = t(100527),
    c = t(367907),
    u = t(906732),
    d = t(456268),
    p = t(745752),
    g = t(45966),
    b = t(526120),
    f = t(751189),
    h = t(409059),
    m = t(918658),
    O = t(163400),
    v = t(190263),
    y = t(984802),
    Z = t(210887),
    j = t(524329),
    E = t(995532),
    P = t(984933),
    M = t(650774),
    S = t(496675),
    w = t(434404),
    G = t(999382),
    C = t(359191),
    N = t(896007),
    x = t(978946),
    A = t(981631),
    D = t(388032);
function L(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        t = arguments.length > 2 ? arguments[2] : void 0;
    c.ZP.trackWithMetadata(A.rMx.SETTINGS_PANE_VIEWED, {
        settings_type: "guild",
        origin_pane: n,
        destination_pane: e,
        location: t,
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
    isGuildAdmin: !1,
};
class I extends i.PureComponent {
    componentDidMount() {
        L(this.props.section, null, this.props.analyticsLocation);
    }
    componentWillUnmount() {
        w.Z.close();
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
                canViewGuildAnalytics: b,
            } = this.props;
        t !== n && L(t, n),
            ((l || i || a || o || s || c || u || g || d || p) &&
                (u || t !== A.pNK.AUDIT_LOG) &&
                (a || t !== A.pNK.ROLES) &&
                (c || t !== A.pNK.EMOJI) &&
                (c || t !== A.pNK.STICKERS) &&
                (c || t !== A.pNK.SOUNDBOARD) &&
                (o || t !== A.pNK.BANS) &&
                (b || t !== A.pNK.ANALYTICS) &&
                (g || t !== A.pNK.MEMBERS)) ||
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
            canManageWebhooks: b,
            canUnlinkChannels: f,
            canManageBans: h,
            canAccessMembersPage: O,
            canViewGuildAnalytics: v,
            isOwner: y,
            isOwnerWithRequiredMfaLevel: Z,
            showDirtyGuildTemplateIndicator: j,
            memberCount: E,
            onboardingStep: P,
            onboardingEnabled: M,
            welcomeScreenEmpty: S,
            guildMetadata: G,
            pinPermissionMigrationAvailable: C,
        } = this.props;
        if (null == s) return null;
        let A = (0, N.vE)({
                guild: s,
                isGuildAdmin: c,
                canManageGuild: u,
                canViewAuditLog: d,
                canManageRoles: p,
                canManageGuildExpressions: g,
                canManageWebhooks: b,
                canUnlinkChannels: f,
                canManageBans: h,
                canAccessMembersPage: O,
                canViewGuildAnalytics: v,
                isOwner: y,
                isOwnerWithRequiredMfaLevel: Z,
                showDirtyGuildTemplateIndicator: j,
                memberCount: E,
                onboardingStep: P,
                onboardingEnabled: M,
                welcomeScreenEmpty: S,
                guildMetadata: G,
                section: a,
                pinPermissionMigrationAvailable: C,
            }),
            L = (null == (n = A.find((e) => e.section === a)) || null == (e = n.predicate) ? void 0 : e.call(n)) !== !1,
            T = (0, x.r)();
        return (0, l.jsxs)("div", {
            children: [
                (0, l.jsx)(o.ZP, {
                    theme: t,
                    sidebarTheme: i,
                    section: L && null != a ? a : T,
                    onSetSection: w.Z.setSection,
                    onClose: r.xf,
                    title: "" !== s.name ? s.name : D.intl.string(D.t["154/bG"]),
                    sections: A,
                }),
                (0, l.jsx)(m.d, { guildId: s.id }),
            ],
        });
    }
}
function k() {
    var e, n, t;
    let {
            guild: r,
            section: o,
            analyticsLocation: c,
            guildMetadata: m,
            isGuildMetadataLoaded: N,
        } = (0, a.cj)([G.Z], () => G.Z.getProps()),
        { analyticsLocations: x } = (0, u.ZP)(s.Z.GUILD_SETTINGS),
        D = (0, a.e7)([Z.Z], () => Z.Z.theme),
        L = (0, y.Ll)(),
        k = (0, a.e7)([P.ZP], () => (null != r ? P.ZP.getChannels(r.id).SELECTABLE : null), [r]),
        K = (0, a.cj)([S.Z], () => (null != r ? S.Z.getGuildPermissionProps(r) : T)),
        _ = null == r ? void 0 : r.id,
        R = (0, a.e7)([S.Z], () => null != r && S.Z.canAccessGuildSettings(r));
    i.useEffect(() => {
        N || null == _ || (0, d.aC)(_);
    }, [N, _]);
    let U = null != (e = null == r ? void 0 : r.features.has(A.oNc.COMMUNITY)) && e;
    i.useEffect(() => {
        null != _ && U && ((0, p.eM)(_), (0, j.RM)(_));
    }, [_, U]),
        i.useEffect(() => {
            null != _ && (0, b.cP)(_);
        }, [_]);
    let B = (0, a.e7)([h.Z], () => {
            var e;
            return (
                (null == r ? void 0 : r.id) != null && (null == (e = h.Z.getForGuild(r.id)) ? void 0 : e.isDirty) === !0
            );
        }, [r]),
        F = (0, a.e7)([M.Z], () => M.Z.getMemberCount(null == r ? void 0 : r.id), [r]);
    i.useEffect(() => {
        null != _ && K.canManageGuild && f.Z.loadTemplatesForGuild(_);
    }, [_, K.canManageGuild]),
        i.useEffect(() => {
            R || w.Z.close();
        }, [R]);
    let W = (0, a.e7)([C.Z], () => C.Z.getCurrentPage()),
        V = (0, a.e7)([g.Z], () => null != _ && g.Z.getEnabled(_)),
        Y = (0, a.e7)([E.Z], () => null != _ && E.Z.isEmpty(_)),
        q = (0, O.F)(_).length > 0,
        J = (0, v.o)(r);
    return (0, l.jsx)(u.Gt, {
        value: x,
        children: (0, l.jsx)(
            I,
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
                    theme: D,
                    sidebarTheme: L,
                    channels: k,
                    showDirtyGuildTemplateIndicator: B,
                    analyticsLocation: c,
                    memberCount: F,
                },
                K,
            )),
            (t = t =
                {
                    canUnlinkChannels: q,
                    canViewGuildAnalytics: K.canViewGuildAnalytics,
                    onboardingStep: W,
                    onboardingEnabled: V,
                    welcomeScreenEmpty: Y,
                    guildMetadata: m,
                    pinPermissionMigrationAvailable: J,
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
