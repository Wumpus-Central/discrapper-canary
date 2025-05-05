n.d(t, { Z: () => b });
var r = n(255367);
n(73800);
var i = n(442837),
    l = n(481060),
    o = n(787014),
    c = n(362721),
    a = n(339340),
    s = n(869768),
    u = n(496675),
    d = n(12498),
    Z = n(981631),
    f = n(388032);
function b(e, t) {
    let b = (0, i.e7)([u.Z], () => u.Z.can(Z.Plq.MANAGE_CHANNELS, t)),
        j = (0, c.ZP)(e),
        O = (0, s.W)(e),
        g = (0, i.e7)([d.Z], () => d.Z.getChannelStatus(e)),
        p = null != g && g.length > 0;
    return e.isGuildVoice() && (b || j)
        ? !O && b && p
            ? (0, r.jsx)(l.sNh, {
                  id: 'clear-status',
                  label: f.intl.string(f.t['22CYiY']),
                  action: () => {
                      o.ZP.updateVoiceChannelStatus(e.id, '');
                  }
              })
            : O && j
              ? (0, r.jsx)(l.sNh, {
                    id: 'set-status',
                    label: f.intl.string(f.t.Mgpxi4),
                    action: () => {
                        (0, l.ZDy)(
                            async () => {
                                let { default: t } = await Promise.resolve().then(n.bind(n, 339340));
                                return (n) =>
                                    (0, r.jsx)(
                                        t,
                                        (function (e) {
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
                                        })({ channel: e }, n)
                                    );
                            },
                            { modalKey: a.a }
                        );
                    }
                })
              : null
        : null;
}
