l.d(t, { A: () => G }), l(638769);
var r = l(627968),
    n = l(64700),
    s = l(503698),
    i = l.n(s),
    a = l(311907),
    d = l(843282),
    c = l(435371),
    o = l(397927),
    u = l(801264),
    f = l(975571),
    b = l(307600),
    m = l(665171),
    x = l(397400),
    j = l(588591),
    v = l(695667),
    g = l(27023),
    p = l(548392),
    h = l(298009),
    N = l(638529),
    _ = l(928873),
    S = l(12663),
    O = l(285286),
    E = l(800007),
    y = l(652215),
    A = l(294726),
    T = l(985018),
    w = l(513246);
function P(e) {
    let { plan: t, selected: l, className: n } = e;
    return null == t
        ? null
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsxs)("div", {
                      className: i()(w.NV, n),
                      children: [
                          (0, r.jsx)("span", { children: t.name }),
                          (0, r.jsxs)("div", {
                              className: w._A,
                              children: [
                                  (0, r.jsx)(o._Jp, {
                                      size: "xs",
                                      color: o.LU0.unsafe_rawColors.GUILD_BOOSTING_PINK,
                                  }),
                                  (0, r.jsx)(o.Text, {
                                      variant: "text-xs/medium",
                                      children: T.intl.format(A.default.kOMlHs, { boostCount: t.cost }),
                                  }),
                              ],
                          }),
                      ],
                  }),
                  !l && (0, r.jsx)("div", { className: w.S6 }),
              ],
          });
}
function R(e) {
    let { region: t, selected: l, disabled: n, className: s } = e,
        { pingText: a, pingCircleStyle: d } = (0, N.b)(t.pingUrl);
    return null == t
        ? null
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsxs)("div", {
                      className: i()(w.NV, { [w.r9]: n }, s),
                      children: [
                          (0, r.jsx)("span", { children: t.name }),
                          (0, r.jsx)("div", {
                              className: w._A,
                              children: n
                                  ? (0, r.jsx)("span", { children: T.intl.string(A.default.aCyHe2) })
                                  : "" !== t.pingUrl
                                    ? (0, r.jsxs)(r.Fragment, {
                                          children: [
                                              (0, r.jsx)("div", { className: i()(w.Jg, d) }),
                                              (0, r.jsx)(o.Text, {
                                                  variant: "text-xs/medium",
                                                  children: a,
                                              }),
                                          ],
                                      })
                                    : null,
                          }),
                      ],
                  }),
                  !l && (0, r.jsx)("div", { className: w.S6 }),
              ],
          });
}
function G() {
    let {
        guildId: e,
        currentGame: t,
        regionId: l,
        gameServerInstance: s,
        setRegionId: i,
        name: N,
        setName: G,
        planId: I,
        setPlanId: k,
        planCost: M,
        stepLoading: U,
        error: V,
        gameProvider: C,
    } = (0, g.bv)();
    (0, x.SX)(e, null == s ? void 0 : s.id, null == s ? "create" : "edit"),
        n.useEffect(() => {
            (0, m.Jr)(e);
        }, [e]);
    let K = (0, a.bG)([j.A], () => j.A.getRegions()),
        L = (0, a.bG)([j.A], () => j.A.getRegionState()),
        D = n.useMemo(() => {
            var e;
            return null !=
                (e = K.sort((e, t) => (0, S.A)(e, t, L)).map((e) => ({
                    value: e,
                    label: e.name,
                    disabled: !0 !== e.enabled,
                })))
                ? e
                : [];
        }, [L, K]),
        H = n.useMemo(() => K.some((e) => "" !== e.pingUrl), [K]),
        F = n.useMemo(() => {
            var e;
            return null !=
                (e =
                    null == t
                        ? void 0
                        : t.plans.map((e) => ({
                              value: e,
                              label: e.name,
                          })))
                ? e
                : [];
        }, [t]),
        z = (0, h.A)(),
        { isValid: W, errors: Q } = (0, h.u)(N),
        Y = null != s,
        B = (0, _.A)(s),
        Z = (0, O.A)(C),
        q = null != C && null != E.eh[C] ? E.eh[C] : "";
    return null == t
        ? (0, r.jsx)("div", {
              className: w.dc,
              children: (0, r.jsx)(o.y$y, { type: o.tVU.SPINNING_CIRCLE }),
          })
        : (0, r.jsxs)("div", {
              className: w.kL,
              children: [
                  (0, r.jsxs)("div", {
                      className: w.hQ,
                      children: [
                          (0, r.jsxs)("div", {
                              className: w.V1,
                              children: [
                                  (0, r.jsxs)("div", {
                                      className: w.hd,
                                      children: [
                                          (0, r.jsxs)("div", {
                                              className: w.bV,
                                              children: [
                                                  (0, r.jsx)(o.Heading, {
                                                      className: w.TK,
                                                      variant: "heading-sm/semibold",
                                                      color: "text-subtle",
                                                      children: T.intl.string(A.default.rOMEZd),
                                                  }),
                                                  (0, r.jsx)(c.m_, {
                                                      position: "top",
                                                      text: T.intl.string(A.default.THJY1n),
                                                      children: (0, r.jsx)(o.cBN, {
                                                          className: w.GI,
                                                          size: "xs",
                                                      }),
                                                  }),
                                              ],
                                          }),
                                          (0, r.jsx)(o.ksK, {
                                              value: N,
                                              onChange: G,
                                              placeholder: T.intl.string(A.default.ElVYr3),
                                              maxLength: E.XF,
                                              disabled: U || !B,
                                              error: Q.name,
                                          }),
                                      ],
                                  }),
                                  (0, r.jsxs)("div", {
                                      className: w.hd,
                                      children: [
                                          (0, r.jsxs)("div", {
                                              className: w.bV,
                                              children: [
                                                  (0, r.jsx)(o.Heading, {
                                                      className: w.TK,
                                                      variant: "heading-sm/semibold",
                                                      color: "text-subtle",
                                                      children: T.intl.string(A.default.nB5OZ4),
                                                  }),
                                                  (0, r.jsx)(c.m_, {
                                                      position: "top",
                                                      text: T.intl.string(
                                                          null != s ? A.default["7mX0gE"] : A.default["61N+P6"],
                                                      ),
                                                      children: (0, r.jsx)(o.cBN, {
                                                          className: w.GI,
                                                          size: "xs",
                                                      }),
                                                  }),
                                                  !Y &&
                                                      H &&
                                                      (0, r.jsx)("div", {
                                                          className: w.Ow,
                                                          children: (0, r.jsx)(c.m_, {
                                                              asContainer: !0,
                                                              position: "top",
                                                              text: T.intl.string(A.default.kGkE7a),
                                                              children: (0, r.jsx)(o.DUT, {
                                                                  className: w.GI,
                                                                  onClick: () => (0, m.KH)(),
                                                                  children: (0, r.jsx)(o.fNY, { size: "xs" }),
                                                              }),
                                                          }),
                                                      }),
                                              ],
                                          }),
                                          Y
                                              ? (0, r.jsx)(o.ksK, {
                                                    value: null == s ? void 0 : s.regionName,
                                                    disabled: !0,
                                                    placeholder: T.intl.string(A.default["k+RTIm"]),
                                                })
                                              : (0, r.jsx)(d.Pw, {
                                                    serialize: (e) => e.id,
                                                    isSelected: (e) => e.id === l,
                                                    isDisabled: U || Y || !B,
                                                    options: D,
                                                    optionClassName: w.uK,
                                                    select: (e) => i(e.id),
                                                    placeholder: T.intl.string(A.default["k+RTIm"]),
                                                    renderOptionLabel: (e) => {
                                                        var t;
                                                        return (0, r.jsx)(R, {
                                                            region: e.value,
                                                            selected: e.value.id === l,
                                                            disabled: null != (t = e.disabled) && t,
                                                        });
                                                    },
                                                    renderOptionValue: (e) => {
                                                        var t;
                                                        return null == e[0]
                                                            ? null
                                                            : (0, r.jsx)(R, {
                                                                  region: e[0].value,
                                                                  selected: e[0].value.id === l,
                                                                  disabled: null != (t = e[0].disabled) && t,
                                                                  className: w.Uq,
                                                              });
                                                    },
                                                    "data-migration-pending": !0,
                                                }),
                                      ],
                                  }),
                                  (0, r.jsxs)("div", {
                                      className: w.hd,
                                      children: [
                                          (0, r.jsxs)("div", {
                                              className: w.bV,
                                              children: [
                                                  (0, r.jsx)(o.Heading, {
                                                      className: w.TK,
                                                      variant: "heading-sm/semibold",
                                                      color: "text-subtle",
                                                      children: T.intl.string(A.default["K+zMYp"]),
                                                  }),
                                                  (0, r.jsx)(c.m_, {
                                                      position: "top",
                                                      text: T.intl.string(A.default["/wD5IM"]),
                                                      children: (0, r.jsx)(o.cBN, {
                                                          className: w.GI,
                                                          size: "xs",
                                                      }),
                                                  }),
                                              ],
                                          }),
                                          (0, r.jsx)(d.Pw, {
                                              serialize: (e) => e.id,
                                              isSelected: (e) => e.id === I,
                                              isDisabled: U || !B,
                                              options: F,
                                              optionClassName: w.uK,
                                              select: (e) => k(e.id),
                                              placeholder: T.intl.string(A.default.JdMW0i),
                                              renderOptionValue: (e) => {
                                                  var t, l, n;
                                                  return (0, r.jsx)(P, {
                                                      plan: null == (t = e[0]) ? void 0 : t.value,
                                                      selected:
                                                          (null == (n = e[0]) || null == (l = n.value)
                                                              ? void 0
                                                              : l.id) === I,
                                                      className: w.Uq,
                                                  });
                                              },
                                              renderOptionLabel: (e) =>
                                                  (0, r.jsx)(P, {
                                                      plan: e.value,
                                                      selected: e.value.id === I,
                                                  }),
                                              "data-migration-pending": !0,
                                          }),
                                      ],
                                  }),
                              ],
                          }),
                          (0, r.jsx)("div", {
                              className: w.sA,
                              children: (0, r.jsx)(v.A, {}),
                          }),
                      ],
                  }),
                  null != s &&
                      0 !== M &&
                      (0, r.jsx)(u.A, {
                          className: w.et,
                          children: (0, r.jsx)(o.Text, {
                              variant: "text-xs/medium",
                              children:
                                  M < 0
                                      ? T.intl.format(A.default.SorKas, { boostCount: Math.abs(M) })
                                      : T.intl.format(A.default.n2wpym, { boostCount: M }),
                          }),
                      }),
                  !B &&
                      (0, r.jsx)(u.A, {
                          className: w.et,
                          look: u.k.WARNING,
                          children: (0, r.jsx)(o.Text, {
                              variant: "text-xs/medium",
                              children: T.intl.string(A.default["/JNPWb"]),
                          }),
                      }),
                  (null == t ? void 0 : t.early_access) === !0 &&
                      !Y &&
                      (0, r.jsx)(u.A, {
                          className: w.et,
                          look: u.k.INFO,
                          children: (0, r.jsx)(o.Text, {
                              variant: "text-xs/medium",
                              children: T.intl.format(A.default.TnoBGX, { gameName: t.name }),
                          }),
                      }),
                  (0, r.jsx)(o.Text, {
                      variant: "text-xs/medium",
                      color: "text-muted",
                      children:
                          null != C &&
                          T.intl.format(Y ? A.default.num0a6 : A.default.p5KZDr, {
                              provider: Z,
                              termsOfServiceUrl: () => (0, b.h)({ href: q }),
                              helpCenterUrl: f.A.getArticleURL(y.MVz.GAME_SERVER_HOSTING),
                          }),
                  }),
                  null != V &&
                      (0, r.jsx)(o.Text, {
                          variant: "text-xs/medium",
                          color: "text-feedback-critical",
                          children: V,
                      }),
                  (0, r.jsxs)(p.N4, {
                      step: E.HS.SERVER_SETTINGS,
                      className: w.xQ,
                      children: [(0, r.jsx)(p.AI, {}), (0, r.jsx)(p.cp, { disabled: !z || !W })],
                  }),
              ],
          });
}
