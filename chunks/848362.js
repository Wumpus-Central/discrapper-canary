n.d(t, {
    A: () => E,
    T: () => g,
});
var r = n(627968),
    i = n(64700),
    a = n(311907),
    s = n(397927),
    o = n(820284),
    l = n(313961),
    c = n(74329),
    u = n(845885),
    d = n(338771),
    f = n(616356),
    p = n(287809),
    _ = n(562153),
    h = n(652215),
    m = n(985018);

function g(e, t, n) {
    let r = (0, a.bG)([l.A], () => (null != e ? l.A.getSelectedParticipantId(e.id) : null)),
        s = (0, a.bG)([f.A], () => (null != r ? f.A.getActiveStreamForStreamKey(r) : null), [r]),
        o = (0, a.cf)([p.default], () => n.reduce((e, t) => ((e[t.ownerId] = p.default.getUser(t.ownerId)), e), {}), [
            n,
        ]);
    return i.useMemo(() => {
        if (null == e) return [];
        let r = n.filter((e) => e.ownerId !== (null == t ? void 0 : t.id));
        return 1 === r.length && r[0].ownerId === (null == s ? void 0 : s.ownerId)
            ? []
            : r.map((t) => ({
                  stream: t,
                  username: _.Ay.getName(e.getGuildId(), e.id, o[t.ownerId]),
              }));
    }, [o, n, e, s, null == t ? void 0 : t.id]);
}

function E(e) {
    var t;
    let {
            channel: n,
            currentUser: i,
            activeStreams: a,
            hideSelfOptions: l = !1,
            showReportOption: f = !1,
            handleGoLive: p,
            onClose: _,
            onSelect: E,
            appContext: y = h.BRT.APP,
            disableChangeWindows: b = !1,
            onInteraction: O,
        } = e,
        v = null != (t = a.find((e) => e.ownerId === (null == i ? void 0 : i.id))) ? t : null,
        A = g(n, i, a),
        I = (0, c.A)(v, y),
        S = (0, u.E)({
            disableChangeWindows: b,
            stream: v,
            showReportOption: f,
            handleGoLive: p,
            minimal: !0,
            appContext: y,
        });
    return (0, r.jsx)(o.A, {
        section: h.JJy.CONTEXT_MENU,
        children: (0, r.jsxs)(s.W1t, {
            "data-menu-mixed": !0,
            onSelect: E,
            navId: "manage-streams",
            onClose: _,
            onInteraction: O,
            "aria-label": null != v ? m.intl.string(m.t.S5anIc) : m.intl.string(m.t.fjBNo1),
            children: [
                (0, r.jsx)(s.rXV, {
                    children: A.map((e) => {
                        let { stream: t, username: n } = e;
                        return (0, r.jsx)(
                            s.Drp,
                            {
                                id: t.ownerId,
                                label: m.intl.formatToPlainString(m.t["7rkg+/"], {
                                    username: n,
                                }),
                                icon: s.GT3,
                                action: () => (0, d.A)(t),
                            },
                            "manage-stream-menu".concat(t.ownerId),
                        );
                    }),
                }),
                l ? null : S,
                l
                    ? null
                    : (0, r.jsx)(s.rXV, {
                          children: (0, r.jsx)(s.Drp, {
                              id: "more-options",
                              label: m.intl.string(m.t.PdRCRg),
                              children: I,
                          }),
                      }),
            ],
        }),
    });
}
