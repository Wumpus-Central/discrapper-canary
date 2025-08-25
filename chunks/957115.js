l.d(t, {
    Bi: () => E,
    Ez: () => N,
    NX: () => p,
    Uv: () => _,
    Z1: () => h,
    hP: () => T,
    w9: () => S,
}),
    l(539854);
var n = l(392711),
    a = l.n(n),
    i = l(536442),
    r = l(695346),
    u = l(626135),
    s = l(178635),
    b = l(250454),
    d = l(531578),
    o = l(981631),
    f = l(805388),
    c = l(388032);
function v(e) {
    for (var t = 1; t < arguments.length; t++) {
        var l = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(l);
        "function" == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(l).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(l, e).enumerable;
                }),
            )),
            n.forEach(function (t) {
                var n;
                (n = l[t]),
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
}
function O(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var l = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(e);
                      l.push.apply(l, n);
                  }
                  return l;
              })(Object(t)).forEach(function (l) {
                  Object.defineProperty(e, l, Object.getOwnPropertyDescriptor(t, l));
              }),
        e
    );
}
let E = (e, t) => {
    let l = a().shuffle(e),
        n = l.findIndex((e) => e.value === t);
    if (n > -1) {
        let e = l[n];
        l.splice(n, 1), l.push(e);
    }
    return l;
};
function _(e) {
    let { feedbackType: t, location: l } = e,
        { persistToBackend: n } = (0, b.O)({ location: l }),
        a = s.R[t].hotspot;
    n
        ? (u.default.track(o.rMx.USER_SETTINGS_IN_APP_FEEDBACK_OPTED_OUT, {
              feedback_type: d.nw[t],
              opted_out_until: d.uf,
          }),
          r.A2.updateSetting((e) => O(v({}, e), { [t]: O(v({}, e[t]), { optOutExpiryTime: d.uf }) })))
        : (0, i.Kw)(a);
}
function g(e) {
    return e
        .filter((e) => {
            let { disabled: t } = e;
            return !t;
        })
        .map((e) => {
            var { disabled: t } = e;
            return (function (e, t) {
                if (null == e) return {};
                var l,
                    n,
                    a = (function (e, t) {
                        if (null == e) return {};
                        var l,
                            n,
                            a = {},
                            i = Object.keys(e);
                        for (n = 0; n < i.length; n++) (l = i[n]), t.indexOf(l) >= 0 || (a[l] = e[l]);
                        return a;
                    })(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < i.length; n++)
                        (l = i[n]),
                            !(t.indexOf(l) >= 0) && Object.prototype.propertyIsEnumerable.call(e, l) && (a[l] = e[l]);
                }
                return a;
            })(e, ["disabled"]);
        });
}
function h() {
    return g([
        {
            variant: d.$7.SELF,
            value: d.T_.COULD_NOT_CONNECT,
            label: c.intl.string(f.default.gMHKDA),
        },
        {
            value: d.T_.HIGH_TTC,
            variant: d.$7.SELF,
            label: c.intl.string(f.default.y06Ays),
        },
        {
            value: d.T_.HIGH_LATENCY,
            variant: d.$7.SELF,
            label: c.intl.string(f.default.y5k8Ji),
        },
        {
            value: d.T_.ROBOT_VOICE,
            variant: d.$7.SOMEONE,
            label: c.intl.string(f.default.f2914u),
        },
        {
            value: d.T_.DESYNC,
            variant: d.$7.UNSPECIFIED,
            label: c.intl.string(f.default["zk+QLy"]),
        },
        {
            value: d.T_.CUTTING,
            variant: d.$7.SOMEONE,
            label: c.intl.string(f.default.K5vYQE),
        },
    ]);
}
function S(e) {
    let { isMobile: t } = e;
    return g([
        {
            value: d.b9.NO_AUDIO,
            variant: d.$7.SELF,
            label: c.intl.string(f.default.GWypHx),
        },
        {
            value: d.b9.NO_AUDIO,
            variant: d.$7.OTHERS,
            label: c.intl.string(f.default.ftSvQ0),
        },
        {
            value: d.b9.LOW_QUALITY_AUDIO,
            variant: d.$7.OTHERS,
            label: c.intl.string(f.default["1DnNRE"]),
        },
        {
            value: d.b9.ROBOT_VOICE,
            variant: d.$7.SOMEONE,
            label: c.intl.string(f.default.yGe0BA),
        },
        {
            value: d.b9.ECHO,
            variant: d.$7.OTHERS,
            label: c.intl.string(f.default.Q5Dsa2),
        },
        {
            value: d.b9.TOO_QUIET_OR_LOUD,
            variant: d.$7.SOMEONE,
            label: c.intl.string(f.default["1o77Iy"]),
        },
        {
            value: d.b9.CUTTING,
            variant: d.$7.SOMEONE,
            label: c.intl.string(f.default.RK9DUl),
        },
        {
            value: d.b9.DELAYED,
            variant: d.$7.UNSPECIFIED,
            label: c.intl.string(f.default.RGRgmJ),
        },
        {
            value: d.b9.BACKGROUND_NOISE,
            variant: d.$7.SOMEONE,
            label: c.intl.string(f.default.anHk19),
        },
        {
            value: d.b9.UNABLE_TO_FIND_DEVICE,
            variant: d.$7.SELF,
            label: c.intl.string(f.default["05VSjo"]),
        },
        {
            value: d.b9.COMPLAINTS,
            variant: d.$7.OTHERS,
            label: c.intl.string(f.default.kbbtws),
        },
        {
            value: d.b9.TROUBLE_WITH_SPEAKERPHONE,
            variant: d.$7.SELF,
            label: c.intl.string(f.default["4qlGrK"]),
            disabled: !t,
        },
        {
            value: d.b9.NO_GAME_AUDIO,
            variant: d.$7.SELF,
            label: c.intl.string(f.default["2IG95O"]),
        },
    ]);
}
function p() {
    return g([
        {
            value: d.ct.NO_VIDEO,
            variant: d.$7.SELF,
            label: c.intl.string(f.default["Bh+02d"]),
        },
        {
            value: d.ct.NO_VIDEO,
            variant: d.$7.SOMEONE,
            label: c.intl.string(f.default["R+wqwc"]),
        },
        {
            value: d.ct.FREEZING_OR_HITCHING,
            variant: d.$7.SOMEONE,
            label: c.intl.string(f.default["8I/GUF"]),
        },
        {
            value: d.ct.BLURRY_OR_PIXELATED,
            variant: d.$7.SOMEONE,
            label: c.intl.string(f.default.k7Ido6),
        },
        {
            value: d.ct.UNABLE_TO_ENABLE_DEVICE,
            variant: d.$7.SELF,
            label: c.intl.string(f.default.QbC6LS),
        },
        {
            value: d.ct.DESYNC,
            variant: d.$7.UNSPECIFIED,
            label: c.intl.string(f.default.vRDE5O),
        },
    ]);
}
function N(e) {
    let { isStreamer: t } = e;
    return g([
        {
            value: d.MJ.COULD_NOT_LOAD,
            variant: d.$7.SELF,
            label: c.intl.string(f.default["w+kiDA"]),
            disabled: !t,
        },
        {
            value: d.MJ.BLACK_SCREEN,
            variant: d.$7.SELF,
            label: c.intl.string(f.default.RRZZZW),
            disabled: !t,
        },
        {
            value: d.MJ.FREEZING_OR_HITCHING,
            variant: d.$7.SELF,
            label: c.intl.string(f.default["3PKSkZ"]),
            disabled: !t,
        },
        {
            value: d.MJ.LAG,
            variant: d.$7.SELF,
            label: c.intl.string(f.default.iMxexM),
            disabled: !t,
        },
        {
            value: d.MJ.BLURRY_OR_PIXELATED,
            variant: d.$7.SELF,
            label: c.intl.string(f.default["8ceyQ0"]),
            disabled: !t,
        },
        {
            value: d.MJ.NO_AUDIO,
            variant: d.$7.SELF,
            label: c.intl.string(f.default.HaZSCw),
            disabled: !t,
        },
        {
            value: d.MJ.BAD_AUDIO,
            variant: d.$7.SELF,
            label: c.intl.string(f.default["zIC+8f"]),
            disabled: !t,
        },
        {
            value: d.MJ.STOPPED_UNEXPECTEDLY,
            variant: d.$7.SELF,
            label: c.intl.string(f.default["/nlKuL"]),
            disabled: !t,
        },
        {
            value: d.MJ.DESYNC,
            variant: d.$7.SELF,
            label: c.intl.string(f.default.JS6akJ),
            disabled: !t,
        },
        {
            value: d.MJ.NO_GAME_AUDIO,
            variant: d.$7.SELF,
            label: c.intl.string(f.default.TaIrh4),
            disabled: !t,
        },
        {
            value: d.MJ.COULD_NOT_LOAD,
            variant: d.$7.SOMEONE,
            label: c.intl.string(f.default.jU9Zs7),
            disabled: t,
        },
        {
            value: d.MJ.BLACK_SCREEN,
            variant: d.$7.SOMEONE,
            label: c.intl.string(f.default["aml28/"]),
            disabled: t,
        },
        {
            value: d.MJ.FREEZING_OR_HITCHING,
            variant: d.$7.SOMEONE,
            label: c.intl.string(f.default.V3EeCA),
            disabled: t,
        },
        {
            value: d.MJ.LAG,
            variant: d.$7.SOMEONE,
            label: c.intl.string(f.default.hi1Y39),
            disabled: t,
        },
        {
            value: d.MJ.BLURRY_OR_PIXELATED,
            variant: d.$7.SOMEONE,
            label: c.intl.string(f.default.qdBn3N),
            disabled: t,
        },
        {
            value: d.MJ.NO_AUDIO,
            variant: d.$7.SOMEONE,
            label: c.intl.string(f.default.DOOloq),
            disabled: t,
        },
        {
            value: d.MJ.BAD_AUDIO,
            variant: d.$7.SOMEONE,
            label: c.intl.string(f.default.k7bdGB),
            disabled: t,
        },
        {
            value: d.MJ.STOPPED_UNEXPECTEDLY,
            variant: d.$7.SOMEONE,
            label: c.intl.string(f.default["jPD99/"]),
            disabled: t,
        },
        {
            value: d.MJ.DESYNC,
            variant: d.$7.SOMEONE,
            label: c.intl.string(f.default.JfAvQk),
            disabled: t,
        },
    ]);
}
function T() {
    return g([
        {
            value: d.s_.TOXIC_OR_INAPPROPRIATE,
            variant: d.$7.OTHERS,
            label: c.intl.string(f.default.PLBRzM),
        },
    ]);
}
