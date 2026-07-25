l.d(e, { A: () => x });
var n = l(627968),
    i = l(477782),
    r = l(72152),
    u = l(64700),
    a = l(885386),
    s = l(659324),
    o = l(281980),
    c = l(335993),
    d = l(375708),
    f = l(976860),
    b = l(967198),
    v = l(5180),
    p = l(652215);
function x() {
    let t = (function () {
            let {
                isPreview: t,
                label: e,
                subLabel: l,
                perform: a,
            } = (function () {
                let { hasAccess: t } = (0, o.TW)(),
                    e = u.useCallback(() => {
                        t && (0, s.tV)(!1, "server_context_menu"), (0, v.ai)(b.A.getGuildId()) && (0, f.pX)(p.BVt.ME);
                    }, [t]);
                return {
                    isPreview: !t,
                    label: d.intl.string(t ? c.default["8FO0y9"] : d.t.ojM1xJ),
                    subLabel: t ? d.intl.string(c.default.FaHxWl) : void 0,
                    perform: e,
                };
            })();
            return (0, n.jsx)(i.Dr, {
                id: "hide-favorites",
                label: e,
                subtext: l,
                color: t ? "default" : "danger",
                action: function () {
                    (0, r.Z)(!1), a();
                },
            });
        })(),
        e = (function () {
            let {
                isAvailable: t,
                label: e,
                subLabel: l,
                perform: f,
            } = (function () {
                let t = a.Q_.useSetting(),
                    { hasAccess: e } = (0, o.TW)(),
                    l = u.useCallback(() => {
                        (0, s.uM)();
                    }, []);
                return {
                    isAvailable: t && e,
                    label: d.intl.string(c.default.YkET6R),
                    subLabel: d.intl.string(c.default.ZzcwNk),
                    perform: l,
                };
            })();
            return t
                ? (0, n.jsx)(i.Dr, {
                      id: "reset-favorites",
                      label: e,
                      subtext: l,
                      color: "danger",
                      action: function () {
                          (0, r.Z)(!1), f();
                      },
                  })
                : null;
        })();
    return [
        (0, n.jsx)(i.rX, { children: t }, "favorites-actions"),
        null != e ? (0, n.jsx)(i.rX, { children: e }, "favorites-developer") : null,
    ];
}
