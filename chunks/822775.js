t.d(n, { A: () => v });
var l = t(627968),
    i = t(64700),
    r = t(17928),
    a = t(22231),
    s = t(922016),
    o = t(550079),
    d = t(477782),
    u = t(474397),
    c = t(206835),
    g = t(495544),
    m = t(71393),
    f = t(207803),
    p = t(183555),
    x = t(61881),
    A = t(993401),
    h = t(985018);
function v(e) {
    let { user: n, guildId: t, fullWidth: v, appContext: j, onClose: I } = e,
        b = (0, r.bG)([g.default], () => g.default.getId() === n.id),
        C = (0, r.bG)([m.A], () => (null != t ? m.A.getGuild(t) : null)),
        N = (0, r.bG)([x.A], () => x.A.hasUnsavedChanges()),
        y = (0, c.A)({ guild: C }),
        E = (0, c.A)({}),
        { trackUserProfileAction: P } = (0, p.NJ)(),
        R = i.useRef(null);
    return b
        ? null == C
            ? (0, l.jsx)(A.FD, {
                  action: "EDIT_PROFILE",
                  text: h.intl.string(h.t.s5vZlQ),
                  icon: a.R,
                  autoFocus: !0,
                  fullWidth: v,
                  variant: "primary",
                  onClick: () => {
                      N ? (0, f.VQ)() : (I?.(), E(), (0, u.A)(j));
                  },
              })
            : (0, l.jsx)(s.Y, {
                  targetElementRef: R,
                  renderPopout: (e) => {
                      let { closePopout: n } = e;
                      return (0, l.jsxs)(o.W, {
                          "data-menu-needs-review": !0,
                          onSelect: void 0,
                          navId: "edit-profile-popout",
                          onClose: n,
                          "aria-label": h.intl.string(h.t.AXIHpV),
                          children: [
                              (0, l.jsx)(d.Dr, {
                                  id: "edit-server-profile",
                                  label: h.intl.string(h.t["PKQB/H"]),
                                  subtext: h.intl.string(h.t.VYHWKJ),
                                  action: () => {
                                      P({ action: "EDIT_GUILD_PROFILE" }), I?.(), y(), (0, u.A)(j);
                                  },
                              }),
                              (0, l.jsx)(d.Dr, {
                                  id: "edit-main-profile",
                                  label: h.intl.string(h.t.HmFaFB),
                                  subtext: h.intl.string(h.t["+EERMk"]),
                                  action: () => {
                                      P({ action: "EDIT_PROFILE" }), I?.(), E(), (0, u.A)(j);
                                  },
                              }),
                          ],
                      });
                  },
                  children: (e) => {
                      let { onClick: n, ...t } = e;
                      return (0, l.jsx)(A.FD, {
                          buttonRef: R,
                          text: h.intl.string(h.t.s5vZlQ),
                          icon: a.R,
                          autoFocus: !0,
                          fullWidth: v,
                          variant: "primary",
                          onClick: () => {
                              N ? (0, f.VQ)() : n?.();
                          },
                          ...t,
                      });
                  },
              })
        : null;
}
