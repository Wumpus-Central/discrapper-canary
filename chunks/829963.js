n.d(t, { A: () => p }), n(321073);
var i = n(627968),
    l = n(64700),
    s = n(397927),
    r = n(572211),
    a = n(354287),
    o = n(693879),
    d = n(353411),
    c = n(882171),
    u = n(206589),
    m = n(768349),
    _ = n(985018),
    h = n(772234);
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
            onView: E,
            guildId: I,
        } = e,
        v = (0, u.w)(f, g),
        b = (0, d.Gq)(g, n.author, "Invite Embed"),
        T = l.useMemo(() => {
            let e = [];
            return (
                v ||
                    e.push({
                        label: b.label ?? _.intl.string(_.t.VJlc0S),
                        trackingArea: a.kY.SYNC,
                        onClick: () => {
                            b.onClick();
                        },
                        disabled: b.disabled,
                        disabledReason: b.disabled ? b.tooltip : void 0,
                    }),
                e
            );
        }, [v, b]),
        y =
            null != g && null != g.details && null != g.state
                ? _.intl.formatToPlainString(_.t.JCvHtx, { track: g.details, artist: g.state })
                : t.name,
        N = g?.timestamps?.start ?? g?.created_at,
        S = l.useMemo(
            () =>
                null != N
                    ? (0, i.jsxs)("div", {
                          className: h.Ym,
                          children: [
                              (0, i.jsx)(s.T7G, { size: "xxs", color: "currentColor" }),
                              (0, i.jsx)(o.z, {
                                  entry: { start: N, end: g?.timestamps?.end },
                                  textColor: "currentColor",
                                  textTabularNumbers: !1,
                                  textFontCode: !1,
                              }),
                          ],
                      })
                    : null,
            [N, g?.timestamps?.end],
        ),
        j = l.useMemo(
            () =>
                (0, i.jsxs)("div", {
                    className: h.pq,
                    children: [
                        (0, i.jsx)(s.Text, {
                            variant: "text-xs/normal",
                            className: h.dS,
                            color: "none",
                            lineClamp: 1,
                            children: S,
                        }),
                        A ? null : x,
                    ],
                }),
            [S, A, x],
        );
    return (0, i.jsx)(r.h, {
        header: p,
        title: y,
        iconSrc: (0, c.A)(g, t.id) ?? void 0,
        info: j,
        actions: T,
        onClickContent: C,
        trackingConfig: {
            id: t.id,
            linkType: m.J.RICH_PRESENCE_INVITE,
            onView: E,
            referrerId: n.author.id,
            guildId: I,
            channelId: n.channel_id,
            messageId: n.id,
        },
    });
}
