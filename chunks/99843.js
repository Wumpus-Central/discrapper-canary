n.d(t, { Z: () => P }), n(388685);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    o = n.n(l),
    a = n(481060),
    s = n(493683),
    c = n(239091),
    u = n(599059),
    d = n(100527),
    p = n(933557),
    h = n(641360),
    f = n(266076),
    m = n(187237),
    g = n(769409),
    b = n(210975),
    _ = n(626135),
    y = n(981631),
    C = n(388032),
    x = n(791293);
function v(e) {
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
function j(e, t) {
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
let O = (e) => {
        let { channel: t } = e;
        return (0, b.m$)({ channelId: t.id })
            ? (0, r.jsx)(a.ua7, {
                  text: C.intl.string(C.t.QyZ4TU),
                  children: (e) =>
                      (0, r.jsx)(
                          a.tQf,
                          j(v({}, e), {
                              size: 'xs',
                              'aria-label': C.intl.string(C.t.VHXh8f),
                              color: a.TVs.colors.INTERACTIVE_NORMAL
                          })
                      )
              })
            : null;
    },
    E = (e) => {
        let { channel: t, children: i, tooltipText: l, onClick: o, className: s } = e;
        return (0, r.jsx)(a.ua7, {
            text: l,
            position: 'bottom',
            children: (e) => {
                var { onMouseEnter: u } = e,
                    p = (function (e, t) {
                        if (null == e) return {};
                        var n,
                            r,
                            i = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    r,
                                    i = {},
                                    l = Object.keys(e);
                                for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                                return i;
                            })(e, t);
                        if (Object.getOwnPropertySymbols) {
                            var l = Object.getOwnPropertySymbols(e);
                            for (r = 0; r < l.length; r++) (n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
                        }
                        return i;
                    })(e, ['onMouseEnter']);
                return (0, r.jsx)(
                    a.P3F,
                    j(v({}, p), {
                        className: s,
                        onClick: o,
                        onContextMenu: (e) =>
                            (0, c.jW)(
                                e,
                                () =>
                                    Promise.all([n.e('79695'), n.e('20875'), n.e('70205'), n.e('53912'), n.e('518')])
                                        .then(n.bind(n, 354741))
                                        .then((e) => {
                                            let { default: n } = e;
                                            return (e) =>
                                                (0, r.jsx)(
                                                    n,
                                                    j(v({}, e), {
                                                        channel: t,
                                                        selected: !0
                                                    })
                                                );
                                        }),
                                { noBlurEvent: !0 }
                            ),
                        onDoubleClick: (e) => e.stopPropagation(),
                        onMouseEnter: () => {
                            null == u || u(),
                                _.default.track(y.rMx.GDM_EDIT_INTERACTED, {
                                    channel_id: t.id,
                                    action: 'entry_point_hovered',
                                    location: d.Z.HEADER_BAR
                                });
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
            c = t.id,
            u = t.name,
            h = (0, p.ZP)(t),
            f = (0, p.cO)(t),
            [m, b] = i.useState(!1),
            _ = i.useCallback(() => (l ? b(u) : (0, g.B)(c, d.Z.HEADER_BAR)), [l, u, c]),
            v = l ? C.t.pYO54e : C.t['5Q9+/P'];
        return l
            ? (0, r.jsxs)('div', {
                  className: x.newWrapper,
                  children: [
                      (0, r.jsxs)('div', {
                          className: o()(x.hoverableContainer, { [x.editing]: !1 !== m }),
                          onDoubleClick: (e) => e.stopPropagation(),
                          children: [
                              n,
                              !1 === m
                                  ? (0, r.jsxs)(r.Fragment, {
                                        children: [
                                            (0, r.jsxs)(E, {
                                                channel: t,
                                                tooltipText: C.intl.string(v),
                                                onClick: _,
                                                className: x.clickableTitle,
                                                children: [
                                                    (0, r.jsx)(a.Text, {
                                                        variant: 'text-md/semibold',
                                                        color: 'header-primary',
                                                        children: null != h ? h : ''
                                                    }),
                                                    (0, r.jsx)(a.vdY, {
                                                        className: x.editIcon,
                                                        size: 'xs',
                                                        color: 'currentColor'
                                                    })
                                                ]
                                            }),
                                            (0, r.jsx)(O, { channel: t })
                                        ]
                                    })
                                  : (0, r.jsx)('form', {
                                        onSubmit: () => {
                                            !1 !== m && m !== u && s.Z.setName(c, m), b(!1);
                                        },
                                        children: (0, r.jsx)(a.oil, {
                                            autoFocus: !0,
                                            maxLength: y.HN8,
                                            inputClassName: x.newInput,
                                            name: 'channel_name',
                                            autoComplete: 'off',
                                            value: m,
                                            placeholder: null != f ? f : '',
                                            onChange: (e) => b(e),
                                            onBlur: () => b(!1),
                                            onKeyUp: (e) => 'Escape' === e.key && b(!1)
                                        })
                                    })
                          ]
                      }),
                      !1 !== m &&
                          (0, r.jsxs)('div', {
                              className: x.explainer,
                              children: [
                                  (0, r.jsx)(a.Text, {
                                      variant: 'text-xs/medium',
                                      color: 'header-muted',
                                      children: C.intl.string(C.t.a7oCBg)
                                  }),
                                  (0, r.jsx)(a.Text, {
                                      variant: 'text-xs/medium',
                                      color: 'header-muted',
                                      className: x.visibleLink,
                                      children: C.intl.format(C.t.HVqAgI, { onCancel: () => b(!1) })
                                  })
                              ]
                          })
                  ]
              })
            : (0, r.jsxs)(E, {
                  channel: t,
                  tooltipText: C.intl.string(v),
                  onClick: _,
                  className: o()(x.hoverableContainer, x.clickableTitle),
                  children: [
                      n,
                      (0, r.jsx)(a.Text, {
                          variant: 'text-md/semibold',
                          color: 'header-primary',
                          children: null != h ? h : ''
                      }),
                      (0, r.jsx)(a.vdY, {
                          className: x.editIcon,
                          size: 'xs',
                          color: 'currentColor'
                      })
                  ]
              });
    },
    S = (e) => {
        let { channel: t, children: n } = e,
            i = (0, p.ZP)(t);
        return (0, r.jsxs)(r.Fragment, {
            children: [
                n,
                (0, r.jsxs)('div', {
                    className: x.container,
                    onDoubleClick: (e) => e.stopPropagation(),
                    children: [
                        (0, r.jsx)(u.Z, {
                            minLen: 1,
                            maxLen: y.HN8,
                            className: x.channelName,
                            name: 'channel_name',
                            autoComplete: 'off',
                            value: null != i ? i : '',
                            onBlur: (e) => {
                                i !== e.currentTarget.value && s.Z.setName(t.id, e.currentTarget.value);
                            }
                        }),
                        (0, r.jsx)(O, { channel: t })
                    ]
                })
            ]
        });
    },
    P = (e) => {
        let { channel: t, legacyIconClassName: n } = e,
            { enabled: i, unifiedEditing: l } = (0, h.Ae)('header_bar', t.id);
        return (0, r.jsx)(i ? I : S, {
            channel: t,
            inlineEditor: !l,
            children: (0, r.jsx)(m.v, {
                channel: t,
                className: i ? x.newGdmIcon : n,
                editable: !l,
                location: d.Z.HEADER_BAR,
                children: (0, r.jsx)(f.Z, {
                    'aria-hidden': !0,
                    channel: t,
                    size: a.EFr.SIZE_24,
                    facepileSizeOverride: i ? a.EFr.SIZE_24 : a.EFr.SIZE_32,
                    experimentLocation: 'header_bar'
                })
            })
        });
    };
