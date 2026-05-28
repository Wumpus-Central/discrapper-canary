i.d(t, { A: () => E, R: () => A });
var n = i(627968),
    l = i(64700),
    s = i(503698),
    a = i.n(s),
    r = i(990078),
    c = i(834730),
    o = i(187322),
    u = i(939249),
    d = i(409626),
    m = i(692969),
    g = i(207803),
    f = i(591179),
    x = i(485745),
    I = i(375708),
    p = i(442356);
function A(e) {
    let { imageSrc: t, gameName: i } = e,
        [s, a] = l.useState(!1),
        r = i ?? I.intl.string(I.t.GIWFlF);
    return s || null == t
        ? (0, n.jsx)("div", {
              role: "img",
              "aria-label": r,
              className: p.Np,
              children: (0, n.jsx)(c.E, { variant: "text-xxs/medium", lineClamp: 3, "aria-hidden": !0, children: r }),
          })
        : (0, n.jsx)("img", { src: t, alt: r, className: p.$_, onError: () => a(!0), onLoad: () => a(!1) });
}
function h(e) {
    let { imageSrc: t, gameName: i, applicationId: s, userId: c, className: h, hideTooltip: E = !1, coverRef: j } = e,
        N = !(0, f.X)("GameCover"),
        v = (0, x.A)(N),
        T = (0, m.A)({
            location: "GameCover",
            applicationId: s,
            source: d.Ob.UserProfile,
            sourceUserId: c,
            trackEntryPointImpression: !0,
        }),
        S = i ?? I.intl.string(I.t.GIWFlF),
        _ = I.intl.formatToPlainString(I.t["8QLQB+"], { gameName: S }),
        C = l.useCallback(
            (e) => {
                if (v) {
                    e.preventDefault(), e.stopPropagation(), (0, g.VQ)();
                    return;
                }
                T?.(e);
            },
            [v, T],
        ),
        O = (e) => (E ? e : (0, n.jsx)(r.m, { text: S, ariaHidden: !0, children: e }));
    return O(
        null == T
            ? (0, n.jsx)(o.vN, {
                  children: (0, n.jsx)("div", {
                      ref: j,
                      className: h,
                      tabIndex: -1,
                      children: (0, n.jsx)(A, { imageSrc: t, gameName: i }),
                  }),
              })
            : (0, n.jsx)(u.D, {
                  innerRef: j,
                  onClick: C,
                  "aria-label": _,
                  className: a()(p.vk, h),
                  children: (0, n.jsx)(A, { imageSrc: t, gameName: i }),
              }),
    );
}
function E(e) {
    let {
            applicationId: t,
            userId: i,
            className: l,
            disableInteraction: s = !1,
            hideTooltip: r,
            coverRef: c,
            ...u
        } = e,
        d = a()(p.PY, l);
    return s
        ? (0, n.jsx)(o.vN, {
              children: (0, n.jsx)("div", { ref: c, className: d, tabIndex: -1, children: (0, n.jsx)(A, { ...u }) }),
          })
        : (0, n.jsx)(h, { className: d, applicationId: t, userId: i, hideTooltip: r, coverRef: c, ...u });
}
