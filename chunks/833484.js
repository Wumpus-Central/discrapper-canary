n.d(t, { Z: () => s });
var r = n(54381),
    i = n(793030),
    l = n(550385),
    a = n(665149),
    o = n(388032);
function s(e) {
    let { className: t } = e,
        { activePanel: n } = (0, l.oq)(),
        s = n === l.wh.APPLICATION_TEST_MODE_DEBUG;
    return (0, r.jsx)(a.JO, {
        className: t,
        onClick: () => {
            s ? (0, l.Ll)() : (0, l.XO)(l.wh.APPLICATION_TEST_MODE_DEBUG);
        },
        icon: i.R0,
        "aria-label": o.intl.string(o.t["9Isknj"]),
        tooltip: s ? null : o.intl.string(o.t["9Isknj"]),
        selected: s,
    });
}
