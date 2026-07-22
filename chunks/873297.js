l.d(s, { A: () => M });
var t = l(627968),
    n = l(64700),
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
    x = l(871123),
    _ = l(733391),
    k = l(439303),
    j = l(832163),
    C = l(517907),
    A = l(317560),
    v = l(467884),
    E = l(920948),
    b = l(435658),
    y = l(67480),
    I = l(174459),
    N = l(371794),
    S = l(440938),
    L = l(652215),
    R = l(188275),
    w = l(440524);
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
        (0, _.ap)(T);
    }, [T]);
    let U = (0, h.bG)([j.A], () => {
            let e = j.A.getStorefrontMetadata(T);
            return e?.logoAssetId != null ? (0, N.YE)(T, e.logoAssetId, 256) : void 0;
        }, [T]),
        V = K ?? U,
        Y =
            ((s = n.useRef([])),
            n.useEffect(() => {
                for (let e of O) (0, _.Pp)(T, e);
            }, [O, T]),
            (l = (0, h.bG)([y.A], () => !O.some((e) => y.A.isFetching(e)) && O.some((e) => y.A.didFetchingSkuFail(e)), [
                O,
            ])),
            n.useEffect(() => {
                l && (0, _.ap)(T);
            }, [l, T]),
            (a = (0, h.yK)([y.A, j.A], () => {
                if (O.some((e) => y.A.isFetching(e))) return s.current;
                let e = O.filter((e) => null != y.A.get(e));
                if (e.length >= O.length) return O;
                let l = j.A.getStorefrontDataForApplicationId(T);
                if (null == l || "loading" === l.state) return e;
                let t = new Set(O);
                return [
                    ...e,
                    ...(null != l.storefront
                        ? (0, x.jd)(l.storefront).filter((e) => !t.has(e) && null != y.A.get(e))
                        : []),
                ].slice(0, O.length);
            }, [T, O])),
            n.useEffect(() => {
                a.length > 0 && (s.current = a);
            }, [a]),
            a);
    (0, b.j)({ skuIds: Y });
    let $ = (0, C.A)({ location: "collectibles_shop", applicationId: T }),
        q = (0, S.uM)(),
        { analyticsLocations: Q } = (0, m.Ay)(),
        W = n.useRef(null),
        X = n.useRef(!1),
        Z = n.useRef(null),
        ee = n.useMemo(() => ({ pageSection: H }), [H]),
        es = n.useCallback(
            (e, s) => {
                I.default.track(L.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
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
                es("card_click", l), (0, A.R)({ skuId: l, applicationId: t, isStorefront: !1, analyticsLocations: Q });
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
                                  I.default.track(L.HAw.COLLECTIBLES_TILE_IMPRESSION, {
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
                          className: i()(w.YB, e),
                          children: (0, t.jsxs)("div", {
                              className: w.kL,
                              children: [
                                  null != J && (0, t.jsx)("div", { className: w.D7, style: { background: J } }),
                                  null != M &&
                                      (0, t.jsx)("div", {
                                          className: w.b,
                                          children: (0, t.jsx)(c.J, { size: "sm", variant: "icon-only", onClick: er }),
                                      }),
                                  null != V && (0, t.jsx)("img", { className: w.wm, src: V, alt: "" }),
                                  (0, t.jsx)("div", {
                                      className: w.xf,
                                      children: (0, t.jsxs)("div", {
                                          className: w.B5,
                                          children: [
                                              (0, t.jsx)(o.D, {
                                                  className: w.R_,
                                                  variant: "heading-lg/normal",
                                                  color: "text-overlay-light",
                                                  children: (0, E.U)(F),
                                              }),
                                              (0, t.jsxs)("div", {
                                                  className: w.U9,
                                                  children: [
                                                      null != z &&
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
                                  (0, t.jsxs)(k.E9, {
                                      newValue: ee,
                                      children: [
                                          (0, t.jsx)(f.A, {
                                              gap: "md",
                                              children: Y.map((e, s) =>
                                                  (0, t.jsx)(
                                                      "div",
                                                      {
                                                          className: w.Ko,
                                                          children: (0, t.jsx)(v.A, {
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
                                          T === R.FK &&
                                              (0, t.jsx)("div", {
                                                  className: w.Ok,
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
