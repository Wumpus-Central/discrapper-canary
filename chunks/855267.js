s.d(t, { A: () => en });
var n = s(627968),
    i = s(64700),
    r = s(731738),
    l = s(289873),
    a = s(417098),
    c = s(964486),
    o = s(831062),
    d = s(954571),
    u = s(308645),
    N = s(335891),
    m = s(17928),
    h = s(207913),
    E = s(259960),
    g = s(257110),
    x = s(735438),
    I = s(359778),
    A = s(778712),
    _ = s(534514),
    j = s(834730),
    D = s(287809),
    v = s(739010),
    f = s(271995),
    T = s(97808),
    C = s(466757),
    O = s(476324);
function p(e) {
    let { user: t, size: s } = e,
        i = (0, A.Kj)(s),
        r = null != t ? t.getAvatarURL(null, i.size) : O;
    return (0, n.jsx)("div", {
        className: C.oJ,
        children: (0, n.jsx)("div", {
            className: C.my,
            style: { width: i.size, height: i.size },
            children: (0, n.jsx)(T.eu, { src: r, "aria-hidden": !0, size: s }),
        }),
    });
}
var S = s(985018),
    P = s(70845);
function R() {
    let e = (0, N.K)(),
        t = (0, m.bG)([D.default], () => D.default.getCurrentUser()),
        [s, r] = i.useState(36),
        l = i.useRef({
            [v.PN.ALL_GOOD]: null,
            [v.PN.LIMITED]: null,
            [v.PN.VERY_LIMITED]: null,
            [v.PN.AT_RISK]: null,
            [v.PN.SUSPENDED]: null,
        }),
        a = i.useCallback(() => {
            r(Math.max(Math.max(...Object.values(l.current).map((e) => e?.getBoundingClientRect().height ?? 36)), 36));
        }, []);
    i.useEffect(() => {
        a();
        let e = (0, x.debounce)(a, 100);
        return window.addEventListener("resize", e), () => window.removeEventListener("resize", e);
    }, [a]);
    let c = (0, f.QB)(),
        { title: o, description: d, color: u, Icon: h } = c[e.state],
        E = Object.keys(c).length;
    return (0, n.jsxs)(I.Z, {
        className: P.kL,
        outline: !1,
        type: I.s.CUSTOM,
        children: [
            (0, n.jsx)("div", { className: P.ME, children: (0, n.jsx)(p, { user: t, size: A._3.SIZE_80 }) }),
            (0, n.jsxs)("div", {
                className: P.h5,
                children: [
                    (0, n.jsxs)("div", {
                        className: P.DD,
                        children: [
                            (0, n.jsx)(_.D, {
                                color: "text-strong",
                                variant: "heading-lg/normal",
                                children: S.intl.format(o, {
                                    hook: (e) =>
                                        (0, n.jsx)(j.E, {
                                            style: { color: u.css },
                                            variant: "heading-lg/bold",
                                            tag: "span",
                                            children: e,
                                        }),
                                }),
                            }),
                            (0, n.jsx)(j.E, { color: "text-default", variant: "text-sm/normal", children: d }),
                        ],
                    }),
                    (0, n.jsxs)("div", {
                        className: P.vK,
                        style: { height: s },
                        children: [
                            (0, n.jsx)("div", { className: P.n8 }),
                            Object.entries(c).map((t, s) => {
                                let [i, r] = t,
                                    a = parseInt(i) === e.state;
                                return (0, n.jsxs)(
                                    "div",
                                    {
                                        className: P.Kx,
                                        ref: (e) => {
                                            l.current[parseInt(i)] = e;
                                        },
                                        children: [
                                            a
                                                ? (0, n.jsx)(h, { className: P.xL, color: r.color })
                                                : (0, n.jsx)("div", {
                                                      className: P.xL,
                                                      style: {
                                                          marginLeft: 0 === s ? -6 : 0,
                                                          marginRight: s === E - 1 ? -6 : 0,
                                                      },
                                                      children: (0, n.jsx)("div", { className: P.Ie }),
                                                  }),
                                            S.intl.format(r.status, {
                                                hook: (e) =>
                                                    (0, n.jsx)(j.E, {
                                                        color: "text-default",
                                                        variant: "text-sm/normal",
                                                        className: P.Rh,
                                                        children: e,
                                                    }),
                                            }),
                                        ],
                                    },
                                    s,
                                );
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
var L = s(503698),
    b = s.n(L),
    M = s(939249),
    U = s(738188),
    k = s(661531),
    K = s(369606),
    G = s(192308),
    V = s(761508),
    B = s(147925),
    w = s(303727),
    y = s(935208),
    z = s(393033),
    H = s(985481),
    Y = s(239093),
    F = s(652215),
    W = s(86789);
let X = (e) => {
        let { status: t, onClick: s, opened: i, count: r } = e;
        return (0, n.jsxs)(M.D, {
            className: W.wx,
            onClick: s,
            children: [
                (0, n.jsx)("div", {
                    className: W.Y5,
                    children: (0, n.jsx)(U.i, {
                        size: "md",
                        color: "active" === t ? k.A.colors.INTERACTIVE_TEXT_ACTIVE : k.A.colors.ICON_MUTED,
                    }),
                }),
                (0, n.jsxs)("div", {
                    className: W.DD,
                    children: [
                        (0, n.jsx)(_.D, {
                            variant: "heading-md/semibold",
                            color: "text-default",
                            children:
                                "active" === t
                                    ? S.intl.formatToPlainString(S.t.IeV2oY, { count: r.toString() })
                                    : S.intl.formatToPlainString(S.t.fZAHBT, { count: r.toString() }),
                        }),
                        (0, n.jsx)(_.D, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children: "active" === t ? S.intl.string(S.t.XJ2YVR) : S.intl.string(S.t.SzGV0g),
                        }),
                    ],
                }),
                (0, n.jsx)("div", {
                    className: W.OW,
                    children: (0, n.jsx)(B.A, {
                        width: 18,
                        height: 18,
                        direction: i ? B.A.Directions.UP : B.A.Directions.DOWN,
                    }),
                }),
            ],
        });
    },
    $ = () =>
        (0, n.jsxs)("div", {
            className: W.p$,
            children: [
                (0, n.jsxs)("div", {
                    className: W.zc,
                    children: [
                        (0, n.jsx)("div", {
                            className: W.Wk,
                            children: (0, n.jsx)(K.O, { size: "md", color: "currentColor", className: W.Kk }),
                        }),
                        (0, n.jsx)(w.A, { className: W.uf }),
                    ],
                }),
                (0, n.jsx)(_.D, { variant: "heading-md/bold", className: W.q6, children: S.intl.string(S.t.reLFaV) }),
                (0, n.jsx)(j.E, { variant: "text-xs/normal", className: W.WO, children: S.intl.string(S.t.ERdH1o) }),
            ],
        }),
    Z = () =>
        (0, n.jsx)("div", {
            className: W.p$,
            children: (0, n.jsx)(j.E, {
                variant: "text-xs/normal",
                className: W.WO,
                children: S.intl.string(S.t.RV3AXf),
            }),
        }),
    Q = (e) => {
        let { timestamp: t } = e;
        return (0, n.jsx)(j.E, { variant: "text-xs/normal", className: W.vE, children: (0, z._W)(t) });
    },
    q = () => (0, n.jsx)(j.E, { variant: "text-xs/bold", className: W.Ad, children: S.intl.string(S.t.QKMRC4) }),
    J = (e) => {
        let { classification: t } = e,
            { id: r, description: l } = t,
            a = y.default.extractTimestamp(r),
            c = 864e5 > Math.abs(y.default.extractTimestamp(t.id) - new Date().getTime()),
            o = i.useMemo(() => {
                let e = {
                    description: l,
                    descriptionHook: (e) => (0, n.jsx)(j.E, { tag: "span", variant: "heading-lg/bold", children: e }),
                };
                return (0, z._g)(t)
                    ? t?.guild_metadata?.member_type === v.Z9.OWNER
                        ? S.intl.format(S.t.Lb0HVv, { ...e, guildName: t?.guild_metadata?.name })
                        : S.intl.format(S.t.rmpEPD, {
                              guildName: t?.guild_metadata?.name,
                              classification_type: e.description,
                              classificationHook: e.descriptionHook,
                          })
                    : S.intl.format(S.t.QY4g5t, e);
            }, [t, l]);
        return (0, n.jsx)(
            M.D,
            {
                onClick: () => {
                    (0, G.openModalLazy)(async () => {
                        let { default: e } = await Promise.all([
                            s.e("89317"),
                            s.e("95957"),
                            s.e("40841"),
                            s.e("18125"),
                            s.e("80889"),
                            s.e("16384"),
                            s.e("22513"),
                            s.e("61659"),
                            s.e("32442"),
                            s.e("63397"),
                            s.e("75058"),
                            s.e("71934"),
                            s.e("17764"),
                            s.e("45235"),
                            s.e("92652"),
                            s.e("86483"),
                            s.e("31632"),
                            s.e("86821"),
                            s.e("25568"),
                            s.e("32260"),
                            s.e("18091"),
                            s.e("11243"),
                            s.e("81167"),
                            s.e("55658"),
                            s.e("57546"),
                            s.e("24199"),
                            s.e("57036"),
                            s.e("88394"),
                            s.e("15380"),
                            s.e("207"),
                            s.e("88941"),
                            s.e("34530"),
                            s.e("61379"),
                            s.e("62680"),
                            s.e("43039"),
                            s.e("98125"),
                            s.e("18441"),
                            s.e("76602"),
                            s.e("21825"),
                            s.e("69354"),
                            s.e("28154"),
                            s.e("48804"),
                            s.e("88077"),
                            s.e("80527"),
                            s.e("85502"),
                            s.e("18401"),
                            s.e("13681"),
                            s.e("53729"),
                            s.e("21690"),
                            s.e("32551"),
                            s.e("31644"),
                            s.e("52367"),
                            s.e("23353"),
                            s.e("36561"),
                            s.e("28229"),
                            s.e("86949"),
                            s.e("50015"),
                            s.e("77998"),
                            s.e("31145"),
                            s.e("11523"),
                            s.e("66900"),
                            s.e("44695"),
                            s.e("10004"),
                            s.e("55314"),
                            s.e("29177"),
                            s.e("44376"),
                            s.e("9915"),
                            s.e("96905"),
                            s.e("33902"),
                            s.e("70653"),
                            s.e("31825"),
                            s.e("54527"),
                            s.e("72535"),
                            s.e("76195"),
                            s.e("51485"),
                            s.e("76170"),
                            s.e("1177"),
                            s.e("26490"),
                            s.e("32817"),
                            s.e("76418"),
                            s.e("51243"),
                            s.e("18943"),
                            s.e("89094"),
                            s.e("84103"),
                            s.e("21921"),
                            s.e("99999"),
                            s.e("5501"),
                            s.e("96123"),
                            s.e("27168"),
                            s.e("39038"),
                            s.e("36320"),
                            s.e("77245"),
                            s.e("31549"),
                            s.e("20320"),
                            s.e("43919"),
                            s.e("31390"),
                            s.e("57906"),
                            s.e("37622"),
                            s.e("22584"),
                            s.e("45421"),
                            s.e("44265"),
                            s.e("99141"),
                            s.e("66495"),
                            s.e("21435"),
                            s.e("98793"),
                            s.e("92731"),
                            s.e("25990"),
                            s.e("33584"),
                            s.e("63095"),
                            s.e("68647"),
                            s.e("67657"),
                            s.e("64615"),
                            s.e("88017"),
                            s.e("87225"),
                            s.e("12373"),
                            s.e("75134"),
                            s.e("84967"),
                            s.e("23216"),
                            s.e("30770"),
                            s.e("56212"),
                            s.e("39970"),
                            s.e("36498"),
                            s.e("3458"),
                            s.e("62827"),
                            s.e("73547"),
                            s.e("32823"),
                            s.e("34691"),
                            s.e("99593"),
                            s.e("61935"),
                            s.e("62168"),
                            s.e("55602"),
                            s.e("52463"),
                            s.e("13499"),
                            s.e("91381"),
                            s.e("93158"),
                            s.e("10034"),
                            s.e("72832"),
                            s.e("73500"),
                            s.e("14879"),
                            s.e("53526"),
                            s.e("34472"),
                            s.e("45723"),
                            s.e("29375"),
                            s.e("48778"),
                            s.e("5895"),
                            s.e("38835"),
                            s.e("90889"),
                            s.e("2537"),
                            s.e("78777"),
                            s.e("17249"),
                            s.e("62355"),
                            s.e("93708"),
                            s.e("71482"),
                            s.e("36126"),
                            s.e("62422"),
                            s.e("80565"),
                            s.e("58765"),
                            s.e("49697"),
                            s.e("78707"),
                            s.e("19452"),
                            s.e("65881"),
                            s.e("1518"),
                            s.e("10745"),
                            s.e("84113"),
                            s.e("51391"),
                            s.e("91942"),
                            s.e("89465"),
                            s.e("82644"),
                            s.e("27779"),
                            s.e("20590"),
                            s.e("64480"),
                            s.e("53984"),
                            s.e("79780"),
                            s.e("78651"),
                            s.e("46844"),
                            s.e("79745"),
                            s.e("34150"),
                            s.e("39406"),
                            s.e("19558"),
                            s.e("2698"),
                            s.e("86243"),
                            s.e("48295"),
                            s.e("18997"),
                            s.e("32326"),
                            s.e("16916"),
                            s.e("49205"),
                            s.e("49181"),
                            s.e("81328"),
                            s.e("20973"),
                            s.e("34967"),
                            s.e("12682"),
                            s.e("6142"),
                            s.e("49345"),
                            s.e("61437"),
                            s.e("43114"),
                            s.e("92030"),
                            s.e("51194"),
                            s.e("29211"),
                        ]).then(s.bind(s, 385430));
                        return (t) => (0, n.jsx)(e, { classificationId: r, source: Y.XN.StandingTab, ...t });
                    });
                },
                className: b()(W.zk, { [W.V5]: c }),
                children: (0, n.jsxs)("div", {
                    className: W.iQ,
                    children: [
                        c ? (0, n.jsx)(q, {}) : (0, n.jsx)(Q, { timestamp: a }),
                        (0, n.jsx)(_.D, { variant: "heading-lg/normal", children: o }),
                    ],
                }),
            },
            r,
        );
    },
    ee = (e) => {
        let { status: t, classifications: s } = e,
            [r, l] = i.useState(!1),
            [a, c] = i.useState(3),
            o = (0, N.K)(),
            u = (0, m.bG)([h.A], () => h.A.getIsDsaEligible()),
            E = i.useMemo(() => s.slice(0, a), [s, a]);
        i.useEffect(() => {
            r &&
                d.default.track(F.HAw.SAFETY_HUB_ACTION, {
                    action: Y.ZU.ViewViolationsDropdown,
                    account_standing: o.state,
                    classification_ids: E.map((e) => Number(e.id)),
                    source: Y.XN.StandingTab,
                    is_violative_content_shown: !1,
                    is_dsa_eligible: u,
                });
        }, [r, o.state, E, u]);
        let g = s.length - E.length > 3 ? 3 : s.length - E.length;
        return (0, n.jsxs)("div", {
            className: W.Wm,
            children: [
                (0, n.jsx)(X, { status: t, onClick: () => l((e) => !e), opened: r, count: s.length }),
                r &&
                    (0, n.jsxs)("div", {
                        className: W.ld,
                        children: [
                            (0, n.jsx)(V.V.Separator, { style: { height: "1px", width: "100%" } }),
                            E.length > 0 && E.map((e) => (0, n.jsx)(J, { classification: e }, e.id)),
                            E.length < s.length &&
                                (0, n.jsxs)(n.Fragment, {
                                    children: [
                                        (0, n.jsx)(V.V.Separator, { style: { height: "1px", width: "100%" } }),
                                        (0, n.jsx)("button", {
                                            className: W.Hr,
                                            onClick: () => c((e) => e + g),
                                            children: S.intl.format(S.t["9Ml56H"], { nextPageSize: g }),
                                        }),
                                    ],
                                }),
                            0 === E.length && "active" === t && (0, n.jsx)($, {}),
                            0 === E.length && "expired" === t && (0, n.jsx)(Z, {}),
                        ],
                    }),
            ],
        });
    },
    et = () => {
        let e = (0, H.CI)(),
            t = (0, H.XK)();
        return 0 === e.length && 0 === t.length
            ? null
            : (0, n.jsxs)("div", {
                  children: [
                      (0, n.jsx)(ee, { status: "active", classifications: e }),
                      (0, n.jsx)(ee, { status: "expired", classifications: t }),
                  ],
              });
    };
var es = s(746631);
function en() {
    let e = (0, g.A)(),
        t = (0, E.v)(),
        s = (0, N.K)(),
        x = (0, m.bG)([h.A], () => h.A.getFetchError());
    (0, c.Ay)(() => {
        u.Yn();
    });
    let I = i.useRef(s);
    return (i.useEffect(() => {
        I.current = s;
    }),
    i.useEffect(() => {
        t &&
            (d.default.track(F.HAw.SAFETY_HUB_VIEWED, { account_standing: I.current.state }),
            o.A.increment({ name: r.K.SAFETY_HUB_VIEW }));
    }, [t]),
    e)
        ? (0, n.jsx)(l.y, {})
        : null != x
          ? (0, n.jsxs)(a.$T, {
                color: a.Hv.DANGER,
                className: es.aL,
                children: [
                    S.intl.string(S.t.TDRvqs),
                    (0, n.jsx)(a.zr, { onClick: () => u.Yn(), children: S.intl.string(S.t.R1AN4F) }),
                ],
            })
          : (0, n.jsxs)("div", { className: es.kL, children: [(0, n.jsx)(R, {}), (0, n.jsx)(et, {})] });
}
