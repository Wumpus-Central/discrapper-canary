t.d(i, { w: () => W });
var n = t(477900),
    l = t(582128),
    s = t(503698),
    a = t.n(s),
    r = t(284009),
    d = t.n(r),
    o = t(562708),
    u = t(17928),
    c = t(192308),
    m = t(315710),
    A = t(834730),
    g = t(939249),
    h = t(177953),
    p = t(935154),
    f = t(652215),
    I = t(778712),
    v = t(97808),
    x = t(863610),
    S = t(283973),
    _ = t(866665),
    E = t(376728),
    N = t(774300),
    y = t(566903),
    C = t(714114),
    b = t(864436),
    j = t(835072),
    T = t(793574),
    G = t(688810),
    O = t(139286),
    P = t(47167),
    k = t(713517),
    V = t(854627),
    w = t(10862),
    D = t(164891),
    R = t(135635),
    M = t(696451),
    U = t(71393),
    L = t(958590),
    F = t(576705),
    z = t(290863),
    B = t(427262),
    K = t(582904),
    Y = t(375708),
    q = t(469640),
    $ = t(65406);
let H = "VoiceInviteSuggestionsPopover";
function W(e) {
    let { channel: i, forceOpen: s, onHover: r, setPopoutRef: u, closePopout: p } = e,
        I = l.useRef(null),
        v = (0, k.M)(I),
        x = (0, K.kt)({ channel: i }),
        { enabled: S } = D.A.useExperiment({ guildId: i.guild_id, location: "VoiceInviteSuggestionsPopover" }),
        { analyticsLocations: _ } = (0, G.Ay)(T.A.VOICE_INVITE_SUGGESTIONS_POPOVER);
    l.useEffect(() => {
        s && I.current?.focus();
    }, [s]),
        (0, O.A)({
            name: o.ImpressionNames.VOICE_INVITE_SUGGESTIONS_POPOVER,
            type: o.ImpressionTypes.POPOUT,
            properties: { voice_channel_id: i.id, voice_guild_id: i.guild_id, location_stack: _ },
        }),
        l.useEffect(() => {
            u?.(I.current);
        }, [u]),
        l.useEffect(() => {
            r?.(v);
        }, [r, v]);
    let E = l.useCallback(() => {
        let e = U.A.getGuild(i.guild_id);
        d()(null != e, "VoiceInviteSuggestionsPopover must be used in context of a guild"),
            (0, c.openModalLazy)(async () => {
                let { default: l } = await Promise.all([
                    t.e("683621"),
                    t.e("711162"),
                    t.e("159957"),
                    t.e("728136"),
                    t.e("216084"),
                    t.e("22547"),
                ]).then(t.bind(t, 1310));
                return (t) => (0, n.jsx)(l, { ...t, guild: e, channel: i, source: f.PE1.VOICE_INVITE_SUGGESTIONS });
            }),
            p();
    }, [i, p]);
    return (
        (0, m.tj)(I, { disable: !s }),
        (0, n.jsx)("div", {
            role: "dialog",
            tabIndex: -1,
            ref: I,
            "aria-label": Y.intl.string(Y.t.o53CL2),
            className: q.oO,
            children: (0, n.jsxs)("div", {
                className: q.vW,
                children: [
                    S &&
                        (0, n.jsx)(A.E, {
                            variant: "text-sm/medium",
                            color: "text-muted",
                            className: q.DD,
                            children: Y.intl.string(Y.t["EE+P0H"]),
                        }),
                    (0, n.jsxs)("ul", {
                        className: q.p_,
                        children: [
                            x.map((e) => (0, n.jsx)(Z, { channel: i, user: e, ringingEnabled: S }, e.id)),
                            (0, n.jsxs)(g.D, {
                                tag: "li",
                                onClick: E,
                                className: a()(q.nM, q.vk),
                                children: [
                                    (0, n.jsx)("div", {
                                        className: q.R4,
                                        children: (0, n.jsx)(h.n, { size: "custom", className: q.Kk }),
                                    }),
                                    (0, n.jsx)(A.E, {
                                        variant: "text-sm/medium",
                                        className: q.UU,
                                        lineClamp: 1,
                                        children: Y.intl.string(Y.t.NOP3Ry),
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
        })
    );
}
function Z(e) {
    let { channel: i, user: t, ringingEnabled: s } = e,
        r = i.guild_id,
        d = l.useRef(null),
        o = (0, u.bG)([M.Ay], () => M.Ay.getMember(r, t.id), [r, t.id]),
        { isHoveringOrFocusing: c } = (0, k.A)(d),
        [m, h] = l.useState(null),
        {
            icon: T,
            iconColor: G,
            tooltipText: O,
            disabled: D,
            shouldHideButton: U,
            onClick: K,
        } = (0, R.A)({ user: t, channel: i, location: H }),
        {
            status: W,
            isMobileOnline: Z,
            activities: J,
        } = (0, u.cf)(
            [z.A],
            () => ({
                status: z.A.getStatus(t.id, r),
                isMobileOnline: z.A.isMobileOnline(t.id),
                activities: z.A.getActivities(t.id, r),
            }),
            [t.id, r],
        ),
        { activityStatusText: X, activityStatusIcon: Q } = l.useMemo(() => {
            let e = J.find((e) => e.type !== f.$pd.CUSTOM_STATUS && e.type !== f.$pd.HANG_STATUS);
            return { activityStatusText: (0, y.A)(e, !1), activityStatusIcon: null == e ? void 0 : (0, j.f)(e) };
        }, [J]),
        { voiceChannel: ee } = (0, C.Ay)({ userId: t.id }),
        ei = (0, P.Ay)(ee),
        et = (0, p.S3)(f.clD.ONLINE),
        en = "success" === m || "sending" === m,
        el = l.useCallback(
            (e) => {
                e.stopPropagation(), D || K();
            },
            [K, D],
        ),
        es = l.useCallback(async () => {
            if (en) return;
            async function e() {
                let e = L.A.getInvite(i.id, {}) ?? null;
                if (null == e) {
                    if (!F.A.can(f.xBc.CREATE_INSTANT_INVITE, i)) return null;
                    try {
                        await E.Ay.createInvite(i.id, {}, H);
                    } catch (e) {
                        return null;
                    }
                    e = L.A.getInvite(i.id, {}) ?? null;
                }
                return e?.code ?? null;
            }
            h("sending");
            let n = await e();
            null == n
                ? h(null)
                : N.A.enqueue(
                      {
                          type: N.F.USER,
                          user: t,
                          inviteKey: n,
                          location: H,
                          inviteAnalyticsMetadata: { source: f.PE1.VOICE_INVITE_SUGGESTIONS },
                      },
                      (e) => {
                          h(e ? "success" : null);
                      },
                  );
        }, [en, t, i]),
        {
            avatarDecorationSrc: ea,
            avatarSrc: er,
            eventHandlers: ed,
        } = (0, V.A)({ userId: t.id, size: I._3.SIZE_24, animateOnHover: !c, guildId: r });
    if (null == o) return null;
    let eo = B.Ay.getName(t),
        eu = Y.intl.string(Y.t.jYnGPG),
        ec = W !== f.clD.OFFLINE ? W : void 0,
        em = null != X.text,
        eA = null != ee && null != ei;
    return (0, n.jsxs)(g.D, {
        innerRef: d,
        tag: "li",
        className: a()(q.nM, { [q.vk]: !en }),
        "aria-disabled": en,
        onClick: es,
        "aria-label": eu,
        children: [
            (0, n.jsx)(v.eu, {
                className: q.my,
                "aria-label": eo,
                size: I._3.SIZE_24,
                src: er,
                avatarDecoration: ea,
                status: ec,
                isMobile: Z,
                ...ed,
            }),
            (0, n.jsxs)("div", {
                className: q.VW,
                children: [
                    (0, n.jsx)(A.E, { variant: "text-sm/medium", className: q.UU, lineClamp: 1, children: eo }),
                    (eA || em) &&
                        (0, n.jsxs)("div", {
                            className: q.J2,
                            children: [
                                eA
                                    ? (0, n.jsx)(w.A, { size: "custom", color: et, channel: ee, className: q.RI })
                                    : null != Q
                                      ? (0, n.jsx)(b.A, { icon: Q, className: q.RI })
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
            "sending" === m &&
                (0, n.jsx)("div", { className: q.r$, children: (0, n.jsx)(x.n, { dotRadius: 2, themed: !0 }) }),
            "success" === m &&
                (0, n.jsx)(A.E, {
                    variant: "text-xs/medium",
                    color: "text-muted",
                    className: q.h5,
                    lineClamp: 1,
                    children: Y.intl.string(Y.t["8BEiNn"]),
                }),
            null == m &&
                !s &&
                (0, n.jsx)("div", {
                    className: q.SB,
                    children: (0, n.jsx)(S.R, { color: "currentColor", size: "sm", className: q.Kk }),
                }),
            s &&
                !U &&
                (0, n.jsx)(_.m, {
                    text: O,
                    children: (0, n.jsx)(g.D, {
                        className: a()(q.D9, $.button, $.secondary, { [q.r9]: D }),
                        onClick: el,
                        "aria-disabled": D,
                        children: (0, n.jsx)(T, { size: "xxs", color: G, className: q.Kk }),
                    }),
                }),
        ],
    });
}
