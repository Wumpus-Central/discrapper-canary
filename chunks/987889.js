(n.d(t, { Z: () => S }), n(388685));
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
    f = n(981631),
    g = n(388032),
    m = n(539499);
function b(e) {
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
function _(e, t) {
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
let O = {
        MENTION: ['BOOKMARK', 'SETTINGS'],
        REPLY: ['SETTINGS'],
        REACTION: ['SETTINGS'],
        ANNOUNCEMENT: ['SETTINGS'],
        MESSAGE: ['SETTINGS']
    },
    y = (e, t) =>
        (0, i.useMemo)(() => {
            let n = O[E(e)];
            return t ? ['ACK', ...n] : n;
        }, [e, t]);
function C(e) {
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
                _(b({}, e), {
                    className: m.action,
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
                        className: m.actionIcon
                    })
                })
            )
    });
}
function v(e) {
    let { channel: t, message: n, label: l, Icon: a, Menu: s, interactionType: c } = e,
        u = (0, p.fJ)(),
        [d, h] = (0, i.useState)(!1),
        [f, g] = (0, i.useState)(!1),
        O = (0, i.useRef)(null);
    return (0, r.jsx)(o.yRy, {
        shouldShow: f,
        animation: o.yRy.Animation.NONE,
        position: 'right',
        align: 'top',
        autoInvert: !1,
        targetElementRef: O,
        onRequestClose: () => g(!1),
        renderPopout: (e) =>
            (0, r.jsx)(o.P3F, {
                onClick: (e) => e.stopPropagation(),
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
                onTooltipShow: () => h(!0),
                onTooltipHide: () => h(!1),
                children: (t) =>
                    (0, r.jsx)(
                        o.P3F,
                        _(b({}, t), {
                            innerRef: O,
                            className: m.action,
                            onClick: (e) => {
                                ((0, p.Qz)({
                                    message: n,
                                    interactionType: c,
                                    viewId: u
                                }),
                                    e.stopPropagation(),
                                    g(!f));
                            },
                            children: (0, r.jsx)(
                                a,
                                _(b({}, e), {
                                    message: n,
                                    'aria-label': l,
                                    className: m.actionIcon,
                                    size: d ? 'sm' : 'xs'
                                })
                            )
                        })
                    )
            })
    });
}
let j = {
        ACK: {
            type: 'standard',
            Icon: o.dz2,
            label: g.intl.string(g.t.e6RscX),
            onClick: (e) => {
                (a.Z.dispatch({
                    type: 'NOTIFICATIONS_INBOX_ITEM_ACK',
                    messageId: e.id
                }),
                    s.In(
                        e.channel_id,
                        {
                            object: f.qAy.MARK_MESSAGE_AS_READ_BUTTON,
                            objectType: f.Qqv.ACK_MANUAL
                        },
                        !0,
                        void 0,
                        e.id
                    ));
            },
            interactionType: p.s_.ACK
        },
        BOOKMARK: {
            type: 'menu',
            label: g.intl.string(g.t['9p3D9v']),
            Icon: (e) => (null != h.Z.getSavedMessage(e.message.channel_id, e.message.id) ? (0, r.jsx)(o.plf, b({}, e)) : (0, r.jsx)(o.gt9, b({}, e))),
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
                    _(b({}, n), {
                        navId: 'message-reminder-create',
                        'aria-label': g.intl.string(g.t.mJ3P0N),
                        onClose: n.closePopout,
                        onSelect: () => null,
                        children: [
                            null != i
                                ? (0, r.jsx)(o.sNh, {
                                      id: 'remove-from-for-later',
                                      label: g.intl.string(g.t.SvXS1d),
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
                                      label: g.intl.string(g.t['9p3D9v']),
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
        SETTINGS: {
            type: 'menu',
            Icon: o.Dkj,
            label: g.intl.string(g.t.h850Sk),
            interactionType: p.s_.SETTINGS,
            Menu: (e) => {
                let { channel: t, renderPopoutProps: n } = e;
                return (0, r.jsx)(
                    c.Z,
                    _(b({}, n), {
                        channel: t,
                        navId: 'channel-context',
                        label: g.intl.string(g.t.Xm41aW)
                    })
                );
            }
        }
    },
    E = (e) => 'MENTION';
function S(e) {
    let { message: t, channel: n, isUnread: i } = e,
        l = y(t, i);
    return (0, r.jsx)(o.Kqy, {
        direction: 'horizontal',
        gap: 4,
        align: 'center',
        justify: 'center',
        className: m.actions,
        children: l.map((e) => {
            let i = j[e];
            switch (i.type) {
                case 'standard':
                    return (0, r.jsx)(C, _(b({}, i), { message: t }), e);
                case 'menu':
                    return (0, r.jsx)(
                        v,
                        _(b({}, i), {
                            channel: n,
                            message: t
                        }),
                        e
                    );
            }
        })
    });
}
