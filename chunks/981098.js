n.d(t, { y: () => m });
var i = n(64700),
    s = n(403581),
    l = n(974544),
    a = n(419954),
    r = n(933297),
    o = n(780964),
    d = n(949302),
    u = n(389307),
    c = n(985018);
let g = (0, a.t_)(o.X.NITRO_PANEL, {
        useTitle: () => c.intl.string(c.t.Ipxkog),
        useObscuredNotice: l.L,
        buildLayout: () => [u.r],
    }),
    m = (0, a.i4)(o.X.NITRO_SIDEBAR_ITEM, {
        useTitle: () => c.intl.string(c.t.Ipxkog),
        icon: s.t,
        usePersistentBadge: function (e) {
            return i.useMemo(
                () => ({ badgeType: r.Xi.STRONGLY_DISCOURAGED_CUSTOM, useCustomBadge: () => (0, d.e)(e) }),
                [e],
            );
        },
        buildLayout: () => [g],
    });
