t.d(n, { A: () => x });
var l = t(477900),
    i = t(582128),
    a = t(17928),
    s = t(922016),
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
    f = t(132860),
    p = t(508654),
    g = t(375708);
function x(e) {
    let { channelId: n, onClick: t } = e,
        x = (0, u.Us)(),
        I = (0, p.Qs)(n),
        v = (0, a.bG)([h.A], () => h.A.getChannel(n), [n]),
        { canManageGuildEvent: T } = (0, d.nr)(v),
        _ = T(I),
        N = i.useRef(null);
    if (null == I) return null;
    function j() {
        null != v && (0, f.A)(v) ? (0, C.Py)(v, x) : t();
    }
    function b() {
        null != I && E.default.endEvent(I.id, I.guild_id);
    }
    return _
        ? (0, l.jsx)(s.Y, {
              targetElementRef: N,
              renderPopout: (e) => {
                  let { closePopout: n } = e;
                  return (0, l.jsx)(A.A, {
                      children: (0, l.jsx)(r.W, {
                          "data-menu-migrated": !0,
                          navId: "exit-options",
                          onSelect: () => {},
                          "aria-label": g.intl.string(g.t["K6/mk3"]),
                          onClose: n,
                          children: (0, l.jsx)(o.Dr, {
                              id: "end-voice-event",
                              color: "danger",
                              action: b,
                              label: g.intl.string(g.t.qaYzPA),
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
                  return (0, l.jsx)(m.A, {
                      buttonRef: N,
                      label: g.intl.string(g.t["6vrfgt"]),
                      onClick: j,
                      onPopoutClick: n,
                  });
              },
          })
        : (0, l.jsx)(m.A, { label: g.intl.string(g.t["6vrfgt"]), onClick: t });
}
