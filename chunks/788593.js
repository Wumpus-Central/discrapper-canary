e.d(i, { A: () => v, R: () => N });
var l = e(477900),
    t = e(582128),
    n = e(503698),
    s = e.n(n),
    r = e(834730),
    c = e(866665),
    d = e(259678),
    o = e(939249),
    p = e(409626),
    u = e(692969),
    m = e(207803),
    A = e(591179),
    x = e(485745),
    I = e(375708),
    E = e(350956);
function N(a) {
    let { imageSrc: i, gameName: e } = a,
        [n, s] = t.useState(!1),
        c = e ?? I.intl.string(I.t.GIWFlF);
    return n || null == i
        ? (0, l.jsx)("div", {
              role: "img",
              "aria-label": c,
              className: E.Np,
              children: (0, l.jsx)(r.E, { variant: "text-xxs/medium", lineClamp: 3, "aria-hidden": !0, children: c }),
          })
        : (0, l.jsx)("img", { src: i, alt: c, className: E.$_, onError: () => s(!0), onLoad: () => s(!1) });
}
function L(a) {
    let { imageSrc: i, gameName: e, applicationId: n, userId: r, className: L, hideTooltip: v = !1, coverRef: g } = a,
        j = !(0, A.X)("GameCover"),
        h = (0, x.A)(j),
        R = (0, u.A)({
            location: "GameCover",
            applicationId: n,
            source: p.GameProfileSources.UserProfile,
            sourceUserId: r,
            trackEntryPointImpression: !0,
        }),
        _ = e ?? I.intl.string(I.t.GIWFlF),
        f = I.intl.formatToPlainString(I.t["8QLQB+"], { gameName: _ }),
        P = t.useCallback(
            (a) => {
                if (h) {
                    a.preventDefault(), a.stopPropagation(), (0, m.VQ)();
                    return;
                }
                R?.(a);
            },
            [h, R],
        );
    function T(a) {
        return v ? a : (0, l.jsx)(c.m, { text: _, ariaHidden: !0, children: a });
    }
    return T(
        null == R
            ? (0, l.jsx)(d.vN, {
                  children: (0, l.jsx)("div", {
                      ref: g,
                      className: L,
                      tabIndex: -1,
                      children: (0, l.jsx)(N, { imageSrc: i, gameName: e }),
                  }),
              })
            : (0, l.jsx)(o.D, {
                  innerRef: g,
                  onClick: P,
                  "aria-label": f,
                  className: s()(E.vk, L),
                  children: (0, l.jsx)(N, { imageSrc: i, gameName: e }),
              }),
    );
}
function v(a) {
    let {
            applicationId: i,
            userId: e,
            className: t,
            disableInteraction: n = !1,
            hideTooltip: r,
            coverRef: c,
            ...o
        } = a,
        p = s()(E.PY, t);
    return n
        ? (0, l.jsx)(d.vN, {
              children: (0, l.jsx)("div", { ref: c, className: p, tabIndex: -1, children: (0, l.jsx)(N, { ...o }) }),
          })
        : (0, l.jsx)(L, { className: p, applicationId: i, userId: e, hideTooltip: r, coverRef: c, ...o });
}
