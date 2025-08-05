n.d(t, { j: () => T });
var r = n(255367),
    i = n(73800),
    a = n(481060),
    o = n(239091),
    s = n(100527),
    l = n(933557),
    c = n(266076),
    u = n(769409),
    d = n(210975),
    f = n(626135),
    _ = n(981631),
    p = n(388032),
    h = n(791293);
function m(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function g(e) {
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
                m(e, t, n[t]);
            }));
    }
    return e;
}
function E(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
    }
    return n;
}
function b(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : E(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function y(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = O(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) ((n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
    }
    return i;
}
function O(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) ((n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]));
    return i;
}
let v = (e) => {
    let { channel: t } = e;
    return (0, d.m$)({ channelId: t.id })
        ? (0, r.jsx)(a.ua7, {
              text: p.intl.string(p.t.QyZ4TU),
              children: (e) =>
                  (0, r.jsx)(
                      a.tQf,
                      b(g({}, e), {
                          size: 'xs',
                          'aria-label': p.intl.string(p.t.VHXh8f),
                          color: a.TVs.colors.INTERACTIVE_NORMAL
                      })
                  )
          })
        : null;
};
function I(e) {
    let { channel: t } = e,
        i = t.id,
        d = (0, l.ZP)(t);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(a.ua7, {
                text: p.intl.string(p.t['5Q9+/P']),
                position: 'bottom',
                children: (e) => {
                    var { onMouseEnter: l, onClick: m } = e,
                        E = y(e, ['onMouseEnter', 'onClick']);
                    return (0, r.jsxs)(
                        a.P3F,
                        b(g({}, E), {
                            className: h.hoverableContainer,
                            onClick: () => {
                                (null == m || m(), (0, u.B)(i, s.Z.HEADER_BAR));
                            },
                            onContextMenu: (e) =>
                                (0, o.jW)(
                                    e,
                                    () =>
                                        Promise.all([n.e('79695'), n.e('70205'), n.e('53912'), n.e('55370')])
                                            .then(n.bind(n, 354741))
                                            .then((e) => {
                                                let { default: n } = e;
                                                return (e) =>
                                                    (0, r.jsx)(
                                                        n,
                                                        b(g({}, e), {
                                                            channel: t,
                                                            selected: !0
                                                        })
                                                    );
                                            }),
                                    { noBlurEvent: !0 }
                                ),
                            onDoubleClick: (e) => e.stopPropagation(),
                            onMouseEnter: () => {
                                (null == l || l(),
                                    f.default.track(_.rMx.GDM_EDIT_INTERACTED, {
                                        channel_id: t.id,
                                        action: 'entry_point_hovered',
                                        location: s.Z.HEADER_BAR
                                    }));
                            },
                            'aria-label': p.intl.string(p.t['5Q9+/P']),
                            children: [
                                (0, r.jsx)(c.Z, {
                                    className: h.gdmIcon,
                                    'aria-hidden': !0,
                                    channel: t,
                                    size: a.EFr.SIZE_20,
                                    facepileSizeOverride: a.EFr.SIZE_24,
                                    experimentLocation: 'header_bar'
                                }),
                                (0, r.jsx)(a.Text, {
                                    variant: 'text-md/medium',
                                    color: 'header-primary',
                                    children: null != d ? d : ''
                                }),
                                (0, r.jsx)(a.vdY, {
                                    className: h.editIcon,
                                    size: 'xs',
                                    color: 'currentColor'
                                })
                            ]
                        })
                    );
                }
            }),
            (0, r.jsx)(v, { channel: t })
        ]
    });
}
let T = i.memo(I);
