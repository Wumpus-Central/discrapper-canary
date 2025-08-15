n.r(t), n.d(t, { default: () => A });
var r = n(255367),
    i = n(73800),
    o = n(442837),
    a = n(37234),
    l = n(503089),
    c = n(100527),
    s = n(367907),
    u = n(906732),
    d = n(456268),
    f = n(745752),
    p = n(45966),
    h = n(526120),
    g = n(751189),
    b = n(409059),
    y = n(918658),
    v = n(163400),
    O = n(190263),
    m = n(984802),
    C = n(210887),
    T = n(524329),
    I = n(995532),
    k = n(984933),
    D = n(650774),
    j = n(496675),
    _ = n(434404),
    P = n(999382),
    w = n(359191),
    M = n(896007),
    S = n(978946),
    E = n(981631),
    Z = n(388032);
function N(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        n = arguments.length > 2 ? arguments[2] : void 0;
    s.ZP.trackWithMetadata(E.rMx.SETTINGS_PANE_VIEWED, {
        settings_type: "guild",
        origin_pane: t,
        destination_pane: e,
        location: n,
    });
}
let x = {
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
class G extends i.PureComponent {
    componentDidMount() {
        N(this.props.section, null, this.props.analyticsLocation);
    }
    componentWillUnmount() {
        _.Z.close();
    }
    componentDidUpdate(e) {
        let { section: t } = e,
            {
                section: n,
                isGuildAdmin: r,
                canManageGuild: i,
                canManageRoles: o,
                canManageBans: l,
                canManageNicknames: c,
                canManageGuildExpressions: s,
                canViewAuditLog: u,
                canManageWebhooks: d,
                canUnlinkChannels: f,
                canAccessMembersPage: p,
                canViewGuildAnalytics: h,
            } = this.props;
        n !== t && N(n, t),
            ((r || i || o || l || c || s || u || p || d || f) &&
                (u || n !== E.pNK.AUDIT_LOG) &&
                (o || n !== E.pNK.ROLES) &&
                (s || n !== E.pNK.EMOJI) &&
                (s || n !== E.pNK.STICKERS) &&
                (s || n !== E.pNK.SOUNDBOARD) &&
                (l || n !== E.pNK.BANS) &&
                (h || n !== E.pNK.ANALYTICS) &&
                (p || n !== E.pNK.MEMBERS)) ||
                (0, a.xf)();
    }
    render() {
        var e, t;
        let {
            theme: n,
            sidebarTheme: i,
            section: o,
            guild: c,
            isGuildAdmin: s,
            canManageGuild: u,
            canViewAuditLog: d,
            canManageRoles: f,
            canManageGuildExpressions: p,
            canManageWebhooks: h,
            canUnlinkChannels: g,
            canManageBans: b,
            canAccessMembersPage: v,
            canViewGuildAnalytics: O,
            isOwner: m,
            isOwnerWithRequiredMfaLevel: C,
            showDirtyGuildTemplateIndicator: T,
            memberCount: I,
            onboardingStep: k,
            onboardingEnabled: D,
            welcomeScreenEmpty: j,
            guildMetadata: P,
            pinPermissionMigrationAvailable: w,
        } = this.props;
        if (null == c) return null;
        let E = (0, M.vE)({
                guild: c,
                isGuildAdmin: s,
                canManageGuild: u,
                canViewAuditLog: d,
                canManageRoles: f,
                canManageGuildExpressions: p,
                canManageWebhooks: h,
                canUnlinkChannels: g,
                canManageBans: b,
                canAccessMembersPage: v,
                canViewGuildAnalytics: O,
                isOwner: m,
                isOwnerWithRequiredMfaLevel: C,
                showDirtyGuildTemplateIndicator: T,
                memberCount: I,
                onboardingStep: k,
                onboardingEnabled: D,
                welcomeScreenEmpty: j,
                guildMetadata: P,
                section: o,
                pinPermissionMigrationAvailable: w,
            }),
            N = (null == (t = E.find((e) => e.section === o)) || null == (e = t.predicate) ? void 0 : e.call(t)) !== !1,
            x = (0, S.r)();
        return (0, r.jsxs)("div", {
            children: [
                (0, r.jsx)(l.ZP, {
                    theme: n,
                    sidebarTheme: i,
                    section: N && null != o ? o : x,
                    onSetSection: _.Z.setSection,
                    onClose: a.xf,
                    title: "" !== c.name ? c.name : Z.intl.string(Z.t["154/bG"]),
                    sections: E,
                }),
                (0, r.jsx)(y.d, { guildId: c.id }),
            ],
        });
    }
}
function A() {
    var e, t, n;
    let {
            guild: a,
            section: l,
            analyticsLocation: s,
            guildMetadata: y,
            isGuildMetadataLoaded: M,
        } = (0, o.cj)([P.Z], () => P.Z.getProps()),
        { analyticsLocations: S } = (0, u.ZP)(c.Z.GUILD_SETTINGS),
        Z = (0, o.e7)([C.Z], () => C.Z.theme),
        N = (0, m.Ll)(),
        A = (0, o.e7)([k.ZP], () => (null != a ? k.ZP.getChannels(a.id).SELECTABLE : null), [a]),
        L = (0, o.cj)([j.Z], () => (null != a ? j.Z.getGuildPermissionProps(a) : x)),
        R = null == a ? void 0 : a.id,
        K = (0, o.e7)([j.Z], () => null != a && j.Z.canAccessGuildSettings(a));
    i.useEffect(() => {
        M || null == R || (0, d.aC)(R);
    }, [M, R]);
    let B = null != (e = null == a ? void 0 : a.features.has(E.oNc.COMMUNITY)) && e;
    i.useEffect(() => {
        null != R && B && ((0, f.eM)(R), (0, T.RM)(R));
    }, [R, B]),
        i.useEffect(() => {
            null != R && (0, h.cP)(R);
        }, [R]);
    let H = (0, o.e7)([b.Z], () => {
            var e;
            return (
                (null == a ? void 0 : a.id) != null && (null == (e = b.Z.getForGuild(a.id)) ? void 0 : e.isDirty) === !0
            );
        }, [a]),
        U = (0, o.e7)([D.Z], () => D.Z.getMemberCount(null == a ? void 0 : a.id), [a]);
    i.useEffect(() => {
        null != R && L.canManageGuild && g.Z.loadTemplatesForGuild(R);
    }, [R, L.canManageGuild]),
        i.useEffect(() => {
            K || _.Z.close();
        }, [K]);
    let F = (0, o.e7)([w.Z], () => w.Z.getCurrentPage()),
        W = (0, o.e7)([p.Z], () => null != R && p.Z.getEnabled(R)),
        V = (0, o.e7)([I.Z], () => null != R && I.Z.isEmpty(R)),
        Y = (0, v.F)(R).length > 0,
        q = (0, O.o)(a);
    return (0, r.jsx)(u.Gt, {
        value: S,
        children: (0, r.jsx)(
            G,
            ((t = (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols &&
                        (r = r.concat(
                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                            }),
                        )),
                        r.forEach(function (t) {
                            var r;
                            (r = n[t]),
                                t in e
                                    ? Object.defineProperty(e, t, {
                                          value: r,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0,
                                      })
                                    : (e[t] = r);
                        });
                }
                return e;
            })(
                {
                    guild: a,
                    section: l,
                    theme: Z,
                    sidebarTheme: N,
                    channels: A,
                    showDirtyGuildTemplateIndicator: H,
                    analyticsLocation: s,
                    memberCount: U,
                },
                L,
            )),
            (n = n =
                {
                    canUnlinkChannels: Y,
                    canViewGuildAnalytics: L.canViewGuildAnalytics,
                    onboardingStep: F,
                    onboardingEnabled: W,
                    welcomeScreenEmpty: V,
                    guildMetadata: y,
                    pinPermissionMigrationAvailable: q,
                }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                : (function (e, t) {
                      var n = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                          var r = Object.getOwnPropertySymbols(e);
                          n.push.apply(n, r);
                      }
                      return n;
                  })(Object(n)).forEach(function (e) {
                      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                  }),
            t),
        ),
    });
}
