n.d(t, {
    Bi: () => v,
    NX: () => g,
    Uv: () => x,
    Z1: () => p,
    hP: () => h,
    w9: () => m
}),
    n(539854);
var l = n(392711),
    a = n.n(l),
    r = n(536442),
    i = n(695346),
    s = n(626135),
    u = n(178635),
    c = n(250454),
    o = n(531578),
    d = n(981631),
    O = n(860469),
    f = n(388032);
function b(e) {
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
let v = (e, t) => {
    let n = a().shuffle(e),
        l = n.findIndex((e) => e.value === t);
    if (l > -1) {
        let e = n[l];
        n.splice(l, 1), n.push(e);
    }
    return n;
};
function x(e) {
    let { feedbackType: t, location: n } = e,
        { persistToBackend: l } = (0, c.O)({ location: n }),
        a = u.R[t].hotspot;
    l
        ? (s.default.track(d.rMx.USER_SETTINGS_IN_APP_FEEDBACK_OPTED_OUT, {
              feedback_type: o.nw[t],
              opted_out_until: o.uf
          }),
          i.A2.updateSetting((e) => E(b({}, e), { [t]: E(b({}, e[t]), { optOutExpiryTime: o.uf }) })))
        : (0, r.Kw)(a);
}
function N(e) {
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
                            r = Object.keys(e);
                        for (l = 0; l < r.length; l++) (n = r[l]), t.indexOf(n) >= 0 || (a[n] = e[n]);
                        return a;
                    })(e, t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    for (l = 0; l < r.length; l++) (n = r[l]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n]);
                }
                return a;
            })(e, ['disabled']);
        });
}
function p() {
    return N([
        {
            variant: o.$7.SELF,
            value: o.T_.COULD_NOT_CONNECT,
            label: f.intl.string(O.default.gMHKDA)
        },
        {
            value: o.T_.HIGH_TTC,
            variant: o.$7.SELF,
            label: f.intl.string(O.default.y06Ays)
        },
        {
            value: o.T_.HIGH_LATENCY,
            variant: o.$7.SELF,
            label: f.intl.string(O.default.y5k8Ji)
        },
        {
            value: o.T_.ROBOT_VOICE,
            variant: o.$7.SOMEONE,
            label: f.intl.string(O.default.f2914u)
        }
    ]);
}
function m(e) {
    let { isMobile: t } = e;
    return N([
        {
            value: o.b9.NO_AUDIO,
            variant: o.$7.SELF,
            label: f.intl.string(O.default.GWypHx)
        },
        {
            value: o.b9.NO_AUDIO,
            variant: o.$7.OTHERS,
            label: f.intl.string(O.default.ftSvQ0)
        },
        {
            value: o.b9.LOW_QUALITY_AUDIO,
            variant: o.$7.OTHERS,
            label: f.intl.string(O.default['1DnNRE'])
        },
        {
            value: o.b9.ROBOT_VOICE,
            variant: o.$7.SOMEONE,
            label: f.intl.string(O.default.yGe0BA)
        },
        {
            value: o.b9.ECHO,
            variant: o.$7.OTHERS,
            label: f.intl.string(O.default.Q5Dsa2)
        },
        {
            value: o.b9.TOO_QUIET,
            variant: o.$7.SOMEONE,
            label: f.intl.string(O.default.WyMQjI)
        },
        {
            value: o.b9.TOO_LOUD,
            variant: o.$7.SOMEONE,
            label: f.intl.string(O.default.RuTscn)
        },
        {
            value: o.b9.CUTTING,
            variant: o.$7.SOMEONE,
            label: f.intl.string(O.default.RK9DUl)
        },
        {
            value: o.b9.DELAYED,
            variant: o.$7.UNSPECIFIED,
            label: f.intl.string(O.default.RGRgmJ)
        },
        {
            value: o.b9.BACKGROUND_NOISE,
            variant: o.$7.SOMEONE,
            label: f.intl.string(O.default.anHk19)
        },
        {
            value: o.b9.UNABLE_TO_FIND_INPUT_DEVICE,
            variant: o.$7.SELF,
            label: f.intl.string(O.default.J2FWpq)
        },
        {
            value: o.b9.UNABLE_TO_FIND_OUTPUT_DEVICE,
            variant: o.$7.SELF,
            label: f.intl.string(O.default['Fx8+Ji'])
        },
        {
            value: o.b9.TROUBLE_WITH_SPEAKERPHONE,
            variant: o.$7.SELF,
            label: f.intl.string(O.default['4qlGrK']),
            disabled: !t
        }
    ]);
}
function g() {
    return N([
        {
            value: o.ct.NO_VIDEO,
            variant: o.$7.SELF,
            label: f.intl.string(O.default['Bh+02d'])
        },
        {
            value: o.ct.NO_VIDEO,
            variant: o.$7.SOMEONE,
            label: f.intl.string(O.default['R+wqwc'])
        },
        {
            value: o.ct.FREEZING_OR_HITCHING,
            variant: o.$7.SOMEONE,
            label: f.intl.string(O.default['8I/GUF'])
        },
        {
            value: o.ct.BLURRY_OR_PIXELATED,
            variant: o.$7.SOMEONE,
            label: f.intl.string(O.default.k7Ido6)
        },
        {
            value: o.ct.UNABLE_TO_ENABLE_DEVICE,
            variant: o.$7.SELF,
            label: f.intl.string(O.default.QbC6LS)
        },
        {
            value: o.ct.DESYNC,
            variant: o.$7.SOMEONE,
            label: f.intl.string(O.default['9NnNHx'])
        }
    ]);
}
function h() {
    return N([
        {
            value: o.s_.TOXIC_OR_INAPPROPRIATE,
            variant: o.$7.OTHERS,
            label: f.intl.string(O.default.PLBRzM)
        }
    ]);
}
