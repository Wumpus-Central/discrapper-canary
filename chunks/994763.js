t.r(n), t.d(n, { default: () => L });
var i = t(951288),
    c = t(647438),
    l = t(442837),
    o = t(37234),
    a = t(503089),
    r = t(100527),
    s = t(367907),
    d = t(906732),
    u = t(456268),
    p = t(745752),
    b = t(45966),
    f = t(526120),
    h = t(751189),
    g = t(409059),
    _ = t(918658),
    m = t(163400),
    y = t(190263),
    v = t(984802),
    O = t(210887),
    C = t(524329),
    Z = t(995532),
    j = t(984933),
    w = t(650774),
    E = t(496675),
    S = t(434404),
    P = t(999382),
    M = t(359191),
    I = t(896007),
    G = t(978946),
    N = t(981631),
    x = t(388032);
function D(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        t = arguments.length > 2 ? arguments[2] : void 0;
    s.ZP.trackWithMetadata(N.rMx.SETTINGS_PANE_VIEWED, {
        settings_type: "guild",
        origin_pane: n,
        destination_pane: e,
        location: t,
    });
}
let A = {
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
class k extends c.PureComponent {
    componentDidMount() {
        D(this.props.section, null, this.props.analyticsLocation);
    }
    componentWillUnmount() {
        S.Z.close();
    }
    componentDidUpdate(e) {
        let { section: n } = e,
            {
                section: t,
                isGuildAdmin: i,
                canManageGuild: c,
                canManageRoles: l,
                canManageBans: a,
                canManageNicknames: r,
                canManageGuildExpressions: s,
                canViewAuditLog: d,
                canManageWebhooks: u,
                canUnlinkChannels: p,
                canAccessMembersPage: b,
                canViewGuildAnalytics: f,
            } = this.props;
        t !== n && D(t, n),
            ((i || c || l || a || r || s || d || b || u || p) &&
                (d || t !== N.pNK.AUDIT_LOG) &&
                (l || t !== N.pNK.ROLES) &&
                (s || t !== N.pNK.EMOJI) &&
                (s || t !== N.pNK.STICKERS) &&
                (s || t !== N.pNK.SOUNDBOARD) &&
                (a || t !== N.pNK.BANS) &&
                (f || t !== N.pNK.ANALYTICS) &&
                (b || t !== N.pNK.MEMBERS)) ||
                (0, o.xf)();
    }
    render() {
        var e, n;
        let {
            theme: t,
            sidebarTheme: c,
            section: l,
            guild: r,
            isGuildAdmin: s,
            canManageGuild: d,
            canViewAuditLog: u,
            canManageRoles: p,
            canManageGuildExpressions: b,
            canManageWebhooks: f,
            canUnlinkChannels: h,
            canManageBans: g,
            canAccessMembersPage: m,
            canViewGuildAnalytics: y,
            isOwner: v,
            isOwnerWithRequiredMfaLevel: O,
            showDirtyGuildTemplateIndicator: C,
            memberCount: Z,
            onboardingStep: j,
            onboardingEnabled: w,
            welcomeScreenEmpty: E,
            guildMetadata: P,
            pinPermissionMigrationAvailable: M,
        } = this.props;
        if (null == r) return null;
        let N = (0, I.vE)({
                guild: r,
                isGuildAdmin: s,
                canManageGuild: d,
                canViewAuditLog: u,
                canManageRoles: p,
                canManageGuildExpressions: b,
                canManageWebhooks: f,
                canUnlinkChannels: h,
                canManageBans: g,
                canAccessMembersPage: m,
                canViewGuildAnalytics: y,
                isOwner: v,
                isOwnerWithRequiredMfaLevel: O,
                showDirtyGuildTemplateIndicator: C,
                memberCount: Z,
                onboardingStep: j,
                onboardingEnabled: w,
                welcomeScreenEmpty: E,
                guildMetadata: P,
                section: l,
                pinPermissionMigrationAvailable: M,
            }),
            D = (null == (n = N.find((e) => e.section === l)) || null == (e = n.predicate) ? void 0 : e.call(n)) !== !1,
            A = (0, G.r)();
        return (0, i.jsxs)("div", {
            children: [
                (0, i.jsx)(a.ZP, {
                    theme: t,
                    sidebarTheme: c,
                    section: D && null != l ? l : A,
                    onSetSection: S.Z.setSection,
                    onClose: o.xf,
                    title: "" !== r.name ? r.name : x.intl.string(x.t["154/bG"]),
                    sections: N,
                }),
                (0, i.jsx)(_.d, { guildId: r.id }),
            ],
        });
    }
}
function L() {
    var e, n, t;
    let {
            guild: o,
            section: a,
            analyticsLocation: s,
            guildMetadata: _,
            isGuildMetadataLoaded: I,
        } = (0, l.cj)([P.Z], () => P.Z.getProps()),
        { analyticsLocations: G } = (0, d.ZP)(r.Z.GUILD_SETTINGS),
        x = (0, l.e7)([O.Z], () => O.Z.theme),
        D = (0, v.Ll)(),
        L = (0, l.e7)([j.ZP], () => (null != o ? j.ZP.getChannels(o.id).SELECTABLE : null), [o]),
        T = (0, l.cj)([E.Z], () => (null != o ? E.Z.getGuildPermissionProps(o) : A)),
        B = null == o ? void 0 : o.id,
        K = (0, l.e7)([E.Z], () => null != o && E.Z.canAccessGuildSettings(o));
    c.useEffect(() => {
        I || null == B || (0, u.aC)(B);
    }, [I, B]);
    let U = null != (e = null == o ? void 0 : o.features.has(N.oNc.COMMUNITY)) && e;
    c.useEffect(() => {
        null != B && U && ((0, p.eM)(B), (0, C.RM)(B));
    }, [B, U]),
        c.useEffect(() => {
            null != B && (0, f.cP)(B);
        }, [B]);
    let W = (0, l.e7)([g.Z], () => {
            var e;
            return (
                (null == o ? void 0 : o.id) != null && (null == (e = g.Z.getForGuild(o.id)) ? void 0 : e.isDirty) === !0
            );
        }, [o]),
        R = (0, l.e7)([w.Z], () => w.Z.getMemberCount(null == o ? void 0 : o.id), [o]);
    c.useEffect(() => {
        null != B && T.canManageGuild && h.Z.loadTemplatesForGuild(B);
    }, [B, T.canManageGuild]),
        c.useEffect(() => {
            K || S.Z.close();
        }, [K]);
    let V = (0, l.e7)([M.Z], () => M.Z.getCurrentPage()),
        F = (0, l.e7)([b.Z], () => null != B && b.Z.getEnabled(B)),
        Y = (0, l.e7)([Z.Z], () => null != B && Z.Z.isEmpty(B)),
        q = (0, m.F)(B).length > 0,
        H = (0, y.o)(o);
    return (0, i.jsx)(d.Gt, {
        value: G,
        children: (0, i.jsx)(
            k,
            ((n = (function (e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {},
                        i = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols &&
                        (i = i.concat(
                            Object.getOwnPropertySymbols(t).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(t, e).enumerable;
                            }),
                        )),
                        i.forEach(function (n) {
                            var i;
                            (i = t[n]),
                                n in e
                                    ? Object.defineProperty(e, n, {
                                          value: i,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0,
                                      })
                                    : (e[n] = i);
                        });
                }
                return e;
            })(
                {
                    guild: o,
                    section: a,
                    theme: x,
                    sidebarTheme: D,
                    channels: L,
                    showDirtyGuildTemplateIndicator: W,
                    analyticsLocation: s,
                    memberCount: R,
                },
                T,
            )),
            (t = t =
                {
                    canUnlinkChannels: q,
                    canViewGuildAnalytics: T.canViewGuildAnalytics,
                    onboardingStep: V,
                    onboardingEnabled: F,
                    welcomeScreenEmpty: Y,
                    guildMetadata: _,
                    pinPermissionMigrationAvailable: H,
                }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t))
                : (function (e, n) {
                      var t = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                          var i = Object.getOwnPropertySymbols(e);
                          t.push.apply(t, i);
                      }
                      return t;
                  })(Object(t)).forEach(function (e) {
                      Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(t, e));
                  }),
            n),
        ),
    });
}
