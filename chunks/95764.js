n.d(t, { Z: () => g });
var r = n(200651);
n(192379);
var i = n(442837),
    l = n(481060),
    o = n(40851),
    a = n(357156),
    s = n(390322),
    c = n(88479),
    u = n(592125),
    d = n(15274),
    p = n(482241),
    h = n(389303),
    f = n(554747),
    m = n(388032);
function g(e) {
    let { channelId: t, onClick: n } = e,
        g = (0, o.bp)(),
        b = (0, f.qY)(t),
        _ = (0, i.e7)([u.Z], () => u.Z.getChannel(t), [t]),
        { canManageGuildEvent: C } = (0, a.XJ)(_),
        y = C(b);
    if (null == b) return null;
    let x = () => {
            if (null != _ && (0, h.Z)(_)) return void (0, d.lC)(_, g);
            n();
        },
        v = () => {
            p.Z.endEvent(b.id, b.guild_id);
        };
    return y
        ? (0, r.jsx)(l.yRy, {
              renderPopout: (e) => {
                  let { closePopout: t } = e;
                  return (0, r.jsx)(s.Z, {
                      children: (0, r.jsx)(l.v2r, {
                          navId: 'exit-options',
                          onSelect: () => {},
                          'aria-label': m.NW.string(m.t['K6/mk5']),
                          onClose: t,
                          children: (0, r.jsx)(l.sNh, {
                              id: 'end-voice-event',
                              color: 'danger',
                              action: v,
                              label: m.NW.string(m.t.qaYzPD),
                              icon: l.k$p
                          })
                      })
                  });
              },
              align: 'center',
              position: 'top',
              animation: l.yRy.Animation.FADE,
              children: (e) => {
                  let { onClick: t } = e;
                  return (0, r.jsx)(c.Z, {
                      label: m.NW.string(m.t['6vrfgo']),
                      onClick: x,
                      onPopoutClick: t
                  });
              }
          })
        : (0, r.jsx)(c.Z, {
              label: m.NW.string(m.t['6vrfgo']),
              onClick: n
          });
}
