t.d(n, {
    Hd: () => S.H,
    yw: () => I.y,
    Nk: () => ec,
    KT: () => ex,
    _x: () => e2,
    F1: () => u,
    gy: () => e4,
    DT: () => e3,
    um: () => i.um,
    ZF: () => h.Z,
    Dq: () => o.D,
    RI: () => c,
    GH: () => _,
    oM: () => N,
    yf: () => e6,
});
var l = t(131904),
    i = t(726362),
    a = t(677166),
    r = t(137005),
    s = t(792996);
function d(e) {
    return "" !== e ? e : null;
}
function u(e) {
    return (0, a.fk)(e, "guild_settings") ? d(s.intl.string(r.default.tdhddn)) : null;
}
function c(e) {
    if (!(0, a.C)(e, "guild_settings")) return null;
    let n = d(s.intl.string(r.default.tdhddn)),
        t = d(s.intl.string(r.default.pOYEzT));
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
let E = new p(g.h, {
    PINOT_MEMBER_NOTICE_ACK: function (e) {
        let { channelId: n } = e;
        if (x.has(n)) return !1;
        x = new Set([...x, n]);
    },
});
var j = t(542744),
    b = t(84877),
    y = t(885902),
    v = t(56919);
let A = { visible: !1 };
function _(e, n) {
    let t = (0, y.F)(e, n),
        l = (0, a.Hg)(null != t ? e?.guild_id : null, n),
        i = (0, b.Z)(e),
        r = (0, v.m)(e, n),
        s = l && i && !r ? t : null,
        d = (0, m.bG)([E], () => null != s && E.isHidden(s), [s]),
        u = f.useCallback(() => {
            null != s && (0, j.G)(s);
        }, [s]);
    return f.useMemo(() => (null == s || d ? A : { visible: !0, dismiss: u }), [s, d, u]);
}
function N() {
    return (0, m.bG)([l.A], () => l.A.getOpenFeatureKey());
}
var S = t(464075),
    I = t(698940),
    C = t(477900),
    T = t(503698),
    M = t.n(T),
    R = t(939249),
    B = t(646514),
    O = t(834730),
    k = t(658675),
    w = t(331322),
    D = t(408278),
    L = t(477155),
    P = t(534514),
    F = t(123292),
    z = t(683438),
    G = t(404778),
    U = t(975571),
    H = t(391523),
    W = t(210470),
    K = t(22464),
    V = t(713654);
function X(e) {
    let { channel: n, ...t } = e,
        l = (0, V.gU)(n);
    return null == l ? null : (0, C.jsx)(l, { ...t, "aria-hidden": !0 });
}
let $ = { [K.y.CHANNEL_SUMMARIES]: r.default["+ELXr0"], [K.y.CHANNEL_MESSAGES]: r.default.HvBP0Z },
    q = { [K.y.CHANNEL_SUMMARIES]: r.default.uImIFo, [K.y.CHANNEL_MESSAGES]: r.default.nHVK4t };
var Z = t(47167),
    Y = t(734057),
    Q = t(994500),
    J = t(287809),
    ee = t(403362);
function en(e) {
    let n = (0, m.yK)([Y.A], () => e.map((e) => Y.A.getChannel(e)).filter(ee.Vq), [e]),
        t = (0, m.yK)([J.default, Q.A], () => n.map((e) => (0, Z.m1)(e, J.default, Q.A)), [n]);
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
            (0, C.jsx)(X, { channel: n, size: "xs", color: B.A.colors.ICON_SUBTLE }),
            (0, C.jsx)(O.E, {
                variant: "body-md/medium",
                color: "text-default",
                lineClamp: 1,
                className: el.HA,
                children: t,
            }),
            (0, C.jsx)(k.P, { checked: l, disabled: i }),
        ],
    });
}
function er() {
    (0, i.lF)(null);
}
function es(e) {
    let { featureTitle: n } = e;
    return (0, C.jsxs)(w.B, {
        direction: "horizontal",
        align: "center",
        gap: 8,
        children: [
            (0, C.jsx)(D.K, {
                icon: L.ArrowSmallLeftIcon,
                "aria-label": s.intl.string(s.t["13/7kX"]),
                variant: "icon-only",
                size: "sm",
                onClick: er,
            }),
            (0, C.jsx)("nav", {
                "aria-label": s.intl.string(s.t["bM+M/m"]),
                className: el.m7,
                children: (0, C.jsxs)(w.B, {
                    as: "ol",
                    direction: "horizontal",
                    align: "center",
                    gap: 4,
                    role: "list",
                    className: el.jD,
                    children: [
                        (0, C.jsxs)(w.B, {
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
                                    children: (0, C.jsx)(O.E, {
                                        variant: "body-md/normal",
                                        color: "none",
                                        lineClamp: 1,
                                        children: s.intl.string(r.default.tdhddn),
                                    }),
                                }),
                                (0, C.jsx)(O.E, {
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
                            children: (0, C.jsx)(O.E, {
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
function ed(e) {
    let { featureKey: n, featureTitle: t } = e,
        l = f.useRef(null);
    return (
        f.useEffect(() => {
            let e = l.current;
            null != e && ((e.tabIndex = -1), e.focus());
        }, [l, n]),
        (0, C.jsxs)(w.B, {
            gap: 4,
            children: [
                (0, C.jsx)(P.D, { ref: l, variant: "heading-lg/medium", children: t }),
                (0, C.jsx)(O.E, {
                    variant: "body-sm/normal",
                    color: "text-subtle",
                    children: s.intl.format(q[n], { learnMoreURL: U.A.getArticleURL(et.MVz.SERVER_WEB_PAGES_ADMIN) }),
                }),
            ],
        })
    );
}
function eu(e) {
    let { guildId: n, featureKey: t, feature: l, draft: a, disabled: d } = e,
        [u, c] = f.useState(""),
        o = f.useId(),
        h = en(f.useMemo(() => (0, W.Dq)(l), [l])),
        m = a.includedChannelIds,
        g = h.map((e) => {
            let { channel: n } = e;
            return n.id;
        }),
        x = g.filter((e) => m.has(e)).length,
        p = g.length > 0 && x === g.length,
        E = u.trim().toLocaleLowerCase(),
        j = h.filter((e) => {
            let { name: n } = e;
            return n.toLocaleLowerCase().includes(E);
        });
    function b(e, l) {
        let a = new Set(m);
        for (let n of e) l ? a.add(n) : a.delete(n);
        (0, i.lv)(n, t, { includedChannelIds: a });
    }
    return (0, C.jsxs)(w.B, {
        gap: 16,
        children: [
            (0, C.jsxs)(w.B, {
                direction: "horizontal",
                align: "center",
                justify: "space-between",
                children: [
                    (0, C.jsx)(O.E, {
                        id: o,
                        variant: "body-md/medium",
                        color: "text-default",
                        children: s.intl.string(ei[t]),
                    }),
                    g.length > 0
                        ? (0, C.jsxs)(w.B, {
                              direction: "horizontal",
                              align: "center",
                              gap: 8,
                              fullWidth: !1,
                              children: [
                                  (0, C.jsx)("span", {
                                      "aria-live": "polite",
                                      "aria-atomic": "true",
                                      children: (0, C.jsx)(O.E, {
                                          tag: "span",
                                          variant: "body-sm/normal",
                                          color: "text-subtle",
                                          children: s.intl.format(r.default.KaAdWl, { count: x }),
                                      }),
                                  }),
                                  (0, C.jsx)(O.E, {
                                      tag: "span",
                                      variant: "body-sm/normal",
                                      color: "text-subtle",
                                      "aria-hidden": "true",
                                      children: "\u2022",
                                  }),
                                  (0, C.jsx)(F.Q, {
                                      text: s.intl.string(p ? r.default.MECJZo : s.t.l4rqaz),
                                      textVariant: "body-sm/semibold",
                                      onClick: () => b(g, !p),
                                      disabled: d,
                                      "aria-describedby": o,
                                  }),
                              ],
                          })
                        : null,
                ],
            }),
            g.length > 0
                ? (0, C.jsxs)(w.B, {
                      gap: 8,
                      children: [
                          (0, C.jsx)(z.I, {
                              query: u,
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
                                                                disabled: d,
                                                                onToggle: (e, n) => b([e], n),
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
                                              ? (0, C.jsx)(O.E, {
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
            saving: d,
        } = (0, m.cf)([l.A], () => ({
            feature: l.A.getFeatures(n)?.[t] ?? null,
            draft: l.A.getDraft(n, t),
            saving: l.A.isSaving(),
        })),
        u = f.useRef(null);
    f.useEffect(() => {
        null != a && null != r && u.current !== t && ((u.current = t), (0, H.Dv)(n, "channel_list", t, a, r));
    }, [n, t, a, r]);
    let c = s.intl.string($[t]);
    return (0, C.jsxs)(w.B, {
        gap: 48,
        children: [
            (0, C.jsx)(es, { featureTitle: c }),
            (0, C.jsxs)(w.B, {
                gap: 24,
                children: [
                    (0, C.jsx)(ed, { featureKey: t, featureTitle: c }),
                    null != a && null != r
                        ? (0, C.jsx)(eu, { guildId: n, featureKey: t, feature: a, draft: r, disabled: i || d })
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
            (0, H.Ws)({ noticeType: "member_channel", channel: n });
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
                (0, C.jsx)(O.E, {
                    variant: "body-sm/normal",
                    color: "text-default",
                    className: eg.Qq,
                    children: s.intl.format(r.default.XRu92R, {
                        learnMoreHook: (e, t) =>
                            (0, C.jsx)(
                                eo.Anchor,
                                {
                                    href: U.A.getArticleURL(et.MVz.DISCOVERABLE_CONTENT_ON_THE_WEB),
                                    onClick: () =>
                                        (0, H.Yy)({ noticeType: "member_channel", channel: n }, "learn_more"),
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
                            ((0, H.Yy)({ noticeType: "member_channel", channel: n }, "dismiss"), t());
                        },
                        children: (0, C.jsx)(ef.XSmallIcon, { size: "sm", color: "currentColor" }),
                    }),
                }),
            ],
        })
    );
}
var ep = t(707554),
    eE = t(805251);
t(321073);
var ej = t(3666),
    eb = t(143129),
    ey = t(881636),
    ev = t(405597);
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
                          O.E,
                          { variant: "body-sm/medium", color: "none", className: ev.dX, children: [", ", e] },
                          e,
                      )
                    : (0, C.jsxs)(
                          O.E,
                          {
                              variant: "body-sm/medium",
                              color: "none",
                              className: ev.ph,
                              children: [
                                  e.key !== l ? ", " : null,
                                  (0, C.jsx)(X, {
                                      channel: e.channel,
                                      size: "custom",
                                      width: 14,
                                      height: 14,
                                      color: "currentColor",
                                      className: ev.p,
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
        ? (0, C.jsx)(O.E, { variant: "body-sm/medium", color: "none", children: s.intl.string(s.t.PoWNfe) })
        : (0, C.jsx)(ej.ZV, { className: ev.yQ, items: t, renderItem: i, renderOverflow: a, maxLines: 1 });
}
function eN(e) {
    let { guildId: n, featureKey: t, disabled: a } = e,
        { feature: d, draft: u } = (0, m.cf)([l.A], () => ({
            feature: l.A.getFeatures(n)?.[t] ?? null,
            draft: l.A.getDraft(n, t),
        })),
        c = f.useRef(null);
    f.useEffect(() => {
        l.A.getFocusReturnFeatureKey() === t && c.current?.focus();
    }, [t]);
    let o = en(
        f.useMemo(
            () => (null != d && null != u ? (0, W.Dq)(d).filter((e) => u.includedChannelIds.has(e)) : eA),
            [d, u],
        ),
    );
    if (null == d || null == u) return null;
    let h = s.intl.string($[t]),
        g = o.length;
    return (0, C.jsxs)(w.B, {
        gap: 12,
        children: [
            (0, C.jsxs)(w.B, {
                direction: "horizontal",
                align: "center",
                justify: "space-between",
                gap: 24,
                children: [
                    (0, C.jsxs)(w.B, {
                        gap: 4,
                        className: ev.oo,
                        "data-disabled": a,
                        children: [
                            (0, C.jsx)(O.E, { variant: "body-md/medium", children: h }),
                            (0, C.jsx)(O.E, {
                                variant: "body-sm/normal",
                                color: "text-subtle",
                                children: s.intl.format(q[t], {
                                    learnMoreURL: U.A.getArticleURL(et.MVz.SERVER_WEB_PAGES_ADMIN),
                                }),
                            }),
                        ],
                    }),
                    (0, C.jsx)(eb.d, {
                        label: h,
                        hideLabel: !0,
                        checked: u.enabled,
                        disabled: a,
                        onChange: (e) => (0, i.lv)(n, t, { enabled: e }),
                    }),
                ],
            }),
            u.enabled
                ? (0, C.jsxs)(R.D, {
                      innerRef: c,
                      className: ev.ag,
                      "aria-label": s.intl.formatToPlainString(r.default["7iIGZ2"], { featureTitle: h, count: g }),
                      onClick: () => (0, i.lF)(t),
                      children: [
                          (0, C.jsx)(O.E, {
                              variant: "body-sm/medium",
                              color: "none",
                              className: ev.Ao,
                              children: s.intl.string(r.default["ZS+NM3"]),
                          }),
                          (0, C.jsxs)(w.B, {
                              direction: "horizontal",
                              align: "center",
                              justify: "end",
                              gap: 12,
                              fullWidth: !1,
                              className: ev.$n,
                              children: [
                                  (0, C.jsx)(e_, { channels: o }),
                                  (0, C.jsx)(ey.ChevronLargeRightIcon, { size: "refresh_sm", color: "currentColor" }),
                              ],
                          }),
                      ],
                  })
                : null,
        ],
    });
}
var eS = t(536637),
    eI = t.n(eS),
    eC = t(620632),
    eT = t(778492),
    eM = t(276293),
    eR = t(866665),
    eB = t(811893),
    eO = t(241326),
    ek = t(821609),
    ew = t(673185),
    eD = t(972213),
    eL = t(192308),
    eP = t(95477),
    eF = t(732159),
    ez = t(683071),
    eG = t(224640),
    eU = t(565645),
    eH = t(603013);
(t(323874), t(14289), t(35956));
var eW = t(998218);
function eK(e) {
    return /^[1-9]\d{0,18}$/.test(e) && (e.length < 19 || e <= "9223372036854775807");
}
var eV = t(237793);
let eX = {
    off: [r.default.fWZps3, r.default.oLMk33],
    not_live: [r.default["4lktoq"], r.default["KkxX+6"]],
    empty: [r.default.EQjhnD, r.default["9wh4rG"]],
    unavailable: [r.default.drfoPg, r.default["2Oa6D/"]],
};
async function e$(e) {
    try {
        return (await eC.Bo.get({ url: eH.j.SUMMARIES(e), rejectWithError: !0 })).body;
    } catch {
        return { state: "unavailable", summaries: [], public_status: null };
    }
}
function eq(e) {
    let { summary: n, disabled: t, onRemove: l, preview: i = !1, lookup: a = !1 } = e,
        d = (0, m.bG)([Y.A], () => Y.A.getChannel(n.channel.id), [n.channel.id]),
        u = (0, Z.Ay)(d) ?? s.intl.string(s.t["/YzI63"]),
        c = d?.type === et.rbe.GUILD_ANNOUNCEMENT ? eT.AnnouncementsIcon : eM.TextIcon,
        o = a ? s.intl.string(r.default.LGCOmh) : s.intl.formatToPlainString(r.default.BINkaq, { title: n.title }),
        h =
            n.key_points?.filter((e) => {
                let { point: n } = e;
                return n.trim().length > 0;
            }) ?? [];
    return (0, C.jsxs)(w.B, {
        gap: 8,
        padding: i ? 0 : { top: 16, bottom: 20 },
        className: i ? eV.tq : eV.z,
        role: i ? void 0 : "listitem",
        children: [
            (0, C.jsxs)(w.B, {
                direction: "horizontal",
                align: "center",
                justify: "space-between",
                gap: 8,
                className: i ? void 0 : eV.Ov,
                children: [
                    (0, C.jsxs)(w.B, {
                        direction: "horizontal",
                        align: "center",
                        gap: 4,
                        wrap: !0,
                        className: eV.Qs,
                        children: [
                            (0, C.jsx)(c, { size: "xs", color: B.A.colors.TEXT_SUBTLE }),
                            (0, C.jsx)(O.E, { variant: "body-sm/semibold", color: "text-subtle", children: u }),
                            (0, C.jsxs)(O.E, {
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
                        : (0, C.jsxs)(w.B, {
                              direction: "horizontal",
                              align: "center",
                              gap: 4,
                              fullWidth: !1,
                              className: eV.kC,
                              children: [
                                  (0, C.jsx)(eR.m, {
                                      text: s.intl.string(r.default["6vB9E2"]),
                                      children: (0, C.jsx)(eo.Anchor, {
                                          href: `https://discord.com${n.detail_url}`,
                                          target: "_blank",
                                          rel: "noopener noreferrer",
                                          "aria-label": s.intl.string(r.default["6vB9E2"]),
                                          className: eV.Dl,
                                          children: (0, C.jsx)(eB.WindowLaunchIcon, {
                                              size: "sm",
                                              color: "currentColor",
                                          }),
                                      }),
                                  }),
                                  (0, C.jsx)(eR.m, {
                                      text: o,
                                      children: (0, C.jsx)(D.K, {
                                          icon: eO.TrashIcon,
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
                className: eV.WR,
                children: (h.length > 0
                    ? h.map((e) => {
                          let { point: n } = e;
                          return n;
                      })
                    : [n.brief_summary]
                ).map((e, n) =>
                    (0, C.jsx)("li", { children: (0, C.jsx)(O.E, { variant: "body-md/normal", children: e }) }, n),
                ),
            }),
            !i || (null != n.reactions && n.reactions.length > 0)
                ? (0, C.jsxs)(w.B, {
                      direction: "horizontal",
                      align: "center",
                      justify: "space-between",
                      gap: 8,
                      wrap: !0,
                      padding: { top: "xs" },
                      className: eV.Eb,
                      children: [
                          null != n.reactions && n.reactions.length > 0
                              ? (0, C.jsx)(w.B, {
                                    direction: "horizontal",
                                    gap: 8,
                                    wrap: !0,
                                    fullWidth: !1,
                                    children: n.reactions.map((e) => {
                                        let { emoji: n, count: t } = e;
                                        return (0, C.jsxs)(
                                            w.B,
                                            {
                                                direction: "horizontal",
                                                align: "center",
                                                gap: 6,
                                                fullWidth: !1,
                                                padding: "xxs",
                                                className: eV.mJ,
                                                children: [
                                                    (0, C.jsx)(eU.A, {
                                                        emojiId: n.id,
                                                        emojiName: n.name,
                                                        animated: n.animated,
                                                        size: "reaction",
                                                    }),
                                                    (0, C.jsx)(O.E, {
                                                        variant: "body-sm/medium",
                                                        color: "text-subtle",
                                                        children: t,
                                                    }),
                                                ],
                                            },
                                            n.id ?? n.name,
                                        );
                                    }),
                                })
                              : null,
                          i
                              ? null
                              : (0, C.jsx)(O.E, {
                                    variant: "body-sm/normal",
                                    color: "text-muted",
                                    className: eV.jC,
                                    children: s.intl.formatToPlainString(r.default["dvpl/w"], {
                                        messages: n.activity.message_count,
                                    }),
                                }),
                      ],
                  })
                : null,
        ],
    });
}
function eZ(e) {
    let { channelId: n, selected: t, onSelect: l } = e,
        i = (0, m.bG)([Y.A], () => Y.A.getChannel(n), [n]),
        a = (0, Z.Ay)(i) ?? s.intl.string(s.t["/YzI63"]);
    return (0, C.jsx)(w.B, {
        gap: 0,
        className: t ? `${eV.Ix} ${eV.rM}` : eV.Ix,
        children: (0, C.jsx)(ek.$, {
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
function eY(e) {
    let {
            result: n,
            disabled: t,
            onRemove: l,
            contentRef: i,
            onClose: a,
            children: d,
            lookupPanel: u,
            lookupActive: c,
            onLookup: o,
            onBrowse: h,
        } = e,
        [m, g] = f.useState(null),
        x = f.useMemo(
            () =>
                [...(n?.summaries ?? [])].sort(
                    (e, n) => Date.parse(n.activity.ended_at) - Date.parse(e.activity.ended_at),
                ),
            [n],
        ),
        p = f.useMemo(() => [...new Set(x.map((e) => e.channel.id))], [x]),
        E = null != m && p.includes(m) ? m : null;
    return (0, C.jsxs)("div", {
        className: eV.T,
        children: [
            (0, C.jsxs)(w.B, {
                gap: 0,
                className: eV.pz,
                children: [
                    (0, C.jsx)(w.B, {
                        padding: { left: 24, right: 12 },
                        justify: "center",
                        className: eV.ZO,
                        children: (0, C.jsx)(P.D, {
                            variant: "heading-sm/semibold",
                            children: s.intl.string(r.default["+ELXr0"]),
                        }),
                    }),
                    (0, C.jsxs)(w.B, {
                        as: "nav",
                        padding: 16,
                        gap: 4,
                        className: eV.BM,
                        "aria-label": s.intl.string(r.default["+ELXr0"]),
                        children: [
                            (0, C.jsx)(w.B, {
                                gap: 0,
                                className: c || null != E ? eV.Ix : `${eV.Ix} ${eV.rM}`,
                                children: (0, C.jsx)(ek.$, {
                                    fullWidth: !0,
                                    text: s.intl.string(r.default.kGOOse),
                                    icon: ew.ChannelListIcon,
                                    variant: "icon-only",
                                    size: "sm",
                                    "aria-pressed": !c && null == E,
                                    onClick: () => {
                                        (g(null), h());
                                    },
                                }),
                            }),
                            p.map((e) =>
                                (0, C.jsx)(
                                    eZ,
                                    {
                                        channelId: e,
                                        selected: !c && e === E,
                                        onSelect: () => {
                                            (g(e), h());
                                        },
                                    },
                                    e,
                                ),
                            ),
                        ],
                    }),
                    (0, C.jsxs)(w.B, {
                        gap: 8,
                        padding: { top: "xs", right: "xl", bottom: "xl", left: "xl" },
                        className: eV.SZ,
                        children: [
                            (0, C.jsx)(O.E, {
                                variant: "body-xs/medium",
                                color: "text-muted",
                                children: s.intl.string(r.default["7OWBef"]),
                            }),
                            (0, C.jsx)(ek.$, {
                                text: s.intl.string(r.default.SncNRE),
                                variant: "secondary",
                                size: "md",
                                fullWidth: !0,
                                "aria-pressed": c,
                                onClick: o,
                            }),
                        ],
                    }),
                ],
            }),
            (0, C.jsxs)(w.B, {
                gap: 0,
                className: eV.dT,
                children: [
                    (0, C.jsxs)(w.B, {
                        direction: "horizontal",
                        align: "center",
                        justify: "space-between",
                        padding: { left: "sm", right: "xs" },
                        className: eV.KE,
                        children: [
                            c
                                ? (0, C.jsx)(P.D, {
                                      variant: "heading-xs/semibold",
                                      children: s.intl.string(r.default.pvuST8),
                                  })
                                : (0, C.jsx)(O.E, {
                                      variant: "body-sm/medium",
                                      children: s.intl.string(r.default.WSGINd),
                                  }),
                            (0, C.jsx)(eR.m, {
                                text: s.intl.string(s.t.cpT0Cq),
                                children: (0, C.jsx)(D.K, {
                                    icon: eD.XLargeIcon,
                                    "aria-label": s.intl.string(s.t.cpT0Cq),
                                    variant: "icon-only",
                                    size: "sm",
                                    onClick: a,
                                }),
                            }),
                        ],
                    }),
                    (0, C.jsxs)(w.B, {
                        gap: 12,
                        padding: { top: "md", right: "xl", bottom: "xl", left: "xl" },
                        className: eV.v2,
                        tabIndex: -1,
                        ref: i,
                        children: [
                            c ? u : d,
                            c || n?.state !== "live"
                                ? null
                                : (0, C.jsx)(ep.F, {
                                      children: (0, C.jsx)(w.B, {
                                          gap: 0,
                                          role: "list",
                                          "aria-label": s.intl.string(r.default["+ELXr0"]),
                                          children: x
                                              .filter((e) => null == E || e.channel.id === E)
                                              .map((e) =>
                                                  (0, C.jsx)(eq, { summary: e, disabled: t, onRemove: l }, e.id),
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
function eQ(e) {
    return (0, a.Mx)(e.guildId, "guild_settings_summary_management") ? (0, C.jsx)(eJ, { ...e }) : null;
}
function eJ(e) {
    let n = f.useRef(null);
    return (0, C.jsx)(ep.F, {
        children: (0, C.jsxs)(w.B, {
            direction: "horizontal",
            align: "center",
            justify: "space-between",
            gap: 16,
            as: "section",
            children: [
                (0, C.jsxs)(w.B, {
                    gap: 4,
                    className: eV.Qs,
                    children: [
                        (0, C.jsx)(P.D, { variant: "heading-sm/medium", children: s.intl.string(r.default.Bz71mg) }),
                        (0, C.jsx)(O.E, {
                            variant: "body-sm/normal",
                            color: "text-subtle",
                            children: s.intl.string(r.default["49TARv"]),
                        }),
                    ],
                }),
                (0, C.jsx)(ek.$, {
                    text: s.intl.string(r.default["+dSZbK"]),
                    buttonRef: n,
                    variant: "secondary",
                    size: "md",
                    onClick: () => (0, eL.qf)((t) => (0, C.jsx)(e1, { ...e, ...t, returnRef: n })),
                }),
            ],
        }),
    });
}
function e0(e) {
    let { guildId: n, disabled: t, onRemove: l, success: i } = e,
        [a, d] = f.useState(""),
        [u, c] = f.useState(null),
        [o, h] = f.useState(null),
        [m, g] = f.useState(!1),
        [x, p] = f.useState(i),
        E = f.useRef(null),
        j = f.useRef(0);
    async function b() {
        let e = ++j.current;
        (c(null), h(null), p(!1));
        let t = (function (e) {
            let n = e.trim();
            try {
                let e = n.startsWith("/topics/") ? new URL(n, "https://discord.com") : new URL(n),
                    t = e.pathname.match(/^\/topics\/([1-9]\d{0,18})\/([1-9]\d{0,18})\/?$/);
                if (
                    null != t &&
                    "https:" === e.protocol &&
                    eW.A.isDiscordHostname(e.hostname) &&
                    "" === e.port &&
                    "" === e.username &&
                    "" === e.password &&
                    eK(t[1]) &&
                    eK(t[2])
                )
                    return { conversationId: t[2], channelId: t[1] };
            } catch {}
            return null;
        })(a);
        if (null == t) return void h(s.intl.string(r.default["/L1Zem"]));
        g(!0);
        try {
            let l = await (async function (e, n, t) {
                return (await eC.Bo.get({ url: eH.j.SUMMARY(e, t), query: { channel_id: n }, rejectWithError: !0 }))
                    .body;
            })(n, t.channelId, t.conversationId);
            if (e !== j.current) return;
            (c(l.summary),
                "found" !== l.state && h(s.intl.string("removed" === l.state ? r.default.zWelAV : r.default.PlmztH)));
        } catch (t) {
            if (e !== j.current) return;
            let n = t.status;
            h(s.intl.string(404 === n ? r.default.rMTw10 : 400 === n ? r.default["/L1Zem"] : r.default.g307sl));
        } finally {
            e === j.current && g(!1);
        }
    }
    return (
        f.useEffect(() => {
            E.current?.focus();
        }, []),
        f.useEffect(
            () => () => {
                j.current += 1;
            },
            [n],
        ),
        (0, C.jsxs)(w.B, {
            gap: 16,
            children: [
                (0, C.jsx)(O.E, {
                    variant: "body-md/normal",
                    color: "text-subtle",
                    children: s.intl.string(r.default.Ai3shX),
                }),
                x
                    ? (0, C.jsx)(w.B, {
                          gap: 0,
                          role: "status",
                          "aria-live": "polite",
                          children: (0, C.jsx)(O.E, {
                              variant: "body-md/medium",
                              children: s.intl.string(r.default["1mJqX+"]),
                          }),
                      })
                    : null,
                (0, C.jsx)(eP.k, {
                    label: s.intl.string(r.default["Huen+/"]),
                    inputRef: E,
                    error: o,
                    value: a,
                    disabled: t,
                    onChange: (e) => {
                        ((j.current += 1), g(!1), c(null), h(null), p(!1), d(e));
                    },
                    onKeyDown: (e) => {
                        "Enter" !== e.key || m || t || (e.preventDefault(), b());
                    },
                }),
                (0, C.jsx)(ek.$, {
                    text: s.intl.string(r.default.bToMNg),
                    variant: "secondary",
                    disabled: t || m,
                    onClick: b,
                }),
                (0, C.jsx)(w.B, {
                    gap: 0,
                    role: "status",
                    "aria-live": "polite",
                    "aria-busy": m,
                    children: m
                        ? (0, C.jsx)(O.E, { variant: "body-sm/normal", children: s.intl.string(r.default.FXzsGB) })
                        : null,
                }),
                null != u
                    ? (0, C.jsx)(w.B, {
                          gap: 0,
                          role: "list",
                          "aria-label": s.intl.string(r.default.rPS02g),
                          children: (0, C.jsx)(eq, { summary: u, disabled: t, onRemove: l, lookup: !0 }),
                      })
                    : null,
            ],
        })
    );
}
function e1(e) {
    let { guildId: n, disabled: t, savedFeatures: l, ...i } = e,
        [a, d] = f.useState(null),
        [u, c] = f.useState(0),
        [o, h] = f.useState(!1),
        [m, g] = f.useState(!1),
        x = f.useRef(0),
        p = f.useRef(null),
        E = f.useCallback(async () => {
            let e = ++x.current,
                t = await e$(n);
            e === x.current && d(t);
        }, [n]);
    function j(e) {
        let t = !1;
        (0, eL.qf)(
            (l) =>
                (0, C.jsx)(eF.u, {
                    ...l,
                    returnRef: p,
                    title: s.intl.string(r.default.YbNQ4h),
                    subtitle: s.intl.string(r.default.DEN16e),
                    preview: (0, C.jsx)(ep.F, {
                        children: (0, C.jsxs)(w.B, {
                            gap: 8,
                            children: [
                                (0, C.jsx)(O.E, {
                                    variant: "body-sm/medium",
                                    children: s.intl.string(r.default.rPS02g),
                                }),
                                (0, C.jsx)("div", {
                                    className: eV.VH,
                                    children: (0, C.jsx)(eq, { summary: e, preview: !0 }),
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
                                url: eH.j.REMOVE_SUMMARY(e, n.id),
                                body: { channel_id: n.channel.id },
                                rejectWithError: !0,
                            });
                        })(n, e),
                            await E(),
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
                let l = await e$(n);
                e && t === x.current && d(l);
            })(),
            () => {
                ((e = !1), (x.current += 1));
            }
        );
    }, [n, l]);
    let b = null != a && "live" !== a.state ? eX[a.state] : null,
        y =
            a?.public_status === "not_live_yet"
                ? r.default.CfhSPp
                : a?.public_status === "disabled"
                  ? r.default.KedXb5
                  : null,
        v = (0, C.jsxs)(eY, {
            result: a,
            lookupActive: o,
            onLookup: () => {
                (g(!1), c((e) => e + 1), h(!0));
            },
            onBrowse: () => h(!1),
            lookupPanel: (0, C.jsx)(e0, { guildId: n, success: m, disabled: t, onRemove: j }, u),
            disabled: t,
            onRemove: j,
            contentRef: p,
            onClose: i.onClose,
            children: [
                m
                    ? (0, C.jsx)(w.B, {
                          gap: 0,
                          role: "status",
                          "aria-live": "polite",
                          children: (0, C.jsx)(O.E, {
                              variant: "body-md/medium",
                              children: s.intl.string(r.default["1mJqX+"]),
                          }),
                      })
                    : null,
                a?.state !== "live"
                    ? (0, C.jsx)(w.B, {
                          gap: 12,
                          role: "status",
                          "aria-live": "polite",
                          children:
                              null == a
                                  ? (0, C.jsx)(O.E, {
                                        variant: "body-sm/normal",
                                        children: s.intl.string(r.default.FXzsGB),
                                    })
                                  : null != b
                                    ? (0, C.jsxs)(w.B, {
                                          gap: 8,
                                          padding: 16,
                                          children: [
                                              (0, C.jsx)(O.E, {
                                                  variant: "body-md/medium",
                                                  children: s.intl.string(b[0]),
                                              }),
                                              (0, C.jsx)(O.E, {
                                                  variant: "body-sm/normal",
                                                  color: "text-subtle",
                                                  children: s.intl.string(b[1]),
                                              }),
                                              "unavailable" === a.state
                                                  ? (0, C.jsx)(ek.$, {
                                                        text: s.intl.string(r.default.D2f6wh),
                                                        variant: "secondary",
                                                        onClick: E,
                                                    })
                                                  : null,
                                          ],
                                      })
                                    : null,
                      })
                    : null,
                a?.state === "live" && null != y
                    ? (0, C.jsx)(ez.w, { type: "info", role: "status", message: s.intl.format(y, {}) })
                    : null,
            ],
        });
    return (0, C.jsx)(eG.d, {
        ...i,
        size: "xl",
        maxHeight: "viewport",
        "aria-label": s.intl.string(r.default["+ELXr0"]),
        children: v,
    });
}
function e2(e) {
    let { guildId: n, disabled: t } = e,
        d = (0, a.C)(n, "guild_settings"),
        { features: u, saving: c } = (0, m.cf)([l.A], () => ({ features: l.A.getFeatures(n), saving: l.A.isSaving() }));
    f.useEffect(() => {
        d && (0, i.FD)(n);
    }, [d, n]);
    let o = f.useRef(null);
    return (f.useEffect(() => {
        if (d && null != u && o.current !== n && ((o.current = n), null == l.A.getFocusReturnFeatureKey()))
            for (let e of K.P) (0, H.Dv)(n, "section", e, u[e], l.A.getDraft(n, e));
    }, [d, u, n]),
    d && null != u)
        ? (0, C.jsxs)(C.Fragment, {
              children: [
                  (0, C.jsx)(G.c, {}),
                  (0, C.jsxs)(w.B, {
                      gap: 32,
                      children: [
                          (0, C.jsxs)(w.B, {
                              gap: 4,
                              children: [
                                  (0, C.jsxs)(w.B, {
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
                                          (0, C.jsx)(eE.E, { type: "new", variant: "primary" }),
                                      ],
                                  }),
                                  (0, C.jsx)(O.E, {
                                      variant: "body-sm/normal",
                                      color: "text-subtle",
                                      children: s.intl.string(r.default.yTP3YK),
                                  }),
                              ],
                          }),
                          K.P.map((e) => (0, C.jsx)(eN, { guildId: n, featureKey: e, disabled: t || c }, e)),
                          (0, C.jsx)(eQ, { guildId: n, disabled: t || c, savedFeatures: u }, n),
                      ],
                  }),
              ],
          })
        : null;
}
function e6() {
    let { submitting: e, saveFailed: n } = (0, m.cf)([l.A], () => ({
        submitting: l.A.isSaving(),
        saveFailed: l.A.saveFailed(),
    }));
    return { submitting: e, errorMessage: n ? s.intl.string(s.t.MDtgYB) : void 0 };
}
let e3 = [l.A];
function e4(e) {
    return l.A.hasChanges(e);
}
