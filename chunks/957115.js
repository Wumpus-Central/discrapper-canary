n.d(t, {
    Bi: () => E,
    NX: () => x,
    Uv: () => g,
    Z1: () => _,
    hP: () => S,
    w9: () => p
}),
    n(539854);
var l = n(392711),
    i = n.n(l),
    r = n(536442),
    a = n(695346),
    u = n(626135),
    s = n(178635),
    o = n(250454),
    b = n(531578),
    c = n(981631),
    d = n(760359),
    f = n(388032);
function O(e) {
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
function v(e, t) {
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
    let n = i().shuffle(e),
        l = n.findIndex((e) => e.value === t);
    if (l > -1) {
        let e = n[l];
        n.splice(l, 1), n.push(e);
    }
    return n;
};
function g(e) {
    let { feedbackType: t, location: n } = e,
        { persistToBackend: l } = (0, o.O)({ location: n }),
        i = s.R[t].hotspot;
    l
        ? (u.default.track(c.rMx.USER_SETTINGS_IN_APP_FEEDBACK_OPTED_OUT, {
              feedback_type: b.nw[t],
              opted_out_until: b.uf
          }),
          a.A2.updateSetting((e) => v(O({}, e), { [t]: v(O({}, e[t]), { optOutExpiryTime: b.uf }) })))
        : (0, r.Kw)(i);
}
function h(e) {
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
                    i = (function (e, t) {
                        if (null == e) return {};
                        var n,
                            l,
                            i = {},
                            r = Object.keys(e);
                        for (l = 0; l < r.length; l++) (n = r[l]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                        return i;
                    })(e, t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    for (l = 0; l < r.length; l++) (n = r[l]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
                }
                return i;
            })(e, ['disabled']);
        });
}
function _() {
    return h([
        {
            variant: b.$7.SELF,
            value: b.T_.COULD_NOT_CONNECT,
            label: f.intl.string(d.default.gMHKDA)
        },
        {
            value: b.T_.HIGH_TTC,
            variant: b.$7.SELF,
            label: f.intl.string(d.default.y06Ays)
        },
        {
            value: b.T_.HIGH_LATENCY,
            variant: b.$7.SELF,
            label: f.intl.string(d.default.y5k8Ji)
        },
        {
            value: b.T_.ROBOT_VOICE,
            variant: b.$7.SOMEONE,
            label: f.intl.string(d.default.f2914u)
        },
        {
            value: b.T_.DESYNC,
            variant: b.$7.UNSPECIFIED,
            label: f.intl.string(d.default['zk+QLy'])
        },
        {
            value: b.T_.CUTTING,
            variant: b.$7.SOMEONE,
            label: f.intl.string(d.default.K5vYQE)
        }
    ]);
}
function p(e) {
    let { isMobile: t } = e;
    return h([
        {
            value: b.b9.NO_AUDIO,
            variant: b.$7.SELF,
            label: f.intl.string(d.default.GWypHx)
        },
        {
            value: b.b9.NO_AUDIO,
            variant: b.$7.OTHERS,
            label: f.intl.string(d.default.ftSvQ0)
        },
        {
            value: b.b9.LOW_QUALITY_AUDIO,
            variant: b.$7.OTHERS,
            label: f.intl.string(d.default['1DnNRE'])
        },
        {
            value: b.b9.ROBOT_VOICE,
            variant: b.$7.SOMEONE,
            label: f.intl.string(d.default.yGe0BA)
        },
        {
            value: b.b9.ECHO,
            variant: b.$7.OTHERS,
            label: f.intl.string(d.default.Q5Dsa2)
        },
        {
            value: b.b9.TOO_QUIET_OR_LOUD,
            variant: b.$7.SOMEONE,
            label: f.intl.string(d.default['1o77Iy'])
        },
        {
            value: b.b9.CUTTING,
            variant: b.$7.SOMEONE,
            label: f.intl.string(d.default.RK9DUl)
        },
        {
            value: b.b9.DELAYED,
            variant: b.$7.UNSPECIFIED,
            label: f.intl.string(d.default.RGRgmJ)
        },
        {
            value: b.b9.BACKGROUND_NOISE,
            variant: b.$7.SOMEONE,
            label: f.intl.string(d.default.anHk19)
        },
        {
            value: b.b9.UNABLE_TO_FIND_DEVICE,
            variant: b.$7.SELF,
            label: f.intl.string(d.default['05VSjo'])
        },
        {
            value: b.b9.COMPLAINTS,
            variant: b.$7.OTHERS,
            label: f.intl.string(d.default.kbbtws)
        },
        {
            value: b.b9.TROUBLE_WITH_SPEAKERPHONE,
            variant: b.$7.SELF,
            label: f.intl.string(d.default['4qlGrK']),
            disabled: !t
        }
    ]);
}
function x() {
    return h([
        {
            value: b.ct.NO_VIDEO,
            variant: b.$7.SELF,
            label: f.intl.string(d.default['Bh+02d'])
        },
        {
            value: b.ct.NO_VIDEO,
            variant: b.$7.SOMEONE,
            label: f.intl.string(d.default['R+wqwc'])
        },
        {
            value: b.ct.FREEZING_OR_HITCHING,
            variant: b.$7.SOMEONE,
            label: f.intl.string(d.default['8I/GUF'])
        },
        {
            value: b.ct.BLURRY_OR_PIXELATED,
            variant: b.$7.SOMEONE,
            label: f.intl.string(d.default.k7Ido6)
        },
        {
            value: b.ct.UNABLE_TO_ENABLE_DEVICE,
            variant: b.$7.SELF,
            label: f.intl.string(d.default.QbC6LS)
        },
        {
            value: b.ct.DESYNC,
            variant: b.$7.UNSPECIFIED,
            label: f.intl.string(d.default.vRDE5O)
        }
    ]);
}
function S() {
    return h([
        {
            value: b.s_.TOXIC_OR_INAPPROPRIATE,
            variant: b.$7.OTHERS,
            label: f.intl.string(d.default.PLBRzM)
        }
    ]);
}
