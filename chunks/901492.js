n.d(t, { default: () => c });
var r = n(951288);
n(647438);
var i = n(755721),
    l = n(481060),
    o = n(933557),
    a = n(388032),
    s = n(791603);
function c(e) {
    var t,
        n,
        { channel: c, category: u } = e,
        d = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        i = {},
                        l = Object.keys(e);
                    for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                for (r = 0; r < l.length; r++)
                    (n = l[r]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            }
            return i;
        })(e, ["channel", "category"]);
    let p = (0, o.ZP)(c, !0),
        h = (0, o.ZP)(u);
    return (0, r.jsx)(
        l.ConfirmModal,
        ((t = (function (e) {
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
        })(
            {
                header: a.intl.string(a.t.YWMtRe),
                confirmText: a.intl.string(a.t.eW8Gy4),
                cancelText: a.intl.string(a.t.s4uM3b),
                confirmButtonColor: i.zx.Colors.BRAND,
            },
            d,
        )),
        (n = n =
            {
                children: (0, r.jsx)(l.Text, {
                    variant: "text-md/normal",
                    className: s.message,
                    selectable: !1,
                    children: a.intl.format(a.t["iKW+jY"], {
                        channelName: p,
                        categoryName: h,
                    }),
                }),
            }),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(n)).forEach(function (e) {
                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
              }),
        t),
    );
}
