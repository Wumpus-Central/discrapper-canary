t.d(n, { A: () => f });
var l = t(255367);
t(73800);
var r = t(442837),
    a = t(755721),
    o = t(481060),
    i = t(812206),
    s = t(370210),
    c = t(757746),
    d = t(572004),
    u = t(601911),
    x = t(504211),
    m = t(533159),
    _ = t(981631),
    h = t(388032),
    p = t(969878),
    v = t(409369);
function f(e) {
    let { appId: n, skuId: t, transitionState: f, onClose: j, onHeaderTitleClick: g, children: b, footer: N } = e,
        S = (0, r.e7)(
            [i.Z, s.Z],
            () => {
                var e;
                return null != (e = i.Z.getApplication(n)) ? e : s.Z.getApplicationRecord(n);
            },
            [n]
        ),
        { data: I } = (0, c.Z)(t);
    if (null == S) return null;
    let k = (0, u.y)(S, 25),
        { termsOfServiceUrl: O, privacyPolicyUrl: C } = S;
    return (null == I ? void 0 : I.applicationId) !== n
        ? (0, l.jsxs)(o.Y0X, {
              transitionState: f,
              size: o.CgR.SMALL,
              parentComponent: 'CardDetailsModal',
              children: [
                  (0, l.jsxs)(o.hzk, {
                      className: v.content,
                      children: [
                          (0, l.jsx)(o.olH, {
                              onClick: j,
                              className: p.modalCloseBtn
                          }),
                          (0, l.jsx)(o.Text, {
                              variant: 'text-lg/semibold',
                              color: 'header-primary',
                              className: v.unavailableTitle,
                              children: h.intl.string(h.t['0Bf80N'])
                          }),
                          (0, l.jsx)(o.Text, {
                              variant: 'text-md/normal',
                              color: 'header-secondary',
                              className: v.unavailableBody,
                              children: h.intl.string(h.t.omH3bm)
                          })
                      ]
                  }),
                  (0, l.jsx)(o.mzw, {
                      children: (0, l.jsx)(a.zx, {
                          className: v.button,
                          color: a.zx.Colors.BRAND,
                          onClick: j,
                          size: a.zx.Sizes.LARGE,
                          children: h.intl.string(h.t.BddRzc)
                      })
                  })
              ]
          })
        : (0, l.jsxs)(o.Y0X, {
              transitionState: f,
              size: o.CgR.DYNAMIC,
              className: v.modal,
              parentComponent: 'CardDetailsModal',
              children: [
                  (0, l.jsxs)(o.xBx, {
                      className: p.modalHeader,
                      children: [
                          (0, l.jsxs)(o.P3F, {
                              className: p.modalTitle,
                              onClick: g,
                              children: [
                                  null != k &&
                                      (0, l.jsx)('img', {
                                          src: k.href,
                                          alt: '',
                                          className: v.appIcon
                                      }),
                                  (0, l.jsx)(o.X6q, {
                                      variant: 'heading-md/semibold',
                                      children: S.name
                                  })
                              ]
                          }),
                          (0, l.jsx)(o.olH, {
                              onClick: j,
                              className: p.modalCloseBtn
                          })
                      ]
                  }),
                  b,
                  (0, l.jsxs)(o.mzw, {
                      className: v.footer,
                      children: [
                          null != O || null != C
                              ? (0, l.jsx)(o.Text, {
                                    color: 'header-primary',
                                    variant: 'text-sm/normal',
                                    children: (0, l.jsx)(m.Z, {
                                        termsOfServiceUrl: O,
                                        privacyPolicyUrl: C
                                    })
                                })
                              : (0, l.jsx)(o.Text, {
                                    color: 'header-primary',
                                    variant: 'text-xs/normal',
                                    children: h.intl.string(h.t['3ZY+0N'])
                                }),
                          (0, l.jsxs)('div', {
                              className: v.footerButtons,
                              children: [
                                  d.wS &&
                                      (0, l.jsx)(a.zx, {
                                          look: a.zx.Looks.FILLED,
                                          size: a.zx.Sizes.ICON,
                                          color: a.zx.Colors.PRIMARY,
                                          'aria-label': h.intl.string(h.t.WqhZsr),
                                          className: v.linkButton,
                                          innerClassName: v.innerLinkButton,
                                          onClick: () => {
                                              let e = ''.concat(location.protocol, '//').concat(location.host).concat(_.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(n, t));
                                              ((0, d.JG)(e, () => (0, o.showToast)((0, o.createToast)(h.intl.string(h.t['L/PwZW']), o.ToastType.SUCCESS))), (0, x.X)(n, x.B.DETAILS_MODAL, t));
                                          },
                                          children: (0, l.jsx)(o.xPt, {
                                              size: 'xs',
                                              color: 'currentColor'
                                          })
                                      }),
                                  N
                              ]
                          })
                      ]
                  })
              ]
          });
}
