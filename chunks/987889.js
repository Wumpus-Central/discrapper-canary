n.d(t, { Z: () => S }), n(388685);
var r = n(255367),
    i = n(73800),
    l = n(442837),
    o = n(481060),
    s = n(45114),
    a = n(110255),
    c = n(268623),
    u = n(324701),
    d = n(768943),
    h = n(538397),
    p = n(981631),
    f = n(388032),
    g = n(539499);
function m(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function b(e, t) {
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
        MENTION: ['BOOKMARK', 'SETTINGS'],
        REPLY: ['SETTINGS'],
        REACTION: ['SETTINGS'],
        ANNOUNCEMENT: ['SETTINGS'],
        MESSAGE: ['SETTINGS']
    },
    O = (e, t) =>
        (0, i.useMemo)(() => {
            let n = y[j(e)];
            return t ? ['ACK', ...n] : n;
        }, [e, t]);
function _(e) {
    let { label: t, onClick: n, message: l, Icon: s, interactionType: a } = e,
        [c, u] = (0, i.useState)(!1);
    return (0, r.jsx)(o.ua7, {
        text: t,
        position: 'top',
        spacing: 4,
        onTooltipShow: () => u(!0),
        onTooltipHide: () => u(!1),
        children: (e) =>
            (0, r.jsx)(
                o.P3F,
                b(m({}, e), {
                    className: g.action,
                    onClick: (e) => {
                        (0, h.Qz)({
                            message: l,
                            interactionType: a
                        }),
                            e.stopPropagation(),
                            n(l);
                    },
                    children: (0, r.jsx)(s, {
                        size: c ? 'sm' : 'xs',
                        className: g.actionIcon
                    })
                })
            )
    });
}
function v(e) {
    let { channel: t, message: n, label: l, Icon: s, Menu: a, interactionType: c } = e,
        [u, d] = (0, i.useState)(!1),
        [p, f] = (0, i.useState)(!1),
        y = (0, i.useRef)(null);
    return (0, r.jsx)(o.yRy, {
        shouldShow: p,
        animation: o.yRy.Animation.NONE,
        position: 'right',
        align: 'top',
        autoInvert: !1,
        targetElementRef: y,
        onRequestClose: () => f(!1),
        renderPopout: (e) =>
            (0, r.jsx)(o.P3F, {
                onClick: (e) => e.stopPropagation(),
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
                onTooltipShow: () => d(!0),
                onTooltipHide: () => d(!1),
                children: (t) =>
                    (0, r.jsx)(
                        o.P3F,
                        b(m({}, t), {
                            innerRef: y,
                            className: g.action,
                            onClick: (e) => {
                                (0, h.Qz)({
                                    message: n,
                                    interactionType: c
                                }),
                                    e.stopPropagation(),
                                    f(!p);
                            },
                            children: (0, r.jsx)(
                                s,
                                b(m({}, e), {
                                    message: n,
                                    'aria-label': l,
                                    className: g.actionIcon,
                                    size: u ? 'sm' : 'xs'
                                })
                            )
                        })
                    )
            })
    });
}
let C = {
        ACK: {
            type: 'standard',
            Icon: o.dz2,
            label: f.intl.string(f.t.e6RscX),
            onClick: (e) => {
                s.In(
                    e.channel_id,
                    {
                        object: p.qAy.MARK_MESSAGE_AS_READ_BUTTON,
                        objectType: p.Qqv.ACK_MANUAL
                    },
                    !0,
                    void 0,
                    e.id
                );
            },
            interactionType: h.s_.ACK
        },
        BOOKMARK: {
            type: 'menu',
            label: f.intl.string(f.t['9p3D9v']),
            Icon: (e) => (null != d.Z.getSavedMessage(e.message.channel_id, e.message.id) ? (0, r.jsx)(o.plf, m({}, e)) : (0, r.jsx)(o.gt9, m({}, e))),
            interactionType: h.s_.BOOKMARK,
            Menu: (e) => {
                let { message: t, renderPopoutProps: n } = e,
                    i = (0, l.e7)([d.Z], () => d.Z.getSavedMessage(t.channel_id, t.id)),
                    s = (0, c.x)({
                        message: t,
                        savedMessage: i
                    });
                return (0, r.jsxs)(
                    o.v2r,
                    b(m({}, n), {
                        navId: 'message-reminder-create',
                        'aria-label': f.intl.string(f.t.mJ3P0N),
                        onClose: n.closePopout,
                        onSelect: () => null,
                        children: [
                            null != i
                                ? (0, r.jsx)(o.sNh, {
                                      id: 'remove-from-for-later',
                                      label: f.intl.string(f.t.SvXS1d),
                                      icon: o.plf,
                                      action: () =>
                                          (0, u.x)({
                                              channelId: t.channel_id,
                                              messageId: t.id,
                                              dueAt: i.saveData.dueAt,
                                              displayToast: !0
                                          })
                                  })
                                : (0, r.jsx)(o.sNh, {
                                      id: 'create-bookmark',
                                      label: f.intl.string(f.t['9p3D9v']),
                                      icon: o.gt9,
                                      action: () =>
                                          (0, u.z)({
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
        SETTINGS: {
            type: 'menu',
            Icon: o.Dkj,
            label: f.intl.string(f.t.h850Sk),
            interactionType: h.s_.SETTINGS,
            Menu: (e) => {
                let { channel: t, renderPopoutProps: n } = e;
                return (0, r.jsx)(
                    a.Z,
                    b(m({}, n), {
                        channel: t,
                        navId: 'channel-context',
                        label: f.intl.string(f.t.Xm41aW)
                    })
                );
            }
        }
    },
    j = (e) => 'MENTION';
function S(e) {
    let { message: t, channel: n, isUnread: i } = e,
        l = O(t, i);
    return (0, r.jsx)(o.Kqy, {
        direction: 'horizontal',
        gap: 4,
        align: 'center',
        justify: 'center',
        className: g.actions,
        children: l.map((e) => {
            let i = C[e];
            switch (i.type) {
                case 'standard':
                    return (0, r.jsx)(_, b(m({}, i), { message: t }), e);
                case 'menu':
                    return (0, r.jsx)(
                        v,
                        b(m({}, i), {
                            channel: n,
                            message: t
                        }),
                        e
                    );
            }
        })
    });
}
