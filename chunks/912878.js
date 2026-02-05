n.d(t, { A: () => y });
var a = n(627968),
    s = n(64700),
    i = n(503698),
    l = n.n(i),
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
    _ = n(287809),
    f = n(645959),
    v = n(263834),
    b = n(865116),
    j = n(716371),
    A = n(701940),
    C = n(661251);
function S() {
    let e = (0, d.yK)([f.default], () => f.default.getSortedChannels()[1]),
        [t, n] = s.useState(e.length > 0 ? e[0].channelId : void 0),
        { selectedChannel: i, options: l } = (0, d.cf)([p.A, _.default, g.A], () => ({
            selectedChannel: p.A.getChannel(t),
            options: e.map((e) => {
                let t = p.A.getChannel(e.channelId);
                return {
                    id: e.channelId,
                    value: e.channelId,
                    label: null != t ? (0, h.m1)(t, _.default, g.A) : e.channelId,
                    leading:
                        null != t
                            ? (0, a.jsx)(c.euF, { src: (0, m.Y)(t), "aria-hidden": !0, size: c._3J.SIZE_16 })
                            : void 0,
                };
            }),
        })),
        u = s.useCallback(() => {
            if (null == i || !i.isPrivate()) return;
            let e = (0, o.PQ)(i.recipientFlags ?? 0, r.o.DISMISSED_IN_GAME_MESSAGE_NUX);
            x.A.updatePrivateChannelRecipientFlags(i.id, e);
        }, [i]),
        v = !!i?.isPrivate() && (0, o.Lt)(i.recipientFlags ?? 0, r.o.DISMISSED_IN_GAME_MESSAGE_NUX);
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
    let e = s.useCallback(() => {
        u.A.openPrivateChannel({ recipientIds: [j.K] });
    }, []);
    return (0, a.jsx)(c.Button, { variant: "primary", size: "sm", text: "Open System DM", onClick: e });
}
function y() {
    let e = (0, d.bG)([b.Ay], () => b.Ay.allByCategory(b.xW.MESSAGING), [], d.My).map((e) => {
        let [t, n, { label: s }] = e;
        return (0, a.jsx)(c.dOG, { label: s, description: t, checked: n, onChange: (e) => (0, v.L)(t, e) }, t);
    });
    return (0, a.jsxs)("div", {
        className: l()(C.nd, A.nd),
        children: [
            e,
            (0, a.jsx)("div", { className: A.yF }),
            (0, a.jsx)(S, {}),
            (0, a.jsx)("div", { className: A.yF }),
            (0, a.jsx)(T, {}),
        ],
    });
}
