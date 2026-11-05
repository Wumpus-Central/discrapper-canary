(e.r(l), e.d(l, { MemberVerificationPreviewDisabled: () => q, default: () => L }));
var t = e(477900),
    n = e(582128),
    s = e(855986),
    a = e(314116),
    r = e(765671),
    c = e(4616),
    d = e(743674),
    o = e(976860),
    u = e(71393),
    m = e(486020),
    h = e(998304),
    g = e(624458),
    x = e(202384),
    f = e(513461),
    j = e(212455),
    A = e(115723),
    v = e(646514),
    p = e(534514),
    E = e(821609),
    N = e(792996),
    T = e(449341);
function b(i) {
    let { onDiscardApplication: l, onContinueApplication: e, guild: n } = i;
    return (0, t.jsxs)("div", {
        className: T.EL,
        children: [
            (0, t.jsx)("div", {
                className: T.P0,
                children: (0, t.jsx)(A.ListViewIcon, { size: "md", color: v.A.colors.INTERACTIVE_TEXT_ACTIVE }),
            }),
            (0, t.jsx)("div", {
                className: T.bc,
                children: (0, t.jsx)(p.D, {
                    variant: "heading-lg/semibold",
                    color: "text-strong",
                    children:
                        null != n
                            ? N.intl.formatToPlainString(N.t.f5Jaw7, { guildName: n.name })
                            : N.intl.string(N.t["0sTyEb"]),
                }),
            }),
            (0, t.jsxs)("div", {
                className: T.rn,
                children: [
                    (0, t.jsx)(E.$, {
                        fullWidth: !0,
                        onClick: e,
                        variant: "secondary",
                        size: "md",
                        text: N.intl.string(N.t.h3aGmv),
                    }),
                    (0, t.jsx)(E.$, {
                        fullWidth: !0,
                        onClick: l,
                        variant: "critical-primary",
                        size: "md",
                        text: N.intl.string(N.t.OQFlFD),
                    }),
                ],
            }),
        ],
    });
}
var C = e(401432),
    y = e(834730),
    I = e(299091),
    R = e(408213),
    G = e(652215);
