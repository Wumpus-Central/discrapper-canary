l.d(s, { default: () => ee });
var i = l(477900),
    a = l(582128),
    n = l(224640),
    t = l(20742),
    d = l(364522),
    r = l(430690),
    c = l(688810),
    x = l(546385),
    m = l(907878),
    o = l(755571),
    u = l(742290),
    h = l(503698),
    j = l.n(h),
    v = l(17928),
    N = l(843282),
    p = l(104510),
    g = l(661531),
    f = l(834730),
    b = l(289873),
    S = l(297264),
    E = l(866665),
    I = l(290136),
    A = l(95477),
    G = l(939249),
    T = l(663417),
    k = l(975571),
    C = l(123917),
    R = l(498480),
    _ = l(42957),
    M = l(614393),
    V = l(721425),
    w = l(608266),
    L = l(349085),
    z = l(150876);
function D() {
    let { currentGame: e, planId: s } = (0, w.bv)(),
        l = (0, L.A)(e?.gameId, "cover");
    if (null == e) return null;
    let n = e?.plans.find((e) => e.id === s);
    return (0, i.jsxs)("div", {
        className: z.kL,
        children: [
            (0, i.jsxs)("div", {
                className: z.Qs,
                children: [
                    (0, i.jsxs)("div", {
                        className: z.N1,
                        children: [
                            (0, i.jsx)("img", { src: l ?? "", className: z.Sl, alt: e.name }),
                            (0, i.jsxs)("div", {
                                className: z.wx,
                                children: [
                                    (0, i.jsx)(S.D, {
                                        variant: "heading-lg/semibold",
                                        color: "text-strong",
                                        children: e.name,
                                    }),
                                    (0, i.jsx)(f.E, {
                                        variant: "text-md/medium",
                                        color: "text-subtle",
                                        children: n?.name,
                                    }),
                                ],
                            }),
                        ],
                    }),
                    null != n &&
                        (0, i.jsx)("div", {
                            className: z.wL,
                            children: n.specifications.map((e, s) =>
                                (0, i.jsxs)(
                                    a.Fragment,
                                    {
                                        children: [
                                            (0, i.jsxs)("div", {
                                                className: z._Y,
                                                children: [
                                                    (0, i.jsx)(S.D, {
                                                        variant: "heading-sm/semibold",
                                                        color: "text-strong",
                                                        children: e.title,
                                                    }),
                                                    (0, i.jsx)(f.E, {
                                                        variant: "text-sm/medium",
                                                        color: "text-muted",
                                                        children: e.description,
                                                    }),
                                                ],
                                            }),
                                            s !== (n?.specifications.length ?? 0) - 1 &&
                                                (0, i.jsx)("div", { className: z.yF }),
                                        ],
                                    },
                                    s,
                                ),
                            ),
                        }),
                    (0, i.jsx)("div", { className: z.UK, children: (0, i.jsx)(V.A, {}) }),
                ],
            }),
            (0, i.jsx)("div", { className: z.uV, children: (0, i.jsx)(M.T, { imageUrl: l ?? "" }) }),
        ],
    });
}
var O = l(628026),
    U = l(749351),
    y = l(115815),
    H = l(445927),
    K = l(231513),
    F = l(527664),
    Q = l(628049),
    P = l(652215),
    W = l(275695),
    X = l(375708),
    J = l(67539);
