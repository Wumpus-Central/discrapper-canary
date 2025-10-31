n.d(t, { Z: () => P }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(442837),
    o = n(28664),
    a = n(481060),
    s = n(570140),
    c = n(45114),
    u = n(110255),
    d = n(268623),
    p = n(324701),
    h = n(768943),
    f = n(64247),
    g = n(804932),
    m = n(370774),
    b = n(993609),
    _ = n(982183),
    y = n(981631),
    O = n(388032),
    v = n(361584);
function j(e) {
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
function C(e, t) {
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
    [_.ln.MENTION]: [_.r0.SETTINGS],
    [_.ln.REPLY]: [_.r0.SETTINGS],
    [_.ln.REACTION]: [_.r0.SETTINGS],
    [_.ln.ANNOUNCEMENT]: [_.r0.SETTINGS],
    [_.ln.MESSAGE]: [_.r0.SETTINGS],
};
function E(e) {
    let { label: t, onClick: n, message: l, Icon: s, interactionType: c } = e,
        [u, d] = (0, i.useState)(!1),
        p = (0, g.fJ)();
    return (0, r.jsx)(o.u, {
        text: t,
        position: "top",
        spacing: 4,
        asContainer: !0,
        onTooltipShow: () => d(!0),
        onTooltipHide: () => d(!1),
        children: (0, r.jsx)(a.P3F, {
            className: v.action,
            onClick: (e) => {
                (0, g.Qz)({
                    message: l,
                    interactionType: c,
                    viewId: p,
                }),
                    e.stopPropagation(),
                    n(l);
            },
            children: (0, r.jsx)(s, {
                size: u ? "sm" : "xs",
                className: v.actionIcon,
            }),
        }),
    });
}
function S(e) {
    let { channel: t, message: n, label: l, Icon: s, Menu: c, interactionType: u, actionType: d } = e,
        p = (0, g.fJ)(),
        [h, f] = (0, i.useState)(!1),
        [m, _] = (0, i.useState)(!1),
        y = (0, i.useRef)(null),
        { openMenu: O, closeMenu: x } = (0, b.z)();
    return (0, r.jsx)(a.yRy, {
        shouldShow: m,
        animation: a.yRy.Animation.NONE,
        position: "right",
        align: "top",
        autoInvert: !1,
        targetElementRef: y,
        onRequestClose: () => {
            _(!1), x(n.id, d);
        },
        renderPopout: (e) =>
            (0, r.jsx)(a.VqE, {
                onClick: (e) => e.stopPropagation(),
                returnRef: y,
                children: (0, r.jsx)(c, {
                    renderPopoutProps: e,
                    channel: t,
                    message: n,
                }),
            }),
        children: (e) =>
            (0, r.jsx)(o.u, {
                text: l,
                position: "top",
                spacing: 4,
                asContainer: !0,
                onTooltipShow: () => f(!0),
                onTooltipHide: () => f(!1),
                children: (0, r.jsx)(a.P3F, {
                    innerRef: y,
                    className: v.action,
                    onClick: (e) => {
                        (0, g.Qz)({
                            message: n,
                            interactionType: u,
                            viewId: p,
                        }),
                            e.stopPropagation();
                        let t = !m;
                        _(t), t ? O(n.id, d) : x(n.id, d);
                    },
                    children: (0, r.jsx)(
                        s,
                        C(j({}, e), {
                            message: n,
                            "aria-label": l,
                            className: v.actionIcon,
                            size: h ? "sm" : "xs",
                        }),
                    ),
                }),
            }),
    });
}
let I = {
    [_.r0.ACK]: {
        type: "standard",
        Icon: a.dz2,
        label: O.intl.string(O.t.e6RscS),
        onClick: (e) => {
            s.Z.dispatch({
                type: "NOTIFICATIONS_INBOX_ITEM_ACK",
                messageId: e.id,
                channelId: e.channel_id,
            }),
                c.ack(
                    e.channel_id,
                    {
                        object: y.qAy.MARK_MESSAGE_AS_READ_BUTTON,
                        objectType: y.AnalyticsObjectTypes.ACK_MANUAL,
                    },
                    !0,
                    void 0,
                    e.id,
                );
        },
        interactionType: g.s_.ACK,
    },
    [_.r0.BOOKMARK]: {
        type: "menu",
        label: O.intl.string(O.t["9p3D9p"]),
        Icon: (e) =>
            null != h.Z.getSavedMessage(e.message.channel_id, e.message.id)
                ? (0, r.jsx)(a.plf, j({}, e))
                : (0, r.jsx)(a.gt9, j({}, e)),
        interactionType: g.s_.BOOKMARK,
        Menu: (e) => {
            let { message: t, renderPopoutProps: n } = e,
                i = (0, l.e7)([h.Z], () => h.Z.getSavedMessage(t.channel_id, t.id)),
                o = (0, d.x)({
                    message: t,
                    savedMessage: i,
                });
            return (0, r.jsxs)(
                a.v2r,
                C(j({}, n), {
                    navId: "message-reminder-create",
                    "aria-label": O.intl.string(O.t.mJ3P0N),
                    onClose: n.closePopout,
                    onSelect: () => null,
                    children: [
                        null != i
                            ? (0, r.jsx)(a.sNh, {
                                  id: "remove-from-for-later",
                                  label: O.intl.string(O.t.SvXS1Z),
                                  icon: a.plf,
                                  action: () =>
                                      (0, p.x)({
                                          channelId: t.channel_id,
                                          messageId: t.id,
                                          dueAt: i.saveData.dueAt,
                                          displayToast: !0,
                                      }),
                              })
                            : (0, r.jsx)(a.sNh, {
                                  id: "create-bookmark",
                                  label: O.intl.string(O.t["9p3D9p"]),
                                  icon: a.gt9,
                                  action: () =>
                                      (0, p.z)({
                                          channelId: t.channel_id,
                                          messageId: t.id,
                                          displayToast: !0,
                                      }),
                              }),
                        (0, r.jsx)(a.Clw, {}),
                        o,
                    ],
                }),
            );
        },
    },
    [_.r0.SETTINGS]: {
        type: "menu",
        Icon: a.Dkj,
        label: O.intl.string(O.t.h850Ss),
        interactionType: g.s_.SETTINGS,
        Menu: (e) => {
            let { channel: t, renderPopoutProps: n } = e;
            return t.isThread()
                ? (0, r.jsx)(
                      f.Z,
                      C(j({}, n), {
                          channel: t,
                          navId: "thread-context",
                          label: O.intl.string(O.t["1NBjqb"]),
                      }),
                  )
                : (0, r.jsx)(
                      u.Z,
                      C(j({}, n), {
                          channel: t,
                          navId: "channel-context",
                          label: O.intl.string(O.t.Xm41aV),
                      }),
                  );
        },
    },
};
function P(e) {
    let { message: t, channel: n, isUnread: l } = e,
        o = ((e, t) => {
            let n = (0, m.ux)();
            return (0, i.useMemo)(() => {
                let e = _.ln.MENTION,
                    r = new Set();
                return t && r.add(_.r0.ACK), n && r.add(_.r0.BOOKMARK), x[e].forEach((e) => r.add(e)), Array.from(r);
            }, [e, t, n]);
        })(t, l);
    return (0, r.jsx)(a.Kqy, {
        direction: "horizontal",
        gap: 4,
        align: "center",
        justify: "center",
        className: v.actions,
        children: o.map((e) => {
            let i = I[e];
            switch (i.type) {
                case "standard":
                    return (0, r.jsx)(
                        E,
                        C(j({}, i), {
                            actionType: e,
                            message: t,
                        }),
                        e,
                    );
                case "menu":
                    return (0, r.jsx)(
                        S,
                        C(j({}, i), {
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
