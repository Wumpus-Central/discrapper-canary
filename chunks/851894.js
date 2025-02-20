n.d(t, { Z: () => P });
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
    f = n(621853),
    b = n(246946),
    N = n(594174),
    x = n(63063),
    _ = n(74538),
    E = n(18438),
    j = n(778825),
    C = n(856607),
    O = n(594496),
    v = n(856768),
    S = n(981631),
    T = n(388032);
function I(e) {
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
function y(e, t) {
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
function A(e) {
    (0, o.ZDy)(async () => {
        let { default: t } = await n.e('84509').then(n.bind(n, 933696));
        return (n) => (0, r.jsx)(t, I({ source: y(I({}, e), { page: S.ZY5.GUILD_MEMBER_PROFILE_SETTINGS }) }, n));
    });
}
function P(e) {
    let { selectedGuild: t } = e,
        { analyticsLocations: n } = (0, g.ZP)(u.Z.GUILD_PROFILE),
        s = (0, l.e7)([N.default], () => {
            let e = N.default.getCurrentUser();
            return a()(null != e, 'GuildIdentitySettingsPage: user cannot be undefined'), e;
        }),
        P = (0, l.e7)([f.Z], () => !f.Z.isFetchingProfile(s.id, null == t ? void 0 : t.id)),
        R = (0, l.e7)([b.Z], () => b.Z.hidePersonalInformation),
        D = (0, l.cj)([j.Z], () => y(I({}, j.Z.getAllPending()), { source: j.Z.getSource() })),
        { source: Z } = D,
        w = (function (e, t) {
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
        })(D, ['source']);
    return (i.useEffect(() => () => c.Z.wait(E.W3), []),
    i.useEffect(() => {
        null != Z &&
            m.ZP.trackWithMetadata(S.rMx.SETTINGS_PANE_VIEWED, {
                settings_type: 'guild',
                destination_pane: S.jXE.SETTINGS_CUSTOMIZE_PROFILE,
                source: Z
            });
    }, [Z]),
    R)
        ? (0, r.jsx)(d.Z, {})
        : P
          ? (0, r.jsxs)(g.Gt, {
                value: n,
                children: [
                    (0, r.jsx)(o.Text, {
                        variant: 'text-sm/normal',
                        children: T.NW.format(T.t['/PTB2N'], { helpCenterLink: x.Z.getArticleURL(S.BhN.GUILD_PROFILES) })
                    }),
                    null != t
                        ? (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsx)(v.Z, {
                                      guildId: t.id,
                                      onChange: (e) => {
                                          null != e && (0, E.HP)(e);
                                      }
                                  }),
                                  (0, r.jsx)(p.Z, {
                                      previewTitle: T.NW.formatToPlainString(T.t.Tc0slJ, { guildName: null == t ? void 0 : t.name }),
                                      profilePreview: (0, r.jsx)(
                                          h.Z,
                                          I(
                                              {
                                                  user: s,
                                                  guild: t,
                                                  canUsePremiumCustomization: _.ZP.canUsePremiumProfileCustomization(s),
                                                  onUpsellClick: A
                                              },
                                              w
                                          )
                                      ),
                                      children: (0, r.jsx)(O.Z, {})
                                  })
                              ]
                          })
                        : (0, r.jsx)(C.Z, {})
                ]
            })
          : (0, r.jsx)(o.$jN, {});
}
