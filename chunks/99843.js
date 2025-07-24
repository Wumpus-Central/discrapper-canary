n.d(t, { j: () => y });
var r = n(255367),
    i = n(73800),
    l = n(481060),
    a = n(239091),
    o = n(100527),
    s = n(933557),
    c = n(266076),
    u = n(769409),
    d = n(210975),
    p = n(626135),
    h = n(981631),
    f = n(388032),
    m = n(791293);
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
let _ = (e) => {
        let { channel: t } = e;
        return (0, d.m$)({ channelId: t.id })
            ? (0, r.jsx)(l.ua7, {
                  text: f.intl.string(f.t.QyZ4TU),
                  children: (e) =>
                      (0, r.jsx)(
                          l.tQf,
                          b(g({}, e), {
                              size: 'xs',
                              'aria-label': f.intl.string(f.t.VHXh8f),
                              color: l.TVs.colors.INTERACTIVE_NORMAL
                          })
                      )
              })
            : null;
    },
    y = i.memo(function (e) {
        let { channel: t } = e,
            i = t.id,
            d = (0, s.ZP)(t);
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(l.ua7, {
                    text: f.intl.string(f.t['5Q9+/P']),
                    position: 'bottom',
                    children: (e) => {
                        var { onMouseEnter: s, onClick: _ } = e,
                            y = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    r,
                                    i = (function (e, t) {
                                        if (null == e) return {};
                                        var n,
                                            r,
                                            i = {},
                                            l = Object.keys(e);
                                        for (r = 0; r < l.length; r++) ((n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]));
                                        return i;
                                    })(e, t);
                                if (Object.getOwnPropertySymbols) {
                                    var l = Object.getOwnPropertySymbols(e);
                                    for (r = 0; r < l.length; r++) ((n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
                                }
                                return i;
                            })(e, ['onMouseEnter', 'onClick']);
                        return (0, r.jsxs)(
                            l.P3F,
                            b(g({}, y), {
                                className: m.hoverableContainer,
                                onClick: () => {
                                    (null == _ || _(), (0, u.B)(i, o.Z.HEADER_BAR));
                                },
                                onContextMenu: (e) =>
                                    (0, a.jW)(
                                        e,
                                        () =>
                                            Promise.all([n.e('79695'), n.e('70205'), n.e('53912'), n.e('52495')])
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
                                    (null == s || s(),
                                        p.default.track(h.rMx.GDM_EDIT_INTERACTED, {
                                            channel_id: t.id,
                                            action: 'entry_point_hovered',
                                            location: o.Z.HEADER_BAR
                                        }));
                                },
                                'aria-label': f.intl.string(f.t['5Q9+/P']),
                                children: [
                                    (0, r.jsx)(c.Z, {
                                        className: m.gdmIcon,
                                        'aria-hidden': !0,
                                        channel: t,
                                        size: l.EFr.SIZE_20,
                                        facepileSizeOverride: l.EFr.SIZE_24,
                                        experimentLocation: 'header_bar'
                                    }),
                                    (0, r.jsx)(l.Text, {
                                        variant: 'text-md/medium',
                                        color: 'header-primary',
                                        children: null != d ? d : ''
                                    }),
                                    (0, r.jsx)(l.vdY, {
                                        className: m.editIcon,
                                        size: 'xs',
                                        color: 'currentColor'
                                    })
                                ]
                            })
                        );
                    }
                }),
                (0, r.jsx)(_, { channel: t })
            ]
        });
    });
