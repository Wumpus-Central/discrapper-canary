(n.d(t, { Z: () => P }), n(388685));
var r = n(255367),
    i = n(73800),
    l = n(442837),
    o = n(481060),
    a = n(570140),
    s = n(45114),
    c = n(110255),
    u = n(268623),
    d = n(324701),
    h = n(768943),
    p = n(804932),
    f = n(370774),
    g = n(993609),
    m = n(982183),
    b = n(981631),
    _ = n(388032),
    O = n(539499);
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
    let { label: t, onClick: n, message: l, Icon: a, interactionType: s } = e,
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
                    className: O.action,
                    onClick: (e) => {
                        ((0, p.Qz)({
                            message: l,
                            interactionType: s,
                            viewId: d
                        }),
                            e.stopPropagation(),
                            n(l));
                    },
                    children: (0, r.jsx)(a, {
                        size: c ? 'sm' : 'xs',
                        className: O.actionIcon
                    })
                })
            )
    });
}
function S(e) {
    let { channel: t, message: n, label: l, Icon: a, Menu: s, interactionType: c, actionType: u } = e,
        d = (0, p.fJ)(),
        [h, f] = (0, i.useState)(!1),
        [m, b] = (0, i.useState)(!1),
        _ = (0, i.useRef)(null),
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
        targetElementRef: _,
        onRequestClose: () => {
            (b(!1), j(n.id, u));
        },
        renderPopout: (e) =>
            (0, r.jsx)(o.VqE, {
                onClick: (e) => e.stopPropagation(),
                returnRef: _,
                children: (0, r.jsx)(s, {
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
                            innerRef: _,
                            className: O.action,
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
                                a,
                                C(y({}, e), {
                                    message: n,
                                    'aria-label': l,
                                    className: O.actionIcon,
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
            label: _.intl.string(_.t.e6RscX),
            onClick: (e) => {
                (a.Z.dispatch({
                    type: 'NOTIFICATIONS_INBOX_ITEM_ACK',
                    messageId: e.id
                }),
                    s.In(
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
            label: _.intl.string(_.t['9p3D9v']),
            Icon: (e) => (null != h.Z.getSavedMessage(e.message.channel_id, e.message.id) ? (0, r.jsx)(o.plf, y({}, e)) : (0, r.jsx)(o.gt9, y({}, e))),
            interactionType: p.s_.BOOKMARK,
            Menu: (e) => {
                let { message: t, renderPopoutProps: n } = e,
                    i = (0, l.e7)([h.Z], () => h.Z.getSavedMessage(t.channel_id, t.id)),
                    a = (0, u.x)({
                        message: t,
                        savedMessage: i
                    });
                return (0, r.jsxs)(
                    o.v2r,
                    C(y({}, n), {
                        navId: 'message-reminder-create',
                        'aria-label': _.intl.string(_.t.mJ3P0N),
                        onClose: n.closePopout,
                        onSelect: () => null,
                        children: [
                            null != i
                                ? (0, r.jsx)(o.sNh, {
                                      id: 'remove-from-for-later',
                                      label: _.intl.string(_.t.SvXS1d),
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
                                      label: _.intl.string(_.t['9p3D9v']),
                                      icon: o.gt9,
                                      action: () =>
                                          (0, d.z)({
                                              channelId: t.channel_id,
                                              messageId: t.id,
                                              displayToast: !0
                                          })
                                  }),
                            (0, r.jsx)(o.Clw, {}),
                            a
                        ]
                    })
                );
            }
        },
        [m.r0.SETTINGS]: {
            type: 'menu',
            Icon: o.Dkj,
            label: _.intl.string(_.t.h850Sk),
            interactionType: p.s_.SETTINGS,
            Menu: (e) => {
                let { channel: t, renderPopoutProps: n } = e;
                return (0, r.jsx)(
                    c.Z,
                    C(y({}, n), {
                        channel: t,
                        navId: 'channel-context',
                        label: _.intl.string(_.t.Xm41aW)
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
        className: O.actions,
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
