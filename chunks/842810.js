var t = n(477900),
    o = n(582128),
    a = n(165862),
    d = n(477782),
    c = n(885574),
    r = n(548411),
    s = n(554830),
    l = n(39623),
    g = n(952270),
    u = n(442433),
    b = n(643056),
    h = n(620143),
    f = n(988341),
    p = n(234e3),
    I = n(327791),
    x = n(470739),
    y = n(577931),
    _ = n(792996);
n.d(
    i,
    {},
    {
        default: function (e) {
            let { badge: i, onClosePopout: n, onAction: m, onSelect: A } = e,
                { reorderableBadges: C, hiddenBadges: L } = (0, y.A)(),
                { tenureBadgeHideable: v } = b.A.useConfig({ location: "BadgeCustomizationContextMenu" }),
                B = o.useMemo(() => (0, f.jg)({ tenureBadgeHideable: v }), [v]),
                j = (0, I.A)(),
                w = B.has(i.badge_id),
                k = i.hidden ?? !1,
                D = !0 === i.has_updates,
                M =
                    (0, h.e)({ location: "BadgeCustomizationContextMenu", hasUnread: D }) && D
                        ? _.intl.string(null != i.previous_acked_tier ? _.t.s0Zos2 : _.t.QMt1Qx)
                        : void 0,
                E = o.useMemo(
                    () =>
                        C.map((e) => {
                            let { badge_id: i } = e;
                            return i;
                        }),
                    [C],
                ),
                R = E.indexOf(i.badge_id),
                S = j && -1 !== R,
                z = 0 === R,
                X = R === E.length - 1;
            function O(e) {
                (m(i.badge_id),
                    (0, p.RC)({
                        badgeId: i.badge_id,
                        hidden: e,
                        reorderableBadgeIds: E,
                        hiddenBadgeIds: L.map((e) => {
                            let { badge_id: i } = e;
                            return i;
                        }),
                        canReorder: j,
                    }));
            }
            return (0, t.jsx)(a.W, {
                navId: "badge-customization-context",
                onClose: u.Z_,
                "aria-label": _.intl.string(_.t["2ia+9V"]),
                onSelect: A,
                children: (0, t.jsxs)(d.rX, {
                    label: i.name,
                    children: [
                        (0, t.jsx)(d.Dr, {
                            id: "view-badge-details",
                            iconLeft: c.CircleInformationIcon,
                            leadingAccessory: { type: "icon", icon: c.CircleInformationIcon },
                            label: _.intl.string(_.t["2ia+9V"]),
                            subtext: M ?? (w ? _.intl.string((0, f.hK)(i.badge_id)) : void 0),
                            action: function () {
                                (n(),
                                    (0, x.openBadgeDirectoryModal)({
                                        initialBadgeId: i.badge_id,
                                        viewingCurrentUserBadges: !0,
                                    }));
                            },
                        }),
                        S &&
                            !z &&
                            (0, t.jsx)(d.Dr, {
                                id: "move-badge-to-front",
                                iconLeft: r.ArrowLargeLeftIcon,
                                leadingAccessory: { type: "icon", icon: r.ArrowLargeLeftIcon },
                                label: _.intl.string(_.t.BpXa17),
                                action: function () {
                                    (0, p.hB)((0, p.i1)(E, R, 0));
                                },
                            }),
                        S &&
                            !X &&
                            (0, t.jsx)(d.Dr, {
                                id: "move-badge-to-back",
                                iconLeft: s.ArrowLargeRightIcon,
                                leadingAccessory: { type: "icon", icon: s.ArrowLargeRightIcon },
                                label: _.intl.string(_.t["4/7x+3"]),
                                action: function () {
                                    (0, p.hB)((0, p.i1)(E, R, E.length - 1));
                                },
                            }),
                        k
                            ? (0, t.jsx)(d.Dr, {
                                  id: "unhide-badge",
                                  iconLeft: l.EyeIcon,
                                  leadingAccessory: { type: "icon", icon: l.EyeIcon },
                                  label: _.intl.string(_.t.RXOPc3),
                                  action: () => O(!1),
                              })
                            : !w &&
                              (0, t.jsx)(d.Dr, {
                                  id: "hide-badge",
                                  iconLeft: g.EyeSlashIcon,
                                  leadingAccessory: { type: "icon", icon: g.EyeSlashIcon },
                                  label: _.intl.string(_.t.xSWJPo),
                                  action: () => O(!0),
                              }),
                    ],
                }),
            });
        },
    },
);
