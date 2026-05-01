n.d(t, { A: () => f, T: () => N });
var i = n(627968),
    a = n(64700),
    r = n(17928),
    s = n(550079),
    l = n(477782),
    o = n(959988),
    d = n(820284),
    c = n(313961),
    _ = n(74329),
    E = n(405916),
    u = n(338771),
    A = n(616356),
    I = n(287809),
    T = n(562153),
    h = n(652215),
    S = n(985018);
function N(e, t, n) {
    let i = (0, r.bG)([c.A], () => (null != e ? c.A.getSelectedParticipantId(e.id) : null)),
        s = (0, r.bG)([A.A], () => (null != i ? A.A.getActiveStreamForStreamKey(i) : null), [i]),
        l = (0, r.cf)([I.default], () => n.reduce((e, t) => ((e[t.ownerId] = I.default.getUser(t.ownerId)), e), {}), [
            n,
        ]);
    return a.useMemo(() => {
        if (null == e) return [];
        let i = n.filter((e) => e.ownerId !== t?.id);
        return 1 === i.length && i[0].ownerId === s?.ownerId
            ? []
            : i.map((t) => ({ stream: t, username: T.Ay.getName(e.getGuildId(), e.id, l[t.ownerId]) }));
    }, [l, n, e, s, t?.id]);
}
function f(e) {
    let {
            channel: t,
            currentUser: n,
            activeStreams: a,
            hideSelfOptions: r = !1,
            showReportOption: c = !1,
            handleGoLive: A,
            onClose: I,
            onSelect: T,
            appContext: f = h.BRT.APP,
            disableChangeWindows: p = !1,
            onInteraction: m,
        } = e,
        O = a.find((e) => e.ownerId === n?.id) ?? null,
        C = N(t, n, a),
        R = (0, _.A)(O, f),
        g = (0, E.E)({
            disableChangeWindows: p,
            stream: O,
            showReportOption: c,
            handleGoLive: A,
            minimal: !0,
            appContext: f,
        });
    return (0, i.jsx)(d.A, {
        section: h.JJy.CONTEXT_MENU,
        children: (0, i.jsxs)(s.W, {
            "data-menu-migrated": !0,
            onSelect: T,
            navId: "manage-streams",
            onClose: I,
            onInteraction: m,
            "aria-label": null != O ? S.intl.string(S.t.S5anIc) : S.intl.string(S.t.fjBNo1),
            children: [
                (0, i.jsx)(l.rX, {
                    children: C.map((e) => {
                        let { stream: t, username: n } = e;
                        return (0, i.jsx)(
                            l.Dr,
                            {
                                id: t.ownerId,
                                label: S.intl.formatToPlainString(S.t["7rkg+/"], { username: n }),
                                icon: o.G,
                                leadingAccessory: { type: "icon", icon: o.G },
                                action: () => (0, u.A)(t),
                            },
                            `manage-stream-menu${t.ownerId}`,
                        );
                    }),
                }),
                r ? null : g,
                r ? null : (0, i.jsx)(l.rX, { children: R }),
            ],
        }),
    });
}
