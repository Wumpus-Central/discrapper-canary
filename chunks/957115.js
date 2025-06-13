n.d(t, {
    Bi: () => v,
    NX: () => m,
    Uv: () => h,
    Z1: () => N,
    hP: () => g,
    w9: () => x
}),
    n(539854);
var l = n(392711),
    a = n.n(l),
    i = n(536442),
    r = n(695346),
    s = n(626135),
    u = n(178635),
    o = n(250454),
    c = n(531578),
    d = n(981631),
    b = n(760359),
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
let v = (e, t) => {
    let n = a().shuffle(e),
        l = n.findIndex((e) => e.value === t);
    if (l > -1) {
        let e = n[l];
        n.splice(l, 1), n.push(e);
    }
    return n;
};
function h(e) {
    let { feedbackType: t, location: n } = e,
        { persistToBackend: l } = (0, o.O)({ location: n }),
        a = u.R[t].hotspot;
    l
        ? (s.default.track(d.rMx.USER_SETTINGS_IN_APP_FEEDBACK_OPTED_OUT, {
              feedback_type: c.nw[t],
              opted_out_until: c.uf
          }),
          r.A2.updateSetting((e) => E(f({}, e), { [t]: E(f({}, e[t]), { optOutExpiryTime: c.uf }) })))
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
function N() {
    return p([
        {
            variant: c.$7.SELF,
            value: c.T_.COULD_NOT_CONNECT,
            label: O.intl.string(b.default.gMHKDA)
        },
        {
            value: c.T_.HIGH_TTC,
            variant: c.$7.SELF,
            label: O.intl.string(b.default.y06Ays)
        },
        {
            value: c.T_.HIGH_LATENCY,
            variant: c.$7.SELF,
            label: O.intl.string(b.default.y5k8Ji)
        },
        {
            value: c.T_.ROBOT_VOICE,
            variant: c.$7.SOMEONE,
            label: O.intl.string(b.default.f2914u)
        },
        {
            value: c.T_.DESYNC,
            variant: c.$7.UNSPECIFIED,
            label: O.intl.string(b.default['zk+QLy'])
        },
        {
            value: c.T_.CUTTING,
            variant: c.$7.SOMEONE,
            label: O.intl.string(b.default.K5vYQE)
        }
    ]);
}
function x(e) {
    let { isMobile: t } = e;
    return p([
        {
            value: c.b9.NO_AUDIO,
            variant: c.$7.SELF,
            label: O.intl.string(b.default.GWypHx)
        },
        {
            value: c.b9.NO_AUDIO,
            variant: c.$7.OTHERS,
            label: O.intl.string(b.default.ftSvQ0)
        },
        {
            value: c.b9.LOW_QUALITY_AUDIO,
            variant: c.$7.OTHERS,
            label: O.intl.string(b.default['1DnNRE'])
        },
        {
            value: c.b9.ROBOT_VOICE,
            variant: c.$7.SOMEONE,
            label: O.intl.string(b.default.yGe0BA)
        },
        {
            value: c.b9.ECHO,
            variant: c.$7.OTHERS,
            label: O.intl.string(b.default.Q5Dsa2)
        },
        {
            value: c.b9.TOO_QUIET_OR_LOUD,
            variant: c.$7.SOMEONE,
            label: O.intl.string(b.default['1o77Iy'])
        },
        {
            value: c.b9.CUTTING,
            variant: c.$7.SOMEONE,
            label: O.intl.string(b.default.RK9DUl)
        },
        {
            value: c.b9.DELAYED,
            variant: c.$7.UNSPECIFIED,
            label: O.intl.string(b.default.RGRgmJ)
        },
        {
            value: c.b9.BACKGROUND_NOISE,
            variant: c.$7.SOMEONE,
            label: O.intl.string(b.default.anHk19)
        },
        {
            value: c.b9.UNABLE_TO_FIND_DEVICE,
            variant: c.$7.SELF,
            label: O.intl.string(b.default['05VSjo'])
        },
        {
            value: c.b9.COMPLAINTS,
            variant: c.$7.OTHERS,
            label: O.intl.string(b.default.kbbtws)
        },
        {
            value: c.b9.TROUBLE_WITH_SPEAKERPHONE,
            variant: c.$7.SELF,
            label: O.intl.string(b.default['4qlGrK']),
            disabled: !t
        }
    ]);
}
function m() {
    return p([
        {
            value: c.ct.NO_VIDEO,
            variant: c.$7.SELF,
            label: O.intl.string(b.default['Bh+02d'])
        },
        {
            value: c.ct.NO_VIDEO,
            variant: c.$7.SOMEONE,
            label: O.intl.string(b.default['R+wqwc'])
        },
        {
            value: c.ct.FREEZING_OR_HITCHING,
            variant: c.$7.SOMEONE,
            label: O.intl.string(b.default['8I/GUF'])
        },
        {
            value: c.ct.BLURRY_OR_PIXELATED,
            variant: c.$7.SOMEONE,
            label: O.intl.string(b.default.k7Ido6)
        },
        {
            value: c.ct.UNABLE_TO_ENABLE_DEVICE,
            variant: c.$7.SELF,
            label: O.intl.string(b.default.QbC6LS)
        },
        {
            value: c.ct.DESYNC,
            variant: c.$7.UNSPECIFIED,
            label: O.intl.string(b.default.vRDE5O)
        }
    ]);
}
function g() {
    return p([
        {
            value: c.s_.TOXIC_OR_INAPPROPRIATE,
            variant: c.$7.OTHERS,
            label: O.intl.string(b.default.PLBRzM)
        }
    ]);
}
