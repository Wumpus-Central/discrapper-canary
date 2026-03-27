"use strict";
n.d(t, { w: () => B });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(284009),
    o = n.n(r),
    c = n(110259),
    d = n(311907),
    u = n(435371),
    h = n(397927),
    A = n(846293),
    m = n(774300),
    _ = n(566903),
    g = n(714114),
    p = n(864436),
    f = n(835072),
    x = n(793574),
    C = n(688810),
    E = n(139286),
    I = n(47167),
    N = n(713517),
    b = n(854627),
    S = n(10862),
    T = n(164891),
    v = n(135635),
    y = n(696451),
    j = n(71393),
    R = n(958590),
    O = n(576705),
    L = n(290863),
    M = n(427262),
    D = n(582904),
    G = n(652215),
    U = n(985018),
    P = n(997893),
    w = n(442078),
    k = n(303621);
let V = "VoiceInviteSuggestionsPopover";
function B(e) {
    let { channel: t, onHoverOrFocus: l, setPopoutRef: r, closePopout: d } = e,
        u = s.useRef(null),
        A = (0, N.A)(u),
        m = (0, D.kt)({ channel: t }),
        { enabled: _ } = T.A.useExperiment({ guildId: t.guild_id, location: "VoiceInviteSuggestionsPopover" }),
        { analyticsLocations: g } = (0, C.Ay)(x.A.VOICE_INVITE_SUGGESTIONS_POPOVER);
    (0, E.A)({
        name: c.ImpressionNames.VOICE_INVITE_SUGGESTIONS_POPOVER,
        type: c.ImpressionTypes.POPOUT,
        properties: { voice_channel_id: t.id, voice_guild_id: t.guild_id, location_stack: g },
    }),
        s.useEffect(() => {
            r?.(u.current);
        }, [r]),
        s.useEffect(() => {
            l?.(A.isHoveringOrFocusing);
        }, [l, A]);
    let p = s.useCallback(() => {
        let e = j.A.getGuild(t.guild_id);
        o()(null != e, "VoiceInviteSuggestionsPopover must be used in context of a guild"),
            (0, h.mMO)(async () => {
                let { default: s } = await Promise.all([n.e("43600"), n.e("28136"), n.e("89886")]).then(
                    n.bind(n, 234355),
                );
                return (n) => (0, i.jsx)(s, { ...n, guild: e, channel: t, source: G.PE1.VOICE_INVITE_SUGGESTIONS });
            }),
            d();
    }, [t, d]);
    return (0, i.jsx)("div", {
        ref: u,
        "aria-label": U.intl.string(U.t.o53CL2),
        className: a()(w.popover, P.oO),
        children: (0, i.jsxs)("div", {
            className: P.vW,
            children: [
                _ &&
                    (0, i.jsx)(h.Text, {
                        variant: "text-sm/medium",
                        color: "text-muted",
                        className: P.DD,
                        children: U.intl.string(U.t["EE+P0H"]),
                    }),
                (0, i.jsxs)("ul", {
                    className: P.p_,
                    children: [
                        m.map((e) => (0, i.jsx)(H, { channel: t, user: e, ringingEnabled: _ }, e.id)),
                        (0, i.jsxs)(h.DUT, {
                            tag: "li",
                            onClick: p,
                            className: a()(P.nM, P.vk),
                            children: [
                                (0, i.jsx)("div", {
                                    className: P.R4,
                                    children: (0, i.jsx)(h.nFg, { size: "custom", className: P.Kk }),
                                }),
                                (0, i.jsx)(h.Text, {
                                    variant: "text-sm/medium",
                                    className: P.UU,
                                    lineClamp: 1,
                                    children: U.intl.string(U.t.NOP3Ry),
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        }),
    });
}
function H(e) {
    let { channel: t, user: n, ringingEnabled: l } = e,
        r = t.guild_id,
        o = s.useRef(null),
        c = (0, d.bG)([y.Ay], () => y.Ay.getMember(r, n.id), [r, n.id]),
        { isHoveringOrFocusing: x } = (0, N.A)(o),
        [C, E] = s.useState(null),
        {
            icon: T,
            iconColor: j,
            tooltipText: D,
            disabled: w,
            shouldHideButton: B,
            onClick: H,
        } = (0, v.A)({ user: n, channel: t, location: V }),
        {
            status: F,
            isMobileOnline: K,
            activities: W,
        } = (0, d.cf)(
            [L.A],
            () => ({
                status: L.A.getStatus(n.id, r),
                isMobileOnline: L.A.isMobileOnline(n.id),
                activities: L.A.getActivities(n.id, r),
            }),
            [n.id, r],
        ),
        { activityStatusText: Y, activityStatusIcon: z } = s.useMemo(() => {
            let e = W.find((e) => e.type !== G.$pd.CUSTOM_STATUS && e.type !== G.$pd.HANG_STATUS);
            return { activityStatusText: (0, _.A)(e, !1), activityStatusIcon: null == e ? void 0 : (0, f.f)(e) };
        }, [W]),
        { voiceChannel: q } = (0, g.A)({ userId: n.id }),
        X = (0, I.Ay)(q),
        Q = (0, h.S31)(h.clD.ONLINE),
        J = "success" === C || "sending" === C,
        $ = s.useCallback(
            (e) => {
                e.stopPropagation(), w || H();
            },
            [H, w],
        ),
        Z = s.useCallback(async () => {
            if (J) return;
            async function e() {
                let e = R.A.getInvite(t.id, {}) ?? null;
                if (null == e) {
                    if (!O.A.can(G.xBc.CREATE_INSTANT_INVITE, t)) return null;
                    try {
                        await A.Ay.createInvite(t.id, {}, V);
                    } catch (e) {
                        return null;
                    }
                    e = R.A.getInvite(t.id, {}) ?? null;
                }
                return e?.code ?? null;
            }
            E("sending");
            let i = await e();
            null == i
                ? E(null)
                : m.A.enqueue(
                      {
                          type: m.F.USER,
                          user: n,
                          inviteKey: i,
                          location: V,
                          inviteAnalyticsMetadata: { source: G.PE1.VOICE_INVITE_SUGGESTIONS },
                      },
                      (e) => {
                          E(e ? "success" : null);
                      },
                  );
        }, [J, n, t]),
        {
            avatarDecorationSrc: ee,
            avatarSrc: et,
            eventHandlers: en,
        } = (0, b.A)({ userId: n.id, size: h._3J.SIZE_24, animateOnHover: !x, guildId: r });
    if (null == c) return null;
    let ei = M.Ay.getName(n),
        es = U.intl.string(U.t.jYnGPG),
        el = F !== h.clD.OFFLINE ? F : void 0,
        ea = null != Y.text,
        er = null != q && null != X;
    return (0, i.jsxs)(h.DUT, {
        innerRef: o,
        tag: "li",
        className: a()(P.nM, { [P.vk]: !J }),
        "aria-disabled": J,
        onClick: Z,
        "aria-label": es,
        children: [
            (0, i.jsx)(h.euF, {
                className: P.my,
                "aria-label": ei,
                size: h._3J.SIZE_24,
                src: et,
                avatarDecoration: ee,
                status: el,
                isMobile: K,
                ...en,
            }),
            (0, i.jsxs)("div", {
                className: P.VW,
                children: [
                    (0, i.jsx)(h.Text, { variant: "text-sm/medium", className: P.UU, lineClamp: 1, children: ei }),
                    (er || ea) &&
                        (0, i.jsxs)("div", {
                            className: P.J2,
                            children: [
                                er
                                    ? (0, i.jsx)(S.A, { size: "custom", color: Q, channel: q, className: P.RI })
                                    : null != z
                                      ? (0, i.jsx)(p.A, { icon: z, className: P.RI })
                                      : null,
                                (0, i.jsx)(h.Text, {
                                    variant: "text-xs/medium",
                                    color: "text-status-online",
                                    lineClamp: 1,
                                    children: er ? X : Y.text,
                                }),
                            ],
                        }),
                ],
            }),
            "sending" === C &&
                (0, i.jsx)("div", { className: P.r$, children: (0, i.jsx)(h.nvX, { dotRadius: 2, themed: !0 }) }),
            "success" === C &&
                (0, i.jsx)(h.Text, {
                    variant: "text-xs/medium",
                    color: "text-muted",
                    className: P.h5,
                    lineClamp: 1,
                    children: U.intl.string(U.t["8BEiNn"]),
                }),
            null == C &&
                !l &&
                (0, i.jsx)("div", {
                    className: P.SB,
                    children: (0, i.jsx)(h.Rvf, { color: "currentColor", size: "sm", className: P.Kk }),
                }),
            l &&
                !B &&
                (0, i.jsx)(u.m_, {
                    text: D,
                    children: (0, i.jsx)(h.DUT, {
                        className: a()(P.D9, k.button, k.secondary, { [P.r9]: w }),
                        onClick: $,
                        "aria-disabled": w,
                        children: (0, i.jsx)(T, { size: "xxs", color: j, className: P.Kk }),
                    }),
                }),
        ],
    });
}
