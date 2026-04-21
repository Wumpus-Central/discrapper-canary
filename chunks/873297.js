"use strict";
s.d(t, { A: () => S });
var n = s(627968),
    r = s(64700),
    l = s(158954),
    a = s(311907),
    i = s(230109),
    o = s(688810),
    c = s(871123),
    d = s(733391),
    u = s(439303),
    _ = s(832163),
    g = s(44724),
    m = s(317560),
    h = s(183802),
    p = s(435658),
    f = s(67480),
    x = s(954571),
    E = s(371794),
    C = s(440938),
    b = s(652215),
    A = s(74564);
let S = (e) => {
    let t,
        s,
        S,
        {
            onDismiss: v,
            skuIds: I,
            tab: L,
            applicationId: j,
            headerText: O,
            shopButtonText: T,
            analyticsSection: k,
            analyticsTileType: N,
            analyticsImpressionType: y,
            backgroundGradient: R,
        } = e,
        { guildId: B } = (0, c.nG)(j);
    r.useEffect(() => {
        null != B && (0, d.Rw)(B);
    }, [B]);
    let P = (0, a.bG)([_.A], () => {
            let e = _.A.getStorefrontMetadata(j);
            return e?.logoAssetId != null ? (0, E.YE)(j, e.logoAssetId, 75) : void 0;
        }, [j]),
        M =
            ((t = r.useRef([])),
            r.useEffect(() => {
                if (null != B) for (let e of I) (0, d.qf)(B, e);
            }, [I, B]),
            (s = (0, a.bG)([f.A], () => !I.some((e) => f.A.isFetching(e)) && I.some((e) => f.A.didFetchingSkuFail(e)), [
                I,
            ])),
            r.useEffect(() => {
                s && null != B && (0, d.Rw)(B);
            }, [s, B]),
            (S = (0, a.yK)([f.A, _.A], () => {
                if (I.some((e) => f.A.isFetching(e))) return t.current;
                let e = I.filter((e) => null != f.A.get(e));
                if (e.length >= I.length) return I;
                if (null == B) return e;
                let s = _.A.getStorefrontData(B);
                if (null == s || "loading" === s.state) return e;
                let n = new Set(I);
                return [
                    ...e,
                    ...(null != s.storefront
                        ? (0, c.jd)(s.storefront).filter((e) => !n.has(e) && null != f.A.get(e))
                        : []),
                ].slice(0, I.length);
            }, [I, B])),
            r.useEffect(() => {
                S.length > 0 && (t.current = S);
            }, [S]),
            S);
    (0, p.j)({ skuIds: M, location: "GamePromotionBanner" });
    let H = (0, C.uM)(),
        { analyticsLocations: D } = (0, o.Ay)(),
        w = r.useRef(null),
        F = r.useRef(!1),
        G = r.useRef(null),
        U = r.useMemo(() => ({ pageSection: k }), [k]),
        K = r.useCallback(
            (e, t) => {
                x.default.track(b.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: H?.sessionId,
                    page_type: L,
                    page_category: H?.pageCategory,
                    page_section: H?.pageSection,
                    tile_type: N,
                    cta_name: e,
                    ...(null != t ? { sku_id: t } : void 0),
                });
            },
            [H?.sessionId, H?.pageCategory, H?.pageSection, L, N],
        ),
        W = r.useCallback(() => {
            null != B && (0, g.X)({ guildId: B });
        }, [B]),
        z = r.useCallback(() => {
            null != B && (K("go_to_game_shop"), (0, g.default)({ guildId: B }));
        }, [K, B]),
        V = r.useCallback(
            (e, t) => {
                let { skuId: s, applicationId: n } = t;
                K("card_click", s), (0, m.R)({ skuId: s, applicationId: n, isStorefront: !1, analyticsLocations: D });
            },
            [K, D],
        ),
        Y = r.useCallback(() => {
            K("dismiss"), v();
        }, [K, v]),
        $ = r.useCallback(
            (e) => {
                !F.current &&
                    (e && null === G.current
                        ? (G.current = setTimeout(() => {
                              (F.current = !0),
                                  (G.current = null),
                                  x.default.track(b.HAw.COLLECTIBLES_TILE_IMPRESSION, {
                                      collectibles_shop_session_id: H?.sessionId,
                                      page_type: L,
                                      page_category: H?.pageCategory,
                                      page_section: H?.pageSection,
                                      type: y,
                                  });
                          }, 1e3))
                        : e || null === G.current || (clearTimeout(G.current), (G.current = null)));
            },
            [H?.sessionId, H?.pageCategory, H?.pageSection, L, y],
        );
    return (r.useEffect(
        () => () => {
            null !== G.current && (clearTimeout(G.current), (G.current = null));
        },
        [],
    ),
    0 === M.length)
        ? null
        : (0, n.jsx)(i.L, {
              innerRef: w,
              onChange: $,
              threshold: 0,
              children: (0, n.jsx)("div", {
                  ref: w,
                  className: A.YB,
                  children: (0, n.jsxs)("div", {
                      className: A.kL,
                      children: [
                          null != R && (0, n.jsx)("div", { className: A.D7, style: { background: R } }),
                          (0, n.jsx)("div", {
                              className: A.b,
                              children: (0, n.jsx)(l.JnF, { size: "sm", variant: "icon-only", onClick: Y }),
                          }),
                          null != P && (0, n.jsx)("img", { className: A.wm, src: P, alt: "" }),
                          (0, n.jsx)("div", {
                              className: A.xf,
                              children: (0, n.jsxs)("div", {
                                  className: A.B5,
                                  children: [
                                      (0, n.jsx)(l.DZT, {
                                          variant: "heading-lg/semibold",
                                          color: "always-white",
                                          children: O,
                                      }),
                                      (0, n.jsx)(l.$nd, {
                                          variant: "overlay-primary",
                                          size: "sm",
                                          icon: l.I9m,
                                          iconPosition: "end",
                                          text: T,
                                          onMouseDown: W,
                                          onClick: z,
                                      }),
                                  ],
                              }),
                          }),
                          (0, n.jsx)(u.E9, {
                              newValue: U,
                              children: (0, n.jsx)("div", {
                                  className: A.$2,
                                  children: M.map((e, t) =>
                                      (0, n.jsx)(h.A, { skuId: e, positionInSection: t, onClick: V }, e),
                                  ),
                              }),
                          }),
                      ],
                  }),
              }),
          });
};
