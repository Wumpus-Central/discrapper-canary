n.d(t, { A: () => N, P: () => f });
var l = n(627968),
    i = n(64700),
    s = n(17928),
    a = n(477782),
    r = n(403581),
    o = n(606096),
    c = n(997146),
    d = n(478016),
    u = n(404374),
    h = n(966597),
    g = n(164684),
    m = n(704456),
    A = n(85109),
    p = n(226017),
    C = n(49678),
    E = n(927813),
    x = n(985018);
function N(e) {
    let { enabled: t } = h.A.useConfig({ location: "LongPressMessageActionSheet" }),
        n = (0, s.bG)([A.A], () => A.A.getSavedMessage(e.channel_id, e.id)),
        i = f({ message: e, savedMessage: n });
    return t
        ? null != n || (0, p.A)()
            ? (0, l.jsxs)(a.Dr, {
                  id: "save-for-later",
                  label: x.intl.string(x.t.tpxJto),
                  leadingAccessory: { type: "icon", icon: null != n ? o.c : c.c },
                  action: () =>
                      null == n
                          ? (0, g.Y)({ channelId: e.channel_id, messageId: e.id, displayToast: !0 })
                          : (0, g.x)({
                                channelId: e.channel_id,
                                messageId: e.id,
                                dueAt: n.saveData.dueAt,
                                displayToast: !0,
                            }),
                  children: [
                      null != n
                          ? (0, l.jsx)(a.Dr, {
                                id: "remove-from-for-later",
                                label: x.intl.string(x.t.SvXS1Z),
                                leadingAccessory: { type: "icon", icon: o.c },
                                icon: o.c,
                                action: () =>
                                    (0, g.x)({
                                        channelId: e.channel_id,
                                        messageId: e.id,
                                        dueAt: n.saveData.dueAt,
                                        displayToast: !0,
                                    }),
                            })
                          : (0, l.jsx)(a.Dr, {
                                id: "create-bookmark",
                                label: x.intl.string(x.t["9p3D9p"]),
                                leadingAccessory: { type: "icon", icon: c.c },
                                icon: c.c,
                                action: () => (0, g.Y)({ channelId: e.channel_id, messageId: e.id, displayToast: !0 }),
                            }),
                      (0, l.jsx)(a.bX, {}),
                      i,
                  ],
              })
            : (0, l.jsx)(a.Dr, {
                  id: "save-for-later-upsell",
                  label: x.intl.string(x.t.tpxJto),
                  leadingAccessory: { type: "icon", icon: r.t, color: u.k0.PREMIUM_TIER_2 },
                  icon: r.t,
                  iconProps: { color: u.k0.PREMIUM_TIER_2 },
                  action: () => (0, g.Y)({ channelId: e.channel_id, messageId: e.id, displayToast: !0 }),
              })
        : null;
}
function f(e) {
    let { message: t, savedMessage: n } = e,
        [s, r] = i.useState(new Date());
    i.useEffect(() => {
        let e = setInterval(() => r(new Date()), E.A.Millis.MINUTE);
        return () => {
            clearInterval(e);
        };
    }, []);
    let o = i.useCallback(
            (e) => (0, g.Y)({ channelId: t.channel_id, messageId: t.id, dueAt: e, displayToast: !0 }),
            [t.channel_id, t.id],
        ),
        c = (0, C.S)({ createReminder: o }),
        { dueInText: u } = (0, m.Ce)({ dueAt: n?.saveData.dueAt, now: s, type: m.kh.LONG });
    return n?.saveData.dueAt == null
        ? (0, l.jsx)(a.rX, { label: x.intl.string(x.t.roMu1H), children: c })
        : (0, l.jsxs)(a.rX, {
              label: u,
              children: [
                  (0, l.jsx)(a.Dr, {
                      id: "mark-complete",
                      label: x.intl.string(x.t.yjGtdJ),
                      leadingAccessory: { type: "icon", icon: d.U },
                      icon: d.U,
                      action: () => (0, g.Y)({ channelId: t.channel_id, messageId: t.id, dueAt: void 0 }),
                  }),
                  (0, l.jsx)(a.Dr, { id: "edit-reminder", label: x.intl.string(x.t.vrbqs1), children: c }),
              ],
          });
}
