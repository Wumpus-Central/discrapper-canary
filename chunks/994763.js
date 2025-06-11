n.r(t), n.d(t, { default: () => D });
var a = n(255367),
    r = n(73800),
    o = n(442837),
    i = n(37234),
    c = n(503089),
    l = n(100527),
    s = n(367907),
    u = n(906732),
    d = n(456268),
    p = n(745752),
    g = n(45966),
    m = n(526120),
    _ = n(751189),
    b = n(409059),
    f = n(918658),
    h = n(163400),
    y = n(210887),
    O = n(524329),
    C = n(995532),
    S = n(984933),
    v = n(650774),
    T = n(496675),
    I = n(434404),
    P = n(999382),
    x = n(359191),
    w = n(896007),
    j = n(978946),
    E = n(981631),
    R = n(388032);
function N(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        n = arguments.length > 2 ? arguments[2] : void 0;
    s.ZP.trackWithMetadata(E.rMx.SETTINGS_PANE_VIEWED, {
        settings_type: 'guild',
        origin_pane: t,
        destination_pane: e,
        location: n
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
    isGuildAdmin: !1
};
class Z extends r.PureComponent {
    componentDidMount() {
        N(this.props.section, null, this.props.analyticsLocation);
    }
    componentWillUnmount() {
        I.Z.close();
    }
    componentDidUpdate(e) {
        let { section: t } = e,
            { section: n, isGuildAdmin: a, canManageGuild: r, canManageRoles: o, canManageBans: c, canManageNicknames: l, canManageGuildExpressions: s, canViewAuditLog: u, canManageWebhooks: d, canUnlinkChannels: p, canAccessMembersPage: g, canViewGuildAnalytics: m } = this.props;
        n !== t && N(n, t), ((a || r || o || c || l || s || u || g || d || p) && (u || n !== E.pNK.AUDIT_LOG) && (o || n !== E.pNK.ROLES) && (s || n !== E.pNK.EMOJI) && (s || n !== E.pNK.STICKERS) && (s || n !== E.pNK.SOUNDBOARD) && (c || n !== E.pNK.BANS) && (m || n !== E.pNK.ANALYTICS) && (g || n !== E.pNK.MEMBERS)) || (0, i.xf)();
    }
    render() {
        var e, t;
        let { theme: n, sidebarTheme: r, section: o, guild: l, isGuildAdmin: s, canManageGuild: u, canViewAuditLog: d, canManageRoles: p, canManageGuildExpressions: g, canManageWebhooks: m, canUnlinkChannels: _, canManageBans: b, canAccessMembersPage: h, canViewGuildAnalytics: y, isOwner: O, isOwnerWithRequiredMfaLevel: C, showDirtyGuildTemplateIndicator: S, memberCount: v, onboardingStep: T, onboardingEnabled: P, welcomeScreenEmpty: x, guildMetadata: E } = this.props;
        if (null == l) return null;
        let N = (0, w.vE)({
                guild: l,
                isGuildAdmin: s,
                canManageGuild: u,
                canViewAuditLog: d,
                canManageRoles: p,
                canManageGuildExpressions: g,
                canManageWebhooks: m,
                canUnlinkChannels: _,
                canManageBans: b,
                canAccessMembersPage: h,
                canViewGuildAnalytics: y,
                isOwner: O,
                isOwnerWithRequiredMfaLevel: C,
                showDirtyGuildTemplateIndicator: S,
                memberCount: v,
                onboardingStep: T,
                onboardingEnabled: P,
                welcomeScreenEmpty: x,
                guildMetadata: E,
                section: o
            }),
            A = (null == (t = N.find((e) => e.section === o)) || null == (e = t.predicate) ? void 0 : e.call(t)) !== !1,
            Z = (0, j.r)();
        return (0, a.jsxs)('div', {
            children: [
                (0, a.jsx)(c.ZP, {
                    theme: n,
                    sidebarTheme: r,
                    section: A && null != o ? o : Z,
                    onSetSection: I.Z.setSection,
                    onClose: i.xf,
                    title: '' !== l.toString() ? l.toString() : R.intl.string(R.t['154/bG']),
                    sections: N
                }),
                (0, a.jsx)(f.d, { guildId: l.id })
            ]
        });
    }
}
function D() {
    var e, t, n;
    let { guild: i, section: c, analyticsLocation: s, guildMetadata: f, isGuildMetadataLoaded: w } = (0, o.cj)([P.Z], () => P.Z.getProps()),
        { analyticsLocations: j } = (0, u.ZP)(l.Z.GUILD_SETTINGS),
        R = (0, o.e7)([y.Z], () => y.Z.theme),
        N = (0, o.e7)([y.Z], () => (y.Z.darkSidebar ? E.BRd.DARK : void 0)),
        D = (0, o.e7)([S.ZP], () => (null != i ? S.ZP.getChannels(i.id).SELECTABLE : null), [i]),
        L = (0, o.cj)([T.Z], () => (null != i ? T.Z.getGuildPermissionProps(i) : A)),
        k = null == i ? void 0 : i.id,
        M = (0, o.e7)([T.Z], () => null != i && T.Z.canAccessGuildSettings(i));
    r.useEffect(() => {
        w || null == k || (0, d.aC)(k);
    }, [w, k]);
    let G = null != (e = null == i ? void 0 : i.hasFeature(E.oNc.COMMUNITY)) && e;
    r.useEffect(() => {
        null != k && G && ((0, p.eM)(k), (0, O.RM)(k));
    }, [k, G]),
        r.useEffect(() => {
            null != k && (0, m.cP)(k);
        }, [k]);
    let B = (0, o.e7)(
            [b.Z],
            () => {
                var e;
                return (null == i ? void 0 : i.id) != null && (null == (e = b.Z.getForGuild(i.id)) ? void 0 : e.isDirty) === !0;
            },
            [i]
        ),
        U = (0, o.e7)([v.Z], () => v.Z.getMemberCount(null == i ? void 0 : i.id), [i]);
    r.useEffect(() => {
        null != k && L.canManageGuild && _.Z.loadTemplatesForGuild(k);
    }, [k, L.canManageGuild]),
        r.useEffect(() => {
            M || I.Z.close();
        }, [M]);
    let F = (0, o.e7)([x.Z], () => x.Z.getCurrentPage()),
        W = (0, o.e7)([g.Z], () => null != k && g.Z.getEnabled(k)),
        H = (0, o.e7)([C.Z], () => null != k && C.Z.isEmpty(k)),
        V = (0, h.F)(k).length > 0;
    return (0, a.jsx)(u.Gt, {
        value: j,
        children: (0, a.jsx)(
            Z,
            ((t = (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        a = Object.keys(n);
                    'function' == typeof Object.getOwnPropertySymbols &&
                        (a = a.concat(
                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                            })
                        )),
                        a.forEach(function (t) {
                            var a;
                            (a = n[t]),
                                t in e
                                    ? Object.defineProperty(e, t, {
                                          value: a,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0
                                      })
                                    : (e[t] = a);
                        });
                }
                return e;
            })(
                {
                    guild: i,
                    section: c,
                    theme: R,
                    sidebarTheme: N,
                    channels: D,
                    showDirtyGuildTemplateIndicator: B,
                    analyticsLocation: s,
                    memberCount: U
                },
                L
            )),
            (n = n =
                {
                    canUnlinkChannels: V,
                    canViewGuildAnalytics: L.canViewGuildAnalytics,
                    onboardingStep: F,
                    onboardingEnabled: W,
                    welcomeScreenEmpty: H,
                    guildMetadata: f
                }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                : (function (e, t) {
                      var n = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                          var a = Object.getOwnPropertySymbols(e);
                          n.push.apply(n, a);
                      }
                      return n;
                  })(Object(n)).forEach(function (e) {
                      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                  }),
            t)
        )
    });
}
