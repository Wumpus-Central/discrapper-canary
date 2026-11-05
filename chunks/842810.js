var t = n(477900),
    o = n(582128),
    a = n(165862),
    c = n(477782),
    d = n(885574),
    r = n(548411),
    s = n(554830),
    l = n(39623),
    g = n(952270),
    b = n(442433),
    u = n(643056),
    h = n(988341),
    f = n(234e3),
    p = n(327791),
    I = n(470739),
    y = n(577931),
    x = n(792996);
n.d(
    i,
    {},
    {
        default: function (e) {
            let { badge: i, onClosePopout: n, onAction: A, onSelect: m } = e,
                { reorderableBadges: L, hiddenBadges: _ } = (0, y.A)(),
                { tenureBadgeHideable: C } = u.A.useConfig({ location: "BadgeCustomizationContextMenu" }),
                j = o.useMemo(() => (0, h.jg)({ tenureBadgeHideable: C }), [C]),
                w = (0, p.A)(),
                B = j.has(i.badge_id),
                v = i.hidden ?? !1,
                D = o.useMemo(
                    () =>
                        L.map((e) => {
                            let { badge_id: i } = e;
                            return i;
                        }),
                    [L],
                ),
                k = D.indexOf(i.badge_id),
                E = w && -1 !== k,
                M = 0 === k,
                R = k === D.length - 1;
            function S(e) {
                (A(i.badge_id),
                    (0, f.RC)({
                        badgeId: i.badge_id,
                        hidden: e,
                        reorderableBadgeIds: D,
                        hiddenBadgeIds: _.map((e) => {
                            let { badge_id: i } = e;
                            return i;
                        }),
                        canReorder: w,
                    }));
            }
            return (0, t.jsx)(a.W, {
                navId: "badge-customization-context",
                onClose: b.Z_,
                "aria-label": x.intl.string(x.t["2ia+9V"]),
                onSelect: m,
                children: (0, t.jsxs)(c.rX, {
                    label: i.name,
                    children: [
                        (0, t.jsx)(c.Dr, {
                            id: "view-badge-details",
                            iconLeft: d.CircleInformationIcon,
                            leadingAccessory: { type: "icon", icon: d.CircleInformationIcon },
                            label: x.intl.string(x.t["2ia+9V"]),
                            subtext: B ? x.intl.string((0, h.hK)(i.badge_id)) : void 0,
                            action: function () {
                                (n(),
                                    (0, I.openBadgeDirectoryModal)({
                                        initialBadgeId: i.badge_id,
                                        viewingCurrentUserBadges: !0,
                                    }));
                            },
                        }),
                        E &&
                            !M &&
                            (0, t.jsx)(c.Dr, {
                                id: "move-badge-to-front",
                                iconLeft: r.ArrowLargeLeftIcon,
                                leadingAccessory: { type: "icon", icon: r.ArrowLargeLeftIcon },
                                label: x.intl.string(x.t.BpXa17),
                                action: function () {
                                    (0, f.hB)((0, f.i1)(D, k, 0));
                                },
                            }),
                        E &&
                            !R &&
                            (0, t.jsx)(c.Dr, {
                                id: "move-badge-to-back",
                                iconLeft: s.ArrowLargeRightIcon,
                                leadingAccessory: { type: "icon", icon: s.ArrowLargeRightIcon },
                                label: x.intl.string(x.t["4/7x+3"]),
                                action: function () {
                                    (0, f.hB)((0, f.i1)(D, k, D.length - 1));
                                },
                            }),
                        v
                            ? (0, t.jsx)(c.Dr, {
                                  id: "unhide-badge",
                                  iconLeft: l.EyeIcon,
                                  leadingAccessory: { type: "icon", icon: l.EyeIcon },
                                  label: x.intl.string(x.t.RXOPc3),
                                  action: () => S(!1),
                              })
                            : !B &&
                              (0, t.jsx)(c.Dr, {
                                  id: "hide-badge",
                                  iconLeft: g.EyeSlashIcon,
                                  leadingAccessory: { type: "icon", icon: g.EyeSlashIcon },
                                  label: x.intl.string(x.t.xSWJPo),
                                  action: () => S(!0),
                              }),
                    ],
                }),
            });
        },
    },
);
