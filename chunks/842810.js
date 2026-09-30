n.d(i, { default: () => _ });
var t = n(477900),
    o = n(582128),
    a = n(980707),
    d = n(477782),
    c = n(885574),
    s = n(548411),
    l = n(554830),
    r = n(39623),
    g = n(952270),
    b = n(442433),
    u = n(643056),
    h = n(988341),
    f = n(234e3),
    p = n(327791),
    y = n(470739),
    x = n(577931),
    I = n(375708);
function _(e) {
    let { badge: i, onClosePopout: n, onAction: _, onSelect: m } = e,
        { reorderableBadges: C, hiddenBadges: j } = (0, x.A)(),
        { tenureBadgeHideable: A } = u.A.useConfig({ location: "BadgeCustomizationContextMenu" }),
        v = o.useMemo(() => (0, h.jg)({ tenureBadgeHideable: A }), [A]),
        B = (0, p.A)(),
        k = v.has(i.badge_id),
        D = i.hidden ?? !1,
        L = o.useMemo(
            () =>
                C.map((e) => {
                    let { badge_id: i } = e;
                    return i;
                }),
            [C],
        ),
        w = L.indexOf(i.badge_id),
        E = B && -1 !== w,
        S = 0 === w,
        K = w === L.length - 1;
    function M(e) {
        (_(i.badge_id),
            (0, f.RC)({
                badgeId: i.badge_id,
                hidden: e,
                reorderableBadgeIds: L,
                hiddenBadgeIds: j.map((e) => {
                    let { badge_id: i } = e;
                    return i;
                }),
                canReorder: B,
            }));
    }
    return (0, t.jsx)(a.W, {
        navId: "badge-customization-context",
        onClose: b.Z_,
        "aria-label": I.intl.string(I.t["2ia+9V"]),
        onSelect: m,
        children: (0, t.jsxs)(d.rX, {
            label: i.name,
            children: [
                (0, t.jsx)(d.Dr, {
                    id: "view-badge-details",
                    iconLeft: c.CircleInformationIcon,
                    leadingAccessory: { type: "icon", icon: c.CircleInformationIcon },
                    label: I.intl.string(I.t["2ia+9V"]),
                    subtext: k ? I.intl.string((0, h.hK)(i.badge_id)) : void 0,
                    action: function () {
                        (n(), (0, y._)({ initialBadgeId: i.badge_id, viewingCurrentUserBadges: !0 }));
                    },
                }),
                E &&
                    !S &&
                    (0, t.jsx)(d.Dr, {
                        id: "move-badge-to-front",
                        iconLeft: s.Z,
                        leadingAccessory: { type: "icon", icon: s.Z },
                        label: I.intl.string(I.t.BpXa17),
                        action: function () {
                            (0, f.hB)((0, f.i1)(L, w, 0));
                        },
                    }),
                E &&
                    !K &&
                    (0, t.jsx)(d.Dr, {
                        id: "move-badge-to-back",
                        iconLeft: l.K,
                        leadingAccessory: { type: "icon", icon: l.K },
                        label: I.intl.string(I.t["4/7x+3"]),
                        action: function () {
                            (0, f.hB)((0, f.i1)(L, w, L.length - 1));
                        },
                    }),
                D
                    ? (0, t.jsx)(d.Dr, {
                          id: "unhide-badge",
                          iconLeft: r.EyeIcon,
                          leadingAccessory: { type: "icon", icon: r.EyeIcon },
                          label: I.intl.string(I.t.RXOPc3),
                          action: () => M(!1),
                      })
                    : !k &&
                      (0, t.jsx)(d.Dr, {
                          id: "hide-badge",
                          iconLeft: g.EyeSlashIcon,
                          leadingAccessory: { type: "icon", icon: g.EyeSlashIcon },
                          label: I.intl.string(I.t.xSWJPo),
                          action: () => M(!0),
                      }),
            ],
        }),
    });
}
