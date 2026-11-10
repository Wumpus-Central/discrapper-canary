t.d(n, {
    Hd: () => N.H,
    yw: () => I.y,
    Nk: () => ec,
    KT: () => ex,
    _x: () => e5,
    F1: () => d,
    gy: () => ne,
    DT: () => e9,
    um: () => i.um,
    ZF: () => h.Z,
    Dq: () => o.D,
    RI: () => c,
    GH: () => _,
    oM: () => S,
    yf: () => e8,
});
var l = t(131904),
    i = t(726362),
    a = t(677166),
    r = t(137005),
    s = t(792996);
function u(e) {
    return "" !== e ? e : null;
}
function d(e) {
    return (0, a.fk)(e, "guild_settings") ? u(s.intl.string(r.default.tdhddn)) : null;
}
function c(e) {
    if (!(0, a.C)(e, "guild_settings")) return null;
    let n = u(s.intl.string(r.default.tdhddn)),
        t = u(s.intl.string(r.default.pOYEzT));
    return null != n && null != t ? { title: n, description: t } : null;
}
var o = t(396022),
    h = t(96787),
    f = t(582128),
    m = t(855986),
    g = t(73153);
let x = new Set();
class p extends m.Ay.PersistedStore {
    static displayName = "PinotMemberNoticeAckStore";
    static persistKey = "PinotMemberNoticeAckStore";
    initialize(e) {
        x = new Set(e?.ackedChannelIds ?? []);
    }
    getState() {
        return { ackedChannelIds: Array.from(x) };
    }
    isHidden(e) {
        return x.has(e) || x.size >= 2;
    }
}
let b = new p(g.h, {
    PINOT_MEMBER_NOTICE_ACK: function (e) {
        let { channelId: n } = e;
        if (x.has(n)) return !1;
        x = new Set([...x, n]);
    },
});
var j = t(542744),
    E = t(84877),
    v = t(885902),
    y = t(56919);
let A = { visible: !1 };
function _(e, n) {
    let t = (0, v.F)(e, n),
        l = (0, a.Hg)(null != t ? e?.guild_id : null, n),
        i = (0, E.Z)(e),
        r = (0, y.m)(e, n),
        s = l && i && !r ? t : null,
        u = (0, m.bG)([b], () => null != s && b.isHidden(s), [s]),
        d = f.useCallback(() => {
            null != s && (0, j.G)(s);
        }, [s]);
    return f.useMemo(() => (null == s || u ? A : { visible: !0, dismiss: d }), [s, u, d]);
}
function S() {
    return (0, m.bG)([l.A], () => l.A.getOpenFeatureKey());
}
var N = t(464075),
    I = t(698940),
    C = t(477900),
    T = t(503698),
    M = t.n(T),
    R = t(939249),
    B = t(646514),
    k = t(834730),
    O = t(658675),
    D = t(331322),
    w = t(408278),
    L = t(477155),
    P = t(534514),
    F = t(123292),
    z = t(683438),
    G = t(404778),
    H = t(975571),
    U = t(391523),
    W = t(210470),
    K = t(22464),
    V = t(713654);
function $(e) {
    let { channel: n, ...t } = e,
        l = (0, V.gU)(n);
    return null == l ? null : (0, C.jsx)(l, { ...t, "aria-hidden": !0 });
}
let X = { [K.y.CHANNEL_SUMMARIES]: r.default["+ELXr0"], [K.y.CHANNEL_MESSAGES]: r.default.HvBP0Z },
    q = { [K.y.CHANNEL_SUMMARIES]: r.default.uImIFo, [K.y.CHANNEL_MESSAGES]: r.default.nHVK4t };
var Y = t(47167),
    Z = t(734057),
    Q = t(994500),
    J = t(287809),
    ee = t(403362);
function en(e) {
    let n = (0, m.yK)([Z.A], () => e.map((e) => Z.A.getChannel(e)).filter(ee.Vq), [e]),
        t = (0, m.yK)([J.default, Q.A], () => n.map((e) => (0, Y.m1)(e, J.default, Q.A)), [n]);
    return f.useMemo(() => n.map((e, n) => ({ channel: e, name: t[n] })), [n, t]);
}
var et = t(652215),
    el = t(217494);
