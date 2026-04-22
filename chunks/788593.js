n.d(t, { A: () => A, R: () => p });
var i = n(627968),
    a = n(64700),
    l = n(503698),
    s = n.n(l),
    r = n(990078),
    o = n(834730),
    c = n(187322),
    d = n(939249),
    u = n(409626),
    _ = n(692969),
    g = n(207803),
    f = n(485745),
    m = n(985018),
    x = n(442356);
function p(e) {
    let { imageSrc: t, gameName: n } = e,
        [l, s] = a.useState(!1),
        r = n ?? m.intl.string(m.t.GIWFlF);
    return l || null == t
        ? (0, i.jsx)("div", {
              role: "img",
              "aria-label": r,
              className: x.Np,
              children: (0, i.jsx)(o.E, { variant: "text-xxs/medium", lineClamp: 3, "aria-hidden": !0, children: r }),
          })
        : (0, i.jsx)("img", { src: t, alt: r, className: x.$_, onError: () => s(!0), onLoad: () => s(!1) });
}
function I(e) {
    let { imageSrc: t, gameName: n, applicationId: l, userId: o, className: I, hideTooltip: A = !1, coverRef: h } = e,
        E = (0, f.A)(),
        v = (0, _.A)({
            location: "GameCover",
            applicationId: l,
            source: u.Ob.UserProfile,
            sourceUserId: o,
            trackEntryPointImpression: !0,
        }),
        C = n ?? m.intl.string(m.t.GIWFlF),
        b = m.intl.formatToPlainString(m.t["8QLQB+"], { gameName: C }),
        j = a.useCallback(
            (e) => {
                if (E) {
                    e.preventDefault(), e.stopPropagation(), (0, g.VQ)();
                    return;
                }
                v?.(e);
            },
            [E, v],
        ),
        T = (e) => (A ? e : (0, i.jsx)(r.m, { text: C, ariaHidden: !0, children: e }));
    return T(
        null == v
            ? (0, i.jsx)(c.vN, {
                  children: (0, i.jsx)("div", {
                      ref: h,
                      className: I,
                      tabIndex: -1,
                      children: (0, i.jsx)(p, { imageSrc: t, gameName: n }),
                  }),
              })
            : (0, i.jsx)(d.D, {
                  innerRef: h,
                  onClick: j,
                  "aria-label": b,
                  className: s()(x.vk, I),
                  children: (0, i.jsx)(p, { imageSrc: t, gameName: n }),
              }),
    );
}
function A(e) {
    let {
            applicationId: t,
            userId: n,
            className: a,
            disableInteraction: l = !1,
            hideTooltip: r,
            coverRef: o,
            ...d
        } = e,
        u = s()(x.PY, a);
    return l
        ? (0, i.jsx)(c.vN, {
              children: (0, i.jsx)("div", { ref: o, className: u, tabIndex: -1, children: (0, i.jsx)(p, { ...d }) }),
          })
        : (0, i.jsx)(I, { className: u, applicationId: t, userId: n, hideTooltip: r, coverRef: o, ...d });
}
