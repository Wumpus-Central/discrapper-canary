t.d(n, { A: () => k, P: () => D });
var l = t(627968),
    i = t(64700),
    a = t(17928),
    s = t(477782),
    c = t(403581),
    d = t(606096),
    r = t(997146),
    o = t(406810),
    u = t(478016),
    h = t(404374),
    g = t(966597),
    p = t(164684),
    A = t(704456),
    I = t(85109),
    b = t(226017),
    y = t(195404),
    _ = t(576705),
    v = t(927813),
    x = t(652215),
    m = t(375708);
function k(e, n) {
    let { enabled: t } = g.A.useConfig({ location: "LongPressMessageActionSheet" }),
        i = (0, a.bG)([I.A], () => I.A.getSavedMessage(e.channel_id, e.id)),
        u = D({ message: e, savedMessage: i });
    if (!t || (null == i && !n.isPrivate() && !_.A.can(x.xBc.READ_MESSAGE_HISTORY, n))) return null;
    if (null == i && !(0, b.A)())
        return (0, l.jsx)(s.Dr, {
            id: "save-for-later-upsell",
            label: m.intl.string(m.t.tpxJto),
            leadingAccessory: { type: "icon", icon: c.t, color: h.k0.PREMIUM_TIER_2 },
            icon: c.t,
            iconProps: { color: h.k0.PREMIUM_TIER_2 },
            action: () => (0, p.Y)({ channelId: e.channel_id, messageId: e.id, displayToast: !0 }),
        });
    let A = null != i && null == i.saveData.dueAt,
        y = null != i && null != i.saveData.dueAt;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(s.Dr, {
                id: "bookmark",
                label: A ? m.intl.string(m.t.SvXS1Z) : m.intl.string(m.t.tpxJto),
                leadingAccessory: { type: "icon", icon: A ? d.c : r.c },
                action: () =>
                    A
                        ? (0, p.x)({ channelId: e.channel_id, messageId: e.id, displayToast: !0 })
                        : (0, p.Y)({ channelId: e.channel_id, messageId: e.id, displayToast: !0, dueAt: void 0 }),
            }),
            (0, l.jsx)(s.Dr, {
                id: "reminder",
                label: y ? m.intl.string(m.t.vrbqs1) : m.intl.string(m.t.mJ3P0N),
                leadingAccessory: { type: "icon", icon: o.O },
                icon: o.O,
                children: u,
            }),
        ],
    });
}
function D(e) {
    let { message: n, savedMessage: t } = e,
        [a, c] = i.useState(new Date());
    i.useEffect(() => {
        let e = setInterval(() => c(new Date()), v.A.Millis.MINUTE);
        return () => {
            clearInterval(e);
        };
    }, []);
    let d = i.useCallback(
            (e) => (0, p.Y)({ channelId: n.channel_id, messageId: n.id, dueAt: e, displayToast: !0 }),
            [n.channel_id, n.id],
        ),
        r = (0, y.S)({ createReminder: d }),
        { dueInText: o } = (0, A.Ce)({ dueAt: t?.saveData.dueAt, now: a, type: A.kh.LONG });
    return t?.saveData.dueAt == null
        ? (0, l.jsx)(s.rX, { label: m.intl.string(m.t.roMu1H), children: r })
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  (0, l.jsx)(s.rX, {
                      label: o,
                      children: (0, l.jsx)(s.Dr, {
                          id: "mark-complete",
                          label: m.intl.string(m.t.yjGtdJ),
                          leadingAccessory: { type: "icon", icon: u.U },
                          icon: u.U,
                          action: () =>
                              (0, p.x)({ channelId: n.channel_id, messageId: n.id, displayToast: !0, isReminder: !0 }),
                      }),
                  }),
                  (0, l.jsx)(s.rX, { label: m.intl.string(m.t.vrbqs1), children: r }),
              ],
          });
}
