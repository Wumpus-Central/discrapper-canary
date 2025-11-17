r.d(e, { Z: () => i });
var o = r(54381);
r(473749);
var n = r(325767);
function i(t) {
    var e,
        r,
        { width: i = 24, height: c = 24, color: l = "currentColor" } = t,
        s = (function (t, e) {
            if (null == t) return {};
            var r,
                o,
                n = (function (t, e) {
                    if (null == t) return {};
                    var r,
                        o,
                        n = {},
                        i = Object.keys(t);
                    for (o = 0; o < i.length; o++) (r = i[o]), e.indexOf(r) >= 0 || (n[r] = t[r]);
                    return n;
                })(t, e);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(t);
                for (o = 0; o < i.length; o++)
                    (r = i[o]),
                        !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(t, r) && (n[r] = t[r]);
            }
            return n;
        })(t, ["width", "height", "color"]);
    return (0, o.jsxs)(
        "svg",
        ((e = (function (t) {
            for (var e = 1; e < arguments.length; e++) {
                var r = null != arguments[e] ? arguments[e] : {},
                    o = Object.keys(r);
                "function" == typeof Object.getOwnPropertySymbols &&
                    (o = o.concat(
                        Object.getOwnPropertySymbols(r).filter(function (t) {
                            return Object.getOwnPropertyDescriptor(r, t).enumerable;
                        }),
                    )),
                    o.forEach(function (e) {
                        var o;
                        (o = r[e]),
                            e in t
                                ? Object.defineProperty(t, e, {
                                      value: o,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0,
                                  })
                                : (t[e] = o);
                    });
            }
            return t;
        })({}, (0, n.Z)(s))),
        (r = r =
            {
                width: i,
                height: c,
                viewBox: "0 0 20 20",
                fill: "none",
                children: [
                    (0, o.jsx)("path", {
                        d: "M5.42999 16C5.73201 16 5.97454 15.7326 5.98651 15.4309C5.99216 15.2885 6 15.145 6 15C6 10.582 8.97355 7 13.6115 7C15.3176 7 16.9378 7.60732 18.2734 8.47894C18.6009 8.69267 19.0088 8.49717 19.0012 8.10616C19.0004 8.06876 19 8.03318 19 8C19 3.589 15.0439 0 10.1825 0C5.32115 0 1.36504 3.589 1.36504 8C1.36504 9.24168 1.67304 10.4357 2.26529 11.523C2.49433 11.9436 2.45549 12.472 2.12042 12.8141L0.664819 14.3003C0.0449194 14.9332 0.493315 16 1.37923 16H5.42999Z",
                        fill: l,
                    }),
                    (0, o.jsx)("path", {
                        d: "M20.0134 17.8398C19.8366 17.558 19.8172 17.2085 19.9242 16.8935C20.1307 16.2852 20.2371 15.6451 20.2371 15C20.2371 11.691 17.4914 9 14.1166 9C10.7419 9 7.99609 11.691 7.99609 15C7.99609 18.309 10.7419 21 14.1166 21H20.1882C20.9744 21 21.4531 20.1345 21.0353 19.4685L20.0134 17.8398Z",
                        fill: l,
                    }),
                ],
            }),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : (function (t, e) {
                  var r = Object.keys(t);
                  if (Object.getOwnPropertySymbols) {
                      var o = Object.getOwnPropertySymbols(t);
                      r.push.apply(r, o);
                  }
                  return r;
              })(Object(r)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
              }),
        e),
    );
}
