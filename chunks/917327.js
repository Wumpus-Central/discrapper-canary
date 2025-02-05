i.d(t, { Z: () => x });
var e = i(200651);
i(192379);
var l = i(442837),
    a = i(481060),
    r = i(787014),
    d = i(362721),
    s = i(339340),
    c = i(869768),
    o = i(496675),
    u = i(12498),
    Z = i(981631),
    h = i(388032);
function x(n, t) {
    let x = (0, l.e7)([o.Z], () => o.Z.can(Z.Plq.MANAGE_CHANNELS, t)),
        g = (0, d.ZP)(n),
        v = (0, c.W)(n),
        j = (0, l.e7)([u.Z], () => u.Z.getChannelStatus(n)),
        C = null != j && j.length > 0;
    return n.isGuildVoice() && (x || g)
        ? !v && x && C
            ? (0, e.jsx)(a.sNh, {
                  id: 'clear-status',
                  label: h.intl.string(h.t['22CYiY']),
                  action: () => {
                      r.ZP.updateVoiceChannelStatus(n.id, '');
                  }
              })
            : v && g
              ? (0, e.jsx)(a.sNh, {
                    id: 'set-status',
                    label: h.intl.string(h.t.Mgpxi4),
                    action: () => {
                        (0, a.ZDy)(
                            async () => {
                                let { default: t } = await Promise.resolve().then(i.bind(i, 339340));
                                return (i) =>
                                    (0, e.jsx)(t, {
                                        channel: n,
                                        ...i
                                    });
                            },
                            { modalKey: s.a }
                        );
                    }
                })
              : null
        : null;
}
