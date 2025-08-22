n.d(t, {
    Bi: () => f,
    Ez: () => _,
    NX: () => m,
    Uv: () => N,
    Z1: () => S,
    hP: () => p,
    w9: () => g,
}),
    n(539854);
var a = n(392711),
    l = n.n(a),
    i = n(536442),
    r = n(695346),
    s = n(626135),
    d = n(178635),
    u = n(250454),
    c = n(531578),
    b = n(981631),
    o = n(805388),
    E = n(388032);
function O(e) {
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
function v(e, t) {
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
function N(e) {
    let { feedbackType: t, location: n } = e,
        { persistToBackend: a } = (0, u.O)({ location: n }),
        l = d.R[t].hotspot;
    a
        ? (s.default.track(b.rMx.USER_SETTINGS_IN_APP_FEEDBACK_OPTED_OUT, {
              feedback_type: c.nw[t],
              opted_out_until: c.uf,
          }),
          r.A2.updateSetting((e) => v(O({}, e), { [t]: v(O({}, e[t]), { optOutExpiryTime: c.uf }) })))
        : (0, i.Kw)(l);
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
function S() {
    return h([
        {
            variant: c.$7.SELF,
            value: c.T_.COULD_NOT_CONNECT,
            label: E.intl.string(o.default.gMHKDA),
        },
        {
            value: c.T_.HIGH_TTC,
            variant: c.$7.SELF,
            label: E.intl.string(o.default.y06Ays),
        },
        {
            value: c.T_.HIGH_LATENCY,
            variant: c.$7.SELF,
            label: E.intl.string(o.default.y5k8Ji),
        },
        {
            value: c.T_.ROBOT_VOICE,
            variant: c.$7.SOMEONE,
            label: E.intl.string(o.default.f2914u),
        },
        {
            value: c.T_.DESYNC,
            variant: c.$7.UNSPECIFIED,
            label: E.intl.string(o.default["zk+QLy"]),
        },
        {
            value: c.T_.CUTTING,
            variant: c.$7.SOMEONE,
            label: E.intl.string(o.default.K5vYQE),
        },
    ]);
}
function g(e) {
    let { isMobile: t } = e;
    return h([
        {
            value: c.b9.NO_AUDIO,
            variant: c.$7.SELF,
            label: E.intl.string(o.default.GWypHx),
        },
        {
            value: c.b9.NO_AUDIO,
            variant: c.$7.OTHERS,
            label: E.intl.string(o.default.ftSvQ0),
        },
        {
            value: c.b9.LOW_QUALITY_AUDIO,
            variant: c.$7.OTHERS,
            label: E.intl.string(o.default["1DnNRE"]),
        },
        {
            value: c.b9.ROBOT_VOICE,
            variant: c.$7.SOMEONE,
            label: E.intl.string(o.default.yGe0BA),
        },
        {
            value: c.b9.ECHO,
            variant: c.$7.OTHERS,
            label: E.intl.string(o.default.Q5Dsa2),
        },
        {
            value: c.b9.TOO_QUIET_OR_LOUD,
            variant: c.$7.SOMEONE,
            label: E.intl.string(o.default["1o77Iy"]),
        },
        {
            value: c.b9.CUTTING,
            variant: c.$7.SOMEONE,
            label: E.intl.string(o.default.RK9DUl),
        },
        {
            value: c.b9.DELAYED,
            variant: c.$7.UNSPECIFIED,
            label: E.intl.string(o.default.RGRgmJ),
        },
        {
            value: c.b9.BACKGROUND_NOISE,
            variant: c.$7.SOMEONE,
            label: E.intl.string(o.default.anHk19),
        },
        {
            value: c.b9.UNABLE_TO_FIND_DEVICE,
            variant: c.$7.SELF,
            label: E.intl.string(o.default["05VSjo"]),
        },
        {
            value: c.b9.COMPLAINTS,
            variant: c.$7.OTHERS,
            label: E.intl.string(o.default.kbbtws),
        },
        {
            value: c.b9.TROUBLE_WITH_SPEAKERPHONE,
            variant: c.$7.SELF,
            label: E.intl.string(o.default["4qlGrK"]),
            disabled: !t,
        },
        {
            value: c.b9.NO_GAME_AUDIO,
            variant: c.$7.SELF,
            label: E.intl.string(o.default["2IG95O"]),
        },
    ]);
}
function m() {
    return h([
        {
            value: c.ct.NO_VIDEO,
            variant: c.$7.SELF,
            label: E.intl.string(o.default["Bh+02d"]),
        },
        {
            value: c.ct.NO_VIDEO,
            variant: c.$7.SOMEONE,
            label: E.intl.string(o.default["R+wqwc"]),
        },
        {
            value: c.ct.FREEZING_OR_HITCHING,
            variant: c.$7.SOMEONE,
            label: E.intl.string(o.default["8I/GUF"]),
        },
        {
            value: c.ct.BLURRY_OR_PIXELATED,
            variant: c.$7.SOMEONE,
            label: E.intl.string(o.default.k7Ido6),
        },
        {
            value: c.ct.UNABLE_TO_ENABLE_DEVICE,
            variant: c.$7.SELF,
            label: E.intl.string(o.default.QbC6LS),
        },
        {
            value: c.ct.DESYNC,
            variant: c.$7.UNSPECIFIED,
            label: E.intl.string(o.default.vRDE5O),
        },
    ]);
}
function _(e) {
    let { isStreamer: t } = e;
    return h([
        {
            value: c.MJ.COULD_NOT_LOAD,
            variant: c.$7.SELF,
            label: E.intl.string(o.default["w+kiDA"]),
            disabled: !t,
        },
        {
            value: c.MJ.BLACK_SCREEN,
            variant: c.$7.SELF,
            label: E.intl.string(o.default.RRZZZW),
            disabled: !t,
        },
        {
            value: c.MJ.FREEZING_OR_HITCHING,
            variant: c.$7.SELF,
            label: E.intl.string(o.default["3PKSkZ"]),
            disabled: !t,
        },
        {
            value: c.MJ.LAG,
            variant: c.$7.SELF,
            label: E.intl.string(o.default.iMxexM),
            disabled: !t,
        },
        {
            value: c.MJ.BLURRY_OR_PIXELATED,
            variant: c.$7.SELF,
            label: E.intl.string(o.default["8ceyQ0"]),
            disabled: !t,
        },
        {
            value: c.MJ.NO_AUDIO,
            variant: c.$7.SELF,
            label: E.intl.string(o.default.HaZSCw),
            disabled: !t,
        },
        {
            value: c.MJ.BAD_AUDIO,
            variant: c.$7.SELF,
            label: E.intl.string(o.default["zIC+8f"]),
            disabled: !t,
        },
        {
            value: c.MJ.STOPPED_UNEXPECTEDLY,
            variant: c.$7.SELF,
            label: E.intl.string(o.default["/nlKuL"]),
            disabled: !t,
        },
        {
            value: c.MJ.DESYNC,
            variant: c.$7.SELF,
            label: E.intl.string(o.default.JS6akJ),
            disabled: !t,
        },
        {
            value: c.MJ.NO_GAME_AUDIO,
            variant: c.$7.SELF,
            label: E.intl.string(o.default.TaIrh4),
            disabled: !t,
        },
        {
            value: c.MJ.COULD_NOT_LOAD,
            variant: c.$7.SOMEONE,
            label: E.intl.string(o.default.jU9Zs7),
            disabled: t,
        },
        {
            value: c.MJ.BLACK_SCREEN,
            variant: c.$7.SOMEONE,
            label: E.intl.string(o.default["aml28/"]),
            disabled: t,
        },
        {
            value: c.MJ.FREEZING_OR_HITCHING,
            variant: c.$7.SOMEONE,
            label: E.intl.string(o.default.V3EeCA),
            disabled: t,
        },
        {
            value: c.MJ.LAG,
            variant: c.$7.SOMEONE,
            label: E.intl.string(o.default.hi1Y39),
            disabled: t,
        },
        {
            value: c.MJ.BLURRY_OR_PIXELATED,
            variant: c.$7.SOMEONE,
            label: E.intl.string(o.default.qdBn3N),
            disabled: t,
        },
        {
            value: c.MJ.NO_AUDIO,
            variant: c.$7.SOMEONE,
            label: E.intl.string(o.default.DOOloq),
            disabled: t,
        },
        {
            value: c.MJ.BAD_AUDIO,
            variant: c.$7.SOMEONE,
            label: E.intl.string(o.default.k7bdGB),
            disabled: t,
        },
        {
            value: c.MJ.STOPPED_UNEXPECTEDLY,
            variant: c.$7.SOMEONE,
            label: E.intl.string(o.default["jPD99/"]),
            disabled: t,
        },
        {
            value: c.MJ.DESYNC,
            variant: c.$7.SOMEONE,
            label: E.intl.string(o.default.JfAvQk),
            disabled: t,
        },
    ]);
}
function p() {
    return h([
        {
            value: c.s_.TOXIC_OR_INAPPROPRIATE,
            variant: c.$7.OTHERS,
            label: E.intl.string(o.default.PLBRzM),
        },
    ]);
}
