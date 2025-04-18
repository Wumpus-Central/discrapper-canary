t.d(n, { r: () => p });
var r = t(200651);
t(192379);
var i = t(481060),
    l = t(630388),
    s = t(981631),
    o = t(388032),
    u = t(729463);
function a(e) {
    for (var n = 1; n < arguments.length; n++) {
        var t = null != arguments[n] ? arguments[n] : {},
            r = Object.keys(t);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(t).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                })
            )),
            r.forEach(function (n) {
                var r;
                (r = t[n]),
                    n in e
                        ? Object.defineProperty(e, n, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[n] = r);
            });
    }
    return e;
}
function c(e, n) {
    return (
        (n = null != n ? n : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : (function (e, n) {
                  var t = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      t.push.apply(t, r);
                  }
                  return t;
              })(Object(n)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              }),
        e
    );
}
let d = {
    size: 'md',
    color: i.TVs.colors.INTERACTIVE_NORMAL
};
function p(e) {
    let { subscriptions: n, color: t = 'text-normal' } = e,
        p = n.some((e) => (0, l.yE)(e.skuFlags, s.l4R.APPLICATION_GUILD_SUBSCRIPTION));
    return (0, r.jsx)(i.X6q, {
        variant: 'heading-lg/semibold',
        color: t,
        className: u.heading,
        children: p
            ? (0, r.jsxs)(r.Fragment, {
                  children: [(0, r.jsx)(i.QTo, c(a({}, d), { color: 'currentColor' })), o.NW.string(o.t.XIhSoq)]
              })
            : (0, r.jsxs)(r.Fragment, {
                  children: [(0, r.jsx)(i.tBG, c(a({}, d), { color: 'currentColor' })), o.NW.string(o.t.dxfZpq)]
              })
    });
}
