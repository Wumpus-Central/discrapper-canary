n.d(t, {
    A: () => b,
    P: () => A,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    l = n(311907),
    a = n(397927),
    o = n(404374),
    c = n(966597),
    s = n(164684),
    d = n(704456),
    u = n(85109),
    g = n(226017),
    p = n(49678),
    f = n(927813),
    y = n(985018);

function b(e) {
    let { enabled: t } = c.A.useExperiment({
            location: "LongPressMessageActionSheet",
        }),
        n = (0, l.bG)([u.A], () => u.A.getSavedMessage(e.channel_id, e.id)),
        i = A({
            message: e,
            savedMessage: n,
        });
    return t
        ? null != n || (0, g.A)()
            ? (0, r.jsxs)(a.Drp, {
                  id: "save-for-later",
                  label: y.intl.string(y.t.tpxJto),
                  leadingAccessory: {
                      type: "icon",
                      icon: null != n ? a.cFy : a.c$8,
                  },
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
                          ? (0, r.jsx)(a.Drp, {
                                id: "remove-from-for-later",
                                label: y.intl.string(y.t.SvXS1Z),
                                leadingAccessory: {
                                    type: "icon",
                                    icon: a.cFy,
                                },
                                icon: a.cFy,
                                action: () =>
                                    (0, s.x)({
                                        channelId: e.channel_id,
                                        messageId: e.id,
                                        dueAt: n.saveData.dueAt,
                                        displayToast: !0,
                                    }),
                            })
                          : (0, r.jsx)(a.Drp, {
                                id: "create-bookmark",
                                label: y.intl.string(y.t["9p3D9p"]),
                                leadingAccessory: {
                                    type: "icon",
                                    icon: a.c$8,
                                },
                                icon: a.c$8,
                                action: () =>
                                    (0, s.Y)({
                                        channelId: e.channel_id,
                                        messageId: e.id,
                                        displayToast: !0,
                                    }),
                            }),
                      (0, r.jsx)(a.bXX, {}),
                      i,
                  ],
              })
            : (0, r.jsx)(a.Drp, {
                  id: "save-for-later-upsell",
                  label: y.intl.string(y.t.tpxJto),
                  leadingAccessory: {
                      type: "icon",
                      icon: a.tvc,
                      color: o.k0.PREMIUM_TIER_2,
                  },
                  icon: a.tvc,
                  iconProps: {
                      color: o.k0.PREMIUM_TIER_2,
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

function A(e) {
    let { message: t, savedMessage: n } = e,
        [l, o] = i.useState(new Date());
    i.useEffect(() => {
        let e = setInterval(() => o(new Date()), f.A.Millis.MINUTE);
        return () => {
            clearInterval(e);
        };
    }, []);
    let c = i.useCallback(
            (e) =>
                (0, s.Y)({
                    channelId: t.channel_id,
                    messageId: t.id,
                    dueAt: e,
                    displayToast: !0,
                }),
            [t.channel_id, t.id],
        ),
        u = (0, p.S)({
            createReminder: c,
        }),
        { dueInText: g } = (0, d.Ce)({
            dueAt: null == n ? void 0 : n.saveData.dueAt,
            now: l,
            type: d.kh.LONG,
        });
    return (null == n ? void 0 : n.saveData.dueAt) == null
        ? (0, r.jsx)(a.rXV, {
              label: y.intl.string(y.t.roMu1H),
              children: u,
          })
        : (0, r.jsxs)(a.rXV, {
              label: g,
              children: [
                  (0, r.jsx)(a.Drp, {
                      id: "mark-complete",
                      label: y.intl.string(y.t.yjGtdJ),
                      leadingAccessory: {
                          type: "icon",
                          icon: a.Uzd,
                      },
                      icon: a.Uzd,
                      action: () =>
                          (0, s.Y)({
                              channelId: t.channel_id,
                              messageId: t.id,
                              dueAt: void 0,
                          }),
                  }),
                  (0, r.jsx)(a.Drp, {
                      id: "edit-reminder",
                      label: y.intl.string(y.t.vrbqs1),
                      children: u,
                  }),
              ],
          });
}
