i.d(e, { A: () => E, R: () => v });
var l = i(477900),
    t = i(582128),
    s = i(503698),
    n = i.n(s),
    r = i(834730),
    c = i(866665),
    d = i(259678),
    o = i(939249),
    m = i(409626),
    u = i(692969),
    x = i(207803),
    p = i(591179),
    A = i(485745),
    N = i(375708),
    j = i(350956);
function v(a) {
    let { imageSrc: e, gameName: i } = a,
        [s, n] = t.useState(!1),
        c = i ?? N.intl.string(N.t.GIWFlF);
    return s || null == e
        ? (0, l.jsx)("div", {
              role: "img",
              "aria-label": c,
              className: j.Np,
              children: (0, l.jsx)(r.E, { variant: "text-xxs/medium", lineClamp: 3, "aria-hidden": !0, children: c }),
          })
        : (0, l.jsx)("img", { src: e, alt: c, className: j.$_, onError: () => n(!0), onLoad: () => n(!1) });
}
function I(a) {
    let { imageSrc: e, gameName: i, gameId: s, userId: r, className: I, hideTooltip: E = !1, coverRef: g } = a,
        L = !(0, p.X)("GameCover"),
        h = (0, A.A)(L),
        f = (0, u.A)({
            location: "GameCover",
            gameId: s,
            source: m.GameProfileSources.UserProfile,
            sourceUserId: r,
            trackEntryPointImpression: !0,
        }),
        _ = i ?? N.intl.string(N.t.GIWFlF),
        R = N.intl.formatToPlainString(N.t["8QLQB+"], { gameName: _ }),
        T = t.useCallback(
            (a) => {
                if (h) {
                    a.preventDefault(), a.stopPropagation(), (0, x.VQ)();
                    return;
                }
                f?.(a);
            },
            [h, f],
        );
    function D(a) {
        return E ? a : (0, l.jsx)(c.m, { text: _, ariaHidden: !0, children: a });
    }
    return D(
        null == f
            ? (0, l.jsx)(d.vN, {
                  children: (0, l.jsx)("div", {
                      ref: g,
                      className: I,
                      tabIndex: -1,
                      children: (0, l.jsx)(v, { imageSrc: e, gameName: i }),
                  }),
              })
            : (0, l.jsx)(o.D, {
                  innerRef: g,
                  onClick: T,
                  "aria-label": R,
                  className: n()(j.vk, I),
                  children: (0, l.jsx)(v, { imageSrc: e, gameName: i }),
              }),
    );
}
function E(a) {
    let { gameId: e, userId: i, className: t, disableInteraction: s = !1, hideTooltip: r, coverRef: c, ...o } = a,
        m = n()(j.PY, t);
    return s
        ? (0, l.jsx)(d.vN, {
              children: (0, l.jsx)("div", { ref: c, className: m, tabIndex: -1, children: (0, l.jsx)(v, { ...o }) }),
          })
        : (0, l.jsx)(I, { className: m, gameId: e, userId: i, hideTooltip: r, coverRef: c, ...o });
}
