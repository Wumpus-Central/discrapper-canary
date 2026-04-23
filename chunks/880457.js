n.d(t, { A: () => v, P: () => _ });
var i = n(627968),
    l = n(64700),
    a = n(311907),
    r = n(477782),
    s = n(403581),
    o = n(606096),
    d = n(997146),
    c = n(478016),
    u = n(404374),
    g = n(966597),
    A = n(164684),
    h = n(704456),
    m = n(85109),
    f = n(226017),
    p = n(49678),
    E = n(927813),
    y = n(985018);
function v(e) {
    let { enabled: t } = g.A.useConfig({ location: "LongPressMessageActionSheet" }),
        n = (0, a.bG)([m.A], () => m.A.getSavedMessage(e.channel_id, e.id)),
        l = _({ message: e, savedMessage: n });
    return t
        ? null != n || (0, f.A)()
            ? (0, i.jsxs)(r.Dr, {
                  id: "save-for-later",
                  label: y.intl.string(y.t.tpxJto),
                  leadingAccessory: { type: "icon", icon: null != n ? o.c : d.c },
                  action: () =>
                      null == n
                          ? (0, A.Y)({ channelId: e.channel_id, messageId: e.id, displayToast: !0 })
                          : (0, A.x)({
                                channelId: e.channel_id,
                                messageId: e.id,
                                dueAt: n.saveData.dueAt,
                                displayToast: !0,
                            }),
                  children: [
                      null != n
                          ? (0, i.jsx)(r.Dr, {
                                id: "remove-from-for-later",
                                label: y.intl.string(y.t.SvXS1Z),
                                leadingAccessory: { type: "icon", icon: o.c },
                                icon: o.c,
                                action: () =>
                                    (0, A.x)({
                                        channelId: e.channel_id,
                                        messageId: e.id,
                                        dueAt: n.saveData.dueAt,
                                        displayToast: !0,
                                    }),
                            })
                          : (0, i.jsx)(r.Dr, {
                                id: "create-bookmark",
                                label: y.intl.string(y.t["9p3D9p"]),
                                leadingAccessory: { type: "icon", icon: d.c },
                                icon: d.c,
                                action: () => (0, A.Y)({ channelId: e.channel_id, messageId: e.id, displayToast: !0 }),
                            }),
                      (0, i.jsx)(r.bX, {}),
                      l,
                  ],
              })
            : (0, i.jsx)(r.Dr, {
                  id: "save-for-later-upsell",
                  label: y.intl.string(y.t.tpxJto),
                  leadingAccessory: { type: "icon", icon: s.t, color: u.k0.PREMIUM_TIER_2 },
                  icon: s.t,
                  iconProps: { color: u.k0.PREMIUM_TIER_2 },
                  action: () => (0, A.Y)({ channelId: e.channel_id, messageId: e.id, displayToast: !0 }),
              })
        : null;
}
function _(e) {
    let { message: t, savedMessage: n } = e,
        [a, s] = l.useState(new Date());
    l.useEffect(() => {
        let e = setInterval(() => s(new Date()), E.A.Millis.MINUTE);
        return () => {
            clearInterval(e);
        };
    }, []);
    let o = l.useCallback(
            (e) => (0, A.Y)({ channelId: t.channel_id, messageId: t.id, dueAt: e, displayToast: !0 }),
            [t.channel_id, t.id],
        ),
        d = (0, p.S)({ createReminder: o }),
        { dueInText: u } = (0, h.Ce)({ dueAt: n?.saveData.dueAt, now: a, type: h.kh.LONG });
    return n?.saveData.dueAt == null
        ? (0, i.jsx)(r.rX, { label: y.intl.string(y.t.roMu1H), children: d })
        : (0, i.jsxs)(r.rX, {
              label: u,
              children: [
                  (0, i.jsx)(r.Dr, {
                      id: "mark-complete",
                      label: y.intl.string(y.t.yjGtdJ),
                      leadingAccessory: { type: "icon", icon: c.U },
                      icon: c.U,
                      action: () => (0, A.Y)({ channelId: t.channel_id, messageId: t.id, dueAt: void 0 }),
                  }),
                  (0, i.jsx)(r.Dr, { id: "edit-reminder", label: y.intl.string(y.t.vrbqs1), children: d }),
              ],
          });
}
