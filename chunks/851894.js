n.d(t, { Z: () => Z });
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
    p = n(22267),
    h = n(346811),
    m = n(850020),
    g = n(150039),
    E = n(296810),
    b = n(678135),
    y = n(643879),
    O = n(621853),
    v = n(246946),
    I = n(594174),
    T = n(63063),
    S = n(74538),
    A = n(18438),
    C = n(778825),
    N = n(856607),
    R = n(594496),
    P = n(856768),
    w = n(981631),
    D = n(388032),
    L = n(813709);
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
function M(e) {
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
function k(e, t) {
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
            : k(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function U(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = G(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function G(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function B(e) {
    (0, l.ZDy)(async () => {
        let { default: t } = await n.e("84509").then(n.bind(n, 933696));
        return (n) => (0, r.jsx)(t, M({ source: j(M({}, e), { page: w.ZY5.GUILD_MEMBER_PROFILE_SETTINGS }) }, n));
    });
}
function Z(e) {
    let { selectedGuild: t } = e,
        { analyticsLocations: n } = (0, _.ZP)(d.Z.USER_SETTINGS_GUILD_PROFILE),
        a = (0, s.e7)([I.default], () => {
            let e = I.default.getCurrentUser();
            return o()(null != e, "GuildIdentitySettingsPage: user cannot be undefined"), e;
        }),
        x = (0, s.e7)([O.Z], () => !O.Z.isFetchingProfile(a.id, null == t ? void 0 : t.id)),
        k = (0, s.e7)([v.Z], () => v.Z.hidePersonalInformation),
        G = (0, s.cj)([C.Z], () => j(M({}, C.Z.getAllPending()), { source: C.Z.getSource() })),
        { source: Z, pendingAvatar: F, pendingNameplate: V } = G,
        H = U(G, ["source", "pendingAvatar", "pendingNameplate"]),
        Y = (0, y.SD)({
            userId: a.id,
            image: F,
        }),
        W = (0, m.K)({
            user: a,
            guildId: null == t ? void 0 : t.id,
        }),
        { pendingDisplayNameStyles: K } = (0, g.mD)(a, null == t ? void 0 : t.id);
    i.useEffect(() => () => c.Z.wait(A.W3), []),
        i.useEffect(() => {
            null != Z &&
                f.ZP.trackWithMetadata(w.rMx.SETTINGS_PANE_VIEWED, {
                    settings_type: "guild",
                    destination_pane: w.jXE.SETTINGS_CUSTOMIZE_PROFILE,
                    source: Z,
                });
        }, [Z]);
    let { enabled: z } = h.Z.useConfig({ location: "GuildIdentitySettingsPage" });
    return k
        ? (0, r.jsx)(u.Z, {})
        : x
          ? (0, r.jsxs)(_.Gt, {
                value: n,
                children: [
                    (0, r.jsx)(l.Text, {
                        variant: "text-sm/normal",
                        children: D.intl.format(D.t["/PTB2E"], {
                            helpCenterLink: T.Z.getArticleURL(w.BhN.GUILD_PROFILES),
                        }),
                    }),
                    null != t
                        ? (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsx)(P.Z, {
                                      guildId: t.id,
                                      onChange: (e) => {
                                          null != e && (0, A.HP)(e);
                                      },
                                  }),
                                  (0, r.jsx)(E.Z, {
                                      profilePreviewTitle: (0, r.jsx)(l.Heading, {
                                          variant: "heading-md/medium",
                                          className: L.profilePreviewTitle,
                                          children: D.intl.formatToPlainString(D.t.Tc0slG, {
                                              guildName: null == t ? void 0 : t.name,
                                          }),
                                      }),
                                      profilePreview: (0, r.jsx)(
                                          b.Z,
                                          j(M({}, H), {
                                              pendingAvatar: Y,
                                              pendingDisplayNameStyles: K,
                                              user: a,
                                              guild: t,
                                              canUsePremiumCustomization: S.ZP.canUsePremiumProfileCustomization(a),
                                              onUpsellClick: B,
                                          }),
                                      ),
                                      nameplatePreview: z
                                          ? (0, r.jsx)(
                                                p.Z,
                                                j(M({}, H), {
                                                    pendingDisplayNameStyles: K,
                                                    user: a,
                                                    guildId: null == t ? void 0 : t.id,
                                                    nameplate: V,
                                                    nameplateData: null == V ? W : void 0,
                                                    isHighlighted: !0,
                                                }),
                                            )
                                          : null,
                                      children: (0, r.jsx)(R.Z, { nameplateEnabled: z }),
                                  }),
                              ],
                          })
                        : (0, r.jsx)(N.Z, {}),
                ],
            })
          : (0, r.jsx)(l.$jN, {});
}
