n.d(t, { g: () => g }), n(47120);
var i = n(200651),
    r = n(192379),
    o = n(442837),
    l = n(481060),
    a = n(74299),
    s = n(562224),
    u = n(592125),
    c = n(131951),
    d = n(944486),
    p = n(594174),
    h = n(145597),
    f = n(981631),
    m = n(388032);
function g(e, t) {
    let g = (0, o.e7)([d.Z], () => d.Z.getVoiceChannelId()),
        O = (0, o.e7)([u.Z], () => u.Z.getChannel(g), [g]),
        y = (0, o.e7)([p.default], () => p.default.getCurrentUser()),
        v = null == O ? void 0 : O.getGuildId(),
        E = (0, o.e7)([c.Z], () => (0, a.Z)(c.Z));
    return r.useCallback(async () => {
        if (!E || null == g) return;
        let [r] = await (0, s.Z)(e);
        if (!r) {
            if (null == y) {
                (0, l.showToast)((0, l.createToast)(m.NW.string(m.t.OKnWyc), l.ToastType.FAILURE));
                return;
            }
            (0, l.ZDy)(
                async () => {
                    let { default: e } = await Promise.all([n.e('46746'), n.e('28965')]).then(n.bind(n, 60594));
                    return (t) => {
                        var n, r;
                        return (0, i.jsx)(
                            e,
                            ((n = (function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {},
                                        i = Object.keys(n);
                                    'function' == typeof Object.getOwnPropertySymbols &&
                                        (i = i.concat(
                                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                            })
                                        )),
                                        i.forEach(function (t) {
                                            var i;
                                            (i = n[t]),
                                                t in e
                                                    ? Object.defineProperty(e, t, {
                                                          value: i,
                                                          enumerable: !0,
                                                          configurable: !0,
                                                          writable: !0
                                                      })
                                                    : (e[t] = i);
                                        });
                                }
                                return e;
                            })({}, t)),
                            (r = r =
                                {
                                    sourcePID: (0, h.getPID)(),
                                    selectSource: !1,
                                    guildId: v,
                                    analyticsLocation: f.Sbl.UNLOCKED_OVERLAY
                                }),
                            Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r))
                                : (function (e, t) {
                                      var n = Object.keys(e);
                                      if (Object.getOwnPropertySymbols) {
                                          var i = Object.getOwnPropertySymbols(e);
                                          n.push.apply(n, i);
                                      }
                                      return n;
                                  })(Object(r)).forEach(function (e) {
                                      Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e));
                                  }),
                            n)
                        );
                    };
                },
                { contextKey: null != t ? (0, l.VnL)(t) : void 0 }
            );
        }
    }, [E, v, g, t, e, y]);
}
