"use strict";
n.d(t, { A: () => m });
var r = n(627968),
    i = n(64700),
    a = n(311907),
    s = n(397927),
    o = n(474397),
    l = n(206835),
    u = n(961350),
    c = n(71393),
    d = n(183555),
    _ = n(958805),
    f = n(61881),
    p = n(993401),
    h = n(985018);
function m(e) {
    let { user: t, guildId: n, fullWidth: m, appContext: g, onClose: E } = e,
        A = (0, a.bG)([u.default], () => u.default.getId() === t.id),
        I = (0, a.bG)([c.A], () => (null != n ? c.A.getGuild(n) : null)),
        T = (0, a.bG)([f.A], () => f.A.hasUnsavedChanges()),
        y = (0, l.A)({ guild: I }),
        S = (0, l.A)({}),
        { trackUserProfileAction: v } = (0, d.NJ)(),
        C = i.useRef(null);
    return A
        ? null == I
            ? (0, r.jsx)(p.FD, {
                  action: "EDIT_PROFILE",
                  text: h.intl.string(h.t.s5vZlQ),
                  icon: s.R2l,
                  autoFocus: !0,
                  fullWidth: m,
                  variant: "primary",
                  onClick: () => {
                      T ? _.A.notifyUnsavedWidgets() : (E?.(), S(), (0, o.A)(g));
                  },
              })
            : (0, r.jsx)(s.YNO, {
                  targetElementRef: C,
                  renderPopout: (e) => {
                      let { closePopout: t } = e;
                      return (0, r.jsxs)(s.W1t, {
                          "data-menu-needs-review": !0,
                          onSelect: void 0,
                          navId: "edit-profile-popout",
                          onClose: t,
                          "aria-label": h.intl.string(h.t.AXIHpV),
                          children: [
                              (0, r.jsx)(s.Drp, {
                                  id: "edit-server-profile",
                                  label: h.intl.string(h.t["PKQB/H"]),
                                  subtext: h.intl.string(h.t.VYHWKJ),
                                  action: () => {
                                      v({ action: "EDIT_GUILD_PROFILE" }), E?.(), y(), (0, o.A)(g);
                                  },
                              }),
                              (0, r.jsx)(s.Drp, {
                                  id: "edit-main-profile",
                                  label: h.intl.string(h.t.HmFaFB),
                                  subtext: h.intl.string(h.t["+EERMk"]),
                                  action: () => {
                                      v({ action: "EDIT_PROFILE" }), E?.(), S(), (0, o.A)(g);
                                  },
                              }),
                          ],
                      });
                  },
                  children: (e) => {
                      let { onClick: t, ...n } = e;
                      return (0, r.jsx)(p.FD, {
                          buttonRef: C,
                          text: h.intl.string(h.t.s5vZlQ),
                          icon: s.R2l,
                          autoFocus: !0,
                          fullWidth: m,
                          variant: "primary",
                          onClick: () => {
                              T ? _.A.notifyUnsavedWidgets() : t?.();
                          },
                          ...n,
                      });
                  },
              })
        : null;
}
