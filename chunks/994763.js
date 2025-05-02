n.r(t), n.d(t, { default: () => D });
var r = n(200651),
    i = n(192379),
    l = n(442837),
    o = n(37234),
    a = n(503089),
    c = n(100527),
    s = n(367907),
    u = n(906732),
    d = n(456268),
    p = n(745752),
    f = n(45966),
    g = n(526120),
    b = n(751189),
    h = n(409059),
    O = n(918658),
    _ = n(163400),
    y = n(210887),
    m = n(524329),
    S = n(995532),
    v = n(984933),
    P = n(650774),
    w = n(496675),
    j = n(434404),
    E = n(999382),
    x = n(359191),
    I = n(896007),
    C = n(978946),
    N = n(981631),
    Z = n(388032);
function R(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        n = arguments.length > 2 ? arguments[2] : void 0;
    s.ZP.trackWithMetadata(N.rMx.SETTINGS_PANE_VIEWED, {
        settings_type: 'guild',
        origin_pane: t,
        destination_pane: e,
        location: n
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
    isGuildAdmin: !1
};
class L extends i.PureComponent {
    componentDidMount() {
        R(this.props.section, null, this.props.analyticsLocation);
    }
    componentWillUnmount() {
        j.Z.close();
    }
    componentDidUpdate(e) {
        let { section: t } = e,
            { section: n, isGuildAdmin: r, canManageGuild: i, canManageRoles: l, canManageBans: a, canManageNicknames: c, canManageGuildExpressions: s, canViewAuditLog: u, canManageWebhooks: d, canUnlinkChannels: p, canAccessMembersPage: f, canViewGuildAnalytics: g } = this.props;
        n !== t && R(n, t), ((r || i || l || a || c || s || u || f || d || p) && (u || n !== N.pNK.AUDIT_LOG) && (l || n !== N.pNK.ROLES) && (s || n !== N.pNK.EMOJI) && (s || n !== N.pNK.STICKERS) && (s || n !== N.pNK.SOUNDBOARD) && (a || n !== N.pNK.BANS) && (g || n !== N.pNK.ANALYTICS) && (f || n !== N.pNK.MEMBERS)) || (0, o.xf)();
    }
    render() {
        var e, t;
        let { theme: n, sidebarTheme: i, section: l, guild: c, isGuildAdmin: s, canManageGuild: u, canViewAuditLog: d, canManageRoles: p, canManageGuildExpressions: f, canManageWebhooks: g, canUnlinkChannels: b, canManageBans: h, canAccessMembersPage: _, canViewGuildAnalytics: y, isOwner: m, isOwnerWithRequiredMfaLevel: S, showDirtyGuildTemplateIndicator: v, memberCount: P, onboardingStep: w, onboardingEnabled: E, welcomeScreenEmpty: x, guildMetadata: N } = this.props;
        if (null == c) return null;
        let R = (0, I.vE)({
                guild: c,
                isGuildAdmin: s,
                canManageGuild: u,
                canViewAuditLog: d,
                canManageRoles: p,
                canManageGuildExpressions: f,
                canManageWebhooks: g,
                canUnlinkChannels: b,
                canManageBans: h,
                canAccessMembersPage: _,
                canViewGuildAnalytics: y,
                isOwner: m,
                isOwnerWithRequiredMfaLevel: S,
                showDirtyGuildTemplateIndicator: v,
                memberCount: P,
                onboardingStep: w,
                onboardingEnabled: E,
                welcomeScreenEmpty: x,
                guildMetadata: N,
                section: l
            }),
            T = (null == (t = R.find((e) => e.section === l)) || null == (e = t.predicate) ? void 0 : e.call(t)) !== !1,
            L = (0, C.r)();
        return (0, r.jsxs)('div', {
            children: [
                (0, r.jsx)(a.ZP, {
                    theme: n,
                    sidebarTheme: i,
                    section: T && null != l ? l : L,
                    onSetSection: j.Z.setSection,
                    onClose: o.xf,
                    title: '' !== c.toString() ? c.toString() : Z.intl.string(Z.t['154/bG']),
                    sections: R
                }),
                (0, r.jsx)(O.d, { guildId: c.id })
            ]
        });
    }
}
function D() {
    var e, t, n;
    let { guild: o, section: a, analyticsLocation: s, guildMetadata: O, isGuildMetadataLoaded: I } = (0, l.cj)([E.Z], () => E.Z.getProps()),
        { analyticsLocations: C } = (0, u.ZP)(c.Z.GUILD_SETTINGS),
        Z = (0, l.e7)([y.Z], () => y.Z.theme),
        R = (0, l.e7)([y.Z], () => (y.Z.darkSidebar ? N.BRd.DARK : void 0)),
        D = (0, l.e7)([v.ZP], () => (null != o ? v.ZP.getChannels(o.id).SELECTABLE : null), [o]),
        k = (0, l.cj)([w.Z], () => (null != o ? w.Z.getGuildPermissionProps(o) : T)),
        A = null == o ? void 0 : o.id,
        G = (0, l.e7)([w.Z], () => null != o && w.Z.canAccessGuildSettings(o));
    i.useEffect(() => {
        I || null == A || (0, d.aC)(A);
    }, [I, A]);
    let B = null != (e = null == o ? void 0 : o.hasFeature(N.oNc.COMMUNITY)) && e;
    i.useEffect(() => {
        null != A && B && ((0, p.eM)(A), (0, m.RM)(A));
    }, [A, B]),
        i.useEffect(() => {
            null != A && (0, g.cP)(A);
        }, [A]);
    let M = (0, l.e7)(
            [h.Z],
            () => {
                var e;
                return (null == o ? void 0 : o.id) != null && (null == (e = h.Z.getForGuild(o.id)) ? void 0 : e.isDirty) === !0;
            },
            [o]
        ),
        U = (0, l.e7)([P.Z], () => P.Z.getMemberCount(null == o ? void 0 : o.id), [o]);
    i.useEffect(() => {
        null != A && k.canManageGuild && b.Z.loadTemplatesForGuild(A);
    }, [A, k.canManageGuild]),
        i.useEffect(() => {
            G || j.Z.close();
        }, [G]);
    let F = (0, l.e7)([x.Z], () => x.Z.getCurrentPage()),
        W = (0, l.e7)([f.Z], () => null != A && f.Z.getEnabled(A)),
        K = (0, l.e7)([S.Z], () => null != A && S.Z.isEmpty(A)),
        q = (0, _.F)(A).length > 0;
    return (0, r.jsx)(u.Gt, {
        value: C,
        children: (0, r.jsx)(
            L,
            ((t = (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    'function' == typeof Object.getOwnPropertySymbols &&
                        (r = r.concat(
                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                            })
                        )),
                        r.forEach(function (t) {
                            var r;
                            (r = n[t]),
                                t in e
                                    ? Object.defineProperty(e, t, {
                                          value: r,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0
                                      })
                                    : (e[t] = r);
                        });
                }
                return e;
            })(
                {
                    guild: o,
                    section: a,
                    theme: Z,
                    sidebarTheme: R,
                    channels: D,
                    showDirtyGuildTemplateIndicator: M,
                    analyticsLocation: s,
                    memberCount: U
                },
                k
            )),
            (n = n =
                {
                    canUnlinkChannels: q,
                    canViewGuildAnalytics: k.canViewGuildAnalytics,
                    onboardingStep: F,
                    onboardingEnabled: W,
                    welcomeScreenEmpty: K,
                    guildMetadata: O
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
            t)
        )
    });
}
