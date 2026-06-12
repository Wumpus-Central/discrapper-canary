i.d(n, { A: () => x });
var l = i(627968),
    e = i(64700),
    r = i(17928),
    a = i(22231),
    s = i(922016),
    o = i(980707),
    u = i(477782),
    d = i(474397),
    c = i(206835),
    p = i(495544),
    g = i(71393),
    f = i(207803),
    v = i(183555),
    A = i(61881),
    b = i(993401),
    h = i(375708);
function x(t) {
    let { user: n, guildId: i, fullWidth: x, appContext: I, onClose: E } = t,
        F = (0, r.bG)([p.default], () => p.default.getId() === n.id),
        R = (0, r.bG)([g.A], () => (null != i ? g.A.getGuild(i) : null)),
        j = (0, r.bG)([A.A], () => A.A.hasUnsavedChanges()),
        k = (0, c.A)({ guild: R }),
        m = (0, c.A)({}),
        { trackUserProfileAction: D } = (0, v.NJ)(),
        C = e.useRef(null);
    return F
        ? null == R
            ? (0, l.jsx)(b.FD, {
                  action: "EDIT_PROFILE",
                  text: h.intl.string(h.t.s5vZlQ),
                  icon: a.R,
                  autoFocus: !0,
                  fullWidth: x,
                  variant: "primary",
                  onClick: () => {
                      j ? (0, f.VQ)() : (E?.(), m(), (0, d.A)(I));
                  },
              })
            : (0, l.jsx)(s.Y, {
                  targetElementRef: C,
                  renderPopout: (t) => {
                      let { closePopout: n } = t;
                      return (0, l.jsxs)(o.W, {
                          "data-menu-needs-review": !0,
                          onSelect: void 0,
                          navId: "edit-profile-popout",
                          onClose: n,
                          "aria-label": h.intl.string(h.t.AXIHpV),
                          children: [
                              (0, l.jsx)(u.Dr, {
                                  id: "edit-server-profile",
                                  label: h.intl.string(h.t["PKQB/H"]),
                                  subtext: h.intl.string(h.t.VYHWKJ),
                                  action: () => {
                                      D({ action: "EDIT_GUILD_PROFILE" }), E?.(), k(), (0, d.A)(I);
                                  },
                              }),
                              (0, l.jsx)(u.Dr, {
                                  id: "edit-main-profile",
                                  label: h.intl.string(h.t.HmFaFB),
                                  subtext: h.intl.string(h.t["+EERMk"]),
                                  action: () => {
                                      D({ action: "EDIT_PROFILE" }), E?.(), m(), (0, d.A)(I);
                                  },
                              }),
                          ],
                      });
                  },
                  children: (t) => {
                      let { onClick: n, ...i } = t;
                      return (0, l.jsx)(b.FD, {
                          buttonRef: C,
                          text: h.intl.string(h.t.s5vZlQ),
                          icon: a.R,
                          autoFocus: !0,
                          fullWidth: x,
                          variant: "primary",
                          onClick: () => {
                              j ? (0, f.VQ)() : n?.();
                          },
                          ...i,
                      });
                  },
              })
        : null;
}
