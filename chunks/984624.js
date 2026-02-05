n.d(t, { A: () => _ });
var i = n(627968),
    l = n(64700),
    s = n(311907),
    a = n(397927),
    r = n(267102),
    o = n(931991),
    d = n(246356),
    c = n(404355),
    u = n(734057),
    h = n(707592),
    A = n(496092),
    g = n(132860),
    m = n(508654),
    p = n(985018);
function _(e) {
    let { channelId: t, onClick: n } = e,
        _ = (0, r.Us)(),
        x = (0, m.Qs)(t),
        f = (0, s.bG)([u.A], () => u.A.getChannel(t), [t]),
        { canManageGuildEvent: E } = (0, o.nr)(f),
        C = E(x),
        I = l.useRef(null);
    if (null == x) return null;
    let S = () => {
            null != f && (0, g.A)(f) ? (0, h.Py)(f, _) : n();
        },
        b = () => {
            A.A.endEvent(x.id, x.guild_id);
        };
    return C
        ? (0, i.jsx)(a.YNO, {
              targetElementRef: I,
              renderPopout: (e) => {
                  let { closePopout: t } = e;
                  return (0, i.jsx)(d.A, {
                      children: (0, i.jsx)(a.W1t, {
                          "data-menu-migrated": !0,
                          navId: "exit-options",
                          onSelect: () => {},
                          "aria-label": p.intl.string(p.t["K6/mk3"]),
                          onClose: t,
                          children: (0, i.jsx)(a.Drp, {
                              id: "end-voice-event",
                              color: "danger",
                              action: b,
                              label: p.intl.string(p.t.qaYzPA),
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
                  return (0, i.jsx)(c.A, {
                      buttonRef: I,
                      label: p.intl.string(p.t["6vrfgt"]),
                      onClick: S,
                      onPopoutClick: t,
                  });
              },
          })
        : (0, i.jsx)(c.A, { label: p.intl.string(p.t["6vrfgt"]), onClick: n });
}
