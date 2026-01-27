n.d(t, {
    default: () => c,
});
var i = n(627968);
n(64700);
var l = n(397927),
    r = n(442433),
    a = n(961973),
    s = n(997509),
    d = n(36942),
    u = n(652215),
    o = n(985018);

function c(e) {
    let { guild: t, onSelect: n } = e,
        c = (0, d.A)(t.id),
        h = (0, a.rs)(t.id);
    return (0, i.jsx)(l.W1t, {
        "data-menu-migrated-auto": !0,
        onSelect: n,
        navId: "guild-browse-channels-context-menu",
        "aria-label": o.intl.string(o.t.ogxXGq),
        onClose: r.Z_,
        children: (0, i.jsxs)(l.rXV, {
            children: [
                h &&
                    (0, i.jsx)(l.Drp, {
                        id: "go-to-settings",
                        label: o.intl.string(o.t.X70lV6),
                        action: () => {
                            s.A.open(t.id, u.BEX.ONBOARDING);
                        },
                    }),
                c,
            ],
        }),
    });
}
