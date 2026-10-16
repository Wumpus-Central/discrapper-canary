l.d(t, { A: () => A });
var n = l(477900),
    i = l(477782),
    a = l(163328),
    s = l(582128),
    r = l(17928),
    c = l(287809),
    u = l(181079),
    o = l(16236),
    d = l(384539),
    b = l(105292),
    f = l(952270),
    g = l(72152),
    h = l(976860),
    p = l(967198),
    v = l(5180),
    x = l(652215),
    y = l(241326),
    k = l(885386);
function A() {
    let e = (function () {
            let e,
                t,
                l,
                {
                    isAvailable: f,
                    isEnabled: g,
                    label: h,
                    subLabel: p,
                    toggle: v,
                } = ((e = (0, r.bG)([c.default], () => c.default.getCurrentUser()?.isStaff() ?? !1)),
                (t = (0, r.bG)([u.A], () => u.A.autoAddJoinedThreads)),
                (l = s.useCallback(() => {
                    e && (0, o.Ub)(!t);
                }, [e, t])),
                {
                    isAvailable: e,
                    isEnabled: t,
                    label: b.intl.string(d.default.DIyQIF),
                    subLabel: b.intl.string(d.default.g2vHYJ),
                    toggle: l,
                });
            return f
                ? (0, n.jsx)(i.sL, {
                      id: "favorites-auto-added-threads",
                      label: h,
                      subtext: p,
                      checked: g,
                      leadingAccessory: { type: "icon", icon: a.y },
                      action: v,
                  })
                : null;
        })(),
        t = (function () {
            let e,
                {
                    label: t,
                    subLabel: l,
                    perform: a,
                } = ((e = s.useCallback(() => {
                    ((0, o.tV)(!1, "server_context_menu"), (0, v.ai)(p.A.getGuildId()) && (0, h.pX)(x.BVt.ME));
                }, [])),
                { label: b.intl.string(d.default["8FO0y9"]), subLabel: b.intl.string(d.default.FaHxWl), perform: e });
            return (0, n.jsx)(i.Dr, {
                id: "hide-favorites",
                label: t,
                subtext: l,
                color: "danger",
                icon: f.EyeSlashIcon,
                leadingAccessory: { type: "icon", icon: f.EyeSlashIcon },
                action: function () {
                    ((0, g.Z)(!1), a());
                },
            });
        })(),
        l = (function () {
            let e,
                t,
                {
                    isAvailable: l,
                    label: a,
                    subLabel: r,
                    perform: c,
                } = ((e = k.Q_.useSetting()),
                (t = s.useCallback(() => {
                    ((0, v.ai)(p.A.getGuildId()) && (0, h.pX)(x.BVt.ME), (0, o.uM)());
                }, [])),
                {
                    isAvailable: e,
                    label: b.intl.string(d.default.YkET6R),
                    subLabel: b.intl.string(d.default.ZzcwNk),
                    perform: t,
                });
            return l
                ? (0, n.jsx)(i.Dr, {
                      id: "reset-favorites",
                      label: a,
                      subtext: r,
                      color: "danger",
                      icon: y.TrashIcon,
                      leadingAccessory: { type: "icon", icon: y.TrashIcon },
                      action: function () {
                          ((0, g.Z)(!1), c());
                      },
                  })
                : null;
        })();
    return [
        null != e ? (0, n.jsx)(i.rX, { children: e }, "favorites-settings") : null,
        (0, n.jsx)(i.rX, { children: t }, "favorites-actions"),
        null != l ? (0, n.jsx)(i.rX, { children: l }, "favorites-developer") : null,
    ];
}
