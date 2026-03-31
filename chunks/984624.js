n.d(t, { A: () => p });
var i = n(627968),
    l = n(64700),
    s = n(311907),
    a = n(397927),
    r = n(267102),
    o = n(931991),
    c = n(246356),
    d = n(404355),
    u = n(734057),
    h = n(707592),
    A = n(496092),
    _ = n(132860),
    m = n(508654),
    g = n(985018);
function p(e) {
    let { channelId: t, onClick: n } = e,
        p = (0, r.Us)(),
        f = (0, m.Qs)(t),
        x = (0, s.bG)([u.A], () => u.A.getChannel(t), [t]),
        { canManageGuildEvent: E } = (0, o.nr)(x),
        I = E(f),
        C = l.useRef(null);
    if (null == f) return null;
    let N = () => {
            null != x && (0, _.A)(x) ? (0, h.Py)(x, p) : n();
        },
        T = () => {
            A.A.endEvent(f.id, f.guild_id);
        };
    return I
        ? (0, i.jsx)(a.YNO, {
              targetElementRef: C,
              renderPopout: (e) => {
                  let { closePopout: t } = e;
                  return (0, i.jsx)(c.A, {
                      children: (0, i.jsx)(a.W1t, {
                          "data-menu-migrated": !0,
                          navId: "exit-options",
                          onSelect: () => {},
                          "aria-label": g.intl.string(g.t["K6/mk3"]),
                          onClose: t,
                          children: (0, i.jsx)(a.Drp, {
                              id: "end-voice-event",
                              color: "danger",
                              action: T,
                              label: g.intl.string(g.t.qaYzPA),
                              leadingAccessory: { type: "icon", icon: a.aXh },
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
                  return (0, i.jsx)(d.A, {
                      buttonRef: C,
                      label: g.intl.string(g.t["6vrfgt"]),
                      onClick: N,
                      onPopoutClick: t,
                  });
              },
          })
        : (0, i.jsx)(d.A, { label: g.intl.string(g.t["6vrfgt"]), onClick: n });
}
