n.d(t, { default: () => g }), n(47120), n(566702);
var r = n(200651),
    l = n(192379),
    a = n(97613),
    o = n.n(a),
    i = n(410575),
    c = n(881052),
    s = n(246364),
    u = n(296991),
    d = n(915509),
    p = n(981631),
    b = n(388032);
let g = function (e) {
    var t, n;
    let { field: a, onSave: g, onClose: f, guild: m } = e,
        [x, j] = l.useState(
            (null == a ? void 0 : a.values) != null
                ? null == a
                    ? void 0
                    : a.values.map((e) => ({
                          id: o()(),
                          value: e
                      }))
                : [
                      {
                          id: o()(),
                          value: ''
                      }
                  ]
        ),
        [y, h] = l.useState(null),
        O = async () => {
            null != y && h(null);
            let e = x.map((e) => e.value.trim()).filter((e) => '' !== e);
            if (0 === e.length) return void h(b.NW.string(b.t.TCHkcX));
            let t = {
                field_type: s.QJ.TERMS,
                label: b.NW.string(b.t['9suSIC']),
                values: e,
                required: !0
            };
            try {
                await g(t), f();
            } catch (e) {
                h(new c.Hx(e).getAnyErrorMessage());
            }
        };
    return (0, r.jsx)(i.Z, {
        page: p.ZY5.GUILD_RULES_CREATE_MODAL,
        children: (0, r.jsx)(
            d.Z,
            ((t = (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    'function' == typeof Object.getOwnPropertySymbols &&
                        (r = r.concat(
                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                            })
                        )),
                        r.forEach(function (t) {
                            var r;
                            (r = n[t]),
                                t in e
                                    ? Object.defineProperty(e, t, {
                                          value: r,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0
                                      })
                                    : (e[t] = r);
                        });
                }
                return e;
            })({}, e)),
            (n = n =
                {
                    errorText: y,
                    title: b.NW.string(b.t['3pz9t7']),
                    onCancel: f,
                    onConfirm: O,
                    children: (0, r.jsx)(u.k, {
                        guild: m,
                        rules: x,
                        setRules: j
                    })
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
            t)
        )
    });
};
