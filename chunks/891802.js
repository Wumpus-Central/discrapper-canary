o.d(t, { X: () => c });
var n = o(818083),
    r = o(984134);
function i(e) {
    for (var t = 1; t < arguments.length; t++) {
        var o = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(o);
        'function' == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(o).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(o, e).enumerable;
                })
            )),
            n.forEach(function (t) {
                var n;
                (n = o[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = n);
            });
    }
    return e;
}
function l(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var o = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(e);
                      o.push.apply(o, n);
                  }
                  return o;
              })(Object(t)).forEach(function (o) {
                  Object.defineProperty(e, o, Object.getOwnPropertyDescriptor(t, o));
              }),
        e
    );
}
let a = {
        showFormStyleSurvey: !1,
        hideNeutralOption: !1,
        showVibesHoneypot: !1
    },
    s = (0, n.B)({
        kind: 'user',
        id: '2025-02_call_survey_refresh_web',
        label: 'Call Survey Refresh (Web)',
        defaultConfig: a,
        treatments: [
            {
                id: 1,
                label: 'Show form-style survey without neutral',
                config: l(i({}, a), {
                    showFormStyleSurvey: !0,
                    hideNeutralOption: !0
                })
            },
            {
                id: 2,
                label: 'Show survey without neutral',
                config: l(i({}, a), { hideNeutralOption: !0 })
            },
            {
                id: 3,
                label: 'Show survey without neutral, and with vibes honeypot',
                config: l(i({}, a), {
                    hideNeutralOption: !0,
                    showVibesHoneypot: !0
                })
            }
        ]
    });
function c(e) {
    let { location: t, autoTrackExposure: o = !0 } = e,
        { isInHoldout: n } = r.h.useExperiment({ location: t }, { autoTrackExposure: o });
    return s.useExperiment(
        { location: t },
        {
            disable: n,
            autoTrackExposure: o
        }
    );
}
