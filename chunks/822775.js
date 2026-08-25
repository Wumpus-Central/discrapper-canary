n.d(i, { A: () => E });
var e = n(477900),
    l = n(582128),
    r = n(17928),
    a = n(22231),
    s = n(922016),
    o = n(980707),
    d = n(477782),
    u = n(267102),
    c = n(474397),
    p = n(206835),
    b = n(280450),
    g = n(71393),
    A = n(207803),
    I = n(183555),
    f = n(61881),
    h = n(993401),
    v = n(652215),
    x = n(375708);
function E(t) {
    let { user: i, guildId: n, fullWidth: E, appContext: F, onClose: R } = t,
        k = (0, r.bG)([b.default], () => b.default.getId() === i.id),
        D = (0, r.bG)([g.A], () => (null != n ? g.A.getGuild(n) : null)),
        C = (0, r.bG)([f.A], () => f.A.hasUnsavedChanges()),
        P = (0, u.Us)() === v.BRT.OVERLAY,
        j = (0, p.A)({ guild: D }),
        m = (0, p.A)({}),
        { trackUserProfileAction: _ } = (0, I.NJ)(),
        G = l.useRef(null);
    return k
        ? null == D
            ? (0, e.jsx)(h.FD, {
                  action: "EDIT_PROFILE",
                  text: x.intl.string(x.t.s5vZlQ),
                  icon: a.PencilIcon,
                  autoFocus: !0,
                  fullWidth: E,
                  variant: "primary",
                  onClick: () => {
                      C ? (0, A.VQ)() : (R?.(), m(), (0, c.A)(F));
                  },
                  disabled: P,
              })
            : (0, e.jsx)(s.Y, {
                  targetElementRef: G,
                  align: E ? "center" : void 0,
                  renderPopout: (t) => {
                      let { closePopout: i } = t;
                      return (0, e.jsxs)(o.W, {
                          "data-menu-needs-review": !0,
                          onSelect: void 0,
                          navId: "edit-profile-popout",
                          onClose: i,
                          "aria-label": x.intl.string(x.t.AXIHpV),
                          children: [
                              (0, e.jsx)(d.Dr, {
                                  id: "edit-server-profile",
                                  label: x.intl.string(x.t["PKQB/H"]),
                                  subtext: x.intl.string(x.t.VYHWKJ),
                                  action: () => {
                                      _({ action: "EDIT_GUILD_PROFILE" }), R?.(), j(), (0, c.A)(F);
                                  },
                              }),
                              (0, e.jsx)(d.Dr, {
                                  id: "edit-main-profile",
                                  label: x.intl.string(x.t.HmFaFB),
                                  subtext: x.intl.string(x.t["+EERMk"]),
                                  action: () => {
                                      _({ action: "EDIT_PROFILE" }), R?.(), m(), (0, c.A)(F);
                                  },
                              }),
                          ],
                      });
                  },
                  children: (t) => {
                      let { onClick: i, ...n } = t;
                      return (0, e.jsx)(h.FD, {
                          buttonRef: G,
                          text: x.intl.string(x.t.s5vZlQ),
                          icon: a.PencilIcon,
                          autoFocus: !0,
                          fullWidth: E,
                          variant: "primary",
                          onClick: () => {
                              C ? (0, A.VQ)() : i?.();
                          },
                          ...n,
                          disabled: P,
                      });
                  },
              })
        : null;
}
