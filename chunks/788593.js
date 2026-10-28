a.d(r, { A: () => g, R: () => j });
var n = a(477900),
    s = a(582128),
    i = a(503698),
    c = a.n(i),
    t = a(866665),
    o = a(559106),
    l = a(939249),
    u = a(409626),
    d = a(692969),
    m = a(459746),
    f = a(207803),
    x = a(591179),
    h = a(485745),
    p = a(105292),
    v = a(365611);
function j(e) {
    let { imageSrc: r, iconSrc: a, gameName: s } = e;
    return (0, n.jsx)(m.FQ, {
        coverUrl: r,
        iconUrl: a,
        gameName: s,
        size: m.wu.COMPACT,
        className: v.vu,
        foregroundClassName: v.$_,
    });
}
function N(e) {
    let {
            imageSrc: r,
            iconSrc: a,
            gameName: i,
            gameId: m,
            userId: N,
            className: g,
            hideTooltip: C = !1,
            coverRef: k,
        } = e,
        P = !(0, x.X)("GameCover"),
        b = (0, h.A)(P),
        I = (0, d.A)({
            location: "GameCover",
            gameId: m,
            source: u.GameProfileSources.UserProfile,
            sourceUserId: N,
            trackEntryPointImpression: !0,
        }),
        S = p.intl.formatToPlainString(p.t["8QLQB+"], { gameName: i }),
        A = s.useCallback(
            (e) => {
                if (b) {
                    (e.preventDefault(), e.stopPropagation(), (0, f.VQ)());
                    return;
                }
                I?.(e);
            },
            [b, I],
        );
    function Q(e) {
        return C ? e : (0, n.jsx)(t.m, { text: i, ariaHidden: !0, children: e });
    }
    return Q(
        null == I
            ? (0, n.jsx)(o.vN, {
                  children: (0, n.jsx)("div", {
                      ref: k,
                      className: g,
                      tabIndex: -1,
                      children: (0, n.jsx)(j, { imageSrc: r, iconSrc: a, gameName: i }),
                  }),
              })
            : (0, n.jsx)(l.D, {
                  innerRef: k,
                  onClick: A,
                  "aria-label": S,
                  className: c()(v.vk, g),
                  children: (0, n.jsx)(j, { imageSrc: r, iconSrc: a, gameName: i }),
              }),
    );
}
function g(e) {
    let { gameId: r, userId: a, className: s, disableInteraction: i = !1, hideTooltip: t, coverRef: l, ...u } = e,
        d = c()(v.PY, v.Ru, s);
    return i
        ? (0, n.jsx)(o.vN, {
              children: (0, n.jsx)("div", { ref: l, className: d, tabIndex: -1, children: (0, n.jsx)(j, { ...u }) }),
          })
        : (0, n.jsx)(N, { className: d, gameId: r, userId: a, hideTooltip: t, coverRef: l, ...u });
}
