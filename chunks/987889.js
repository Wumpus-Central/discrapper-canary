(n.d(t, { Z: () => x }), n(388685));
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
    g = n(981631),
    m = n(388032),
    b = n(539499);
function _(e) {
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
function O(e, t) {
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
let y = {
        MENTION: ['SETTINGS'],
        REPLY: ['SETTINGS'],
        REACTION: ['SETTINGS'],
        ANNOUNCEMENT: ['SETTINGS'],
        MESSAGE: ['SETTINGS']
    },
    C = (e, t) => {
        let n = (0, f.ux)();
        return (0, i.useMemo)(() => {
            let r = S(e),
                i = new Set();
            return (t && i.add('ACK'), n && i.add('BOOKMARK'), y[r].forEach((e) => i.add(e)), Array.from(i));
        }, [e, t, n]);
    };
function v(e) {
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
                O(_({}, e), {
                    className: b.action,
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
                        className: b.actionIcon
                    })
                })
            )
    });
}
function j(e) {
    let { channel: t, message: n, label: l, Icon: a, Menu: s, interactionType: c } = e,
        u = (0, p.fJ)(),
        [d, h] = (0, i.useState)(!1),
        [f, g] = (0, i.useState)(!1),
        m = (0, i.useRef)(null);
    return (0, r.jsx)(o.yRy, {
        shouldShow: f,
        animation: o.yRy.Animation.NONE,
        position: 'right',
        align: 'top',
        autoInvert: !1,
        targetElementRef: m,
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
                        O(_({}, t), {
                            innerRef: m,
                            className: b.action,
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
                                O(_({}, e), {
                                    message: n,
                                    'aria-label': l,
                                    className: b.actionIcon,
                                    size: d ? 'sm' : 'xs'
                                })
                            )
                        })
                    )
            })
    });
}
let E = {
        ACK: {
            type: 'standard',
            Icon: o.dz2,
            label: m.intl.string(m.t.e6RscX),
            onClick: (e) => {
                (a.Z.dispatch({
                    type: 'NOTIFICATIONS_INBOX_ITEM_ACK',
                    messageId: e.id
                }),
                    s.In(
                        e.channel_id,
                        {
                            object: g.qAy.MARK_MESSAGE_AS_READ_BUTTON,
                            objectType: g.Qqv.ACK_MANUAL
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
            label: m.intl.string(m.t['9p3D9v']),
            Icon: (e) => (null != h.Z.getSavedMessage(e.message.channel_id, e.message.id) ? (0, r.jsx)(o.plf, _({}, e)) : (0, r.jsx)(o.gt9, _({}, e))),
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
                    O(_({}, n), {
                        navId: 'message-reminder-create',
                        'aria-label': m.intl.string(m.t.mJ3P0N),
                        onClose: n.closePopout,
                        onSelect: () => null,
                        children: [
                            null != i
                                ? (0, r.jsx)(o.sNh, {
                                      id: 'remove-from-for-later',
                                      label: m.intl.string(m.t.SvXS1d),
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
                                      label: m.intl.string(m.t['9p3D9v']),
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
            label: m.intl.string(m.t.h850Sk),
            interactionType: p.s_.SETTINGS,
            Menu: (e) => {
                let { channel: t, renderPopoutProps: n } = e;
                return (0, r.jsx)(
                    c.Z,
                    O(_({}, n), {
                        channel: t,
                        navId: 'channel-context',
                        label: m.intl.string(m.t.Xm41aW)
                    })
                );
            }
        }
    },
    S = (e) => 'MENTION';
function x(e) {
    let { message: t, channel: n, isUnread: i } = e,
        l = C(t, i);
    return (0, r.jsx)(o.Kqy, {
        direction: 'horizontal',
        gap: 4,
        align: 'center',
        justify: 'center',
        className: b.actions,
        children: l.map((e) => {
            let i = E[e];
            switch (i.type) {
                case 'standard':
                    return (0, r.jsx)(v, O(_({}, i), { message: t }), e);
                case 'menu':
                    return (0, r.jsx)(
                        j,
                        O(_({}, i), {
                            channel: n,
                            message: t
                        }),
                        e
                    );
            }
        })
    });
}
