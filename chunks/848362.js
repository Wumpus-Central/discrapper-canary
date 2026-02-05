"use strict";
n.d(t, { A: () => E, T: () => g });
var r = n(627968),
    i = n(64700),
    a = n(311907),
    s = n(397927),
    o = n(820284),
    l = n(313961),
    u = n(74329),
    c = n(845885),
    d = n(338771),
    _ = n(616356),
    f = n(287809),
    p = n(562153),
    h = n(652215),
    m = n(985018);
function g(e, t, n) {
    let r = (0, a.bG)([l.A], () => (null != e ? l.A.getSelectedParticipantId(e.id) : null)),
        s = (0, a.bG)([_.A], () => (null != r ? _.A.getActiveStreamForStreamKey(r) : null), [r]),
        o = (0, a.cf)([f.default], () => n.reduce((e, t) => ((e[t.ownerId] = f.default.getUser(t.ownerId)), e), {}), [
            n,
        ]);
    return i.useMemo(() => {
        if (null == e) return [];
        let r = n.filter((e) => e.ownerId !== t?.id);
        return 1 === r.length && r[0].ownerId === s?.ownerId
            ? []
            : r.map((t) => ({ stream: t, username: p.Ay.getName(e.getGuildId(), e.id, o[t.ownerId]) }));
    }, [o, n, e, s, t?.id]);
}
function E(e) {
    let {
            channel: t,
            currentUser: n,
            activeStreams: i,
            hideSelfOptions: a = !1,
            showReportOption: l = !1,
            handleGoLive: _,
            onClose: f,
            onSelect: p,
            appContext: E = h.BRT.APP,
            disableChangeWindows: A = !1,
            onInteraction: I,
        } = e,
        T = i.find((e) => e.ownerId === n?.id) ?? null,
        y = g(t, n, i),
        S = (0, u.A)(T, E),
        v = (0, c.E)({
            disableChangeWindows: A,
            stream: T,
            showReportOption: l,
            handleGoLive: _,
            minimal: !0,
            appContext: E,
        });
    return (0, r.jsx)(o.A, {
        section: h.JJy.CONTEXT_MENU,
        children: (0, r.jsxs)(s.W1t, {
            "data-menu-needs-review": !0,
            onSelect: p,
            navId: "manage-streams",
            onClose: f,
            onInteraction: I,
            "aria-label": null != T ? m.intl.string(m.t.S5anIc) : m.intl.string(m.t.fjBNo1),
            children: [
                (0, r.jsx)(s.rXV, {
                    children: y.map((e) => {
                        let { stream: t, username: n } = e;
                        return (0, r.jsx)(
                            s.Drp,
                            {
                                id: t.ownerId,
                                label: m.intl.formatToPlainString(m.t["7rkg+/"], { username: n }),
                                icon: s.GT3,
                                leadingAccessory: { type: "icon", icon: s.GT3 },
                                action: () => (0, d.A)(t),
                            },
                            `manage-stream-menu${t.ownerId}`,
                        );
                    }),
                }),
                a ? null : v,
                a ? null : (0, r.jsx)(s.rXV, { children: S }),
            ],
        }),
    });
}
