l.d(n, { A: () => f });
var t = l(255367);
l(73800);
var r = l(442837),
    i = l(755721),
    s = l(481060),
    a = l(812206),
    o = l(370210),
    c = l(757746),
    d = l(572004),
    u = l(601911),
    m = l(504211),
    x = l(533159),
    h = l(981631),
    p = l(388032),
    v = l(969878),
    j = l(409369);
function f(e) {
    let { appId: n, skuId: l, transitionState: f, onClose: b, onHeaderTitleClick: N, children: S, footer: g } = e,
        O = (0, r.e7)(
            [a.Z, o.Z],
            () => {
                var e;
                return null != (e = a.Z.getApplication(n)) ? e : o.Z.getApplicationRecord(n);
            },
            [n]
        ),
        { data: I } = (0, c.Z)(l);
    if (null == O) return null;
    let C = (0, u.y)(O, 25),
        { termsOfServiceUrl: y, privacyPolicyUrl: T } = O;
    return (null == I ? void 0 : I.applicationId) !== n
        ? (0, t.jsxs)(s.Y0X, {
              transitionState: f,
              size: s.CgR.SMALL,
              parentComponent: 'CardDetailsModal',
              children: [
                  (0, t.jsxs)(s.hzk, {
                      className: j.content,
                      children: [
                          (0, t.jsx)(s.olH, {
                              onClick: b,
                              className: v.modalCloseBtn
                          }),
                          (0, t.jsx)(s.Text, {
                              variant: 'text-lg/semibold',
                              color: 'header-primary',
                              className: j.unavailableTitle,
                              children: p.intl.string(p.t['0Bf80N'])
                          }),
                          (0, t.jsx)(s.Text, {
                              variant: 'text-md/normal',
                              color: 'header-secondary',
                              className: j.unavailableBody,
                              children: p.intl.string(p.t.omH3bm)
                          })
                      ]
                  }),
                  (0, t.jsx)(s.mzw, {
                      children: (0, t.jsx)(i.zx, {
                          className: j.button,
                          color: i.zx.Colors.BRAND,
                          onClick: b,
                          size: i.zx.Sizes.LARGE,
                          children: p.intl.string(p.t.BddRzc)
                      })
                  })
              ]
          })
        : (0, t.jsxs)(s.Y0X, {
              transitionState: f,
              size: s.CgR.DYNAMIC,
              className: j.modal,
              parentComponent: 'CardDetailsModal',
              children: [
                  (0, t.jsxs)(s.xBx, {
                      className: v.modalHeader,
                      children: [
                          (0, t.jsxs)(s.P3F, {
                              className: v.modalTitle,
                              onClick: N,
                              children: [
                                  null != C &&
                                      (0, t.jsx)('img', {
                                          src: C.href,
                                          alt: '',
                                          className: j.appIcon
                                      }),
                                  (0, t.jsx)(s.X6q, {
                                      variant: 'heading-md/semibold',
                                      children: O.name
                                  })
                              ]
                          }),
                          (0, t.jsx)(s.olH, {
                              onClick: b,
                              className: v.modalCloseBtn
                          })
                      ]
                  }),
                  S,
                  (0, t.jsxs)(s.mzw, {
                      className: j.footer,
                      children: [
                          null != y || null != T
                              ? (0, t.jsx)(s.Text, {
                                    color: 'header-primary',
                                    variant: 'text-sm/normal',
                                    children: (0, t.jsx)(x.Z, {
                                        termsOfServiceUrl: y,
                                        privacyPolicyUrl: T
                                    })
                                })
                              : (0, t.jsx)(s.Text, {
                                    color: 'header-primary',
                                    variant: 'text-xs/normal',
                                    children: p.intl.string(p.t['3ZY+0N'])
                                }),
                          (0, t.jsxs)('div', {
                              className: j.footerButtons,
                              children: [
                                  d.wS &&
                                      (0, t.jsx)(i.zx, {
                                          look: i.zx.Looks.FILLED,
                                          size: i.zx.Sizes.ICON,
                                          color: i.zx.Colors.PRIMARY,
                                          'aria-label': p.intl.string(p.t.WqhZsr),
                                          className: j.linkButton,
                                          innerClassName: j.innerLinkButton,
                                          onClick: () => {
                                              let e = ''.concat(location.protocol, '//').concat(location.host).concat(h.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(n, l));
                                              ((0, d.JG)(e, () => (0, s.showToast)((0, s.createToast)(p.intl.string(p.t['L/PwZW']), s.ToastType.SUCCESS))), (0, m.X)(n, m.B.DETAILS_MODAL, l));
                                          },
                                          children: (0, t.jsx)(s.xPt, {
                                              size: 'xs',
                                              color: 'currentColor'
                                          })
                                      }),
                                  g
                              ]
                          })
                      ]
                  })
              ]
          });
}
