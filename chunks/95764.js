n.d(t, { Z: () => b });
var i = n(951288),
    r = n(647438),
    l = n(442837),
    a = n(481060),
    o = n(728285),
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
        y = (0, m.qY)(t),
        C = (0, l.e7)([d.Z], () => d.Z.getChannel(t), [t]),
        { canManageGuildEvent: v } = (0, s.XJ)(C),
        _ = v(y),
        x = r.useRef(null);
    if (null == y) return null;
    let j = () => {
            if (null != C && (0, f.Z)(C)) return void (0, p.lC)(C, b);
            n();
        },
        O = () => {
            h.Z.endEvent(y.id, y.guild_id);
        };
    return _
        ? (0, i.jsx)(a.yRy, {
              targetElementRef: x,
              renderPopout: (e) => {
                  let { closePopout: t } = e;
                  return (0, i.jsx)(c.Z, {
                      children: (0, i.jsx)(a.v2r, {
                          navId: "exit-options",
                          onSelect: () => {},
                          "aria-label": g.intl.string(g.t["K6/mk3"]),
                          onClose: t,
                          children: (0, i.jsx)(a.sNh, {
                              id: "end-voice-event",
                              color: "danger",
                              action: O,
                              label: g.intl.string(g.t.qaYzPA),
                              icon: a.k$p,
                          }),
                      }),
                  });
              },
              align: "center",
              position: "top",
              animation: a.yRy.Animation.FADE,
              children: (e) => {
                  let { onClick: t } = e;
                  return (0, i.jsx)(u.Z, {
                      buttonRef: x,
                      label: g.intl.string(g.t["6vrfgt"]),
                      onClick: j,
                      onPopoutClick: t,
                  });
              },
          })
        : (0, i.jsx)(u.Z, {
              label: g.intl.string(g.t["6vrfgt"]),
              onClick: n,
          });
}
