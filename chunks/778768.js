t.d(i, { w: () => q });
var n = t(477900),
    l = t(582128),
    s = t(503698),
    a = t.n(s),
    r = t(284009),
    d = t.n(r),
    o = t(562708),
    u = t(350835),
    c = t(17928),
    A = t(192308),
    m = t(315710),
    g = t(939249),
    h = t(177953),
    f = t(834730),
    p = t(935154),
    I = t(652215),
    v = t(778712),
    S = t(97808),
    x = t(863610),
    _ = t(283973),
    E = t(376728),
    N = t(774300),
    y = t(566903),
    C = t(714114),
    b = t(864436),
    j = t(835072),
    T = t(793574),
    O = t(688810),
    G = t(139286),
    V = t(47167),
    P = t(713517),
    w = t(854627),
    k = t(10862),
    R = t(696451),
    U = t(71393),
    M = t(958590),
    D = t(576705),
    L = t(290863),
    F = t(427262),
    z = t(582904),
    B = t(105292),
    K = t(469640);
let Y = "VoiceInviteSuggestionsPopover";
function q(e) {
    let { channel: i, forceOpen: s, onHover: r, setPopoutRef: u, closePopout: c } = e,
        p = l.useRef(null),
        v = (0, P.M)(p),
        S = (0, z.kt)({ channel: i }),
        { analyticsLocations: x } = (0, O.Ay)(T.A.VOICE_INVITE_SUGGESTIONS_POPOVER);
    (l.useEffect(() => {
        s && p.current?.focus();
    }, [s]),
        (0, G.A)({
            name: o.ImpressionNames.VOICE_INVITE_SUGGESTIONS_POPOVER,
            type: o.ImpressionTypes.POPOUT,
            properties: { voice_channel_id: i.id, voice_guild_id: i.guild_id, location_stack: x },
        }),
        l.useEffect(() => {
            u?.(p.current);
        }, [u]),
        l.useEffect(() => {
            r?.(v);
        }, [r, v]));
    let _ = l.useCallback(() => {
        let e = U.A.getGuild(i.guild_id);
        (d()(null != e, "VoiceInviteSuggestionsPopover must be used in context of a guild"),
            (0, A.openModalLazy)(async () => {
                let { default: l } = await Promise.all([
                    t.e("683621"),
                    t.e("711162"),
                    t.e("919170"),
                    t.e("159957"),
                    t.e("728136"),
                    t.e("216084"),
                    t.e("284819"),
                ]).then(t.bind(t, 405342));
                return (t) => (0, n.jsx)(l, { ...t, guild: e, channel: i, source: I.PE1.VOICE_INVITE_SUGGESTIONS });
            }),
            c());
    }, [i, c]);
    return (
        (0, m.tj)(p, { disable: !s }),
        (0, n.jsx)("div", {
            role: "dialog",
            tabIndex: -1,
            ref: p,
            "aria-label": B.intl.string(B.t.o53CL2),
            className: K.oO,
            children: (0, n.jsx)("div", {
                className: K.vW,
                children: (0, n.jsxs)("ul", {
                    className: K.p_,
                    children: [
                        S.map((e) => (0, n.jsx)($, { channel: i, user: e }, e.id)),
                        (0, n.jsxs)(g.D, {
                            tag: "li",
                            onClick: _,
                            className: a()(K.nM, K.vk),
                            children: [
                                (0, n.jsx)("div", {
                                    className: K.R4,
                                    children: (0, n.jsx)(h.n, { size: "custom", className: K.Kk }),
                                }),
                                (0, n.jsx)(f.E, {
                                    variant: "text-sm/medium",
                                    className: K.UU,
                                    lineClamp: 1,
                                    children: B.intl.string(B.t.NOP3Ry),
                                }),
                            ],
                        }),
                    ],
                }),
            }),
        })
    );
}
function $(e) {
    let { channel: i, user: t } = e,
        s = i.guild_id,
        r = l.useRef(null),
        d = (0, c.bG)([R.Ay], () => R.Ay.getMember(s, t.id), [s, t.id]),
        { isHoveringOrFocusing: o } = (0, P.A)(r),
        [A, m] = l.useState(null),
        {
            status: h,
            isMobileOnline: T,
            activities: O,
        } = (0, c.cf)(
            [L.A],
            () => ({
                status: L.A.getStatus(t.id, s),
                isMobileOnline: L.A.isMobileOnline(t.id),
                activities: L.A.getActivities(t.id, s),
            }),
            [t.id, s],
        ),
        { activityStatusText: G, activityStatusIcon: U } = l.useMemo(() => {
            let e = O.find((e) => e.type !== u.$.CUSTOM_STATUS && e.type !== u.$.HANG_STATUS);
            return { activityStatusText: (0, y.A)(e, !1), activityStatusIcon: null == e ? void 0 : (0, j.f)(e) };
        }, [O]),
        { voiceChannel: z } = (0, C.Ay)({ userId: t.id }),
        q = (0, V.Ay)(z),
        $ = (0, p.S3)(I.clD.ONLINE),
        H = "success" === A || "sending" === A,
        W = l.useCallback(async () => {
            if (H) return;
            async function e() {
                let e = M.A.getInvite(i.id, {}) ?? null;
                if (null == e) {
                    if (!D.A.can(I.xBc.CREATE_INSTANT_INVITE, i)) return null;
                    try {
                        await E.Ay.createInvite(i.id, {}, Y);
                    } catch (e) {
                        return null;
                    }
                    e = M.A.getInvite(i.id, {}) ?? null;
                }
                return e?.code ?? null;
            }
            m("sending");
            let n = await e();
            null == n
                ? m(null)
                : N.A.enqueue(
                      {
                          type: N.F.USER,
                          user: t,
                          inviteKey: n,
                          location: Y,
                          inviteAnalyticsMetadata: { source: I.PE1.VOICE_INVITE_SUGGESTIONS },
                      },
                      (e) => {
                          m(e ? "success" : null);
                      },
                  );
        }, [H, t, i]),
        {
            avatarDecorationSrc: Z,
            avatarSrc: J,
            eventHandlers: X,
        } = (0, w.A)({ userId: t.id, size: v._3.SIZE_24, animateOnHover: !o, guildId: s });
    if (null == d) return null;
    let Q = F.Ay.getName(t),
        ee = B.intl.string(B.t.jYnGPG),
        ei = h !== I.clD.OFFLINE ? h : void 0,
        et = null != G.text,
        en = null != z && null != q;
    return (0, n.jsxs)(g.D, {
        innerRef: r,
        tag: "li",
        className: a()(K.nM, { [K.vk]: !H }),
        "aria-disabled": H,
        onClick: W,
        "aria-label": ee,
        children: [
            (0, n.jsx)(S.eu, {
                className: K.my,
                "aria-label": Q,
                size: v._3.SIZE_24,
                src: J,
                avatarDecoration: Z,
                status: ei,
                isMobile: T,
                ...X,
            }),
            (0, n.jsxs)("div", {
                className: K.VW,
                children: [
                    (0, n.jsx)(f.E, { variant: "text-sm/medium", className: K.UU, lineClamp: 1, children: Q }),
                    (en || et) &&
                        (0, n.jsxs)("div", {
                            className: K.J2,
                            children: [
                                en
                                    ? (0, n.jsx)(k.A, { size: "custom", color: $, channel: z, className: K.RI })
                                    : null != U
                                      ? (0, n.jsx)(b.A, { icon: U, className: K.RI })
                                      : null,
                                (0, n.jsx)(f.E, {
                                    variant: "text-xs/medium",
                                    color: "text-status-online",
                                    lineClamp: 1,
                                    children: en ? q : G.text,
                                }),
                            ],
                        }),
                ],
            }),
            "sending" === A &&
                (0, n.jsx)("div", { className: K.r$, children: (0, n.jsx)(x.n, { dotRadius: 2, themed: !0 }) }),
            "success" === A &&
                (0, n.jsx)(f.E, {
                    variant: "text-xs/medium",
                    color: "text-muted",
                    className: K.h5,
                    lineClamp: 1,
                    children: B.intl.string(B.t["8BEiNn"]),
                }),
            null == A &&
                (0, n.jsx)("div", {
                    className: K.SB,
                    children: (0, n.jsx)(_.R, { color: "currentColor", size: "sm", className: K.Kk }),
                }),
        ],
    });
}
