t.d(n, { Z: () => R }), t(642613);
var r = t(54381),
    i = t(473749),
    l = t(120356),
    a = t.n(l),
    o = t(442837),
    s = t(199849),
    d = t(681715),
    c = t(481060),
    u = t(494620),
    g = t(63063),
    m = t(49012),
    f = t(905551),
    x = t(578756),
    p = t(802659),
    v = t(241306),
    j = t(343312),
    h = t(30910),
    b = t(281014),
    _ = t(837329),
    C = t(531508),
    N = t(133091),
    E = t(669460),
    S = t(619733),
    O = t(981631),
    y = t(613275),
    I = t(388032),
    T = t(817121);
function P(e) {
    let { plan: n, selected: t, className: i } = e;
    return null == n
        ? null
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsxs)("div", {
                      className: a()(T.optionContainer, i),
                      children: [
                          (0, r.jsx)("span", { children: n.name }),
                          (0, r.jsxs)("div", {
                              className: T.labelContainer,
                              children: [
                                  (0, r.jsx)(c.Ucv, {
                                      size: "xs",
                                      color: c.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK,
                                  }),
                                  (0, r.jsx)(c.Text, {
                                      variant: "text-xs/medium",
                                      children: I.intl.format(y.default.kOMlHs, { boostCount: n.cost }),
                                  }),
                              ],
                          }),
                      ],
                  }),
                  !t && (0, r.jsx)("div", { className: T.optionSpacer }),
              ],
          });
}
function w(e) {
    let { region: n, selected: t, disabled: i, className: l } = e,
        { pingText: o, pingCircleStyle: s } = (0, _.u)(n.pingUrl);
    return null == n
        ? null
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsxs)("div", {
                      className: a()(T.optionContainer, { [T.disabled]: i }, l),
                      children: [
                          (0, r.jsx)("span", { children: n.name }),
                          (0, r.jsx)("div", {
                              className: T.labelContainer,
                              children: i
                                  ? (0, r.jsx)("span", { children: I.intl.string(y.default.aCyHe2) })
                                  : "" !== n.pingUrl
                                    ? (0, r.jsxs)(r.Fragment, {
                                          children: [
                                              (0, r.jsx)("div", { className: a()(T.pingCircle, s) }),
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
                  !t && (0, r.jsx)("div", { className: T.optionSpacer }),
              ],
          });
}
function R() {
    let {
        guildId: e,
        currentGame: n,
        regionId: t,
        gameServerInstance: l,
        setRegionId: a,
        name: _,
        setName: R,
        planId: G,
        setPlanId: Z,
        planCost: k,
        stepLoading: M,
        error: B,
        gameProvider: L,
    } = (0, j.JL)();
    (0, x.Dk)(e, null == l ? void 0 : l.id, null == l ? "create" : "edit"),
        i.useEffect(() => {
            (0, f._k)(e);
        }, [e]);
    let z = (0, o.e7)([p.Z], () => p.Z.getRegions()),
        D = (0, o.e7)([p.Z], () => p.Z.getRegionState()),
        H = i.useMemo(() => {
            var e;
            return null !=
                (e = z
                    .sort((e, n) => (0, N.Z)(e, n, D))
                    .map((e) => ({
                        value: e,
                        label: e.name,
                        disabled: !0 !== e.enabled,
                    })))
                ? e
                : [];
        }, [D, z]),
        U = i.useMemo(() => z.some((e) => "" !== e.pingUrl), [z]),
        V = i.useMemo(() => {
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
        W = (0, b.Z)(),
        { isValid: A, errors: F } = (0, b.a)(_),
        K = null != l,
        J = (0, C.Z)(l),
        Y = (0, E.Z)(L),
        X = null != L && null != S.nd[L] ? S.nd[L] : "";
    return null == n
        ? (0, r.jsx)("div", {
              className: T.spinnerContainer,
              children: (0, r.jsx)(c.$jN, { type: c.RAz.SPINNING_CIRCLE }),
          })
        : (0, r.jsxs)("div", {
              className: T.container,
              children: [
                  (0, r.jsxs)("div", {
                      className: T.contentContainer,
                      children: [
                          (0, r.jsxs)("div", {
                              className: T.settingsContainer,
                              children: [
                                  (0, r.jsxs)("div", {
                                      className: T.sectionContainer,
                                      children: [
                                          (0, r.jsxs)("div", {
                                              className: T.sectionHeader,
                                              children: [
                                                  (0, r.jsx)(c.Heading, {
                                                      className: T.headerText,
                                                      variant: "heading-sm/semibold",
                                                      color: "text-subtle",
                                                      children: I.intl.string(y.default.rOMEZd),
                                                  }),
                                                  (0, r.jsx)(d.u, {
                                                      position: "top",
                                                      text: I.intl.string(y.default.THJY1n),
                                                      children: (0, r.jsx)(c.idN, {
                                                          className: T.sectionHeaderIcon,
                                                          size: "xs",
                                                      }),
                                                  }),
                                              ],
                                          }),
                                          (0, r.jsx)(c.oil, {
                                              value: _,
                                              onChange: R,
                                              placeholder: I.intl.string(y.default.ElVYr3),
                                              maxLength: S.Sg,
                                              disabled: M || !J,
                                              error: F.name,
                                          }),
                                      ],
                                  }),
                                  (0, r.jsxs)("div", {
                                      className: T.sectionContainer,
                                      children: [
                                          (0, r.jsxs)("div", {
                                              className: T.sectionHeader,
                                              children: [
                                                  (0, r.jsx)(c.Heading, {
                                                      className: T.headerText,
                                                      variant: "heading-sm/semibold",
                                                      color: "text-subtle",
                                                      children: I.intl.string(y.default.nB5OZ4),
                                                  }),
                                                  (0, r.jsx)(d.u, {
                                                      position: "top",
                                                      text: I.intl.string(
                                                          null != l ? y.default["7mX0gE"] : y.default["61N+P6"],
                                                      ),
                                                      children: (0, r.jsx)(c.idN, {
                                                          className: T.sectionHeaderIcon,
                                                          size: "xs",
                                                      }),
                                                  }),
                                                  !K &&
                                                      U &&
                                                      (0, r.jsx)("div", {
                                                          className: T.refresh,
                                                          children: (0, r.jsx)(d.u, {
                                                              asContainer: !0,
                                                              position: "top",
                                                              text: I.intl.string(y.default.kGkE7a),
                                                              children: (0, r.jsx)(c.P3F, {
                                                                  className: T.sectionHeaderIcon,
                                                                  onClick: () => (0, f.UM)(),
                                                                  children: (0, r.jsx)(c.DuK, { size: "xs" }),
                                                              }),
                                                          }),
                                                      }),
                                              ],
                                          }),
                                          K
                                              ? (0, r.jsx)(c.oil, {
                                                    value: null == l ? void 0 : l.regionName,
                                                    disabled: !0,
                                                    placeholder: I.intl.string(y.default["k+RTIm"]),
                                                })
                                              : (0, r.jsx)(s.B6, {
                                                    serialize: (e) => e.id,
                                                    isSelected: (e) => e.id === t,
                                                    isDisabled: M || K || !J,
                                                    options: H,
                                                    optionClassName: T.option,
                                                    select: (e) => a(e.id),
                                                    placeholder: I.intl.string(y.default["k+RTIm"]),
                                                    renderOptionLabel: (e) => {
                                                        var n;
                                                        return (0, r.jsx)(w, {
                                                            region: e.value,
                                                            selected: e.value.id === t,
                                                            disabled: null != (n = e.disabled) && n,
                                                        });
                                                    },
                                                    renderOptionValue: (e) => {
                                                        var n;
                                                        return null == e[0]
                                                            ? null
                                                            : (0, r.jsx)(w, {
                                                                  region: e[0].value,
                                                                  selected: e[0].value.id === t,
                                                                  disabled: null != (n = e[0].disabled) && n,
                                                                  className: T.value,
                                                              });
                                                    },
                                                }),
                                      ],
                                  }),
                                  (0, r.jsxs)("div", {
                                      className: T.sectionContainer,
                                      children: [
                                          (0, r.jsxs)("div", {
                                              className: T.sectionHeader,
                                              children: [
                                                  (0, r.jsx)(c.Heading, {
                                                      className: T.headerText,
                                                      variant: "heading-sm/semibold",
                                                      color: "text-subtle",
                                                      children: I.intl.string(y.default["K+zMYp"]),
                                                  }),
                                                  (0, r.jsx)(d.u, {
                                                      position: "top",
                                                      text: I.intl.string(y.default["/wD5IM"]),
                                                      children: (0, r.jsx)(c.idN, {
                                                          className: T.sectionHeaderIcon,
                                                          size: "xs",
                                                      }),
                                                  }),
                                              ],
                                          }),
                                          (0, r.jsx)(s.B6, {
                                              serialize: (e) => e.id,
                                              isSelected: (e) => e.id === G,
                                              isDisabled: M || !J,
                                              options: V,
                                              optionClassName: T.option,
                                              select: (e) => Z(e.id),
                                              placeholder: I.intl.string(y.default.JdMW0i),
                                              renderOptionValue: (e) => {
                                                  var n, t, i;
                                                  return (0, r.jsx)(P, {
                                                      plan: null == (n = e[0]) ? void 0 : n.value,
                                                      selected:
                                                          (null == (i = e[0]) || null == (t = i.value)
                                                              ? void 0
                                                              : t.id) === G,
                                                      className: T.value,
                                                  });
                                              },
                                              renderOptionLabel: (e) =>
                                                  (0, r.jsx)(P, {
                                                      plan: e.value,
                                                      selected: e.value.id === G,
                                                  }),
                                          }),
                                      ],
                                  }),
                              ],
                          }),
                          (0, r.jsx)("div", {
                              className: T.gameDetailsContainer,
                              children: (0, r.jsx)(v.Z, {}),
                          }),
                      ],
                  }),
                  null != l &&
                      0 !== k &&
                      (0, r.jsx)(u.Z, {
                          className: T.infoBox,
                          children: (0, r.jsx)(c.Text, {
                              variant: "text-xs/medium",
                              children:
                                  k < 0
                                      ? I.intl.format(y.default.SorKas, { boostCount: Math.abs(k) })
                                      : I.intl.format(y.default.n2wpym, { boostCount: k }),
                          }),
                      }),
                  !J &&
                      (0, r.jsx)(u.Z, {
                          className: T.infoBox,
                          look: u.z.WARNING,
                          children: (0, r.jsx)(c.Text, {
                              variant: "text-xs/medium",
                              children: I.intl.string(y.default["/JNPWb"]),
                          }),
                      }),
                  (0, r.jsx)(c.Text, {
                      variant: "text-xs/medium",
                      color: "text-muted",
                      children:
                          null != L &&
                          I.intl.format(K ? y.default.num0a6 : y.default.p5KZDr, {
                              provider: Y,
                              termsOfServiceUrl: () => (0, m.q)({ href: X }),
                              helpCenterUrl: g.Z.getEnglishArticleURL(O.BhN.GAME_SERVER_HOSTING),
                          }),
                  }),
                  null != B &&
                      (0, r.jsx)(c.Text, {
                          variant: "text-xs/medium",
                          color: "text-feedback-critical",
                          children: B,
                      }),
                  (0, r.jsxs)(h.o2, {
                      step: S.EK.SERVER_SETTINGS,
                      className: T.footerContainer,
                      children: [(0, r.jsx)(h.c_, {}), (0, r.jsx)(h.$b, { disabled: !W || !A })],
                  }),
              ],
          });
}
