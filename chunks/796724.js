t.d(n, { Z: () => I }), t(642613);
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
    x = t(343312),
    p = t(30910),
    v = t(281014),
    h = t(837329),
    j = t(531508),
    b = t(133091),
    _ = t(669460),
    C = t(619733),
    E = t(948208),
    N = t(388032),
    S = t(817121);
function O(e) {
    let { plan: n, selected: t, className: i } = e;
    return null == n
        ? null
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsxs)("div", {
                      className: a()(S.optionContainer, i),
                      children: [
                          (0, r.jsx)("span", { children: n.name }),
                          (0, r.jsxs)("div", {
                              className: S.labelContainer,
                              children: [
                                  (0, r.jsx)(c.Ucv, {
                                      size: "xs",
                                      color: c.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK,
                                  }),
                                  (0, r.jsx)(c.Text, {
                                      variant: "text-xs/medium",
                                      children: N.intl.format(E.default.kOMlHh, { boostCount: n.cost }),
                                  }),
                              ],
                          }),
                      ],
                  }),
                  !t && (0, r.jsx)("div", { className: S.optionSpacer }),
              ],
          });
}
function y(e) {
    let { region: n, selected: t, disabled: i, className: l } = e,
        { pingText: o, pingCircleStyle: s } = (0, h.u)(n.pingUrl);
    return null == n
        ? null
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsxs)("div", {
                      className: a()(S.optionContainer, { [S.disabled]: i }, l),
                      children: [
                          (0, r.jsx)("span", { children: n.name }),
                          (0, r.jsx)("div", {
                              className: S.labelContainer,
                              children: i
                                  ? (0, r.jsx)("span", { children: N.intl.string(E.default.aCyHe3) })
                                  : "" !== n.pingUrl
                                    ? (0, r.jsxs)(r.Fragment, {
                                          children: [
                                              (0, r.jsx)("div", { className: a()(S.pingCircle, s) }),
                                              (0, r.jsx)(c.Text, {
                                                  variant: "text-xs/medium",
                                                  children: o,
                                              }),
                                          ],
                                      })
                                    : null,
                          }),
                      ],
                  }),
                  !t && (0, r.jsx)("div", { className: S.optionSpacer }),
              ],
          });
}
function I() {
    let {
        guildId: e,
        currentGame: n,
        regionId: t,
        gameServerInstance: l,
        setRegionId: a,
        name: h,
        setName: I,
        planId: P,
        setPlanId: T,
        planCost: w,
        stepLoading: Z,
        error: G,
        gameProvider: R,
    } = (0, x.JL)();
    i.useEffect(() => {
        (0, g._k)(e);
    }, [e]);
    let k = (0, o.e7)([m.Z], () => m.Z.getRegions()),
        M = (0, o.e7)([m.Z], () => m.Z.getRegionState()),
        B = i.useMemo(() => {
            var e;
            return null !=
                (e = k
                    .sort((e, n) => (0, b.Z)(e, n, M))
                    .map((e) => ({
                        value: e,
                        label: e.name,
                    })))
                ? e
                : [];
        }, [M, k]),
        L = i.useMemo(() => {
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
        z = (0, v.Z)(),
        D = null != l,
        H = (0, j.Z)(l),
        F = (0, _.Z)(R),
        U = null != R && null != C.nd[R] ? C.nd[R] : "";
    return null == n
        ? (0, r.jsx)("div", {
              className: S.spinnerContainer,
              children: (0, r.jsx)(c.$jN, { type: c.RAz.SPINNING_CIRCLE }),
          })
        : (0, r.jsxs)("div", {
              className: S.container,
              children: [
                  (0, r.jsxs)("div", {
                      className: S.contentContainer,
                      children: [
                          (0, r.jsxs)("div", {
                              className: S.settingsContainer,
                              children: [
                                  (0, r.jsxs)("div", {
                                      className: S.sectionContainer,
                                      children: [
                                          (0, r.jsxs)("div", {
                                              className: S.sectionHeader,
                                              children: [
                                                  (0, r.jsx)(c.Heading, {
                                                      className: S.headerText,
                                                      variant: "heading-sm/semibold",
                                                      color: "text-secondary",
                                                      children: N.intl.string(E.default.rOMEZW),
                                                  }),
                                                  (0, r.jsx)(s.u, {
                                                      position: "top",
                                                      text: N.intl.string(E.default.THJY1t),
                                                      children: (0, r.jsx)(c.idN, {
                                                          className: S.sectionHeaderIcon,
                                                          size: "xs",
                                                      }),
                                                  }),
                                              ],
                                          }),
                                          (0, r.jsx)(c.oil, {
                                              value: h,
                                              onChange: I,
                                              placeholder: N.intl.string(E.default.ElVYr6),
                                              maxLength: C.Sg,
                                              disabled: Z || !H,
                                          }),
                                      ],
                                  }),
                                  (0, r.jsxs)("div", {
                                      className: S.sectionContainer,
                                      children: [
                                          (0, r.jsxs)("div", {
                                              className: S.sectionHeader,
                                              children: [
                                                  (0, r.jsx)(c.Heading, {
                                                      className: S.headerText,
                                                      variant: "heading-sm/semibold",
                                                      color: "text-secondary",
                                                      children: N.intl.string(E.default.nB5OZ2),
                                                  }),
                                                  (0, r.jsx)(s.u, {
                                                      position: "top",
                                                      text: N.intl.string(
                                                          null != l ? E.default["7mX0gI"] : E.default["61N+Pz"],
                                                      ),
                                                      children: (0, r.jsx)(c.idN, {
                                                          className: S.sectionHeaderIcon,
                                                          size: "xs",
                                                      }),
                                                  }),
                                                  (0, r.jsx)("div", {
                                                      className: S.refresh,
                                                      children: (0, r.jsx)(s.u, {
                                                          asContainer: !0,
                                                          position: "top",
                                                          text: N.intl.string(E.default.kGkE7e),
                                                          children: (0, r.jsx)(c.P3F, {
                                                              className: S.sectionHeaderIcon,
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
                                              isDisabled: Z || D || !H,
                                              options: B,
                                              optionClassName: S.option,
                                              select: (e) => a(e.id),
                                              placeholder: N.intl.string(E.default["k+RTIi"]),
                                              renderOptionLabel: (e) => {
                                                  var n;
                                                  return (0, r.jsx)(y, {
                                                      region: e.value,
                                                      selected: e.value.id === t,
                                                      disabled: null != (n = e.disabled) && n,
                                                  });
                                              },
                                              renderOptionValue: (e) => {
                                                  var n;
                                                  return null == e[0]
                                                      ? null
                                                      : (0, r.jsx)(y, {
                                                            region: e[0].value,
                                                            selected: e[0].value.id === t,
                                                            disabled: null != (n = e[0].disabled) && n,
                                                            className: S.value,
                                                        });
                                              },
                                          }),
                                      ],
                                  }),
                                  (0, r.jsxs)("div", {
                                      className: S.sectionContainer,
                                      children: [
                                          (0, r.jsxs)("div", {
                                              className: S.sectionHeader,
                                              children: [
                                                  (0, r.jsx)(c.Heading, {
                                                      className: S.headerText,
                                                      variant: "heading-sm/semibold",
                                                      color: "text-secondary",
                                                      children: N.intl.string(E.default["K+zMYm"]),
                                                  }),
                                                  (0, r.jsx)(s.u, {
                                                      position: "top",
                                                      text: N.intl.string(E.default["/wD5IC"]),
                                                      children: (0, r.jsx)(c.idN, {
                                                          className: S.sectionHeaderIcon,
                                                          size: "xs",
                                                      }),
                                                  }),
                                              ],
                                          }),
                                          (0, r.jsx)(c.PhF, {
                                              serialize: (e) => e.id,
                                              isSelected: (e) => e.id === P,
                                              isDisabled: Z || !H,
                                              options: L,
                                              optionClassName: S.option,
                                              select: (e) => T(e.id),
                                              placeholder: N.intl.string(E.default.JdMW0t),
                                              renderOptionValue: (e) => {
                                                  var n, t, i;
                                                  return (0, r.jsx)(O, {
                                                      plan: null == (n = e[0]) ? void 0 : n.value,
                                                      selected:
                                                          (null == (i = e[0]) || null == (t = i.value)
                                                              ? void 0
                                                              : t.id) === P,
                                                      className: S.value,
                                                  });
                                              },
                                              renderOptionLabel: (e) =>
                                                  (0, r.jsx)(O, {
                                                      plan: e.value,
                                                      selected: e.value.id === P,
                                                  }),
                                          }),
                                      ],
                                  }),
                              ],
                          }),
                          (0, r.jsx)("div", {
                              className: S.gameDetailsContainer,
                              children: (0, r.jsx)(f.Z, {}),
                          }),
                      ],
                  }),
                  null != l &&
                      0 !== w &&
                      (0, r.jsx)(d.Z, {
                          className: S.infoBox,
                          children: (0, r.jsx)(c.Text, {
                              variant: "text-xs/medium",
                              children:
                                  w < 0
                                      ? N.intl.format(E.default.SorKam, { boostCount: Math.abs(w) })
                                      : N.intl.format(E.default.n2wpys, { boostCount: w }),
                          }),
                      }),
                  !H &&
                      (0, r.jsx)(d.Z, {
                          className: S.infoBox,
                          look: d.z.WARNING,
                          children: (0, r.jsx)(c.Text, {
                              variant: "text-xs/medium",
                              children: N.intl.string(E.default["/JNPWV"]),
                          }),
                      }),
                  (0, r.jsx)(c.Text, {
                      variant: "text-sm/medium",
                      children:
                          null != R &&
                          N.intl.format(D ? E.default.num0a2 : E.default.p5KZDg, {
                              provider: F,
                              termsOfServiceUrl: () => (0, u.q)({ href: U }),
                              helpCenterUrl: "https://google.com/help-center",
                          }),
                  }),
                  null != G &&
                      (0, r.jsx)(c.Text, {
                          variant: "text-xs/medium",
                          color: "text-danger",
                          children: G,
                      }),
                  (0, r.jsxs)(p.o2, {
                      step: C.EK.SERVER_SETTINGS,
                      className: S.footerContainer,
                      children: [(0, r.jsx)(p.c_, {}), (0, r.jsx)(p.$b, { disabled: !z })],
                  }),
              ],
          });
}
