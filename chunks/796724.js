t.d(n, { Z: () => P }), t(642613);
var r = t(951288),
    i = t(647438),
    l = t(120356),
    a = t.n(l),
    o = t(442837),
    s = t(681715),
    d = t(481060),
    c = t(494620),
    u = t(63063),
    g = t(49012),
    m = t(905551),
    f = t(802659),
    x = t(241306),
    p = t(343312),
    v = t(30910),
    h = t(281014),
    j = t(837329),
    b = t(531508),
    _ = t(133091),
    C = t(669460),
    E = t(619733),
    N = t(981631),
    S = t(470658),
    O = t(388032),
    y = t(817121);
function I(e) {
    let { plan: n, selected: t, className: i } = e;
    return null == n
        ? null
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsxs)("div", {
                      className: a()(y.optionContainer, i),
                      children: [
                          (0, r.jsx)("span", { children: n.name }),
                          (0, r.jsxs)("div", {
                              className: y.labelContainer,
                              children: [
                                  (0, r.jsx)(d.Ucv, {
                                      size: "xs",
                                      color: d.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK,
                                  }),
                                  (0, r.jsx)(d.Text, {
                                      variant: "text-xs/medium",
                                      children: O.intl.format(S.default.kOMlHs, { boostCount: n.cost }),
                                  }),
                              ],
                          }),
                      ],
                  }),
                  !t && (0, r.jsx)("div", { className: y.optionSpacer }),
              ],
          });
}
function T(e) {
    let { region: n, selected: t, disabled: i, className: l } = e,
        { pingText: o, pingCircleStyle: s } = (0, j.u)(n.pingUrl);
    return null == n
        ? null
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsxs)("div", {
                      className: a()(y.optionContainer, { [y.disabled]: i }, l),
                      children: [
                          (0, r.jsx)("span", { children: n.name }),
                          (0, r.jsx)("div", {
                              className: y.labelContainer,
                              children: i
                                  ? (0, r.jsx)("span", { children: O.intl.string(S.default.aCyHe2) })
                                  : "" !== n.pingUrl
                                    ? (0, r.jsxs)(r.Fragment, {
                                          children: [
                                              (0, r.jsx)("div", { className: a()(y.pingCircle, s) }),
                                              (0, r.jsx)(d.Text, {
                                                  variant: "text-xs/medium",
                                                  children: o,
                                              }),
                                          ],
                                      })
                                    : null,
                          }),
                      ],
                  }),
                  !t && (0, r.jsx)("div", { className: y.optionSpacer }),
              ],
          });
}
function P() {
    let {
        guildId: e,
        currentGame: n,
        regionId: t,
        gameServerInstance: l,
        setRegionId: a,
        name: j,
        setName: P,
        planId: w,
        setPlanId: R,
        planCost: G,
        stepLoading: Z,
        error: k,
        gameProvider: M,
    } = (0, p.JL)();
    i.useEffect(() => {
        (0, m._k)(e);
    }, [e]);
    let B = (0, o.e7)([f.Z], () => f.Z.getRegions()),
        L = (0, o.e7)([f.Z], () => f.Z.getRegionState()),
        H = i.useMemo(() => {
            var e;
            return null !=
                (e = B.sort((e, n) => (0, _.Z)(e, n, L)).map((e) => ({
                    value: e,
                    label: e.name,
                })))
                ? e
                : [];
        }, [L, B]),
        z = i.useMemo(() => {
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
        D = (0, h.Z)(),
        F = null != l,
        U = (0, b.Z)(l),
        A = (0, C.Z)(M),
        V = null != M && null != E.nd[M] ? E.nd[M] : "";
    return null == n
        ? (0, r.jsx)("div", {
              className: y.spinnerContainer,
              children: (0, r.jsx)(d.$jN, { type: d.RAz.SPINNING_CIRCLE }),
          })
        : (0, r.jsxs)("div", {
              className: y.container,
              children: [
                  (0, r.jsxs)("div", {
                      className: y.contentContainer,
                      children: [
                          (0, r.jsxs)("div", {
                              className: y.settingsContainer,
                              children: [
                                  (0, r.jsxs)("div", {
                                      className: y.sectionContainer,
                                      children: [
                                          (0, r.jsxs)("div", {
                                              className: y.sectionHeader,
                                              children: [
                                                  (0, r.jsx)(d.Heading, {
                                                      className: y.headerText,
                                                      variant: "heading-sm/semibold",
                                                      color: "text-secondary",
                                                      children: O.intl.string(S.default.rOMEZd),
                                                  }),
                                                  (0, r.jsx)(s.u, {
                                                      position: "top",
                                                      text: O.intl.string(S.default.THJY1n),
                                                      children: (0, r.jsx)(d.idN, {
                                                          className: y.sectionHeaderIcon,
                                                          size: "xs",
                                                      }),
                                                  }),
                                              ],
                                          }),
                                          (0, r.jsx)(d.oil, {
                                              value: j,
                                              onChange: P,
                                              placeholder: O.intl.string(S.default.ElVYr3),
                                              maxLength: E.Sg,
                                              disabled: Z || !U,
                                          }),
                                      ],
                                  }),
                                  (0, r.jsxs)("div", {
                                      className: y.sectionContainer,
                                      children: [
                                          (0, r.jsxs)("div", {
                                              className: y.sectionHeader,
                                              children: [
                                                  (0, r.jsx)(d.Heading, {
                                                      className: y.headerText,
                                                      variant: "heading-sm/semibold",
                                                      color: "text-secondary",
                                                      children: O.intl.string(S.default.nB5OZ4),
                                                  }),
                                                  (0, r.jsx)(s.u, {
                                                      position: "top",
                                                      text: O.intl.string(
                                                          null != l ? S.default["7mX0gE"] : S.default["61N+P6"],
                                                      ),
                                                      children: (0, r.jsx)(d.idN, {
                                                          className: y.sectionHeaderIcon,
                                                          size: "xs",
                                                      }),
                                                  }),
                                                  !F &&
                                                      (0, r.jsx)("div", {
                                                          className: y.refresh,
                                                          children: (0, r.jsx)(s.u, {
                                                              asContainer: !0,
                                                              position: "top",
                                                              text: O.intl.string(S.default.kGkE7a),
                                                              children: (0, r.jsx)(d.P3F, {
                                                                  className: y.sectionHeaderIcon,
                                                                  onClick: () => (0, m.UM)(),
                                                                  children: (0, r.jsx)(d.DuK, { size: "xs" }),
                                                              }),
                                                          }),
                                                      }),
                                              ],
                                          }),
                                          F
                                              ? (0, r.jsx)(d.oil, {
                                                    value: null == l ? void 0 : l.regionName,
                                                    disabled: !0,
                                                    placeholder: O.intl.string(S.default["k+RTIm"]),
                                                })
                                              : (0, r.jsx)(d.PhF, {
                                                    serialize: (e) => e.id,
                                                    isSelected: (e) => e.id === t,
                                                    isDisabled: Z || F || !U,
                                                    options: H,
                                                    optionClassName: y.option,
                                                    select: (e) => a(e.id),
                                                    placeholder: O.intl.string(S.default["k+RTIm"]),
                                                    renderOptionLabel: (e) => {
                                                        var n;
                                                        return (0, r.jsx)(T, {
                                                            region: e.value,
                                                            selected: e.value.id === t,
                                                            disabled: null != (n = e.disabled) && n,
                                                        });
                                                    },
                                                    renderOptionValue: (e) => {
                                                        var n;
                                                        return null == e[0]
                                                            ? null
                                                            : (0, r.jsx)(T, {
                                                                  region: e[0].value,
                                                                  selected: e[0].value.id === t,
                                                                  disabled: null != (n = e[0].disabled) && n,
                                                                  className: y.value,
                                                              });
                                                    },
                                                }),
                                      ],
                                  }),
                                  (0, r.jsxs)("div", {
                                      className: y.sectionContainer,
                                      children: [
                                          (0, r.jsxs)("div", {
                                              className: y.sectionHeader,
                                              children: [
                                                  (0, r.jsx)(d.Heading, {
                                                      className: y.headerText,
                                                      variant: "heading-sm/semibold",
                                                      color: "text-secondary",
                                                      children: O.intl.string(S.default["K+zMYp"]),
                                                  }),
                                                  (0, r.jsx)(s.u, {
                                                      position: "top",
                                                      text: O.intl.string(S.default["/wD5IM"]),
                                                      children: (0, r.jsx)(d.idN, {
                                                          className: y.sectionHeaderIcon,
                                                          size: "xs",
                                                      }),
                                                  }),
                                              ],
                                          }),
                                          (0, r.jsx)(d.PhF, {
                                              serialize: (e) => e.id,
                                              isSelected: (e) => e.id === w,
                                              isDisabled: Z || !U,
                                              options: z,
                                              optionClassName: y.option,
                                              select: (e) => R(e.id),
                                              placeholder: O.intl.string(S.default.JdMW0i),
                                              renderOptionValue: (e) => {
                                                  var n, t, i;
                                                  return (0, r.jsx)(I, {
                                                      plan: null == (n = e[0]) ? void 0 : n.value,
                                                      selected:
                                                          (null == (i = e[0]) || null == (t = i.value)
                                                              ? void 0
                                                              : t.id) === w,
                                                      className: y.value,
                                                  });
                                              },
                                              renderOptionLabel: (e) =>
                                                  (0, r.jsx)(I, {
                                                      plan: e.value,
                                                      selected: e.value.id === w,
                                                  }),
                                          }),
                                      ],
                                  }),
                              ],
                          }),
                          (0, r.jsx)("div", {
                              className: y.gameDetailsContainer,
                              children: (0, r.jsx)(x.Z, {}),
                          }),
                      ],
                  }),
                  null != l &&
                      0 !== G &&
                      (0, r.jsx)(c.Z, {
                          className: y.infoBox,
                          children: (0, r.jsx)(d.Text, {
                              variant: "text-xs/medium",
                              children:
                                  G < 0
                                      ? O.intl.format(S.default.SorKas, { boostCount: Math.abs(G) })
                                      : O.intl.format(S.default.n2wpym, { boostCount: G }),
                          }),
                      }),
                  !U &&
                      (0, r.jsx)(c.Z, {
                          className: y.infoBox,
                          look: c.z.WARNING,
                          children: (0, r.jsx)(d.Text, {
                              variant: "text-xs/medium",
                              children: O.intl.string(S.default["/JNPWb"]),
                          }),
                      }),
                  (0, r.jsx)(d.Text, {
                      variant: "text-sm/medium",
                      children:
                          null != M &&
                          O.intl.format(F ? S.default.num0a6 : S.default.p5KZDr, {
                              provider: A,
                              termsOfServiceUrl: () => (0, g.q)({ href: V }),
                              helpCenterUrl: u.Z.getArticleURL(N.BhN.GAME_SERVER_HOSTING),
                          }),
                  }),
                  null != k &&
                      (0, r.jsx)(d.Text, {
                          variant: "text-xs/medium",
                          color: "text-danger",
                          children: k,
                      }),
                  (0, r.jsxs)(v.o2, {
                      step: E.EK.SERVER_SETTINGS,
                      className: y.footerContainer,
                      children: [(0, r.jsx)(v.c_, {}), (0, r.jsx)(v.$b, { disabled: !D })],
                  }),
              ],
          });
}
