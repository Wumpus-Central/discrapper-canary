n.d(t, { A: () => p, R: () => m });
var i = n(627968),
    a = n(64700),
    r = n(503698),
    l = n.n(r),
    s = n(990078),
    o = n(397927),
    d = n(409626),
    c = n(692969),
    u = n(207803),
    A = n(485745),
    _ = n(985018),
    h = n(522500);
function m(e) {
    let { imageSrc: t, gameName: n } = e,
        [r, l] = a.useState(!1),
        s = n ?? _.intl.string(_.t.GIWFlF);
    return r || null == t
        ? (0, i.jsx)("div", {
              role: "img",
              "aria-label": s,
              className: h.Np,
              children: (0, i.jsx)(o.Text, {
                  variant: "text-xxs/medium",
                  lineClamp: 3,
                  "aria-hidden": !0,
                  children: s,
              }),
          })
        : (0, i.jsx)("img", { src: t, alt: s, className: h.$_, onError: () => l(!0), onLoad: () => l(!1) });
}
function g(e) {
    let { imageSrc: t, gameName: n, applicationId: r, userId: g, className: p, hideTooltip: E = !1, coverRef: I } = e,
        f = (0, A.A)(),
        C = (0, c.A)({
            location: "GameCover",
            applicationId: r,
            source: d.Ob.UserProfile,
            sourceUserId: g,
            trackEntryPointImpression: !0,
        }),
        T = n ?? _.intl.string(_.t.GIWFlF),
        N = _.intl.formatToPlainString(_.t["8QLQB+"], { gameName: T }),
        S = a.useCallback(
            (e) => {
                if (f) {
                    e.preventDefault(), e.stopPropagation(), (0, u.VQ)();
                    return;
                }
                C?.(e);
            },
            [f, C],
        ),
        x = (e) => (E ? e : (0, i.jsx)(s.m, { text: T, ariaHidden: !0, children: e }));
    return x(
        null == C
            ? (0, i.jsx)(o.vN3, {
                  children: (0, i.jsx)("div", {
                      ref: I,
                      className: p,
                      tabIndex: -1,
                      children: (0, i.jsx)(m, { imageSrc: t, gameName: n }),
                  }),
              })
            : (0, i.jsx)(o.DUT, {
                  innerRef: I,
                  onClick: S,
                  "aria-label": N,
                  className: l()(h.vk, p),
                  children: (0, i.jsx)(m, { imageSrc: t, gameName: n }),
              }),
    );
}
function p(e) {
    let {
            applicationId: t,
            userId: n,
            className: a,
            disableInteraction: r = !1,
            hideTooltip: s,
            coverRef: d,
            ...c
        } = e,
        u = l()(h.PY, a);
    return r
        ? (0, i.jsx)(o.vN3, {
              children: (0, i.jsx)("div", { ref: d, className: u, tabIndex: -1, children: (0, i.jsx)(m, { ...c }) }),
          })
        : (0, i.jsx)(g, { className: u, applicationId: t, userId: n, hideTooltip: s, coverRef: d, ...c });
}
