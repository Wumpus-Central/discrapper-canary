"use strict";
n.d(t, { A: () => f, X: () => _ });
var i = n(627968);
n(64700);
var s = n(503698),
    l = n.n(s),
    a = n(284009),
    r = n.n(a),
    o = n(311907),
    c = n(397927),
    d = n(698441),
    u = n(520006),
    h = n(71393),
    A = n(576705),
    p = n(652215),
    m = n(985018),
    g = n(669486);
function _(e) {
    let {
        guild: t,
        channel: s,
        streamUserId: l,
        applicationId: a,
        appContext: r,
        exitFullScreen: o,
        analyticsLocation: d,
        guildScheduledEvent: u,
        source: h,
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
                        applicationId: a,
                        analyticsLocation: d,
                        source: h ?? (s.isGuildStageVoice() ? p.PE1.STAGE_CHANNEL : p.PE1.STREAM_INVITE),
                        guildScheduledEvent: u,
                    });
            },
            { modalKey: "stream-invite-modal", contextKey: r === p.BRT.POPOUT ? c.KX8 : c.SYi },
        );
}
function f(e) {
    let {
            stream: t,
            applicationId: n,
            channel: s,
            exitFullScreen: a,
            appContext: f,
            analyticsLocation: x,
            className: C,
            size: E = "sm",
        } = e,
        I = s?.getGuildId(),
        N = s?.id,
        b = (0, o.bG)([h.A], () => (null != I ? h.A.getGuild(I) : null), [I]),
        S = (0, o.bG)([d.Ay], () => d.Ay.getActiveEventByChannel(N), [N]);
    if (!(null != b && null != s && A.A.can(p.xBc.CREATE_INSTANT_INVITE, s))) return null;
    let T = m.intl.string(m.t.VINpSK);
    return (
        null != t ? (T = m.intl.string(m.t["6VQaqd"])) : null != n && (T = m.intl.string(m.t["OzOM/q"])),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)("div", {
                    className: l()(C, g.uX),
                    children: (0, i.jsx)(c.Button, {
                        size: E,
                        variant: "secondary",
                        text: T,
                        onClick: () => {
                            r()(null != b, "guild cannot be null"),
                                r()(null != s, "channel cannot be null"),
                                _({
                                    guild: b,
                                    channel: s,
                                    streamUserId: t?.ownerId,
                                    applicationId: n,
                                    appContext: f,
                                    exitFullScreen: a,
                                    analyticsLocation: x,
                                    guildScheduledEvent: S,
                                    source: p.PE1.VOICE_CHANNEL_UI_INVITE_BUTTON,
                                });
                        },
                    }),
                }),
                (0, i.jsx)(u.A, {
                    channel: s,
                    stream: t,
                    appContext: f,
                    className: l()(C, g.gb),
                    exitFullScreen: a,
                    analyticsLocation: x,
                    guildScheduledEvent: S,
                }),
            ],
        })
    );
}
