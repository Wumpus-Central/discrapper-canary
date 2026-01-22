r.d(t, { openGuildProductLink: () => o });
var n = r(627968);
r(64700);
var u = r(397927),
    i = r(22007),
    l = r(71393),
    a = r(871109),
    c = r(652215);
function o(e, t) {
    var o;
    let d = l.A.getGuild(e);
    a.A.getGuildProductFetchState(t) === a.e.FETCHED &&
    (null == (o = a.A.getGuildProduct(t)) ? void 0 : o.published) !== !0 &&
    null != d
        ? (0, u.mMO)(async () => {
              let { default: e } = await r.e("57968").then(r.bind(r, 558067));
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
        : (null == d ? void 0 : d.features.has(c.GuildFeatures.PRODUCTS_AVAILABLE_FOR_PURCHASE))
          ? (0, i.A)(c.BVt.GUILD_PRODUCT(e, t))
          : (0, i.A)(c.BVt.CHANNEL(e));
}
