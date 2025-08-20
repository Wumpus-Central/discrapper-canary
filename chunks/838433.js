r.r(t), r.d(t, { openGuildProductLink: () => a });
var n = r(951288);
r(647438);
var u = r(481060),
    c = r(336197),
    i = r(430824),
    o = r(240864),
    l = r(981631);
function a(e, t) {
    var a;
    let d = i.Z.getGuild(e);
    o.Z.getGuildProductFetchState(t) === o.M.FETCHED &&
    (null == (a = o.Z.getGuildProduct(t)) ? void 0 : a.published) !== !0 &&
    null != d
        ? (0, u.ZDy)(async () => {
              let { default: e } = await r.e("29396").then(r.bind(r, 513239));
              return (t) =>
                  (0, n.jsx)(
                      e,
                      (function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                              var r = null != arguments[t] ? arguments[t] : {},
                                  n = Object.keys(r);
                              "function" == typeof Object.getOwnPropertySymbols &&
                                  (n = n.concat(
                                      Object.getOwnPropertySymbols(r).filter(function (e) {
                                          return Object.getOwnPropertyDescriptor(r, e).enumerable;
                                      }),
                                  )),
                                  n.forEach(function (t) {
                                      var n;
                                      (n = r[t]),
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
        : (null == d ? void 0 : d.features.has(l.oNc.PRODUCTS_AVAILABLE_FOR_PURCHASE))
          ? (0, c.Z)(l.Z5c.GUILD_PRODUCT(e, t))
          : (0, c.Z)(l.Z5c.CHANNEL(e));
}
