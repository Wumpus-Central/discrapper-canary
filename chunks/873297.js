"use strict";
s.d(t, { A: () => I });
var n = s(627968),
    l = s(64700),
    r = s(815021),
    a = s(534514),
    i = s(821609),
    o = s(509434),
    c = s(311907),
    d = s(230109),
    u = s(688810),
    g = s(871123),
    h = s(733391),
    _ = s(439303),
    m = s(832163),
    p = s(44724),
    f = s(317560),
    E = s(183802),
    x = s(435658),
    A = s(67480),
    C = s(954571),
    S = s(371794),
    b = s(440938),
    v = s(652215),
    L = s(737796);
let I = (e) => {
    let t,
        s,
        I,
        {
            onDismiss: j,
            skuIds: N,
            tab: T,
            applicationId: O,
            headerText: y,
            shopButtonText: k,
            analyticsSection: R,
            analyticsTileType: B,
            analyticsImpressionType: P,
            backgroundGradient: M,
        } = e,
        { guildId: D } = (0, g.nG)(O);
    l.useEffect(() => {
        null != D && (0, h.Rw)(D);
    }, [D]);
    let w = (0, c.bG)([m.A], () => {
            let e = m.A.getStorefrontMetadata(O);
            return e?.logoAssetId != null ? (0, S.YE)(O, e.logoAssetId, 75) : void 0;
        }, [O]),
        H =
            ((t = l.useRef([])),
            l.useEffect(() => {
                if (null != D) for (let e of N) (0, h.qf)(D, e);
            }, [N, D]),
            (s = (0, c.bG)([A.A], () => !N.some((e) => A.A.isFetching(e)) && N.some((e) => A.A.didFetchingSkuFail(e)), [
                N,
            ])),
            l.useEffect(() => {
                s && null != D && (0, h.Rw)(D);
            }, [s, D]),
            (I = (0, c.yK)([A.A, m.A], () => {
                if (N.some((e) => A.A.isFetching(e))) return t.current;
                let e = N.filter((e) => null != A.A.get(e));
                if (e.length >= N.length) return N;
                if (null == D) return e;
                let s = m.A.getStorefrontData(D);
                if (null == s || "loading" === s.state) return e;
                let n = new Set(N);
                return [
                    ...e,
                    ...(null != s.storefront
                        ? (0, g.jd)(s.storefront).filter((e) => !n.has(e) && null != A.A.get(e))
                        : []),
                ].slice(0, N.length);
            }, [N, D])),
            l.useEffect(() => {
                I.length > 0 && (t.current = I);
            }, [I]),
            I);
    (0, x.j)({ skuIds: H, location: "GamePromotionBanner" });
    let G = (0, b.uM)(),
        { analyticsLocations: F } = (0, u.Ay)(),
        U = l.useRef(null),
        K = l.useRef(!1),
        V = l.useRef(null),
        W = l.useMemo(() => ({ pageSection: R }), [R]),
        z = l.useCallback(
            (e, t) => {
                C.default.track(v.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: G?.sessionId,
                    page_type: T,
                    page_category: G?.pageCategory,
                    page_section: G?.pageSection,
                    tile_type: B,
                    cta_name: e,
                    ...(null != t ? { sku_id: t } : void 0),
                });
            },
            [G?.sessionId, G?.pageCategory, G?.pageSection, T, B],
        ),
        $ = l.useCallback(() => {
            null != D && (0, p.X)({ guildId: D });
        }, [D]),
        Y = l.useCallback(() => {
            null != D && (z("go_to_game_shop"), (0, p.default)({ guildId: D }));
        }, [z, D]),
        Z = l.useCallback(
            (e, t) => {
                let { skuId: s, applicationId: n } = t;
                z("card_click", s), (0, f.R)({ skuId: s, applicationId: n, isStorefront: !1, analyticsLocations: F });
            },
            [z, F],
        ),
        J = l.useCallback(() => {
            z("dismiss"), j();
        }, [z, j]),
        X = l.useCallback(
            (e) => {
                !K.current &&
                    (e && null === V.current
                        ? (V.current = setTimeout(() => {
                              (K.current = !0),
                                  (V.current = null),
                                  C.default.track(v.HAw.COLLECTIBLES_TILE_IMPRESSION, {
                                      collectibles_shop_session_id: G?.sessionId,
                                      page_type: T,
                                      page_category: G?.pageCategory,
                                      page_section: G?.pageSection,
                                      type: P,
                                  });
                          }, 1e3))
                        : e || null === V.current || (clearTimeout(V.current), (V.current = null)));
            },
            [G?.sessionId, G?.pageCategory, G?.pageSection, T, P],
        );
    return (l.useEffect(
        () => () => {
            null !== V.current && (clearTimeout(V.current), (V.current = null));
        },
        [],
    ),
    0 === H.length)
        ? null
        : (0, n.jsx)(d.L, {
              innerRef: U,
              onChange: X,
              threshold: 0,
              children: (0, n.jsx)("div", {
                  ref: U,
                  className: L.YB,
                  children: (0, n.jsxs)("div", {
                      className: L.kL,
                      children: [
                          null != M && (0, n.jsx)("div", { className: L.D7, style: { background: M } }),
                          (0, n.jsx)("div", {
                              className: L.b,
                              children: (0, n.jsx)(r.J, { size: "sm", variant: "icon-only", onClick: J }),
                          }),
                          null != w && (0, n.jsx)("img", { className: L.wm, src: w, alt: "" }),
                          (0, n.jsx)("div", {
                              className: L.xf,
                              children: (0, n.jsxs)("div", {
                                  className: L.B5,
                                  children: [
                                      (0, n.jsx)(a.D, {
                                          variant: "heading-lg/semibold",
                                          color: "always-white",
                                          children: y,
                                      }),
                                      (0, n.jsx)(i.$, {
                                          variant: "overlay-primary",
                                          size: "sm",
                                          icon: o.I,
                                          iconPosition: "end",
                                          text: k,
                                          onMouseDown: $,
                                          onClick: Y,
                                      }),
                                  ],
                              }),
                          }),
                          (0, n.jsx)(_.E9, {
                              newValue: W,
                              children: (0, n.jsx)("div", {
                                  className: L.$2,
                                  children: H.map((e, t) =>
                                      (0, n.jsx)(E.A, { skuId: e, positionInSection: t, onClick: Z }, e),
                                  ),
                              }),
                          }),
                      ],
                  }),
              }),
          });
};