let ei = { [K.y.CHANNEL_SUMMARIES]: r.default["vgmc/d"], [K.y.CHANNEL_MESSAGES]: r.default.MFxb27 };
function ea(e) {
    let { channel: n, name: t, checked: l, disabled: i, onToggle: a } = e;
    return (0, C.jsxs)(R.D, {
        role: "checkbox",
        "aria-checked": l,
        "aria-disabled": i,
        className: M()(el.WG, { [el.GC]: i }),
        onClick: i ? void 0 : () => a(n.id, !l),
        children: [
            (0, C.jsx)($, { channel: n, size: "xs", color: B.A.colors.ICON_SUBTLE }),
            (0, C.jsx)(k.E, {
                variant: "body-md/medium",
                color: "text-default",
                lineClamp: 1,
                className: el.HA,
                children: t,
            }),
            (0, C.jsx)(O.P, { checked: l, disabled: i }),
        ],
    });
}
function er() {
    (0, i.lF)(null);
}
function es(e) {
    let { featureTitle: n } = e;
    return (0, C.jsxs)(D.B, {
        direction: "horizontal",
        align: "center",
        gap: 8,
        children: [
            (0, C.jsx)(w.K, {
                icon: L.ArrowSmallLeftIcon,
                "aria-label": s.intl.string(s.t["13/7kX"]),
                variant: "icon-only",
                size: "sm",
                onClick: er,
            }),
            (0, C.jsx)("nav", {
                "aria-label": s.intl.string(s.t["bM+M/m"]),
                className: el.m7,
                children: (0, C.jsxs)(D.B, {
                    as: "ol",
                    direction: "horizontal",
                    align: "center",
                    gap: 4,
                    role: "list",
                    className: el.jD,
                    children: [
                        (0, C.jsxs)(D.B, {
                            as: "li",
                            direction: "horizontal",
                            align: "center",
                            gap: 4,
                            fullWidth: !1,
                            className: el.QF,
                            children: [
                                (0, C.jsx)(R.D, {
                                    onClick: er,
                                    className: el.WU,
                                    children: (0, C.jsx)(k.E, {
                                        variant: "body-md/normal",
                                        color: "none",
                                        lineClamp: 1,
                                        children: s.intl.string(r.default.tdhddn),
                                    }),
                                }),
                                (0, C.jsx)(k.E, {
                                    variant: "body-md/normal",
                                    color: "interactive-text-default",
                                    "aria-hidden": !0,
                                    children: "/",
                                }),
                            ],
                        }),
                        (0, C.jsx)("li", {
                            "aria-current": "page",
                            className: el.RF,
                            children: (0, C.jsx)(k.E, {
                                variant: "body-md/medium",
                                color: "text-default",
                                children: n,
                            }),
                        }),
                    ],
                }),
            }),
        ],
    });
}
function eu(e) {
    let { featureKey: n, featureTitle: t } = e,
        l = f.useRef(null);
    return (
        f.useEffect(() => {
            let e = l.current;
            null != e && ((e.tabIndex = -1), e.focus());
        }, [l, n]),
        (0, C.jsxs)(D.B, {
            gap: 4,
            children: [
                (0, C.jsx)(P.D, { ref: l, variant: "heading-lg/medium", children: t }),
                (0, C.jsx)(k.E, {
                    variant: "body-sm/normal",
                    color: "text-subtle",
                    children: s.intl.format(q[n], { learnMoreURL: H.A.getArticleURL(et.MVz.SERVER_WEB_PAGES_ADMIN) }),
                }),
            ],
        })
    );
}
function ed(e) {
    let { guildId: n, featureKey: t, feature: l, draft: a, disabled: u } = e,
        [d, c] = f.useState(""),
        o = f.useId(),
        h = en(f.useMemo(() => (0, W.Dq)(l), [l])),
        m = a.includedChannelIds,
        g = h.map((e) => {
            let { channel: n } = e;
            return n.id;
        }),
        x = g.filter((e) => m.has(e)).length,
        p = g.length > 0 && x === g.length,
        b = d.trim().toLocaleLowerCase(),
        j = h.filter((e) => {
            let { name: n } = e;
            return n.toLocaleLowerCase().includes(b);
        });
    function E(e, l) {
        let a = new Set(m);
        for (let n of e) l ? a.add(n) : a.delete(n);
        (0, i.lv)(n, t, { includedChannelIds: a });
    }
    return (0, C.jsxs)(D.B, {
        gap: 16,
        children: [
            (0, C.jsxs)(D.B, {
                direction: "horizontal",
                align: "center",
                justify: "space-between",
                children: [
                    (0, C.jsx)(k.E, {
                        id: o,
                        variant: "body-md/medium",
                        color: "text-default",
                        children: s.intl.string(ei[t]),
                    }),
                    g.length > 0
                        ? (0, C.jsxs)(D.B, {
                              direction: "horizontal",
                              align: "center",
                              gap: 8,
                              fullWidth: !1,
                              children: [
                                  (0, C.jsx)("span", {
                                      "aria-live": "polite",
                                      "aria-atomic": "true",
                                      children: (0, C.jsx)(k.E, {
                                          tag: "span",
                                          variant: "body-sm/normal",
                                          color: "text-subtle",
                                          children: s.intl.format(r.default.KaAdWl, { count: x }),
                                      }),
                                  }),
                                  (0, C.jsx)(k.E, {
                                      tag: "span",
                                      variant: "body-sm/normal",
                                      color: "text-subtle",
                                      "aria-hidden": "true",
                                      children: "\u2022",
                                  }),
                                  (0, C.jsx)(F.Q, {
                                      text: s.intl.string(p ? r.default.MECJZo : s.t.l4rqaz),
                                      textVariant: "body-sm/semibold",
                                      onClick: () => E(g, !p),
                                      disabled: u,
                                      "aria-describedby": o,
                                  }),
                              ],
                          })
                        : null,
                ],
            }),
            g.length > 0
                ? (0, C.jsxs)(D.B, {
                      gap: 8,
                      children: [
                          (0, C.jsx)(z.I, {
                              query: d,
                              onChange: c,
                              onClear: () => c(""),
                              placeholder: s.intl.string(s.t.wM7uRI),
                              "aria-label": s.intl.string(s.t.wM7uRI),
                          }),
                          (0, C.jsxs)("div", {
                              children: [
                                  j.length > 0
                                      ? (0, C.jsx)("div", {
                                            role: "group",
                                            "aria-labelledby": o,
                                            className: el.o5,
                                            children: j.map((e, n) => {
                                                let { channel: t, name: l } = e;
                                                return (0, C.jsxs)(
                                                    f.Fragment,
                                                    {
                                                        children: [
                                                            n > 0 ? (0, C.jsx)(G.c, {}) : null,
                                                            (0, C.jsx)(ea, {
                                                                channel: t,
                                                                name: l,
                                                                checked: m.has(t.id),
                                                                disabled: u,
                                                                onToggle: (e, n) => E([e], n),
                                                            }),
                                                        ],
                                                    },
                                                    t.id,
                                                );
                                            }),
                                        })
                                      : null,
                                  (0, C.jsx)("div", {
                                      "aria-live": "polite",
                                      children:
                                          0 === j.length
                                              ? (0, C.jsx)(k.E, {
                                                    variant: "body-sm/normal",
                                                    color: "text-muted",
                                                    children: s.intl.string(s.t.f5cMAg),
                                                })
                                              : null,
                                  }),
                              ],
                          }),
                      ],
                  })
                : null,
        ],
    });
}
function ec(e) {
    let { guildId: n, featureKey: t, disabled: i } = e,
        {
            feature: a,
            draft: r,
            saving: u,
        } = (0, m.cf)([l.A], () => ({
            feature: l.A.getFeatures(n)?.[t] ?? null,
            draft: l.A.getDraft(n, t),
            saving: l.A.isSaving(),
        })),
        d = f.useRef(null);
    f.useEffect(() => {
        null != a && null != r && d.current !== t && ((d.current = t), (0, U.Dv)(n, "channel_list", t, a, r));
    }, [n, t, a, r]);
    let c = s.intl.string(X[t]);
    return (0, C.jsxs)(D.B, {
        gap: 48,
        children: [
            (0, C.jsx)(es, { featureTitle: c }),
            (0, C.jsxs)(D.B, {
                gap: 24,
                children: [
                    (0, C.jsx)(eu, { featureKey: t, featureTitle: c }),
                    null != a && null != r
                        ? (0, C.jsx)(ed, { guildId: n, featureKey: t, feature: a, draft: r, disabled: i || u })
                        : null,
                ],
            }),
        ],
    });
}
var eo = t(28863),
    eh = t(559106),
    ef = t(789645);
