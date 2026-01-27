n.d(t, {
    A: () => j,
}),
    n(896048),
    n(747238),
    n(812715),
    n(321073);
var i = n(627968);
n(64700);
var s = n(503698),
    l = n.n(s),
    r = n(481613),
    a = n.n(r),
    o = n(397927),
    c = n(77729),
    d = n(521502),
    u = n(915089),
    g = n(206845),
    h = n(837921),
    x = n(985018),
    A = n(355893);

function p(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            i.forEach(function (t) {
                var i;
                (i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = i);
            });
    }
    return e;
}

function m(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var i = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, i);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}

function j(e) {
    var t, n, s, r, j;
    let { compact: b = !1 } = e,
        O = (0, u.GV)(),
        S = window.GLOBAL_ENV.RELEASE_CHANNEL,
        E = "489661",
        f = "c0c40d211197b0c2e77b366900c5677c7216dd08".substring(0, 7),
        v = null === c.A || void 0 === c.A ? void 0 : c.A.remoteApp.getVersion(),
        T = null === c.A || void 0 === c.A || null == (t = (n = c.A.remoteApp).getBuildNumber) ? void 0 : t.call(n),
        C = null === c.A || void 0 === c.A || null == (s = (r = c.A.remoteApp).getAppArch) ? void 0 : s.call(r),
        y = null == (j = d.A.getCurrentBuildOverride().overrides) ? void 0 : j.discord_web,
        N = (function () {
            var e;
            let t = null === a() || void 0 === a() || null == (e = a().os) ? void 0 : e.toString();
            if (null == t || null == c.A) return null;
            let n = c.A.os.release,
                [i, s, l] = h.Ay.parsedOSRelease;
            return (
                t.includes("Windows 10") && void 0 !== l && l >= 22e3 && (t = t.replace("Windows 10", "Windows 11")),
                t.includes("OS X 10.15.7") && void 0 !== i && i >= 20 && (t = "macOS ".concat(i >= 25 ? i + 1 : i - 9)),
                "".concat(t, " (").concat(n, ")")
            );
        })(),
        I = [S, E, "(".concat(f, ")")];
    return (null != v &&
        (I.push("Host ".concat(v)), null != C && I.push(C.toLowerCase()), null != T && I.push("(".concat(T, ")"))),
    I.push("Build Override: ".concat(null != y ? y.id : "N/A")),
    null != N && I.push(N),
    b)
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(g.A, {
                      copyValue: I.join(" "),
                      text: x.intl.string(x.t["9Al4Qd"]),
                      "aria-label": !1,
                      dataMeticulousIgnore: "true",
                      children: (e) =>
                          (0, i.jsxs)(
                              o.DUT,
                              m(p({}, e), {
                                  "aria-describedby": O,
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
                                                      S,
                                                      " ",
                                                      E,
                                                      " ",
                                                      (0, i.jsxs)("span", {
                                                          className: A.Pc,
                                                          children: ["(", f, ")"],
                                                      }),
                                                  ],
                                              }),
                                              null != v &&
                                                  (0, i.jsxs)(o.Text, {
                                                      tag: "span",
                                                      variant: "text-xxs/normal",
                                                      color: "text-muted",
                                                      children: [
                                                          v,
                                                          null != C &&
                                                              (0, i.jsxs)("span", {
                                                                  className: A.GI,
                                                                  children: [" ", C.toLowerCase()],
                                                              }),
                                                          null != T &&
                                                              (0, i.jsxs)("span", {
                                                                  children: [" (", T, ")"],
                                                              }),
                                                      ],
                                                  }),
                                          ],
                                      }),
                                      null != y &&
                                          (0, i.jsx)(o.Text, {
                                              tag: "span",
                                              variant: "text-xxs/normal",
                                              color: "text-muted",
                                              children: (0, i.jsxs)("span", {
                                                  className: A.Pc,
                                                  children: ["Build Override: ", y.id],
                                              }),
                                          }),
                                  ],
                              }),
                          ),
                  }),
                  (0, i.jsx)(o.AC4, {
                      id: O,
                      children: x.intl.string(x.t["9Al4Qd"]),
                  }),
              ],
          })
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(g.A, {
                      copyValue: I.join(" "),
                      text: x.intl.string(x.t["9Al4Qd"]),
                      "aria-label": !1,
                      dataMeticulousIgnore: "true",
                      children: (e) =>
                          (0, i.jsx)(
                              o.DUT,
                              m(p({}, e), {
                                  "aria-describedby": O,
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
                                                  S,
                                                  " ",
                                                  E,
                                                  " ",
                                                  (0, i.jsxs)("span", {
                                                      className: A.Pc,
                                                      children: ["(", f, ")"],
                                                  }),
                                              ],
                                          }),
                                          " ",
                                          null != y &&
                                              (0, i.jsx)(o.Text, {
                                                  tag: "span",
                                                  className: A.n8,
                                                  variant: "text-xs/normal",
                                                  color: "text-muted",
                                                  children: (0, i.jsxs)("span", {
                                                      className: A.Pc,
                                                      children: ["Build Override: ", y.id],
                                                  }),
                                              }),
                                          null != v
                                              ? (0, i.jsxs)(i.Fragment, {
                                                    children: [
                                                        (0, i.jsxs)(o.Text, {
                                                            tag: "span",
                                                            className: A.n8,
                                                            variant: "text-xs/normal",
                                                            color: "text-muted",
                                                            children: [
                                                                "Host ",
                                                                v,
                                                                " ",
                                                                null != C
                                                                    ? (0, i.jsxs)("span", {
                                                                          className: A.GI,
                                                                          children: [C.toLowerCase(), " "],
                                                                      })
                                                                    : null,
                                                                null != T
                                                                    ? (0, i.jsxs)("span", {
                                                                          children: ["(", T, ")"],
                                                                      })
                                                                    : null,
                                                            ],
                                                        }),
                                                        " ",
                                                    ],
                                                })
                                              : null,
                                          null != N
                                              ? (0, i.jsx)(o.Text, {
                                                    tag: "span",
                                                    className: l()(A.n8, A.os),
                                                    variant: "text-xs/normal",
                                                    color: "text-muted",
                                                    children: N,
                                                })
                                              : null,
                                      ],
                                  }),
                              }),
                          ),
                  }),
                  (0, i.jsx)(o.AC4, {
                      id: O,
                      children: x.intl.string(x.t["9Al4Qd"]),
                  }),
              ],
          });
}
