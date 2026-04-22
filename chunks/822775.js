"use strict";
i.d(t, { A: () => E });
var n = i(627968),
    r = i(64700),
    a = i(311907),
    l = i(22231),
    s = i(265872),
    o = i(861672),
    c = i(477782),
    d = i(474397),
    u = i(206835),
    _ = i(961350),
    p = i(71393),
    h = i(207803),
    f = i(183555),
    A = i(61881),
    g = i(993401),
    m = i(985018);
function E(e) {
    let { user: t, guildId: i, fullWidth: E, appContext: b, onClose: v } = e,
        I = (0, a.bG)([_.default], () => _.default.getId() === t.id),
        T = (0, a.bG)([p.A], () => (null != i ? p.A.getGuild(i) : null)),
        C = (0, a.bG)([A.A], () => A.A.hasUnsavedChanges()),
        S = (0, u.A)({ guild: T }),
        x = (0, u.A)({}),
        { trackUserProfileAction: y } = (0, f.NJ)(),
        R = r.useRef(null);
    return I
        ? null == T
            ? (0, n.jsx)(g.FD, {
                  action: "EDIT_PROFILE",
                  text: m.intl.string(m.t.s5vZlQ),
                  icon: l.R,
                  autoFocus: !0,
                  fullWidth: E,
                  variant: "primary",
                  onClick: () => {
                      C ? (0, h.VQ)() : (v?.(), x(), (0, d.A)(b));
                  },
              })
            : (0, n.jsx)(s.Y, {
                  targetElementRef: R,
                  renderPopout: (e) => {
                      let { closePopout: t } = e;
                      return (0, n.jsxs)(o.W, {
                          "data-menu-needs-review": !0,
                          onSelect: void 0,
                          navId: "edit-profile-popout",
                          onClose: t,
                          "aria-label": m.intl.string(m.t.AXIHpV),
                          children: [
                              (0, n.jsx)(c.Dr, {
                                  id: "edit-server-profile",
                                  label: m.intl.string(m.t["PKQB/H"]),
                                  subtext: m.intl.string(m.t.VYHWKJ),
                                  action: () => {
                                      y({ action: "EDIT_GUILD_PROFILE" }), v?.(), S(), (0, d.A)(b);
                                  },
                              }),
                              (0, n.jsx)(c.Dr, {
                                  id: "edit-main-profile",
                                  label: m.intl.string(m.t.HmFaFB),
                                  subtext: m.intl.string(m.t["+EERMk"]),
                                  action: () => {
                                      y({ action: "EDIT_PROFILE" }), v?.(), x(), (0, d.A)(b);
                                  },
                              }),
                          ],
                      });
                  },
                  children: (e) => {
                      let { onClick: t, ...i } = e;
                      return (0, n.jsx)(g.FD, {
                          buttonRef: R,
                          text: m.intl.string(m.t.s5vZlQ),
                          icon: l.R,
                          autoFocus: !0,
                          fullWidth: E,
                          variant: "primary",
                          onClick: () => {
                              C ? (0, h.VQ)() : t?.();
                          },
                          ...i,
                      });
                  },
              })
        : null;
}