let em = "M10.3426 2.92826C9.14163 1.42704 6.85837 1.42704 5.65739 2.92826L0 10L16 10L10.3426 2.92826Z";
var eg = t(26005);
function ex(e) {
    let { channel: n, onDismiss: t } = e,
        l = s.intl.string(s.t.WAI6xu);
    return (
        f.useEffect(() => {
            (0, U.Ws)({ noticeType: "member_channel", channel: n });
        }, [n.id]),
        (0, C.jsxs)("div", {
            className: eg.M0,
            children: [
                (0, C.jsxs)("svg", {
                    className: eg.UE,
                    "aria-hidden": !0,
                    width: 16,
                    height: 10,
                    viewBox: "0 0 16 10",
                    fill: "none",
                    children: [
                        (0, C.jsx)("path", { d: em, fill: "var(--background-base-lower)" }),
                        (0, C.jsx)("path", { d: em, fill: "var(--background-feedback-mod-info)" }),
                        (0, C.jsx)("path", {
                            d: "M0.0546875 10L6.06543 3.1543C7.06567 1.9321 8.93433 1.9321 9.93457 3.1543L15.9453 10",
                            stroke: "var(--border-subtle)",
                        }),
                    ],
                }),
                (0, C.jsx)(k.E, {
                    variant: "body-sm/normal",
                    color: "text-default",
                    className: eg.Qq,
                    children: s.intl.format(r.default.XRu92R, {
                        learnMoreHook: (e, t) =>
                            (0, C.jsx)(
                                eo.Anchor,
                                {
                                    href: H.A.getArticleURL(et.MVz.DISCOVERABLE_CONTENT_ON_THE_WEB),
                                    onClick: () =>
                                        (0, U.Yy)({ noticeType: "member_channel", channel: n }, "learn_more"),
                                    children: e,
                                },
                                t,
                            ),
                    }),
                }),
                (0, C.jsx)(eh.vN, {
                    children: (0, C.jsx)("button", {
                        type: "button",
                        className: eg.VN,
                        "aria-label": l,
                        onClick: function () {
                            ((0, U.Yy)({ noticeType: "member_channel", channel: n }, "dismiss"), t());
                        },
                        children: (0, C.jsx)(ef.XSmallIcon, { size: "sm", color: "currentColor" }),
                    }),
                }),
            ],
        })
    );
}
var ep = t(707554),
    eb = t(805251);
t(321073);
var ej = t(3666),
    eE = t(143129),
    ev = t(881636),
    ey = t(405597);
