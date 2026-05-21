let n;
s.r(t), s.d(t, { default: () => nD }), s(323874), s(14289), s(35956);
var l,
    r = s(627968),
    a = s(64700),
    i = s(503698),
    o = s.n(i),
    c = s(873263),
    u = s(835245),
    d = s(562708),
    m = s(17928),
    h = s(554146),
    E = s(577473),
    x = s(825484),
    g = s(821609),
    f = s(509434),
    j = s(534514),
    v = s(834730),
    p = s(123292),
    C = s(331322),
    _ = s(892547),
    S = s(944791),
    N = s(775602),
    A = s(793574),
    b = s(139286),
    T = s(197111),
    O = s(10088),
    R = s(859040),
    I = s(726249),
    L = s(607470),
    y = s(826673),
    M = s(840251),
    Q = s(688151);
let U = new M.E([], Q.$G.QUEST_HOME_OPEN, { location: "open quest home" });
var H = s(711111),
    D = s(701508),
    w = s(979590),
    F = s(749638),
    q = s(783531),
    P = s(334465),
    k = s(318346),
    B = s(371446),
    V = s(70926),
    W = s(531685),
    G = s(174459),
    z = s(676279),
    K = s(975571),
    $ = s(240248),
    Y = s(507107),
    J = s(631001),
    Z = s(87549),
    X = s(192444),
    ee = s(31587),
    et = s(590202);
s(321073);
var es = s(228366),
    en = s(340124),
    el = s(859703);
s(667532);
var er = s(783878),
    ea = s(408278),
    ei = s(663417),
    eo = s(922016),
    ec = s(624479),
    eu = s(289873),
    ed = s(416052),
    em = s(417098),
    eh = s(375708);
let eE = (e) => {
    let { error: t } = e,
        s = t.getAnyErrorMessage();
    return (0, r.jsx)(em.$T, {
        color: em.Hv.DANGER,
        children: (0, r.jsx)("div", { children: null != s ? s : eh.intl.string(eh.t.ZErSg5) }),
    });
};
var ex = s(661531),
    eg = s(602853),
    ef = s(939249),
    ej = s(817281),
    ev = s(688810),
    ep = s(487245),
    eC = s(363195),
    e_ = s(652215),
    eS = s(398876);
let eN = function () {
    let { analyticsLocations: e } = (0, ev.Ay)(),
        t = (0, m.bG)([eC.A], () => eC.A.theme),
        s = a.useRef(null);
    a.useEffect(() => {
        null == s.current && (s.current = t);
    }, [t]);
    let n = (0, eg.r)(ex.A.colors.BACKGROUND_BASE_LOW, e_.NJ8.LIGHT),
        l = (0, eg.r)(ex.A.colors.BACKGROUND_BASE_LOW, e_.NJ8.DARKER),
        i = (0, eg.r)(ex.A.colors.BACKGROUND_BASE_LOW, e_.NJ8.MIDNIGHT),
        o = a.useMemo(
            () => [
                { theme: e_.NJ8.LIGHT, label: eh.t.K2sFfo, color: n.hex() },
                { theme: e_.NJ8.DARKER, label: eh.t.b8Cei3, color: l.hex() },
                { theme: e_.NJ8.MIDNIGHT, label: eh.t.Do4ZJx, color: i.hex() },
            ],
            [n, l, i],
        ),
        c = a.useCallback(
            (t) => {
                (0, ep.X8)({ isPersisted: !0, analyticsLocations: e, themeName: `default ${t}` }),
                    (0, ej.u_)({ theme: t });
            },
            [e],
        ),
        u = a.useCallback(() => {
            null != s.current && c(s.current);
        }, [c]);
    return (0, r.jsx)("div", {
        className: eS.N,
        children: (0, r.jsxs)("div", {
            className: eS.t7,
            children: [
                o.map((e) =>
                    (0, r.jsxs)(
                        ef.D,
                        {
                            tag: "div",
                            className: eS.Du,
                            onClick: () => c(e.theme),
                            "aria-label": eh.intl.string(e.label),
                            "aria-pressed": t === e.theme,
                            children: [
                                (0, r.jsx)("div", {
                                    className: `${eS.WT} ${t === e.theme ? eS.TA : ""}`,
                                    style: { backgroundColor: e.color },
                                }),
                                (0, r.jsx)("span", { className: eS.i, children: eh.intl.string(e.label) }),
                            ],
                        },
                        e.theme,
                    ),
                ),
                (0, r.jsx)(ea.K, {
                    onClick: u,
                    "aria-label": eh.intl.string(eh.t.yBZMsQ),
                    icon: ei.f,
                    variant: "secondary",
                }),
            ],
        }),
    });
};
var eA = s(818348),
    eb = s(60857);
