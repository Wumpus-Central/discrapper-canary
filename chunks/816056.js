l.d(s, { default: () => ee });
var i = l(477900),
    a = l(582128),
    n = l(224640),
    t = l(20742),
    d = l(95362),
    r = l(430690),
    c = l(688810),
    o = l(546385),
    x = l(907878),
    m = l(755571),
    u = l(68981),
    h = l(503698),
    j = l.n(h),
    v = l(855986),
    N = l(843282),
    p = l(104510),
    b = l(646514),
    g = l(834730),
    f = l(289873),
    E = l(534514),
    S = l(866665),
    I = l(290136),
    A = l(95477),
    G = l(939249),
    C = l(663417),
    T = l(975571),
    k = l(889558),
    y = l(940456),
    R = l(42957),
    _ = l(614393),
    M = l(402317),
    V = l(802671),
    w = l(349085),
    L = l(175875);
function z() {
    let { currentGame: e, planId: s } = (0, V.bv)(),
        l = (0, w.A)(e?.gameId, "cover");
    if (null == e) return null;
    let n = e?.plans.find((e) => e.id === s);
    return (0, i.jsxs)("div", {
        className: L.kL,
        children: [
            (0, i.jsxs)("div", {
                className: L.Qs,
                children: [
                    (0, i.jsxs)("div", {
                        className: L.N1,
                        children: [
                            (0, i.jsx)("img", { src: l ?? "", className: L.Sl, alt: e.name }),
                            (0, i.jsxs)("div", {
                                className: L.wx,
                                children: [
                                    (0, i.jsx)(E.D, {
                                        variant: "heading-lg/semibold",
                                        color: "text-strong",
                                        children: e.name,
                                    }),
                                    (0, i.jsx)(g.E, {
                                        variant: "body-md/medium",
                                        color: "text-subtle",
                                        children: n?.name,
                                    }),
                                ],
                            }),
                        ],
                    }),
                    null != n &&
                        (0, i.jsx)("div", {
                            className: L.wL,
                            children: n.specifications.map((e, s) =>
                                (0, i.jsxs)(
                                    a.Fragment,
                                    {
                                        children: [
                                            (0, i.jsxs)("div", {
                                                className: L._Y,
                                                children: [
                                                    (0, i.jsx)(E.D, {
                                                        variant: "heading-xs/semibold",
                                                        color: "text-strong",
                                                        children: e.title,
                                                    }),
                                                    (0, i.jsx)(g.E, {
                                                        variant: "body-sm/medium",
                                                        color: "text-muted",
                                                        children: e.description,
                                                    }),
                                                ],
                                            }),
                                            s !== (n?.specifications.length ?? 0) - 1 &&
                                                (0, i.jsx)("div", { className: L.yF }),
                                        ],
                                    },
                                    s,
                                ),
                            ),
                        }),
                    (0, i.jsx)("div", { className: L.UK, children: (0, i.jsx)(M.A, {}) }),
                ],
            }),
            (0, i.jsx)("div", { className: L.uV, children: (0, i.jsx)(_.T, { imageUrl: l ?? "" }) }),
        ],
    });
}
var D = l(628026),
    O = l(115815),
    U = l(289444),
    H = l(445927),
    K = l(231513),
    Q = l(527664),
    F = l(628049),
    P = l(652215),
    W = l(105518),
    J = l(792996),
    X = l(937714);
