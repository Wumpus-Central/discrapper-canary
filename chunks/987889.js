n.d(t, { Z: () => j }), n(388685);
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
    p = n(388032),
    f = n(539499);
function g(e) {
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
function m(e, t) {
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
let b = {
        MENTION: ['BOOKMARK', 'SETTINGS'],
        REPLY: ['SETTINGS'],
        REACTION: ['SETTINGS'],
        ANNOUNCEMENT: ['SETTINGS'],
        MESSAGE: ['SETTINGS']
    },
    y = (e, t) =>
        (0, i.useMemo)(() => {
            let n = b[C(e)];
            return t ? ['ACK', ...n] : n;
        }, [e, t]);
function O(e) {
    let { label: t, onClick: n, message: l, Icon: s, interactionType: a } = e,
        [c, u] = (0, i.useState)(!1);
    return (0, r.jsx)(o.ua7, {
        text: t,
        position: 'top',
        spacing: 4,
        children: (e) =>
            (0, r.jsx)(
                o.P3F,
                m(g({}, e), {
                    className: f.action,
                    onMouseEnter: () => u(!0),
                    onMouseLeave: () => u(!1),
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
                        className: f.actionIcon
                    })
                })
            )
    });
}
function v(e) {
    let { channel: t, message: n, label: l, Icon: s, Menu: a, interactionType: c } = e,
        [u, d] = (0, i.useState)(!1),
        [p, b] = (0, i.useState)(!1),
        y = (0, i.useRef)(null);
    return (0, r.jsx)(o.yRy, {
        shouldShow: p,
        animation: o.yRy.Animation.NONE,
        position: 'right',
        align: 'top',
        autoInvert: !1,
        targetElementRef: y,
        onRequestClose: () => b(!1),
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
                        m(g({}, t), {
                            innerRef: y,
                            className: f.action,
                            onMouseEnter: () => d(!0),
                            onMouseLeave: () => d(!1),
                            onClick: (e) => {
                                (0, h.Qz)({
                                    message: n,
                                    interactionType: c
                                }),
                                    e.stopPropagation(),
                                    b(!p);
                            },
                            children: (0, r.jsx)(
                                s,
                                m(g({}, e), {
                                    message: n,
                                    'aria-label': l,
                                    className: f.actionIcon,
                                    size: u ? 'sm' : 'xs'
                                })
                            )
                        })
                    )
            })
    });
}
let _ = {
        ACK: {
            type: 'standard',
            Icon: o.dz2,
            label: p.intl.string(p.t.e6RscX),
            onClick: (e) => {
                s.In(e.channel_id, !0, void 0, e.id);
            },
            interactionType: h.s_.ACK
        },
        BOOKMARK: {
            type: 'menu',
            label: p.intl.string(p.t['9p3D9v']),
            Icon: (e) => (null != d.Z.getSavedMessage(e.message.channel_id, e.message.id) ? (0, r.jsx)(o.plf, g({}, e)) : (0, r.jsx)(o.gt9, g({}, e))),
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
                    m(g({}, n), {
                        navId: 'message-reminder-create',
                        'aria-label': p.intl.string(p.t.mJ3P0N),
                        onClose: n.closePopout,
                        onSelect: () => null,
                        children: [
                            null != i
                                ? (0, r.jsx)(o.sNh, {
                                      id: 'remove-from-for-later',
                                      label: p.intl.string(p.t.SvXS1d),
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
                                      label: p.intl.string(p.t['9p3D9v']),
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
            label: p.intl.string(p.t.h850Sk),
            interactionType: h.s_.SETTINGS,
            Menu: (e) => {
                let { channel: t, renderPopoutProps: n } = e;
                return (0, r.jsx)(
                    a.Z,
                    m(g({}, n), {
                        channel: t,
                        navId: 'channel-context',
                        label: p.intl.string(p.t.Xm41aW)
                    })
                );
            }
        }
    },
    C = (e) => 'MENTION';
function j(e) {
    let { message: t, channel: n, isUnread: i } = e,
        l = y(t, i);
    return (0, r.jsx)(o.Kqy, {
        direction: 'horizontal',
        gap: 4,
        align: 'center',
        justify: 'center',
        className: f.actions,
        children: l.map((e) => {
            let i = _[e];
            switch (i.type) {
                case 'standard':
                    return (0, r.jsx)(O, m(g({}, i), { message: t }), e);
                case 'menu':
                    return (0, r.jsx)(
                        v,
                        m(g({}, i), {
                            channel: n,
                            message: t
                        }),
                        e
                    );
            }
        })
    });
}
