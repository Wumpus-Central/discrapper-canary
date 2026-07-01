i.d(t, { A: () => h, R: () => E });
var n = i(627968),
    l = i(64700),
    s = i(503698),
    r = i.n(s),
    a = i(990078),
    c = i(834730),
    u = i(187322),
    o = i(939249),
    d = i(409626),
    g = i(692969),
    m = i(207803),
    f = i(591179),
    x = i(485745),
    I = i(375708),
    p = i(442356);
function E(e) {
    let { imageSrc: t, gameName: i } = e,
        [s, r] = l.useState(!1),
        a = i ?? I.intl.string(I.t.GIWFlF);
    return s || null == t
        ? (0, n.jsx)("div", {
              role: "img",
              "aria-label": a,
              className: p.Np,
              children: (0, n.jsx)(c.E, { variant: "text-xxs/medium", lineClamp: 3, "aria-hidden": !0, children: a }),
          })
        : (0, n.jsx)("img", { src: t, alt: a, className: p.$_, onError: () => r(!0), onLoad: () => r(!1) });
}
function A(e) {
    let { imageSrc: t, gameName: i, applicationId: s, userId: c, className: A, hideTooltip: h = !1, coverRef: j } = e,
        T = !(0, f.X)("GameCover"),
        N = (0, x.A)(T),
        v = (0, g.A)({
            location: "GameCover",
            applicationId: s,
            source: d.GameProfileSources.UserProfile,
            sourceUserId: c,
            trackEntryPointImpression: !0,
        }),
        _ = i ?? I.intl.string(I.t.GIWFlF),
        S = I.intl.formatToPlainString(I.t["8QLQB+"], { gameName: _ }),
        O = l.useCallback(
            (e) => {
                if (N) {
                    e.preventDefault(), e.stopPropagation(), (0, m.VQ)();
                    return;
                }
                v?.(e);
            },
            [N, v],
        );
    function k(e) {
        return h ? e : (0, n.jsx)(a.m, { text: _, ariaHidden: !0, children: e });
    }
    return k(
        null == v
            ? (0, n.jsx)(u.vN, {
                  children: (0, n.jsx)("div", {
                      ref: j,
                      className: A,
                      tabIndex: -1,
                      children: (0, n.jsx)(E, { imageSrc: t, gameName: i }),
                  }),
              })
            : (0, n.jsx)(o.D, {
                  innerRef: j,
                  onClick: O,
                  "aria-label": S,
                  className: r()(p.vk, A),
                  children: (0, n.jsx)(E, { imageSrc: t, gameName: i }),
              }),
    );
}
function h(e) {
    let {
            applicationId: t,
            userId: i,
            className: l,
            disableInteraction: s = !1,
            hideTooltip: a,
            coverRef: c,
            ...o
        } = e,
        d = r()(p.PY, l);
    return s
        ? (0, n.jsx)(u.vN, {
              children: (0, n.jsx)("div", { ref: c, className: d, tabIndex: -1, children: (0, n.jsx)(E, { ...o }) }),
          })
        : (0, n.jsx)(A, { className: d, applicationId: t, userId: i, hideTooltip: a, coverRef: c, ...o });
}
