t.d(r, { A: () => O });
var n = t(200651);
t(192379);
var l = t(442837),
    s = t(481060),
    o = t(264043),
    a = t(812206),
    i = t(757746),
    c = t(572004),
    d = t(601911),
    u = t(504211),
    m = t(533159),
    x = t(981631),
    f = t(388032),
    h = t(285582),
    j = t(138498);
function O(e) {
    let { appId: r, skuId: t, transitionState: O, onClose: p, onHeaderTitleClick: b, children: v, footer: y } = e,
        g = (0, l.e7)(
            [a.Z, o.Z],
            () => {
                var e;
                return null !== (e = a.Z.getApplication(r)) && void 0 !== e ? e : o.Z.getApplicationRecord(r);
            },
            [r]
        ),
        { data: N } = (0, i.Z)(t);
    if (null == g) return null;
    let S = (0, d.y)(g, 25),
        { termsOfServiceUrl: E, privacyPolicyUrl: k } = g;
    return (null == N ? void 0 : N.applicationId) !== r
        ? (0, n.jsxs)(s.Y0X, {
              transitionState: O,
              size: s.CgR.SMALL,
              children: [
                  (0, n.jsxs)(s.hzk, {
                      className: j.content,
                      children: [
                          (0, n.jsx)(s.olH, {
                              onClick: p,
                              className: h.modalCloseBtn
                          }),
                          (0, n.jsx)(s.Text, {
                              variant: 'text-lg/semibold',
                              color: 'header-primary',
                              className: j.unavailableTitle,
                              children: f.NW.string(f.t['0Bf80N'])
                          }),
                          (0, n.jsx)(s.Text, {
                              variant: 'text-md/normal',
                              color: 'header-secondary',
                              className: j.unavailableBody,
                              children: f.NW.string(f.t.omH3bm)
                          })
                      ]
                  }),
                  (0, n.jsx)(s.mzw, {
                      children: (0, n.jsx)(s.zxk, {
                          className: j.button,
                          color: s.zxk.Colors.BRAND,
                          onClick: p,
                          size: s.zxk.Sizes.LARGE,
                          children: f.NW.string(f.t.BddRzc)
                      })
                  })
              ]
          })
        : (0, n.jsxs)(s.Y0X, {
              transitionState: O,
              size: s.CgR.DYNAMIC,
              className: j.modal,
              children: [
                  (0, n.jsxs)(s.xBx, {
                      className: h.modalHeader,
                      children: [
                          (0, n.jsxs)(s.P3F, {
                              className: h.modalTitle,
                              onClick: b,
                              children: [
                                  null != S &&
                                      (0, n.jsx)('img', {
                                          src: S.href,
                                          alt: '',
                                          className: j.appIcon
                                      }),
                                  (0, n.jsx)(s.X6q, {
                                      variant: 'heading-md/semibold',
                                      children: g.name
                                  })
                              ]
                          }),
                          (0, n.jsx)(s.olH, {
                              onClick: p,
                              className: h.modalCloseBtn
                          })
                      ]
                  }),
                  v,
                  (0, n.jsxs)(s.mzw, {
                      className: j.footer,
                      children: [
                          null != E || null != k
                              ? (0, n.jsx)(s.Text, {
                                    color: 'header-primary',
                                    variant: 'text-sm/normal',
                                    children: (0, n.jsx)(m.Z, {
                                        termsOfServiceUrl: E,
                                        privacyPolicyUrl: k
                                    })
                                })
                              : (0, n.jsx)(s.Text, {
                                    color: 'header-primary',
                                    variant: 'text-xs/normal',
                                    children: f.NW.string(f.t['3ZY+0N'])
                                }),
                          (0, n.jsxs)('div', {
                              className: j.footerButtons,
                              children: [
                                  c.wS &&
                                      (0, n.jsx)(s.zxk, {
                                          look: s.zxk.Looks.FILLED,
                                          size: s.zxk.Sizes.ICON,
                                          color: s.zxk.Colors.PRIMARY,
                                          'aria-label': f.NW.string(f.t.WqhZsr),
                                          className: j.linkButton,
                                          innerClassName: j.innerLinkButton,
                                          onClick: () => {
                                              let e = ''.concat(location.protocol, '//').concat(location.host).concat(x.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(r, t));
                                              (0, c.JG)(e), (0, s.showToast)((0, s.createToast)(f.NW.string(f.t['L/PwZW']), s.ToastType.SUCCESS)), (0, u.X)(r, u.B.DETAILS_MODAL, t);
                                          },
                                          children: (0, n.jsx)(s.xPt, {
                                              size: 'xs',
                                              color: 'currentColor'
                                          })
                                      }),
                                  y
                              ]
                          })
                      ]
                  })
              ]
          });
}
