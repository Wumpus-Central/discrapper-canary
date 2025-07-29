(n.d(t, {
    Bi: () => E,
    NX: () => g,
    Uv: () => _,
    Z1: () => m,
    hP: () => S,
    w9: () => p
}),
    n(539854));
var l = n(392711),
    a = n.n(l),
    r = n(536442),
    i = n(695346),
    o = n(626135),
    s = n(178635),
    u = n(250454),
    d = n(531578),
    c = n(981631),
    b = n(760359),
    f = n(388032);
function O(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            l = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (l = l.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            l.forEach(function (t) {
                var l;
                ((l = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: l,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = l));
            }));
    }
    return e;
}
function h(e, t) {
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
let E = (e, t) => {
    let n = a().shuffle(e),
        l = n.findIndex((e) => e.value === t);
    if (l > -1) {
        let e = n[l];
        (n.splice(l, 1), n.push(e));
    }
    return n;
};
function _(e) {
    let { feedbackType: t, location: n } = e,
        { persistToBackend: l } = (0, u.O)({ location: n }),
        a = s.R[t].hotspot;
    l
        ? (o.default.track(c.rMx.USER_SETTINGS_IN_APP_FEEDBACK_OPTED_OUT, {
              feedback_type: d.nw[t],
              opted_out_until: d.uf
          }),
          i.A2.updateSetting((e) => h(O({}, e), { [t]: h(O({}, e[t]), { optOutExpiryTime: d.uf }) })))
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
                        for (l = 0; l < r.length; l++) ((n = r[l]), t.indexOf(n) >= 0 || (a[n] = e[n]));
                        return a;
                    })(e, t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    for (l = 0; l < r.length; l++) ((n = r[l]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n]));
                }
                return a;
            })(e, ['disabled']);
        });
}
function m() {
    return v([
        {
            variant: d.$7.SELF,
            value: d.T_.COULD_NOT_CONNECT,
            label: f.intl.string(b.default.gMHKDA)
        },
        {
            value: d.T_.HIGH_TTC,
            variant: d.$7.SELF,
            label: f.intl.string(b.default.y06Ays)
        },
        {
            value: d.T_.HIGH_LATENCY,
            variant: d.$7.SELF,
            label: f.intl.string(b.default.y5k8Ji)
        },
        {
            value: d.T_.ROBOT_VOICE,
            variant: d.$7.SOMEONE,
            label: f.intl.string(b.default.f2914u)
        },
        {
            value: d.T_.DESYNC,
            variant: d.$7.UNSPECIFIED,
            label: f.intl.string(b.default['zk+QLy'])
        },
        {
            value: d.T_.CUTTING,
            variant: d.$7.SOMEONE,
            label: f.intl.string(b.default.K5vYQE)
        }
    ]);
}
function p(e) {
    let { isMobile: t } = e;
    return v([
        {
            value: d.b9.NO_AUDIO,
            variant: d.$7.SELF,
            label: f.intl.string(b.default.GWypHx)
        },
        {
            value: d.b9.NO_AUDIO,
            variant: d.$7.OTHERS,
            label: f.intl.string(b.default.ftSvQ0)
        },
        {
            value: d.b9.LOW_QUALITY_AUDIO,
            variant: d.$7.OTHERS,
            label: f.intl.string(b.default['1DnNRE'])
        },
        {
            value: d.b9.ROBOT_VOICE,
            variant: d.$7.SOMEONE,
            label: f.intl.string(b.default.yGe0BA)
        },
        {
            value: d.b9.ECHO,
            variant: d.$7.OTHERS,
            label: f.intl.string(b.default.Q5Dsa2)
        },
        {
            value: d.b9.TOO_QUIET_OR_LOUD,
            variant: d.$7.SOMEONE,
            label: f.intl.string(b.default['1o77Iy'])
        },
        {
            value: d.b9.CUTTING,
            variant: d.$7.SOMEONE,
            label: f.intl.string(b.default.RK9DUl)
        },
        {
            value: d.b9.DELAYED,
            variant: d.$7.UNSPECIFIED,
            label: f.intl.string(b.default.RGRgmJ)
        },
        {
            value: d.b9.BACKGROUND_NOISE,
            variant: d.$7.SOMEONE,
            label: f.intl.string(b.default.anHk19)
        },
        {
            value: d.b9.UNABLE_TO_FIND_DEVICE,
            variant: d.$7.SELF,
            label: f.intl.string(b.default['05VSjo'])
        },
        {
            value: d.b9.COMPLAINTS,
            variant: d.$7.OTHERS,
            label: f.intl.string(b.default.kbbtws)
        },
        {
            value: d.b9.TROUBLE_WITH_SPEAKERPHONE,
            variant: d.$7.SELF,
            label: f.intl.string(b.default['4qlGrK']),
            disabled: !t
        }
    ]);
}
function g() {
    return v([
        {
            value: d.ct.NO_VIDEO,
            variant: d.$7.SELF,
            label: f.intl.string(b.default['Bh+02d'])
        },
        {
            value: d.ct.NO_VIDEO,
            variant: d.$7.SOMEONE,
            label: f.intl.string(b.default['R+wqwc'])
        },
        {
            value: d.ct.FREEZING_OR_HITCHING,
            variant: d.$7.SOMEONE,
            label: f.intl.string(b.default['8I/GUF'])
        },
        {
            value: d.ct.BLURRY_OR_PIXELATED,
            variant: d.$7.SOMEONE,
            label: f.intl.string(b.default.k7Ido6)
        },
        {
            value: d.ct.UNABLE_TO_ENABLE_DEVICE,
            variant: d.$7.SELF,
            label: f.intl.string(b.default.QbC6LS)
        },
        {
            value: d.ct.DESYNC,
            variant: d.$7.UNSPECIFIED,
            label: f.intl.string(b.default.vRDE5O)
        }
    ]);
}
function S() {
    return v([
        {
            value: d.s_.TOXIC_OR_INAPPROPRIATE,
            variant: d.$7.OTHERS,
            label: f.intl.string(b.default.PLBRzM)
        }
    ]);
}
