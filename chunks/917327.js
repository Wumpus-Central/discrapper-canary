e.d(t, { Z: () => g });
var i = e(54381);
e(473749);
var l = e(442837),
    r = e(481060),
    a = e(787014),
    c = e(362721),
    s = e(339340),
    o = e(869768),
    d = e(496675),
    u = e(12498),
    Z = e(981631),
    h = e(388032);
function g(n, t) {
    let g = (0, l.e7)([d.Z], () => d.Z.can(Z.Plq.MANAGE_CHANNELS, t)),
        f = (0, c.ZP)(n),
        v = (0, o.W)(n),
        j = (0, l.e7)([u.Z], () => u.Z.getChannelStatus(n)),
        b = null != j && j.length > 0;
    return n.isGuildVoice() && (g || f)
        ? !v && g && b
            ? (0, i.jsx)(r.sNh, {
                  id: "clear-status",
                  label: h.intl.string(h.t["22CYiZ"]),
                  action: () => {
                      a.ZP.updateVoiceChannelStatus(n.id, "");
                  },
              })
            : v && f
              ? (0, i.jsx)(r.sNh, {
                    id: "set-status",
                    label: h.intl.string(h.t.Mgpxiw),
                    action: () => {
                        (0, r.ZDy)(
                            async () => {
                                let { default: t } = await Promise.resolve().then(e.bind(e, 339340));
                                return (e) =>
                                    (0, i.jsx)(
                                        t,
                                        (function (n) {
                                            for (var t = 1; t < arguments.length; t++) {
                                                var e = null != arguments[t] ? arguments[t] : {},
                                                    i = Object.keys(e);
                                                "function" == typeof Object.getOwnPropertySymbols &&
                                                    (i = i.concat(
                                                        Object.getOwnPropertySymbols(e).filter(function (n) {
                                                            return Object.getOwnPropertyDescriptor(e, n).enumerable;
                                                        }),
                                                    )),
                                                    i.forEach(function (t) {
                                                        var i;
                                                        (i = e[t]),
                                                            t in n
                                                                ? Object.defineProperty(n, t, {
                                                                      value: i,
                                                                      enumerable: !0,
                                                                      configurable: !0,
                                                                      writable: !0,
                                                                  })
                                                                : (n[t] = i);
                                                    });
                                            }
                                            return n;
                                        })({ channel: n }, e),
                                    );
                            },
                            { modalKey: s.a },
                        );
                    },
                })
              : null
        : null;
}
