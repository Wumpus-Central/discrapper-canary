i.r(t), i.d(t, { MemberVerificationPreviewDisabled: () => F, default: () => L });
var l = i(627968),
    n = i(64700),
    s = i(17928),
    a = i(314116),
    r = i(765671),
    o = i(4616),
    d = i(743674),
    c = i(976860),
    u = i(71393),
    m = i(486020),
    h = i(998304),
    g = i(624458),
    x = i(202384),
    p = i(513461),
    f = i(212455),
    A = i(115723),
    j = i(661531),
    v = i(534514),
    _ = i(821609),
    E = i(985018),
    T = i(146983);
function N(e) {
    let { onDiscardApplication: t, onContinueApplication: i, guild: n } = e;
    return (0, l.jsxs)("div", {
        className: T.EL,
        children: [
            (0, l.jsx)("div", {
                className: T.P0,
                children: (0, l.jsx)(A.p, { size: "md", color: j.A.colors.INTERACTIVE_TEXT_ACTIVE }),
            }),
            (0, l.jsx)(v.D, {
                variant: "heading-lg/semibold",
                color: "text-strong",
                children:
                    null != n
                        ? E.intl.formatToPlainString(E.t.f5Jaw7, { guildName: n.name })
                        : E.intl.string(E.t["0sTyEb"]),
            }),
            (0, l.jsxs)("div", {
                className: T.rn,
                children: [
                    (0, l.jsx)(_.$, {
                        fullWidth: !0,
                        onClick: i,
                        variant: "secondary",
                        size: "md",
                        text: E.intl.string(E.t.h3aGmv),
                    }),
                    (0, l.jsx)(_.$, {
                        fullWidth: !0,
                        onClick: t,
                        variant: "critical-primary",
                        size: "md",
                        text: E.intl.string(E.t.OQFlFD),
                    }),
                ],
            }),
        ],
    });
}
var w = i(990078),
    C = i(401432),
    b = i(834730),
    y = i(299091),
    R = i(408213),
    I = i(652215);
let P = (e) => {
    let {
            headerId: t,
            reapplyText: i,
            onReapply: a,
            confirmText: r,
            onWithdrawApplication: o,
            rejectionReason: d = null,
            guild: c = null,
        } = e,
        u = (0, s.bG)([f.A], () => f.A.getCooldown(c?.id ?? "0")),
        { canReapply: m, isLoading: h } = (function (e) {
            let [t, i] = n.useState(!0),
                l = (0, s.bG)([f.A], () => (null != e ? f.A.getJoinRequestGuild(e) : void 0)),
                a = n.useCallback(async (e) => {
                    try {
                        let t = y.A.getInviteKeyForGuildId(e);
                        null != t && (await R.Ay.fetchVerificationForm(e, t));
                    } finally {
                        i(!1);
                    }
                }, []);
            return (
                n.useEffect(() => {
                    null == e ? i(!1) : (i(!0), a(e));
                }, [e, a]),
                {
                    canReapply: null != l && l.features.has(I.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL),
                    isLoading: t,
                }
            );
        })(c?.id);
    n.useEffect(() => {
        null == u && null != c && g.A.fetchJoinRequestCooldown(c.id);
    }, [u, c]);
    let x = (u ?? 0) > 0,
        p = x && null != u ? Math.ceil((1e3 * u - Date.now()) / 864e5) : 0;
    return (0, l.jsxs)("div", {
        className: T.EL,
        children: [
            (0, l.jsx)("div", {
                className: T.P0,
                children: (0, l.jsx)(C.a, { size: "md", color: j.A.colors.INTERACTIVE_TEXT_ACTIVE }),
            }),
            (0, l.jsxs)("div", {
                className: T.bc,
                children: [
                    (0, l.jsx)(v.D, {
                        id: t,
                        variant: "heading-lg/semibold",
                        color: "text-strong",
                        children:
                            c?.name != null
                                ? E.intl.formatToPlainString(E.t["P+/gzA"], { guildName: c.name })
                                : E.intl.string(E.t.gBPcuP),
                    }),
                    null != d && "" !== d
                        ? (0, l.jsxs)(b.E, {
                              variant: "text-md/medium",
                              color: "text-default",
                              children: [
                                  (0, l.jsx)("span", { className: T.Wj, children: E.intl.string(E.t.cf1psW) }),
                                  (0, l.jsx)("span", { children: d }),
                              ],
                          })
                        : null,
                ],
            }),
            (0, l.jsxs)("div", {
                className: T.Ow,
                children: [
                    m || h
                        ? (0, l.jsx)(w.m, {
                              asContainer: !0,
                              text: x ? E.intl.formatToPlainString(E.t.A0f0P7, { days: p }) : null,
                              "aria-label": x ? E.intl.formatToPlainString(E.t.A0f0P7, { days: p }) : void 0,
                              children: (0, l.jsx)(_.$, {
                                  onClick: a,
                                  variant: "secondary",
                                  size: "md",
                                  loading: null == u || h,
                                  disabled: x || h,
                                  text: i,
                                  fullWidth: !0,
                              }),
                          })
                        : null,
                    (0, l.jsx)(_.$, {
                        onClick: () => o(m || h),
                        variant: "critical-primary",
                        size: "md",
                        text: r,
                        fullWidth: !0,
                    }),
                ],
            }),
        ],
    });
};
var G = i(339350),
    S = i(51271);
