t.d(n, { A: () => v });
var l = t(627968),
    i = t(64700),
    a = t(311907),
    s = t(265872),
    r = t(861672),
    o = t(477782),
    c = t(285796),
    u = t(267102),
    d = t(931991),
    A = t(246356),
    h = t(404355),
    p = t(734057),
    m = t(707592),
    g = t(496092),
    f = t(132860),
    C = t(508654),
    E = t(985018);
function v(e) {
    let { channelId: n, onClick: t } = e,
        v = (0, u.Us)(),
        I = (0, C.Qs)(n),
        x = (0, a.bG)([p.A], () => p.A.getChannel(n), [n]),
        { canManageGuildEvent: T } = (0, d.nr)(x),
        _ = T(I),
        j = i.useRef(null);
    if (null == I) return null;
    let N = () => {
            null != x && (0, f.A)(x) ? (0, m.Py)(x, v) : t();
        },
        b = () => {
            g.A.endEvent(I.id, I.guild_id);
        };
    return _
        ? (0, l.jsx)(s.Y, {
              targetElementRef: j,
              renderPopout: (e) => {
                  let { closePopout: n } = e;
                  return (0, l.jsx)(A.A, {
                      children: (0, l.jsx)(r.W, {
                          "data-menu-migrated": !0,
                          navId: "exit-options",
                          onSelect: () => {},
                          "aria-label": E.intl.string(E.t["K6/mk3"]),
                          onClose: n,
                          children: (0, l.jsx)(o.Dr, {
                              id: "end-voice-event",
                              color: "danger",
                              action: b,
                              label: E.intl.string(E.t.qaYzPA),
                              leadingAccessory: { type: "icon", icon: c.a },
                              icon: c.a,
                          }),
                      }),
                  });
              },
              align: "center",
              position: "top",
              animation: s.Y.Animation.FADE,
              children: (e) => {
                  let { onClick: n } = e;
                  return (0, l.jsx)(h.A, {
                      buttonRef: j,
                      label: E.intl.string(E.t["6vrfgt"]),
                      onClick: N,
                      onPopoutClick: n,
                  });
              },
          })
        : (0, l.jsx)(h.A, { label: E.intl.string(E.t["6vrfgt"]), onClick: t });
}
