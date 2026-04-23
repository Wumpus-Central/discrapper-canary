n.d(t, { A: () => g }), n(321073);
var i = n(627968),
    l = n(64700),
    a = n(432017),
    s = n(834730),
    r = n(572211),
    o = n(354287),
    d = n(693879),
    c = n(353411),
    u = n(882171),
    m = n(206589),
    _ = n(768349),
    h = n(985018),
    p = n(193018);
function g(e) {
    let {
            application: t,
            message: n,
            header: g,
            presenceActivity: A,
            hideParty: f,
            partyStatusElement: x,
            currentUserPresenceActivity: C,
            onClickContent: E,
            onView: I,
            guildId: v,
        } = e,
        b = (0, m.w)(C, A),
        T = (0, c.Gq)(A, n.author, "Invite Embed"),
        S = l.useMemo(() => {
            let e = [];
            return (
                b ||
                    e.push({
                        label: T.label ?? h.intl.string(h.t.VJlc0S),
                        trackingArea: o.kY.SYNC,
                        onClick: () => {
                            T.onClick();
                        },
                        disabled: T.disabled,
                        disabledReason: T.disabled ? T.tooltip : void 0,
                    }),
                e
            );
        }, [b, T]),
        y =
            null != A && null != A.details && null != A.state
                ? h.intl.formatToPlainString(h.t.JCvHtx, { track: A.details, artist: A.state })
                : t.name,
        N = A?.timestamps?.start ?? A?.created_at,
        j = l.useMemo(
            () =>
                null != N
                    ? (0, i.jsxs)("div", {
                          className: p.Ym,
                          children: [
                              (0, i.jsx)(a.T, { size: "xxs", color: "currentColor" }),
                              (0, i.jsx)(d.z, {
                                  entry: { start: N, end: A?.timestamps?.end },
                                  textColor: "currentColor",
                                  textTabularNumbers: !1,
                                  textFontCode: !1,
                              }),
                          ],
                      })
                    : null,
            [N, A?.timestamps?.end],
        ),
        L = l.useMemo(
            () =>
                (0, i.jsxs)("div", {
                    className: p.pq,
                    children: [
                        (0, i.jsx)(s.E, {
                            variant: "text-xs/normal",
                            className: p.dS,
                            color: "none",
                            lineClamp: 1,
                            children: j,
                        }),
                        f ? null : x,
                    ],
                }),
            [j, f, x],
        );
    return (0, i.jsx)(r.h, {
        header: g,
        title: y,
        iconSrc: (0, u.A)(A, t.id) ?? void 0,
        info: L,
        actions: S,
        onClickContent: E,
        trackingConfig: {
            id: t.id,
            linkType: _.J.RICH_PRESENCE_INVITE,
            onView: I,
            referrerId: n.author.id,
            guildId: v,
            channelId: n.channel_id,
            messageId: n.id,
        },
    });
}
