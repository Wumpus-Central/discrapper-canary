"use strict";
n.d(t, { A: () => _ });
var r = n(627968);
n(64700);
var i = n(397927),
    s = n(80556),
    a = n(207560),
    o = n(64313),
    l = n(666176),
    u = n(36149),
    c = n(40449);
function d(e) {
    if (null != e) return (0, u.Sr)(e) ? i.F2Z.LIGHTBOX : void 0;
}
let _ = {
    showAgeVerification: (e) => {
        let { onClose: t, entryPoint: a, shouldShowExpressiveModal: o = !1, webviewUrl: u, ..._ } = e;
        if (null == u) return;
        let f = { modalKey: c.SW, onCloseCallback: t, backdropStyle: d(a), Layer: s.Ay };
        o || (0, l.v)(a)
            ? (0, i.mMO)(async () => {
                  let { default: e } = await n.e("24947").then(n.bind(n, 662558));
                  return (t) => (0, r.jsx)(e, { webviewUrl: u, ..._, ...t });
              }, f)
            : (0, i.mMO)(async () => {
                  let { default: e } = await n.e("23425").then(n.bind(n, 745336));
                  return (t) => (0, r.jsx)(e, { webviewUrl: u, ..._, ...t });
              }, f);
    },
    showAgeVerificationGetStartedModal: (e) => {
        let { onClose: t, entryPoint: _ } = e;
        (0, u.Q9)() && ((0, a.u0)() || (0, o.o)("age_verification_utils"))
            ? (0, i.mMO)(
                  async () => {
                      let { default: e } = await n.e("18467").then(n.bind(n, 297102));
                      return (t) => (0, r.jsx)(e, { ...t, entryPoint: _ });
                  },
                  { modalKey: c.NC, backdropStyle: d(_), Layer: s.Ay, onCloseCallback: t },
              )
            : (0, l.v)(_)
              ? (0, i.mMO)(
                    async () => {
                        let { default: e } = await n.e("18128").then(n.bind(n, 767379));
                        return (t) => (0, r.jsx)(e, { ...t, entryPoint: _ });
                    },
                    { modalKey: c.NC, backdropStyle: d(_), Layer: s.Ay, onCloseCallback: t },
                )
              : (0, i.mMO)(
                    async () => {
                        let { default: e } = await n.e("42978").then(n.bind(n, 654041));
                        return (t) => (0, r.jsx)(e, { ...t, entryPoint: _ });
                    },
                    { modalKey: c.NC, backdropStyle: d(_), Layer: s.Ay, onCloseCallback: t },
                );
    },
    openUrl: (e) => {
        window.open(e, "_blank");
    },
};
