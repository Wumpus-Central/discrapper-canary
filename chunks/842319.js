t.d(n, { A: () => P });
var l = t(627968),
    r = t(64700),
    a = t(503698),
    i = t.n(a),
    s = t(311907),
    d = t(843282),
    o = t(990078),
    c = t(104510),
    u = t(827734),
    m = t(834730),
    x = t(289873),
    _ = t(534514),
    g = t(290136),
    h = t(292666),
    f = t(939249),
    j = t(663417),
    p = t(208039),
    N = t(975571),
    v = t(307600),
    b = t(665171),
    S = t(397400),
    E = t(588591),
    C = t(695667),
    A = t(27023),
    I = t(548392),
    G = t(298009),
    T = t(638529),
    R = t(928873),
    k = t(12663),
    w = t(285286),
    M = t(800007),
    O = t(652215),
    U = t(76660),
    L = t(985018),
    y = t(624249);
function V(e) {
    let { plan: n, selected: t, className: r } = e;
    return null == n
        ? null
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  (0, l.jsxs)("div", {
                      className: i()(y.NV, r),
                      children: [
                          (0, l.jsx)("span", { children: n.name }),
                          (0, l.jsxs)("div", {
                              className: y._A,
                              children: [
                                  (0, l.jsx)(c._, { size: "xs", color: u.A.unsafe_rawColors.GUILD_BOOSTING_PINK }),
                                  (0, l.jsx)(m.E, {
                                      variant: "text-xs/medium",
                                      children: L.intl.format(U.default.kOMlHs, { boostCount: n.cost }),
                                  }),
                              ],
                          }),
                      ],
                  }),
                  !t && (0, l.jsx)("div", { className: y.S6 }),
              ],
          });
}
function K(e) {
    let { region: n, selected: t, disabled: r, className: a } = e,
        { pingText: s, pingCircleStyle: d } = (0, T.b)(n.pingUrl);
    return null == n
        ? null
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  (0, l.jsxs)("div", {
                      className: i()(y.NV, { [y.r9]: r }, a),
                      children: [
                          (0, l.jsx)("span", { children: n.name }),
                          (0, l.jsx)("div", {
                              className: y._A,
                              children: r
                                  ? (0, l.jsx)("span", { children: L.intl.string(U.default.aCyHe2) })
                                  : "" !== n.pingUrl
                                    ? (0, l.jsxs)(l.Fragment, {
                                          children: [
                                              (0, l.jsx)("div", { className: i()(y.Jg, d) }),
                                              (0, l.jsx)(m.E, { variant: "text-xs/medium", children: s }),
                                          ],
                                      })
                                    : null,
                          }),
                      ],
                  }),
                  !t && (0, l.jsx)("div", { className: y.S6 }),
              ],
          });
}
function P() {
    let {
        guildId: e,
        currentGame: n,
        regionId: t,
        gameServerInstance: a,
        setRegionId: i,
        name: c,
        setName: u,
        planId: T,
        setPlanId: P,
        planCost: F,
        stepLoading: H,
        error: D,
        gameProvider: W,
    } = (0, A.bv)();
    (0, S.SX)(e, a?.id, null == a ? "create" : "edit"),
        r.useEffect(() => {
            (0, b.Jr)(e);
        }, [e]);
    let z = (0, s.bG)([E.A], () => E.A.getRegions()),
        B = (0, s.bG)([E.A], () => E.A.getRegionState()),
        Q = r.useMemo(
            () =>
                z
                    .sort((e, n) => (0, k.A)(e, n, B))
                    .map((e) => ({ value: e, label: e.name, disabled: !0 !== e.enabled })) ?? [],
            [B, z],
        ),
        q = r.useMemo(() => z.some((e) => "" !== e.pingUrl), [z]),
        Y = r.useMemo(() => n?.plans.map((e) => ({ value: e, label: e.name })) ?? [], [n]),
        J = (0, G.A)(),
        { isValid: X, errors: Z } = (0, G.u)(c),
        $ = null != a,
        ee = (0, R.A)(a),
        en = (0, w.A)(W),
        et = null != W && null != M.eh[W] ? M.eh[W] : "";
    return null == n
        ? (0, l.jsx)("div", { className: y.dc, children: (0, l.jsx)(x.y, { type: x.t.SPINNING_CIRCLE }) })
        : (0, l.jsxs)("div", {
              className: y.kL,
              children: [
                  (0, l.jsxs)("div", {
                      className: y.hQ,
                      children: [
                          (0, l.jsxs)("div", {
                              className: y.V1,
                              children: [
                                  (0, l.jsxs)("div", {
                                      className: y.hd,
                                      children: [
                                          (0, l.jsxs)("div", {
                                              className: y.bV,
                                              children: [
                                                  (0, l.jsx)(_.D, {
                                                      className: y.TK,
                                                      variant: "heading-sm/semibold",
                                                      color: "text-subtle",
                                                      children: L.intl.string(U.default.rOMEZd),
                                                  }),
                                                  (0, l.jsx)(o.m, {
                                                      position: "top",
                                                      text: L.intl.string(U.default.THJY1n),
                                                      children: (0, l.jsx)("span", {
                                                          className: y.GI,
                                                          tabIndex: 0,
                                                          children: (0, l.jsx)(g.c, { size: "xs" }),
                                                      }),
                                                  }),
                                              ],
                                          }),
                                          (0, l.jsx)(h.k, {
                                              value: c,
                                              onChange: u,
                                              placeholder: L.intl.string(U.default.ElVYr3),
                                              maxLength: M.XF,
                                              disabled: H || !ee,
                                              error: Z.name,
                                          }),
                                      ],
                                  }),
                                  (0, l.jsxs)("div", {
                                      className: y.hd,
                                      children: [
                                          (0, l.jsxs)("div", {
                                              className: y.bV,
                                              children: [
                                                  (0, l.jsx)(_.D, {
                                                      className: y.TK,
                                                      variant: "heading-sm/semibold",
                                                      color: "text-subtle",
                                                      children: L.intl.string(U.default.nB5OZ4),
                                                  }),
                                                  (0, l.jsx)(o.m, {
                                                      position: "top",
                                                      text: L.intl.string(
                                                          null != a ? U.default["7mX0gE"] : U.default["61N+P6"],
                                                      ),
                                                      children: (0, l.jsx)("span", {
                                                          className: y.GI,
                                                          tabIndex: 0,
                                                          children: (0, l.jsx)(g.c, { size: "xs" }),
                                                      }),
                                                  }),
                                                  !$ &&
                                                      q &&
                                                      (0, l.jsx)("div", {
                                                          className: y.Ow,
                                                          children: (0, l.jsx)(o.m, {
                                                              asContainer: !0,
                                                              position: "top",
                                                              text: L.intl.string(U.default.kGkE7a),
                                                              children: (0, l.jsx)(f.D, {
                                                                  className: y.GI,
                                                                  onClick: () => (0, b.KH)(),
                                                                  children: (0, l.jsx)(j.f, { size: "xs" }),
                                                              }),
                                                          }),
                                                      }),
                                              ],
                                          }),
                                          $
                                              ? (0, l.jsx)(h.k, {
                                                    value: a?.regionName,
                                                    disabled: !0,
                                                    placeholder: L.intl.string(U.default["k+RTIm"]),
                                                })
                                              : (0, l.jsx)(d.Pw, {
                                                    serialize: (e) => e.id,
                                                    isSelected: (e) => e.id === t,
                                                    isDisabled: H || !ee,
                                                    options: Q,
                                                    optionClassName: y.uK,
                                                    select: (e) => i(e.id),
                                                    placeholder: L.intl.string(U.default["k+RTIm"]),
                                                    renderOptionLabel: (e) =>
                                                        (0, l.jsx)(K, {
                                                            region: e.value,
                                                            selected: e.value.id === t,
                                                            disabled: e.disabled ?? !1,
                                                        }),
                                                    renderOptionValue: (e) =>
                                                        null == e[0]
                                                            ? null
                                                            : (0, l.jsx)(K, {
                                                                  region: e[0].value,
                                                                  selected: e[0].value.id === t,
                                                                  disabled: e[0].disabled ?? !1,
                                                                  className: y.Uq,
                                                              }),
                                                    "data-migration-pending": !0,
                                                }),
                                      ],
                                  }),
                                  (0, l.jsxs)("div", {
                                      className: y.hd,
                                      children: [
                                          (0, l.jsxs)("div", {
                                              className: y.bV,
                                              children: [
                                                  (0, l.jsx)(_.D, {
                                                      className: y.TK,
                                                      variant: "heading-sm/semibold",
                                                      color: "text-subtle",
                                                      children: L.intl.string(U.default["K+zMYp"]),
                                                  }),
                                                  (0, l.jsx)(o.m, {
                                                      position: "top",
                                                      text: L.intl.string(U.default["/wD5IM"]),
                                                      children: (0, l.jsx)("span", {
                                                          className: y.GI,
                                                          tabIndex: 0,
                                                          children: (0, l.jsx)(g.c, { size: "xs" }),
                                                      }),
                                                  }),
                                              ],
                                          }),
                                          (0, l.jsx)(d.Pw, {
                                              serialize: (e) => e.id,
                                              isSelected: (e) => e.id === T,
                                              isDisabled: H || !ee,
                                              options: Y,
                                              optionClassName: y.uK,
                                              select: (e) => P(e.id),
                                              placeholder: L.intl.string(U.default.JdMW0i),
                                              renderOptionValue: (e) =>
                                                  (0, l.jsx)(V, {
                                                      plan: e[0]?.value,
                                                      selected: e[0]?.value?.id === T,
                                                      className: y.Uq,
                                                  }),
                                              renderOptionLabel: (e) =>
                                                  (0, l.jsx)(V, { plan: e.value, selected: e.value.id === T }),
                                              "data-migration-pending": !0,
                                          }),
                                      ],
                                  }),
                              ],
                          }),
                          (0, l.jsx)("div", { className: y.sA, children: (0, l.jsx)(C.A, {}) }),
                      ],
                  }),
                  null != a &&
                      0 !== F &&
                      a.planId !== T &&
                      (0, l.jsx)(p.A, {
                          className: y.et,
                          children: (0, l.jsx)(m.E, {
                              variant: "text-xs/medium",
                              children:
                                  F < 0
                                      ? L.intl.format(U.default.SorKas, { boostCount: Math.abs(F) })
                                      : L.intl.format(U.default.n2wpym, { boostCount: F }),
                          }),
                      }),
                  !ee &&
                      (0, l.jsx)(p.A, {
                          className: y.et,
                          look: p.k.WARNING,
                          children: (0, l.jsx)(m.E, {
                              variant: "text-xs/medium",
                              children: L.intl.string(U.default["/JNPWb"]),
                          }),
                      }),
                  n?.early_access === !0 &&
                      !$ &&
                      (0, l.jsx)(p.A, {
                          className: y.et,
                          look: p.k.INFO,
                          children: (0, l.jsx)(m.E, {
                              variant: "text-xs/medium",
                              children: L.intl.format(U.default.TnoBGX, { gameName: n.name }),
                          }),
                      }),
                  (0, l.jsx)(m.E, {
                      variant: "text-xs/medium",
                      color: "text-muted",
                      children:
                          null != W &&
                          L.intl.format($ ? U.default.num0a6 : U.default.p5KZDr, {
                              provider: en,
                              termsOfServiceUrl: () => (0, v.h)({ href: et }),
                              helpCenterUrl: N.A.getArticleURL(O.MVz.GAME_SERVER_HOSTING),
                          }),
                  }),
                  null != D &&
                      (0, l.jsx)(m.E, { variant: "text-xs/medium", color: "text-feedback-critical", children: D }),
                  (0, l.jsxs)(I.N4, {
                      step: M.HS.SERVER_SETTINGS,
                      className: y.xQ,
                      children: [(0, l.jsx)(I.AI, {}), (0, l.jsx)(I.cp, { disabled: !J || !X })],
                  }),
              ],
          });
}
