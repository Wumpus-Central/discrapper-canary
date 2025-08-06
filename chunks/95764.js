n.d(t, { Z: () => g });
var r = n(255367),
    i = n(73800),
    o = n(442837),
    a = n(481060),
    s = n(40851),
    l = n(357156),
    c = n(390322),
    u = n(88479),
    d = n(592125),
    f = n(15274),
    _ = n(482241),
    p = n(389303),
    h = n(554747),
    m = n(388032);
function g(e) {
    let { channelId: t, onClick: n } = e,
        g = (0, s.bp)(),
        E = (0, h.qY)(t),
        b = (0, o.e7)([d.Z], () => d.Z.getChannel(t), [t]),
        { canManageGuildEvent: y } = (0, l.XJ)(b),
        O = y(E),
        v = i.useRef(null);
    if (null == E) return null;
    let I = () => {
            if (null != b && (0, p.Z)(b)) return void (0, f.lC)(b, g);
            n();
        },
        T = () => {
            _.Z.endEvent(E.id, E.guild_id);
        };
    return O
        ? (0, r.jsx)(a.yRy, {
              targetElementRef: v,
              renderPopout: (e) => {
                  let { closePopout: t } = e;
                  return (0, r.jsx)(c.Z, {
                      children: (0, r.jsx)(a.v2r, {
                          navId: 'exit-options',
                          onSelect: () => {},
                          'aria-label': m.intl.string(m.t['K6/mk5']),
                          onClose: t,
                          children: (0, r.jsx)(a.sNh, {
                              id: 'end-voice-event',
                              color: 'danger',
                              action: T,
                              label: m.intl.string(m.t.qaYzPD),
                              icon: a.k$p
                          })
                      })
                  });
              },
              align: 'center',
              position: 'top',
              animation: a.yRy.Animation.FADE,
              children: (e) => {
                  let { onClick: t } = e;
                  return (0, r.jsx)(u.Z, {
                      buttonRef: v,
                      label: m.intl.string(m.t['6vrfgo']),
                      onClick: I,
                      onPopoutClick: t
                  });
              }
          })
        : (0, r.jsx)(u.Z, {
              label: m.intl.string(m.t['6vrfgo']),
              onClick: n
          });
}
