n.d(t, { A: () => m });
var r = n(627968),
    l = n(64700),
    i = n(311907),
    a = n(397927),
    s = n(267102),
    o = n(931991),
    c = n(246356),
    u = n(404355),
    d = n(734057),
    f = n(707592),
    p = n(496092),
    h = n(132860),
    b = n(508654),
    g = n(985018);
function m(e) {
    let { channelId: t, onClick: n } = e,
        m = (0, s.Us)(),
        A = (0, b.Qs)(t),
        y = (0, i.bG)([d.A], () => d.A.getChannel(t), [t]),
        { canManageGuildEvent: O } = (0, o.nr)(y),
        j = O(A),
        v = l.useRef(null);
    if (null == A) return null;
    let x = () => {
            null != y && (0, h.A)(y) ? (0, f.Py)(y, m) : n();
        },
        E = () => {
            p.A.endEvent(A.id, A.guild_id);
        };
    return j
        ? (0, r.jsx)(a.YNO, {
              targetElementRef: v,
              renderPopout: (e) => {
                  let { closePopout: t } = e;
                  return (0, r.jsx)(c.A, {
                      children: (0, r.jsx)(a.W1t, {
                          navId: "exit-options",
                          onSelect: () => {},
                          "aria-label": g.intl.string(g.t["K6/mk3"]),
                          onClose: t,
                          children: (0, r.jsx)(a.Drp, {
                              id: "end-voice-event",
                              color: "danger",
                              action: E,
                              label: g.intl.string(g.t.qaYzPA),
                              icon: a.aXh,
                          }),
                      }),
                  });
              },
              align: "center",
              position: "top",
              animation: a.YNO.Animation.FADE,
              children: (e) => {
                  let { onClick: t } = e;
                  return (0, r.jsx)(u.A, {
                      buttonRef: v,
                      label: g.intl.string(g.t["6vrfgt"]),
                      onClick: x,
                      onPopoutClick: t,
                  });
              },
          })
        : (0, r.jsx)(u.A, {
              label: g.intl.string(g.t["6vrfgt"]),
              onClick: n,
          });
}