function q(e) {
    let { plan: s, selected: l, className: a } = e;
    return null == s
        ? null
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsxs)("div", {
                      className: j()(X.NV, a),
                      children: [
                          (0, i.jsx)("span", { children: s.name }),
                          (0, i.jsxs)("div", {
                              className: X._A,
                              children: [
                                  (0, i.jsx)(p.BoostGemIcon, {
                                      size: "xs",
                                      color: b.A.unsafe_rawColors.GUILD_BOOSTING_PINK,
                                  }),
                                  (0, i.jsx)(g.E, {
                                      variant: "body-xs/medium",
                                      children: J.intl.format(W.default.kOMlHs, { boostCount: s.cost }),
                                  }),
                              ],
                          }),
                      ],
                  }),
                  !l && (0, i.jsx)("div", { className: X.S6 }),
              ],
          });
}
function B(e) {
    let { region: s, selected: l, disabled: a, className: n } = e,
        { pingText: t, pingCircleStyle: d } = (0, O.b)(s.pingUrl);
    return null == s
        ? null
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsxs)("div", {
                      className: j()(X.NV, { [X.r9]: a }, n),
                      children: [
                          (0, i.jsx)("span", { children: s.name }),
                          (0, i.jsx)("div", {
                              className: X._A,
                              children: a
                                  ? (0, i.jsx)("span", { children: J.intl.string(W.default.aCyHe2) })
                                  : "" !== s.pingUrl
                                    ? (0, i.jsxs)(i.Fragment, {
                                          children: [
                                              (0, i.jsx)("div", { className: j()(X.Jg, d) }),
                                              (0, i.jsx)(g.E, { variant: "body-xs/medium", children: t }),
                                          ],
                                      })
                                    : null,
                          }),
                      ],
                  }),
                  !l && (0, i.jsx)("div", { className: X.S6 }),
              ],
          });
}
function Y() {
    let {
        guildId: e,
        currentGame: s,
        regionId: l,
        gameServerInstance: n,
        setRegionId: t,
        name: d,
        setName: r,
        planId: c,
        setPlanId: m,
        planCost: u,
        stepLoading: h,
        error: j,
        gameProvider: p,
    } = (0, V.bv)();
    ((0, x.SX)(e, n?.id, null == n ? "create" : "edit"),
        a.useEffect(() => {
            (0, y.Jr)(e);
        }, [e]));
    let b = (0, v.bG)([R.A], () => R.A.getRegions()),
        _ = (0, v.bG)([R.A], () => R.A.getRegionState()),
        M = a.useMemo(
            () =>
                b
                    .sort((e, s) => (0, K.A)(e, s, _))
                    .map((e) => ({ value: e, label: e.name, disabled: !0 !== e.enabled })) ?? [],
            [_, b],
        ),
        w = a.useMemo(() => b.some((e) => "" !== e.pingUrl), [b]),
        L = a.useMemo(() => s?.plans.map((e) => ({ value: e, label: e.name })) ?? [], [s]),
        O = (0, U.l)(),
        { isValid: Y, errors: Z } = (0, U.u)(d),
        $ = null != n,
        ee = (0, H.A)(n),
        es = (0, Q.A)(p),
        el = null != p && null != F.eh[p] ? F.eh[p] : "";
    return null == s
        ? (0, i.jsx)("div", { className: X.dc, children: (0, i.jsx)(f.y, { type: f.t.SPINNING_CIRCLE }) })
        : (0, i.jsxs)("div", {
              className: X.kL,
              children: [
                  (0, i.jsxs)("div", {
                      className: X.hQ,
                      children: [
                          (0, i.jsxs)("div", {
                              className: X.V1,
                              children: [
                                  (0, i.jsxs)("div", {
                                      className: X.hd,
                                      children: [
                                          (0, i.jsxs)("div", {
                                              className: X.bV,
                                              children: [
                                                  (0, i.jsx)(E.D, {
                                                      className: X.TK,
                                                      variant: "heading-xs/semibold",
                                                      color: "text-subtle",
                                                      children: J.intl.string(W.default.rOMEZd),
                                                  }),
                                                  (0, i.jsx)(S.m, {
                                                      position: "top",
                                                      text: J.intl.string(W.default.THJY1n),
                                                      children: (0, i.jsx)("span", {
                                                          className: X.GI,
                                                          tabIndex: 0,
                                                          children: (0, i.jsx)(I.CircleQuestionIcon, { size: "xs" }),
                                                      }),
                                                  }),
                                              ],
                                          }),
                                          (0, i.jsx)(A.k, {
                                              value: d,
                                              onChange: r,
                                              placeholder: J.intl.string(W.default.ElVYr3),
                                              maxLength: 32,
                                              disabled: h || !ee,
                                              error: Z.name,
                                          }),
                                      ],
                                  }),
                                  (0, i.jsxs)("div", {
                                      className: X.hd,
                                      children: [
                                          (0, i.jsxs)("div", {
                                              className: X.bV,
                                              children: [
                                                  (0, i.jsx)(E.D, {
                                                      className: X.TK,
                                                      variant: "heading-xs/semibold",
                                                      color: "text-subtle",
                                                      children: J.intl.string(W.default.nB5OZ4),
                                                  }),
                                                  (0, i.jsx)(S.m, {
                                                      position: "top",
                                                      text: J.intl.string(
                                                          null != n ? W.default["7mX0gE"] : W.default["61N+P6"],
                                                      ),
                                                      children: (0, i.jsx)("span", {
                                                          className: X.GI,
                                                          tabIndex: 0,
                                                          children: (0, i.jsx)(I.CircleQuestionIcon, { size: "xs" }),
                                                      }),
                                                  }),
                                                  !$ &&
                                                      w &&
                                                      (0, i.jsx)("div", {
                                                          className: X.Ow,
                                                          children: (0, i.jsx)(S.m, {
                                                              asContainer: !0,
                                                              position: "top",
                                                              text: J.intl.string(W.default.kGkE7a),
                                                              children: (0, i.jsx)(G.D, {
                                                                  className: X.GI,
                                                                  onClick: () => (0, y.KH)(),
                                                                  children: (0, i.jsx)(C.RefreshIcon, { size: "xs" }),
                                                              }),
                                                          }),
                                                      }),
                                              ],
                                          }),
                                          $
                                              ? (0, i.jsx)(A.k, {
                                                    value: n?.regionName,
                                                    disabled: !0,
                                                    placeholder: J.intl.string(W.default["k+RTIm"]),
                                                })
                                              : (0, i.jsx)(N.Pw, {
                                                    serialize: (e) => e.id,
                                                    isSelected: (e) => e.id === l,
                                                    isDisabled: h || !ee,
                                                    options: M,
                                                    optionClassName: X.uK,
                                                    select: (e) => t(e.id),
                                                    placeholder: J.intl.string(W.default["k+RTIm"]),
                                                    renderOptionLabel: (e) =>
                                                        (0, i.jsx)(B, {
                                                            region: e.value,
                                                            selected: e.value.id === l,
                                                            disabled: e.disabled ?? !1,
                                                        }),
                                                    renderOptionValue: (e) =>
                                                        null == e[0]
                                                            ? null
                                                            : (0, i.jsx)(B, {
                                                                  region: e[0].value,
                                                                  selected: e[0].value.id === l,
                                                                  disabled: e[0].disabled ?? !1,
                                                                  className: X.Uq,
                                                              }),
                                                    "data-migration-pending": !0,
                                                }),
                                      ],
                                  }),
                                  (0, i.jsxs)("div", {
                                      className: X.hd,
                                      children: [
                                          (0, i.jsxs)("div", {
                                              className: X.bV,
                                              children: [
                                                  (0, i.jsx)(E.D, {
                                                      className: X.TK,
                                                      variant: "heading-xs/semibold",
                                                      color: "text-subtle",
                                                      children: J.intl.string(W.default["K+zMYp"]),
                                                  }),
                                                  (0, i.jsx)(S.m, {
                                                      position: "top",
                                                      text: J.intl.string(W.default["/wD5IM"]),
                                                      children: (0, i.jsx)("span", {
                                                          className: X.GI,
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
                                              options: L,
                                              optionClassName: X.uK,
                                              select: (e) => m(e.id),
                                              placeholder: J.intl.string(W.default.JdMW0i),
                                              renderOptionValue: (e) =>
                                                  (0, i.jsx)(q, {
                                                      plan: e[0]?.value,
                                                      selected: e[0]?.value?.id === c,
                                                      className: X.Uq,
                                                  }),
                                              renderOptionLabel: (e) =>
                                                  (0, i.jsx)(q, { plan: e.value, selected: e.value.id === c }),
                                              "data-migration-pending": !0,
                                          }),
                                      ],
                                  }),
                              ],
                          }),
                          (0, i.jsx)("div", { className: X.sA, children: (0, i.jsx)(z, {}) }),
                      ],
                  }),
                  null != n &&
                      0 !== u &&
                      n.planId !== c &&
                      (0, i.jsx)(o.A, {
                          className: X.et,
                          children: (0, i.jsx)(g.E, {
                              variant: "body-xs/medium",
                              children:
                                  u < 0
                                      ? J.intl.format(W.default.SorKas, { boostCount: Math.abs(u) })
                                      : J.intl.format(W.default.n2wpym, { boostCount: u }),
                          }),
                      }),
                  !ee &&
                      (0, i.jsx)(o.A, {
                          className: X.et,
                          look: o.k.WARNING,
                          children: (0, i.jsx)(g.E, {
                              variant: "body-xs/medium",
                              children: J.intl.string(W.default["/JNPWb"]),
                          }),
                      }),
                  s?.early_access === !0 &&
                      !$ &&
                      (0, i.jsx)(o.A, {
                          className: X.et,
                          look: o.k.INFO,
                          children: (0, i.jsx)(g.E, {
                              variant: "body-xs/medium",
                              children: J.intl.format(W.default.TnoBGX, { gameName: s.name }),
                          }),
                      }),
                  (0, i.jsx)(g.E, {
                      variant: "body-xs/medium",
                      color: "text-muted",
                      children:
                          null != p &&
                          J.intl.format($ ? W.default.num0a6 : W.default.p5KZDr, {
                              provider: es,
                              termsOfServiceUrl: () => (0, k.h)({ href: el }),
                              helpCenterUrl: T.A.getArticleURL(P.MVz.GAME_SERVER_HOSTING),
                          }),
                  }),
                  null != j &&
                      (0, i.jsx)(g.E, { variant: "body-xs/medium", color: "text-feedback-critical", children: j }),
                  (0, i.jsxs)(D.N4, {
                      step: F.HS.SERVER_SETTINGS,
                      className: X.xQ,
                      children: [(0, i.jsx)(D.AI, {}), (0, i.jsx)(D.cp, { disabled: !O || !Y })],
                  }),
              ],
          });
}
var Z = l(207381);
function $(e) {
    let { step: s, setFooterNode: l } = (0, V.bv)(),
        a = (0, m.U)("GameServerSetupModal"),
        { title: c, subtitle: x } = (function (e) {
            switch (e) {
                case F.HS.SELECT_GAME:
                    return { title: J.intl.string(W.default["3vWDMz"]), subtitle: J.intl.string(W.default.Az5bjs) };
                case F.HS.SERVER_SETTINGS:
                    return { title: J.intl.string(W.default.RLGW9z) };
            }
        })(s);
    return (0, i.jsxs)(n.d, {
        ...e,
        size: "lg",
        "aria-label": c,
        children: [
            (0, i.jsx)(t.rQ, { title: c, subtitle: x }),
            a &&
                (0, i.jsx)("div", {
                    className: Z.M,
                    children: (0, i.jsx)(o.A, { look: o.k.WARNING, children: J.intl.format(W.default.XzXjK2, {}) }),
                }),
            (0, i.jsx)(d.Ip, {
                className: Z.j,
                style: { width: 680 },
                children: (0, i.jsx)("div", {
                    style: { padding: 24 },
                    children: (0, i.jsxs)(r.t, {
                        width: 632,
                        activeSlide: s,
                        children: [
                            (0, i.jsx)(r.q, { id: F.HS.SELECT_GAME, children: (0, i.jsx)(u.A, {}) }, F.HS.SELECT_GAME),
                            (0, i.jsx)(
                                r.q,
                                { id: F.HS.SERVER_SETTINGS, children: (0, i.jsx)(Y, {}) },
                                F.HS.SERVER_SETTINGS,
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
        (0, x.wN)(e.guildId, s, e.analyticsLocation),
        (0, i.jsx)(c.f5, { value: s, children: (0, i.jsx)(V.mf, { ...e, children: (0, i.jsx)($, { ...e }) }) })
    );
}
