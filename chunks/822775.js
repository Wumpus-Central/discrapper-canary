"use strict";
n.d(t, { A: () => m });
var r = n(627968),
    i = n(64700),
    s = n(311907),
    a = n(397927),
    o = n(474397),
    l = n(206835),
    u = n(961350),
    c = n(71393),
    d = n(207803),
    _ = n(183555),
    f = n(61881),
    p = n(993401),
    h = n(985018);
function m(e) {
    let { user: t, guildId: n, fullWidth: m, appContext: E, onClose: g } = e,
        A = (0, s.bG)([u.default], () => u.default.getId() === t.id),
        I = (0, s.bG)([c.A], () => (null != n ? c.A.getGuild(n) : null)),
        T = (0, s.bG)([f.A], () => f.A.hasUnsavedChanges()),
        S = (0, l.A)({ guild: I }),
        y = (0, l.A)({}),
        { trackUserProfileAction: v } = (0, _.NJ)(),
        N = i.useRef(null);
    return A
        ? null == I
            ? (0, r.jsx)(p.FD, {
                  action: "EDIT_PROFILE",
                  text: h.intl.string(h.t.s5vZlQ),
                  icon: a.R2l,
                  autoFocus: !0,
                  fullWidth: m,
                  variant: "primary",
                  onClick: () => {
                      T ? (0, d.VQ)() : (g?.(), y(), (0, o.A)(E));
                  },
              })
            : (0, r.jsx)(a.YNO, {
                  targetElementRef: N,
                  renderPopout: (e) => {
                      let { closePopout: t } = e;
                      return (0, r.jsxs)(a.W1t, {
                          "data-menu-needs-review": !0,
                          onSelect: void 0,
                          navId: "edit-profile-popout",
                          onClose: t,
                          "aria-label": h.intl.string(h.t.AXIHpV),
                          children: [
                              (0, r.jsx)(a.Drp, {
                                  id: "edit-server-profile",
                                  label: h.intl.string(h.t["PKQB/H"]),
                                  subtext: h.intl.string(h.t.VYHWKJ),
                                  action: () => {
                                      v({ action: "EDIT_GUILD_PROFILE" }), g?.(), S(), (0, o.A)(E);
                                  },
                              }),
                              (0, r.jsx)(a.Drp, {
                                  id: "edit-main-profile",
                                  label: h.intl.string(h.t.HmFaFB),
                                  subtext: h.intl.string(h.t["+EERMk"]),
                                  action: () => {
                                      v({ action: "EDIT_PROFILE" }), g?.(), y(), (0, o.A)(E);
                                  },
                              }),
                          ],
                      });
                  },
                  children: (e) => {
                      let { onClick: t, ...n } = e;
                      return (0, r.jsx)(p.FD, {
                          buttonRef: N,
                          text: h.intl.string(h.t.s5vZlQ),
                          icon: a.R2l,
                          autoFocus: !0,
                          fullWidth: m,
                          variant: "primary",
                          onClick: () => {
                              T ? (0, d.VQ)() : t?.();
                          },
                          ...n,
                      });
                  },
              })
        : null;
}
