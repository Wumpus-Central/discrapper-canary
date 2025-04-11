t.d(n, { default: () => x }), t(388685);
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
function f(e) {
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
                            size: 'refresh_sm'
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
let x = function (e) {
    var n;
    let { channelId: t, onClose: s, transitionState: x, setHasPendingChanges: v, closeOrShowDiscardChangesAlert: g } = e,
        j = (0, u.Dt)(),
        N = (0, o.e7)([d.Z], () => d.Z.getChannel(t)),
        b = null == N ? void 0 : N.name,
        y = (null != (n = null == N ? void 0 : N.name) ? n : '').length > 0,
        _ = (0, c.ZP)(N),
        C = (0, c.cO)(N),
        [W, k] = r.useState(y && null != _ ? _ : ''),
        [w, P] = r.useState(void 0);
    return (r.useEffect(() => {
        v(W !== b || void 0 !== w);
    }, [W, b, w, v]),
    null == N)
        ? null
        : (0, l.jsx)('form', {
              onSubmit: (e) => {
                  e.preventDefault(), W !== N.name && a.Z.setName(t, W), void 0 !== w && a.Z.setIcon(t, w).catch(h.es), s();
              },
              children: (0, l.jsxs)(i.Y0X, {
                  transitionState: x,
                  'aria-labelledby': j,
                  children: [
                      (0, l.jsxs)(i.xBx, {
                          separator: !0,
                          className: m.header,
                          children: [
                              (0, l.jsx)(i.X6q, {
                                  id: j,
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
                              (0, l.jsx)(f, {
                                  channel: N,
                                  previewIcon: w,
                                  onIconChange: (e) => P(e.imageUri),
                                  onIconRemove: () => P(null)
                              }),
                              (0, l.jsx)(i.oil, {
                                  placeholder: null != C ? C : '',
                                  value: W,
                                  onChange: k,
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
                                  onClick: g,
                                  look: i.zxk.Looks.LINK,
                                  color: i.zxk.Colors.PRIMARY,
                                  innerClassName: m.cancelButton,
                                  children: p.NW.string(p.t['ETE/oK'])
                              })
                          ]
                      })
                  ]
              })
          });
};
