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
    p = n(745752),
    f = n(45966),
    h = n(526120),
    g = n(751189),
    b = n(409059),
    y = n(918658),
    v = n(163400),
    O = n(190263),
    m = n(984802),
    C = n(210887),
    T = n(524329),
    _ = n(995532),
    I = n(984933),
    k = n(650774),
    D = n(496675),
    w = n(434404),
    j = n(999382),
    P = n(359191),
    E = n(896007),
    S = n(978946),
    M = n(981631),
    N = n(388032);
function Z(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        n = arguments.length > 2 ? arguments[2] : void 0;
    s.ZP.trackWithMetadata(M.rMx.SETTINGS_PANE_VIEWED, {
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
class R extends i.PureComponent {
    componentDidMount() {
        Z(this.props.section, null, this.props.analyticsLocation);
    }
    componentWillUnmount() {
        w.Z.close();
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
                canUnlinkChannels: p,
                canAccessMembersPage: f,
                canViewGuildAnalytics: h,
            } = this.props;
        n !== t && Z(n, t),
            ((r || i || o || l || c || s || u || f || d || p) &&
                (u || n !== M.pNK.AUDIT_LOG) &&
                (o || n !== M.pNK.ROLES) &&
                (s || n !== M.pNK.EMOJI) &&
                (s || n !== M.pNK.STICKERS) &&
                (s || n !== M.pNK.SOUNDBOARD) &&
                (l || n !== M.pNK.BANS) &&
                (h || n !== M.pNK.ANALYTICS) &&
                (f || n !== M.pNK.MEMBERS)) ||
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
            canManageRoles: p,
            canManageGuildExpressions: f,
            canManageWebhooks: h,
            canUnlinkChannels: g,
            canManageBans: b,
            canAccessMembersPage: v,
            canViewGuildAnalytics: O,
            isOwner: m,
            isOwnerWithRequiredMfaLevel: C,
            showDirtyGuildTemplateIndicator: T,
            memberCount: _,
            onboardingStep: I,
            onboardingEnabled: k,
            welcomeScreenEmpty: D,
            guildMetadata: j,
            pinPermissionMigrationAvailable: P,
        } = this.props;
        if (null == c) return null;
        let M = (0, E.vE)({
                guild: c,
                isGuildAdmin: s,
                canManageGuild: u,
                canViewAuditLog: d,
                canManageRoles: p,
                canManageGuildExpressions: f,
                canManageWebhooks: h,
                canUnlinkChannels: g,
                canManageBans: b,
                canAccessMembersPage: v,
                canViewGuildAnalytics: O,
                isOwner: m,
                isOwnerWithRequiredMfaLevel: C,
                showDirtyGuildTemplateIndicator: T,
                memberCount: _,
                onboardingStep: I,
                onboardingEnabled: k,
                welcomeScreenEmpty: D,
                guildMetadata: j,
                section: o,
                pinPermissionMigrationAvailable: P,
            }),
            Z = (null == (t = M.find((e) => e.section === o)) || null == (e = t.predicate) ? void 0 : e.call(t)) !== !1,
            x = (0, S.r)();
        return (0, r.jsxs)("div", {
            children: [
                (0, r.jsx)(l.ZP, {
                    theme: n,
                    sidebarTheme: i,
                    section: Z && null != o ? o : x,
                    onSetSection: w.Z.setSection,
                    onClose: a.xf,
                    title: "" !== c.name ? c.name : N.intl.string(N.t["154/bG"]),
                    sections: M,
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
            isGuildMetadataLoaded: E,
        } = (0, o.cj)([j.Z], () => j.Z.getProps()),
        { analyticsLocations: S } = (0, u.ZP)(c.Z.GUILD_SETTINGS),
        N = (0, o.e7)([C.Z], () => C.Z.theme),
        Z = (0, m.Ll)(),
        A = (0, o.e7)([I.ZP], () => (null != a ? I.ZP.getChannels(a.id).SELECTABLE : null), [a]),
        L = (0, o.cj)([D.Z], () => (null != a ? D.Z.getGuildPermissionProps(a) : x)),
        B = null == a ? void 0 : a.id,
        G = (0, o.e7)([D.Z], () => null != a && D.Z.canAccessGuildSettings(a));
    i.useEffect(() => {
        E || null == B || (0, d.aC)(B);
    }, [E, B]);
    let F = null != (e = null == a ? void 0 : a.features.has(M.oNc.COMMUNITY)) && e;
    i.useEffect(() => {
        null != B && F && ((0, p.eM)(B), (0, T.RM)(B));
    }, [B, F]),
        i.useEffect(() => {
            null != B && (0, h.cP)(B);
        }, [B]);
    let K = (0, o.e7)([b.Z], () => {
            var e;
            return (
                (null == a ? void 0 : a.id) != null && (null == (e = b.Z.getForGuild(a.id)) ? void 0 : e.isDirty) === !0
            );
        }, [a]),
        U = (0, o.e7)([k.Z], () => k.Z.getMemberCount(null == a ? void 0 : a.id), [a]);
    i.useEffect(() => {
        null != B && L.canManageGuild && g.Z.loadTemplatesForGuild(B);
    }, [B, L.canManageGuild]),
        i.useEffect(() => {
            G || w.Z.close();
        }, [G]);
    let H = (0, o.e7)([P.Z], () => P.Z.getCurrentPage()),
        W = (0, o.e7)([f.Z], () => null != B && f.Z.getEnabled(B)),
        V = (0, o.e7)([_.Z], () => null != B && _.Z.isEmpty(B)),
        Y = (0, v.F)(B).length > 0,
        q = (0, O.o)(a);
    return (0, r.jsx)(u.Gt, {
        value: S,
        children: (0, r.jsx)(
            R,
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
                    theme: N,
                    sidebarTheme: Z,
                    channels: A,
                    showDirtyGuildTemplateIndicator: K,
                    analyticsLocation: s,
                    memberCount: U,
                },
                L,
            )),
            (n = n =
                {
                    canUnlinkChannels: Y,
                    canViewGuildAnalytics: L.canViewGuildAnalytics,
                    onboardingStep: H,
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
