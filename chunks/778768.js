t.d(i, { w: () => Y });
var n = t(477900),
    l = t(582128),
    s = t(503698),
    a = t.n(s),
    r = t(284009),
    d = t.n(r),
    o = t(562708),
    u = t(17928),
    c = t(192308),
    A = t(315710),
    m = t(939249),
    g = t(177953),
    h = t(834730),
    p = t(935154),
    f = t(652215),
    I = t(778712),
    v = t(97808),
    S = t(863610),
    x = t(283973),
    _ = t(376728),
    E = t(774300),
    N = t(566903),
    y = t(714114),
    C = t(864436),
    b = t(835072),
    j = t(793574),
    T = t(688810),
    O = t(139286),
    G = t(47167),
    V = t(713517),
    P = t(854627),
    w = t(10862),
    k = t(696451),
    R = t(71393),
    U = t(958590),
    M = t(576705),
    D = t(290863),
    L = t(427262),
    F = t(582904),
    z = t(105292),
    B = t(469640);
let K = "VoiceInviteSuggestionsPopover";
function Y(e) {
    let { channel: i, forceOpen: s, onHover: r, setPopoutRef: u, closePopout: p } = e,
        I = l.useRef(null),
        v = (0, V.M)(I),
        S = (0, F.kt)({ channel: i }),
        { analyticsLocations: x } = (0, T.Ay)(j.A.VOICE_INVITE_SUGGESTIONS_POPOVER);
    (l.useEffect(() => {
        s && I.current?.focus();
    }, [s]),
        (0, O.A)({
            name: o.ImpressionNames.VOICE_INVITE_SUGGESTIONS_POPOVER,
            type: o.ImpressionTypes.POPOUT,
            properties: { voice_channel_id: i.id, voice_guild_id: i.guild_id, location_stack: x },
        }),
        l.useEffect(() => {
            u?.(I.current);
        }, [u]),
        l.useEffect(() => {
            r?.(v);
        }, [r, v]));
    let _ = l.useCallback(() => {
        let e = R.A.getGuild(i.guild_id);
        (d()(null != e, "VoiceInviteSuggestionsPopover must be used in context of a guild"),
            (0, c.openModalLazy)(async () => {
                let { default: l } = await Promise.all([
                    t.e("683621"),
                    t.e("711162"),
                    t.e("919170"),
                    t.e("159957"),
                    t.e("728136"),
                    t.e("216084"),
                    t.e("284819"),
                ]).then(t.bind(t, 405342));
                return (t) => (0, n.jsx)(l, { ...t, guild: e, channel: i, source: f.PE1.VOICE_INVITE_SUGGESTIONS });
            }),
            p());
    }, [i, p]);
    return (
        (0, A.tj)(I, { disable: !s }),
        (0, n.jsx)("div", {
            role: "dialog",
            tabIndex: -1,
            ref: I,
            "aria-label": z.intl.string(z.t.o53CL2),
            className: B.oO,
            children: (0, n.jsx)("div", {
                className: B.vW,
                children: (0, n.jsxs)("ul", {
                    className: B.p_,
                    children: [
                        S.map((e) => (0, n.jsx)(q, { channel: i, user: e }, e.id)),
                        (0, n.jsxs)(m.D, {
                            tag: "li",
                            onClick: _,
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
                                    children: z.intl.string(z.t.NOP3Ry),
                                }),
                            ],
                        }),
                    ],
                }),
            }),
        })
    );
}
function q(e) {
    let { channel: i, user: t } = e,
        s = i.guild_id,
        r = l.useRef(null),
        d = (0, u.bG)([k.Ay], () => k.Ay.getMember(s, t.id), [s, t.id]),
        { isHoveringOrFocusing: o } = (0, V.A)(r),
        [c, A] = l.useState(null),
        {
            status: g,
            isMobileOnline: j,
            activities: T,
        } = (0, u.cf)(
            [D.A],
            () => ({
                status: D.A.getStatus(t.id, s),
                isMobileOnline: D.A.isMobileOnline(t.id),
                activities: D.A.getActivities(t.id, s),
            }),
            [t.id, s],
        ),
        { activityStatusText: O, activityStatusIcon: R } = l.useMemo(() => {
            let e = T.find((e) => e.type !== f.$pd.CUSTOM_STATUS && e.type !== f.$pd.HANG_STATUS);
            return { activityStatusText: (0, N.A)(e, !1), activityStatusIcon: null == e ? void 0 : (0, b.f)(e) };
        }, [T]),
        { voiceChannel: F } = (0, y.Ay)({ userId: t.id }),
        Y = (0, G.Ay)(F),
        q = (0, p.S3)(f.clD.ONLINE),
        $ = "success" === c || "sending" === c,
        H = l.useCallback(async () => {
            if ($) return;
            async function e() {
                let e = U.A.getInvite(i.id, {}) ?? null;
                if (null == e) {
                    if (!M.A.can(f.xBc.CREATE_INSTANT_INVITE, i)) return null;
                    try {
                        await _.Ay.createInvite(i.id, {}, K);
                    } catch (e) {
                        return null;
                    }
                    e = U.A.getInvite(i.id, {}) ?? null;
                }
                return e?.code ?? null;
            }
            A("sending");
            let n = await e();
            null == n
                ? A(null)
                : E.A.enqueue(
                      {
                          type: E.F.USER,
                          user: t,
                          inviteKey: n,
                          location: K,
                          inviteAnalyticsMetadata: { source: f.PE1.VOICE_INVITE_SUGGESTIONS },
                      },
                      (e) => {
                          A(e ? "success" : null);
                      },
                  );
        }, [$, t, i]),
        {
            avatarDecorationSrc: W,
            avatarSrc: Z,
            eventHandlers: J,
        } = (0, P.A)({ userId: t.id, size: I._3.SIZE_24, animateOnHover: !o, guildId: s });
    if (null == d) return null;
    let X = L.Ay.getName(t),
        Q = z.intl.string(z.t.jYnGPG),
        ee = g !== f.clD.OFFLINE ? g : void 0,
        ei = null != O.text,
        et = null != F && null != Y;
    return (0, n.jsxs)(m.D, {
        innerRef: r,
        tag: "li",
        className: a()(B.nM, { [B.vk]: !$ }),
        "aria-disabled": $,
        onClick: H,
        "aria-label": Q,
        children: [
            (0, n.jsx)(v.eu, {
                className: B.my,
                "aria-label": X,
                size: I._3.SIZE_24,
                src: Z,
                avatarDecoration: W,
                status: ee,
                isMobile: j,
                ...J,
            }),
            (0, n.jsxs)("div", {
                className: B.VW,
                children: [
                    (0, n.jsx)(h.E, { variant: "text-sm/medium", className: B.UU, lineClamp: 1, children: X }),
                    (et || ei) &&
                        (0, n.jsxs)("div", {
                            className: B.J2,
                            children: [
                                et
                                    ? (0, n.jsx)(w.A, { size: "custom", color: q, channel: F, className: B.RI })
                                    : null != R
                                      ? (0, n.jsx)(C.A, { icon: R, className: B.RI })
                                      : null,
                                (0, n.jsx)(h.E, {
                                    variant: "text-xs/medium",
                                    color: "text-status-online",
                                    lineClamp: 1,
                                    children: et ? Y : O.text,
                                }),
                            ],
                        }),
                ],
            }),
            "sending" === c &&
                (0, n.jsx)("div", { className: B.r$, children: (0, n.jsx)(S.n, { dotRadius: 2, themed: !0 }) }),
            "success" === c &&
                (0, n.jsx)(h.E, {
                    variant: "text-xs/medium",
                    color: "text-muted",
                    className: B.h5,
                    lineClamp: 1,
                    children: z.intl.string(z.t["8BEiNn"]),
                }),
            null == c &&
                (0, n.jsx)("div", {
                    className: B.SB,
                    children: (0, n.jsx)(x.R, { color: "currentColor", size: "sm", className: B.Kk }),
                }),
        ],
    });
}
