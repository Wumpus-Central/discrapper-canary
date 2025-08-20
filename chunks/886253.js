n.d(t, { A: () => E });
var r = n(951288);
n(647438);
var i = n(442837),
    a = n(755721),
    o = n(481060),
    s = n(812206),
    l = n(370210),
    c = n(757746),
    u = n(572004),
    d = n(601911),
    f = n(504211),
    _ = n(533159),
    p = n(981631),
    h = n(388032),
    m = n(465103),
    g = n(186812);
function E(e) {
    let { appId: t, skuId: n, transitionState: E, onClose: b, onHeaderTitleClick: y, children: O, footer: v } = e,
        I = (0, i.e7)([s.Z, l.Z], () => {
            var e;
            return null != (e = s.Z.getApplication(t)) ? e : l.Z.getApplicationRecord(t);
        }, [t]),
        { data: T } = (0, c.Z)(n);
    if (null == I) return null;
    let S = (0, d.y)(I, 25),
        { termsOfServiceUrl: A, privacyPolicyUrl: C } = I;
    return (null == T ? void 0 : T.applicationId) !== t
        ? (0, r.jsxs)(o.Y0X, {
              transitionState: E,
              size: o.CgR.SMALL,
              parentComponent: "CardDetailsModal",
              children: [
                  (0, r.jsxs)(o.hzk, {
                      className: g.content,
                      children: [
                          (0, r.jsx)(o.olH, {
                              onClick: b,
                              className: m.modalCloseBtn,
                          }),
                          (0, r.jsx)(o.Text, {
                              variant: "text-lg/semibold",
                              color: "header-primary",
                              className: g.unavailableTitle,
                              children: h.intl.string(h.t["0Bf80N"]),
                          }),
                          (0, r.jsx)(o.Text, {
                              variant: "text-md/normal",
                              color: "header-secondary",
                              className: g.unavailableBody,
                              children: h.intl.string(h.t.omH3bm),
                          }),
                      ],
                  }),
                  (0, r.jsx)(o.mzw, {
                      children: (0, r.jsx)(a.zx, {
                          className: g.button,
                          color: a.zx.Colors.BRAND,
                          onClick: b,
                          size: a.zx.Sizes.LARGE,
                          children: h.intl.string(h.t.BddRzc),
                      }),
                  }),
              ],
          })
        : (0, r.jsxs)(o.Y0X, {
              transitionState: E,
              size: o.CgR.DYNAMIC,
              className: g.modal,
              parentComponent: "CardDetailsModal",
              children: [
                  (0, r.jsxs)(o.xBx, {
                      className: m.modalHeader,
                      children: [
                          (0, r.jsxs)(o.P3F, {
                              className: m.modalTitle,
                              onClick: y,
                              children: [
                                  null != S &&
                                      (0, r.jsx)("img", {
                                          src: S.href,
                                          alt: "",
                                          className: g.appIcon,
                                      }),
                                  (0, r.jsx)(o.X6q, {
                                      variant: "heading-md/semibold",
                                      children: I.name,
                                  }),
                              ],
                          }),
                          (0, r.jsx)(o.olH, {
                              onClick: b,
                              className: m.modalCloseBtn,
                          }),
                      ],
                  }),
                  O,
                  (0, r.jsxs)(o.mzw, {
                      className: g.footer,
                      children: [
                          null != A || null != C
                              ? (0, r.jsx)(o.Text, {
                                    color: "header-primary",
                                    variant: "text-sm/normal",
                                    children: (0, r.jsx)(_.Z, {
                                        termsOfServiceUrl: A,
                                        privacyPolicyUrl: C,
                                    }),
                                })
                              : (0, r.jsx)(o.Text, {
                                    color: "header-primary",
                                    variant: "text-xs/normal",
                                    children: h.intl.string(h.t["3ZY+0N"]),
                                }),
                          (0, r.jsxs)("div", {
                              className: g.footerButtons,
                              children: [
                                  u.wS &&
                                      (0, r.jsx)(a.zx, {
                                          look: a.zx.Looks.FILLED,
                                          size: a.zx.Sizes.ICON,
                                          color: a.zx.Colors.PRIMARY,
                                          "aria-label": h.intl.string(h.t.WqhZsr),
                                          className: g.linkButton,
                                          innerClassName: g.innerLinkButton,
                                          onClick: () => {
                                              let e = ""
                                                  .concat(location.protocol, "//")
                                                  .concat(location.host)
                                                  .concat(p.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(t, n));
                                              (0, u.JG)(e, () =>
                                                  (0, o.showToast)(
                                                      (0, o.createToast)(
                                                          h.intl.string(h.t["L/PwZW"]),
                                                          o.ToastType.SUCCESS,
                                                      ),
                                                  ),
                                              ),
                                                  (0, f.X)(t, f.B.DETAILS_MODAL, n);
                                          },
                                          children: (0, r.jsx)(o.xPt, {
                                              size: "xs",
                                              color: "currentColor",
                                          }),
                                      }),
                                  v,
                              ],
                          }),
                      ],
                  }),
              ],
          });
}
