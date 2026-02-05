n.d(t, { A: () => M });
var l = n(627968),
    r = n(64700),
    i = n(503698),
    s = n.n(i),
    a = n(311907),
    d = n(843282),
    c = n(435371),
    o = n(397927),
    u = n(801264),
    m = n(975571),
    x = n(307600),
    g = n(665171),
    _ = n(397400),
    f = n(588591),
    h = n(695667),
    j = n(27023),
    N = n(548392),
    p = n(298009),
    v = n(638529),
    S = n(928873),
    b = n(12663),
    E = n(285286),
    C = n(800007),
    A = n(652215),
    T = n(294726),
    I = n(985018),
    G = n(513246);
function R(e) {
    let { plan: t, selected: n, className: r } = e;
    return null == t
        ? null
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  (0, l.jsxs)("div", {
                      className: s()(G.NV, r),
                      children: [
                          (0, l.jsx)("span", { children: t.name }),
                          (0, l.jsxs)("div", {
                              className: G._A,
                              children: [
                                  (0, l.jsx)(o._Jp, { size: "xs", color: o.LU0.unsafe_rawColors.GUILD_BOOSTING_PINK }),
                                  (0, l.jsx)(o.Text, {
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
    let { region: t, selected: n, disabled: r, className: i } = e,
        { pingText: a, pingCircleStyle: d } = (0, v.b)(t.pingUrl);
    return null == t
        ? null
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  (0, l.jsxs)("div", {
                      className: s()(G.NV, { [G.r9]: r }, i),
                      children: [
                          (0, l.jsx)("span", { children: t.name }),
                          (0, l.jsx)("div", {
                              className: G._A,
                              children: r
                                  ? (0, l.jsx)("span", { children: I.intl.string(T.default.aCyHe2) })
                                  : "" !== t.pingUrl
                                    ? (0, l.jsxs)(l.Fragment, {
                                          children: [
                                              (0, l.jsx)("div", { className: s()(G.Jg, d) }),
                                              (0, l.jsx)(o.Text, { variant: "text-xs/medium", children: a }),
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
function M() {
    let {
        guildId: e,
        currentGame: t,
        regionId: n,
        gameServerInstance: i,
        setRegionId: s,
        name: v,
        setName: M,
        planId: U,
        setPlanId: w,
        planCost: O,
        stepLoading: V,
        error: y,
        gameProvider: L,
    } = (0, j.bv)();
    (0, _.SX)(e, i?.id, null == i ? "create" : "edit"),
        r.useEffect(() => {
            (0, g.Jr)(e);
        }, [e]);
    let K = (0, a.bG)([f.A], () => f.A.getRegions()),
        H = (0, a.bG)([f.A], () => f.A.getRegionState()),
        P = r.useMemo(
            () =>
                K.sort((e, t) => (0, b.A)(e, t, H)).map((e) => ({
                    value: e,
                    label: e.name,
                    disabled: !0 !== e.enabled,
                })) ?? [],
            [H, K],
        ),
        F = r.useMemo(() => K.some((e) => "" !== e.pingUrl), [K]),
        W = r.useMemo(() => t?.plans.map((e) => ({ value: e, label: e.name })) ?? [], [t]),
        z = (0, p.A)(),
        { isValid: B, errors: D } = (0, p.u)(v),
        Q = null != i,
        Y = (0, S.A)(i),
        Z = (0, E.A)(L),
        q = null != L && null != C.eh[L] ? C.eh[L] : "";
    return null == t
        ? (0, l.jsx)("div", { className: G.dc, children: (0, l.jsx)(o.y$y, { type: o.tVU.SPINNING_CIRCLE }) })
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
                                                  (0, l.jsx)(o.Heading, {
                                                      className: G.TK,
                                                      variant: "heading-sm/semibold",
                                                      color: "text-subtle",
                                                      children: I.intl.string(T.default.rOMEZd),
                                                  }),
                                                  (0, l.jsx)(c.m_, {
                                                      position: "top",
                                                      text: I.intl.string(T.default.THJY1n),
                                                      children: (0, l.jsx)(o.cBN, { className: G.GI, size: "xs" }),
                                                  }),
                                              ],
                                          }),
                                          (0, l.jsx)(o.ksK, {
                                              value: v,
                                              onChange: M,
                                              placeholder: I.intl.string(T.default.ElVYr3),
                                              maxLength: C.XF,
                                              disabled: V || !Y,
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
                                                  (0, l.jsx)(o.Heading, {
                                                      className: G.TK,
                                                      variant: "heading-sm/semibold",
                                                      color: "text-subtle",
                                                      children: I.intl.string(T.default.nB5OZ4),
                                                  }),
                                                  (0, l.jsx)(c.m_, {
                                                      position: "top",
                                                      text: I.intl.string(
                                                          null != i ? T.default["7mX0gE"] : T.default["61N+P6"],
                                                      ),
                                                      children: (0, l.jsx)(o.cBN, { className: G.GI, size: "xs" }),
                                                  }),
                                                  !Q &&
                                                      F &&
                                                      (0, l.jsx)("div", {
                                                          className: G.Ow,
                                                          children: (0, l.jsx)(c.m_, {
                                                              asContainer: !0,
                                                              position: "top",
                                                              text: I.intl.string(T.default.kGkE7a),
                                                              children: (0, l.jsx)(o.DUT, {
                                                                  className: G.GI,
                                                                  onClick: () => (0, g.KH)(),
                                                                  children: (0, l.jsx)(o.fNY, { size: "xs" }),
                                                              }),
                                                          }),
                                                      }),
                                              ],
                                          }),
                                          Q
                                              ? (0, l.jsx)(o.ksK, {
                                                    value: i?.regionName,
                                                    disabled: !0,
                                                    placeholder: I.intl.string(T.default["k+RTIm"]),
                                                })
                                              : (0, l.jsx)(d.Pw, {
                                                    serialize: (e) => e.id,
                                                    isSelected: (e) => e.id === n,
                                                    isDisabled: V || Q || !Y,
                                                    options: P,
                                                    optionClassName: G.uK,
                                                    select: (e) => s(e.id),
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
                                                  (0, l.jsx)(o.Heading, {
                                                      className: G.TK,
                                                      variant: "heading-sm/semibold",
                                                      color: "text-subtle",
                                                      children: I.intl.string(T.default["K+zMYp"]),
                                                  }),
                                                  (0, l.jsx)(c.m_, {
                                                      position: "top",
                                                      text: I.intl.string(T.default["/wD5IM"]),
                                                      children: (0, l.jsx)(o.cBN, { className: G.GI, size: "xs" }),
                                                  }),
                                              ],
                                          }),
                                          (0, l.jsx)(d.Pw, {
                                              serialize: (e) => e.id,
                                              isSelected: (e) => e.id === U,
                                              isDisabled: V || !Y,
                                              options: W,
                                              optionClassName: G.uK,
                                              select: (e) => w(e.id),
                                              placeholder: I.intl.string(T.default.JdMW0i),
                                              renderOptionValue: (e) =>
                                                  (0, l.jsx)(R, {
                                                      plan: e[0]?.value,
                                                      selected: e[0]?.value?.id === U,
                                                      className: G.Uq,
                                                  }),
                                              renderOptionLabel: (e) =>
                                                  (0, l.jsx)(R, { plan: e.value, selected: e.value.id === U }),
                                              "data-migration-pending": !0,
                                          }),
                                      ],
                                  }),
                              ],
                          }),
                          (0, l.jsx)("div", { className: G.sA, children: (0, l.jsx)(h.A, {}) }),
                      ],
                  }),
                  null != i &&
                      0 !== O &&
                      (0, l.jsx)(u.A, {
                          className: G.et,
                          children: (0, l.jsx)(o.Text, {
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
                          children: (0, l.jsx)(o.Text, {
                              variant: "text-xs/medium",
                              children: I.intl.string(T.default["/JNPWb"]),
                          }),
                      }),
                  t?.early_access === !0 &&
                      !Q &&
                      (0, l.jsx)(u.A, {
                          className: G.et,
                          look: u.k.INFO,
                          children: (0, l.jsx)(o.Text, {
                              variant: "text-xs/medium",
                              children: I.intl.format(T.default.TnoBGX, { gameName: t.name }),
                          }),
                      }),
                  (0, l.jsx)(o.Text, {
                      variant: "text-xs/medium",
                      color: "text-muted",
                      children:
                          null != L &&
                          I.intl.format(Q ? T.default.num0a6 : T.default.p5KZDr, {
                              provider: Z,
                              termsOfServiceUrl: () => (0, x.h)({ href: q }),
                              helpCenterUrl: m.A.getArticleURL(A.MVz.GAME_SERVER_HOSTING),
                          }),
                  }),
                  null != y &&
                      (0, l.jsx)(o.Text, { variant: "text-xs/medium", color: "text-feedback-critical", children: y }),
                  (0, l.jsxs)(N.N4, {
                      step: C.HS.SERVER_SETTINGS,
                      className: G.xQ,
                      children: [(0, l.jsx)(N.AI, {}), (0, l.jsx)(N.cp, { disabled: !z || !B })],
                  }),
              ],
          });
}
