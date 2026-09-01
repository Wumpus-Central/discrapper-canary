n.d(i, { default: () => m });
var t = n(477900),
    a = n(582128),
    d = n(980707),
    o = n(477782),
    s = n(885574),
    l = n(548411),
    r = n(554830),
    c = n(952270),
    g = n(442433),
    b = n(643056),
    u = n(988341),
    h = n(234e3),
    f = n(327791),
    x = n(470739),
    p = n(577931),
    _ = n(375708);
function m(e) {
    let { badge: i, onClosePopout: n, onSelect: m } = e,
        { reorderableBadges: C, hiddenBadges: j } = (0, p.A)(),
        { tenureBadgeHideable: B } = b.A.useConfig({ location: "BadgeCustomizationContextMenu" }),
        I = a.useMemo(() => (0, u.jg)({ tenureBadgeHideable: B }), [B]),
        v = (0, f.A)(),
        k = I.has(i.badge_id),
        w = a.useMemo(
            () =>
                C.map((e) => {
                    let { badge_id: i } = e;
                    return i;
                }),
            [C],
        ),
        D = w.indexOf(i.badge_id),
        L = v && -1 !== D,
        A = 0 === D,
        M = D === w.length - 1;
    return (0, t.jsx)(d.W, {
        navId: "badge-customization-context",
        onClose: g.Z_,
        "aria-label": _.intl.string(_.t["2ia+9V"]),
        onSelect: m,
        children: (0, t.jsxs)(o.rX, {
            children: [
                (0, t.jsx)(o.Dr, {
                    id: "view-badge-details",
                    iconLeft: s.CircleInformationIcon,
                    label: _.intl.string(_.t["2ia+9V"]),
                    action: function () {
                        n(), (0, x._)({ initialBadgeId: i.badge_id, viewingCurrentUserBadges: !0 });
                    },
                }),
                L &&
                    !A &&
                    (0, t.jsx)(o.Dr, {
                        id: "move-badge-to-front",
                        iconLeft: l.Z,
                        label: _.intl.string(_.t.BpXa17),
                        action: function () {
                            (0, h.hB)((0, h.i1)(w, D, 0));
                        },
                    }),
                L &&
                    !M &&
                    (0, t.jsx)(o.Dr, {
                        id: "move-badge-to-back",
                        iconLeft: r.K,
                        label: _.intl.string(_.t["4/7x+3"]),
                        action: function () {
                            (0, h.hB)((0, h.i1)(w, D, w.length - 1));
                        },
                    }),
                !k &&
                    (0, t.jsx)(o.Dr, {
                        id: "hide-badge",
                        iconLeft: c.EyeSlashIcon,
                        label: _.intl.string(_.t.xSWJPo),
                        action: function () {
                            (0, h.RC)({
                                badgeId: i.badge_id,
                                hidden: !0,
                                reorderableBadgeIds: w,
                                hiddenBadgeIds: j.map((e) => {
                                    let { badge_id: i } = e;
                                    return i;
                                }),
                                canReorder: v,
                            });
                        },
                    }),
            ],
        }),
    });
}
