n.d(t, {
    A: () => O,
}),
    n(896048);
var a = n(627968),
    l = n(64700),
    i = n(503698),
    r = n.n(i),
    s = n(253506),
    o = n(665260),
    c = n(311907),
    d = n(397927),
    u = n(308528),
    m = n(571694),
    p = n(47167),
    h = n(704844),
    f = n(734057),
    x = n(994500),
    b = n(287809),
    g = n(645959),
    v = n(263834),
    j = n(865116),
    y = n(716371),
    _ = n(701940),
    A = n(661251);

function C() {
    var e;
    let t = (0, c.yK)([g.A], () => g.A.getSortedChannels()[1]),
        [n, i] = l.useState(t.length > 0 ? t[0].channelId : void 0),
        { selectedChannel: r, options: u } = (0, c.cf)([f.A, b.default, x.A], () => ({
            selectedChannel: f.A.getChannel(n),
            options: t.map((e) => {
                let t = f.A.getChannel(e.channelId);
                return {
                    id: e.channelId,
                    value: e.channelId,
                    label: null != t ? (0, p.m1)(t, b.default, x.A) : e.channelId,
                    leading:
                        null != t
                            ? (0, a.jsx)(d.euF, {
                                  src: (0, m.Y)(t),
                                  "aria-hidden": !0,
                                  size: d._3J.SIZE_16,
                              })
                            : void 0,
                };
            }),
        })),
        v = l.useCallback(() => {
            var e;
            if (null == r || !r.isPrivate()) return;
            let t = (0, o.PQ)(null != (e = r.recipientFlags) ? e : 0, s.o.DISMISSED_IN_GAME_MESSAGE_NUX);
            h.A.updatePrivateChannelRecipientFlags(r.id, t);
        }, [r]),
        j =
            null != r &&
            !!r.isPrivate() &&
            (0, o.Lt)(null != (e = r.recipientFlags) ? e : 0, s.o.DISMISSED_IN_GAME_MESSAGE_NUX);
    return (0, a.jsxs)("div", {
        className: _.gs,
        children: [
            (0, a.jsx)(d.ZiE, {
                label: "In-Game NUX Message for DMs",
                selectionMode: "single",
                options: u,
                placeholder: "Select DM",
                value: n,
                onSelectionChange: i,
            }),
            (0, a.jsx)(d.Button, {
                variant: "primary",
                size: "sm",
                text: j ? "Clear NUX Flag" : "Set NUX Flag",
                onClick: v,
                disabled: null == n,
            }),
        ],
    });
}

function S() {
    let e = l.useCallback(() => {
        u.A.openPrivateChannel({
            recipientIds: [y.K],
        });
    }, []);
    return (0, a.jsx)(d.Button, {
        variant: "primary",
        size: "sm",
        text: "Open System DM",
        onClick: e,
    });
}

function O() {
    let e = (0, c.bG)([j.Ay], () => j.Ay.allByCategory(j.xW.MESSAGING), [], c.My).map((e) => {
        let [t, n, { label: l }] = e;
        return (0, a.jsx)(
            d.dOG,
            {
                label: l,
                description: t,
                checked: n,
                onChange: (e) => (0, v.L)(t, e),
            },
            t,
        );
    });
    return (0, a.jsxs)("div", {
        className: r()(A.nd, _.nd),
        children: [
            e,
            (0, a.jsx)("div", {
                className: _.yF,
            }),
            (0, a.jsx)(C, {}),
            (0, a.jsx)("div", {
                className: _.yF,
            }),
            (0, a.jsx)(S, {}),
        ],
    });
}
