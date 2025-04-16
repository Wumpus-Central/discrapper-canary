n.d(t, { Z: () => E }), n(388685);
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
    m = n(769409),
    g = n(210975),
    b = n(981631),
    _ = n(388032),
    y = n(791293);
function C(e) {
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
function x(e, t) {
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
let v = (e) => {
        let { channel: t } = e;
        return (0, g.m$)({ channelId: t.id })
            ? (0, r.jsx)(a.ua7, {
                  text: _.NW.string(_.t.QyZ4TU),
                  children: (e) =>
                      (0, r.jsx)(
                          a.tQf,
                          x(C({}, e), {
                              size: 'xs',
                              'aria-label': _.NW.string(_.t.VHXh8f),
                              color: a.TVs.colors.INTERACTIVE_NORMAL
                          })
                      )
              })
            : null;
    },
    j = (e) => {
        let { channel: t, children: l, inlineEditor: u } = e,
            p = t.id,
            h = t.name,
            f = (0, d.ZP)(t),
            g = (0, d.cO)(t),
            [j, O] = i.useState(!1);
        return (0, r.jsxs)('div', {
            className: y.newWrapper,
            children: [
                (0, r.jsxs)('div', {
                    className: o()(y.hoverableContainer, { [y.editing]: !1 !== j }),
                    onDoubleClick: (e) => e.stopPropagation(),
                    children: [
                        l,
                        !1 === j
                            ? (0, r.jsxs)(r.Fragment, {
                                  children: [
                                      (0, r.jsx)(a.ua7, {
                                          text: _.NW.string(u ? _.t.pYO54e : _.t['5Q9+/P']),
                                          position: 'bottom',
                                          children: (e) =>
                                              (0, r.jsxs)(
                                                  a.P3F,
                                                  x(C({}, e), {
                                                      className: y.clickableTitle,
                                                      onClick: () => (u ? O(h) : (0, m.B)(t.id)),
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
                                                                                  x(C({}, e), {
                                                                                      channel: t,
                                                                                      selected: !0
                                                                                  })
                                                                              );
                                                                      }),
                                                              { noBlurEvent: !0 }
                                                          ),
                                                      onDoubleClick: (e) => e.stopPropagation(),
                                                      'aria-label': _.NW.string(_.t.bt75u7),
                                                      children: [
                                                          (0, r.jsx)(a.Text, {
                                                              variant: 'text-md/semibold',
                                                              color: 'header-primary',
                                                              children: null != f ? f : ''
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
                                      (0, r.jsx)(v, { channel: t })
                                  ]
                              })
                            : (0, r.jsx)('form', {
                                  onSubmit: () => {
                                      !1 !== j && j !== h && s.Z.setName(p, j), O(!1);
                                  },
                                  children: (0, r.jsx)(a.oil, {
                                      autoFocus: !0,
                                      maxLength: b.HN8,
                                      inputClassName: y.newInput,
                                      name: 'channel_name',
                                      autoComplete: 'off',
                                      value: j,
                                      placeholder: null != g ? g : '',
                                      onChange: (e) => O(e),
                                      onBlur: () => O(!1),
                                      onKeyUp: (e) => 'Escape' === e.key && O(!1)
                                  })
                              })
                    ]
                }),
                !1 !== j &&
                    (0, r.jsxs)('div', {
                        className: y.explainer,
                        children: [
                            (0, r.jsx)(a.Text, {
                                variant: 'text-xs/medium',
                                color: 'header-muted',
                                children: _.NW.string(_.t.a7oCBg)
                            }),
                            (0, r.jsx)(a.Text, {
                                variant: 'text-xs/medium',
                                color: 'header-muted',
                                className: y.visibleLink,
                                children: _.NW.format(_.t.HVqAgI, { onCancel: () => O(!1) })
                            })
                        ]
                    })
            ]
        });
    },
    O = (e) => {
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
                            maxLen: b.HN8,
                            className: y.channelName,
                            name: 'channel_name',
                            autoComplete: 'off',
                            value: null != i ? i : '',
                            onBlur: (e) => {
                                i !== e.currentTarget.value && s.Z.setName(t.id, e.currentTarget.value);
                            }
                        }),
                        (0, r.jsx)(v, { channel: t })
                    ]
                })
            ]
        });
    },
    E = (e) => {
        let { channel: t, legacyIconClassName: n } = e,
            { enabled: i, unifiedEditing: l } = (0, p.Ae)('header_bar', t.id);
        return (0, r.jsx)(i ? j : O, {
            channel: t,
            inlineEditor: !l,
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
