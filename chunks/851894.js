n.d(t, { Z: () => R });
var r = n(200651),
    i = n(192379),
    s = n(512722),
    a = n.n(s),
    l = n(442837),
    o = n(481060),
    c = n(570140),
    d = n(497321),
    u = n(100527),
    m = n(367907),
    g = n(906732),
    p = n(296810),
    h = n(921813),
    f = n(643879),
    b = n(621853),
    N = n(246946),
    x = n(594174),
    _ = n(63063),
    E = n(74538),
    j = n(18438),
    O = n(778825),
    C = n(856607),
    S = n(594496),
    v = n(856768),
    T = n(981631),
    I = n(388032);
function y(e) {
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
}
function A(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function P(e) {
    (0, o.ZDy)(async () => {
        let { default: t } = await n.e('84509').then(n.bind(n, 933696));
        return (n) => (0, r.jsx)(t, y({ source: A(y({}, e), { page: T.ZY5.GUILD_MEMBER_PROFILE_SETTINGS }) }, n));
    });
}
function R(e) {
    let { selectedGuild: t } = e,
        { analyticsLocations: n } = (0, g.ZP)(u.Z.GUILD_PROFILE),
        s = (0, l.e7)([x.default], () => {
            let e = x.default.getCurrentUser();
            return a()(null != e, 'GuildIdentitySettingsPage: user cannot be undefined'), e;
        }),
        R = (0, l.e7)([b.Z], () => !b.Z.isFetchingProfile(s.id, null == t ? void 0 : t.id)),
        D = (0, l.e7)([N.Z], () => N.Z.hidePersonalInformation),
        Z = (0, l.cj)([O.Z], () => A(y({}, O.Z.getAllPending()), { source: O.Z.getSource() })),
        { source: w, pendingAvatar: k } = Z,
        W = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        i = {},
                        s = Object.keys(e);
                    for (r = 0; r < s.length; r++) (n = s[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var s = Object.getOwnPropertySymbols(e);
                for (r = 0; r < s.length; r++) (n = s[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            }
            return i;
        })(Z, ['source', 'pendingAvatar']),
        L = (0, f.SD)({
            userId: s.id,
            image: k
        });
    return (i.useEffect(() => () => c.Z.wait(j.W3), []),
    i.useEffect(() => {
        null != w &&
            m.ZP.trackWithMetadata(T.rMx.SETTINGS_PANE_VIEWED, {
                settings_type: 'guild',
                destination_pane: T.jXE.SETTINGS_CUSTOMIZE_PROFILE,
                source: w
            });
    }, [w]),
    D)
        ? (0, r.jsx)(d.Z, {})
        : R
          ? (0, r.jsxs)(g.Gt, {
                value: n,
                children: [
                    (0, r.jsx)(o.Text, {
                        variant: 'text-sm/normal',
                        children: I.NW.format(I.t['/PTB2N'], { helpCenterLink: _.Z.getArticleURL(T.BhN.GUILD_PROFILES) })
                    }),
                    null != t
                        ? (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsx)(v.Z, {
                                      guildId: t.id,
                                      onChange: (e) => {
                                          null != e && (0, j.HP)(e);
                                      }
                                  }),
                                  (0, r.jsx)(p.Z, {
                                      previewTitle: I.NW.formatToPlainString(I.t.Tc0slJ, { guildName: null == t ? void 0 : t.name }),
                                      profilePreview: (0, r.jsx)(
                                          h.Z,
                                          A(y({}, W), {
                                              pendingAvatar: L,
                                              user: s,
                                              guild: t,
                                              canUsePremiumCustomization: E.ZP.canUsePremiumProfileCustomization(s),
                                              onUpsellClick: P
                                          })
                                      ),
                                      children: (0, r.jsx)(S.Z, {})
                                  })
                              ]
                          })
                        : (0, r.jsx)(C.Z, {})
                ]
            })
          : (0, r.jsx)(o.$jN, {});
}
