n.d(t, {
    A: () => c,
});
var r = n(627968);
n(64700);
var i = n(397927),
    l = n(422258),
    a = n(985018);

function c(e) {
    return (0, r.jsx)(i.Drp, {
        id: "delete-channel",
        label: a.intl.string(a.t.Jg0R7Q),
        subtext: a.intl.string(a.t["+mNKM9"]),
        color: "danger",
        action: () =>
            (0, i.mMO)(async () => {
                let { default: t } = await n.e("52210").then(n.bind(n, 862377));
                return (n) => {
                    var i, a;
                    return (0, r.jsx)(
                        t,
                        ((i = (function (e) {
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
                        })({}, n)),
                        (a = a =
                            {
                                onConfirm: () => {
                                    n.onClose(), (0, l.fv)(e.id);
                                },
                                channel: e,
                            }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(a))
                            : (function (e, t) {
                                  var n = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var r = Object.getOwnPropertySymbols(e);
                                      n.push.apply(n, r);
                                  }
                                  return n;
                              })(Object(a)).forEach(function (e) {
                                  Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(a, e));
                              }),
                        i),
                    );
                };
            }),
    });
}
