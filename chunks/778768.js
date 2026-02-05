n.d(t, { w: () => y });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(284009),
    o = n.n(r),
    d = n(110259),
    c = n(417597),
    u = n(397927),
    h = n(846293),
    A = n(774300),
    g = n(793574),
    m = n(688810),
    p = n(139286),
    _ = n(854627),
    x = n(696451),
    f = n(71393),
    E = n(958590),
    C = n(576705),
    I = n(427262),
    S = n(582904),
    b = n(652215),
    N = n(985018),
    T = n(357694),
    j = n(248789);
let v = "VoiceInviteSuggestionsPopover";
function y(e) {
    let { channel: t, onHoverOrFocus: s, setPopoutRef: r, closePopout: c } = e,
        h = l.useRef(null),
        A = (0, S.L7)(h),
        _ = (0, S.kt)({ channel: t }),
        { analyticsLocations: x } = (0, m.Ay)(g.A.VOICE_INVITE_SUGGESTIONS_POPOVER);
    (0, p.A)({
        name: d.ImpressionNames.VOICE_INVITE_SUGGESTIONS_POPOVER,
        type: d.ImpressionTypes.POPOUT,
        properties: { voice_channel_id: t.id, voice_guild_id: t.guild_id, location_stack: x },
    }),
        l.useEffect(() => {
            r?.(h.current);
        }, [r]),
        l.useEffect(() => {
            s?.(A.isHoveringOrFocusing);
        }, [s, A]);
    let E = l.useCallback(() => {
        let e = f.A.getGuild(t.guild_id);
        o()(null != e, "VoiceInviteSuggestionsPopover must be used in context of a guild"),
            (0, u.mMO)(async () => {
                let { default: l } = await Promise.all([n.e("43600"), n.e("28136"), n.e("74918")]).then(
                    n.bind(n, 234355),
                );
                return (n) => (0, i.jsx)(l, { ...n, guild: e, channel: t, source: b.PE1.VOICE_INVITE_SUGGESTIONS });
            }),
            c();
    }, [t, c]);
    return (0, i.jsx)("div", {
        ref: h,
        "aria-label": N.intl.string(N.t.o53CL2),
        className: a()(j.popover, T.oO),
        children: (0, i.jsx)("div", {
            className: T.vW,
            children: (0, i.jsxs)("ul", {
                className: T.p_,
                children: [
                    _.map((e) => (0, i.jsx)(R, { channel: t, user: e }, e.id)),
                    (0, i.jsxs)(u.DUT, {
                        tag: "li",
                        onClick: E,
                        className: a()(T.nM, T.vk),
                        children: [
                            (0, i.jsx)("div", {
                                className: T.R4,
                                children: (0, i.jsx)(u.nFg, { size: "xs", className: T.Kk }),
                            }),
                            (0, i.jsx)(u.Text, {
                                variant: "text-md/medium",
                                className: T.UU,
                                lineClamp: 1,
                                children: N.intl.string(N.t.NOP3Ry),
                            }),
                        ],
                    }),
                ],
            }),
        }),
    });
}
function R(e) {
    let { channel: t, user: n } = e,
        s = l.useRef(null),
        r = (0, c.bG)([x.Ay], () => x.Ay.getMember(t.guild_id, n.id), [t.guild_id, n.id]),
        { isHoveringOrFocusing: o } = (0, S.L7)(s),
        [d, g] = l.useState(null),
        m = "success" === d || "sending" === d,
        p = l.useCallback(async () => {
            if (m) return;
            async function e() {
                let e = E.A.getInvite(t.id, {}) ?? null;
                if (null == e) {
                    if (!C.A.can(b.xBc.CREATE_INSTANT_INVITE, t)) return null;
                    try {
                        await h.Ay.createInvite(t.id, {}, v);
                    } catch (e) {
                        return null;
                    }
                    e = E.A.getInvite(t.id, {}) ?? null;
                }
                return e?.code ?? null;
            }
            g("sending");
            let i = await e();
            null == i
                ? g(null)
                : A.A.enqueue(
                      {
                          type: A.F.USER,
                          user: n,
                          inviteKey: i,
                          location: v,
                          inviteAnalyticsMetadata: { source: b.PE1.VOICE_INVITE_SUGGESTIONS },
                      },
                      (e) => {
                          g(e ? "success" : null);
                      },
                  );
        }, [m, n, t]),
        {
            avatarDecorationSrc: f,
            avatarSrc: j,
            eventHandlers: y,
        } = (0, _.A)({ userId: n.id, size: u._3J.SIZE_24, animateOnHover: !o, guildId: t.guild_id });
    if (null == r) return null;
    let R = I.Ay.getName(n),
        O = N.intl.string(N.t.jYnGPG);
    return (0, i.jsxs)(u.DUT, {
        innerRef: s,
        tag: "li",
        className: a()(T.nM, { [T.vk]: !m }),
        "aria-disabled": m,
        onClick: p,
        "aria-label": O,
        children: [
            (0, i.jsx)(u.euF, {
                className: T.my,
                "aria-label": R,
                size: u._3J.SIZE_24,
                src: j,
                avatarDecoration: f,
                ...y,
            }),
            (0, i.jsx)(u.Text, { variant: "text-md/medium", className: T.UU, lineClamp: 1, children: R }),
            "sending" === d &&
                (0, i.jsx)("div", { className: T.r$, children: (0, i.jsx)(u.nvX, { dotRadius: 2, themed: !0 }) }),
            "success" === d &&
                (0, i.jsx)(u.Text, {
                    variant: "text-xs/medium",
                    color: "text-muted",
                    className: T.h5,
                    lineClamp: 1,
                    children: N.intl.string(N.t["8BEiNn"]),
                }),
            null == d &&
                (0, i.jsx)("div", {
                    className: T.SB,
                    children: (0, i.jsx)(u.Rvf, { color: "currentColor", size: "xs", className: T.Kk }),
                }),
        ],
    });
}
