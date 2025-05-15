n.d(t, { Z: () => b });
var r = n(255367),
    i = n(73800),
    l = n(442837),
    a = n(481060),
    o = n(40851),
    s = n(357156),
    c = n(390322),
    u = n(88479),
    d = n(592125),
    p = n(15274),
    h = n(482241),
    f = n(389303),
    m = n(554747),
    g = n(388032);
function b(e) {
    let { channelId: t, onClick: n } = e,
        b = (0, o.bp)(),
        _ = (0, m.qY)(t),
        C = (0, l.e7)([d.Z], () => d.Z.getChannel(t), [t]),
        { canManageGuildEvent: x } = (0, s.XJ)(C),
        y = x(_),
        v = i.useRef(null);
    if (null == _) return null;
    let j = () => {
            if (null != C && (0, f.Z)(C)) return void (0, p.lC)(C, b);
            n();
        },
        O = () => {
            h.Z.endEvent(_.id, _.guild_id);
        };
    return y
        ? (0, r.jsx)(a.yRy, {
              targetElementRef: v,
              renderPopout: (e) => {
                  let { closePopout: t } = e;
                  return (0, r.jsx)(c.Z, {
                      children: (0, r.jsx)(a.v2r, {
                          navId: 'exit-options',
                          onSelect: () => {},
                          'aria-label': g.intl.string(g.t['K6/mk5']),
                          onClose: t,
                          children: (0, r.jsx)(a.sNh, {
                              id: 'end-voice-event',
                              color: 'danger',
                              action: O,
                              label: g.intl.string(g.t.qaYzPD),
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
                      ref: v,
                      label: g.intl.string(g.t['6vrfgo']),
                      onClick: j,
                      onPopoutClick: t
                  });
              }
          })
        : (0, r.jsx)(u.Z, {
              label: g.intl.string(g.t['6vrfgo']),
              onClick: n
          });
}
