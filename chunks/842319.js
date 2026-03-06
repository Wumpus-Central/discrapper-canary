n.d(t, { A: () => w });
var l = n(627968),
    r = n(64700),
    a = n(503698),
    i = n.n(a),
    s = n(311907),
    d = n(843282),
    o = n(435371),
    c = n(397927),
    u = n(801264),
    m = n(975571),
    x = n(307600),
    _ = n(665171),
    g = n(397400),
    f = n(588591),
    h = n(695667),
    j = n(27023),
    p = n(548392),
    N = n(298009),
    v = n(638529),
    b = n(928873),
    S = n(12663),
    E = n(285286),
    C = n(800007),
    A = n(652215),
    T = n(738072),
    I = n(985018),
    G = n(964264);
function R(e) {
    let { plan: t, selected: n, className: r } = e;
    return null == t
        ? null
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  (0, l.jsxs)("div", {
                      className: i()(G.NV, r),
                      children: [
                          (0, l.jsx)("span", { children: t.name }),
                          (0, l.jsxs)("div", {
                              className: G._A,
                              children: [
                                  (0, l.jsx)(c._Jp, { size: "xs", color: c.LU0.unsafe_rawColors.GUILD_BOOSTING_PINK }),
                                  (0, l.jsx)(c.Text, {
                                      variant: "text-xs/medium",
                                      children: I.intl.format(T.default.kOMlHs, { boostCount: t.cost }),
                                  }),
                              ],
                          }),
                      ],
                  }),
                  !n && (0, l.jsx)("div", { className: G.S6 }),
              ],
          });
}
function k(e) {
    let { region: t, selected: n, disabled: r, className: a } = e,
        { pingText: s, pingCircleStyle: d } = (0, v.b)(t.pingUrl);
    return null == t
        ? null
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  (0, l.jsxs)("div", {
                      className: i()(G.NV, { [G.r9]: r }, a),
                      children: [
                          (0, l.jsx)("span", { children: t.name }),
                          (0, l.jsx)("div", {
                              className: G._A,
                              children: r
                                  ? (0, l.jsx)("span", { children: I.intl.string(T.default.aCyHe2) })
                                  : "" !== t.pingUrl
                                    ? (0, l.jsxs)(l.Fragment, {
                                          children: [
                                              (0, l.jsx)("div", { className: i()(G.Jg, d) }),
                                              (0, l.jsx)(c.Text, { variant: "text-xs/medium", children: s }),
                                          ],
                                      })
                                    : null,
                          }),
                      ],
                  }),
                  !n && (0, l.jsx)("div", { className: G.S6 }),
              ],
          });
}
function w() {
    let {
        guildId: e,
        currentGame: t,
        regionId: n,
        gameServerInstance: a,
        setRegionId: i,
        name: v,
        setName: w,
        planId: M,
        setPlanId: U,
        planCost: O,
        stepLoading: L,
        error: V,
        gameProvider: y,
    } = (0, j.bv)();
    (0, g.SX)(e, a?.id, null == a ? "create" : "edit"),
        r.useEffect(() => {
            (0, _.Jr)(e);
        }, [e]);
    let K = (0, s.bG)([f.A], () => f.A.getRegions()),
        H = (0, s.bG)([f.A], () => f.A.getRegionState()),
        P = r.useMemo(
            () =>
                K.sort((e, t) => (0, S.A)(e, t, H)).map((e) => ({
                    value: e,
                    label: e.name,
                    disabled: !0 !== e.enabled,
                })) ?? [],
            [H, K],
        ),
        F = r.useMemo(() => K.some((e) => "" !== e.pingUrl), [K]),
        W = r.useMemo(() => t?.plans.map((e) => ({ value: e, label: e.name })) ?? [], [t]),
        B = (0, N.A)(),
        { isValid: z, errors: D } = (0, N.u)(v),
        Q = null != a,
        Y = (0, b.A)(a),
        q = (0, E.A)(y),
        J = null != y && null != C.eh[y] ? C.eh[y] : "";
    return null == t
        ? (0, l.jsx)("div", { className: G.dc, children: (0, l.jsx)(c.y$y, { type: c.tVU.SPINNING_CIRCLE }) })
        : (0, l.jsxs)("div", {
              className: G.kL,
              children: [
                  (0, l.jsxs)("div", {
                      className: G.hQ,
                      children: [
                          (0, l.jsxs)("div", {
                              className: G.V1,
                              children: [
                                  (0, l.jsxs)("div", {
                                      className: G.hd,
                                      children: [
                                          (0, l.jsxs)("div", {
                                              className: G.bV,
                                              children: [
                                                  (0, l.jsx)(c.Heading, {
                                                      className: G.TK,
                                                      variant: "heading-sm/semibold",
                                                      color: "text-subtle",
                                                      children: I.intl.string(T.default.rOMEZd),
                                                  }),
                                                  (0, l.jsx)(o.m_, {
                                                      position: "top",
                                                      text: I.intl.string(T.default.THJY1n),
                                                      children: (0, l.jsx)(c.cBN, { className: G.GI, size: "xs" }),
                                                  }),
                                              ],
                                          }),
                                          (0, l.jsx)(c.ksK, {
                                              value: v,
                                              onChange: w,
                                              placeholder: I.intl.string(T.default.ElVYr3),
                                              maxLength: C.XF,
                                              disabled: L || !Y,
                                              error: D.name,
                                          }),
                                      ],
                                  }),
                                  (0, l.jsxs)("div", {
                                      className: G.hd,
                                      children: [
                                          (0, l.jsxs)("div", {
                                              className: G.bV,
                                              children: [
                                                  (0, l.jsx)(c.Heading, {
                                                      className: G.TK,
                                                      variant: "heading-sm/semibold",
                                                      color: "text-subtle",
                                                      children: I.intl.string(T.default.nB5OZ4),
                                                  }),
                                                  (0, l.jsx)(o.m_, {
                                                      position: "top",
                                                      text: I.intl.string(
                                                          null != a ? T.default["7mX0gE"] : T.default["61N+P6"],
                                                      ),
                                                      children: (0, l.jsx)(c.cBN, { className: G.GI, size: "xs" }),
                                                  }),
                                                  !Q &&
                                                      F &&
                                                      (0, l.jsx)("div", {
                                                          className: G.Ow,
                                                          children: (0, l.jsx)(o.m_, {
                                                              asContainer: !0,
                                                              position: "top",
                                                              text: I.intl.string(T.default.kGkE7a),
                                                              children: (0, l.jsx)(c.DUT, {
                                                                  className: G.GI,
                                                                  onClick: () => (0, _.KH)(),
                                                                  children: (0, l.jsx)(c.fNY, { size: "xs" }),
                                                              }),
                                                          }),
                                                      }),
                                              ],
                                          }),
                                          Q
                                              ? (0, l.jsx)(c.ksK, {
                                                    value: a?.regionName,
                                                    disabled: !0,
                                                    placeholder: I.intl.string(T.default["k+RTIm"]),
                                                })
                                              : (0, l.jsx)(d.Pw, {
                                                    serialize: (e) => e.id,
                                                    isSelected: (e) => e.id === n,
                                                    isDisabled: L || !Y,
                                                    options: P,
                                                    optionClassName: G.uK,
                                                    select: (e) => i(e.id),
                                                    placeholder: I.intl.string(T.default["k+RTIm"]),
                                                    renderOptionLabel: (e) =>
                                                        (0, l.jsx)(k, {
                                                            region: e.value,
                                                            selected: e.value.id === n,
                                                            disabled: e.disabled ?? !1,
                                                        }),
                                                    renderOptionValue: (e) =>
                                                        null == e[0]
                                                            ? null
                                                            : (0, l.jsx)(k, {
                                                                  region: e[0].value,
                                                                  selected: e[0].value.id === n,
                                                                  disabled: e[0].disabled ?? !1,
                                                                  className: G.Uq,
                                                              }),
                                                    "data-migration-pending": !0,
                                                }),
                                      ],
                                  }),
                                  (0, l.jsxs)("div", {
                                      className: G.hd,
                                      children: [
                                          (0, l.jsxs)("div", {
                                              className: G.bV,
                                              children: [
                                                  (0, l.jsx)(c.Heading, {
                                                      className: G.TK,
                                                      variant: "heading-sm/semibold",
                                                      color: "text-subtle",
                                                      children: I.intl.string(T.default["K+zMYp"]),
                                                  }),
                                                  (0, l.jsx)(o.m_, {
                                                      position: "top",
                                                      text: I.intl.string(T.default["/wD5IM"]),
                                                      children: (0, l.jsx)(c.cBN, { className: G.GI, size: "xs" }),
                                                  }),
                                              ],
                                          }),
                                          (0, l.jsx)(d.Pw, {
                                              serialize: (e) => e.id,
                                              isSelected: (e) => e.id === M,
                                              isDisabled: L || !Y,
                                              options: W,
                                              optionClassName: G.uK,
                                              select: (e) => U(e.id),
                                              placeholder: I.intl.string(T.default.JdMW0i),
                                              renderOptionValue: (e) =>
                                                  (0, l.jsx)(R, {
                                                      plan: e[0]?.value,
                                                      selected: e[0]?.value?.id === M,
                                                      className: G.Uq,
                                                  }),
                                              renderOptionLabel: (e) =>
                                                  (0, l.jsx)(R, { plan: e.value, selected: e.value.id === M }),
                                              "data-migration-pending": !0,
                                          }),
                                      ],
                                  }),
                              ],
                          }),
                          (0, l.jsx)("div", { className: G.sA, children: (0, l.jsx)(h.A, {}) }),
                      ],
                  }),
                  null != a &&
                      0 !== O &&
                      (0, l.jsx)(u.A, {
                          className: G.et,
                          children: (0, l.jsx)(c.Text, {
                              variant: "text-xs/medium",
                              children:
                                  O < 0
                                      ? I.intl.format(T.default.SorKas, { boostCount: Math.abs(O) })
                                      : I.intl.format(T.default.n2wpym, { boostCount: O }),
                          }),
                      }),
                  !Y &&
                      (0, l.jsx)(u.A, {
                          className: G.et,
                          look: u.k.WARNING,
                          children: (0, l.jsx)(c.Text, {
                              variant: "text-xs/medium",
                              children: I.intl.string(T.default["/JNPWb"]),
                          }),
                      }),
                  t?.early_access === !0 &&
                      !Q &&
                      (0, l.jsx)(u.A, {
                          className: G.et,
                          look: u.k.INFO,
                          children: (0, l.jsx)(c.Text, {
                              variant: "text-xs/medium",
                              children: I.intl.format(T.default.TnoBGX, { gameName: t.name }),
                          }),
                      }),
                  (0, l.jsx)(c.Text, {
                      variant: "text-xs/medium",
                      color: "text-muted",
                      children:
                          null != y &&
                          I.intl.format(Q ? T.default.num0a6 : T.default.p5KZDr, {
                              provider: q,
                              termsOfServiceUrl: () => (0, x.h)({ href: J }),
                              helpCenterUrl: m.A.getArticleURL(A.MVz.GAME_SERVER_HOSTING),
                          }),
                  }),
                  null != V &&
                      (0, l.jsx)(c.Text, { variant: "text-xs/medium", color: "text-feedback-critical", children: V }),
                  (0, l.jsxs)(p.N4, {
                      step: C.HS.SERVER_SETTINGS,
                      className: G.xQ,
                      children: [(0, l.jsx)(p.AI, {}), (0, l.jsx)(p.cp, { disabled: !B || !z })],
                  }),
              ],
          });
}
