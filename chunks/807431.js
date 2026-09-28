e.d(n, { default: () => h });
var i = e(477900);
e(582128);
var a = e(980707),
    s = e(477782),
    d = e(442433),
    r = e(961973),
    l = e(468689),
    o = e(36942),
    c = e(652215),
    u = e(375708);
function h(t) {
    let { guild: n, onSelect: e } = t,
        h = (0, o.A)(n.id),
        p = (0, r.rs)(n.id);
    return (0, i.jsx)(a.W, {
        "data-menu-migrated-auto": !0,
        onSelect: e,
        navId: "guild-browse-channels-context-menu",
        "aria-label": u.intl.string(u.t.ogxXGq),
        onClose: d.Z_,
        children: (0, i.jsxs)(s.rX, {
            children: [
                p &&
                    (0, i.jsx)(s.Dr, {
                        id: "go-to-settings",
                        label: u.intl.string(u.t.X70lV6),
                        action: function () {
                            l.default.open(n.id, c.BEX.ONBOARDING);
                        },
                    }),
                h,
            ],
        }),
    });
}
