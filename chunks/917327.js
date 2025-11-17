n.d(t, { Z: () => g });
var i = n(54381);
n(473749);
var r = n(442837),
    l = n(481060),
    a = n(787014),
    o = n(362721),
    c = n(339340),
    s = n(869768),
    u = n(496675),
    d = n(12498),
    Z = n(981631),
    f = n(388032);
function g(e, t) {
    let g = (0, r.e7)([u.Z], () => u.Z.can(Z.Plq.MANAGE_CHANNELS, t)),
        h = (0, o.ZP)(e),
        b = (0, s.W)(e),
        j = (0, r.e7)([d.Z], () => d.Z.getChannelStatus(e)),
        v = null != j && j.length > 0;
    return e.isGuildVoice() && (g || h)
        ? !b && g && v
            ? (0, i.jsx)(l.sNh, {
                  id: "clear-status",
                  label: f.intl.string(f.t["22CYiZ"]),
                  action: () => {
                      a.ZP.updateVoiceChannelStatus(e.id, "");
                  },
              })
            : b && h
              ? (0, i.jsx)(l.sNh, {
                    id: "set-status",
                    label: f.intl.string(f.t.Mgpxiw),
                    action: () => {
                        (0, l.ZDy)(
                            async () => {
                                let { default: t } = await Promise.resolve().then(n.bind(n, 339340));
                                return (n) =>
                                    (0, i.jsx)(
                                        t,
                                        (function (e) {
                                            for (var t = 1; t < arguments.length; t++) {
                                                var n = null != arguments[t] ? arguments[t] : {},
                                                    i = Object.keys(n);
                                                "function" == typeof Object.getOwnPropertySymbols &&
                                                    (i = i.concat(
                                                        Object.getOwnPropertySymbols(n).filter(function (e) {
                                                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                        }),
                                                    )),
                                                    i.forEach(function (t) {
                                                        var i;
                                                        (i = n[t]),
                                                            t in e
                                                                ? Object.defineProperty(e, t, {
                                                                      value: i,
                                                                      enumerable: !0,
                                                                      configurable: !0,
                                                                      writable: !0,
                                                                  })
                                                                : (e[t] = i);
                                                    });
                                            }
                                            return e;
                                        })({ channel: e }, n),
                                    );
                            },
                            { modalKey: c.a },
                        );
                    },
                })
              : null
        : null;
}
