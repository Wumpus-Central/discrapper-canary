n.d(t, { A: () => o }), n(896048);
var r = n(627968),
    i = n(64700),
    l = n(397927),
    s = n(411335),
    a = n(652215),
    c = n(985018);
function o(e) {
    let { rule: t, onChangeRule: n } = e,
        [o, d] = i.useState(t.name);
    return (0, r.jsx)(l.ksK, {
        label: c.intl.string(c.t.WVAHxF),
        onChange: (e) => {
            var r, i;
            d(e),
                n(
                    ((r = (function (e) {
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
                    })({}, t)),
                    (i = i = { name: e }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(i))
                        : (function (e, t) {
                              var n = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var r = Object.getOwnPropertySymbols(e);
                                  n.push.apply(n, r);
                              }
                              return n;
                          })(Object(i)).forEach(function (e) {
                              Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(i, e));
                          }),
                    r),
                );
        },
        onClick: (e) => e.stopPropagation(),
        onKeyDown: (e) => {
            e.which === a.Ks6.SPACE && e.stopPropagation();
        },
        placeholder: c.intl.string(c.t["5AO43K"]),
        maxLength: s.NX,
        value: o,
    });
}
