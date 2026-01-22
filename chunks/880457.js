n.d(t, {
    A: () => m,
    P: () => y,
}),
    n(896048);
var r = n(627968),
    l = n(64700),
    i = n(311907),
    o = n(397927),
    a = n(404374),
    c = n(966597),
    s = n(164684),
    d = n(704456),
    u = n(85109),
    f = n(226017),
    g = n(49678),
    p = n(927813),
    b = n(985018);

function m(e) {
    let { enabled: t } = c.A.useExperiment({
            location: "LongPressMessageActionSheet",
        }),
        n = (0, i.bG)([u.A], () => u.A.getSavedMessage(e.channel_id, e.id)),
        l = y({
            message: e,
            savedMessage: n,
        });
    return t
        ? null != n || (0, f.A)()
            ? (0, r.jsxs)(o.Drp, {
                  id: "save-for-later",
                  label: b.intl.string(b.t.tpxJto),
                  action: () =>
                      null == n
                          ? (0, s.Y)({
                                channelId: e.channel_id,
                                messageId: e.id,
                                displayToast: !0,
                            })
                          : (0, s.x)({
                                channelId: e.channel_id,
                                messageId: e.id,
                                dueAt: n.saveData.dueAt,
                                displayToast: !0,
                            }),
                  children: [
                      null != n
                          ? (0, r.jsx)(o.Drp, {
                                id: "remove-from-for-later",
                                label: b.intl.string(b.t.SvXS1Z),
                                icon: o.cFy,
                                action: () =>
                                    (0, s.x)({
                                        channelId: e.channel_id,
                                        messageId: e.id,
                                        dueAt: n.saveData.dueAt,
                                        displayToast: !0,
                                    }),
                            })
                          : (0, r.jsx)(o.Drp, {
                                id: "create-bookmark",
                                label: b.intl.string(b.t["9p3D9p"]),
                                icon: o.c$8,
                                action: () =>
                                    (0, s.Y)({
                                        channelId: e.channel_id,
                                        messageId: e.id,
                                        displayToast: !0,
                                    }),
                            }),
                      (0, r.jsx)(o.bXX, {}),
                      l,
                  ],
              })
            : (0, r.jsx)(o.Drp, {
                  id: "save-for-later-upsell",
                  label: b.intl.string(b.t.tpxJto),
                  icon: o.tvc,
                  iconProps: {
                      color: a.k0.PREMIUM_TIER_2,
                  },
                  action: () =>
                      (0, s.Y)({
                          channelId: e.channel_id,
                          messageId: e.id,
                          displayToast: !0,
                      }),
              })
        : null;
}

function y(e) {
    let { message: t, savedMessage: n } = e,
        [i, a] = l.useState(new Date());
    l.useEffect(() => {
        let e = setInterval(() => a(new Date()), p.A.Millis.MINUTE);
        return () => {
            clearInterval(e);
        };
    }, []);
    let c = l.useCallback(
            (e) =>
                (0, s.Y)({
                    channelId: t.channel_id,
                    messageId: t.id,
                    dueAt: e,
                    displayToast: !0,
                }),
            [t.channel_id, t.id],
        ),
        u = (0, g.S)({
            createReminder: c,
        }),
        { dueInText: f } = (0, d.Ce)({
            dueAt: null == n ? void 0 : n.saveData.dueAt,
            now: i,
            type: d.kh.LONG,
        });
    return (null == n ? void 0 : n.saveData.dueAt) == null
        ? (0, r.jsx)(o.rXV, {
              label: b.intl.string(b.t.roMu1H),
              children: u,
          })
        : (0, r.jsxs)(o.rXV, {
              label: f,
              children: [
                  (0, r.jsx)(o.Drp, {
                      id: "mark-complete",
                      label: b.intl.string(b.t.yjGtdJ),
                      icon: o.Uzd,
                      action: () =>
                          (0, s.Y)({
                              channelId: t.channel_id,
                              messageId: t.id,
                              dueAt: void 0,
                          }),
                  }),
                  (0, r.jsx)(o.Drp, {
                      id: "edit-reminder",
                      label: b.intl.string(b.t.vrbqs1),
                      children: u,
                  }),
              ],
          });
}
