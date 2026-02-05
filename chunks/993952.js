n.d(t, { A: () => x, X: () => _ });
var i = n(627968);
n(64700);
var l = n(503698),
    s = n.n(l),
    a = n(284009),
    r = n.n(a),
    o = n(311907),
    d = n(397927),
    c = n(698441),
    u = n(520006),
    h = n(71393),
    A = n(576705),
    g = n(652215),
    m = n(985018),
    p = n(669486);
function _(e) {
    let {
        guild: t,
        channel: l,
        streamUserId: s,
        applicationId: a,
        appContext: r,
        exitFullScreen: o,
        analyticsLocation: c,
        guildScheduledEvent: u,
    } = e;
    o?.(),
        (0, d.mMO)(
            async () => {
                let { default: e } = await Promise.all([n.e("43600"), n.e("28136"), n.e("74918")]).then(
                    n.bind(n, 234355),
                );
                return (n) =>
                    (0, i.jsx)(e, {
                        ...n,
                        guild: t,
                        channel: l,
                        streamUserId: s,
                        applicationId: a,
                        analyticsLocation: c,
                        source: l.isGuildStageVoice() ? g.PE1.STAGE_CHANNEL : g.PE1.STREAM_INVITE,
                        guildScheduledEvent: u,
                    });
            },
            { modalKey: "stream-invite-modal", contextKey: r === g.BRT.POPOUT ? d.KX8 : d.SYi },
        );
}
function x(e) {
    let {
            stream: t,
            applicationId: n,
            channel: l,
            exitFullScreen: a,
            appContext: x,
            analyticsLocation: f,
            className: E,
            size: C = "sm",
        } = e,
        I = l?.getGuildId(),
        S = l?.id,
        b = (0, o.bG)([h.A], () => (null != I ? h.A.getGuild(I) : null), [I]),
        N = (0, o.bG)([c.Ay], () => c.Ay.getActiveEventByChannel(S), [S]);
    if (!(null != b && null != l && A.A.can(g.xBc.CREATE_INSTANT_INVITE, l))) return null;
    let T = m.intl.string(m.t.VINpSK);
    return (
        null != t ? (T = m.intl.string(m.t["6VQaqd"])) : null != n && (T = m.intl.string(m.t["OzOM/q"])),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)("div", {
                    className: s()(E, p.uX),
                    children: (0, i.jsx)(d.Button, {
                        size: C,
                        variant: "secondary",
                        text: T,
                        onClick: () => {
                            r()(null != b, "guild cannot be null"),
                                r()(null != l, "channel cannot be null"),
                                _({
                                    guild: b,
                                    channel: l,
                                    streamUserId: t?.ownerId,
                                    applicationId: n,
                                    appContext: x,
                                    exitFullScreen: a,
                                    analyticsLocation: f,
                                    guildScheduledEvent: N,
                                });
                        },
                    }),
                }),
                (0, i.jsx)(u.A, {
                    channel: l,
                    stream: t,
                    appContext: x,
                    className: s()(E, p.gb),
                    exitFullScreen: a,
                    analyticsLocation: f,
                    guildScheduledEvent: N,
                }),
            ],
        })
    );
}
