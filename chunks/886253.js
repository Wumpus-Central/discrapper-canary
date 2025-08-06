n.d(t, { A: () => E });
var r = n(255367);
n(73800);
var i = n(442837),
    o = n(755721),
    a = n(481060),
    s = n(812206),
    l = n(370210),
    c = n(757746),
    u = n(572004),
    d = n(601911),
    f = n(504211),
    _ = n(533159),
    p = n(981631),
    h = n(388032),
    m = n(969878),
    g = n(409369);
function E(e) {
    let { appId: t, skuId: n, transitionState: E, onClose: b, onHeaderTitleClick: y, children: O, footer: v } = e,
        I = (0, i.e7)(
            [s.Z, l.Z],
            () => {
                var e;
                return null != (e = s.Z.getApplication(t)) ? e : l.Z.getApplicationRecord(t);
            },
            [t]
        ),
        { data: T } = (0, c.Z)(n);
    if (null == I) return null;
    let S = (0, d.y)(I, 25),
        { termsOfServiceUrl: A, privacyPolicyUrl: N } = I;
    return (null == T ? void 0 : T.applicationId) !== t
        ? (0, r.jsxs)(a.Y0X, {
              transitionState: E,
              size: a.CgR.SMALL,
              parentComponent: 'CardDetailsModal',
              children: [
                  (0, r.jsxs)(a.hzk, {
                      className: g.content,
                      children: [
                          (0, r.jsx)(a.olH, {
                              onClick: b,
                              className: m.modalCloseBtn
                          }),
                          (0, r.jsx)(a.Text, {
                              variant: 'text-lg/semibold',
                              color: 'header-primary',
                              className: g.unavailableTitle,
                              children: h.intl.string(h.t['0Bf80N'])
                          }),
                          (0, r.jsx)(a.Text, {
                              variant: 'text-md/normal',
                              color: 'header-secondary',
                              className: g.unavailableBody,
                              children: h.intl.string(h.t.omH3bm)
                          })
                      ]
                  }),
                  (0, r.jsx)(a.mzw, {
                      children: (0, r.jsx)(o.zx, {
                          className: g.button,
                          color: o.zx.Colors.BRAND,
                          onClick: b,
                          size: o.zx.Sizes.LARGE,
                          children: h.intl.string(h.t.BddRzc)
                      })
                  })
              ]
          })
        : (0, r.jsxs)(a.Y0X, {
              transitionState: E,
              size: a.CgR.DYNAMIC,
              className: g.modal,
              parentComponent: 'CardDetailsModal',
              children: [
                  (0, r.jsxs)(a.xBx, {
                      className: m.modalHeader,
                      children: [
                          (0, r.jsxs)(a.P3F, {
                              className: m.modalTitle,
                              onClick: y,
                              children: [
                                  null != S &&
                                      (0, r.jsx)('img', {
                                          src: S.href,
                                          alt: '',
                                          className: g.appIcon
                                      }),
                                  (0, r.jsx)(a.X6q, {
                                      variant: 'heading-md/semibold',
                                      children: I.name
                                  })
                              ]
                          }),
                          (0, r.jsx)(a.olH, {
                              onClick: b,
                              className: m.modalCloseBtn
                          })
                      ]
                  }),
                  O,
                  (0, r.jsxs)(a.mzw, {
                      className: g.footer,
                      children: [
                          null != A || null != N
                              ? (0, r.jsx)(a.Text, {
                                    color: 'header-primary',
                                    variant: 'text-sm/normal',
                                    children: (0, r.jsx)(_.Z, {
                                        termsOfServiceUrl: A,
                                        privacyPolicyUrl: N
                                    })
                                })
                              : (0, r.jsx)(a.Text, {
                                    color: 'header-primary',
                                    variant: 'text-xs/normal',
                                    children: h.intl.string(h.t['3ZY+0N'])
                                }),
                          (0, r.jsxs)('div', {
                              className: g.footerButtons,
                              children: [
                                  u.wS &&
                                      (0, r.jsx)(o.zx, {
                                          look: o.zx.Looks.FILLED,
                                          size: o.zx.Sizes.ICON,
                                          color: o.zx.Colors.PRIMARY,
                                          'aria-label': h.intl.string(h.t.WqhZsr),
                                          className: g.linkButton,
                                          innerClassName: g.innerLinkButton,
                                          onClick: () => {
                                              let e = ''.concat(location.protocol, '//').concat(location.host).concat(p.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(t, n));
                                              ((0, u.JG)(e, () => (0, a.showToast)((0, a.createToast)(h.intl.string(h.t['L/PwZW']), a.ToastType.SUCCESS))), (0, f.X)(t, f.B.DETAILS_MODAL, n));
                                          },
                                          children: (0, r.jsx)(a.xPt, {
                                              size: 'xs',
                                              color: 'currentColor'
                                          })
                                      }),
                                  v
                              ]
                          })
                      ]
                  })
              ]
          });
}