let V = function (i) {
    let {
            headerId: l,
            reapplyText: e,
            onReapply: a,
            confirmText: r,
            onWithdrawApplication: c,
            rejectionReason: d = null,
            guild: o = null,
        } = i,
        { canReapply: u, isLoading: m } = (function (i) {
            let [l, e] = n.useState(!0),
                t = (0, s.bG)([j.A], () => (null != i ? j.A.getJoinRequestGuild(i) : void 0)),
                a = n.useCallback(async (i) => {
                    try {
                        let l = I.A.getInviteKeyForGuildId(i);
                        null != l && (await R.Ay.fetchVerificationForm(i, l));
                    } finally {
                        e(!1);
                    }
                }, []);
            return (
                n.useEffect(() => {
                    null == i ? e(!1) : (e(!0), a(i));
                }, [i, a]),
                {
                    canReapply: null != t && t.features.has(G.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL),
                    isLoading: l,
                }
            );
        })(o?.id);
    return (0, t.jsxs)("div", {
        className: T.EL,
        children: [
            (0, t.jsx)("div", {
                className: T.P0,
                children: (0, t.jsx)(C.XSmallBoldIcon, { size: "md", color: v.A.colors.INTERACTIVE_TEXT_ACTIVE }),
            }),
            (0, t.jsxs)("div", {
                className: T.bc,
                children: [
                    (0, t.jsx)(p.D, {
                        id: l,
                        variant: "heading-lg/semibold",
                        color: "text-strong",
                        children:
                            o?.name != null
                                ? N.intl.formatToPlainString(N.t["P+/gzA"], { guildName: o.name })
                                : N.intl.string(N.t.gBPcuP),
                    }),
                    null != d && "" !== d
                        ? (0, t.jsxs)(y.E, {
                              variant: "body-md/medium",
                              color: "text-default",
                              children: [
                                  (0, t.jsx)("span", { className: T.Wj, children: N.intl.string(N.t.cf1psW) }),
                                  (0, t.jsx)("span", { children: d }),
                              ],
                          })
                        : null,
                ],
            }),
            (0, t.jsxs)("div", {
                className: T.Ow,
                children: [
                    u || m
                        ? (0, t.jsx)(E.$, {
                              onClick: a,
                              variant: "secondary",
                              size: "md",
                              loading: m,
                              disabled: m,
                              text: e,
                              fullWidth: !0,
                          })
                        : null,
                    (0, t.jsx)(E.$, {
                        onClick: () => c(u || m),
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
    let { onWithdrawApplication: l, guild: e = null } = i,
        s = e?.id;
    return (
        n.useEffect(() => {
            null != s && (0, k.NC)(s);
        }, [s]),
        (0, t.jsxs)("div", {
            className: T.EL,
            children: [
                (0, t.jsx)("div", {
                    className: T.P0,
                    children: (0, t.jsx)(w.HourglassIcon, { size: "md", color: v.A.colors.INTERACTIVE_TEXT_ACTIVE }),
                }),
                (0, t.jsxs)("div", {
                    className: T.bc,
                    children: [
                        (0, t.jsx)(p.D, {
                            variant: "heading-lg/semibold",
                            color: "text-strong",
                            children:
                                e?.name != null
                                    ? N.intl.formatToPlainString(N.t["0Qlu/6"], { guildName: e.name })
                                    : N.intl.string(N.t["5iLvSx"]),
                        }),
                        (0, t.jsx)(y.E, {
                            variant: "body-md/medium",
                            color: "text-default",
                            children: N.intl.string(N.t.FdsK4h),
                        }),
                    ],
                }),
                (0, t.jsx)(E.$, {
                    fullWidth: !0,
                    onClick: l,
                    variant: "critical-primary",
                    size: "md",
                    text: N.intl.string(N.t.g9tK0o),
                }),
            ],
        })
    );
};
var F = e(223810);
function _(i) {
    let { guild: l, width: e, height: s } = i,
        a = n.useMemo(
            () => (l?.splash != null ? m.Ay.getGuildSplashURL({ id: l?.id, splash: l?.splash }) : null),
            [l?.splash, l?.id],
        ),
        r = (0, d.S)(a);
    return null == a
        ? (0, t.jsx)("div", { className: F.Eq })
        : (0, t.jsxs)(t.Fragment, {
              children: [
                  (0, t.jsx)(c.A, { className: F.Yi, src: a, imageClassName: F.Iv, width: e, height: s }),
                  null != r &&
                      (0, t.jsx)("div", {
                          className: F.qj,
                          style: {
                              background: `linear-gradient(180deg, ${(0, h.cb)(r, 0.16)} 0%, ${(0, h.cb)(r, 1)} 100%)`,
                          },
                      }),
                  (0, t.jsx)("div", { className: F.qj }),
              ],
          });
}
function q(i) {
    let { guildId: l } = i,
        { ref: e, width: c, height: d } = (0, r.Ay)(),
        m = (0, s.bG)([j.A], () => j.A.getRequest(l)),
        h = (0, s.bG)([u.A], () => u.A.getGuild(l)),
        { hasFetchedRequestToJoinGuilds: A, guildPreviewDisabled: v } = (0, s.cf)([j.A], () => ({
            hasFetchedRequestToJoinGuilds: j.A.hasFetchedRequestToJoinGuilds,
            guildPreviewDisabled: j.A.getJoinRequestGuild(l),
        }));
    (n.useEffect(() => {
        null != h && (0, o.pX)(G.BVt.CHANNEL(l));
    }, [h, l]),
        n.useEffect(() => {
            A || g.A.fetchRequestToJoinGuilds();
        }, [A]));
    let p = n.useCallback(() => {
        (g.A.removeGuildJoinRequest(l), (0, o.pX)(G.BVt.ME));
    }, [l]);
    function E(i, l) {
        return () => {
            (0, a.A)({
                title: N.intl.string(N.t.y0CVes),
                subtitle: i,
                cancelText: N.intl.string(N.t.oEAioF),
                onConfirm: l,
                confirmText: N.intl.string(N.t.p89ACt),
            });
        };
    }
    async function T() {
        (await g.A.resetGuildJoinRequest(l), (0, x.Ze)(l));
    }
    function C(i) {
        i ? E(N.intl.format(N.t["9ZezpN"], { name: v?.name }), p)() : p();
    }
    let y = E(N.intl.format(N.t.fJwWVt, { name: v?.name }), p);
    return (0, t.jsxs)("div", {
        className: F.MY,
        ref: e,
        children: [
            (0, t.jsx)(_, { guild: v, height: d, width: c }),
            (0, t.jsx)("div", {
                className: F.FG,
                children: (function () {
                    if (null == m) return null;
                    switch (m.applicationStatus) {
                        case f.B5.SUBMITTED:
                            return (0, t.jsx)(P, { onWithdrawApplication: () => C(!0), guild: v });
                        case f.B5.REJECTED:
                            return (0, t.jsx)(V, {
                                reapplyText: N.intl.string(N.t.I1LYVk),
                                onReapply: T,
                                confirmText: N.intl.string(N.t.g9tK0o),
                                onWithdrawApplication: C,
                                rejectionReason: m.rejectionReason,
                                guild: v,
                            });
                        default:
                            return (0, t.jsx)(b, {
                                onDiscardApplication: y,
                                onContinueApplication: () => (0, x.Ze)(l),
                                guild: v,
                            });
                    }
                })(),
            }),
            (0, t.jsx)("div", { className: F.T_ }),
        ],
    });
}
let L = q;
