var i = n(477900),
    r = n(582128),
    l = n(855986),
    s = n(165862),
    a = n(477782),
    o = n(959988),
    u = n(820284),
    c = n(628983),
    d = n(74329),
    h = n(600125),
    m = n(338771),
    p = n(616356),
    f = n(287809),
    g = n(562153),
    A = n(652215),
    v = n(792996);
function E(e, t, n) {
    let i = (0, l.bG)([c.A], () => (null != e ? c.A.getSelectedParticipantId(e.id) : null)),
        s = (0, l.bG)([p.A], () => (null != i ? p.A.getActiveStreamForStreamKey(i) : null), [i]),
        a = (0, l.cf)([f.default], () => n.reduce((e, t) => ((e[t.ownerId] = f.default.getUser(t.ownerId)), e), {}), [
            n,
        ]);
    return r.useMemo(() => {
        if (null == e) return [];
        let i = n.filter((e) => e.ownerId !== t?.id);
        return 1 === i.length && i[0].ownerId === s?.ownerId
            ? []
            : i.map((t) => ({ stream: t, username: g.Ay.getName(e.getGuildId(), e.id, a[t.ownerId]) }));
    }, [a, n, e, s, t?.id]);
}
n.d(
    t,
    {},
    {
        A: function (e) {
            let {
                    channel: t,
                    currentUser: n,
                    activeStreams: r,
                    hideSelfOptions: l = !1,
                    showReportOption: c = !1,
                    handleGoLive: p,
                    onClose: f,
                    onSelect: g,
                    appContext: y = A.BRT.APP,
                    disableChangeWindows: I = !1,
                    onInteraction: C,
                } = e,
                b = r.find((e) => e.ownerId === n?.id) ?? null,
                S = E(t, n, r),
                w = (0, d.A)(b, y),
                x = (0, h.E)({
                    disableChangeWindows: I,
                    stream: b,
                    showReportOption: c,
                    handleGoLive: p,
                    minimal: !0,
                    appContext: y,
                });
            return (0, i.jsx)(u.A, {
                section: A.JJy.CONTEXT_MENU,
                children: (0, i.jsxs)(s.W, {
                    "data-menu-migrated": !0,
                    onSelect: g,
                    navId: "manage-streams",
                    onClose: f,
                    onInteraction: C,
                    "aria-label": null != b ? v.intl.string(v.t.S5anIc) : v.intl.string(v.t.fjBNo1),
                    children: [
                        (0, i.jsx)(a.rX, {
                            children: S.map((e) => {
                                let { stream: t, username: n } = e;
                                return (0, i.jsx)(
                                    a.Dr,
                                    {
                                        id: t.ownerId,
                                        label: v.intl.formatToPlainString(v.t["7rkg+/"], { username: n }),
                                        icon: o.ScreenXIcon,
                                        leadingAccessory: { type: "icon", icon: o.ScreenXIcon },
                                        action: () => (0, m.A)(t),
                                    },
                                    `manage-stream-menu${t.ownerId}`,
                                );
                            }),
                        }),
                        l ? null : x,
                        l ? null : (0, i.jsx)(a.rX, { children: w }),
                    ],
                }),
            });
        },
        T: E,
    },
);
