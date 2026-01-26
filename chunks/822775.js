n.d(t, {
    A: () => b,
});
var r = n(627968),
    i = n(64700),
    a = n(311907),
    s = n(397927),
    o = n(474397),
    l = n(206835),
    c = n(961350),
    u = n(71393),
    d = n(183555),
    f = n(958805),
    p = n(61881),
    _ = n(993401),
    h = n(985018);

function m(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}

function g(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                m(e, t, n[t]);
            });
    }
    return e;
}

function E(e, t) {
    if (null == e) return {};
    var n,
        r,
        i,
        a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a;
    }
    if (((a = y(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}

function y(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}

function b(e) {
    let { user: t, guildId: n, fullWidth: m, appContext: y, onClose: b } = e,
        O = (0, a.bG)([c.default], () => c.default.getId() === t.id),
        v = (0, a.bG)([u.A], () => (null != n ? u.A.getGuild(n) : null)),
        A = (0, a.bG)([p.A], () => p.A.hasUnsavedChanges()),
        I = (0, l.A)({
            guild: v,
        }),
        S = (0, l.A)({}),
        { trackUserProfileAction: T } = (0, d.NJ)(),
        C = i.useRef(null);
    return O
        ? null == v
            ? (0, r.jsx)(_.FD, {
                  action: "EDIT_PROFILE",
                  text: h.intl.string(h.t.s5vZlQ),
                  icon: s.R2l,
                  autoFocus: !0,
                  fullWidth: m,
                  variant: "primary",
                  onClick: () => {
                      A ? f.A.notifyUnsavedWidgets() : (null == b || b(), S(), (0, o.A)(y));
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
                                      T({
                                          action: "EDIT_GUILD_PROFILE",
                                      }),
                                          null == b || b(),
                                          I(),
                                          (0, o.A)(y);
                                  },
                              }),
                              (0, r.jsx)(s.Drp, {
                                  id: "edit-main-profile",
                                  label: h.intl.string(h.t.HmFaFB),
                                  subtext: h.intl.string(h.t["+EERMk"]),
                                  action: () => {
                                      T({
                                          action: "EDIT_PROFILE",
                                      }),
                                          null == b || b(),
                                          S(),
                                          (0, o.A)(y);
                                  },
                              }),
                          ],
                      });
                  },
                  children: (e) => {
                      let { onClick: t } = e,
                          n = E(e, ["onClick"]);
                      return (0, r.jsx)(
                          _.FD,
                          g(
                              {
                                  buttonRef: C,
                                  text: h.intl.string(h.t.s5vZlQ),
                                  icon: s.R2l,
                                  autoFocus: !0,
                                  fullWidth: m,
                                  variant: "primary",
                                  onClick: () => {
                                      A ? f.A.notifyUnsavedWidgets() : null == t || t();
                                  },
                              },
                              n,
                          ),
                      );
                  },
              })
        : null;
}