let eA = [];
function e_(e) {
    let { channels: n } = e,
        t = f.useMemo(() => {
            let e = n.slice(0, 3).map((e) => ({ ...e, key: e.channel.id }));
            return (n.length > 3 && e.push(s.intl.formatToPlainString(s.t.F6iMs4, { count: n.length - 3 })), e);
        }, [n]),
        l = n[0]?.channel.id,
        i = f.useCallback(
            (e) =>
                "string" == typeof e
                    ? (0, C.jsxs)(
                          k.E,
                          { variant: "body-sm/medium", color: "none", className: ey.dX, children: [", ", e] },
                          e,
                      )
                    : (0, C.jsxs)(
                          k.E,
                          {
                              variant: "body-sm/medium",
                              color: "none",
                              className: ey.ph,
                              children: [
                                  e.key !== l ? ", " : null,
                                  (0, C.jsx)($, {
                                      channel: e.channel,
                                      size: "custom",
                                      width: 14,
                                      height: 14,
                                      color: "currentColor",
                                      className: ey.p,
                                  }),
                                  e.name,
                              ],
                          },
                          e.key,
                      ),
            [l],
        ),
        a = f.useCallback(
            (e) => i(s.intl.formatToPlainString(s.t.F6iMs4, { count: n.length - t.length + e.length })),
            [i, n.length, t.length],
        );
    return 0 === t.length
        ? (0, C.jsx)(k.E, { variant: "body-sm/medium", color: "none", children: s.intl.string(s.t.PoWNfe) })
        : (0, C.jsx)(ej.ZV, { className: ey.yQ, items: t, renderItem: i, renderOverflow: a, maxLines: 1 });
}
function eS(e) {
    let { guildId: n, featureKey: t, disabled: a } = e,
        { feature: u, draft: d } = (0, m.cf)([l.A], () => ({
            feature: l.A.getFeatures(n)?.[t] ?? null,
            draft: l.A.getDraft(n, t),
        })),
        c = f.useRef(null);
    f.useEffect(() => {
        l.A.getFocusReturnFeatureKey() === t && c.current?.focus();
    }, [t]);
    let o = en(
        f.useMemo(
            () => (null != u && null != d ? (0, W.Dq)(u).filter((e) => d.includedChannelIds.has(e)) : eA),
            [u, d],
        ),
    );
    if (null == u || null == d) return null;
    let h = s.intl.string(X[t]),
        g = o.length;
    return (0, C.jsxs)(D.B, {
        gap: 12,
        children: [
            (0, C.jsxs)(D.B, {
                direction: "horizontal",
                align: "center",
                justify: "space-between",
                gap: 24,
                children: [
                    (0, C.jsxs)(D.B, {
                        gap: 4,
                        className: ey.oo,
                        "data-disabled": a,
                        children: [
                            (0, C.jsx)(k.E, { variant: "body-md/medium", children: h }),
                            (0, C.jsx)(k.E, {
                                variant: "body-sm/normal",
                                color: "text-subtle",
                                children: s.intl.format(q[t], {
                                    learnMoreURL: H.A.getArticleURL(et.MVz.SERVER_WEB_PAGES_ADMIN),
                                }),
                            }),
                        ],
                    }),
                    (0, C.jsx)(eE.d, {
                        label: h,
                        hideLabel: !0,
                        checked: d.enabled,
                        disabled: a,
                        onChange: (e) => (0, i.lv)(n, t, { enabled: e }),
                    }),
                ],
            }),
            d.enabled
                ? (0, C.jsxs)(R.D, {
                      innerRef: c,
                      className: ey.ag,
                      "aria-label": s.intl.formatToPlainString(r.default["7iIGZ2"], { featureTitle: h, count: g }),
                      onClick: () => (0, i.lF)(t),
                      children: [
                          (0, C.jsx)(k.E, {
                              variant: "body-sm/medium",
                              color: "none",
                              className: ey.Ao,
                              children: s.intl.string(r.default["ZS+NM3"]),
                          }),
                          (0, C.jsxs)(D.B, {
                              direction: "horizontal",
                              align: "center",
                              justify: "end",
                              gap: 12,
                              fullWidth: !1,
                              className: ey.$n,
                              children: [
                                  (0, C.jsx)(e_, { channels: o }),
                                  (0, C.jsx)(ev.ChevronLargeRightIcon, { size: "refresh_sm", color: "currentColor" }),
                              ],
                          }),
                      ],
                  })
                : null,
        ],
    });
}
var eN = t(536637),
    eI = t.n(eN),
    eC = t(620632),
    eT = t(778492),
    eM = t(276293),
    eR = t(866665),
    eB = t(509434),
    ek = t(241326),
    eO = t(821609),
    eD = t(673185),
    ew = t(265872),
    eL = t(165862),
    eP = t(477782),
    eF = t(847374),
    ez = t(972213),
    eG = t(192308),
    eH = t(95477),
    eU = t(691885),
    eW = t(732159),
    eK = t(683071),
    eV = t(224640),
    e$ = t(565645),
    eX = t(603013);
