n.d(t, { X: () => c });
var r = n(818083),
    l = n(984134);
function i(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function a(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let o = {
        showFormStyleSurvey: !1,
        hideNeutralOption: !1,
        showVibesHoneypot: !1
    },
    s = (0, r.B)({
        kind: 'user',
        id: '2025-02_call_survey_refresh_web',
        label: 'Call Survey Refresh (Web)',
        defaultConfig: o,
        treatments: [
            {
                id: 1,
                label: 'Show form-style survey without neutral',
                config: a(i({}, o), {
                    showFormStyleSurvey: !0,
                    hideNeutralOption: !0
                })
            },
            {
                id: 2,
                label: 'Show survey without neutral',
                config: a(i({}, o), { hideNeutralOption: !0 })
            },
            {
                id: 3,
                label: 'Show survey without neutral, and with vibes honeypot',
                config: a(i({}, o), {
                    hideNeutralOption: !0,
                    showVibesHoneypot: !0
                })
            }
        ]
    });
function c(e) {
    let { location: t, autoTrackExposure: n = !0 } = e,
        { isInHoldout: r } = l.h.useExperiment({ location: t }, { autoTrackExposure: n });
    return s.useExperiment(
        { location: t },
        {
            disable: r,
            autoTrackExposure: n
        }
    );
}
