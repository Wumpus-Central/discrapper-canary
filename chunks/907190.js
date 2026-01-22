r.d(t, { default: () => u });
var n = r(627968);
r(64700);
var o = r(397927),
    i = r(886722),
    l = r(975571),
    c = r(652215),
    a = r(985018);
function u(e) {
    var t, r;
    let { listing: u, transitionState: s, onClose: f } = e,
        p = (function (e, t) {
            if (null == e) return {};
            var r,
                n,
                o,
                i = {};
            if ("u" > typeof Reflect && Reflect.ownKeys) {
                for (o = 0, r = Reflect.ownKeys(e); o < r.length; o++)
                    (n = r[o]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
                return i;
            }
            if (
                ((i = (function (e, t) {
                    if (null == e) return {};
                    var r,
                        n,
                        o = {},
                        i = Object.getOwnPropertyNames(e);
                    for (n = 0; n < i.length; n++)
                        (r = i[n]),
                            !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
                    return o;
                })(e, t)),
                Object.getOwnPropertySymbols)
            )
                for (o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
                    (n = r[o]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            return i;
        })(e, ["listing", "transitionState", "onClose"]);
    return (0, n.jsx)(
        i.A,
        ((t = (function (e) {
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
        })(
            {
                sku_id: u.id,
                sku_name: u.name,
                guild_id: u.guild_id,
                header: a.intl.format(a.t.avKMZo, { listingName: u.name }),
                transitionState: s,
                onClose: f,
            },
            p,
        )),
        (r = r =
            {
                children: (0, n.jsx)(o.Text, {
                    variant: "text-md/normal",
                    children: a.intl.format(a.t.jkvpmk, {
                        listingName: u.name,
                        monetizationTermsUrl: l.A.getArticleURL(c.MVz.CREATOR_TERMS),
                        communityGuidelinesUrl: c.X7G.GUIDELINES,
                    }),
                }),
            }),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : (function (e, t) {
                  var r = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(e);
                      r.push.apply(r, n);
                  }
                  return r;
              })(Object(r)).forEach(function (e) {
                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
              }),
        t),
    );
}
