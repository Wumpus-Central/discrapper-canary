n.d(e, { Z: () => o });
var i = n(442837),
    l = n(435064),
    s = n(39604),
    r = n(509613),
    u = n(313789),
    a = n(388032);
let o = (0, r.qs)(u.n.CLIPS_ENABLE_PHRASE_SIGNALS, {
    useTitle: () => a.intl.string(a.t.nHsilt),
    useSubtitle: () => a.intl.string(a.t["s6wq+m"]),
    useValue: () => (0, i.e7)([l.Z], () => l.Z.getSettings().clipSignals.enablePhraseSignals),
    setValue: (t) => {
        var e, n;
        let i = l.Z.getSettings().clipSignals;
        s.Rr(
            ((e = (function (t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {},
                        i = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols &&
                        (i = i.concat(
                            Object.getOwnPropertySymbols(n).filter(function (t) {
                                return Object.getOwnPropertyDescriptor(n, t).enumerable;
                            }),
                        )),
                        i.forEach(function (e) {
                            var i;
                            (i = n[e]),
                                e in t
                                    ? Object.defineProperty(t, e, {
                                          value: i,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0,
                                      })
                                    : (t[e] = i);
                        });
                }
                return t;
            })({}, i)),
            (n = n = { enablePhraseSignals: t }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                : (function (t, e) {
                      var n = Object.keys(t);
                      if (Object.getOwnPropertySymbols) {
                          var i = Object.getOwnPropertySymbols(t);
                          n.push.apply(n, i);
                      }
                      return n;
                  })(Object(n)).forEach(function (t) {
                      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                  }),
            e),
        );
    },
});
