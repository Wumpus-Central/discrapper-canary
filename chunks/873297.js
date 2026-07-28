l.d(s, { A: () => M });
var t = l(477900),
    n = l(582128),
    a = l(503698),
    i = l.n(a),
    r = l(43990),
    c = l(815021),
    o = l(297264),
    u = l(406810),
    d = l(834730),
    g = l(821609),
    h = l(17928),
    p = l(269115),
    m = l(688810),
    f = l(449543),
    x = l(812095),
    _ = l(871123),
    k = l(733391),
    j = l(439303),
    C = l(832163),
    A = l(517907),
    v = l(317560),
    E = l(467884),
    b = l(435658),
    y = l(67480),
    N = l(174459),
    I = l(371794),
    S = l(440938),
    L = l(652215),
    w = l(188275),
    R = l(440524);
let M = function (e) {
    let s,
        l,
        a,
        {
            onDismiss: M,
            skuIds: O,
            tab: D,
            applicationId: T,
            headerText: F,
            logoUrl: K,
            cta: B,
            timeLeftText: z,
            analyticsSection: H,
            analyticsTileType: P,
            analyticsImpressionType: G,
            backgroundGradient: J,
        } = e;
    n.useEffect(() => {
        (0, k.ap)(T);
    }, [T]);
    let U = (0, h.bG)([C.A], () => {
            let e = C.A.getStorefrontMetadata(T);
            return e?.logoAssetId != null ? (0, I.YE)(T, e.logoAssetId, 256) : void 0;
        }, [T]),
        V = K ?? U,
        Y =
            ((s = n.useRef([])),
            n.useEffect(() => {
                for (let e of O) (0, k.Pp)(T, e);
            }, [O, T]),
            (l = (0, h.bG)([y.A], () => !O.some((e) => y.A.isFetching(e)) && O.some((e) => y.A.didFetchingSkuFail(e)), [
                O,
            ])),
            n.useEffect(() => {
                l && (0, k.ap)(T);
            }, [l, T]),
            (a = (0, h.yK)([y.A, C.A], () => {
                if (O.some((e) => y.A.isFetching(e))) return s.current;
                let e = O.filter((e) => null != y.A.get(e));
                if (e.length >= O.length) return O;
                let l = C.A.getStorefrontDataForApplicationId(T);
                if (null == l || "loading" === l.state) return e;
                let t = new Set(O);
                return [
                    ...e,
                    ...(null != l.storefront
                        ? (0, _.jd)(l.storefront).filter((e) => !t.has(e) && null != y.A.get(e))
                        : []),
                ].slice(0, O.length);
            }, [T, O])),
            n.useEffect(() => {
                a.length > 0 && (s.current = a);
            }, [a]),
            a);
    (0, b.j)({ skuIds: Y });
    let $ = (0, A.A)({ location: "collectibles_shop", applicationId: T }),
        q = (0, S.uM)(),
        { analyticsLocations: Q } = (0, m.Ay)(),
        W = n.useRef(null),
        X = n.useRef(!1),
        Z = n.useRef(null),
        ee = n.useMemo(() => ({ pageSection: H }), [H]),
        es = n.useCallback(
            (e, s) => {
                N.default.track(L.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: q?.sessionId,
                    page_type: D,
                    page_category: q?.pageCategory,
                    page_section: q?.pageSection,
                    tile_type: P,
                    cta_name: e,
                    ...(null != s ? { sku_id: s } : void 0),
                });
            },
            [q?.sessionId, q?.pageCategory, q?.pageSection, D, P],
        ),
        el = "button" === B.kind ? B.onClick : void 0,
        et = "button" === B.kind ? B.onMouseDown : void 0,
        en = n.useCallback(() => {
            et?.();
        }, [et]),
        ea = n.useCallback(() => {
            es("go_to_game_shop"), el?.();
        }, [es, el]),
        ei = n.useCallback(
            (e, s) => {
                let { skuId: l, applicationId: t } = s;
                es("card_click", l), (0, v.R)({ skuId: l, applicationId: t, isStorefront: !1, analyticsLocations: Q });
            },
            [es, Q],
        ),
        er = n.useCallback(() => {
            es("dismiss"), M?.();
        }, [es, M]),
        ec = n.useCallback(
            (e) => {
                !X.current &&
                    (e && null === Z.current
                        ? (Z.current = setTimeout(() => {
                              (X.current = !0),
                                  (Z.current = null),
                                  N.default.track(L.HAw.COLLECTIBLES_TILE_IMPRESSION, {
                                      collectibles_shop_session_id: q?.sessionId,
                                      page_type: D,
                                      page_category: q?.pageCategory,
                                      page_section: q?.pageSection,
                                      type: G,
                                  });
                          }, 1e3))
                        : e || null === Z.current || (clearTimeout(Z.current), (Z.current = null)));
            },
            [q?.sessionId, q?.pageCategory, q?.pageSection, D, G],
        );
    return (n.useEffect(
        () => () => {
            null !== Z.current && (clearTimeout(Z.current), (Z.current = null));
        },
        [],
    ),
    0 === Y.length)
        ? null
        : (0, t.jsx)(r.N, {
              theme: L.NJ8.DARKER,
              children: (e) =>
                  (0, t.jsx)(p.L, {
                      innerRef: W,
                      onChange: ec,
                      threshold: 0,
                      children: (0, t.jsx)("div", {
                          ref: W,
                          className: i()(R.YB, e),
                          children: (0, t.jsxs)("div", {
                              className: R.kL,
                              children: [
                                  null != J && (0, t.jsx)("div", { className: R.D7, style: { background: J } }),
                                  null != M &&
                                      (0, t.jsx)("div", {
                                          className: R.b,
                                          children: (0, t.jsx)(c.J, { size: "sm", variant: "icon-only", onClick: er }),
                                      }),
                                  null != V && (0, t.jsx)("img", { className: R.wm, src: V, alt: "" }),
                                  (0, t.jsx)("div", {
                                      className: R.xf,
                                      children: (0, t.jsxs)("div", {
                                          className: R.B5,
                                          children: [
                                              (0, t.jsx)(o.D, {
                                                  className: R.R_,
                                                  variant: "heading-lg/normal",
                                                  color: "text-overlay-light",
                                                  children: (0, x.U)(F, { enableNewlines: !0 }),
                                              }),
                                              (0, t.jsxs)("div", {
                                                  className: R.U9,
                                                  children: [
                                                      null != z &&
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
                                                                      children: z,
                                                                  }),
                                                              ],
                                                          }),
                                                      "custom" === B.kind
                                                          ? B.node
                                                          : (0, t.jsx)(g.$, {
                                                                variant: "overlay-primary",
                                                                size: "sm",
                                                                text: B.text,
                                                                onMouseDown: en,
                                                                onClick: ea,
                                                            }),
                                                  ],
                                              }),
                                          ],
                                      }),
                                  }),
                                  (0, t.jsxs)(j.E9, {
                                      newValue: ee,
                                      children: [
                                          (0, t.jsx)(f.A, {
                                              gap: "md",
                                              children: Y.map((e, s) =>
                                                  (0, t.jsx)(
                                                      "div",
                                                      {
                                                          className: R.Ko,
                                                          children: (0, t.jsx)(E.A, {
                                                              skuId: e,
                                                              positionInSection: s,
                                                              onClick: ei,
                                                              showOrbsOnly: $,
                                                          }),
                                                      },
                                                      e,
                                                  ),
                                              ),
                                          }),
                                          T === w.FK &&
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
