(n.d(t, { Z: () => P }), n(388685));
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
    p = n(804932),
    f = n(370774),
    g = n(993609),
    m = n(982183),
    b = n(981631),
    O = n(388032),
    _ = n(539499);
function y(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                ((r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r));
            }));
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
let v = {
        [m.ln.MENTION]: [m.r0.SETTINGS],
        [m.ln.REPLY]: [m.r0.SETTINGS],
        [m.ln.REACTION]: [m.r0.SETTINGS],
        [m.ln.ANNOUNCEMENT]: [m.r0.SETTINGS],
        [m.ln.MESSAGE]: [m.r0.SETTINGS]
    },
    j = (e, t) => {
        let n = (0, f.ux)();
        return (0, i.useMemo)(() => {
            let r = I(e),
                i = new Set();
            return (t && i.add(m.r0.ACK), n && i.add(m.r0.BOOKMARK), v[r].forEach((e) => i.add(e)), Array.from(i));
        }, [e, t, n]);
    };
function E(e) {
    let { label: t, onClick: n, message: l, Icon: s, interactionType: a } = e,
        [c, u] = (0, i.useState)(!1),
        d = (0, p.fJ)();
    return (0, r.jsx)(o.ua7, {
        text: t,
        position: 'top',
        spacing: 4,
        onTooltipShow: () => u(!0),
        onTooltipHide: () => u(!1),
        children: (e) =>
            (0, r.jsx)(
                o.P3F,
                C(y({}, e), {
                    className: _.action,
                    onClick: (e) => {
                        ((0, p.Qz)({
                            message: l,
                            interactionType: a,
                            viewId: d
                        }),
                            e.stopPropagation(),
                            n(l));
                    },
                    children: (0, r.jsx)(s, {
                        size: c ? 'sm' : 'xs',
                        className: _.actionIcon
                    })
                })
            )
    });
}
function S(e) {
    let { channel: t, message: n, label: l, Icon: s, Menu: a, interactionType: c, actionType: u } = e,
        d = (0, p.fJ)(),
        [h, f] = (0, i.useState)(!1),
        [m, b] = (0, i.useState)(!1),
        O = (0, i.useRef)(null),
        { openMenu: v, closeMenu: j } = (0, g.z)(),
        E = () => {
            let e = !m;
            (b(e), e ? v(n.id, u) : j(n.id, u));
        };
    return (0, r.jsx)(o.yRy, {
        shouldShow: m,
        animation: o.yRy.Animation.NONE,
        position: 'right',
        align: 'top',
        autoInvert: !1,
        targetElementRef: O,
        onRequestClose: () => {
            (b(!1), j(n.id, u));
        },
        renderPopout: (e) =>
            (0, r.jsx)(o.VqE, {
                onClick: (e) => e.stopPropagation(),
                returnRef: O,
                children: (0, r.jsx)(a, {
                    renderPopoutProps: e,
                    channel: t,
                    message: n
                })
            }),
        children: (e) =>
            (0, r.jsx)(o.ua7, {
                text: l,
                position: 'top',
                spacing: 4,
                onTooltipShow: () => f(!0),
                onTooltipHide: () => f(!1),
                children: (t) =>
                    (0, r.jsx)(
                        o.P3F,
                        C(y({}, t), {
                            innerRef: O,
                            className: _.action,
                            onClick: (e) => {
                                ((0, p.Qz)({
                                    message: n,
                                    interactionType: c,
                                    viewId: d
                                }),
                                    e.stopPropagation(),
                                    E());
                            },
                            children: (0, r.jsx)(
                                s,
                                C(y({}, e), {
                                    message: n,
                                    'aria-label': l,
                                    className: _.actionIcon,
                                    size: h ? 'sm' : 'xs'
                                })
                            )
                        })
                    )
            })
    });
}
let x = {
        [m.r0.ACK]: {
            type: 'standard',
            Icon: o.dz2,
            label: O.intl.string(O.t.e6RscX),
            onClick: (e) => {
                (s.Z.dispatch({
                    type: 'NOTIFICATIONS_INBOX_ITEM_ACK',
                    messageId: e.id,
                    channelId: e.channel_id
                }),
                    a.In(
                        e.channel_id,
                        {
                            object: b.qAy.MARK_MESSAGE_AS_READ_BUTTON,
                            objectType: b.Qqv.ACK_MANUAL
                        },
                        !0,
                        void 0,
                        e.id
                    ));
            },
            interactionType: p.s_.ACK
        },
        [m.r0.BOOKMARK]: {
            type: 'menu',
            label: O.intl.string(O.t['9p3D9v']),
            Icon: (e) => (null != h.Z.getSavedMessage(e.message.channel_id, e.message.id) ? (0, r.jsx)(o.plf, y({}, e)) : (0, r.jsx)(o.gt9, y({}, e))),
            interactionType: p.s_.BOOKMARK,
            Menu: (e) => {
                let { message: t, renderPopoutProps: n } = e,
                    i = (0, l.e7)([h.Z], () => h.Z.getSavedMessage(t.channel_id, t.id)),
                    s = (0, u.x)({
                        message: t,
                        savedMessage: i
                    });
                return (0, r.jsxs)(
                    o.v2r,
                    C(y({}, n), {
                        navId: 'message-reminder-create',
                        'aria-label': O.intl.string(O.t.mJ3P0N),
                        onClose: n.closePopout,
                        onSelect: () => null,
                        children: [
                            null != i
                                ? (0, r.jsx)(o.sNh, {
                                      id: 'remove-from-for-later',
                                      label: O.intl.string(O.t.SvXS1d),
                                      icon: o.plf,
                                      action: () =>
                                          (0, d.x)({
                                              channelId: t.channel_id,
                                              messageId: t.id,
                                              dueAt: i.saveData.dueAt,
                                              displayToast: !0
                                          })
                                  })
                                : (0, r.jsx)(o.sNh, {
                                      id: 'create-bookmark',
                                      label: O.intl.string(O.t['9p3D9v']),
                                      icon: o.gt9,
                                      action: () =>
                                          (0, d.z)({
                                              channelId: t.channel_id,
                                              messageId: t.id,
                                              displayToast: !0
                                          })
                                  }),
                            (0, r.jsx)(o.Clw, {}),
                            s
                        ]
                    })
                );
            }
        },
        [m.r0.SETTINGS]: {
            type: 'menu',
            Icon: o.Dkj,
            label: O.intl.string(O.t.h850Sk),
            interactionType: p.s_.SETTINGS,
            Menu: (e) => {
                let { channel: t, renderPopoutProps: n } = e;
                return (0, r.jsx)(
                    c.Z,
                    C(y({}, n), {
                        channel: t,
                        navId: 'channel-context',
                        label: O.intl.string(O.t.Xm41aW)
                    })
                );
            }
        }
    },
    I = (e) => m.ln.MENTION;
function P(e) {
    let { message: t, channel: n, isUnread: i } = e,
        l = j(t, i);
    return (0, r.jsx)(o.Kqy, {
        direction: 'horizontal',
        gap: 4,
        align: 'center',
        justify: 'center',
        className: _.actions,
        children: l.map((e) => {
            let i = x[e];
            switch (i.type) {
                case 'standard':
                    return (0, r.jsx)(
                        E,
                        C(y({}, i), {
                            actionType: e,
                            message: t
                        }),
                        e
                    );
                case 'menu':
                    return (0, r.jsx)(
                        S,
                        C(y({}, i), {
                            actionType: e,
                            channel: n,
                            message: t
                        }),
                        e
                    );
            }
        })
    });
}
