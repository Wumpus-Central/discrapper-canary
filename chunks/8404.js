n.d(t, { b: () => u });
var r = n(473749),
    i = n(652844),
    o = n(747906),
    l = n(481060),
    a = n(728285),
    s = n(378441),
    c = n(981631);
function u(e) {
    let t = (0, a.bp)(),
        { activeVoice: n } = (0, s.o)(),
        u = null != n,
        d = e ? "unmute" : "mute",
        p = (0, o.P)(d),
        m = (0, i.O)(d),
        f = u ? p : m,
        b = t === c.IlC.POPOUT ? (u ? (e ? l.TYr : l.x8H) : e ? l.nRN : l.S6n) : f.Component;
    return r.useMemo(() => {
        var e, t;
        return (
            (e = (function (e) {
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
            })({}, f)),
            (t = t = { Component: b }),
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
    }, [f, b]);
}
