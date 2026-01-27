r.d(t, {
    A: () => c,
});
var n = r(627968);
r(64700);
var l = r(397927),
    s = r(58736),
    a = r(851580),
    i = r(44022),
    o = r(985018);

function c(e) {
    let { onOpen: t, onClose: r, className: c } = e;
    return (0, n.jsx)(i.$, {
        onOpen: t,
        onClose: r,
        popoutPosition: "bottom",
        popoutAlign: "right",
        children: (e, t, r, i, u) => {
            var d, h;
            return (0, n.jsxs)(n.Fragment, {
                children: [
                    (0, n.jsx)(
                        s.In,
                        ((d = (function (e) {
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
                        })({}, r)),
                        (h = h =
                            {
                                ref: u,
                                className: c,
                                onClick: e,
                                icon: l.cFy,
                                "aria-label": o.intl.string(o.t["2pAkDA"]),
                                tooltip: t ? null : o.intl.string(o.t["2pAkDA"]),
                                selected: t,
                                showBadge: i,
                            }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(d, Object.getOwnPropertyDescriptors(h))
                            : (function (e, t) {
                                  var r = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var n = Object.getOwnPropertySymbols(e);
                                      r.push.apply(r, n);
                                  }
                                  return r;
                              })(Object(h)).forEach(function (e) {
                                  Object.defineProperty(d, e, Object.getOwnPropertyDescriptor(h, e));
                              }),
                        d),
                    ),
                    (0, n.jsx)(a.v, {
                        location: "bookmarks-button",
                        targetElementRef: u,
                    }),
                ],
            });
        },
    });
}
