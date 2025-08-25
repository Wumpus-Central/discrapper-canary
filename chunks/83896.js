n.d(t, { I: () => x });
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
    h = n(626135),
    f = n(906605),
    m = n(833858),
    g = n(866071),
    b = n(223135),
    y = n(981631),
    _ = n(388032),
    C = n(10359),
    v = n(254477);
function x(e) {
    let { hangStatusActivity: t, channel: n, setPopoutRef: l } = e,
        x = i.useRef(null),
        O = (0, o.e7)([p.Z], () => p.Z.getVoiceChannelId() === n.id),
        j = (0, o.e7)([u.Z], () => u.Z.can(y.Plq.CONNECT, n)),
        E = (null == t ? void 0 : t.emoji) == null || (0, g.K)(t.emoji, n),
        S = (0, o.e7)([d.Z], () => d.Z.getMediaSessionId());
    i.useEffect(() => {
        null == l || l(null == x ? void 0 : x.current);
    }, [x, l]),
        i.useEffect(() => {
            h.default.track(y.rMx.VIEW_HANG_STATUS, {
                source: "HangStatusPopout",
                guild_id: n.guild_id,
                channel_id: n.id,
            });
        }, [n.guild_id, n.id]);
    let I = i.useCallback(() => {
            !O &&
                j &&
                (c.default.selectVoiceChannel(n.id),
                h.default.track(y.rMx.HANG_STATUS_CTA_CLICKED, {
                    source: "HangStatusPopout",
                    guild_id: n.guild_id,
                    channel_id: n.id,
                }));
        }, [O, j, n.guild_id, n.id]),
        P = i.useCallback(() => {
            if (!O || !E) return;
            let e = t.state;
            if (e === y.tNA.CUSTOM) {
                if (null == t.details || null == t.emoji) return;
                (0, f._s)(t.details, t.emoji, !0);
            } else (0, f.Zx)(e, !0);
            h.default.track(y.rMx.SWIPE_HANG_STATUS, {
                guild_id: n.guild_id,
                channel_id: n.id,
                media_session_id: S,
            });
        }, [O, E, t, S, n.guild_id, n.id]);
    return (0, r.jsxs)("div", {
        ref: x,
        className: a()(v.popover, C.container),
        children: [
            (0, r.jsx)(b.Z, {
                className: C.icon,
                hangStatusActivity: t,
            }),
            (0, r.jsx)(s.Text, {
                variant: "text-md/medium",
                className: C.statusText,
                children: (0, m.O8)(t),
            }),
            O
                ? E &&
                  (0, r.jsx)(s.zxk, {
                      size: "sm",
                      variant: "secondary",
                      text: _.intl.string(_.t["0eHzpq"]),
                      onClick: P,
                  })
                : j &&
                  (0, r.jsx)(s.zxk, {
                      size: "sm",
                      variant: "secondary",
                      text: _.intl.string(_.t["B/dHXF"]),
                      onClick: I,
                  }),
        ],
    });
}
