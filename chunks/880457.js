t.d(n, { A: () => T, P: () => b });
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
    I = t(738125),
    A = t(704456),
    _ = t(85109),
    k = t(195404),
    m = t(576705),
    v = t(927813),
    y = t(652215),
    E = t(375708);
function T(e, n) {
    let t = (0, g.jv)("LongPressMessageActionSheet"),
        i = (0, g.lA)("LongPressMessageActionSheet"),
        u = (0, s.bG)([_.A], () => _.A.getSavedMessage(e.channel_id, e.id)),
        A = b({ message: e, savedMessage: u, source: I.r.CONTEXT_MENU });
    if (!t || (null == u && !n.isPrivate() && !m.A.can(y.xBc.READ_MESSAGE_HISTORY, n))) return null;
    if (null == u && !i)
        return (0, l.jsx)(a.Dr, {
            id: "save-for-later-upsell",
            label: E.intl.string(E.t.tpxJto),
            leadingAccessory: { type: "icon", icon: r.t, color: h.k0.PREMIUM_TIER_2 },
            icon: r.t,
            iconProps: { color: h.k0.PREMIUM_TIER_2 },
            action: () =>
                (0, p.Y)({ channelId: e.channel_id, messageId: e.id, displayToast: !0, source: I.r.CONTEXT_MENU }),
        });
    let k = null != u && null == u.saveData.dueAt,
        v = null != u && null != u.saveData.dueAt;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(a.Dr, {
                id: "bookmark",
                label: k ? E.intl.string(E.t.SvXS1Z) : E.intl.string(E.t.tpxJto),
                leadingAccessory: { type: "icon", icon: k ? c.BookmarkIcon : d.c },
                icon: k ? c.BookmarkIcon : d.c,
                action: () =>
                    k
                        ? (0, p.x)({ channelId: e.channel_id, messageId: e.id, displayToast: !0 })
                        : (0, p.Y)({
                              channelId: e.channel_id,
                              messageId: e.id,
                              displayToast: !0,
                              dueAt: void 0,
                              source: I.r.CONTEXT_MENU,
                          }),
            }),
            (0, l.jsx)(a.Dr, {
                id: "reminder",
                label: v ? E.intl.string(E.t.vrbqs1) : E.intl.string(E.t.mJ3P0N),
                leadingAccessory: { type: "icon", icon: o.ClockIcon },
                children: A,
            }),
        ],
    });
}
function b(e) {
    let { message: n, savedMessage: t, source: s } = e,
        [r, c] = i.useState(new Date());
    i.useEffect(() => {
        let e = setInterval(() => c(new Date()), v.A.Millis.MINUTE);
        return () => {
            clearInterval(e);
        };
    }, []);
    let d = i.useCallback(
            (e) => (0, p.Y)({ channelId: n.channel_id, messageId: n.id, dueAt: e, displayToast: !0, source: s }),
            [n.channel_id, n.id, s],
        ),
        o = (0, k.S)({ createReminder: d }),
        { dueInText: h } = (0, A.Ce)({ dueAt: t?.saveData.dueAt, now: r, type: A.kh.LONG });
    return t?.saveData.dueAt == null
        ? (0, l.jsx)(a.rX, { label: E.intl.string(E.t.roMu1H), children: o })
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  (0, l.jsx)(a.rX, {
                      label: h,
                      children: (0, l.jsx)(a.Dr, {
                          id: "mark-complete",
                          label: E.intl.string(E.t.yjGtdJ),
                          leadingAccessory: { type: "icon", icon: u.U },
                          icon: u.U,
                          action: () =>
                              (0, p.x)({ channelId: n.channel_id, messageId: n.id, displayToast: !0, isReminder: !0 }),
                      }),
                  }),
                  (0, l.jsx)(a.rX, { label: E.intl.string(E.t.vrbqs1), children: o }),
              ],
          });
}
