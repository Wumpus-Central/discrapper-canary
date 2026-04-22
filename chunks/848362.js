"use strict";
n.d(t, { A: () => I, T: () => A });
var r = n(627968),
    i = n(64700),
    s = n(311907),
    a = n(861672),
    o = n(477782),
    l = n(959988),
    u = n(820284),
    d = n(313961),
    c = n(74329),
    _ = n(845885),
    f = n(338771),
    E = n(616356),
    h = n(287809),
    p = n(562153),
    m = n(652215),
    g = n(985018);
function A(e, t, n) {
    let r = (0, s.bG)([d.A], () => (null != e ? d.A.getSelectedParticipantId(e.id) : null)),
        a = (0, s.bG)([E.A], () => (null != r ? E.A.getActiveStreamForStreamKey(r) : null), [r]),
        o = (0, s.cf)([h.default], () => n.reduce((e, t) => ((e[t.ownerId] = h.default.getUser(t.ownerId)), e), {}), [
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
function I(e) {
    let {
            channel: t,
            currentUser: n,
            activeStreams: i,
            hideSelfOptions: s = !1,
            showReportOption: d = !1,
            handleGoLive: E,
            onClose: h,
            onSelect: p,
            appContext: I = m.BRT.APP,
            disableChangeWindows: T = !1,
            onInteraction: S,
        } = e,
        y = i.find((e) => e.ownerId === n?.id) ?? null,
        N = A(t, n, i),
        O = (0, c.A)(y, I),
        R = (0, _.E)({
            disableChangeWindows: T,
            stream: y,
            showReportOption: d,
            handleGoLive: E,
            minimal: !0,
            appContext: I,
        });
    return (0, r.jsx)(u.A, {
        section: m.JJy.CONTEXT_MENU,
        children: (0, r.jsxs)(a.W, {
            "data-menu-migrated": !0,
            onSelect: p,
            navId: "manage-streams",
            onClose: h,
            onInteraction: S,
            "aria-label": null != y ? g.intl.string(g.t.S5anIc) : g.intl.string(g.t.fjBNo1),
            children: [
                (0, r.jsx)(o.rX, {
                    children: N.map((e) => {
                        let { stream: t, username: n } = e;
                        return (0, r.jsx)(
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
                s ? null : R,
                s ? null : (0, r.jsx)(o.rX, { children: O }),
            ],
        }),
    });
}
