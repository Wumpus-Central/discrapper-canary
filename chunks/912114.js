l.d(n, { default: () => j }), l(47120);
var o = l(200651),
    r = l(192379),
    t = l(442837),
    i = l(481060),
    a = l(493683),
    c = l(43267),
    s = l(933557),
    u = l(313201),
    d = l(592125),
    p = l(486324),
    h = l(388032),
    m = l(285580);
function x(e) {
    let { channel: n, previewIcon: r, onIconChange: t } = e,
        a = (null == n ? void 0 : n.icon) != null,
        s = null != r ? r : a ? (0, c.x)(n, 120) : null;
    return (0, o.jsxs)('div', {
        className: m.iconSection,
        children: [
            (0, o.jsxs)(i.P3F, {
                className: m.iconContainer,
                onClick: () => {
                    (0, i.ZDy)(async () => {
                        let { default: e } = await Promise.all([l.e('91689'), l.e('55849'), l.e('90851')]).then(l.bind(l, 192277));
                        return (n) =>
                            (0, o.jsx)(
                                e,
                                (function (e) {
                                    for (var n = 1; n < arguments.length; n++) {
                                        var l = null != arguments[n] ? arguments[n] : {},
                                            o = Object.keys(l);
                                        'function' == typeof Object.getOwnPropertySymbols &&
                                            (o = o.concat(
                                                Object.getOwnPropertySymbols(l).filter(function (e) {
                                                    return Object.getOwnPropertyDescriptor(l, e).enumerable;
                                                })
                                            )),
                                            o.forEach(function (n) {
                                                var o;
                                                (o = l[n]),
                                                    n in e
                                                        ? Object.defineProperty(e, n, {
                                                              value: o,
                                                              enumerable: !0,
                                                              configurable: !0,
                                                              writable: !0
                                                          })
                                                        : (e[n] = o);
                                            });
                                    }
                                    return e;
                                })(
                                    {
                                        maxFileSizeBytes: 8388608,
                                        onComplete: (e) => {
                                            t(e.imageUri);
                                        },
                                        uploadType: p.pC.AVATAR,
                                        showUpsellHeader: !1,
                                        modalTitle: h.NW.string(h.t['6yrpFR'])
                                    },
                                    n
                                )
                            );
                    });
                },
                children: [
                    null != s
                        ? (0, o.jsx)('img', {
                              src: s,
                              alt: 'Group Icon',
                              className: m.iconImage
                          })
                        : (0, o.jsx)('div', {
                              className: m.iconPlaceholder,
                              children: (0, o.jsx)(i.BFJ, {
                                  size: 'custom',
                                  width: 64,
                                  height: 64,
                                  color: 'currentColor'
                              })
                          }),
                    (0, o.jsx)('div', {
                        className: m.pencilIconWrapper,
                        children: (0, o.jsx)(i.vdY, {
                            color: 'currentColor',
                            size: 'md'
                        })
                    })
                ]
            }),
            (0, o.jsx)(i.Text, {
                variant: 'text-xs/medium',
                color: 'header-muted',
                children: 'Minimum image size is 128x128.'
            })
        ]
    });
}
let j = function (e) {
    var n;
    let { channelId: l, onClose: c, transitionState: p } = e,
        j = (0, u.Dt)(),
        g = (0, t.e7)([d.Z], () => d.Z.getChannel(l)),
        b = (null != (n = null == g ? void 0 : g.name) ? n : '').length > 0,
        C = (0, s.ZP)(g),
        f = (0, s.cO)(g),
        [_, v] = r.useState(b && null != C ? C : ''),
        [y, k] = r.useState(null);
    return null == g
        ? null
        : (0, o.jsx)('form', {
              onSubmit: (e) => {
                  e.preventDefault(), _ !== g.name && a.Z.setName(l, _), null != y && a.Z.setIcon(l, y), c();
              },
              children: (0, o.jsxs)(i.Y0X, {
                  transitionState: p,
                  'aria-labelledby': j,
                  children: [
                      (0, o.jsxs)(i.xBx, {
                          separator: !0,
                          className: m.header,
                          children: [
                              (0, o.jsx)(i.X6q, {
                                  id: j,
                                  variant: 'heading-lg/semibold',
                                  color: 'header-primary',
                                  children: h.NW.string(h.t['5Q9+/P'])
                              }),
                              (0, o.jsx)(i.olH, {
                                  onClick: c,
                                  className: m.closeButtonWrapper
                              })
                          ]
                      }),
                      (0, o.jsxs)(i.hzk, {
                          className: m.modalContent,
                          children: [
                              (0, o.jsx)(x, {
                                  channel: g,
                                  previewIcon: y,
                                  onIconChange: k
                              }),
                              (0, o.jsx)(i.oil, {
                                  placeholder: null != f ? f : '',
                                  value: _,
                                  onChange: v,
                                  autoFocus: !0
                              })
                          ]
                      }),
                      (0, o.jsxs)(i.mzw, {
                          children: [
                              (0, o.jsx)(i.zxk, {
                                  type: 'submit',
                                  children: h.NW.string(h.t.R3BPHx)
                              }),
                              (0, o.jsx)(i.zxk, {
                                  onClick: c,
                                  look: i.zxk.Looks.LINK,
                                  color: i.zxk.Colors.PRIMARY,
                                  children: h.NW.string(h.t['ETE/oK'])
                              })
                          ]
                      })
                  ]
              })
          });
};
