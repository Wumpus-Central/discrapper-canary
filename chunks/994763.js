n.r(t), n.d(t, { default: () => D });
var r = n(200651),
    o = n(192379),
    i = n(442837),
    a = n(37234),
    l = n(503089),
    c = n(100527),
    s = n(367907),
    d = n(906732),
    u = n(456268),
    _ = n(745752),
    b = n(45966),
    g = n(526120),
    m = n(751189),
    p = n(409059),
    f = n(918658),
    h = n(163400),
    C = n(210887),
    S = n(524329),
    O = n(995532),
    v = n(984933),
    y = n(650774),
    x = n(496675),
    P = n(434404),
    w = n(600553),
    I = n(999382),
    T = n(359191),
    k = n(896007),
    j = n(978946),
    R = n(981631),
    N = n(388032);
function B(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        n = arguments.length > 2 ? arguments[2] : void 0;
    s.ZP.trackWithMetadata(R.rMx.SETTINGS_PANE_VIEWED, {
        settings_type: 'guild',
        origin_pane: t,
        destination_pane: e,
        location: n
    });
}
let Z = {
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
class E extends o.PureComponent {
    componentDidMount() {
        B(this.props.section, null, this.props.analyticsLocation);
    }
    componentWillUnmount() {
        P.Z.close();
    }
    componentDidUpdate(e) {
        let { section: t } = e,
            { section: n, isGuildAdmin: r, canManageGuild: o, canManageRoles: i, canManageBans: l, canManageNicknames: c, canManageGuildExpressions: s, canViewAuditLog: d, canManageWebhooks: u, canUnlinkChannels: _, canAccessMembersPage: b, canViewGuildAnalytics: g } = this.props;
        n !== t && B(n, t), ((r || o || i || l || c || s || d || b || u || _) && (d || n !== R.pNK.AUDIT_LOG) && (i || n !== R.pNK.ROLES) && (s || n !== R.pNK.EMOJI) && (s || n !== R.pNK.STICKERS) && (s || n !== R.pNK.SOUNDBOARD) && (l || n !== R.pNK.BANS) && (g || n !== R.pNK.ANALYTICS) && (b || n !== R.pNK.MEMBERS)) || (0, a.xf)();
    }
    render() {
        var e, t;
        let { theme: n, sidebarTheme: o, section: i, guild: c, isGuildAdmin: s, canManageGuild: d, canViewAuditLog: u, canManageRoles: _, canManageGuildExpressions: b, canManageWebhooks: g, canUnlinkChannels: m, canManageBans: p, canAccessMembersPage: h, canViewGuildAnalytics: C, isOwner: S, isOwnerWithRequiredMfaLevel: O, showDirtyGuildTemplateIndicator: v, memberCount: y, onboardingStep: x, onboardingEnabled: w, welcomeScreenEmpty: I, guildMetadata: T, isGuildSettingsFoundationEnabled: R } = this.props;
        if (null == c) return null;
        let B = (0, k.vE)({
                guild: c,
                isGuildAdmin: s,
                canManageGuild: d,
                canViewAuditLog: u,
                canManageRoles: _,
                canManageGuildExpressions: b,
                canManageWebhooks: g,
                canUnlinkChannels: m,
                canManageBans: p,
                canAccessMembersPage: h,
                canViewGuildAnalytics: C,
                isOwner: S,
                isOwnerWithRequiredMfaLevel: O,
                showDirtyGuildTemplateIndicator: v,
                memberCount: y,
                onboardingStep: x,
                onboardingEnabled: w,
                welcomeScreenEmpty: I,
                guildMetadata: T,
                section: i,
                isGuildSettingsFoundationEnabled: R
            }),
            Z = (null == (t = B.find((e) => e.section === i)) || null == (e = t.predicate) ? void 0 : e.call(t)) !== !1,
            E = (0, j.r)(c.id);
        return (0, r.jsxs)('div', {
            children: [
                (0, r.jsx)(l.ZP, {
                    theme: n,
                    sidebarTheme: o,
                    section: Z && null != i ? i : E,
                    onSetSection: P.Z.setSection,
                    onClose: a.xf,
                    title: '' !== c.toString() ? c.toString() : N.NW.string(N.t['154/bG']),
                    sections: B
                }),
                (0, r.jsx)(f.d, { guildId: c.id })
            ]
        });
    }
}
function D() {
    var e, t, n;
    let { guild: a, section: l, analyticsLocation: s, guildMetadata: f, isGuildMetadataLoaded: k } = (0, i.cj)([I.Z], () => I.Z.getProps()),
        { analyticsLocations: j } = (0, d.ZP)(c.Z.GUILD_SETTINGS),
        N = (0, i.e7)([C.Z], () => C.Z.theme),
        B = (0, i.e7)([C.Z], () => (C.Z.darkSidebar ? R.BRd.DARK : void 0)),
        D = (0, i.e7)([v.ZP], () => (null != a ? v.ZP.getChannels(a.id).SELECTABLE : null), [a]),
        A = (0, i.cj)([x.Z], () => (null != a ? x.Z.getGuildPermissionProps(a) : Z)),
        L = null == a ? void 0 : a.id,
        G = (0, i.e7)([x.Z], () => null != a && x.Z.canAccessGuildSettings(a));
    o.useEffect(() => {
        k || null == L || (0, u.aC)(L);
    }, [k, L]);
    let W = null != (e = null == a ? void 0 : a.hasFeature(R.oNc.COMMUNITY)) && e;
    o.useEffect(() => {
        null != L && W && ((0, _.eM)(L), (0, S.RM)(L));
    }, [L, W]),
        o.useEffect(() => {
            null != L && (0, g.cP)(L);
        }, [L]);
    let M = (0, i.e7)(
            [p.Z],
            () => {
                var e;
                return (null == a ? void 0 : a.id) != null && (null == (e = p.Z.getForGuild(a.id)) ? void 0 : e.isDirty) === !0;
            },
            [a]
        ),
        F = (0, i.e7)([y.Z], () => y.Z.getMemberCount(null == a ? void 0 : a.id), [a]);
    o.useEffect(() => {
        null != L && A.canManageGuild && m.Z.loadTemplatesForGuild(L);
    }, [L, A.canManageGuild]),
        o.useEffect(() => {
            G || P.Z.close();
        }, [G]);
    let U = (0, i.e7)([T.Z], () => T.Z.getCurrentPage()),
        H = (0, i.e7)([b.Z], () => null != L && b.Z.getEnabled(L)),
        V = (0, i.e7)([O.Z], () => null != L && O.Z.isEmpty(L)),
        q = (0, h.F)(L).length > 0,
        z = (0, w.Dj)({
            guildId: L,
            location: 'GuildSettings'
        });
    return (0, r.jsx)(d.Gt, {
        value: j,
        children: (0, r.jsx)(
            E,
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
                    guild: a,
                    section: l,
                    theme: N,
                    sidebarTheme: B,
                    channels: D,
                    showDirtyGuildTemplateIndicator: M,
                    analyticsLocation: s,
                    memberCount: F
                },
                A
            )),
            (n = n =
                {
                    canUnlinkChannels: q,
                    canViewGuildAnalytics: A.canViewGuildAnalytics,
                    onboardingStep: U,
                    onboardingEnabled: H,
                    welcomeScreenEmpty: V,
                    guildMetadata: f,
                    isGuildSettingsFoundationEnabled: z
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
