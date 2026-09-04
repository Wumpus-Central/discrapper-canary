n.d(i, { default: () => m });
var t = n(477900),
    a = n(582128),
    o = n(980707),
    d = n(477782),
    c = n(885574),
    s = n(548411),
    l = n(554830),
    r = n(952270),
    g = n(442433),
    b = n(643056),
    u = n(988341),
    h = n(234e3),
    f = n(327791),
    p = n(470739),
    x = n(577931),
    _ = n(375708);
function m(e) {
    let { badge: i, onClosePopout: n, onAction: m, onSelect: y } = e,
        { reorderableBadges: C, hiddenBadges: I } = (0, x.A)(),
        { tenureBadgeHideable: j } = b.A.useConfig({ location: "BadgeCustomizationContextMenu" }),
        A = a.useMemo(() => (0, u.jg)({ tenureBadgeHideable: j }), [j]),
        B = (0, f.A)(),
        v = A.has(i.badge_id),
        k = a.useMemo(
            () =>
                C.map((e) => {
                    let { badge_id: i } = e;
                    return i;
                }),
            [C],
        ),
        w = k.indexOf(i.badge_id),
        D = B && -1 !== w,
        L = 0 === w,
        S = w === k.length - 1;
    return (0, t.jsx)(o.W, {
        navId: "badge-customization-context",
        onClose: g.Z_,
        "aria-label": _.intl.string(_.t["2ia+9V"]),
        onSelect: y,
        children: (0, t.jsxs)(d.rX, {
            children: [
                (0, t.jsx)(d.Dr, {
                    id: "view-badge-details",
                    iconLeft: c.CircleInformationIcon,
                    leadingAccessory: { type: "icon", icon: c.CircleInformationIcon },
                    label: _.intl.string(_.t["2ia+9V"]),
                    action: function () {
                        n(), (0, p._)({ initialBadgeId: i.badge_id, viewingCurrentUserBadges: !0 });
                    },
                }),
                D &&
                    !L &&
                    (0, t.jsx)(d.Dr, {
                        id: "move-badge-to-front",
                        iconLeft: s.Z,
                        leadingAccessory: { type: "icon", icon: s.Z },
                        label: _.intl.string(_.t.BpXa17),
                        action: function () {
                            (0, h.hB)((0, h.i1)(k, w, 0));
                        },
                    }),
                D &&
                    !S &&
                    (0, t.jsx)(d.Dr, {
                        id: "move-badge-to-back",
                        iconLeft: l.K,
                        leadingAccessory: { type: "icon", icon: l.K },
                        label: _.intl.string(_.t["4/7x+3"]),
                        action: function () {
                            (0, h.hB)((0, h.i1)(k, w, k.length - 1));
                        },
                    }),
                !v &&
                    (0, t.jsx)(d.Dr, {
                        id: "hide-badge",
                        iconLeft: r.EyeSlashIcon,
                        leadingAccessory: { type: "icon", icon: r.EyeSlashIcon },
                        label: _.intl.string(_.t.xSWJPo),
                        action: function () {
                            m(i.badge_id),
                                (0, h.RC)({
                                    badgeId: i.badge_id,
                                    hidden: !0,
                                    reorderableBadgeIds: k,
                                    hiddenBadgeIds: I.map((e) => {
                                        let { badge_id: i } = e;
                                        return i;
                                    }),
                                    canReorder: B,
                                });
                        },
                    }),
            ],
        }),
    });
}
