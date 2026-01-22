n.d(t, { i: () => f }), n(896048);
var r = n(627968),
    i = n(158954),
    a = n(292666),
    s = n(397927),
    o = n(94576);
function l(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function c(e) {
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
                l(e, t, n[t]);
            });
    }
    return e;
}
function u(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function d(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : u(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function f(e) {
    let { controls: t, props: n, onPropsChange: l } = e,
        u = (e, t) => {
            l(d(c({}, n), { [e]: t }));
        },
        f = Object.entries(t);
    return 0 === f.length
        ? null
        : (0, r.jsx)("div", {
              className: o.in,
              children: (0, r.jsx)(i.BJc, {
                  gap: 16,
                  children: f.map((e) => {
                      var t;
                      let [i, o] = e,
                          l = null != (t = n[i]) ? t : o.defaultValue;
                      return (0, r.jsxs)(r.Fragment, {
                          children: [
                              "select" === o.type &&
                                  null != o.options &&
                                  (0, r.jsx)(s.l6P, {
                                      label: o.label,
                                      value: l,
                                      onSelectionChange: (e) => u(i, e),
                                      options: o.options,
                                      formatOption: (e) => {
                                          let { label: t, value: n } = e;
                                          return {
                                              id: n,
                                              value: n,
                                              label: t,
                                          };
                                      },
                                      selectionMode: "single",
                                      fullWidth: !0,
                                  }),
                              "boolean" === o.type &&
                                  (0, r.jsx)(s.Checkbox, {
                                      checked: l,
                                      onChange: (e) => u(i, e),
                                      label: o.label,
                                  }),
                              "text" === o.type &&
                                  (0, r.jsx)(a.k, {
                                      value: l,
                                      onChange: (e) => u(i, e),
                                      label: o.label,
                                  }),
                              "number" === o.type &&
                                  (0, r.jsx)(a.k, {
                                      type: "number",
                                      value: String(l),
                                      min: o.minValue,
                                      onChange: (e) => u(i, Number(e)),
                                      label: o.label,
                                  }),
                          ],
                      });
                  }),
              }),
          });
}
