l.d(s, { A: () => R });
var t = l(627968),
    n = l(64700),
    i = l(503698),
    a = l.n(i),
    o = l(43990),
    r = l(815021),
    c = l(534514),
    u = l(406810),
    d = l(834730),
    g = l(821609),
    h = l(509434),
    p = l(17928),
    f = l(269115),
    m = l(688810),
    _ = l(871123),
    k = l(733391),
    x = l(439303),
    C = l(832163),
    j = l(517907),
    A = l(317560),
    v = l(467884),
    E = l(920948),
    b = l(435658),
    y = l(67480),
    I = l(174459),
    S = l(371794),
    N = l(440938),
    L = l(652215),
    w = l(74564);
let R = (e) => {
    let s,
        l,
        i,
        {
            onDismiss: R,
            skuIds: D,
            tab: M,
            applicationId: O,
            headerText: T,
            logoUrl: F,
            cta: B,
            timeLeftText: P,
            analyticsSection: z,
            analyticsTileType: H,
            analyticsImpressionType: K,
            backgroundGradient: $,
        } = e;
    n.useEffect(() => {
        (0, k.ap)(O);
    }, [O]);
    let G = (0, p.bG)([C.A], () => {
            let e = C.A.getStorefrontMetadata(O);
            return e?.logoAssetId != null ? (0, S.YE)(O, e.logoAssetId, 256) : void 0;
        }, [O]),
        J = F ?? G,
        U =
            ((s = n.useRef([])),
            n.useEffect(() => {
                for (let e of D) (0, k.Pp)(O, e);
            }, [D, O]),
            (l = (0, p.bG)([y.A], () => !D.some((e) => y.A.isFetching(e)) && D.some((e) => y.A.didFetchingSkuFail(e)), [
                D,
            ])),
            n.useEffect(() => {
                l && (0, k.ap)(O);
            }, [l, O]),
            (i = (0, p.yK)([y.A, C.A], () => {
                if (D.some((e) => y.A.isFetching(e))) return s.current;
                let e = D.filter((e) => null != y.A.get(e));
                if (e.length >= D.length) return D;
                let l = C.A.getStorefrontDataForApplicationId(O);
                if (null == l || "loading" === l.state) return e;
                let t = new Set(D);
                return [
                    ...e,
                    ...(null != l.storefront
                        ? (0, _.jd)(l.storefront).filter((e) => !t.has(e) && null != y.A.get(e))
                        : []),
                ].slice(0, D.length);
            }, [O, D])),
            n.useEffect(() => {
                i.length > 0 && (s.current = i);
            }, [i]),
            i);
    (0, b.j)({ skuIds: U });
    let Y = (0, j.A)({ location: "collectibles_shop", applicationId: O }),
        V = (0, N.uM)(),
        { analyticsLocations: q } = (0, m.Ay)(),
        Q = n.useRef(null),
        W = n.useRef(!1),
        X = n.useRef(null),
        Z = n.useMemo(() => ({ pageSection: z }), [z]),
        ee = n.useCallback(
            (e, s) => {
                I.default.track(L.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: V?.sessionId,
                    page_type: M,
                    page_category: V?.pageCategory,
                    page_section: V?.pageSection,
                    tile_type: H,
                    cta_name: e,
                    ...(null != s ? { sku_id: s } : void 0),
                });
            },
            [V?.sessionId, V?.pageCategory, V?.pageSection, M, H],
        ),
        es = "button" === B.kind ? B.onClick : void 0,
        el = "button" === B.kind ? B.onMouseDown : void 0,
        et = n.useCallback(() => {
            el?.();
        }, [el]),
        en = n.useCallback(() => {
            ee("go_to_game_shop"), es?.();
        }, [ee, es]),
        ei = n.useCallback(
            (e, s) => {
                let { skuId: l, applicationId: t } = s;
                ee("card_click", l), (0, A.R)({ skuId: l, applicationId: t, isStorefront: !1, analyticsLocations: q });
            },
            [ee, q],
        ),
        ea = n.useCallback(() => {
            ee("dismiss"), R?.();
        }, [ee, R]),
        eo = n.useCallback(
            (e) => {
                !W.current &&
                    (e && null === X.current
                        ? (X.current = setTimeout(() => {
                              (W.current = !0),
                                  (X.current = null),
                                  I.default.track(L.HAw.COLLECTIBLES_TILE_IMPRESSION, {
                                      collectibles_shop_session_id: V?.sessionId,
                                      page_type: M,
                                      page_category: V?.pageCategory,
                                      page_section: V?.pageSection,
                                      type: K,
                                  });
                          }, 1e3))
                        : e || null === X.current || (clearTimeout(X.current), (X.current = null)));
            },
            [V?.sessionId, V?.pageCategory, V?.pageSection, M, K],
        );
    return (n.useEffect(
        () => () => {
            null !== X.current && (clearTimeout(X.current), (X.current = null));
        },
        [],
    ),
    0 === U.length)
        ? null
        : (0, t.jsx)(o.N, {
              theme: L.NJ8.DARKER,
              children: (e) =>
                  (0, t.jsx)(f.L, {
                      innerRef: Q,
                      onChange: eo,
                      threshold: 0,
                      children: (0, t.jsx)("div", {
                          ref: Q,
                          className: a()(w.YB, e),
                          children: (0, t.jsxs)("div", {
                              className: w.kL,
                              children: [
                                  null != $ && (0, t.jsx)("div", { className: w.D7, style: { background: $ } }),
                                  null != R &&
                                      (0, t.jsx)("div", {
                                          className: w.b,
                                          children: (0, t.jsx)(r.J, { size: "sm", variant: "icon-only", onClick: ea }),
                                      }),
                                  null != J && (0, t.jsx)("img", { className: w.wm, src: J, alt: "" }),
                                  (0, t.jsx)("div", {
                                      className: w.xf,
                                      children: (0, t.jsxs)("div", {
                                          className: w.B5,
                                          children: [
                                              (0, t.jsx)(c.D, {
                                                  className: w.R_,
                                                  variant: "heading-lg/normal",
                                                  color: "text-overlay-light",
                                                  children: (0, E.U)(T),
                                              }),
                                              (0, t.jsxs)("div", {
                                                  className: w.U9,
                                                  children: [
                                                      null != P &&
                                                          (0, t.jsxs)("div", {
                                                              className: w.f$,
                                                              children: [
                                                                  (0, t.jsx)(u.O, {
                                                                      size: "xs",
                                                                      color: "currentColor",
                                                                  }),
                                                                  (0, t.jsx)(d.E, {
                                                                      variant: "text-xs/medium",
                                                                      color: "none",
                                                                      children: P,
                                                                  }),
                                                              ],
                                                          }),
                                                      "custom" === B.kind
                                                          ? B.node
                                                          : (0, t.jsx)(g.$, {
                                                                variant: "overlay-primary",
                                                                size: "sm",
                                                                icon: h.I,
                                                                iconPosition: "end",
                                                                text: B.text,
                                                                onMouseDown: et,
                                                                onClick: en,
                                                            }),
                                                  ],
                                              }),
                                          ],
                                      }),
                                  }),
                                  (0, t.jsx)(x.E9, {
                                      newValue: Z,
                                      children: (0, t.jsx)("div", {
                                          className: w.$2,
                                          children: U.map((e, s) =>
                                              (0, t.jsx)(
                                                  v.A,
                                                  { skuId: e, positionInSection: s, onClick: ei, showOrbsOnly: Y },
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
