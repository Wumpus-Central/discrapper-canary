n.d(t, { w: () => X });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(284009),
    o = n.n(r),
    d = n(110259),
    c = n(311907),
    u = n(990078),
    h = n(192308),
    A = n(834730),
    _ = n(939249),
    m = n(177953),
    g = n(935154),
    p = n(652215),
    f = n(778712),
    E = n(97808),
    x = n(863610),
    I = n(283973),
    C = n(846293),
    b = n(774300),
    N = n(566903),
    S = n(714114),
    v = n(864436),
    T = n(835072),
    y = n(793574),
    R = n(688810),
    j = n(139286),
    L = n(47167),
    O = n(713517),
    G = n(854627),
    D = n(10862),
    M = n(164891),
    U = n(135635),
    P = n(696451),
    w = n(71393),
    k = n(958590),
    V = n(576705),
    B = n(290863),
    H = n(427262),
    F = n(582904),
    W = n(985018),
    Y = n(176277),
    K = n(824078),
    z = n(518229);
let q = "VoiceInviteSuggestionsPopover";
function X(e) {
    let { channel: t, onHoverOrFocus: s, setPopoutRef: r, closePopout: c } = e,
        u = l.useRef(null),
        g = (0, O.A)(u),
        f = (0, F.kt)({ channel: t }),
        { enabled: E } = M.A.useExperiment({ guildId: t.guild_id, location: "VoiceInviteSuggestionsPopover" }),
        { analyticsLocations: x } = (0, R.Ay)(y.A.VOICE_INVITE_SUGGESTIONS_POPOVER);
    (0, j.A)({
        name: d.ImpressionNames.VOICE_INVITE_SUGGESTIONS_POPOVER,
        type: d.ImpressionTypes.POPOUT,
        properties: { voice_channel_id: t.id, voice_guild_id: t.guild_id, location_stack: x },
    }),
        l.useEffect(() => {
            r?.(u.current);
        }, [r]),
        l.useEffect(() => {
            s?.(g.isHoveringOrFocusing);
        }, [s, g]);
    let I = l.useCallback(() => {
        let e = w.A.getGuild(t.guild_id);
        o()(null != e, "VoiceInviteSuggestionsPopover must be used in context of a guild"),
            (0, h.openModalLazy)(async () => {
                let { default: l } = await Promise.all([n.e("28136"), n.e("43600"), n.e("42738")]).then(
                    n.bind(n, 234355),
                );
                return (n) => (0, i.jsx)(l, { ...n, guild: e, channel: t, source: p.PE1.VOICE_INVITE_SUGGESTIONS });
            }),
            c();
    }, [t, c]);
    return (0, i.jsx)("div", {
        ref: u,
        "aria-label": W.intl.string(W.t.o53CL2),
        className: a()(K.popover, Y.oO),
        children: (0, i.jsxs)("div", {
            className: Y.vW,
            children: [
                E &&
                    (0, i.jsx)(A.E, {
                        variant: "text-sm/medium",
                        color: "text-muted",
                        className: Y.DD,
                        children: W.intl.string(W.t["EE+P0H"]),
                    }),
                (0, i.jsxs)("ul", {
                    className: Y.p_,
                    children: [
                        f.map((e) => (0, i.jsx)(Q, { channel: t, user: e, ringingEnabled: E }, e.id)),
                        (0, i.jsxs)(_.D, {
                            tag: "li",
                            onClick: I,
                            className: a()(Y.nM, Y.vk),
                            children: [
                                (0, i.jsx)("div", {
                                    className: Y.R4,
                                    children: (0, i.jsx)(m.n, { size: "custom", className: Y.Kk }),
                                }),
                                (0, i.jsx)(A.E, {
                                    variant: "text-sm/medium",
                                    className: Y.UU,
                                    lineClamp: 1,
                                    children: W.intl.string(W.t.NOP3Ry),
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        }),
    });
}
function Q(e) {
    let { channel: t, user: n, ringingEnabled: s } = e,
        r = t.guild_id,
        o = l.useRef(null),
        d = (0, c.bG)([P.Ay], () => P.Ay.getMember(r, n.id), [r, n.id]),
        { isHoveringOrFocusing: h } = (0, O.A)(o),
        [m, y] = l.useState(null),
        {
            icon: R,
            iconColor: j,
            tooltipText: M,
            disabled: w,
            shouldHideButton: F,
            onClick: K,
        } = (0, U.A)({ user: n, channel: t, location: q }),
        {
            status: X,
            isMobileOnline: Q,
            activities: J,
        } = (0, c.cf)(
            [B.A],
            () => ({
                status: B.A.getStatus(n.id, r),
                isMobileOnline: B.A.isMobileOnline(n.id),
                activities: B.A.getActivities(n.id, r),
            }),
            [n.id, r],
        ),
        { activityStatusText: Z, activityStatusIcon: $ } = l.useMemo(() => {
            let e = J.find((e) => e.type !== p.$pd.CUSTOM_STATUS && e.type !== p.$pd.HANG_STATUS);
            return { activityStatusText: (0, N.A)(e, !1), activityStatusIcon: null == e ? void 0 : (0, T.f)(e) };
        }, [J]),
        { voiceChannel: ee } = (0, S.A)({ userId: n.id }),
        et = (0, L.Ay)(ee),
        en = (0, g.S3)(p.clD.ONLINE),
        ei = "success" === m || "sending" === m,
        el = l.useCallback(
            (e) => {
                e.stopPropagation(), w || K();
            },
            [K, w],
        ),
        es = l.useCallback(async () => {
            if (ei) return;
            async function e() {
                let e = k.A.getInvite(t.id, {}) ?? null;
                if (null == e) {
                    if (!V.A.can(p.xBc.CREATE_INSTANT_INVITE, t)) return null;
                    try {
                        await C.Ay.createInvite(t.id, {}, q);
                    } catch (e) {
                        return null;
                    }
                    e = k.A.getInvite(t.id, {}) ?? null;
                }
                return e?.code ?? null;
            }
            y("sending");
            let i = await e();
            null == i
                ? y(null)
                : b.A.enqueue(
                      {
                          type: b.F.USER,
                          user: n,
                          inviteKey: i,
                          location: q,
                          inviteAnalyticsMetadata: { source: p.PE1.VOICE_INVITE_SUGGESTIONS },
                      },
                      (e) => {
                          y(e ? "success" : null);
                      },
                  );
        }, [ei, n, t]),
        {
            avatarDecorationSrc: ea,
            avatarSrc: er,
            eventHandlers: eo,
        } = (0, G.A)({ userId: n.id, size: f._3.SIZE_24, animateOnHover: !h, guildId: r });
    if (null == d) return null;
    let ed = H.Ay.getName(n),
        ec = W.intl.string(W.t.jYnGPG),
        eu = X !== p.clD.OFFLINE ? X : void 0,
        eh = null != Z.text,
        eA = null != ee && null != et;
    return (0, i.jsxs)(_.D, {
        innerRef: o,
        tag: "li",
        className: a()(Y.nM, { [Y.vk]: !ei }),
        "aria-disabled": ei,
        onClick: es,
        "aria-label": ec,
        children: [
            (0, i.jsx)(E.eu, {
                className: Y.my,
                "aria-label": ed,
                size: f._3.SIZE_24,
                src: er,
                avatarDecoration: ea,
                status: eu,
                isMobile: Q,
                ...eo,
            }),
            (0, i.jsxs)("div", {
                className: Y.VW,
                children: [
                    (0, i.jsx)(A.E, { variant: "text-sm/medium", className: Y.UU, lineClamp: 1, children: ed }),
                    (eA || eh) &&
                        (0, i.jsxs)("div", {
                            className: Y.J2,
                            children: [
                                eA
                                    ? (0, i.jsx)(D.A, { size: "custom", color: en, channel: ee, className: Y.RI })
                                    : null != $
                                      ? (0, i.jsx)(v.A, { icon: $, className: Y.RI })
                                      : null,
                                (0, i.jsx)(A.E, {
                                    variant: "text-xs/medium",
                                    color: "text-status-online",
                                    lineClamp: 1,
                                    children: eA ? et : Z.text,
                                }),
                            ],
                        }),
                ],
            }),
            "sending" === m &&
                (0, i.jsx)("div", { className: Y.r$, children: (0, i.jsx)(x.n, { dotRadius: 2, themed: !0 }) }),
            "success" === m &&
                (0, i.jsx)(A.E, {
                    variant: "text-xs/medium",
                    color: "text-muted",
                    className: Y.h5,
                    lineClamp: 1,
                    children: W.intl.string(W.t["8BEiNn"]),
                }),
            null == m &&
                !s &&
                (0, i.jsx)("div", {
                    className: Y.SB,
                    children: (0, i.jsx)(I.R, { color: "currentColor", size: "sm", className: Y.Kk }),
                }),
            s &&
                !F &&
                (0, i.jsx)(u.m, {
                    text: M,
                    children: (0, i.jsx)(_.D, {
                        className: a()(Y.D9, z.button, z.secondary, { [Y.r9]: w }),
                        onClick: el,
                        "aria-disabled": w,
                        children: (0, i.jsx)(R, { size: "xxs", color: j, className: Y.Kk }),
                    }),
                }),
        ],
    });
}
