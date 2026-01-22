n.d(t, {
    A: () => O,
}),
    n(896048),
    n(747238),
    n(812715),
    n(321073);
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(481613),
    o = n.n(s),
    l = n(397927),
    c = n(77729),
    u = n(521502),
    d = n(915089),
    f = n(206845),
    p = n(837921),
    _ = n(985018),
    h = n(355893);

function m(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}

function g(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                m(e, t, n[t]);
            });
    }
    return e;
}

function E(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}

function b(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : E(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}

function y() {
    var e;
    let t = null === o() || void 0 === o() || null == (e = o().os) ? void 0 : e.toString();
    if (null == t || null == c.A) return null;
    let n = c.A.os.release,
        [r, i, a] = p.Ay.parsedOSRelease;
    if (
        (t.includes("Windows 10") && void 0 !== a && a >= 22e3 && (t = t.replace("Windows 10", "Windows 11")),
        t.includes("OS X 10.15.7") && void 0 !== r && r >= 20)
    ) {
        let e = r >= 25 ? r + 1 : r - 9;
        t = "macOS ".concat(e);
    }
    return "".concat(t, " (").concat(n, ")");
}

function O(e) {
    var t, n, i, s, o;
    let { compact: p = !1 } = e,
        m = (0, d.GV)(),
        E = window.GLOBAL_ENV.RELEASE_CHANNEL,
        O = "488230",
        A = "61528d3e3435ecbee37bf641aa64b9de561b202c".substring(0, 7),
        v = null === c.A || void 0 === c.A ? void 0 : c.A.remoteApp.getVersion(),
        S = null === c.A || void 0 === c.A || null == (t = (n = c.A.remoteApp).getBuildNumber) ? void 0 : t.call(n),
        I = null === c.A || void 0 === c.A || null == (i = (s = c.A.remoteApp).getAppArch) ? void 0 : i.call(s),
        T = null == (o = u.A.getCurrentBuildOverride().overrides) ? void 0 : o.discord_web,
        C = y(),
        N = [E, O, "(".concat(A, ")")];
    return (null != v &&
        (N.push("Host ".concat(v)), null != I && N.push(I.toLowerCase()), null != S && N.push("(".concat(S, ")"))),
    N.push("Build Override: ".concat(null != T ? T.id : "N/A")),
    null != C && N.push(C),
    p)
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(f.A, {
                      copyValue: N.join(" "),
                      text: _.intl.string(_.t["9Al4Qd"]),
                      "aria-label": !1,
                      dataMeticulousIgnore: "true",
                      children: (e) =>
                          (0, r.jsxs)(
                              l.DUT,
                              b(g({}, e), {
                                  "aria-describedby": m,
                                  className: a()(h.vk, h.oE),
                                  children: [
                                      (0, r.jsxs)("div", {
                                          className: h.Cr,
                                          "data-mtctest-ignore": "true",
                                          children: [
                                              (0, r.jsxs)(l.Text, {
                                                  tag: "span",
                                                  variant: "text-xxs/normal",
                                                  color: "text-muted",
                                                  children: [
                                                      E,
                                                      " ",
                                                      O,
                                                      " ",
                                                      (0, r.jsxs)("span", {
                                                          className: h.Pc,
                                                          children: ["(", A, ")"],
                                                      }),
                                                  ],
                                              }),
                                              null != v &&
                                                  (0, r.jsxs)(l.Text, {
                                                      tag: "span",
                                                      variant: "text-xxs/normal",
                                                      color: "text-muted",
                                                      children: [
                                                          v,
                                                          null != I &&
                                                              (0, r.jsxs)("span", {
                                                                  className: h.GI,
                                                                  children: [" ", I.toLowerCase()],
                                                              }),
                                                          null != S &&
                                                              (0, r.jsxs)("span", {
                                                                  children: [" (", S, ")"],
                                                              }),
                                                      ],
                                                  }),
                                          ],
                                      }),
                                      null != T &&
                                          (0, r.jsx)(l.Text, {
                                              tag: "span",
                                              variant: "text-xxs/normal",
                                              color: "text-muted",
                                              children: (0, r.jsxs)("span", {
                                                  className: h.Pc,
                                                  children: ["Build Override: ", T.id],
                                              }),
                                          }),
                                  ],
                              }),
                          ),
                  }),
                  (0, r.jsx)(l.AC4, {
                      id: m,
                      children: _.intl.string(_.t["9Al4Qd"]),
                  }),
              ],
          })
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(f.A, {
                      copyValue: N.join(" "),
                      text: _.intl.string(_.t["9Al4Qd"]),
                      "aria-label": !1,
                      dataMeticulousIgnore: "true",
                      children: (e) =>
                          (0, r.jsx)(
                              l.DUT,
                              b(g({}, e), {
                                  "aria-describedby": m,
                                  className: a()(h.vk, h.oE),
                                  children: (0, r.jsxs)("div", {
                                      className: h.pq,
                                      "data-mtctest-ignore": "true",
                                      children: [
                                          (0, r.jsxs)(l.Text, {
                                              tag: "span",
                                              className: h.n8,
                                              variant: "text-xs/normal",
                                              color: "text-muted",
                                              children: [
                                                  E,
                                                  " ",
                                                  O,
                                                  " ",
                                                  (0, r.jsxs)("span", {
                                                      className: h.Pc,
                                                      children: ["(", A, ")"],
                                                  }),
                                              ],
                                          }),
                                          " ",
                                          null != T &&
                                              (0, r.jsx)(l.Text, {
                                                  tag: "span",
                                                  className: h.n8,
                                                  variant: "text-xs/normal",
                                                  color: "text-muted",
                                                  children: (0, r.jsxs)("span", {
                                                      className: h.Pc,
                                                      children: ["Build Override: ", T.id],
                                                  }),
                                              }),
                                          null != v
                                              ? (0, r.jsxs)(r.Fragment, {
                                                    children: [
                                                        (0, r.jsxs)(l.Text, {
                                                            tag: "span",
                                                            className: h.n8,
                                                            variant: "text-xs/normal",
                                                            color: "text-muted",
                                                            children: [
                                                                "Host ",
                                                                v,
                                                                " ",
                                                                null != I
                                                                    ? (0, r.jsxs)("span", {
                                                                          className: h.GI,
                                                                          children: [I.toLowerCase(), " "],
                                                                      })
                                                                    : null,
                                                                null != S
                                                                    ? (0, r.jsxs)("span", {
                                                                          children: ["(", S, ")"],
                                                                      })
                                                                    : null,
                                                            ],
                                                        }),
                                                        " ",
                                                    ],
                                                })
                                              : null,
                                          null != C
                                              ? (0, r.jsx)(l.Text, {
                                                    tag: "span",
                                                    className: a()(h.n8, h.os),
                                                    variant: "text-xs/normal",
                                                    color: "text-muted",
                                                    children: C,
                                                })
                                              : null,
                                      ],
                                  }),
                              }),
                          ),
                  }),
                  (0, r.jsx)(l.AC4, {
                      id: m,
                      children: _.intl.string(_.t["9Al4Qd"]),
                  }),
              ],
          });
}
