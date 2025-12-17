n.d(t, { Z: () => _ }), n(953529);
var r = n(54381),
    i = n(473749),
    l = n(442837),
    a = n(481060),
    o = n(471445),
    s = n(924301),
    c = n(725436),
    u = n(79874),
    d = n(315416),
    p = n(230900),
    f = n(854698),
    g = n(592125),
    h = n(430824),
    m = n(388032),
    b = n(617821);
function _(e) {
    var t, n;
    let { eventId: _ } = e,
        E = (0, l.e7)([s.ZP], () => s.ZP.getGuildScheduledEvent(_), [_]),
        O = (0, l.e7)([h.Z], () => h.Z.getGuild(null == E ? void 0 : E.guild_id), [E]),
        v = (0, l.e7)([g.Z], () => g.Z.getChannel(null == E ? void 0 : E.channel_id), [E]),
        y = (0, u.zI)(_, null),
        I = null != E && (0, s.xt)(E),
        C = null != E ? (0, f.DK)(E) : null,
        S = (0, d.Z)(null == E ? void 0 : E.guild_id, null == E ? void 0 : E.id, C),
        T = null == y ? void 0 : y.startTime.toISOString(),
        { startDateTimeString: N } = i.useMemo(
            () =>
                I
                    ? { startDateTimeString: m.intl.string(m.t.TxqPQR) }
                    : (0, f.ub)(null != T ? T : new Date().toISOString()),
            [T, I],
        ),
        j = null != E ? (0, p.cS)(E) : void 0,
        P = null != (t = null == v ? void 0 : v.name) ? t : j,
        x = null != v ? (0, o.KS)(v) : null;
    if (null == E || null == O) return null;
    let A = null != E.description && E.description.length > 0;
    return (0, r.jsxs)("div", {
        className: b.eventContainer,
        children: [
            (0, r.jsx)("div", {
                className: b.eventTimeAndUser,
                children: (0, r.jsx)(a.Text, {
                    variant: "text-sm/semibold",
                    color: I ? "status-positive" : "text-brand",
                    children: N,
                }),
            }),
            (0, r.jsx)(a.Text, {
                variant: "text-lg/semibold",
                className: A ? b.eventTitle : void 0,
                children: E.name,
            }),
            A &&
                (0, r.jsx)(a.Text, {
                    variant: "text-md/normal",
                    color: "text-subtle",
                    className: b.eventDescription,
                    children: (0, c.m)(null != (n = E.description) ? n : "", !0, { guildId: O.id }),
                }),
            (0, r.jsx)("hr", { className: b.eventDivider }),
            (0, r.jsxs)("div", {
                className: b.eventInfoContainer,
                children: [
                    (0, r.jsxs)("div", {
                        className: b.eventLocationRow,
                        children: [
                            (0, r.jsx)(a.BFJ, {
                                size: "xs",
                                color: "currentColor",
                            }),
                            (0, r.jsx)(a.Text, {
                                variant: "text-xs/normal",
                                color: "text-muted",
                                children: m.intl.format(m.t["+DLsD8"], { count: S }),
                            }),
                        ],
                    }),
                    (0, r.jsxs)("div", {
                        className: b.eventLocationRow,
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
                                className: b.eventLocationText,
                                children: null != P ? (0, c.m)(P, !0) : null,
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
