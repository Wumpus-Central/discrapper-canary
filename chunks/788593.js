n.d(t, { A: () => E, R: () => p });
var i = n(627968),
    r = n(64700),
    a = n(503698),
    l = n.n(a),
    s = n(311907),
    o = n(990078),
    d = n(397927),
    c = n(409626),
    u = n(692969),
    A = n(958805),
    h = n(61881),
    _ = n(985018),
    m = n(461349);
function p(e) {
    let { imageSrc: t, gameName: n } = e,
        [a, l] = r.useState(!1),
        s = n ?? _.intl.string(_.t.GIWFlF);
    return a || null == t
        ? (0, i.jsx)("div", {
              role: "img",
              "aria-label": s,
              className: m.Np,
              children: (0, i.jsx)(d.Text, {
                  variant: "text-xxs/medium",
                  lineClamp: 3,
                  "aria-hidden": !0,
                  children: s,
              }),
          })
        : (0, i.jsx)("img", { src: t, alt: s, className: m.$_, onError: () => l(!0), onLoad: () => l(!1) });
}
function g(e) {
    let { imageSrc: t, gameName: n, applicationId: a, userId: g, className: E, hideTooltip: f = !1, coverRef: I } = e,
        C = (0, s.bG)([h.A], () => h.A.hasUnsavedChanges()),
        N = (0, u.A)({
            location: "GameCover",
            applicationId: a,
            source: c.Ob.UserProfile,
            sourceUserId: g,
            trackEntryPointImpression: !0,
        }),
        T = n ?? _.intl.string(_.t.GIWFlF),
        S = _.intl.formatToPlainString(_.t["8QLQB+"], { gameName: T }),
        x = r.useCallback(
            (e) => {
                if (C) {
                    e.preventDefault(), e.stopPropagation(), A.A.notifyUnsavedWidgets();
                    return;
                }
                N?.(e);
            },
            [C, N],
        ),
        v = (e) => (f ? e : (0, i.jsx)(o.m, { text: T, ariaHidden: !0, children: e }));
    return v(
        null == N
            ? (0, i.jsx)(d.vN3, {
                  children: (0, i.jsx)("div", {
                      ref: I,
                      className: E,
                      tabIndex: -1,
                      children: (0, i.jsx)(p, { imageSrc: t, gameName: n }),
                  }),
              })
            : (0, i.jsx)(d.DUT, {
                  innerRef: I,
                  onClick: x,
                  "aria-label": S,
                  className: l()(m.vk, E),
                  children: (0, i.jsx)(p, { imageSrc: t, gameName: n }),
              }),
    );
}
function E(e) {
    let {
            applicationId: t,
            userId: n,
            className: r,
            disableInteraction: a = !1,
            hideTooltip: s,
            coverRef: o,
            ...c
        } = e,
        u = l()(m.PY, r);
    return a
        ? (0, i.jsx)(d.vN3, {
              children: (0, i.jsx)("div", { ref: o, className: u, tabIndex: -1, children: (0, i.jsx)(p, { ...c }) }),
          })
        : (0, i.jsx)(g, { className: u, applicationId: t, userId: n, hideTooltip: s, coverRef: o, ...c });
}
