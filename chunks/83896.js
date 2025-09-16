n.d(t, { I: () => j }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    o = n(399606),
    s = n(481060),
    c = n(287734),
    u = n(496675),
    d = n(19780),
    p = n(944486),
    h = n(938475),
    f = n(626135),
    m = n(906605),
    g = n(833858),
    b = n(866071),
    y = n(223135),
    _ = n(505905),
    C = n(981631),
    v = n(388032),
    x = n(10359),
    O = n(254477);
function j(e) {
    let { hangStatusActivity: t, channel: n, userId: l, setPopoutRef: j } = e,
        E = i.useRef(null),
        S = (0, o.e7)([p.Z], () => p.Z.getVoiceChannelId() === n.id),
        I = (0, o.e7)([u.Z], () => u.Z.can(C.Plq.CONNECT, n)),
        P = (null == t ? void 0 : t.emoji) == null || (0, b.K)(t.emoji, n),
        Z = (0, o.e7)([d.Z], () => d.Z.getMediaSessionId());
    i.useEffect(() => {
        null == j || j(null == E ? void 0 : E.current);
    }, [E, j]),
        i.useEffect(() => {
            f.default.track(C.rMx.VIEW_HANG_STATUS, {
                source: "HangStatusPopout",
                guild_id: n.guild_id,
                channel_id: n.id,
            });
        }, [n.guild_id, n.id]);
    let T = i.useCallback(() => {
            !S &&
                I &&
                (c.default.selectVoiceChannel(n.id),
                f.default.track(C.rMx.HANG_STATUS_CTA_CLICKED, {
                    source: "HangStatusPopout",
                    guild_id: n.guild_id,
                    channel_id: n.id,
                    media_session_id: Z,
                    call_num_participants: h.ZP.countVoiceStatesForChannel(n.id),
                    other_user_id: l,
                    cta_type: "join",
                }));
        }, [S, I, n.guild_id, n.id, l, Z]),
        N = i.useCallback(() => {
            if (!S || !P || null == t.state) return;
            let [e] = (0, g.Fe)(t.state);
            if (null != e) {
                if (e === _.tN.CUSTOM) {
                    if (null == t.details || null == t.emoji) return;
                    (0, m._s)(t.details, t.emoji, !0);
                } else (0, m.Zx)(e, !0);
                f.default.track(C.rMx.HANG_STATUS_CTA_CLICKED, {
                    source: "HangStatusPopout",
                    guild_id: n.guild_id,
                    channel_id: n.id,
                    media_session_id: Z,
                    call_num_participants: h.ZP.countVoiceStatesForChannel(n.id),
                    other_user_id: l,
                    cta_type: "swipe",
                });
            }
        }, [S, P, t, Z, n.guild_id, n.id, l]);
    return (0, r.jsxs)("div", {
        ref: E,
        className: a()(O.popover, x.container),
        children: [
            (0, r.jsx)(y.Z, {
                size: 32,
                className: x.icon,
                hangStatusActivity: t,
            }),
            (0, r.jsx)(s.Text, {
                variant: "text-md/medium",
                className: x.statusText,
                children: (0, g.O8)(t),
            }),
            S
                ? P &&
                  (0, r.jsx)(s.zxk, {
                      size: "sm",
                      variant: "secondary",
                      text: v.intl.string(v.t["0eHzpq"]),
                      onClick: N,
                  })
                : I &&
                  (0, r.jsx)(s.zxk, {
                      size: "sm",
                      variant: "secondary",
                      text: v.intl.string(v.t["B/dHXF"]),
                      onClick: T,
                  }),
        ],
    });
}
