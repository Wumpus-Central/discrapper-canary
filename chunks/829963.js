n.d(t, { A: () => p }), n(321073);
var i = n(627968),
    r = n(64700),
    a = n(397927),
    l = n(572211),
    s = n(354287),
    o = n(693879),
    d = n(353411),
    c = n(882171),
    u = n(206589),
    _ = n(768349),
    m = n(985018),
    h = n(609653);
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
        b = (0, u.w)(f, g),
        T = (0, d.Gq)(g, n.author, "Invite Embed"),
        v = r.useMemo(() => {
            let e = [];
            return (
                b ||
                    e.push({
                        label: T.label ?? m.intl.string(m.t.VJlc0S),
                        trackingArea: s.kY.SYNC,
                        onClick: () => {
                            T.onClick();
                        },
                        disabled: T.disabled,
                        disabledReason: T.disabled ? T.tooltip : void 0,
                    }),
                e
            );
        }, [b, T]),
        S =
            null != g && null != g.details && null != g.state
                ? m.intl.formatToPlainString(m.t.JCvHtx, { track: g.details, artist: g.state })
                : t.name,
        y = g?.timestamps?.start ?? g?.created_at,
        N = r.useMemo(
            () =>
                null != y
                    ? (0, i.jsxs)("div", {
                          className: h.Ym,
                          children: [
                              (0, i.jsx)(a.T7G, { size: "xxs", color: "currentColor" }),
                              (0, i.jsx)(o.z, {
                                  entry: { start: y, end: g?.timestamps?.end },
                                  textColor: "currentColor",
                                  textTabularNumbers: !1,
                                  textFontCode: !1,
                              }),
                          ],
                      })
                    : null,
            [y, g?.timestamps?.end],
        ),
        j = r.useMemo(
            () =>
                (0, i.jsxs)("div", {
                    className: h.pq,
                    children: [
                        (0, i.jsx)(a.Text, {
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
        title: S,
        iconSrc: (0, c.A)(g, t.id) ?? void 0,
        info: j,
        actions: v,
        onClickContent: C,
        trackingConfig: {
            id: t.id,
            linkType: _.J.RICH_PRESENCE_INVITE,
            onView: E,
            referrerId: n.author.id,
            guildId: I,
            channelId: n.channel_id,
            messageId: n.id,
        },
    });
}
