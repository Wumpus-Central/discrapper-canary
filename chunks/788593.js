i.d(t, { A: () => h, R: () => A });
var n = i(627968),
    l = i(64700),
    s = i(503698),
    a = i.n(s),
    r = i(990078),
    c = i(834730),
    u = i(187322),
    o = i(939249),
    d = i(409626),
    g = i(692969),
    m = i(207803),
    f = i(591179),
    x = i(485745),
    p = i(375708),
    I = i(442356);
function A(e) {
    let { imageSrc: t, gameName: i } = e,
        [s, a] = l.useState(!1),
        r = i ?? p.intl.string(p.t.GIWFlF);
    return s || null == t
        ? (0, n.jsx)("div", {
              role: "img",
              "aria-label": r,
              className: I.Np,
              children: (0, n.jsx)(c.E, { variant: "text-xxs/medium", lineClamp: 3, "aria-hidden": !0, children: r }),
          })
        : (0, n.jsx)("img", { src: t, alt: r, className: I.$_, onError: () => a(!0), onLoad: () => a(!1) });
}
function E(e) {
    let { imageSrc: t, gameName: i, applicationId: s, userId: c, className: E, hideTooltip: h = !1, coverRef: j } = e,
        N = !(0, f.X)("GameCover"),
        T = (0, x.A)(N),
        v = (0, g.A)({
            location: "GameCover",
            applicationId: s,
            source: d.Ob.UserProfile,
            sourceUserId: c,
            trackEntryPointImpression: !0,
        }),
        _ = i ?? p.intl.string(p.t.GIWFlF),
        S = p.intl.formatToPlainString(p.t["8QLQB+"], { gameName: _ }),
        O = l.useCallback(
            (e) => {
                if (T) {
                    e.preventDefault(), e.stopPropagation(), (0, m.VQ)();
                    return;
                }
                v?.(e);
            },
            [T, v],
        ),
        C = (e) => (h ? e : (0, n.jsx)(r.m, { text: _, ariaHidden: !0, children: e }));
    return C(
        null == v
            ? (0, n.jsx)(u.vN, {
                  children: (0, n.jsx)("div", {
                      ref: j,
                      className: E,
                      tabIndex: -1,
                      children: (0, n.jsx)(A, { imageSrc: t, gameName: i }),
                  }),
              })
            : (0, n.jsx)(o.D, {
                  innerRef: j,
                  onClick: O,
                  "aria-label": S,
                  className: a()(I.vk, E),
                  children: (0, n.jsx)(A, { imageSrc: t, gameName: i }),
              }),
    );
}
function h(e) {
    let {
            applicationId: t,
            userId: i,
            className: l,
            disableInteraction: s = !1,
            hideTooltip: r,
            coverRef: c,
            ...o
        } = e,
        d = a()(I.PY, l);
    return s
        ? (0, n.jsx)(u.vN, {
              children: (0, n.jsx)("div", { ref: c, className: d, tabIndex: -1, children: (0, n.jsx)(A, { ...o }) }),
          })
        : (0, n.jsx)(E, { className: d, applicationId: t, userId: i, hideTooltip: r, coverRef: c, ...o });
}
