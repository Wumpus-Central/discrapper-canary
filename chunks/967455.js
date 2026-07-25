i.d(e, { A: () => h });
var a = i(627968),
    n = i(477782),
    l = i(72152),
    r = i(64700),
    u = i(976860),
    s = i(967198),
    d = i(422258),
    c = i(281980),
    o = i(5180),
    b = i(652215),
    p = i(335993),
    f = i(375708);
function h() {
    let {
        isPreview: t,
        label: e,
        subLabel: i,
        perform: h,
    } = (function () {
        let { hasAccess: t } = (0, c.TW)(),
            e = r.useCallback(() => {
                t && (0, d.tV)(!1, "server_context_menu"), (0, o.ai)(s.A.getGuildId()) && (0, u.pX)(b.BVt.ME);
            }, [t]);
        return {
            isPreview: !t,
            label: f.intl.string(t ? p.default["8FO0y9"] : f.t.ojM1xJ),
            subLabel: t ? f.intl.string(p.default.FaHxWl) : void 0,
            perform: e,
        };
    })();
    return (0, a.jsx)(n.Dr, {
        id: "hide-favorites",
        label: e,
        subtext: i,
        color: t ? "default" : "danger",
        action: function () {
            (0, l.Z)(!1), h();
        },
    });
}
