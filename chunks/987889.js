n.d(t, { Z: () => C }), n(388685);
var r = n(255367),
    i = n(73800),
    l = n(442837),
    o = n(481060),
    s = n(45114),
    a = n(110255),
    c = n(268623),
    u = n(324701),
    d = n(768943),
    h = n(388032),
    p = n(539499);
function f(e) {
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
function g(e, t) {
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
let m = {
        MENTION: ['BOOKMARK', 'SETTINGS'],
        REPLY: ['SETTINGS'],
        REACTION: ['SETTINGS'],
        ANNOUNCEMENT: ['SETTINGS'],
        MESSAGE: ['SETTINGS']
    },
    b = (e, t) =>
        (0, i.useMemo)(() => {
            let n = m[_(e)];
            return t ? ['ACK', ...n] : n;
        }, [e, t]);
function y(e) {
    let { label: t, onClick: n, message: l, Icon: s } = e,
        [a, c] = (0, i.useState)(!1);
    return (0, r.jsx)(o.ua7, {
        text: t,
        position: 'top',
        spacing: 4,
        children: (e) =>
            (0, r.jsx)(
                o.P3F,
                g(f({}, e), {
                    className: p.action,
                    onMouseEnter: () => c(!0),
                    onMouseLeave: () => c(!1),
                    onClick: (e) => {
                        e.stopPropagation(), n(l);
                    },
                    children: (0, r.jsx)(s, {
                        size: a ? 'sm' : 'xs',
                        className: p.actionIcon
                    })
                })
            )
    });
}
function O(e) {
    let { channel: t, message: n, label: l, Icon: s, Menu: a } = e,
        [c, u] = (0, i.useState)(!1),
        [d, h] = (0, i.useState)(!1),
        m = (0, i.useRef)(null);
    return (0, r.jsx)(o.yRy, {
        shouldShow: d,
        animation: o.yRy.Animation.NONE,
        position: 'right',
        align: 'top',
        autoInvert: !1,
        targetElementRef: m,
        onRequestClose: () => h(!1),
        renderPopout: (e) =>
            (0, r.jsx)(a, {
                renderPopoutProps: e,
                channel: t,
                message: n
            }),
        children: (e) =>
            (0, r.jsx)(o.ua7, {
                text: l,
                position: 'top',
                spacing: 4,
                children: (t) =>
                    (0, r.jsx)(
                        o.P3F,
                        g(f({}, t), {
                            innerRef: m,
                            className: p.action,
                            onMouseEnter: () => u(!0),
                            onMouseLeave: () => u(!1),
                            onClick: (e) => {
                                e.stopPropagation(), h(!d);
                            },
                            children: (0, r.jsx)(
                                s,
                                g(f({}, e), {
                                    message: n,
                                    'aria-label': l,
                                    className: p.actionIcon,
                                    size: c ? 'sm' : 'xs'
                                })
                            )
                        })
                    )
            })
    });
}
let v = {
        ACK: {
            type: 'standard',
            Icon: o.dz2,
            label: h.intl.string(h.t.e6RscX),
            onClick: (e) => {
                s.In(e.channel_id, !0, void 0, e.id);
            }
        },
        BOOKMARK: {
            type: 'menu',
            label: h.intl.string(h.t['9p3D9v']),
            Icon: (e) => (null != d.Z.getSavedMessage(e.message.channel_id, e.message.id) ? (0, r.jsx)(o.plf, f({}, e)) : (0, r.jsx)(o.gt9, f({}, e))),
            Menu: (e) => {
                let { message: t, renderPopoutProps: n } = e,
                    i = (0, l.e7)([d.Z], () => d.Z.getSavedMessage(t.channel_id, t.id)),
                    s = (0, c.x)({
                        message: t,
                        savedMessage: i
                    });
                return (0, r.jsxs)(
                    o.v2r,
                    g(f({}, n), {
                        navId: 'message-reminder-create',
                        'aria-label': h.intl.string(h.t.mJ3P0N),
                        onClose: n.closePopout,
                        onSelect: () => null,
                        children: [
                            null != i
                                ? (0, r.jsx)(o.sNh, {
                                      id: 'remove-from-for-later',
                                      label: h.intl.string(h.t.SvXS1d),
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
                                      label: h.intl.string(h.t['9p3D9v']),
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
            label: h.intl.string(h.t.h850Sk),
            Menu: (e) => {
                let { channel: t, renderPopoutProps: n } = e;
                return (0, r.jsx)(
                    a.Z,
                    g(f({}, n), {
                        channel: t,
                        navId: 'channel-context',
                        label: h.intl.string(h.t.Xm41aW)
                    })
                );
            }
        }
    },
    _ = (e) => 'MENTION';
function C(e) {
    let { message: t, channel: n, isUnread: i } = e,
        l = b(t, i);
    return (0, r.jsx)(o.Kqy, {
        direction: 'horizontal',
        gap: 4,
        align: 'center',
        justify: 'center',
        className: p.actions,
        children: l.map((e) => {
            let i = v[e];
            switch (i.type) {
                case 'standard':
                    return (0, r.jsx)(
                        y,
                        g(f({}, i), {
                            message: t,
                            channel: n
                        }),
                        e
                    );
                case 'menu':
                    return (0, r.jsx)(
                        O,
                        g(f({}, i), {
                            channel: n,
                            message: t
                        }),
                        e
                    );
            }
        })
    });
}
