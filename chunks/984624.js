t.d(n, { A: () => x });
var l = t(477900),
    i = t(582128),
    s = t(17928),
    a = t(922016),
    r = t(980707),
    o = t(477782),
    c = t(285796),
    u = t(267102),
    d = t(931991),
    A = t(246356),
    m = t(404355),
    h = t(734057),
    C = t(707592),
    E = t(496092),
    p = t(132860),
    g = t(508654),
    f = t(375708);
function x(e) {
    let { channelId: n, onClick: t } = e,
        x = (0, u.Us)(),
        I = (0, g.Qs)(n),
        T = (0, s.bG)([h.A], () => h.A.getChannel(n), [n]),
        { canManageGuildEvent: v } = (0, d.nr)(T),
        _ = v(I),
        j = i.useRef(null);
    if (null == I) return null;
    function N() {
        null != T && (0, p.A)(T) ? (0, C.Py)(T, x) : t();
    }
    function b() {
        null != I && E.default.endEvent(I.id, I.guild_id);
    }
    return _
        ? (0, l.jsx)(a.Y, {
              targetElementRef: j,
              renderPopout: (e) => {
                  let { closePopout: n } = e;
                  return (0, l.jsx)(A.A, {
                      children: (0, l.jsx)(r.W, {
                          "data-menu-migrated": !0,
                          navId: "exit-options",
                          onSelect: () => {},
                          "aria-label": f.intl.string(f.t["K6/mk3"]),
                          onClose: n,
                          children: (0, l.jsx)(o.Dr, {
                              id: "end-voice-event",
                              color: "danger",
                              action: b,
                              label: f.intl.string(f.t.qaYzPA),
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
                  let { onClick: n } = e;
                  return (0, l.jsx)(m.A, {
                      buttonRef: j,
                      label: f.intl.string(f.t["6vrfgt"]),
                      onClick: N,
                      onPopoutClick: n,
                  });
              },
          })
        : (0, l.jsx)(m.A, { label: f.intl.string(f.t["6vrfgt"]), onClick: t });
}
