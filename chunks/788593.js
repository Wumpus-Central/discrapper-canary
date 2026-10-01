s.d(a, { A: () => p, R: () => f });
var i = s(477900),
    r = s(582128),
    n = s(503698),
    l = s.n(n),
    c = s(834730),
    t = s(866665),
    d = s(559106),
    m = s(939249),
    o = s(409626),
    u = s(692969),
    x = s(207803),
    j = s(591179),
    h = s(485745),
    v = s(375708),
    N = s(365611);
function f(e) {
    let { imageSrc: a, gameName: s } = e,
        [n, l] = r.useState(!1),
        t = s ?? v.intl.string(v.t.GIWFlF);
    return n || null == a
        ? (0, i.jsx)("div", {
              role: "img",
              "aria-label": t,
              className: N.Np,
              children: (0, i.jsx)(c.E, { variant: "text-xxs/medium", lineClamp: 3, "aria-hidden": !0, children: t }),
          })
        : (0, i.jsx)("img", { src: a, alt: t, className: N.$_, onError: () => l(!0), onLoad: () => l(!1) });
}
function g(e) {
    let { imageSrc: a, gameName: s, gameId: n, userId: c, className: g, hideTooltip: p = !1, coverRef: I } = e,
        k = !(0, j.X)("GameCover"),
        C = (0, h.A)(k),
        b = (0, u.A)({
            location: "GameCover",
            gameId: n,
            source: o.GameProfileSources.UserProfile,
            sourceUserId: c,
            trackEntryPointImpression: !0,
        }),
        L = s ?? v.intl.string(v.t.GIWFlF),
        P = v.intl.formatToPlainString(v.t["8QLQB+"], { gameName: L }),
        R = r.useCallback(
            (e) => {
                if (C) {
                    (e.preventDefault(), e.stopPropagation(), (0, x.VQ)());
                    return;
                }
                b?.(e);
            },
            [C, b],
        );
    function S(e) {
        return p ? e : (0, i.jsx)(t.m, { text: L, ariaHidden: !0, children: e });
    }
    return S(
        null == b
            ? (0, i.jsx)(d.vN, {
                  children: (0, i.jsx)("div", {
                      ref: I,
                      className: g,
                      tabIndex: -1,
                      children: (0, i.jsx)(f, { imageSrc: a, gameName: s }),
                  }),
              })
            : (0, i.jsx)(m.D, {
                  innerRef: I,
                  onClick: R,
                  "aria-label": P,
                  className: l()(N.vk, g),
                  children: (0, i.jsx)(f, { imageSrc: a, gameName: s }),
              }),
    );
}
function p(e) {
    let { gameId: a, userId: s, className: r, disableInteraction: n = !1, hideTooltip: c, coverRef: t, ...m } = e,
        o = l()(N.PY, r);
    return n
        ? (0, i.jsx)(d.vN, {
              children: (0, i.jsx)("div", { ref: t, className: o, tabIndex: -1, children: (0, i.jsx)(f, { ...m }) }),
          })
        : (0, i.jsx)(g, { className: o, gameId: a, userId: s, hideTooltip: c, coverRef: t, ...m });
}
