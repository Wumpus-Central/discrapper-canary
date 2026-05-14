i.d(t, { w: () => $ });
var n = i(627968),
    l = i(64700),
    s = i(503698),
    a = i.n(s),
    r = i(284009),
    d = i.n(r),
    u = i(562708),
    c = i(17928),
    o = i(990078),
    m = i(192308),
    h = i(834730),
    A = i(939249),
    g = i(177953),
    p = i(133171),
    I = i(652215),
    x = i(778712),
    v = i(97808),
    f = i(863610),
    E = i(283973),
    N = i(376728),
    _ = i(774300),
    S = i(566903),
    j = i(714114),
    C = i(864436),
    y = i(835072),
    T = i(793574),
    b = i(688810),
    O = i(139286),
    G = i(47167),
    V = i(713517),
    R = i(854627),
    k = i(10862),
    P = i(164891),
    D = i(135635),
    U = i(696451),
    w = i(71393),
    M = i(958590),
    L = i(576705),
    H = i(290863),
    F = i(427262),
    z = i(582904),
    Y = i(375708),
    B = i(176277),
    K = i(824078),
    q = i(518229);
let W = "VoiceInviteSuggestionsPopover";
function $(e) {
    let { channel: t, onHoverOrFocus: s, setPopoutRef: r, closePopout: c } = e,
        o = l.useRef(null),
        p = (0, V.A)(o),
        x = (0, z.kt)({ channel: t }),
        { enabled: v } = P.A.useExperiment({ guildId: t.guild_id, location: "VoiceInviteSuggestionsPopover" }),
        { analyticsLocations: f } = (0, b.Ay)(T.A.VOICE_INVITE_SUGGESTIONS_POPOVER);
    (0, O.A)({
        name: u.ImpressionNames.VOICE_INVITE_SUGGESTIONS_POPOVER,
        type: u.ImpressionTypes.POPOUT,
        properties: { voice_channel_id: t.id, voice_guild_id: t.guild_id, location_stack: f },
    }),
        l.useEffect(() => {
            r?.(o.current);
        }, [r]),
        l.useEffect(() => {
            s?.(p.isHoveringOrFocusing);
        }, [s, p]);
    let E = l.useCallback(() => {
        let e = w.A.getGuild(t.guild_id);
        d()(null != e, "VoiceInviteSuggestionsPopover must be used in context of a guild"),
            (0, m.openModalLazy)(async () => {
                let { default: l } = await Promise.all([
                    i.e("49909"),
                    i.e("59957"),
                    i.e("28136"),
                    i.e("16084"),
                    i.e("22547"),
                ]).then(i.bind(i, 1310));
                return (i) => (0, n.jsx)(l, { ...i, guild: e, channel: t, source: I.PE1.VOICE_INVITE_SUGGESTIONS });
            }),
            c();
    }, [t, c]);
    return (0, n.jsx)("div", {
        ref: o,
        "aria-label": Y.intl.string(Y.t.o53CL2),
        className: a()(K.popover, B.oO),
        children: (0, n.jsxs)("div", {
            className: B.vW,
            children: [
                v &&
                    (0, n.jsx)(h.E, {
                        variant: "text-sm/medium",
                        color: "text-muted",
                        className: B.DD,
                        children: Y.intl.string(Y.t["EE+P0H"]),
                    }),
                (0, n.jsxs)("ul", {
                    className: B.p_,
                    children: [
                        x.map((e) => (0, n.jsx)(Z, { channel: t, user: e, ringingEnabled: v }, e.id)),
                        (0, n.jsxs)(A.D, {
                            tag: "li",
                            onClick: E,
                            className: a()(B.nM, B.vk),
                            children: [
                                (0, n.jsx)("div", {
                                    className: B.R4,
                                    children: (0, n.jsx)(g.n, { size: "custom", className: B.Kk }),
                                }),
                                (0, n.jsx)(h.E, {
                                    variant: "text-sm/medium",
                                    className: B.UU,
                                    lineClamp: 1,
                                    children: Y.intl.string(Y.t.NOP3Ry),
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        }),
    });
}
function Z(e) {
    let { channel: t, user: i, ringingEnabled: s } = e,
        r = t.guild_id,
        d = l.useRef(null),
        u = (0, c.bG)([U.Ay], () => U.Ay.getMember(r, i.id), [r, i.id]),
        { isHoveringOrFocusing: m } = (0, V.A)(d),
        [g, T] = l.useState(null),
        {
            icon: b,
            iconColor: O,
            tooltipText: P,
            disabled: w,
            shouldHideButton: z,
            onClick: K,
        } = (0, D.A)({ user: i, channel: t, location: W }),
        {
            status: $,
            isMobileOnline: Z,
            activities: J,
        } = (0, c.cf)(
            [H.A],
            () => ({
                status: H.A.getStatus(i.id, r),
                isMobileOnline: H.A.isMobileOnline(i.id),
                activities: H.A.getActivities(i.id, r),
            }),
            [i.id, r],
        ),
        { activityStatusText: X, activityStatusIcon: Q } = l.useMemo(() => {
            let e = J.find((e) => e.type !== I.$pd.CUSTOM_STATUS && e.type !== I.$pd.HANG_STATUS);
            return { activityStatusText: (0, S.A)(e, !1), activityStatusIcon: null == e ? void 0 : (0, y.f)(e) };
        }, [J]),
        { voiceChannel: ee } = (0, j.A)({ userId: i.id }),
        et = (0, G.Ay)(ee),
        ei = (0, p.S3)(I.clD.ONLINE),
        en = "success" === g || "sending" === g,
        el = l.useCallback(
            (e) => {
                e.stopPropagation(), w || K();
            },
            [K, w],
        ),
        es = l.useCallback(async () => {
            if (en) return;
            async function e() {
                let e = M.A.getInvite(t.id, {}) ?? null;
                if (null == e) {
                    if (!L.A.can(I.xBc.CREATE_INSTANT_INVITE, t)) return null;
                    try {
                        await N.Ay.createInvite(t.id, {}, W);
                    } catch (e) {
                        return null;
                    }
                    e = M.A.getInvite(t.id, {}) ?? null;
                }
                return e?.code ?? null;
            }
            T("sending");
            let n = await e();
            null == n
                ? T(null)
                : _.A.enqueue(
                      {
                          type: _.F.USER,
                          user: i,
                          inviteKey: n,
                          location: W,
                          inviteAnalyticsMetadata: { source: I.PE1.VOICE_INVITE_SUGGESTIONS },
                      },
                      (e) => {
                          T(e ? "success" : null);
                      },
                  );
        }, [en, i, t]),
        {
            avatarDecorationSrc: ea,
            avatarSrc: er,
            eventHandlers: ed,
        } = (0, R.A)({ userId: i.id, size: x._3.SIZE_24, animateOnHover: !m, guildId: r });
    if (null == u) return null;
    let eu = F.Ay.getName(i),
        ec = Y.intl.string(Y.t.jYnGPG),
        eo = $ !== I.clD.OFFLINE ? $ : void 0,
        em = null != X.text,
        eh = null != ee && null != et;
    return (0, n.jsxs)(A.D, {
        innerRef: d,
        tag: "li",
        className: a()(B.nM, { [B.vk]: !en }),
        "aria-disabled": en,
        onClick: es,
        "aria-label": ec,
        children: [
            (0, n.jsx)(v.eu, {
                className: B.my,
                "aria-label": eu,
                size: x._3.SIZE_24,
                src: er,
                avatarDecoration: ea,
                status: eo,
                isMobile: Z,
                ...ed,
            }),
            (0, n.jsxs)("div", {
                className: B.VW,
                children: [
                    (0, n.jsx)(h.E, { variant: "text-sm/medium", className: B.UU, lineClamp: 1, children: eu }),
                    (eh || em) &&
                        (0, n.jsxs)("div", {
                            className: B.J2,
                            children: [
                                eh
                                    ? (0, n.jsx)(k.A, { size: "custom", color: ei, channel: ee, className: B.RI })
                                    : null != Q
                                      ? (0, n.jsx)(C.A, { icon: Q, className: B.RI })
                                      : null,
                                (0, n.jsx)(h.E, {
                                    variant: "text-xs/medium",
                                    color: "text-status-online",
                                    lineClamp: 1,
                                    children: eh ? et : X.text,
                                }),
                            ],
                        }),
                ],
            }),
            "sending" === g &&
                (0, n.jsx)("div", { className: B.r$, children: (0, n.jsx)(f.n, { dotRadius: 2, themed: !0 }) }),
            "success" === g &&
                (0, n.jsx)(h.E, {
                    variant: "text-xs/medium",
                    color: "text-muted",
                    className: B.h5,
                    lineClamp: 1,
                    children: Y.intl.string(Y.t["8BEiNn"]),
                }),
            null == g &&
                !s &&
                (0, n.jsx)("div", {
                    className: B.SB,
                    children: (0, n.jsx)(E.R, { color: "currentColor", size: "sm", className: B.Kk }),
                }),
            s &&
                !z &&
                (0, n.jsx)(o.m, {
                    text: P,
                    children: (0, n.jsx)(A.D, {
                        className: a()(B.D9, q.button, q.secondary, { [B.r9]: w }),
                        onClick: el,
                        "aria-disabled": w,
                        children: (0, n.jsx)(b, { size: "xxs", color: O, className: B.Kk }),
                    }),
                }),
        ],
    });
}
