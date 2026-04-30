"use strict";
n.d(t, { A: () => I, T: () => A });
var i = n(627968),
    r = n(64700),
    s = n(17928),
    a = n(980707),
    o = n(477782),
    l = n(959988),
    u = n(820284),
    c = n(313961),
    d = n(74329),
    _ = n(405916),
    f = n(338771),
    h = n(616356),
    p = n(287809),
    E = n(562153),
    m = n(652215),
    g = n(375708);
function A(e, t, n) {
    let i = (0, s.bG)([c.A], () => (null != e ? c.A.getSelectedParticipantId(e.id) : null)),
        a = (0, s.bG)([h.A], () => (null != i ? h.A.getActiveStreamForStreamKey(i) : null), [i]),
        o = (0, s.cf)([p.default], () => n.reduce((e, t) => ((e[t.ownerId] = p.default.getUser(t.ownerId)), e), {}), [
            n,
        ]);
    return r.useMemo(() => {
        if (null == e) return [];
        let i = n.filter((e) => e.ownerId !== t?.id);
        return 1 === i.length && i[0].ownerId === a?.ownerId
            ? []
            : i.map((t) => ({ stream: t, username: E.Ay.getName(e.getGuildId(), e.id, o[t.ownerId]) }));
    }, [o, n, e, a, t?.id]);
}
function I(e) {
    let {
            channel: t,
            currentUser: n,
            activeStreams: r,
            hideSelfOptions: s = !1,
            showReportOption: c = !1,
            handleGoLive: h,
            onClose: p,
            onSelect: E,
            appContext: I = m.BRT.APP,
            disableChangeWindows: T = !1,
            onInteraction: S,
        } = e,
        N = r.find((e) => e.ownerId === n?.id) ?? null,
        y = A(t, n, r),
        C = (0, d.A)(N, I),
        v = (0, _.E)({
            disableChangeWindows: T,
            stream: N,
            showReportOption: c,
            handleGoLive: h,
            minimal: !0,
            appContext: I,
        });
    return (0, i.jsx)(u.A, {
        section: m.JJy.CONTEXT_MENU,
        children: (0, i.jsxs)(a.W, {
            "data-menu-migrated": !0,
            onSelect: E,
            navId: "manage-streams",
            onClose: p,
            onInteraction: S,
            "aria-label": null != N ? g.intl.string(g.t.S5anIc) : g.intl.string(g.t.fjBNo1),
            children: [
                (0, i.jsx)(o.rX, {
                    children: y.map((e) => {
                        let { stream: t, username: n } = e;
                        return (0, i.jsx)(
                            o.Dr,
                            {
                                id: t.ownerId,
                                label: g.intl.formatToPlainString(g.t["7rkg+/"], { username: n }),
                                icon: l.G,
                                leadingAccessory: { type: "icon", icon: l.G },
                                action: () => (0, f.A)(t),
                            },
                            `manage-stream-menu${t.ownerId}`,
                        );
                    }),
                }),
                s ? null : v,
                s ? null : (0, i.jsx)(o.rX, { children: C }),
            ],
        }),
    });
}
