n.d(t, { A: () => b, T: () => C });
var i = n(477900),
    r = n(582128),
    l = n(17928),
    s = n(980707),
    a = n(477782),
    o = n(959988),
    u = n(820284),
    c = n(198052),
    d = n(74329),
    m = n(405916),
    h = n(338771),
    g = n(616356),
    f = n(287809),
    A = n(562153),
    p = n(652215),
    E = n(105292);
function C(e, t, n) {
    let i = (0, l.bG)([c.A], () => (null != e ? c.A.getSelectedParticipantId(e.id) : null)),
        s = (0, l.bG)([g.A], () => (null != i ? g.A.getActiveStreamForStreamKey(i) : null), [i]),
        a = (0, l.cf)([f.default], () => n.reduce((e, t) => ((e[t.ownerId] = f.default.getUser(t.ownerId)), e), {}), [
            n,
        ]);
    return r.useMemo(() => {
        if (null == e) return [];
        let i = n.filter((e) => e.ownerId !== t?.id);
        return 1 === i.length && i[0].ownerId === s?.ownerId
            ? []
            : i.map((t) => ({ stream: t, username: A.Ay.getName(e.getGuildId(), e.id, a[t.ownerId]) }));
    }, [a, n, e, s, t?.id]);
}
function b(e) {
    let {
            channel: t,
            currentUser: n,
            activeStreams: r,
            hideSelfOptions: l = !1,
            showReportOption: c = !1,
            handleGoLive: g,
            onClose: f,
            onSelect: A,
            appContext: b = p.BRT.APP,
            disableChangeWindows: v = !1,
            onInteraction: T,
        } = e,
        _ = r.find((e) => e.ownerId === n?.id) ?? null,
        I = C(t, n, r),
        y = (0, d.A)(_, b),
        S = (0, m.E)({
            disableChangeWindows: v,
            stream: _,
            showReportOption: c,
            handleGoLive: g,
            minimal: !0,
            appContext: b,
        });
    return (0, i.jsx)(u.A, {
        section: p.JJy.CONTEXT_MENU,
        children: (0, i.jsxs)(s.W, {
            "data-menu-migrated": !0,
            onSelect: A,
            navId: "manage-streams",
            onClose: f,
            onInteraction: T,
            "aria-label": null != _ ? E.intl.string(E.t.S5anIc) : E.intl.string(E.t.fjBNo1),
            children: [
                (0, i.jsx)(a.rX, {
                    children: I.map((e) => {
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
                l ? null : S,
                l ? null : (0, i.jsx)(a.rX, { children: y }),
            ],
        }),
    });
}
