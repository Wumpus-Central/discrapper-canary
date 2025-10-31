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
    p = n(346811),
    h = n(566697),
    m = n(150039),
    g = n(296810),
    E = n(678135),
    b = n(643879),
    y = n(621853),
    O = n(271383),
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
    x = n(813709);
function L(e, t, n) {
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
                L(e, t, n[t]);
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
function k(e, t) {
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
        return (n) => (0, r.jsx)(t, M({ source: k(M({}, e), { page: w.ZY5.GUILD_MEMBER_PROFILE_SETTINGS }) }, n));
    });
}
function Z(e) {
    var t, n;
    let { selectedGuild: a } = e,
        { analyticsLocations: L } = (0, _.ZP)(d.Z.USER_SETTINGS_GUILD_PROFILE),
        j = (0, s.e7)([I.default], () => {
            let e = I.default.getCurrentUser();
            return o()(null != e, "GuildIdentitySettingsPage: user cannot be undefined"), e;
        }),
        G = (0, s.e7)([O.ZP], () => (null != a ? O.ZP.getMember(a.id, j.id) : null)),
        Z = (0, s.e7)([y.Z], () => !y.Z.isFetchingProfile(j.id, null == a ? void 0 : a.id)),
        F = (0, s.e7)([v.Z], () => v.Z.hidePersonalInformation),
        V = (0, s.cj)([C.Z], () => k(M({}, C.Z.getAllPending()), { source: C.Z.getSource() })),
        { source: H, pendingAvatar: Y, pendingNameplate: W } = V,
        K = U(V, ["source", "pendingAvatar", "pendingNameplate"]),
        z = (0, b.SD)({
            userId: j.id,
            image: Y,
        }),
        q = (0, m.Ys)({
            pendingValue: W,
            userValue: null == j || null == (t = j.collectibles) ? void 0 : t.nameplate,
            guildValue: null == G || null == (n = G.collectibles) ? void 0 : n.nameplate,
            guildId: null == a ? void 0 : a.id,
        }),
        { pendingDisplayNameStyles: X } = (0, m.mD)(j, null == a ? void 0 : a.id);
    i.useEffect(() => () => c.Z.wait(A.W3), []),
        i.useEffect(() => {
            null != H &&
                f.ZP.trackWithMetadata(w.rMx.SETTINGS_PANE_VIEWED, {
                    settings_type: "guild",
                    destination_pane: w.jXE.SETTINGS_CUSTOMIZE_PROFILE,
                    source: H,
                });
        }, [H]);
    let { enabled: Q } = p.Z.useConfig({ location: "GuildIdentitySettingsPage" });
    return F
        ? (0, r.jsx)(u.Z, {})
        : Z
          ? (0, r.jsxs)(_.Gt, {
                value: L,
                children: [
                    (0, r.jsx)(l.Text, {
                        variant: "text-sm/normal",
                        children: D.intl.format(D.t["/PTB2E"], {
                            helpCenterLink: T.Z.getArticleURL(w.BhN.GUILD_PROFILES),
                        }),
                    }),
                    null != a
                        ? (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsx)(P.Z, {
                                      guildId: a.id,
                                      onChange: (e) => {
                                          null != e && (0, A.HP)(e);
                                      },
                                  }),
                                  (0, r.jsx)(g.Z, {
                                      profilePreviewTitle: (0, r.jsx)(l.Heading, {
                                          variant: "heading-md/medium",
                                          className: x.profilePreviewTitle,
                                          children: D.intl.formatToPlainString(D.t.Tc0slG, {
                                              guildName: null == a ? void 0 : a.name,
                                          }),
                                      }),
                                      profilePreview: (0, r.jsx)(
                                          E.Z,
                                          k(M({}, K), {
                                              pendingAvatar: z,
                                              pendingDisplayNameStyles: X,
                                              user: j,
                                              guild: a,
                                              canUsePremiumCustomization: S.ZP.canUsePremiumProfileCustomization(j),
                                              onUpsellClick: B,
                                          }),
                                      ),
                                      nameplatePreview: Q
                                          ? (0, r.jsx)(
                                                h.Z,
                                                k(M({}, K), {
                                                    pendingDisplayNameStyles: X,
                                                    user: j,
                                                    guildId: null == a ? void 0 : a.id,
                                                    nameplate: q,
                                                    className: null == q ? x.nameplatePreviewPlaceholder : void 0,
                                                    isHighlighted: !0,
                                                }),
                                            )
                                          : null,
                                      children: (0, r.jsx)(R.Z, { nameplateEnabled: Q }),
                                  }),
                              ],
                          })
                        : (0, r.jsx)(N.Z, {}),
                ],
            })
          : (0, r.jsx)(l.$jN, {});
}
