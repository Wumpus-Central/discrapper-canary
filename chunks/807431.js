i.d(n, { default: () => h });
var e = i(627968);
i(64700);
var s = i(980707),
    a = i(477782),
    r = i(442433),
    d = i(961973),
    l = i(468689),
    o = i(36942),
    c = i(652215),
    u = i(375708);
function h(t) {
    let { guild: n, onSelect: i } = t,
        h = (0, o.A)(n.id),
        p = (0, d.rs)(n.id);
    return (0, e.jsx)(s.W, {
        "data-menu-migrated-auto": !0,
        onSelect: i,
        navId: "guild-browse-channels-context-menu",
        "aria-label": u.intl.string(u.t.ogxXGq),
        onClose: r.Z_,
        children: (0, e.jsxs)(a.rX, {
            children: [
                p &&
                    (0, e.jsx)(a.Dr, {
                        id: "go-to-settings",
                        label: u.intl.string(u.t.X70lV6),
                        action: function () {
                            l.A.open(n.id, c.BEX.ONBOARDING);
                        },
                    }),
                h,
            ],
        }),
    });
}
