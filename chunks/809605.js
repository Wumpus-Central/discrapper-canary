l.r(t), l.d(t, { default: () => en });
var a,
    n = l(627968),
    r = l(64700),
    i = l(310784),
    s = l.n(i),
    u = l(512750),
    d = l(943255),
    o = l(575181),
    c = l(17928),
    f = l(451988),
    m = l(314116),
    g = l(629584),
    h = l(364522),
    b = l(534514),
    x = l(834730),
    p = l(106236),
    v = l(821609),
    E = l(152367),
    N = l(793574),
    y = l(688810),
    C = l(793943),
    A = l(987144),
    k = l(378292),
    w = l(868652),
    G = l(645619),
    j = l(864310),
    I = l(973654),
    P = l(363195),
    R = l(71393),
    T = l(967198),
    _ = l(476931),
    L = l(673642),
    S = l(759532),
    W = l(875317),
    J = l(42119),
    O =
        (((a = {}).CONFIRM = "confirm"),
        (a.WAIT_FOR_FEATURE = "wait_for_feature"),
        (a.ENABLE_POWERUP = "enable_powerup"),
        (a.BOOST = "boost"),
        (a.ERROR = "error"),
        a),
    V = l(652215),
    U = l(568065),
    M = l(818348),
    D = l(375708),
    F = l(693227),
    H = l(412848),
    $ = l(894284);
