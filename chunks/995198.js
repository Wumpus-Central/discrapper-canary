e.r(t), e.d(t, { MemberVerificationPreviewDisabled: () => q, default: () => z });
var l = e(627968),
    n = e(64700),
    s = e(17928),
    a = e(314116),
    r = e(765671),
    c = e(4616),
    d = e(743674),
    u = e(976860),
    o = e(71393),
    m = e(486020),
    h = e(998304),
    x = e(624458),
    g = e(202384),
    f = e(513461),
    j = e(212455),
    A = e(115723),
    p = e(661531),
    v = e(297264),
    E = e(821609),
    N = e(375708),
    T = e(146983);
function C(i) {
    let { onDiscardApplication: t, onContinueApplication: e, guild: n } = i;
    return (0, l.jsxs)("div", {
        className: T.EL,
        children: [
            (0, l.jsx)("div", {
                className: T.P0,
                children: (0, l.jsx)(A.p, { size: "md", color: p.A.colors.INTERACTIVE_TEXT_ACTIVE }),
            }),
            (0, l.jsx)(v.D, {
                variant: "heading-lg/semibold",
                color: "text-strong",
                children:
                    null != n
                        ? N.intl.formatToPlainString(N.t.f5Jaw7, { guildName: n.name })
                        : N.intl.string(N.t["0sTyEb"]),
            }),
            (0, l.jsxs)("div", {
                className: T.rn,
                children: [
                    (0, l.jsx)(E.$, {
                        fullWidth: !0,
                        onClick: e,
                        variant: "secondary",
                        size: "md",
                        text: N.intl.string(N.t.h3aGmv),
                    }),
                    (0, l.jsx)(E.$, {
                        fullWidth: !0,
                        onClick: t,
                        variant: "critical-primary",
                        size: "md",
                        text: N.intl.string(N.t.OQFlFD),
                    }),
                ],
            }),
        ],
    });
}
var b = e(401432),
    R = e(834730),
    y = e(299091),
    I = e(408213),
    G = e(652215);
