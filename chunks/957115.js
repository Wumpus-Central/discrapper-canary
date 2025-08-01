(n.d(t, {
    Bi: () => v,
    Ez: () => N,
    NX: () => m,
    Uv: () => _,
    Z1: () => g,
    hP: () => p,
    w9: () => S
}),
    n(539854));
var l = n(392711),
    a = n.n(l),
    i = n(536442),
    r = n(695346),
    o = n(626135),
    u = n(178635),
    d = n(250454),
    s = n(531578),
    c = n(981631),
    b = n(760359),
    E = n(388032);
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
function f(e, t) {
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
        (n.splice(l, 1), n.push(e));
    }
    return n;
};
function _(e) {
    let { feedbackType: t, location: n } = e,
        { persistToBackend: l } = (0, d.O)({ location: n }),
        a = u.R[t].hotspot;
    l
        ? (o.default.track(c.rMx.USER_SETTINGS_IN_APP_FEEDBACK_OPTED_OUT, {
              feedback_type: s.nw[t],
              opted_out_until: s.uf
          }),
          r.A2.updateSetting((e) => f(O({}, e), { [t]: f(O({}, e[t]), { optOutExpiryTime: s.uf }) })))
        : (0, i.Kw)(a);
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
function g() {
    return h([
        {
            variant: s.$7.SELF,
            value: s.T_.COULD_NOT_CONNECT,
            label: E.intl.string(b.default.gMHKDA)
        },
        {
            value: s.T_.HIGH_TTC,
            variant: s.$7.SELF,
            label: E.intl.string(b.default.y06Ays)
        },
        {
            value: s.T_.HIGH_LATENCY,
            variant: s.$7.SELF,
            label: E.intl.string(b.default.y5k8Ji)
        },
        {
            value: s.T_.ROBOT_VOICE,
            variant: s.$7.SOMEONE,
            label: E.intl.string(b.default.f2914u)
        },
        {
            value: s.T_.DESYNC,
            variant: s.$7.UNSPECIFIED,
            label: E.intl.string(b.default['zk+QLy'])
        },
        {
            value: s.T_.CUTTING,
            variant: s.$7.SOMEONE,
            label: E.intl.string(b.default.K5vYQE)
        }
    ]);
}
function S(e) {
    let { isMobile: t } = e;
    return h([
        {
            value: s.b9.NO_AUDIO,
            variant: s.$7.SELF,
            label: E.intl.string(b.default.GWypHx)
        },
        {
            value: s.b9.NO_AUDIO,
            variant: s.$7.OTHERS,
            label: E.intl.string(b.default.ftSvQ0)
        },
        {
            value: s.b9.LOW_QUALITY_AUDIO,
            variant: s.$7.OTHERS,
            label: E.intl.string(b.default['1DnNRE'])
        },
        {
            value: s.b9.ROBOT_VOICE,
            variant: s.$7.SOMEONE,
            label: E.intl.string(b.default.yGe0BA)
        },
        {
            value: s.b9.ECHO,
            variant: s.$7.OTHERS,
            label: E.intl.string(b.default.Q5Dsa2)
        },
        {
            value: s.b9.TOO_QUIET_OR_LOUD,
            variant: s.$7.SOMEONE,
            label: E.intl.string(b.default['1o77Iy'])
        },
        {
            value: s.b9.CUTTING,
            variant: s.$7.SOMEONE,
            label: E.intl.string(b.default.RK9DUl)
        },
        {
            value: s.b9.DELAYED,
            variant: s.$7.UNSPECIFIED,
            label: E.intl.string(b.default.RGRgmJ)
        },
        {
            value: s.b9.BACKGROUND_NOISE,
            variant: s.$7.SOMEONE,
            label: E.intl.string(b.default.anHk19)
        },
        {
            value: s.b9.UNABLE_TO_FIND_DEVICE,
            variant: s.$7.SELF,
            label: E.intl.string(b.default['05VSjo'])
        },
        {
            value: s.b9.COMPLAINTS,
            variant: s.$7.OTHERS,
            label: E.intl.string(b.default.kbbtws)
        },
        {
            value: s.b9.TROUBLE_WITH_SPEAKERPHONE,
            variant: s.$7.SELF,
            label: E.intl.string(b.default['4qlGrK']),
            disabled: !t
        }
    ]);
}
function m() {
    return h([
        {
            value: s.ct.NO_VIDEO,
            variant: s.$7.SELF,
            label: E.intl.string(b.default['Bh+02d'])
        },
        {
            value: s.ct.NO_VIDEO,
            variant: s.$7.SOMEONE,
            label: E.intl.string(b.default['R+wqwc'])
        },
        {
            value: s.ct.FREEZING_OR_HITCHING,
            variant: s.$7.SOMEONE,
            label: E.intl.string(b.default['8I/GUF'])
        },
        {
            value: s.ct.BLURRY_OR_PIXELATED,
            variant: s.$7.SOMEONE,
            label: E.intl.string(b.default.k7Ido6)
        },
        {
            value: s.ct.UNABLE_TO_ENABLE_DEVICE,
            variant: s.$7.SELF,
            label: E.intl.string(b.default.QbC6LS)
        },
        {
            value: s.ct.DESYNC,
            variant: s.$7.UNSPECIFIED,
            label: E.intl.string(b.default.vRDE5O)
        }
    ]);
}
function N(e) {
    let { isStreamer: t } = e;
    return h([
        {
            value: s.MJ.COULD_NOT_LOAD,
            variant: s.$7.SELF,
            label: E.intl.string(b.default['w+kiDA']),
            disabled: !t
        },
        {
            value: s.MJ.BLACK_SCREEN,
            variant: s.$7.SELF,
            label: E.intl.string(b.default.RRZZZW),
            disabled: !t
        },
        {
            value: s.MJ.FREEZING_OR_HITCHING,
            variant: s.$7.SELF,
            label: E.intl.string(b.default['3PKSkZ']),
            disabled: !t
        },
        {
            value: s.MJ.LAG,
            variant: s.$7.SELF,
            label: E.intl.string(b.default.iMxexM),
            disabled: !t
        },
        {
            value: s.MJ.BLURRY_OR_PIXELATED,
            variant: s.$7.SELF,
            label: E.intl.string(b.default['8ceyQ0']),
            disabled: !t
        },
        {
            value: s.MJ.NO_AUDIO,
            variant: s.$7.SELF,
            label: E.intl.string(b.default.HaZSCw),
            disabled: !t
        },
        {
            value: s.MJ.BAD_AUDIO,
            variant: s.$7.SELF,
            label: E.intl.string(b.default['zIC+8f']),
            disabled: !t
        },
        {
            value: s.MJ.STOPPED_UNEXPECTEDLY,
            variant: s.$7.SELF,
            label: E.intl.string(b.default['/nlKuL']),
            disabled: !t
        },
        {
            value: s.MJ.DESYNC,
            variant: s.$7.SELF,
            label: E.intl.string(b.default.JS6akJ),
            disabled: !t
        },
        {
            value: s.MJ.COULD_NOT_LOAD,
            variant: s.$7.SOMEONE,
            label: E.intl.string(b.default.jU9Zs7),
            disabled: t
        },
        {
            value: s.MJ.BLACK_SCREEN,
            variant: s.$7.SOMEONE,
            label: E.intl.string(b.default['aml28/']),
            disabled: t
        },
        {
            value: s.MJ.FREEZING_OR_HITCHING,
            variant: s.$7.SOMEONE,
            label: E.intl.string(b.default.V3EeCA),
            disabled: t
        },
        {
            value: s.MJ.LAG,
            variant: s.$7.SOMEONE,
            label: E.intl.string(b.default.hi1Y39),
            disabled: t
        },
        {
            value: s.MJ.BLURRY_OR_PIXELATED,
            variant: s.$7.SOMEONE,
            label: E.intl.string(b.default.qdBn3N),
            disabled: t
        },
        {
            value: s.MJ.NO_AUDIO,
            variant: s.$7.SOMEONE,
            label: E.intl.string(b.default.DOOloq),
            disabled: t
        },
        {
            value: s.MJ.BAD_AUDIO,
            variant: s.$7.SOMEONE,
            label: E.intl.string(b.default.k7bdGB),
            disabled: t
        },
        {
            value: s.MJ.STOPPED_UNEXPECTEDLY,
            variant: s.$7.SOMEONE,
            label: E.intl.string(b.default['jPD99/']),
            disabled: t
        },
        {
            value: s.MJ.DESYNC,
            variant: s.$7.SOMEONE,
            label: E.intl.string(b.default.JfAvQk),
            disabled: t
        }
    ]);
}
function p() {
    return h([
        {
            value: s.s_.TOXIC_OR_INAPPROPRIATE,
            variant: s.$7.OTHERS,
            label: E.intl.string(b.default.PLBRzM)
        }
    ]);
}
