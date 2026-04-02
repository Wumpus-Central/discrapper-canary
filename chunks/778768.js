n.d(t, { w: () => V });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(284009),
    o = n.n(r),
    d = n(110259),
    c = n(311907),
    u = n(435371),
    h = n(397927),
    A = n(846293),
    _ = n(774300),
    m = n(566903),
    g = n(714114),
    p = n(864436),
    f = n(835072),
    x = n(793574),
    E = n(688810),
    I = n(139286),
    C = n(47167),
    N = n(713517),
    T = n(854627),
    S = n(10862),
    b = n(164891),
    y = n(135635),
    v = n(696451),
    j = n(71393),
    R = n(958590),
    O = n(576705),
    L = n(290863),
    M = n(427262),
    D = n(582904),
    U = n(652215),
    G = n(985018),
    P = n(997893),
    k = n(442078),
    w = n(303621);
let B = "VoiceInviteSuggestionsPopover";
function V(e) {
    let { channel: t, onHoverOrFocus: s, setPopoutRef: r, closePopout: c } = e,
        u = l.useRef(null),
        A = (0, N.A)(u),
        _ = (0, D.kt)({ channel: t }),
        { enabled: m } = b.A.useExperiment({ guildId: t.guild_id, location: "VoiceInviteSuggestionsPopover" }),
        { analyticsLocations: g } = (0, E.Ay)(x.A.VOICE_INVITE_SUGGESTIONS_POPOVER);
    (0, I.A)({
        name: d.ImpressionNames.VOICE_INVITE_SUGGESTIONS_POPOVER,
        type: d.ImpressionTypes.POPOUT,
        properties: { voice_channel_id: t.id, voice_guild_id: t.guild_id, location_stack: g },
    }),
        l.useEffect(() => {
            r?.(u.current);
        }, [r]),
        l.useEffect(() => {
            s?.(A.isHoveringOrFocusing);
        }, [s, A]);
    let p = l.useCallback(() => {
        let e = j.A.getGuild(t.guild_id);
        o()(null != e, "VoiceInviteSuggestionsPopover must be used in context of a guild"),
            (0, h.mMO)(async () => {
                let { default: l } = await Promise.all([n.e("43600"), n.e("28136"), n.e("89886")]).then(
                    n.bind(n, 234355),
                );
                return (n) => (0, i.jsx)(l, { ...n, guild: e, channel: t, source: U.PE1.VOICE_INVITE_SUGGESTIONS });
            }),
            c();
    }, [t, c]);
    return (0, i.jsx)("div", {
        ref: u,
        "aria-label": G.intl.string(G.t.o53CL2),
        className: a()(k.popover, P.oO),
        children: (0, i.jsxs)("div", {
            className: P.vW,
            children: [
                m &&
                    (0, i.jsx)(h.Text, {
                        variant: "text-sm/medium",
                        color: "text-muted",
                        className: P.DD,
                        children: G.intl.string(G.t["EE+P0H"]),
                    }),
                (0, i.jsxs)("ul", {
                    className: P.p_,
                    children: [
                        _.map((e) => (0, i.jsx)(H, { channel: t, user: e, ringingEnabled: m }, e.id)),
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
                                    children: G.intl.string(G.t.NOP3Ry),
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
    let { channel: t, user: n, ringingEnabled: s } = e,
        r = t.guild_id,
        o = l.useRef(null),
        d = (0, c.bG)([v.Ay], () => v.Ay.getMember(r, n.id), [r, n.id]),
        { isHoveringOrFocusing: x } = (0, N.A)(o),
        [E, I] = l.useState(null),
        {
            icon: b,
            iconColor: j,
            tooltipText: D,
            disabled: k,
            shouldHideButton: V,
            onClick: H,
        } = (0, y.A)({ user: n, channel: t, location: B }),
        {
            status: F,
            isMobileOnline: K,
            activities: W,
        } = (0, c.cf)(
            [L.A],
            () => ({
                status: L.A.getStatus(n.id, r),
                isMobileOnline: L.A.isMobileOnline(n.id),
                activities: L.A.getActivities(n.id, r),
            }),
            [n.id, r],
        ),
        { activityStatusText: Y, activityStatusIcon: z } = l.useMemo(() => {
            let e = W.find((e) => e.type !== U.$pd.CUSTOM_STATUS && e.type !== U.$pd.HANG_STATUS);
            return { activityStatusText: (0, m.A)(e, !1), activityStatusIcon: null == e ? void 0 : (0, f.f)(e) };
        }, [W]),
        { voiceChannel: q } = (0, g.A)({ userId: n.id }),
        X = (0, C.Ay)(q),
        J = (0, h.S31)(h.clD.ONLINE),
        Q = "success" === E || "sending" === E,
        $ = l.useCallback(
            (e) => {
                e.stopPropagation(), k || H();
            },
            [H, k],
        ),
        Z = l.useCallback(async () => {
            if (Q) return;
            async function e() {
                let e = R.A.getInvite(t.id, {}) ?? null;
                if (null == e) {
                    if (!O.A.can(U.xBc.CREATE_INSTANT_INVITE, t)) return null;
                    try {
                        await A.Ay.createInvite(t.id, {}, B);
                    } catch (e) {
                        return null;
                    }
                    e = R.A.getInvite(t.id, {}) ?? null;
                }
                return e?.code ?? null;
            }
            I("sending");
            let i = await e();
            null == i
                ? I(null)
                : _.A.enqueue(
                      {
                          type: _.F.USER,
                          user: n,
                          inviteKey: i,
                          location: B,
                          inviteAnalyticsMetadata: { source: U.PE1.VOICE_INVITE_SUGGESTIONS },
                      },
                      (e) => {
                          I(e ? "success" : null);
                      },
                  );
        }, [Q, n, t]),
        {
            avatarDecorationSrc: ee,
            avatarSrc: et,
            eventHandlers: en,
        } = (0, T.A)({ userId: n.id, size: h._3J.SIZE_24, animateOnHover: !x, guildId: r });
    if (null == d) return null;
    let ei = M.Ay.getName(n),
        el = G.intl.string(G.t.jYnGPG),
        es = F !== h.clD.OFFLINE ? F : void 0,
        ea = null != Y.text,
        er = null != q && null != X;
    return (0, i.jsxs)(h.DUT, {
        innerRef: o,
        tag: "li",
        className: a()(P.nM, { [P.vk]: !Q }),
        "aria-disabled": Q,
        onClick: Z,
        "aria-label": el,
        children: [
            (0, i.jsx)(h.euF, {
                className: P.my,
                "aria-label": ei,
                size: h._3J.SIZE_24,
                src: et,
                avatarDecoration: ee,
                status: es,
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
                                    ? (0, i.jsx)(S.A, { size: "custom", color: J, channel: q, className: P.RI })
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
            "sending" === E &&
                (0, i.jsx)("div", { className: P.r$, children: (0, i.jsx)(h.nvX, { dotRadius: 2, themed: !0 }) }),
            "success" === E &&
                (0, i.jsx)(h.Text, {
                    variant: "text-xs/medium",
                    color: "text-muted",
                    className: P.h5,
                    lineClamp: 1,
                    children: G.intl.string(G.t["8BEiNn"]),
                }),
            null == E &&
                !s &&
                (0, i.jsx)("div", {
                    className: P.SB,
                    children: (0, i.jsx)(h.Rvf, { color: "currentColor", size: "sm", className: P.Kk }),
                }),
            s &&
                !V &&
                (0, i.jsx)(u.m_, {
                    text: D,
                    children: (0, i.jsx)(h.DUT, {
                        className: a()(P.D9, w.button, w.secondary, { [P.r9]: k }),
                        onClick: $,
                        "aria-disabled": k,
                        children: (0, i.jsx)(b, { size: "xxs", color: j, className: P.Kk }),
                    }),
                }),
        ],
    });
}
