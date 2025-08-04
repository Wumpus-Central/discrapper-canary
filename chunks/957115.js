(n.d(t, {
    Bi: () => E,
    Ez: () => N,
    NX: () => p,
    Uv: () => g,
    Z1: () => h,
    hP: () => T,
    w9: () => S
}),
    n(539854));
var l = n(392711),
    a = n.n(l),
    i = n(536442),
    r = n(695346),
    u = n(626135),
    s = n(178635),
    b = n(250454),
    d = n(531578),
    o = n(981631),
    c = n(760359),
    f = n(388032);
function v(e) {
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
let E = (e, t) => {
    let n = a().shuffle(e),
        l = n.findIndex((e) => e.value === t);
    if (l > -1) {
        let e = n[l];
        (n.splice(l, 1), n.push(e));
    }
    return n;
};
function g(e) {
    let { feedbackType: t, location: n } = e,
        { persistToBackend: l } = (0, b.O)({ location: n }),
        a = s.R[t].hotspot;
    l
        ? (u.default.track(o.rMx.USER_SETTINGS_IN_APP_FEEDBACK_OPTED_OUT, {
              feedback_type: d.nw[t],
              opted_out_until: d.uf
          }),
          r.A2.updateSetting((e) => O(v({}, e), { [t]: O(v({}, e[t]), { optOutExpiryTime: d.uf }) })))
        : (0, i.Kw)(a);
}
function _(e) {
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
                        for (l = 0; l < i.length; l++) ((n = i[l]), t.indexOf(n) >= 0 || (a[n] = e[n]));
                        return a;
                    })(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (l = 0; l < i.length; l++) ((n = i[l]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n]));
                }
                return a;
            })(e, ['disabled']);
        });
}
function h() {
    return _([
        {
            variant: d.$7.SELF,
            value: d.T_.COULD_NOT_CONNECT,
            label: f.intl.string(c.default.gMHKDA)
        },
        {
            value: d.T_.HIGH_TTC,
            variant: d.$7.SELF,
            label: f.intl.string(c.default.y06Ays)
        },
        {
            value: d.T_.HIGH_LATENCY,
            variant: d.$7.SELF,
            label: f.intl.string(c.default.y5k8Ji)
        },
        {
            value: d.T_.ROBOT_VOICE,
            variant: d.$7.SOMEONE,
            label: f.intl.string(c.default.f2914u)
        },
        {
            value: d.T_.DESYNC,
            variant: d.$7.UNSPECIFIED,
            label: f.intl.string(c.default['zk+QLy'])
        },
        {
            value: d.T_.CUTTING,
            variant: d.$7.SOMEONE,
            label: f.intl.string(c.default.K5vYQE)
        }
    ]);
}
function S(e) {
    let { isMobile: t } = e;
    return _([
        {
            value: d.b9.NO_AUDIO,
            variant: d.$7.SELF,
            label: f.intl.string(c.default.GWypHx)
        },
        {
            value: d.b9.NO_AUDIO,
            variant: d.$7.OTHERS,
            label: f.intl.string(c.default.ftSvQ0)
        },
        {
            value: d.b9.LOW_QUALITY_AUDIO,
            variant: d.$7.OTHERS,
            label: f.intl.string(c.default['1DnNRE'])
        },
        {
            value: d.b9.ROBOT_VOICE,
            variant: d.$7.SOMEONE,
            label: f.intl.string(c.default.yGe0BA)
        },
        {
            value: d.b9.ECHO,
            variant: d.$7.OTHERS,
            label: f.intl.string(c.default.Q5Dsa2)
        },
        {
            value: d.b9.TOO_QUIET_OR_LOUD,
            variant: d.$7.SOMEONE,
            label: f.intl.string(c.default['1o77Iy'])
        },
        {
            value: d.b9.CUTTING,
            variant: d.$7.SOMEONE,
            label: f.intl.string(c.default.RK9DUl)
        },
        {
            value: d.b9.DELAYED,
            variant: d.$7.UNSPECIFIED,
            label: f.intl.string(c.default.RGRgmJ)
        },
        {
            value: d.b9.BACKGROUND_NOISE,
            variant: d.$7.SOMEONE,
            label: f.intl.string(c.default.anHk19)
        },
        {
            value: d.b9.UNABLE_TO_FIND_DEVICE,
            variant: d.$7.SELF,
            label: f.intl.string(c.default['05VSjo'])
        },
        {
            value: d.b9.COMPLAINTS,
            variant: d.$7.OTHERS,
            label: f.intl.string(c.default.kbbtws)
        },
        {
            value: d.b9.TROUBLE_WITH_SPEAKERPHONE,
            variant: d.$7.SELF,
            label: f.intl.string(c.default['4qlGrK']),
            disabled: !t
        }
    ]);
}
function p() {
    return _([
        {
            value: d.ct.NO_VIDEO,
            variant: d.$7.SELF,
            label: f.intl.string(c.default['Bh+02d'])
        },
        {
            value: d.ct.NO_VIDEO,
            variant: d.$7.SOMEONE,
            label: f.intl.string(c.default['R+wqwc'])
        },
        {
            value: d.ct.FREEZING_OR_HITCHING,
            variant: d.$7.SOMEONE,
            label: f.intl.string(c.default['8I/GUF'])
        },
        {
            value: d.ct.BLURRY_OR_PIXELATED,
            variant: d.$7.SOMEONE,
            label: f.intl.string(c.default.k7Ido6)
        },
        {
            value: d.ct.UNABLE_TO_ENABLE_DEVICE,
            variant: d.$7.SELF,
            label: f.intl.string(c.default.QbC6LS)
        },
        {
            value: d.ct.DESYNC,
            variant: d.$7.UNSPECIFIED,
            label: f.intl.string(c.default.vRDE5O)
        }
    ]);
}
function N(e) {
    let { isStreamer: t } = e;
    return _([
        {
            value: d.MJ.COULD_NOT_LOAD,
            variant: d.$7.SELF,
            label: f.intl.string(c.default['w+kiDA']),
            disabled: !t
        },
        {
            value: d.MJ.BLACK_SCREEN,
            variant: d.$7.SELF,
            label: f.intl.string(c.default.RRZZZW),
            disabled: !t
        },
        {
            value: d.MJ.FREEZING_OR_HITCHING,
            variant: d.$7.SELF,
            label: f.intl.string(c.default['3PKSkZ']),
            disabled: !t
        },
        {
            value: d.MJ.LAG,
            variant: d.$7.SELF,
            label: f.intl.string(c.default.iMxexM),
            disabled: !t
        },
        {
            value: d.MJ.BLURRY_OR_PIXELATED,
            variant: d.$7.SELF,
            label: f.intl.string(c.default['8ceyQ0']),
            disabled: !t
        },
        {
            value: d.MJ.NO_AUDIO,
            variant: d.$7.SELF,
            label: f.intl.string(c.default.HaZSCw),
            disabled: !t
        },
        {
            value: d.MJ.BAD_AUDIO,
            variant: d.$7.SELF,
            label: f.intl.string(c.default['zIC+8f']),
            disabled: !t
        },
        {
            value: d.MJ.STOPPED_UNEXPECTEDLY,
            variant: d.$7.SELF,
            label: f.intl.string(c.default['/nlKuL']),
            disabled: !t
        },
        {
            value: d.MJ.DESYNC,
            variant: d.$7.SELF,
            label: f.intl.string(c.default.JS6akJ),
            disabled: !t
        },
        {
            value: d.MJ.COULD_NOT_LOAD,
            variant: d.$7.SOMEONE,
            label: f.intl.string(c.default.jU9Zs7),
            disabled: t
        },
        {
            value: d.MJ.BLACK_SCREEN,
            variant: d.$7.SOMEONE,
            label: f.intl.string(c.default['aml28/']),
            disabled: t
        },
        {
            value: d.MJ.FREEZING_OR_HITCHING,
            variant: d.$7.SOMEONE,
            label: f.intl.string(c.default.V3EeCA),
            disabled: t
        },
        {
            value: d.MJ.LAG,
            variant: d.$7.SOMEONE,
            label: f.intl.string(c.default.hi1Y39),
            disabled: t
        },
        {
            value: d.MJ.BLURRY_OR_PIXELATED,
            variant: d.$7.SOMEONE,
            label: f.intl.string(c.default.qdBn3N),
            disabled: t
        },
        {
            value: d.MJ.NO_AUDIO,
            variant: d.$7.SOMEONE,
            label: f.intl.string(c.default.DOOloq),
            disabled: t
        },
        {
            value: d.MJ.BAD_AUDIO,
            variant: d.$7.SOMEONE,
            label: f.intl.string(c.default.k7bdGB),
            disabled: t
        },
        {
            value: d.MJ.STOPPED_UNEXPECTEDLY,
            variant: d.$7.SOMEONE,
            label: f.intl.string(c.default['jPD99/']),
            disabled: t
        },
        {
            value: d.MJ.DESYNC,
            variant: d.$7.SOMEONE,
            label: f.intl.string(c.default.JfAvQk),
            disabled: t
        }
    ]);
}
function T() {
    return _([
        {
            value: d.s_.TOXIC_OR_INAPPROPRIATE,
            variant: d.$7.OTHERS,
            label: f.intl.string(c.default.PLBRzM)
        }
    ]);
}
