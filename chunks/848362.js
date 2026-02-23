"use strict";
n.d(t, { A: () => g, T: () => E });
var r = n(627968),
    i = n(64700),
    s = n(311907),
    a = n(397927),
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
function E(e, t, n) {
    let r = (0, s.bG)([l.A], () => (null != e ? l.A.getSelectedParticipantId(e.id) : null)),
        a = (0, s.bG)([_.A], () => (null != r ? _.A.getActiveStreamForStreamKey(r) : null), [r]),
        o = (0, s.cf)([f.default], () => n.reduce((e, t) => ((e[t.ownerId] = f.default.getUser(t.ownerId)), e), {}), [
            n,
        ]);
    return i.useMemo(() => {
        if (null == e) return [];
        let r = n.filter((e) => e.ownerId !== t?.id);
        return 1 === r.length && r[0].ownerId === a?.ownerId
            ? []
            : r.map((t) => ({ stream: t, username: p.Ay.getName(e.getGuildId(), e.id, o[t.ownerId]) }));
    }, [o, n, e, a, t?.id]);
}
function g(e) {
    let {
            channel: t,
            currentUser: n,
            activeStreams: i,
            hideSelfOptions: s = !1,
            showReportOption: l = !1,
            handleGoLive: _,
            onClose: f,
            onSelect: p,
            appContext: g = h.BRT.APP,
            disableChangeWindows: A = !1,
            onInteraction: I,
        } = e,
        T = i.find((e) => e.ownerId === n?.id) ?? null,
        S = E(t, n, i),
        y = (0, u.A)(T, g),
        v = (0, c.E)({
            disableChangeWindows: A,
            stream: T,
            showReportOption: l,
            handleGoLive: _,
            minimal: !0,
            appContext: g,
        });
    return (0, r.jsx)(o.A, {
        section: h.JJy.CONTEXT_MENU,
        children: (0, r.jsxs)(a.W1t, {
            "data-menu-migrated": !0,
            onSelect: p,
            navId: "manage-streams",
            onClose: f,
            onInteraction: I,
            "aria-label": null != T ? m.intl.string(m.t.S5anIc) : m.intl.string(m.t.fjBNo1),
            children: [
                (0, r.jsx)(a.rXV, {
                    children: S.map((e) => {
                        let { stream: t, username: n } = e;
                        return (0, r.jsx)(
                            a.Drp,
                            {
                                id: t.ownerId,
                                label: m.intl.formatToPlainString(m.t["7rkg+/"], { username: n }),
                                icon: a.GT3,
                                leadingAccessory: { type: "icon", icon: a.GT3 },
                                action: () => (0, d.A)(t),
                            },
                            `manage-stream-menu${t.ownerId}`,
                        );
                    }),
                }),
                s ? null : v,
                s ? null : (0, r.jsx)(a.rXV, { children: y }),
            ],
        }),
    });
}
