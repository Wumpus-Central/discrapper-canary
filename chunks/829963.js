n.d(t, { A: () => p }), n(321073);
var i = n(627968),
    l = n(64700),
    a = n(397927),
    r = n(572211),
    s = n(354287),
    o = n(693879),
    d = n(353411),
    c = n(882171),
    u = n(206589),
    m = n(768349),
    _ = n(985018),
    h = n(609653);
function p(e) {
    let {
            application: t,
            message: n,
            header: p,
            presenceActivity: g,
            hideParty: A,
            partyStatusElement: f,
            currentUserPresenceActivity: x,
            onClickContent: E,
            onView: C,
            guildId: I,
        } = e,
        T = (0, u.w)(x, g),
        v = (0, d.Gq)(g, n.author, "Invite Embed"),
        N = l.useMemo(() => {
            let e = [];
            return (
                T ||
                    e.push({
                        label: v.label ?? _.intl.string(_.t.VJlc0S),
                        trackingArea: s.kY.SYNC,
                        onClick: () => {
                            v.onClick();
                        },
                        disabled: v.disabled,
                        disabledReason: v.disabled ? v.tooltip : void 0,
                    }),
                e
            );
        }, [T, v]),
        S =
            null != g && null != g.details && null != g.state
                ? _.intl.formatToPlainString(_.t.JCvHtx, { track: g.details, artist: g.state })
                : t.name,
        b = g?.timestamps?.start ?? g?.created_at,
        j = l.useMemo(
            () =>
                null != b
                    ? (0, i.jsxs)("div", {
                          className: h.Ym,
                          children: [
                              (0, i.jsx)(a.T7G, { size: "xxs", color: "currentColor" }),
                              (0, i.jsx)(o.z, {
                                  entry: { start: b, end: g?.timestamps?.end },
                                  textColor: "currentColor",
                                  textTabularNumbers: !1,
                                  textFontCode: !1,
                              }),
                          ],
                      })
                    : null,
            [b, g?.timestamps?.end],
        ),
        y = l.useMemo(
            () =>
                (0, i.jsxs)("div", {
                    className: h.pq,
                    children: [
                        (0, i.jsx)(a.Text, {
                            variant: "text-xs/normal",
                            className: h.dS,
                            color: "none",
                            lineClamp: 1,
                            children: j,
                        }),
                        A ? null : f,
                    ],
                }),
            [j, A, f],
        );
    return (0, i.jsx)(r.h, {
        header: p,
        title: S,
        iconSrc: (0, c.A)(g, t.id) ?? void 0,
        info: y,
        actions: N,
        onClickContent: E,
        trackingConfig: {
            id: t.id,
            linkType: m.J.RICH_PRESENCE_INVITE,
            onView: C,
            referrerId: n.author.id,
            guildId: I,
            channelId: n.channel_id,
            messageId: n.id,
        },
    });
}
