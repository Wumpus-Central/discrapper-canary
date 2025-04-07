n.d(t, { Z: () => j }), n(388685);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    o = n.n(l),
    a = n(481060),
    s = n(493683),
    c = n(599059),
    u = n(933557),
    d = n(641360),
    p = n(266076),
    h = n(187237),
    f = n(210975),
    m = n(981631),
    g = n(388032),
    b = n(791293);
function _(e) {
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
function C(e, t) {
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
let y = (e) => {
        let { channel: t } = e;
        return (0, f.m$)({ channelId: t.id })
            ? (0, r.jsx)(a.ua7, {
                  text: g.NW.string(g.t.QyZ4TU),
                  children: (e) =>
                      (0, r.jsx)(
                          a.tQf,
                          C(_({}, e), {
                              size: 'xs',
                              'aria-label': g.NW.string(g.t.VHXh8f),
                              color: a.TVs.colors.INTERACTIVE_NORMAL
                          })
                      )
              })
            : null;
    },
    x = (e) => {
        let { channel: t, children: n } = e,
            l = t.id,
            c = t.name,
            d = (0, u.ZP)(t),
            p = (0, u.cO)(t),
            [h, f] = i.useState(!1);
        return (0, r.jsxs)('div', {
            className: b.newWrapper,
            children: [
                (0, r.jsxs)('div', {
                    className: o()(b.hoverableContainer, { [b.editing]: !1 !== h }),
                    onDoubleClick: (e) => e.stopPropagation(),
                    children: [
                        n,
                        !1 === h
                            ? (0, r.jsxs)(r.Fragment, {
                                  children: [
                                      (0, r.jsx)(a.ua7, {
                                          text: g.NW.string(g.t.pYO54e),
                                          position: 'bottom',
                                          children: (e) =>
                                              (0, r.jsxs)(
                                                  a.P3F,
                                                  C(_({}, e), {
                                                      className: b.clickableTitle,
                                                      onClick: () => f(c),
                                                      onDoubleClick: (e) => e.stopPropagation(),
                                                      'aria-label': g.NW.string(g.t.bt75u7),
                                                      children: [
                                                          (0, r.jsx)(a.Text, {
                                                              variant: 'text-md/semibold',
                                                              color: 'header-primary',
                                                              children: null != d ? d : ''
                                                          }),
                                                          (0, r.jsx)(a.vdY, {
                                                              className: b.editIcon,
                                                              size: 'xs',
                                                              color: 'currentColor'
                                                          })
                                                      ]
                                                  })
                                              )
                                      }),
                                      (0, r.jsx)(y, { channel: t })
                                  ]
                              })
                            : (0, r.jsx)('form', {
                                  onSubmit: () => {
                                      !1 !== h && h !== c && s.Z.setName(l, h), f(!1);
                                  },
                                  children: (0, r.jsx)(a.oil, {
                                      autoFocus: !0,
                                      maxLength: m.HN8,
                                      inputClassName: b.newInput,
                                      name: 'channel_name',
                                      autoComplete: 'off',
                                      value: h,
                                      placeholder: null != p ? p : '',
                                      onChange: (e) => f(e),
                                      onBlur: () => f(!1),
                                      onKeyUp: (e) => 'Escape' === e.key && f(!1)
                                  })
                              })
                    ]
                }),
                !1 !== h &&
                    (0, r.jsxs)('div', {
                        className: b.explainer,
                        children: [
                            (0, r.jsx)(a.Text, {
                                variant: 'text-xs/medium',
                                color: 'header-muted',
                                children: g.NW.string(g.t.a7oCBg)
                            }),
                            (0, r.jsx)(a.Text, {
                                variant: 'text-xs/medium',
                                color: 'header-muted',
                                className: b.visibleLink,
                                children: g.NW.format(g.t.HVqAgI, { onCancel: () => f(!1) })
                            })
                        ]
                    })
            ]
        });
    },
    v = (e) => {
        let { channel: t, children: n } = e,
            i = (0, u.ZP)(t);
        return (0, r.jsxs)(r.Fragment, {
            children: [
                n,
                (0, r.jsxs)('div', {
                    className: b.container,
                    onDoubleClick: (e) => e.stopPropagation(),
                    children: [
                        (0, r.jsx)(c.Z, {
                            minLen: 1,
                            maxLen: m.HN8,
                            className: b.channelName,
                            name: 'channel_name',
                            autoComplete: 'off',
                            value: null != i ? i : '',
                            onBlur: (e) => {
                                i !== e.currentTarget.value && s.Z.setName(t.id, e.currentTarget.value);
                            }
                        }),
                        (0, r.jsx)(y, { channel: t })
                    ]
                })
            ]
        });
    },
    j = (e) => {
        let { channel: t, legacyIconClassName: n } = e,
            i = (0, d.I3)('header_bar');
        return (0, r.jsx)(i ? x : v, {
            channel: t,
            children: (0, r.jsx)(h.v, {
                channel: t,
                className: i ? b.newGdmIcon : n,
                children: (0, r.jsx)(p.Z, {
                    'aria-hidden': !0,
                    channel: t,
                    size: a.EFr.SIZE_24,
                    facepileSizeOverride: i ? a.EFr.SIZE_24 : a.EFr.SIZE_32,
                    experimentLocation: 'header_bar'
                })
            })
        });
    };
