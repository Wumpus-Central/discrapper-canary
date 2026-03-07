n.d(t, { A: () => f, P: () => h });
var i = n(627968),
    l = n(64700),
    a = n(311907),
    r = n(397927),
    s = n(404374),
    o = n(966597),
    d = n(164684),
    c = n(704456),
    u = n(85109),
    g = n(226017),
    A = n(49678),
    m = n(927813),
    p = n(985018);
function f(e) {
    let { enabled: t } = o.A.useConfig({ location: "LongPressMessageActionSheet" }),
        n = (0, a.bG)([u.A], () => u.A.getSavedMessage(e.channel_id, e.id)),
        l = h({ message: e, savedMessage: n });
    return t
        ? null != n || (0, g.A)()
            ? (0, i.jsxs)(r.Drp, {
                  id: "save-for-later",
                  label: p.intl.string(p.t.tpxJto),
                  leadingAccessory: { type: "icon", icon: null != n ? r.cFy : r.c$8 },
                  action: () =>
                      null == n
                          ? (0, d.Y)({ channelId: e.channel_id, messageId: e.id, displayToast: !0 })
                          : (0, d.x)({
                                channelId: e.channel_id,
                                messageId: e.id,
                                dueAt: n.saveData.dueAt,
                                displayToast: !0,
                            }),
                  children: [
                      null != n
                          ? (0, i.jsx)(r.Drp, {
                                id: "remove-from-for-later",
                                label: p.intl.string(p.t.SvXS1Z),
                                leadingAccessory: { type: "icon", icon: r.cFy },
                                icon: r.cFy,
                                action: () =>
                                    (0, d.x)({
                                        channelId: e.channel_id,
                                        messageId: e.id,
                                        dueAt: n.saveData.dueAt,
                                        displayToast: !0,
                                    }),
                            })
                          : (0, i.jsx)(r.Drp, {
                                id: "create-bookmark",
                                label: p.intl.string(p.t["9p3D9p"]),
                                leadingAccessory: { type: "icon", icon: r.c$8 },
                                icon: r.c$8,
                                action: () => (0, d.Y)({ channelId: e.channel_id, messageId: e.id, displayToast: !0 }),
                            }),
                      (0, i.jsx)(r.bXX, {}),
                      l,
                  ],
              })
            : (0, i.jsx)(r.Drp, {
                  id: "save-for-later-upsell",
                  label: p.intl.string(p.t.tpxJto),
                  leadingAccessory: { type: "icon", icon: r.tvc, color: s.k0.PREMIUM_TIER_2 },
                  icon: r.tvc,
                  iconProps: { color: s.k0.PREMIUM_TIER_2 },
                  action: () => (0, d.Y)({ channelId: e.channel_id, messageId: e.id, displayToast: !0 }),
              })
        : null;
}
function h(e) {
    let { message: t, savedMessage: n } = e,
        [a, s] = l.useState(new Date());
    l.useEffect(() => {
        let e = setInterval(() => s(new Date()), m.A.Millis.MINUTE);
        return () => {
            clearInterval(e);
        };
    }, []);
    let o = l.useCallback(
            (e) => (0, d.Y)({ channelId: t.channel_id, messageId: t.id, dueAt: e, displayToast: !0 }),
            [t.channel_id, t.id],
        ),
        u = (0, A.S)({ createReminder: o }),
        { dueInText: g } = (0, c.Ce)({ dueAt: n?.saveData.dueAt, now: a, type: c.kh.LONG });
    return n?.saveData.dueAt == null
        ? (0, i.jsx)(r.rXV, { label: p.intl.string(p.t.roMu1H), children: u })
        : (0, i.jsxs)(r.rXV, {
              label: g,
              children: [
                  (0, i.jsx)(r.Drp, {
                      id: "mark-complete",
                      label: p.intl.string(p.t.yjGtdJ),
                      leadingAccessory: { type: "icon", icon: r.Uzd },
                      icon: r.Uzd,
                      action: () => (0, d.Y)({ channelId: t.channel_id, messageId: t.id, dueAt: void 0 }),
                  }),
                  (0, i.jsx)(r.Drp, { id: "edit-reminder", label: p.intl.string(p.t.vrbqs1), children: u }),
              ],
          });
}