let eT = function (e) {
    let { questId: t, setQuestId: s, quest: n, refreshQuest: l } = e,
        [i, o] = a.useState(!1),
        [c, u] = a.useState(!1),
        d = a.useRef(null),
        h = (0, ee.pT)(),
        E = (0, m.bG)([el.A], () => (null != t ? el.A.getFetchQuestPreviewError(t) : null), [t]),
        f = (0, m.bG)([el.A], () => null != t && el.A.isFetchingQuestPreview(t), [t]),
        j = a.useMemo(() => {
            let e = h.map((e) => ({
                id: e.id,
                label: `${e.config?.messages?.questName ?? e.id} (${e.id})`,
                value: e.id,
            }));
            return null == t || e.some((e) => e.value === t) || e.unshift({ id: t, label: t, value: t }), e;
        }, [h, t]),
        v = a.useCallback(async () => {
            if (null != t) {
                o(!0);
                try {
                    await (0, en.Yb)(t, 1);
                } finally {
                    o(!1);
                }
            }
        }, [t, o]),
        p = a.useCallback(async () => {
            if (null != t) {
                o(!0);
                try {
                    await (0, en.UZ)(t);
                } finally {
                    o(!1);
                }
            }
        }, [t, o]),
        C = a.useCallback(async () => {
            if (null != t) {
                o(!0);
                try {
                    let e = Math.random();
                    await (0, en.Yb)(t, e);
                } finally {
                    o(!1);
                }
            }
        }, [t, o]),
        _ = a.useCallback(
            (e) => {
                (0, $.uJ)(e) || null == s || s(e);
            },
            [s],
        );
    return (0, r.jsxs)("div", {
        className: eb.Fr,
        children: [
            (0, r.jsx)("div", {
                children: (0, r.jsx)("div", {
                    className: eb.Br,
                    children: (0, r.jsxs)("div", {
                        className: eb.bo,
                        children: [
                            (0, r.jsx)(eN, {}),
                            (0, r.jsxs)("div", {
                                className: eb.b8,
                                children: [
                                    (0, r.jsx)(
                                        er.Z,
                                        {
                                            selectionMode: "single",
                                            label: "Quest ID",
                                            hideLabel: !0,
                                            options: j,
                                            value: t,
                                            onSelectionChange: _,
                                            placeholder: eh.intl.string(eh.t.Zw8jxn),
                                            clearable: !0,
                                            customMatchSorter: (e, t) => {
                                                if ((0, $.uJ)(t?.trim())) return e;
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
                                        `${t}-${n?.config?.messages?.questName ?? ""}`,
                                    ),
                                    (0, r.jsx)(ea.K, {
                                        onClick: l,
                                        "aria-label": eh.intl.string(eh.t.wzzjk9),
                                        icon: ei.f,
                                        loading: f,
                                    }),
                                ],
                            }),
                        ],
                    }),
                }),
            }),
            null != t &&
                null != n &&
                (0, r.jsx)("div", {
                    className: eb.in,
                    children: (0, r.jsxs)(x.e, {
                        className: eb.xv,
                        children: [
                            (0, r.jsx)(g.$, {
                                onClick: v,
                                disabled: i,
                                loading: i,
                                variant: "secondary",
                                text: eh.intl.string(eh.t.jQEfRT),
                            }),
                            (0, r.jsx)(g.$, {
                                onClick: p,
                                disabled: i,
                                loading: i,
                                variant: "secondary",
                                text: eh.intl.string(eh.t.taqkwK),
                            }),
                            (0, r.jsx)(g.$, {
                                onClick: C,
                                disabled: i,
                                loading: i,
                                variant: "secondary",
                                text: eh.intl.string(eh.t.cKSLr4),
                            }),
                            (0, r.jsx)(eo.Y, {
                                targetElementRef: d,
                                shouldShow: c,
                                onRequestClose: () => u(!1),
                                position: "bottom",
                                align: "center",
                                renderPopout: () =>
                                    (0, r.jsx)("div", {
                                        className: eb.PP,
                                        children: (0, r.jsx)("div", {
                                            className: eb.sH,
                                            children: (0, r.jsx)(ed.A, {
                                                value: eA.Sb.QUEST_PREVIEW_TOOL_2(t),
                                                text: eh.intl.string(eh.t.WqhZss),
                                                autoFocus: !0,
                                            }),
                                        }),
                                    }),
                                children: (e) =>
                                    (0, r.jsx)(ea.K, {
                                        ...e,
                                        buttonRef: d,
                                        onClick: () => u(!c),
                                        "aria-label": eh.intl.string(eh.t.rNGQfD),
                                        icon: ec.T,
                                        variant: "secondary",
                                    }),
                            }),
                        ],
                    }),
                }),
            null != E ? (0, r.jsx)(eE, { error: E }) : null,
            f ? (0, r.jsx)(eu.y, {}) : null,
        ],
    });
};
var eO = s(364522),
    eR = s(761508),
    eI = s(797788);
let eL = () => (0, r.jsx)("div", { className: eI.y });
var ey = s(834615),
    eM = s(332544);
let eQ = function (e) {
    let { quest: t } = e;
    return (0, r.jsx)("div", {
        className: eM.x3,
        children: (0, r.jsxs)("div", {
            className: eM.B0,
            children: [
                (0, r.jsx)(j.D, {
                    className: eM.R_,
                    variant: "heading-md/semibold",
                    children: eh.intl.string(eh.t.L2mlUb),
                }),
                (0, r.jsx)(ey.A, { quest: t }),
            ],
        }),
    });
};
var eU = s(241124),
    eH = s(242939),
    eD = s(717695),
    ew = s(763578),
    eF = s(111113);
let eq = function (e) {
    let { quest: t } = e;
    return (0, r.jsx)("div", {
        className: eM.x3,
        children: (0, r.jsxs)("div", {
            className: ew.wp,
            children: [
                (0, r.jsx)(j.D, {
                    className: ew.Oo,
                    variant: "heading-md/semibold",
                    children: eh.intl.string(eh.t.rjVPdM),
                }),
                (0, r.jsx)("div", {
                    className: ew.RE,
                    children: (0, r.jsx)("div", {
                        className: ew.Z,
                        children: (0, r.jsx)("div", {
                            className: eF.C3,
                            children: (0, r.jsx)(eD.A, {
                                children: (0, r.jsx)(eU.jY, {
                                    source: "preview",
                                    questId: t.id,
                                    children: (0, r.jsx)(eH.Y, { quest: t }),
                                }),
                            }),
                        }),
                    }),
                }),
            ],
        }),
    });
};
var eP = s(961974);
let ek = (e) => {
    let { quest: t } = e;
    return (0, r.jsx)("div", {
        className: eM.x3,
        children: (0, r.jsxs)("div", {
            className: eM.B0,
            children: [
                (0, r.jsx)(j.D, {
                    className: eM.R_,
                    variant: "heading-md/semibold",
                    children: eh.intl.string(eh.t.gWinpQ),
                }),
                (0, r.jsx)("div", {
                    className: eM.YT,
                    children: (0, r.jsx)(eP.A, {
                        channelId: "preview-channel-id",
                        previewQuest: t,
                        isParticipatingOverride: !1,
                    }),
                }),
            ],
        }),
    });
};
var eB = s(711038),
    eV = s(330034);
let eW = function (e) {
    let { questId: t } = e;
    return (0, r.jsx)("div", {
        className: eM.x3,
        children: (0, r.jsxs)("div", {
            className: eM.B0,
            children: [
                (0, r.jsx)(j.D, { variant: "heading-md/semibold", children: eh.intl.string(eh.t.IcljUu) }),
                (0, r.jsx)("div", {
                    className: eV.wu,
                    children: (0, r.jsx)("span", { className: eV.cy, children: eh.intl.string(eh.t.q97mEu) }),
                }),
                (0, r.jsx)("div", {
                    className: eV.oU,
                    children: (0, r.jsx)("div", {
                        className: eV.zx,
                        children: (0, r.jsx)("div", {
                            className: eV.Lj,
                            children: (0, r.jsx)("div", {
                                className: eV.n0,
                                children: (0, r.jsx)(eB.A, { questId: t }),
                            }),
                        }),
                    }),
                }),
            ],
        }),
    });
};
var eG = s(291922);
let ez = (e) => {
    let { quest: t } = e;
    return (0, r.jsx)("div", {
        className: eM.x3,
        children: (0, r.jsxs)("div", {
            className: eM.B0,
            children: [
                (0, r.jsx)(j.D, {
                    className: eM.R_,
                    variant: "heading-md/semibold",
                    children: eh.intl.string(eh.t["5wnpF3"]),
                }),
                (0, r.jsx)(eG.Ay, {
                    className: eM.d,
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
var eK = s(97808),
    e$ = s(778712),
    eY = s(87664),
    eJ = s(287809),
    eZ = s(427262),
    eX = s(198525),
    e0 = s(66176);
let e1 = function (e) {
        let { quest: t } = e,
            [s, n] = a.useState(!1),
            l = a.useRef(null),
            i = (0, m.bG)([eJ.default], () => eJ.default.getCurrentUser()),
            c = eZ.Ay.useName(i),
            u = (0, eY.A)(i?.id),
            d = a.useCallback(
                (e) =>
                    (0, r.jsx)(eX.A, {
                        name: c,
                        quest: t,
                        memberListItemRef: l,
                        applicationStream: u,
                        ...e,
                        closePopout: () => {
                            n(!1);
                        },
                    }),
                [t, u, c],
            );
        return (0, r.jsx)("div", {
            className: eM.x3,
            children: (0, r.jsxs)("div", {
                className: eM.B0,
                children: [
                    (0, r.jsx)(j.D, {
                        className: e0.R_,
                        variant: "heading-md/semibold",
                        children: eh.intl.string(eh.t.jY7Zxg),
                    }),
                    (0, r.jsx)("div", { className: e0.$Q, children: eh.intl.string(eh.t.q3hbne) }),
                    (0, r.jsx)("div", {
                        className: e0.k0,
                        children: (0, r.jsx)(eo.Y, {
                            targetElementRef: l,
                            renderPopout: d,
                            position: "bottom",
                            shouldShow: s,
                            onRequestClose: () => n(!1),
                            nudgeAlignIntoViewport: !1,
                            useRawTargetDimensions: !0,
                            animation: eo.Y.Animation.NONE,
                            spacing: -3,
                            fixed: !0,
                            scrollBehavior: "close",
                            children: () =>
                                (0, r.jsx)("div", {
                                    ref: l,
                                    className: o()(e0.Tn, { [e0.wH]: s }),
                                    children: (0, r.jsx)(ef.D, {
                                        onClick: () => n(!s),
                                        tabIndex: 0,
                                        children: (0, r.jsxs)("div", {
                                            className: e0.lm,
                                            children: [
                                                (0, r.jsx)(eK.eu, {
                                                    size: e$._3.SIZE_32,
                                                    src: i?.getAvatarURL(void 0, 32),
                                                    status: e_.clD.ONLINE,
                                                    "aria-label": i?.username,
                                                }),
                                                (0, r.jsxs)("div", {
                                                    className: e0.Fj,
                                                    children: [
                                                        (0, r.jsx)(v.E, {
                                                            variant: "text-md/semibold",
                                                            color: "text-strong",
                                                            children: c,
                                                        }),
                                                        (0, r.jsx)(v.E, {
                                                            variant: "text-sm/normal",
                                                            color: "text-muted",
                                                            children: eh.intl.string(eh.t.b9w3bO),
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
    e2 = (e) => {
        let { questId: t, selectedSections: s } = e,
            n = (0, m.bG)([el.A], () => el.A.getQuest(t));
        if (null != (0, m.bG)([el.A], () => el.A.getFetchQuestPreviewError(t)) || null == n) return null;
        let l = (e) => null == s || 0 === s.length || s.includes(e);
        return (0, r.jsxs)(r.Fragment, {
            children: [
                l("quest_bar") &&
                    (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(eq, { quest: n }), (0, r.jsx)(eL, {})] }),
                l("home_card") &&
                    (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(ez, { quest: n }), (0, r.jsx)(eL, {})] }),
                l("share_embed") &&
                    (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(eW, { questId: n.id }), (0, r.jsx)(eL, {})] }),
                l("channel_call_header") &&
                    (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(ek, { quest: n }), (0, r.jsx)(eL, {})] }),
                l("members_list") &&
                    (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(e1, { quest: n }), (0, r.jsx)(eL, {})] }),
                l("activity_panel") &&
                    (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(eQ, { quest: n }), (0, r.jsx)(eL, {})] }),
            ],
        });
    };
var e7 = s(497275);
function e8(e) {
    let { children: t, selectedSections: s = [], onSectionSelect: n, controls: l, className: i } = e,
        c = [
            { value: "quest_bar", label: eh.intl.string(eh.t.rjVPdM) },
            { value: "share_embed", label: eh.intl.string(eh.t["D/gSWS"]) },
            { value: "home_card", label: eh.intl.string(eh.t["5wnpF3"]) },
            { value: "channel_call_header", label: eh.intl.string(eh.t.gWinpQ) },
            { value: "members_list", label: eh.intl.string(eh.t.wpYima) },
            { value: "activity_panel", label: eh.intl.string(eh.t.L2mlUb) },
        ],
        u = 0 === s.length || s.length === c.length,
        d = a.useMemo(() => (u ? "all" : 1 === s.length ? s[0] : "all"), [s, u]);
    return (0, r.jsx)(eO.Ip, {
        className: o()(e7.kL, i),
        orientation: "auto",
        children: (0, r.jsxs)("div", {
            className: e7.qE,
            children: [
                (0, r.jsx)(j.D, {
                    variant: "heading-xl/semibold",
                    color: "text-strong",
                    children: eh.intl.string(eh.t.BDUDau),
                }),
                (0, r.jsx)("div", { className: e7.pf, children: l }),
                (0, r.jsxs)(eR.V, {
                    type: "top",
                    look: "brand",
                    selectedItem: d,
                    onItemSelect: (e) => {
                        n?.(e);
                    },
                    children: [
                        (0, r.jsx)(eR.V.Item, { id: "all", children: eh.intl.string(eh.t.Y9DnPa) }),
                        c.map((e) => (0, r.jsx)(eR.V.Item, { id: e.value, children: e.label }, e.value)),
                    ],
                }),
                (0, r.jsx)("div", { className: e7.tZ, children: (0, r.jsx)("div", { className: e7.Qs, children: t }) }),
            ],
        }),
    });
}
function e6(e) {
    return new URLSearchParams(e).get(ee.L1.QUEST_ID);
}
let e3 = function (e) {
    let { questId: t, className: s } = e,
        { questId: n, setQuestId: l } = (function (e) {
            let t = (0, c.W6)(),
                [s, n] = a.useState(e),
                { search: l } = (0, c.zy)();
            return (
                a.useEffect(() => {
                    let t = e6(l);
                    null != t ? n(t) : null != e && n(e);
                }, [e, l]),
                a.useEffect(() => {
                    if (null == s || e6(l) === s) return;
                    let e = new URLSearchParams();
                    e.set(ee.L1.TAB, ee.NC.PREVIEW_TOOL),
                        e.set(ee.L1.QUEST_ID, s),
                        t.push(`${e_.BVt.QUEST_HOME}?${e.toString()}`);
                }, [s, t, l]),
                { questId: s, setQuestId: n }
            );
        })(t),
        i = (0, m.bG)([el.A], () => (null != n ? el.A.getQuest(n) : void 0), [n]),
        o = (0, m.bG)([el.A], () => (null != n ? el.A.getQuestLoadedViaPreview(n) : null), [n]);
    a.useEffect(() => {
        null != n &&
            (0, en.dQ)(n).then(() => {
                (0, en.Gt)(n);
            });
    }, [n]),
        a.useEffect(() => {
            let e = (e) => {
                let { quest_id: t } = e;
                t === n && (0, en.dQ)(n);
            };
            return (
                es.h.subscribe("QUEST_PREVIEW_UPDATE", e),
                () => {
                    es.h.unsubscribe("QUEST_PREVIEW_UPDATE", e);
                }
            );
        }, [n]);
    let [u, d] = a.useState([]);
    return (0, r.jsx)(e8, {
        className: s,
        controls: (0, r.jsx)(eT, {
            questId: n,
            setQuestId: l,
            quest: i,
            refreshQuest: () => {
                null != n && (0, en.dQ)(n);
            },
        }),
        selectedSections: u,
        onSectionSelect: (e) => {
            "all" === e ? d([]) : d([e]);
        },
        children: o?.id != null ? (0, r.jsx)(e2, { questId: o?.id, selectedSections: u }) : null,
    });
};
var e4 = s(617986),
    e5 = s(203879),
    e9 = s(403362),
    te = s(167417),
    tt = s(783977),
    ts = s(651892),
    tn = s(305866),
    tl = s(915089),
    tr = s(332733);
function ta(e) {
    let { children: t, id: s } = e;
    return (0, r.jsx)(v.E, { className: tr.g, color: "text-subtle", id: s, variant: "text-sm/semibold", children: t });
}
let ti = function (e) {
    let { children: t, renderPopout: s } = e,
        n = (0, tl.GV)(),
        l = a.useRef(null);
    return (0, r.jsx)(eo.Y, {
        align: "right",
        position: "bottom",
        renderPopout: (e) => (0, r.jsx)(tn.l, { className: tr.S, "aria-labelledby": n, children: s(e, n) }),
        scrollBehavior: "close",
        targetElementRef: l,
        children: (e) => t(e, l),
    });
};
var to = s(612539);
let tc = function (e) {
    let { onChange: t, selectedFilters: s } = e,
        n = (0, ee.Nb)(),
        l = a.useCallback(
            (e) => (n) => {
                let l = e.filter((e) => n.includes(e.filter));
                t([...s.filter((t) => !e.some((e) => e.filter === t.filter)), ...l]);
            },
            [s, t],
        );
    return (0, r.jsx)(ti, {
        renderPopout: (e, i) => {
            let { closePopout: o } = e;
            return (0, r.jsxs)("div", {
                children: [
                    n.map((e, t) => {
                        let n = e.options.map((e) => ({ label: (0, ts.up)(e.filter), value: e.filter })),
                            o = s.filter((t) => e.options.some((e) => e.filter === t.filter)).map((e) => e.filter);
                        return (0, r.jsxs)(
                            a.Fragment,
                            {
                                children: [
                                    t > 0 && (0, r.jsx)("hr", { className: to.B }),
                                    (0, r.jsx)(ta, { id: i, children: e.heading }),
                                    (0, r.jsx)(te.$, {
                                        "aria-labelledby": i,
                                        options: n,
                                        selectedValues: o,
                                        onChange: l(e.options),
                                    }),
                                ],
                            },
                            t,
                        );
                    }),
                    (0, r.jsx)("hr", { className: to.B }),
                    (0, r.jsx)("div", {
                        className: to.W,
                        children: (0, r.jsx)(g.$, {
                            fullWidth: !0,
                            onClick: () => {
                                t([]), o();
                            },
                            size: "sm",
                            text: eh.intl.string(eh.t.VkKicb),
                            variant: "secondary",
                        }),
                    }),
                ],
            });
        },
        children: (e, t) =>
            (0, r.jsx)(g.$, {
                ...e,
                buttonRef: t,
                size: "sm",
                text: eh.intl.formatToPlainString(eh.t.CEfkXl, { numSelectedFilters: s.length }),
                icon: tt.R,
                iconPosition: "end",
                variant: "secondary",
            }),
    });
};
var tu = s(773812),
    td = s(715482);
let tm = function (e) {
    let { onChange: t, optionClassName: s, selectedSortMethod: n } = e,
        l = a.useCallback(
            (e) => {
                t(e);
            },
            [t],
        ),
        i = (0, ee.XD)(),
        o = a.useMemo(() => i.map((e) => ({ name: e.label, value: e.value, radioBarClassName: s })), [i, s]);
    return (0, r.jsx)(ti, {
        renderPopout: (e, t) => {
            let { closePopout: s } = e;
            return (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(ta, { id: t, children: eh.intl.string(eh.t.tZXJIS) }),
                    (0, r.jsx)(tu.z, {
                        options: o,
                        onChange: (e) => {
                            s(), l(e);
                        },
                        value: n,
                    }),
                ],
            });
        },
        children: (e, t) =>
            (0, r.jsx)(g.$, {
                ...e,
                buttonRef: t,
                size: "sm",
                text: (0, ts.Js)(n),
                icon: td.g,
                iconPosition: "end",
                variant: "secondary",
            }),
    });
};
var th = s(873174),
    tE = s(535185),
    tx = s(717421),
    tg = s(927813),
    tf = s(710969);
function tj(e, t, s) {
    if (null != s) {
        if (e)
            return {
                boxShadow: (0, th.to)(
                    [s.to({ range: [0, 0.25, 0.75, 1], output: [0, 1, 1, 0] })],
                    (e) => `0 0 ${25 * e}px 0 rgba(88, 101, 242, ${e})`,
                ),
            };
        if (t)
            return { opacity: (0, th.to)([s.to({ range: [0, 0.25, 0.75, 1], output: [1, 0.4, 0.4, 1] })], (e) => e) };
    }
}
var tv = s(365199),
    tp = s(551875),
    tC = s(415441),
    t_ = s(73473),
    tS = s(270045),
    tN = s(902173),
    tA = s(785866),
    tb = s(687966),
    tT = s(782134),
    tO = s(768622),
    tR = s(138134),
    tI = s(792620),
    tL = s(814793),
    ty = s(79545),
    tM = s(719021);
function tQ(e) {
    var t;
    let s,
        { quest: n } = e,
        l = (0, ty.Pd)(n),
        i = (0, ee.fc)(n),
        o = (0, ee.I3)(n),
        c = a.useMemo(
            () =>
                (function (e, t) {
                    let s = new Date(e.startsAt).getTime(),
                        n = Date.now(),
                        l = s <= n && n - s < tg.A.Millis.DAY;
                    switch (t) {
                        case ty.UA.UNENROLLED:
                            if (l) return eh.intl.string(eh.t.X6ziWN);
                            return null;
                        case ty.UA.COMPLETED:
                        case ty.UA.EXPIRED_CLAIMABLE:
                            return eh.intl.string(eh.t.Zq6s9k);
                        case ty.UA.CLAIMED:
                            return eh.intl.string(eh.t.uOGFB6);
                        case ty.UA.EXPIRED:
                            return eh.intl.string(eh.t["zX/gnV"]);
                        default:
                            return null;
                    }
                })(n.config, l),
            [n.config, l],
        ),
        u = a.useMemo(
            () =>
                (function (e, t, s) {
                    switch (e) {
                        case ty.UA.UNENROLLED:
                        case ty.UA.ENROLLED:
                        case ty.UA.INCOMPLETE:
                            if (null != s) {
                                if (e === ty.UA.UNENROLLED) return String(s.target);
                                return `${s.progress}/${s.target}`;
                            }
                            return (0, tI.xm)(t);
                        case ty.UA.COMPLETED:
                        case ty.UA.CLAIMED:
                        case ty.UA.EXPIRED:
                        case ty.UA.EXPIRED_CLAIMABLE:
                            return null;
                    }
                })(l, i, o),
            [l, i, o],
        );
    return (0, r.jsxs)("div", {
        className: tM.qS,
        children: [
            null != c && (0, r.jsx)(v.E, { variant: "text-xs/bold", color: "always-white", children: c }),
            null != c &&
                null != u &&
                (0, r.jsx)(v.E, { variant: "text-xs/bold", color: "always-white", children: "\u2022" }),
            null != u &&
                (0, r.jsxs)("span", {
                    className: tM.BA,
                    children: [
                        ((t = n),
                        (s = { size: "xs", className: tM.rF, color: "currentColor" }),
                        (0, tI.GL)(t)
                            ? (0, tL.ui)(t)
                                ? (0, r.jsx)(tA._, { ...s })
                                : (0, r.jsx)(tb._, { ...s })
                            : (0, tI.vv)(t)
                              ? (0, r.jsx)(tT.u, { ...s })
                              : (0, tI.Ki)(t)
                                ? t.config.features.includes(tN.L.CLOUD_GAMING_ACTIVITY)
                                    ? (0, r.jsx)(tO.g, { ...s })
                                    : (0, r.jsx)(tR.i, { ...s })
                                : (0, r.jsx)(tb._, { ...s })),
                        (0, r.jsx)(v.E, { variant: "text-xs/bold", tag: "span", color: "always-white", children: u }),
                    ],
                }),
        ],
    });
}
var tU = s(409626),
    tH = s(838077),
    tD = s(743368),
    tw = s(919500);
function tF(e) {
    let { isHovering: t } = e;
    return (0, r.jsx)("div", {
        className: o()(tw.lO, { [tw.Fq]: t }),
        children: (0, r.jsx)("div", {
            className: tw.mv,
            children: (0, r.jsxs)(x.e, {
                direction: "horizontal",
                fullWidth: !0,
                wrap: !1,
                size: "sm",
                children: [
                    (0, r.jsx)(ea.K, {
                        variant: "overlay-secondary",
                        icon: tD.W,
                        "aria-label": eh.intl.string(eh.t.LLLLPD),
                    }),
                    (0, r.jsx)(g.$, { variant: "overlay-primary", text: eh.intl.string(eh.t.RscU7I) }),
                ],
            }),
        }),
    });
}
var tq = s(947641),
    tP = s(194261),
    tk = s(106799),
    tB = s(801365),
    tV = s(453384),
    tW = s(646764),
    tG = s(269999);
function tz(e) {
    let { quest: t, questContent: s, sourceQuestContent: n, isHovering: l } = e,
        i = (0, m.bG)([eJ.default], () => eJ.default.getCurrentUser()),
        o = (0, tB.mq)(t.config, i),
        c = (0, tB.ks)(t.config),
        u = (0, tB.wo)(t.config, i),
        d =
            null != u
                ? u > 840
                    ? tp.i2.TIER_4
                    : u > 240
                      ? tp.i2.TIER_3
                      : u > 120
                        ? tp.i2.TIER_2
                        : tp.i2.TIER_1
                : void 0,
        { completedRatio: h } = (0, ee.O9)(t),
        E = t.userStatus?.claimedAt != null,
        x = (0, tf.Ic)(t),
        g = E ? "completed" : x ? "expired" : null,
        f = a.useMemo(
            () =>
                c
                    ? eh.intl.format(eh.t["7r0Rqd"], {
                          orbAmountHook: () =>
                              (0, r.jsxs)(r.Fragment, {
                                  children: [(0, r.jsx)(tk.A, { className: tG.Kq, customSize: 16 }), u],
                              }),
                      })
                    : o,
            [o, c, u],
        );
    return (0, r.jsxs)("div", {
        className: tG.CZ,
        children: [
            (0, r.jsx)("div", {
                className: tG.tE,
                children: (0, r.jsx)(tV.A, {
                    style: "small",
                    size: 58,
                    percentComplete: h,
                    useAltStyle: !0,
                    children: (0, r.jsxs)("div", {
                        className: tG.n5,
                        children: [
                            (0, r.jsx)(tW.A, {
                                quest: t,
                                orbTier: d,
                                questContent: s,
                                autoplay: l,
                                lazyLoad: !0,
                                fullWidth: !0,
                                sourceQuestContent: n,
                            }),
                            "completed" === g &&
                                (0, r.jsx)("div", {
                                    className: tG.EY,
                                    children: (0, r.jsx)(tq.r, { className: tG.AM, size: "sm", color: "currentColor" }),
                                }),
                            "expired" === g &&
                                (0, r.jsx)("div", {
                                    className: tG.EY,
                                    children: (0, r.jsx)(tP.X, { size: "sm", className: tG.Sz, color: "currentColor" }),
                                }),
                        ],
                    }),
                }),
            }),
            (0, r.jsxs)("div", {
                className: tG.FS,
                children: [
                    (0, r.jsx)(v.E, {
                        variant: "text-sm/medium",
                        color: "always-white",
                        className: tG.$K,
                        children: t.config.cosponsorMetadata?.name ?? t.config.messages.gamePublisher,
                    }),
                    (0, r.jsx)(
                        v.E,
                        { variant: "text-md/semibold", color: "always-white", lineClamp: 1, children: f },
                        `${t.id}_reward`,
                    ),
                ],
            }),
        ],
    });
}
var tK = s(190107),
    t$ = s(315767);
function tY(e) {
    let { quest: t, questContent: s, isHovering: n, sourceQuestContent: l } = e,
        i = a.useRef(null),
        o = (0, tH.A9)(t, l, tK.rE.QUEST_HOME_DESKTOP, s, tU.Ob.QuestHome, i);
    return (0, r.jsxs)("div", {
        ref: i,
        children: [
            (0, r.jsx)(tz, { quest: t, questContent: s, sourceQuestContent: l, isHovering: n }),
            (0, r.jsxs)("div", {
                className: t$.y,
                children: [
                    (0, r.jsx)(v.E, {
                        style: { opacity: n ? 1 : 0.8 },
                        variant: "text-sm/medium",
                        className: t$.W,
                        lineClamp: n ? void 0 : 1,
                        children: o,
                    }),
                    (0, r.jsx)(v.E, {
                        variant: "text-xs/medium",
                        color: "text-muted",
                        children: eh.intl.string(eh.t.o6FLcF),
                    }),
                ],
            }),
            (0, r.jsx)(tF, { isHovering: n }),
        ],
    });
}
var tJ = s(547032);
function tZ(e) {
    let { quest: t, questContent: s, className: n, impressionRef: l, sourceQuestContent: i } = e,
        c = a.useMemo(() => (0, tp.tW)(t, tp.fY.QUEST_BAR_HERO_IMAGE), [t]),
        u = a.useMemo(() => (0, tp.tW)(t, tp.fY.QUEST_BAR_HERO_VIDEO), [t]),
        {
            isActive: d,
            shouldRender: m,
            hoverHandlers: h,
            handleMenuOpen: E,
            handleMenuClose: x,
        } = (function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 400,
                [t, s] = a.useState(!1),
                [n, l] = a.useState(!1),
                [r, i] = a.useState(!1),
                o = a.useRef(!1),
                c = a.useRef(!1),
                u = a.useRef(null),
                d = a.useRef(null),
                m = () => {
                    null != u.current && (cancelAnimationFrame(u.current), (u.current = null));
                },
                h = () => {
                    null != d.current && (clearTimeout(d.current), (d.current = null));
                },
                E = a.useCallback(() => {
                    h(),
                        l(!0),
                        m(),
                        (u.current = requestAnimationFrame(() => {
                            u.current = requestAnimationFrame(() => {
                                (u.current = null), s(!0);
                            });
                        }));
                }, []),
                x = a.useCallback(() => {
                    m(),
                        s(!1),
                        h(),
                        (d.current = setTimeout(() => {
                            (d.current = null), l(!1);
                        }, e));
                }, [e]),
                g = a.useCallback(() => i(!0), []),
                f = a.useCallback(() => {
                    i(!1), o.current || c.current || x();
                }, [x]),
                j = a.useMemo(
                    () => ({
                        onMouseEnter: () => {
                            (o.current = !0), E();
                        },
                        onMouseLeave: () => {
                            (o.current = !1), r || x();
                        },
                        onFocus: () => {
                            (c.current = !0), E();
                        },
                        onBlur: () => {
                            (c.current = !1), r || x();
                        },
                    }),
                    [E, x, r],
                );
            return (
                a.useEffect(
                    () => () => {
                        m(), h();
                    },
                    [],
                ),
                { isActive: t, shouldRender: n, deactivate: x, hoverHandlers: j, handleMenuOpen: g, handleMenuClose: f }
            );
        })();
    return (0, r.jsxs)("div", {
        id: `quest-tile-${t.id}`,
        ref: (e) => {
            l.current = e;
        },
        className: o()(tJ.kL, n),
        ...h,
        children: [
            (0, r.jsx)(tC.N, {
                imageAsset:
                    null != c
                        ? { asset: c, assetId: "QuestTileV2", alt: eh.intl.string(eh.t.jnijWz), className: tJ.Tv }
                        : void 0,
                videoAsset:
                    null != u
                        ? {
                              asset: u,
                              assetId: "QuestTileV2_heroAnimated",
                              className: o()(tJ.Tv, tJ.gJ, { [tJ.C7]: d }),
                          }
                        : void 0,
                imageSize: { width: 600, height: 450 },
                showVideo: m,
            }),
            (0, r.jsx)("div", { className: o()(tJ.f5, { [tJ.Hk]: d }) }),
            (0, r.jsxs)("div", {
                className: tJ.wx,
                children: [
                    (0, r.jsx)(tQ, { quest: t }),
                    (0, r.jsx)(tS.C, {
                        questContent: s,
                        quest: t,
                        hideLearnMore: !0,
                        shouldShowDisclosure: !0,
                        showShareLink: !0,
                        sourceQuestContent: i,
                        onOpen: E,
                        onClose: x,
                        children: (e) =>
                            (0, r.jsx)(ef.D, {
                                ...e,
                                tag: "div",
                                className: o()(tJ.E9, { [tJ.CJ]: d }),
                                "aria-label": eh.intl.string(eh.t.DEoVWZ),
                                children: (0, r.jsx)(tv.j, { size: "sm", color: "currentColor" }),
                            }),
                    }),
                ],
            }),
            (0, r.jsx)(tY, { quest: t, questContent: s, isHovering: d, sourceQuestContent: i }),
        ],
    });
}
let tX = a.memo(function (e) {
    let t = (0, m.bG)([el.A], () => (null != e.questId ? el.A.getQuest(e.questId) : void 0), [e.questId]),
        s = a.useMemo(() => (null != e.quest ? e.quest : t), [t, e.quest]);
    return null == s
        ? null
        : (0, r.jsx)(t_.R, {
              questOrQuests: s,
              questContent: e.questContent,
              questContentPosition: e.contentPosition,
              questContentRowIndex: e.rowIndex,
              trackGuildAndChannelMetadata: e.questContent === Y.uF.QUESTS_EMBED,
              sourceQuestContent: e.sourceQuestContent,
              children: (t) => (0, r.jsx)(tZ, { ...e, quest: s, impressionRef: t }),
          });
});
var t0 = s(121480);
let t1 = 4 * tg.A.Millis.SECOND;
function t2(e) {
    let { children: t, tileMinWidth: s, gridGap: n } = e,
        l = a.useRef(null),
        [i, o] = a.useState(null),
        c = a.useCallback(() => {
            o(
                (function (e, t, s) {
                    if (null == e) return 1;
                    let n = Math.floor((e.clientWidth + s) / (t + s));
                    return n > 0 ? n : 1;
                })(l.current, s, n),
            );
        }, [o, s, n]);
    return (
        (0, tE.g)(l, c, [s, n], { fireOnMount: !0 }),
        (0, r.jsx)("div", {
            className: t0.kL,
            ref: l,
            style: { "--custom-min-quest-tile-width": `${s}px`, "--custom-quest-grid-gap": `${n}px` },
            children: null !== i && t(i),
        })
    );
}
let t7 = a.forwardRef(function (e, t) {
    let {
            quests: s,
            excludedQuests: n,
            isFetching: l,
            hasFetched: i,
            hasFiltersApplied: u = !1,
            onClearFilters: d,
        } = e,
        m = (0, c.zy)(),
        h = a.useRef(""),
        [E, x] = a.useState(null),
        [g, f] = a.useState(0),
        { enabled: p } = X.aD.useConfig({ location: tK.rE.QUEST_HOME_DESKTOP }),
        [{ highlightAnimationProgress: C }, _] = (0, tx.z)(() => ({
            highlightAnimationProgress: 1,
            config: { duration: t1 },
        })),
        S = a.useCallback(
            (e) => {
                let t = (0, tf.vc)(e, s, n);
                return null != t && (x(t.id), f((e) => e + 1), !0);
            },
            [s, n],
        );
    return (a.useImperativeHandle(t, () => ({ scrollToQuest: S }), [S]),
    a.useLayoutEffect(() => {
        if (0 === m.hash.length) {
            h.current = "";
            return;
        }
        l || !i || (m.hash !== h.current && S(m.hash.slice(1)) && (h.current = m.hash));
    }, [m.hash, l, i, S]),
    a.useLayoutEffect(() => {
        if (null == E) return;
        let e = document.getElementById(`quest-tile-${E}`);
        null != e &&
            (e.scrollIntoView({ behavior: "smooth", block: "center" }),
            _({
                from: { highlightAnimationProgress: 0 },
                to: { highlightAnimationProgress: 1 },
                reset: !0,
                onRest: (e) => {
                    e.cancelled || x(null);
                },
            }));
    }, [E, g, _]),
    l && 0 === s.length)
        ? (0, r.jsx)(eu.y, { className: t0.u1 })
        : 0 === s.length
          ? (0, r.jsxs)("div", {
                className: t0.y7,
                children: [
                    (0, r.jsx)(j.D, {
                        variant: "heading-xl/semibold",
                        children: eh.intl.string(u ? eh.t.PBfFnx : eh.t.NqFP6z),
                    }),
                    (0, r.jsx)(v.E, {
                        variant: "text-md/normal",
                        color: "text-subtle",
                        children: u ? eh.intl.format(eh.t.LdYS1H, { onClick: d }) : eh.intl.string(eh.t.LhD4yH),
                    }),
                ],
            })
          : (0, r.jsx)(t2, {
                tileMinWidth: p ? 291 : 336,
                gridGap: p ? 20 : 24,
                children: (e) =>
                    s.map((t, s) => {
                        let n = Math.floor(s / e),
                            l = E === t.id,
                            a = null != E && !l;
                        return (0, r.jsxs)(
                            th.animated.div,
                            {
                                className: o()({ [t0.XB]: l }),
                                style: tj(l, a, C),
                                children: [
                                    l && (0, r.jsx)("div", { className: t0.E4 }, g),
                                    p
                                        ? (0, r.jsx)(tX, {
                                              quest: t,
                                              questContent: Y.uF.QUEST_HOME_DESKTOP,
                                              contentPosition: s,
                                              rowIndex: n,
                                              className: t0.d,
                                              sourceQuestContent: Y.uF.QUEST_HOME_DESKTOP,
                                          })
                                        : (0, r.jsx)(eG.Ay, {
                                              quest: t,
                                              questContent: Y.uF.QUEST_HOME_DESKTOP,
                                              contentPosition: s,
                                              rowIndex: n,
                                              className: t0.d,
                                              sourceQuestContent: Y.uF.QUEST_HOME_DESKTOP,
                                          }),
                                ],
                            },
                            t.id,
                        );
                    }),
            });
});
var t8 = s(458518),
    t6 = s(65990);
let t3 = [],
    t4 = ee.L1.SORT,
    t5 = ee.L1.FILTER,
    t9 = a.forwardRef(function (e, t) {
        let s,
            n,
            l,
            i,
            o = a.useRef(null),
            [u, d] =
                ((s = (0, t8.o)()),
                (n = (0, c.W6)()),
                (l = a.useRef(null)),
                (i = a.useCallback(
                    (e) => {
                        let t = new URLSearchParams(l.current ?? s);
                        for (let [s, n] of Object.entries(e)) null == n ? t.delete(s) : t.set(s, n);
                        (l.current = t),
                            n.replace({ search: t.toString() }),
                            Promise.resolve().then(() => {
                                l.current = null;
                            });
                    },
                    [s, n],
                )),
                [s, i]),
            m = a.useMemo(() => {
                var e;
                return (
                    (e = u.get(t4)),
                    ((0, $.uJ)(e) ? null : (Object.values(tK.kL).find((t) => t === e) ?? null)) ?? tK.kL.SUGGESTED
                );
            }, [u]),
            h = a.useMemo(
                () =>
                    (function (e) {
                        if ((0, $.uJ)(e)) return null;
                        let t = e
                            .split(",")
                            .map((e) => (0, tK.WQ)(e))
                            .filter(e9.Vq);
                        return t.length > 0 ? t : null;
                    })(u.get(t5)) ?? t3,
                [u],
            ),
            E = a.useCallback(
                (e) => {
                    d({ [t4]: e });
                },
                [d],
            ),
            x = a.useCallback(
                (e) => {
                    d({
                        [t5]:
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
                quests: g,
                excludedQuests: f,
                isFetchingCurrentQuests: v,
                hasFetched: p,
            } = (0, ee.Qh)(
                ee.NC.ALL,
                a.useMemo(() => ({ sortMethod: m, filters: h }), [m, h]),
            ),
            C = a.useCallback(() => {
                x(t3);
            }, [x]),
            _ = a.useRef(null),
            S = a.useRef(null),
            N = (0, c.zy)(),
            A = (0, c.W6)();
        return (
            a.useEffect(() => {
                "" !== N.hash &&
                    null != _.current &&
                    null != S.current &&
                    (m !== _.current || h !== S.current) &&
                    A.replace({ ...N, hash: void 0 });
            }, [m, h, N, A]),
            a.useEffect(() => {
                _.current = m;
            }, [m]),
            a.useEffect(() => {
                S.current = h;
            }, [h]),
            (0, ee.$P)({ selectedSortMethod: m, selectedFilters: h, numQuestsVisible: g.length }),
            a.useImperativeHandle(
                t,
                () => ({
                    scrollToQuest: (e) => {
                        C(),
                            E(tK.kL.SUGGESTED),
                            requestAnimationFrame(() => {
                                o.current?.scrollToQuest(e);
                            });
                    },
                }),
                [C, E],
            ),
            (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsxs)("div", {
                        className: t6.Mj,
                        children: [
                            (0, r.jsx)(j.D, { variant: "heading-lg/medium", children: eh.intl.string(eh.t.giYD00) }),
                            (0, r.jsxs)("div", {
                                className: t6.Nf,
                                children: [
                                    (0, r.jsx)(tm, { onChange: E, optionClassName: t6.Uq, selectedSortMethod: m }),
                                    (0, r.jsx)(tc, { onChange: x, selectedFilters: h }),
                                ],
                            }),
                        ],
                    }),
                    (0, r.jsx)(t7, {
                        ref: o,
                        quests: g,
                        excludedQuests: f,
                        isFetching: v,
                        hasFetched: p,
                        hasFiltersApplied: h.length > 0,
                        onClearFilters: C,
                    }),
                ],
            })
        );
    });
var se = s(575593),
    st = s(440703),
    ss = s(462887),
    sn = s(187322),
    sl = s(765671),
    sr = s(736653),
    sa = s(162232),
    si = s(734736),
    so = s(303136),
    sc = s(265234),
    su = s(181713);
let sd = (e) => {
    let { className: t, isAnimated: s = !1, questName: n } = e,
        l = s ? su.A : su.A + "?format=webp";
    return (0, r.jsx)("div", {
        className: o()(sc.k, t),
        children: s
            ? (0, r.jsx)(so.A, {
                  preload: "auto",
                  className: sc.L,
                  children: (0, r.jsx)("source", { src: l, type: "video/webm" }),
              })
            : (0, r.jsx)("img", { className: sc.L, src: l, alt: n }),
    });
};
var sm = s(57718),
    sh = s(659249);
let sE = (0, a.memo)(function (e) {
    let { quest: t } = e,
        [s, n] = (0, a.useState)(!1),
        [l, i] = (0, a.useState)(24),
        [c, u] = (0, a.useState)(!1),
        d = (0, a.useRef)(null),
        h = (0, a.useRef)(null),
        E = (0, a.useRef)(null),
        x = (0, m.bG)([eJ.default], () => eJ.default.getCurrentUser()),
        { ref: g, height: f = 0 } = (0, sl.Ay)(),
        p = (0, sr.Ay)(),
        C = (0, ee.S5)(t.userStatus?.claimedAt, { month: "numeric", day: "numeric" }),
        _ = t.userStatus?.claimedTier ?? 0,
        S = t.config.rewards[_],
        N = S?.type === st.l.FRACTIONAL_PREMIUM,
        A = S?.type === st.l.COLLECTIBLE,
        b = S?.type === st.l.VIRTUAL_CURRENCY,
        T = S?.collectibleProduct?.items?.[0],
        O = T?.type === se.R.AVATAR_DECORATION ? T : null,
        R = a.useMemo(
            () =>
                null == S
                    ? null
                    : !0 === b && t.userStatus?.orbQuantityClaimed != null
                      ? eh.intl.format(eh.t["nLXlh+"], { orbAmount: t.userStatus.orbQuantityClaimed })
                      : S.name,
            [S, b, t],
        );
    (0, sl.i4)(d, (e) => {
        let { height: t } = e;
        if (!A || null == t || null == h.current || null == d.current || null == E.current) return;
        let s = d.current.getBoundingClientRect(),
            n = h.current.getBoundingClientRect(),
            l = E.current.getBoundingClientRect();
        i((n.top - s.top - l.height) / 2);
    });
    let I = (0, ss.M)(p),
        y = a.useMemo(() => null != t.config.cosponsorMetadata, [t]),
        M = a.useMemo(() => (0, tp.tW)(t, tp.fY.REWARD), [t]),
        Q = s ? f + 8 : 0,
        { content_position: U, row_index: H, ...D } = (0, et.fF)(Y.uF.TROPHY_CASE_CARD),
        w = () => {
            n(!0), G.default.track(e_.HAw.QUEST_HOVER, { quest_id: t.id, ...D });
        },
        F = () => {
            n(!1);
        },
        q = (e) => {
            u(!0), G.default.track(e_.HAw.QUEST_ASSET_LOADING_FAILURE, { source: e, asset_id: e, quest_id: t.id });
        };
    return null == S || c
        ? null
        : (0, r.jsx)(sn.vN, {
              children: (0, r.jsxs)("div", {
                  ref: d,
                  tabIndex: 0,
                  onFocus: w,
                  onBlur: F,
                  onMouseEnter: w,
                  onMouseLeave: F,
                  className: o()(sh.kL, { [sh.yo]: s }),
                  children: [
                      null != x &&
                          A &&
                          null != O &&
                          (0, r.jsx)("div", {
                              ref: E,
                              className: sh.FX,
                              style: { top: l },
                              children: (0, r.jsx)(sa.A, {
                                  avatarDecorationOverride: O,
                                  user: x,
                                  guildId: null,
                                  animateOnHover: !s,
                              }),
                          }),
                      N
                          ? (0, r.jsx)(si.A, { className: sh.Sl })
                          : b
                            ? (0, r.jsx)(sd, {
                                  className: sh.Sl,
                                  isAnimated: s,
                                  questName: t.config.messages.questName,
                              })
                            : M.isAnimated
                              ? (0, r.jsx)(L.A, {
                                    className: sh.JU,
                                    autoPlay: !1,
                                    children: (0, r.jsx)("source", {
                                        src: M.url,
                                        type: M.mimetype ?? void 0,
                                        onError: () => q(M.url),
                                    }),
                                })
                              : (0, r.jsx)("img", {
                                    className: sh.Sl,
                                    src: M.url,
                                    alt: t.config.messages.questName,
                                    onError: () => q(M.url),
                                }),
                      (0, r.jsx)("div", { className: o()(sh.Lw, { [sh.en]: I, [sh.So]: !I }) }),
                      (0, r.jsx)("div", {
                          ref: h,
                          className: sh.r$,
                          style: { transform: `translateY(-${Q}px)` },
                          children: (0, r.jsx)(sm.Ay, {
                              logotypeClassName: o()(sh.wm, { [sh.A0]: y }),
                              quest: t,
                              withGameTile: !1,
                          }),
                      }),
                      (0, r.jsxs)("div", {
                          ref: g,
                          className: sh.zH,
                          children: [
                              (0, r.jsx)(j.D, {
                                  className: sh.DD,
                                  variant: "heading-md/semibold",
                                  color: "always-white",
                                  children: eh.intl.format(eh.t.EAYZAr, { questName: t.config.messages.questName }),
                              }),
                              (0, r.jsx)(v.E, {
                                  variant: "text-sm/medium",
                                  color: I ? "text-muted" : "always-white",
                                  style: { opacity: I ? 1 : 0.75 },
                                  children: eh.intl.format(eh.t["kXVcV+"], { reward: R, claimedDate: C }),
                              }),
                          ],
                      }),
                  ],
              }),
          });
});
var sx = s(396478);
function sg(e) {
    let { onClick: t } = e,
        n = (0, sr.Ay)();
    return (0, r.jsxs)(sx.pp, {
        theme: n,
        children: [
            (0, r.jsx)(sx.G8, { lightSrc: s(826223), darkSrc: s(317017), width: 415, height: 200 }),
            (0, r.jsx)(sx.SG, { note: eh.intl.format(eh.t.Pv8u2u, { onClick: t }) }),
        ],
    });
}
var sf = s(975424);
function sj(e) {
    let { onSelectTab: t, className: s } = e,
        { claimedQuests: n, isFetchingClaimedQuests: l } = (0, ee.Iq)();
    return l && 0 === n.length
        ? (0, r.jsx)(eu.y, { className: sf.u })
        : 0 === n.length
          ? (0, r.jsx)(sg, { onClick: () => t(ee.NC.ALL) })
          : (0, r.jsx)("div", {
                className: o()(sf.U, s),
                children: [...n]
                    .sort((e, t) => (t.userStatus?.claimedAt ?? "").localeCompare(e.userStatus?.claimedAt ?? ""))
                    .map((e) => (0, r.jsx)(sE, { quest: e }, e.id)),
            });
}
let sv = a.createContext({ targetQuestId: null, highlightCount: null, highlightAnimationProgress: null });
var sp = s(868714),
    sC = s(548411),
    s_ = s(554830),
    sS = s(689175),
    sN = s(321503),
    sA = s(522403);
let sb = "data-scroll-target",
    sT = `[${sb}]`,
    sO = { anchors: [], pageSize: 1 };
function sR(e) {
    let {
            children: t,
            className: s,
            itemSelector: n = sT,
            maskWidth: l = 48,
            overflowAmount: i = 0,
            maskMarginMultiplier: c = 1,
        } = e,
        u = a.useRef(null),
        d = a.useRef(null),
        [h, E] = a.useState(!1),
        [x, g] = a.useState(!1),
        [{ anchors: f, pageSize: j }, v] = a.useState(sO),
        p = (0, m.bG)([N.A], () => N.A.useReducedMotion) ? "auto" : "smooth",
        C = a.useCallback(() => {
            let e = u.current?.getScrollerNode();
            null == e ||
                (0 !== e.clientWidth && (E(e.scrollLeft > 0), g(e.scrollLeft + e.clientWidth < e.scrollWidth - 1)));
        }, []),
        _ = a.useCallback(() => {
            v(
                (function (e) {
                    let { scrollerRef: t, itemSelector: s, maskMarginMultiplier: n, maskWidth: l } = e,
                        r = t.current?.getScrollerNode();
                    if (null == r || r.scrollWidth <= r.clientWidth) return sO;
                    let a = Array.from(r.querySelectorAll(s));
                    if (0 === a.length) return sO;
                    let i = a[0].offsetWidth,
                        o = a.length > 1 ? a[1].offsetLeft - a[0].offsetLeft - i : 0,
                        c = Math.max(1, Math.floor((r.clientWidth - 2 * l * n + o) / (i + o))),
                        u = a.length - c + 1;
                    return u <= 1
                        ? sO
                        : {
                              anchors: [
                                  0,
                                  ...a.slice(1, u - 1).map((e, t) => {
                                      let s = a[t + c];
                                      return (e.offsetLeft + s.offsetLeft + s.offsetWidth) / 2;
                                  }),
                                  r.scrollWidth,
                              ],
                              pageSize: c,
                          };
                })({ scrollerRef: u, itemSelector: n, maskWidth: l, maskMarginMultiplier: c }),
            );
        }, [l, n, c]),
        S = a.useCallback(
            (e) => {
                let t = u.current?.getScrollerNode();
                if (null == t || f.length < 2) return;
                let s = f.length - 1,
                    n = Math.max(0, t.scrollWidth - t.clientWidth),
                    l = f.map((e, l) => (0 === l ? 0 : l === s ? n : e - t.clientWidth / 2)),
                    r = (e) => Math.abs(e - t.scrollLeft),
                    a = Math.max(0, Math.min(s, l.reduce((e, t, s) => (r(t) < r(l[e]) ? s : e), 0) + e * j));
                t.scrollTo({ left: l[a], behavior: p });
            },
            [p, f, j],
        ),
        A = a.useCallback(
            (e) => {
                let t = u.current?.getScrollerNode();
                if (null == t) return;
                let s = e.target.closest(n);
                if (null == s || !t.contains(s)) return;
                let r = t.getBoundingClientRect(),
                    a = s.getBoundingClientRect(),
                    i = r.left + l - a.left,
                    o = a.right - (r.right - l);
                i > 0 ? t.scrollBy({ left: -i, behavior: p }) : o > 0 && t.scrollBy({ left: o, behavior: p });
            },
            [n, l, p],
        ),
        b = a.useCallback(() => {
            C(), _();
        }, [C, _]);
    (0, tE.g)(d, b, [], { fireOnMount: !0 });
    let T = i > 0,
        O = (0, sp.A)(f);
    return (0, r.jsxs)("div", {
        className: o()(s, sA.m7),
        ref: d,
        style: {
            "--custom-scroller-mask-width": `${l}px`,
            "--custom-scroller-overflow-amount": `${i}px`,
            "--custom-scroller-scroll-behavior": p,
        },
        children: [
            (0, r.jsx)(ef.D, {
                "aria-label": eh.intl.string(eh.t.vgfxaA),
                className: o()(sA.k9, sA.RW, { [sA.Q2]: h }),
                onClick: () => S(-1),
                tabIndex: h ? 0 : -1,
                "aria-hidden": !h,
                children: (0, r.jsx)(sC.Z, { color: ex.A.colors.INTERACTIVE_ICON_ACTIVE, size: "md" }),
            }),
            (0, r.jsx)(ef.D, {
                "aria-label": eh.intl.string(eh.t.XiOHRX),
                className: o()(sA.k9, sA.K3, { [sA.Q2]: x }),
                onClick: () => S(1),
                tabIndex: x ? 0 : -1,
                "aria-hidden": !x,
                children: (0, r.jsx)(s_.K, { color: ex.A.colors.INTERACTIVE_ICON_ACTIVE, size: "md" }),
            }),
            (0, r.jsx)("div", {
                className: o()(sA.$u, { [sA.sF]: h, [sA.RC]: x, [sA.Ni]: T && !h, [sA.GA]: T && !x }),
                children: (0, r.jsx)(sS.zC, {
                    ref: u,
                    orientation: "horizontal",
                    onScroll: C,
                    onFocusCapture: A,
                    className: o()({ [sA.x2]: T }, sA.XG),
                    children: (0, r.jsxs)(sN.X.Provider, {
                        value: u,
                        children: [
                            t,
                            O.map((e, t) =>
                                (0, r.jsx)(
                                    "div",
                                    { "aria-hidden": !0, className: sA.fw, style: { insetInlineStart: `${e}px` } },
                                    t,
                                ),
                            ),
                        ],
                    }),
                }),
            }),
        ],
    });
}
var sI =
    (((l = {}).FEATURED = "featured"),
    (l.IN_PROGRESS = "in-progress"),
    (l.ENDING_SOON = "ending-soon"),
    (l.ORB = "orb"),
    (l.DISCOVERED = "discovered"),
    l);
let sL = [
    { type: "featured-quests", identifier: "featured", title: eh.t["ih/OtS"], maxItems: 4 },
    { type: "quests", identifier: "in-progress", title: eh.t.CHJy6z },
    { type: "quests", identifier: "ending-soon", title: eh.t.PRg3qh },
    { type: "quests", identifier: "orb", title: eh.t["0Uc94A"] },
    { type: "quests", identifier: "discovered", title: eh.t["u9Ug++"] },
];
var sy = s(548636);
function sM(e) {
    let { questIds: t, rowIndex: s, sectionIdentifier: n } = e,
        { targetQuestId: l, highlightCount: i, highlightAnimationProgress: o } = a.useContext(sv),
        c = null != l,
        { enabled: u } = X.aD.useConfig({ location: tK.rE.QUEST_HOME_DESKTOP });
    return (0, r.jsx)(sR, {
        maskWidth: 48,
        overflowAmount: 25,
        maskMarginMultiplier: 0.75,
        children: (0, r.jsxs)("div", {
            style: {
                "--custom-min-quest-tile-width": `${u ? 282 : 382.6666666666667}px`,
                "--custom-extra-spacing-placeholder-size": "5px",
            },
            className: sy.FO,
            children: [
                t.map((e, t) => {
                    let a = l === e,
                        d = c && !a;
                    return (0, r.jsxs)(
                        th.animated.div,
                        {
                            [sb]: "",
                            className: a ? sy.XB : void 0,
                            style: tj(a, d, o),
                            children: [
                                a && (0, r.jsx)("div", { className: sy.E4 }, i),
                                u
                                    ? (0, r.jsx)(tX, {
                                          questId: e,
                                          questContent: Y.uF.QUEST_HOME_DESKTOP,
                                          contentPosition: t,
                                          rowIndex: s,
                                          className: sy.d,
                                          sourceQuestContent: Y.uF.QUEST_HOME_DESKTOP,
                                      })
                                    : (0, r.jsx)(eG.Ay, {
                                          questId: e,
                                          isInFeaturedSection: n === sI.FEATURED,
                                          questContent: Y.uF.QUEST_HOME_DESKTOP,
                                          contentPosition: t,
                                          rowIndex: s,
                                          className: sy.d,
                                          sourceQuestContent: Y.uF.QUEST_HOME_DESKTOP,
                                      }),
                            ],
                        },
                        `animated-wrapper-${e}`,
                    );
                }),
                (0, r.jsx)("div", { className: sy.fu }),
            ],
        }),
    });
}
var sQ = s(958538);
let sU = tg.A.Millis.WEEK;
function sH() {
    let e = el.A.quests;
    if (0 === el.A.lastFetchedCurrentQuests || 0 === e.size) return !1;
    let t = null;
    for (let s of n.keys()) {
        let l = e.get(s);
        (null == l || (0, tf.Ic)(l)) && (null == t && (t = new Map(n)), t.delete(s));
    }
    return null != t && ((n = t), !0);
}
class sD extends m.Ay.PersistedStore {
    static displayName = "DiscoveredQuestStore";
    static persistKey = "DiscoveredQuestStore";
    initialize(e) {
        this.waitFor(el.A), (n = new Map());
        let t = !1;
        if (null != e) {
            let s = Date.now() - sU;
            for (let [l, r] of Object.entries(e.discoveredAtByQuestId)) {
                if (null == r || null == l || new Date(r).getTime() < s) {
                    t = !0;
                    continue;
                }
                n.set(l, r);
            }
        }
        return this.syncWith([el.A], sH), t;
    }
    getState() {
        let e = {};
        for (let [t, s] of n) e[t] = s;
        return { discoveredAtByQuestId: e };
    }
    getDiscoveredAtByQuestId() {
        return n;
    }
}
let sw = new sD(es.h, {
        QUESTS_MARK_DISCOVERED: function (e) {
            let t = new Map(n);
            t.set(e.questId, new Date().toISOString()), (n = t);
        },
    }),
    sF = 2 * tg.A.Millis.DAY,
    sq = new Map(sL.map((e) => [e.identifier, e])),
    sP = {
        [sI.DISCOVERED]: function (e, t) {
            let { discoveredAtByQuestId: s } = t;
            return e.slice().sort((e, t) => {
                var n, l;
                return (n = s.get(e)), (l = s.get(t)), null == n || null == l ? 0 : l.localeCompare(n);
            });
        },
    };
function sk(e, t) {
    return e === t || (e.length === t.length && 0 === new Set(e).symmetricDifference(new Set(t)).size);
}
function sB(e, t) {
    let s = sq.get(e)?.maxItems,
        n = t.get(e)?.length ?? 0;
    return null == s || n < s;
}
var sV = s(32304);
let sW = 4 * tg.A.Millis.SECOND,
    sG = a.forwardRef(function (e, t) {
        let { deepLinkedQuestId: s, isLoadingQuestHomeHero: n, className: l } = e,
            { sections: i, isFetchingCurrentQuests: c } = ((e) => {
                let { isLoadingQuestHomeHero: t } = e,
                    {
                        quests: s,
                        isFetchingCurrentQuests: n,
                        hasFetched: l,
                    } = (0, ee.Qh)(ee.NC.ALL, { sortMethod: tK.kL.SUGGESTED, filters: [] }),
                    r = (0, sQ.A)(
                        () =>
                            s.map((e) => {
                                let { id: t } = e;
                                return t;
                            }),
                        s.map((e) => {
                            let { id: t } = e;
                            return t;
                        }),
                        sk,
                    ),
                    i = (0, ee.T2)(),
                    o = (0, m.bG)([sw], () => sw.getDiscoveredAtByQuestId(), []),
                    c = a.useMemo(() => (n && 0 === s.length) || t, [n, s.length, t]);
                return {
                    sections: a.useMemo(
                        () =>
                            c
                                ? []
                                : (function (e) {
                                      let { allQuestIds: t, hero: s, discoveredAtByQuestId: n } = e,
                                          l = new Map(),
                                          r = new Set();
                                      function a(e, t) {
                                          let { featuredOnly: a = !1 } = t;
                                          if (r.has(e)) return;
                                          let i = el.A.getQuestConfig(e);
                                          if (null == i) return;
                                          let o = (function (e) {
                                              let {
                                                      quest: t,
                                                      hero: s,
                                                      discoveredAtByQuestId: n,
                                                      questIdsBySectionIdentifier: l,
                                                  } = e,
                                                  r = el.A.getQuest(t.id)?.userStatus,
                                                  a =
                                                      null != r &&
                                                      null != r.enrolledAt &&
                                                      null != r.completedAt &&
                                                      null == r.claimedAt;
                                              return (0, tf.kd)(t) && !a
                                                  ? null
                                                  : null != r && null != r.enrolledAt && null == r.claimedAt
                                                    ? sI.IN_PROGRESS
                                                    : n.has(t.id)
                                                      ? sI.DISCOVERED
                                                      : null != s && (0, tL.I0)(s, t.id) && sB(sI.FEATURED, l)
                                                        ? sI.FEATURED
                                                        : new Date(t.expiresAt).valueOf() <= Date.now() + sF
                                                          ? sI.ENDING_SOON
                                                          : sB(sI.FEATURED, l)
                                                            ? sI.FEATURED
                                                            : (0, tB.ks)(t)
                                                              ? sI.ORB
                                                              : null;
                                          })({
                                              quest: i,
                                              hero: s,
                                              discoveredAtByQuestId: n,
                                              questIdsBySectionIdentifier: l,
                                          });
                                          null == o ||
                                              (a && o !== sI.FEATURED) ||
                                              (l.set(o, [...(l.get(o) ?? []), e]), r.add(e));
                                      }
                                      return (
                                          s?.questIds?.forEach((e) => a(e, { featuredOnly: !0 })),
                                          t.forEach((e) => a(e, {})),
                                          sL
                                              .map((e) => {
                                                  let t = sP?.[e.identifier],
                                                      s =
                                                          null != t
                                                              ? t(l.get(e.identifier) ?? [], {
                                                                    discoveredAtByQuestId: n,
                                                                })
                                                              : (l.get(e.identifier) ?? []);
                                                  return { ...e, questIds: s };
                                              })
                                              .filter((e) => {
                                                  let { questIds: t } = e;
                                                  return t.length > 0;
                                              })
                                      );
                                  })({ allQuestIds: r, hero: i, discoveredAtByQuestId: o }),
                        [r, i, o, c],
                    ),
                    hasFetched: l,
                    isFetchingCurrentQuests: c,
                };
            })({ isLoadingQuestHomeHero: n }),
            [u, d] = a.useState(null),
            [h, E] = a.useState(0),
            x = a.useRef(null),
            [{ highlightAnimationProgress: g }, f] = (0, tx.z)(() => ({
                highlightAnimationProgress: 1,
                config: { duration: sW },
            })),
            v = a.useCallback(
                (e) => {
                    if (null == e) return !1;
                    let t = document.getElementById((0, eG.sT)(e));
                    return (
                        null != t &&
                        !c &&
                        (d(e),
                        E((e) => e + 1),
                        t.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" }),
                        f({
                            from: { highlightAnimationProgress: 0 },
                            to: { highlightAnimationProgress: 1 },
                            reset: !0,
                            onRest: (e) => {
                                e.cancelled || d(null);
                            },
                        }),
                        !0)
                    );
                },
                [d, E, f, c],
            );
        a.useImperativeHandle(t, () => ({ scrollToQuest: v }), [v]),
            a.useLayoutEffect(() => {
                if (null == s) {
                    x.current = null;
                    return;
                }
                x.current !== s && ((0, en.sB)(s), v(s) && (x.current = s));
            }, [s, v]);
        let p = a.useMemo(() => ({ targetQuestId: u, highlightCount: h, highlightAnimationProgress: g }), [u, h, g]);
        return (0, r.jsx)(sv.Provider, {
            value: p,
            children: (0, r.jsx)("div", {
                className: o()(sV.k, l),
                children: i.map((e, t) => {
                    let { identifier: s, questIds: n, title: l } = e;
                    return (0, r.jsxs)(
                        "div",
                        {
                            className: sV.p,
                            children: [
                                (0, r.jsx)(j.D, { variant: "heading-lg/medium", children: eh.intl.string(l) }),
                                (0, r.jsx)(sM, { questIds: n, rowIndex: t, sectionIdentifier: s }),
                            ],
                        },
                        s,
                    );
                }),
            }),
        });
    });
var sz = s(353640),
    sK = s(121894),
    s$ = s(851936);
let sY = (0, sz.v)((e, t) => ({
    startTime: performance.now(),
    elapsed: 0,
    lastOutputLogTime: -5e3,
    logger: null,
    registerAssetLoad: () => {
        let s = t().logger ?? (0, s$.L)({ location: tK.rE.QUEST_HOME_DESKTOP });
        if (s.info === eA.tE || t().elapsed >= 6e4) return;
        let n = performance.now() - t().startTime;
        n > 6e4 && (n = 6e4);
        let l = { elapsed: n };
        n - t().lastOutputLogTime > 1e3 &&
            (s.info(`QuestHome asset loading duration so far: ${n}ms`), (l.lastOutputLogTime = n)),
            null == t().logger && (l.logger = s),
            (0, sK.r)(() => e(l));
    },
}));
var sJ = s(516226),
    sZ = s(323889),
    sX = s(561844),
    s0 = s(901406),
    s1 = s(139384),
    s2 = s(43990),
    s7 = s(770178),
    s8 = s(14233);
function s6(e, t) {
    let { row_index: s, ...n } = (0, et.fF)(Y.uF.QUEST_HOME_HERO);
    (0, sX.Qg)({
        adContentId: e,
        adCreativeType: sZ.p.QUEST_HOME_HERO,
        event: t,
        properties: n,
        sourceQuestContent: Y.uF.QUEST_HOME_HERO,
    });
}
let s3 = a.forwardRef(function (e, t) {
    let { adContentId: s, topContent: n, title: l, subtitle: i, buttons: c, background: u, className: d } = e,
        [m, h] = a.useState("display-lg"),
        E = a.useCallback((e) => {
            h(e.contentRect.width < 500 ? "display-md" : "display-lg");
        }, []),
        x = (0, s7.w)(E, [], { fireOnMount: !0 }),
        g = a.useCallback(() => s6(s, e_.HAw.QUEST_HOVER), [s]),
        f = a.useCallback(() => s6(s, e_.HAw.QUEST_HOVER_OFF), [s]);
    return (0, r.jsx)(s2.N, {
        theme: e_.NJ8.MIDNIGHT,
        disableAdaptiveTheme: !0,
        children: (e) =>
            (0, r.jsx)("div", {
                className: o()(s8.iE, e, d),
                onMouseEnter: g,
                onMouseLeave: f,
                ref: (e) => {
                    (x.current = e), "function" == typeof t ? t(e) : null != t && (t.current = e);
                },
                children: (0, r.jsxs)("div", {
                    className: s8.FG,
                    children: [
                        (0, r.jsxs)(C.B, {
                            className: s8.Qs,
                            direction: "vertical",
                            justify: null != n ? "space-between" : "end",
                            children: [
                                n,
                                (0, r.jsxs)(C.B, {
                                    className: s8.yp,
                                    gap: 16,
                                    children: [
                                        (0, r.jsxs)(C.B, {
                                            gap: 8,
                                            children: [
                                                (0, r.jsx)(j.D, {
                                                    color: "text-strong",
                                                    variant: m,
                                                    className: s8.DD,
                                                    children: l,
                                                }),
                                                (0, r.jsx)(v.E, {
                                                    color: "text-strong",
                                                    variant: "text-md/normal",
                                                    className: s8.VA,
                                                    children: i,
                                                }),
                                            ],
                                        }),
                                        c,
                                    ],
                                }),
                            ],
                        }),
                        u,
                    ],
                }),
            }),
    });
});
var s4 = s(194526),
    s5 = s(731355),
    s9 = s(621466),
    ne = s(508770),
    nt = s(406810),
    ns = s(628284),
    nn = s(65154),
    nl = s(496431),
    nr = s(975807),
    na = s(58703),
    ni = s(18437),
    no = s(398025),
    nc = s(691464);
function nu(e) {
    let [t, s] = a.useState(!1),
        n = a.useCallback(() => {
            t || (s(!0), e?.(!0));
        }, [t, e]),
        l = a.useCallback(() => {
            t && (s(!1), e?.(!1));
        }, [t, e]);
    return { isHovering: t, hoverProps: { onMouseEnter: n, onMouseLeave: l, onFocus: n, onBlur: l } };
}
function nd(e) {
    let { hero: t, contentPosition: s } = e,
        n = a.useRef(null),
        { isHovering: l, hoverProps: i } = nu(
            a.useCallback(
                (e) => {
                    (0, sX.Qg)({
                        adContentId: t.id,
                        adCreativeType: sZ.p.QUEST_HOME_HERO,
                        event: e ? e_.HAw.QUEST_HOVER : e_.HAw.QUEST_HOVER_OFF,
                        properties: {
                            content_id: Y.uF.QUEST_HOME_HERO_SHELF,
                            content_name: (0, et.jO)(Y.uF.QUEST_HOME_HERO_SHELF),
                            content_position: s,
                        },
                        sourceQuestContent: Y.uF.QUEST_HOME_HERO_SHELF,
                    });
                },
                [t.id, s],
            ),
        );
    a.useEffect(() => {
        let e = n.current;
        (0, s9.vq)(e, HTMLVideoElement) && (l ? ((e.currentTime = 0), e.play().catch(eA.tE)) : e.pause());
    }, [l]);
    let { hoverSpring: c } = (0, tx.z)({ hoverSpring: +!!l, config: th.config.gentle }),
        u = a.useCallback(() => {
            (0, nr.A)(t.cta.url),
                (0, sX.vK)({
                    adContentId: t.id,
                    adCreativeType: sZ.p.QUEST_HOME_HERO,
                    questContent: Y.uF.QUEST_HOME_HERO_SHELF,
                    questContentCTA: et.Cy.OPEN_GAME_LINK,
                    questContentPosition: s,
                    sourceQuestContent: Y.uF.QUEST_HOME_HERO_SHELF,
                });
        }, [t.cta.url, t.id, s]);
    return (0, r.jsxs)(ef.D, {
        tag: "div",
        className: o()(nc.FW, nc.Bm),
        onClick: u,
        "aria-label": t.cta.buttonLabel,
        [sb]: !0,
        ...i,
        children: [
            (0, r.jsx)("div", {
                className: nc.Ve,
                children: (0, r.jsx)(tC.N, {
                    showVideo: !0,
                    assetRef: n,
                    imageAsset:
                        null != t.shelfImage
                            ? {
                                  asset: { url: t.shelfImage, mimetype: null, isAnimated: !1 },
                                  assetId: "intro-image",
                                  className: o()(nc.pv, nc.gI),
                              }
                            : void 0,
                    videoAsset:
                        null != t.shelfVideo
                            ? {
                                  asset: { url: t.shelfVideo, mimetype: null, isAnimated: !0 },
                                  assetId: "intro-video",
                                  className: o()(nc.pv, nc.Wq),
                              }
                            : void 0,
                }),
            }),
            (0, r.jsx)(th.animated.div, {
                className: nc.hn,
                style: { transform: c.to([0, 1], [100, 0]).to((e) => `translateY(${e}%)`) },
                children: (0, r.jsx)(g.$, {
                    fullWidth: !0,
                    onClick: (e) => {
                        e.stopPropagation(), u();
                    },
                    text: t.cta.buttonLabel,
                }),
            }),
        ],
    });
}
function nm(e) {
    let { heroId: t, quest: s, onQuestCtaClick: n, contentPosition: l } = e,
        i = a.useMemo(() => new Date(s.config.expiresAt), [s.config.expiresAt]),
        { days: c, hours: u, minutes: d, seconds: h } = (0, nl.A)(i, tg.A.Millis.MINUTE),
        E = a.useMemo(
            () =>
                (0, na.uN)(
                    { days: c, hours: u, minutes: d, seconds: h },
                    { days: eh.t["Ux/De1"], hours: eh.t.Lzd5Ie, minutes: eh.t.odmpbP },
                ),
            [c, u, d, h],
        ),
        x = (0, m.bG)([eJ.default], () => eJ.default.getCurrentUser()),
        f = a.useMemo(() => (0, tB.mq)(s.config, x), [s.config, x]),
        j = a.useMemo(
            () =>
                (function (e, t) {
                    switch ((0, ts.xv)(e).type) {
                        case st.l.IN_GAME:
                            return eh.intl.string(eh.t["O/J2kr"]);
                        case st.l.COLLECTIBLE:
                            return eh.intl.string(eh.t.Jg17Ut);
                        case st.l.VIRTUAL_CURRENCY:
                            return eh.intl.string(eh.t.ElYQFS);
                        default:
                            return (0, tB.mq)(e, t);
                    }
                })(s.config, x),
            [s.config, x],
        ),
        { completedRatio: p, completedRatioDisplay: _ } = (0, ee.O9)(s),
        S = a.useMemo(() => (0, tB.wo)(s.config, x), [s.config, x]),
        N = (0, ni.tG)(),
        A = (0, ni.WS)(),
        { isHovering: b, hoverProps: T } = nu(
            a.useCallback(
                (e) => {
                    A({
                        adContentId: t,
                        relatedQuestId: s.id,
                        adCreativeType: sZ.p.QUEST_HOME_HERO,
                        event: e ? e_.HAw.QUEST_HOVER : e_.HAw.QUEST_HOVER_OFF,
                        properties: {
                            content_id: Y.uF.QUEST_HOME_HERO_SHELF,
                            content_name: (0, et.jO)(Y.uF.QUEST_HOME_HERO_SHELF),
                            content_position: l,
                        },
                        sourceQuestContent: Y.uF.QUEST_HOME_HERO_SHELF,
                    });
                },
                [t, A, l, s.id],
            ),
        ),
        { hoverSpring: O } = (0, tx.z)({ hoverSpring: +!!b, config: th.config.gentle }),
        R = a.useCallback(() => {
            n(s.id),
                N({
                    adContentId: t,
                    relatedQuestId: s.id,
                    adCreativeType: sZ.p.QUEST_HOME_HERO,
                    questContent: Y.uF.QUEST_HOME_HERO_SHELF,
                    questContentCTA: et.Cy.VIEW_QUESTS,
                    questContentPosition: l,
                    sourceQuestContent: Y.uF.QUEST_HOME_HERO_SHELF,
                });
        }, [n, t, s.id, N, l]);
    return (0, r.jsxs)(ef.D, {
        tag: "div",
        className: o()(nc.FW, nc.$R),
        onClick: R,
        "aria-label": eh.intl.string(eh.t["th2+0j"]),
        [sb]: !0,
        ...T,
        children: [
            (0, r.jsxs)(C.B, {
                direction: "horizontal",
                gap: 4,
                children: [
                    (0, r.jsx)(ne.E, { type: { text: j } }),
                    (0, r.jsx)(th.animated.div, {
                        style: { opacity: (0, no.a)(O.to([0, 1], [1, 0])) },
                        children: (0, r.jsx)(ne.E, { type: { text: E }, icon: nt.O }),
                    }),
                ],
            }),
            (0, r.jsx)(th.animated.div, {
                className: nc.Tr,
                style: { transform: O.to([0, 1], [1, 1.1]).to((e) => `scale(${e})`) },
                children: (0, r.jsx)(tV.A, {
                    percentComplete: p,
                    overlayText: b && null != S ? `${S}` : void 0,
                    size: 120,
                    children: (0, r.jsx)(tW.A, {
                        quest: s,
                        questContent: Y.uF.QUEST_HOME_HERO_SHELF,
                        sourceQuestContent: Y.uF.QUEST_HOME_HERO_SHELF,
                        autoplay: b,
                        fullWidth: !0,
                    }),
                }),
            }),
            (0, r.jsx)(th.animated.div, {
                className: nc.tw,
                style: {
                    opacity: (0, no.a)(O.to([0, 1], [1, 0])),
                    transform: O.to([0, 1], [1, 0.9]).to((e) => `scale(${e})`),
                    transformOrigin: "bottom left",
                },
                children: (0, r.jsxs)(C.B, {
                    gap: 4,
                    children: [
                        (0, r.jsx)(v.E, {
                            variant: "text-md/semibold",
                            color: "text-strong",
                            className: nc.Ht,
                            children: f,
                        }),
                        (0, r.jsxs)(C.B, {
                            align: "start",
                            direction: "horizontal",
                            gap: 8,
                            children: [
                                (0, r.jsxs)(C.B, {
                                    direction: "horizontal",
                                    gap: 4,
                                    fullWidth: !1,
                                    children: [
                                        (0, r.jsx)(ns.y, { size: "xs", color: ex.A.colors.ICON_MUTED.css }),
                                        (0, r.jsx)(v.E, {
                                            variant: "text-sm/normal",
                                            color: "text-muted",
                                            children: s.config.messages.gamePublisher,
                                        }),
                                    ],
                                }),
                                (0, r.jsxs)(C.B, {
                                    direction: "horizontal",
                                    gap: 4,
                                    fullWidth: !1,
                                    children: [
                                        (0, tL.pv)(s.config) === s5.Z.VIDEO
                                            ? (0, r.jsx)(nn.S, { size: "xs", color: ex.A.colors.ICON_MUTED.css })
                                            : (0, r.jsx)(tb._, { size: "xs", color: ex.A.colors.ICON_MUTED.css }),
                                        (0, r.jsx)(v.E, {
                                            variant: "text-sm/normal",
                                            color: "text-muted",
                                            children: _,
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),
            }),
            (0, r.jsx)(th.animated.div, {
                className: nc.um,
                style: { transform: O.to([0, 1], [100, 0]).to((e) => `translateY(${e}%)`) },
                children: (0, r.jsx)(g.$, {
                    fullWidth: !0,
                    onClick: (e) => {
                        e.stopPropagation(), R();
                    },
                    text: eh.intl.string(eh.t["th2+0j"]),
                }),
            }),
        ],
    });
}
var nh = s(648731);
function nE(e) {
    let { hero: t, shelfQuests: s, onQuestCtaClick: n } = e;
    return (0, r.jsx)(sR, {
        className: nh.v,
        children: (0, r.jsxs)(C.B, {
            direction: "horizontal",
            gap: 20,
            children: [
                (0, r.jsx)(t_.R, {
                    adContentId: t.id,
                    adCreativeType: sZ.p.QUEST_HOME_HERO,
                    questContent: Y.uF.QUEST_HOME_HERO_SHELF,
                    questContentPosition: 0,
                    sourceQuestContent: Y.uF.QUEST_HOME_HERO_SHELF,
                    children: (e) =>
                        (0, r.jsx)("div", {
                            ref: (t) => {
                                e.current = t;
                            },
                            children: (0, r.jsx)(nd, { hero: t, contentPosition: 0 }),
                        }),
                }),
                s.map((e, s) =>
                    (0, r.jsx)(
                        t_.R,
                        {
                            adContentId: t.id,
                            adCreativeType: sZ.p.QUEST_HOME_HERO,
                            questContent: Y.uF.QUEST_HOME_HERO_SHELF,
                            questContentPosition: s + 1,
                            sourceQuestContent: Y.uF.QUEST_HOME_HERO_SHELF,
                            children: (l) =>
                                (0, r.jsx)("div", {
                                    ref: (e) => {
                                        l.current = e;
                                    },
                                    children: (0, r.jsx)(nm, {
                                        heroId: t.id,
                                        quest: e,
                                        onQuestCtaClick: n,
                                        contentPosition: s + 1,
                                    }),
                                }),
                        },
                        e.id,
                    ),
                ),
            ],
        }),
    });
}
var nx = s(95115);
function ng() {
    return (0, r.jsx)("div", { className: nx.Np });
}
function nf(e) {
    let { heroImage: t, heroVideo: s } = e,
        n = a.useRef(null);
    (0, s1.A)(n, tK.rE.QUEST_HOME_DESKTOP);
    let l = a.useMemo(() => (null != s ? (0, tp.WV)(s) : null) ?? t, [s, t]);
    return null == s
        ? (0, r.jsxs)("div", {
              className: nx.Tv,
              children: [
                  (0, r.jsx)(ng, {}),
                  (0, r.jsx)("div", {
                      className: nx.LO,
                      children: (0, r.jsx)("img", { className: nx.LY, src: t, alt: "" }),
                  }),
                  (0, r.jsx)("div", {
                      className: o()(nx.LO, nx.jx, nx.hw),
                      children: (0, r.jsx)("img", { className: nx.LY, src: t, alt: "" }),
                  }),
                  (0, r.jsx)("div", {
                      className: o()(nx.LO, nx.jx, nx.Co),
                      children: (0, r.jsx)("img", { className: nx.LY, src: t, alt: "" }),
                  }),
              ],
          })
        : (0, r.jsxs)("div", {
              className: nx.Tv,
              children: [
                  (0, r.jsx)(ng, {}),
                  (0, r.jsx)("div", {
                      className: nx.LO,
                      children: (0, r.jsx)(tC.N, {
                          showImage: !1,
                          showVideo: !0,
                          assetRef: n,
                          imageAsset: {
                              alt: "",
                              className: nx.LY,
                              asset: { url: l, mimetype: (0, tp.vm)(l), isAnimated: !1 },
                              assetId: l,
                          },
                          videoAsset: {
                              alt: "",
                              className: nx.LY,
                              asset: { url: s, mimetype: (0, tp.vm)(s), isAnimated: !0 },
                              assetId: s,
                          },
                      }),
                  }),
              ],
          });
}
function nj(e) {
    let { hero: t, onQuestCtaClick: s } = e,
        n = (0, m.bG)([el.A], () => el.A.quests),
        { shelfQuests: l, isShelfEnabled: i } = (0, ee.t9)(t),
        { dismissQuestHomeHeroContent: o } = (0, s4.I)();
    a.useEffect(() => {
        o();
    }, [o]);
    let c = a.useMemo(() => t.questIds?.find((e) => n.has(e)), [n, t.questIds]);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(t_.R, {
                adContentId: t.id,
                adCreativeType: sZ.p.QUEST_HOME_HERO,
                questContent: Y.uF.QUEST_HOME_HERO,
                sourceQuestContent: Y.uF.QUEST_HOME_HERO,
                children: (e) =>
                    (0, r.jsx)(s3, {
                        ref: e,
                        adContentId: t.id,
                        topContent: (0, r.jsxs)(C.B, {
                            direction: "horizontal",
                            justify: "space-between",
                            align: "start",
                            children: [
                                null != t.sponsorImage &&
                                    (0, r.jsx)("img", { src: t.sponsorImage, alt: "", className: nx.wm }),
                                (0, r.jsx)(v.E, {
                                    color: "text-strong",
                                    variant: "text-sm/normal",
                                    className: nx.yu,
                                    children: eh.intl.string(eh.t.OJjFi5),
                                }),
                            ],
                        }),
                        title: t.labelTitle,
                        subtitle: t.labelSubtitle,
                        buttons: (0, r.jsxs)(x.e, {
                            children: [
                                (0, r.jsx)(g.$, {
                                    onClick: () => {
                                        (0, s0._Q)(
                                            { adContentId: t.id, adCreativeType: sZ.p.QUEST_HOME_HERO, cta: t.cta },
                                            {
                                                content: Y.uF.QUEST_HOME_HERO,
                                                ctaContent: et.Cy.OPEN_GAME_LINK,
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
                                    (0, r.jsx)(g.$, {
                                        onClick: () => {
                                            s(c),
                                                (0, sX.vK)({
                                                    adContentId: t.id,
                                                    adCreativeType: sZ.p.QUEST_HOME_HERO,
                                                    questContent: Y.uF.QUEST_HOME_HERO,
                                                    questContentCTA: et.Cy.VIEW_QUESTS,
                                                    sourceQuestContent: Y.uF.QUEST_HOME_HERO,
                                                });
                                        },
                                        size: "md",
                                        text: eh.intl.string(eh.t["th2+0j"]),
                                        variant: "color-mix",
                                    }),
                            ],
                        }),
                        background:
                            null != t.heroImage && (0, r.jsx)(nf, { heroImage: t.heroImage, heroVideo: t.heroVideo }),
                    }),
            }),
            i && (0, r.jsx)(nE, { hero: t, shelfQuests: l, onQuestCtaClick: s }),
        ],
    });
}
function nv() {
    return (0, r.jsx)("div", { className: o()(s8.iE, s8.FG, s8.B3), children: (0, r.jsx)(eu.y, {}) });
}
function np(e) {
    let { alt: t, ariaLabel: s, ariaHidden: n, role: l, width: a = 288, height: i = 192 } = e;
    return (0, r.jsx)("img", {
        style: { width: a, height: i },
        src: "https://cdn.discordapp.com/assets/content/f7e308880e4b4db999ae2e2c43f12f7882f717158ce2520aa36a9d60fb68c367.svg",
        alt: t,
        "aria-label": s,
        "aria-hidden": n,
        role: l ?? "img",
    });
}
var nC = s(298537);
let n_ = function (e) {
    let { matchingQuestIds: t } = e;
    return (0, r.jsxs)(C.B, {
        gap: 16,
        direction: "vertical",
        align: "start",
        className: nC.kL,
        children: [
            (0, r.jsxs)(j.D, {
                variant: "heading-lg/medium",
                children: [eh.intl.string(eh.t.giYD00), " (", t.length, ")"],
            }),
            0 === t.length
                ? (0, r.jsxs)(C.B, {
                      gap: 16,
                      direction: "vertical",
                      align: "center",
                      className: nC.y7,
                      children: [
                          (0, r.jsx)(np, { alt: eh.intl.string(eh.t["Xe+fJM"]) }),
                          (0, r.jsxs)(C.B, {
                              direction: "vertical",
                              align: "center",
                              children: [
                                  (0, r.jsx)(j.D, {
                                      variant: "heading-lg/medium",
                                      children: eh.intl.string(eh.t["Xe+fJM"]),
                                  }),
                                  (0, r.jsx)(j.D, {
                                      variant: "heading-sm/medium",
                                      children: eh.intl.string(eh.t["Tc/Ndl"]),
                                  }),
                              ],
                          }),
                      ],
                  })
                : (0, r.jsx)("div", {
                      className: nC.Vg,
                      style: {
                          "--custom-quest-search-tile-min-width": "382.6666666666667px",
                          "--custom-quest-grid-gap": "20px",
                      },
                      children: t.map((e, t) =>
                          (0, r.jsx)(
                              eG.Ay,
                              {
                                  eagerLoadAssets: !0,
                                  questId: e,
                                  questContent: Y.uF.QUEST_HOME_DESKTOP,
                                  contentPosition: t,
                                  rowIndex: Math.floor(t / 3),
                                  className: nC.d,
                                  sourceQuestContent: Y.uF.QUEST_HOME_DESKTOP,
                              },
                              e,
                          ),
                      ),
                  }),
        ],
    });
};
var nS = s(379078),
    nN = s(704554);
let nA = {
    searchType: nS.n.FUZZY,
    searchStringGenerator: (e) =>
        [
            e.messages.questName.toLowerCase(),
            e.messages.gameTitle.toLowerCase(),
            e.messages.gamePublisher.toLowerCase(),
        ].filter(e9.Vq),
    sortType: nS.r.JARO_WINKLER,
    throttleMs: 200,
};
var nb = s(758836),
    nT = s(613057),
    nO = s(935824);
let nR = a.createContext({});
function nI(e) {
    let { banner: t, children: s, header: n, withFullBleedBanner: l = !1 } = e,
        { onScroll: i, scrollerRef: o } = a.useContext(nR);
    return (0, r.jsxs)(sN.X.Provider, {
        value: o,
        children: [
            n,
            (0, r.jsxs)(q.A, {
                onScroll: i,
                ref: o,
                children: [
                    l && t,
                    (0, r.jsxs)(w.A, { className: nO.Jo, innerClassName: nO.FG, children: [!l && t, s] }),
                ],
            }),
        ],
    });
}
function nL(e) {
    let { selectedTab: t, onSelectTab: s, tabs: n, endContent: l } = e;
    return (0, r.jsx)(F.S, { selectedTabId: t, handleTransition: s, tabs: n, endContent: l, icon: E.r });
}
function ny(e) {
    let { onLoadComplete: t, className: s } = e,
        { enabled: n } = (0, B.Z)({ location: tK.rE.QUEST_HOME_DESKTOP }),
        l = (0, m.bG)([N.A], () => N.A.useReducedMotion),
        i = (0, m.bG)([W.A], () => W.A.isFocused()),
        { ref: o, inViewport: c } = (0, e5.p)(),
        u = a.useRef(null);
    if (
        (a.useEffect(() => {
            u?.current != null &&
                (u.current.paused || (i && c && !l)
                    ? u.current.paused && !l && c && i && u.current.play()
                    : u.current.pause());
        }, [l, c, i]),
        n)
    ) {
        let e = (0, z.TM)();
        return (0, r.jsx)(L.A, {
            ref: (e) => {
                (u.current = e), (o.current = e);
            },
            loop: !0,
            muted: !0,
            playsInline: !0,
            className: s,
            onProgress: t,
            "data-mtctest-ignore": "true",
            controls: !1,
            children: (0, r.jsx)("source", {
                src: e
                    ? "https://cdn.discordapp.com/assets/content/529e0aea2b87be4a587568435eaac176bf71b8dd46035db9c88acdee11187eb8.mp4"
                    : "https://cdn.discordapp.com/assets/content/fbd6cf99b9be35ba1d953fd30b81a35c9bd8edf7808b576ef6fc7c65cbc1d9a6.webm",
                type: e ? "video/mp4" : "video/webm",
            }),
        });
    }
    return (0, r.jsx)("img", {
        src: "https://cdn.discordapp.com/assets/content/fff9144c814ffc3126fdcaf5ec5bc68eff6d09e23ac8af5a3fbe61b05970cda0.png",
        className: s,
        alt: "",
        onLoad: t,
    });
}
function nM(e) {
    let { onAssetLoad: t } = e,
        { enabled: s } = (0, B.Z)({ location: tK.rE.QUEST_HOME_DESKTOP });
    return (0, r.jsxs)("div", {
        className: o()(nO.Tv, { [nO.lJ]: s }),
        children: [
            (0, r.jsx)(ng, {}),
            (0, r.jsx)("div", { className: o()(nO.nz, { [nO.ZZ]: s }) }),
            (0, r.jsx)(ny, { onLoadComplete: t, className: o()(nO.Fe, { [nO.H4]: s, [nO.Q8]: !s }) }),
        ],
    });
}
function nQ(e) {
    let { onAssetLoad: t } = e,
        { enabled: s } = (0, B.Z)({ location: tK.rE.QUEST_HOME_DESKTOP }),
        n = a.useCallback(() => {
            s ? window.open(e_.X7G.PAID_TERMS_ORBS) : window.open(K.A.getArticleURL(e_.MVz.QUESTS_LEARN_MORE));
        }, [s]);
    return (0, r.jsx)(s3, {
        adContentId: s ? tK.yr : tK.uz,
        title: s ? eh.intl.format(eh.t.BCBIlp, {}) : eh.intl.format(eh.t.lmMBfy, {}),
        subtitle: s ? eh.intl.format(eh.t.U9FY0J, {}) : eh.intl.string(eh.t.oWCrBq),
        buttons: s
            ? (0, r.jsxs)(x.e, {
                  children: [
                      (0, r.jsx)(g.$, {
                          variant: "overlay-primary",
                          text: eh.intl.string(eh.t["1Wm127"]),
                          onClick: () =>
                              (0, R.Cz)({
                                  tab: nb.G2.ORBS,
                                  analyticsLocations: [],
                                  analyticsSource: A.A.INTRO_TO_ORBS_QUEST_BANNER,
                              }),
                      }),
                      (0, r.jsx)(g.$, {
                          variant: "overlay-secondary",
                          text: eh.intl.string(eh.t["7kTAgJ"]),
                          onClick: n,
                      }),
                  ],
              })
            : (0, r.jsx)(g.$, {
                  variant: "overlay-primary",
                  text: eh.intl.string(eh.t.hvVgAZ),
                  onClick: n,
                  icon: f.I,
                  iconPosition: "end",
              }),
        background: (0, r.jsx)(nM, { onAssetLoad: t }),
    });
}
function nU(e) {
    let { onAssetLoad: t, onQuestCtaClick: s, questHomeHero: n, isLoadingQuestHomeHero: l, hasSearchResults: a } = e;
    return (0, r.jsx)("div", {
        className: o()(nO.iS, { [nO.R]: a }),
        children: l
            ? (0, r.jsx)(nv, {})
            : null != n
              ? (0, r.jsx)(nj, { hero: n, onQuestCtaClick: s })
              : (0, r.jsx)(nQ, { onAssetLoad: t }),
    });
}
function nH(e) {
    let { onLoadComplete: t } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("img", {
                src: "https://cdn.discordapp.com/assets/content/d98012b9ee9cd22196a88553f0759a25a9440c77cde05c213d7fc1dc5d2204ed.png",
                className: o()(nO.BW, nO.rZ),
                alt: "",
            }),
            (0, r.jsx)("img", {
                src: "https://cdn.discordapp.com/assets/content/a6d2ca43eeff679daac9dabb5f6a5d87d6524ea5b80ff2d1eb2175422691e79b.png",
                className: o()(nO.BW, nO.rZ),
                alt: "",
                onLoad: t,
            }),
            (0, r.jsx)("img", {
                src: "https://cdn.discordapp.com/assets/content/281e35023b2cb94e77c23ab1522732b01f26e71689e4e72b4a514f5385ae08e1.png",
                className: o()(nO.BW, nO.rZ),
                alt: "",
            }),
        ],
    });
}
let nD = function (e) {
    let { topLevelRoute: t } = e,
        s = (0, c.zy)(),
        n = (0, c.W6)(),
        l = a.useMemo(() => (0, P.B)(s.pathname, e_.BVt.QUEST_HOME_DEPRECATED)?.isExact === !0, [s.pathname]),
        i = a.useMemo(() => new URLSearchParams(s.search).get(ee.L1.AD_CREATIVE_IDS), [s.search]),
        E = (0, m.bG)([O.A], () => O.A.getState("quests")),
        {
            selectedTab: x,
            onSelectTab: f,
            tabs: N,
        } = (function (e) {
            let { withClaimedQuestsTab: t = !0 } = e,
                s = J.A.useField("tab"),
                n = (0, c.zy)(),
                l = (0, ee.p5)(),
                { enabled: r } = X.A8.useConfig({ location: tK.rE.QUEST_HOME_DESKTOP });
            a.useEffect(() => {
                J.A.getState().initializeFromUrl(n.search, l);
            }, [n.search, l]);
            let i = a.useCallback((e) => {
                J.A.getState().setTab(e);
            }, []);
            return {
                tabs: a.useMemo(
                    () =>
                        [
                            { id: ee.NC.ALL, label: r ? eh.intl.string(eh.t.Jt6u7B) : eh.intl.string(eh.t["0SzXmi"]) },
                            t
                                ? {
                                      id: ee.NC.CLAIMED,
                                      label: r ? eh.intl.string(eh.t["3TVY/R"]) : eh.intl.string(eh.t.zyNYNB),
                                  }
                                : null,
                            t && l ? { id: ee.NC.PREVIEW_TOOL, label: eh.intl.string(eh.t.BDUDau) } : null,
                        ].filter(e9.Vq),
                    [t, l, r],
                ),
                selectedTab: s,
                onSelectTab: i,
            };
        })({ withClaimedQuestsTab: !l }),
        {
            query: L,
            setQuery: M,
            matchingQuestIds: Q,
        } = (() => {
            let [e, t] = a.useState(""),
                [s, n] = a.useState(null),
                l = (0, m.yK)([el.A], () =>
                    (0, ee.mn)(Array.from(el.A.quests.values()), { sortMethod: tK.kL.SUGGESTED }).map((e) => e.config),
                ),
                r = e.trim().toLowerCase(),
                i = "" !== r,
                o = a.useCallback(
                    (e) => {
                        n(
                            i
                                ? e
                                      .map((e) => {
                                          let { id: t } = e;
                                          return t;
                                      })
                                      .filter(e9.Vq)
                                : null,
                        );
                    },
                    [i],
                );
            return (0, nN.RT)(r, l, o, nA), { matchingQuestIds: s, query: e, setQuery: t };
        })();
    a.useLayoutEffect(() => {
        l && x === ee.NC.CLAIMED && J.A.setState({ tab: ee.NC.ALL });
    }, [l, x]);
    let { onScroll: w } = (0, H.G)(),
        F = Z.A.getState().getUtmCurrentContext(),
        q = sY((e) => e.registerAssetLoad),
        W = a.useRef(F);
    a.useEffect(() => {
        W.current = F;
    }),
        a.useEffect(() => {
            let { current: e } = W;
            (0, b.x)({
                name: d.ImpressionNames.QUEST_HOME,
                type: d.ImpressionTypes.VIEW,
                properties: {
                    utm_source_current: e.utmSourceCurrent,
                    utm_medium_current: e.utmMediumCurrent,
                    utm_campaign_current: e.utmCampaignCurrent,
                    utm_content_current: e.utmContentCurrent,
                    tab: x,
                },
            });
        }, [x]);
    let { enabled: z } = (0, B.Z)({ location: tK.rE.QUEST_HOME_DESKTOP });
    (0, I.HU)({ location: eh.intl.string(eh.t.JALI2K) });
    let K = a.useRef(null),
        { enabled: es } = X.A8.useConfig({ location: tK.rE.QUEST_HOME_DESKTOP }),
        en = a.useRef(null),
        er = a.useCallback((e) => {
            en.current?.scrollToQuest(e);
        }, []),
        ea = a.useMemo(() => ((0, $.uJ)(s.hash) ? null : s.hash.substring(1)), [s.hash]),
        { questHomeHero: ei, isLoading: eo } = (0, ee.lg)(i),
        ec = a.useCallback(() => {
            (0, k.Y)({
                pageType: e_.liQ.GLOBAL_DISCOVERY_QUESTS,
                sectionType: e_.JJy.ORBS_BALANCE_MENU,
                ctaObject: e_.ZSU.CTA_TO_ORBS_SHOP,
            }),
                (0, R.Cz)({ tab: nb.G2.ORBS, analyticsLocations: [], analyticsSource: A.A.ORBS_BALANCE_MENU });
        }, []);
    a.useEffect(() => {
        (0, S.I)(e_.BVt.QUEST_HOME);
    }, []),
        a.useEffect(() => {
            U.trigger();
        }, []),
        a.useEffect(() => {
            if (null != E) return;
            let e = new URLSearchParams(s.search),
                l = e.get(ee.L1.TAB);
            if (l === ee.NC.PREVIEW_TOOL) {
                let t = e.get(ee.L1.QUEST_ID);
                T.A.openNativeAppModal("quests", e_.e$_.DEEP_LINK, {
                    type: nT.XK.QUEST_PREVIEW_TOOL,
                    params: { questId: t, tab: l },
                });
                return;
            }
            let r = performance.getEntriesByType("navigation")[0];
            if ("POP" === n.action && r?.type === "navigate" && t && l !== ee.NC.PREVIEW_TOOL) {
                let t = (0, $.uJ)(s.hash) ? null : s.hash.substring(1),
                    n = e.get(ee.L1.SORT),
                    r = e.get(ee.L1.FILTER),
                    a = e.get(ee.L1.AD_CREATIVE_IDS);
                T.A.openNativeAppModal("quests", e_.e$_.DEEP_LINK, {
                    type: nT.XK.QUEST_HOME,
                    params: { questId: (0, $.uJ)(t) ? void 0 : t, sort: n, filter: r, tab: l, adCreativeIds: a },
                });
            }
        }, [s.search, E, n.action, s.hash, t]),
        a.useEffect(() => {
            t && (0, y.Dr)(h.M.QUEST_HOME_ENTRYPOINT_ONBOARDING);
        }, [t]);
    let eu = a.useCallback(() => {
            (0, e4.navigateToQuestHome)({ fromContent: Y.uF.QUEST_HOME_MOVE_CALLOUT_DISCOVER }),
                G.default.track(e_.HAw.QUEST_CONTENT_CLICKED, {
                    cta_name: et.Cy.VIEW_QUESTS,
                    click_id: (0, u.A)(),
                    is_targeted: !1,
                    ...(0, et.fF)(Y.uF.QUEST_HOME_MOVE_CALLOUT_DISCOVER),
                });
        }, []),
        ed = a.useCallback(
            (e) => {
                n.replace({ ...n.location, hash: void 0 }), K.current?.scrollToTop({ animate: !1 }), f(e);
            },
            [n, f],
        ),
        em = a.useCallback(() => {
            M("");
        }, [M]),
        eE = a.useMemo(() => null != Q && es, [Q, es]);
    return (0, r.jsx)(sJ.M.Provider, {
        value: a.useMemo(() => ({ onAssetLoadComplete: q }), [q]),
        children: (0, r.jsx)(nR.Provider, {
            value: a.useMemo(() => ({ onScroll: w, scrollerRef: K }), [w, K]),
            children: (0, r.jsx)("div", {
                className: o()(nO.kL, { [nO.KY]: !t }),
                children: l
                    ? (0, r.jsx)(nI, {
                          withFullBleedBanner: !0,
                          header: (0, r.jsx)(nL, { selectedTab: x, onSelectTab: ed, tabs: N }),
                          banner: (0, r.jsx)(D.A, {
                              title: eh.intl.string(eh.t.z8YP2A),
                              titleColor: "always-white",
                              button: (0, r.jsx)(g.$, {
                                  variant: "overlay-primary",
                                  text: eh.intl.string(eh.t.GURBQl),
                                  onClick: eu,
                              }),
                              className: nO.Gj,
                              children: (0, r.jsx)(nH, { onLoadComplete: q }),
                          }),
                          children: (0, r.jsxs)("div", {
                              className: nO.kj,
                              children: [
                                  (0, r.jsx)(j.D, {
                                      variant: "heading-xl/semibold",
                                      children: eh.intl.string(eh.t.z8YP2A),
                                  }),
                                  (0, r.jsx)(v.E, {
                                      color: "text-subtle",
                                      variant: "text-md/normal",
                                      children: eh.intl.string(eh.t.HdKh65),
                                  }),
                                  (0, r.jsx)(p.Q, {
                                      text: eh.intl.string(eh.t["1CdL8d"]),
                                      onClick: eu,
                                      textVariant: "text-md/normal",
                                      variant: "primary",
                                  }),
                              ],
                          }),
                      })
                    : (0, r.jsxs)(nI, {
                          header: (0, r.jsx)(nL, {
                              selectedTab: x,
                              onSelectTab: ed,
                              tabs: N,
                              endContent: (0, r.jsxs)(C.B, {
                                  gap: 8,
                                  direction: "horizontal",
                                  align: "center",
                                  justify: "end",
                                  children: [
                                      es &&
                                          (0, r.jsx)(_.I, {
                                              query: L,
                                              onChange: M,
                                              placeholder: eh.intl.string(eh.t.y10TI2),
                                              onClear: em,
                                              size: "sm",
                                          }),
                                      z &&
                                          (0, r.jsx)(V.SS, {
                                              analyticsPage: e_.liQ.GLOBAL_DISCOVERY_QUESTS,
                                              cardAlignment: V.cP.END,
                                              ctaText: eh.intl.string(eh.t["J+vlIR"]),
                                              ctaOnClick: ec,
                                          }),
                                  ],
                              }),
                          }),
                          banner:
                              x === ee.NC.ALL &&
                              (0, r.jsx)(nU, {
                                  onAssetLoad: q,
                                  onQuestCtaClick: er,
                                  hasSearchResults: eE,
                                  questHomeHero: ei,
                                  isLoadingQuestHomeHero: eo,
                              }),
                          children: [
                              eE && null != Q && (0, r.jsx)(n_, { matchingQuestIds: Q }),
                              x === ee.NC.CLAIMED
                                  ? (0, r.jsx)(sj, { onSelectTab: ed, className: eE ? nO.R : void 0 })
                                  : x === ee.NC.PREVIEW_TOOL
                                    ? (0, r.jsx)(e3, { className: eE ? nO.R : void 0 })
                                    : es
                                      ? (0, r.jsx)(sG, {
                                            className: eE ? nO.R : void 0,
                                            ref: en,
                                            deepLinkedQuestId: ea,
                                            isLoadingQuestHomeHero: eo,
                                        })
                                      : (0, r.jsx)(t9, { ref: en }),
                          ],
                      }),
            }),
        }),
    });
};
