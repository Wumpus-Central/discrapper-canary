s.r(t), s.d(t, { default: () => sU }), s(323874), s(14289), s(35956);
var n = s(627968),
    a = s(64700),
    l = s(503698),
    r = s.n(l),
    i = s(873263),
    o = s(132500),
    c = s(110259),
    u = s(17928),
    d = s(554146),
    _ = s(577473),
    m = s(825484),
    h = s(821609),
    x = s(509434),
    f = s(534514),
    E = s(834730),
    p = s(123292),
    g = s(944791),
    C = s(775602),
    b = s(793574),
    j = s(139286),
    v = s(197111),
    A = s(10088),
    N = s(803375),
    T = s(726249),
    S = s(607470),
    O = s(826673),
    L = s(840251),
    I = s(688151);
let y = new L.E([], I.$G.QUEST_HOME_OPEN, { location: "open quest home" });
var R = s(711111),
    Q = s(701508),
    H = s(979590),
    M = s(749638),
    U = s(783531),
    F = s(334465),
    P = s(318346),
    w = s(270051),
    k = s(70926),
    q = s(531685),
    D = s(954571),
    B = s(676279),
    V = s(975571),
    W = s(240248),
    Y = s(507107),
    G = s(631001),
    z = s(87549),
    $ = s(890687),
    K = s(590202);
s(321073);
var J = s(228366),
    Z = s(829219),
    X = s(859703);
s(667532);
var ee = s(783878),
    et = s(408278),
    es = s(663417),
    en = s(922016),
    ea = s(624479),
    el = s(289873),
    er = s(416052),
    ei = s(417098),
    eo = s(985018);
let ec = (e) => {
    let { error: t } = e,
        s = t.getAnyErrorMessage();
    return (0, n.jsx)(ei.$T, {
        color: ei.Hv.DANGER,
        children: (0, n.jsx)("div", { children: null != s ? s : eo.intl.string(eo.t.ZErSg5) }),
    });
};
var eu = s(661531),
    ed = s(602853),
    e_ = s(817281),
    em = s(688810),
    eh = s(692798),
    ex = s(363195),
    ef = s(652215),
    eE = s(398876);
let ep = function () {
    let { analyticsLocations: e } = (0, em.Ay)(),
        t = (0, u.bG)([ex.A], () => ex.A.theme),
        s = a.useRef(null);
    a.useEffect(() => {
        null == s.current && (s.current = t);
    }, [t]);
    let l = (0, ed.r)(eu.A.colors.BACKGROUND_BASE_LOW, ef.NJ8.LIGHT),
        r = (0, ed.r)(eu.A.colors.BACKGROUND_BASE_LOW, ef.NJ8.DARKER),
        i = (0, ed.r)(eu.A.colors.BACKGROUND_BASE_LOW, ef.NJ8.MIDNIGHT),
        o = a.useMemo(
            () => [
                { theme: ef.NJ8.LIGHT, label: eo.t.K2sFfo, color: l.hex() },
                { theme: ef.NJ8.DARKER, label: eo.t.b8Cei3, color: r.hex() },
                { theme: ef.NJ8.MIDNIGHT, label: eo.t.Do4ZJx, color: i.hex() },
            ],
            [l, r, i],
        ),
        c = a.useCallback(
            (t) => {
                (0, eh.X8)({ isPersisted: !0, analyticsLocations: e, themeName: `default ${t}` }),
                    (0, e_.u_)({ theme: t });
            },
            [e],
        ),
        d = a.useCallback(() => {
            null != s.current && c(s.current);
        }, [c]);
    return (0, n.jsx)("div", {
        className: eE.N,
        children: (0, n.jsxs)("div", {
            className: eE.t7,
            children: [
                o.map((e) =>
                    (0, n.jsxs)(
                        "button",
                        {
                            type: "button",
                            className: eE.Du,
                            onClick: () => c(e.theme),
                            "aria-label": eo.intl.string(e.label),
                            children: [
                                (0, n.jsx)("div", {
                                    className: `${eE.WT} ${t === e.theme ? eE.TA : ""}`,
                                    style: { backgroundColor: e.color },
                                }),
                                (0, n.jsx)("span", { className: eE.i, children: eo.intl.string(e.label) }),
                            ],
                        },
                        e.theme,
                    ),
                ),
                (0, n.jsx)(et.K, {
                    onClick: d,
                    "aria-label": eo.intl.string(eo.t.yBZMsQ),
                    icon: es.f,
                    variant: "secondary",
                }),
            ],
        }),
    });
};
var eg = s(818348),
    eC = s(60857);
let eb = function (e) {
    let { questId: t, setQuestId: s, quest: l, refreshQuest: r } = e,
        [i, o] = a.useState(!1),
        [c, d] = a.useState(!1),
        _ = a.useRef(null),
        x = (0, $.pT)(),
        f = (0, u.bG)([X.A], () => (null != t ? X.A.getFetchQuestPreviewError(t) : null), [t]),
        E = (0, u.bG)([X.A], () => null != t && X.A.isFetchingQuestPreview(t), [t]),
        p = a.useMemo(() => {
            let e = x.map((e) => ({
                id: e.id,
                label: `${e.config?.messages?.questName ?? e.id} (${e.id})`,
                value: e.id,
            }));
            return null == t || e.some((e) => e.value === t) || e.unshift({ id: t, label: t, value: t }), e;
        }, [x, t]),
        g = a.useCallback(async () => {
            if (null != t) {
                o(!0);
                try {
                    await (0, Z.Yb)(t, 1);
                } finally {
                    o(!1);
                }
            }
        }, [t, o]),
        C = a.useCallback(async () => {
            if (null != t) {
                o(!0);
                try {
                    await (0, Z.UZ)(t);
                } finally {
                    o(!1);
                }
            }
        }, [t, o]),
        b = a.useCallback(async () => {
            if (null != t) {
                o(!0);
                try {
                    let e = Math.random();
                    await (0, Z.Yb)(t, e);
                } finally {
                    o(!1);
                }
            }
        }, [t, o]),
        j = a.useCallback(
            (e) => {
                (0, W.uJ)(e) || null == s || s(e);
            },
            [s],
        );
    return (0, n.jsxs)("div", {
        className: eC.Fr,
        children: [
            (0, n.jsx)("div", {
                children: (0, n.jsx)("div", {
                    className: eC.Br,
                    children: (0, n.jsxs)("div", {
                        className: eC.bo,
                        children: [
                            (0, n.jsx)(ep, {}),
                            (0, n.jsxs)("div", {
                                className: eC.b8,
                                children: [
                                    (0, n.jsx)(
                                        ee.Z,
                                        {
                                            selectionMode: "single",
                                            label: "Quest ID",
                                            hideLabel: !0,
                                            options: p,
                                            value: t,
                                            onSelectionChange: j,
                                            placeholder: eo.intl.string(eo.t.Zw8jxn),
                                            clearable: !0,
                                            customMatchSorter: (e, t) => {
                                                if ((0, W.uJ)(t?.trim())) return e;
                                                let s = e.filter(
                                                    (e) =>
                                                        e.label.toLowerCase().includes(t.toLowerCase()) ||
                                                        e.value.toLowerCase().includes(t.toLowerCase()),
                                                );
                                                return 0 === s.length && "" !== t.trim()
                                                    ? [{ label: t.trim(), value: t.trim() }]
                                                    : s;
                                            },
                                        },
                                        `${t}-${l?.config?.messages?.questName ?? ""}`,
                                    ),
                                    (0, n.jsx)(et.K, {
                                        onClick: r,
                                        "aria-label": eo.intl.string(eo.t.wzzjk9),
                                        icon: es.f,
                                        loading: E,
                                    }),
                                ],
                            }),
                        ],
                    }),
                }),
            }),
            null != t &&
                null != l &&
                (0, n.jsx)("div", {
                    className: eC.in,
                    children: (0, n.jsxs)(m.e, {
                        className: eC.xv,
                        children: [
                            (0, n.jsx)(h.$, {
                                onClick: g,
                                disabled: i,
                                loading: i,
                                variant: "secondary",
                                text: eo.intl.string(eo.t.jQEfRT),
                            }),
                            (0, n.jsx)(h.$, {
                                onClick: C,
                                disabled: i,
                                loading: i,
                                variant: "secondary",
                                text: eo.intl.string(eo.t.taqkwK),
                            }),
                            (0, n.jsx)(h.$, {
                                onClick: b,
                                disabled: i,
                                loading: i,
                                variant: "secondary",
                                text: eo.intl.string(eo.t.cKSLr4),
                            }),
                            (0, n.jsx)(en.Y, {
                                targetElementRef: _,
                                shouldShow: c,
                                onRequestClose: () => d(!1),
                                position: "bottom",
                                align: "center",
                                renderPopout: () =>
                                    (0, n.jsx)("div", {
                                        className: eC.PP,
                                        children: (0, n.jsx)("div", {
                                            className: eC.sH,
                                            children: (0, n.jsx)(er.A, {
                                                value: eg.Sb.QUEST_PREVIEW_TOOL_2(t),
                                                text: eo.intl.string(eo.t.WqhZss),
                                            }),
                                        }),
                                    }),
                                children: () =>
                                    (0, n.jsx)(et.K, {
                                        buttonRef: _,
                                        onClick: () => d(!c),
                                        "aria-label": eo.intl.string(eo.t.rNGQfD),
                                        icon: ea.T,
                                        variant: "secondary",
                                    }),
                            }),
                        ],
                    }),
                }),
            null != f ? (0, n.jsx)(ec, { error: f }) : null,
            E ? (0, n.jsx)(el.y, {}) : null,
        ],
    });
};
var ej = s(761508),
    ev = s(797788);
