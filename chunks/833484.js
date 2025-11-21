n.d(t, { Z: () => o });
var r = n(54381),
    i = n(793030),
    l = n(550385),
    a = n(665149),
    s = n(388032);
function o(e) {
    let { className: t } = e,
        { activePanel: n } = (0, l.oq)(),
        o = n === l.wh.APPLICATION_TEST_MODE_DEBUG;
    return (0, r.jsx)(a.JO, {
        className: t,
        onClick: () => {
            o ? (0, l.Ll)() : (0, l.XO)(l.wh.APPLICATION_TEST_MODE_DEBUG);
        },
        icon: i.R0,
        "aria-label": s.intl.string(s.t["9Isknj"]),
        tooltip: o ? null : s.intl.string(s.t["9Isknj"]),
        selected: o,
    });
}
