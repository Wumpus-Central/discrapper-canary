u.r(t), u.d(t, { openGuildProductLink: () => d });
var n = u(255367);
u(73800);
var r = u(481060),
    l = u(336197),
    i = u(430824),
    c = u(240864),
    o = u(981631);
function d(e, t) {
    var d;
    let a = i.Z.getGuild(e);
    c.Z.getGuildProductFetchState(t) === c.M.FETCHED &&
    (null == (d = c.Z.getGuildProduct(t)) ? void 0 : d.published) !== !0 &&
    null != a
        ? (0, r.ZDy)(async () => {
              let { default: e } = await u.e("29396").then(u.bind(u, 513239));
              return (t) =>
                  (0, n.jsx)(
                      e,
                      (function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                              var u = null != arguments[t] ? arguments[t] : {},
                                  n = Object.keys(u);
                              "function" == typeof Object.getOwnPropertySymbols &&
                                  (n = n.concat(
                                      Object.getOwnPropertySymbols(u).filter(function (e) {
                                          return Object.getOwnPropertyDescriptor(u, e).enumerable;
                                      }),
                                  )),
                                  n.forEach(function (t) {
                                      var n;
                                      (n = u[t]),
                                          t in e
                                              ? Object.defineProperty(e, t, {
                                                    value: n,
                                                    enumerable: !0,
                                                    configurable: !0,
                                                    writable: !0,
                                                })
                                              : (e[t] = n);
                                  });
                          }
                          return e;
                      })({}, t),
                  );
          })
        : (null == a ? void 0 : a.features.has(o.oNc.PRODUCTS_AVAILABLE_FOR_PURCHASE))
          ? (0, l.Z)(o.Z5c.GUILD_PRODUCT(e, t))
          : (0, l.Z)(o.Z5c.CHANNEL(e));
}
