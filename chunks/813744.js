n.d(t, { Z: () => f }), n(388685), n(539854);
var r = n(54381);
n(473749);
var i = n(442837),
    a = n(481060),
    o = n(314910),
    s = n(857192),
    l = n(517100),
    c = n(594174),
    u = n(231338),
    d = n(956266);
function f() {
    var e;
    let t = (0, i.e7)([s.default], () => s.default.isIdleStatusIndicatorEnabled),
        n = (0, i.e7)([c.default], () => {
            var e, t;
            return null != (t = null == (e = c.default.getCurrentUser()) ? void 0 : e.isStaff()) && t;
        }),
        [f, p] = (0, i.Wu)([l.Z], () => [l.Z.isIdle(), l.Z.isAFK()]),
        _ = [];
    return (
        f || p || _.push("ACTIVE"),
        f && _.push("IDLE"),
        p && _.push("AFK"),
        n && t
            ? (0, r.jsx)(o.ZP, {
                  children: (0, r.jsxs)("div", {
                      className: d.container,
                      children: [
                          (0, r.jsxs)("div", {
                              className: d.status,
                              children: [
                                  (0, r.jsx)(a.qbd, {
                                      status: _.includes("ACTIVE") ? u.Sk.ONLINE : u.Sk.IDLE,
                                      className: d.statusIndicator,
                                  }),
                                  (0, r.jsx)(a.Text, {
                                      variant: "text-md/normal",
                                      children: "IDLE STATUS:",
                                  }),
                                  (0, r.jsx)("div", {
                                      className: d.statusText,
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
                                      new Date(null != (e = l.Z.getIdleSince()) ? e : 0).toLocaleDateString(void 0, {
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
