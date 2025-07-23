(n.d(t, { Z: () => Z }), n(388685));
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    o = n(755721),
    s = n(481060),
    c = n(493683),
    u = n(239091),
    d = n(599059),
    p = n(100527),
    h = n(933557),
    f = n(641360),
    m = n(266076),
    g = n(187237),
    b = n(769409),
    _ = n(210975),
    y = n(626135),
    C = n(981631),
    x = n(388032),
    v = n(791293);
function j(e) {
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
let E = (e) => {
        let { channel: t } = e;
        return (0, _.m$)({ channelId: t.id })
            ? (0, r.jsx)(s.ua7, {
                  text: x.intl.string(x.t.QyZ4TU),
                  children: (e) =>
                      (0, r.jsx)(
                          s.tQf,
                          O(j({}, e), {
                              size: 'xs',
                              'aria-label': x.intl.string(x.t.VHXh8f),
                              color: s.TVs.colors.INTERACTIVE_NORMAL
                          })
                      )
              })
            : null;
    },
    S = (e) => {
        let { channel: t, children: i, tooltipText: l, onClick: a, className: o } = e;
        return (0, r.jsx)(s.ua7, {
            text: l,
            position: 'bottom',
            children: (e) => {
                var { onMouseEnter: c } = e,
                    d = (function (e, t) {
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
                    })(e, ['onMouseEnter']);
                return (0, r.jsx)(
                    s.P3F,
                    O(j({}, d), {
                        className: o,
                        onClick: a,
                        onContextMenu: (e) =>
                            (0, u.jW)(
                                e,
                                () =>
                                    Promise.all([n.e('79695'), n.e('70205'), n.e('53912'), n.e('52495')])
                                        .then(n.bind(n, 354741))
                                        .then((e) => {
                                            let { default: n } = e;
                                            return (e) =>
                                                (0, r.jsx)(
                                                    n,
                                                    O(j({}, e), {
                                                        channel: t,
                                                        selected: !0
                                                    })
                                                );
                                        }),
                                { noBlurEvent: !0 }
                            ),
                        onDoubleClick: (e) => e.stopPropagation(),
                        onMouseEnter: () => {
                            (null == c || c(),
                                y.default.track(C.rMx.GDM_EDIT_INTERACTED, {
                                    channel_id: t.id,
                                    action: 'entry_point_hovered',
                                    location: p.Z.HEADER_BAR
                                }));
                        },
                        'aria-label': l,
                        children: i
                    })
                );
            }
        });
    },
    I = (e) => {
        let { channel: t, children: n, inlineEditor: l } = e,
            u = t.id,
            d = t.name,
            f = (0, h.ZP)(t),
            m = (0, h.cO)(t),
            [g, _] = i.useState(!1),
            y = i.useCallback(() => (l ? _(d) : (0, b.B)(u, p.Z.HEADER_BAR)), [l, d, u]),
            j = l ? x.t.pYO54e : x.t['5Q9+/P'];
        return l
            ? (0, r.jsxs)('div', {
                  className: v.newWrapper,
                  children: [
                      (0, r.jsxs)('div', {
                          className: a()(v.hoverableContainer, { [v.editing]: !1 !== g }),
                          onDoubleClick: (e) => e.stopPropagation(),
                          children: [
                              n,
                              !1 === g
                                  ? (0, r.jsxs)(r.Fragment, {
                                        children: [
                                            (0, r.jsxs)(S, {
                                                channel: t,
                                                tooltipText: x.intl.string(j),
                                                onClick: y,
                                                className: v.clickableTitle,
                                                children: [
                                                    (0, r.jsx)(s.Text, {
                                                        variant: 'text-md/semibold',
                                                        color: 'header-primary',
                                                        children: null != f ? f : ''
                                                    }),
                                                    (0, r.jsx)(s.vdY, {
                                                        className: v.editIcon,
                                                        size: 'xs',
                                                        color: 'currentColor'
                                                    })
                                                ]
                                            }),
                                            (0, r.jsx)(E, { channel: t })
                                        ]
                                    })
                                  : (0, r.jsx)('form', {
                                        onSubmit: () => {
                                            (!1 !== g && g !== d && c.Z.setName(u, g), _(!1));
                                        },
                                        children: (0, r.jsx)(o.Is, {
                                            autoFocus: !0,
                                            maxLength: C.HN8,
                                            inputClassName: v.newInput,
                                            name: 'channel_name',
                                            autoComplete: 'off',
                                            value: g,
                                            placeholder: null != m ? m : '',
                                            onChange: (e) => _(e),
                                            onBlur: () => _(!1),
                                            onKeyUp: (e) => 'Escape' === e.key && _(!1)
                                        })
                                    })
                          ]
                      }),
                      !1 !== g &&
                          (0, r.jsxs)('div', {
                              className: v.explainer,
                              children: [
                                  (0, r.jsx)(s.Text, {
                                      variant: 'text-xs/medium',
                                      color: 'header-muted',
                                      children: x.intl.string(x.t.a7oCBg)
                                  }),
                                  (0, r.jsx)(s.Text, {
                                      variant: 'text-xs/medium',
                                      color: 'header-muted',
                                      className: v.visibleLink,
                                      children: x.intl.format(x.t.HVqAgI, { onCancel: () => _(!1) })
                                  })
                              ]
                          })
                  ]
              })
            : (0, r.jsxs)(S, {
                  channel: t,
                  tooltipText: x.intl.string(j),
                  onClick: y,
                  className: a()(v.hoverableContainer, v.clickableTitle),
                  children: [
                      n,
                      (0, r.jsx)(s.Text, {
                          variant: 'text-md/semibold',
                          color: 'header-primary',
                          children: null != f ? f : ''
                      }),
                      (0, r.jsx)(s.vdY, {
                          className: v.editIcon,
                          size: 'xs',
                          color: 'currentColor'
                      })
                  ]
              });
    },
    P = (e) => {
        let { channel: t, children: n } = e,
            l = (0, h.ZP)(t),
            a = i.useCallback(
                (e) => {
                    l !== e.currentTarget.value && c.Z.setName(t.id, e.currentTarget.value);
                },
                [t, l]
            ),
            o = i.useCallback(
                (e) => {
                    y.default.track(C.rMx.GDM_EDIT_INTERACTED, {
                        action: 'opened',
                        channel_id: t.id,
                        channel_type: C.d4z.GROUP_DM,
                        location: p.Z.HEADER_BAR
                    });
                },
                [t]
            ),
            s = i.useCallback(
                (e) => {
                    y.default.track(C.rMx.GDM_EDIT_INTERACTED, {
                        action: 'entry_point_hovered',
                        channel_id: t.id,
                        channel_type: C.d4z.GROUP_DM,
                        location: p.Z.HEADER_BAR
                    });
                },
                [t]
            );
        return (0, r.jsxs)(r.Fragment, {
            children: [
                n,
                (0, r.jsxs)('div', {
                    className: v.container,
                    onDoubleClick: (e) => e.stopPropagation(),
                    children: [
                        (0, r.jsx)(d.Z, {
                            minLen: 1,
                            maxLen: C.HN8,
                            className: v.channelName,
                            name: 'channel_name',
                            autoComplete: 'off',
                            value: null != l ? l : '',
                            onFocus: o,
                            onBlur: a,
                            onMouseEnter: s
                        }),
                        (0, r.jsx)(E, { channel: t })
                    ]
                })
            ]
        });
    },
    Z = (e) => {
        let { channel: t, legacyIconClassName: n } = e,
            { enabled: i, unifiedEditing: l } = (0, f.Ae)('header_bar', t.id);
        return (0, r.jsx)(i ? I : P, {
            channel: t,
            inlineEditor: !l,
            children: (0, r.jsx)(g.v, {
                channel: t,
                className: i ? v.newGdmIcon : n,
                editable: !l,
                location: p.Z.HEADER_BAR,
                children: (0, r.jsx)(m.Z, {
                    'aria-hidden': !0,
                    channel: t,
                    size: s.EFr.SIZE_24,
                    facepileSizeOverride: i ? s.EFr.SIZE_24 : s.EFr.SIZE_32,
                    experimentLocation: 'header_bar'
                })
            })
        });
    };
