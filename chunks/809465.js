n.d(t, { A: () => p }), n(321073);
var i = n(627968);
n(64700);
var l = n(503698),
    s = n.n(l),
    a = n(481613),
    r = n.n(a),
    o = n(397927),
    d = n(77729),
    c = n(521502),
    u = n(915089),
    h = n(206845),
    A = n(837921),
    g = n(985018),
    m = n(355893);
function p(e) {
    let { compact: t = !1 } = e,
        n = (0, u.GV)(),
        l = window.GLOBAL_ENV.RELEASE_CHANNEL,
        a = "493560",
        p = "93179522fde40f7ecc7aea17608967ce0f49de7c".substring(0, 7),
        _ = d.A?.remoteApp.getVersion(),
        x = d.A?.remoteApp.getBuildNumber?.(),
        f = d.A?.remoteApp.getAppArch?.(),
        E = c.A.getCurrentBuildOverride().overrides?.discord_web,
        C = (function () {
            let e = r()?.os?.toString();
            if (null == e || null == d.A) return null;
            let t = d.A.os.release,
                [n, i, l] = A.Ay.parsedOSRelease;
            return (
                e.includes("Windows 10") && void 0 !== l && l >= 22e3 && (e = e.replace("Windows 10", "Windows 11")),
                e.includes("OS X 10.15.7") && void 0 !== n && n >= 20 && (e = `macOS ${n >= 25 ? n + 1 : n - 9}`),
                `${e} (${t})`
            );
        })(),
        I = [l, a, `(${p})`];
    return (null != _ && (I.push(`Host ${_}`), null != f && I.push(f.toLowerCase()), null != x && I.push(`(${x})`)),
    I.push(`Build Override: ${null != E ? E.id : "N/A"}`),
    null != C && I.push(C),
    t)
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(h.A, {
                      copyValue: I.join(" "),
                      text: g.intl.string(g.t["9Al4Qd"]),
                      "aria-label": !1,
                      dataMeticulousIgnore: "true",
                      children: (e) =>
                          (0, i.jsxs)(o.DUT, {
                              ...e,
                              "aria-describedby": n,
                              className: s()(m.vk, m.oE),
                              children: [
                                  (0, i.jsxs)("div", {
                                      className: m.Cr,
                                      "data-mtctest-ignore": "true",
                                      children: [
                                          (0, i.jsxs)(o.Text, {
                                              tag: "span",
                                              variant: "text-xxs/normal",
                                              color: "text-muted",
                                              children: [
                                                  l,
                                                  " ",
                                                  a,
                                                  " ",
                                                  (0, i.jsxs)("span", { className: m.Pc, children: ["(", p, ")"] }),
                                              ],
                                          }),
                                          null != _ &&
                                              (0, i.jsxs)(o.Text, {
                                                  tag: "span",
                                                  variant: "text-xxs/normal",
                                                  color: "text-muted",
                                                  children: [
                                                      _,
                                                      null != f &&
                                                          (0, i.jsxs)("span", {
                                                              className: m.GI,
                                                              children: [" ", f.toLowerCase()],
                                                          }),
                                                      null != x && (0, i.jsxs)("span", { children: [" (", x, ")"] }),
                                                  ],
                                              }),
                                      ],
                                  }),
                                  null != E &&
                                      (0, i.jsx)(o.Text, {
                                          tag: "span",
                                          variant: "text-xxs/normal",
                                          color: "text-muted",
                                          children: (0, i.jsxs)("span", {
                                              className: m.Pc,
                                              children: ["Build Override: ", E.id],
                                          }),
                                      }),
                              ],
                          }),
                  }),
                  (0, i.jsx)(o.AC4, { id: n, children: g.intl.string(g.t["9Al4Qd"]) }),
              ],
          })
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(h.A, {
                      copyValue: I.join(" "),
                      text: g.intl.string(g.t["9Al4Qd"]),
                      "aria-label": !1,
                      dataMeticulousIgnore: "true",
                      children: (e) =>
                          (0, i.jsx)(o.DUT, {
                              ...e,
                              "aria-describedby": n,
                              className: s()(m.vk, m.oE),
                              children: (0, i.jsxs)("div", {
                                  className: m.pq,
                                  "data-mtctest-ignore": "true",
                                  children: [
                                      (0, i.jsxs)(o.Text, {
                                          tag: "span",
                                          className: m.n8,
                                          variant: "text-xs/normal",
                                          color: "text-muted",
                                          children: [
                                              l,
                                              " ",
                                              a,
                                              " ",
                                              (0, i.jsxs)("span", { className: m.Pc, children: ["(", p, ")"] }),
                                          ],
                                      }),
                                      " ",
                                      null != E &&
                                          (0, i.jsx)(o.Text, {
                                              tag: "span",
                                              className: m.n8,
                                              variant: "text-xs/normal",
                                              color: "text-muted",
                                              children: (0, i.jsxs)("span", {
                                                  className: m.Pc,
                                                  children: ["Build Override: ", E.id],
                                              }),
                                          }),
                                      null != _
                                          ? (0, i.jsxs)(i.Fragment, {
                                                children: [
                                                    (0, i.jsxs)(o.Text, {
                                                        tag: "span",
                                                        className: m.n8,
                                                        variant: "text-xs/normal",
                                                        color: "text-muted",
                                                        children: [
                                                            "Host ",
                                                            _,
                                                            " ",
                                                            null != f
                                                                ? (0, i.jsxs)("span", {
                                                                      className: m.GI,
                                                                      children: [f.toLowerCase(), " "],
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
                                      null != C
                                          ? (0, i.jsx)(o.Text, {
                                                tag: "span",
                                                className: s()(m.n8, m.os),
                                                variant: "text-xs/normal",
                                                color: "text-muted",
                                                children: C,
                                            })
                                          : null,
                                  ],
                              }),
                          }),
                  }),
                  (0, i.jsx)(o.AC4, { id: n, children: g.intl.string(g.t["9Al4Qd"]) }),
              ],
          });
}
