t.d(n, { A: () => m, P: () => j });
var l = t(477900),
    i = t(582128),
    s = t(17928),
    a = t(477782),
    c = t(403581),
    r = t(606096),
    d = t(997146),
    o = t(406810),
    u = t(478016),
    h = t(404374),
    g = t(269073),
    p = t(164684),
    A = t(704456),
    I = t(85109),
    v = t(195404),
    y = t(576705),
    _ = t(927813),
    b = t(652215),
    x = t(375708);
function m(e, n) {
    let t = (0, g.jv)("LongPressMessageActionSheet"),
        i = (0, g.lA)("LongPressMessageActionSheet"),
        u = (0, s.bG)([I.A], () => I.A.getSavedMessage(e.channel_id, e.id)),
        A = j({ message: e, savedMessage: u });
    if (!t || (null == u && !n.isPrivate() && !y.A.can(b.xBc.READ_MESSAGE_HISTORY, n))) return null;
    if (null == u && !i)
        return (0, l.jsx)(a.Dr, {
            id: "save-for-later-upsell",
            label: x.intl.string(x.t.tpxJto),
            leadingAccessory: { type: "icon", icon: c.t, color: h.k0.PREMIUM_TIER_2 },
            icon: c.t,
            iconProps: { color: h.k0.PREMIUM_TIER_2 },
            action: () => (0, p.Y)({ channelId: e.channel_id, messageId: e.id, displayToast: !0 }),
        });
    let v = null != u && null == u.saveData.dueAt,
        _ = null != u && null != u.saveData.dueAt;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(a.Dr, {
                id: "bookmark",
                label: v ? x.intl.string(x.t.SvXS1Z) : x.intl.string(x.t.tpxJto),
                leadingAccessory: { type: "icon", icon: v ? r.c : d.c },
                action: () =>
                    v
                        ? (0, p.x)({ channelId: e.channel_id, messageId: e.id, displayToast: !0 })
                        : (0, p.Y)({ channelId: e.channel_id, messageId: e.id, displayToast: !0, dueAt: void 0 }),
            }),
            (0, l.jsx)(a.Dr, {
                id: "reminder",
                label: _ ? x.intl.string(x.t.vrbqs1) : x.intl.string(x.t.mJ3P0N),
                leadingAccessory: { type: "icon", icon: o.O },
                icon: o.O,
                children: A,
            }),
        ],
    });
}
function j(e) {
    let { message: n, savedMessage: t } = e,
        [s, c] = i.useState(new Date());
    i.useEffect(() => {
        let e = setInterval(() => c(new Date()), _.A.Millis.MINUTE);
        return () => {
            clearInterval(e);
        };
    }, []);
    let r = i.useCallback(
            (e) => (0, p.Y)({ channelId: n.channel_id, messageId: n.id, dueAt: e, displayToast: !0 }),
            [n.channel_id, n.id],
        ),
        d = (0, v.S)({ createReminder: r }),
        { dueInText: o } = (0, A.Ce)({ dueAt: t?.saveData.dueAt, now: s, type: A.kh.LONG });
    return t?.saveData.dueAt == null
        ? (0, l.jsx)(a.rX, { label: x.intl.string(x.t.roMu1H), children: d })
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  (0, l.jsx)(a.rX, {
                      label: o,
                      children: (0, l.jsx)(a.Dr, {
                          id: "mark-complete",
                          label: x.intl.string(x.t.yjGtdJ),
                          leadingAccessory: { type: "icon", icon: u.U },
                          icon: u.U,
                          action: () =>
                              (0, p.x)({ channelId: n.channel_id, messageId: n.id, displayToast: !0, isReminder: !0 }),
                      }),
                  }),
                  (0, l.jsx)(a.rX, { label: x.intl.string(x.t.vrbqs1), children: d }),
              ],
          });
}