let eA = () => (0, n.jsx)("div", { className: ev.y });
var eN = s(834615),
    eT = s(332544);
let eS = function (e) {
    let { quest: t } = e;
    return (0, n.jsx)("div", {
        className: eT.x3,
        children: (0, n.jsxs)("div", {
            className: eT.B0,
            children: [
                (0, n.jsx)(f.D, {
                    className: eT.R_,
                    variant: "heading-md/semibold",
                    children: eo.intl.string(eo.t.L2mlUb),
                }),
                (0, n.jsx)(eN.A, { quest: t }),
            ],
        }),
    });
};
var eO = s(241124),
    eL = s(28082),
    eI = s(717695),
    ey = s(763578),
    eR = s(111113);
let eQ = function (e) {
    let { quest: t } = e;
    return (0, n.jsx)("div", {
        className: eT.x3,
        children: (0, n.jsxs)("div", {
            className: ey.wp,
            children: [
                (0, n.jsx)(f.D, {
                    className: ey.Oo,
                    variant: "heading-md/semibold",
                    children: eo.intl.string(eo.t.rjVPdM),
                }),
                (0, n.jsx)("div", {
                    className: ey.RE,
                    children: (0, n.jsx)("div", {
                        className: ey.Z,
                        children: (0, n.jsx)("div", {
                            className: eR.C3,
                            children: (0, n.jsx)(eI.A, {
                                children: (0, n.jsx)(eO.jY, {
                                    source: "preview",
                                    questId: t.id,
                                    children: (0, n.jsx)(eL.Y, { quest: t }),
                                }),
                            }),
                        }),
                    }),
                }),
            ],
        }),
    });
};
var eH = s(59350);
let eM = (e) => {
    let { quest: t } = e;
    return (0, n.jsx)("div", {
        className: eT.x3,
        children: (0, n.jsxs)("div", {
            className: eT.B0,
            children: [
                (0, n.jsx)(f.D, {
                    className: eT.R_,
                    variant: "heading-md/semibold",
                    children: eo.intl.string(eo.t.gWinpQ),
                }),
                (0, n.jsx)("div", {
                    className: eT.YT,
                    children: (0, n.jsx)(eH.A, {
                        channelId: "preview-channel-id",
                        previewQuest: t,
                        isParticipatingOverride: !1,
                    }),
                }),
            ],
        }),
    });
};
var eU = s(160778),
    eF = s(330034);
let eP = function (e) {
    let { questId: t } = e;
    return (0, n.jsx)("div", {
        className: eT.x3,
        children: (0, n.jsxs)("div", {
            className: eT.B0,
            children: [
                (0, n.jsx)(f.D, { variant: "heading-md/semibold", children: eo.intl.string(eo.t.IcljUu) }),
                (0, n.jsx)("div", {
                    className: eF.wu,
                    children: (0, n.jsx)("span", { className: eF.cy, children: eo.intl.string(eo.t.q97mEu) }),
                }),
                (0, n.jsx)("div", {
                    className: eF.oU,
                    children: (0, n.jsx)("div", {
                        className: eF.zx,
                        children: (0, n.jsx)("div", {
                            className: eF.Lj,
                            children: (0, n.jsx)("div", {
                                className: eF.n0,
                                children: (0, n.jsx)(eU.A, { questId: t }),
                            }),
                        }),
                    }),
                }),
            ],
        }),
    });
};
var ew = s(291922);
let ek = (e) => {
    let { quest: t } = e;
    return (0, n.jsx)("div", {
        className: eT.x3,
        children: (0, n.jsxs)("div", {
            className: eT.B0,
            children: [
                (0, n.jsx)(f.D, {
                    className: eT.R_,
                    variant: "heading-md/semibold",
                    children: eo.intl.string(eo.t["5wnpF3"]),
                }),
                (0, n.jsx)(ew.A, {
                    className: eT.d,
                    quest: t,
                    questContent: Y.uF.QUEST_HOME_DESKTOP,
                    contentPosition: 0,
                    rowIndex: 0,
                    sourceQuestContent: Y.uF.INTERNAL_PREVIEW_TOOL,
                }),
            ],
        }),
    });
};
var eq = s(939249),
    eD = s(97808),
    eB = s(778712),
    eV = s(87664),
    eW = s(287809),
    eY = s(427262),
    eG = s(198525),
    ez = s(66176);
