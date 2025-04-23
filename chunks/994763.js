n.r(t), n.d(t, { default: () => L });
var r = n(200651),
    i = n(192379),
    o = n(442837),
    l = n(37234),
    a = n(503089),
    c = n(100527),
    s = n(367907),
    u = n(906732),
    d = n(456268),
    b = n(745752),
    p = n(45966),
    f = n(526120),
    g = n(751189),
    _ = n(409059),
    h = n(918658),
    m = n(163400),
    O = n(210887),
    y = n(524329),
    P = n(995532),
    S = n(984933),
    v = n(650774),
    C = n(496675),
    w = n(434404),
    I = n(999382),
    x = n(359191),
    j = n(896007),
    E = n(978946),
    N = n(981631),
    T = n(388032);
function Z(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        n = arguments.length > 2 ? arguments[2] : void 0;
    s.ZP.trackWithMetadata(N.rMx.SETTINGS_PANE_VIEWED, {
        settings_type: 'guild',
        origin_pane: t,
        destination_pane: e,
        location: n
    });
}
let R = {
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
class A extends i.PureComponent {
    componentDidMount() {
        Z(this.props.section, null, this.props.analyticsLocation);
    }
    componentWillUnmount() {
        w.Z.close();
    }
    componentDidUpdate(e) {
        let { section: t } = e,
            { section: n, isGuildAdmin: r, canManageGuild: i, canManageRoles: o, canManageBans: a, canManageNicknames: c, canManageGuildExpressions: s, canViewAuditLog: u, canManageWebhooks: d, canUnlinkChannels: b, canAccessMembersPage: p, canViewGuildAnalytics: f } = this.props;
        n !== t && Z(n, t), ((r || i || o || a || c || s || u || p || d || b) && (u || n !== N.pNK.AUDIT_LOG) && (o || n !== N.pNK.ROLES) && (s || n !== N.pNK.EMOJI) && (s || n !== N.pNK.STICKERS) && (s || n !== N.pNK.SOUNDBOARD) && (a || n !== N.pNK.BANS) && (f || n !== N.pNK.ANALYTICS) && (p || n !== N.pNK.MEMBERS)) || (0, l.xf)();
    }
    render() {
        var e, t;
        let { theme: n, sidebarTheme: i, section: o, guild: c, isGuildAdmin: s, canManageGuild: u, canViewAuditLog: d, canManageRoles: b, canManageGuildExpressions: p, canManageWebhooks: f, canUnlinkChannels: g, canManageBans: _, canAccessMembersPage: m, canViewGuildAnalytics: O, isOwner: y, isOwnerWithRequiredMfaLevel: P, showDirtyGuildTemplateIndicator: S, memberCount: v, onboardingStep: C, onboardingEnabled: I, welcomeScreenEmpty: x, guildMetadata: N } = this.props;
        if (null == c) return null;
        let Z = (0, j.vE)({
                guild: c,
                isGuildAdmin: s,
                canManageGuild: u,
                canViewAuditLog: d,
                canManageRoles: b,
                canManageGuildExpressions: p,
                canManageWebhooks: f,
                canUnlinkChannels: g,
                canManageBans: _,
                canAccessMembersPage: m,
                canViewGuildAnalytics: O,
                isOwner: y,
                isOwnerWithRequiredMfaLevel: P,
                showDirtyGuildTemplateIndicator: S,
                memberCount: v,
                onboardingStep: C,
                onboardingEnabled: I,
                welcomeScreenEmpty: x,
                guildMetadata: N,
                section: o
            }),
            R = (null == (t = Z.find((e) => e.section === o)) || null == (e = t.predicate) ? void 0 : e.call(t)) !== !1,
            A = (0, E.r)();
        return (0, r.jsxs)('div', {
            children: [
                (0, r.jsx)(a.ZP, {
                    theme: n,
                    sidebarTheme: i,
                    section: R && null != o ? o : A,
                    onSetSection: w.Z.setSection,
                    onClose: l.xf,
                    title: '' !== c.toString() ? c.toString() : T.intl.string(T.t['154/bG']),
                    sections: Z
                }),
                (0, r.jsx)(h.d, { guildId: c.id })
            ]
        });
    }
}
function L() {
    var e, t, n;
    let { guild: l, section: a, analyticsLocation: s, guildMetadata: h, isGuildMetadataLoaded: j } = (0, o.cj)([I.Z], () => I.Z.getProps()),
        { analyticsLocations: E } = (0, u.ZP)(c.Z.GUILD_SETTINGS),
        T = (0, o.e7)([O.Z], () => O.Z.theme),
        Z = (0, o.e7)([O.Z], () => (O.Z.darkSidebar ? N.BRd.DARK : void 0)),
        L = (0, o.e7)([S.ZP], () => (null != l ? S.ZP.getChannels(l.id).SELECTABLE : null), [l]),
        D = (0, o.cj)([C.Z], () => (null != l ? C.Z.getGuildPermissionProps(l) : R)),
        k = null == l ? void 0 : l.id,
        G = (0, o.e7)([C.Z], () => null != l && C.Z.canAccessGuildSettings(l));
    i.useEffect(() => {
        j || null == k || (0, d.aC)(k);
    }, [j, k]);
    let B = null != (e = null == l ? void 0 : l.hasFeature(N.oNc.COMMUNITY)) && e;
    i.useEffect(() => {
        null != k && B && ((0, b.eM)(k), (0, y.RM)(k));
    }, [k, B]),
        i.useEffect(() => {
            null != k && (0, f.cP)(k);
        }, [k]);
    let M = (0, o.e7)(
            [_.Z],
            () => {
                var e;
                return (null == l ? void 0 : l.id) != null && (null == (e = _.Z.getForGuild(l.id)) ? void 0 : e.isDirty) === !0;
            },
            [l]
        ),
        U = (0, o.e7)([v.Z], () => v.Z.getMemberCount(null == l ? void 0 : l.id), [l]);
    i.useEffect(() => {
        null != k && D.canManageGuild && g.Z.loadTemplatesForGuild(k);
    }, [k, D.canManageGuild]),
        i.useEffect(() => {
            G || w.Z.close();
        }, [G]);
    let F = (0, o.e7)([x.Z], () => x.Z.getCurrentPage()),
        W = (0, o.e7)([p.Z], () => null != k && p.Z.getEnabled(k)),
        V = (0, o.e7)([P.Z], () => null != k && P.Z.isEmpty(k)),
        K = (0, m.F)(k).length > 0;
    return (0, r.jsx)(u.Gt, {
        value: E,
        children: (0, r.jsx)(
            A,
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
                    guild: l,
                    section: a,
                    theme: T,
                    sidebarTheme: Z,
                    channels: L,
                    showDirtyGuildTemplateIndicator: M,
                    analyticsLocation: s,
                    memberCount: U
                },
                D
            )),
            (n = n =
                {
                    canUnlinkChannels: K,
                    canViewGuildAnalytics: D.canViewGuildAnalytics,
                    onboardingStep: F,
                    onboardingEnabled: W,
                    welcomeScreenEmpty: V,
                    guildMetadata: h
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
