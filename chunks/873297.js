"use strict";
s.d(t, { A: () => A });
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
    E = s(440938),
    b = s(652215),
    C = s(669159);
let A = (e) => {
    let t,
        s,
        A,
        {
            onDismiss: S,
            skuIds: v,
            tab: I,
            applicationId: L,
            headerText: j,
            shopButtonText: O,
            analyticsSection: k,
            analyticsTileType: T,
            analyticsImpressionType: y,
            backgroundGradient: N,
            logoUrl: R,
        } = e,
        B = (0, a.bG)([_.A], () => _.A.getGuildIdFromApplicationId(L), [L]),
        P =
            ((t = r.useRef([])),
            r.useEffect(() => {
                if (null != B) for (let e of v) (0, d.qf)(B, e);
            }, [v, B]),
            (s = (0, a.bG)([f.A], () => !v.some((e) => f.A.isFetching(e)) && v.some((e) => f.A.didFetchingSkuFail(e)), [
                v,
            ])),
            r.useEffect(() => {
                s && null != B && (0, d.Rw)(B);
            }, [s, B]),
            (A = (0, a.yK)([f.A, _.A], () => {
                if (v.some((e) => f.A.isFetching(e))) return t.current;
                let e = v.filter((e) => null != f.A.get(e));
                if (e.length >= v.length) return v;
                if (null == B) return e;
                let s = _.A.getStorefrontData(B);
                if (null == s || "loading" === s.state) return e;
                let n = new Set(v);
                return [
                    ...e,
                    ...(null != s.storefront
                        ? (0, c.jd)(s.storefront).filter((e) => !n.has(e) && null != f.A.get(e))
                        : []),
                ].slice(0, v.length);
            }, [v, B])),
            r.useEffect(() => {
                A.length > 0 && (t.current = A);
            }, [A]),
            A);
    (0, p.j)({ skuIds: P, location: "GamePromotionBanner" });
    let M = (0, E.uM)(),
        { analyticsLocations: H } = (0, o.Ay)(),
        D = r.useRef(null),
        w = r.useRef(!1),
        F = r.useRef(null),
        G = r.useMemo(() => ({ pageSection: k }), [k]),
        U = r.useCallback(
            (e, t) => {
                x.default.track(b.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: M?.sessionId,
                    page_type: I,
                    page_category: M?.pageCategory,
                    page_section: M?.pageSection,
                    tile_type: T,
                    cta_name: e,
                    ...(null != t ? { sku_id: t } : void 0),
                });
            },
            [M?.sessionId, M?.pageCategory, M?.pageSection, I, T],
        ),
        V = r.useCallback(() => {
            null != B && (0, g.X)({ guildId: B });
        }, [B]),
        W = r.useCallback(() => {
            null != B && (U("go_to_game_shop"), (0, g.default)({ guildId: B }));
        }, [U, B]),
        z = r.useCallback(
            (e, t) => {
                let { skuId: s, applicationId: n } = t;
                U("card_click", s), (0, m.R)({ skuId: s, applicationId: n, isStorefront: !1, analyticsLocations: H });
            },
            [U, H],
        ),
        K = r.useCallback(() => {
            U("dismiss"), S();
        }, [U, S]),
        Y = r.useCallback(
            (e) => {
                !w.current &&
                    (e && null === F.current
                        ? (F.current = setTimeout(() => {
                              (w.current = !0),
                                  (F.current = null),
                                  x.default.track(b.HAw.COLLECTIBLES_TILE_IMPRESSION, {
                                      collectibles_shop_session_id: M?.sessionId,
                                      page_type: I,
                                      page_category: M?.pageCategory,
                                      page_section: M?.pageSection,
                                      type: y,
                                  });
                          }, 1e3))
                        : e || null === F.current || (clearTimeout(F.current), (F.current = null)));
            },
            [M?.sessionId, M?.pageCategory, M?.pageSection, I, y],
        );
    return (r.useEffect(
        () => () => {
            null !== F.current && (clearTimeout(F.current), (F.current = null));
        },
        [],
    ),
    0 === P.length)
        ? null
        : (0, n.jsx)(i.L, {
              innerRef: D,
              onChange: Y,
              threshold: 0,
              children: (0, n.jsx)("div", {
                  ref: D,
                  className: C.YB,
                  children: (0, n.jsxs)("div", {
                      className: C.kL,
                      children: [
                          null != N && (0, n.jsx)("div", { className: C.D7, style: { background: N } }),
                          (0, n.jsx)("div", {
                              className: C.b,
                              children: (0, n.jsx)(l.JnF, { size: "sm", variant: "icon-only", onClick: K }),
                          }),
                          null != R && (0, n.jsx)("img", { className: C.wm, src: R, alt: "" }),
                          (0, n.jsx)("div", {
                              className: C.xf,
                              children: (0, n.jsxs)("div", {
                                  className: C.B5,
                                  children: [
                                      (0, n.jsx)(l.DZT, {
                                          variant: "heading-lg/semibold",
                                          color: "always-white",
                                          children: j,
                                      }),
                                      (0, n.jsx)(l.$nd, {
                                          variant: "overlay-primary",
                                          size: "sm",
                                          icon: l.I9m,
                                          iconPosition: "end",
                                          text: O,
                                          onMouseDown: V,
                                          onClick: W,
                                      }),
                                  ],
                              }),
                          }),
                          (0, n.jsx)(u.E9, {
                              newValue: G,
                              children: (0, n.jsx)("div", {
                                  className: C.$2,
                                  children: P.map((e, t) =>
                                      (0, n.jsx)(h.A, { skuId: e, positionInSection: t, onClick: z }, e),
                                  ),
                              }),
                          }),
                      ],
                  }),
              }),
          });
};
