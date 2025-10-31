n.d(t, { Z: () => b }), n(953529);
var r = n(951288),
    i = n(647438),
    l = n(442837),
    a = n(481060),
    s = n(471445),
    o = n(924301),
    c = n(725436),
    u = n(79874),
    d = n(376108),
    p = n(230900),
    f = n(954313),
    m = n(592125),
    h = n(430824),
    g = n(388032),
    _ = n(372539);
function b(e) {
    var t, n;
    let { eventId: b } = e,
        E = (0, l.e7)([o.ZP], () => o.ZP.getGuildScheduledEvent(b), [b]),
        O = (0, l.e7)([h.Z], () => h.Z.getGuild(null == E ? void 0 : E.guild_id), [E]),
        I = (0, l.e7)([m.Z], () => m.Z.getChannel(null == E ? void 0 : E.channel_id), [E]),
        y = (0, u.zI)(b, null),
        v = null != E && (0, o.xt)(E),
        C = null != E ? (0, f.DK)(E) : null,
        S = (0, d.Z)(null == E ? void 0 : E.guild_id, null == E ? void 0 : E.id, C),
        T = null == y ? void 0 : y.startTime.toISOString(),
        { startDateTimeString: N } = i.useMemo(
            () =>
                v
                    ? { startDateTimeString: g.intl.string(g.t.TxqPQR) }
                    : (0, f.ub)(null != T ? T : new Date().toISOString()),
            [T, v],
        ),
        j = null != E ? (0, p.cS)(E) : void 0,
        P = null != (t = null == I ? void 0 : I.name) ? t : j,
        x = null != I ? (0, s.KS)(I) : null;
    if (null == E || null == O) return null;
    let A = null != E.description && E.description.length > 0;
    return (0, r.jsxs)("div", {
        className: _.eventContainer,
        children: [
            (0, r.jsx)("div", {
                className: _.eventTimeAndUser,
                children: (0, r.jsx)(a.Text, {
                    variant: "text-sm/semibold",
                    color: v ? "status-positive" : "text-brand",
                    children: N,
                }),
            }),
            (0, r.jsx)(a.Text, {
                variant: "text-lg/semibold",
                className: A ? _.eventTitle : void 0,
                children: E.name,
            }),
            A &&
                (0, r.jsx)(a.Text, {
                    variant: "text-md/normal",
                    color: "text-secondary",
                    className: _.eventDescription,
                    children: (0, c.m)(null != (n = E.description) ? n : "", !0, { guildId: O.id }),
                }),
            (0, r.jsx)("hr", { className: _.eventDivider }),
            (0, r.jsxs)("div", {
                className: _.eventInfoContainer,
                children: [
                    (0, r.jsxs)("div", {
                        className: _.eventLocationRow,
                        children: [
                            (0, r.jsx)(a.BFJ, {
                                size: "xs",
                                color: "currentColor",
                            }),
                            (0, r.jsx)(a.Text, {
                                variant: "text-xs/normal",
                                color: "text-muted",
                                children: g.intl.format(g.t["+DLsD8"], { count: S }),
                            }),
                        ],
                    }),
                    (0, r.jsxs)("div", {
                        className: _.eventLocationRow,
                        children: [
                            null != x
                                ? (0, r.jsx)(x, {
                                      size: "xs",
                                      color: "currentColor",
                                  })
                                : null,
                            (0, r.jsx)(a.Text, {
                                variant: "text-xs/normal",
                                color: "text-muted",
                                className: _.eventLocationText,
                                children: null != P ? (0, c.m)(P, !0) : null,
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
