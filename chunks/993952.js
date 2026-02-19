"use strict";
n.d(t, { A: () => f, X: () => _ });
var i = n(627968);
n(64700);
var s = n(503698),
    l = n.n(s),
    r = n(284009),
    a = n.n(r),
    o = n(311907),
    c = n(397927),
    d = n(698441),
    u = n(520006),
    h = n(71393),
    A = n(576705),
    p = n(652215),
    g = n(985018),
    m = n(669486);
function _(e) {
    let {
        guild: t,
        channel: s,
        streamUserId: l,
        applicationId: r,
        appContext: a,
        exitFullScreen: o,
        analyticsLocation: d,
        guildScheduledEvent: u,
    } = e;
    o?.(),
        (0, c.mMO)(
            async () => {
                let { default: e } = await Promise.all([n.e("43600"), n.e("28136"), n.e("74918")]).then(
                    n.bind(n, 234355),
                );
                return (n) =>
                    (0, i.jsx)(e, {
                        ...n,
                        guild: t,
                        channel: s,
                        streamUserId: l,
                        applicationId: r,
                        analyticsLocation: d,
                        source: s.isGuildStageVoice() ? p.PE1.STAGE_CHANNEL : p.PE1.STREAM_INVITE,
                        guildScheduledEvent: u,
                    });
            },
            { modalKey: "stream-invite-modal", contextKey: a === p.BRT.POPOUT ? c.KX8 : c.SYi },
        );
}
function f(e) {
    let {
            stream: t,
            applicationId: n,
            channel: s,
            exitFullScreen: r,
            appContext: f,
            analyticsLocation: x,
            className: C,
            size: E = "sm",
        } = e,
        I = s?.getGuildId(),
        b = s?.id,
        N = (0, o.bG)([h.A], () => (null != I ? h.A.getGuild(I) : null), [I]),
        S = (0, o.bG)([d.Ay], () => d.Ay.getActiveEventByChannel(b), [b]);
    if (!(null != N && null != s && A.A.can(p.xBc.CREATE_INSTANT_INVITE, s))) return null;
    let T = g.intl.string(g.t.VINpSK);
    return (
        null != t ? (T = g.intl.string(g.t["6VQaqd"])) : null != n && (T = g.intl.string(g.t["OzOM/q"])),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)("div", {
                    className: l()(C, m.uX),
                    children: (0, i.jsx)(c.Button, {
                        size: E,
                        variant: "secondary",
                        text: T,
                        onClick: () => {
                            a()(null != N, "guild cannot be null"),
                                a()(null != s, "channel cannot be null"),
                                _({
                                    guild: N,
                                    channel: s,
                                    streamUserId: t?.ownerId,
                                    applicationId: n,
                                    appContext: f,
                                    exitFullScreen: r,
                                    analyticsLocation: x,
                                    guildScheduledEvent: S,
                                });
                        },
                    }),
                }),
                (0, i.jsx)(u.A, {
                    channel: s,
                    stream: t,
                    appContext: f,
                    className: l()(C, m.gb),
                    exitFullScreen: r,
                    analyticsLocation: x,
                    guildScheduledEvent: S,
                }),
            ],
        })
    );
}
