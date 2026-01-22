n.d(t, { A: () => h }), n(321073);
var r = n(627968),
    i = n(64700),
    a = n(397927),
    s = n(572211),
    o = n(354287),
    l = n(693879),
    c = n(353411),
    u = n(882171),
    d = n(206589),
    f = n(768349),
    p = n(985018),
    _ = n(609653);
function h(e) {
    var t, n, h, m;
    let {
            application: g,
            message: E,
            header: b,
            presenceActivity: y,
            hideParty: O,
            partyStatusElement: A,
            currentUserPresenceActivity: v,
            onClickContent: S,
            onView: I,
            guildId: T,
        } = e,
        C = (0, d.w)(v, y),
        N = (0, c.Gq)(y, E.author, "Invite Embed"),
        R = i.useMemo(() => {
            let e = [];
            if (!C) {
                var t;
                e.push({
                    label: null != (t = N.label) ? t : p.intl.string(p.t.VJlc0S),
                    trackingArea: o.kY.SYNC,
                    onClick: () => {
                        N.onClick();
                    },
                    disabled: N.disabled,
                    disabledReason: N.disabled ? N.tooltip : void 0,
                });
            }
            return e;
        }, [C, N]),
        w =
            null != y && null != y.details && null != y.state
                ? p.intl.formatToPlainString(p.t.JCvHtx, {
                      track: y.details,
                      artist: y.state,
                  })
                : g.name,
        P =
            null != (t = null == y || null == (h = y.timestamps) ? void 0 : h.start)
                ? t
                : null == y
                  ? void 0
                  : y.created_at,
        D = i.useMemo(() => {
            var e;
            return null != P
                ? (0, r.jsxs)("div", {
                      className: _.Ym,
                      children: [
                          (0, r.jsx)(a.T7G, {
                              size: "xxs",
                              color: "currentColor",
                          }),
                          (0, r.jsx)(l.z, {
                              entry: {
                                  start: P,
                                  end: null == y || null == (e = y.timestamps) ? void 0 : e.end,
                              },
                              textColor: "currentColor",
                              textTabularNumbers: !1,
                              textFontCode: !1,
                          }),
                      ],
                  })
                : null;
        }, [P, null == y || null == (m = y.timestamps) ? void 0 : m.end]),
        x = i.useMemo(
            () =>
                (0, r.jsxs)("div", {
                    className: _.pq,
                    children: [
                        (0, r.jsx)(a.Text, {
                            variant: "text-xs/normal",
                            className: _.dS,
                            color: "none",
                            lineClamp: 1,
                            children: D,
                        }),
                        O ? null : A,
                    ],
                }),
            [D, O, A],
        );
    return (0, r.jsx)(s.h, {
        header: b,
        title: w,
        iconSrc: null != (n = (0, u.A)(y, g.id)) ? n : void 0,
        info: x,
        actions: R,
        onClickContent: S,
        trackingConfig: {
            id: g.id,
            linkType: f.J.RICH_PRESENCE_INVITE,
            onView: I,
            referrerId: E.author.id,
            guildId: T,
            channelId: E.channel_id,
            messageId: E.id,
        },
    });
}
