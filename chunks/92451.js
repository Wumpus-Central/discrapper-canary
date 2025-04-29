n.d(t, { default: () => _ }), n(388685), n(781311);
var r = n(255367),
    a = n(73800),
    o = n(97613),
    l = n.n(o),
    i = n(410575),
    c = n(881052),
    s = n(246364),
    d = n(296991),
    u = n(915509),
    b = n(981631),
    p = n(388032);
let _ = function (e) {
    var t, n;
    let { field: o, onSave: _, onClose: m, guild: g } = e,
        [y, x] = a.useState(
            (null == o ? void 0 : o.values) != null
                ? null == o
                    ? void 0
                    : o.values.map((e) => ({
                          id: l()(),
                          value: e
                      }))
                : [
                      {
                          id: l()(),
                          value: ''
                      }
                  ]
        ),
        [f, h] = a.useState(null),
        j = async () => {
            null != f && h(null);
            let e = y.map((e) => e.value.trim()).filter((e) => '' !== e);
            if (0 === e.length) return void h(p.intl.string(p.t.TCHkcX));
            let t = {
                field_type: s.QJ.TERMS,
                label: p.intl.string(p.t['9suSIC']),
                values: e,
                required: !0
            };
            try {
                await _(t), m();
            } catch (e) {
                h(new c.Hx(e).getAnyErrorMessage());
            }
        };
    return (0, r.jsx)(i.Z, {
        page: b.ZY5.GUILD_RULES_CREATE_MODAL,
        children: (0, r.jsx)(
            u.Z,
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
                    errorText: f,
                    title: p.intl.string(p.t['3pz9t7']),
                    onCancel: m,
                    onConfirm: j,
                    children: (0, r.jsx)(d.k, {
                        guild: g,
                        rules: y,
                        setRules: x
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
