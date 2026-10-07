t.d(n, { A: () => v, P: () => x });
var l = t(477900),
    a = t(582128),
    i = t(17928),
    s = t(477782),
    r = t(606096),
    c = t(997146),
    d = t(406810),
    o = t(478016),
    u = t(568467),
    h = t(738125),
    g = t(704456),
    p = t(85109),
    A = t(195404),
    I = t(576705),
    k = t(927813),
    m = t(652215),
    b = t(660183);
function v(e, n) {
    let t = (0, i.bG)([p.A], () => p.A.getSavedMessage(e.channel_id, e.id)),
        a = x({ message: e, savedMessage: t, source: h.r.CONTEXT_MENU });
    if (null == t && !n.isPrivate() && !I.A.can(m.xBc.READ_MESSAGE_HISTORY, n)) return null;
    let o = null != t && null == t.saveData.dueAt,
        g = null != t && null != t.saveData.dueAt;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(s.Dr, {
                id: "bookmark",
                label: o ? b.intl.string(b.t.SvXS1Z) : b.intl.string(b.t.tpxJto),
                leadingAccessory: { type: "icon", icon: o ? r.BookmarkIcon : c.c },
                icon: o ? r.BookmarkIcon : c.c,
                action: () =>
                    o
                        ? (0, u.x)({ channelId: e.channel_id, messageId: e.id, displayToast: !0 })
                        : (0, u.Y)({
                              channelId: e.channel_id,
                              messageId: e.id,
                              displayToast: !0,
                              dueAt: void 0,
                              source: h.r.CONTEXT_MENU,
                          }),
            }),
            (0, l.jsx)(s.Dr, {
                id: "reminder",
                label: g ? b.intl.string(b.t.vrbqs1) : b.intl.string(b.t.mJ3P0N),
                leadingAccessory: { type: "icon", icon: d.ClockIcon },
                children: a,
            }),
        ],
    });
}
function x(e) {
    let { message: n, savedMessage: t, source: i } = e,
        [r, c] = a.useState(new Date());
    a.useEffect(() => {
        let e = setInterval(() => c(new Date()), k.A.Millis.MINUTE);
        return () => {
            clearInterval(e);
        };
    }, []);
    let d = a.useCallback(
            (e) => (0, u.Y)({ channelId: n.channel_id, messageId: n.id, dueAt: e, displayToast: !0, source: i }),
            [n.channel_id, n.id, i],
        ),
        h = (0, A.S)({ createReminder: d }),
        { dueInText: p } = (0, g.Ce)({ dueAt: t?.saveData.dueAt, now: r, type: g.kh.LONG });
    return t?.saveData.dueAt == null
        ? (0, l.jsx)(s.rX, { label: b.intl.string(b.t.roMu1H), children: h })
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  (0, l.jsx)(s.rX, {
                      label: p,
                      children: (0, l.jsx)(s.Dr, {
                          id: "mark-complete",
                          label: b.intl.string(b.t.yjGtdJ),
                          leadingAccessory: { type: "icon", icon: o.U },
                          icon: o.U,
                          action: () =>
                              (0, u.x)({ channelId: n.channel_id, messageId: n.id, displayToast: !0, isReminder: !0 }),
                      }),
                  }),
                  (0, l.jsx)(s.rX, { label: b.intl.string(b.t.vrbqs1), children: h }),
              ],
          });
}
