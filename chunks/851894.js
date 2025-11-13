n.d(t, { Z: () => B });
var r = n(951288),
    i = n(647438),
    a = n(512722),
    o = n.n(a),
    s = n(442837),
    l = n(481060),
    c = n(570140),
    u = n(497321),
    d = n(100527),
    f = n(367907),
    _ = n(906732),
    p = n(566697),
    h = n(150039),
    m = n(296810),
    g = n(678135),
    E = n(643879),
    b = n(621853),
    y = n(271383),
    O = n(246946),
    v = n(594174),
    I = n(63063),
    T = n(74538),
    S = n(18438),
    A = n(778825),
    C = n(856607),
    N = n(594496),
    R = n(856768),
    P = n(981631),
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
function M(e, t) {
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
function j(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : M(Object(t)).forEach(function (n) {
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
        return (n) => (0, r.jsx)(t, L({ source: j(L({}, e), { page: P.ZY5.GUILD_MEMBER_PROFILE_SETTINGS }) }, n));
    });
}
function B(e) {
    var t, n;
    let { selectedGuild: a } = e,
        { analyticsLocations: x } = (0, _.ZP)(d.Z.USER_SETTINGS_GUILD_PROFILE),
        M = (0, s.e7)([v.default], () => {
            let e = v.default.getCurrentUser();
            return o()(null != e, "GuildIdentitySettingsPage: user cannot be undefined"), e;
        }),
        U = (0, s.e7)([y.ZP], () => (null != a ? y.ZP.getMember(a.id, M.id) : null)),
        B = (0, s.e7)([b.Z], () => !b.Z.isFetchingProfile(M.id, null == a ? void 0 : a.id)),
        Z = (0, s.e7)([O.Z], () => O.Z.hidePersonalInformation),
        F = (0, s.cj)([A.Z], () => j(L({}, A.Z.getAllPending()), { source: A.Z.getSource() })),
        { source: V, pendingAvatar: H, pendingNameplate: Y } = F,
        W = k(F, ["source", "pendingAvatar", "pendingNameplate"]),
        K = (0, E.SD)({
            userId: M.id,
            image: H,
        }),
        z = (0, h.Ys)({
            pendingValue: Y,
            userValue: null == M || null == (t = M.collectibles) ? void 0 : t.nameplate,
            guildValue: null == U || null == (n = U.collectibles) ? void 0 : n.nameplate,
            guildId: null == a ? void 0 : a.id,
        }),
        { pendingDisplayNameStyles: q } = (0, h.mD)(M, null == a ? void 0 : a.id);
    return (i.useEffect(() => () => c.Z.wait(S.W3), []),
    i.useEffect(() => {
        null != V &&
            f.ZP.trackWithMetadata(P.rMx.SETTINGS_PANE_VIEWED, {
                settings_type: "guild",
                destination_pane: P.jXE.SETTINGS_CUSTOMIZE_PROFILE,
                source: V,
            });
    }, [V]),
    Z)
        ? (0, r.jsx)(u.Z, {})
        : B
          ? (0, r.jsxs)(_.Gt, {
                value: x,
                children: [
                    (0, r.jsx)(l.Text, {
                        variant: "text-sm/normal",
                        children: D.intl.format(D.t["/PTB2E"], {
                            helpCenterLink: I.Z.getArticleURL(P.BhN.GUILD_PROFILES),
                        }),
                    }),
                    null != a
                        ? (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsx)(R.Z, {
                                      guildId: a.id,
                                      onChange: (e) => {
                                          null != e && (0, S.HP)(e);
                                      },
                                  }),
                                  (0, r.jsx)(m.Z, {
                                      profilePreviewTitle: (0, r.jsx)(l.Heading, {
                                          variant: "heading-md/medium",
                                          className: w.profilePreviewTitle,
                                          children: D.intl.formatToPlainString(D.t.Tc0slG, {
                                              guildName: null == a ? void 0 : a.name,
                                          }),
                                      }),
                                      profilePreview: (0, r.jsx)(
                                          g.Z,
                                          j(L({}, W), {
                                              pendingAvatar: K,
                                              pendingDisplayNameStyles: q,
                                              user: M,
                                              guild: a,
                                              canUsePremiumCustomization: T.ZP.canUsePremiumProfileCustomization(M),
                                              onUpsellClick: G,
                                          }),
                                      ),
                                      nameplatePreview: (0, r.jsx)(
                                          p.Z,
                                          j(L({}, W), {
                                              pendingDisplayNameStyles: q,
                                              user: M,
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
                        : (0, r.jsx)(C.Z, {}),
                ],
            })
          : (0, r.jsx)(l.$jN, {});
}
