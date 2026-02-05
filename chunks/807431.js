n.d(t, { default: () => c });
var i = n(627968);
n(64700);
var r = n(397927),
    l = n(442433),
    a = n(961973),
    s = n(997509),
    d = n(36942),
    u = n(652215),
    o = n(985018);
function c(e) {
    let { guild: t, onSelect: n } = e,
        c = (0, d.A)(t.id),
        h = (0, a.rs)(t.id);
    return (0, i.jsx)(r.W1t, {
        "data-menu-migrated-auto": !0,
        onSelect: n,
        navId: "guild-browse-channels-context-menu",
        "aria-label": o.intl.string(o.t.ogxXGq),
        onClose: l.Z_,
        children: (0, i.jsxs)(r.rXV, {
            children: [
                h &&
                    (0, i.jsx)(r.Drp, {
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
