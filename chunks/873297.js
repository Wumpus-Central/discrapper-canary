l.d(s, { A: () => O });
var t = l(477900),
    n = l(582128),
    r = l(503698),
    i = l.n(r),
    a = l(43990),
    c = l(815021),
    o = l(297264),
    u = l(406810),
    d = l(834730),
    g = l(821609),
    m = l(17928),
    h = l(269115),
    p = l(688810),
    x = l(449543),
    f = l(812095),
    _ = l(733391),
    k = l(439303),
    C = l(832163),
    j = l(317560),
    v = l(467884),
    E = l(435658),
    I = l(594832),
    y = l(862772),
    b = l(287809),
    A = l(67480),
    N = l(174459),
    S = l(371794),
    L = l(440938),
    R = l(652215),
    w = l(188275),
    M = l(867595);
let O = function (e) {
    let {
        onDismiss: s,
        skuIds: l,
        tab: r,
        applicationId: O,
        headerText: T,
        logoUrl: D,
        cta: B,
        timeLeftText: K,
        analyticsSection: F,
        analyticsTileType: P,
        analyticsImpressionType: U,
        backgroundGradient: z,
    } = e;
    n.useEffect(() => {
        (0, _.ap)(O);
    }, [O]);
    let H = (0, m.bG)(
            [C.A],
            () => {
                let e = C.A.getStorefrontMetadata(O);
                return e?.logoAssetId != null ? (0, S.YE)(O, e.logoAssetId, 256) : void 0;
            },
            [O],
        ),
        G = D ?? H,
        J = (function (e, s) {
            let l = n.useRef([]);
            n.useEffect(() => {
                for (let l of e) (0, _.Pp)(s, l);
            }, [e, s]);
            let t = (0, m.bG)(
                    [A.A],
                    () => !e.some((e) => A.A.isFetching(e)) && e.filter((e) => null != A.A.get(e)).length < 4,
                    [e],
                ),
                r = b.default.getCurrentUser()?.id,
                i = n.useMemo(() => (t ? [s] : []), [t, s]),
                a = n.useMemo(() => (t && null != r ? [r] : []), [t, r]),
                { recommendations: c, status: o } = (0, y.XQ)({
                    applicationIds: i,
                    userIds: a,
                    numItems: 4,
                    source: I.B5.USER_PROFILE,
                }),
                u = (0, m.yK)(
                    [A.A],
                    () => {
                        if (e.some((e) => A.A.isFetching(e))) return l.current;
                        let s = e.filter((e) => null != A.A.get(e));
                        if (s.length >= 4) return s;
                        if ("loading" === o) return l.current;
                        let t = new Set(e);
                        return [...s, ...c.map((e) => e.id).filter((e) => !t.has(e))].slice(0, 4);
                    },
                    [e, c, o],
                );
            return (
                n.useEffect(() => {
                    u.length > 0 && (l.current = u);
                }, [u]),
                u
            );
        })(l, O);
    (0, E.j)({ skuIds: J });
    let V = (0, L.uM)(),
        { analyticsLocations: Y } = (0, p.Ay)(),
        $ = n.useRef(null),
        Q = n.useRef(!1),
        X = n.useRef(null),
        q = n.useMemo(() => ({ pageSection: F }), [F]),
        W = n.useCallback(
            (e, s) => {
                N.default.track(R.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: V?.sessionId,
                    page_type: r,
                    page_category: V?.pageCategory,
                    page_section: V?.pageSection,
                    tile_type: P,
                    cta_name: e,
                    ...(null != s ? { sku_id: s } : void 0),
                });
            },
            [V?.sessionId, V?.pageCategory, V?.pageSection, r, P],
        ),
        Z = "button" === B.kind ? B.onClick : void 0,
        ee = "button" === B.kind ? B.onMouseDown : void 0,
        es = n.useCallback(() => {
            ee?.();
        }, [ee]),
        el = n.useCallback(() => {
            (W("go_to_game_shop"), Z?.());
        }, [W, Z]),
        et = n.useCallback(
            (e, s) => {
                let { skuId: l, applicationId: t } = s;
                (W("card_click", l), (0, j.R)({ skuId: l, applicationId: t, isStorefront: !1, analyticsLocations: Y }));
            },
            [W, Y],
        ),
        en = n.useCallback(() => {
            (W("dismiss"), s?.());
        }, [W, s]),
        er = n.useCallback(
            (e) => {
                !Q.current &&
                    (e && null === X.current
                        ? (X.current = setTimeout(() => {
                              ((Q.current = !0),
                                  (X.current = null),
                                  N.default.track(R.HAw.COLLECTIBLES_TILE_IMPRESSION, {
                                      collectibles_shop_session_id: V?.sessionId,
                                      page_type: r,
                                      page_category: V?.pageCategory,
                                      page_section: V?.pageSection,
                                      type: U,
                                  }));
                          }, 1e3))
                        : e || null === X.current || (clearTimeout(X.current), (X.current = null)));
            },
            [V?.sessionId, V?.pageCategory, V?.pageSection, r, U],
        );
    return (n.useEffect(
        () => () => {
            null !== X.current && (clearTimeout(X.current), (X.current = null));
        },
        [],
    ),
    0 === J.length)
        ? null
        : (0, t.jsx)(a.N, {
              theme: R.NJ8.DARK,
              children: (e) =>
                  (0, t.jsx)(h.L, {
                      innerRef: $,
                      onChange: er,
                      threshold: 0,
                      children: (0, t.jsx)("div", {
                          ref: $,
                          className: i()(M.YB, e),
                          children: (0, t.jsxs)("div", {
                              className: M.kL,
                              children: [
                                  null != z && (0, t.jsx)("div", { className: M.D7, style: { background: z } }),
                                  null != s &&
                                      (0, t.jsx)("div", {
                                          className: M.b,
                                          children: (0, t.jsx)(c.J, { size: "sm", variant: "icon-only", onClick: en }),
                                      }),
                                  null != G && (0, t.jsx)("img", { className: M.wm, src: G, alt: "" }),
                                  (0, t.jsx)("div", {
                                      className: M.xf,
                                      children: (0, t.jsxs)("div", {
                                          className: M.B5,
                                          children: [
                                              (0, t.jsx)(o.D, {
                                                  className: M.R_,
                                                  variant: "heading-lg/normal",
                                                  color: "text-overlay-light",
                                                  children: (0, f.U)(T, { enableNewlines: !0 }),
                                              }),
                                              (0, t.jsxs)("div", {
                                                  className: M.U9,
                                                  children: [
                                                      null != K &&
                                                          (0, t.jsxs)("div", {
                                                              className: M.f$,
                                                              children: [
                                                                  (0, t.jsx)(u.ClockIcon, {
                                                                      size: "xs",
                                                                      color: "currentColor",
                                                                  }),
                                                                  (0, t.jsx)(d.E, {
                                                                      variant: "text-xs/medium",
                                                                      color: "none",
                                                                      children: K,
                                                                  }),
                                                              ],
                                                          }),
                                                      "custom" === B.kind
                                                          ? B.node
                                                          : (0, t.jsx)(g.$, {
                                                                variant: "overlay-primary",
                                                                size: "sm",
                                                                text: B.text,
                                                                onMouseDown: es,
                                                                onClick: el,
                                                            }),
                                                  ],
                                              }),
                                          ],
                                      }),
                                  }),
                                  (0, t.jsxs)(k.E9, {
                                      newValue: q,
                                      children: [
                                          (0, t.jsx)(x.A, {
                                              gap: "md",
                                              children: J.map((e, s) =>
                                                  (0, t.jsx)(
                                                      "div",
                                                      {
                                                          className: M.Ko,
                                                          children: (0, t.jsx)(v.Ay, {
                                                              skuId: e,
                                                              positionInSection: s,
                                                              onClick: et,
                                                              showOrbsOnly: !1,
                                                          }),
                                                      },
                                                      e,
                                                  ),
                                              ),
                                          }),
                                          O === w.FK &&
                                              (0, t.jsx)("div", {
                                                  className: M.Ok,
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
