l.d(e, {
    A: function () {
        return N;
    }
});
var t = l(200651);
l(192379);
var i = l(442837),
    o = l(481060),
    r = l(264043),
    s = l(812206),
    a = l(926061),
    c = l(215256),
    d = l(757746),
    u = l(314897),
    m = l(572004),
    x = l(601911),
    h = l(504211),
    v = l(533159),
    f = l(981631),
    j = l(388032),
    p = l(671702),
    S = l(689762);
function N(n) {
    let { appId: e, skuId: l, transitionState: N, onClose: _, onHeaderTitleClick: I, children: R, footer: T } = n,
        C = (0, i.e7)([u.default], () => u.default.isAuthenticated()),
        E = (0, a.YP)({ location: 'store_modal' }),
        g = (0, c.M)({ location: 'store_modal' }),
        k = C ? E : g,
        M = (0, i.e7)(
            [s.Z, r.Z],
            () => {
                var n;
                return null !== (n = s.Z.getApplication(e)) && void 0 !== n ? n : r.Z.getApplicationRecord(e);
            },
            [e]
        ),
        { data: Z } = (0, d.Z)(l);
    if (null == M) return null;
    let b = (0, x.y)(M, 25),
        { termsOfServiceUrl: B, privacyPolicyUrl: O } = M;
    return (null == Z ? void 0 : Z.applicationId) !== e
        ? (0, t.jsxs)(o.ModalRoot, {
              transitionState: N,
              size: o.ModalSize.SMALL,
              children: [
                  (0, t.jsxs)(o.ModalContent, {
                      className: S.content,
                      children: [
                          (0, t.jsx)(o.ModalCloseButton, {
                              onClick: _,
                              className: p.modalCloseBtn
                          }),
                          (0, t.jsx)(o.Text, {
                              variant: 'text-lg/semibold',
                              color: 'header-primary',
                              className: S.unavailableTitle,
                              children: j.intl.string(j.t['0Bf80N'])
                          }),
                          (0, t.jsx)(o.Text, {
                              variant: 'text-md/normal',
                              color: 'header-secondary',
                              className: S.unavailableBody,
                              children: j.intl.string(j.t.omH3bm)
                          })
                      ]
                  }),
                  (0, t.jsx)(o.ModalFooter, {
                      children: (0, t.jsx)(o.Button, {
                          className: S.button,
                          color: o.Button.Colors.BRAND,
                          onClick: _,
                          size: o.Button.Sizes.LARGE,
                          children: j.intl.string(j.t.BddRzc)
                      })
                  })
              ]
          })
        : (0, t.jsxs)(o.ModalRoot, {
              transitionState: N,
              size: o.ModalSize.DYNAMIC,
              className: S.modal,
              children: [
                  (0, t.jsxs)(o.ModalHeader, {
                      className: p.modalHeader,
                      children: [
                          (0, t.jsxs)(o.Clickable, {
                              className: p.modalTitle,
                              onClick: I,
                              children: [
                                  null != b &&
                                      (0, t.jsx)('img', {
                                          src: b.href,
                                          alt: '',
                                          className: S.appIcon
                                      }),
                                  (0, t.jsx)(o.Heading, {
                                      variant: 'heading-md/semibold',
                                      children: M.name
                                  })
                              ]
                          }),
                          (0, t.jsx)(o.ModalCloseButton, {
                              onClick: _,
                              className: p.modalCloseBtn
                          })
                      ]
                  }),
                  R,
                  (0, t.jsxs)(o.ModalFooter, {
                      className: S.footer,
                      children: [
                          null != B || null != O
                              ? (0, t.jsx)(o.Text, {
                                    color: 'header-primary',
                                    variant: 'text-sm/normal',
                                    children: (0, t.jsx)(v.Z, {
                                        termsOfServiceUrl: B,
                                        privacyPolicyUrl: O
                                    })
                                })
                              : (0, t.jsx)(o.Text, {
                                    color: 'header-primary',
                                    variant: 'text-xs/normal',
                                    children: j.intl.string(j.t['3ZY+0N'])
                                }),
                          (0, t.jsxs)('div', {
                              className: S.footerButtons,
                              children: [
                                  m.wS &&
                                      (0, t.jsx)(o.Button, {
                                          look: o.Button.Looks.FILLED,
                                          size: o.Button.Sizes.ICON,
                                          color: o.Button.Colors.PRIMARY,
                                          'aria-label': j.intl.string(j.t.WqhZsr),
                                          className: S.linkButton,
                                          innerClassName: S.innerLinkButton,
                                          onClick: () => {
                                              let n = ''
                                                  .concat(location.protocol, '//')
                                                  .concat(location.host)
                                                  .concat(k ? f.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(e, l) : f.Z5c.APPLICATION_DIRECTORY_PROFILE_STORE_SKU(e, l));
                                              (0, m.JG)(n), (0, o.showToast)((0, o.createToast)(j.intl.string(j.t['L/PwZW']), o.ToastType.SUCCESS)), (0, h.X)(e, h.B.DETAILS_MODAL, l);
                                          },
                                          children: (0, t.jsx)(o.LinkIcon, {
                                              size: 'xs',
                                              color: 'currentColor'
                                          })
                                      }),
                                  T
                              ]
                          })
                      ]
                  })
              ]
          });
}
