n.d(t, {
    Bi: () => f,
    Ez: () => p,
    NX: () => E,
    Uv: () => O,
    Z1: () => _,
    hP: () => g,
    w9: () => m,
}),
    n(539854);
var a = n(392711),
    l = n.n(a),
    i = n(695346),
    r = n(626135),
    o = n(531578),
    s = n(981631),
    u = n(805388),
    d = n(388032);
function c(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            a = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (a = a.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            a.forEach(function (t) {
                var a;
                (a = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: a,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = a);
            });
    }
    return e;
}
function b(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var a = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, a);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let f = (e, t) => {
    let n = l().shuffle(e),
        a = n.findIndex((e) => e.value === t);
    if (a > -1) {
        let e = n[a];
        n.splice(a, 1), n.push(e);
    }
    return n;
};
function O(e) {
    let { feedbackType: t, location: n } = e;
    r.default.track(s.rMx.USER_SETTINGS_IN_APP_FEEDBACK_OPTED_OUT, {
        feedback_type: o.nw[t],
        opted_out_until: o.uf,
    }),
        i.A2.updateSetting((e) => b(c({}, e), { [t]: b(c({}, e[t]), { optOutExpiryTime: o.uf }) }));
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
                    a,
                    l = (function (e, t) {
                        if (null == e) return {};
                        var n,
                            a,
                            l = {},
                            i = Object.keys(e);
                        for (a = 0; a < i.length; a++) (n = i[a]), t.indexOf(n) >= 0 || (l[n] = e[n]);
                        return l;
                    })(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (a = 0; a < i.length; a++)
                        (n = i[a]),
                            !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
                }
                return l;
            })(e, ["disabled"]);
        });
}
function _() {
    return v([
        {
            variant: o.$7.SELF,
            value: o.T_.COULD_NOT_CONNECT,
            label: d.intl.string(u.default.gMHKDA),
        },
        {
            value: o.T_.HIGH_TTC,
            variant: o.$7.SELF,
            label: d.intl.string(u.default.y06Ays),
        },
        {
            value: o.T_.HIGH_LATENCY,
            variant: o.$7.SELF,
            label: d.intl.string(u.default.y5k8Ji),
        },
        {
            value: o.T_.ROBOT_VOICE,
            variant: o.$7.SOMEONE,
            label: d.intl.string(u.default.f2914u),
        },
        {
            value: o.T_.DESYNC,
            variant: o.$7.UNSPECIFIED,
            label: d.intl.string(u.default["zk+QLy"]),
        },
        {
            value: o.T_.CUTTING,
            variant: o.$7.SOMEONE,
            label: d.intl.string(u.default.K5vYQE),
        },
    ]);
}
function m(e) {
    let { isMobile: t } = e;
    return v([
        {
            value: o.b9.NO_AUDIO,
            variant: o.$7.SELF,
            label: d.intl.string(u.default.GWypHx),
        },
        {
            value: o.b9.NO_AUDIO,
            variant: o.$7.OTHERS,
            label: d.intl.string(u.default.ftSvQ0),
        },
        {
            value: o.b9.LOW_QUALITY_AUDIO,
            variant: o.$7.OTHERS,
            label: d.intl.string(u.default["1DnNRE"]),
        },
        {
            value: o.b9.ROBOT_VOICE,
            variant: o.$7.SOMEONE,
            label: d.intl.string(u.default.yGe0BA),
        },
        {
            value: o.b9.ECHO,
            variant: o.$7.OTHERS,
            label: d.intl.string(u.default.Q5Dsa2),
        },
        {
            value: o.b9.TOO_QUIET_OR_LOUD,
            variant: o.$7.SOMEONE,
            label: d.intl.string(u.default["1o77Iy"]),
        },
        {
            value: o.b9.CUTTING,
            variant: o.$7.SOMEONE,
            label: d.intl.string(u.default.RK9DUl),
        },
        {
            value: o.b9.DELAYED,
            variant: o.$7.UNSPECIFIED,
            label: d.intl.string(u.default.RGRgmJ),
        },
        {
            value: o.b9.BACKGROUND_NOISE,
            variant: o.$7.SOMEONE,
            label: d.intl.string(u.default.anHk19),
        },
        {
            value: o.b9.UNABLE_TO_FIND_DEVICE,
            variant: o.$7.SELF,
            label: d.intl.string(u.default["05VSjo"]),
        },
        {
            value: o.b9.COMPLAINTS,
            variant: o.$7.OTHERS,
            label: d.intl.string(u.default.kbbtws),
        },
        {
            value: o.b9.TROUBLE_WITH_SPEAKERPHONE,
            variant: o.$7.SELF,
            label: d.intl.string(u.default["4qlGrK"]),
            disabled: !t,
        },
        {
            value: o.b9.NO_GAME_AUDIO,
            variant: o.$7.SELF,
            label: d.intl.string(u.default["2IG95O"]),
        },
    ]);
}
function E() {
    return v([
        {
            value: o.ct.NO_VIDEO,
            variant: o.$7.SELF,
            label: d.intl.string(u.default["Bh+02d"]),
        },
        {
            value: o.ct.NO_VIDEO,
            variant: o.$7.SOMEONE,
            label: d.intl.string(u.default["R+wqwc"]),
        },
        {
            value: o.ct.FREEZING_OR_HITCHING,
            variant: o.$7.SOMEONE,
            label: d.intl.string(u.default["8I/GUF"]),
        },
        {
            value: o.ct.BLURRY_OR_PIXELATED,
            variant: o.$7.SOMEONE,
            label: d.intl.string(u.default.k7Ido6),
        },
        {
            value: o.ct.UNABLE_TO_ENABLE_DEVICE,
            variant: o.$7.SELF,
            label: d.intl.string(u.default.QbC6LS),
        },
        {
            value: o.ct.DESYNC,
            variant: o.$7.UNSPECIFIED,
            label: d.intl.string(u.default.vRDE5O),
        },
    ]);
}
function p(e) {
    let { isStreamer: t } = e;
    return v([
        {
            value: o.MJ.COULD_NOT_LOAD,
            variant: o.$7.SELF,
            label: d.intl.string(u.default["w+kiDA"]),
            disabled: !t,
        },
        {
            value: o.MJ.BLACK_SCREEN,
            variant: o.$7.SELF,
            label: d.intl.string(u.default.RRZZZW),
            disabled: !t,
        },
        {
            value: o.MJ.FREEZING_OR_HITCHING,
            variant: o.$7.SELF,
            label: d.intl.string(u.default["3PKSkZ"]),
            disabled: !t,
        },
        {
            value: o.MJ.LAG,
            variant: o.$7.SELF,
            label: d.intl.string(u.default.iMxexM),
            disabled: !t,
        },
        {
            value: o.MJ.BLURRY_OR_PIXELATED,
            variant: o.$7.SELF,
            label: d.intl.string(u.default["8ceyQ0"]),
            disabled: !t,
        },
        {
            value: o.MJ.NO_AUDIO,
            variant: o.$7.SELF,
            label: d.intl.string(u.default.HaZSCw),
            disabled: !t,
        },
        {
            value: o.MJ.BAD_AUDIO,
            variant: o.$7.SELF,
            label: d.intl.string(u.default["zIC+8f"]),
            disabled: !t,
        },
        {
            value: o.MJ.STOPPED_UNEXPECTEDLY,
            variant: o.$7.SELF,
            label: d.intl.string(u.default["/nlKuL"]),
            disabled: !t,
        },
        {
            value: o.MJ.DESYNC,
            variant: o.$7.SELF,
            label: d.intl.string(u.default.JS6akJ),
            disabled: !t,
        },
        {
            value: o.MJ.NO_GAME_AUDIO,
            variant: o.$7.SELF,
            label: d.intl.string(u.default.TaIrh4),
            disabled: !t,
        },
        {
            value: o.MJ.COULD_NOT_LOAD,
            variant: o.$7.SOMEONE,
            label: d.intl.string(u.default.jU9Zs7),
            disabled: t,
        },
        {
            value: o.MJ.BLACK_SCREEN,
            variant: o.$7.SOMEONE,
            label: d.intl.string(u.default["aml28/"]),
            disabled: t,
        },
        {
            value: o.MJ.FREEZING_OR_HITCHING,
            variant: o.$7.SOMEONE,
            label: d.intl.string(u.default.V3EeCA),
            disabled: t,
        },
        {
            value: o.MJ.LAG,
            variant: o.$7.SOMEONE,
            label: d.intl.string(u.default.hi1Y39),
            disabled: t,
        },
        {
            value: o.MJ.BLURRY_OR_PIXELATED,
            variant: o.$7.SOMEONE,
            label: d.intl.string(u.default.qdBn3N),
            disabled: t,
        },
        {
            value: o.MJ.NO_AUDIO,
            variant: o.$7.SOMEONE,
            label: d.intl.string(u.default.DOOloq),
            disabled: t,
        },
        {
            value: o.MJ.BAD_AUDIO,
            variant: o.$7.SOMEONE,
            label: d.intl.string(u.default.k7bdGB),
            disabled: t,
        },
        {
            value: o.MJ.STOPPED_UNEXPECTEDLY,
            variant: o.$7.SOMEONE,
            label: d.intl.string(u.default["jPD99/"]),
            disabled: t,
        },
        {
            value: o.MJ.DESYNC,
            variant: o.$7.SOMEONE,
            label: d.intl.string(u.default.JfAvQk),
            disabled: t,
        },
    ]);
}
function g() {
    return v([
        {
            value: o.s_.TOXIC_OR_INAPPROPRIATE,
            variant: o.$7.OTHERS,
            label: d.intl.string(u.default.PLBRzM),
        },
    ]);
}
