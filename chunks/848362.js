n.d(t, { A: () => _, T: () => C });
var i = n(477900),
    r = n(582128),
    l = n(17928),
    s = n(980707),
    a = n(477782),
    o = n(959988),
    u = n(820284),
    c = n(198052),
    d = n(74329),
    h = n(405916),
    m = n(338771),
    A = n(616356),
    E = n(287809),
    g = n(562153),
    f = n(652215),
    p = n(105292);
function C(e, t, n) {
    let i = (0, l.bG)([c.A], () => (null != e ? c.A.getSelectedParticipantId(e.id) : null)),
        s = (0, l.bG)([A.A], () => (null != i ? A.A.getActiveStreamForStreamKey(i) : null), [i]),
        a = (0, l.cf)([E.default], () => n.reduce((e, t) => ((e[t.ownerId] = E.default.getUser(t.ownerId)), e), {}), [
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
function _(e) {
    let {
            channel: t,
            currentUser: n,
            activeStreams: r,
            hideSelfOptions: l = !1,
            showReportOption: c = !1,
            handleGoLive: A,
            onClose: E,
            onSelect: g,
            appContext: _ = f.BRT.APP,
            disableChangeWindows: b = !1,
            onInteraction: S,
        } = e,
        T = r.find((e) => e.ownerId === n?.id) ?? null,
        I = C(t, n, r),
        v = (0, d.A)(T, _),
        O = (0, h.E)({
            disableChangeWindows: b,
            stream: T,
            showReportOption: c,
            handleGoLive: A,
            minimal: !0,
            appContext: _,
        });
    return (0, i.jsx)(u.A, {
        section: f.JJy.CONTEXT_MENU,
        children: (0, i.jsxs)(s.W, {
            "data-menu-migrated": !0,
            onSelect: g,
            navId: "manage-streams",
            onClose: E,
            onInteraction: S,
            "aria-label": null != T ? p.intl.string(p.t.S5anIc) : p.intl.string(p.t.fjBNo1),
            children: [
                (0, i.jsx)(a.rX, {
                    children: I.map((e) => {
                        let { stream: t, username: n } = e;
                        return (0, i.jsx)(
                            a.Dr,
                            {
                                id: t.ownerId,
                                label: p.intl.formatToPlainString(p.t["7rkg+/"], { username: n }),
                                icon: o.G,
                                leadingAccessory: { type: "icon", icon: o.G },
                                action: () => (0, m.A)(t),
                            },
                            `manage-stream-menu${t.ownerId}`,
                        );
                    }),
                }),
                l ? null : O,
                l ? null : (0, i.jsx)(a.rX, { children: v }),
            ],
        }),
    });
}
