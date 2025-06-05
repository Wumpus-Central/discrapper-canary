n.d(t, {
    Bi: () => h,
    NX: () => m,
    Uv: () => v,
    Z1: () => x,
    hP: () => g,
    w9: () => N
}),
    n(539854);
var l = n(392711),
    a = n.n(l),
    i = n(536442),
    r = n(695346),
    s = n(626135),
    u = n(178635),
    c = n(250454),
    o = n(531578),
    d = n(981631),
    b = n(574379),
    O = n(388032);
function f(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            l = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (l = l.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            l.forEach(function (t) {
                var l;
                (l = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: l,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = l);
            });
    }
    return e;
}
function E(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var l = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, l);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let h = (e, t) => {
    let n = a().shuffle(e),
        l = n.findIndex((e) => e.value === t);
    if (l > -1) {
        let e = n[l];
        n.splice(l, 1), n.push(e);
    }
    return n;
};
function v(e) {
    let { feedbackType: t, location: n } = e,
        { persistToBackend: l } = (0, c.O)({ location: n }),
        a = u.R[t].hotspot;
    l
        ? (s.default.track(d.rMx.USER_SETTINGS_IN_APP_FEEDBACK_OPTED_OUT, {
              feedback_type: o.nw[t],
              opted_out_until: o.uf
          }),
          r.A2.updateSetting((e) => E(f({}, e), { [t]: E(f({}, e[t]), { optOutExpiryTime: o.uf }) })))
        : (0, i.Kw)(a);
}
function p(e) {
    return e
        .filter((e) => {
            let { disabled: t } = e;
            return !t;
        })
        .map((e) => {
            var { disabled: t } = e;
            return (function (e, t) {
                if (null == e) return {};
                var n,
                    l,
                    a = (function (e, t) {
                        if (null == e) return {};
                        var n,
                            l,
                            a = {},
                            i = Object.keys(e);
                        for (l = 0; l < i.length; l++) (n = i[l]), t.indexOf(n) >= 0 || (a[n] = e[n]);
                        return a;
                    })(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (l = 0; l < i.length; l++) (n = i[l]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n]);
                }
                return a;
            })(e, ['disabled']);
        });
}
function x() {
    return p([
        {
            variant: o.$7.SELF,
            value: o.T_.COULD_NOT_CONNECT,
            label: O.intl.string(b.default.gMHKDA)
        },
        {
            value: o.T_.HIGH_TTC,
            variant: o.$7.SELF,
            label: O.intl.string(b.default.y06Ays)
        },
        {
            value: o.T_.HIGH_LATENCY,
            variant: o.$7.SELF,
            label: O.intl.string(b.default.y5k8Ji)
        },
        {
            value: o.T_.ROBOT_VOICE,
            variant: o.$7.SOMEONE,
            label: O.intl.string(b.default.f2914u)
        }
    ]);
}
function N(e) {
    let { isMobile: t } = e;
    return p([
        {
            value: o.b9.NO_AUDIO,
            variant: o.$7.SELF,
            label: O.intl.string(b.default.GWypHx)
        },
        {
            value: o.b9.NO_AUDIO,
            variant: o.$7.OTHERS,
            label: O.intl.string(b.default.ftSvQ0)
        },
        {
            value: o.b9.LOW_QUALITY_AUDIO,
            variant: o.$7.OTHERS,
            label: O.intl.string(b.default['1DnNRE'])
        },
        {
            value: o.b9.ROBOT_VOICE,
            variant: o.$7.SOMEONE,
            label: O.intl.string(b.default.yGe0BA)
        },
        {
            value: o.b9.ECHO,
            variant: o.$7.OTHERS,
            label: O.intl.string(b.default.Q5Dsa2)
        },
        {
            value: o.b9.TOO_QUIET,
            variant: o.$7.SOMEONE,
            label: O.intl.string(b.default.WyMQjI)
        },
        {
            value: o.b9.TOO_LOUD,
            variant: o.$7.SOMEONE,
            label: O.intl.string(b.default.RuTscn)
        },
        {
            value: o.b9.CUTTING,
            variant: o.$7.SOMEONE,
            label: O.intl.string(b.default.RK9DUl)
        },
        {
            value: o.b9.DELAYED,
            variant: o.$7.UNSPECIFIED,
            label: O.intl.string(b.default.RGRgmJ)
        },
        {
            value: o.b9.BACKGROUND_NOISE,
            variant: o.$7.SOMEONE,
            label: O.intl.string(b.default.anHk19)
        },
        {
            value: o.b9.UNABLE_TO_FIND_INPUT_DEVICE,
            variant: o.$7.SELF,
            label: O.intl.string(b.default.J2FWpq)
        },
        {
            value: o.b9.UNABLE_TO_FIND_OUTPUT_DEVICE,
            variant: o.$7.SELF,
            label: O.intl.string(b.default['Fx8+Ji'])
        },
        {
            value: o.b9.TROUBLE_WITH_SPEAKERPHONE,
            variant: o.$7.SELF,
            label: O.intl.string(b.default['4qlGrK']),
            disabled: !t
        }
    ]);
}
function m() {
    return p([
        {
            value: o.ct.NO_VIDEO,
            variant: o.$7.SELF,
            label: O.intl.string(b.default['Bh+02d'])
        },
        {
            value: o.ct.NO_VIDEO,
            variant: o.$7.SOMEONE,
            label: O.intl.string(b.default['R+wqwc'])
        },
        {
            value: o.ct.FREEZING_OR_HITCHING,
            variant: o.$7.SOMEONE,
            label: O.intl.string(b.default['8I/GUF'])
        },
        {
            value: o.ct.BLURRY_OR_PIXELATED,
            variant: o.$7.SOMEONE,
            label: O.intl.string(b.default.k7Ido6)
        },
        {
            value: o.ct.UNABLE_TO_ENABLE_DEVICE,
            variant: o.$7.SELF,
            label: O.intl.string(b.default.QbC6LS)
        },
        {
            value: o.ct.DESYNC,
            variant: o.$7.SOMEONE,
            label: O.intl.string(b.default['9NnNHx'])
        }
    ]);
}
function g() {
    return p([
        {
            value: o.s_.TOXIC_OR_INAPPROPRIATE,
            variant: o.$7.OTHERS,
            label: O.intl.string(b.default.PLBRzM)
        }
    ]);
}