function B(e) {
    return R.A.getGuild(e)?.features.has(V.GuildFeatures.GUILD_THEME) === !0;
}
function X(e) {
    return B(e)
        ? Promise.resolve()
        : new Promise((t, l) => {
              let a = new f.Ep();
              function n() {
                  a.stop(), R.A.removeChangeListener(r);
              }
              function r() {
                  B(e) && (n(), t());
              }
              a.start(1e4, () => {
                  n(), l(Error("Timed out waiting for Guild Theme feature."));
              }),
                  R.A.addChangeListener(r),
                  r();
          });
}
function K(e) {
    return S.Ay.guildId === e && T.A.getGuildId() === e;
}
function q(e) {
    return e.body?.message ?? e.message ?? D.intl.string(D.t.fEptJP);
}
async function z(e) {
    await Promise.all([(0, w.AK)(e), (0, w.Xd)(e)]);
    let t = G.A.getStateForGuild(e);
    return {
        hasGuildThemeFeature: B(e),
        hasActiveGuildThemePowerup: t?.unlockedPowerups?.[u.d0] != null,
        guildThemePowerup: t?.allPowerups[u.d0],
        availableBoostCount: (0, j.Z)(e).available,
    };
}
function Y(e) {
    let t = s()(e).get("hsl.h");
    return Number.isNaN(t) ? 0 : Math.round(t);
}
function Q(e) {
    return Math.round(100 * s()(e).get("hsl.l"));
}
function Z(e) {
    return _.wS + _.iq - Q(e);
}
function ee(e) {
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
function et(e) {
    let {
            background: t,
            color: l,
            controlKey: a,
            min: i,
            max: s,
            defaultValue: u,
            ariaLabel: d,
            onValuePreview: o,
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
        className: $.TH,
        children: [
            (0, n.jsx)("div", { className: $.uy, style: { background: t } }),
            (0, n.jsx)(
                "input",
                {
                    className: $.d7,
                    style: { color: l },
                    type: "range",
                    min: i,
                    max: s,
                    defaultValue: u,
                    "aria-label": d,
                    onBlur: m,
                    onChange: (e) => {
                        let t = Number(e.currentTarget.value);
                        (f.current = t), o(t);
                    },
                    onKeyUp: m,
                    onPointerUp: m,
                },
                a,
            ),
        ],
    });
}
function el(e) {
    let { preset: t, selected: l, disabled: a, onSelect: r, theme: i } = e,
        s = (0, k.A)(t);
    return (0, n.jsx)(J.IK, {
        preset: t,
        selected: l,
        disabled: a,
        onClick: r,
        label: s,
        theme: i,
        buttonClassName: $.u5,
        graphicClassName: $.kw,
        selectedIndicatorClassName: $.$R,
    });
}
function ea() {
    let e = (0, c.bG)([P.A], () => P.A.theme) === M.NJ.LIGHT ? M.NJ.LIGHT : M.NJ.DARK,
        t = [
            {
                name: "",
                value: M.NJ.DARK,
                icon: d.Z,
                className: e === M.NJ.DARK ? $.bx : void 0,
                tooltip: D.intl.string(F.default["Dk+OWY"]),
                tooltipAriaLabel: D.intl.string(F.default["Dk+OWY"]),
            },
            {
                name: "",
                value: M.NJ.LIGHT,
                icon: o.F,
                className: e === M.NJ.LIGHT ? $.bx : void 0,
                tooltip: D.intl.string(F.default["5vlJkY"]),
                tooltipAriaLabel: D.intl.string(F.default["5vlJkY"]),
            },
        ];
    return (0, n.jsx)(g.I, {
        className: $.q0,
        optionClassName: $.C_,
        options: t,
        value: e,
        onChange: (e) => {
            let { value: t } = e;
            return (0, I.GQ)(t);
        },
        look: "pill",
    });
}
function en() {
    let e = r.useRef(!1),
        t = r.useRef(!1),
        l = r.useRef(!1),
        a = r.useId(),
        { analyticsLocations: i } = (0, y.Ay)(N.A.GUILD_POWERUPS_GUILD_SETTINGS_GUILD_THEME),
        [u, d] = r.useState(!1),
        [o, f] = r.useState(null),
        g = (0, c.bG)([P.A], () => P.A.theme),
        {
            draft: k,
            isSaving: G,
            hasChanges: j,
            saveError: J,
            previewGuildId: M,
        } = (0, c.cf)([S.Ay], () => ({
            draft: S.Ay.draft,
            isSaving: S.Ay.isSaving,
            hasChanges: S.Ay.hasChanges(),
            saveError: S.Ay.saveError,
            previewGuildId: S.Ay.guildId,
        })),
        en = (0, c.bG)([R.A], () => (null == M ? null : R.A.getGuild(M)), [M]),
        er = (function (e) {
            let t = e?.customUserThemeSettings?.colors?.[0];
            if (null != t) return t;
            let l = (0, _.Yt)(e?.presetId),
                a = null != l ? (0, _.oE)(l).color : _.a0;
            return (0, _.w3)((0, _._k)(a, Q(a)));
        })(k),
        ei = (function (e) {
            let t = e?.customUserThemeSettings?.baseMix;
            if (null != t) return t;
            let l = (0, _.Yt)(e?.presetId);
            return null != l ? (0, _.oE)(l).baseMix : _.BC;
        })(k),
        es = Y(er),
        eu = Z(er),
        ed = r.useMemo(() => (0, _.z3)(er, g), [er, g]),
        eo = r.useMemo(
            () =>
                (function (e, t) {
                    let { minTone: l, maxTone: a } = (0, _.It)(t),
                        n = s()(e),
                        r = Y(e),
                        i = n.get("hsl.s"),
                        u = Number.isNaN(i) ? 0.82 : i,
                        d = s()
                            .hsl(r, u, l / 100)
                            .hex(),
                        o = s()
                            .hsl(r, u, (l + a) / 200)
                            .hex(),
                        c = s()
                            .hsl(r, u, a / 100)
                            .hex();
                    return `linear-gradient(90deg, ${c} 0%, ${o} 50%, ${d} 100%)`;
                })(er, g),
            [er, g],
        ),
        { key: ec, handleInternalChange: ef } = ee(es),
        { key: em, handleInternalChange: eg } = ee(eu),
        { key: eh, handleInternalChange: eb } = ee(ei),
        ex = r.useCallback((e, t) => {
            (0, L.t$)({ colors: [e], gradientAngle: 0, baseMix: t });
        }, []),
        ep = r.useCallback((e) => {
            (0, L.GC)(e.id);
        }, []),
        ev = r.useCallback(() => {
            let e = (0, _.XY)();
            ex(e.color, e.baseMix);
        }, [ex]),
        eE = r.useCallback(() => {
            let { guildId: e, original: t, originalEnabled: l, origin: a } = S.Ay;
            null != e &&
                null != a &&
                (0, L.tA)({ guildId: e, draft: t, original: t, draftEnabled: l, originalEnabled: l, origin: a });
        }, []),
        eN = r.useCallback(() => {
            (e.current = !0), (0, L.WV)(), (0, I.XG)(), (0, C.Jp)();
        }, []),
        ey = r.useCallback(async () => {
            await (0, L.HN)(), (e.current = !0), (0, I.XG)(), (0, C.Jp)();
        }, []),
        eC = r.useCallback(() => {
            (0, m.A)({
                title: D.intl.string(H.default.H8idcP),
                subtitle: D.intl.string(H.default["0LL6FX"]),
                confirmText: D.intl.string(D.t["cY+Oob"]),
                cancelText: D.intl.string(D.t["ETE/oC"]),
                variant: "primary",
                onConfirm: async (e) => {
                    try {
                        await ey();
                    } catch (t) {
                        throw (e(q(t)), t);
                    }
                },
            });
        }, [ey]),
        eA = r.useCallback(
            async (e) => {
                if (!t.current && !l.current) {
                    if (null == M) return void f(D.intl.string(D.t.fEptJP));
                    if (K(M)) {
                        (l.current = !0), (t.current = !0), d(!0), f(null);
                        try {
                            if ((await (0, w.Qh)(M, e.skuId), await X(M), !K(M))) return;
                            eC();
                        } catch (e) {
                            (l.current = !1), f(q(e));
                        } finally {
                            (t.current = !1), d(!1);
                        }
                    }
                }
            },
            [eC, M],
        ),
        ek = r.useCallback(
            async (e, t) => {
                if (null == en) return void f(D.intl.string(D.t.fEptJP));
                let l = e.cost - t;
                l <= 0
                    ? await eA(e)
                    : await (0, A.g)({
                          analyticsLocation: {
                              page: V.liQ.GUILD_POWERUPS_OVERVIEW,
                              section: V.JJy.GUILD_POWERUPS_OVERVIEW_CARD,
                          },
                          analyticsLocations: i,
                          guild: en,
                          numberOfBoostsToAdd: l,
                          intent: U.Pn.PERK,
                          onLoading: d,
                          handleSubscribeModalClose: (t) => {
                              if (t) return eA(e);
                          },
                      });
            },
            [i, en, eA],
        ),
        ew = r.useCallback(async () => {
            if ((f(null), null == M)) return void f(D.intl.string(D.t.fEptJP));
            if (B(M)) {
                if (!K(M)) return;
                eC();
                return;
            }
            d(!0);
            try {
                let e = await z(M);
                if (!K(M)) return;
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
                if (t === O.CONFIRM) return void eC();
                if (t === O.WAIT_FOR_FEATURE) {
                    if ((await X(M), !K(M))) return;
                    eC();
                    return;
                }
                if (null == e.guildThemePowerup) return void f(D.intl.string(D.t.fEptJP));
                if (t === O.ENABLE_POWERUP) {
                    d(!1), await eA(e.guildThemePowerup);
                    return;
                }
                if (t === O.BOOST) {
                    d(!1), await ek(e.guildThemePowerup, e.availableBoostCount);
                    return;
                }
                f(D.intl.string(D.t.fEptJP));
            } catch (e) {
                f(q(e));
            } finally {
                d(!1);
            }
        }, [eA, ek, eC, M]),
        eG = (0, c.bG)([T.A], () => T.A.getGuildId()),
        ej = null != M && eG !== M;
    r.useEffect(() => {
        ej && ((e.current = !0), (0, L.WV)(), (0, I.XG)(), (0, C.Jp)());
    }, [ej]),
        r.useEffect(() => {
            if (null == M) return;
            let { draft: e, draftEnabled: t } = S.Ay;
            (t && (0, W.Om)(e)) || (0, L.GC)(_.Zq["0"].id);
        }, [M]),
        r.useEffect(() => {
            null == M && ((0, I.XG)(), (0, C.Jp)());
        }, [M]),
        r.useEffect(
            () => () => {
                (0, I.XG)(), e.current || S.Ay.isAwaitingGuildUpdate || (0, L.WV)();
            },
            [],
        );
    let eI = G || u,
        eP = eI || !j || null == k || null == M,
        eR = o ?? J;
    return (0, n.jsxs)("div", {
        className: $.kL,
        "data-app-right-panel": !0,
        children: [
            (0, n.jsx)(h.Ip, {
                className: $.XG,
                children: (0, n.jsxs)("div", {
                    className: $.rf,
                    children: [
                        (0, n.jsx)(b.D, {
                            variant: "heading-lg/semibold",
                            color: "text-strong",
                            children: D.intl.string(H.default["/6NbRv"]),
                        }),
                        (0, n.jsxs)("div", {
                            className: $.uW,
                            children: [
                                (0, n.jsx)(x.E, {
                                    variant: "text-sm/semibold",
                                    color: "text-default",
                                    className: $.a9,
                                    children: D.intl.string(H.default.zry4l5),
                                }),
                                (0, n.jsx)(x.E, {
                                    variant: "text-xs/medium",
                                    color: "text-muted",
                                    className: $.yV,
                                    children: D.intl.string(H.default.HkvkHP),
                                }),
                                (0, n.jsx)(ea, {}),
                            ],
                        }),
                        (0, n.jsxs)("div", {
                            className: $.uW,
                            children: [
                                (0, n.jsx)(x.E, {
                                    variant: "text-sm/semibold",
                                    color: "text-default",
                                    className: $.a9,
                                    children: D.intl.string(F.default.uSL2Gy),
                                }),
                                (0, n.jsx)(et, {
                                    background:
                                        "linear-gradient(90deg, rgb(255 0 0) 0%, rgb(255 255 0) 16.66%, rgb(0 255 0) 33.33%, rgb(0 255 255) 50%, rgb(0 0 255) 66.66%, rgb(255 0 255) 83.33%, rgb(255 0 0) 100%)",
                                    color: ed,
                                    controlKey: ec,
                                    min: 0,
                                    max: 359,
                                    defaultValue: es,
                                    ariaLabel: D.intl.string(F.default.uSL2Gy),
                                    onValuePreview: ef,
                                    onValueCommit: (e) => {
                                        let t = (0, _.w3)((0, _.sR)(er, e));
                                        ef(Y(t)), ex(t, ei);
                                    },
                                }),
                                (0, n.jsx)(et, {
                                    background: eo,
                                    color: ed,
                                    controlKey: em,
                                    min: _.wS,
                                    max: _.iq,
                                    defaultValue: eu,
                                    ariaLabel: D.intl.string(F.default.uSL2Gy),
                                    onValuePreview: eg,
                                    onValueCommit: (e) => {
                                        let t = (0, _.w3)((0, _._k)(er, _.wS + _.iq - e));
                                        eg(Z(t)), ex(t, ei);
                                    },
                                }),
                            ],
                        }),
                        (0, n.jsx)("div", {
                            className: $.uW,
                            children: (0, n.jsxs)("div", {
                                className: $.Ib,
                                children: [
                                    (0, n.jsxs)("div", {
                                        className: $.Gl,
                                        children: [
                                            (0, n.jsx)(x.E, {
                                                id: a,
                                                variant: "text-sm/medium",
                                                color: "text-default",
                                                className: $.KF,
                                                children: D.intl.string(F.default.xlXkaL),
                                            }),
                                            (0, n.jsx)(x.E, {
                                                variant: "text-sm/medium",
                                                color: "text-default",
                                                className: $.rv,
                                                children: `${Math.round(ei)}%`,
                                            }),
                                        ],
                                    }),
                                    (0, n.jsx)(
                                        p.A,
                                        {
                                            "aria-labelledby": a,
                                            minValue: 0,
                                            maxValue: 100,
                                            keyboardStep: 1,
                                            initialValue: ei,
                                            defaultValue: ei,
                                            onValueRender: (e) => `${Math.round(e)}%`,
                                            onValueChange: (e) => {
                                                let t = Math.round(e);
                                                (t !== ei || k?.customUserThemeSettings != null) && (eb(t), ex(er, t));
                                            },
                                        },
                                        eh,
                                    ),
                                ],
                            }),
                        }),
                        (0, n.jsxs)("div", {
                            className: $.uW,
                            children: [
                                (0, n.jsx)(x.E, {
                                    variant: "text-sm/semibold",
                                    color: "text-default",
                                    className: $.a9,
                                    children: D.intl.string(H.default.jSrqR2),
                                }),
                                (0, n.jsx)("div", {
                                    className: $.$k,
                                    children: _.Zq.map((e) =>
                                        (0, n.jsx)(
                                            el,
                                            {
                                                preset: e,
                                                selected: k?.presetId === e.id,
                                                disabled: eI,
                                                onSelect: () => ep(e),
                                                theme: g,
                                            },
                                            e.id,
                                        ),
                                    ),
                                }),
                            ],
                        }),
                        (0, n.jsxs)("div", {
                            className: $.uu,
                            children: [
                                (0, n.jsx)(v.$, {
                                    variant: "secondary",
                                    size: "md",
                                    fullWidth: !0,
                                    disabled: eI,
                                    onClick: ev,
                                    text: D.intl.string(F.default.c9MBEH),
                                    icon: E.D,
                                }),
                                (0, n.jsx)(v.$, {
                                    variant: "secondary",
                                    size: "md",
                                    fullWidth: !0,
                                    disabled: eI || !j,
                                    onClick: eE,
                                    text: D.intl.string(D.t.yBZMsQ),
                                }),
                            ],
                        }),
                        null != eR &&
                            (0, n.jsx)(x.E, {
                                variant: "text-xs/semibold",
                                color: "text-feedback-critical",
                                className: $.z3,
                                children: eR,
                            }),
                    ],
                }),
            }),
            (0, n.jsx)("div", {
                className: $.qr,
                children: (0, n.jsxs)("div", {
                    className: $.zt,
                    children: [
                        (0, n.jsx)(v.$, {
                            variant: "secondary",
                            size: "md",
                            fullWidth: !0,
                            disabled: eI,
                            onClick: eN,
                            text: D.intl.string(D.t["13/7kX"]),
                        }),
                        (0, n.jsx)("span", {
                            className: $._l,
                            children: (0, n.jsx)(v.$, {
                                variant: "primary",
                                size: "md",
                                fullWidth: !0,
                                loading: eI,
                                disabled: eP,
                                onClick: ew,
                                text: D.intl.string(D.t["1Qm822"]),
                            }),
                        }),
                    ],
                }),
            }),
        ],
    });
}
