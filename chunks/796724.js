t.d(n, { Z: () => y }), t(642613);
var r = t(951288),
    i = t(647438),
    l = t(120356),
    a = t.n(l),
    o = t(442837),
    s = t(681715),
    c = t(481060),
    d = t(494620),
    u = t(49012),
    g = t(905551),
    m = t(802659),
    f = t(241306),
    p = t(343312),
    x = t(30910),
    v = t(281014),
    h = t(837329),
    j = t(133091),
    b = t(669460),
    _ = t(619733),
    C = t(948208),
    E = t(388032),
    N = t(817121);
function S(e) {
    let { plan: n, selected: t, className: i } = e;
    return null == n
        ? null
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsxs)("div", {
                      className: a()(N.optionContainer, i),
                      children: [
                          (0, r.jsx)("span", { children: n.name }),
                          (0, r.jsxs)("div", {
                              className: N.labelContainer,
                              children: [
                                  (0, r.jsx)(c.Ucv, {
                                      size: "xs",
                                      color: c.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK,
                                  }),
                                  (0, r.jsx)(c.Text, {
                                      variant: "text-xs/medium",
                                      children: E.intl.format(C.default.kOMlHh, { boostCount: n.cost }),
                                  }),
                              ],
                          }),
                      ],
                  }),
                  !t && (0, r.jsx)("div", { className: N.optionSpacer }),
              ],
          });
}
function O(e) {
    let { region: n, selected: t, disabled: i, className: l } = e,
        { pingText: o, pingCircleStyle: s } = (0, h.u)(n.pingUrl);
    return null == n
        ? null
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsxs)("div", {
                      className: a()(N.optionContainer, { [N.disabled]: i }, l),
                      children: [
                          (0, r.jsx)("span", { children: n.name }),
                          (0, r.jsx)("div", {
                              className: N.labelContainer,
                              children: i
                                  ? (0, r.jsx)("span", { children: E.intl.string(C.default.aCyHe3) })
                                  : (0, r.jsxs)(r.Fragment, {
                                        children: [
                                            (0, r.jsx)("div", { className: a()(N.pingCircle, s) }),
                                            (0, r.jsx)(c.Text, {
                                                variant: "text-xs/medium",
                                                children: o,
                                            }),
                                        ],
                                    }),
                          }),
                      ],
                  }),
                  !t && (0, r.jsx)("div", { className: N.optionSpacer }),
              ],
          });
}
function y() {
    let {
        guildId: e,
        currentGame: n,
        regionId: t,
        gameServerInstance: l,
        setRegionId: a,
        name: h,
        setName: y,
        planId: T,
        setPlanId: P,
        planCost: I,
        stepLoading: w,
        error: R,
        gameProvider: G,
    } = (0, p.JL)();
    i.useEffect(() => {
        (0, g._k)(e);
    }, [e]);
    let Z = (0, o.e7)([m.Z], () => m.Z.getRegions()),
        k = (0, o.e7)([m.Z], () => m.Z.getRegionState()),
        M = i.useMemo(() => {
            var e;
            return null !=
                (e = Z.sort((e, n) => (0, j.Z)(e, n, k)).map((e) => ({
                    value: e,
                    label: e.name,
                })))
                ? e
                : [];
        }, [k, Z]),
        B = i.useMemo(() => {
            var e;
            return null !=
                (e =
                    null == n
                        ? void 0
                        : n.plans.map((e) => ({
                              value: e,
                              label: e.name,
                          })))
                ? e
                : [];
        }, [n]),
        D = (0, v.Z)(),
        z = null != l,
        L = (0, b.Z)(G),
        H = null != G && null != _.nd[G] ? _.nd[G] : "";
    return null == n
        ? (0, r.jsx)("div", {
              className: N.spinnerContainer,
              children: (0, r.jsx)(c.$jN, { type: c.RAz.SPINNING_CIRCLE }),
          })
        : (0, r.jsxs)("div", {
              className: N.container,
              children: [
                  (0, r.jsxs)("div", {
                      className: N.contentContainer,
                      children: [
                          (0, r.jsxs)("div", {
                              className: N.settingsContainer,
                              children: [
                                  (0, r.jsxs)("div", {
                                      className: N.sectionContainer,
                                      children: [
                                          (0, r.jsxs)("div", {
                                              className: N.sectionHeader,
                                              children: [
                                                  (0, r.jsx)(c.X6q, {
                                                      className: N.headerText,
                                                      variant: "heading-sm/semibold",
                                                      color: "text-secondary",
                                                      children: E.intl.string(C.default.rOMEZW),
                                                  }),
                                                  (0, r.jsx)(s.u, {
                                                      position: "top",
                                                      text: E.intl.string(C.default.THJY1t),
                                                      children: (0, r.jsx)(c.idN, {
                                                          className: N.sectionHeaderIcon,
                                                          size: "xs",
                                                      }),
                                                  }),
                                              ],
                                          }),
                                          (0, r.jsx)(c.oil, {
                                              value: h,
                                              onChange: y,
                                              placeholder: E.intl.string(C.default.ElVYr6),
                                              maxLength: _.Sg,
                                              disabled: w,
                                          }),
                                      ],
                                  }),
                                  (0, r.jsxs)("div", {
                                      className: N.sectionContainer,
                                      children: [
                                          (0, r.jsxs)("div", {
                                              className: N.sectionHeader,
                                              children: [
                                                  (0, r.jsx)(c.X6q, {
                                                      className: N.headerText,
                                                      variant: "heading-sm/semibold",
                                                      color: "text-secondary",
                                                      children: E.intl.string(C.default.nB5OZ2),
                                                  }),
                                                  (0, r.jsx)(s.u, {
                                                      position: "top",
                                                      text: E.intl.string(
                                                          null != l ? C.default["7mX0gI"] : C.default["61N+Pz"],
                                                      ),
                                                      children: (0, r.jsx)(c.idN, {
                                                          className: N.sectionHeaderIcon,
                                                          size: "xs",
                                                      }),
                                                  }),
                                                  (0, r.jsx)("div", {
                                                      className: N.refresh,
                                                      children: (0, r.jsx)(s.u, {
                                                          asContainer: !0,
                                                          position: "top",
                                                          text: E.intl.string(C.default.kGkE7e),
                                                          children: (0, r.jsx)(c.P3F, {
                                                              className: N.sectionHeaderIcon,
                                                              onClick: () => (0, g.UM)(),
                                                              children: (0, r.jsx)(c.DuK, { size: "xs" }),
                                                          }),
                                                      }),
                                                  }),
                                              ],
                                          }),
                                          (0, r.jsx)(c.PhF, {
                                              serialize: (e) => e.id,
                                              isSelected: (e) => e.id === t,
                                              isDisabled: w || z,
                                              options: M,
                                              optionClassName: N.option,
                                              select: (e) => a(e.id),
                                              placeholder: E.intl.string(C.default["k+RTIi"]),
                                              renderOptionLabel: (e) => {
                                                  var n;
                                                  return (0, r.jsx)(O, {
                                                      region: e.value,
                                                      selected: e.value.id === t,
                                                      disabled: null != (n = e.disabled) && n,
                                                  });
                                              },
                                              renderOptionValue: (e) => {
                                                  var n;
                                                  return null == e[0]
                                                      ? null
                                                      : (0, r.jsx)(O, {
                                                            region: e[0].value,
                                                            selected: e[0].value.id === t,
                                                            disabled: null != (n = e[0].disabled) && n,
                                                            className: N.value,
                                                        });
                                              },
                                          }),
                                      ],
                                  }),
                                  (0, r.jsxs)("div", {
                                      className: N.sectionContainer,
                                      children: [
                                          (0, r.jsxs)("div", {
                                              className: N.sectionHeader,
                                              children: [
                                                  (0, r.jsx)(c.X6q, {
                                                      className: N.headerText,
                                                      variant: "heading-sm/semibold",
                                                      color: "text-secondary",
                                                      children: E.intl.string(C.default["K+zMYm"]),
                                                  }),
                                                  (0, r.jsx)(s.u, {
                                                      position: "top",
                                                      text: E.intl.string(C.default["/wD5IC"]),
                                                      children: (0, r.jsx)(c.idN, {
                                                          className: N.sectionHeaderIcon,
                                                          size: "xs",
                                                      }),
                                                  }),
                                              ],
                                          }),
                                          (0, r.jsx)(c.PhF, {
                                              serialize: (e) => e.id,
                                              isSelected: (e) => e.id === T,
                                              isDisabled: w,
                                              options: B,
                                              optionClassName: N.option,
                                              select: (e) => P(e.id),
                                              placeholder: E.intl.string(C.default.JdMW0t),
                                              renderOptionValue: (e) => {
                                                  var n, t, i;
                                                  return (0, r.jsx)(S, {
                                                      plan: null == (n = e[0]) ? void 0 : n.value,
                                                      selected:
                                                          (null == (i = e[0]) || null == (t = i.value)
                                                              ? void 0
                                                              : t.id) === T,
                                                      className: N.value,
                                                  });
                                              },
                                              renderOptionLabel: (e) =>
                                                  (0, r.jsx)(S, {
                                                      plan: e.value,
                                                      selected: e.value.id === T,
                                                  }),
                                          }),
                                      ],
                                  }),
                              ],
                          }),
                          (0, r.jsx)("div", {
                              className: N.gameDetailsContainer,
                              children: (0, r.jsx)(f.Z, {}),
                          }),
                      ],
                  }),
                  null != l &&
                      0 !== I &&
                      (0, r.jsx)(d.Z, {
                          className: N.infoBox,
                          children: (0, r.jsx)(c.Text, {
                              variant: "text-xs/medium",
                              children:
                                  I < 0
                                      ? E.intl.format(C.default.SorKam, { boostCount: Math.abs(I) })
                                      : E.intl.format(C.default.n2wpys, { boostCount: I }),
                          }),
                      }),
                  (0, r.jsx)(c.Text, {
                      variant: "text-sm/medium",
                      children:
                          null != G &&
                          E.intl.format(z ? C.default.num0a2 : C.default.p5KZDg, {
                              provider: L,
                              termsOfServiceUrl: () => (0, u.q)({ href: H }),
                              helpCenterUrl: "https://google.com/help-center",
                          }),
                  }),
                  null != R &&
                      (0, r.jsx)(c.Text, {
                          variant: "text-xs/medium",
                          color: "text-danger",
                          children: R,
                      }),
                  (0, r.jsxs)(x.o2, {
                      step: _.EK.SERVER_SETTINGS,
                      className: N.footerContainer,
                      children: [(0, r.jsx)(x.c_, {}), (0, r.jsx)(x.$b, { disabled: !D })],
                  }),
              ],
          });
}
