n.d(t, { Z: () => O }), n(388685);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    o = n.n(l),
    a = n(481060),
    s = n(493683),
    c = n(239091),
    u = n(599059),
    d = n(933557),
    p = n(641360),
    h = n(266076),
    f = n(187237),
    m = n(210975),
    g = n(981631),
    b = n(388032),
    y = n(791293);
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
let x = (e) => {
        let { channel: t } = e;
        return (0, m.m$)({ channelId: t.id })
            ? (0, r.jsx)(a.ua7, {
                  text: b.NW.string(b.t.QyZ4TU),
                  children: (e) =>
                      (0, r.jsx)(
                          a.tQf,
                          C(_({}, e), {
                              size: 'xs',
                              'aria-label': b.NW.string(b.t.VHXh8f),
                              color: a.TVs.colors.INTERACTIVE_NORMAL
                          })
                      )
              })
            : null;
    },
    v = (e) => {
        let { channel: t, children: l } = e,
            u = t.id,
            p = t.name,
            h = (0, d.ZP)(t),
            f = (0, d.cO)(t),
            [m, v] = i.useState(!1);
        return (0, r.jsxs)('div', {
            className: y.newWrapper,
            children: [
                (0, r.jsxs)('div', {
                    className: o()(y.hoverableContainer, { [y.editing]: !1 !== m }),
                    onDoubleClick: (e) => e.stopPropagation(),
                    children: [
                        l,
                        !1 === m
                            ? (0, r.jsxs)(r.Fragment, {
                                  children: [
                                      (0, r.jsx)(a.ua7, {
                                          text: b.NW.string(b.t.pYO54e),
                                          position: 'bottom',
                                          children: (e) =>
                                              (0, r.jsxs)(
                                                  a.P3F,
                                                  C(_({}, e), {
                                                      className: y.clickableTitle,
                                                      onClick: () => v(p),
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
                                                                                  C(_({}, e), {
                                                                                      channel: t,
                                                                                      selected: !0
                                                                                  })
                                                                              );
                                                                      }),
                                                              { noBlurEvent: !0 }
                                                          ),
                                                      onDoubleClick: (e) => e.stopPropagation(),
                                                      'aria-label': b.NW.string(b.t.bt75u7),
                                                      children: [
                                                          (0, r.jsx)(a.Text, {
                                                              variant: 'text-md/semibold',
                                                              color: 'header-primary',
                                                              children: null != h ? h : ''
                                                          }),
                                                          (0, r.jsx)(a.vdY, {
                                                              className: y.editIcon,
                                                              size: 'xs',
                                                              color: 'currentColor'
                                                          })
                                                      ]
                                                  })
                                              )
                                      }),
                                      (0, r.jsx)(x, { channel: t })
                                  ]
                              })
                            : (0, r.jsx)('form', {
                                  onSubmit: () => {
                                      !1 !== m && m !== p && s.Z.setName(u, m), v(!1);
                                  },
                                  children: (0, r.jsx)(a.oil, {
                                      autoFocus: !0,
                                      maxLength: g.HN8,
                                      inputClassName: y.newInput,
                                      name: 'channel_name',
                                      autoComplete: 'off',
                                      value: m,
                                      placeholder: null != f ? f : '',
                                      onChange: (e) => v(e),
                                      onBlur: () => v(!1),
                                      onKeyUp: (e) => 'Escape' === e.key && v(!1)
                                  })
                              })
                    ]
                }),
                !1 !== m &&
                    (0, r.jsxs)('div', {
                        className: y.explainer,
                        children: [
                            (0, r.jsx)(a.Text, {
                                variant: 'text-xs/medium',
                                color: 'header-muted',
                                children: b.NW.string(b.t.a7oCBg)
                            }),
                            (0, r.jsx)(a.Text, {
                                variant: 'text-xs/medium',
                                color: 'header-muted',
                                className: y.visibleLink,
                                children: b.NW.format(b.t.HVqAgI, { onCancel: () => v(!1) })
                            })
                        ]
                    })
            ]
        });
    },
    j = (e) => {
        let { channel: t, children: n } = e,
            i = (0, d.ZP)(t);
        return (0, r.jsxs)(r.Fragment, {
            children: [
                n,
                (0, r.jsxs)('div', {
                    className: y.container,
                    onDoubleClick: (e) => e.stopPropagation(),
                    children: [
                        (0, r.jsx)(u.Z, {
                            minLen: 1,
                            maxLen: g.HN8,
                            className: y.channelName,
                            name: 'channel_name',
                            autoComplete: 'off',
                            value: null != i ? i : '',
                            onBlur: (e) => {
                                i !== e.currentTarget.value && s.Z.setName(t.id, e.currentTarget.value);
                            }
                        }),
                        (0, r.jsx)(x, { channel: t })
                    ]
                })
            ]
        });
    },
    O = (e) => {
        let { channel: t, legacyIconClassName: n } = e,
            i = (0, p.I3)('header_bar', t.id);
        return (0, r.jsx)(i ? v : j, {
            channel: t,
            children: (0, r.jsx)(f.v, {
                channel: t,
                className: i ? y.newGdmIcon : n,
                children: (0, r.jsx)(h.Z, {
                    'aria-hidden': !0,
                    channel: t,
                    size: a.EFr.SIZE_24,
                    facepileSizeOverride: i ? a.EFr.SIZE_24 : a.EFr.SIZE_32,
                    experimentLocation: 'header_bar'
                })
            })
        });
    };
