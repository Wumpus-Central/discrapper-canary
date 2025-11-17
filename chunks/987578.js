n.d(i, { default: () => c });
var e = n(54381);
n(473749);
var l = n(481060),
    a = n(239091),
    o = n(560067),
    s = n(675999),
    d = n(388032);
function c(t) {
    let { onSelect: i } = t;
    return (0, e.jsxs)(l.v2r, {
        navId: "guild-context",
        "aria-label": d.intl.string(d.t.HpQykc),
        onClose: a.Zy,
        onSelect: i,
        children: [
            (0, e.jsx)(l.sNh, {
                id: "join",
                label: d.intl.string(d.t.yRjK4p),
                action: () =>
                    o.Z.openCreateGuildModal({
                        initialSlide: s._m.JOIN_GUILD,
                        location: "Guild List - ContextMenu",
                    }),
            }),
            (0, e.jsx)(l.sNh, {
                id: "create",
                label: d.intl.string(d.t.B44MTm),
                action: () => o.Z.openCreateGuildModal({ location: "Guild List - ContextMenu" }),
            }),
        ],
    });
}
