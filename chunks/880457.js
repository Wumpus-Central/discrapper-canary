var l = a(477900),
    i = a(582128),
    t = a(855986),
    s = a(477782),
    r = a(606096),
    c = a(997146),
    d = a(406810),
    o = a(478016),
    u = a(81612),
    k = a(738125),
    h = a(704456),
    m = a(85109),
    g = a(243656),
    I = a(576705),
    p = a(927813),
    A = a(652215),
    v = a(792996);
function _(e) {
    let { message: n, savedMessage: a, source: t } = e,
        [r, c] = i.useState(new Date());
    i.useEffect(() => {
        let e = setInterval(() => c(new Date()), p.A.Millis.MINUTE);
        return () => {
            clearInterval(e);
        };
    }, []);
    let d = i.useCallback(
            (e) => (0, u.Y)({ channelId: n.channel_id, messageId: n.id, dueAt: e, displayToast: !0, source: t }),
            [n.channel_id, n.id, t],
        ),
        k = (0, g.S)({ createReminder: d }),
        { dueInText: m } = (0, h.Ce)({ dueAt: a?.saveData.dueAt, now: r, type: h.kh.LONG });
    return a?.saveData.dueAt == null
        ? (0, l.jsx)(s.rX, { label: v.intl.string(v.t.roMu1H), children: k })
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  (0, l.jsx)(s.rX, {
                      label: m,
                      children: (0, l.jsx)(s.Dr, {
                          id: "mark-complete",
                          label: v.intl.string(v.t.yjGtdJ),
                          leadingAccessory: { type: "icon", icon: o.CheckmarkSmallIcon },
                          icon: o.CheckmarkSmallIcon,
                          action: () =>
                              (0, u.x)({ channelId: n.channel_id, messageId: n.id, displayToast: !0, isReminder: !0 }),
                      }),
                  }),
                  (0, l.jsx)(s.rX, { label: v.intl.string(v.t.vrbqs1), children: k }),
              ],
          });
}
a.d(
    n,
    {},
    {
        A: function (e, n) {
            let { savedMessage: a, isBookmark: i } = (0, t.cf)([m.A], () => ({
                    savedMessage: m.A.getSavedMessage(e.channel_id, e.id),
                    isBookmark: m.A.isMessageBookmarked(e.channel_id, e.id),
                })),
                o = _({ message: e, savedMessage: a, source: k.r.CONTEXT_MENU });
            if (null == a && !i && !n.isPrivate() && !I.A.can(A.xBc.READ_MESSAGE_HISTORY, n)) return null;
            let h = null != a && null != a.saveData.dueAt;
            return (0, l.jsxs)(l.Fragment, {
                children: [
                    h
                        ? null
                        : (0, l.jsx)(s.Dr, {
                              id: "bookmark",
                              label: i ? v.intl.string(v.t.SvXS1Z) : v.intl.string(v.t.tpxJto),
                              leadingAccessory: { type: "icon", icon: i ? r.BookmarkIcon : c.BookmarkOutlineIcon },
                              icon: i ? r.BookmarkIcon : c.BookmarkOutlineIcon,
                              action: () =>
                                  i
                                      ? (0, u.x)({ channelId: e.channel_id, messageId: e.id, displayToast: !0 })
                                      : (0, u.Y)({
                                            channelId: e.channel_id,
                                            messageId: e.id,
                                            displayToast: !0,
                                            dueAt: void 0,
                                            source: k.r.CONTEXT_MENU,
                                        }),
                          }),
                    (0, l.jsx)(s.Dr, {
                        id: "reminder",
                        label: h ? v.intl.string(v.t.vrbqs1) : v.intl.string(v.t.mJ3P0N),
                        leadingAccessory: { type: "icon", icon: d.ClockIcon },
                        children: o,
                    }),
                ],
            });
        },
        P: _,
    },
);