let e$ = function (e) {
        let { quest: t } = e,
            [s, l] = a.useState(!1),
            i = a.useRef(null),
            o = (0, u.bG)([eW.default], () => eW.default.getCurrentUser()),
            c = eY.Ay.useName(o),
            d = (0, eV.A)(o?.id),
            _ = a.useCallback(
                (e) =>
                    (0, n.jsx)(eG.A, {
                        name: c,
                        quest: t,
                        memberListItemRef: i,
                        applicationStream: d,
                        ...e,
                        closePopout: () => {
                            l(!1);
                        },
                    }),
                [t, d, c],
            );
        return (0, n.jsx)("div", {
            className: eT.x3,
            children: (0, n.jsxs)("div", {
                className: eT.B0,
                children: [
                    (0, n.jsx)(f.D, {
                        className: ez.R_,
                        variant: "heading-md/semibold",
                        children: eo.intl.string(eo.t.jY7Zxg),
                    }),
                    (0, n.jsx)("div", { className: ez.$Q, children: eo.intl.string(eo.t.q3hbne) }),
                    (0, n.jsx)("div", {
                        className: ez.k0,
                        children: (0, n.jsx)(en.Y, {
                            targetElementRef: i,
                            renderPopout: _,
                            position: "bottom",
                            shouldShow: s,
                            onRequestClose: () => l(!1),
                            nudgeAlignIntoViewport: !1,
                            useRawTargetDimensions: !0,
                            animation: en.Y.Animation.NONE,
                            spacing: -3,
                            fixed: !0,
                            scrollBehavior: "close",
                            children: () =>
                                (0, n.jsx)("div", {
                                    ref: i,
                                    className: r()(ez.Tn, { [ez.wH]: s }),
                                    children: (0, n.jsx)(eq.D, {
                                        onClick: () => l(!s),
                                        tabIndex: 0,
                                        children: (0, n.jsxs)("div", {
                                            className: ez.lm,
                                            children: [
                                                (0, n.jsx)(eD.eu, {
                                                    size: eB._3.SIZE_32,
                                                    src: o?.getAvatarURL(void 0, 32),
                                                    status: ef.clD.ONLINE,
                                                    "aria-label": o?.username,
                                                }),
                                                (0, n.jsxs)("div", {
                                                    className: ez.Fj,
                                                    children: [
                                                        (0, n.jsx)(E.E, {
                                                            variant: "text-md/semibold",
                                                            color: "text-strong",
                                                            children: c,
                                                        }),
                                                        (0, n.jsx)(E.E, {
                                                            variant: "text-sm/normal",
                                                            color: "text-muted",
                                                            children: eo.intl.string(eo.t.b9w3bO),
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                    }),
                                }),
                        }),
                    }),
                ],
            }),
        });
    },
    eK = (e) => {
        let { questId: t, selectedSections: s } = e,
            a = (0, u.bG)([X.A], () => X.A.getQuest(t));
        if (null != (0, u.bG)([X.A], () => X.A.getFetchQuestPreviewError(t)) || null == a) return null;
        let l = (e) => null == s || 0 === s.length || s.includes(e);
        return (0, n.jsxs)(n.Fragment, {
            children: [
                l("quest_bar") &&
                    (0, n.jsxs)(n.Fragment, { children: [(0, n.jsx)(eQ, { quest: a }), (0, n.jsx)(eA, {})] }),
                l("home_card") &&
                    (0, n.jsxs)(n.Fragment, { children: [(0, n.jsx)(ek, { quest: a }), (0, n.jsx)(eA, {})] }),
                l("share_embed") &&
                    (0, n.jsxs)(n.Fragment, { children: [(0, n.jsx)(eP, { questId: a.id }), (0, n.jsx)(eA, {})] }),
                l("channel_call_header") &&
                    (0, n.jsxs)(n.Fragment, { children: [(0, n.jsx)(eM, { quest: a }), (0, n.jsx)(eA, {})] }),
                l("members_list") &&
                    (0, n.jsxs)(n.Fragment, { children: [(0, n.jsx)(e$, { quest: a }), (0, n.jsx)(eA, {})] }),
                l("activity_panel") &&
                    (0, n.jsxs)(n.Fragment, { children: [(0, n.jsx)(eS, { quest: a }), (0, n.jsx)(eA, {})] }),
            ],
        });
    };
var eJ = s(497275);
function eZ(e) {
    let { children: t, selectedSections: s = [], onSectionSelect: l, controls: r } = e,
        i = [
            { value: "quest_bar", label: eo.intl.string(eo.t.rjVPdM) },
            { value: "share_embed", label: eo.intl.string(eo.t["D/gSWS"]) },
            { value: "home_card", label: eo.intl.string(eo.t["5wnpF3"]) },
            { value: "channel_call_header", label: eo.intl.string(eo.t.gWinpQ) },
            { value: "members_list", label: eo.intl.string(eo.t.wpYima) },
            { value: "activity_panel", label: eo.intl.string(eo.t.L2mlUb) },
        ],
        o = 0 === s.length || s.length === i.length,
        c = a.useMemo(() => (o ? "all" : 1 === s.length ? s[0] : "all"), [s, o]);
    return (0, n.jsxs)("div", {
        className: eJ.kL,
        children: [
            (0, n.jsx)(f.D, {
                variant: "heading-xl/semibold",
                color: "text-strong",
                children: eo.intl.string(eo.t.BDUDau),
            }),
            (0, n.jsx)("div", { className: eJ.pf, children: r }),
            (0, n.jsxs)(ej.V, {
                type: "top",
                look: "brand",
                selectedItem: c,
                onItemSelect: (e) => {
                    l?.(e);
                },
                children: [
                    (0, n.jsx)(ej.V.Item, { id: "all", children: eo.intl.string(eo.t.Y9DnPa) }),
                    i.map((e) => (0, n.jsx)(ej.V.Item, { id: e.value, children: e.label }, e.value)),
                ],
            }),
            (0, n.jsx)("div", { className: eJ.tZ, children: (0, n.jsx)("div", { className: eJ.Qs, children: t }) }),
        ],
    });
}
function eX(e) {
    return new URLSearchParams(e).get($.L1.QUEST_ID);
}
let e0 = function (e) {
    let { questId: t } = e,
        { questId: s, setQuestId: l } = (function (e) {
            let t = (0, i.W6)(),
                [s, n] = a.useState(e),
                { search: l } = (0, i.zy)();
            return (
                a.useEffect(() => {
                    let t = eX(l);
                    null != t ? n(t) : null != e && n(e);
                }, [e, l]),
                a.useEffect(() => {
                    if (null == s || eX(l) === s) return;
                    let e = new URLSearchParams();
                    e.set($.L1.TAB, $.NC.PREVIEW_TOOL),
                        e.set($.L1.QUEST_ID, s),
                        t.push(`${ef.BVt.QUEST_HOME}?${e.toString()}`);
                }, [s, t, l]),
                { questId: s, setQuestId: n }
            );
        })(t),
        r = (0, u.bG)([X.A], () => (null != s ? X.A.getQuest(s) : void 0), [s]),
        o = (0, u.bG)([X.A], () => (null != s ? X.A.getQuestLoadedViaPreview(s) : null), [s]);
    a.useEffect(() => {
        null != s &&
            (0, Z.dQ)(s).then(() => {
                (0, Z.Gt)(s);
            });
    }, [s]),
        a.useEffect(() => {
            let e = (e) => {
                let { quest_id: t } = e;
                t === s && (0, Z.dQ)(s);
            };
            return (
                J.h.subscribe("QUEST_PREVIEW_UPDATE", e),
                () => {
                    J.h.unsubscribe("QUEST_PREVIEW_UPDATE", e);
                }
            );
        }, [s]);
    let [c, d] = a.useState([]);
    return (0, n.jsx)(eZ, {
        controls: (0, n.jsx)(eb, {
            questId: s,
            setQuestId: l,
            quest: r,
            refreshQuest: () => {
                null != s && (0, Z.dQ)(s);
            },
        }),
        selectedSections: c,
        onSectionSelect: (e) => {
            "all" === e ? d([]) : d([e]);
        },
        children: o?.id != null ? (0, n.jsx)(eK, { questId: o?.id, selectedSections: c }) : null,
    });
};
var e1 = s(545986),
    e8 = s(203879),
    e5 = s(403362),
    e2 = s(167417),
    e4 = s(783977),
    e3 = s(651892),
    e9 = s(305866),
    e7 = s(915089),
    e6 = s(332733);
function te(e) {
    let { children: t, id: s } = e;
    return (0, n.jsx)(E.E, { className: e6.g, color: "text-subtle", id: s, variant: "text-sm/semibold", children: t });
}
let tt = function (e) {
    let { children: t, renderPopout: s } = e,
        l = (0, e7.GV)(),
        r = a.useRef(null);
    return (0, n.jsx)(en.Y, {
        align: "right",
        position: "bottom",
        renderPopout: (e) => (0, n.jsx)(e9.l, { className: e6.S, "aria-labelledby": l, children: s(e, l) }),
        scrollBehavior: "close",
        targetElementRef: r,
        children: (e) => t(e, r),
    });
};
var ts = s(612539);
let tn = function (e) {
    let { onChange: t, selectedFilters: s } = e,
        l = (0, $.Nb)(),
        r = a.useCallback(
            (e) => (n) => {
                let a = e.filter((e) => n.includes(e.filter));
                t([...s.filter((t) => !e.some((e) => e.filter === t.filter)), ...a]);
            },
            [s, t],
        );
    return (0, n.jsx)(tt, {
        renderPopout: (e, i) => {
            let { closePopout: o } = e;
            return (0, n.jsxs)("div", {
                children: [
                    l.map((e, t) => {
                        let l = e.options.map((e) => ({ label: (0, e3.up)(e.filter), value: e.filter })),
                            o = s.filter((t) => e.options.some((e) => e.filter === t.filter)).map((e) => e.filter);
                        return (0, n.jsxs)(
                            a.Fragment,
                            {
                                children: [
                                    t > 0 && (0, n.jsx)("hr", { className: ts.B }),
                                    (0, n.jsx)(te, { id: i, children: e.heading }),
                                    (0, n.jsx)(e2.$, {
                                        "aria-labelledby": i,
                                        options: l,
                                        selectedValues: o,
                                        onChange: r(e.options),
                                    }),
                                ],
                            },
                            t,
                        );
                    }),
                    (0, n.jsx)("hr", { className: ts.B }),
                    (0, n.jsx)("div", {
                        className: ts.W,
                        children: (0, n.jsx)(h.$, {
                            fullWidth: !0,
                            onClick: () => {
                                t([]), o();
                            },
                            size: "sm",
                            text: eo.intl.string(eo.t.VkKicb),
                            variant: "secondary",
                        }),
                    }),
                ],
            });
        },
        children: (e, t) =>
            (0, n.jsx)(h.$, {
                ...e,
                buttonRef: t,
                size: "sm",
                text: eo.intl.formatToPlainString(eo.t.CEfkXl, { numSelectedFilters: s.length }),
                icon: e4.R,
                iconPosition: "end",
                variant: "secondary",
            }),
    });
};
var ta = s(144228),
    tl = s(715482);
let tr = function (e) {
    let { onChange: t, optionClassName: s, selectedSortMethod: l } = e,
        r = a.useCallback(
            (e) => {
                t(e);
            },
            [t],
        ),
        i = (0, $.XD)(),
        o = a.useMemo(() => i.map((e) => ({ name: e.label, value: e.value, radioBarClassName: s })), [i, s]);
    return (0, n.jsx)(tt, {
        renderPopout: (e, t) => {
            let { closePopout: s } = e;
            return (0, n.jsxs)(n.Fragment, {
                children: [
                    (0, n.jsx)(te, { id: t, children: eo.intl.string(eo.t.tZXJIS) }),
                    (0, n.jsx)(ta.z, {
                        options: o,
                        onChange: (e) => {
                            s(), r(e);
                        },
                        value: l,
                    }),
                ],
            });
        },
        children: (e, t) =>
            (0, n.jsx)(h.$, {
                ...e,
                buttonRef: t,
                size: "sm",
                text: (0, e3.Js)(l),
                icon: tl.g,
                iconPosition: "end",
                variant: "secondary",
            }),
    });
};
var ti = s(419354),
    to = s(535185),
    tc = s(717421),
    tu = s(927813),
    td = s(710969),
    t_ = s(121480);
let tm = 4 * tu.A.Millis.SECOND;
function th(e) {
    let { children: t } = e,
        s = a.useRef(null),
        [l, r] = a.useState(null),
        i = a.useCallback(() => {
            r(
                (function (e) {
                    if (null == e) return 1;
                    let t = Math.floor((e.clientWidth + 24) / 360);
                    return t > 0 ? t : 1;
                })(s.current),
            );
        }, [r]);
    return (
        (0, to.g)(s, i, [], { fireOnMount: !0 }),
        (0, n.jsx)("div", {
            className: t_.kL,
            ref: s,
            style: { "--custom-min-quest-tile-width": "336px", "--custom-quest-grid-gap": "24px" },
            children: null !== l && t(l),
        })
    );
}
let tx = a.forwardRef(function (e, t) {
    let {
            quests: s,
            excludedQuests: l,
            isFetching: o,
            hasFetched: c,
            hasFiltersApplied: u = !1,
            onClearFilters: d,
        } = e,
        _ = (0, i.zy)(),
        m = a.useRef(""),
        [h, x] = a.useState(null),
        [p, g] = a.useState(0),
        [{ highlightAnimationProgress: C }, b] = (0, tc.z)(() => ({
            highlightAnimationProgress: 1,
            config: { duration: tm },
        })),
        j = a.useCallback(
            (e) => {
                let t = (0, td.vc)(e, s, l);
                return null != t && (x(t.id), g((e) => e + 1), !0);
            },
            [s, l],
        );
    return (a.useImperativeHandle(t, () => ({ scrollToQuest: j }), [j]),
    a.useLayoutEffect(() => {
        if (0 === _.hash.length) {
            m.current = "";
            return;
        }
        o || !c || (_.hash !== m.current && j(_.hash.slice(1)) && (m.current = _.hash));
    }, [_.hash, o, c, j]),
    a.useLayoutEffect(() => {
        if (null == h) return;
        let e = document.getElementById(`quest-tile-${h}`);
        null != e &&
            (e.scrollIntoView({ behavior: "smooth", block: "center" }),
            b({
                from: { highlightAnimationProgress: 0 },
                to: { highlightAnimationProgress: 1 },
                reset: !0,
                onRest: (e) => {
                    e.cancelled || x(null);
                },
            }));
    }, [h, p, b]),
    o && 0 === s.length)
        ? (0, n.jsx)(el.y, { className: t_.u1 })
        : 0 === s.length
          ? (0, n.jsxs)("div", {
                className: t_.y7,
                children: [
                    (0, n.jsx)(f.D, {
                        variant: "heading-xl/semibold",
                        children: eo.intl.string(u ? eo.t.PBfFnx : eo.t.NqFP6z),
                    }),
                    (0, n.jsx)(E.E, {
                        variant: "text-md/normal",
                        color: "text-subtle",
                        children: u ? eo.intl.format(eo.t.LdYS1H, { onClick: d }) : eo.intl.string(eo.t.LhD4yH),
                    }),
                ],
            })
          : (0, n.jsx)(th, {
                children: (e) =>
                    s.map((t, s) => {
                        let a = Math.floor(s / e),
                            l = h === t.id,
                            i = null != h && !l;
                        return (0, n.jsxs)(
                            ti.animated.div,
                            {
                                className: r()({ [t_.XB]: l }),
                                style: l
                                    ? {
                                          boxShadow: (0, ti.to)(
                                              [C.to({ range: [0, 0.25, 0.75, 1], output: [0, 1, 1, 0] })],
                                              (e) => `0 0 ${25 * e}px 0 rgba(88, 101, 242, ${e})`,
                                          ),
                                      }
                                    : i
                                      ? {
                                            opacity: (0, ti.to)(
                                                [C.to({ range: [0, 0.25, 0.75, 1], output: [1, 0.4, 0.4, 1] })],
                                                (e) => e,
                                            ),
                                        }
                                      : void 0,
                                children: [
                                    l && (0, n.jsx)("div", { className: t_.E4 }, p),
                                    (0, n.jsx)(ew.A, {
                                        quest: t,
                                        questContent: Y.uF.QUEST_HOME_DESKTOP,
                                        contentPosition: s,
                                        rowIndex: a,
                                        className: t_.d,
                                        sourceQuestContent: Y.uF.QUEST_HOME_DESKTOP,
                                    }),
                                ],
                            },
                            t.id,
                        );
                    }),
            });
});
var tf = s(458518),
    tE = s(654487),
    tp = s(65990);
let tg = [],
    tC = $.L1.SORT,
    tb = $.L1.FILTER,
    tj = a.forwardRef(function (e, t) {
        let s,
            l,
            r,
            o,
            c = a.useRef(null),
            [u, d] =
                ((s = (0, tf.o)()),
                (l = (0, i.W6)()),
                (r = a.useRef(null)),
                (o = a.useCallback(
                    (e) => {
                        let t = new URLSearchParams(r.current ?? s);
                        for (let [s, n] of Object.entries(e)) null == n ? t.delete(s) : t.set(s, n);
                        (r.current = t),
                            l.replace({ search: t.toString() }),
                            Promise.resolve().then(() => {
                                r.current = null;
                            });
                    },
                    [s, l],
                )),
                [s, o]),
            _ = a.useMemo(() => {
                var e;
                return (
                    (e = u.get(tC)),
                    ((0, W.uJ)(e) ? null : (Object.values(tE.kL).find((t) => t === e) ?? null)) ?? tE.kL.SUGGESTED
                );
            }, [u]),
            m = a.useMemo(
                () =>
                    (function (e) {
                        if ((0, W.uJ)(e)) return null;
                        let t = e
                            .split(",")
                            .map((e) => (0, tE.WQ)(e))
                            .filter(e5.Vq);
                        return t.length > 0 ? t : null;
                    })(u.get(tb)) ?? tg,
                [u],
            ),
            h = a.useCallback(
                (e) => {
                    d({ [tC]: e });
                },
                [d],
            ),
            x = a.useCallback(
                (e) => {
                    d({
                        [tb]:
                            0 === e.length
                                ? null
                                : e
                                      .map((e) => {
                                          let { filter: t } = e;
                                          return t;
                                      })
                                      .join(","),
                    });
                },
                [d],
            ),
            {
                quests: E,
                excludedQuests: p,
                isFetchingCurrentQuests: g,
                hasFetched: C,
            } = (0, $.Qh)(
                $.NC.ALL,
                a.useMemo(() => ({ sortMethod: _, filters: m }), [_, m]),
            ),
            b = a.useCallback(() => {
                x(tg);
            }, [x]),
            j = a.useRef(null),
            v = a.useRef(null),
            A = (0, i.zy)(),
            N = (0, i.W6)();
        return (
            a.useEffect(() => {
                "" !== A.hash &&
                    null != j.current &&
                    null != v.current &&
                    (_ !== j.current || m !== v.current) &&
                    N.replace({ ...A, hash: void 0 });
            }, [_, m, A, N]),
            a.useEffect(() => {
                j.current = _;
            }, [_]),
            a.useEffect(() => {
                v.current = m;
            }, [m]),
            (0, $.$P)({ selectedSortMethod: _, selectedFilters: m, numQuestsVisible: E.length }),
            a.useImperativeHandle(
                t,
                () => ({
                    resetSortingFiltering: () => {
                        b(), h(tE.kL.SUGGESTED);
                    },
                    scrollToQuest: (e) => {
                        c.current?.scrollToQuest(e);
                    },
                }),
                [b, h],
            ),
            (0, n.jsxs)(n.Fragment, {
                children: [
                    (0, n.jsxs)("div", {
                        className: tp.Mj,
                        children: [
                            (0, n.jsx)(f.D, { variant: "heading-lg/medium", children: eo.intl.string(eo.t.giYD00) }),
                            (0, n.jsxs)("div", {
                                className: tp.Nf,
                                children: [
                                    (0, n.jsx)(tr, { onChange: h, optionClassName: tp.Uq, selectedSortMethod: _ }),
                                    (0, n.jsx)(tn, { onChange: x, selectedFilters: m }),
                                ],
                            }),
                        ],
                    }),
                    (0, n.jsx)(tx, {
                        ref: c,
                        quests: E,
                        excludedQuests: p,
                        isFetching: g,
                        hasFetched: C,
                        hasFiltersApplied: m.length > 0,
                        onClearFilters: b,
                    }),
                ],
            })
        );
    });
var tv = s(575593),
    tA = s(440703),
    tN = s(462887),
    tT = s(187322),
    tS = s(765671),
    tO = s(736653),
    tL = s(162232),
    tI = s(859387),
    ty = s(734736),
    tR = s(303136),
    tQ = s(265234),
    tH = s(181713);
let tM = (e) => {
    let { className: t, isAnimated: s = !1, questName: a } = e,
        l = s ? tH.A : tH.A + "?format=webp";
    return (0, n.jsx)("div", {
        className: r()(tQ.k, t),
        children: s
            ? (0, n.jsx)(tR.A, {
                  preload: "auto",
                  className: tQ.L,
                  children: (0, n.jsx)("source", { src: l, type: "video/webm" }),
              })
            : (0, n.jsx)("img", { className: tQ.L, src: l, alt: a }),
    });
};
var tU = s(57718),
    tF = s(659249);
let tP = (0, a.memo)(function (e) {
    let { quest: t } = e,
        [s, l] = (0, a.useState)(!1),
        [i, o] = (0, a.useState)(24),
        [c, d] = (0, a.useState)(!1),
        _ = (0, a.useRef)(null),
        m = (0, a.useRef)(null),
        h = (0, a.useRef)(null),
        x = (0, u.bG)([eW.default], () => eW.default.getCurrentUser()),
        { ref: p, height: g = 0 } = (0, tS.Ay)(),
        C = (0, tO.Ay)(),
        b = (0, $.S5)(t.userStatus?.claimedAt, { month: "numeric", day: "numeric" }),
        j = t.userStatus?.claimedTier ?? 0,
        v = t.config.rewards[j],
        A = v?.type === tA.l.FRACTIONAL_PREMIUM,
        N = v?.type === tA.l.COLLECTIBLE,
        T = v?.type === tA.l.VIRTUAL_CURRENCY,
        O = v?.collectibleProduct?.items?.[0],
        L = O?.type === tv.R.AVATAR_DECORATION ? O : null,
        I = a.useMemo(
            () =>
                null == v
                    ? null
                    : !0 === T && t.userStatus?.orbQuantityClaimed != null
                      ? eo.intl.format(eo.t["nLXlh+"], { orbAmount: t.userStatus.orbQuantityClaimed })
                      : v.name,
            [v, T, t],
        );
    (0, tS.i4)(_, (e) => {
        let { height: t } = e;
        if (!N || null == t || null == m.current || null == _.current || null == h.current) return;
        let s = _.current.getBoundingClientRect(),
            n = m.current.getBoundingClientRect(),
            a = h.current.getBoundingClientRect();
        o((n.top - s.top - a.height) / 2);
    });
    let y = (0, tN.M)(C),
        R = a.useMemo(() => null != t.config.cosponsorMetadata, [t]),
        Q = a.useMemo(() => (0, tI.tW)(t, tI.fY.REWARD), [t]),
        H = s ? g + 8 : 0,
        { content_position: M, row_index: U, ...F } = (0, K.fF)(Y.uF.TROPHY_CASE_CARD),
        P = () => {
            l(!0), D.default.track(ef.HAw.QUEST_HOVER, { quest_id: t.id, ...F });
        },
        w = () => {
            l(!1);
        },
        k = (e) => {
            d(!0), D.default.track(ef.HAw.QUEST_ASSET_LOADING_FAILURE, { source: e, asset_id: e, quest_id: t.id });
        };
    return null == v || c
        ? null
        : (0, n.jsx)(tT.vN, {
              children: (0, n.jsxs)("div", {
                  ref: _,
                  tabIndex: 0,
                  onFocus: P,
                  onBlur: w,
                  onMouseEnter: P,
                  onMouseLeave: w,
                  className: r()(tF.kL, { [tF.yo]: s }),
                  children: [
                      null != x &&
                          N &&
                          null != L &&
                          (0, n.jsx)("div", {
                              ref: h,
                              className: tF.FX,
                              style: { top: i },
                              children: (0, n.jsx)(tL.A, {
                                  avatarDecorationOverride: L,
                                  user: x,
                                  guildId: null,
                                  animateOnHover: !s,
                              }),
                          }),
                      A
                          ? (0, n.jsx)(ty.A, { className: tF.Sl })
                          : T
                            ? (0, n.jsx)(tM, {
                                  className: tF.Sl,
                                  isAnimated: s,
                                  questName: t.config.messages.questName,
                              })
                            : Q.isAnimated
                              ? (0, n.jsx)(S.A, {
                                    className: tF.JU,
                                    autoPlay: !1,
                                    children: (0, n.jsx)("source", {
                                        src: Q.url,
                                        type: Q.mimetype ?? void 0,
                                        onError: () => k(Q.url),
                                    }),
                                })
                              : (0, n.jsx)("img", {
                                    className: tF.Sl,
                                    src: Q.url,
                                    alt: t.config.messages.questName,
                                    onError: () => k(Q.url),
                                }),
                      (0, n.jsx)("div", { className: r()(tF.Lw, { [tF.en]: y, [tF.So]: !y }) }),
                      (0, n.jsx)("div", {
                          ref: m,
                          className: tF.r$,
                          style: { transform: `translateY(-${H}px)` },
                          children: (0, n.jsx)(tU.Ay, {
                              logotypeClassName: r()(tF.wm, { [tF.A0]: R }),
                              quest: t,
                              withGameTile: !1,
                          }),
                      }),
                      (0, n.jsxs)("div", {
                          ref: p,
                          className: tF.zH,
                          children: [
                              (0, n.jsx)(f.D, {
                                  className: tF.DD,
                                  variant: "heading-md/semibold",
                                  color: "always-white",
                                  children: eo.intl.format(eo.t.EAYZAr, { questName: t.config.messages.questName }),
                              }),
                              (0, n.jsx)(E.E, {
                                  variant: "text-sm/medium",
                                  color: y ? "text-muted" : "always-white",
                                  style: { opacity: y ? 1 : 0.75 },
                                  children: eo.intl.format(eo.t["kXVcV+"], { reward: I, claimedDate: b }),
                              }),
                          ],
                      }),
                  ],
              }),
          });
});
var tw = s(396478);
function tk(e) {
    let { onClick: t } = e,
        a = (0, tO.Ay)();
    return (0, n.jsxs)(tw.pp, {
        theme: a,
        children: [
            (0, n.jsx)(tw.G8, { lightSrc: s(826223), darkSrc: s(317017), width: 415, height: 200 }),
            (0, n.jsx)(tw.SG, { note: eo.intl.format(eo.t.Pv8u2u, { onClick: t }) }),
        ],
    });
}
var tq = s(975424);
function tD(e) {
    let { onSelectTab: t } = e,
        { claimedQuests: s, isFetchingClaimedQuests: a } = (0, $.Iq)();
    return a && 0 === s.length
        ? (0, n.jsx)(el.y, { className: tq.u })
        : 0 === s.length
          ? (0, n.jsx)(tk, { onClick: () => t($.NC.ALL) })
          : (0, n.jsx)("div", {
                className: tq.U,
                children: [...s]
                    .sort((e, t) => (t.userStatus?.claimedAt ?? "").localeCompare(e.userStatus?.claimedAt ?? ""))
                    .map((e) => (0, n.jsx)(tP, { quest: e }, e.id)),
            });
}
var tB = s(353640),
    tV = s(121894),
    tW = s(851936);
let tY = (0, tB.v)((e, t) => ({
    startTime: performance.now(),
    elapsed: 0,
    lastOutputLogTime: -5e3,
    logger: null,
    registerAssetLoad: () => {
        let s = t().logger ?? (0, tW.L)({ location: tE.rE.QUEST_HOME_DESKTOP });
        if (s.info === eg.tE || t().elapsed >= 6e4) return;
        let n = performance.now() - t().startTime;
        n > 6e4 && (n = 6e4);
        let a = { elapsed: n };
        n - t().lastOutputLogTime > 1e3 &&
            (s.info(`QuestHome asset loading duration so far: ${n}ms`), (a.lastOutputLogTime = n)),
            null == t().logger && (a.logger = s),
            (0, tV.r)(() => e(a));
    },
}));
var tG = s(516226),
    tz = s(323889),
    t$ = s(331322),
    tK = s(561844),
    tJ = s(901406),
    tZ = s(415441),
    tX = s(73473),
    t0 = s(139384),
    t1 = s(43990),
    t8 = s(770178),
    t5 = s(14233);
let t2 = a.forwardRef(function (e, t) {
    let { topContent: s, title: l, subtitle: i, buttons: o, background: c, className: u } = e,
        [d, _] = a.useState("display-lg"),
        m = a.useCallback((e) => {
            _(e.contentRect.width < 500 ? "display-md" : "display-lg");
        }, []),
        h = (0, t8.w)(m, [], { fireOnMount: !0 });
    return (0, n.jsx)(t1.N, {
        theme: ef.NJ8.MIDNIGHT,
        disableAdaptiveTheme: !0,
        children: (e) =>
            (0, n.jsx)("div", {
                className: r()(t5.iE, e, u),
                ref: (e) => {
                    (h.current = e), "function" == typeof t ? t(e) : null != t && (t.current = e);
                },
                children: (0, n.jsxs)("div", {
                    className: t5.FG,
                    children: [
                        (0, n.jsxs)(t$.B, {
                            className: t5.Qs,
                            direction: "vertical",
                            justify: null != s ? "space-between" : "end",
                            children: [
                                s,
                                (0, n.jsxs)(t$.B, {
                                    className: t5.yp,
                                    gap: 16,
                                    children: [
                                        (0, n.jsxs)(t$.B, {
                                            gap: 8,
                                            children: [
                                                (0, n.jsx)(f.D, {
                                                    color: "text-strong",
                                                    variant: d,
                                                    className: t5.DD,
                                                    children: l,
                                                }),
                                                (0, n.jsx)(E.E, {
                                                    color: "text-strong",
                                                    variant: "text-md/normal",
                                                    className: t5.VA,
                                                    children: i,
                                                }),
                                            ],
                                        }),
                                        o,
                                    ],
                                }),
                            ],
                        }),
                        c,
                    ],
                }),
            }),
    });
});
var t4 = s(194526),
    t3 = s(364522),
    t9 = s(731355),
    t7 = s(621466),
    t6 = s(508770),
    se = s(406810),
    st = s(628284),
    ss = s(65154),
    sn = s(687966),
    sa = s(496431),
    sl = s(975807),
    sr = s(58703),
    si = s(18437),
    so = s(801365),
    sc = s(814793),
    su = s(453384),
    sd = s(646764),
    s_ = s(398025),
    sm = s(469083);
function sh(e) {
    let [t, s] = a.useState(!1),
        n = a.useCallback(() => {
            t || (s(!0), e?.(!0));
        }, [t, e]),
        l = a.useCallback(() => {
            t && (s(!1), e?.(!1));
        }, [t, e]);
    return { isHovering: t, hoverProps: { onMouseEnter: n, onMouseLeave: l, onFocus: n, onBlur: l } };
}
function sx(e) {
    let { hero: t, contentPosition: s } = e,
        l = a.useRef(null),
        { isHovering: i, hoverProps: o } = sh(
            a.useCallback(
                (e) => {
                    (0, tK.Qg)({
                        adContentId: t.id,
                        adCreativeType: tz.p.QUEST_HOME_HERO,
                        event: e ? ef.HAw.QUEST_HOVER : ef.HAw.QUEST_HOVER_OFF,
                        properties: {
                            content_id: Y.uF.QUEST_HOME_HERO_SHELF,
                            content_name: (0, K.jO)(Y.uF.QUEST_HOME_HERO_SHELF),
                            content_position: s,
                        },
                        sourceQuestContent: Y.uF.QUEST_HOME_HERO_SHELF,
                    });
                },
                [t.id, s],
            ),
        );
    a.useEffect(() => {
        let e = l.current;
        (0, t7.vq)(e, HTMLVideoElement) && (i ? ((e.currentTime = 0), e.play().catch(eg.tE)) : e.pause());
    }, [i]);
    let { hoverSpring: c } = (0, tc.z)({ hoverSpring: +!!i, config: ti.config.gentle });
    return (0, n.jsxs)("div", {
        className: r()(sm.FW, sm.Bm),
        ...o,
        children: [
            (0, n.jsx)("div", {
                className: sm.Ve,
                children: (0, n.jsx)(tZ.N, {
                    showVideo: !0,
                    assetRef: l,
                    imageAsset:
                        null != t.shelfImage
                            ? {
                                  asset: { url: t.shelfImage, mimetype: null, isAnimated: !1 },
                                  assetId: "intro-image",
                                  className: r()(sm.pv, sm.gI),
                              }
                            : void 0,
                    videoAsset:
                        null != t.shelfVideo
                            ? {
                                  asset: { url: t.shelfVideo, mimetype: null, isAnimated: !0 },
                                  assetId: "intro-video",
                                  className: r()(sm.pv, sm.Wq),
                              }
                            : void 0,
                }),
            }),
            (0, n.jsx)(ti.animated.div, {
                className: sm.hn,
                style: { transform: c.to([0, 1], [100, 0]).to((e) => `translateY(${e}%)`) },
                children: (0, n.jsx)(h.$, {
                    fullWidth: !0,
                    onClick: () => {
                        (0, sl.A)(t.cta.url),
                            (0, tK.vK)({
                                adContentId: t.id,
                                adCreativeType: tz.p.QUEST_HOME_HERO,
                                questContent: Y.uF.QUEST_HOME_HERO_SHELF,
                                questContentCTA: K.Cy.OPEN_GAME_LINK,
                                questContentPosition: s,
                                sourceQuestContent: Y.uF.QUEST_HOME_HERO_SHELF,
                            });
                    },
                    text: t.cta.buttonLabel,
                }),
            }),
        ],
    });
}
function sf(e) {
    let { quest: t, onQuestCtaClick: s, contentPosition: l } = e,
        i = (0, tO.Ay)(),
        o = a.useMemo(() => (0, tI.tW)(t, tI.fY.LOGO_TYPE, (0, tN.M)(i) ? ef.NJ8.DARK : ef.NJ8.LIGHT).url, [t, i]),
        c = a.useMemo(() => new Date(t.config.expiresAt), [t.config.expiresAt]),
        { days: u, hours: d, minutes: _, seconds: m } = (0, sa.A)(c, tu.A.Millis.MINUTE),
        x = a.useMemo(
            () =>
                (0, sr.uN)(
                    { days: u, hours: d, minutes: _, seconds: m },
                    { days: eo.t["Ux/De1"], hours: eo.t.Lzd5Ie, minutes: eo.t.odmpbP },
                ),
            [u, d, _, m],
        ),
        f = a.useMemo(() => (0, so.mq)(t.config), [t.config]),
        p = a.useMemo(
            () =>
                (function (e) {
                    switch ((0, e3.xv)(e).type) {
                        case tA.l.IN_GAME:
                            return eo.intl.string(eo.t["O/J2kr"]);
                        case tA.l.COLLECTIBLE:
                            return eo.intl.string(eo.t.Jg17Ut);
                        case tA.l.VIRTUAL_CURRENCY:
                            return eo.intl.string(eo.t.ElYQFS);
                        default:
                            return (0, so.mq)(e);
                    }
                })(t.config),
            [t.config],
        ),
        { completedRatio: g, completedRatioDisplay: C } = (0, $.O9)(t),
        b = a.useMemo(() => (0, so._Z)(t.config), [t.config]),
        j = (0, si.Ut)(),
        v = (0, si.u0)(),
        { isHovering: A, hoverProps: N } = sh(
            a.useCallback(
                (e) => {
                    v({
                        questId: t.id,
                        event: e ? ef.HAw.QUEST_HOVER : ef.HAw.QUEST_HOVER_OFF,
                        properties: {
                            content_id: Y.uF.QUEST_HOME_HERO_SHELF,
                            content_name: (0, K.jO)(Y.uF.QUEST_HOME_HERO_SHELF),
                            content_position: l,
                        },
                        sourceQuestContent: Y.uF.QUEST_HOME_HERO_SHELF,
                    });
                },
                [v, t.id, l],
            ),
        ),
        { hoverSpring: T } = (0, tc.z)({ hoverSpring: +!!A, config: ti.config.gentle });
    return (0, n.jsxs)("div", {
        className: r()(sm.FW, sm.$R),
        ...N,
        children: [
            (0, n.jsxs)(t$.B, {
                direction: "horizontal",
                gap: 4,
                children: [
                    (0, n.jsx)(t6.E, { type: { text: p }, variant: "expressive" }),
                    (0, n.jsx)(ti.animated.div, {
                        style: { opacity: (0, s_.a)(T.to([0, 1], [1, 0])) },
                        children: (0, n.jsx)(t6.E, { type: { text: x }, icon: se.O }),
                    }),
                ],
            }),
            (0, n.jsx)(ti.animated.div, {
                className: sm.Tr,
                style: { transform: T.to([0, 1], [1, 1.1]).to((e) => `scale(${e})`) },
                children: (0, n.jsx)(su.A, {
                    percentComplete: g,
                    overlayText: A && null != b ? `${b}` : void 0,
                    size: 100,
                    children: (0, n.jsx)(sd.A, {
                        quest: t,
                        questContent: Y.uF.QUEST_HOME_HERO_SHELF,
                        sourceQuestContent: Y.uF.QUEST_HOME_HERO_SHELF,
                        autoplay: A,
                        fullWidth: !0,
                    }),
                }),
            }),
            (0, n.jsx)(ti.animated.div, {
                className: sm.tw,
                style: {
                    opacity: (0, s_.a)(T.to([0, 1], [1, 0])),
                    transform: T.to([0, 1], [1, 0.9]).to((e) => `scale(${e})`),
                    transformOrigin: "bottom left",
                },
                children: (0, n.jsxs)(t$.B, {
                    gap: 8,
                    children: [
                        (0, n.jsx)("div", {
                            className: sm.aP,
                            children: (0, n.jsx)("img", { src: o, alt: t.config.messages.gameTitle, className: sm.rC }),
                        }),
                        (0, n.jsxs)(t$.B, {
                            gap: 4,
                            children: [
                                (0, n.jsx)(E.E, {
                                    variant: "text-md/semibold",
                                    color: "text-strong",
                                    className: sm.Ht,
                                    children: f,
                                }),
                                (0, n.jsxs)(t$.B, {
                                    align: "start",
                                    direction: "horizontal",
                                    gap: 8,
                                    children: [
                                        (0, n.jsxs)(t$.B, {
                                            direction: "horizontal",
                                            gap: 4,
                                            fullWidth: !1,
                                            children: [
                                                (0, n.jsx)(st.y, { size: "xs", color: eu.A.colors.ICON_MUTED.css }),
                                                (0, n.jsx)(E.E, {
                                                    variant: "text-sm/normal",
                                                    color: "text-muted",
                                                    children: t.config.messages.gamePublisher,
                                                }),
                                            ],
                                        }),
                                        (0, n.jsxs)(t$.B, {
                                            direction: "horizontal",
                                            gap: 4,
                                            fullWidth: !1,
                                            children: [
                                                (0, sc.pv)(t.config) === t9.Z.VIDEO
                                                    ? (0, n.jsx)(ss.S, {
                                                          size: "xs",
                                                          color: eu.A.colors.ICON_MUTED.css,
                                                      })
                                                    : (0, n.jsx)(sn._, {
                                                          size: "xs",
                                                          color: eu.A.colors.ICON_MUTED.css,
                                                      }),
                                                (0, n.jsx)(E.E, {
                                                    variant: "text-sm/normal",
                                                    color: "text-muted",
                                                    children: C,
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),
            }),
            (0, n.jsx)(ti.animated.div, {
                className: sm.um,
                style: { transform: T.to([0, 1], [100, 0]).to((e) => `translateY(${e}%)`) },
                children: (0, n.jsx)(h.$, {
                    fullWidth: !0,
                    onClick: () => {
                        s(t.id),
                            j({
                                questId: t.id,
                                questContent: Y.uF.QUEST_HOME_HERO_SHELF,
                                questContentCTA: K.Cy.VIEW_QUESTS,
                                questContentPosition: l,
                                sourceQuestContent: Y.uF.QUEST_HOME_HERO_SHELF,
                            });
                    },
                    text: eo.intl.string(eo.t["th2+0j"]),
                }),
            }),
        ],
    });
}
var sE = s(648731);
function sp(e) {
    let { hero: t, shelfQuests: s, onQuestCtaClick: a } = e;
    return (0, n.jsx)("div", {
        className: sE.v,
        children: (0, n.jsx)(t3.Ip, {
            orientation: "horizontal",
            fade: !0,
            children: (0, n.jsxs)(t$.B, {
                direction: "horizontal",
                gap: 20,
                children: [
                    (0, n.jsx)(tX.R, {
                        adContentId: t.id,
                        adCreativeType: tz.p.QUEST_HOME_HERO,
                        questContent: Y.uF.QUEST_HOME_HERO_SHELF,
                        questContentPosition: 0,
                        sourceQuestContent: Y.uF.QUEST_HOME_HERO_SHELF,
                        children: (e) =>
                            (0, n.jsx)("div", {
                                ref: (t) => {
                                    e.current = t;
                                },
                                children: (0, n.jsx)(sx, { hero: t, contentPosition: 0 }),
                            }),
                    }),
                    s.map((e, t) =>
                        (0, n.jsx)(
                            tX.R,
                            {
                                questOrQuests: e,
                                questContent: Y.uF.QUEST_HOME_HERO_SHELF,
                                questContentPosition: t + 1,
                                sourceQuestContent: Y.uF.QUEST_HOME_HERO_SHELF,
                                children: (s) =>
                                    (0, n.jsx)("div", {
                                        ref: (e) => {
                                            s.current = e;
                                        },
                                        children: (0, n.jsx)(sf, {
                                            quest: e,
                                            onQuestCtaClick: a,
                                            contentPosition: t + 1,
                                        }),
                                    }),
                            },
                            e.id,
                        ),
                    ),
                ],
            }),
        }),
    });
}
var sg = s(95115);
function sC() {
    return (0, n.jsx)("div", { className: sg.Np });
}
function sb(e) {
    let { heroImage: t, heroVideo: s } = e,
        l = a.useRef(null);
    (0, t0.A)(l, tE.rE.QUEST_HOME_DESKTOP);
    let i = a.useMemo(() => (null != s ? (0, tI.WV)(s) : null) ?? t, [s, t]);
    return null == s
        ? (0, n.jsxs)("div", {
              className: sg.Tv,
              children: [
                  (0, n.jsx)(sC, {}),
                  (0, n.jsx)("div", {
                      className: sg.LO,
                      children: (0, n.jsx)("img", { className: sg.LY, src: t, alt: "" }),
                  }),
                  (0, n.jsx)("div", {
                      className: r()(sg.LO, sg.jx, sg.hw),
                      children: (0, n.jsx)("img", { className: sg.LY, src: t, alt: "" }),
                  }),
                  (0, n.jsx)("div", {
                      className: r()(sg.LO, sg.jx, sg.Co),
                      children: (0, n.jsx)("img", { className: sg.LY, src: t, alt: "" }),
                  }),
              ],
          })
        : (0, n.jsxs)("div", {
              className: sg.Tv,
              children: [
                  (0, n.jsx)(sC, {}),
                  (0, n.jsx)("div", {
                      className: sg.LO,
                      children: (0, n.jsx)(tZ.N, {
                          showImage: !1,
                          showVideo: !0,
                          assetRef: l,
                          imageAsset: {
                              alt: "",
                              className: sg.LY,
                              asset: { url: i, mimetype: (0, tI.vm)(i), isAnimated: !1 },
                              assetId: i,
                          },
                          videoAsset: {
                              alt: "",
                              className: sg.LY,
                              asset: { url: s, mimetype: (0, tI.vm)(s), isAnimated: !0 },
                              assetId: s,
                          },
                      }),
                  }),
              ],
          });
}
function sj(e) {
    let { hero: t, onQuestCtaClick: s } = e,
        l = (0, u.bG)([X.A], () => X.A.quests),
        { shelfQuests: r, isShelfEnabled: i } = (0, $.t9)(t),
        { dismissQuestHomeHeroContent: o } = (0, t4.I)();
    a.useEffect(() => {
        o();
    }, [o]);
    let c = a.useMemo(() => t.questIds?.find((e) => l.has(e)), [l, t.questIds]);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(tX.R, {
                adContentId: t.id,
                adCreativeType: tz.p.QUEST_HOME_HERO,
                questContent: Y.uF.QUEST_HOME_HERO,
                sourceQuestContent: Y.uF.QUEST_HOME_HERO,
                children: (e) =>
                    (0, n.jsx)(t2, {
                        ref: e,
                        topContent: (0, n.jsxs)(t$.B, {
                            direction: "horizontal",
                            justify: "space-between",
                            align: "start",
                            children: [
                                null != t.sponsorImage &&
                                    (0, n.jsx)("img", { src: t.sponsorImage, alt: "", className: sg.wm }),
                                (0, n.jsx)(E.E, {
                                    color: "text-strong",
                                    variant: "text-sm/normal",
                                    className: sg.yu,
                                    children: eo.intl.string(eo.t.OJjFi5),
                                }),
                            ],
                        }),
                        title: t.labelTitle,
                        subtitle: t.labelSubtitle,
                        buttons: (0, n.jsxs)(m.e, {
                            children: [
                                (0, n.jsx)(h.$, {
                                    onClick: () => {
                                        (0, tJ._Q)(
                                            { adContentId: t.id, adCreativeType: tz.p.QUEST_HOME_HERO, cta: t.cta },
                                            {
                                                content: Y.uF.QUEST_HOME_HERO,
                                                ctaContent: K.Cy.OPEN_GAME_LINK,
                                                sourceQuestContent: Y.uF.QUEST_HOME_HERO,
                                            },
                                        );
                                    },
                                    size: "md",
                                    text: t.cta.buttonLabel,
                                    variant: "overlay-primary",
                                }),
                                !i &&
                                    null != c &&
                                    (0, n.jsx)(h.$, {
                                        onClick: () => {
                                            s(c),
                                                (0, tK.vK)({
                                                    adContentId: t.id,
                                                    adCreativeType: tz.p.QUEST_HOME_HERO,
                                                    questContent: Y.uF.QUEST_HOME_HERO,
                                                    questContentCTA: K.Cy.VIEW_QUESTS,
                                                    sourceQuestContent: Y.uF.QUEST_HOME_HERO,
                                                });
                                        },
                                        size: "md",
                                        text: eo.intl.string(eo.t["th2+0j"]),
                                        variant: "color-mix",
                                    }),
                            ],
                        }),
                        background:
                            null != t.heroImage && (0, n.jsx)(sb, { heroImage: t.heroImage, heroVideo: t.heroVideo }),
                    }),
            }),
            i && (0, n.jsx)(sp, { hero: t, shelfQuests: r, onQuestCtaClick: s }),
        ],
    });
}
function sv() {
    return (0, n.jsx)("div", { className: r()(t5.iE, t5.FG, t5.B3), children: (0, n.jsx)(el.y, {}) });
}
var sA = s(321503),
    sN = s(758836),
    sT = s(613057),
    sS = s(935824);
let sO = a.createContext({});
function sL(e) {
    let { banner: t, children: s, header: l, withFullBleedBanner: r = !1 } = e,
        { onScroll: i, scrollerRef: o } = a.useContext(sO);
    return (0, n.jsxs)(sA.X.Provider, {
        value: o,
        children: [
            l,
            (0, n.jsxs)(U.A, {
                onScroll: i,
                ref: o,
                children: [
                    r && t,
                    (0, n.jsxs)(H.A, { className: sS.Jo, innerClassName: sS.FG, children: [!r && t, s] }),
                ],
            }),
        ],
    });
}
function sI(e) {
    let { selectedTab: t, onSelectTab: s, tabs: a, endContent: l } = e;
    return (0, n.jsx)(M.S, { selectedTabId: t, handleTransition: s, tabs: a, endContent: l, icon: _.r });
}
function sy(e) {
    let { onLoadComplete: t, className: s } = e,
        { enabled: l } = (0, w.Z)({ location: tE.rE.QUEST_HOME_DESKTOP }),
        r = (0, u.bG)([C.A], () => C.A.useReducedMotion),
        i = (0, u.bG)([q.A], () => q.A.isFocused()),
        { ref: o, inViewport: c } = (0, e8.p)(),
        d = a.useRef(null);
    if (
        (a.useEffect(() => {
            d?.current != null &&
                (d.current.paused || (i && c && !r)
                    ? d.current.paused && !r && c && i && d.current.play()
                    : d.current.pause());
        }, [r, c, i]),
        l)
    ) {
        let e = (0, B.TM)();
        return (0, n.jsx)(S.A, {
            ref: (e) => {
                (d.current = e), (o.current = e);
            },
            loop: !0,
            muted: !0,
            playsInline: !0,
            className: s,
            onProgress: t,
            "data-mtctest-ignore": "true",
            controls: !1,
            children: (0, n.jsx)("source", {
                src: e
                    ? "https://cdn.discordapp.com/assets/content/529e0aea2b87be4a587568435eaac176bf71b8dd46035db9c88acdee11187eb8.mp4"
                    : "https://cdn.discordapp.com/assets/content/fbd6cf99b9be35ba1d953fd30b81a35c9bd8edf7808b576ef6fc7c65cbc1d9a6.webm",
                type: e ? "video/mp4" : "video/webm",
            }),
        });
    }
    return (0, n.jsx)("img", {
        src: "https://cdn.discordapp.com/assets/content/fff9144c814ffc3126fdcaf5ec5bc68eff6d09e23ac8af5a3fbe61b05970cda0.png",
        className: s,
        alt: "",
        onLoad: t,
    });
}
function sR(e) {
    let { onAssetLoad: t } = e,
        { enabled: s } = (0, w.Z)({ location: tE.rE.QUEST_HOME_DESKTOP });
    return (0, n.jsxs)("div", {
        className: r()(sS.Tv, { [sS.lJ]: s }),
        children: [
            (0, n.jsx)(sC, {}),
            (0, n.jsx)("div", { className: r()(sS.nz, { [sS.ZZ]: s }) }),
            (0, n.jsx)(sy, { onLoadComplete: t, className: r()(sS.Fe, { [sS.H4]: s, [sS.Q8]: !s }) }),
        ],
    });
}
function sQ(e) {
    let { onAssetLoad: t } = e,
        { enabled: s } = (0, w.Z)({ location: tE.rE.QUEST_HOME_DESKTOP }),
        l = a.useCallback(() => {
            s ? window.open(ef.X7G.PAID_TERMS_ORBS) : window.open(V.A.getArticleURL(ef.MVz.QUESTS_LEARN_MORE));
        }, [s]);
    return (0, n.jsx)(t2, {
        title: s ? eo.intl.format(eo.t.BCBIlp, {}) : eo.intl.format(eo.t.lmMBfy, {}),
        subtitle: s ? eo.intl.format(eo.t.U9FY0J, {}) : eo.intl.string(eo.t.oWCrBq),
        buttons: s
            ? (0, n.jsxs)(m.e, {
                  children: [
                      (0, n.jsx)(h.$, {
                          variant: "overlay-primary",
                          text: eo.intl.string(eo.t["1Wm127"]),
                          onClick: () =>
                              (0, N.Cz)({
                                  tab: sN.G2.ORBS,
                                  analyticsLocations: [],
                                  analyticsSource: b.A.INTRO_TO_ORBS_QUEST_BANNER,
                              }),
                      }),
                      (0, n.jsx)(h.$, {
                          variant: "overlay-secondary",
                          text: eo.intl.string(eo.t["7kTAgJ"]),
                          onClick: l,
                      }),
                  ],
              })
            : (0, n.jsx)(h.$, {
                  variant: "overlay-primary",
                  text: eo.intl.string(eo.t.hvVgAZ),
                  onClick: l,
                  icon: x.I,
                  iconPosition: "end",
              }),
        background: (0, n.jsx)(sR, { onAssetLoad: t }),
    });
}
function sH(e) {
    let { onAssetLoad: t, onQuestCtaClick: s } = e,
        { questHomeHero: a, isLoading: l } = (0, $.lg)();
    return l
        ? (0, n.jsx)(sv, {})
        : null != a
          ? (0, n.jsx)(sj, { hero: a, onQuestCtaClick: s })
          : (0, n.jsx)(sQ, { onAssetLoad: t });
}
function sM(e) {
    let { onLoadComplete: t } = e;
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)("img", {
                src: "https://cdn.discordapp.com/assets/content/d98012b9ee9cd22196a88553f0759a25a9440c77cde05c213d7fc1dc5d2204ed.png",
                className: r()(sS.BW, sS.rZ),
                alt: "",
            }),
            (0, n.jsx)("img", {
                src: "https://cdn.discordapp.com/assets/content/a6d2ca43eeff679daac9dabb5f6a5d87d6524ea5b80ff2d1eb2175422691e79b.png",
                className: r()(sS.BW, sS.rZ),
                alt: "",
                onLoad: t,
            }),
            (0, n.jsx)("img", {
                src: "https://cdn.discordapp.com/assets/content/281e35023b2cb94e77c23ab1522732b01f26e71689e4e72b4a514f5385ae08e1.png",
                className: r()(sS.BW, sS.rZ),
                alt: "",
            }),
        ],
    });
}
let sU = function (e) {
    let { topLevelRoute: t } = e,
        s = (0, i.zy)(),
        l = (0, i.W6)(),
        _ = a.useMemo(() => (0, F.B)(s.pathname, ef.BVt.QUEST_HOME_DEPRECATED)?.isExact === !0, [s.pathname]),
        m = (0, u.bG)([A.A], () => A.A.getState("quests")),
        {
            selectedTab: x,
            onSelectTab: C,
            tabs: S,
        } = (function (e) {
            let { withClaimedQuestsTab: t = !0 } = e,
                s = G.A.useField("tab"),
                n = (0, i.zy)(),
                l = (0, $.p5)();
            a.useEffect(() => {
                G.A.getState().initializeFromUrl(n.search, l);
            }, [n.search, l]);
            let r = a.useCallback((e) => {
                G.A.getState().setTab(e);
            }, []);
            return {
                tabs: a.useMemo(
                    () =>
                        [
                            { id: $.NC.ALL, label: eo.intl.string(eo.t["0SzXmi"]) },
                            t ? { id: $.NC.CLAIMED, label: eo.intl.string(eo.t.zyNYNB) } : null,
                            t && l ? { id: $.NC.PREVIEW_TOOL, label: eo.intl.string(eo.t.BDUDau) } : null,
                        ].filter(e5.Vq),
                    [t, l],
                ),
                selectedTab: s,
                onSelectTab: r,
            };
        })({ withClaimedQuestsTab: !_ });
    a.useLayoutEffect(() => {
        _ && x === $.NC.CLAIMED && G.A.setState({ tab: $.NC.ALL });
    }, [_, x]);
    let { onScroll: L } = (0, R.G)(),
        I = z.A.getState().getUtmCurrentContext(),
        H = tY((e) => e.registerAssetLoad),
        M = a.useRef(I);
    a.useEffect(() => {
        M.current = I;
    }),
        a.useEffect(() => {
            let { current: e } = M;
            (0, j.x)({
                name: c.ImpressionNames.QUEST_HOME,
                type: c.ImpressionTypes.VIEW,
                properties: {
                    utm_source_current: e.utmSourceCurrent,
                    utm_medium_current: e.utmMediumCurrent,
                    utm_campaign_current: e.utmCampaignCurrent,
                    utm_content_current: e.utmContentCurrent,
                    tab: x,
                },
            });
        }, [x]);
    let { enabled: U } = (0, w.Z)({ location: tE.rE.QUEST_HOME_DESKTOP });
    (0, T.HU)({ location: eo.intl.string(eo.t.JALI2K) });
    let q = a.useRef(null),
        B = a.useRef(null),
        V = a.useCallback((e) => {
            B.current?.resetSortingFiltering(),
                requestAnimationFrame(() => {
                    B.current?.scrollToQuest(e);
                });
        }, []),
        J = a.useCallback(() => {
            (0, P.Y)({
                pageType: ef.liQ.GLOBAL_DISCOVERY_QUESTS,
                sectionType: ef.JJy.ORBS_BALANCE_MENU,
                ctaObject: ef.ZSU.CTA_TO_ORBS_SHOP,
            }),
                (0, N.Cz)({ tab: sN.G2.ORBS, analyticsLocations: [], analyticsSource: b.A.ORBS_BALANCE_MENU });
        }, []);
    a.useEffect(() => {
        (0, g.I)(ef.BVt.QUEST_HOME);
    }, []),
        a.useEffect(() => {
            y.trigger();
        }, []),
        a.useEffect(() => {
            if (null != m) return;
            let e = new URLSearchParams(s.search),
                n = e.get($.L1.TAB);
            if (n === $.NC.PREVIEW_TOOL) {
                let t = e.get($.L1.QUEST_ID);
                v.A.openNativeAppModal("quests", ef.e$_.DEEP_LINK, {
                    type: sT.XK.QUEST_PREVIEW_TOOL,
                    params: { questId: t, tab: n },
                });
                return;
            }
            let a = performance.getEntriesByType("navigation")[0];
            if ("POP" === l.action && a?.type === "navigate" && t && n !== $.NC.PREVIEW_TOOL) {
                let t = (0, W.uJ)(s.hash) ? null : s.hash.substring(1),
                    a = e.get($.L1.SORT),
                    l = e.get($.L1.FILTER);
                v.A.openNativeAppModal("quests", ef.e$_.DEEP_LINK, {
                    type: sT.XK.QUEST_HOME,
                    params: { questId: (0, W.uJ)(t) ? void 0 : t, sort: a, filter: l, tab: n },
                });
            }
        }, [s.search, m, l.action, s.hash, t]),
        a.useEffect(() => {
            t && (0, O.Dr)(d.M.QUEST_HOME_ENTRYPOINT_ONBOARDING);
        }, [t]);
    let Z = a.useCallback(() => {
            (0, e1.navigateToQuestHome)({ fromContent: Y.uF.QUEST_HOME_MOVE_CALLOUT_DISCOVER }),
                D.default.track(ef.HAw.QUEST_CONTENT_CLICKED, {
                    cta_name: K.Cy.VIEW_QUESTS,
                    click_id: (0, o.A)(),
                    is_targeted: !1,
                    ...(0, K.fF)(Y.uF.QUEST_HOME_MOVE_CALLOUT_DISCOVER),
                });
        }, []),
        X = a.useCallback(
            (e) => {
                l.replace({ ...l.location, hash: void 0 }), q.current?.scrollToTop({ animate: !1 }), C(e);
            },
            [l, C],
        );
    return (0, n.jsx)(tG.M.Provider, {
        value: { onAssetLoadComplete: H },
        children: (0, n.jsx)(sO.Provider, {
            value: a.useMemo(() => ({ onScroll: L, scrollerRef: q }), [L, q]),
            children: (0, n.jsx)("div", {
                className: r()(sS.kL, { [sS.KY]: !t }),
                children: _
                    ? (0, n.jsx)(sL, {
                          withFullBleedBanner: !0,
                          header: (0, n.jsx)(sI, { selectedTab: x, onSelectTab: X, tabs: S }),
                          banner: (0, n.jsx)(Q.A, {
                              title: eo.intl.string(eo.t.z8YP2A),
                              titleColor: "always-white",
                              button: (0, n.jsx)(h.$, {
                                  variant: "overlay-primary",
                                  text: eo.intl.string(eo.t.GURBQl),
                                  onClick: Z,
                              }),
                              className: sS.Gj,
                              children: (0, n.jsx)(sM, { onLoadComplete: H }),
                          }),
                          children: (0, n.jsxs)("div", {
                              className: sS.kj,
                              children: [
                                  (0, n.jsx)(f.D, {
                                      variant: "heading-xl/semibold",
                                      children: eo.intl.string(eo.t.z8YP2A),
                                  }),
                                  (0, n.jsx)(E.E, {
                                      color: "text-subtle",
                                      variant: "text-md/normal",
                                      children: eo.intl.string(eo.t.HdKh65),
                                  }),
                                  (0, n.jsx)(p.Q, {
                                      text: eo.intl.string(eo.t["1CdL8d"]),
                                      onClick: Z,
                                      textVariant: "text-md/normal",
                                      variant: "primary",
                                  }),
                              ],
                          }),
                      })
                    : (0, n.jsx)(sL, {
                          header: (0, n.jsx)(sI, {
                              selectedTab: x,
                              onSelectTab: X,
                              tabs: S,
                              endContent:
                                  U &&
                                  (0, n.jsx)(k.SS, {
                                      analyticsPage: ef.liQ.GLOBAL_DISCOVERY_QUESTS,
                                      cardAlignment: k.cP.END,
                                      ctaText: eo.intl.string(eo.t["J+vlIR"]),
                                      ctaOnClick: J,
                                  }),
                          }),
                          banner: x === $.NC.ALL && (0, n.jsx)(sH, { onAssetLoad: H, onQuestCtaClick: V }),
                          children:
                              x === $.NC.CLAIMED
                                  ? (0, n.jsx)(tD, { onSelectTab: X })
                                  : x === $.NC.PREVIEW_TOOL
                                    ? (0, n.jsx)(e0, {})
                                    : (0, n.jsx)(tj, { ref: B }),
                      }),
            }),
        }),
    });
};
