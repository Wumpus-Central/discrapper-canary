n.d(t, { X: () => c });
var o = n(818083),
    i = n(984134);
function a(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            o = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (o = o.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            o.forEach(function (t) {
                var o;
                (o = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: o,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = o);
            });
    }
    return e;
}
function r(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var o = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, o);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let l = {
        showFormStyleSurvey: !1,
        hideNeutralOption: !1,
        showVibesHoneypot: !1
    },
    s = (0, o.B)({
        kind: 'user',
        id: '2025-02_call_survey_refresh_web',
        label: 'Call Survey Refresh (Web)',
        defaultConfig: l,
        treatments: [
            {
                id: 1,
                label: 'Show form-style survey without neutral',
                config: r(a({}, l), {
                    showFormStyleSurvey: !0,
                    hideNeutralOption: !0
                })
            },
            {
                id: 2,
                label: 'Show survey without neutral',
                config: r(a({}, l), { hideNeutralOption: !0 })
            },
            {
                id: 3,
                label: 'Show survey without neutral, and with vibes honeypot',
                config: r(a({}, l), {
                    hideNeutralOption: !0,
                    showVibesHoneypot: !0
                })
            }
        ]
    });
function c(e) {
    let { location: t, autoTrackExposure: n = !0 } = e,
        { isInHoldout: o } = i.h.useExperiment({ location: t }, { autoTrackExposure: n });
    return s.useExperiment(
        { location: t },
        {
            disable: o,
            autoTrackExposure: n
        }
    );
}
