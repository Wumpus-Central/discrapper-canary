i.d(n, { A: () => _, P: () => b });
var a = i(477900),
    t = i(582128),
    l = i(17928),
    s = i(477782),
    r = i(606096),
    c = i(997146),
    d = i(406810),
    o = i(478016),
    u = i(568467),
    h = i(738125),
    g = i(704456),
    k = i(85109),
    p = i(195404),
    m = i(576705),
    A = i(927813),
    I = i(652215),
    v = i(660183);
function _(e, n) {
    let { savedMessage: i, isBookmark: t } = (0, l.cf)([k.A], () => ({
            savedMessage: k.A.getSavedMessage(e.channel_id, e.id),
            isBookmark: k.A.isMessageBookmarked(e.channel_id, e.id),
        })),
        o = b({ message: e, savedMessage: i, source: h.r.CONTEXT_MENU });
    if (null == i && !t && !n.isPrivate() && !m.A.can(I.xBc.READ_MESSAGE_HISTORY, n)) return null;
    let g = null != i && null != i.saveData.dueAt;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            g
                ? null
                : (0, a.jsx)(s.Dr, {
                      id: "bookmark",
                      label: t ? v.intl.string(v.t.SvXS1Z) : v.intl.string(v.t.tpxJto),
                      leadingAccessory: { type: "icon", icon: t ? r.BookmarkIcon : c.c },
                      icon: t ? r.BookmarkIcon : c.c,
                      action: () =>
                          t
                              ? (0, u.x)({ channelId: e.channel_id, messageId: e.id, displayToast: !0 })
                              : (0, u.Y)({
                                    channelId: e.channel_id,
                                    messageId: e.id,
                                    displayToast: !0,
                                    dueAt: void 0,
                                    source: h.r.CONTEXT_MENU,
                                }),
                  }),
            (0, a.jsx)(s.Dr, {
                id: "reminder",
                label: g ? v.intl.string(v.t.vrbqs1) : v.intl.string(v.t.mJ3P0N),
                leadingAccessory: { type: "icon", icon: d.ClockIcon },
                children: o,
            }),
        ],
    });
}
function b(e) {
    let { message: n, savedMessage: i, source: l } = e,
        [r, c] = t.useState(new Date());
    t.useEffect(() => {
        let e = setInterval(() => c(new Date()), A.A.Millis.MINUTE);
        return () => {
            clearInterval(e);
        };
    }, []);
    let d = t.useCallback(
            (e) => (0, u.Y)({ channelId: n.channel_id, messageId: n.id, dueAt: e, displayToast: !0, source: l }),
            [n.channel_id, n.id, l],
        ),
        h = (0, p.S)({ createReminder: d }),
        { dueInText: k } = (0, g.Ce)({ dueAt: i?.saveData.dueAt, now: r, type: g.kh.LONG });
    return i?.saveData.dueAt == null
        ? (0, a.jsx)(s.rX, { label: v.intl.string(v.t.roMu1H), children: h })
        : (0, a.jsxs)(a.Fragment, {
              children: [
                  (0, a.jsx)(s.rX, {
                      label: k,
                      children: (0, a.jsx)(s.Dr, {
                          id: "mark-complete",
                          label: v.intl.string(v.t.yjGtdJ),
                          leadingAccessory: { type: "icon", icon: o.U },
                          icon: o.U,
                          action: () =>
                              (0, u.x)({ channelId: n.channel_id, messageId: n.id, displayToast: !0, isReminder: !0 }),
                      }),
                  }),
                  (0, a.jsx)(s.rX, { label: v.intl.string(v.t.vrbqs1), children: h }),
              ],
          });
}
