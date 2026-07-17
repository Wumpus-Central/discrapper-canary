t.d(n, { A: () => f });
var l = t(627968),
    i = t(64700),
    s = t(17928),
    a = t(922016),
    r = t(980707),
    o = t(477782),
    c = t(285796),
    u = t(267102),
    d = t(931991),
    A = t(246356),
    h = t(404355),
    m = t(734057),
    C = t(707592),
    E = t(496092),
    p = t(132860),
    x = t(508654),
    g = t(375708);
function f(e) {
    let { channelId: n, onClick: t } = e,
        f = (0, u.Us)(),
        I = (0, x.Qs)(n),
        v = (0, s.bG)([m.A], () => m.A.getChannel(n), [n]),
        { canManageGuildEvent: T } = (0, d.nr)(v),
        j = T(I),
        _ = i.useRef(null);
    if (null == I) return null;
    function N() {
        null != v && (0, p.A)(v) ? (0, C.Py)(v, f) : t();
    }
    function O() {
        null != I && E.default.endEvent(I.id, I.guild_id);
    }
    return j
        ? (0, l.jsx)(a.Y, {
              targetElementRef: _,
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
                              action: O,
                              label: g.intl.string(g.t.qaYzPA),
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
                  return (0, l.jsx)(h.A, {
                      buttonRef: _,
                      label: g.intl.string(g.t["6vrfgt"]),
                      onClick: N,
                      onPopoutClick: n,
                  });
              },
          })
        : (0, l.jsx)(h.A, { label: g.intl.string(g.t["6vrfgt"]), onClick: t });
}
