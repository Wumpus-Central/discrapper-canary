n.d(i, { default: () => _ });
var a = n(477900),
    d = n(582128),
    t = n(980707),
    o = n(477782),
    r = n(885574),
    s = n(952270),
    l = n(442433),
    c = n(643056),
    g = n(988341),
    u = n(234e3),
    b = n(327791),
    h = n(470739),
    p = n(577931),
    C = n(375708);
function _(e) {
    let { badge: i, onClosePopout: n, onSelect: _ } = e,
        { tenureBadgeHideable: f } = c.A.useConfig({ location: "BadgeCustomizationContextMenu" }),
        I = d.useMemo(() => (0, g.jg)({ tenureBadgeHideable: f }), [f]),
        { reorderableBadges: x, hiddenBadges: m } = (0, p.A)(),
        j = (0, b.A)(),
        B = I.has(i.badge_id);
    return (0, a.jsx)(t.W, {
        navId: "badge-customization-context",
        onClose: l.Z_,
        "aria-label": C.intl.string(C.t["2ia+9V"]),
        onSelect: _,
        children: (0, a.jsxs)(o.rX, {
            children: [
                (0, a.jsx)(o.Dr, {
                    id: "view-badge-details",
                    iconLeft: r.CircleInformationIcon,
                    label: C.intl.string(C.t["2ia+9V"]),
                    action: function () {
                        n(), (0, h._)({ initialBadgeId: i.badge_id, viewingCurrentUserBadges: !0 });
                    },
                }),
                !B &&
                    (0, a.jsx)(o.Dr, {
                        id: "hide-badge",
                        iconLeft: s.EyeSlashIcon,
                        label: C.intl.string(C.t.xSWJPo),
                        action: function () {
                            (0, u.RC)({
                                badgeId: i.badge_id,
                                hidden: !0,
                                reorderableBadgeIds: x.map((e) => {
                                    let { badge_id: i } = e;
                                    return i;
                                }),
                                hiddenBadgeIds: m.map((e) => {
                                    let { badge_id: i } = e;
                                    return i;
                                }),
                                canReorder: j,
                            });
                        },
                    }),
            ],
        }),
    });
}
