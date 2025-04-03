n.r(t), n.d(t, { openGuildProductLink: () => d });
var u = n(200651);
n(192379);
var r = n(481060),
    l = n(336197),
    i = n(430824),
    c = n(240864),
    o = n(981631);
function d(e, t) {
    var d;
    let a = i.Z.getGuild(e);
    c.Z.getGuildProductFetchState(t) === c.M.FETCHED && (null == (d = c.Z.getGuildProduct(t)) ? void 0 : d.published) !== !0 && null != a
        ? (0, r.ZDy)(async () => {
              let { default: e } = await n.e('29396').then(n.bind(n, 513239));
              return (t) =>
                  (0, u.jsx)(
                      e,
                      (function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                              var n = null != arguments[t] ? arguments[t] : {},
                                  u = Object.keys(n);
                              'function' == typeof Object.getOwnPropertySymbols &&
                                  (u = u.concat(
                                      Object.getOwnPropertySymbols(n).filter(function (e) {
                                          return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                      })
                                  )),
                                  u.forEach(function (t) {
                                      var u;
                                      (u = n[t]),
                                          t in e
                                              ? Object.defineProperty(e, t, {
                                                    value: u,
                                                    enumerable: !0,
                                                    configurable: !0,
                                                    writable: !0
                                                })
                                              : (e[t] = u);
                                  });
                          }
                          return e;
                      })({}, t)
                  );
          })
        : (null == a ? void 0 : a.hasFeature(o.oNc.PRODUCTS_AVAILABLE_FOR_PURCHASE)) === !0
          ? (0, l.Z)(o.Z5c.GUILD_PRODUCT(e, t))
          : (0, l.Z)(o.Z5c.CHANNEL(e));
}
