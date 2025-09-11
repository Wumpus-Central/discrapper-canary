n.d(t, { r: () => p });
var r = n(951288);
n(647438);
var i = n(481060),
    l = n(630388),
    o = n(981631),
    s = n(388032),
    u = n(49735);
function a(e) {
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
}
function c(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let d = {
    size: "md",
    color: i.TVs.colors.INTERACTIVE_NORMAL,
};
function p(e) {
    let { subscriptions: t, color: n = "text-default" } = e,
        p = t.some((e) => (0, l.yE)(e.skuFlags, o.l4R.APPLICATION_GUILD_SUBSCRIPTION));
    return (0, r.jsx)(i.X6q, {
        variant: "heading-lg/semibold",
        color: n,
        className: u.heading,
        children: p
            ? (0, r.jsxs)(r.Fragment, {
                  children: [(0, r.jsx)(i.QTo, c(a({}, d), { color: "currentColor" })), s.intl.string(s.t.XIhSoq)],
              })
            : (0, r.jsxs)(r.Fragment, {
                  children: [(0, r.jsx)(i.tBG, c(a({}, d), { color: "currentColor" })), s.intl.string(s.t.dxfZpq)],
              }),
    });
}
