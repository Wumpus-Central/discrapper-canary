n.d(t, { A: () => j });
var l = n(477900),
    i = n(477782),
    a = n(163328),
    r = n(582128),
    s = n(17928),
    u = n(287809),
    o = n(181079),
    c = n(16236),
    d = n(93055),
    f = n(384539),
    b = n(375708),
    g = n(789645),
    h = n(952270),
    v = n(72152),
    p = n(976860),
    A = n(967198),
    x = n(5180),
    k = n(652215),
    y = n(241326),
    T = n(885386);
function j() {
    let e = (function () {
            let {
                isAvailable: e,
                isEnabled: t,
                label: n,
                subLabel: g,
                toggle: h,
            } = (function () {
                let { hasAccess: e } = (0, d.TW)("useFavoritesGuildAutoAddedThreadsAction"),
                    t = (0, s.bG)([u.default], () => u.default.getCurrentUser()?.isStaff() ?? !1),
                    n = e && t,
                    l = (0, s.bG)([o.A], () => o.A.autoAddJoinedThreads),
                    i = r.useCallback(() => {
                        n && (0, c.Ub)(!l);
                    }, [n, l]);
                return {
                    isAvailable: n,
                    isEnabled: l,
                    label: b.intl.string(f.default.DIyQIF),
                    subLabel: b.intl.string(f.default.g2vHYJ),
                    toggle: i,
                };
            })();
            return e
                ? (0, l.jsx)(i.sL, {
                      id: "favorites-auto-added-threads",
                      label: n,
                      subtext: g,
                      checked: t,
                      leadingAccessory: { type: "icon", icon: a.y },
                      action: h,
                  })
                : null;
        })(),
        t = (function () {
            let {
                    isPreview: e,
                    label: t,
                    subLabel: n,
                    perform: a,
                } = (function () {
                    let { hasAccess: e } = (0, d.TW)(),
                        t = r.useCallback(() => {
                            e && (0, c.tV)(!1, "server_context_menu"),
                                (0, x.ai)(A.A.getGuildId()) && (0, p.pX)(k.BVt.ME);
                        }, [e]);
                    return {
                        isPreview: !e,
                        label: b.intl.string(e ? f.default["8FO0y9"] : b.t.ojM1xJ),
                        subLabel: e ? b.intl.string(f.default.FaHxWl) : void 0,
                        perform: t,
                    };
                })(),
                s = e ? g.P : h.EyeSlashIcon;
            return (0, l.jsx)(i.Dr, {
                id: "hide-favorites",
                label: t,
                subtext: n,
                color: e ? "default" : "danger",
                icon: s,
                leadingAccessory: { type: "icon", icon: s },
                action: function () {
                    (0, v.Z)(!1), a();
                },
            });
        })(),
        n = (function () {
            let {
                isAvailable: e,
                label: t,
                subLabel: n,
                perform: a,
            } = (function () {
                let e = T.Q_.useSetting(),
                    { hasAccess: t } = (0, d.TW)(),
                    n = r.useCallback(() => {
                        (0, x.ai)(A.A.getGuildId()) && (0, p.pX)(k.BVt.ME), (0, c.uM)();
                    }, []);
                return {
                    isAvailable: e && t,
                    label: b.intl.string(f.default.YkET6R),
                    subLabel: b.intl.string(f.default.ZzcwNk),
                    perform: n,
                };
            })();
            return e
                ? (0, l.jsx)(i.Dr, {
                      id: "reset-favorites",
                      label: t,
                      subtext: n,
                      color: "danger",
                      icon: y.TrashIcon,
                      leadingAccessory: { type: "icon", icon: y.TrashIcon },
                      action: function () {
                          (0, v.Z)(!1), a();
                      },
                  })
                : null;
        })();
    return [
        null != e ? (0, l.jsx)(i.rX, { children: e }, "favorites-settings") : null,
        (0, l.jsx)(i.rX, { children: t }, "favorites-actions"),
        null != n ? (0, l.jsx)(i.rX, { children: n }, "favorites-developer") : null,
    ];
}
