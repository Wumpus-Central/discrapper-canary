a.d(t, { A: () => D });
var n = a(627968),
    l = a(64700),
    i = a(503698),
    s = a.n(i),
    r = a(253506),
    o = a(665260),
    d = a(311907),
    c = a(97808),
    u = a(778712),
    m = a(783878),
    h = a(821609),
    p = a(243721),
    x = a(308528),
    g = a(571694),
    v = a(47167),
    b = a(704844),
    _ = a(734057),
    f = a(994500),
    j = a(287809),
    A = a(645959),
    y = a(263834),
    C = a(865116),
    E = a(716371),
    S = a(323081),
    N = a(611190);
function k() {
    let e = (0, d.yK)([A.default], () => A.default.getSortedChannels()[1]),
        [t, a] = l.useState(e.length > 0 ? e[0].channelId : void 0),
        { selectedChannel: i, options: s } = (0, d.cf)([_.A, j.default, f.A], () => ({
            selectedChannel: _.A.getChannel(t),
            options: e.map((e) => {
                let t = _.A.getChannel(e.channelId);
                return {
                    id: e.channelId,
                    value: e.channelId,
                    label: null != t ? (0, v.m1)(t, j.default, f.A) : e.channelId,
                    leading:
                        null != t
                            ? (0, n.jsx)(c.eu, { src: (0, g.Y)(t), "aria-hidden": !0, size: u._3.SIZE_16 })
                            : void 0,
                };
            }),
        })),
        p = l.useCallback(() => {
            if (null == i || !i.isPrivate()) return;
            let e = (0, o.PQ)(i.recipientFlags ?? 0, r.o.DISMISSED_IN_GAME_MESSAGE_NUX);
            b.A.updatePrivateChannelRecipientFlags(i.id, e);
        }, [i]),
        x = !!i?.isPrivate() && (0, o.Lt)(i.recipientFlags ?? 0, r.o.DISMISSED_IN_GAME_MESSAGE_NUX);
    return (0, n.jsxs)("div", {
        className: S.gs,
        children: [
            (0, n.jsx)(m.Z, {
                label: "In-Game NUX Message for DMs",
                selectionMode: "single",
                options: s,
                placeholder: "Select DM",
                value: t,
                onSelectionChange: a,
            }),
            (0, n.jsx)(h.$, {
                variant: "primary",
                size: "sm",
                text: x ? "Clear NUX Flag" : "Set NUX Flag",
                onClick: p,
                disabled: null == t,
            }),
        ],
    });
}
function I() {
    let e = l.useCallback(() => {
        x.A.openPrivateChannel({ recipientIds: [E.K] });
    }, []);
    return (0, n.jsx)(h.$, { variant: "primary", size: "sm", text: "Open System DM", onClick: e });
}
function D() {
    let e = (0, d.bG)([C.Ay], () => C.Ay.allByCategory(C.xW.MESSAGING), [], d.My).map((e) => {
        let [t, a, { label: l }] = e;
        return (0, n.jsx)(p.d, { label: l, description: t, checked: a, onChange: (e) => (0, y.L)(t, e) }, t);
    });
    return (0, n.jsxs)("div", {
        className: s()(N.nd, S.nd),
        children: [
            e,
            (0, n.jsx)("div", { className: S.yF }),
            (0, n.jsx)(k, {}),
            (0, n.jsx)("div", { className: S.yF }),
            (0, n.jsx)(I, {}),
        ],
    });
}
