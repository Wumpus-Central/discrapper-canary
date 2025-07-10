(r.d(t, { default: () => m }), r(388685), r(781311));
var n = r(255367),
    a = r(73800),
    i = r(97613),
    o = r.n(i),
    l = r(410575),
    s = r(881052),
    c = r(246364),
    d = r(296991),
    u = r(915509),
    p = r(981631),
    b = r(388032);
let m = function (e) {
    var t, r;
    let { field: i, onSave: m, onClose: _, guild: g } = e,
        [y, x] = a.useState(
            (null == i ? void 0 : i.values) != null
                ? null == i
                    ? void 0
                    : i.values.map((e) => ({
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
        [f, j] = a.useState(null),
        h = async () => {
            null != f && j(null);
            let e = y.map((e) => e.value.trim()).filter((e) => '' !== e);
            if (0 === e.length) return void j(b.intl.string(b.t.TCHkcX));
            let t = {
                field_type: c.QJ.TERMS,
                label: b.intl.string(b.t['9suSIC']),
                values: e,
                required: !0
            };
            try {
                (await m(t), _());
            } catch (e) {
                j(new s.Hx(e).getAnyErrorMessage());
            }
        };
    return (0, n.jsx)(l.Z, {
        page: p.ZY5.GUILD_RULES_CREATE_MODAL,
        children: (0, n.jsx)(
            u.Z,
            ((t = (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {},
                        n = Object.keys(r);
                    ('function' == typeof Object.getOwnPropertySymbols &&
                        (n = n.concat(
                            Object.getOwnPropertySymbols(r).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(r, e).enumerable;
                            })
                        )),
                        n.forEach(function (t) {
                            var n;
                            ((n = r[t]),
                                t in e
                                    ? Object.defineProperty(e, t, {
                                          value: n,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0
                                      })
                                    : (e[t] = n));
                        }));
                }
                return e;
            })({}, e)),
            (r = r =
                {
                    errorText: f,
                    title: b.intl.string(b.t['3pz9t7']),
                    onCancel: _,
                    onConfirm: h,
                    children: (0, n.jsx)(d.k, {
                        guild: g,
                        rules: y,
                        setRules: x
                    })
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
        )
    });
};
