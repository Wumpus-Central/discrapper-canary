r.r(t),
    r.d(t, {
        default: () => a,
    });
var n = r(627968);
r(64700);
var o = r(384904),
    l = r(143582),
    c = r(976860),
    p = r(967198),
    u = r(156312),
    i = r(546042),
    f = r(652215);

function a(e) {
    var t, r;
    let { onClose: a, onComplete: b, forcesTransitionToGuild: s } = e,
        y = (function (e, t) {
            if (null == e) return {};
            var r,
                n,
                o,
                l = {};
            if ("u" > typeof Reflect && Reflect.ownKeys) {
                for (o = 0, r = Reflect.ownKeys(e); o < r.length; o++)
                    (n = r[o]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
                return l;
            }
            if (
                ((l = (function (e, t) {
                    if (null == e) return {};
                    var r,
                        n,
                        o = {},
                        l = Object.getOwnPropertyNames(e);
                    for (n = 0; n < l.length; n++)
                        (r = l[n]),
                            !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
                    return o;
                })(e, t)),
                Object.getOwnPropertySymbols)
            )
                for (o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
                    (n = r[o]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
            return l;
        })(e, ["onClose", "onComplete", "forcesTransitionToGuild"]),
        { subscriptionMetadataRequest: O } = (0, u.P5)();
    return (0, n.jsx)(
        i.PaymentModal,
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
        })({}, y)),
        (r = r =
            {
                onComplete: b,
                onClose: (e) => {
                    a(e);
                    let t = null == O ? void 0 : O.guild_id;
                    e &&
                        null != t &&
                        (o.hP(),
                        (0, l.f5)(t),
                        null == b || b(),
                        null != t && (s || p.A.getGuildId() !== t) && (0, c.pX)(f.BVt.CHANNEL(t)));
                },
                forceNewPaymentModal: !0,
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
