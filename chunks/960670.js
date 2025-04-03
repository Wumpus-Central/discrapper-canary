r.d(t, { default: () => l }), r(47120);
var n = r(200651),
    o = r(192379),
    c = r(481060),
    i = r(388032),
    a = r(277841);
function l(e) {
    var t,
        r,
        { header: l, body: s, onSubmit: b } = e,
        u = (function (e, t) {
            if (null == e) return {};
            var r,
                n,
                o = (function (e, t) {
                    if (null == e) return {};
                    var r,
                        n,
                        o = {},
                        c = Object.keys(e);
                    for (n = 0; n < c.length; n++) (r = c[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
                    return o;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var c = Object.getOwnPropertySymbols(e);
                for (n = 0; n < c.length; n++) (r = c[n]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
            }
            return o;
        })(e, ['header', 'body', 'onSubmit']);
    let [p, f] = o.useState(!1);
    return (0, n.jsxs)(
        c.ConfirmModal,
        ((t = (function (e) {
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
        })(
            {
                header: l,
                confirmText: i.NW.string(i.t['26C4oq']),
                cancelText: i.NW.string(i.t['ETE/oK']),
                onConfirm: () => {
                    b(null, p);
                }
            },
            u
        )),
        (r = r =
            {
                children: [
                    (0, n.jsx)(c.Text, {
                        variant: 'text-md/normal',
                        children: s
                    }),
                    (0, n.jsx)(c.XZJ, {
                        type: c.XZJ.Types.INVERTED,
                        value: p,
                        onChange: () => f((e) => !e),
                        className: a.checkbox,
                        children: (0, n.jsx)(c.Text, {
                            variant: 'text-md/normal',
                            children: i.NW.string(i.t.bq3JXl)
                        })
                    })
                ]
            }),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : (function (e, t) {
                  var r = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(e);
                      r.push.apply(r, n);
                  }
                  return r;
              })(Object(r)).forEach(function (e) {
                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
              }),
        t)
    );
}
