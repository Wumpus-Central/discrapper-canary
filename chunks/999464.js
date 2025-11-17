r.d(t, { Z: () => f }), r(388685);
var n = r(54381),
    i = r(473749),
    l = r(793030),
    o = r(481060),
    a = r(231239),
    c = r(881052),
    s = r(888592),
    u = r(981631),
    d = r(388032);
let f = (e) => {
    var t,
        r,
        { email: f, setStep: O, onBack: p, school: y, setSchool: b } = e,
        g = (function (e, t) {
            if (null == e) return {};
            var r,
                n,
                i = (function (e, t) {
                    if (null == e) return {};
                    var r,
                        n,
                        i = {},
                        l = Object.keys(e);
                    for (n = 0; n < l.length; n++) (r = l[n]), t.indexOf(r) >= 0 || (i[r] = e[r]);
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                for (n = 0; n < l.length; n++)
                    (r = l[n]),
                        !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
            }
            return i;
        })(e, ["email", "setStep", "onBack", "school", "setSchool"]);
    let [j, m] = i.useState(null),
        [v, h] = i.useState(!1),
        E = async () => {
            m(null), h(!0);
            try {
                await a.Z.signup(f, y), O(s.tF.EMAIL_WAITLIST);
            } catch (e) {
                m(new c.Hx(e));
            } finally {
                h(!1);
            }
        },
        S = async (e) => {
            null != y && "" !== y && e.charCode === u.yXg.ENTER && (await E());
        };
    return (0, n.jsx)(
        l.Modal,
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
        })({}, g)),
        (r = r =
            {
                title: d.intl.string(d.t["2FNWBG"]),
                subtitle: d.intl.string(d.t["/4y6ox"]),
                actions: [
                    {
                        variant: "secondary",
                        onClick: p,
                        text: d.intl.string(d.t["13/7kX"]),
                    },
                    {
                        variant: "primary",
                        text: d.intl.string(d.t.PDsYAo),
                        onClick: E,
                        loading: v,
                    },
                ],
                children: (0, n.jsx)(o.oil, {
                    label: d.intl.string(d.t["L+AfJr"]),
                    onKeyPress: S,
                    placeholder: d.intl.string(d.t.Y1btJd),
                    onChange: (e) => {
                        b(e);
                    },
                    error: null == j ? void 0 : j.getAnyErrorMessage(),
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
    );
};
