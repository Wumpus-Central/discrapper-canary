"use strict";
n.d(t, { A: () => f }), n(321073);
var r = n(627968);
n(64700);
var i = n(311907),
    s = n(935154),
    a = n(834730),
    o = n(865116),
    l = n(750506),
    u = n(885576),
    d = n(287809),
    c = n(818348),
    _ = n(801964);
function f() {
    let e = (0, i.bG)([o.Ay], () => o.Ay.get("idle_status_indicator")),
        t = (0, i.bG)([d.default], () => d.default.getCurrentUser()?.isStaff() ?? !1),
        [n, f] = (0, i.yK)([u.A], () => [u.A.isIdle(), u.A.isAFK()]),
        E = [];
    return (
        n || f || E.push("ACTIVE"),
        n && E.push("IDLE"),
        f && E.push("AFK"),
        t && e
            ? (0, r.jsx)(l.Ay, {
                  children: (0, r.jsxs)("div", {
                      className: _.kL,
                      children: [
                          (0, r.jsxs)("div", {
                              className: _.h5,
                              children: [
                                  (0, r.jsx)(s.nW, {
                                      status: E.includes("ACTIVE") ? c.cl.ONLINE : c.cl.IDLE,
                                      className: _.UX,
                                  }),
                                  (0, r.jsx)(a.E, { variant: "text-md/normal", children: "IDLE STATUS:" }),
                                  (0, r.jsx)("div", {
                                      className: _.qS,
                                      children: (0, r.jsx)(a.E, { variant: "text-md/bold", children: E.join(" + ") }),
                                  }),
                              ],
                          }),
                          n &&
                              (0, r.jsxs)(a.E, {
                                  variant: "text-md/normal",
                                  children: [
                                      "Idle since:",
                                      " ",
                                      new Date(u.A.getIdleSince() ?? 0).toLocaleDateString(void 0, {
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
