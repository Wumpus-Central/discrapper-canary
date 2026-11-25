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
    b = n(287809),
    h = n(643056),
    p = n(620143),
    f = n(988341),
    y = n(234e3),
    I = n(861304),
    _ = n(327791),
    x = n(470739),
    m = n(577931),
    C = n(792996);
n.d(
    i,
    {},
    {
        default: function (e) {
            let { badge: i, onClosePopout: n, onAction: A, onSelect: L } = e,
                { reorderableBadges: v, hiddenBadges: B } = (0, m.A)(),
                { tenureBadgeHideable: j } = h.A.useConfig({ location: "BadgeCustomizationContextMenu" }),
                w = o.useMemo(() => (0, f.jg)({ tenureBadgeHideable: j }), [j]),
                k = (0, _.A)(),
                D = w.has(i.badge_id),
                M = i.hidden ?? !1,
                S = !0 === i.has_updates,
                z = (0, p.e)({ location: "BadgeCustomizationContextMenu", hasUnread: S }) && S,
                E = z ? C.intl.string(null != i.previous_acked_tier ? C.t.s0Zos2 : C.t.QMt1Qx) : void 0,
                R = o.useMemo(
                    () =>
                        v.map((e) => {
                            let { badge_id: i } = e;
                            return i;
                        }),
                    [v],
                ),
                U = R.indexOf(i.badge_id),
                X = k && -1 !== U,
                N = 0 === U,
                O = U === R.length - 1;
            function P(e) {
                (A(i.badge_id),
                    (0, y.RC)({
                        badgeId: i.badge_id,
                        hidden: e,
                        reorderableBadgeIds: R,
                        hiddenBadgeIds: B.map((e) => {
                            let { badge_id: i } = e;
                            return i;
                        }),
                        canReorder: k,
                    }));
            }
            return (0, t.jsx)(a.W, {
                navId: "badge-customization-context",
                onClose: u.Z_,
                "aria-label": C.intl.string(C.t["2ia+9V"]),
                onSelect: L,
                children: (0, t.jsxs)(d.rX, {
                    label: i.name,
                    children: [
                        (0, t.jsx)(d.Dr, {
                            id: "view-badge-details",
                            iconLeft: c.CircleInformationIcon,
                            leadingAccessory: { type: "icon", icon: c.CircleInformationIcon },
                            label: C.intl.string(C.t["2ia+9V"]),
                            subtext: E ?? (D ? C.intl.string((0, f.hK)(i.badge_id)) : void 0),
                            action: function () {
                                ((0, I.default)({
                                    actionName: "badge_directory_opened",
                                    badge: i,
                                    displayedUserId: b.default.getCurrentUser()?.id,
                                    isSociallyNavigated: !1,
                                    hasUnreadIndicator: z,
                                    source: "customize_popout",
                                }),
                                    n(),
                                    (0, x.openBadgeDirectoryModal)({
                                        initialBadgeId: i.badge_id,
                                        viewingCurrentUserBadges: !0,
                                    }));
                            },
                        }),
                        X &&
                            !N &&
                            (0, t.jsx)(d.Dr, {
                                id: "move-badge-to-front",
                                iconLeft: r.ArrowLargeLeftIcon,
                                leadingAccessory: { type: "icon", icon: r.ArrowLargeLeftIcon },
                                label: C.intl.string(C.t.BpXa17),
                                action: function () {
                                    (0, y.hB)((0, y.i1)(R, U, 0));
                                },
                            }),
                        X &&
                            !O &&
                            (0, t.jsx)(d.Dr, {
                                id: "move-badge-to-back",
                                iconLeft: s.ArrowLargeRightIcon,
                                leadingAccessory: { type: "icon", icon: s.ArrowLargeRightIcon },
                                label: C.intl.string(C.t["4/7x+3"]),
                                action: function () {
                                    (0, y.hB)((0, y.i1)(R, U, R.length - 1));
                                },
                            }),
                        M
                            ? (0, t.jsx)(d.Dr, {
                                  id: "unhide-badge",
                                  iconLeft: l.EyeIcon,
                                  leadingAccessory: { type: "icon", icon: l.EyeIcon },
                                  label: C.intl.string(C.t.RXOPc3),
                                  action: () => P(!1),
                              })
                            : !D &&
                              (0, t.jsx)(d.Dr, {
                                  id: "hide-badge",
                                  iconLeft: g.EyeSlashIcon,
                                  leadingAccessory: { type: "icon", icon: g.EyeSlashIcon },
                                  label: C.intl.string(C.t.xSWJPo),
                                  action: () => P(!0),
                              }),
                    ],
                }),
            });
        },
    },
);
