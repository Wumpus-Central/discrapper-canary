n.d(t, {
    Bi: () => h,
    NX: () => p,
    Uv: () => E,
    Z1: () => g,
    hP: () => S,
    w9: () => m
}),
    n(539854);
var l = n(392711),
    a = n.n(l),
    r = n(536442),
    i = n(695346),
    o = n(626135),
    s = n(178635),
    u = n(250454),
    c = n(531578),
    d = n(981631),
    b = n(574379),
    _ = n(388032);
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
function O(e, t) {
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
function E(e) {
    let { feedbackType: t, location: n } = e,
        { persistToBackend: l } = (0, u.O)({ location: n }),
        a = s.R[t].hotspot;
    l
        ? (o.default.track(d.rMx.USER_SETTINGS_IN_APP_FEEDBACK_OPTED_OUT, {
              feedback_type: c.nw[t],
              opted_out_until: c.uf
          }),
          i.A2.updateSetting((e) => O(f({}, e), { [t]: O(f({}, e[t]), { optOutExpiryTime: c.uf }) })))
        : (0, r.Kw)(a);
}
function v(e) {
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
function g() {
    return v([
        {
            variant: c.$7.SELF,
            value: c.T_.COULD_NOT_CONNECT,
            label: _.intl.string(b.default.gMHKDA)
        },
        {
            value: c.T_.HIGH_TTC,
            variant: c.$7.SELF,
            label: _.intl.string(b.default.y06Ays)
        },
        {
            value: c.T_.HIGH_LATENCY,
            variant: c.$7.SELF,
            label: _.intl.string(b.default.y5k8Ji)
        },
        {
            value: c.T_.ROBOT_VOICE,
            variant: c.$7.SOMEONE,
            label: _.intl.string(b.default.f2914u)
        }
    ]);
}
function m(e) {
    let { isMobile: t } = e;
    return v([
        {
            value: c.b9.NO_AUDIO,
            variant: c.$7.SELF,
            label: _.intl.string(b.default.GWypHx)
        },
        {
            value: c.b9.NO_AUDIO,
            variant: c.$7.OTHERS,
            label: _.intl.string(b.default.ftSvQ0)
        },
        {
            value: c.b9.LOW_QUALITY_AUDIO,
            variant: c.$7.OTHERS,
            label: _.intl.string(b.default['1DnNRE'])
        },
        {
            value: c.b9.ROBOT_VOICE,
            variant: c.$7.SOMEONE,
            label: _.intl.string(b.default.yGe0BA)
        },
        {
            value: c.b9.ECHO,
            variant: c.$7.OTHERS,
            label: _.intl.string(b.default.Q5Dsa2)
        },
        {
            value: c.b9.TOO_QUIET,
            variant: c.$7.SOMEONE,
            label: _.intl.string(b.default.WyMQjI)
        },
        {
            value: c.b9.TOO_LOUD,
            variant: c.$7.SOMEONE,
            label: _.intl.string(b.default.RuTscn)
        },
        {
            value: c.b9.CUTTING,
            variant: c.$7.SOMEONE,
            label: _.intl.string(b.default.RK9DUl)
        },
        {
            value: c.b9.DELAYED,
            variant: c.$7.UNSPECIFIED,
            label: _.intl.string(b.default.RGRgmJ)
        },
        {
            value: c.b9.BACKGROUND_NOISE,
            variant: c.$7.SOMEONE,
            label: _.intl.string(b.default.anHk19)
        },
        {
            value: c.b9.UNABLE_TO_FIND_INPUT_DEVICE,
            variant: c.$7.SELF,
            label: _.intl.string(b.default.J2FWpq)
        },
        {
            value: c.b9.UNABLE_TO_FIND_OUTPUT_DEVICE,
            variant: c.$7.SELF,
            label: _.intl.string(b.default['Fx8+Ji'])
        },
        {
            value: c.b9.TROUBLE_WITH_SPEAKERPHONE,
            variant: c.$7.SELF,
            label: _.intl.string(b.default['4qlGrK']),
            disabled: !t
        }
    ]);
}
function p() {
    return v([
        {
            value: c.ct.NO_VIDEO,
            variant: c.$7.SELF,
            label: _.intl.string(b.default['Bh+02d'])
        },
        {
            value: c.ct.NO_VIDEO,
            variant: c.$7.SOMEONE,
            label: _.intl.string(b.default['R+wqwc'])
        },
        {
            value: c.ct.FREEZING_OR_HITCHING,
            variant: c.$7.SOMEONE,
            label: _.intl.string(b.default['8I/GUF'])
        },
        {
            value: c.ct.BLURRY_OR_PIXELATED,
            variant: c.$7.SOMEONE,
            label: _.intl.string(b.default.k7Ido6)
        },
        {
            value: c.ct.UNABLE_TO_ENABLE_DEVICE,
            variant: c.$7.SELF,
            label: _.intl.string(b.default.QbC6LS)
        },
        {
            value: c.ct.DESYNC,
            variant: c.$7.SOMEONE,
            label: _.intl.string(b.default['9NnNHx'])
        }
    ]);
}
function S() {
    return v([
        {
            value: c.s_.TOXIC_OR_INAPPROPRIATE,
            variant: c.$7.OTHERS,
            label: _.intl.string(b.default.PLBRzM)
        }
    ]);
}
