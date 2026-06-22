l.r(t), l.d(t, { default: () => ei });
var a,
    n = l(627968),
    r = l(64700),
    i = l(310784),
    s = l.n(i),
    u = l(512750),
    o = l(943255),
    d = l(575181),
    c = l(17928),
    f = l(451988),
    m = l(314116),
    g = l(629584),
    h = l(364522),
    b = l(534514),
    x = l(834730),
    p = l(106236),
    v = l(821609),
    E = l(926321),
    N = l(908803),
    y = l(661531),
    C = l(793574),
    A = l(688810),
    k = l(793943),
    G = l(987144),
    w = l(378292),
    j = l(868652),
    I = l(645619),
    R = l(864310),
    P = l(973654),
    T = l(363195),
    _ = l(71393),
    L = l(967198),
    S = l(476931),
    O = l(673642),
    W = l(759532),
    J = l(875317),
    V = l(42119),
    U =
        (((a = {}).CONFIRM = "confirm"),
        (a.WAIT_FOR_FEATURE = "wait_for_feature"),
        (a.ENABLE_POWERUP = "enable_powerup"),
        (a.BOOST = "boost"),
        (a.ERROR = "error"),
        a),
    M = l(652215),
    D = l(568065),
    B = l(818348),
    F = l(375708),
    H = l(693227),
    $ = l(412848),
    X = l(894284);
