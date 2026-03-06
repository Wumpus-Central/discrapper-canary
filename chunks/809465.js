n.d(t, { A: () => h }), n(321073);
var i = n(627968);
n(64700);
var s = n(503698),
    l = n.n(s),
    a = n(481613),
    r = n.n(a),
    o = n(397927),
    d = n(77729),
    c = n(521502),
    u = n(915089),
    _ = n(206845),
    g = n(837921),
    m = n(985018),
    A = n(536087);
function h(e) {
    let { compact: t = !1 } = e,
        n = (0, u.GV)(),
        s = window.GLOBAL_ENV.RELEASE_CHANNEL,
        a = "507321",
        h = "f768b82bba6225b43fe68d2e98b40e18dcc00e25".substring(0, 7),
        p = d.A?.app.getVersion(),
        x = d.A?.app.getBuildNumber(),
        E = d.A?.app.getAppArch(),
        T = c.A.getCurrentBuildOverride().overrides?.discord_web,
        S = (function () {
            let e = r()?.os?.toString();
            if (null == e || null == d.A) return null;
            let t = d.A.os.release,
                [n, i, s] = g.Ay.parsedOSRelease;
            return (
                e.includes("Windows 10") && void 0 !== s && s >= 22e3 && (e = e.replace("Windows 10", "Windows 11")),
                e.includes("OS X 10.15.7") && void 0 !== n && n >= 20 && (e = `macOS ${n >= 25 ? n + 1 : n - 9}`),
                `${e} (${t})`
            );
        })(),
        C = [s, a, `(${h})`];
    return (null != p && (C.push(`Host ${p}`), null != E && C.push(E.toLowerCase()), null != x && C.push(`(${x})`)),
    C.push(`Build Override: ${null != T ? T.id : "N/A"}`),
    null != S && C.push(S),
    t)
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(_.A, {
                      copyValue: C.join(" "),
                      text: m.intl.string(m.t["9Al4Qd"]),
                      "aria-label": !1,
                      dataMeticulousIgnore: "true",
                      children: (e) =>
                          (0, i.jsxs)(o.DUT, {
                              ...e,
                              "aria-describedby": n,
                              className: l()(A.vk, A.oE),
                              children: [
                                  (0, i.jsxs)("div", {
                                      className: A.Cr,
                                      "data-mtctest-ignore": "true",
                                      children: [
                                          (0, i.jsxs)(o.Text, {
                                              tag: "span",
                                              variant: "text-xxs/normal",
                                              color: "text-muted",
                                              children: [
                                                  s,
                                                  " ",
                                                  a,
                                                  " ",
                                                  (0, i.jsxs)("span", { className: A.Pc, children: ["(", h, ")"] }),
                                              ],
                                          }),
                                          null != p &&
                                              (0, i.jsxs)(o.Text, {
                                                  tag: "span",
                                                  variant: "text-xxs/normal",
                                                  color: "text-muted",
                                                  children: [
                                                      p,
                                                      null != E &&
                                                          (0, i.jsxs)("span", {
                                                              className: A.GI,
                                                              children: [" ", E.toLowerCase()],
                                                          }),
                                                      null != x && (0, i.jsxs)("span", { children: [" (", x, ")"] }),
                                                  ],
                                              }),
                                      ],
                                  }),
                                  null != T &&
                                      (0, i.jsx)(o.Text, {
                                          tag: "span",
                                          variant: "text-xxs/normal",
                                          color: "text-muted",
                                          children: (0, i.jsxs)("span", {
                                              className: A.Pc,
                                              children: ["Build Override: ", T.id],
                                          }),
                                      }),
                              ],
                          }),
                  }),
                  (0, i.jsx)(o.AC4, { id: n, children: m.intl.string(m.t["9Al4Qd"]) }),
              ],
          })
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(_.A, {
                      copyValue: C.join(" "),
                      text: m.intl.string(m.t["9Al4Qd"]),
                      "aria-label": !1,
                      dataMeticulousIgnore: "true",
                      children: (e) =>
                          (0, i.jsx)(o.DUT, {
                              ...e,
                              "aria-describedby": n,
                              className: l()(A.vk, A.oE),
                              children: (0, i.jsxs)("div", {
                                  className: A.pq,
                                  "data-mtctest-ignore": "true",
                                  children: [
                                      (0, i.jsxs)(o.Text, {
                                          tag: "span",
                                          className: A.n8,
                                          variant: "text-xs/normal",
                                          color: "text-muted",
                                          children: [
                                              s,
                                              " ",
                                              a,
                                              " ",
                                              (0, i.jsxs)("span", { className: A.Pc, children: ["(", h, ")"] }),
                                          ],
                                      }),
                                      " ",
                                      null != T &&
                                          (0, i.jsx)(o.Text, {
                                              tag: "span",
                                              className: A.n8,
                                              variant: "text-xs/normal",
                                              color: "text-muted",
                                              children: (0, i.jsxs)("span", {
                                                  className: A.Pc,
                                                  children: ["Build Override: ", T.id],
                                              }),
                                          }),
                                      null != p
                                          ? (0, i.jsxs)(i.Fragment, {
                                                children: [
                                                    (0, i.jsxs)(o.Text, {
                                                        tag: "span",
                                                        className: A.n8,
                                                        variant: "text-xs/normal",
                                                        color: "text-muted",
                                                        children: [
                                                            "Host ",
                                                            p,
                                                            " ",
                                                            null != E
                                                                ? (0, i.jsxs)("span", {
                                                                      className: A.GI,
                                                                      children: [E.toLowerCase(), " "],
                                                                  })
                                                                : null,
                                                            null != x
                                                                ? (0, i.jsxs)("span", { children: ["(", x, ")"] })
                                                                : null,
                                                        ],
                                                    }),
                                                    " ",
                                                ],
                                            })
                                          : null,
                                      null != S
                                          ? (0, i.jsx)(o.Text, {
                                                tag: "span",
                                                className: l()(A.n8, A.os),
                                                variant: "text-xs/normal",
                                                color: "text-muted",
                                                children: S,
                                            })
                                          : null,
                                  ],
                              }),
                          }),
                  }),
                  (0, i.jsx)(o.AC4, { id: n, children: m.intl.string(m.t["9Al4Qd"]) }),
              ],
          });
}
