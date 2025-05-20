n.d(t, { Z: () => _ }), n(388685);
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
    p = n(21678);
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
        i.useMemo(() => {
            let n = m[v(e)];
            return t ? ['ACK', ...n] : n;
        }, [e, t]);
function y(e) {
    let { channel: t, message: n, label: l, Icon: s, Menu: a } = e,
        [c, u] = i.useState(!1),
        d = i.useRef(null);
    return (0, r.jsx)(o.yRy, {
        shouldShow: c,
        animation: o.yRy.Animation.NONE,
        position: 'right',
        align: 'top',
        autoInvert: !1,
        targetElementRef: d,
        onRequestClose: () => u(!1),
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
                            innerRef: d,
                            className: p.action,
                            onClick: (e) => {
                                e.stopPropagation(), u(!c);
                            },
                            children: (0, r.jsx)(
                                s,
                                g(f({}, e), {
                                    'aria-label': l,
                                    className: p.actionIcon,
                                    size: 'xs'
                                })
                            )
                        })
                    )
            })
    });
}
let O = {
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
            Icon: o.plf,
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
    v = (e) => 'MENTION';
function _(e) {
    let { message: t, channel: n, isUnread: i } = e,
        l = b(t, i);
    return (0, r.jsx)(o.Kqy, {
        direction: 'horizontal',
        gap: 4,
        align: 'center',
        className: p.actions,
        children: l.map((e) => {
            let i = O[e];
            switch (i.type) {
                case 'standard':
                    return (0, r.jsx)(
                        o.ua7,
                        {
                            text: i.label,
                            position: 'top',
                            spacing: 4,
                            children: (n) =>
                                (0, r.jsx)(
                                    o.P3F,
                                    g(f({}, n), {
                                        className: p.action,
                                        onClick: (e) => {
                                            e.stopPropagation(), i.onClick(t);
                                        },
                                        children: (0, r.jsx)(i.Icon, {
                                            size: 'xs',
                                            className: p.actionIcon
                                        })
                                    }),
                                    e
                                )
                        },
                        e
                    );
                case 'menu':
                    return (0, r.jsx)(
                        y,
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
