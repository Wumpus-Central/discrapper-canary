n.d(t, { A: () => R, T: () => O });
var i = n(627968),
    r = n(64700),
    a = n(17928),
    s = n(550079),
    _ = n(477782),
    l = n(959988),
    o = n(820284),
    E = n(313961),
    d = n(74329),
    c = n(405916),
    u = n(338771),
    I = n(616356),
    A = n(287809),
    T = n(562153),
    S = n(652215),
    N = n(985018);
function O(e, t, n) {
    let i = (0, a.bG)([E.A], () => (null != e ? E.A.getSelectedParticipantId(e.id) : null)),
        s = (0, a.bG)([I.A], () => (null != i ? I.A.getActiveStreamForStreamKey(i) : null), [i]),
        _ = (0, a.cf)([A.default], () => n.reduce((e, t) => ((e[t.ownerId] = A.default.getUser(t.ownerId)), e), {}), [
            n,
        ]);
    return r.useMemo(() => {
        if (null == e) return [];
        let i = n.filter((e) => e.ownerId !== t?.id);
        return 1 === i.length && i[0].ownerId === s?.ownerId
            ? []
            : i.map((t) => ({ stream: t, username: T.Ay.getName(e.getGuildId(), e.id, _[t.ownerId]) }));
    }, [_, n, e, s, t?.id]);
}
function R(e) {
    let {
            channel: t,
            currentUser: n,
            activeStreams: r,
            hideSelfOptions: a = !1,
            showReportOption: E = !1,
            handleGoLive: I,
            onClose: A,
            onSelect: T,
            appContext: R = S.BRT.APP,
            disableChangeWindows: f = !1,
            onInteraction: C,
        } = e,
        p = r.find((e) => e.ownerId === n?.id) ?? null,
        m = O(t, n, r),
        L = (0, d.A)(p, R),
        D = (0, c.E)({
            disableChangeWindows: f,
            stream: p,
            showReportOption: E,
            handleGoLive: I,
            minimal: !0,
            appContext: R,
        });
    return (0, i.jsx)(o.A, {
        section: S.JJy.CONTEXT_MENU,
        children: (0, i.jsxs)(s.W, {
            "data-menu-migrated": !0,
            onSelect: T,
            navId: "manage-streams",
            onClose: A,
            onInteraction: C,
            "aria-label": null != p ? N.intl.string(N.t.S5anIc) : N.intl.string(N.t.fjBNo1),
            children: [
                (0, i.jsx)(_.rX, {
                    children: m.map((e) => {
                        let { stream: t, username: n } = e;
                        return (0, i.jsx)(
                            _.Dr,
                            {
                                id: t.ownerId,
                                label: N.intl.formatToPlainString(N.t["7rkg+/"], { username: n }),
                                icon: l.G,
                                leadingAccessory: { type: "icon", icon: l.G },
                                action: () => (0, u.A)(t),
                            },
                            `manage-stream-menu${t.ownerId}`,
                        );
                    }),
                }),
                a ? null : D,
                a ? null : (0, i.jsx)(_.rX, { children: L }),
            ],
        }),
    });
}
