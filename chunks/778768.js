t.d(i, { w: () => W });
var n = t(627968),
    l = t(64700),
    s = t(503698),
    a = t.n(s),
    r = t(284009),
    d = t.n(r),
    u = t(562708),
    o = t(17928),
    c = t(990078),
    m = t(192308),
    A = t(834730),
    g = t(939249),
    h = t(177953),
    p = t(133171),
    I = t(652215),
    v = t(778712),
    f = t(97808),
    x = t(863610),
    S = t(283973),
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
    k = t(713517),
    V = t(854627),
    P = t(10862),
    R = t(164891),
    w = t(135635),
    U = t(696451),
    D = t(71393),
    M = t(958590),
    L = t(576705),
    F = t(290863),
    z = t(427262),
    K = t(582904),
    B = t(375708),
    Y = t(176277),
    q = t(824078),
    H = t(518229);
let $ = "VoiceInviteSuggestionsPopover";
function W(e) {
    let { channel: i, onHoverOrFocus: s, setPopoutRef: r, closePopout: o } = e,
        c = l.useRef(null),
        p = (0, k.A)(c),
        v = (0, K.kt)({ channel: i }),
        { enabled: f } = R.A.useExperiment({ guildId: i.guild_id, location: "VoiceInviteSuggestionsPopover" }),
        { analyticsLocations: x } = (0, T.Ay)(j.A.VOICE_INVITE_SUGGESTIONS_POPOVER);
    (0, O.A)({
        name: u.ImpressionNames.VOICE_INVITE_SUGGESTIONS_POPOVER,
        type: u.ImpressionTypes.POPOUT,
        properties: { voice_channel_id: i.id, voice_guild_id: i.guild_id, location_stack: x },
    }),
        l.useEffect(() => {
            r?.(c.current);
        }, [r]),
        l.useEffect(() => {
            s?.(p.isHoveringOrFocusing);
        }, [s, p]);
    let S = l.useCallback(() => {
        let e = D.A.getGuild(i.guild_id);
        d()(null != e, "VoiceInviteSuggestionsPopover must be used in context of a guild"),
            (0, m.openModalLazy)(async () => {
                let { default: l } = await Promise.all([
                    t.e("86653"),
                    t.e("59957"),
                    t.e("28136"),
                    t.e("16084"),
                    t.e("22547"),
                ]).then(t.bind(t, 1310));
                return (t) => (0, n.jsx)(l, { ...t, guild: e, channel: i, source: I.PE1.VOICE_INVITE_SUGGESTIONS });
            }),
            o();
    }, [i, o]);
    return (0, n.jsx)("div", {
        ref: c,
        "aria-label": B.intl.string(B.t.o53CL2),
        className: a()(q.popover, Y.oO),
        children: (0, n.jsxs)("div", {
            className: Y.vW,
            children: [
                f &&
                    (0, n.jsx)(A.E, {
                        variant: "text-sm/medium",
                        color: "text-muted",
                        className: Y.DD,
                        children: B.intl.string(B.t["EE+P0H"]),
                    }),
                (0, n.jsxs)("ul", {
                    className: Y.p_,
                    children: [
                        v.map((e) => (0, n.jsx)(Z, { channel: i, user: e, ringingEnabled: f }, e.id)),
                        (0, n.jsxs)(g.D, {
                            tag: "li",
                            onClick: S,
                            className: a()(Y.nM, Y.vk),
                            children: [
                                (0, n.jsx)("div", {
                                    className: Y.R4,
                                    children: (0, n.jsx)(h.n, { size: "custom", className: Y.Kk }),
                                }),
                                (0, n.jsx)(A.E, {
                                    variant: "text-sm/medium",
                                    className: Y.UU,
                                    lineClamp: 1,
                                    children: B.intl.string(B.t.NOP3Ry),
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
    let { channel: i, user: t, ringingEnabled: s } = e,
        r = i.guild_id,
        d = l.useRef(null),
        u = (0, o.bG)([U.Ay], () => U.Ay.getMember(r, t.id), [r, t.id]),
        { isHoveringOrFocusing: m } = (0, k.A)(d),
        [h, j] = l.useState(null),
        {
            icon: T,
            iconColor: O,
            tooltipText: R,
            disabled: D,
            shouldHideButton: K,
            onClick: q,
        } = (0, w.A)({ user: t, channel: i, location: $ }),
        {
            status: W,
            isMobileOnline: Z,
            activities: J,
        } = (0, o.cf)(
            [F.A],
            () => ({
                status: F.A.getStatus(t.id, r),
                isMobileOnline: F.A.isMobileOnline(t.id),
                activities: F.A.getActivities(t.id, r),
            }),
            [t.id, r],
        ),
        { activityStatusText: X, activityStatusIcon: Q } = l.useMemo(() => {
            let e = J.find((e) => e.type !== I.$pd.CUSTOM_STATUS && e.type !== I.$pd.HANG_STATUS);
            return { activityStatusText: (0, N.A)(e, !1), activityStatusIcon: null == e ? void 0 : (0, b.f)(e) };
        }, [J]),
        { voiceChannel: ee } = (0, y.A)({ userId: t.id }),
        ei = (0, G.Ay)(ee),
        et = (0, p.S3)(I.clD.ONLINE),
        en = "success" === h || "sending" === h,
        el = l.useCallback(
            (e) => {
                e.stopPropagation(), D || q();
            },
            [q, D],
        ),
        es = l.useCallback(async () => {
            if (en) return;
            async function e() {
                let e = M.A.getInvite(i.id, {}) ?? null;
                if (null == e) {
                    if (!L.A.can(I.xBc.CREATE_INSTANT_INVITE, i)) return null;
                    try {
                        await _.Ay.createInvite(i.id, {}, $);
                    } catch (e) {
                        return null;
                    }
                    e = M.A.getInvite(i.id, {}) ?? null;
                }
                return e?.code ?? null;
            }
            j("sending");
            let n = await e();
            null == n
                ? j(null)
                : E.A.enqueue(
                      {
                          type: E.F.USER,
                          user: t,
                          inviteKey: n,
                          location: $,
                          inviteAnalyticsMetadata: { source: I.PE1.VOICE_INVITE_SUGGESTIONS },
                      },
                      (e) => {
                          j(e ? "success" : null);
                      },
                  );
        }, [en, t, i]),
        {
            avatarDecorationSrc: ea,
            avatarSrc: er,
            eventHandlers: ed,
        } = (0, V.A)({ userId: t.id, size: v._3.SIZE_24, animateOnHover: !m, guildId: r });
    if (null == u) return null;
    let eu = z.Ay.getName(t),
        eo = B.intl.string(B.t.jYnGPG),
        ec = W !== I.clD.OFFLINE ? W : void 0,
        em = null != X.text,
        eA = null != ee && null != ei;
    return (0, n.jsxs)(g.D, {
        innerRef: d,
        tag: "li",
        className: a()(Y.nM, { [Y.vk]: !en }),
        "aria-disabled": en,
        onClick: es,
        "aria-label": eo,
        children: [
            (0, n.jsx)(f.eu, {
                className: Y.my,
                "aria-label": eu,
                size: v._3.SIZE_24,
                src: er,
                avatarDecoration: ea,
                status: ec,
                isMobile: Z,
                ...ed,
            }),
            (0, n.jsxs)("div", {
                className: Y.VW,
                children: [
                    (0, n.jsx)(A.E, { variant: "text-sm/medium", className: Y.UU, lineClamp: 1, children: eu }),
                    (eA || em) &&
                        (0, n.jsxs)("div", {
                            className: Y.J2,
                            children: [
                                eA
                                    ? (0, n.jsx)(P.A, { size: "custom", color: et, channel: ee, className: Y.RI })
                                    : null != Q
                                      ? (0, n.jsx)(C.A, { icon: Q, className: Y.RI })
                                      : null,
                                (0, n.jsx)(A.E, {
                                    variant: "text-xs/medium",
                                    color: "text-status-online",
                                    lineClamp: 1,
                                    children: eA ? ei : X.text,
                                }),
                            ],
                        }),
                ],
            }),
            "sending" === h &&
                (0, n.jsx)("div", { className: Y.r$, children: (0, n.jsx)(x.n, { dotRadius: 2, themed: !0 }) }),
            "success" === h &&
                (0, n.jsx)(A.E, {
                    variant: "text-xs/medium",
                    color: "text-muted",
                    className: Y.h5,
                    lineClamp: 1,
                    children: B.intl.string(B.t["8BEiNn"]),
                }),
            null == h &&
                !s &&
                (0, n.jsx)("div", {
                    className: Y.SB,
                    children: (0, n.jsx)(S.R, { color: "currentColor", size: "sm", className: Y.Kk }),
                }),
            s &&
                !K &&
                (0, n.jsx)(c.m, {
                    text: R,
                    children: (0, n.jsx)(g.D, {
                        className: a()(Y.D9, H.button, H.secondary, { [Y.r9]: D }),
                        onClick: el,
                        "aria-disabled": D,
                        children: (0, n.jsx)(T, { size: "xxs", color: O, className: Y.Kk }),
                    }),
                }),
        ],
    });
}
