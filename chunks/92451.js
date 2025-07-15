(r.d(e, { default: () => g }), r(388685), r(781311));
var n = r(255367),
    a = r(73800),
    i = r(97613),
    o = r.n(i),
    l = r(410575),
    c = r(881052),
    u = r(246364),
    s = r(296991),
    d = r(915509),
    p = r(981631),
    b = r(388032);
let g = function (t) {
    var e, r;
    let { field: i, onSave: g, onClose: _, guild: y } = t,
        [f, m] = a.useState(
            (null == i ? void 0 : i.values) != null
                ? null == i
                    ? void 0
                    : i.values.map((t) => ({
                          id: o()(),
                          value: t
                      }))
                : [
                      {
                          id: o()(),
                          value: ''
                      }
                  ]
        ),
        [v, O] = a.useState(null),
        j = async () => {
            null != v && O(null);
            let t = f.map((t) => t.value.trim()).filter((t) => '' !== t);
            if (0 === t.length) return void O(b.intl.string(b.t.TCHkcX));
            let e = {
                field_type: u.QJ.TERMS,
                label: b.intl.string(b.t['9suSIC']),
                values: t,
                required: !0
            };
            try {
                (await g(e), _());
            } catch (t) {
                O(new c.Hx(t).getAnyErrorMessage());
            }
        };
    return (0, n.jsx)(l.Z, {
        page: p.ZY5.GUILD_RULES_CREATE_MODAL,
        children: (0, n.jsx)(
            d.Z,
            ((e = (function (t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {},
                        n = Object.keys(r);
                    ('function' == typeof Object.getOwnPropertySymbols &&
                        (n = n.concat(
                            Object.getOwnPropertySymbols(r).filter(function (t) {
                                return Object.getOwnPropertyDescriptor(r, t).enumerable;
                            })
                        )),
                        n.forEach(function (e) {
                            var n;
                            ((n = r[e]),
                                e in t
                                    ? Object.defineProperty(t, e, {
                                          value: n,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0
                                      })
                                    : (t[e] = n));
                        }));
                }
                return t;
            })({}, t)),
            (r = r =
                {
                    errorText: v,
                    title: b.intl.string(b.t['3pz9t7']),
                    onCancel: _,
                    onConfirm: j,
                    children: (0, n.jsx)(s.k, {
                        guild: y,
                        rules: f,
                        setRules: m
                    })
                }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
                : (function (t, e) {
                      var r = Object.keys(t);
                      if (Object.getOwnPropertySymbols) {
                          var n = Object.getOwnPropertySymbols(t);
                          r.push.apply(r, n);
                      }
                      return r;
                  })(Object(r)).forEach(function (t) {
                      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                  }),
            e)
        )
    });
};
