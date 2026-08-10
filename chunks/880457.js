t.d(n, { A: () => x, P: () => M });
var l = t(477900),
    i = t(582128),
    s = t(17928),
    a = t(477782),
    r = t(403581),
    c = t(606096),
    d = t(997146),
    o = t(406810),
    u = t(478016),
    h = t(404374),
    g = t(269073),
    p = t(164684),
    A = t(738125),
    I = t(704456),
    _ = t(85109),
    v = t(195404),
    y = t(576705),
    E = t(927813),
    T = t(652215),
    b = t(375708);
function x(e, n) {
    let t = (0, g.jv)("LongPressMessageActionSheet"),
        i = (0, g.lA)("LongPressMessageActionSheet"),
        u = (0, s.bG)([_.A], () => _.A.getSavedMessage(e.channel_id, e.id)),
        I = M({ message: e, savedMessage: u, source: A.r.CONTEXT_MENU });
    if (!t || (null == u && !n.isPrivate() && !y.A.can(T.xBc.READ_MESSAGE_HISTORY, n))) return null;
    if (null == u && !i)
        return (0, l.jsx)(a.Dr, {
            id: "save-for-later-upsell",
            label: b.intl.string(b.t.tpxJto),
            leadingAccessory: { type: "icon", icon: r.t, color: h.k0.PREMIUM_TIER_2 },
            icon: r.t,
            iconProps: { color: h.k0.PREMIUM_TIER_2 },
            action: () =>
                (0, p.Y)({ channelId: e.channel_id, messageId: e.id, displayToast: !0, source: A.r.CONTEXT_MENU }),
        });
    let v = null != u && null == u.saveData.dueAt,
        E = null != u && null != u.saveData.dueAt;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(a.Dr, {
                id: "bookmark",
                label: v ? b.intl.string(b.t.SvXS1Z) : b.intl.string(b.t.tpxJto),
                leadingAccessory: { type: "icon", icon: v ? c.c : d.c },
                icon: v ? c.c : d.c,
                action: () =>
                    v
                        ? (0, p.x)({ channelId: e.channel_id, messageId: e.id, displayToast: !0 })
                        : (0, p.Y)({
                              channelId: e.channel_id,
                              messageId: e.id,
                              displayToast: !0,
                              dueAt: void 0,
                              source: A.r.CONTEXT_MENU,
                          }),
            }),
            (0, l.jsx)(a.Dr, {
                id: "reminder",
                label: E ? b.intl.string(b.t.vrbqs1) : b.intl.string(b.t.mJ3P0N),
                leadingAccessory: { type: "icon", icon: o.O },
                children: I,
            }),
        ],
    });
}
function M(e) {
    let { message: n, savedMessage: t, source: s } = e,
        [r, c] = i.useState(new Date());
    i.useEffect(() => {
        let e = setInterval(() => c(new Date()), E.A.Millis.MINUTE);
        return () => {
            clearInterval(e);
        };
    }, []);
    let d = i.useCallback(
            (e) => (0, p.Y)({ channelId: n.channel_id, messageId: n.id, dueAt: e, displayToast: !0, source: s }),
            [n.channel_id, n.id, s],
        ),
        o = (0, v.S)({ createReminder: d }),
        { dueInText: h } = (0, I.Ce)({ dueAt: t?.saveData.dueAt, now: r, type: I.kh.LONG });
    return t?.saveData.dueAt == null
        ? (0, l.jsx)(a.rX, { label: b.intl.string(b.t.roMu1H), children: o })
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  (0, l.jsx)(a.rX, {
                      label: h,
                      children: (0, l.jsx)(a.Dr, {
                          id: "mark-complete",
                          label: b.intl.string(b.t.yjGtdJ),
                          leadingAccessory: { type: "icon", icon: u.U },
                          icon: u.U,
                          action: () =>
                              (0, p.x)({ channelId: n.channel_id, messageId: n.id, displayToast: !0, isReminder: !0 }),
                      }),
                  }),
                  (0, l.jsx)(a.rX, { label: b.intl.string(b.t.vrbqs1), children: o }),
              ],
          });
}
