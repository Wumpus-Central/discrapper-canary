n.d(t, { Z: () => g });
var i = n(200651);
n(192379);
var l = n(442837),
    a = n(481060),
    r = n(40851),
    s = n(357156),
    o = n(390322),
    c = n(88479),
    d = n(592125),
    u = n(15274),
    h = n(482241),
    p = n(389303),
    m = n(554747),
    f = n(388032);
function g(e) {
    let { channelId: t, onClick: n } = e,
        g = (0, r.bp)(),
        _ = (0, m.qY)(t),
        C = (0, l.e7)([d.Z], () => d.Z.getChannel(t), [t]),
        { canManageGuildEvent: x } = (0, s.XJ)(C),
        v = x(_);
    if (null == _) return null;
    let E = () => {
            if (null != C && (0, p.Z)(C)) {
                (0, u.lC)(C, g);
                return;
            }
            n();
        },
        I = () => {
            h.Z.endEvent(_.id, _.guild_id);
        };
    return v
        ? (0, i.jsx)(a.yRy, {
              renderPopout: (e) => {
                  let { closePopout: t } = e;
                  return (0, i.jsx)(o.Z, {
                      children: (0, i.jsx)(a.v2r, {
                          navId: 'exit-options',
                          onSelect: () => {},
                          'aria-label': f.intl.string(f.t['K6/mk5']),
                          onClose: t,
                          children: (0, i.jsx)(a.sNh, {
                              id: 'end-voice-event',
                              color: 'danger',
                              action: I,
                              label: f.intl.string(f.t.qaYzPD),
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
                  return (0, i.jsx)(c.Z, {
                      label: f.intl.string(f.t['6vrfgo']),
                      onClick: E,
                      onPopoutClick: t
                  });
              }
          })
        : (0, i.jsx)(c.Z, {
              label: f.intl.string(f.t['6vrfgo']),
              onClick: n
          });
}
