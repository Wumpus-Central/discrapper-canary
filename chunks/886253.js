n.d(e, { A: () => p });
var i = n(200651);
n(192379);
var s = n(442837),
    t = n(481060),
    r = n(264043),
    a = n(812206),
    o = n(757746),
    c = n(572004),
    d = n(601911),
    u = n(504211),
    x = n(533159),
    m = n(981631),
    h = n(388032),
    v = n(354276),
    j = n(188169);
function p(l) {
    let { appId: e, skuId: n, transitionState: p, onClose: N, onHeaderTitleClick: S, children: f, footer: k } = l,
        _ = (0, s.e7)(
            [a.Z, r.Z],
            () => {
                var l;
                return null !== (l = a.Z.getApplication(e)) && void 0 !== l ? l : r.Z.getApplicationRecord(e);
            },
            [e]
        ),
        { data: T } = (0, o.Z)(n);
    if (null == _) return null;
    let R = (0, d.y)(_, 25),
        { termsOfServiceUrl: g, privacyPolicyUrl: C } = _;
    return (null == T ? void 0 : T.applicationId) !== e
        ? (0, i.jsxs)(t.Y0X, {
              transitionState: p,
              size: t.CgR.SMALL,
              children: [
                  (0, i.jsxs)(t.hzk, {
                      className: j.content,
                      children: [
                          (0, i.jsx)(t.olH, {
                              onClick: N,
                              className: v.modalCloseBtn
                          }),
                          (0, i.jsx)(t.Text, {
                              variant: 'text-lg/semibold',
                              color: 'header-primary',
                              className: j.unavailableTitle,
                              children: h.intl.string(h.t['0Bf80N'])
                          }),
                          (0, i.jsx)(t.Text, {
                              variant: 'text-md/normal',
                              color: 'header-secondary',
                              className: j.unavailableBody,
                              children: h.intl.string(h.t.omH3bm)
                          })
                      ]
                  }),
                  (0, i.jsx)(t.mzw, {
                      children: (0, i.jsx)(t.zxk, {
                          className: j.button,
                          color: t.zxk.Colors.BRAND,
                          onClick: N,
                          size: t.zxk.Sizes.LARGE,
                          children: h.intl.string(h.t.BddRzc)
                      })
                  })
              ]
          })
        : (0, i.jsxs)(t.Y0X, {
              transitionState: p,
              size: t.CgR.DYNAMIC,
              className: j.modal,
              children: [
                  (0, i.jsxs)(t.xBx, {
                      className: v.modalHeader,
                      children: [
                          (0, i.jsxs)(t.P3F, {
                              className: v.modalTitle,
                              onClick: S,
                              children: [
                                  null != R &&
                                      (0, i.jsx)('img', {
                                          src: R.href,
                                          alt: '',
                                          className: j.appIcon
                                      }),
                                  (0, i.jsx)(t.X6q, {
                                      variant: 'heading-md/semibold',
                                      children: _.name
                                  })
                              ]
                          }),
                          (0, i.jsx)(t.olH, {
                              onClick: N,
                              className: v.modalCloseBtn
                          })
                      ]
                  }),
                  f,
                  (0, i.jsxs)(t.mzw, {
                      className: j.footer,
                      children: [
                          null != g || null != C
                              ? (0, i.jsx)(t.Text, {
                                    color: 'header-primary',
                                    variant: 'text-sm/normal',
                                    children: (0, i.jsx)(x.Z, {
                                        termsOfServiceUrl: g,
                                        privacyPolicyUrl: C
                                    })
                                })
                              : (0, i.jsx)(t.Text, {
                                    color: 'header-primary',
                                    variant: 'text-xs/normal',
                                    children: h.intl.string(h.t['3ZY+0N'])
                                }),
                          (0, i.jsxs)('div', {
                              className: j.footerButtons,
                              children: [
                                  c.wS &&
                                      (0, i.jsx)(t.zxk, {
                                          look: t.zxk.Looks.FILLED,
                                          size: t.zxk.Sizes.ICON,
                                          color: t.zxk.Colors.PRIMARY,
                                          'aria-label': h.intl.string(h.t.WqhZsr),
                                          className: j.linkButton,
                                          innerClassName: j.innerLinkButton,
                                          onClick: () => {
                                              let l = ''.concat(location.protocol, '//').concat(location.host).concat(m.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(e, n));
                                              (0, c.JG)(l), (0, t.showToast)((0, t.createToast)(h.intl.string(h.t['L/PwZW']), t.ToastType.SUCCESS)), (0, u.X)(e, u.B.DETAILS_MODAL, n);
                                          },
                                          children: (0, i.jsx)(t.xPt, {
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
