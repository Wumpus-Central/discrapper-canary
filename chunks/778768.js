i.d(t, { w: () => $ });
var n = i(627968),
    l = i(64700),
    s = i(503698),
    a = i.n(s),
    r = i(284009),
    d = i.n(r),
    o = i(562708),
    u = i(17928),
    c = i(990078),
    m = i(192308),
    h = i(834730),
    g = i(939249),
    A = i(177953),
    p = i(133171),
    I = i(652215),
    x = i(778712),
    v = i(97808),
    f = i(863610),
    _ = i(283973),
    E = i(376728),
    N = i(774300),
    S = i(566903),
    y = i(714114),
    C = i(864436),
    j = i(835072),
    b = i(793574),
    T = i(688810),
    O = i(139286),
    G = i(47167),
    k = i(713517),
    V = i(854627),
    w = i(10862),
    R = i(164891),
    U = i(135635),
    P = i(696451),
    D = i(71393),
    M = i(958590),
    H = i(576705),
    L = i(290863),
    F = i(427262),
    z = i(582904),
    q = i(375708),
    K = i(176277),
    Y = i(824078),
    B = i(518229);
let W = "VoiceInviteSuggestionsPopover";
function $(e) {
    let { channel: t, onHoverOrFocus: s, setPopoutRef: r, closePopout: u } = e,
        c = l.useRef(null),
        p = (0, k.A)(c),
        x = (0, z.kt)({ channel: t }),
        { enabled: v } = R.A.useExperiment({ guildId: t.guild_id, location: "VoiceInviteSuggestionsPopover" }),
        { analyticsLocations: f } = (0, T.Ay)(b.A.VOICE_INVITE_SUGGESTIONS_POPOVER);
    (0, O.A)({
        name: o.ImpressionNames.VOICE_INVITE_SUGGESTIONS_POPOVER,
        type: o.ImpressionTypes.POPOUT,
        properties: { voice_channel_id: t.id, voice_guild_id: t.guild_id, location_stack: f },
    }),
        l.useEffect(() => {
            r?.(c.current);
        }, [r]),
        l.useEffect(() => {
            s?.(p.isHoveringOrFocusing);
        }, [s, p]);
    let _ = l.useCallback(() => {
        let e = D.A.getGuild(t.guild_id);
        d()(null != e, "VoiceInviteSuggestionsPopover must be used in context of a guild"),
            (0, m.openModalLazy)(async () => {
                let { default: l } = await Promise.all([
                    i.e("7017"),
                    i.e("981"),
                    i.e("59957"),
                    i.e("28136"),
                    i.e("16084"),
                    i.e("22547"),
                ]).then(i.bind(i, 1310));
                return (i) => (0, n.jsx)(l, { ...i, guild: e, channel: t, source: I.PE1.VOICE_INVITE_SUGGESTIONS });
            }),
            u();
    }, [t, u]);
    return (0, n.jsx)("div", {
        ref: c,
        "aria-label": q.intl.string(q.t.o53CL2),
        className: a()(Y.popover, K.oO),
        children: (0, n.jsxs)("div", {
            className: K.vW,
            children: [
                v &&
                    (0, n.jsx)(h.E, {
                        variant: "text-sm/medium",
                        color: "text-muted",
                        className: K.DD,
                        children: q.intl.string(q.t["EE+P0H"]),
                    }),
                (0, n.jsxs)("ul", {
                    className: K.p_,
                    children: [
                        x.map((e) => (0, n.jsx)(Z, { channel: t, user: e, ringingEnabled: v }, e.id)),
                        (0, n.jsxs)(g.D, {
                            tag: "li",
                            onClick: _,
                            className: a()(K.nM, K.vk),
                            children: [
                                (0, n.jsx)("div", {
                                    className: K.R4,
                                    children: (0, n.jsx)(A.n, { size: "custom", className: K.Kk }),
                                }),
                                (0, n.jsx)(h.E, {
                                    variant: "text-sm/medium",
                                    className: K.UU,
                                    lineClamp: 1,
                                    children: q.intl.string(q.t.NOP3Ry),
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
        o = (0, u.bG)([P.Ay], () => P.Ay.getMember(r, i.id), [r, i.id]),
        { isHoveringOrFocusing: m } = (0, k.A)(d),
        [A, b] = l.useState(null),
        {
            icon: T,
            iconColor: O,
            tooltipText: R,
            disabled: D,
            shouldHideButton: z,
            onClick: Y,
        } = (0, U.A)({ user: i, channel: t, location: W }),
        {
            status: $,
            isMobileOnline: Z,
            activities: J,
        } = (0, u.cf)(
            [L.A],
            () => ({
                status: L.A.getStatus(i.id, r),
                isMobileOnline: L.A.isMobileOnline(i.id),
                activities: L.A.getActivities(i.id, r),
            }),
            [i.id, r],
        ),
        { activityStatusText: X, activityStatusIcon: Q } = l.useMemo(() => {
            let e = J.find((e) => e.type !== I.$pd.CUSTOM_STATUS && e.type !== I.$pd.HANG_STATUS);
            return { activityStatusText: (0, S.A)(e, !1), activityStatusIcon: null == e ? void 0 : (0, j.f)(e) };
        }, [J]),
        { voiceChannel: ee } = (0, y.A)({ userId: i.id }),
        et = (0, G.Ay)(ee),
        ei = (0, p.S3)(I.clD.ONLINE),
        en = "success" === A || "sending" === A,
        el = l.useCallback(
            (e) => {
                e.stopPropagation(), D || Y();
            },
            [Y, D],
        ),
        es = l.useCallback(async () => {
            if (en) return;
            async function e() {
                let e = M.A.getInvite(t.id, {}) ?? null;
                if (null == e) {
                    if (!H.A.can(I.xBc.CREATE_INSTANT_INVITE, t)) return null;
                    try {
                        await E.Ay.createInvite(t.id, {}, W);
                    } catch (e) {
                        return null;
                    }
                    e = M.A.getInvite(t.id, {}) ?? null;
                }
                return e?.code ?? null;
            }
            b("sending");
            let n = await e();
            null == n
                ? b(null)
                : N.A.enqueue(
                      {
                          type: N.F.USER,
                          user: i,
                          inviteKey: n,
                          location: W,
                          inviteAnalyticsMetadata: { source: I.PE1.VOICE_INVITE_SUGGESTIONS },
                      },
                      (e) => {
                          b(e ? "success" : null);
                      },
                  );
        }, [en, i, t]),
        {
            avatarDecorationSrc: ea,
            avatarSrc: er,
            eventHandlers: ed,
        } = (0, V.A)({ userId: i.id, size: x._3.SIZE_24, animateOnHover: !m, guildId: r });
    if (null == o) return null;
    let eo = F.Ay.getName(i),
        eu = q.intl.string(q.t.jYnGPG),
        ec = $ !== I.clD.OFFLINE ? $ : void 0,
        em = null != X.text,
        eh = null != ee && null != et;
    return (0, n.jsxs)(g.D, {
        innerRef: d,
        tag: "li",
        className: a()(K.nM, { [K.vk]: !en }),
        "aria-disabled": en,
        onClick: es,
        "aria-label": eu,
        children: [
            (0, n.jsx)(v.eu, {
                className: K.my,
                "aria-label": eo,
                size: x._3.SIZE_24,
                src: er,
                avatarDecoration: ea,
                status: ec,
                isMobile: Z,
                ...ed,
            }),
            (0, n.jsxs)("div", {
                className: K.VW,
                children: [
                    (0, n.jsx)(h.E, { variant: "text-sm/medium", className: K.UU, lineClamp: 1, children: eo }),
                    (eh || em) &&
                        (0, n.jsxs)("div", {
                            className: K.J2,
                            children: [
                                eh
                                    ? (0, n.jsx)(w.A, { size: "custom", color: ei, channel: ee, className: K.RI })
                                    : null != Q
                                      ? (0, n.jsx)(C.A, { icon: Q, className: K.RI })
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
            "sending" === A &&
                (0, n.jsx)("div", { className: K.r$, children: (0, n.jsx)(f.n, { dotRadius: 2, themed: !0 }) }),
            "success" === A &&
                (0, n.jsx)(h.E, {
                    variant: "text-xs/medium",
                    color: "text-muted",
                    className: K.h5,
                    lineClamp: 1,
                    children: q.intl.string(q.t["8BEiNn"]),
                }),
            null == A &&
                !s &&
                (0, n.jsx)("div", {
                    className: K.SB,
                    children: (0, n.jsx)(_.R, { color: "currentColor", size: "sm", className: K.Kk }),
                }),
            s &&
                !z &&
                (0, n.jsx)(c.m, {
                    text: R,
                    children: (0, n.jsx)(g.D, {
                        className: a()(K.D9, B.button, B.secondary, { [K.r9]: D }),
                        onClick: el,
                        "aria-disabled": D,
                        children: (0, n.jsx)(T, { size: "xxs", color: O, className: K.Kk }),
                    }),
                }),
        ],
    });
}
