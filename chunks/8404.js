n.d(t, { b: () => u });
var r = n(73800),
    i = n(652844),
    l = n(747906),
    a = n(481060),
    o = n(40851),
    s = n(378441),
    c = n(981631);
function u(e) {
    let t = (0, o.bp)(),
        { activeVoice: n } = (0, s.o)(),
        u = null != n,
        d = e ? 'unmute' : 'mute',
        f = (0, l.P)(d),
        p = (0, i.O)(d),
        m = u ? f : p,
        g = t === c.IlC.POPOUT ? (u ? (e ? a.TYr : a.x8H) : e ? a.nRN : a.S6n) : m.Component;
    return r.useMemo(() => {
        var e, t;
        return (
            (e = (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    ('function' == typeof Object.getOwnPropertySymbols &&
                        (r = r.concat(
                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                            })
                        )),
                        r.forEach(function (t) {
                            var r;
                            ((r = n[t]),
                                t in e
                                    ? Object.defineProperty(e, t, {
                                          value: r,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0
                                      })
                                    : (e[t] = r));
                        }));
                }
                return e;
            })({}, m)),
            (t = t = { Component: g }),
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
    }, [m, g]);
}
