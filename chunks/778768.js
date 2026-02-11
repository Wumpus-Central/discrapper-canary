n.d(t, { w: () => B });
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
    m = n(774300),
    p = n(566903),
    g = n(714114),
    _ = n(864436),
    f = n(835072),
    x = n(793574),
    C = n(688810),
    E = n(139286),
    I = n(47167),
    b = n(854627),
    N = n(10862),
    S = n(164891),
    T = n(135635),
    v = n(696451),
    y = n(71393),
    j = n(958590),
    R = n(576705),
    O = n(290863),
    L = n(427262),
    M = n(222075),
    D = n(582904),
    G = n(652215),
    U = n(985018),
    P = n(357694),
    w = n(248789),
    k = n(165180);
let V = "VoiceInviteSuggestionsPopover";
function B(e) {
    let { channel: t, onHoverOrFocus: s, setPopoutRef: r, closePopout: c } = e,
        u = l.useRef(null),
        A = (0, D.L7)(u),
        m = (0, D.kt)({ channel: t }),
        { enabled: p } = S.A.useExperiment({ guildId: t.guild_id, location: "VoiceInviteSuggestionsPopover" }),
        { analyticsLocations: g } = (0, C.Ay)(x.A.VOICE_INVITE_SUGGESTIONS_POPOVER);
    (0, E.A)({
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
    let _ = l.useCallback(() => {
        let e = y.A.getGuild(t.guild_id);
        o()(null != e, "VoiceInviteSuggestionsPopover must be used in context of a guild"),
            (0, h.mMO)(async () => {
                let { default: l } = await Promise.all([n.e("43600"), n.e("28136"), n.e("74918")]).then(
                    n.bind(n, 234355),
                );
                return (n) => (0, i.jsx)(l, { ...n, guild: e, channel: t, source: G.PE1.VOICE_INVITE_SUGGESTIONS });
            }),
            c();
    }, [t, c]);
    return (0, i.jsx)("div", {
        ref: u,
        "aria-label": U.intl.string(U.t.o53CL2),
        className: a()(w.popover, P.oO),
        children: (0, i.jsxs)("div", {
            className: P.vW,
            children: [
                p &&
                    (0, i.jsx)(h.Text, {
                        variant: "text-sm/medium",
                        color: "text-muted",
                        className: P.DD,
                        children: U.intl.string(U.t["EE+P0H"]),
                    }),
                (0, i.jsxs)("ul", {
                    className: P.p_,
                    children: [
                        m.map((e) => (0, i.jsx)(H, { channel: t, user: e, ringingEnabled: p }, e.id)),
                        (0, i.jsxs)(h.DUT, {
                            tag: "li",
                            onClick: _,
                            className: a()(P.nM, P.vk),
                            children: [
                                (0, i.jsx)("div", {
                                    className: P.R4,
                                    children: (0, i.jsx)(h.nFg, { size: "xs", className: P.Kk }),
                                }),
                                (0, i.jsx)(h.Text, {
                                    variant: "text-md/medium",
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
    let { channel: t, user: n, ringingEnabled: s } = e,
        r = t.guild_id,
        o = l.useRef(null),
        d = (0, c.bG)([v.Ay], () => v.Ay.getMember(r, n.id), [r, n.id]),
        { isHoveringOrFocusing: x } = (0, D.L7)(o),
        [C, E] = l.useState(null),
        {
            icon: S,
            iconColor: y,
            tooltipText: w,
            disabled: B,
            shouldHideButton: H,
            onClick: F,
        } = (0, T.A)({ user: n, channel: t, location: V }),
        { showActivityStatus: K } = M.o.useExperiment(
            { guildId: r, location: "VoiceInviteSuggestionsPopover.InviteRow" },
            { autoTrackExposure: !1 },
        ),
        {
            status: W,
            isMobileOnline: Y,
            activities: z,
        } = (0, c.cf)(
            [O.A],
            () => ({
                status: O.A.getStatus(n.id, r),
                isMobileOnline: O.A.isMobileOnline(n.id),
                activities: O.A.getActivities(n.id, r),
            }),
            [n.id, r],
        ),
        { activityStatusText: q, activityStatusIcon: X } = l.useMemo(() => {
            if (!K) return { activityStatusText: {}, activityStatusIcon: void 0 };
            let e = z.find((e) => e.type !== G.$pd.CUSTOM_STATUS && e.type !== G.$pd.HANG_STATUS);
            return { activityStatusText: (0, p.A)(e, !1), activityStatusIcon: null == e ? void 0 : (0, f.f)(e) };
        }, [K, z]),
        { voiceChannel: J } = (0, g.A)({ userId: n.id }),
        Q = (0, I.Ay)(J),
        $ = (0, h.S31)(h.clD.ONLINE),
        Z = "success" === C || "sending" === C,
        ee = l.useCallback(
            (e) => {
                e.stopPropagation(), B || F();
            },
            [F, B],
        ),
        et = l.useCallback(async () => {
            if (Z) return;
            async function e() {
                let e = j.A.getInvite(t.id, {}) ?? null;
                if (null == e) {
                    if (!R.A.can(G.xBc.CREATE_INSTANT_INVITE, t)) return null;
                    try {
                        await A.Ay.createInvite(t.id, {}, V);
                    } catch (e) {
                        return null;
                    }
                    e = j.A.getInvite(t.id, {}) ?? null;
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
        }, [Z, n, t]),
        {
            avatarDecorationSrc: en,
            avatarSrc: ei,
            eventHandlers: el,
        } = (0, b.A)({ userId: n.id, size: h._3J.SIZE_24, animateOnHover: !x, guildId: r });
    if (null == d) return null;
    let es = L.Ay.getName(n),
        ea = U.intl.string(U.t.jYnGPG),
        er = K && null != q.text,
        eo = K && null != J && null != Q;
    return (0, i.jsxs)(h.DUT, {
        innerRef: o,
        tag: "li",
        className: a()(P.nM, { [P.vk]: !Z }),
        "aria-disabled": Z,
        onClick: et,
        "aria-label": ea,
        children: [
            (0, i.jsx)(h.euF, {
                className: P.my,
                "aria-label": es,
                size: h._3J.SIZE_24,
                src: ei,
                avatarDecoration: en,
                status: K ? W : void 0,
                isMobile: K ? Y : void 0,
                ...el,
            }),
            (0, i.jsxs)("div", {
                className: P.VW,
                children: [
                    (0, i.jsx)(h.Text, {
                        variant: s ? "text-sm/medium" : "text-md/medium",
                        className: P.UU,
                        lineClamp: 1,
                        children: es,
                    }),
                    (eo || er) &&
                        (0, i.jsxs)("div", {
                            className: P.J2,
                            children: [
                                eo
                                    ? (0, i.jsx)(N.A, { size: "custom", color: $, channel: J, className: P.RI })
                                    : null != X
                                      ? (0, i.jsx)(_.A, { icon: X, className: P.RI })
                                      : null,
                                (0, i.jsx)(h.Text, {
                                    variant: "text-xs/medium",
                                    color: "text-status-online",
                                    lineClamp: 1,
                                    children: eo ? Q : q.text,
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
                !s &&
                (0, i.jsx)("div", {
                    className: P.SB,
                    children: (0, i.jsx)(h.Rvf, { color: "currentColor", size: "xs", className: P.Kk }),
                }),
            s &&
                !H &&
                (0, i.jsx)(u.m_, {
                    text: w,
                    children: (0, i.jsx)(h.DUT, {
                        className: a()(P.D9, k.button, k.secondary, { [P.r9]: B }),
                        onClick: ee,
                        "aria-disabled": B,
                        children: (0, i.jsx)(S, { size: "xxs", color: y, className: P.Kk }),
                    }),
                }),
        ],
    });
}
