n.d(t, { A: () => S });
var a = n(627968),
    i = n(64700),
    s = n(503698),
    l = n.n(s),
    r = n(253506),
    o = n(665260),
    d = n(311907),
    c = n(397927),
    u = n(308528),
    m = n(571694),
    h = n(47167),
    x = n(704844),
    p = n(734057),
    g = n(994500),
    f = n(287809),
    _ = n(645959),
    v = n(263834),
    b = n(865116),
    j = n(716371),
    A = n(49977),
    C = n(310086);
function y() {
    let e = (0, d.yK)([_.default], () => _.default.getSortedChannels()[1]),
        [t, n] = i.useState(e.length > 0 ? e[0].channelId : void 0),
        { selectedChannel: s, options: l } = (0, d.cf)([p.A, f.default, g.A], () => ({
            selectedChannel: p.A.getChannel(t),
            options: e.map((e) => {
                let t = p.A.getChannel(e.channelId);
                return {
                    id: e.channelId,
                    value: e.channelId,
                    label: null != t ? (0, h.m1)(t, f.default, g.A) : e.channelId,
                    leading:
                        null != t
                            ? (0, a.jsx)(c.euF, { src: (0, m.Y)(t), "aria-hidden": !0, size: c._3J.SIZE_16 })
                            : void 0,
                };
            }),
        })),
        u = i.useCallback(() => {
            if (null == s || !s.isPrivate()) return;
            let e = (0, o.PQ)(s.recipientFlags ?? 0, r.o.DISMISSED_IN_GAME_MESSAGE_NUX);
            x.A.updatePrivateChannelRecipientFlags(s.id, e);
        }, [s]),
        v = !!s?.isPrivate() && (0, o.Lt)(s.recipientFlags ?? 0, r.o.DISMISSED_IN_GAME_MESSAGE_NUX);
    return (0, a.jsxs)("div", {
        className: A.gs,
        children: [
            (0, a.jsx)(c.ZiE, {
                label: "In-Game NUX Message for DMs",
                selectionMode: "single",
                options: l,
                placeholder: "Select DM",
                value: t,
                onSelectionChange: n,
            }),
            (0, a.jsx)(c.Button, {
                variant: "primary",
                size: "sm",
                text: v ? "Clear NUX Flag" : "Set NUX Flag",
                onClick: u,
                disabled: null == t,
            }),
        ],
    });
}
function T() {
    let e = i.useCallback(() => {
        u.A.openPrivateChannel({ recipientIds: [j.K] });
    }, []);
    return (0, a.jsx)(c.Button, { variant: "primary", size: "sm", text: "Open System DM", onClick: e });
}
function S() {
    let e = (0, d.bG)([b.Ay], () => b.Ay.allByCategory(b.xW.MESSAGING), [], d.My).map((e) => {
        let [t, n, { label: i }] = e;
        return (0, a.jsx)(c.dOG, { label: i, description: t, checked: n, onChange: (e) => (0, v.L)(t, e) }, t);
    });
    return (0, a.jsxs)("div", {
        className: l()(C.nd, A.nd),
        children: [
            e,
            (0, a.jsx)("div", { className: A.yF }),
            (0, a.jsx)(y, {}),
            (0, a.jsx)("div", { className: A.yF }),
            (0, a.jsx)(T, {}),
        ],
    });
}
