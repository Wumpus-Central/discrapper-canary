n.d(t, {
    default: () => c,
});
var l = n(627968);
n(64700);
var i = n(397927),
    r = n(442433),
    a = n(961973),
    s = n(997509),
    u = n(36942),
    d = n(652215),
    o = n(985018);

function c(e) {
    let { guild: t, onSelect: n } = e,
        c = (0, u.A)(t.id),
        h = (0, a.rs)(t.id);
    return (0, l.jsx)(i.W1t, {
        "data-menu-mixed": !0,
        onSelect: n,
        navId: "guild-browse-channels-context-menu",
        "aria-label": o.intl.string(o.t.ogxXGq),
        onClose: r.Z_,
        children: (0, l.jsxs)(i.rXV, {
            children: [
                h &&
                    (0, l.jsx)(i.Drp, {
                        id: "go-to-settings",
                        label: o.intl.string(o.t.X70lV6),
                        action: () => {
                            s.A.open(t.id, d.BEX.ONBOARDING);
                        },
                    }),
                c,
            ],
        }),
    });
}
