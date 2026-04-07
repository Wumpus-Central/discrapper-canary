"use strict";
s.d(t, { A: () => S });
var n = s(627968),
    r = s(64700),
    l = s(158954),
    i = s(311907),
    a = s(230109),
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
    C = s(985018),
    A = s(669159);
let S = (e) => {
    let t,
        s,
        S,
        {
            onDismiss: v,
            skuIds: I,
            endTime: L,
            tab: j,
            applicationId: k,
            headerText: T,
            shopButtonText: O,
            analyticsSection: y,
            analyticsTileType: N,
            analyticsImpressionType: R,
            backgroundImageUrl: B,
        } = e,
        P = (0, i.bG)([_.A], () => _.A.getGuildIdFromApplicationId(k), [k]),
        M =
            ((t = r.useRef([])),
            r.useEffect(() => {
                if (null != P) for (let e of I) (0, d.qf)(P, e);
            }, [I, P]),
            (s = (0, i.bG)([f.A], () => !I.some((e) => f.A.isFetching(e)) && I.some((e) => f.A.didFetchingSkuFail(e)), [
                I,
            ])),
            r.useEffect(() => {
                s && null != P && (0, d.Rw)(P);
            }, [s, P]),
            (S = (0, i.yK)([f.A, _.A], () => {
                if (I.some((e) => f.A.isFetching(e))) return t.current;
                let e = I.filter((e) => null != f.A.get(e));
                if (e.length >= I.length) return I;
                if (null == P) return e;
                let s = _.A.getStorefrontData(P);
                if (null == s || "loading" === s.state) return e;
                let n = new Set(I);
                return [
                    ...e,
                    ...(null != s.storefront
                        ? (0, c.jd)(s.storefront).filter((e) => !n.has(e) && null != f.A.get(e))
                        : []),
                ].slice(0, I.length);
            }, [I, P])),
            r.useEffect(() => {
                S.length > 0 && (t.current = S);
            }, [S]),
            S);
    (0, p.j)({ skuIds: M, location: "GamePromotionBanner" });
    let D = (0, E.uM)(),
        { analyticsLocations: w } = (0, o.Ay)(),
        H = r.useRef(null),
        F = r.useRef(!1),
        G = r.useRef(null),
        U = r.useMemo(() => ({ pageSection: y }), [y]),
        V = C.intl.formatToPlainString(C.t.BXpdIg, {
            days: Math.max(Math.floor((new Date(L).getTime() - Date.now()) / 864e5), 1),
        }),
        W = r.useCallback(
            (e, t) => {
                x.default.track(b.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: D?.sessionId,
                    page_type: j,
                    page_category: D?.pageCategory,
                    page_section: D?.pageSection,
                    tile_type: N,
                    cta_name: e,
                    ...(null != t ? { sku_id: t } : void 0),
                });
            },
            [D?.sessionId, D?.pageCategory, D?.pageSection, j, N],
        ),
        z = r.useCallback(() => {
            null != P && (0, g.X)({ guildId: P });
        }, [P]),
        K = r.useCallback(() => {
            null != P && (W("go_to_game_shop"), (0, g.default)({ guildId: P }));
        }, [W, P]),
        Y = r.useCallback(
            (e, t) => {
                let { skuId: s, applicationId: n } = t;
                W("card_click", s), (0, m.R)({ skuId: s, applicationId: n, isStorefront: !1, analyticsLocations: w });
            },
            [W, w],
        ),
        $ = r.useCallback(() => {
            W("dismiss"), v();
        }, [W, v]),
        Z = r.useCallback(
            (e) => {
                !F.current &&
                    (e && null === G.current
                        ? (G.current = setTimeout(() => {
                              (F.current = !0),
                                  (G.current = null),
                                  x.default.track(b.HAw.COLLECTIBLES_TILE_IMPRESSION, {
                                      collectibles_shop_session_id: D?.sessionId,
                                      page_type: j,
                                      page_category: D?.pageCategory,
                                      page_section: D?.pageSection,
                                      type: R,
                                  });
                          }, 1e3))
                        : e || null === G.current || (clearTimeout(G.current), (G.current = null)));
            },
            [D?.sessionId, D?.pageCategory, D?.pageSection, j, R],
        );
    return (r.useEffect(
        () => () => {
            null !== G.current && (clearTimeout(G.current), (G.current = null));
        },
        [],
    ),
    0 === M.length)
        ? null
        : (0, n.jsx)(a.L, {
              innerRef: H,
              onChange: Z,
              threshold: 0,
              children: (0, n.jsx)("div", {
                  ref: H,
                  className: A.YB,
                  children: (0, n.jsxs)("div", {
                      className: A.kL,
                      style: null != B ? { backgroundImage: `url(${B})` } : void 0,
                      children: [
                          (0, n.jsx)("div", {
                              className: A.b,
                              children: (0, n.jsx)(l.JnF, { size: "sm", variant: "icon-only", onClick: $ }),
                          }),
                          (0, n.jsxs)("div", {
                              className: A.xf,
                              children: [
                                  (0, n.jsx)("div", {
                                      className: A.qw,
                                      children: (0, n.jsx)(l.Exy, {
                                          type: { text: `${C.intl.string(C.t.yYEZGi)} (${V})` },
                                          variant: "brand",
                                      }),
                                  }),
                                  (0, n.jsxs)("div", {
                                      className: A.B5,
                                      children: [
                                          (0, n.jsx)(l.DZT, {
                                              variant: "heading-xl/semibold",
                                              color: "always-white",
                                              children: T,
                                          }),
                                          (0, n.jsx)(l.$nd, {
                                              variant: "overlay-primary",
                                              icon: l.I9m,
                                              iconPosition: "end",
                                              text: O,
                                              onMouseDown: z,
                                              onClick: K,
                                          }),
                                      ],
                                  }),
                              ],
                          }),
                          (0, n.jsx)(u.E9, {
                              newValue: U,
                              children: (0, n.jsx)("div", {
                                  className: A.$2,
                                  children: M.map((e, t) =>
                                      (0, n.jsx)(h.A, { skuId: e, positionInSection: t, onClick: Y }, e),
                                  ),
                              }),
                          }),
                      ],
                  }),
              }),
          });
};
