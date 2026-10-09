t.d(n, { A: () => E });
var i = t(477900),
    l = t(582128),
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
    g = t(707592),
    x = t(496092),
    C = t(132860),
    f = t(508654),
    p = t(660183);
function E(e) {
    let { channelId: n, onClick: t } = e,
        E = (0, u.Us)(),
        j = (0, f.Qs)(n),
        v = (0, s.bG)([m.A], () => m.A.getChannel(n), [n]),
        { canManageGuildEvent: I } = (0, d.nr)(v),
        N = I(j),
        T = l.useRef(null);
    if (null == j) return null;
    function _() {
        null != v && (0, C.A)(v) ? (0, g.Py)(v, E) : t();
    }
    function b() {
        null != j && x.default.endEvent(j.id, j.guild_id);
    }
    return N
        ? (0, i.jsx)(a.Y, {
              targetElementRef: T,
              renderPopout: (e) => {
                  let { closePopout: n } = e;
                  return (0, i.jsx)(A.A, {
                      children: (0, i.jsx)(r.W, {
                          "data-menu-migrated": !0,
                          navId: "exit-options",
                          onSelect: () => {},
                          "aria-label": p.intl.string(p.t["K6/mk3"]),
                          onClose: n,
                          children: (0, i.jsx)(o.Dr, {
                              id: "end-voice-event",
                              color: "danger",
                              action: b,
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
                  let { onClick: n } = e;
                  return (0, i.jsx)(h.A, {
                      buttonRef: T,
                      label: p.intl.string(p.t["6vrfgt"]),
                      onClick: _,
                      onPopoutClick: n,
                  });
              },
          })
        : (0, i.jsx)(h.A, { label: p.intl.string(p.t["6vrfgt"]), onClick: t });
}
