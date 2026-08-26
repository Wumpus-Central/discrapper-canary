e.d(n, { default: () => o });
var t = e(477900);
e(582128);
var a = e(980707),
    r = e(477782),
    d = e(885574),
    s = e(442433),
    c = e(470739),
    l = e(375708);
function o(i) {
    let { badge: n, onClosePopout: e, onSelect: o } = i;
    return (0, t.jsx)(a.W, {
        navId: "badge-customization-context",
        onClose: s.Z_,
        "aria-label": l.intl.string(l.t["2ia+9V"]),
        onSelect: o,
        children: (0, t.jsx)(r.rX, {
            children: (0, t.jsx)(r.Dr, {
                id: "view-badge-details",
                icon: d.CircleInformationIcon,
                label: l.intl.string(l.t["2ia+9V"]),
                action: function () {
                    e(), (0, c._)({ initialBadgeId: n.badge_id, viewingCurrentUserBadges: !0 });
                },
            }),
        }),
    });
}
