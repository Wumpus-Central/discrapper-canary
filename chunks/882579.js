n.d(t, { U: () => l });
var r = n(43169);
let i = (0, n(818083).B)({
    kind: "user",
    id: "2025-08_create_dm_cta_desktop",
    label: "Create DM CTA (Desktop)",
    defaultConfig: { buttonVariant: null },
    treatments: [
        {
            id: 1,
            label: "Side button",
            config: { buttonVariant: "side" },
        },
        {
            id: 2,
            label: "Full width button",
            config: { buttonVariant: "full-width" },
        },
    ],
});
function l(e, t) {
    var n, l, a;
    let o = (0, r.jX)(e),
        { buttonVariant: s } = i.useExperiment(
            { location: e },
            ((l = (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols &&
                        (r = r.concat(
                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                            }),
                        )),
                        r.forEach(function (t) {
                            var r;
                            (r = n[t]),
                                t in e
                                    ? Object.defineProperty(e, t, {
                                          value: r,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0,
                                      })
                                    : (e[t] = r);
                        });
                }
                return e;
            })({}, t)),
            (a = a =
                {
                    disable: o || (null != (n = t.disable) && n),
                    autoTrackExposure: t.autoTrackExposure,
                }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(a))
                : (function (e, t) {
                      var n = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                          var r = Object.getOwnPropertySymbols(e);
                          n.push.apply(n, r);
                      }
                      return n;
                  })(Object(a)).forEach(function (e) {
                      Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(a, e));
                  }),
            l),
        );
    return s;
}
