r.d(t, { default: () => g }), r(388685), r(781311);
var n = r(54381),
    a = r(473749),
    i = r(97613),
    o = r.n(i),
    l = r(410575),
    c = r(881052),
    u = r(246364),
    s = r(296991),
    b = r(915509),
    d = r(981631),
    p = r(388032);
let g = function (e) {
    var t, r;
    let { field: i, onSave: g, onClose: y, guild: f } = e,
        [m, v] = a.useState(
            (null == i ? void 0 : i.values) != null
                ? null == i
                    ? void 0
                    : i.values.map((e) => ({
                          id: o()(),
                          value: e,
                      }))
                : [
                      {
                          id: o()(),
                          value: "",
                      },
                  ],
        ),
        [O, j] = a.useState(null),
        _ = async () => {
            null != O && j(null);
            let e = m.map((e) => e.value.trim()).filter((e) => "" !== e);
            if (0 === e.length) return void j(p.intl.string(p.t.TCHkcd));
            let t = {
                field_type: u.QJ.TERMS,
                label: p.intl.string(p.t["9suSIA"]),
                values: e,
                required: !0,
            };
            try {
                await g(t), y();
            } catch (e) {
                j(new c.Hx(e).getAnyErrorMessage());
            }
        };
    return (0, n.jsx)(l.Z, {
        page: d.ZY5.GUILD_RULES_CREATE_MODAL,
        children: (0, n.jsx)(
            b.Z,
            ((t = (function (e) {
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
            })({}, e)),
            (r = r =
                {
                    errorText: O,
                    title: p.intl.string(p.t["3pz9t3"]),
                    onCancel: y,
                    onConfirm: _,
                    children: (0, n.jsx)(s.k, {
                        guild: f,
                        rules: m,
                        setRules: v,
                    }),
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
            t),
        ),
    });
};
