a.d(n, { A: () => v, P: () => m });
var i = a(627968),
    t = a(64700),
    l = a(17928),
    s = a(477782),
    c = a(403581),
    d = a(606096),
    o = a(997146),
    r = a(478016),
    u = a(404374),
    h = a(966597),
    p = a(164684),
    g = a(704456),
    I = a(85109),
    A = a(226017),
    y = a(195404),
    b = a(927813),
    _ = a(375708);
function v(e) {
    let { enabled: n } = h.A.useConfig({ location: "LongPressMessageActionSheet" }),
        a = (0, l.bG)([I.A], () => I.A.getSavedMessage(e.channel_id, e.id)),
        t = m({ message: e, savedMessage: a });
    return n
        ? null != a || (0, A.A)()
            ? (0, i.jsxs)(s.Dr, {
                  id: "save-for-later",
                  label: _.intl.string(_.t.tpxJto),
                  leadingAccessory: { type: "icon", icon: null != a ? d.c : o.c },
                  action: () =>
                      null == a
                          ? (0, p.Y)({ channelId: e.channel_id, messageId: e.id, displayToast: !0 })
                          : (0, p.x)({
                                channelId: e.channel_id,
                                messageId: e.id,
                                dueAt: a.saveData.dueAt,
                                displayToast: !0,
                            }),
                  children: [
                      null != a
                          ? (0, i.jsx)(s.Dr, {
                                id: "remove-from-for-later",
                                label: _.intl.string(_.t.SvXS1Z),
                                leadingAccessory: { type: "icon", icon: d.c },
                                icon: d.c,
                                action: () =>
                                    (0, p.x)({
                                        channelId: e.channel_id,
                                        messageId: e.id,
                                        dueAt: a.saveData.dueAt,
                                        displayToast: !0,
                                    }),
                            })
                          : (0, i.jsx)(s.Dr, {
                                id: "create-bookmark",
                                label: _.intl.string(_.t["9p3D9p"]),
                                leadingAccessory: { type: "icon", icon: o.c },
                                icon: o.c,
                                action: () => (0, p.Y)({ channelId: e.channel_id, messageId: e.id, displayToast: !0 }),
                            }),
                      (0, i.jsx)(s.bX, {}),
                      t,
                  ],
              })
            : (0, i.jsx)(s.Dr, {
                  id: "save-for-later-upsell",
                  label: _.intl.string(_.t.tpxJto),
                  leadingAccessory: { type: "icon", icon: c.t, color: u.k0.PREMIUM_TIER_2 },
                  icon: c.t,
                  iconProps: { color: u.k0.PREMIUM_TIER_2 },
                  action: () => (0, p.Y)({ channelId: e.channel_id, messageId: e.id, displayToast: !0 }),
              })
        : null;
}
function m(e) {
    let { message: n, savedMessage: a } = e,
        [l, c] = t.useState(new Date());
    t.useEffect(() => {
        let e = setInterval(() => c(new Date()), b.A.Millis.MINUTE);
        return () => {
            clearInterval(e);
        };
    }, []);
    let d = t.useCallback(
            (e) => (0, p.Y)({ channelId: n.channel_id, messageId: n.id, dueAt: e, displayToast: !0 }),
            [n.channel_id, n.id],
        ),
        o = (0, y.S)({ createReminder: d }),
        { dueInText: u } = (0, g.Ce)({ dueAt: a?.saveData.dueAt, now: l, type: g.kh.LONG });
    return a?.saveData.dueAt == null
        ? (0, i.jsx)(s.rX, { label: _.intl.string(_.t.roMu1H), children: o })
        : (0, i.jsxs)(s.rX, {
              label: u,
              children: [
                  (0, i.jsx)(s.Dr, {
                      id: "mark-complete",
                      label: _.intl.string(_.t.yjGtdJ),
                      leadingAccessory: { type: "icon", icon: r.U },
                      icon: r.U,
                      action: () => (0, p.Y)({ channelId: n.channel_id, messageId: n.id, dueAt: void 0 }),
                  }),
                  (0, i.jsx)(s.Dr, { id: "edit-reminder", label: _.intl.string(_.t.vrbqs1), children: o }),
              ],
          });
}