let M = function (e) {
    let { onWithdrawApplication: t, guild: i = null } = e,
        s = i?.id;
    return (
        n.useEffect(() => {
            null != s && (0, S.NC)(s);
        }, [s]),
        (0, l.jsxs)("div", {
            className: T.EL,
            children: [
                (0, l.jsx)("div", {
                    className: T.P0,
                    children: (0, l.jsx)(G.Q, { size: "md", color: j.A.colors.INTERACTIVE_TEXT_ACTIVE }),
                }),
                (0, l.jsxs)("div", {
                    className: T.bc,
                    children: [
                        (0, l.jsx)(v.D, {
                            variant: "heading-lg/semibold",
                            color: "text-strong",
                            children:
                                i?.name != null
                                    ? E.intl.formatToPlainString(E.t["0Qlu/6"], { guildName: i.name })
                                    : E.intl.string(E.t["5iLvSx"]),
                        }),
                        (0, l.jsx)(b.E, {
                            variant: "text-md/medium",
                            color: "text-default",
                            children: E.intl.string(E.t.FdsK4h),
                        }),
                    ],
                }),
                (0, l.jsx)(_.$, {
                    fullWidth: !0,
                    onClick: t,
                    variant: "critical-primary",
                    size: "md",
                    text: E.intl.string(E.t.g9tK0o),
                }),
            ],
        })
    );
};
var V = i(665819);
function q(e) {
    let { guild: t, width: i, height: s } = e,
        a = n.useMemo(
            () => (t?.splash != null ? m.Ay.getGuildSplashURL({ id: t?.id, splash: t?.splash }) : null),
            [t?.splash, t?.id],
        ),
        r = (0, d.S)(a);
    return null == a
        ? (0, l.jsx)("div", { className: V.Eq })
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  (0, l.jsx)(o.A, { className: V.Yi, src: a, imageClassName: V.Iv, width: i, height: s }),
                  null != r &&
                      (0, l.jsx)("div", {
                          className: V.qj,
                          style: {
                              background: `linear-gradient(180deg, ${(0, h.cb)(r, 0.16)} 0%, ${(0, h.cb)(r, 1)} 100%)`,
                          },
                      }),
                  (0, l.jsx)("div", { className: V.qj }),
              ],
          });
}
let F = (e) => {
        let { guildId: t } = e,
            { ref: i, width: o, height: d } = (0, r.Ay)(),
            m = (0, s.bG)([f.A], () => f.A.getRequest(t)),
            h = (0, s.bG)([u.A], () => u.A.getGuild(t)),
            { hasFetchedRequestToJoinGuilds: A, guildPreviewDisabled: j } = (0, s.cf)([f.A], () => ({
                hasFetchedRequestToJoinGuilds: f.A.hasFetchedRequestToJoinGuilds,
                guildPreviewDisabled: f.A.getJoinRequestGuild(t),
            }));
        n.useEffect(() => {
            null != h && (0, c.pX)(I.BVt.CHANNEL(t));
        }, [h, t]),
            n.useEffect(() => {
                A || g.A.fetchRequestToJoinGuilds();
            }, [A]);
        let v = n.useCallback(() => {
                g.A.removeGuildJoinRequest(t), (0, c.pX)(I.BVt.ME);
            }, [t]),
            _ = (e, t) => () => {
                (0, a.A)({
                    title: E.intl.string(E.t.y0CVes),
                    subtitle: e,
                    cancelText: E.intl.string(E.t.oEAioF),
                    onConfirm: t,
                    confirmText: E.intl.string(E.t.p89ACt),
                });
            },
            T = async () => {
                await g.A.resetGuildJoinRequest(t), (0, x.Ze)(t);
            },
            w = (e) => {
                e ? _(E.intl.format(E.t["9ZezpN"], { name: j?.name }), v)() : v();
            },
            C = _(E.intl.format(E.t.fJwWVt, { name: j?.name }), v);
        return (0, l.jsxs)("div", {
            className: V.MY,
            ref: i,
            children: [
                (0, l.jsx)(q, { guild: j, height: d, width: o }),
                (0, l.jsx)("div", {
                    className: V.FG,
                    children: (() => {
                        if (null == m) return null;
                        switch (m.applicationStatus) {
                            case p.B5.SUBMITTED:
                                return (0, l.jsx)(M, { onWithdrawApplication: () => w(!0), guild: j });
                            case p.B5.REJECTED:
                                return (0, l.jsx)(P, {
                                    reapplyText: E.intl.string(E.t.I1LYVk),
                                    onReapply: T,
                                    confirmText: E.intl.string(E.t.g9tK0o),
                                    onWithdrawApplication: w,
                                    rejectionReason: m.rejectionReason,
                                    guild: j,
                                });
                            default:
                                return (0, l.jsx)(N, {
                                    onDiscardApplication: C,
                                    onContinueApplication: () => (0, x.Ze)(t),
                                    guild: j,
                                });
                        }
                    })(),
                }),
                (0, l.jsx)("div", { className: V.T_ }),
            ],
        });
    },
    L = F;
