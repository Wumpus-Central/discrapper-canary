r.d(t, { default: () => d }), r(388685);
var n = r(54381),
    i = r(473749),
    o = r(793030),
    c = r(481060),
    l = r(493773),
    a = r(626135),
    s = r(51144),
    u = r(80721),
    b = r(282793),
    p = r(981631),
    O = r(353149),
    f = r(388032);
let d = (e) => {
    var t,
        r,
        { subscriptionId: d, member: y, onClose: m } = e,
        g = (function (e, t) {
            if (null == e) return {};
            var r,
                n,
                i = (function (e, t) {
                    if (null == e) return {};
                    var r,
                        n,
                        i = {},
                        o = Object.keys(e);
                    for (n = 0; n < o.length; n++) (r = o[n]), t.indexOf(r) >= 0 || (i[r] = e[r]);
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                for (n = 0; n < o.length; n++)
                    (r = o[n]),
                        !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
            }
            return i;
        })(e, ["subscriptionId", "member", "onClose"]);
    let [j, P] = (0, i.useState)(!1),
        [M, _] = (0, i.useState)(!1);
    (0, l.ZP)(() => {
        a.default.track(p.rMx.PREMIUM_GROUP_REMOVE_MEMBER_MODAL_VIEWED, {
            subscription_id: d,
            member_user_id: y.id,
        });
    });
    let E = async () => {
        a.default.track(p.rMx.PREMIUM_GROUP_REMOVE_MEMBER_CTA_CLICKED, {
            subscription_id: d,
            member_user_id: y.id,
        }),
            P(!0);
        let e = await (0, u.Jn)(d, y.id);
        P(!1), e.ok ? m() : _(!0);
    };
    return (0, n.jsx)(
        o.Modal,
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
                title: f.intl.string(O.default.MJIHXY),
                subtitle: f.intl.formatToPlainString(O.default.gMyQrH, {
                    memberName: (0, s.XM)(y),
                    premiumGroupProductName: (0, b.sO)(),
                    cooldownMonths: b.T9,
                }),
                onClose: m,
                actions: [
                    {
                        text: f.intl.string(O.default.dlr8CX),
                        variant: "critical-primary",
                        onClick: E,
                        loading: j,
                    },
                ],
            },
            g,
        )),
        (r = r =
            {
                children:
                    M &&
                    (0, n.jsx)(c.M14, {
                        type: "critical",
                        children: f.intl.string(f.t["rTU7/z"]),
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
