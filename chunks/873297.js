l.d(s, { A: () => w });
var t = l(627968),
    n = l(64700),
    a = l(503698),
    r = l.n(a),
    i = l(43990),
    o = l(815021),
    c = l(297264),
    u = l(406810),
    d = l(834730),
    g = l(821609),
    h = l(17928),
    p = l(269115),
    f = l(688810),
    m = l(871123),
    _ = l(733391),
    k = l(439303),
    x = l(832163),
    C = l(517907),
    j = l(317560),
    A = l(467884),
    v = l(920948),
    E = l(435658),
    b = l(67480),
    y = l(174459),
    I = l(371794),
    S = l(440938),
    N = l(652215),
    L = l(74564);
let w = (e) => {
    let s,
        l,
        a,
        {
            onDismiss: w,
            skuIds: R,
            tab: D,
            applicationId: M,
            headerText: O,
            logoUrl: T,
            cta: F,
            timeLeftText: B,
            analyticsSection: z,
            analyticsTileType: H,
            analyticsImpressionType: K,
            backgroundGradient: P,
        } = e;
    n.useEffect(() => {
        (0, _.ap)(M);
    }, [M]);
    let $ = (0, h.bG)([x.A], () => {
            let e = x.A.getStorefrontMetadata(M);
            return e?.logoAssetId != null ? (0, I.YE)(M, e.logoAssetId, 256) : void 0;
        }, [M]),
        G = T ?? $,
        J =
            ((s = n.useRef([])),
            n.useEffect(() => {
                for (let e of R) (0, _.Pp)(M, e);
            }, [R, M]),
            (l = (0, h.bG)([b.A], () => !R.some((e) => b.A.isFetching(e)) && R.some((e) => b.A.didFetchingSkuFail(e)), [
                R,
            ])),
            n.useEffect(() => {
                l && (0, _.ap)(M);
            }, [l, M]),
            (a = (0, h.yK)([b.A, x.A], () => {
                if (R.some((e) => b.A.isFetching(e))) return s.current;
                let e = R.filter((e) => null != b.A.get(e));
                if (e.length >= R.length) return R;
                let l = x.A.getStorefrontDataForApplicationId(M);
                if (null == l || "loading" === l.state) return e;
                let t = new Set(R);
                return [
                    ...e,
                    ...(null != l.storefront
                        ? (0, m.jd)(l.storefront).filter((e) => !t.has(e) && null != b.A.get(e))
                        : []),
                ].slice(0, R.length);
            }, [M, R])),
            n.useEffect(() => {
                a.length > 0 && (s.current = a);
            }, [a]),
            a);
    (0, E.j)({ skuIds: J });
    let U = (0, C.A)({ location: "collectibles_shop", applicationId: M }),
        Y = (0, S.uM)(),
        { analyticsLocations: V } = (0, f.Ay)(),
        q = n.useRef(null),
        Q = n.useRef(!1),
        W = n.useRef(null),
        X = n.useMemo(() => ({ pageSection: z }), [z]),
        Z = n.useCallback(
            (e, s) => {
                y.default.track(N.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: Y?.sessionId,
                    page_type: D,
                    page_category: Y?.pageCategory,
                    page_section: Y?.pageSection,
                    tile_type: H,
                    cta_name: e,
                    ...(null != s ? { sku_id: s } : void 0),
                });
            },
            [Y?.sessionId, Y?.pageCategory, Y?.pageSection, D, H],
        ),
        ee = "button" === F.kind ? F.onClick : void 0,
        es = "button" === F.kind ? F.onMouseDown : void 0,
        el = n.useCallback(() => {
            es?.();
        }, [es]),
        et = n.useCallback(() => {
            Z("go_to_game_shop"), ee?.();
        }, [Z, ee]),
        en = n.useCallback(
            (e, s) => {
                let { skuId: l, applicationId: t } = s;
                Z("card_click", l), (0, j.R)({ skuId: l, applicationId: t, isStorefront: !1, analyticsLocations: V });
            },
            [Z, V],
        ),
        ea = n.useCallback(() => {
            Z("dismiss"), w?.();
        }, [Z, w]),
        er = n.useCallback(
            (e) => {
                !Q.current &&
                    (e && null === W.current
                        ? (W.current = setTimeout(() => {
                              (Q.current = !0),
                                  (W.current = null),
                                  y.default.track(N.HAw.COLLECTIBLES_TILE_IMPRESSION, {
                                      collectibles_shop_session_id: Y?.sessionId,
                                      page_type: D,
                                      page_category: Y?.pageCategory,
                                      page_section: Y?.pageSection,
                                      type: K,
                                  });
                          }, 1e3))
                        : e || null === W.current || (clearTimeout(W.current), (W.current = null)));
            },
            [Y?.sessionId, Y?.pageCategory, Y?.pageSection, D, K],
        );
    return (n.useEffect(
        () => () => {
            null !== W.current && (clearTimeout(W.current), (W.current = null));
        },
        [],
    ),
    0 === J.length)
        ? null
        : (0, t.jsx)(i.N, {
              theme: N.NJ8.DARKER,
              children: (e) =>
                  (0, t.jsx)(p.L, {
                      innerRef: q,
                      onChange: er,
                      threshold: 0,
                      children: (0, t.jsx)("div", {
                          ref: q,
                          className: r()(L.YB, e),
                          children: (0, t.jsxs)("div", {
                              className: L.kL,
                              children: [
                                  null != P && (0, t.jsx)("div", { className: L.D7, style: { background: P } }),
                                  null != w &&
                                      (0, t.jsx)("div", {
                                          className: L.b,
                                          children: (0, t.jsx)(o.J, { size: "sm", variant: "icon-only", onClick: ea }),
                                      }),
                                  null != G && (0, t.jsx)("img", { className: L.wm, src: G, alt: "" }),
                                  (0, t.jsx)("div", {
                                      className: L.xf,
                                      children: (0, t.jsxs)("div", {
                                          className: L.B5,
                                          children: [
                                              (0, t.jsx)(c.D, {
                                                  className: L.R_,
                                                  variant: "heading-lg/normal",
                                                  color: "text-overlay-light",
                                                  children: (0, v.U)(O),
                                              }),
                                              (0, t.jsxs)("div", {
                                                  className: L.U9,
                                                  children: [
                                                      null != B &&
                                                          (0, t.jsxs)("div", {
                                                              className: L.f$,
                                                              children: [
                                                                  (0, t.jsx)(u.O, {
                                                                      size: "xs",
                                                                      color: "currentColor",
                                                                  }),
                                                                  (0, t.jsx)(d.E, {
                                                                      variant: "text-xs/medium",
                                                                      color: "none",
                                                                      children: B,
                                                                  }),
                                                              ],
                                                          }),
                                                      "custom" === F.kind
                                                          ? F.node
                                                          : (0, t.jsx)(g.$, {
                                                                variant: "overlay-primary",
                                                                size: "sm",
                                                                text: F.text,
                                                                onMouseDown: el,
                                                                onClick: et,
                                                            }),
                                                  ],
                                              }),
                                          ],
                                      }),
                                  }),
                                  (0, t.jsx)(k.E9, {
                                      newValue: X,
                                      children: (0, t.jsx)("div", {
                                          className: L.$2,
                                          children: J.map((e, s) =>
                                              (0, t.jsx)(
                                                  A.A,
                                                  { skuId: e, positionInSection: s, onClick: en, showOrbsOnly: U },
                                                  e,
                                              ),
                                          ),
                                      }),
                                  }),
                              ],
                          }),
                      }),
                  }),
          });
};
