l.d(s, { default: () => ee });
var i = l(477900),
    a = l(582128),
    t = l(224640),
    n = l(20742),
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
    A = l(290136),
    I = l(95477),
    G = l(939249),
    T = l(663417),
    k = l(975571),
    _ = l(123917),
    R = l(498480),
    C = l(42957),
    M = l(614393),
    V = l(721425),
    w = l(608266),
    L = l(349085),
    z = l(150876);
function D() {
    let { currentGame: e, planId: s } = (0, w.bv)(),
        l = (0, L.A)(e?.gameId, "cover");
    if (null == e) return null;
    let t = e?.plans.find((e) => e.id === s);
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
                                        children: t?.name,
                                    }),
                                ],
                            }),
                        ],
                    }),
                    null != t &&
                        (0, i.jsx)("div", {
                            className: z.wL,
                            children: t.specifications.map((e, s) =>
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
                                            s !== (t?.specifications.length ?? 0) - 1 &&
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
    P = l(628049),
    W = l(652215),
    X = l(275695),
    J = l(375708),
    q = l(67539);
function Q(e) {
    let { plan: s, selected: l, className: a } = e;
    return null == s
        ? null
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsxs)("div", {
                      className: j()(q.NV, a),
                      children: [
                          (0, i.jsx)("span", { children: s.name }),
                          (0, i.jsxs)("div", {
                              className: q._A,
                              children: [
                                  (0, i.jsx)(p._, { size: "xs", color: g.A.unsafe_rawColors.GUILD_BOOSTING_PINK }),
                                  (0, i.jsx)(f.E, {
                                      variant: "text-xs/medium",
                                      children: J.intl.format(X.default.kOMlHs, { boostCount: s.cost }),
                                  }),
                              ],
                          }),
                      ],
                  }),
                  !l && (0, i.jsx)("div", { className: q.S6 }),
              ],
          });
}
function Y(e) {
    let { region: s, selected: l, disabled: a, className: t } = e,
        { pingText: n, pingCircleStyle: d } = (0, y.b)(s.pingUrl);
    return null == s
        ? null
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsxs)("div", {
                      className: j()(q.NV, { [q.r9]: a }, t),
                      children: [
                          (0, i.jsx)("span", { children: s.name }),
                          (0, i.jsx)("div", {
                              className: q._A,
                              children: a
                                  ? (0, i.jsx)("span", { children: J.intl.string(X.default.aCyHe2) })
                                  : "" !== s.pingUrl
                                    ? (0, i.jsxs)(i.Fragment, {
                                          children: [
                                              (0, i.jsx)("div", { className: j()(q.Jg, d) }),
                                              (0, i.jsx)(f.E, { variant: "text-xs/medium", children: n }),
                                          ],
                                      })
                                    : null,
                          }),
                      ],
                  }),
                  !l && (0, i.jsx)("div", { className: q.S6 }),
              ],
          });
}
function B() {
    let {
        guildId: e,
        currentGame: s,
        regionId: l,
        gameServerInstance: t,
        setRegionId: n,
        name: d,
        setName: r,
        planId: c,
        setPlanId: o,
        planCost: u,
        stepLoading: h,
        error: j,
        gameProvider: p,
    } = (0, w.bv)();
    (0, m.SX)(e, t?.id, null == t ? "create" : "edit"),
        a.useEffect(() => {
            (0, R.Jr)(e);
        }, [e]);
    let g = (0, v.bG)([C.A], () => C.A.getRegions()),
        M = (0, v.bG)([C.A], () => C.A.getRegionState()),
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
        $ = null != t,
        ee = (0, H.A)(t),
        es = (0, F.A)(p),
        el = null != p && null != P.eh[p] ? P.eh[p] : "";
    return null == s
        ? (0, i.jsx)("div", { className: q.dc, children: (0, i.jsx)(b.y, { type: b.t.SPINNING_CIRCLE }) })
        : (0, i.jsxs)("div", {
              className: q.kL,
              children: [
                  (0, i.jsxs)("div", {
                      className: q.hQ,
                      children: [
                          (0, i.jsxs)("div", {
                              className: q.V1,
                              children: [
                                  (0, i.jsxs)("div", {
                                      className: q.hd,
                                      children: [
                                          (0, i.jsxs)("div", {
                                              className: q.bV,
                                              children: [
                                                  (0, i.jsx)(S.D, {
                                                      className: q.TK,
                                                      variant: "heading-sm/semibold",
                                                      color: "text-subtle",
                                                      children: J.intl.string(X.default.rOMEZd),
                                                  }),
                                                  (0, i.jsx)(E.m, {
                                                      position: "top",
                                                      text: J.intl.string(X.default.THJY1n),
                                                      children: (0, i.jsx)("span", {
                                                          className: q.GI,
                                                          tabIndex: 0,
                                                          children: (0, i.jsx)(A.c, { size: "xs" }),
                                                      }),
                                                  }),
                                              ],
                                          }),
                                          (0, i.jsx)(I.k, {
                                              value: d,
                                              onChange: r,
                                              placeholder: J.intl.string(X.default.ElVYr3),
                                              maxLength: P.XF,
                                              disabled: h || !ee,
                                              error: Z.name,
                                          }),
                                      ],
                                  }),
                                  (0, i.jsxs)("div", {
                                      className: q.hd,
                                      children: [
                                          (0, i.jsxs)("div", {
                                              className: q.bV,
                                              children: [
                                                  (0, i.jsx)(S.D, {
                                                      className: q.TK,
                                                      variant: "heading-sm/semibold",
                                                      color: "text-subtle",
                                                      children: J.intl.string(X.default.nB5OZ4),
                                                  }),
                                                  (0, i.jsx)(E.m, {
                                                      position: "top",
                                                      text: J.intl.string(
                                                          null != t ? X.default["7mX0gE"] : X.default["61N+P6"],
                                                      ),
                                                      children: (0, i.jsx)("span", {
                                                          className: q.GI,
                                                          tabIndex: 0,
                                                          children: (0, i.jsx)(A.c, { size: "xs" }),
                                                      }),
                                                  }),
                                                  !$ &&
                                                      L &&
                                                      (0, i.jsx)("div", {
                                                          className: q.Ow,
                                                          children: (0, i.jsx)(E.m, {
                                                              asContainer: !0,
                                                              position: "top",
                                                              text: J.intl.string(X.default.kGkE7a),
                                                              children: (0, i.jsx)(G.D, {
                                                                  className: q.GI,
                                                                  onClick: () => (0, R.KH)(),
                                                                  children: (0, i.jsx)(T.f, { size: "xs" }),
                                                              }),
                                                          }),
                                                      }),
                                              ],
                                          }),
                                          $
                                              ? (0, i.jsx)(I.k, {
                                                    value: t?.regionName,
                                                    disabled: !0,
                                                    placeholder: J.intl.string(X.default["k+RTIm"]),
                                                })
                                              : (0, i.jsx)(N.Pw, {
                                                    serialize: (e) => e.id,
                                                    isSelected: (e) => e.id === l,
                                                    isDisabled: h || !ee,
                                                    options: V,
                                                    optionClassName: q.uK,
                                                    select: (e) => n(e.id),
                                                    placeholder: J.intl.string(X.default["k+RTIm"]),
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
                                                                  className: q.Uq,
                                                              }),
                                                    "data-migration-pending": !0,
                                                }),
                                      ],
                                  }),
                                  (0, i.jsxs)("div", {
                                      className: q.hd,
                                      children: [
                                          (0, i.jsxs)("div", {
                                              className: q.bV,
                                              children: [
                                                  (0, i.jsx)(S.D, {
                                                      className: q.TK,
                                                      variant: "heading-sm/semibold",
                                                      color: "text-subtle",
                                                      children: J.intl.string(X.default["K+zMYp"]),
                                                  }),
                                                  (0, i.jsx)(E.m, {
                                                      position: "top",
                                                      text: J.intl.string(X.default["/wD5IM"]),
                                                      children: (0, i.jsx)("span", {
                                                          className: q.GI,
                                                          tabIndex: 0,
                                                          children: (0, i.jsx)(A.c, { size: "xs" }),
                                                      }),
                                                  }),
                                              ],
                                          }),
                                          (0, i.jsx)(N.Pw, {
                                              serialize: (e) => e.id,
                                              isSelected: (e) => e.id === c,
                                              isDisabled: h || !ee,
                                              options: z,
                                              optionClassName: q.uK,
                                              select: (e) => o(e.id),
                                              placeholder: J.intl.string(X.default.JdMW0i),
                                              renderOptionValue: (e) =>
                                                  (0, i.jsx)(Q, {
                                                      plan: e[0]?.value,
                                                      selected: e[0]?.value?.id === c,
                                                      className: q.Uq,
                                                  }),
                                              renderOptionLabel: (e) =>
                                                  (0, i.jsx)(Q, { plan: e.value, selected: e.value.id === c }),
                                              "data-migration-pending": !0,
                                          }),
                                      ],
                                  }),
                              ],
                          }),
                          (0, i.jsx)("div", { className: q.sA, children: (0, i.jsx)(D, {}) }),
                      ],
                  }),
                  null != t &&
                      0 !== u &&
                      t.planId !== c &&
                      (0, i.jsx)(x.A, {
                          className: q.et,
                          children: (0, i.jsx)(f.E, {
                              variant: "text-xs/medium",
                              children:
                                  u < 0
                                      ? J.intl.format(X.default.SorKas, { boostCount: Math.abs(u) })
                                      : J.intl.format(X.default.n2wpym, { boostCount: u }),
                          }),
                      }),
                  !ee &&
                      (0, i.jsx)(x.A, {
                          className: q.et,
                          look: x.k.WARNING,
                          children: (0, i.jsx)(f.E, {
                              variant: "text-xs/medium",
                              children: J.intl.string(X.default["/JNPWb"]),
                          }),
                      }),
                  s?.early_access === !0 &&
                      !$ &&
                      (0, i.jsx)(x.A, {
                          className: q.et,
                          look: x.k.INFO,
                          children: (0, i.jsx)(f.E, {
                              variant: "text-xs/medium",
                              children: J.intl.format(X.default.TnoBGX, { gameName: s.name }),
                          }),
                      }),
                  (0, i.jsx)(f.E, {
                      variant: "text-xs/medium",
                      color: "text-muted",
                      children:
                          null != p &&
                          J.intl.format($ ? X.default.num0a6 : X.default.p5KZDr, {
                              provider: es,
                              termsOfServiceUrl: () => (0, _.h)({ href: el }),
                              helpCenterUrl: k.A.getArticleURL(W.MVz.GAME_SERVER_HOSTING),
                          }),
                  }),
                  null != j &&
                      (0, i.jsx)(f.E, { variant: "text-xs/medium", color: "text-feedback-critical", children: j }),
                  (0, i.jsxs)(O.N4, {
                      step: P.HS.SERVER_SETTINGS,
                      className: q.xQ,
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
                case P.HS.SELECT_GAME:
                    return { title: J.intl.string(X.default["3vWDMz"]), subtitle: J.intl.string(X.default.Az5bjs) };
                case P.HS.SERVER_SETTINGS:
                    return { title: J.intl.string(X.default.RLGW9z) };
            }
        })(s);
    return (0, i.jsxs)(t.d, {
        ...e,
        size: "lg",
        "aria-label": c,
        children: [
            (0, i.jsx)(n.rQ, { title: c, subtitle: m }),
            a &&
                (0, i.jsx)("div", {
                    className: Z.M,
                    children: (0, i.jsx)(x.A, { look: x.k.WARNING, children: J.intl.format(X.default.XzXjK2, {}) }),
                }),
            (0, i.jsx)(d.Ip, {
                className: Z.j,
                style: { width: P.ST },
                children: (0, i.jsx)("div", {
                    style: { padding: P.by },
                    children: (0, i.jsxs)(r.t, {
                        width: P.U$,
                        activeSlide: s,
                        children: [
                            (0, i.jsx)(r.q, { id: P.HS.SELECT_GAME, children: (0, i.jsx)(u.A, {}) }, P.HS.SELECT_GAME),
                            (0, i.jsx)(
                                r.q,
                                { id: P.HS.SERVER_SETTINGS, children: (0, i.jsx)(B, {}) },
                                P.HS.SERVER_SETTINGS,
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
