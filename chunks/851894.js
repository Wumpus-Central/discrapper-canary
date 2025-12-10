n.d(t, { Z: () => Z });
var r = n(54381),
    i = n(473749),
    a = n(512722),
    o = n.n(a),
    s = n(442837),
    l = n(481060),
    c = n(570140),
    u = n(497321),
    d = n(100527),
    f = n(367907),
    p = n(906732),
    _ = n(566697),
    m = n(150039),
    h = n(296810),
    g = n(678135),
    E = n(643879),
    b = n(621853),
    y = n(271383),
    O = n(246946),
    v = n(594174),
    S = n(63063),
    I = n(74538),
    T = n(18438),
    C = n(778825),
    A = n(856607),
    N = n(594496),
    P = n(856768),
    R = n(981631),
    D = n(388032),
    w = n(813709);
function x(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function L(e) {
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
                x(e, t, n[t]);
            });
    }
    return e;
}
function j(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function M(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : j(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function k(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = U(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function U(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function G(e) {
    (0, l.ZDy)(async () => {
        let { default: t } = await n.e("84509").then(n.bind(n, 933696));
        return (n) => (0, r.jsx)(t, L({ source: M(L({}, e), { page: R.ZY5.GUILD_MEMBER_PROFILE_SETTINGS }) }, n));
    });
}
function Z(e) {
    var t, n;
    let { selectedGuild: a } = e,
        { analyticsLocations: x } = (0, p.ZP)(d.Z.USER_SETTINGS_GUILD_PROFILE),
        j = (0, s.e7)([v.default], () => {
            let e = v.default.getCurrentUser();
            return o()(null != e, "GuildIdentitySettingsPage: user cannot be undefined"), e;
        }),
        U = (0, s.e7)([y.ZP], () => (null != a ? y.ZP.getMember(a.id, j.id) : null)),
        Z = (0, s.e7)([b.Z], () => !b.Z.isFetchingProfile(j.id, null == a ? void 0 : a.id)),
        B = (0, s.e7)([O.Z], () => O.Z.hidePersonalInformation),
        F = (0, s.cj)([C.Z], () => M(L({}, C.Z.getAllPending()), { source: C.Z.getSource() })),
        { source: V, pendingAvatar: H, pendingNameplate: Y } = F,
        W = k(F, ["source", "pendingAvatar", "pendingNameplate"]),
        K = (0, E.SD)({
            userId: j.id,
            image: H,
        }),
        z = (0, m.Ys)({
            pendingValue: Y,
            userValue: null == j || null == (t = j.collectibles) ? void 0 : t.nameplate,
            guildValue: null == U || null == (n = U.collectibles) ? void 0 : n.nameplate,
            guildId: null == a ? void 0 : a.id,
        }),
        { pendingDisplayNameStyles: q } = (0, m.mD)(j, null == a ? void 0 : a.id);
    return (i.useEffect(() => () => c.Z.wait(T.W3), []),
    i.useEffect(() => {
        null != V &&
            f.ZP.trackWithMetadata(R.rMx.SETTINGS_PANE_VIEWED, {
                settings_type: "guild",
                destination_pane: R.jXE.SETTINGS_CUSTOMIZE_PROFILE,
                source: V,
            });
    }, [V]),
    B)
        ? (0, r.jsx)(u.Z, {})
        : Z
          ? (0, r.jsxs)(p.Gt, {
                value: x,
                children: [
                    (0, r.jsx)(l.Text, {
                        variant: "text-sm/normal",
                        children: D.intl.format(D.t["/PTB2E"], {
                            helpCenterLink: S.Z.getArticleURL(R.BhN.GUILD_PROFILES),
                        }),
                    }),
                    null != a
                        ? (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsx)(P.Z, {
                                      guildId: a.id,
                                      onChange: (e) => {
                                          null != e && (0, T.HP)(e);
                                      },
                                  }),
                                  (0, r.jsx)(h.Z, {
                                      profilePreviewTitle: (0, r.jsx)(l.Heading, {
                                          variant: "heading-md/medium",
                                          className: w.profilePreviewTitle,
                                          children: D.intl.formatToPlainString(D.t.Tc0slG, {
                                              guildName: null == a ? void 0 : a.name,
                                          }),
                                      }),
                                      profilePreview: (0, r.jsx)(
                                          g.Z,
                                          M(L({}, W), {
                                              pendingAvatar: K,
                                              pendingDisplayNameStyles: q,
                                              user: j,
                                              guild: a,
                                              canUsePremiumCustomization: I.ZP.canUsePremiumProfileCustomization(j),
                                              onUpsellClick: G,
                                          }),
                                      ),
                                      nameplatePreview: (0, r.jsx)(
                                          _.Z,
                                          M(L({}, W), {
                                              pendingDisplayNameStyles: q,
                                              user: j,
                                              guildId: null == a ? void 0 : a.id,
                                              nameplate: z,
                                              className: null == z ? w.nameplatePreviewPlaceholder : void 0,
                                              isHighlighted: !0,
                                          }),
                                      ),
                                      children: (0, r.jsx)(N.Z, {}),
                                  }),
                              ],
                          })
                        : (0, r.jsx)(A.Z, {}),
                ],
            })
          : (0, r.jsx)(l.$jN, {});
}
