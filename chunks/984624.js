n.d(t, {
    A: () => b,
});
var r = n(627968),
    l = n(64700),
    i = n(311907),
    s = n(397927),
    a = n(267102),
    o = n(931991),
    c = n(246356),
    u = n(404355),
    d = n(734057),
    p = n(707592),
    h = n(496092),
    f = n(132860),
    g = n(508654),
    m = n(985018);

function b(e) {
    let { channelId: t, onClick: n } = e,
        b = (0, a.Us)(),
        A = (0, g.Qs)(t),
        y = (0, i.bG)([d.A], () => d.A.getChannel(t), [t]),
        { canManageGuildEvent: _ } = (0, o.nr)(y),
        O = _(A),
        j = l.useRef(null);
    if (null == A) return null;
    let v = () => {
            null != y && (0, f.A)(y) ? (0, p.Py)(y, b) : n();
        },
        x = () => {
            h.A.endEvent(A.id, A.guild_id);
        };
    return O
        ? (0, r.jsx)(s.YNO, {
              targetElementRef: j,
              renderPopout: (e) => {
                  let { closePopout: t } = e;
                  return (0, r.jsx)(c.A, {
                      children: (0, r.jsx)(s.W1t, {
                          "data-menu-migrated": !0,
                          navId: "exit-options",
                          onSelect: () => {},
                          "aria-label": m.intl.string(m.t["K6/mk3"]),
                          onClose: t,
                          children: (0, r.jsx)(s.Drp, {
                              id: "end-voice-event",
                              color: "danger",
                              action: x,
                              label: m.intl.string(m.t.qaYzPA),
                              leadingAccessory: {
                                  type: "icon",
                                  icon: s.aXh,
                              },
                              icon: s.aXh,
                          }),
                      }),
                  });
              },
              align: "center",
              position: "top",
              animation: s.YNO.Animation.FADE,
              children: (e) => {
                  let { onClick: t } = e;
                  return (0, r.jsx)(u.A, {
                      buttonRef: j,
                      label: m.intl.string(m.t["6vrfgt"]),
                      onClick: v,
                      onPopoutClick: t,
                  });
              },
          })
        : (0, r.jsx)(u.A, {
              label: m.intl.string(m.t["6vrfgt"]),
              onClick: n,
          });
}
