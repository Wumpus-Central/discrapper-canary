n.d(t, { T: () => d });
var r = n(627968),
    i = n(64700),
    l = n(311907),
    s = n(397927),
    a = n(260509),
    c = n(287809),
    o = n(652215);
function d(e) {
    let t =
            (null == e ? void 0 : e.features.has(o.GuildFeatures.CREATOR_MONETIZABLE_PENDING_NEW_OWNER_ONBOARDING)) ===
            !0,
        d = (null == e ? void 0 : e.features.has(o.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED)) === !0,
        u = (0, l.bG)([c.default], () => c.default.getCurrentUser()),
        f = null != e && (0, a.bM)(e, u);
    i.useEffect(() => {
        null != e &&
            t &&
            f &&
            (0, s.mMO)(async () => {
                let { default: t } = await n.e("47175").then(n.bind(n, 75834));
                return (n) => {
                    var i, l;
                    return (0, r.jsx)(
                        t,
                        ((i = (function (e) {
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
                                        var r;
                                        (r = n[t]),
                                            t in e
                                                ? Object.defineProperty(e, t, {
                                                      value: r,
                                                      enumerable: !0,
                                                      configurable: !0,
                                                      writable: !0,
                                                  })
                                                : (e[t] = r);
                                    });
                            }
                            return e;
                        })({}, n)),
                        (l = l =
                            {
                                guildId: e.id,
                                requireTeamSetup: d,
                            }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(l))
                            : (function (e, t) {
                                  var n = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var r = Object.getOwnPropertySymbols(e);
                                      n.push.apply(n, r);
                                  }
                                  return n;
                              })(Object(l)).forEach(function (e) {
                                  Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(l, e));
                              }),
                        i),
                    );
                };
            });
    }, [t, d, e, f]);
}
