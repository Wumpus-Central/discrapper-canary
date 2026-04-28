n.d(t, { A: () => x });
var l = n(627968),
    i = n(64700),
    s = n(17928),
    a = n(922016),
    r = n(550079),
    o = n(477782),
    c = n(285796),
    u = n(267102),
    d = n(931991),
    A = n(246356),
    E = n(404355),
    m = n(734057),
    h = n(707592),
    C = n(496092),
    g = n(132860),
    I = n(508654),
    p = n(985018);
function x(e) {
    let { channelId: t, onClick: n } = e,
        x = (0, u.Us)(),
        T = (0, I.Qs)(t),
        _ = (0, s.bG)([m.A], () => m.A.getChannel(t), [t]),
        { canManageGuildEvent: v } = (0, d.nr)(_),
        N = v(T),
        f = i.useRef(null);
    if (null == T) return null;
    let j = () => {
            null != _ && (0, g.A)(_) ? (0, h.Py)(_, x) : n();
        },
        S = () => {
            C.A.endEvent(T.id, T.guild_id);
        };
    return N
        ? (0, l.jsx)(a.Y, {
              targetElementRef: f,
              renderPopout: (e) => {
                  let { closePopout: t } = e;
                  return (0, l.jsx)(A.A, {
                      children: (0, l.jsx)(r.W, {
                          "data-menu-migrated": !0,
                          navId: "exit-options",
                          onSelect: () => {},
                          "aria-label": p.intl.string(p.t["K6/mk3"]),
                          onClose: t,
                          children: (0, l.jsx)(o.Dr, {
                              id: "end-voice-event",
                              color: "danger",
                              action: S,
                              label: p.intl.string(p.t.qaYzPA),
                              leadingAccessory: { type: "icon", icon: c.a },
                              icon: c.a,
                          }),
                      }),
                  });
              },
              align: "center",
              position: "top",
              animation: a.Y.Animation.FADE,
              children: (e) => {
                  let { onClick: t } = e;
                  return (0, l.jsx)(E.A, {
                      buttonRef: f,
                      label: p.intl.string(p.t["6vrfgt"]),
                      onClick: j,
                      onPopoutClick: t,
                  });
              },
          })
        : (0, l.jsx)(E.A, { label: p.intl.string(p.t["6vrfgt"]), onClick: n });
}
