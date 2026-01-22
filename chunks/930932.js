l.d(t, {
    A_: () => E,
    Op: () => g,
    TK: () => j,
    de: () => p,
    ed: () => c,
    n3: () => f,
    wq: () => h,
}),
    l(321073);
var n = l(735438),
    a = l.n(n),
    i = l(253932),
    r = l(954571),
    s = l(670455),
    u = l(652215),
    d = l(716829),
    O = l(985018);
function b(e) {
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
function o(e, t) {
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
let c = (e, t) => {
    let l = a().shuffle(e),
        n = l.findIndex((e) => e.value === t);
    if (n > -1) {
        let e = l[n];
        l.splice(n, 1), l.push(e);
    }
    return l;
};
function f(e) {
    let { feedbackType: t, location: l } = e;
    r.default.track(u.HAw.USER_SETTINGS_IN_APP_FEEDBACK_OPTED_OUT, {
        feedback_type: s.MW[t],
        opted_out_until: s.fs,
    }),
        i.Yt.updateSetting((e) => o(b({}, e), { [t]: o(b({}, e[t]), { optOutExpiryTime: s.fs }) }));
}
function v(e) {
    return e
        .filter((e) => {
            let { disabled: t } = e;
            return !t;
        })
        .map((e) => {
            let { disabled: t } = e;
            return (function (e, t) {
                if (null == e) return {};
                var l,
                    n,
                    a,
                    i = {};
                if ("u" > typeof Reflect && Reflect.ownKeys) {
                    for (a = 0, l = Reflect.ownKeys(e); a < l.length; a++)
                        (n = l[a]),
                            !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
                    return i;
                }
                if (
                    ((i = (function (e, t) {
                        if (null == e) return {};
                        var l,
                            n,
                            a = {},
                            i = Object.getOwnPropertyNames(e);
                        for (n = 0; n < i.length; n++)
                            (l = i[n]),
                                !(t.indexOf(l) >= 0) &&
                                    Object.prototype.propertyIsEnumerable.call(e, l) &&
                                    (a[l] = e[l]);
                        return a;
                    })(e, t)),
                    Object.getOwnPropertySymbols)
                )
                    for (a = 0, l = Object.getOwnPropertySymbols(e); a < l.length; a++)
                        (n = l[a]),
                            !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
                return i;
            })(e, ["disabled"]);
        });
}
function E() {
    return v([
        {
            variant: s.UV.SELF,
            value: s.bO.COULD_NOT_CONNECT,
            label: O.intl.string(d.default.gMHKDJ),
        },
        {
            value: s.bO.HIGH_TTC,
            variant: s.UV.SELF,
            label: O.intl.string(d.default.y06Ayn),
        },
        {
            value: s.bO.HIGH_LATENCY,
            variant: s.UV.SELF,
            label: O.intl.string(d.default.y5k8Jq),
        },
        {
            value: s.bO.ROBOT_VOICE,
            variant: s.UV.SOMEONE,
            label: O.intl.string(d.default.f2914v),
        },
        {
            value: s.bO.DESYNC,
            variant: s.UV.UNSPECIFIED,
            label: O.intl.string(d.default["zk+QL1"]),
        },
        {
            value: s.bO.CUTTING,
            variant: s.UV.SOMEONE,
            label: O.intl.string(d.default.K5vYQA),
        },
    ]);
}
function g(e) {
    let { isMobile: t } = e;
    return v([
        {
            value: s.X.NO_AUDIO,
            variant: s.UV.SELF,
            label: O.intl.string(d.default["GWypH+"]),
        },
        {
            value: s.X.NO_AUDIO,
            variant: s.UV.OTHERS,
            label: O.intl.string(d.default.ftSvQ0),
        },
        {
            value: s.X.LOW_QUALITY_AUDIO,
            variant: s.UV.OTHERS,
            label: O.intl.string(d.default["1DnNRO"]),
        },
        {
            value: s.X.ROBOT_VOICE,
            variant: s.UV.SOMEONE,
            label: O.intl.string(d.default.yGe0BL),
        },
        {
            value: s.X.ECHO,
            variant: s.UV.OTHERS,
            label: O.intl.string(d.default.Q5Dsaz),
        },
        {
            value: s.X.TOO_QUIET_OR_LOUD,
            variant: s.UV.SOMEONE,
            label: O.intl.string(d.default["1o77I3"]),
        },
        {
            value: s.X.CUTTING,
            variant: s.UV.SOMEONE,
            label: O.intl.string(d.default.RK9DUi),
        },
        {
            value: s.X.DELAYED,
            variant: s.UV.UNSPECIFIED,
            label: O.intl.string(d.default.RGRgmM),
        },
        {
            value: s.X.BACKGROUND_NOISE,
            variant: s.UV.SOMEONE,
            label: O.intl.string(d.default["anHk1/"]),
        },
        {
            value: s.X.UNABLE_TO_FIND_DEVICE,
            variant: s.UV.SELF,
            label: O.intl.string(d.default["05VSjm"]),
        },
        {
            value: s.X.COMPLAINTS,
            variant: s.UV.OTHERS,
            label: O.intl.string(d.default.kbbtwi),
        },
        {
            value: s.X.TROUBLE_WITH_SPEAKERPHONE,
            variant: s.UV.SELF,
            label: O.intl.string(d.default["4qlGrO"]),
            disabled: !t,
        },
        {
            value: s.X.NO_GAME_AUDIO,
            variant: s.UV.SELF,
            label: O.intl.string(d.default["2IG95D"]),
        },
    ]);
}
function p() {
    return v([
        {
            value: s.AO.NO_VIDEO,
            variant: s.UV.SELF,
            label: O.intl.string(d.default["Bh+02d"]),
        },
        {
            value: s.AO.NO_VIDEO,
            variant: s.UV.SOMEONE,
            label: O.intl.string(d.default["R+wqwU"]),
        },
        {
            value: s.AO.FREEZING_OR_HITCHING,
            variant: s.UV.SOMEONE,
            label: O.intl.string(d.default["8I/GUL"]),
        },
        {
            value: s.AO.BLURRY_OR_PIXELATED,
            variant: s.UV.SOMEONE,
            label: O.intl.string(d.default.k7Idoz),
        },
        {
            value: s.AO.UNABLE_TO_ENABLE_DEVICE,
            variant: s.UV.SELF,
            label: O.intl.string(d.default.QbC6La),
        },
        {
            value: s.AO.DESYNC,
            variant: s.UV.UNSPECIFIED,
            label: O.intl.string(d.default.vRDE5O),
        },
    ]);
}
function h(e) {
    let { isStreamer: t } = e;
    return v([
        {
            value: s.j6.COULD_NOT_LOAD,
            variant: s.UV.SELF,
            label: O.intl.string(d.default["w+kiDF"]),
            disabled: !t,
        },
        {
            value: s.j6.BLACK_SCREEN,
            variant: s.UV.SELF,
            label: O.intl.string(d.default.RRZZZb),
            disabled: !t,
        },
        {
            value: s.j6.FREEZING_OR_HITCHING,
            variant: s.UV.SELF,
            label: O.intl.string(d.default["3PKSkd"]),
            disabled: !t,
        },
        {
            value: s.j6.LAG,
            variant: s.UV.SELF,
            label: O.intl.string(d.default.iMxexK),
            disabled: !t,
        },
        {
            value: s.j6.BLURRY_OR_PIXELATED,
            variant: s.UV.SELF,
            label: O.intl.string(d.default["8ceyQy"]),
            disabled: !t,
        },
        {
            value: s.j6.NO_AUDIO,
            variant: s.UV.SELF,
            label: O.intl.string(d.default.HaZSC3),
            disabled: !t,
        },
        {
            value: s.j6.BAD_AUDIO,
            variant: s.UV.SELF,
            label: O.intl.string(d.default["zIC+8Y"]),
            disabled: !t,
        },
        {
            value: s.j6.STOPPED_UNEXPECTEDLY,
            variant: s.UV.SELF,
            label: O.intl.string(d.default["/nlKuG"]),
            disabled: !t,
        },
        {
            value: s.j6.DESYNC,
            variant: s.UV.SELF,
            label: O.intl.string(d.default.JS6akP),
            disabled: !t,
        },
        {
            value: s.j6.NO_GAME_AUDIO,
            variant: s.UV.SELF,
            label: O.intl.string(d.default.TaIrh5),
            disabled: !t,
        },
        {
            value: s.j6.COULD_NOT_LOAD,
            variant: s.UV.SOMEONE,
            label: O.intl.string(d.default.jU9Zs8),
            disabled: t,
        },
        {
            value: s.j6.BLACK_SCREEN,
            variant: s.UV.SOMEONE,
            label: O.intl.string(d.default.aml28x),
            disabled: t,
        },
        {
            value: s.j6.FREEZING_OR_HITCHING,
            variant: s.UV.SOMEONE,
            label: O.intl.string(d.default.V3EeCH),
            disabled: t,
        },
        {
            value: s.j6.LAG,
            variant: s.UV.SOMEONE,
            label: O.intl.string(d.default.hi1Y39),
            disabled: t,
        },
        {
            value: s.j6.BLURRY_OR_PIXELATED,
            variant: s.UV.SOMEONE,
            label: O.intl.string(d.default.qdBn3L),
            disabled: t,
        },
        {
            value: s.j6.NO_AUDIO,
            variant: s.UV.SOMEONE,
            label: O.intl.string(d.default.DOOlop),
            disabled: t,
        },
        {
            value: s.j6.BAD_AUDIO,
            variant: s.UV.SOMEONE,
            label: O.intl.string(d.default.k7bdGE),
            disabled: t,
        },
        {
            value: s.j6.STOPPED_UNEXPECTEDLY,
            variant: s.UV.SOMEONE,
            label: O.intl.string(d.default.jPD998),
            disabled: t,
        },
        {
            value: s.j6.DESYNC,
            variant: s.UV.SOMEONE,
            label: O.intl.string(d.default.JfAvQp),
            disabled: t,
        },
    ]);
}
function j() {
    return v([
        {
            value: s.CW.TOXIC_OR_INAPPROPRIATE,
            variant: s.UV.OTHERS,
            label: O.intl.string(d.default.PLBRzF),
        },
    ]);
}
