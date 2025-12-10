n.d(t, {
    Bi: () => O,
    Ez: () => g,
    NX: () => N,
    Uv: () => E,
    Z1: () => f,
    hP: () => S,
    w9: () => h,
}),
    n(539854);
var a = n(392711),
    l = n.n(a),
    i = n(695346),
    r = n(626135),
    s = n(531578),
    d = n(981631),
    u = n(336084),
    b = n(388032);
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
function o(e, t) {
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
let O = (e, t) => {
    let n = l().shuffle(e),
        a = n.findIndex((e) => e.value === t);
    if (a > -1) {
        let e = n[a];
        n.splice(a, 1), n.push(e);
    }
    return n;
};
function E(e) {
    let { feedbackType: t, location: n } = e;
    r.default.track(d.rMx.USER_SETTINGS_IN_APP_FEEDBACK_OPTED_OUT, {
        feedback_type: s.nw[t],
        opted_out_until: s.uf,
    }),
        i.A2.updateSetting((e) => o(c({}, e), { [t]: o(c({}, e[t]), { optOutExpiryTime: s.uf }) }));
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
function f() {
    return v([
        {
            variant: s.$7.SELF,
            value: s.T_.COULD_NOT_CONNECT,
            label: b.intl.string(u.default.gMHKDJ),
        },
        {
            value: s.T_.HIGH_TTC,
            variant: s.$7.SELF,
            label: b.intl.string(u.default.y06Ayn),
        },
        {
            value: s.T_.HIGH_LATENCY,
            variant: s.$7.SELF,
            label: b.intl.string(u.default.y5k8Jq),
        },
        {
            value: s.T_.ROBOT_VOICE,
            variant: s.$7.SOMEONE,
            label: b.intl.string(u.default.f2914v),
        },
        {
            value: s.T_.DESYNC,
            variant: s.$7.UNSPECIFIED,
            label: b.intl.string(u.default["zk+QL1"]),
        },
        {
            value: s.T_.CUTTING,
            variant: s.$7.SOMEONE,
            label: b.intl.string(u.default.K5vYQA),
        },
    ]);
}
function h(e) {
    let { isMobile: t } = e;
    return v([
        {
            value: s.b9.NO_AUDIO,
            variant: s.$7.SELF,
            label: b.intl.string(u.default["GWypH+"]),
        },
        {
            value: s.b9.NO_AUDIO,
            variant: s.$7.OTHERS,
            label: b.intl.string(u.default.ftSvQ0),
        },
        {
            value: s.b9.LOW_QUALITY_AUDIO,
            variant: s.$7.OTHERS,
            label: b.intl.string(u.default["1DnNRO"]),
        },
        {
            value: s.b9.ROBOT_VOICE,
            variant: s.$7.SOMEONE,
            label: b.intl.string(u.default.yGe0BL),
        },
        {
            value: s.b9.ECHO,
            variant: s.$7.OTHERS,
            label: b.intl.string(u.default.Q5Dsaz),
        },
        {
            value: s.b9.TOO_QUIET_OR_LOUD,
            variant: s.$7.SOMEONE,
            label: b.intl.string(u.default["1o77I3"]),
        },
        {
            value: s.b9.CUTTING,
            variant: s.$7.SOMEONE,
            label: b.intl.string(u.default.RK9DUi),
        },
        {
            value: s.b9.DELAYED,
            variant: s.$7.UNSPECIFIED,
            label: b.intl.string(u.default.RGRgmM),
        },
        {
            value: s.b9.BACKGROUND_NOISE,
            variant: s.$7.SOMEONE,
            label: b.intl.string(u.default["anHk1/"]),
        },
        {
            value: s.b9.UNABLE_TO_FIND_DEVICE,
            variant: s.$7.SELF,
            label: b.intl.string(u.default["05VSjm"]),
        },
        {
            value: s.b9.COMPLAINTS,
            variant: s.$7.OTHERS,
            label: b.intl.string(u.default.kbbtwi),
        },
        {
            value: s.b9.TROUBLE_WITH_SPEAKERPHONE,
            variant: s.$7.SELF,
            label: b.intl.string(u.default["4qlGrO"]),
            disabled: !t,
        },
        {
            value: s.b9.NO_GAME_AUDIO,
            variant: s.$7.SELF,
            label: b.intl.string(u.default["2IG95D"]),
        },
    ]);
}
function N() {
    return v([
        {
            value: s.ct.NO_VIDEO,
            variant: s.$7.SELF,
            label: b.intl.string(u.default["Bh+02d"]),
        },
        {
            value: s.ct.NO_VIDEO,
            variant: s.$7.SOMEONE,
            label: b.intl.string(u.default["R+wqwU"]),
        },
        {
            value: s.ct.FREEZING_OR_HITCHING,
            variant: s.$7.SOMEONE,
            label: b.intl.string(u.default["8I/GUL"]),
        },
        {
            value: s.ct.BLURRY_OR_PIXELATED,
            variant: s.$7.SOMEONE,
            label: b.intl.string(u.default.k7Idoz),
        },
        {
            value: s.ct.UNABLE_TO_ENABLE_DEVICE,
            variant: s.$7.SELF,
            label: b.intl.string(u.default.QbC6La),
        },
        {
            value: s.ct.DESYNC,
            variant: s.$7.UNSPECIFIED,
            label: b.intl.string(u.default.vRDE5O),
        },
    ]);
}
function g(e) {
    let { isStreamer: t } = e;
    return v([
        {
            value: s.MJ.COULD_NOT_LOAD,
            variant: s.$7.SELF,
            label: b.intl.string(u.default["w+kiDF"]),
            disabled: !t,
        },
        {
            value: s.MJ.BLACK_SCREEN,
            variant: s.$7.SELF,
            label: b.intl.string(u.default.RRZZZb),
            disabled: !t,
        },
        {
            value: s.MJ.FREEZING_OR_HITCHING,
            variant: s.$7.SELF,
            label: b.intl.string(u.default["3PKSkd"]),
            disabled: !t,
        },
        {
            value: s.MJ.LAG,
            variant: s.$7.SELF,
            label: b.intl.string(u.default.iMxexK),
            disabled: !t,
        },
        {
            value: s.MJ.BLURRY_OR_PIXELATED,
            variant: s.$7.SELF,
            label: b.intl.string(u.default["8ceyQy"]),
            disabled: !t,
        },
        {
            value: s.MJ.NO_AUDIO,
            variant: s.$7.SELF,
            label: b.intl.string(u.default.HaZSC3),
            disabled: !t,
        },
        {
            value: s.MJ.BAD_AUDIO,
            variant: s.$7.SELF,
            label: b.intl.string(u.default["zIC+8Y"]),
            disabled: !t,
        },
        {
            value: s.MJ.STOPPED_UNEXPECTEDLY,
            variant: s.$7.SELF,
            label: b.intl.string(u.default["/nlKuG"]),
            disabled: !t,
        },
        {
            value: s.MJ.DESYNC,
            variant: s.$7.SELF,
            label: b.intl.string(u.default.JS6akP),
            disabled: !t,
        },
        {
            value: s.MJ.NO_GAME_AUDIO,
            variant: s.$7.SELF,
            label: b.intl.string(u.default.TaIrh5),
            disabled: !t,
        },
        {
            value: s.MJ.COULD_NOT_LOAD,
            variant: s.$7.SOMEONE,
            label: b.intl.string(u.default.jU9Zs8),
            disabled: t,
        },
        {
            value: s.MJ.BLACK_SCREEN,
            variant: s.$7.SOMEONE,
            label: b.intl.string(u.default.aml28x),
            disabled: t,
        },
        {
            value: s.MJ.FREEZING_OR_HITCHING,
            variant: s.$7.SOMEONE,
            label: b.intl.string(u.default.V3EeCH),
            disabled: t,
        },
        {
            value: s.MJ.LAG,
            variant: s.$7.SOMEONE,
            label: b.intl.string(u.default.hi1Y39),
            disabled: t,
        },
        {
            value: s.MJ.BLURRY_OR_PIXELATED,
            variant: s.$7.SOMEONE,
            label: b.intl.string(u.default.qdBn3L),
            disabled: t,
        },
        {
            value: s.MJ.NO_AUDIO,
            variant: s.$7.SOMEONE,
            label: b.intl.string(u.default.DOOlop),
            disabled: t,
        },
        {
            value: s.MJ.BAD_AUDIO,
            variant: s.$7.SOMEONE,
            label: b.intl.string(u.default.k7bdGE),
            disabled: t,
        },
        {
            value: s.MJ.STOPPED_UNEXPECTEDLY,
            variant: s.$7.SOMEONE,
            label: b.intl.string(u.default.jPD998),
            disabled: t,
        },
        {
            value: s.MJ.DESYNC,
            variant: s.$7.SOMEONE,
            label: b.intl.string(u.default.JfAvQp),
            disabled: t,
        },
    ]);
}
function S() {
    return v([
        {
            value: s.s_.TOXIC_OR_INAPPROPRIATE,
            variant: s.$7.OTHERS,
            label: b.intl.string(u.default.PLBRzF),
        },
    ]);
}
