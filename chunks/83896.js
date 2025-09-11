n.d(t, { I: () => O }), n(388685);
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
    y = n(505905),
    _ = n(981631),
    C = n(388032),
    v = n(10359),
    x = n(254477);
function O(e) {
    let { hangStatusActivity: t, channel: n, setPopoutRef: l } = e,
        O = i.useRef(null),
        j = (0, o.e7)([p.Z], () => p.Z.getVoiceChannelId() === n.id),
        E = (0, o.e7)([u.Z], () => u.Z.can(_.Plq.CONNECT, n)),
        S = (null == t ? void 0 : t.emoji) == null || (0, g.K)(t.emoji, n),
        I = (0, o.e7)([d.Z], () => d.Z.getMediaSessionId());
    i.useEffect(() => {
        null == l || l(null == O ? void 0 : O.current);
    }, [O, l]),
        i.useEffect(() => {
            h.default.track(_.rMx.VIEW_HANG_STATUS, {
                source: "HangStatusPopout",
                guild_id: n.guild_id,
                channel_id: n.id,
            });
        }, [n.guild_id, n.id]);
    let P = i.useCallback(() => {
            !j &&
                E &&
                (c.default.selectVoiceChannel(n.id),
                h.default.track(_.rMx.HANG_STATUS_CTA_CLICKED, {
                    source: "HangStatusPopout",
                    guild_id: n.guild_id,
                    channel_id: n.id,
                }));
        }, [j, E, n.guild_id, n.id]),
        Z = i.useCallback(() => {
            if (!j || !S || null == t.state) return;
            let [e] = (0, m.Fe)(t.state);
            if (null != e) {
                if (e === y.tN.CUSTOM) {
                    if (null == t.details || null == t.emoji) return;
                    (0, f._s)(t.details, t.emoji, !0);
                } else (0, f.Zx)(e, !0);
                h.default.track(_.rMx.SWIPE_HANG_STATUS, {
                    guild_id: n.guild_id,
                    channel_id: n.id,
                    media_session_id: I,
                });
            }
        }, [j, S, t, I, n.guild_id, n.id]);
    return (0, r.jsxs)("div", {
        ref: O,
        className: a()(x.popover, v.container),
        children: [
            (0, r.jsx)(b.Z, {
                size: 32,
                className: v.icon,
                hangStatusActivity: t,
            }),
            (0, r.jsx)(s.Text, {
                variant: "text-md/medium",
                className: v.statusText,
                children: (0, m.O8)(t),
            }),
            j
                ? S &&
                  (0, r.jsx)(s.zxk, {
                      size: "sm",
                      variant: "secondary",
                      text: C.intl.string(C.t["0eHzpq"]),
                      onClick: Z,
                  })
                : E &&
                  (0, r.jsx)(s.zxk, {
                      size: "sm",
                      variant: "secondary",
                      text: C.intl.string(C.t["B/dHXF"]),
                      onClick: P,
                  }),
        ],
    });
}
