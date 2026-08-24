n.d(t, { A: () => C, T: () => p });
var i = n(477900),
    r = n(582128),
    l = n(17928),
    s = n(980707),
    a = n(477782),
    o = n(959988),
    u = n(820284),
    c = n(198052),
    d = n(74329),
    A = n(405916),
    h = n(338771),
    m = n(616356),
    g = n(287809),
    f = n(562153),
    E = n(652215),
    b = n(375708);
function p(e, t, n) {
    let i = (0, l.bG)([c.A], () => (null != e ? c.A.getSelectedParticipantId(e.id) : null)),
        s = (0, l.bG)([m.A], () => (null != i ? m.A.getActiveStreamForStreamKey(i) : null), [i]),
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
            showReportOption: c = !1,
            handleGoLive: m,
            onClose: g,
            onSelect: f,
            appContext: C = E.BRT.APP,
            disableChangeWindows: S = !1,
            onInteraction: v,
        } = e,
        _ = r.find((e) => e.ownerId === n?.id) ?? null,
        T = p(t, n, r),
        O = (0, d.A)(_, C),
        x = (0, A.E)({
            disableChangeWindows: S,
            stream: _,
            showReportOption: c,
            handleGoLive: m,
            minimal: !0,
            appContext: C,
        });
    return (0, i.jsx)(u.A, {
        section: E.JJy.CONTEXT_MENU,
        children: (0, i.jsxs)(s.W, {
            "data-menu-migrated": !0,
            onSelect: f,
            navId: "manage-streams",
            onClose: g,
            onInteraction: v,
            "aria-label": null != _ ? b.intl.string(b.t.S5anIc) : b.intl.string(b.t.fjBNo1),
            children: [
                (0, i.jsx)(a.rX, {
                    children: T.map((e) => {
                        let { stream: t, username: n } = e;
                        return (0, i.jsx)(
                            a.Dr,
                            {
                                id: t.ownerId,
                                label: b.intl.formatToPlainString(b.t["7rkg+/"], { username: n }),
                                icon: o.G,
                                leadingAccessory: { type: "icon", icon: o.G },
                                action: () => (0, h.A)(t),
                            },
                            `manage-stream-menu${t.ownerId}`,
                        );
                    }),
                }),
                l ? null : x,
                l ? null : (0, i.jsx)(a.rX, { children: O }),
            ],
        }),
    });
}
