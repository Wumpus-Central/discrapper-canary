n.d(t, { w: () => P });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(284009),
    o = n.n(r),
    d = n(110259),
    c = n(311907),
    u = n(397927),
    h = n(846293),
    A = n(774300),
    m = n(566903),
    p = n(714114),
    g = n(864436),
    _ = n(835072),
    f = n(793574),
    x = n(688810),
    C = n(139286),
    E = n(47167),
    I = n(854627),
    N = n(10862),
    b = n(696451),
    S = n(71393),
    T = n(958590),
    v = n(576705),
    y = n(290863),
    j = n(427262),
    R = n(222075),
    O = n(582904),
    L = n(652215),
    M = n(985018),
    D = n(357694),
    G = n(248789);
let U = "VoiceInviteSuggestionsPopover";
function P(e) {
    let { channel: t, onHoverOrFocus: s, setPopoutRef: r, closePopout: c } = e,
        h = l.useRef(null),
        A = (0, O.L7)(h),
        m = (0, O.kt)({ channel: t }),
        { analyticsLocations: p } = (0, x.Ay)(f.A.VOICE_INVITE_SUGGESTIONS_POPOVER);
    (0, C.A)({
        name: d.ImpressionNames.VOICE_INVITE_SUGGESTIONS_POPOVER,
        type: d.ImpressionTypes.POPOUT,
        properties: { voice_channel_id: t.id, voice_guild_id: t.guild_id, location_stack: p },
    }),
        l.useEffect(() => {
            r?.(h.current);
        }, [r]),
        l.useEffect(() => {
            s?.(A.isHoveringOrFocusing);
        }, [s, A]);
    let g = l.useCallback(() => {
        let e = S.A.getGuild(t.guild_id);
        o()(null != e, "VoiceInviteSuggestionsPopover must be used in context of a guild"),
            (0, u.mMO)(async () => {
                let { default: l } = await Promise.all([n.e("43600"), n.e("28136"), n.e("74918")]).then(
                    n.bind(n, 234355),
                );
                return (n) => (0, i.jsx)(l, { ...n, guild: e, channel: t, source: L.PE1.VOICE_INVITE_SUGGESTIONS });
            }),
            c();
    }, [t, c]);
    return (0, i.jsx)("div", {
        ref: h,
        "aria-label": M.intl.string(M.t.o53CL2),
        className: a()(G.popover, D.oO),
        children: (0, i.jsx)("div", {
            className: D.vW,
            children: (0, i.jsxs)("ul", {
                className: D.p_,
                children: [
                    m.map((e) => (0, i.jsx)(w, { channel: t, user: e }, e.id)),
                    (0, i.jsxs)(u.DUT, {
                        tag: "li",
                        onClick: g,
                        className: a()(D.nM, D.vk),
                        children: [
                            (0, i.jsx)("div", {
                                className: D.R4,
                                children: (0, i.jsx)(u.nFg, { size: "xs", className: D.Kk }),
                            }),
                            (0, i.jsx)(u.Text, {
                                variant: "text-md/medium",
                                className: D.UU,
                                lineClamp: 1,
                                children: M.intl.string(M.t.NOP3Ry),
                            }),
                        ],
                    }),
                ],
            }),
        }),
    });
}
function w(e) {
    let { channel: t, user: n } = e,
        s = t.guild_id,
        r = l.useRef(null),
        o = (0, c.bG)([b.Ay], () => b.Ay.getMember(s, n.id), [s, n.id]),
        { isHoveringOrFocusing: d } = (0, O.L7)(r),
        [f, x] = l.useState(null),
        { showActivityStatus: C } = R.o.useExperiment(
            { guildId: s, location: "VoiceInviteSuggestionsPopover.InviteRow" },
            { autoTrackExposure: !1 },
        ),
        {
            status: S,
            isMobileOnline: G,
            activities: P,
        } = (0, c.cf)(
            [y.A],
            () => ({
                status: y.A.getStatus(n.id, s),
                isMobileOnline: y.A.isMobileOnline(n.id),
                activities: y.A.getActivities(n.id, s),
            }),
            [n.id, s],
        ),
        { activityStatusText: w, activityStatusIcon: k } = l.useMemo(() => {
            if (!C) return { activityStatusText: {}, activityStatusIcon: void 0 };
            let e = P.find((e) => e.type !== L.$pd.CUSTOM_STATUS && e.type !== L.$pd.HANG_STATUS);
            return { activityStatusText: (0, m.A)(e, !1), activityStatusIcon: null == e ? void 0 : (0, _.f)(e) };
        }, [C, P]),
        { voiceChannel: V } = (0, p.A)({ userId: n.id }),
        B = (0, E.Ay)(V),
        H = (0, u.S31)(u.clD.ONLINE),
        F = "success" === f || "sending" === f,
        K = l.useCallback(async () => {
            if (F) return;
            async function e() {
                let e = T.A.getInvite(t.id, {}) ?? null;
                if (null == e) {
                    if (!v.A.can(L.xBc.CREATE_INSTANT_INVITE, t)) return null;
                    try {
                        await h.Ay.createInvite(t.id, {}, U);
                    } catch (e) {
                        return null;
                    }
                    e = T.A.getInvite(t.id, {}) ?? null;
                }
                return e?.code ?? null;
            }
            x("sending");
            let i = await e();
            null == i
                ? x(null)
                : A.A.enqueue(
                      {
                          type: A.F.USER,
                          user: n,
                          inviteKey: i,
                          location: U,
                          inviteAnalyticsMetadata: { source: L.PE1.VOICE_INVITE_SUGGESTIONS },
                      },
                      (e) => {
                          x(e ? "success" : null);
                      },
                  );
        }, [F, n, t]),
        {
            avatarDecorationSrc: W,
            avatarSrc: Y,
            eventHandlers: z,
        } = (0, I.A)({ userId: n.id, size: u._3J.SIZE_24, animateOnHover: !d, guildId: s });
    if (null == o) return null;
    let q = j.Ay.getName(n),
        X = M.intl.string(M.t.jYnGPG),
        J = C && null != w.text,
        Q = C && null != V && null != B;
    return (0, i.jsxs)(u.DUT, {
        innerRef: r,
        tag: "li",
        className: a()(D.nM, { [D.vk]: !F }),
        "aria-disabled": F,
        onClick: K,
        "aria-label": X,
        children: [
            (0, i.jsx)(u.euF, {
                className: D.my,
                "aria-label": q,
                size: u._3J.SIZE_24,
                src: Y,
                avatarDecoration: W,
                status: C ? S : void 0,
                isMobile: C ? G : void 0,
                ...z,
            }),
            (0, i.jsxs)("div", {
                className: D.VW,
                children: [
                    (0, i.jsx)(u.Text, { variant: "text-md/medium", className: D.UU, lineClamp: 1, children: q }),
                    (Q || J) &&
                        (0, i.jsxs)("div", {
                            className: D.J2,
                            children: [
                                Q
                                    ? (0, i.jsx)(N.A, { size: "custom", color: H, channel: V, className: D.RI })
                                    : null != k
                                      ? (0, i.jsx)(g.A, { icon: k, className: D.RI })
                                      : null,
                                (0, i.jsx)(u.Text, {
                                    variant: "text-xs/medium",
                                    color: "text-status-online",
                                    lineClamp: 1,
                                    children: Q ? B : w.text,
                                }),
                            ],
                        }),
                ],
            }),
            "sending" === f &&
                (0, i.jsx)("div", { className: D.r$, children: (0, i.jsx)(u.nvX, { dotRadius: 2, themed: !0 }) }),
            "success" === f &&
                (0, i.jsx)(u.Text, {
                    variant: "text-xs/medium",
                    color: "text-muted",
                    className: D.h5,
                    lineClamp: 1,
                    children: M.intl.string(M.t["8BEiNn"]),
                }),
            null == f &&
                (0, i.jsx)("div", {
                    className: D.SB,
                    children: (0, i.jsx)(u.Rvf, { color: "currentColor", size: "xs", className: D.Kk }),
                }),
        ],
    });
}
