n.d(t, { A: () => f }), n(896048), n(321073);
var r = n(627968);
n(64700);
var i = n(311907),
    a = n(397927),
    s = n(750506),
    o = n(111162),
    l = n(885576),
    c = n(287809),
    u = n(818348),
    d = n(987101);
function f() {
    var e;
    let t = (0, i.bG)([o.default], () => o.default.isIdleStatusIndicatorEnabled),
        n = (0, i.bG)([c.default], () => {
            var e, t;
            return null != (e = null == (t = c.default.getCurrentUser()) ? void 0 : t.isStaff()) && e;
        }),
        [f, p] = (0, i.yK)([l.A], () => [l.A.isIdle(), l.A.isAFK()]),
        _ = [];
    return (
        f || p || _.push("ACTIVE"),
        f && _.push("IDLE"),
        p && _.push("AFK"),
        n && t
            ? (0, r.jsx)(s.Ay, {
                  children: (0, r.jsxs)("div", {
                      className: d.kL,
                      children: [
                          (0, r.jsxs)("div", {
                              className: d.h5,
                              children: [
                                  (0, r.jsx)(a.nW6, {
                                      status: _.includes("ACTIVE") ? u.cl.ONLINE : u.cl.IDLE,
                                      className: d.UX,
                                  }),
                                  (0, r.jsx)(a.Text, {
                                      variant: "text-md/normal",
                                      children: "IDLE STATUS:",
                                  }),
                                  (0, r.jsx)("div", {
                                      className: d.qS,
                                      children: (0, r.jsx)(a.Text, {
                                          variant: "text-md/bold",
                                          children: _.join(" + "),
                                      }),
                                  }),
                              ],
                          }),
                          f &&
                              (0, r.jsxs)(a.Text, {
                                  variant: "text-md/normal",
                                  children: [
                                      "Idle since:",
                                      " ",
                                      new Date(null != (e = l.A.getIdleSince()) ? e : 0).toLocaleDateString(void 0, {
                                          year: "numeric",
                                          day: "numeric",
                                          month: "numeric",
                                          hour: "numeric",
                                          minute: "numeric",
                                          second: "numeric",
                                      }),
                                  ],
                              }),
                      ],
                  }),
              })
            : null
    );
}
