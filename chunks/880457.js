a.d(n, { A: () => D, P: () => m });
var i = a(627968),
    l = a(64700),
    t = a(17928),
    s = a(477782),
    c = a(403581),
    d = a(606096),
    o = a(997146),
    r = a(478016),
    u = a(404374),
    h = a(966597),
    p = a(164684),
    g = a(704456),
    A = a(85109),
    I = a(226017),
    y = a(195404),
    _ = a(576705),
    b = a(927813),
    v = a(652215),
    x = a(375708);
function D(e, n) {
    let { enabled: a } = h.A.useConfig({ location: "LongPressMessageActionSheet" }),
        l = (0, t.bG)([A.A], () => A.A.getSavedMessage(e.channel_id, e.id)),
        r = m({ message: e, savedMessage: l });
    return a && (null != l || n.isPrivate() || _.A.can(v.xBc.READ_MESSAGE_HISTORY, n))
        ? null != l || (0, I.A)()
            ? (0, i.jsxs)(s.Dr, {
                  id: "save-for-later",
                  label: x.intl.string(x.t.tpxJto),
                  leadingAccessory: { type: "icon", icon: null != l ? d.c : o.c },
                  action: () =>
                      null == l
                          ? (0, p.Y)({ channelId: e.channel_id, messageId: e.id, displayToast: !0 })
                          : (0, p.x)({
                                channelId: e.channel_id,
                                messageId: e.id,
                                dueAt: l.saveData.dueAt,
                                displayToast: !0,
                            }),
                  children: [
                      null != l
                          ? (0, i.jsx)(s.Dr, {
                                id: "remove-from-for-later",
                                label: x.intl.string(x.t.SvXS1Z),
                                leadingAccessory: { type: "icon", icon: d.c },
                                icon: d.c,
                                action: () =>
                                    (0, p.x)({
                                        channelId: e.channel_id,
                                        messageId: e.id,
                                        dueAt: l.saveData.dueAt,
                                        displayToast: !0,
                                    }),
                            })
                          : (0, i.jsx)(s.Dr, {
                                id: "create-bookmark",
                                label: x.intl.string(x.t["9p3D9p"]),
                                leadingAccessory: { type: "icon", icon: o.c },
                                icon: o.c,
                                action: () => (0, p.Y)({ channelId: e.channel_id, messageId: e.id, displayToast: !0 }),
                            }),
                      (0, i.jsx)(s.bX, {}),
                      r,
                  ],
              })
            : (0, i.jsx)(s.Dr, {
                  id: "save-for-later-upsell",
                  label: x.intl.string(x.t.tpxJto),
                  leadingAccessory: { type: "icon", icon: c.t, color: u.k0.PREMIUM_TIER_2 },
                  icon: c.t,
                  iconProps: { color: u.k0.PREMIUM_TIER_2 },
                  action: () => (0, p.Y)({ channelId: e.channel_id, messageId: e.id, displayToast: !0 }),
              })
        : null;
}
function m(e) {
    let { message: n, savedMessage: a } = e,
        [t, c] = l.useState(new Date());
    l.useEffect(() => {
        let e = setInterval(() => c(new Date()), b.A.Millis.MINUTE);
        return () => {
            clearInterval(e);
        };
    }, []);
    let d = l.useCallback(
            (e) => (0, p.Y)({ channelId: n.channel_id, messageId: n.id, dueAt: e, displayToast: !0 }),
            [n.channel_id, n.id],
        ),
        o = (0, y.S)({ createReminder: d }),
        { dueInText: u } = (0, g.Ce)({ dueAt: a?.saveData.dueAt, now: t, type: g.kh.LONG });
    return a?.saveData.dueAt == null
        ? (0, i.jsx)(s.rX, { label: x.intl.string(x.t.roMu1H), children: o })
        : (0, i.jsxs)(s.rX, {
              label: u,
              children: [
                  (0, i.jsx)(s.Dr, {
                      id: "mark-complete",
                      label: x.intl.string(x.t.yjGtdJ),
                      leadingAccessory: { type: "icon", icon: r.U },
                      icon: r.U,
                      action: () => (0, p.Y)({ channelId: n.channel_id, messageId: n.id, dueAt: void 0 }),
                  }),
                  (0, i.jsx)(s.Dr, { id: "edit-reminder", label: x.intl.string(x.t.vrbqs1), children: o }),
              ],
          });
}
