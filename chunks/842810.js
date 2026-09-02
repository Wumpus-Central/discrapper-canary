n.d(i, { default: () => y });
var t = n(477900),
    o = n(582128),
    a = n(980707),
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
    m = n(375708);
function y(e) {
    let { badge: i, onClosePopout: n, onSelect: y } = e,
        { reorderableBadges: C, hiddenBadges: I } = (0, x.A)(),
        { tenureBadgeHideable: _ } = b.A.useConfig({ location: "BadgeCustomizationContextMenu" }),
        j = o.useMemo(() => (0, u.jg)({ tenureBadgeHideable: _ }), [_]),
        A = (0, f.A)(),
        B = j.has(i.badge_id),
        v = o.useMemo(
            () =>
                C.map((e) => {
                    let { badge_id: i } = e;
                    return i;
                }),
            [C],
        ),
        k = v.indexOf(i.badge_id),
        w = A && -1 !== k,
        D = 0 === k,
        L = k === v.length - 1;
    return (0, t.jsx)(a.W, {
        navId: "badge-customization-context",
        onClose: g.Z_,
        "aria-label": m.intl.string(m.t["2ia+9V"]),
        onSelect: y,
        children: (0, t.jsxs)(d.rX, {
            children: [
                (0, t.jsx)(d.Dr, {
                    id: "view-badge-details",
                    iconLeft: c.CircleInformationIcon,
                    leadingAccessory: { type: "icon", icon: c.CircleInformationIcon },
                    label: m.intl.string(m.t["2ia+9V"]),
                    action: function () {
                        n(), (0, p._)({ initialBadgeId: i.badge_id, viewingCurrentUserBadges: !0 });
                    },
                }),
                w &&
                    !D &&
                    (0, t.jsx)(d.Dr, {
                        id: "move-badge-to-front",
                        iconLeft: s.Z,
                        leadingAccessory: { type: "icon", icon: s.Z },
                        label: m.intl.string(m.t.BpXa17),
                        action: function () {
                            (0, h.hB)((0, h.i1)(v, k, 0));
                        },
                    }),
                w &&
                    !L &&
                    (0, t.jsx)(d.Dr, {
                        id: "move-badge-to-back",
                        iconLeft: l.K,
                        leadingAccessory: { type: "icon", icon: l.K },
                        label: m.intl.string(m.t["4/7x+3"]),
                        action: function () {
                            (0, h.hB)((0, h.i1)(v, k, v.length - 1));
                        },
                    }),
                !B &&
                    (0, t.jsx)(d.Dr, {
                        id: "hide-badge",
                        iconLeft: r.EyeSlashIcon,
                        leadingAccessory: { type: "icon", icon: r.EyeSlashIcon },
                        label: m.intl.string(m.t.xSWJPo),
                        action: function () {
                            (0, h.RC)({
                                badgeId: i.badge_id,
                                hidden: !0,
                                reorderableBadgeIds: v,
                                hiddenBadgeIds: I.map((e) => {
                                    let { badge_id: i } = e;
                                    return i;
                                }),
                                canReorder: A,
                            });
                        },
                    }),
            ],
        }),
    });
}
