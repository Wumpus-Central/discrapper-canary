l.d(s, { A: () => O });
var t = l(477900),
    n = l(582128),
    r = l(503698),
    a = l.n(r),
    i = l(43990),
    c = l(815021),
    o = l(297264),
    u = l(406810),
    d = l(834730),
    g = l(821609),
    m = l(17928),
    p = l(269115),
    h = l(688810),
    x = l(449543),
    f = l(812095),
    _ = l(733391),
    C = l(439303),
    k = l(832163),
    E = l(317560),
    j = l(467884),
    v = l(435658),
    I = l(594832),
    y = l(862772),
    A = l(287809),
    N = l(67480),
    b = l(174459),
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
        logoUrl: B,
        cta: D,
        timeLeftText: K,
        analyticsSection: P,
        analyticsTileType: F,
        analyticsImpressionType: H,
        backgroundGradient: U,
    } = e;
    n.useEffect(() => {
        (0, _.ap)(O);
    }, [O]);
    let z = (0, m.bG)(
            [k.A],
            () => {
                let e = k.A.getStorefrontMetadata(O);
                return e?.logoAssetId != null ? (0, S.YE)(O, e.logoAssetId, 256) : void 0;
            },
            [O],
        ),
        Y = B ?? z,
        G = (function (e, s) {
            let l = n.useRef([]);
            n.useEffect(() => {
                for (let l of e) (0, _.Pp)(s, l);
            }, [e, s]);
            let t = (0, m.bG)(
                    [N.A],
                    () => !e.some((e) => N.A.isFetching(e)) && e.filter((e) => null != N.A.get(e)).length < 4,
                    [e],
                ),
                r = A.default.getCurrentUser()?.id,
                a = n.useMemo(() => (t ? [s] : []), [t, s]),
                i = n.useMemo(() => (t && null != r ? [r] : []), [t, r]),
                { recommendations: c, status: o } = (0, y.XQ)({
                    applicationIds: a,
                    userIds: i,
                    numItems: 4,
                    source: I.B5.USER_PROFILE,
                }),
                u = (0, m.yK)(
                    [N.A],
                    () => {
                        if (e.some((e) => N.A.isFetching(e))) return l.current;
                        let s = e.filter((e) => null != N.A.get(e));
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
    (0, v.j)({ skuIds: G });
    let J = (0, L.uM)(),
        { analyticsLocations: V } = (0, h.Ay)(),
        $ = n.useRef(null),
        Q = n.useRef(!1),
        X = n.useRef(null),
        q = n.useMemo(() => ({ pageSection: P, placement: C.Ye.COLLECTIBLES_SHOP_BANNER }), [P]),
        W = n.useCallback(
            (e, s) => {
                b.default.track(R.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: J?.sessionId,
                    page_type: r,
                    page_category: J?.pageCategory,
                    page_section: J?.pageSection,
                    tile_type: F,
                    cta_name: e,
                    ...(null != s ? { sku_id: s } : void 0),
                });
            },
            [J?.sessionId, J?.pageCategory, J?.pageSection, r, F],
        ),
        Z = "button" === D.kind ? D.onClick : void 0,
        ee = "button" === D.kind ? D.onMouseDown : void 0,
        es = n.useCallback(() => {
            ee?.();
        }, [ee]),
        el = n.useCallback(() => {
            (W("go_to_game_shop"), Z?.());
        }, [W, Z]),
        et = n.useCallback(
            (e, s) => {
                let { skuId: l, applicationId: t } = s;
                (W("card_click", l), (0, E.R)({ skuId: l, applicationId: t, isStorefront: !1, analyticsLocations: V }));
            },
            [W, V],
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
                                  b.default.track(R.HAw.COLLECTIBLES_TILE_IMPRESSION, {
                                      collectibles_shop_session_id: J?.sessionId,
                                      page_type: r,
                                      page_category: J?.pageCategory,
                                      page_section: J?.pageSection,
                                      type: H,
                                  }));
                          }, 1e3))
                        : e || null === X.current || (clearTimeout(X.current), (X.current = null)));
            },
            [J?.sessionId, J?.pageCategory, J?.pageSection, r, H],
        );
    return (n.useEffect(
        () => () => {
            null !== X.current && (clearTimeout(X.current), (X.current = null));
        },
        [],
    ),
    0 === G.length)
        ? null
        : (0, t.jsx)(i.N, {
              theme: R.NJ8.DARK,
              children: (e) =>
                  (0, t.jsx)(p.L, {
                      innerRef: $,
                      onChange: er,
                      threshold: 0,
                      children: (0, t.jsx)("div", {
                          ref: $,
                          className: a()(M.YB, e),
                          children: (0, t.jsxs)("div", {
                              className: M.kL,
                              children: [
                                  null != U && (0, t.jsx)("div", { className: M.D7, style: { background: U } }),
                                  null != s &&
                                      (0, t.jsx)("div", {
                                          className: M.b,
                                          children: (0, t.jsx)(c.J, { size: "sm", variant: "icon-only", onClick: en }),
                                      }),
                                  null != Y && (0, t.jsx)("img", { className: M.wm, src: Y, alt: "" }),
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
                                                      "custom" === D.kind
                                                          ? D.node
                                                          : (0, t.jsx)(g.$, {
                                                                variant: "overlay-primary",
                                                                size: "sm",
                                                                text: D.text,
                                                                onMouseDown: es,
                                                                onClick: el,
                                                            }),
                                                  ],
                                              }),
                                          ],
                                      }),
                                  }),
                                  (0, t.jsxs)(C.E9, {
                                      newValue: q,
                                      children: [
                                          (0, t.jsx)(x.A, {
                                              gap: "md",
                                              children: G.map((e, s) =>
                                                  (0, t.jsx)(
                                                      "div",
                                                      {
                                                          className: M.Ko,
                                                          children: (0, t.jsx)(j.Ay, {
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
