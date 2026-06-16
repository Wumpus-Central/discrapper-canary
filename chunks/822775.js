n.d(i, { A: () => x });
var e = n(627968),
    l = n(64700),
    r = n(17928),
    a = n(22231),
    s = n(922016),
    o = n(980707),
    u = n(477782),
    d = n(474397),
    c = n(206835),
    p = n(495544),
    b = n(71393),
    f = n(207803),
    g = n(183555),
    h = n(61881),
    A = n(993401),
    v = n(375708);
function x(t) {
    let { user: i, guildId: n, fullWidth: x, appContext: I, onClose: E } = t,
        F = (0, r.bG)([p.default], () => p.default.getId() === i.id),
        R = (0, r.bG)([b.A], () => (null != n ? b.A.getGuild(n) : null)),
        k = (0, r.bG)([h.A], () => h.A.hasUnsavedChanges()),
        D = (0, c.A)({ guild: R }),
        C = (0, c.A)({}),
        { trackUserProfileAction: j } = (0, g.NJ)(),
        m = l.useRef(null);
    return F
        ? null == R
            ? (0, e.jsx)(A.FD, {
                  action: "EDIT_PROFILE",
                  text: v.intl.string(v.t.s5vZlQ),
                  icon: a.R,
                  autoFocus: !0,
                  fullWidth: x,
                  variant: "primary",
                  onClick: () => {
                      k ? (0, f.VQ)() : (E?.(), C(), (0, d.A)(I));
                  },
              })
            : (0, e.jsx)(s.Y, {
                  targetElementRef: m,
                  renderPopout: (t) => {
                      let { closePopout: i } = t;
                      return (0, e.jsxs)(o.W, {
                          "data-menu-needs-review": !0,
                          onSelect: void 0,
                          navId: "edit-profile-popout",
                          onClose: i,
                          "aria-label": v.intl.string(v.t.AXIHpV),
                          children: [
                              (0, e.jsx)(u.Dr, {
                                  id: "edit-server-profile",
                                  label: v.intl.string(v.t["PKQB/H"]),
                                  subtext: v.intl.string(v.t.VYHWKJ),
                                  action: () => {
                                      j({ action: "EDIT_GUILD_PROFILE" }), E?.(), D(), (0, d.A)(I);
                                  },
                              }),
                              (0, e.jsx)(u.Dr, {
                                  id: "edit-main-profile",
                                  label: v.intl.string(v.t.HmFaFB),
                                  subtext: v.intl.string(v.t["+EERMk"]),
                                  action: () => {
                                      j({ action: "EDIT_PROFILE" }), E?.(), C(), (0, d.A)(I);
                                  },
                              }),
                          ],
                      });
                  },
                  children: (t) => {
                      let { onClick: i, ...n } = t;
                      return (0, e.jsx)(A.FD, {
                          buttonRef: m,
                          text: v.intl.string(v.t.s5vZlQ),
                          icon: a.R,
                          autoFocus: !0,
                          fullWidth: x,
                          variant: "primary",
                          onClick: () => {
                              k ? (0, f.VQ)() : i?.();
                          },
                          ...n,
                      });
                  },
              })
        : null;
}
