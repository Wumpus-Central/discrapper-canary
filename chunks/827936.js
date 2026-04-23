i.d(n, { A: () => C });
var t = i(627968);
i(64700);
var l = i(732159),
    r = i(311907),
    s = i(827734),
    d = i(192308),
    a = i(778712),
    o = i(834730),
    c = i(97808),
    u = i(477782),
    A = i(308528),
    h = i(297413),
    m = i(966327),
    x = i(287809),
    j = i(985018),
    g = i(269098);
function v(e) {
    let { color: n, className: i } = e;
    return (0, t.jsx)("svg", {
        className: i,
        height: "16",
        width: "80",
        viewBox: "0 0 80 16",
        xmlns: "http://www.w3.org/2000/svg",
        children: (0, t.jsxs)("g", {
            fill: "none",
            fillRule: "evenodd",
            opacity: ".6",
            children: [
                (0, t.jsx)("path", { d: "m0 0h80v16h-80z" }),
                (0, t.jsxs)("g", {
                    stroke: n,
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: "2",
                    children: [
                        (0, t.jsx)("path", { d: "m71 1h4v4.16" }),
                        (0, t.jsx)("path", { d: "m2 1h4v4.16", transform: "matrix(-1 0 0 1 8 0)" }),
                        (0, t.jsx)("path", { d: "m51 1h4m6 0h4m-24 0h4m-14 0h4m-14 0h4m-23 11v-2m9-9h4" }),
                        (0, t.jsx)("path", { d: "m72.13 10.474 2.869 3.12 2.631-3.12" }),
                    ],
                }),
            ],
        }),
    });
}
function C(e, n) {
    let i = (0, r.bG)([x.default], () => x.default.getCurrentUser());
    return null == i || n.ownerId !== i.id || e.id === i.id
        ? null
        : (0, t.jsx)(u.Dr, {
              id: "make-dm-owner",
              color: "danger",
              label: j.intl.string(j.t["6t3CyN"]),
              action: () => {
                  (0, d.openModal)((r) =>
                      (0, t.jsx)(l.ConfirmModal, {
                          title: j.intl.string(j.t.WZoUsm),
                          confirmText: j.intl.string(j.t["cY+Oob"]),
                          cancelText: j.intl.string(j.t["ETE/oC"]),
                          onConfirm: () => A.A.setDMOwner(n.id, e.id),
                          ...r,
                          children: (0, t.jsxs)("div", {
                              className: g.Uh,
                              children: [
                                  (0, t.jsx)(v, { color: s.A.unsafe_rawColors.PRIMARY_300.css }),
                                  (0, t.jsxs)("div", {
                                      className: g.nS,
                                      children: [
                                          (0, t.jsx)("div", {
                                              className: g.HT,
                                              children: (0, t.jsx)(m.A, { user: i, size: a._3.SIZE_80 }),
                                          }),
                                          (0, t.jsx)("div", {
                                              className: g.to,
                                              children: (0, t.jsx)(m.A, { user: e, size: a._3.SIZE_80 }),
                                          }),
                                      ],
                                  }),
                                  (0, t.jsx)(o.E, {
                                      variant: "text-md/normal",
                                      children: j.intl.format(j.t.gsBb3F, {
                                          usernameHook: (n, i) =>
                                              (0, t.jsx)(
                                                  h.A,
                                                  {
                                                      usernameIcon: (0, t.jsx)(c.eu, {
                                                          className: g.jj,
                                                          src: e.getAvatarURL(void 0, 16),
                                                          size: a._3.SIZE_16,
                                                          "aria-hidden": !0,
                                                      }),
                                                      className: g.xK,
                                                      usernameClass: g.Xh,
                                                      discriminatorClass: g.D2,
                                                      user: e,
                                                  },
                                                  i,
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
