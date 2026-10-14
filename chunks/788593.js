a.d(r, { A: () => N, R: () => g });
var i = a(477900),
    n = a(582128),
    s = a(503698),
    t = a.n(s),
    l = a(834730),
    c = a(866665),
    o = a(559106),
    d = a(939249),
    m = a(409626),
    u = a(692969),
    x = a(207803),
    h = a(591179),
    p = a(485745),
    f = a(660183),
    j = a(365611);
function g(e) {
    let { imageSrc: r, gameName: a } = e,
        [s, t] = n.useState(!1),
        c = a ?? f.intl.string(f.t.GIWFlF);
    return s || null == r
        ? (0, i.jsx)("div", {
              role: "img",
              "aria-label": c,
              className: j.Np,
              children: (0, i.jsx)(l.E, { variant: "text-xxs/medium", lineClamp: 3, "aria-hidden": !0, children: c }),
          })
        : (0, i.jsx)("img", { src: r, alt: c, className: j.$_, onError: () => t(!0), onLoad: () => t(!1) });
}
function v(e) {
    let { imageSrc: r, gameName: a, gameId: s, userId: l, className: v, hideTooltip: N = !1, coverRef: k } = e,
        I = !(0, h.X)("GameCover"),
        b = (0, p.A)(I),
        C = (0, u.A)({
            location: "GameCover",
            gameId: s,
            source: m.GameProfileSources.UserProfile,
            sourceUserId: l,
            trackEntryPointImpression: !0,
        }),
        P = a ?? f.intl.string(f.t.GIWFlF),
        G = f.intl.formatToPlainString(f.t["8QLQB+"], { gameName: P }),
        S = n.useCallback(
            (e) => {
                if (b) {
                    (e.preventDefault(), e.stopPropagation(), (0, x.VQ)());
                    return;
                }
                C?.(e);
            },
            [b, C],
        );
    function F(e) {
        return N ? e : (0, i.jsx)(c.m, { text: P, ariaHidden: !0, children: e });
    }
    return F(
        null == C
            ? (0, i.jsx)(o.vN, {
                  children: (0, i.jsx)("div", {
                      ref: k,
                      className: v,
                      tabIndex: -1,
                      children: (0, i.jsx)(g, { imageSrc: r, gameName: a }),
                  }),
              })
            : (0, i.jsx)(d.D, {
                  innerRef: k,
                  onClick: S,
                  "aria-label": G,
                  className: t()(j.vk, v),
                  children: (0, i.jsx)(g, { imageSrc: r, gameName: a }),
              }),
    );
}
function N(e) {
    let { gameId: r, userId: a, className: n, disableInteraction: s = !1, hideTooltip: l, coverRef: c, ...d } = e,
        m = t()(j.PY, n);
    return s
        ? (0, i.jsx)(o.vN, {
              children: (0, i.jsx)("div", { ref: c, className: m, tabIndex: -1, children: (0, i.jsx)(g, { ...d }) }),
          })
        : (0, i.jsx)(v, { className: m, gameId: r, userId: a, hideTooltip: l, coverRef: c, ...d });
}
