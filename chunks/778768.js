"use strict";
n.d(t, { w: () => H });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(284009),
    o = n.n(a),
    c = n(110259),
    d = n(311907),
    u = n(435371),
    h = n(397927),
    A = n(846293),
    p = n(774300),
    g = n(566903),
    m = n(714114),
    _ = n(864436),
    f = n(835072),
    x = n(793574),
    C = n(688810),
    E = n(139286),
    I = n(47167),
    N = n(713517),
    b = n(854627),
    S = n(10862),
    T = n(164891),
    y = n(135635),
    v = n(696451),
    j = n(71393),
    R = n(958590),
    O = n(576705),
    L = n(290863),
    M = n(427262),
    D = n(222075),
    G = n(582904),
    U = n(652215),
    P = n(985018),
    w = n(460564),
    k = n(513679),
    V = n(320346);
let B = "VoiceInviteSuggestionsPopover";
function H(e) {
    let { channel: t, onHoverOrFocus: l, setPopoutRef: a, closePopout: d } = e,
        u = s.useRef(null),
        A = (0, N.A)(u),
        p = (0, G.k)({ channel: t }),
        { enabled: g } = T.A.useExperiment({ guildId: t.guild_id, location: "VoiceInviteSuggestionsPopover" }),
        { analyticsLocations: m } = (0, C.Ay)(x.A.VOICE_INVITE_SUGGESTIONS_POPOVER);
    (0, E.A)({
        name: c.ImpressionNames.VOICE_INVITE_SUGGESTIONS_POPOVER,
        type: c.ImpressionTypes.POPOUT,
        properties: { voice_channel_id: t.id, voice_guild_id: t.guild_id, location_stack: m },
    }),
        s.useEffect(() => {
            a?.(u.current);
        }, [a]),
        s.useEffect(() => {
            l?.(A.isHoveringOrFocusing);
        }, [l, A]);
    let _ = s.useCallback(() => {
        let e = j.A.getGuild(t.guild_id);
        o()(null != e, "VoiceInviteSuggestionsPopover must be used in context of a guild"),
            (0, h.mMO)(async () => {
                let { default: s } = await Promise.all([n.e("43600"), n.e("28136"), n.e("97710")]).then(
                    n.bind(n, 234355),
                );
                return (n) => (0, i.jsx)(s, { ...n, guild: e, channel: t, source: U.PE1.VOICE_INVITE_SUGGESTIONS });
            }),
            d();
    }, [t, d]);
    return (0, i.jsx)("div", {
        ref: u,
        "aria-label": P.intl.string(P.t.o53CL2),
        className: r()(k.popover, w.oO),
        children: (0, i.jsxs)("div", {
            className: w.vW,
            children: [
                g &&
                    (0, i.jsx)(h.Text, {
                        variant: "text-sm/medium",
                        color: "text-muted",
                        className: w.DD,
                        children: P.intl.string(P.t["EE+P0H"]),
                    }),
                (0, i.jsxs)("ul", {
                    className: w.p_,
                    children: [
                        p.map((e) => (0, i.jsx)(F, { channel: t, user: e, ringingEnabled: g }, e.id)),
                        (0, i.jsxs)(h.DUT, {
                            tag: "li",
                            onClick: _,
                            className: r()(w.nM, w.vk),
                            children: [
                                (0, i.jsx)("div", {
                                    className: w.R4,
                                    children: (0, i.jsx)(h.nFg, { size: "xs", className: w.Kk }),
                                }),
                                (0, i.jsx)(h.Text, {
                                    variant: g ? "text-sm/medium" : "text-md/medium",
                                    className: w.UU,
                                    lineClamp: 1,
                                    children: P.intl.string(P.t.NOP3Ry),
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        }),
    });
}
function F(e) {
    let { channel: t, user: n, ringingEnabled: l } = e,
        a = t.guild_id,
        o = s.useRef(null),
        c = (0, d.bG)([v.Ay], () => v.Ay.getMember(a, n.id), [a, n.id]),
        { isHoveringOrFocusing: x } = (0, N.A)(o),
        [C, E] = s.useState(null),
        {
            icon: T,
            iconColor: j,
            tooltipText: G,
            disabled: k,
            shouldHideButton: H,
            onClick: F,
        } = (0, y.A)({ user: n, channel: t, location: B }),
        { showActivityStatus: K } = D.o.useExperiment(
            { guildId: a, location: "VoiceInviteSuggestionsPopover.InviteRow" },
            { autoTrackExposure: !1 },
        ),
        {
            status: W,
            isMobileOnline: Y,
            activities: z,
        } = (0, d.cf)(
            [L.A],
            () => ({
                status: L.A.getStatus(n.id, a),
                isMobileOnline: L.A.isMobileOnline(n.id),
                activities: L.A.getActivities(n.id, a),
            }),
            [n.id, a],
        ),
        { activityStatusText: X, activityStatusIcon: q } = s.useMemo(() => {
            if (!K) return { activityStatusText: {}, activityStatusIcon: void 0 };
            let e = z.find((e) => e.type !== U.$pd.CUSTOM_STATUS && e.type !== U.$pd.HANG_STATUS);
            return { activityStatusText: (0, g.A)(e, !1), activityStatusIcon: null == e ? void 0 : (0, f.f)(e) };
        }, [K, z]),
        { voiceChannel: J } = (0, m.A)({ userId: n.id }),
        Q = (0, I.Ay)(J),
        $ = (0, h.S31)(h.clD.ONLINE),
        Z = "success" === C || "sending" === C,
        ee = s.useCallback(
            (e) => {
                e.stopPropagation(), k || F();
            },
            [F, k],
        ),
        et = s.useCallback(async () => {
            if (Z) return;
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
            E("sending");
            let i = await e();
            null == i
                ? E(null)
                : p.A.enqueue(
                      {
                          type: p.F.USER,
                          user: n,
                          inviteKey: i,
                          location: B,
                          inviteAnalyticsMetadata: { source: U.PE1.VOICE_INVITE_SUGGESTIONS },
                      },
                      (e) => {
                          E(e ? "success" : null);
                      },
                  );
        }, [Z, n, t]),
        {
            avatarDecorationSrc: en,
            avatarSrc: ei,
            eventHandlers: es,
        } = (0, b.A)({ userId: n.id, size: h._3J.SIZE_24, animateOnHover: !x, guildId: a });
    if (null == c) return null;
    let el = M.Ay.getName(n),
        er = P.intl.string(P.t.jYnGPG),
        ea = W !== h.clD.OFFLINE ? W : void 0,
        eo = K && null != X.text,
        ec = K && null != J && null != Q;
    return (0, i.jsxs)(h.DUT, {
        innerRef: o,
        tag: "li",
        className: r()(w.nM, { [w.vk]: !Z }),
        "aria-disabled": Z,
        onClick: et,
        "aria-label": er,
        children: [
            (0, i.jsx)(h.euF, {
                className: w.my,
                "aria-label": el,
                size: h._3J.SIZE_24,
                src: ei,
                avatarDecoration: en,
                status: K ? ea : void 0,
                isMobile: K ? Y : void 0,
                ...es,
            }),
            (0, i.jsxs)("div", {
                className: w.VW,
                children: [
                    (0, i.jsx)(h.Text, {
                        variant: l ? "text-sm/medium" : "text-md/medium",
                        className: w.UU,
                        lineClamp: 1,
                        children: el,
                    }),
                    (ec || eo) &&
                        (0, i.jsxs)("div", {
                            className: w.J2,
                            children: [
                                ec
                                    ? (0, i.jsx)(S.A, { size: "custom", color: $, channel: J, className: w.RI })
                                    : null != q
                                      ? (0, i.jsx)(_.A, { icon: q, className: w.RI })
                                      : null,
                                (0, i.jsx)(h.Text, {
                                    variant: "text-xs/medium",
                                    color: "text-status-online",
                                    lineClamp: 1,
                                    children: ec ? Q : X.text,
                                }),
                            ],
                        }),
                ],
            }),
            "sending" === C &&
                (0, i.jsx)("div", { className: w.r$, children: (0, i.jsx)(h.nvX, { dotRadius: 2, themed: !0 }) }),
            "success" === C &&
                (0, i.jsx)(h.Text, {
                    variant: "text-xs/medium",
                    color: "text-muted",
                    className: w.h5,
                    lineClamp: 1,
                    children: P.intl.string(P.t["8BEiNn"]),
                }),
            null == C &&
                !l &&
                (0, i.jsx)("div", {
                    className: w.SB,
                    children: (0, i.jsx)(h.Rvf, { color: "currentColor", size: "xs", className: w.Kk }),
                }),
            l &&
                !H &&
                (0, i.jsx)(u.m_, {
                    text: G,
                    children: (0, i.jsx)(h.DUT, {
                        className: r()(w.D9, V.button, V.secondary, { [w.r9]: k }),
                        onClick: ee,
                        "aria-disabled": k,
                        children: (0, i.jsx)(T, { size: "xxs", color: j, className: w.Kk }),
                    }),
                }),
        ],
    });
}
