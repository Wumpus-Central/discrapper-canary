"use strict";
n.d(t, { A: () => m });
var r = n(627968);
n(64700);
var i = n(551907),
    a = n(397927),
    s = n(80556),
    o = n(207560),
    l = n(662502),
    u = n(64313),
    c = n(666176),
    d = n(81091),
    _ = n(36149),
    f = n(40449),
    p = n(835002);
function h(e) {
    if (null != e) return (0, _.Sr)(e) ? a.F2Z.LIGHTBOX : void 0;
}
let m = {
    showAgeVerification: (e) => {
        let {
            onClose: t,
            entryPoint: o,
            shouldShowExpressiveModal: u = !1,
            verificationVendorName: _,
            verificationRequestId: m,
            webviewUrl: g,
            ...E
        } = e;
        if (_ === f.XM.PERSONA) {
            if (!(0, d.g)("AgeVerificationActionCreators") || null == m) return;
            new i.Client({
                inquiryId: m,
                onComplete: () => {
                    E.onComplete(), null != t && t();
                },
                onError: (e) => {
                    l.A.showFailedToast(p.OB.TIGGER_PAWTECT_ERROR), null != t && t();
                },
                onCancel: () => {
                    null != t && t();
                },
            }).open();
            return;
        }
        if (null == g) return;
        let A = { modalKey: f.SW, onCloseCallback: t, backdropStyle: h(o), Layer: s.Ay };
        u || (0, c.v)(o)
            ? (0, a.mMO)(async () => {
                  let { default: e } = await n.e("24947").then(n.bind(n, 662558));
                  return (t) => (0, r.jsx)(e, { webviewUrl: g, ...E, ...t });
              }, A)
            : (0, a.mMO)(async () => {
                  let { default: e } = await n.e("23425").then(n.bind(n, 745336));
                  return (t) => (0, r.jsx)(e, { webviewUrl: g, ...E, ...t });
              }, A);
    },
    showAgeVerificationGetStartedModal: (e) => {
        let { onClose: t, entryPoint: i } = e;
        (0, _.Q9)() && ((0, o.u0)() || (0, u.o)("age_verification_utils"))
            ? (0, a.mMO)(
                  async () => {
                      let { default: e } = await n.e("18467").then(n.bind(n, 297102));
                      return (t) => (0, r.jsx)(e, { ...t, entryPoint: i });
                  },
                  { modalKey: f.NC, backdropStyle: h(i), Layer: s.Ay, onCloseCallback: t },
              )
            : (0, c.v)(i)
              ? (0, a.mMO)(
                    async () => {
                        let { default: e } = await n.e("18128").then(n.bind(n, 767379));
                        return (t) => (0, r.jsx)(e, { ...t, entryPoint: i });
                    },
                    { modalKey: f.NC, backdropStyle: h(i), Layer: s.Ay, onCloseCallback: t },
                )
              : (0, a.mMO)(
                    async () => {
                        let { default: e } = await n.e("42978").then(n.bind(n, 654041));
                        return (t) => (0, r.jsx)(e, { ...t, entryPoint: i });
                    },
                    { modalKey: f.NC, backdropStyle: h(i), Layer: s.Ay, onCloseCallback: t },
                );
    },
    openUrl: (e) => {
        window.open(e, "_blank");
    },
};
