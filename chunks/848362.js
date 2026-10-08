n.d(t, { A: () => C, T: () => p });
var i = n(477900),
    r = n(582128),
    l = n(17928),
    s = n(980707),
    a = n(477782),
    o = n(959988),
    c = n(820284),
    u = n(198052),
    d = n(74329),
    h = n(405916),
    m = n(338771),
    A = n(616356),
    g = n(287809),
    f = n(562153),
    b = n(652215),
    E = n(660183);
function p(e, t, n) {
    let i = (0, l.bG)([u.A], () => (null != e ? u.A.getSelectedParticipantId(e.id) : null)),
        s = (0, l.bG)([A.A], () => (null != i ? A.A.getActiveStreamForStreamKey(i) : null), [i]),
        a = (0, l.cf)([g.default], () => n.reduce((e, t) => ((e[t.ownerId] = g.default.getUser(t.ownerId)), e), {}), [
            n,
        ]);
    return r.useMemo(() => {
        if (null == e) return [];
        let i = n.filter((e) => e.ownerId !== t?.id);
        return 1 === i.length && i[0].ownerId === s?.ownerId
            ? []
            : i.map((t) => ({ stream: t, username: f.Ay.getName(e.getGuildId(), e.id, a[t.ownerId]) }));
    }, [a, n, e, s, t?.id]);
}
function C(e) {
    let {
            channel: t,
            currentUser: n,
            activeStreams: r,
            hideSelfOptions: l = !1,
            showReportOption: u = !1,
            handleGoLive: A,
            onClose: g,
            onSelect: f,
            appContext: C = b.BRT.APP,
            disableChangeWindows: S = !1,
            onInteraction: v,
        } = e,
        _ = r.find((e) => e.ownerId === n?.id) ?? null,
        y = p(t, n, r),
        O = (0, d.A)(_, C),
        T = (0, h.E)({
            disableChangeWindows: S,
            stream: _,
            showReportOption: u,
            handleGoLive: A,
            minimal: !0,
            appContext: C,
        });
    return (0, i.jsx)(c.A, {
        section: b.JJy.CONTEXT_MENU,
        children: (0, i.jsxs)(s.W, {
            "data-menu-migrated": !0,
            onSelect: f,
            navId: "manage-streams",
            onClose: g,
            onInteraction: v,
            "aria-label": null != _ ? E.intl.string(E.t.S5anIc) : E.intl.string(E.t.fjBNo1),
            children: [
                (0, i.jsx)(a.rX, {
                    children: y.map((e) => {
                        let { stream: t, username: n } = e;
                        return (0, i.jsx)(
                            a.Dr,
                            {
                                id: t.ownerId,
                                label: E.intl.formatToPlainString(E.t["7rkg+/"], { username: n }),
                                icon: o.G,
                                leadingAccessory: { type: "icon", icon: o.G },
                                action: () => (0, m.A)(t),
                            },
                            `manage-stream-menu${t.ownerId}`,
                        );
                    }),
                }),
                l ? null : T,
                l ? null : (0, i.jsx)(a.rX, { children: O }),
            ],
        }),
    });
}
