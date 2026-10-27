l.d(t, { A: () => j });
var n = l(477900),
    a = l(477782),
    i = l(192308),
    s = l(163328),
    r = l(582128),
    u = l(17928),
    c = l(287809),
    o = l(181079),
    d = l(16236),
    b = l(22277),
    f = l(105292),
    g = l(952270),
    h = l(72152),
    p = l(976860),
    x = l(967198),
    y = l(5180),
    v = l(652215),
    k = l(241326),
    A = l(253932);
function j() {
    let e = (function () {
            let e,
                t,
                l,
                {
                    isAvailable: i,
                    isEnabled: g,
                    label: h,
                    subLabel: p,
                    toggle: x,
                } = ((e = (0, u.bG)([c.default], () => c.default.getCurrentUser()?.isStaff() ?? !1)),
                (t = (0, u.bG)([o.A], () => o.A.autoAddJoinedThreads)),
                (l = r.useCallback(() => {
                    e && (0, d.Ub)(!t);
                }, [e, t])),
                {
                    isAvailable: e,
                    isEnabled: t,
                    label: f.intl.string(b.default.DIyQIF),
                    subLabel: f.intl.string(b.default.g2vHYJ),
                    toggle: l,
                });
            return i
                ? (0, n.jsx)(a.sL, {
                      id: "favorites-auto-added-threads",
                      label: h,
                      subtext: p,
                      checked: g,
                      leadingAccessory: { type: "icon", icon: s.y },
                      action: x,
                  })
                : null;
        })(),
        t = (function () {
            let e,
                {
                    label: t,
                    subLabel: l,
                    perform: i,
                } = ((e = r.useCallback(() => {
                    ((0, d.tV)(!1, "server_context_menu"), (0, y.ai)(x.A.getGuildId()) && (0, p.pX)(v.BVt.ME));
                }, [])),
                { label: f.intl.string(b.default["8FO0y9"]), subLabel: f.intl.string(b.default.FaHxWl), perform: e });
            return (0, n.jsx)(a.Dr, {
                id: "hide-favorites",
                label: t,
                subtext: l,
                color: "danger",
                icon: g.EyeSlashIcon,
                leadingAccessory: { type: "icon", icon: g.EyeSlashIcon },
                action: function () {
                    ((0, h.Z)(!1), i());
                },
            });
        })(),
        j = (function () {
            let e,
                t,
                {
                    isAvailable: l,
                    label: i,
                    subLabel: s,
                    perform: u,
                } = ((e = A.Q_.useSetting()),
                (t = r.useCallback(() => {
                    ((0, y.ai)(x.A.getGuildId()) && (0, p.pX)(v.BVt.ME), (0, d.uM)());
                }, [])),
                {
                    isAvailable: e,
                    label: f.intl.string(b.default.YkET6R),
                    subLabel: f.intl.string(b.default.ZzcwNk),
                    perform: t,
                });
            return l
                ? (0, n.jsx)(a.Dr, {
                      id: "reset-favorites",
                      label: i,
                      subtext: s,
                      color: "danger",
                      icon: k.TrashIcon,
                      leadingAccessory: { type: "icon", icon: k.TrashIcon },
                      action: function () {
                          ((0, h.Z)(!1), u());
                      },
                  })
                : null;
        })();
    return [
        null != e
            ? (0, n.jsxs)(
                  a.rX,
                  {
                      children: [
                          e,
                          (0, n.jsx)(a.Dr, {
                              id: "favorites-cleanup-threads",
                              label: f.intl.string(b.default.O2NG67),
                              action: () => {
                                  (0, i.openModalLazy)(async () => {
                                      let { default: e } = await Promise.all([l.e("428235"), l.e("136147")]).then(
                                          l.bind(l, 213086),
                                      );
                                      return (t) => (0, n.jsx)(e, { ...t });
                                  });
                              },
                          }),
                      ],
                  },
                  "favorites-settings",
              )
            : null,
        (0, n.jsx)(a.rX, { children: t }, "favorites-actions"),
        null != j ? (0, n.jsx)(a.rX, { children: j }, "favorites-developer") : null,
    ];
}
