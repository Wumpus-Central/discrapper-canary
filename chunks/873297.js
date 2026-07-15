l.d(s, { A: () => w });
var t = l(627968),
    n = l(64700),
    a = l(503698),
    r = l.n(a),
    i = l(43990),
    c = l(815021),
    o = l(297264),
    u = l(406810),
    d = l(834730),
    g = l(821609),
    h = l(17928),
    p = l(269115),
    m = l(688810),
    f = l(871123),
    x = l(733391),
    _ = l(439303),
    k = l(832163),
    C = l(517907),
    j = l(317560),
    v = l(467884),
    A = l(920948),
    E = l(435658),
    b = l(67480),
    y = l(174459),
    I = l(371794),
    N = l(440938),
    S = l(652215),
    L = l(188275),
    R = l(74564);
let w = (e) => {
    let s,
        l,
        a,
        {
            onDismiss: w,
            skuIds: M,
            tab: O,
            applicationId: D,
            headerText: T,
            logoUrl: F,
            cta: B,
            timeLeftText: K,
            analyticsSection: z,
            analyticsTileType: H,
            analyticsImpressionType: P,
            backgroundGradient: $,
        } = e;
    n.useEffect(() => {
        (0, x.ap)(D);
    }, [D]);
    let G = (0, h.bG)([k.A], () => {
            let e = k.A.getStorefrontMetadata(D);
            return e?.logoAssetId != null ? (0, I.YE)(D, e.logoAssetId, 256) : void 0;
        }, [D]),
        J = F ?? G,
        U =
            ((s = n.useRef([])),
            n.useEffect(() => {
                for (let e of M) (0, x.Pp)(D, e);
            }, [M, D]),
            (l = (0, h.bG)([b.A], () => !M.some((e) => b.A.isFetching(e)) && M.some((e) => b.A.didFetchingSkuFail(e)), [
                M,
            ])),
            n.useEffect(() => {
                l && (0, x.ap)(D);
            }, [l, D]),
            (a = (0, h.yK)([b.A, k.A], () => {
                if (M.some((e) => b.A.isFetching(e))) return s.current;
                let e = M.filter((e) => null != b.A.get(e));
                if (e.length >= M.length) return M;
                let l = k.A.getStorefrontDataForApplicationId(D);
                if (null == l || "loading" === l.state) return e;
                let t = new Set(M);
                return [
                    ...e,
                    ...(null != l.storefront
                        ? (0, f.jd)(l.storefront).filter((e) => !t.has(e) && null != b.A.get(e))
                        : []),
                ].slice(0, M.length);
            }, [D, M])),
            n.useEffect(() => {
                a.length > 0 && (s.current = a);
            }, [a]),
            a);
    (0, E.j)({ skuIds: U });
    let V = (0, C.A)({ location: "collectibles_shop", applicationId: D }),
        Y = (0, N.uM)(),
        { analyticsLocations: q } = (0, m.Ay)(),
        Q = n.useRef(null),
        W = n.useRef(!1),
        X = n.useRef(null),
        Z = n.useMemo(() => ({ pageSection: z }), [z]),
        ee = n.useCallback(
            (e, s) => {
                y.default.track(S.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: Y?.sessionId,
                    page_type: O,
                    page_category: Y?.pageCategory,
                    page_section: Y?.pageSection,
                    tile_type: H,
                    cta_name: e,
                    ...(null != s ? { sku_id: s } : void 0),
                });
            },
            [Y?.sessionId, Y?.pageCategory, Y?.pageSection, O, H],
        ),
        es = "button" === B.kind ? B.onClick : void 0,
        el = "button" === B.kind ? B.onMouseDown : void 0,
        et = n.useCallback(() => {
            el?.();
        }, [el]),
        en = n.useCallback(() => {
            ee("go_to_game_shop"), es?.();
        }, [ee, es]),
        ea = n.useCallback(
            (e, s) => {
                let { skuId: l, applicationId: t } = s;
                ee("card_click", l), (0, j.R)({ skuId: l, applicationId: t, isStorefront: !1, analyticsLocations: q });
            },
            [ee, q],
        ),
        er = n.useCallback(() => {
            ee("dismiss"), w?.();
        }, [ee, w]),
        ei = n.useCallback(
            (e) => {
                !W.current &&
                    (e && null === X.current
                        ? (X.current = setTimeout(() => {
                              (W.current = !0),
                                  (X.current = null),
                                  y.default.track(S.HAw.COLLECTIBLES_TILE_IMPRESSION, {
                                      collectibles_shop_session_id: Y?.sessionId,
                                      page_type: O,
                                      page_category: Y?.pageCategory,
                                      page_section: Y?.pageSection,
                                      type: P,
                                  });
                          }, 1e3))
                        : e || null === X.current || (clearTimeout(X.current), (X.current = null)));
            },
            [Y?.sessionId, Y?.pageCategory, Y?.pageSection, O, P],
        );
    return (n.useEffect(
        () => () => {
            null !== X.current && (clearTimeout(X.current), (X.current = null));
        },
        [],
    ),
    0 === U.length)
        ? null
        : (0, t.jsx)(i.N, {
              theme: S.NJ8.DARKER,
              children: (e) =>
                  (0, t.jsx)(p.L, {
                      innerRef: Q,
                      onChange: ei,
                      threshold: 0,
                      children: (0, t.jsx)("div", {
                          ref: Q,
                          className: r()(R.YB, e),
                          children: (0, t.jsxs)("div", {
                              className: R.kL,
                              children: [
                                  null != $ && (0, t.jsx)("div", { className: R.D7, style: { background: $ } }),
                                  null != w &&
                                      (0, t.jsx)("div", {
                                          className: R.b,
                                          children: (0, t.jsx)(c.J, { size: "sm", variant: "icon-only", onClick: er }),
                                      }),
                                  null != J && (0, t.jsx)("img", { className: R.wm, src: J, alt: "" }),
                                  (0, t.jsx)("div", {
                                      className: R.xf,
                                      children: (0, t.jsxs)("div", {
                                          className: R.B5,
                                          children: [
                                              (0, t.jsx)(o.D, {
                                                  className: R.R_,
                                                  variant: "heading-lg/normal",
                                                  color: "text-overlay-light",
                                                  children: (0, A.U)(T),
                                              }),
                                              (0, t.jsxs)("div", {
                                                  className: R.U9,
                                                  children: [
                                                      null != K &&
                                                          (0, t.jsxs)("div", {
                                                              className: R.f$,
                                                              children: [
                                                                  (0, t.jsx)(u.O, {
                                                                      size: "xs",
                                                                      color: "currentColor",
                                                                  }),
                                                                  (0, t.jsx)(d.E, {
                                                                      variant: "text-xs/medium",
                                                                      color: "none",
                                                                      children: K,
                                                                  }),
                                                              ],
                                                          }),
                                                      "custom" === B.kind
                                                          ? B.node
                                                          : (0, t.jsx)(g.$, {
                                                                variant: "overlay-primary",
                                                                size: "sm",
                                                                text: B.text,
                                                                onMouseDown: et,
                                                                onClick: en,
                                                            }),
                                                  ],
                                              }),
                                          ],
                                      }),
                                  }),
                                  (0, t.jsxs)(_.E9, {
                                      newValue: Z,
                                      children: [
                                          (0, t.jsx)("div", {
                                              className: R.$2,
                                              children: U.map((e, s) =>
                                                  (0, t.jsx)(
                                                      v.A,
                                                      { skuId: e, positionInSection: s, onClick: ea, showOrbsOnly: V },
                                                      e,
                                                  ),
                                              ),
                                          }),
                                          D === L.FK &&
                                              (0, t.jsx)("div", {
                                                  className: R.Ok,
                                                  children: (0, t.jsx)(d.E, {
                                                      variant: "text-xs/medium",
                                                      color: "text-muted",
                                                      children: "\xa9 2026 MARVEL",
                                                  }),
                                              }),
                                      ],
                                  }),
                              ],
                          }),
                      }),
                  }),
          });
};
