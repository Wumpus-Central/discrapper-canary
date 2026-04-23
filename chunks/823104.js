n.d(t, { D: () => S });
var i = n(627968),
    l = n(64700),
    a = n(17928),
    r = n(834730),
    d = n(477782),
    o = n(714114),
    s = n(323073),
    u = n(47167),
    c = n(262763),
    A = n(790535);
let g = (0, n(945810).mj)({
    name: "2026-03-join-voice-context-menu",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var f = n(10862),
    E = n(70963),
    b = n(495544),
    x = n(576705),
    m = n(977997),
    C = n(652215),
    I = n(756699);
function h(e) {
    let { channel: t } = e,
        n = (0, u.Ay)(t);
    return (0, i.jsxs)("div", {
        className: I.W,
        children: [
            (0, i.jsx)(f.A, { channel: t, color: "currentColor", size: "xs", className: I.p }),
            (0, i.jsx)(r.E, { variant: "text-xs/medium", color: "text-muted", lineClamp: 1, children: n }),
        ],
    });
}
function S(e) {
    let { userId: t } = e,
        { voiceChannel: n } = (0, o.A)({ userId: t }),
        r = (0, a.bG)([x.A], () => {
            if (null == n) return !1;
            let e = (0, s.r9)() && (0, s.UK)(n.id);
            return (n.isPrivate() || x.A.can(C.xBc.CONNECT, n)) && !e;
        }),
        u = (0, a.bG)([m.A], () => m.A.isInChannel(n?.id)),
        f = (0, a.bG)([b.default], () => b.default.getId() === t),
        I = l.useCallback(() => {
            null != n &&
                (n.isGuildStageVoice()
                    ? (0, A.av)(n)
                    : c.A.handleVoiceConnect({
                          channel: n,
                          connected: u,
                          needSubscriptionToAccess: !1,
                          routeDirectlyToChannel: !0,
                          bypassChangeModal: !0,
                      }));
        }, [n, u]),
        { enabled: S } = g.useConfig({ location: "useJoinVoiceItem" });
    return S && r && !f && null != n
        ? (0, i.jsx)(d.Dr, {
              id: "join-voice",
              label: u ? (0, E.om)(n) : (0, E.M)(n),
              subtext: (0, i.jsx)(h, { channel: n }),
              action: I,
          })
        : null;
}
