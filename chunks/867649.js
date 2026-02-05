"use strict";
n.d(t, { A: () => _ }), n(321073);
var r = n(627968);
n(64700);
var i = n(311907),
    a = n(397927),
    s = n(865116),
    o = n(750506),
    l = n(885576),
    u = n(287809),
    c = n(818348),
    d = n(987101);
function _() {
    let e = (0, i.bG)([s.Ay], () => s.Ay.get("idle_status_indicator")),
        t = (0, i.bG)([u.default], () => u.default.getCurrentUser()?.isStaff() ?? !1),
        [n, _] = (0, i.yK)([l.A], () => [l.A.isIdle(), l.A.isAFK()]),
        f = [];
    return (
        n || _ || f.push("ACTIVE"),
        n && f.push("IDLE"),
        _ && f.push("AFK"),
        t && e
            ? (0, r.jsx)(o.Ay, {
                  children: (0, r.jsxs)("div", {
                      className: d.kL,
                      children: [
                          (0, r.jsxs)("div", {
                              className: d.h5,
                              children: [
                                  (0, r.jsx)(a.nW6, {
                                      status: f.includes("ACTIVE") ? c.cl.ONLINE : c.cl.IDLE,
                                      className: d.UX,
                                  }),
                                  (0, r.jsx)(a.Text, { variant: "text-md/normal", children: "IDLE STATUS:" }),
                                  (0, r.jsx)("div", {
                                      className: d.qS,
                                      children: (0, r.jsx)(a.Text, {
                                          variant: "text-md/bold",
                                          children: f.join(" + "),
                                      }),
                                  }),
                              ],
                          }),
                          n &&
                              (0, r.jsxs)(a.Text, {
                                  variant: "text-md/normal",
                                  children: [
                                      "Idle since:",
                                      " ",
                                      new Date(l.A.getIdleSince() ?? 0).toLocaleDateString(void 0, {
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
