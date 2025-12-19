r.d(t, { default: () => b }), r(388685);
var n = r(54381),
    o = r(473749),
    i = r(793030),
    c = r(481060),
    l = r(51144),
    a = r(80721),
    s = r(282793),
    u = r(353149),
    p = r(388032);
let b = (e) => {
    var t,
        r,
        { subscriptionId: b, member: f, onClose: O } = e,
        y = (function (e, t) {
            if (null == e) return {};
            var r,
                n,
                o = (function (e, t) {
                    if (null == e) return {};
                    var r,
                        n,
                        o = {},
                        i = Object.keys(e);
                    for (n = 0; n < i.length; n++) (r = i[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
                    return o;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (n = 0; n < i.length; n++)
                    (r = i[n]),
                        !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
            }
            return o;
        })(e, ["subscriptionId", "member", "onClose"]);
    let [d, g] = (0, o.useState)(!1),
        [j, m] = (0, o.useState)(!1),
        w = async () => {
            g(!0);
            let e = await (0, a.Jn)(b, f.id);
            g(!1), e.ok ? O() : m(!0);
        };
    return (0, n.jsx)(
        i.Modal,
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
                size: "md",
                title: p.intl.string(u.default.MJIHXY),
                subtitle: p.intl.formatToPlainString(u.default.gMyQrH, {
                    memberName: (0, l.XM)(f),
                    premiumGroupProductName: (0, s.sO)(),
                    cooldownMonths: s.T9,
                }),
                onClose: O,
                actions: [
                    {
                        text: p.intl.string(u.default.dlr8CX),
                        variant: "critical-primary",
                        onClick: w,
                        loading: d,
                    },
                ],
            },
            y,
        )),
        (r = r =
            {
                children:
                    j &&
                    (0, n.jsx)(c.M14, {
                        type: "critical",
                        children: p.intl.string(p.t["rTU7/z"]),
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
};
