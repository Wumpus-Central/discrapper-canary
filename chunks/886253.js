l.d(n, { A: () => j });
var t = l(200651);
l(192379);
var r = l(442837),
    s = l(481060),
    i = l(812206),
    a = l(370210),
    o = l(757746),
    c = l(572004),
    d = l(601911),
    u = l(504211),
    m = l(533159),
    x = l(981631),
    h = l(388032),
    p = l(969878),
    v = l(409369);
function j(e) {
    let { appId: n, skuId: l, transitionState: j, onClose: N, onHeaderTitleClick: f, children: b, footer: S } = e,
        g = (0, r.e7)(
            [i.Z, a.Z],
            () => {
                var e;
                return null != (e = i.Z.getApplication(n)) ? e : a.Z.getApplicationRecord(n);
            },
            [n]
        ),
        { data: k } = (0, o.Z)(l);
    if (null == g) return null;
    let O = (0, d.y)(g, 25),
        { termsOfServiceUrl: I, privacyPolicyUrl: y } = g;
    return (null == k ? void 0 : k.applicationId) !== n
        ? (0, t.jsxs)(s.Y0X, {
              transitionState: j,
              size: s.CgR.SMALL,
              children: [
                  (0, t.jsxs)(s.hzk, {
                      className: v.content,
                      children: [
                          (0, t.jsx)(s.olH, {
                              onClick: N,
                              className: p.modalCloseBtn
                          }),
                          (0, t.jsx)(s.Text, {
                              variant: 'text-lg/semibold',
                              color: 'header-primary',
                              className: v.unavailableTitle,
                              children: h.NW.string(h.t['0Bf80N'])
                          }),
                          (0, t.jsx)(s.Text, {
                              variant: 'text-md/normal',
                              color: 'header-secondary',
                              className: v.unavailableBody,
                              children: h.NW.string(h.t.omH3bm)
                          })
                      ]
                  }),
                  (0, t.jsx)(s.mzw, {
                      children: (0, t.jsx)(s.zxk, {
                          className: v.button,
                          color: s.zxk.Colors.BRAND,
                          onClick: N,
                          size: s.zxk.Sizes.LARGE,
                          children: h.NW.string(h.t.BddRzc)
                      })
                  })
              ]
          })
        : (0, t.jsxs)(s.Y0X, {
              transitionState: j,
              size: s.CgR.DYNAMIC,
              className: v.modal,
              children: [
                  (0, t.jsxs)(s.xBx, {
                      className: p.modalHeader,
                      children: [
                          (0, t.jsxs)(s.P3F, {
                              className: p.modalTitle,
                              onClick: f,
                              children: [
                                  null != O &&
                                      (0, t.jsx)('img', {
                                          src: O.href,
                                          alt: '',
                                          className: v.appIcon
                                      }),
                                  (0, t.jsx)(s.X6q, {
                                      variant: 'heading-md/semibold',
                                      children: g.name
                                  })
                              ]
                          }),
                          (0, t.jsx)(s.olH, {
                              onClick: N,
                              className: p.modalCloseBtn
                          })
                      ]
                  }),
                  b,
                  (0, t.jsxs)(s.mzw, {
                      className: v.footer,
                      children: [
                          null != I || null != y
                              ? (0, t.jsx)(s.Text, {
                                    color: 'header-primary',
                                    variant: 'text-sm/normal',
                                    children: (0, t.jsx)(m.Z, {
                                        termsOfServiceUrl: I,
                                        privacyPolicyUrl: y
                                    })
                                })
                              : (0, t.jsx)(s.Text, {
                                    color: 'header-primary',
                                    variant: 'text-xs/normal',
                                    children: h.NW.string(h.t['3ZY+0N'])
                                }),
                          (0, t.jsxs)('div', {
                              className: v.footerButtons,
                              children: [
                                  c.wS &&
                                      (0, t.jsx)(s.zxk, {
                                          look: s.zxk.Looks.FILLED,
                                          size: s.zxk.Sizes.ICON,
                                          color: s.zxk.Colors.PRIMARY,
                                          'aria-label': h.NW.string(h.t.WqhZsr),
                                          className: v.linkButton,
                                          innerClassName: v.innerLinkButton,
                                          onClick: () => {
                                              let e = ''.concat(location.protocol, '//').concat(location.host).concat(x.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(n, l));
                                              (0, c.JG)(e), (0, s.showToast)((0, s.createToast)(h.NW.string(h.t['L/PwZW']), s.ToastType.SUCCESS)), (0, u.X)(n, u.B.DETAILS_MODAL, l);
                                          },
                                          children: (0, t.jsx)(s.xPt, {
                                              size: 'xs',
                                              color: 'currentColor'
                                          })
                                      }),
                                  S
                              ]
                          })
                      ]
                  })
              ]
          });
}
