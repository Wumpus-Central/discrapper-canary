e.d(i, { A: () => E });
var n = e(627968),
    l = e(64700),
    r = e(17928),
    s = e(22231),
    a = e(922016),
    d = e(980707),
    o = e(477782),
    u = e(267102),
    c = e(474397),
    p = e(206835),
    b = e(495544),
    A = e(71393),
    f = e(207803),
    g = e(183555),
    h = e(61881),
    R = e(993401),
    v = e(652215),
    x = e(375708);
function E(t) {
    let { user: i, guildId: e, fullWidth: E, appContext: I, onClose: F } = t,
        k = (0, r.bG)([b.default], () => b.default.getId() === i.id),
        D = (0, r.bG)([A.A], () => (null != e ? A.A.getGuild(e) : null)),
        C = (0, r.bG)([h.A], () => h.A.hasUnsavedChanges()),
        j = (0, u.Us)() === v.BRT.OVERLAY,
        m = (0, p.A)({ guild: D }),
        _ = (0, p.A)({}),
        { trackUserProfileAction: G } = (0, g.NJ)(),
        L = l.useRef(null);
    return k
        ? null == D
            ? (0, n.jsx)(R.FD, {
                  action: "EDIT_PROFILE",
                  text: x.intl.string(x.t.s5vZlQ),
                  icon: s.R,
                  autoFocus: !0,
                  fullWidth: E,
                  variant: "primary",
                  onClick: () => {
                      C ? (0, f.VQ)() : (F?.(), _(), (0, c.A)(I));
                  },
                  disabled: j,
              })
            : (0, n.jsx)(a.Y, {
                  targetElementRef: L,
                  renderPopout: (t) => {
                      let { closePopout: i } = t;
                      return (0, n.jsxs)(d.W, {
                          "data-menu-needs-review": !0,
                          onSelect: void 0,
                          navId: "edit-profile-popout",
                          onClose: i,
                          "aria-label": x.intl.string(x.t.AXIHpV),
                          children: [
                              (0, n.jsx)(o.Dr, {
                                  id: "edit-server-profile",
                                  label: x.intl.string(x.t["PKQB/H"]),
                                  subtext: x.intl.string(x.t.VYHWKJ),
                                  action: () => {
                                      G({ action: "EDIT_GUILD_PROFILE" }), F?.(), m(), (0, c.A)(I);
                                  },
                              }),
                              (0, n.jsx)(o.Dr, {
                                  id: "edit-main-profile",
                                  label: x.intl.string(x.t.HmFaFB),
                                  subtext: x.intl.string(x.t["+EERMk"]),
                                  action: () => {
                                      G({ action: "EDIT_PROFILE" }), F?.(), _(), (0, c.A)(I);
                                  },
                              }),
                          ],
                      });
                  },
                  children: (t) => {
                      let { onClick: i, ...e } = t;
                      return (0, n.jsx)(R.FD, {
                          buttonRef: L,
                          text: x.intl.string(x.t.s5vZlQ),
                          icon: s.R,
                          autoFocus: !0,
                          fullWidth: E,
                          variant: "primary",
                          onClick: () => {
                              C ? (0, f.VQ)() : i?.();
                          },
                          ...e,
                          disabled: j,
                      });
                  },
              })
        : null;
}
