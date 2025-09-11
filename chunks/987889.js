n.d(t, { Z: () => P }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(442837),
    o = n(481060),
    a = n(570140),
    s = n(45114),
    c = n(110255),
    u = n(268623),
    d = n(324701),
    p = n(768943),
    f = n(64247),
    h = n(804932),
    g = n(370774),
    m = n(993609),
    b = n(982183),
    O = n(981631),
    y = n(388032),
    _ = n(66449);
function v(e) {
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
function j(e, t) {
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
let x = {
    [b.ln.MENTION]: [b.r0.SETTINGS],
    [b.ln.REPLY]: [b.r0.SETTINGS],
    [b.ln.REACTION]: [b.r0.SETTINGS],
    [b.ln.ANNOUNCEMENT]: [b.r0.SETTINGS],
    [b.ln.MESSAGE]: [b.r0.SETTINGS],
};
function C(e) {
    let { label: t, onClick: n, message: l, Icon: a, interactionType: s } = e,
        [c, u] = (0, i.useState)(!1),
        d = (0, h.fJ)();
    return (0, r.jsx)(o.ua7, {
        text: t,
        position: "top",
        spacing: 4,
        onTooltipShow: () => u(!0),
        onTooltipHide: () => u(!1),
        children: (e) =>
            (0, r.jsx)(
                o.P3F,
                j(v({}, e), {
                    className: _.action,
                    onClick: (e) => {
                        (0, h.Qz)({
                            message: l,
                            interactionType: s,
                            viewId: d,
                        }),
                            e.stopPropagation(),
                            n(l);
                    },
                    children: (0, r.jsx)(a, {
                        size: c ? "sm" : "xs",
                        className: _.actionIcon,
                    }),
                }),
            ),
    });
}
function E(e) {
    let { channel: t, message: n, label: l, Icon: a, Menu: s, interactionType: c, actionType: u } = e,
        d = (0, h.fJ)(),
        [p, f] = (0, i.useState)(!1),
        [g, b] = (0, i.useState)(!1),
        O = (0, i.useRef)(null),
        { openMenu: y, closeMenu: x } = (0, m.z)();
    return (0, r.jsx)(o.yRy, {
        shouldShow: g,
        animation: o.yRy.Animation.NONE,
        position: "right",
        align: "top",
        autoInvert: !1,
        targetElementRef: O,
        onRequestClose: () => {
            b(!1), x(n.id, u);
        },
        renderPopout: (e) =>
            (0, r.jsx)(o.VqE, {
                onClick: (e) => e.stopPropagation(),
                returnRef: O,
                children: (0, r.jsx)(s, {
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
                onTooltipShow: () => f(!0),
                onTooltipHide: () => f(!1),
                children: (t) =>
                    (0, r.jsx)(
                        o.P3F,
                        j(v({}, t), {
                            innerRef: O,
                            className: _.action,
                            onClick: (e) => {
                                (0, h.Qz)({
                                    message: n,
                                    interactionType: c,
                                    viewId: d,
                                }),
                                    e.stopPropagation();
                                let t = !g;
                                b(t), t ? y(n.id, u) : x(n.id, u);
                            },
                            children: (0, r.jsx)(
                                a,
                                j(v({}, e), {
                                    message: n,
                                    "aria-label": l,
                                    className: _.actionIcon,
                                    size: p ? "sm" : "xs",
                                }),
                            ),
                        }),
                    ),
            }),
    });
}
let S = {
    [b.r0.ACK]: {
        type: "standard",
        Icon: o.dz2,
        label: y.intl.string(y.t.e6RscX),
        onClick: (e) => {
            a.Z.dispatch({
                type: "NOTIFICATIONS_INBOX_ITEM_ACK",
                messageId: e.id,
                channelId: e.channel_id,
            }),
                s.In(
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
        interactionType: h.s_.ACK,
    },
    [b.r0.BOOKMARK]: {
        type: "menu",
        label: y.intl.string(y.t["9p3D9v"]),
        Icon: (e) =>
            null != p.Z.getSavedMessage(e.message.channel_id, e.message.id)
                ? (0, r.jsx)(o.plf, v({}, e))
                : (0, r.jsx)(o.gt9, v({}, e)),
        interactionType: h.s_.BOOKMARK,
        Menu: (e) => {
            let { message: t, renderPopoutProps: n } = e,
                i = (0, l.e7)([p.Z], () => p.Z.getSavedMessage(t.channel_id, t.id)),
                a = (0, u.x)({
                    message: t,
                    savedMessage: i,
                });
            return (0, r.jsxs)(
                o.v2r,
                j(v({}, n), {
                    navId: "message-reminder-create",
                    "aria-label": y.intl.string(y.t.mJ3P0N),
                    onClose: n.closePopout,
                    onSelect: () => null,
                    children: [
                        null != i
                            ? (0, r.jsx)(o.sNh, {
                                  id: "remove-from-for-later",
                                  label: y.intl.string(y.t.SvXS1d),
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
                                  label: y.intl.string(y.t["9p3D9v"]),
                                  icon: o.gt9,
                                  action: () =>
                                      (0, d.z)({
                                          channelId: t.channel_id,
                                          messageId: t.id,
                                          displayToast: !0,
                                      }),
                              }),
                        (0, r.jsx)(o.Clw, {}),
                        a,
                    ],
                }),
            );
        },
    },
    [b.r0.SETTINGS]: {
        type: "menu",
        Icon: o.Dkj,
        label: y.intl.string(y.t.h850Sk),
        interactionType: h.s_.SETTINGS,
        Menu: (e) => {
            let { channel: t, renderPopoutProps: n } = e;
            return t.isThread()
                ? (0, r.jsx)(
                      f.Z,
                      j(v({}, n), {
                          channel: t,
                          navId: "thread-context",
                          label: y.intl.string(y.t["1NBjqa"]),
                      }),
                  )
                : (0, r.jsx)(
                      c.Z,
                      j(v({}, n), {
                          channel: t,
                          navId: "channel-context",
                          label: y.intl.string(y.t.Xm41aW),
                      }),
                  );
        },
    },
};
function P(e) {
    let { message: t, channel: n, isUnread: l } = e,
        a = ((e, t) => {
            let n = (0, g.ux)();
            return (0, i.useMemo)(() => {
                let e = b.ln.MENTION,
                    r = new Set();
                return t && r.add(b.r0.ACK), n && r.add(b.r0.BOOKMARK), x[e].forEach((e) => r.add(e)), Array.from(r);
            }, [e, t, n]);
        })(t, l);
    return (0, r.jsx)(o.Kqy, {
        direction: "horizontal",
        gap: 4,
        align: "center",
        justify: "center",
        className: _.actions,
        children: a.map((e) => {
            let i = S[e];
            switch (i.type) {
                case "standard":
                    return (0, r.jsx)(
                        C,
                        j(v({}, i), {
                            actionType: e,
                            message: t,
                        }),
                        e,
                    );
                case "menu":
                    return (0, r.jsx)(
                        E,
                        j(v({}, i), {
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
