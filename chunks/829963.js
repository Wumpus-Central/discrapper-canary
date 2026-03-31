n.d(t, { A: () => p }), n(321073);
var i = n(627968),
    a = n(64700),
    r = n(397927),
    l = n(572211),
    s = n(354287),
    o = n(693879),
    d = n(353411),
    c = n(882171),
    u = n(206589),
    _ = n(768349),
    m = n(985018),
    h = n(71747);
function p(e) {
    let {
            application: t,
            message: n,
            header: p,
            presenceActivity: g,
            hideParty: A,
            partyStatusElement: x,
            currentUserPresenceActivity: f,
            onClickContent: C,
            onView: I,
            guildId: E,
        } = e,
        b = (0, u.w)(f, g),
        v = (0, d.Gq)(g, n.author, "Invite Embed"),
        T = a.useMemo(() => {
            let e = [];
            return (
                b ||
                    e.push({
                        label: v.label ?? m.intl.string(m.t.VJlc0S),
                        trackingArea: s.kY.SYNC,
                        onClick: () => {
                            v.onClick();
                        },
                        disabled: v.disabled,
                        disabledReason: v.disabled ? v.tooltip : void 0,
                    }),
                e
            );
        }, [b, v]),
        y =
            null != g && null != g.details && null != g.state
                ? m.intl.formatToPlainString(m.t.JCvHtx, { track: g.details, artist: g.state })
                : t.name,
        S = g?.timestamps?.start ?? g?.created_at,
        N = a.useMemo(
            () =>
                null != S
                    ? (0, i.jsxs)("div", {
                          className: h.Ym,
                          children: [
                              (0, i.jsx)(r.T7G, { size: "xxs", color: "currentColor" }),
                              (0, i.jsx)(o.z, {
                                  entry: { start: S, end: g?.timestamps?.end },
                                  textColor: "currentColor",
                                  textTabularNumbers: !1,
                                  textFontCode: !1,
                              }),
                          ],
                      })
                    : null,
            [S, g?.timestamps?.end],
        ),
        j = a.useMemo(
            () =>
                (0, i.jsxs)("div", {
                    className: h.pq,
                    children: [
                        (0, i.jsx)(r.Text, {
                            variant: "text-xs/normal",
                            className: h.dS,
                            color: "none",
                            lineClamp: 1,
                            children: N,
                        }),
                        A ? null : x,
                    ],
                }),
            [N, A, x],
        );
    return (0, i.jsx)(l.h, {
        header: p,
        title: y,
        iconSrc: (0, c.A)(g, t.id) ?? void 0,
        info: j,
        actions: T,
        onClickContent: C,
        trackingConfig: {
            id: t.id,
            linkType: _.J.RICH_PRESENCE_INVITE,
            onView: I,
            referrerId: n.author.id,
            guildId: E,
            channelId: n.channel_id,
            messageId: n.id,
        },
    });
}
