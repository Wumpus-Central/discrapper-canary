n.d(t, { Z: () => P }), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(442837),
    a = n(28664),
    o = n(481060),
    s = n(570140),
    c = n(45114),
    u = n(110255),
    d = n(268623),
    f = n(324701),
    h = n(768943),
    p = n(64247),
    g = n(804932),
    b = n(370774),
    m = n(993609),
    y = n(982183),
    O = n(981631),
    v = n(388032),
    j = n(834401);
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
function x(e, t) {
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
let E = {
    [y.ln.MENTION]: [y.r0.SETTINGS],
    [y.ln.REPLY]: [y.r0.SETTINGS],
    [y.ln.REACTION]: [y.r0.SETTINGS],
    [y.ln.ANNOUNCEMENT]: [y.r0.SETTINGS],
    [y.ln.MESSAGE]: [y.r0.SETTINGS],
};
function S(e) {
    let { label: t, onClick: n, message: l, Icon: s, interactionType: c } = e,
        [u, d] = (0, i.useState)(!1),
        f = (0, g.fJ)();
    return (0, r.jsx)(a.u, {
        text: t,
        position: "top",
        spacing: 4,
        asContainer: !0,
        onTooltipShow: () => d(!0),
        onTooltipHide: () => d(!1),
        children: (0, r.jsx)(o.P3F, {
            className: j.action,
            onClick: (e) => {
                (0, g.Qz)({
                    message: l,
                    interactionType: c,
                    viewId: f,
                }),
                    e.stopPropagation(),
                    n(l);
            },
            children: (0, r.jsx)(s, {
                size: u ? "sm" : "xs",
                className: j.actionIcon,
            }),
        }),
    });
}
function I(e) {
    let { channel: t, message: n, label: l, Icon: s, Menu: c, interactionType: u, actionType: d } = e,
        f = (0, g.fJ)(),
        [h, p] = (0, i.useState)(!1),
        [b, y] = (0, i.useState)(!1),
        O = (0, i.useRef)(null),
        { openMenu: v, closeMenu: E } = (0, m.z)();
    return (0, r.jsx)(o.yRy, {
        shouldShow: b,
        animation: o.yRy.Animation.NONE,
        position: "right",
        align: "top",
        autoInvert: !1,
        targetElementRef: O,
        onRequestClose: () => {
            y(!1), E(n.id, d);
        },
        renderPopout: (e) =>
            (0, r.jsx)(o.VqE, {
                onClick: (e) => e.stopPropagation(),
                returnRef: O,
                children: (0, r.jsx)(c, {
                    renderPopoutProps: e,
                    channel: t,
                    message: n,
                }),
            }),
        children: (e) =>
            (0, r.jsx)(a.u, {
                text: l,
                position: "top",
                spacing: 4,
                asContainer: !0,
                onTooltipShow: () => p(!0),
                onTooltipHide: () => p(!1),
                children: (0, r.jsx)(o.P3F, {
                    innerRef: O,
                    className: j.action,
                    onClick: (e) => {
                        (0, g.Qz)({
                            message: n,
                            interactionType: u,
                            viewId: f,
                        }),
                            e.stopPropagation();
                        let t = !b;
                        y(t), t ? v(n.id, d) : E(n.id, d);
                    },
                    children: (0, r.jsx)(
                        s,
                        x(C({}, e), {
                            message: n,
                            "aria-label": l,
                            className: j.actionIcon,
                            size: h ? "sm" : "xs",
                        }),
                    ),
                }),
            }),
    });
}
let _ = {
    [y.r0.ACK]: {
        type: "standard",
        Icon: o.dz2,
        label: v.intl.string(v.t.e6RscS),
        onClick: (e) => {
            s.Z.dispatch({
                type: "NOTIFICATIONS_INBOX_ITEM_ACK",
                messageId: e.id,
                channelId: e.channel_id,
            }),
                c.ack(
                    e.channel_id,
                    {
                        object: O.qAy.MARK_MESSAGE_AS_READ_BUTTON,
                        objectType: O.AnalyticsObjectTypes.ACK_MANUAL,
                    },
                    !0,
                    void 0,
                    e.id,
                );
        },
        interactionType: g.s_.ACK,
    },
    [y.r0.BOOKMARK]: {
        type: "menu",
        label: v.intl.string(v.t["9p3D9p"]),
        Icon: (e) =>
            null != h.Z.getSavedMessage(e.message.channel_id, e.message.id)
                ? (0, r.jsx)(o.plf, C({}, e))
                : (0, r.jsx)(o.gt9, C({}, e)),
        interactionType: g.s_.BOOKMARK,
        Menu: (e) => {
            let { message: t, renderPopoutProps: n } = e,
                i = (0, l.e7)([h.Z], () => h.Z.getSavedMessage(t.channel_id, t.id)),
                a = (0, d.x)({
                    message: t,
                    savedMessage: i,
                });
            return (0, r.jsxs)(
                o.v2r,
                x(C({}, n), {
                    navId: "message-reminder-create",
                    "aria-label": v.intl.string(v.t.mJ3P0N),
                    onClose: n.closePopout,
                    onSelect: () => null,
                    children: [
                        null != i
                            ? (0, r.jsx)(o.sNh, {
                                  id: "remove-from-for-later",
                                  label: v.intl.string(v.t.SvXS1Z),
                                  icon: o.plf,
                                  action: () =>
                                      (0, f.x)({
                                          channelId: t.channel_id,
                                          messageId: t.id,
                                          dueAt: i.saveData.dueAt,
                                          displayToast: !0,
                                      }),
                              })
                            : (0, r.jsx)(o.sNh, {
                                  id: "create-bookmark",
                                  label: v.intl.string(v.t["9p3D9p"]),
                                  icon: o.gt9,
                                  action: () =>
                                      (0, f.z)({
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
    [y.r0.SETTINGS]: {
        type: "menu",
        Icon: o.Dkj,
        label: v.intl.string(v.t.h850Ss),
        interactionType: g.s_.SETTINGS,
        Menu: (e) => {
            let { channel: t, renderPopoutProps: n } = e;
            return t.isThread()
                ? (0, r.jsx)(
                      p.Z,
                      x(C({}, n), {
                          channel: t,
                          navId: "thread-context",
                          label: v.intl.string(v.t["1NBjqb"]),
                      }),
                  )
                : (0, r.jsx)(
                      u.Z,
                      x(C({}, n), {
                          channel: t,
                          navId: "channel-context",
                          label: v.intl.string(v.t.Xm41aV),
                      }),
                  );
        },
    },
};
function P(e) {
    let { message: t, channel: n, isUnread: l } = e,
        a = ((e, t) => {
            let n = (0, b.ux)();
            return (0, i.useMemo)(() => {
                let e = y.ln.MENTION,
                    r = new Set();
                return t && r.add(y.r0.ACK), n && r.add(y.r0.BOOKMARK), E[e].forEach((e) => r.add(e)), Array.from(r);
            }, [e, t, n]);
        })(t, l);
    return (0, r.jsx)(o.Kqy, {
        direction: "horizontal",
        gap: 4,
        align: "center",
        justify: "center",
        className: j.actions,
        children: a.map((e) => {
            let i = _[e];
            switch (i.type) {
                case "standard":
                    return (0, r.jsx)(
                        S,
                        x(C({}, i), {
                            actionType: e,
                            message: t,
                        }),
                        e,
                    );
                case "menu":
                    return (0, r.jsx)(
                        I,
                        x(C({}, i), {
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
