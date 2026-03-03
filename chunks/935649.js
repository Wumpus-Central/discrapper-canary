"use strict";
n.d(t, { A: () => d });
var r = n(627968);
n(64700);
var i = n(397927),
    s = n(80556),
    a = n(207560),
    o = n(666176),
    l = n(36149),
    u = n(40449);
function c(e) {
    if (null != e) return (0, l.Sr)(e) ? i.F2Z.LIGHTBOX : void 0;
}
let d = {
    showAgeVerification: (e) => {
        let { onClose: t, entryPoint: a, shouldShowExpressiveModal: l = !1, webviewUrl: d, ..._ } = e;
        if (null == d) return;
        let f = { modalKey: u.SW, onCloseCallback: t, backdropStyle: c(a), Layer: s.Ay };
        l || (0, o.v)(a)
            ? (0, i.mMO)(async () => {
                  let { default: e } = await n.e("24947").then(n.bind(n, 662558));
                  return (t) => (0, r.jsx)(e, { webviewUrl: d, ..._, ...t });
              }, f)
            : (0, i.mMO)(async () => {
                  let { default: e } = await n.e("23425").then(n.bind(n, 745336));
                  return (t) => (0, r.jsx)(e, { webviewUrl: d, ..._, ...t });
              }, f);
    },
    showAgeVerificationGetStartedModal: (e) => {
        let { onClose: t, entryPoint: d } = e;
        (0, l.Q9)() && (0, a.u0)()
            ? (0, i.mMO)(
                  async () => {
                      let { default: e } = await n.e("18467").then(n.bind(n, 297102));
                      return (t) => (0, r.jsx)(e, { ...t, entryPoint: d });
                  },
                  { modalKey: u.NC, backdropStyle: c(d), Layer: s.Ay, onCloseCallback: t },
              )
            : (0, o.v)(d)
              ? (0, i.mMO)(
                    async () => {
                        let { default: e } = await n.e("18128").then(n.bind(n, 767379));
                        return (t) => (0, r.jsx)(e, { ...t, entryPoint: d });
                    },
                    { modalKey: u.NC, backdropStyle: c(d), Layer: s.Ay, onCloseCallback: t },
                )
              : (0, i.mMO)(
                    async () => {
                        let { default: e } = await n.e("42978").then(n.bind(n, 654041));
                        return (t) => (0, r.jsx)(e, { ...t, entryPoint: d });
                    },
                    { modalKey: u.NC, backdropStyle: c(d), Layer: s.Ay, onCloseCallback: t },
                );
    },
    openUrl: (e) => {
        window.open(e, "_blank");
    },
};