function q(e) {
    let { plan: s, selected: l, className: a } = e;
    return null == s
        ? null
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsxs)("div", {
                      className: j()(J.NV, a),
                      children: [
                          (0, i.jsx)("span", { children: s.name }),
                          (0, i.jsxs)("div", {
                              className: J._A,
                              children: [
                                  (0, i.jsx)(p._, { size: "xs", color: g.A.unsafe_rawColors.GUILD_BOOSTING_PINK }),
                                  (0, i.jsx)(f.E, {
                                      variant: "text-xs/medium",
                                      children: X.intl.format(W.default.kOMlHs, { boostCount: s.cost }),
                                  }),
                              ],
                          }),
                      ],
                  }),
                  !l && (0, i.jsx)("div", { className: J.S6 }),
              ],
          });
}
function Y(e) {
    let { region: s, selected: l, disabled: a, className: n } = e,
        { pingText: t, pingCircleStyle: d } = (0, y.b)(s.pingUrl);
    return null == s
        ? null
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsxs)("div", {
                      className: j()(J.NV, { [J.r9]: a }, n),
                      children: [
                          (0, i.jsx)("span", { children: s.name }),
                          (0, i.jsx)("div", {
                              className: J._A,
                              children: a
                                  ? (0, i.jsx)("span", { children: X.intl.string(W.default.aCyHe2) })
                                  : "" !== s.pingUrl
                                    ? (0, i.jsxs)(i.Fragment, {
                                          children: [
                                              (0, i.jsx)("div", { className: j()(J.Jg, d) }),
                                              (0, i.jsx)(f.E, { variant: "text-xs/medium", children: t }),
                                          ],
                                      })
                                    : null,
                          }),
                      ],
                  }),
                  !l && (0, i.jsx)("div", { className: J.S6 }),
              ],
          });
}
function B() {
    let {
        guildId: e,
        currentGame: s,
        regionId: l,
        gameServerInstance: n,
        setRegionId: t,
        name: d,
        setName: r,
        planId: c,
        setPlanId: o,
        planCost: u,
        stepLoading: h,
        error: j,
        gameProvider: p,
    } = (0, w.bv)();
    (0, m.SX)(e, n?.id, null == n ? "create" : "edit"),
        a.useEffect(() => {
            (0, R.Jr)(e);
        }, [e]);
    let g = (0, v.bG)([_.A], () => _.A.getRegions()),
        M = (0, v.bG)([_.A], () => _.A.getRegionState()),
        V = a.useMemo(
            () =>
                g
                    .sort((e, s) => (0, K.A)(e, s, M))
                    .map((e) => ({ value: e, label: e.name, disabled: !0 !== e.enabled })) ?? [],
            [M, g],
        ),
        L = a.useMemo(() => g.some((e) => "" !== e.pingUrl), [g]),
        z = a.useMemo(() => s?.plans.map((e) => ({ value: e, label: e.name })) ?? [], [s]),
        y = (0, U.A)(),
        { isValid: B, errors: Z } = (0, U.u)(d),
        $ = null != n,
        ee = (0, H.A)(n),
        es = (0, F.A)(p),
        el = null != p && null != Q.eh[p] ? Q.eh[p] : "";
    return null == s
        ? (0, i.jsx)("div", { className: J.dc, children: (0, i.jsx)(b.y, { type: b.t.SPINNING_CIRCLE }) })
        : (0, i.jsxs)("div", {
              className: J.kL,
              children: [
                  (0, i.jsxs)("div", {
                      className: J.hQ,
                      children: [
                          (0, i.jsxs)("div", {
                              className: J.V1,
                              children: [
                                  (0, i.jsxs)("div", {
                                      className: J.hd,
                                      children: [
                                          (0, i.jsxs)("div", {
                                              className: J.bV,
                                              children: [
                                                  (0, i.jsx)(S.D, {
                                                      className: J.TK,
                                                      variant: "heading-sm/semibold",
                                                      color: "text-subtle",
                                                      children: X.intl.string(W.default.rOMEZd),
                                                  }),
                                                  (0, i.jsx)(E.m, {
                                                      position: "top",
                                                      text: X.intl.string(W.default.THJY1n),
                                                      children: (0, i.jsx)("span", {
                                                          className: J.GI,
                                                          tabIndex: 0,
                                                          children: (0, i.jsx)(I.CircleQuestionIcon, { size: "xs" }),
                                                      }),
                                                  }),
                                              ],
                                          }),
                                          (0, i.jsx)(A.k, {
                                              value: d,
                                              onChange: r,
                                              placeholder: X.intl.string(W.default.ElVYr3),
                                              maxLength: Q.XF,
                                              disabled: h || !ee,
                                              error: Z.name,
                                          }),
                                      ],
                                  }),
                                  (0, i.jsxs)("div", {
                                      className: J.hd,
                                      children: [
                                          (0, i.jsxs)("div", {
                                              className: J.bV,
                                              children: [
                                                  (0, i.jsx)(S.D, {
                                                      className: J.TK,
                                                      variant: "heading-sm/semibold",
                                                      color: "text-subtle",
                                                      children: X.intl.string(W.default.nB5OZ4),
                                                  }),
                                                  (0, i.jsx)(E.m, {
                                                      position: "top",
                                                      text: X.intl.string(
                                                          null != n ? W.default["7mX0gE"] : W.default["61N+P6"],
                                                      ),
                                                      children: (0, i.jsx)("span", {
                                                          className: J.GI,
                                                          tabIndex: 0,
                                                          children: (0, i.jsx)(I.CircleQuestionIcon, { size: "xs" }),
                                                      }),
                                                  }),
                                                  !$ &&
                                                      L &&
                                                      (0, i.jsx)("div", {
                                                          className: J.Ow,
                                                          children: (0, i.jsx)(E.m, {
                                                              asContainer: !0,
                                                              position: "top",
                                                              text: X.intl.string(W.default.kGkE7a),
                                                              children: (0, i.jsx)(G.D, {
                                                                  className: J.GI,
                                                                  onClick: () => (0, R.KH)(),
                                                                  children: (0, i.jsx)(T.RefreshIcon, { size: "xs" }),
                                                              }),
                                                          }),
                                                      }),
                                              ],
                                          }),
                                          $
                                              ? (0, i.jsx)(A.k, {
                                                    value: n?.regionName,
                                                    disabled: !0,
                                                    placeholder: X.intl.string(W.default["k+RTIm"]),
                                                })
                                              : (0, i.jsx)(N.Pw, {
                                                    serialize: (e) => e.id,
                                                    isSelected: (e) => e.id === l,
                                                    isDisabled: h || !ee,
                                                    options: V,
                                                    optionClassName: J.uK,
                                                    select: (e) => t(e.id),
                                                    placeholder: X.intl.string(W.default["k+RTIm"]),
                                                    renderOptionLabel: (e) =>
                                                        (0, i.jsx)(Y, {
                                                            region: e.value,
                                                            selected: e.value.id === l,
                                                            disabled: e.disabled ?? !1,
                                                        }),
                                                    renderOptionValue: (e) =>
                                                        null == e[0]
                                                            ? null
                                                            : (0, i.jsx)(Y, {
                                                                  region: e[0].value,
                                                                  selected: e[0].value.id === l,
                                                                  disabled: e[0].disabled ?? !1,
                                                                  className: J.Uq,
                                                              }),
                                                    "data-migration-pending": !0,
                                                }),
                                      ],
                                  }),
                                  (0, i.jsxs)("div", {
                                      className: J.hd,
                                      children: [
                                          (0, i.jsxs)("div", {
                                              className: J.bV,
                                              children: [
                                                  (0, i.jsx)(S.D, {
                                                      className: J.TK,
                                                      variant: "heading-sm/semibold",
                                                      color: "text-subtle",
                                                      children: X.intl.string(W.default["K+zMYp"]),
                                                  }),
                                                  (0, i.jsx)(E.m, {
                                                      position: "top",
                                                      text: X.intl.string(W.default["/wD5IM"]),
                                                      children: (0, i.jsx)("span", {
                                                          className: J.GI,
                                                          tabIndex: 0,
                                                          children: (0, i.jsx)(I.CircleQuestionIcon, { size: "xs" }),
                                                      }),
                                                  }),
                                              ],
                                          }),
                                          (0, i.jsx)(N.Pw, {
                                              serialize: (e) => e.id,
                                              isSelected: (e) => e.id === c,
                                              isDisabled: h || !ee,
                                              options: z,
                                              optionClassName: J.uK,
                                              select: (e) => o(e.id),
                                              placeholder: X.intl.string(W.default.JdMW0i),
                                              renderOptionValue: (e) =>
                                                  (0, i.jsx)(q, {
                                                      plan: e[0]?.value,
                                                      selected: e[0]?.value?.id === c,
                                                      className: J.Uq,
                                                  }),
                                              renderOptionLabel: (e) =>
                                                  (0, i.jsx)(q, { plan: e.value, selected: e.value.id === c }),
                                              "data-migration-pending": !0,
                                          }),
                                      ],
                                  }),
                              ],
                          }),
                          (0, i.jsx)("div", { className: J.sA, children: (0, i.jsx)(D, {}) }),
                      ],
                  }),
                  null != n &&
                      0 !== u &&
                      n.planId !== c &&
                      (0, i.jsx)(x.A, {
                          className: J.et,
                          children: (0, i.jsx)(f.E, {
                              variant: "text-xs/medium",
                              children:
                                  u < 0
                                      ? X.intl.format(W.default.SorKas, { boostCount: Math.abs(u) })
                                      : X.intl.format(W.default.n2wpym, { boostCount: u }),
                          }),
                      }),
                  !ee &&
                      (0, i.jsx)(x.A, {
                          className: J.et,
                          look: x.k.WARNING,
                          children: (0, i.jsx)(f.E, {
                              variant: "text-xs/medium",
                              children: X.intl.string(W.default["/JNPWb"]),
                          }),
                      }),
                  s?.early_access === !0 &&
                      !$ &&
                      (0, i.jsx)(x.A, {
                          className: J.et,
                          look: x.k.INFO,
                          children: (0, i.jsx)(f.E, {
                              variant: "text-xs/medium",
                              children: X.intl.format(W.default.TnoBGX, { gameName: s.name }),
                          }),
                      }),
                  (0, i.jsx)(f.E, {
                      variant: "text-xs/medium",
                      color: "text-muted",
                      children:
                          null != p &&
                          X.intl.format($ ? W.default.num0a6 : W.default.p5KZDr, {
                              provider: es,
                              termsOfServiceUrl: () => (0, C.h)({ href: el }),
                              helpCenterUrl: k.A.getArticleURL(P.MVz.GAME_SERVER_HOSTING),
                          }),
                  }),
                  null != j &&
                      (0, i.jsx)(f.E, { variant: "text-xs/medium", color: "text-feedback-critical", children: j }),
                  (0, i.jsxs)(O.N4, {
                      step: Q.HS.SERVER_SETTINGS,
                      className: J.xQ,
                      children: [(0, i.jsx)(O.AI, {}), (0, i.jsx)(O.cp, { disabled: !y || !B })],
                  }),
              ],
          });
}
var Z = l(686264);
function $(e) {
    let { step: s, setFooterNode: l } = (0, w.bv)(),
        a = (0, o.U)("GameServerSetupModal"),
        { title: c, subtitle: m } = (function (e) {
            switch (e) {
                case Q.HS.SELECT_GAME:
                    return { title: X.intl.string(W.default["3vWDMz"]), subtitle: X.intl.string(W.default.Az5bjs) };
                case Q.HS.SERVER_SETTINGS:
                    return { title: X.intl.string(W.default.RLGW9z) };
            }
        })(s);
    return (0, i.jsxs)(n.d, {
        ...e,
        size: "lg",
        "aria-label": c,
        children: [
            (0, i.jsx)(t.rQ, { title: c, subtitle: m }),
            a &&
                (0, i.jsx)("div", {
                    className: Z.M,
                    children: (0, i.jsx)(x.A, { look: x.k.WARNING, children: X.intl.format(W.default.XzXjK2, {}) }),
                }),
            (0, i.jsx)(d.Ip, {
                className: Z.j,
                style: { width: Q.ST },
                children: (0, i.jsx)("div", {
                    style: { padding: Q.by },
                    children: (0, i.jsxs)(r.t, {
                        width: Q.U$,
                        activeSlide: s,
                        children: [
                            (0, i.jsx)(r.q, { id: Q.HS.SELECT_GAME, children: (0, i.jsx)(u.A, {}) }, Q.HS.SELECT_GAME),
                            (0, i.jsx)(
                                r.q,
                                { id: Q.HS.SERVER_SETTINGS, children: (0, i.jsx)(B, {}) },
                                Q.HS.SERVER_SETTINGS,
                            ),
                        ],
                    }),
                }),
            }),
            (0, i.jsx)("div", { ref: (e) => l(e) }),
        ],
    });
}
function ee(e) {
    let { analyticsLocations: s } = (0, c.Ay)();
    return (
        (0, m.wN)(e.guildId, s, e.analyticsLocation),
        (0, i.jsx)(c.f5, { value: s, children: (0, i.jsx)(w.mf, { ...e, children: (0, i.jsx)($, { ...e }) }) })
    );
}
