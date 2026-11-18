var n = a(477900),
    s = a(582128),
    i = a(503698),
    c = a.n(i),
    t = a(866665),
    l = a(559106),
    o = a(939249),
    u = a(409626),
    d = a(692969),
    m = a(459746),
    f = a(207803),
    x = a(485745),
    h = a(792996),
    p = a(365611);
function j(e) {
    let { imageSrc: r, iconSrc: a, gameName: s } = e;
    return (0, n.jsx)(m.FQ, {
        coverUrl: r,
        iconUrl: a,
        gameName: s,
        size: m.wu.COMPACT,
        className: p.vu,
        foregroundClassName: p.$_,
    });
}
function v(e) {
    let {
            imageSrc: r,
            iconSrc: a,
            gameName: i,
            gameId: m,
            userId: v,
            className: N,
            hideTooltip: g = !1,
            coverRef: k,
        } = e,
        C = (0, x.A)(),
        P = (0, d.A)({
            location: "GameCover",
            gameId: m,
            source: u.GameProfileSources.UserProfile,
            sourceUserId: v,
            trackEntryPointImpression: !0,
        }),
        b = h.intl.formatToPlainString(h.t["8QLQB+"], { gameName: i }),
        I = s.useCallback(
            (e) => {
                if (C) {
                    (e.preventDefault(), e.stopPropagation(), (0, f.VQ)());
                    return;
                }
                P?.(e);
            },
            [C, P],
        );
    function S(e) {
        return g ? e : (0, n.jsx)(t.m, { text: i, ariaHidden: !0, children: e });
    }
    return S(
        null == P
            ? (0, n.jsx)(l.vN, {
                  children: (0, n.jsx)("div", {
                      ref: k,
                      className: N,
                      tabIndex: -1,
                      children: (0, n.jsx)(j, { imageSrc: r, iconSrc: a, gameName: i }),
                  }),
              })
            : (0, n.jsx)(o.D, {
                  innerRef: k,
                  onClick: I,
                  "aria-label": b,
                  className: c()(p.vk, N),
                  children: (0, n.jsx)(j, { imageSrc: r, iconSrc: a, gameName: i }),
              }),
    );
}
a.d(
    r,
    {},
    {
        A: function (e) {
            let {
                    gameId: r,
                    userId: a,
                    className: s,
                    disableInteraction: i = !1,
                    hideTooltip: t,
                    coverRef: o,
                    ...u
                } = e,
                d = c()(p.PY, p.Ru, s);
            return i
                ? (0, n.jsx)(l.vN, {
                      children: (0, n.jsx)("div", {
                          ref: o,
                          className: d,
                          tabIndex: -1,
                          children: (0, n.jsx)(j, { ...u }),
                      }),
                  })
                : (0, n.jsx)(v, { className: d, gameId: r, userId: a, hideTooltip: t, coverRef: o, ...u });
        },
        R: j,
    },
);
