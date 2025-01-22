l.d(e, {
    A: function () {
        return f;
    }
});
var t = l(200651);
l(192379);
var i = l(442837),
    r = l(481060),
    o = l(264043),
    s = l(812206),
    a = l(757746),
    c = l(572004),
    d = l(601911),
    u = l(504211),
    m = l(533159),
    x = l(981631),
    h = l(388032),
    v = l(671702),
    j = l(689762);
function f(n) {
    let { appId: e, skuId: l, transitionState: f, onClose: p, onHeaderTitleClick: S, children: N, footer: _ } = n,
        C = (0, i.e7)(
            [s.Z, o.Z],
            () => {
                var n;
                return null !== (n = s.Z.getApplication(e)) && void 0 !== n ? n : o.Z.getApplicationRecord(e);
            },
            [e]
        ),
        { data: T } = (0, a.Z)(l);
    if (null == C) return null;
    let I = (0, d.y)(C, 25),
        { termsOfServiceUrl: R, privacyPolicyUrl: g } = C;
    return (null == T ? void 0 : T.applicationId) !== e
        ? (0, t.jsxs)(r.ModalRoot, {
              transitionState: f,
              size: r.ModalSize.SMALL,
              children: [
                  (0, t.jsxs)(r.ModalContent, {
                      className: j.content,
                      children: [
                          (0, t.jsx)(r.ModalCloseButton, {
                              onClick: p,
                              className: v.modalCloseBtn
                          }),
                          (0, t.jsx)(r.Text, {
                              variant: 'text-lg/semibold',
                              color: 'header-primary',
                              className: j.unavailableTitle,
                              children: h.intl.string(h.t['0Bf80N'])
                          }),
                          (0, t.jsx)(r.Text, {
                              variant: 'text-md/normal',
                              color: 'header-secondary',
                              className: j.unavailableBody,
                              children: h.intl.string(h.t.omH3bm)
                          })
                      ]
                  }),
                  (0, t.jsx)(r.ModalFooter, {
                      children: (0, t.jsx)(r.Button, {
                          className: j.button,
                          color: r.Button.Colors.BRAND,
                          onClick: p,
                          size: r.Button.Sizes.LARGE,
                          children: h.intl.string(h.t.BddRzc)
                      })
                  })
              ]
          })
        : (0, t.jsxs)(r.ModalRoot, {
              transitionState: f,
              size: r.ModalSize.DYNAMIC,
              className: j.modal,
              children: [
                  (0, t.jsxs)(r.ModalHeader, {
                      className: v.modalHeader,
                      children: [
                          (0, t.jsxs)(r.Clickable, {
                              className: v.modalTitle,
                              onClick: S,
                              children: [
                                  null != I &&
                                      (0, t.jsx)('img', {
                                          src: I.href,
                                          alt: '',
                                          className: j.appIcon
                                      }),
                                  (0, t.jsx)(r.Heading, {
                                      variant: 'heading-md/semibold',
                                      children: C.name
                                  })
                              ]
                          }),
                          (0, t.jsx)(r.ModalCloseButton, {
                              onClick: p,
                              className: v.modalCloseBtn
                          })
                      ]
                  }),
                  N,
                  (0, t.jsxs)(r.ModalFooter, {
                      className: j.footer,
                      children: [
                          null != R || null != g
                              ? (0, t.jsx)(r.Text, {
                                    color: 'header-primary',
                                    variant: 'text-sm/normal',
                                    children: (0, t.jsx)(m.Z, {
                                        termsOfServiceUrl: R,
                                        privacyPolicyUrl: g
                                    })
                                })
                              : (0, t.jsx)(r.Text, {
                                    color: 'header-primary',
                                    variant: 'text-xs/normal',
                                    children: h.intl.string(h.t['3ZY+0N'])
                                }),
                          (0, t.jsxs)('div', {
                              className: j.footerButtons,
                              children: [
                                  c.wS &&
                                      (0, t.jsx)(r.Button, {
                                          look: r.Button.Looks.FILLED,
                                          size: r.Button.Sizes.ICON,
                                          color: r.Button.Colors.PRIMARY,
                                          'aria-label': h.intl.string(h.t.WqhZsr),
                                          className: j.linkButton,
                                          innerClassName: j.innerLinkButton,
                                          onClick: () => {
                                              let n = ''.concat(location.protocol, '//').concat(location.host).concat(x.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(e, l));
                                              (0, c.JG)(n), (0, r.showToast)((0, r.createToast)(h.intl.string(h.t['L/PwZW']), r.ToastType.SUCCESS)), (0, u.X)(e, u.B.DETAILS_MODAL, l);
                                          },
                                          children: (0, t.jsx)(r.LinkIcon, {
                                              size: 'xs',
                                              color: 'currentColor'
                                          })
                                      }),
                                  _
                              ]
                          })
                      ]
                  })
              ]
          });
}