let V = function (i) {
    let {
            headerId: t,
            reapplyText: e,
            onReapply: a,
            confirmText: r,
            onWithdrawApplication: c,
            rejectionReason: d = null,
            guild: u = null,
        } = i,
        { canReapply: o, isLoading: m } = (function (i) {
            let [t, e] = n.useState(!0),
                l = (0, s.bG)([j.A], () => (null != i ? j.A.getJoinRequestGuild(i) : void 0)),
                a = n.useCallback(async (i) => {
                    try {
                        let t = y.A.getInviteKeyForGuildId(i);
                        null != t && (await I.Ay.fetchVerificationForm(i, t));
                    } finally {
                        e(!1);
                    }
                }, []);
            return (
                n.useEffect(() => {
                    null == i ? e(!1) : (e(!0), a(i));
                }, [i, a]),
                {
                    canReapply: null != l && l.features.has(G.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL),
                    isLoading: t,
                }
            );
        })(u?.id);
    return (0, l.jsxs)("div", {
        className: T.EL,
        children: [
            (0, l.jsx)("div", {
                className: T.P0,
                children: (0, l.jsx)(b.a, { size: "md", color: p.A.colors.INTERACTIVE_TEXT_ACTIVE }),
            }),
            (0, l.jsxs)("div", {
                className: T.bc,
                children: [
                    (0, l.jsx)(v.D, {
                        id: t,
                        variant: "heading-lg/semibold",
                        color: "text-strong",
                        children:
                            u?.name != null
                                ? N.intl.formatToPlainString(N.t["P+/gzA"], { guildName: u.name })
                                : N.intl.string(N.t.gBPcuP),
                    }),
                    null != d && "" !== d
                        ? (0, l.jsxs)(R.E, {
                              variant: "text-md/medium",
                              color: "text-default",
                              children: [
                                  (0, l.jsx)("span", { className: T.Wj, children: N.intl.string(N.t.cf1psW) }),
                                  (0, l.jsx)("span", { children: d }),
                              ],
                          })
                        : null,
                ],
            }),
            (0, l.jsxs)("div", {
                className: T.Ow,
                children: [
                    o || m
                        ? (0, l.jsx)(E.$, {
                              onClick: a,
                              variant: "secondary",
                              size: "md",
                              loading: m,
                              disabled: m,
                              text: e,
                              fullWidth: !0,
                          })
                        : null,
                    (0, l.jsx)(E.$, {
                        onClick: () => c(o || m),
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
var w = e(339350),
    k = e(51271);
let P = function (i) {
    let { onWithdrawApplication: t, guild: e = null } = i,
        s = e?.id;
    return (
        n.useEffect(() => {
            null != s && (0, k.NC)(s);
        }, [s]),
        (0, l.jsxs)("div", {
            className: T.EL,
            children: [
                (0, l.jsx)("div", {
                    className: T.P0,
                    children: (0, l.jsx)(w.Q, { size: "md", color: p.A.colors.INTERACTIVE_TEXT_ACTIVE }),
                }),
                (0, l.jsxs)("div", {
                    className: T.bc,
                    children: [
                        (0, l.jsx)(v.D, {
                            variant: "heading-lg/semibold",
                            color: "text-strong",
                            children:
                                e?.name != null
                                    ? N.intl.formatToPlainString(N.t["0Qlu/6"], { guildName: e.name })
                                    : N.intl.string(N.t["5iLvSx"]),
                        }),
                        (0, l.jsx)(R.E, {
                            variant: "text-md/medium",
                            color: "text-default",
                            children: N.intl.string(N.t.FdsK4h),
                        }),
                    ],
                }),
                (0, l.jsx)(E.$, {
                    fullWidth: !0,
                    onClick: t,
                    variant: "critical-primary",
                    size: "md",
                    text: N.intl.string(N.t.g9tK0o),
                }),
            ],
        })
    );
};
var F = e(665819);
function _(i) {
    let { guild: t, width: e, height: s } = i,
        a = n.useMemo(
            () => (t?.splash != null ? m.Ay.getGuildSplashURL({ id: t?.id, splash: t?.splash }) : null),
            [t?.splash, t?.id],
        ),
        r = (0, d.S)(a);
    return null == a
        ? (0, l.jsx)("div", { className: F.Eq })
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  (0, l.jsx)(c.A, { className: F.Yi, src: a, imageClassName: F.Iv, width: e, height: s }),
                  null != r &&
                      (0, l.jsx)("div", {
                          className: F.qj,
                          style: {
                              background: `linear-gradient(180deg, ${(0, h.cb)(r, 0.16)} 0%, ${(0, h.cb)(r, 1)} 100%)`,
                          },
                      }),
                  (0, l.jsx)("div", { className: F.qj }),
              ],
          });
}
function q(i) {
    let { guildId: t } = i,
        { ref: e, width: c, height: d } = (0, r.Ay)(),
        m = (0, s.bG)([j.A], () => j.A.getRequest(t)),
        h = (0, s.bG)([o.A], () => o.A.getGuild(t)),
        { hasFetchedRequestToJoinGuilds: A, guildPreviewDisabled: p } = (0, s.cf)([j.A], () => ({
            hasFetchedRequestToJoinGuilds: j.A.hasFetchedRequestToJoinGuilds,
            guildPreviewDisabled: j.A.getJoinRequestGuild(t),
        }));
    n.useEffect(() => {
        null != h && (0, u.pX)(G.BVt.CHANNEL(t));
    }, [h, t]),
        n.useEffect(() => {
            A || x.A.fetchRequestToJoinGuilds();
        }, [A]);
    let v = n.useCallback(() => {
        x.A.removeGuildJoinRequest(t), (0, u.pX)(G.BVt.ME);
    }, [t]);
    function E(i, t) {
        return () => {
            (0, a.A)({
                title: N.intl.string(N.t.y0CVes),
                subtitle: i,
                cancelText: N.intl.string(N.t.oEAioF),
                onConfirm: t,
                confirmText: N.intl.string(N.t.p89ACt),
            });
        };
    }
    async function T() {
        await x.A.resetGuildJoinRequest(t), (0, g.Ze)(t);
    }
    function b(i) {
        i ? E(N.intl.format(N.t["9ZezpN"], { name: p?.name }), v)() : v();
    }
    let R = E(N.intl.format(N.t.fJwWVt, { name: p?.name }), v);
    return (0, l.jsxs)("div", {
        className: F.MY,
        ref: e,
        children: [
            (0, l.jsx)(_, { guild: p, height: d, width: c }),
            (0, l.jsx)("div", {
                className: F.FG,
                children: (function () {
                    if (null == m) return null;
                    switch (m.applicationStatus) {
                        case f.B5.SUBMITTED:
                            return (0, l.jsx)(P, { onWithdrawApplication: () => b(!0), guild: p });
                        case f.B5.REJECTED:
                            return (0, l.jsx)(V, {
                                reapplyText: N.intl.string(N.t.I1LYVk),
                                onReapply: T,
                                confirmText: N.intl.string(N.t.g9tK0o),
                                onWithdrawApplication: b,
                                rejectionReason: m.rejectionReason,
                                guild: p,
                            });
                        default:
                            return (0, l.jsx)(C, {
                                onDiscardApplication: R,
                                onContinueApplication: () => (0, g.Ze)(t),
                                guild: p,
                            });
                    }
                })(),
            }),
            (0, l.jsx)("div", { className: F.T_ }),
        ],
    });
}
let z = q;
