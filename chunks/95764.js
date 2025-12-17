n.d(t, { Z: () => b });
var i = n(54381),
    r = n(473749),
    l = n(442837),
    a = n(481060),
    o = n(728285),
    s = n(357156),
    c = n(390322),
    u = n(88479),
    d = n(592125),
    p = n(15274),
    f = n(482241),
    h = n(389303),
    m = n(554747),
    g = n(388032);
function b(e) {
    let { channelId: t, onClick: n } = e,
        b = (0, o.bp)(),
        C = (0, m.qY)(t),
        y = (0, l.e7)([d.Z], () => d.Z.getChannel(t), [t]),
        { canManageGuildEvent: v } = (0, s.XJ)(y),
        x = v(C),
        O = r.useRef(null);
    if (null == C) return null;
    let E = () => {
            if (null != y && (0, h.Z)(y)) return void (0, p.lC)(y, b);
            n();
        },
        j = () => {
            f.Z.endEvent(C.id, C.guild_id);
        };
    return x
        ? (0, i.jsx)(a.yRy, {
              targetElementRef: O,
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
                              action: j,
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
                      buttonRef: O,
                      label: g.intl.string(g.t["6vrfgt"]),
                      onClick: E,
                      onPopoutClick: t,
                  });
              },
          })
        : (0, i.jsx)(u.Z, {
              label: g.intl.string(g.t["6vrfgt"]),
              onClick: n,
          });
}
