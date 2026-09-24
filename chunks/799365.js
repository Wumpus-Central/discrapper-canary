s.d(t, { F: () => f, A: () => E });
var r = s(477900);
s(582128);
var n = s(503698),
    i = s.n(n),
    a = s(478016),
    l = s(289873),
    d = s(854378),
    c = s(814925),
    u = s(651539),
    o = s(401755),
    m = s(375708),
    h = s(311447),
    g = s(221851);
function x() {
    return (0, r.jsx)(c.A, {
        className: h.w$,
        children: (0, r.jsx)("div", {
            className: h.SN,
            children: (0, r.jsx)(a.U, { size: "xs", color: "currentColor", className: h.HE }),
        }),
    });
}
function p(e) {
    let { verified: t, text: s } = e;
    return t ? (0, r.jsxs)("div", { className: h.V, children: [(0, r.jsx)(x, {}), s] }) : s;
}
function f(e) {
    let { className: t, count: s, creator: n, verifiedName: a } = e;
    return (0, r.jsx)("div", {
        className: i()(h.t5, t, h.fz),
        children:
            null != n || null != a
                ? m.intl.format(m.t.TTcKAw, {
                      usageCount: s,
                      creator: a ?? n,
                      creatorHook: (e, t) => (0, r.jsx)(p, { text: e, verified: null != a }, t),
                  })
                : m.intl.format(m.t.cGXXHL, { usageCount: s }),
    });
}
function E(e) {
    var t;
    let { guildTemplate: s, error: n, tall: a, pillClassName: c } = e;
    if (null != n && "" !== n)
        return (0, r.jsxs)("div", {
            className: h.kL,
            children: [(0, r.jsx)(d.hE, { children: m.intl.string(m.t.mDFGFj) }), (0, r.jsx)(d.tK, { children: n })],
        });
    if (s.state === o.QB.RESOLVING) return (0, r.jsx)("div", { className: h.kL, children: (0, r.jsx)(l.y, {}) });
    let x = (0, u.A)(s.code).header;
    return a
        ? (0, r.jsxs)("div", {
              className: h.kL,
              children: [
                  (0, r.jsx)(d.hE, { className: h.DD, children: x }),
                  (0, r.jsx)(d.tK, {
                      className: i()(h.VA, g.__invalid_marginTop2),
                      children: m.intl.string(m.t["h+vyO6"]),
                  }),
                  (0, r.jsx)(d.hE, { className: i()(h.DD, h.fz), children: s.name }),
                  null != s.description &&
                      "" !== s.description &&
                      (0, r.jsx)(d.tK, { className: i()(h.VA, h.fz, g.Ot), children: s.description }),
                  (0, r.jsx)(f, {
                      className: c,
                      count: s.usageCount ?? 0,
                      creator: s.creator.username,
                      verifiedName: ((t = s.code), (0, u.A)(t).author),
                  }),
              ],
          })
        : (0, r.jsxs)("div", {
              className: h.kL,
              children: [
                  (0, r.jsx)(d.hE, { className: h.DD, children: x }),
                  (0, r.jsx)(d.tK, { className: i()(h.VA, h.fz), children: s.name }),
              ],
          });
}