(t(323874), t(14289), t(35956));
var eq = t(998218);
function eY(e) {
    return /^[1-9]\d{0,18}$/.test(e) && (e.length < 19 || e <= "9223372036854775807");
}
var eZ = t(237793);
let eQ = {
    off: [r.default.fWZps3, r.default.oLMk33],
    not_live: [r.default["4lktoq"], r.default["KkxX+6"]],
    empty: [r.default.EQjhnD, r.default["9wh4rG"]],
    unavailable: [r.default.drfoPg, r.default["2Oa6D/"]],
};
async function eJ(e) {
    try {
        return (await eC.Bo.get({ url: eX.j.SUMMARIES(e), rejectWithError: !0 })).body;
    } catch {
        return { state: "unavailable", summaries: [], public_status: null };
    }
}
function e0(e) {
    let { summary: n, disabled: t, onRemove: l, preview: i = !1, lookup: a = !1 } = e,
        u = (0, m.bG)([Z.A], () => Z.A.getChannel(n.channel.id), [n.channel.id]),
        d = (0, Y.Ay)(u) ?? s.intl.string(s.t["/YzI63"]),
        c = u?.type === et.rbe.GUILD_ANNOUNCEMENT ? eT.AnnouncementsIcon : eM.TextIcon,
        o = s.intl.formatToPlainString(r.default.BINkaq, { title: n.title }),
        h =
            n.key_points?.filter((e) => {
                let { point: n } = e;
                return n.trim().length > 0;
            }) ?? [];
    return (0, C.jsxs)(D.B, {
        gap: 8,
        padding: i ? 0 : { top: 16, bottom: 20 },
        className: i ? eZ.tq : eZ.z,
        role: i ? void 0 : "listitem",
        children: [
            (0, C.jsxs)(D.B, {
                direction: "horizontal",
                align: "center",
                justify: "space-between",
                gap: 8,
                children: [
                    (0, C.jsxs)(D.B, {
                        direction: "horizontal",
                        align: "center",
                        gap: 4,
                        wrap: !0,
                        className: eZ.Qs,
                        children: [
                            (0, C.jsx)(c, { size: "xs", color: B.A.colors.TEXT_SUBTLE }),
                            (0, C.jsx)(k.E, { variant: "body-sm/semibold", color: "text-subtle", children: d }),
                            (0, C.jsxs)(k.E, {
                                variant: "body-sm/normal",
                                color: "text-muted",
                                children: [
                                    " \xb7 ",
                                    s.intl.formatToPlainString(r.default["31AOSO"], {
                                        people: n.activity.user_count,
                                        date: eI()(n.activity.ended_at).fromNow(),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    i
                        ? null
                        : (0, C.jsxs)(D.B, {
                              direction: "horizontal",
                              align: "center",
                              gap: 4,
                              fullWidth: !1,
                              className: eZ.kC,
                              children: [
                                  (0, C.jsx)(eR.m, {
                                      text: s.intl.string(r.default["6vB9E2"]),
                                      children: (0, C.jsx)(eo.Anchor, {
                                          href: `https://discord.com${n.detail_url}`,
                                          target: "_blank",
                                          rel: "noopener noreferrer",
                                          "aria-label": s.intl.string(r.default["6vB9E2"]),
                                          className: eZ.Dl,
                                          children: (0, C.jsx)(eB.LinkExternalSmallIcon, {
                                              size: "sm",
                                              color: "currentColor",
                                          }),
                                      }),
                                  }),
                                  a
                                      ? null
                                      : (0, C.jsx)(eR.m, {
                                            text: o,
                                            children: (0, C.jsx)(w.K, {
                                                icon: ek.TrashIcon,
                                                "aria-label": o,
                                                variant: "icon-only",
                                                size: "sm",
                                                disabled: t,
                                                onClick: () => l?.(n),
                                            }),
                                        }),
                              ],
                          }),
                ],
            }),
            (0, C.jsx)(P.D, { variant: "heading-sm/semibold", children: n.title }),
            (0, C.jsx)("ul", {
                className: eZ.WR,
                children: (h.length > 0
                    ? h.map((e) => {
                          let { point: n } = e;
                          return n;
                      })
                    : [n.brief_summary]
                ).map((e, n) =>
                    (0, C.jsx)("li", { children: (0, C.jsx)(k.E, { variant: "body-md/normal", children: e }) }, n),
                ),
            }),
            null != n.reactions && n.reactions.length > 0
                ? (0, C.jsx)(D.B, {
                      direction: "horizontal",
                      gap: 8,
                      wrap: !0,
                      children: n.reactions.map((e) => {
                          let { emoji: n, count: t } = e;
                          return (0, C.jsxs)(
                              D.B,
                              {
                                  direction: "horizontal",
                                  align: "center",
                                  gap: 4,
                                  padding: { left: "xs", right: "xs", top: "xxs", bottom: "xxs" },
                                  fullWidth: !1,
                                  className: eZ.mJ,
                                  children: [
                                      (0, C.jsx)(e$.A, {
                                          emojiId: n.id,
                                          emojiName: n.name,
                                          animated: n.animated,
                                          size: "reaction",
                                      }),
                                      (0, C.jsx)(k.E, { variant: "body-xs/medium", children: t }),
                                  ],
                              },
                              n.id ?? n.name,
                          );
                      }),
                  })
                : null,
            a
                ? (0, C.jsx)(eO.$, {
                      text: s.intl.string(r.default.LGCOmh),
                      variant: "critical-primary",
                      disabled: t,
                      onClick: () => l?.(n),
                  })
                : null,
            i
                ? null
                : (0, C.jsx)(D.B, {
                      direction: "horizontal",
                      justify: "end",
                      padding: { top: 8 },
                      className: eZ.Eb,
                      children: (0, C.jsx)(k.E, {
                          variant: "body-sm/normal",
                          color: "text-muted",
                          children: s.intl.formatToPlainString(r.default["dvpl/w"], {
                              messages: n.activity.message_count,
                          }),
                      }),
                  }),
        ],
    });
}
function e1(e) {
    let { channelId: n, selected: t, onSelect: l } = e,
        i = (0, m.bG)([Z.A], () => Z.A.getChannel(n), [n]),
        a = (0, Y.Ay)(i) ?? s.intl.string(s.t["/YzI63"]);
    return (0, C.jsx)(D.B, {
        gap: 0,
        className: t ? `${eZ.Ix} ${eZ.rM}` : eZ.Ix,
        children: (0, C.jsx)(eO.$, {
            fullWidth: !0,
            text: a,
            icon: i?.type === et.rbe.GUILD_ANNOUNCEMENT ? eT.AnnouncementsIcon : eM.TextIcon,
            size: "sm",
            variant: "icon-only",
            "aria-pressed": t,
            onClick: l,
        }),
    });
}
function e2(e) {
    let {
            result: n,
            disabled: t,
            onRemove: l,
            contentRef: i,
            onClose: a,
            children: u,
            lookupPanel: d,
            lookupActive: c,
            onLookup: o,
            onBrowse: h,
        } = e,
        m = f.useRef(null),
        [g, x] = f.useState(null),
        p = f.useMemo(
            () =>
                [...(n?.summaries ?? [])].sort(
                    (e, n) => Date.parse(n.activity.ended_at) - Date.parse(e.activity.ended_at),
                ),
            [n],
        ),
        b = f.useMemo(() => [...new Set(p.map((e) => e.channel.id))], [p]),
        j = null != g && b.includes(g) ? g : null;
    return (0, C.jsxs)("div", {
        className: eZ.T,
        children: [
            (0, C.jsxs)(D.B, {
                gap: 0,
                className: eZ.pz,
                children: [
                    (0, C.jsx)(D.B, {
                        padding: { left: 24, right: 12 },
                        justify: "center",
                        className: eZ.ZO,
                        children: (0, C.jsx)(P.D, {
                            variant: "heading-sm/semibold",
                            children: s.intl.string(r.default["+ELXr0"]),
                        }),
                    }),
                    (0, C.jsxs)(D.B, {
                        as: "nav",
                        padding: { top: 20, bottom: 20, left: 8, right: 8 },
                        gap: 4,
                        className: eZ.BM,
                        "aria-label": s.intl.string(r.default["+ELXr0"]),
                        children: [
                            (0, C.jsx)(D.B, {
                                gap: 0,
                                className: c || null != j ? eZ.Ix : `${eZ.Ix} ${eZ.rM}`,
                                children: (0, C.jsx)(eO.$, {
                                    fullWidth: !0,
                                    text: s.intl.string(r.default.kGOOse),
                                    icon: eD.ChannelListIcon,
                                    variant: "icon-only",
                                    size: "sm",
                                    "aria-pressed": !c && null == j,
                                    onClick: () => {
                                        (x(null), h());
                                    },
                                }),
                            }),
                            b.map((e) =>
                                (0, C.jsx)(
                                    e1,
                                    {
                                        channelId: e,
                                        selected: !c && e === j,
                                        onSelect: () => {
                                            (x(e), h());
                                        },
                                    },
                                    e,
                                ),
                            ),
                        ],
                    }),
                    (0, C.jsxs)(D.B, {
                        gap: 12,
                        padding: 16,
                        className: eZ.SZ,
                        children: [
                            (0, C.jsx)(P.D, {
                                variant: "heading-xs/semibold",
                                children: s.intl.string(r.default.pvuST8),
                            }),
                            (0, C.jsx)(eO.$, {
                                text: s.intl.string(r.default.SncNRE),
                                variant: "secondary",
                                size: "sm",
                                "aria-pressed": c,
                                onClick: o,
                            }),
                        ],
                    }),
                ],
            }),
            (0, C.jsxs)(D.B, {
                gap: 0,
                className: eZ.dT,
                children: [
                    (0, C.jsxs)(D.B, {
                        direction: "horizontal",
                        align: "center",
                        justify: "space-between",
                        padding: { left: 24, right: 8 },
                        className: eZ.KE,
                        children: [
                            c
                                ? (0, C.jsx)(P.D, {
                                      variant: "heading-xs/semibold",
                                      children: s.intl.string(r.default.pvuST8),
                                  })
                                : (0, C.jsx)(ew.Y, {
                                      targetElementRef: m,
                                      position: "bottom",
                                      align: "left",
                                      renderPopout: (e) => {
                                          let { closePopout: n } = e;
                                          return (0, C.jsx)(eL.W, {
                                              navId: "pinot-summary-sort",
                                              "aria-label": s.intl.string(r.default.WSGINd),
                                              onClose: n,
                                              onSelect: n,
                                              children: (0, C.jsx)(eP.iD, {
                                                  id: "recent",
                                                  label: s.intl.string(r.default.WSGINd),
                                                  group: "sort",
                                                  checked: !0,
                                                  action: n,
                                              }),
                                          });
                                      },
                                      children: (e) => {
                                          let {
                                              onClick: n,
                                              onMouseDown: t,
                                              onKeyDown: l,
                                              "aria-expanded": i,
                                              "aria-controls": a,
                                          } = e;
                                          return (0, C.jsx)(eO.$, {
                                              onClick: n,
                                              onMouseDown: t,
                                              "aria-controls": a,
                                              onKeyDown: l,
                                              "aria-expanded": i,
                                              "aria-haspopup": "menu",
                                              buttonRef: m,
                                              text: s.intl.string(r.default.WSGINd),
                                              icon: eF.ChevronSmallDownIcon,
                                              iconPosition: "end",
                                              variant: "icon-only",
                                              size: "sm",
                                          });
                                      },
                                  }),
                            (0, C.jsx)(eR.m, {
                                text: s.intl.string(s.t.cpT0Cq),
                                children: (0, C.jsx)(w.K, {
                                    icon: ez.XLargeIcon,
                                    "aria-label": s.intl.string(s.t.cpT0Cq),
                                    variant: "icon-only",
                                    size: "sm",
                                    onClick: a,
                                }),
                            }),
                        ],
                    }),
                    (0, C.jsxs)(D.B, {
                        gap: 12,
                        padding: { top: 8, right: 24, bottom: 24, left: 24 },
                        className: eZ.v2,
                        tabIndex: -1,
                        ref: i,
                        children: [
                            c ? d : u,
                            c || n?.state !== "live"
                                ? null
                                : (0, C.jsx)(ep.F, {
                                      children: (0, C.jsx)(D.B, {
                                          gap: 0,
                                          role: "list",
                                          "aria-label": s.intl.string(r.default["+ELXr0"]),
                                          children: p
                                              .filter((e) => null == j || e.channel.id === j)
                                              .map((e) =>
                                                  (0, C.jsx)(e0, { summary: e, disabled: t, onRemove: l }, e.id),
                                              ),
                                      }),
                                  }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function e4(e) {
    return (0, a.Mx)(e.guildId, "guild_settings_summary_management") ? (0, C.jsx)(e6, { ...e }) : null;
}
function e6(e) {
    let n = f.useRef(null);
    return (0, C.jsx)(ep.F, {
        children: (0, C.jsxs)(D.B, {
            direction: "horizontal",
            align: "center",
            justify: "space-between",
            gap: 16,
            as: "section",
            children: [
                (0, C.jsxs)(D.B, {
                    gap: 4,
                    className: eZ.Qs,
                    children: [
                        (0, C.jsx)(P.D, { variant: "heading-sm/medium", children: s.intl.string(r.default.Bz71mg) }),
                        (0, C.jsx)(k.E, {
                            variant: "body-sm/normal",
                            color: "text-subtle",
                            children: s.intl.string(r.default["49TARv"]),
                        }),
                    ],
                }),
                (0, C.jsx)(eO.$, {
                    text: s.intl.string(r.default["+dSZbK"]),
                    buttonRef: n,
                    variant: "secondary",
                    size: "sm",
                    onClick: () => (0, eG.qf)((t) => (0, C.jsx)(e7, { ...e, ...t, returnRef: n })),
                }),
            ],
        }),
    });
}
function e3(e) {
    let { guildId: n, channels: t, disabled: l, onRemove: i, success: a } = e,
        [u, d] = f.useState(""),
        [c, o] = f.useState(null),
        [h, m] = f.useState(null),
        [g, x] = f.useState(null),
        [p, b] = f.useState(!1),
        [j, E] = f.useState(a),
        v = f.useRef(null),
        y = f.useRef(0),
        A = en(
            f.useMemo(
                () =>
                    t.map((e) => {
                        let { channelId: n } = e;
                        return n;
                    }),
                [t],
            ),
        ),
        _ = f.useMemo(
            () =>
                A.map((e) => {
                    let { channel: n, name: t } = e;
                    return { id: n.id, value: n.id, label: t.length > 0 ? t : n.id };
                }),
            [A],
        ),
        S = /^\d+$/.test(u.trim());
    function N() {
        ((y.current += 1), b(!1), m(null), x(null), E(!1));
    }
    async function I() {
        let e = ++y.current;
        (m(null), x(null), E(!1));
        let t = (function (e, n) {
            let t = e.trim();
            if (eY(t)) return null == n ? null : { conversationId: t, channelId: n };
            try {
                let e = t.startsWith("/topics/") ? new URL(t, "https://discord.com") : new URL(t),
                    n = e.pathname.match(/^\/topics\/([1-9]\d{0,18})\/([1-9]\d{0,18})\/?$/);
                if (
                    null != n &&
                    "https:" === e.protocol &&
                    eq.A.isDiscordHostname(e.hostname) &&
                    "" === e.port &&
                    "" === e.username &&
                    "" === e.password &&
                    eY(n[1]) &&
                    eY(n[2])
                )
                    return { conversationId: n[2], channelId: n[1] };
            } catch {}
            return null;
        })(u, c);
        if (null == t) return void x(s.intl.string(r.default["/L1Zem"]));
        b(!0);
        try {
            let l = await (async function (e, n, t) {
                return (await eC.Bo.get({ url: eX.j.SUMMARY(e, t), query: { channel_id: n }, rejectWithError: !0 }))
                    .body;
            })(n, t.channelId, t.conversationId);
            if (e !== y.current) return;
            (m(l.summary),
                "found" !== l.state && x(s.intl.string("removed" === l.state ? r.default.zWelAV : r.default.PlmztH)));
        } catch (t) {
            if (e !== y.current) return;
            let n = t.status;
            x(s.intl.string(404 === n ? r.default.rMTw10 : 400 === n ? r.default["/L1Zem"] : r.default.g307sl));
        } finally {
            e === y.current && b(!1);
        }
    }
    return (
        f.useEffect(() => {
            v.current?.focus();
        }, []),
        f.useEffect(
            () => () => {
                y.current += 1;
            },
            [n],
        ),
        (0, C.jsxs)(D.B, {
            gap: 16,
            children: [
                (0, C.jsx)(k.E, {
                    variant: "body-md/normal",
                    color: "text-subtle",
                    children: s.intl.string(r.default.Ai3shX),
                }),
                j
                    ? (0, C.jsx)(D.B, {
                          gap: 0,
                          role: "status",
                          "aria-live": "polite",
                          children: (0, C.jsx)(k.E, {
                              variant: "body-md/medium",
                              children: s.intl.string(r.default["1mJqX+"]),
                          }),
                      })
                    : null,
                (0, C.jsx)(eH.k, {
                    label: s.intl.string(r.default["Huen+/"]),
                    inputRef: v,
                    error: g,
                    value: u,
                    disabled: l,
                    onChange: (e) => {
                        (N(), d(e));
                    },
                    onKeyDown: (e) => {
                        "Enter" !== e.key || p || l || (e.preventDefault(), I());
                    },
                }),
                S
                    ? (0, C.jsx)(eU.l, {
                          label: s.intl.string(r.default.QYyKH7),
                          selectionMode: "single",
                          clearable: !0,
                          value: c,
                          options: _,
                          onSelectionChange: (e) => {
                              (N(), o(e));
                          },
                          disabled: l,
                      })
                    : null,
                (0, C.jsx)(eO.$, {
                    text: s.intl.string(r.default.bToMNg),
                    variant: "secondary",
                    disabled: l || p,
                    onClick: I,
                }),
                (0, C.jsx)(D.B, {
                    gap: 0,
                    role: "status",
                    "aria-live": "polite",
                    "aria-busy": p,
                    children: p
                        ? (0, C.jsx)(k.E, { variant: "body-sm/normal", children: s.intl.string(r.default.FXzsGB) })
                        : null,
                }),
                null != h
                    ? (0, C.jsx)(D.B, {
                          gap: 0,
                          role: "list",
                          "aria-label": s.intl.string(r.default.rPS02g),
                          children: (0, C.jsx)(e0, { summary: h, disabled: l, onRemove: i, lookup: !0 }),
                      })
                    : null,
            ],
        })
    );
}
function e7(e) {
    let { guildId: n, disabled: t, savedFeatures: l, ...i } = e,
        [a, u] = f.useState(null),
        [d, c] = f.useState(0),
        [o, h] = f.useState(!1),
        [m, g] = f.useState(!1),
        x = f.useRef(0),
        p = f.useRef(null),
        b = f.useCallback(async () => {
            let e = ++x.current,
                t = await eJ(n);
            e === x.current && u(t);
        }, [n]);
    function j(e) {
        let t = !1;
        (0, eG.qf)(
            (l) =>
                (0, C.jsx)(eW.u, {
                    ...l,
                    returnRef: p,
                    title: s.intl.string(r.default.YbNQ4h),
                    subtitle: s.intl.string(r.default.DEN16e),
                    preview: (0, C.jsx)(ep.F, {
                        children: (0, C.jsxs)(D.B, {
                            gap: 8,
                            children: [
                                (0, C.jsx)(k.E, {
                                    variant: "body-sm/medium",
                                    children: s.intl.string(r.default.rPS02g),
                                }),
                                (0, C.jsx)("div", {
                                    className: eZ.VH,
                                    children: (0, C.jsx)(e0, { summary: e, preview: !0 }),
                                }),
                            ],
                        }),
                    }),
                    confirmText: s.intl.string(r.default["Gt2OY/"]),
                    onCloseCallback: () => {
                        t && p.current?.focus({ preventScroll: !0 });
                    },
                    onConfirm: async () => {
                        (await (async function (e, n) {
                            await eC.Bo.post({
                                url: eX.j.REMOVE_SUMMARY(e, n.id),
                                body: { channel_id: n.channel.id },
                                rejectWithError: !0,
                            });
                        })(n, e),
                            await b(),
                            g(!0),
                            c((e) => e + 1),
                            (t = !0));
                    },
                }),
            { stackingBehavior: "stack" },
        );
    }
    f.useEffect(() => {
        let e = !0,
            t = ++x.current;
        return (
            !(async function () {
                let l = await eJ(n);
                e && t === x.current && u(l);
            })(),
            () => {
                ((e = !1), (x.current += 1));
            }
        );
    }, [n, l]);
    let E = null != a && "live" !== a.state ? eQ[a.state] : null,
        v =
            a?.public_status === "not_live_yet"
                ? r.default.CfhSPp
                : a?.public_status === "disabled"
                  ? r.default.KedXb5
                  : null,
        y = (0, C.jsxs)(e2, {
            result: a,
            lookupActive: o,
            onLookup: () => {
                (g(!1), c((e) => e + 1), h(!0));
            },
            onBrowse: () => h(!1),
            lookupPanel: (0, C.jsx)(
                e3,
                { guildId: n, channels: l.channel_summaries.channels, success: m, disabled: t, onRemove: j },
                d,
            ),
            disabled: t,
            onRemove: j,
            contentRef: p,
            onClose: i.onClose,
            children: [
                m
                    ? (0, C.jsx)(D.B, {
                          gap: 0,
                          role: "status",
                          "aria-live": "polite",
                          children: (0, C.jsx)(k.E, {
                              variant: "body-md/medium",
                              children: s.intl.string(r.default["1mJqX+"]),
                          }),
                      })
                    : null,
                a?.state !== "live"
                    ? (0, C.jsx)(D.B, {
                          gap: 12,
                          role: "status",
                          "aria-live": "polite",
                          children:
                              null == a
                                  ? (0, C.jsx)(k.E, {
                                        variant: "body-sm/normal",
                                        children: s.intl.string(r.default.FXzsGB),
                                    })
                                  : null != E
                                    ? (0, C.jsxs)(D.B, {
                                          gap: 8,
                                          padding: 16,
                                          children: [
                                              (0, C.jsx)(k.E, {
                                                  variant: "body-md/medium",
                                                  children: s.intl.string(E[0]),
                                              }),
                                              (0, C.jsx)(k.E, {
                                                  variant: "body-sm/normal",
                                                  color: "text-subtle",
                                                  children: s.intl.string(E[1]),
                                              }),
                                              "unavailable" === a.state
                                                  ? (0, C.jsx)(eO.$, {
                                                        text: s.intl.string(r.default.D2f6wh),
                                                        variant: "secondary",
                                                        onClick: b,
                                                    })
                                                  : null,
                                          ],
                                      })
                                    : null,
                      })
                    : null,
                a?.state === "live" && null != v
                    ? (0, C.jsx)(eK.w, { type: "info", role: "status", message: s.intl.format(v, {}) })
                    : null,
            ],
        });
    return (0, C.jsx)(eV.d, {
        ...i,
        size: "xl",
        maxHeight: "viewport",
        "aria-label": s.intl.string(r.default["+ELXr0"]),
        children: y,
    });
}
function e5(e) {
    let { guildId: n, disabled: t } = e,
        u = (0, a.C)(n, "guild_settings"),
        { features: d, saving: c } = (0, m.cf)([l.A], () => ({ features: l.A.getFeatures(n), saving: l.A.isSaving() }));
    f.useEffect(() => {
        u && (0, i.FD)(n);
    }, [u, n]);
    let o = f.useRef(null);
    return (f.useEffect(() => {
        if (u && null != d && o.current !== n && ((o.current = n), null == l.A.getFocusReturnFeatureKey()))
            for (let e of K.P) (0, U.Dv)(n, "section", e, d[e], l.A.getDraft(n, e));
    }, [u, d, n]),
    u && null != d)
        ? (0, C.jsxs)(C.Fragment, {
              children: [
                  (0, C.jsx)(G.c, {}),
                  (0, C.jsxs)(D.B, {
                      gap: 32,
                      children: [
                          (0, C.jsxs)(D.B, {
                              gap: 4,
                              children: [
                                  (0, C.jsxs)(D.B, {
                                      direction: "horizontal",
                                      align: "center",
                                      gap: 8,
                                      children: [
                                          (0, C.jsx)(ep.F, {
                                              children: (0, C.jsx)(P.D, {
                                                  variant: "heading-sm/medium",
                                                  children: s.intl.string(r.default.OLNu03),
                                              }),
                                          }),
                                          (0, C.jsx)(eb.E, { type: "new", variant: "primary" }),
                                      ],
                                  }),
                                  (0, C.jsx)(k.E, {
                                      variant: "body-sm/normal",
                                      color: "text-subtle",
                                      children: s.intl.string(r.default.yTP3YK),
                                  }),
                              ],
                          }),
                          K.P.map((e) => (0, C.jsx)(eS, { guildId: n, featureKey: e, disabled: t || c }, e)),
                          (0, C.jsx)(e4, { guildId: n, disabled: t || c, savedFeatures: d }, n),
                      ],
                  }),
              ],
          })
        : null;
}
function e8() {
    let { submitting: e, saveFailed: n } = (0, m.cf)([l.A], () => ({
        submitting: l.A.isSaving(),
        saveFailed: l.A.saveFailed(),
    }));
    return { submitting: e, errorMessage: n ? s.intl.string(s.t.MDtgYB) : void 0 };
}
let e9 = [l.A];
function ne(e) {
    return l.A.hasChanges(e);
}
