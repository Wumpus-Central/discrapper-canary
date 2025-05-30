r.r(t), r.d(t, { default: () => j });
var n = r(255367),
    o = r(73800),
    i = r(120356),
    c = r.n(i),
    a = r(103269),
    s = r(616259),
    u = r(897867);
function p(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
        'function' == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(r).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                })
            )),
            n.forEach(function (t) {
                var n;
                (n = r[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = n);
            });
    }
    return e;
}
function f(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var r = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(e);
                      r.push.apply(r, n);
                  }
                  return r;
              })(Object(t)).forEach(function (r) {
                  Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
              }),
        e
    );
}
function l() {
    return (0, n.jsx)('div', { className: u.customPointer });
}
function b() {
    return (0, n.jsx)('div', { className: c()(u.customPointer, u.huePointer) });
}
let O = (0, a.iS)((e) =>
        (0, n.jsxs)('div', {
            className: u.pickerWrapper,
            children: [
                (0, n.jsx)('div', {
                    className: u.saturation,
                    children: (0, n.jsx)(s.Saturation, f(p({}, e), { pointer: l }))
                }),
                (0, n.jsx)('div', {
                    className: u.hue,
                    children: (0, n.jsx)(
                        s.Hue,
                        f(p({}, e), {
                            direction: 'vertical',
                            pointer: b
                        })
                    )
                })
            ]
        })
    ),
    j = o.memo(O);
