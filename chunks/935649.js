"use strict";
n.d(t, { A: () => _ });
var r = n(627968);
n(64700);
var i = n(892491),
    s = n(192308),
    a = n(80556),
    o = n(207560),
    l = n(666176),
    u = n(36149),
    c = n(40449);
function d(e) {
    if (null != e) return (0, u.Sr)(e) ? i.F.LIGHTBOX : void 0;
}
let _ = {
    showAgeVerification: (e) => {
        let { onClose: t, entryPoint: i, shouldShowExpressiveModal: o = !1, webviewUrl: u, ..._ } = e;
        if (null == u) return;
        let f = { modalKey: c.SW, onCloseCallback: t, backdropStyle: d(i), Layer: a.Ay };
        o || (0, l.v)(i)
            ? (0, s.openModalLazy)(async () => {
                  let { default: e } = await n.e("24947").then(n.bind(n, 662558));
                  return (t) => (0, r.jsx)(e, { webviewUrl: u, ..._, ...t });
              }, f)
            : (0, s.openModalLazy)(async () => {
                  let { default: e } = await n.e("23425").then(n.bind(n, 745336));
                  return (t) => (0, r.jsx)(e, { webviewUrl: u, ..._, ...t });
              }, f);
    },
    showAgeVerificationGetStartedModal: (e) => {
        let { onClose: t, entryPoint: i } = e;
        (0, u.Q9)() && (0, o.u0)()
            ? (0, s.openModalLazy)(
                  async () => {
                      let { default: e } = await n.e("40848").then(n.bind(n, 297102));
                      return (t) => (0, r.jsx)(e, { ...t, entryPoint: i });
                  },
                  { modalKey: c.NC, backdropStyle: d(i), Layer: a.Ay, onCloseCallback: t },
              )
            : (0, l.v)(i)
              ? (0, s.openModalLazy)(
                    async () => {
                        let { default: e } = await n.e("18128").then(n.bind(n, 767379));
                        return (t) => (0, r.jsx)(e, { ...t, entryPoint: i });
                    },
                    { modalKey: c.NC, backdropStyle: d(i), Layer: a.Ay, onCloseCallback: t },
                )
              : (0, s.openModalLazy)(
                    async () => {
                        let { default: e } = await n.e("42978").then(n.bind(n, 654041));
                        return (t) => (0, r.jsx)(e, { ...t, entryPoint: i });
                    },
                    { modalKey: c.NC, backdropStyle: d(i), Layer: a.Ay, onCloseCallback: t },
                );
    },
    openUrl: (e) => {
        window.open(e, "_blank");
    },
};
