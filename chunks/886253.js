t.d(n, { A: () => v });
var l = t(200651);
t(192379);
var r = t(442837),
    a = t(481060),
    o = t(812206),
    i = t(370210),
    s = t(757746),
    c = t(572004),
    d = t(601911),
    u = t(504211),
    x = t(533159),
    m = t(981631),
    _ = t(388032),
    h = t(969878),
    p = t(409369);
function v(e) {
    let { appId: n, skuId: t, transitionState: v, onClose: j, onHeaderTitleClick: f, children: g, footer: k } = e,
        b = (0, r.e7)(
            [o.Z, i.Z],
            () => {
                var e;
                return null != (e = o.Z.getApplication(n)) ? e : i.Z.getApplicationRecord(n);
            },
            [n]
        ),
        { data: N } = (0, s.Z)(t);
    if (null == b) return null;
    let S = (0, d.y)(b, 25),
        { termsOfServiceUrl: I, privacyPolicyUrl: O } = b;
    return (null == N ? void 0 : N.applicationId) !== n
        ? (0, l.jsxs)(a.Y0X, {
              transitionState: v,
              size: a.CgR.SMALL,
              children: [
                  (0, l.jsxs)(a.hzk, {
                      className: p.content,
                      children: [
                          (0, l.jsx)(a.olH, {
                              onClick: j,
                              className: h.modalCloseBtn
                          }),
                          (0, l.jsx)(a.Text, {
                              variant: 'text-lg/semibold',
                              color: 'header-primary',
                              className: p.unavailableTitle,
                              children: _.intl.string(_.t['0Bf80N'])
                          }),
                          (0, l.jsx)(a.Text, {
                              variant: 'text-md/normal',
                              color: 'header-secondary',
                              className: p.unavailableBody,
                              children: _.intl.string(_.t.omH3bm)
                          })
                      ]
                  }),
                  (0, l.jsx)(a.mzw, {
                      children: (0, l.jsx)(a.zxk, {
                          className: p.button,
                          color: a.zxk.Colors.BRAND,
                          onClick: j,
                          size: a.zxk.Sizes.LARGE,
                          children: _.intl.string(_.t.BddRzc)
                      })
                  })
              ]
          })
        : (0, l.jsxs)(a.Y0X, {
              transitionState: v,
              size: a.CgR.DYNAMIC,
              className: p.modal,
              children: [
                  (0, l.jsxs)(a.xBx, {
                      className: h.modalHeader,
                      children: [
                          (0, l.jsxs)(a.P3F, {
                              className: h.modalTitle,
                              onClick: f,
                              children: [
                                  null != S &&
                                      (0, l.jsx)('img', {
                                          src: S.href,
                                          alt: '',
                                          className: p.appIcon
                                      }),
                                  (0, l.jsx)(a.X6q, {
                                      variant: 'heading-md/semibold',
                                      children: b.name
                                  })
                              ]
                          }),
                          (0, l.jsx)(a.olH, {
                              onClick: j,
                              className: h.modalCloseBtn
                          })
                      ]
                  }),
                  g,
                  (0, l.jsxs)(a.mzw, {
                      className: p.footer,
                      children: [
                          null != I || null != O
                              ? (0, l.jsx)(a.Text, {
                                    color: 'header-primary',
                                    variant: 'text-sm/normal',
                                    children: (0, l.jsx)(x.Z, {
                                        termsOfServiceUrl: I,
                                        privacyPolicyUrl: O
                                    })
                                })
                              : (0, l.jsx)(a.Text, {
                                    color: 'header-primary',
                                    variant: 'text-xs/normal',
                                    children: _.intl.string(_.t['3ZY+0N'])
                                }),
                          (0, l.jsxs)('div', {
                              className: p.footerButtons,
                              children: [
                                  c.wS &&
                                      (0, l.jsx)(a.zxk, {
                                          look: a.zxk.Looks.FILLED,
                                          size: a.zxk.Sizes.ICON,
                                          color: a.zxk.Colors.PRIMARY,
                                          'aria-label': _.intl.string(_.t.WqhZsr),
                                          className: p.linkButton,
                                          innerClassName: p.innerLinkButton,
                                          onClick: () => {
                                              let e = ''.concat(location.protocol, '//').concat(location.host).concat(m.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(n, t));
                                              (0, c.JG)(e, () => (0, a.showToast)((0, a.createToast)(_.intl.string(_.t['L/PwZW']), a.ToastType.SUCCESS))), (0, u.X)(n, u.B.DETAILS_MODAL, t);
                                          },
                                          children: (0, l.jsx)(a.xPt, {
                                              size: 'xs',
                                              color: 'currentColor'
                                          })
                                      }),
                                  k
                              ]
                          })
                      ]
                  })
              ]
          });
}
