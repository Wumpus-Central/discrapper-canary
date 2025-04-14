t.d(n, { A: () => v });
var r = t(200651);
t(192379);
var l = t(442837),
    a = t(481060),
    o = t(812206),
    s = t(370210),
    i = t(757746),
    c = t(572004),
    d = t(601911),
    u = t(504211),
    x = t(533159),
    m = t(981631),
    _ = t(388032),
    h = t(969878),
    p = t(409369);
function v(e) {
    let { appId: n, skuId: t, transitionState: v, onClose: j, onHeaderTitleClick: f, children: N, footer: g } = e,
        k = (0, l.e7)(
            [o.Z, s.Z],
            () => {
                var e;
                return null != (e = o.Z.getApplication(n)) ? e : s.Z.getApplicationRecord(n);
            },
            [n]
        ),
        { data: b } = (0, i.Z)(t);
    if (null == k) return null;
    let S = (0, d.y)(k, 25),
        { termsOfServiceUrl: I, privacyPolicyUrl: O } = k;
    return (null == b ? void 0 : b.applicationId) !== n
        ? (0, r.jsxs)(a.Y0X, {
              transitionState: v,
              size: a.CgR.SMALL,
              children: [
                  (0, r.jsxs)(a.hzk, {
                      className: p.content,
                      children: [
                          (0, r.jsx)(a.olH, {
                              onClick: j,
                              className: h.modalCloseBtn
                          }),
                          (0, r.jsx)(a.Text, {
                              variant: 'text-lg/semibold',
                              color: 'header-primary',
                              className: p.unavailableTitle,
                              children: _.NW.string(_.t['0Bf80N'])
                          }),
                          (0, r.jsx)(a.Text, {
                              variant: 'text-md/normal',
                              color: 'header-secondary',
                              className: p.unavailableBody,
                              children: _.NW.string(_.t.omH3bm)
                          })
                      ]
                  }),
                  (0, r.jsx)(a.mzw, {
                      children: (0, r.jsx)(a.zxk, {
                          className: p.button,
                          color: a.zxk.Colors.BRAND,
                          onClick: j,
                          size: a.zxk.Sizes.LARGE,
                          children: _.NW.string(_.t.BddRzc)
                      })
                  })
              ]
          })
        : (0, r.jsxs)(a.Y0X, {
              transitionState: v,
              size: a.CgR.DYNAMIC,
              className: p.modal,
              children: [
                  (0, r.jsxs)(a.xBx, {
                      className: h.modalHeader,
                      children: [
                          (0, r.jsxs)(a.P3F, {
                              className: h.modalTitle,
                              onClick: f,
                              children: [
                                  null != S &&
                                      (0, r.jsx)('img', {
                                          src: S.href,
                                          alt: '',
                                          className: p.appIcon
                                      }),
                                  (0, r.jsx)(a.X6q, {
                                      variant: 'heading-md/semibold',
                                      children: k.name
                                  })
                              ]
                          }),
                          (0, r.jsx)(a.olH, {
                              onClick: j,
                              className: h.modalCloseBtn
                          })
                      ]
                  }),
                  N,
                  (0, r.jsxs)(a.mzw, {
                      className: p.footer,
                      children: [
                          null != I || null != O
                              ? (0, r.jsx)(a.Text, {
                                    color: 'header-primary',
                                    variant: 'text-sm/normal',
                                    children: (0, r.jsx)(x.Z, {
                                        termsOfServiceUrl: I,
                                        privacyPolicyUrl: O
                                    })
                                })
                              : (0, r.jsx)(a.Text, {
                                    color: 'header-primary',
                                    variant: 'text-xs/normal',
                                    children: _.NW.string(_.t['3ZY+0N'])
                                }),
                          (0, r.jsxs)('div', {
                              className: p.footerButtons,
                              children: [
                                  c.wS &&
                                      (0, r.jsx)(a.zxk, {
                                          look: a.zxk.Looks.FILLED,
                                          size: a.zxk.Sizes.ICON,
                                          color: a.zxk.Colors.PRIMARY,
                                          'aria-label': _.NW.string(_.t.WqhZsr),
                                          className: p.linkButton,
                                          innerClassName: p.innerLinkButton,
                                          onClick: () => {
                                              let e = ''.concat(location.protocol, '//').concat(location.host).concat(m.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(n, t));
                                              (0, c.JG)(e), (0, a.showToast)((0, a.createToast)(_.NW.string(_.t['L/PwZW']), a.ToastType.SUCCESS)), (0, u.X)(n, u.B.DETAILS_MODAL, t);
                                          },
                                          children: (0, r.jsx)(a.xPt, {
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
