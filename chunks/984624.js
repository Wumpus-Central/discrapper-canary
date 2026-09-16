t.d(n, { A: () => E });
var i = t(477900),
    l = t(582128),
    a = t(17928),
    s = t(922016),
    o = t(980707),
    r = t(477782),
    c = t(285796),
    u = t(267102),
    d = t(931991),
    A = t(246356),
    m = t(404355),
    h = t(734057),
    C = t(707592),
    p = t(496092),
    x = t(132860),
    g = t(508654),
    f = t(375708);
function E(e) {
    let { channelId: n, onClick: t } = e,
        E = (0, u.Us)(),
        I = (0, g.Qs)(n),
        v = (0, a.bG)([h.A], () => h.A.getChannel(n), [n]),
        { canManageGuildEvent: T } = (0, d.nr)(v),
        j = T(I),
        N = l.useRef(null);
    if (null == I) return null;
    function _() {
        null != v && (0, x.A)(v) ? (0, C.Py)(v, E) : t();
    }
    function O() {
        null != I && p.default.endEvent(I.id, I.guild_id);
    }
    return j
        ? (0, i.jsx)(s.Y, {
              targetElementRef: N,
              renderPopout: (e) => {
                  let { closePopout: n } = e;
                  return (0, i.jsx)(A.A, {
                      children: (0, i.jsx)(o.W, {
                          "data-menu-migrated": !0,
                          navId: "exit-options",
                          onSelect: () => {},
                          "aria-label": f.intl.string(f.t["K6/mk3"]),
                          onClose: n,
                          children: (0, i.jsx)(r.Dr, {
                              id: "end-voice-event",
                              color: "danger",
                              action: O,
                              label: f.intl.string(f.t.qaYzPA),
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
                  return (0, i.jsx)(m.A, {
                      buttonRef: N,
                      label: f.intl.string(f.t["6vrfgt"]),
                      onClick: _,
                      onPopoutClick: n,
                  });
              },
          })
        : (0, i.jsx)(m.A, { label: f.intl.string(f.t["6vrfgt"]), onClick: t });
}