function K(e) {
    return _.A.getGuild(e)?.features.has(M.GuildFeatures.GUILD_THEME) === !0;
}
function q(e) {
    return K(e)
        ? Promise.resolve()
        : new Promise((t, l) => {
              let a = new f.Ep();
              function n() {
                  a.stop(), _.A.removeChangeListener(r);
              }
              function r() {
                  K(e) && (n(), t());
              }
              a.start(1e4, () => {
                  n(), l(Error("Timed out waiting for Guild Theme feature."));
              }),
                  _.A.addChangeListener(r),
                  r();
          });
}
function z(e) {
    return W.Ay.guildId === e && L.A.getGuildId() === e;
}
function Y(e) {
    return e.body?.message ?? e.message ?? F.intl.string(F.t.fEptJP);
}
async function Q(e) {
    await Promise.all([(0, j.AK)(e), (0, j.Xd)(e)]);
    let t = I.A.getStateForGuild(e);
    return {
        hasGuildThemeFeature: K(e),
        hasActiveGuildThemePowerup: t?.unlockedPowerups?.[u.d0] != null,
        guildThemePowerup: t?.allPowerups[u.d0],
        availableBoostCount: (0, R.Z)(e).available,
    };
}
function Z(e) {
    let t = s()(e).get("hsl.h");
    return Number.isNaN(t) ? 0 : Math.round(t);
}
function ee(e) {
    return Math.round(100 * s()(e).get("hsl.l"));
}
function et(e) {
    return S.wS + S.iq - ee(e);
}
function el(e) {
    let [t, l] = r.useState(0),
        a = r.useRef(null),
        n = r.useRef(e);
    return (
        r.useEffect(() => {
            e !== n.current && (a.current === e ? (a.current = null) : l((e) => e + 1)), (n.current = e);
        }, [e]),
        { key: t, handleInternalChange: r.useCallback((e) => ((a.current = e), e), []) }
    );
}
function ea(e) {
    let {
            background: t,
            color: l,
            controlKey: a,
            min: i,
            max: s,
            defaultValue: u,
            ariaLabel: o,
            onValuePreview: d,
            onValueCommit: c,
        } = e,
        f = r.useRef(u);
    r.useEffect(() => {
        f.current = u;
    }, [u]);
    let m = r.useCallback(() => {
        c(f.current);
    }, [c]);
    return (0, n.jsxs)("div", {
        className: X.TH,
        children: [
            (0, n.jsx)("div", { className: X.uy, style: { background: t } }),
            (0, n.jsx)(
                "input",
                {
                    className: X.d7,
                    style: { color: l },
                    type: "range",
                    min: i,
                    max: s,
                    defaultValue: u,
                    "aria-label": o,
                    onBlur: m,
                    onChange: (e) => {
                        let t = Number(e.currentTarget.value);
                        (f.current = t), d(t);
                    },
                    onKeyUp: m,
                    onPointerUp: m,
                },
                a,
            ),
        ],
    });
}
function en(e) {
    let { preset: t, selected: l, disabled: a, onSelect: r, theme: i } = e,
        s = (0, w.A)(t);
    return (0, n.jsx)(V.IK, {
        preset: t,
        selected: l,
        disabled: a,
        onClick: r,
        label: s,
        theme: i,
        buttonClassName: X.u5,
        graphicClassName: X.kw,
        selectedIndicatorClassName: X.$R,
    });
}
function er() {
    let e = (0, c.bG)([T.A], () => T.A.theme) === B.NJ.LIGHT ? B.NJ.LIGHT : B.NJ.DARK,
        t = [
            {
                name: "",
                value: B.NJ.DARK,
                icon: o.Z,
                className: e === B.NJ.DARK ? X.bx : void 0,
                tooltip: F.intl.string(H.default["Dk+OWY"]),
                tooltipAriaLabel: F.intl.string(H.default["Dk+OWY"]),
            },
            {
                name: "",
                value: B.NJ.LIGHT,
                icon: d.F,
                className: e === B.NJ.LIGHT ? X.bx : void 0,
                tooltip: F.intl.string(H.default["5vlJkY"]),
                tooltipAriaLabel: F.intl.string(H.default["5vlJkY"]),
            },
        ];
    return (0, n.jsx)(g.I, {
        className: X.q0,
        optionClassName: X.C_,
        options: t,
        value: e,
        onChange: (e) => {
            let { value: t } = e;
            return (0, P.GQ)(t);
        },
        look: "pill",
    });
}
function ei(e) {
    let { isMobile: t } = e,
        l = r.useRef(null),
        a = r.useRef(!1),
        i = r.useRef(!1),
        u = r.useRef(!1),
        o = r.useId(),
        { analyticsLocations: d } = (0, A.Ay)(C.A.GUILD_POWERUPS_GUILD_SETTINGS_GUILD_THEME),
        [f, g] = r.useState(!1),
        [w, I] = r.useState(null),
        R = (0, c.bG)([T.A], () => T.A.theme),
        {
            draft: V,
            isSaving: B,
            hasChanges: ei,
            saveError: es,
            previewGuildId: eu,
        } = (0, c.cf)([W.Ay], () => ({
            draft: W.Ay.draft,
            isSaving: W.Ay.isSaving,
            hasChanges: W.Ay.hasChanges(),
            saveError: W.Ay.saveError,
            previewGuildId: W.Ay.guildId,
        })),
        eo = (0, c.bG)([_.A], () => (null == eu ? null : _.A.getGuild(eu)), [eu]),
        ed = (function (e) {
            let t = e?.customUserThemeSettings?.colors?.[0];
            if (null != t) return t;
            let l = (0, S.Yt)(e?.presetId),
                a = null != l ? (0, S.oE)(l).color : S.a0;
            return (0, S.w3)((0, S._k)(a, ee(a)));
        })(V),
        ec = (function (e) {
            let t = e?.customUserThemeSettings?.baseMix;
            if (null != t) return t;
            let l = (0, S.Yt)(e?.presetId);
            return null != l ? (0, S.oE)(l).baseMix : S.BC;
        })(V),
        ef = Z(ed),
        em = et(ed),
        eg = r.useMemo(() => (0, S.z3)(ed, R), [ed, R]),
        eh = r.useMemo(
            () =>
                (function (e, t) {
                    let { minTone: l, maxTone: a } = (0, S.It)(t),
                        n = s()(e),
                        r = Z(e),
                        i = n.get("hsl.s"),
                        u = Number.isNaN(i) ? 0.82 : i,
                        o = s()
                            .hsl(r, u, l / 100)
                            .hex(),
                        d = s()
                            .hsl(r, u, (l + a) / 200)
                            .hex(),
                        c = s()
                            .hsl(r, u, a / 100)
                            .hex();
                    return `linear-gradient(90deg, ${c} 0%, ${d} 50%, ${o} 100%)`;
                })(ed, R),
            [ed, R],
        ),
        { key: eb, handleInternalChange: ex } = el(ef),
        { key: ep, handleInternalChange: ev } = el(em),
        { key: eE, handleInternalChange: eN } = el(ec),
        ey = r.useCallback((e, t) => {
            (0, O.t$)({ colors: [e], gradientAngle: 0, baseMix: t });
        }, []),
        eC = r.useCallback((e) => {
            (0, O.GC)(e.id);
        }, []),
        eA = r.useCallback(() => {
            let e = (0, S.XY)();
            ey(e.color, e.baseMix);
        }, [ey]),
        ek = r.useCallback(() => {
            let { guildId: e, original: t, originalEnabled: l, origin: a } = W.Ay;
            null != e &&
                null != a &&
                (0, O.tA)({ guildId: e, draft: t, original: t, draftEnabled: l, originalEnabled: l, origin: a });
        }, []),
        eG = r.useCallback(() => {
            (a.current = !0), (0, O.WV)(), (0, P.XG)(), (0, k.Jp)();
        }, []),
        ew = r.useCallback(async () => {
            await (0, O.HN)(), (a.current = !0), (0, P.XG)(), (0, k.Jp)();
        }, []),
        ej = r.useCallback(() => {
            (0, m.A)({
                title: F.intl.string($.default.H8idcP),
                subtitle: F.intl.string($.default["0LL6FX"]),
                confirmText: F.intl.string(F.t["cY+Oob"]),
                cancelText: F.intl.string(F.t["ETE/oC"]),
                variant: "primary",
                onConfirm: async (e) => {
                    try {
                        await ew();
                    } catch (t) {
                        throw (e(Y(t)), t);
                    }
                },
            });
        }, [ew]),
        eI = r.useCallback(
            async (e) => {
                if (!i.current && !u.current) {
                    if (null == eu) return void I(F.intl.string(F.t.fEptJP));
                    if (z(eu)) {
                        (u.current = !0), (i.current = !0), g(!0), I(null);
                        try {
                            if ((await (0, j.Qh)(eu, e.skuId), await q(eu), !z(eu))) return;
                            ej();
                        } catch (e) {
                            (u.current = !1), I(Y(e));
                        } finally {
                            (i.current = !1), g(!1);
                        }
                    }
                }
            },
            [ej, eu],
        ),
        eR = r.useCallback(
            async (e, t) => {
                if (null == eo) return void I(F.intl.string(F.t.fEptJP));
                let l = e.cost - t;
                l <= 0
                    ? await eI(e)
                    : await (0, G.g)({
                          analyticsLocation: {
                              page: M.liQ.GUILD_POWERUPS_OVERVIEW,
                              section: M.JJy.GUILD_POWERUPS_OVERVIEW_CARD,
                          },
                          analyticsLocations: d,
                          guild: eo,
                          numberOfBoostsToAdd: l,
                          intent: D.Pn.PERK,
                          onLoading: g,
                          handleSubscribeModalClose: (t) => {
                              if (t) return eI(e);
                          },
                      });
            },
            [d, eo, eI],
        ),
        eP = r.useCallback(async () => {
            if ((I(null), null == eu)) return void I(F.intl.string(F.t.fEptJP));
            if (K(eu)) {
                if (!z(eu)) return;
                ej();
                return;
            }
            g(!0);
            try {
                let e = await Q(eu);
                if (!z(eu)) return;
                let t = (function (e) {
                    let {
                        hasGuildThemeFeature: t,
                        hasActiveGuildThemePowerup: l,
                        guildThemePowerup: a,
                        availableBoostCount: n,
                    } = e;
                    return t
                        ? "confirm"
                        : l
                          ? "wait_for_feature"
                          : null == a
                            ? "error"
                            : n >= a.cost
                              ? "enable_powerup"
                              : "boost";
                })(e);
                if (t === U.CONFIRM) return void ej();
                if (t === U.WAIT_FOR_FEATURE) {
                    if ((await q(eu), !z(eu))) return;
                    ej();
                    return;
                }
                if (null == e.guildThemePowerup) return void I(F.intl.string(F.t.fEptJP));
                if (t === U.ENABLE_POWERUP) {
                    g(!1), await eI(e.guildThemePowerup);
                    return;
                }
                if (t === U.BOOST) {
                    g(!1), await eR(e.guildThemePowerup, e.availableBoostCount);
                    return;
                }
                I(F.intl.string(F.t.fEptJP));
            } catch (e) {
                I(Y(e));
            } finally {
                g(!1);
            }
        }, [eI, eR, ej, eu]),
        eT = (0, c.bG)([L.A], () => L.A.getGuildId()),
        e_ = null != eu && eT !== eu;
    r.useEffect(() => {
        e_ && ((a.current = !0), (0, O.WV)(), (0, P.XG)(), (0, k.Jp)());
    }, [e_]),
        r.useEffect(() => {
            if (null == eu) return;
            let { draft: e, draftEnabled: t } = W.Ay;
            (t && (0, J.Om)(e)) || (0, O.GC)(S.Zq["0"].id);
        }, [eu]),
        r.useEffect(() => {
            null == eu && ((0, P.XG)(), (0, k.Jp)());
        }, [eu]),
        r.useEffect(
            () => () => {
                (0, P.XG)(), a.current || W.Ay.isAwaitingGuildUpdate || (0, O.WV)();
            },
            [],
        );
    let eL = B || f,
        eS = eL || !ei || null == V || null == eu,
        eO = w ?? es;
    return (0, n.jsxs)("div", {
        className: X.kL,
        "data-app-right-panel": !0,
        children: [
            (0, n.jsx)(h.Ip, {
                className: X.XG,
                children: (0, n.jsxs)("div", {
                    className: X.rf,
                    children: [
                        (0, n.jsx)(b.D, {
                            variant: "heading-lg/semibold",
                            color: "text-strong",
                            children: F.intl.string($.default["/6NbRv"]),
                        }),
                        (0, n.jsxs)("div", {
                            className: X.uW,
                            children: [
                                (0, n.jsx)(x.E, {
                                    variant: "text-sm/semibold",
                                    color: "text-default",
                                    className: X.a9,
                                    children: F.intl.string($.default.zry4l5),
                                }),
                                (0, n.jsx)(x.E, {
                                    variant: "text-xs/medium",
                                    color: "text-muted",
                                    className: X.yV,
                                    children: F.intl.string($.default.HkvkHP),
                                }),
                                (0, n.jsx)(er, {}),
                            ],
                        }),
                        (0, n.jsxs)("div", {
                            className: X.uW,
                            children: [
                                (0, n.jsx)(x.E, {
                                    variant: "text-sm/semibold",
                                    color: "text-default",
                                    className: X.a9,
                                    children: F.intl.string(H.default.uSL2Gy),
                                }),
                                (0, n.jsx)(ea, {
                                    background:
                                        "linear-gradient(90deg, rgb(255 0 0) 0%, rgb(255 255 0) 16.66%, rgb(0 255 0) 33.33%, rgb(0 255 255) 50%, rgb(0 0 255) 66.66%, rgb(255 0 255) 83.33%, rgb(255 0 0) 100%)",
                                    color: eg,
                                    controlKey: eb,
                                    min: 0,
                                    max: 359,
                                    defaultValue: ef,
                                    ariaLabel: F.intl.string(H.default.uSL2Gy),
                                    onValuePreview: ex,
                                    onValueCommit: (e) => {
                                        let t = (0, S.w3)((0, S.sR)(ed, e));
                                        ex(Z(t)), ey(t, ec);
                                    },
                                }),
                                (0, n.jsx)(ea, {
                                    background: eh,
                                    color: eg,
                                    controlKey: ep,
                                    min: S.wS,
                                    max: S.iq,
                                    defaultValue: em,
                                    ariaLabel: F.intl.string(H.default.uSL2Gy),
                                    onValuePreview: ev,
                                    onValueCommit: (e) => {
                                        let t = (0, S.w3)((0, S._k)(ed, S.wS + S.iq - e));
                                        ev(et(t)), ey(t, ec);
                                    },
                                }),
                            ],
                        }),
                        (0, n.jsx)("div", {
                            className: X.uW,
                            children: (0, n.jsxs)("div", {
                                className: X.Ib,
                                children: [
                                    (0, n.jsxs)("div", {
                                        className: X.Gl,
                                        children: [
                                            (0, n.jsx)(x.E, {
                                                id: o,
                                                variant: "text-sm/medium",
                                                color: "text-default",
                                                className: X.KF,
                                                children: F.intl.string(H.default.xlXkaL),
                                            }),
                                            (0, n.jsx)(x.E, {
                                                variant: "text-sm/medium",
                                                color: "text-default",
                                                className: X.rv,
                                                children: `${Math.round(ec)}%`,
                                            }),
                                        ],
                                    }),
                                    (0, n.jsx)(
                                        p.A,
                                        {
                                            "aria-labelledby": o,
                                            minValue: 0,
                                            maxValue: 100,
                                            keyboardStep: 1,
                                            initialValue: ec,
                                            defaultValue: ec,
                                            onValueRender: (e) => `${Math.round(e)}%`,
                                            onValueChange: (e) => {
                                                let t = Math.round(e);
                                                (t !== ec || V?.customUserThemeSettings != null) && (eN(t), ey(ed, t));
                                            },
                                        },
                                        eE,
                                    ),
                                ],
                            }),
                        }),
                        (0, n.jsxs)("div", {
                            className: X.uW,
                            children: [
                                (0, n.jsx)(x.E, {
                                    variant: "text-sm/semibold",
                                    color: "text-default",
                                    className: X.a9,
                                    children: F.intl.string($.default.jSrqR2),
                                }),
                                (0, n.jsx)("div", {
                                    className: X.$k,
                                    children: S.Zq.map((e) =>
                                        (0, n.jsx)(
                                            en,
                                            {
                                                preset: e,
                                                selected: V?.presetId === e.id,
                                                disabled: eL,
                                                onSelect: () => eC(e),
                                                theme: R,
                                            },
                                            e.id,
                                        ),
                                    ),
                                }),
                            ],
                        }),
                        (0, n.jsxs)("div", {
                            className: X.uu,
                            children: [
                                (0, n.jsx)(v.$, {
                                    buttonRef: l,
                                    variant: "secondary",
                                    size: "md",
                                    fullWidth: !0,
                                    disabled: eL,
                                    onClick: eA,
                                    text: F.intl.string(H.default.c9MBEH),
                                    icon: t
                                        ? { type: "icon", asset: E.j }
                                        : {
                                              type: "rive",
                                              asset: N.m,
                                              riveProps: {
                                                  dataBinding: { fill: y.A.colors.ICON_STRONG },
                                                  eventTargetRef: l,
                                              },
                                          },
                                }),
                                (0, n.jsx)(v.$, {
                                    variant: "secondary",
                                    size: "md",
                                    fullWidth: !0,
                                    disabled: eL || !ei,
                                    onClick: ek,
                                    text: F.intl.string(F.t.yBZMsQ),
                                }),
                            ],
                        }),
                        null != eO &&
                            (0, n.jsx)(x.E, {
                                variant: "text-xs/semibold",
                                color: "text-feedback-critical",
                                className: X.z3,
                                children: eO,
                            }),
                    ],
                }),
            }),
            (0, n.jsx)("div", {
                className: X.qr,
                children: (0, n.jsxs)("div", {
                    className: X.zt,
                    children: [
                        (0, n.jsx)(v.$, {
                            variant: "secondary",
                            size: "md",
                            fullWidth: !0,
                            disabled: eL,
                            onClick: eG,
                            text: F.intl.string(F.t["13/7kX"]),
                        }),
                        (0, n.jsx)("span", {
                            className: X._l,
                            children: (0, n.jsx)(v.$, {
                                variant: "primary",
                                size: "md",
                                fullWidth: !0,
                                loading: eL,
                                disabled: eS,
                                onClick: eP,
                                text: F.intl.string(F.t["1Qm822"]),
                            }),
                        }),
                    ],
                }),
            }),
        ],
    });
}
