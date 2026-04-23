s.d(t, { F: () => g, A: () => p });
var r = s(627968);
s(64700);
var n = s(503698),
    i = s.n(n),
    l = s(478016),
    a = s(289873),
    d = s(854378),
    c = s(496885),
    u = s(651539),
    C = s(401755),
    o = s(985018),
    L = s(754196),
    m = s(818050);
function h() {
    return (0, r.jsx)(c.A, {
        className: L.w$,
        children: (0, r.jsx)("div", {
            className: L.SN,
            children: (0, r.jsx)(l.U, { size: "xs", color: "currentColor", className: L.HE }),
        }),
    });
}
function x(e) {
    let { verified: t, text: s } = e;
    return t ? (0, r.jsxs)("div", { className: L.V, children: [(0, r.jsx)(h, {}), s] }) : s;
}
function g(e) {
    let { className: t, count: s, creator: n, verifiedName: l } = e;
    return (0, r.jsx)("div", {
        className: i()(L.t5, t, L.fz),
        children:
            null != n || null != l
                ? o.intl.format(o.t.TTcKAw, {
                      usageCount: s,
                      creator: l ?? n,
                      creatorHook: (e, t) => (0, r.jsx)(x, { text: e, verified: null != l }, t),
                  })
                : o.intl.format(o.t.cGXXHL, { usageCount: s }),
    });
}
function p(e) {
    var t;
    let { guildTemplate: s, error: n, tall: l, pillClassName: c } = e;
    if (null != n && "" !== n)
        return (0, r.jsxs)("div", {
            className: L.kL,
            children: [(0, r.jsx)(d.hE, { children: o.intl.string(o.t.mDFGFj) }), (0, r.jsx)(d.tK, { children: n })],
        });
    if (s.state === C.QB.RESOLVING) return (0, r.jsx)("div", { className: L.kL, children: (0, r.jsx)(a.y, {}) });
    let h = (0, u.A)(s.code).header;
    return l
        ? (0, r.jsxs)("div", {
              className: L.kL,
              children: [
                  (0, r.jsx)(d.hE, { className: L.DD, children: h }),
                  (0, r.jsx)(d.tK, {
                      className: i()(L.VA, m.__invalid_marginTop2),
                      children: o.intl.string(o.t["h+vyO6"]),
                  }),
                  (0, r.jsx)(d.hE, { className: i()(L.DD, L.fz), children: s.name }),
                  null != s.description &&
                      "" !== s.description &&
                      (0, r.jsx)(d.tK, { className: i()(L.VA, L.fz, m.Ot), children: s.description }),
                  (0, r.jsx)(g, {
                      className: c,
                      count: s.usageCount ?? 0,
                      creator: s.creator.username,
                      verifiedName: ((t = s.code), (0, u.A)(t).author),
                  }),
              ],
          })
        : (0, r.jsxs)("div", {
              className: L.kL,
              children: [
                  (0, r.jsx)(d.hE, { className: L.DD, children: h }),
                  (0, r.jsx)(d.tK, { className: i()(L.VA, L.fz), children: s.name }),
              ],
          });
}
