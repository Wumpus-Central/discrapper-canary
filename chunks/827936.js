t.d(n, { A: () => m });
var i = t(627968);
t(64700);
var l = t(158954),
    r = t(311907),
    a = t(827734),
    s = t(397927),
    d = t(308528),
    o = t(297413),
    c = t(966327),
    u = t(287809),
    h = t(985018),
    A = t(792595);
function g(e) {
    let { color: n, className: t } = e;
    return (0, i.jsx)("svg", {
        className: t,
        height: "16",
        width: "80",
        viewBox: "0 0 80 16",
        xmlns: "http://www.w3.org/2000/svg",
        children: (0, i.jsxs)("g", {
            fill: "none",
            fillRule: "evenodd",
            opacity: ".6",
            children: [
                (0, i.jsx)("path", { d: "m0 0h80v16h-80z" }),
                (0, i.jsxs)("g", {
                    stroke: n,
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: "2",
                    children: [
                        (0, i.jsx)("path", { d: "m71 1h4v4.16" }),
                        (0, i.jsx)("path", { d: "m2 1h4v4.16", transform: "matrix(-1 0 0 1 8 0)" }),
                        (0, i.jsx)("path", { d: "m51 1h4m6 0h4m-24 0h4m-14 0h4m-14 0h4m-23 11v-2m9-9h4" }),
                        (0, i.jsx)("path", { d: "m72.13 10.474 2.869 3.12 2.631-3.12" }),
                    ],
                }),
            ],
        }),
    });
}
function m(e, n) {
    let t = (0, r.bG)([u.default], () => u.default.getCurrentUser());
    return null == t || n.ownerId !== t.id || e.id === t.id
        ? null
        : (0, i.jsx)(s.Drp, {
              id: "make-dm-owner",
              color: "danger",
              label: h.intl.string(h.t["6t3CyN"]),
              action: () => {
                  (0, s.qfG)((r) =>
                      (0, i.jsx)(l.ConfirmModal, {
                          title: h.intl.string(h.t.WZoUsm),
                          confirmText: h.intl.string(h.t["cY+Oob"]),
                          cancelText: h.intl.string(h.t["ETE/oC"]),
                          onConfirm: () => d.A.setDMOwner(n.id, e.id),
                          ...r,
                          children: (0, i.jsxs)("div", {
                              className: A.Uh,
                              children: [
                                  (0, i.jsx)(g, { color: a.A.unsafe_rawColors.PRIMARY_300.css }),
                                  (0, i.jsxs)("div", {
                                      className: A.nS,
                                      children: [
                                          (0, i.jsx)("div", {
                                              className: A.HT,
                                              children: (0, i.jsx)(c.A, { user: t, size: s._3J.SIZE_80 }),
                                          }),
                                          (0, i.jsx)("div", {
                                              className: A.to,
                                              children: (0, i.jsx)(c.A, { user: e, size: s._3J.SIZE_80 }),
                                          }),
                                      ],
                                  }),
                                  (0, i.jsx)(s.Text, {
                                      variant: "text-md/normal",
                                      children: h.intl.format(h.t.gsBb3F, {
                                          usernameHook: (n, t) =>
                                              (0, i.jsx)(
                                                  o.A,
                                                  {
                                                      usernameIcon: (0, i.jsx)(s.euF, {
                                                          className: A.jj,
                                                          src: e.getAvatarURL(void 0, 16),
                                                          size: s._3J.SIZE_16,
                                                          "aria-hidden": !0,
                                                      }),
                                                      className: A.xK,
                                                      usernameClass: A.Xh,
                                                      discriminatorClass: A.D2,
                                                      user: e,
                                                  },
                                                  t,
                                              ),
                                      }),
                                  }),
                              ],
                          }),
                      }),
                  );
              },
          });
}
