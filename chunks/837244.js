r.d(e, { default: () => y });
var n = r(54381),
    i = r(793030),
    o = r(782568),
    c = r(63063),
    a = r(648613),
    s = r(864218),
    l = r(474936),
    u = r(282793),
    p = r(981631),
    b = r(353149),
    O = r(388032),
    f = r(731490);
function P(t) {
    for (var e = 1; e < arguments.length; e++) {
        var r = null != arguments[e] ? arguments[e] : {},
            n = Object.keys(r);
        "function" == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(r).filter(function (t) {
                    return Object.getOwnPropertyDescriptor(r, t).enumerable;
                }),
            )),
            n.forEach(function (e) {
                var n;
                (n = r[e]),
                    e in t
                        ? Object.defineProperty(t, e, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (t[e] = n);
            });
    }
    return t;
}
function d(t, e) {
    return (
        (e = null != e ? e : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e))
            : (function (t, e) {
                  var r = Object.keys(t);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(t);
                      r.push.apply(r, n);
                  }
                  return r;
              })(Object(e)).forEach(function (r) {
                  Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(e, r));
              }),
        t
    );
}
let y = (t) => {
    let { subscribeButtonProps: e } = (0, s.F)({
        subscriptionTier: l.Si.TIER_2,
        subscriptionPlanId: l.Xh.PREMIUM_GROUP_MONTH,
    });
    return (0, n.jsx)(a.Z, {
        subscriptionTier: l.Si.TIER_2,
        initialPlanId: l.Xh.PREMIUM_GROUP_MONTH,
        children: (r) => {
            let { onClick: a } = r;
            return (0, n.jsx)(
                i.ExpressiveModal,
                d(P({}, t), {
                    graphic: {
                        src: f,
                        type: "image",
                    },
                    gradientColor: "nitro-pink",
                    title: O.intl.formatToPlainString(b.default.tJbHtN, { premiumGroupProductName: (0, u.sO)() }),
                    badge: {
                        type: "beta",
                        variant: "expressive",
                    },
                    subtitle: O.intl.formatToPlainString(b.default.csDq8A, {
                        premiumGroupProductName: (0, u.sO)(),
                        totalSeats: u.Q5,
                    }),
                    actions: [
                        {
                            text: O.intl.string(b.default.z8re5H),
                            variant: "secondary",
                            onClick: () => {
                                var e;
                                return (
                                    (e = t.onClose), void ((0, o.Z)(c.Z.getArticleURL(p.BhN.PREMIUM_GROUP_ABOUT)), e())
                                );
                            },
                        },
                        d(P({}, e), { onClick: a }),
                    ],
                }),
            );
        },
    });
};
