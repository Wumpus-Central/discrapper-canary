n.d(t, { Z: () => N }), n(388685);
var r = n(255367),
    i = n(73800),
    l = n(442837),
    o = n(481060),
    s = n(570140),
    a = n(45114),
    c = n(110255),
    u = n(268623),
    d = n(324701),
    h = n(768943),
    p = n(64247),
    f = n(804932),
    g = n(370774),
    m = n(993609),
    b = n(982183),
    O = n(981631),
    _ = n(388032),
    y = n(539499);
function C(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function v(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let j = {
        [b.ln.MENTION]: [b.r0.SETTINGS],
        [b.ln.REPLY]: [b.r0.SETTINGS],
        [b.ln.REACTION]: [b.r0.SETTINGS],
        [b.ln.ANNOUNCEMENT]: [b.r0.SETTINGS],
        [b.ln.MESSAGE]: [b.r0.SETTINGS],
    },
    E = (e, t) => {
        let n = (0, g.ux)();
        return (0, i.useMemo)(() => {
            let r = P(e),
                i = new Set();
            return t && i.add(b.r0.ACK), n && i.add(b.r0.BOOKMARK), j[r].forEach((e) => i.add(e)), Array.from(i);
        }, [e, t, n]);
    };
function S(e) {
    let { label: t, onClick: n, message: l, Icon: s, interactionType: a } = e,
        [c, u] = (0, i.useState)(!1),
        d = (0, f.fJ)();
    return (0, r.jsx)(o.ua7, {
        text: t,
        position: "top",
        spacing: 4,
        onTooltipShow: () => u(!0),
        onTooltipHide: () => u(!1),
        children: (e) =>
            (0, r.jsx)(
                o.P3F,
                v(C({}, e), {
                    className: y.action,
                    onClick: (e) => {
                        (0, f.Qz)({
                            message: l,
                            interactionType: a,
                            viewId: d,
                        }),
                            e.stopPropagation(),
                            n(l);
                    },
                    children: (0, r.jsx)(s, {
                        size: c ? "sm" : "xs",
                        className: y.actionIcon,
                    }),
                }),
            ),
    });
}
function x(e) {
    let { channel: t, message: n, label: l, Icon: s, Menu: a, interactionType: c, actionType: u } = e,
        d = (0, f.fJ)(),
        [h, p] = (0, i.useState)(!1),
        [g, b] = (0, i.useState)(!1),
        O = (0, i.useRef)(null),
        { openMenu: _, closeMenu: j } = (0, m.z)(),
        E = () => {
            let e = !g;
            b(e), e ? _(n.id, u) : j(n.id, u);
        };
    return (0, r.jsx)(o.yRy, {
        shouldShow: g,
        animation: o.yRy.Animation.NONE,
        position: "right",
        align: "top",
        autoInvert: !1,
        targetElementRef: O,
        onRequestClose: () => {
            b(!1), j(n.id, u);
        },
        renderPopout: (e) =>
            (0, r.jsx)(o.VqE, {
                onClick: (e) => e.stopPropagation(),
                returnRef: O,
                children: (0, r.jsx)(a, {
                    renderPopoutProps: e,
                    channel: t,
                    message: n,
                }),
            }),
        children: (e) =>
            (0, r.jsx)(o.ua7, {
                text: l,
                position: "top",
                spacing: 4,
                onTooltipShow: () => p(!0),
                onTooltipHide: () => p(!1),
                children: (t) =>
                    (0, r.jsx)(
                        o.P3F,
                        v(C({}, t), {
                            innerRef: O,
                            className: y.action,
                            onClick: (e) => {
                                (0, f.Qz)({
                                    message: n,
                                    interactionType: c,
                                    viewId: d,
                                }),
                                    e.stopPropagation(),
                                    E();
                            },
                            children: (0, r.jsx)(
                                s,
                                v(C({}, e), {
                                    message: n,
                                    "aria-label": l,
                                    className: y.actionIcon,
                                    size: h ? "sm" : "xs",
                                }),
                            ),
                        }),
                    ),
            }),
    });
}
let I = {
        [b.r0.ACK]: {
            type: "standard",
            Icon: o.dz2,
            label: _.intl.string(_.t.e6RscX),
            onClick: (e) => {
                s.Z.dispatch({
                    type: "NOTIFICATIONS_INBOX_ITEM_ACK",
                    messageId: e.id,
                    channelId: e.channel_id,
                }),
                    a.In(
                        e.channel_id,
                        {
                            object: O.qAy.MARK_MESSAGE_AS_READ_BUTTON,
                            objectType: O.Qqv.ACK_MANUAL,
                        },
                        !0,
                        void 0,
                        e.id,
                    );
            },
            interactionType: f.s_.ACK,
        },
        [b.r0.BOOKMARK]: {
            type: "menu",
            label: _.intl.string(_.t["9p3D9v"]),
            Icon: (e) =>
                null != h.Z.getSavedMessage(e.message.channel_id, e.message.id)
                    ? (0, r.jsx)(o.plf, C({}, e))
                    : (0, r.jsx)(o.gt9, C({}, e)),
            interactionType: f.s_.BOOKMARK,
            Menu: (e) => {
                let { message: t, renderPopoutProps: n } = e,
                    i = (0, l.e7)([h.Z], () => h.Z.getSavedMessage(t.channel_id, t.id)),
                    s = (0, u.x)({
                        message: t,
                        savedMessage: i,
                    });
                return (0, r.jsxs)(
                    o.v2r,
                    v(C({}, n), {
                        navId: "message-reminder-create",
                        "aria-label": _.intl.string(_.t.mJ3P0N),
                        onClose: n.closePopout,
                        onSelect: () => null,
                        children: [
                            null != i
                                ? (0, r.jsx)(o.sNh, {
                                      id: "remove-from-for-later",
                                      label: _.intl.string(_.t.SvXS1d),
                                      icon: o.plf,
                                      action: () =>
                                          (0, d.x)({
                                              channelId: t.channel_id,
                                              messageId: t.id,
                                              dueAt: i.saveData.dueAt,
                                              displayToast: !0,
                                          }),
                                  })
                                : (0, r.jsx)(o.sNh, {
                                      id: "create-bookmark",
                                      label: _.intl.string(_.t["9p3D9v"]),
                                      icon: o.gt9,
                                      action: () =>
                                          (0, d.z)({
                                              channelId: t.channel_id,
                                              messageId: t.id,
                                              displayToast: !0,
                                          }),
                                  }),
                            (0, r.jsx)(o.Clw, {}),
                            s,
                        ],
                    }),
                );
            },
        },
        [b.r0.SETTINGS]: {
            type: "menu",
            Icon: o.Dkj,
            label: _.intl.string(_.t.h850Sk),
            interactionType: f.s_.SETTINGS,
            Menu: (e) => {
                let { channel: t, renderPopoutProps: n } = e;
                return t.isThread()
                    ? (0, r.jsx)(
                          p.Z,
                          v(C({}, n), {
                              channel: t,
                              navId: "thread-context",
                              label: _.intl.string(_.t["1NBjqa"]),
                          }),
                      )
                    : (0, r.jsx)(
                          c.Z,
                          v(C({}, n), {
                              channel: t,
                              navId: "channel-context",
                              label: _.intl.string(_.t.Xm41aW),
                          }),
                      );
            },
        },
    },
    P = (e) => b.ln.MENTION;
function N(e) {
    let { message: t, channel: n, isUnread: i } = e,
        l = E(t, i);
    return (0, r.jsx)(o.Kqy, {
        direction: "horizontal",
        gap: 4,
        align: "center",
        justify: "center",
        className: y.actions,
        children: l.map((e) => {
            let i = I[e];
            switch (i.type) {
                case "standard":
                    return (0, r.jsx)(
                        S,
                        v(C({}, i), {
                            actionType: e,
                            message: t,
                        }),
                        e,
                    );
                case "menu":
                    return (0, r.jsx)(
                        x,
                        v(C({}, i), {
                            actionType: e,
                            channel: n,
                            message: t,
                        }),
                        e,
                    );
            }
        }),
    });
}
