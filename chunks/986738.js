n.d(t, {
    A: () => c,
});
var r = n(627968);
n(64700);
var l = n(827734),
    i = n(397927),
    a = n(823508),
    s = n(47868),
    o = n(985018);

function c(e) {
    let { className: t, guildId: c } = e,
        u = (0, a.A)();
    return (0, r.jsx)(s.A, {
        className: t,
        icon: (0, r.jsx)(i.CTc, {
            size: "custom",
            color: "currentColor",
            height: 20,
            width: 20,
        }),
        color: l.A.unsafe_rawColors.BRAND_500.css,
        title: o.intl.string(o.t["60lJ0C"]),
        description: o.intl.string(o.t["EYn7/y"]),
        onClick: function () {
            (0, i.mMO)(async () => {
                let { default: e } = await Promise.all([n.e("68587"), n.e("342"), n.e("55751")]).then(n.bind(n, 21653));
                return (t) => {
                    var n, l;
                    return (0, r.jsx)(
                        e,
                        ((n = (function (e) {
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
                        (l = l =
                            {
                                guildId: c,
                            }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(l))
                            : (function (e, t) {
                                  var n = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var r = Object.getOwnPropertySymbols(e);
                                      n.push.apply(n, r);
                                  }
                                  return n;
                              })(Object(l)).forEach(function (e) {
                                  Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(l, e));
                              }),
                        n),
                    );
                };
            }, u);
        },
    });
}
