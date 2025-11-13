t.d(n, { Z: () => w }), t(642613);
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
    f = t(578756),
    x = t(802659),
    p = t(241306),
    v = t(343312),
    h = t(30910),
    j = t(281014),
    b = t(837329),
    _ = t(531508),
    C = t(133091),
    E = t(669460),
    N = t(619733),
    S = t(981631),
    O = t(732031),
    y = t(388032),
    I = t(817121);
function T(e) {
    let { plan: n, selected: t, className: i } = e;
    return null == n
        ? null
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsxs)("div", {
                      className: a()(I.optionContainer, i),
                      children: [
                          (0, r.jsx)("span", { children: n.name }),
                          (0, r.jsxs)("div", {
                              className: I.labelContainer,
                              children: [
                                  (0, r.jsx)(d.Ucv, {
                                      size: "xs",
                                      color: d.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK,
                                  }),
                                  (0, r.jsx)(d.Text, {
                                      variant: "text-xs/medium",
                                      children: y.intl.format(O.default.kOMlHs, { boostCount: n.cost }),
                                  }),
                              ],
                          }),
                      ],
                  }),
                  !t && (0, r.jsx)("div", { className: I.optionSpacer }),
              ],
          });
}
function P(e) {
    let { region: n, selected: t, disabled: i, className: l } = e,
        { pingText: o, pingCircleStyle: s } = (0, b.u)(n.pingUrl);
    return null == n
        ? null
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsxs)("div", {
                      className: a()(I.optionContainer, { [I.disabled]: i }, l),
                      children: [
                          (0, r.jsx)("span", { children: n.name }),
                          (0, r.jsx)("div", {
                              className: I.labelContainer,
                              children: i
                                  ? (0, r.jsx)("span", { children: y.intl.string(O.default.aCyHe2) })
                                  : "" !== n.pingUrl
                                    ? (0, r.jsxs)(r.Fragment, {
                                          children: [
                                              (0, r.jsx)("div", { className: a()(I.pingCircle, s) }),
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
                  !t && (0, r.jsx)("div", { className: I.optionSpacer }),
              ],
          });
}
function w() {
    let {
        guildId: e,
        currentGame: n,
        regionId: t,
        gameServerInstance: l,
        setRegionId: a,
        name: b,
        setName: w,
        planId: R,
        setPlanId: Z,
        planCost: G,
        stepLoading: k,
        error: M,
        gameProvider: B,
    } = (0, v.JL)();
    (0, f.Dk)(e, null == l ? void 0 : l.id, null == l ? "create" : "edit"),
        i.useEffect(() => {
            (0, m._k)(e);
        }, [e]);
    let L = (0, o.e7)([x.Z], () => x.Z.getRegions()),
        D = (0, o.e7)([x.Z], () => x.Z.getRegionState()),
        H = i.useMemo(() => {
            var e;
            return null !=
                (e = L.sort((e, n) => (0, C.Z)(e, n, D)).map((e) => ({
                    value: e,
                    label: e.name,
                    disabled: !0 !== e.enabled,
                })))
                ? e
                : [];
        }, [D, L]),
        z = i.useMemo(() => L.some((e) => "" !== e.pingUrl), [L]),
        U = i.useMemo(() => {
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
        F = (0, j.Z)(),
        { isValid: V, errors: A } = (0, j.a)(b),
        K = null != l,
        W = (0, _.Z)(l),
        J = (0, E.Z)(B),
        Y = null != B && null != N.nd[B] ? N.nd[B] : "";
    return null == n
        ? (0, r.jsx)("div", {
              className: I.spinnerContainer,
              children: (0, r.jsx)(d.$jN, { type: d.RAz.SPINNING_CIRCLE }),
          })
        : (0, r.jsxs)("div", {
              className: I.container,
              children: [
                  (0, r.jsxs)("div", {
                      className: I.contentContainer,
                      children: [
                          (0, r.jsxs)("div", {
                              className: I.settingsContainer,
                              children: [
                                  (0, r.jsxs)("div", {
                                      className: I.sectionContainer,
                                      children: [
                                          (0, r.jsxs)("div", {
                                              className: I.sectionHeader,
                                              children: [
                                                  (0, r.jsx)(d.Heading, {
                                                      className: I.headerText,
                                                      variant: "heading-sm/semibold",
                                                      color: "text-secondary",
                                                      children: y.intl.string(O.default.rOMEZd),
                                                  }),
                                                  (0, r.jsx)(s.u, {
                                                      position: "top",
                                                      text: y.intl.string(O.default.THJY1n),
                                                      children: (0, r.jsx)(d.idN, {
                                                          className: I.sectionHeaderIcon,
                                                          size: "xs",
                                                      }),
                                                  }),
                                              ],
                                          }),
                                          (0, r.jsx)(d.oil, {
                                              value: b,
                                              onChange: w,
                                              placeholder: y.intl.string(O.default.ElVYr3),
                                              maxLength: N.Sg,
                                              disabled: k || !W,
                                              error: A.name,
                                          }),
                                      ],
                                  }),
                                  (0, r.jsxs)("div", {
                                      className: I.sectionContainer,
                                      children: [
                                          (0, r.jsxs)("div", {
                                              className: I.sectionHeader,
                                              children: [
                                                  (0, r.jsx)(d.Heading, {
                                                      className: I.headerText,
                                                      variant: "heading-sm/semibold",
                                                      color: "text-secondary",
                                                      children: y.intl.string(O.default.nB5OZ4),
                                                  }),
                                                  (0, r.jsx)(s.u, {
                                                      position: "top",
                                                      text: y.intl.string(
                                                          null != l ? O.default["7mX0gE"] : O.default["61N+P6"],
                                                      ),
                                                      children: (0, r.jsx)(d.idN, {
                                                          className: I.sectionHeaderIcon,
                                                          size: "xs",
                                                      }),
                                                  }),
                                                  !K &&
                                                      z &&
                                                      (0, r.jsx)("div", {
                                                          className: I.refresh,
                                                          children: (0, r.jsx)(s.u, {
                                                              asContainer: !0,
                                                              position: "top",
                                                              text: y.intl.string(O.default.kGkE7a),
                                                              children: (0, r.jsx)(d.P3F, {
                                                                  className: I.sectionHeaderIcon,
                                                                  onClick: () => (0, m.UM)(),
                                                                  children: (0, r.jsx)(d.DuK, { size: "xs" }),
                                                              }),
                                                          }),
                                                      }),
                                              ],
                                          }),
                                          K
                                              ? (0, r.jsx)(d.oil, {
                                                    value: null == l ? void 0 : l.regionName,
                                                    disabled: !0,
                                                    placeholder: y.intl.string(O.default["k+RTIm"]),
                                                })
                                              : (0, r.jsx)(d.PhF, {
                                                    serialize: (e) => e.id,
                                                    isSelected: (e) => e.id === t,
                                                    isDisabled: k || K || !W,
                                                    options: H,
                                                    optionClassName: I.option,
                                                    select: (e) => a(e.id),
                                                    placeholder: y.intl.string(O.default["k+RTIm"]),
                                                    renderOptionLabel: (e) => {
                                                        var n;
                                                        return (0, r.jsx)(P, {
                                                            region: e.value,
                                                            selected: e.value.id === t,
                                                            disabled: null != (n = e.disabled) && n,
                                                        });
                                                    },
                                                    renderOptionValue: (e) => {
                                                        var n;
                                                        return null == e[0]
                                                            ? null
                                                            : (0, r.jsx)(P, {
                                                                  region: e[0].value,
                                                                  selected: e[0].value.id === t,
                                                                  disabled: null != (n = e[0].disabled) && n,
                                                                  className: I.value,
                                                              });
                                                    },
                                                }),
                                      ],
                                  }),
                                  (0, r.jsxs)("div", {
                                      className: I.sectionContainer,
                                      children: [
                                          (0, r.jsxs)("div", {
                                              className: I.sectionHeader,
                                              children: [
                                                  (0, r.jsx)(d.Heading, {
                                                      className: I.headerText,
                                                      variant: "heading-sm/semibold",
                                                      color: "text-secondary",
                                                      children: y.intl.string(O.default["K+zMYp"]),
                                                  }),
                                                  (0, r.jsx)(s.u, {
                                                      position: "top",
                                                      text: y.intl.string(O.default["/wD5IM"]),
                                                      children: (0, r.jsx)(d.idN, {
                                                          className: I.sectionHeaderIcon,
                                                          size: "xs",
                                                      }),
                                                  }),
                                              ],
                                          }),
                                          (0, r.jsx)(d.PhF, {
                                              serialize: (e) => e.id,
                                              isSelected: (e) => e.id === R,
                                              isDisabled: k || !W,
                                              options: U,
                                              optionClassName: I.option,
                                              select: (e) => Z(e.id),
                                              placeholder: y.intl.string(O.default.JdMW0i),
                                              renderOptionValue: (e) => {
                                                  var n, t, i;
                                                  return (0, r.jsx)(T, {
                                                      plan: null == (n = e[0]) ? void 0 : n.value,
                                                      selected:
                                                          (null == (i = e[0]) || null == (t = i.value)
                                                              ? void 0
                                                              : t.id) === R,
                                                      className: I.value,
                                                  });
                                              },
                                              renderOptionLabel: (e) =>
                                                  (0, r.jsx)(T, {
                                                      plan: e.value,
                                                      selected: e.value.id === R,
                                                  }),
                                          }),
                                      ],
                                  }),
                              ],
                          }),
                          (0, r.jsx)("div", {
                              className: I.gameDetailsContainer,
                              children: (0, r.jsx)(p.Z, {}),
                          }),
                      ],
                  }),
                  null != l &&
                      0 !== G &&
                      (0, r.jsx)(c.Z, {
                          className: I.infoBox,
                          children: (0, r.jsx)(d.Text, {
                              variant: "text-xs/medium",
                              children:
                                  G < 0
                                      ? y.intl.format(O.default.SorKas, { boostCount: Math.abs(G) })
                                      : y.intl.format(O.default.n2wpym, { boostCount: G }),
                          }),
                      }),
                  !W &&
                      (0, r.jsx)(c.Z, {
                          className: I.infoBox,
                          look: c.z.WARNING,
                          children: (0, r.jsx)(d.Text, {
                              variant: "text-xs/medium",
                              children: y.intl.string(O.default["/JNPWb"]),
                          }),
                      }),
                  (0, r.jsx)(d.Text, {
                      variant: "text-xs/medium",
                      color: "text-muted",
                      children:
                          null != B &&
                          y.intl.format(K ? O.default.num0a6 : O.default.p5KZDr, {
                              provider: J,
                              termsOfServiceUrl: () => (0, g.q)({ href: Y }),
                              helpCenterUrl: u.Z.getArticleURL(S.BhN.GAME_SERVER_HOSTING),
                          }),
                  }),
                  null != M &&
                      (0, r.jsx)(d.Text, {
                          variant: "text-xs/medium",
                          color: "text-danger",
                          children: M,
                      }),
                  (0, r.jsxs)(h.o2, {
                      step: N.EK.SERVER_SETTINGS,
                      className: I.footerContainer,
                      children: [(0, r.jsx)(h.c_, {}), (0, r.jsx)(h.$b, { disabled: !F || !V })],
                  }),
              ],
          });
}
