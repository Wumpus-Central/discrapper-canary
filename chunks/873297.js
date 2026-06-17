t.d(s, { A: () => w });
var l = t(627968),
    n = t(64700),
    i = t(503698),
    a = t.n(i),
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
    v = t(470285),
    E = t(67480),
    b = t(174459),
    y = t(371794),
    I = t(440938),
    S = t(652215),
    N = t(74564);
let w = (e) => {
    let s,
        t,
        i,
        {
            onDismiss: w,
            skuIds: L,
            tab: R,
            applicationId: D,
            headerText: M,
            logoUrl: T,
            cta: F,
            timeLeftText: O,
            analyticsSection: B,
            analyticsTileType: P,
            analyticsImpressionType: z,
            backgroundGradient: H,
        } = e;
    n.useEffect(() => {
        (0, k.ap)(D);
    }, [D]);
    let K = (0, h.bG)([C.A], () => {
            let e = C.A.getStorefrontMetadata(D);
            return e?.logoAssetId != null ? (0, y.YE)(D, e.logoAssetId, 256) : void 0;
        }, [D]),
        $ = T ?? K,
        G =
            ((s = n.useRef([])),
            n.useEffect(() => {
                for (let e of L) (0, k.Pp)(D, e);
            }, [L, D]),
            (t = (0, h.bG)([E.A], () => !L.some((e) => E.A.isFetching(e)) && L.some((e) => E.A.didFetchingSkuFail(e)), [
                L,
            ])),
            n.useEffect(() => {
                t && (0, k.ap)(D);
            }, [t, D]),
            (i = (0, h.yK)([E.A, C.A], () => {
                if (L.some((e) => E.A.isFetching(e))) return s.current;
                let e = L.filter((e) => null != E.A.get(e));
                if (e.length >= L.length) return L;
                let t = C.A.getStorefrontDataForApplicationId(D);
                if (null == t || "loading" === t.state) return e;
                let l = new Set(L);
                return [
                    ...e,
                    ...(null != t.storefront
                        ? (0, _.jd)(t.storefront).filter((e) => !l.has(e) && null != E.A.get(e))
                        : []),
                ].slice(0, L.length);
            }, [D, L])),
            n.useEffect(() => {
                i.length > 0 && (s.current = i);
            }, [i]),
            i);
    (0, v.j)({ skuIds: G });
    let J = (0, I.uM)(),
        { analyticsLocations: Y } = (0, m.Ay)(),
        U = n.useRef(null),
        V = n.useRef(!1),
        q = n.useRef(null),
        Q = n.useMemo(() => ({ pageSection: B }), [B]),
        W = n.useCallback(
            (e, s) => {
                b.default.track(S.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: J?.sessionId,
                    page_type: R,
                    page_category: J?.pageCategory,
                    page_section: J?.pageSection,
                    tile_type: P,
                    cta_name: e,
                    ...(null != s ? { sku_id: s } : void 0),
                });
            },
            [J?.sessionId, J?.pageCategory, J?.pageSection, R, P],
        ),
        X = "button" === F.kind ? F.onClick : void 0,
        Z = "button" === F.kind ? F.onMouseDown : void 0,
        ee = n.useCallback(() => {
            Z?.();
        }, [Z]),
        es = n.useCallback(() => {
            W("go_to_game_shop"), X?.();
        }, [W, X]),
        et = n.useCallback(
            (e, s) => {
                let { skuId: t, applicationId: l } = s;
                W("card_click", t), (0, j.R)({ skuId: t, applicationId: l, isStorefront: !1, analyticsLocations: Y });
            },
            [W, Y],
        ),
        el = n.useCallback(() => {
            W("dismiss"), w();
        }, [W, w]),
        en = n.useCallback(
            (e) => {
                !V.current &&
                    (e && null === q.current
                        ? (q.current = setTimeout(() => {
                              (V.current = !0),
                                  (q.current = null),
                                  b.default.track(S.HAw.COLLECTIBLES_TILE_IMPRESSION, {
                                      collectibles_shop_session_id: J?.sessionId,
                                      page_type: R,
                                      page_category: J?.pageCategory,
                                      page_section: J?.pageSection,
                                      type: z,
                                  });
                          }, 1e3))
                        : e || null === q.current || (clearTimeout(q.current), (q.current = null)));
            },
            [J?.sessionId, J?.pageCategory, J?.pageSection, R, z],
        );
    return (n.useEffect(
        () => () => {
            null !== q.current && (clearTimeout(q.current), (q.current = null));
        },
        [],
    ),
    0 === G.length)
        ? null
        : (0, l.jsx)(r.N, {
              theme: S.NJ8.DARKER,
              children: (e) =>
                  (0, l.jsx)(f.L, {
                      innerRef: U,
                      onChange: en,
                      threshold: 0,
                      children: (0, l.jsx)("div", {
                          ref: U,
                          className: a()(N.YB, e),
                          children: (0, l.jsxs)("div", {
                              className: N.kL,
                              children: [
                                  null != H && (0, l.jsx)("div", { className: N.D7, style: { background: H } }),
                                  (0, l.jsx)("div", {
                                      className: N.b,
                                      children: (0, l.jsx)(o.J, { size: "sm", variant: "icon-only", onClick: el }),
                                  }),
                                  null != $ && (0, l.jsx)("img", { className: N.wm, src: $, alt: "" }),
                                  (0, l.jsx)("div", {
                                      className: N.xf,
                                      children: (0, l.jsxs)("div", {
                                          className: N.B5,
                                          children: [
                                              (0, l.jsx)(c.D, {
                                                  className: N.R_,
                                                  variant: "heading-lg/semibold",
                                                  color: "always-white",
                                                  children: M,
                                              }),
                                              (0, l.jsxs)("div", {
                                                  className: N.U9,
                                                  children: [
                                                      null != O &&
                                                          (0, l.jsxs)("div", {
                                                              className: N.f$,
                                                              children: [
                                                                  (0, l.jsx)(u.O, {
                                                                      size: "xs",
                                                                      color: "currentColor",
                                                                  }),
                                                                  (0, l.jsx)(d.E, {
                                                                      variant: "text-xs/medium",
                                                                      color: "none",
                                                                      children: O,
                                                                  }),
                                                              ],
                                                          }),
                                                      "custom" === F.kind
                                                          ? F.node
                                                          : (0, l.jsx)(g.$, {
                                                                variant: "overlay-primary",
                                                                size: "sm",
                                                                icon: p.I,
                                                                iconPosition: "end",
                                                                text: F.text,
                                                                onMouseDown: ee,
                                                                onClick: es,
                                                            }),
                                                  ],
                                              }),
                                          ],
                                      }),
                                  }),
                                  (0, l.jsx)(x.E9, {
                                      newValue: Q,
                                      children: (0, l.jsx)("div", {
                                          className: N.$2,
                                          children: G.map((e, s) =>
                                              (0, l.jsx)(A.A, { skuId: e, positionInSection: s, onClick: et }, e),
                                          ),
                                      }),
                                  }),
                              ],
                          }),
                      }),
                  }),
          });
};
