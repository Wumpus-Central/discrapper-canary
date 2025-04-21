l.d(n, { A: () => j });
var t = l(200651);
l(192379);
var r = l(442837),
    i = l(481060),
    s = l(812206),
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
    let { appId: n, skuId: l, transitionState: j, onClose: f, onHeaderTitleClick: b, children: N, footer: S } = e,
        g = (0, r.e7)(
            [s.Z, a.Z],
            () => {
                var e;
                return null != (e = s.Z.getApplication(n)) ? e : a.Z.getApplicationRecord(n);
            },
            [n]
        ),
        { data: k } = (0, o.Z)(l);
    if (null == g) return null;
    let O = (0, d.y)(g, 25),
        { termsOfServiceUrl: I, privacyPolicyUrl: y } = g;
    return (null == k ? void 0 : k.applicationId) !== n
        ? (0, t.jsxs)(i.Y0X, {
              transitionState: j,
              size: i.CgR.SMALL,
              children: [
                  (0, t.jsxs)(i.hzk, {
                      className: v.content,
                      children: [
                          (0, t.jsx)(i.olH, {
                              onClick: f,
                              className: p.modalCloseBtn
                          }),
                          (0, t.jsx)(i.Text, {
                              variant: 'text-lg/semibold',
                              color: 'header-primary',
                              className: v.unavailableTitle,
                              children: h.intl.string(h.t['0Bf80N'])
                          }),
                          (0, t.jsx)(i.Text, {
                              variant: 'text-md/normal',
                              color: 'header-secondary',
                              className: v.unavailableBody,
                              children: h.intl.string(h.t.omH3bm)
                          })
                      ]
                  }),
                  (0, t.jsx)(i.mzw, {
                      children: (0, t.jsx)(i.zxk, {
                          className: v.button,
                          color: i.zxk.Colors.BRAND,
                          onClick: f,
                          size: i.zxk.Sizes.LARGE,
                          children: h.intl.string(h.t.BddRzc)
                      })
                  })
              ]
          })
        : (0, t.jsxs)(i.Y0X, {
              transitionState: j,
              size: i.CgR.DYNAMIC,
              className: v.modal,
              children: [
                  (0, t.jsxs)(i.xBx, {
                      className: p.modalHeader,
                      children: [
                          (0, t.jsxs)(i.P3F, {
                              className: p.modalTitle,
                              onClick: b,
                              children: [
                                  null != O &&
                                      (0, t.jsx)('img', {
                                          src: O.href,
                                          alt: '',
                                          className: v.appIcon
                                      }),
                                  (0, t.jsx)(i.X6q, {
                                      variant: 'heading-md/semibold',
                                      children: g.name
                                  })
                              ]
                          }),
                          (0, t.jsx)(i.olH, {
                              onClick: f,
                              className: p.modalCloseBtn
                          })
                      ]
                  }),
                  N,
                  (0, t.jsxs)(i.mzw, {
                      className: v.footer,
                      children: [
                          null != I || null != y
                              ? (0, t.jsx)(i.Text, {
                                    color: 'header-primary',
                                    variant: 'text-sm/normal',
                                    children: (0, t.jsx)(m.Z, {
                                        termsOfServiceUrl: I,
                                        privacyPolicyUrl: y
                                    })
                                })
                              : (0, t.jsx)(i.Text, {
                                    color: 'header-primary',
                                    variant: 'text-xs/normal',
                                    children: h.intl.string(h.t['3ZY+0N'])
                                }),
                          (0, t.jsxs)('div', {
                              className: v.footerButtons,
                              children: [
                                  c.wS &&
                                      (0, t.jsx)(i.zxk, {
                                          look: i.zxk.Looks.FILLED,
                                          size: i.zxk.Sizes.ICON,
                                          color: i.zxk.Colors.PRIMARY,
                                          'aria-label': h.intl.string(h.t.WqhZsr),
                                          className: v.linkButton,
                                          innerClassName: v.innerLinkButton,
                                          onClick: () => {
                                              let e = ''.concat(location.protocol, '//').concat(location.host).concat(x.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(n, l));
                                              (0, c.JG)(e, () => (0, i.showToast)((0, i.createToast)(h.intl.string(h.t['L/PwZW']), i.ToastType.SUCCESS))), (0, u.X)(n, u.B.DETAILS_MODAL, l);
                                          },
                                          children: (0, t.jsx)(i.xPt, {
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
