n.d(t, { default: () => g });
var i = n(627968);
n(64700);
var r = n(861672),
    l = n(477782),
    a = n(442433),
    s = n(961973),
    d = n(997509),
    u = n(36942),
    o = n(652215),
    c = n(985018);
function g(e) {
    let { guild: t, onSelect: n } = e,
        g = (0, u.A)(t.id),
        h = (0, s.rs)(t.id);
    return (0, i.jsx)(r.W, {
        "data-menu-migrated-auto": !0,
        onSelect: n,
        navId: "guild-browse-channels-context-menu",
        "aria-label": c.intl.string(c.t.ogxXGq),
        onClose: a.Z_,
        children: (0, i.jsxs)(l.rX, {
            children: [
                h &&
                    (0, i.jsx)(l.Dr, {
                        id: "go-to-settings",
                        label: c.intl.string(c.t.X70lV6),
                        action: () => {
                            d.A.open(t.id, o.BEX.ONBOARDING);
                        },
                    }),
                g,
            ],
        }),
    });
}
