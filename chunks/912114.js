t.d(n, { default: () => f }), t(388685);
var l = t(200651),
    r = t(192379),
    o = t(442837),
    i = t(481060),
    a = t(493683),
    s = t(43267),
    c = t(933557),
    u = t(313201),
    d = t(592125),
    h = t(140106),
    p = t(388032),
    m = t(285580);
function x(e) {
    let { channel: n, previewIcon: t, onIconChange: r, onIconRemove: o } = e,
        a = void 0 !== t ? t : null != n.icon ? (0, s.x)(n, 120) : null;
    return (0, l.jsxs)('div', {
        className: m.iconSection,
        children: [
            (0, l.jsxs)(i.P3F, {
                className: m.iconContainer,
                onClick: () => (0, h.ND)(r),
                children: [
                    null != a
                        ? (0, l.jsx)('img', {
                              src: a,
                              alt: 'Group Icon',
                              className: m.iconImage
                          })
                        : (0, l.jsx)('div', {
                              className: m.iconPlaceholder,
                              children: (0, l.jsx)(i.BFJ, {
                                  size: 'custom',
                                  width: 64,
                                  height: 64,
                                  color: 'currentColor'
                              })
                          }),
                    (0, l.jsx)('div', {
                        className: m.pencilIconWrapper,
                        children: (0, l.jsx)(i.vdY, {
                            color: 'currentColor',
                            size: 'md'
                        })
                    })
                ]
            }),
            null != a
                ? (0, l.jsx)(i.P3F, {
                      onClick: o,
                      'aria-label': p.NW.string(p.t['uY+Nk5']),
                      style: { cursor: 'pointer' },
                      children: (0, l.jsx)(i.Text, {
                          variant: 'text-sm/medium',
                          color: 'text-danger',
                          children: p.NW.string(p.t['uY+Nk5'])
                      })
                  })
                : null
        ]
    });
}
let f = function (e) {
    var n;
    let { channelId: t, onClose: s, transitionState: f } = e,
        v = (0, u.Dt)(),
        g = (0, o.e7)([d.Z], () => d.Z.getChannel(t)),
        j = (null != (n = null == g ? void 0 : g.name) ? n : '').length > 0,
        b = (0, c.ZP)(g),
        N = (0, c.cO)(g),
        [y, _] = r.useState(j && null != b ? b : ''),
        [C, W] = r.useState(void 0);
    return null == g
        ? null
        : (0, l.jsx)('form', {
              onSubmit: (e) => {
                  e.preventDefault(), y !== g.name && a.Z.setName(t, y), void 0 !== C && a.Z.setIcon(t, C).catch(h.es), s();
              },
              children: (0, l.jsxs)(i.Y0X, {
                  transitionState: f,
                  'aria-labelledby': v,
                  children: [
                      (0, l.jsxs)(i.xBx, {
                          separator: !0,
                          className: m.header,
                          children: [
                              (0, l.jsx)(i.X6q, {
                                  id: v,
                                  variant: 'heading-lg/semibold',
                                  color: 'header-primary',
                                  children: p.NW.string(p.t['5Q9+/P'])
                              }),
                              (0, l.jsx)(i.olH, {
                                  onClick: s,
                                  className: m.closeButtonWrapper
                              })
                          ]
                      }),
                      (0, l.jsxs)(i.hzk, {
                          className: m.modalContent,
                          children: [
                              (0, l.jsx)(x, {
                                  channel: g,
                                  previewIcon: C,
                                  onIconChange: (e) => W(e.imageUri),
                                  onIconRemove: () => W(null)
                              }),
                              (0, l.jsx)(i.oil, {
                                  placeholder: null != N ? N : '',
                                  value: y,
                                  onChange: _,
                                  autoFocus: !0
                              })
                          ]
                      }),
                      (0, l.jsxs)(i.mzw, {
                          children: [
                              (0, l.jsx)(i.zxk, {
                                  type: 'submit',
                                  children: p.NW.string(p.t.R3BPHx)
                              }),
                              (0, l.jsx)(i.zxk, {
                                  onClick: s,
                                  look: i.zxk.Looks.LINK,
                                  color: i.zxk.Colors.PRIMARY,
                                  children: p.NW.string(p.t['ETE/oK'])
                              })
                          ]
                      })
                  ]
              })
          });
};
