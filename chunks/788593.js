l.d(e, { A: () => I, R: () => E });
var i = l(477900),
    s = l(582128),
    t = l(503698),
    n = l.n(t),
    r = l(834730),
    c = l(866665),
    d = l(259678),
    o = l(939249),
    m = l(409626),
    u = l(692969),
    x = l(207803),
    p = l(591179),
    A = l(485745),
    N = l(375708),
    j = l(350956);
function E(a) {
    let { imageSrc: e, gameName: l } = a,
        [t, n] = s.useState(!1),
        c = l ?? N.intl.string(N.t.GIWFlF);
    return t || null == e
        ? (0, i.jsx)("div", {
              role: "img",
              "aria-label": c,
              className: j.Np,
              children: (0, i.jsx)(r.E, { variant: "text-xxs/medium", lineClamp: 3, "aria-hidden": !0, children: c }),
          })
        : (0, i.jsx)("img", { src: e, alt: c, className: j.$_, onError: () => n(!0), onLoad: () => n(!1) });
}
function v(a) {
    let { imageSrc: e, gameName: l, gameId: t, userId: r, className: v, hideTooltip: I = !1, coverRef: g } = a,
        L = !(0, p.X)("GameCover"),
        h = (0, A.A)(L),
        f = (0, u.A)({
            location: "GameCover",
            gameId: t,
            source: m.GameProfileSources.UserProfile,
            sourceUserId: r,
            trackEntryPointImpression: !0,
        }),
        _ = l ?? N.intl.string(N.t.GIWFlF),
        R = N.intl.formatToPlainString(N.t["8QLQB+"], { gameName: _ }),
        T = s.useCallback(
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
        return I ? a : (0, i.jsx)(c.m, { text: _, ariaHidden: !0, children: a });
    }
    return D(
        null == f
            ? (0, i.jsx)(d.vN, {
                  children: (0, i.jsx)("div", {
                      ref: g,
                      className: v,
                      tabIndex: -1,
                      children: (0, i.jsx)(E, { imageSrc: e, gameName: l }),
                  }),
              })
            : (0, i.jsx)(o.D, {
                  innerRef: g,
                  onClick: T,
                  "aria-label": R,
                  className: n()(j.vk, v),
                  children: (0, i.jsx)(E, { imageSrc: e, gameName: l }),
              }),
    );
}
function I(a) {
    let { gameId: e, userId: l, className: s, disableInteraction: t = !1, hideTooltip: r, coverRef: c, ...o } = a,
        m = n()(j.PY, s);
    return t
        ? (0, i.jsx)(d.vN, {
              children: (0, i.jsx)("div", { ref: c, className: m, tabIndex: -1, children: (0, i.jsx)(E, { ...o }) }),
          })
        : (0, i.jsx)(v, { className: m, gameId: e, userId: l, hideTooltip: r, coverRef: c, ...o });
}
