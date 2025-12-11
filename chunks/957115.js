n.d(t, {
    Bi: () => f,
    Ez: () => g,
    NX: () => p,
    Uv: () => O,
    Z1: () => m,
    hP: () => _,
    w9: () => E,
}),
    n(539854);
var a = n(392711),
    l = n.n(a),
    i = n(695346),
    r = n(626135),
    o = n(531578),
    d = n(981631),
    s = n(801485),
    u = n(388032);
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
    r.default.track(d.rMx.USER_SETTINGS_IN_APP_FEEDBACK_OPTED_OUT, {
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
function m() {
    return v([
        {
            variant: o.$7.SELF,
            value: o.T_.COULD_NOT_CONNECT,
            label: u.intl.string(s.default.gMHKDJ),
        },
        {
            value: o.T_.HIGH_TTC,
            variant: o.$7.SELF,
            label: u.intl.string(s.default.y06Ayn),
        },
        {
            value: o.T_.HIGH_LATENCY,
            variant: o.$7.SELF,
            label: u.intl.string(s.default.y5k8Jq),
        },
        {
            value: o.T_.ROBOT_VOICE,
            variant: o.$7.SOMEONE,
            label: u.intl.string(s.default.f2914v),
        },
        {
            value: o.T_.DESYNC,
            variant: o.$7.UNSPECIFIED,
            label: u.intl.string(s.default["zk+QL1"]),
        },
        {
            value: o.T_.CUTTING,
            variant: o.$7.SOMEONE,
            label: u.intl.string(s.default.K5vYQA),
        },
    ]);
}
function E(e) {
    let { isMobile: t } = e;
    return v([
        {
            value: o.b9.NO_AUDIO,
            variant: o.$7.SELF,
            label: u.intl.string(s.default["GWypH+"]),
        },
        {
            value: o.b9.NO_AUDIO,
            variant: o.$7.OTHERS,
            label: u.intl.string(s.default.ftSvQ0),
        },
        {
            value: o.b9.LOW_QUALITY_AUDIO,
            variant: o.$7.OTHERS,
            label: u.intl.string(s.default["1DnNRO"]),
        },
        {
            value: o.b9.ROBOT_VOICE,
            variant: o.$7.SOMEONE,
            label: u.intl.string(s.default.yGe0BL),
        },
        {
            value: o.b9.ECHO,
            variant: o.$7.OTHERS,
            label: u.intl.string(s.default.Q5Dsaz),
        },
        {
            value: o.b9.TOO_QUIET_OR_LOUD,
            variant: o.$7.SOMEONE,
            label: u.intl.string(s.default["1o77I3"]),
        },
        {
            value: o.b9.CUTTING,
            variant: o.$7.SOMEONE,
            label: u.intl.string(s.default.RK9DUi),
        },
        {
            value: o.b9.DELAYED,
            variant: o.$7.UNSPECIFIED,
            label: u.intl.string(s.default.RGRgmM),
        },
        {
            value: o.b9.BACKGROUND_NOISE,
            variant: o.$7.SOMEONE,
            label: u.intl.string(s.default["anHk1/"]),
        },
        {
            value: o.b9.UNABLE_TO_FIND_DEVICE,
            variant: o.$7.SELF,
            label: u.intl.string(s.default["05VSjm"]),
        },
        {
            value: o.b9.COMPLAINTS,
            variant: o.$7.OTHERS,
            label: u.intl.string(s.default.kbbtwi),
        },
        {
            value: o.b9.TROUBLE_WITH_SPEAKERPHONE,
            variant: o.$7.SELF,
            label: u.intl.string(s.default["4qlGrO"]),
            disabled: !t,
        },
        {
            value: o.b9.NO_GAME_AUDIO,
            variant: o.$7.SELF,
            label: u.intl.string(s.default["2IG95D"]),
        },
    ]);
}
function p() {
    return v([
        {
            value: o.ct.NO_VIDEO,
            variant: o.$7.SELF,
            label: u.intl.string(s.default["Bh+02d"]),
        },
        {
            value: o.ct.NO_VIDEO,
            variant: o.$7.SOMEONE,
            label: u.intl.string(s.default["R+wqwU"]),
        },
        {
            value: o.ct.FREEZING_OR_HITCHING,
            variant: o.$7.SOMEONE,
            label: u.intl.string(s.default["8I/GUL"]),
        },
        {
            value: o.ct.BLURRY_OR_PIXELATED,
            variant: o.$7.SOMEONE,
            label: u.intl.string(s.default.k7Idoz),
        },
        {
            value: o.ct.UNABLE_TO_ENABLE_DEVICE,
            variant: o.$7.SELF,
            label: u.intl.string(s.default.QbC6La),
        },
        {
            value: o.ct.DESYNC,
            variant: o.$7.UNSPECIFIED,
            label: u.intl.string(s.default.vRDE5O),
        },
    ]);
}
function g(e) {
    let { isStreamer: t } = e;
    return v([
        {
            value: o.MJ.COULD_NOT_LOAD,
            variant: o.$7.SELF,
            label: u.intl.string(s.default["w+kiDF"]),
            disabled: !t,
        },
        {
            value: o.MJ.BLACK_SCREEN,
            variant: o.$7.SELF,
            label: u.intl.string(s.default.RRZZZb),
            disabled: !t,
        },
        {
            value: o.MJ.FREEZING_OR_HITCHING,
            variant: o.$7.SELF,
            label: u.intl.string(s.default["3PKSkd"]),
            disabled: !t,
        },
        {
            value: o.MJ.LAG,
            variant: o.$7.SELF,
            label: u.intl.string(s.default.iMxexK),
            disabled: !t,
        },
        {
            value: o.MJ.BLURRY_OR_PIXELATED,
            variant: o.$7.SELF,
            label: u.intl.string(s.default["8ceyQy"]),
            disabled: !t,
        },
        {
            value: o.MJ.NO_AUDIO,
            variant: o.$7.SELF,
            label: u.intl.string(s.default.HaZSC3),
            disabled: !t,
        },
        {
            value: o.MJ.BAD_AUDIO,
            variant: o.$7.SELF,
            label: u.intl.string(s.default["zIC+8Y"]),
            disabled: !t,
        },
        {
            value: o.MJ.STOPPED_UNEXPECTEDLY,
            variant: o.$7.SELF,
            label: u.intl.string(s.default["/nlKuG"]),
            disabled: !t,
        },
        {
            value: o.MJ.DESYNC,
            variant: o.$7.SELF,
            label: u.intl.string(s.default.JS6akP),
            disabled: !t,
        },
        {
            value: o.MJ.NO_GAME_AUDIO,
            variant: o.$7.SELF,
            label: u.intl.string(s.default.TaIrh5),
            disabled: !t,
        },
        {
            value: o.MJ.COULD_NOT_LOAD,
            variant: o.$7.SOMEONE,
            label: u.intl.string(s.default.jU9Zs8),
            disabled: t,
        },
        {
            value: o.MJ.BLACK_SCREEN,
            variant: o.$7.SOMEONE,
            label: u.intl.string(s.default.aml28x),
            disabled: t,
        },
        {
            value: o.MJ.FREEZING_OR_HITCHING,
            variant: o.$7.SOMEONE,
            label: u.intl.string(s.default.V3EeCH),
            disabled: t,
        },
        {
            value: o.MJ.LAG,
            variant: o.$7.SOMEONE,
            label: u.intl.string(s.default.hi1Y39),
            disabled: t,
        },
        {
            value: o.MJ.BLURRY_OR_PIXELATED,
            variant: o.$7.SOMEONE,
            label: u.intl.string(s.default.qdBn3L),
            disabled: t,
        },
        {
            value: o.MJ.NO_AUDIO,
            variant: o.$7.SOMEONE,
            label: u.intl.string(s.default.DOOlop),
            disabled: t,
        },
        {
            value: o.MJ.BAD_AUDIO,
            variant: o.$7.SOMEONE,
            label: u.intl.string(s.default.k7bdGE),
            disabled: t,
        },
        {
            value: o.MJ.STOPPED_UNEXPECTEDLY,
            variant: o.$7.SOMEONE,
            label: u.intl.string(s.default.jPD998),
            disabled: t,
        },
        {
            value: o.MJ.DESYNC,
            variant: o.$7.SOMEONE,
            label: u.intl.string(s.default.JfAvQp),
            disabled: t,
        },
    ]);
}
function _() {
    return v([
        {
            value: o.s_.TOXIC_OR_INAPPROPRIATE,
            variant: o.$7.OTHERS,
            label: u.intl.string(s.default.PLBRzF),
        },
    ]);
}
