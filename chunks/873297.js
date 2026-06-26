t.d(s, { A: () => L });
var l = t(627968),
    n = t(64700),
    a = t(503698),
    i = t.n(a),
    r = t(43990),
    o = t(815021),
    c = t(534514),
    u = t(406810),
    d = t(834730),
    g = t(821609),
    p = t(509434),
    h = t(17928),
    f = t(269115),
    m = t(688810),
    _ = t(871123),
    k = t(733391),
    x = t(439303),
    C = t(832163),
    j = t(317560),
    A = t(328100),
    v = t(920948),
    E = t(435658),
    y = t(67480),
    I = t(174459),
    b = t(371794),
    S = t(440938),
    N = t(652215),
    w = t(74564);
let L = (e) => {
    let s,
        t,
        a,
        {
            onDismiss: L,
            skuIds: R,
            tab: D,
            applicationId: M,
            headerText: T,
            logoUrl: F,
            cta: O,
            timeLeftText: B,
            analyticsSection: P,
            analyticsTileType: z,
            analyticsImpressionType: H,
            backgroundGradient: K,
        } = e;
    n.useEffect(() => {
        (0, k.ap)(M);
    }, [M]);
    let $ = (0, h.bG)([C.A], () => {
            let e = C.A.getStorefrontMetadata(M);
            return e?.logoAssetId != null ? (0, b.YE)(M, e.logoAssetId, 256) : void 0;
        }, [M]),
        G = F ?? $,
        J =
            ((s = n.useRef([])),
            n.useEffect(() => {
                for (let e of R) (0, k.Pp)(M, e);
            }, [R, M]),
            (t = (0, h.bG)([y.A], () => !R.some((e) => y.A.isFetching(e)) && R.some((e) => y.A.didFetchingSkuFail(e)), [
                R,
            ])),
            n.useEffect(() => {
                t && (0, k.ap)(M);
            }, [t, M]),
            (a = (0, h.yK)([y.A, C.A], () => {
                if (R.some((e) => y.A.isFetching(e))) return s.current;
                let e = R.filter((e) => null != y.A.get(e));
                if (e.length >= R.length) return R;
                let t = C.A.getStorefrontDataForApplicationId(M);
                if (null == t || "loading" === t.state) return e;
                let l = new Set(R);
                return [
                    ...e,
                    ...(null != t.storefront
                        ? (0, _.jd)(t.storefront).filter((e) => !l.has(e) && null != y.A.get(e))
                        : []),
                ].slice(0, R.length);
            }, [M, R])),
            n.useEffect(() => {
                a.length > 0 && (s.current = a);
            }, [a]),
            a);
    (0, E.j)({ skuIds: J });
    let U = (0, S.uM)(),
        { analyticsLocations: Y } = (0, m.Ay)(),
        V = n.useRef(null),
        q = n.useRef(!1),
        Q = n.useRef(null),
        W = n.useMemo(() => ({ pageSection: P }), [P]),
        X = n.useCallback(
            (e, s) => {
                I.default.track(N.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: U?.sessionId,
                    page_type: D,
                    page_category: U?.pageCategory,
                    page_section: U?.pageSection,
                    tile_type: z,
                    cta_name: e,
                    ...(null != s ? { sku_id: s } : void 0),
                });
            },
            [U?.sessionId, U?.pageCategory, U?.pageSection, D, z],
        ),
        Z = "button" === O.kind ? O.onClick : void 0,
        ee = "button" === O.kind ? O.onMouseDown : void 0,
        es = n.useCallback(() => {
            ee?.();
        }, [ee]),
        et = n.useCallback(() => {
            X("go_to_game_shop"), Z?.();
        }, [X, Z]),
        el = n.useCallback(
            (e, s) => {
                let { skuId: t, applicationId: l } = s;
                X("card_click", t), (0, j.R)({ skuId: t, applicationId: l, isStorefront: !1, analyticsLocations: Y });
            },
            [X, Y],
        ),
        en = n.useCallback(() => {
            X("dismiss"), L();
        }, [X, L]),
        ea = n.useCallback(
            (e) => {
                !q.current &&
                    (e && null === Q.current
                        ? (Q.current = setTimeout(() => {
                              (q.current = !0),
                                  (Q.current = null),
                                  I.default.track(N.HAw.COLLECTIBLES_TILE_IMPRESSION, {
                                      collectibles_shop_session_id: U?.sessionId,
                                      page_type: D,
                                      page_category: U?.pageCategory,
                                      page_section: U?.pageSection,
                                      type: H,
                                  });
                          }, 1e3))
                        : e || null === Q.current || (clearTimeout(Q.current), (Q.current = null)));
            },
            [U?.sessionId, U?.pageCategory, U?.pageSection, D, H],
        );
    return (n.useEffect(
        () => () => {
            null !== Q.current && (clearTimeout(Q.current), (Q.current = null));
        },
        [],
    ),
    0 === J.length)
        ? null
        : (0, l.jsx)(r.N, {
              theme: N.NJ8.DARKER,
              children: (e) =>
                  (0, l.jsx)(f.L, {
                      innerRef: V,
                      onChange: ea,
                      threshold: 0,
                      children: (0, l.jsx)("div", {
                          ref: V,
                          className: i()(w.YB, e),
                          children: (0, l.jsxs)("div", {
                              className: w.kL,
                              children: [
                                  null != K && (0, l.jsx)("div", { className: w.D7, style: { background: K } }),
                                  (0, l.jsx)("div", {
                                      className: w.b,
                                      children: (0, l.jsx)(o.J, { size: "sm", variant: "icon-only", onClick: en }),
                                  }),
                                  null != G && (0, l.jsx)("img", { className: w.wm, src: G, alt: "" }),
                                  (0, l.jsx)("div", {
                                      className: w.xf,
                                      children: (0, l.jsxs)("div", {
                                          className: w.B5,
                                          children: [
                                              (0, l.jsx)(c.D, {
                                                  className: w.R_,
                                                  variant: "heading-lg/normal",
                                                  color: "always-white",
                                                  children: (0, v.U)(T),
                                              }),
                                              (0, l.jsxs)("div", {
                                                  className: w.U9,
                                                  children: [
                                                      null != B &&
                                                          (0, l.jsxs)("div", {
                                                              className: w.f$,
                                                              children: [
                                                                  (0, l.jsx)(u.O, {
                                                                      size: "xs",
                                                                      color: "currentColor",
                                                                  }),
                                                                  (0, l.jsx)(d.E, {
                                                                      variant: "text-xs/medium",
                                                                      color: "none",
                                                                      children: B,
                                                                  }),
                                                              ],
                                                          }),
                                                      "custom" === O.kind
                                                          ? O.node
                                                          : (0, l.jsx)(g.$, {
                                                                variant: "overlay-primary",
                                                                size: "sm",
                                                                icon: p.I,
                                                                iconPosition: "end",
                                                                text: O.text,
                                                                onMouseDown: es,
                                                                onClick: et,
                                                            }),
                                                  ],
                                              }),
                                          ],
                                      }),
                                  }),
                                  (0, l.jsx)(x.E9, {
                                      newValue: W,
                                      children: (0, l.jsx)("div", {
                                          className: w.$2,
                                          children: J.map((e, s) =>
                                              (0, l.jsx)(A.A, { skuId: e, positionInSection: s, onClick: el }, e),
                                          ),
                                      }),
                                  }),
                              ],
                          }),
                      }),
                  }),
          });
};
