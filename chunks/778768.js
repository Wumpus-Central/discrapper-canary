i.d(t, { w: () => Y });
var n = i(477900),
    l = i(582128),
    s = i(503698),
    a = i.n(s),
    r = i(284009),
    d = i.n(r),
    u = i(562708),
    o = i(17928),
    c = i(192308),
    A = i(315710),
    m = i(939249),
    g = i(177953),
    h = i(834730),
    p = i(935154),
    f = i(652215),
    I = i(778712),
    v = i(97808),
    S = i(863610),
    x = i(283973),
    _ = i(376728),
    E = i(774300),
    N = i(566903),
    y = i(714114),
    C = i(864436),
    j = i(835072),
    b = i(793574),
    T = i(688810),
    O = i(139286),
    G = i(47167),
    P = i(713517),
    V = i(854627),
    k = i(10862),
    w = i(696451),
    R = i(71393),
    D = i(958590),
    M = i(576705),
    U = i(290863),
    L = i(427262),
    F = i(582904),
    z = i(375708),
    B = i(469640);
let K = "VoiceInviteSuggestionsPopover";
function Y(e) {
    let { channel: t, forceOpen: s, onHover: r, setPopoutRef: o, closePopout: p } = e,
        I = l.useRef(null),
        v = (0, P.M)(I),
        S = (0, F.kt)({ channel: t }),
        { analyticsLocations: x } = (0, T.Ay)(b.A.VOICE_INVITE_SUGGESTIONS_POPOVER);
    (l.useEffect(() => {
        s && I.current?.focus();
    }, [s]),
        (0, O.A)({
            name: u.ImpressionNames.VOICE_INVITE_SUGGESTIONS_POPOVER,
            type: u.ImpressionTypes.POPOUT,
            properties: { voice_channel_id: t.id, voice_guild_id: t.guild_id, location_stack: x },
        }),
        l.useEffect(() => {
            o?.(I.current);
        }, [o]),
        l.useEffect(() => {
            r?.(v);
        }, [r, v]));
    let _ = l.useCallback(() => {
        let e = R.A.getGuild(t.guild_id);
        (d()(null != e, "VoiceInviteSuggestionsPopover must be used in context of a guild"),
            (0, c.openModalLazy)(async () => {
                let { default: l } = await Promise.all([
                    i.e("683621"),
                    i.e("711162"),
                    i.e("159957"),
                    i.e("728136"),
                    i.e("216084"),
                    i.e("284819"),
                ]).then(i.bind(i, 405342));
                return (i) => (0, n.jsx)(l, { ...i, guild: e, channel: t, source: f.PE1.VOICE_INVITE_SUGGESTIONS });
            }),
            p());
    }, [t, p]);
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
                        S.map((e) => (0, n.jsx)(q, { channel: t, user: e }, e.id)),
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
    let { channel: t, user: i } = e,
        s = t.guild_id,
        r = l.useRef(null),
        d = (0, o.bG)([w.Ay], () => w.Ay.getMember(s, i.id), [s, i.id]),
        { isHoveringOrFocusing: u } = (0, P.A)(r),
        [c, A] = l.useState(null),
        {
            status: g,
            isMobileOnline: b,
            activities: T,
        } = (0, o.cf)(
            [U.A],
            () => ({
                status: U.A.getStatus(i.id, s),
                isMobileOnline: U.A.isMobileOnline(i.id),
                activities: U.A.getActivities(i.id, s),
            }),
            [i.id, s],
        ),
        { activityStatusText: O, activityStatusIcon: R } = l.useMemo(() => {
            let e = T.find((e) => e.type !== f.$pd.CUSTOM_STATUS && e.type !== f.$pd.HANG_STATUS);
            return { activityStatusText: (0, N.A)(e, !1), activityStatusIcon: null == e ? void 0 : (0, j.f)(e) };
        }, [T]),
        { voiceChannel: F } = (0, y.Ay)({ userId: i.id }),
        Y = (0, G.Ay)(F),
        q = (0, p.S3)(f.clD.ONLINE),
        $ = "success" === c || "sending" === c,
        W = l.useCallback(async () => {
            if ($) return;
            async function e() {
                let e = D.A.getInvite(t.id, {}) ?? null;
                if (null == e) {
                    if (!M.A.can(f.xBc.CREATE_INSTANT_INVITE, t)) return null;
                    try {
                        await _.Ay.createInvite(t.id, {}, K);
                    } catch (e) {
                        return null;
                    }
                    e = D.A.getInvite(t.id, {}) ?? null;
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
                          user: i,
                          inviteKey: n,
                          location: K,
                          inviteAnalyticsMetadata: { source: f.PE1.VOICE_INVITE_SUGGESTIONS },
                      },
                      (e) => {
                          A(e ? "success" : null);
                      },
                  );
        }, [$, i, t]),
        {
            avatarDecorationSrc: H,
            avatarSrc: Z,
            eventHandlers: J,
        } = (0, V.A)({ userId: i.id, size: I._3.SIZE_24, animateOnHover: !u, guildId: s });
    if (null == d) return null;
    let X = L.Ay.getName(i),
        Q = z.intl.string(z.t.jYnGPG),
        ee = g !== f.clD.OFFLINE ? g : void 0,
        et = null != O.text,
        ei = null != F && null != Y;
    return (0, n.jsxs)(m.D, {
        innerRef: r,
        tag: "li",
        className: a()(B.nM, { [B.vk]: !$ }),
        "aria-disabled": $,
        onClick: W,
        "aria-label": Q,
        children: [
            (0, n.jsx)(v.eu, {
                className: B.my,
                "aria-label": X,
                size: I._3.SIZE_24,
                src: Z,
                avatarDecoration: H,
                status: ee,
                isMobile: b,
                ...J,
            }),
            (0, n.jsxs)("div", {
                className: B.VW,
                children: [
                    (0, n.jsx)(h.E, { variant: "text-sm/medium", className: B.UU, lineClamp: 1, children: X }),
                    (ei || et) &&
                        (0, n.jsxs)("div", {
                            className: B.J2,
                            children: [
                                ei
                                    ? (0, n.jsx)(k.A, { size: "custom", color: q, channel: F, className: B.RI })
                                    : null != R
                                      ? (0, n.jsx)(C.A, { icon: R, className: B.RI })
                                      : null,
                                (0, n.jsx)(h.E, {
                                    variant: "text-xs/medium",
                                    color: "text-status-online",
                                    lineClamp: 1,
                                    children: ei ? Y : O.text,
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
