"use strict";
s.d(t, { A: () => A });
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
    p = s(67480),
    f = s(954571),
    x = s(440938),
    E = s(652215),
    b = s(985018),
    C = s(669159);
let A = (e) => {
    let t,
        s,
        A,
        {
            onDismiss: S,
            skuIds: v,
            endTime: I,
            tab: L,
            applicationId: j,
            headerText: k,
            shopButtonText: T,
            analyticsSection: O,
            analyticsTileType: y,
            analyticsImpressionType: N,
            backgroundImageUrl: R,
        } = e,
        B = (0, i.bG)([_.A], () => _.A.getGuildIdFromApplicationId(j), [j]),
        M =
            ((t = r.useRef([])),
            r.useEffect(() => {
                if (null != B) for (let e of v) (0, d.qf)(B, e);
            }, [v, B]),
            (s = (0, i.bG)([p.A], () => !v.some((e) => p.A.isFetching(e)) && v.some((e) => p.A.didFetchingSkuFail(e)), [
                v,
            ])),
            r.useEffect(() => {
                s && null != B && (0, d.Rw)(B);
            }, [s, B]),
            (A = (0, i.yK)([p.A, _.A], () => {
                if (v.some((e) => p.A.isFetching(e))) return t.current;
                let e = v.filter((e) => null != p.A.get(e));
                if (e.length >= v.length) return v;
                if (null == B) return e;
                let s = _.A.getStorefrontData(B);
                if (null == s || "loading" === s.state) return e;
                let n = new Set(v);
                return [
                    ...e,
                    ...(null != s.storefront
                        ? (0, c.jd)(s.storefront).filter((e) => !n.has(e) && null != p.A.get(e))
                        : []),
                ].slice(0, v.length);
            }, [v, B])),
            r.useEffect(() => {
                A.length > 0 && (t.current = A);
            }, [A]),
            A),
        P = (0, x.uM)(),
        { analyticsLocations: D } = (0, o.Ay)(),
        w = r.useRef(null),
        H = r.useRef(!1),
        F = r.useRef(null),
        G = r.useMemo(() => ({ pageSection: O }), [O]),
        U = b.intl.formatToPlainString(b.t.BXpdIg, {
            days: Math.max(Math.floor((new Date(I).getTime() - Date.now()) / 864e5), 1),
        }),
        V = r.useCallback(
            (e, t) => {
                f.default.track(E.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: P?.sessionId,
                    page_type: L,
                    page_category: P?.pageCategory,
                    page_section: P?.pageSection,
                    tile_type: y,
                    cta_name: e,
                    ...(null != t ? { sku_id: t } : void 0),
                });
            },
            [P?.sessionId, P?.pageCategory, P?.pageSection, L, y],
        ),
        W = r.useCallback(() => {
            null != B && (0, g.X)({ guildId: B });
        }, [B]),
        z = r.useCallback(() => {
            null != B && (V("go_to_game_shop"), (0, g.default)({ guildId: B }));
        }, [V, B]),
        K = r.useCallback(
            (e, t) => {
                let { skuId: s, applicationId: n } = t;
                V("card_click", s), (0, m.R)({ skuId: s, applicationId: n, isStorefront: !1, analyticsLocations: D });
            },
            [V, D],
        ),
        Y = r.useCallback(() => {
            V("dismiss"), S();
        }, [V, S]),
        $ = r.useCallback(
            (e) => {
                !H.current &&
                    (e && null === F.current
                        ? (F.current = setTimeout(() => {
                              (H.current = !0),
                                  (F.current = null),
                                  f.default.track(E.HAw.COLLECTIBLES_TILE_IMPRESSION, {
                                      collectibles_shop_session_id: P?.sessionId,
                                      page_type: L,
                                      page_category: P?.pageCategory,
                                      page_section: P?.pageSection,
                                      type: N,
                                  });
                          }, 1e3))
                        : e || null === F.current || (clearTimeout(F.current), (F.current = null)));
            },
            [P?.sessionId, P?.pageCategory, P?.pageSection, L, N],
        );
    return (r.useEffect(
        () => () => {
            null !== F.current && (clearTimeout(F.current), (F.current = null));
        },
        [],
    ),
    0 === M.length)
        ? null
        : (0, n.jsx)(a.L, {
              innerRef: w,
              onChange: $,
              threshold: 0,
              children: (0, n.jsx)("div", {
                  ref: w,
                  className: C.YB,
                  children: (0, n.jsxs)("div", {
                      className: C.kL,
                      style: null != R ? { backgroundImage: `url(${R})` } : void 0,
                      children: [
                          (0, n.jsx)("div", {
                              className: C.b,
                              children: (0, n.jsx)(l.JnF, { size: "sm", variant: "icon-only", onClick: Y }),
                          }),
                          (0, n.jsxs)("div", {
                              className: C.xf,
                              children: [
                                  (0, n.jsx)("div", {
                                      className: C.qw,
                                      children: (0, n.jsx)(l.Exy, {
                                          type: { text: `${b.intl.string(b.t.yYEZGi)} (${U})` },
                                          variant: "brand",
                                      }),
                                  }),
                                  (0, n.jsxs)("div", {
                                      className: C.B5,
                                      children: [
                                          (0, n.jsx)(l.DZT, {
                                              variant: "heading-xl/semibold",
                                              color: "always-white",
                                              children: k,
                                          }),
                                          (0, n.jsx)(l.$nd, {
                                              variant: "overlay-primary",
                                              icon: l.I9m,
                                              iconPosition: "end",
                                              text: T,
                                              onMouseDown: W,
                                              onClick: z,
                                          }),
                                      ],
                                  }),
                              ],
                          }),
                          (0, n.jsx)(u.E9, {
                              newValue: G,
                              children: (0, n.jsx)("div", {
                                  className: C.$2,
                                  children: M.map((e, t) =>
                                      (0, n.jsx)(h.A, { skuId: e, positionInSection: t, onClick: K }, e),
                                  ),
                              }),
                          }),
                      ],
                  }),
              }),
          });
};
