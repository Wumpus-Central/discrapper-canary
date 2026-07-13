n.d(t, { A: () => C, T: () => b });
var i = n(627968),
    r = n(64700),
    l = n(17928),
    s = n(980707),
    a = n(477782),
    o = n(959988),
    c = n(820284),
    u = n(313961),
    d = n(74329),
    A = n(405916),
    h = n(338771),
    m = n(616356),
    g = n(287809),
    p = n(562153),
    f = n(652215),
    E = n(375708);
function b(e, t, n) {
    let i = (0, l.bG)([u.A], () => (null != e ? u.A.getSelectedParticipantId(e.id) : null)),
        s = (0, l.bG)([m.A], () => (null != i ? m.A.getActiveStreamForStreamKey(i) : null), [i]),
        a = (0, l.cf)([g.default], () => n.reduce((e, t) => ((e[t.ownerId] = g.default.getUser(t.ownerId)), e), {}), [
            n,
        ]);
    return r.useMemo(() => {
        if (null == e) return [];
        let i = n.filter((e) => e.ownerId !== t?.id);
        return 1 === i.length && i[0].ownerId === s?.ownerId
            ? []
            : i.map((t) => ({ stream: t, username: p.Ay.getName(e.getGuildId(), e.id, a[t.ownerId]) }));
    }, [a, n, e, s, t?.id]);
}
function C(e) {
    let {
            channel: t,
            currentUser: n,
            activeStreams: r,
            hideSelfOptions: l = !1,
            showReportOption: u = !1,
            handleGoLive: m,
            onClose: g,
            onSelect: p,
            appContext: C = f.BRT.APP,
            disableChangeWindows: v = !1,
            onInteraction: S,
        } = e,
        y = r.find((e) => e.ownerId === n?.id) ?? null,
        T = b(t, n, r),
        x = (0, d.A)(y, C),
        O = (0, A.E)({
            disableChangeWindows: v,
            stream: y,
            showReportOption: u,
            handleGoLive: m,
            minimal: !0,
            appContext: C,
        });
    return (0, i.jsx)(c.A, {
        section: f.JJy.CONTEXT_MENU,
        children: (0, i.jsxs)(s.W, {
            "data-menu-migrated": !0,
            onSelect: p,
            navId: "manage-streams",
            onClose: g,
            onInteraction: S,
            "aria-label": null != y ? E.intl.string(E.t.S5anIc) : E.intl.string(E.t.fjBNo1),
            children: [
                (0, i.jsx)(a.rX, {
                    children: T.map((e) => {
                        let { stream: t, username: n } = e;
                        return (0, i.jsx)(
                            a.Dr,
                            {
                                id: t.ownerId,
                                label: E.intl.formatToPlainString(E.t["7rkg+/"], { username: n }),
                                icon: o.G,
                                leadingAccessory: { type: "icon", icon: o.G },
                                action: () => (0, h.A)(t),
                            },
                            `manage-stream-menu${t.ownerId}`,
                        );
                    }),
                }),
                l ? null : O,
                l ? null : (0, i.jsx)(a.rX, { children: x }),
            ],
        }),
    });
}
