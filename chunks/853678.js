n.d(t, { Z: () => j }), n(388685), n(190126), n(368063), n(65234), n(111804), n(490233), n(97749), n(997841);
var r = n(45792),
    i = n(782568),
    l = n(636449),
    a = n(317381),
    s = n(611577),
    o = n(840074),
    c = n(16609),
    u = n(812206),
    d = n(313789),
    p = n(626135),
    f = n(12647),
    m = n(630388),
    h = n(49012),
    g = n(358085),
    _ = n(996106),
    b = n(914946),
    E = n(452426),
    O = n(186901),
    I = n(981631),
    y = n(701488),
    v = n(674563);
let C = new Set([y.Fu, y.JT]),
    S = new Set(["www.nytimes.com", "apps.apple.com", "play.google.com"]),
    T = new Set([
        "p-ty8do4dje6.exmggames.com",
        "fortnitetrial.fortnite.com",
        "fn.gg",
        "geforcenow.com",
        "www.fortnite.com",
        "www.nvidia.com",
        "www.geforcenow.com",
    ]),
    N = new Map([
        [
            v.Vt,
            {
                trustedHosts: S,
                trustedUntilEpochMs: new Date("2027-01-15T00:00:00").valueOf(),
            },
        ],
        [
            v.fd,
            {
                trustedHosts: S,
                trustedUntilEpochMs: new Date("2027-01-15T00:00:00").valueOf(),
            },
        ],
        [
            v.He,
            {
                trustedHosts: S,
                trustedUntilEpochMs: new Date("2027-01-15T00:00:00").valueOf(),
            },
        ],
        [
            v.Zs,
            {
                trustedHosts: T,
                trustedUntilEpochMs: new Date("2026-01-01T00:00:00").valueOf(),
            },
        ],
    ]),
    j = {
        [I.Etm.OPEN_EXTERNAL_LINK]: {
            scope: {
                [O.Gp.ANY]: [O.wE, O.b_],
            },
            validation: (e) => (0, E.Z)(e).required().keys({ url: e.string().required() }),
            handler(e) {
                let {
                    socket: t,
                    args: { url: n },
                } = e;
                (0, b.bu)(t.transport);
                let r = a.ZP.getCurrentEmbeddedActivity();
                try {
                    var o, d;
                    let e = new URL(n),
                        a = e.toString();
                    if (g.isPlatformEmbedded) {
                        let e = (0, l.R)() ? I.KJ3.ACTIVITY_POPOUT : null;
                        f.Z.focus(e, !0);
                    }
                    let m = u.Z.getApplication(null == (o = t.application) ? void 0 : o.id),
                        _ = (0, c.p)(null == r ? void 0 : r.location),
                        b = (null == m ? void 0 : m.id) !== void 0 ? N.get(m.id) : void 0;
                    if (void 0 !== b && b.trustedUntilEpochMs >= Date.now() && b.trustedHosts.has(e.host))
                        return (
                            (0, i.Z)(a),
                            p.default.track(I.rMx.RPC_OPEN_EXTERNAL_LINK_CALLED, {
                                application_id: null == (d = t.application) ? void 0 : d.id,
                                url: a,
                                opened: !0,
                            }),
                            Promise.resolve({ opened: !0 })
                        );
                    return new Promise((e) =>
                        (0, h.q)(
                            {
                                href: a,
                                shouldConfirm: !0,
                                onConfirm: () => {
                                    var n;
                                    (0, i.Z)(a),
                                        p.default.track(I.rMx.RPC_OPEN_EXTERNAL_LINK_CALLED, {
                                            application_id: null == (n = t.application) ? void 0 : n.id,
                                            url: a,
                                            opened: !0,
                                        }),
                                        e({ opened: !0 });
                                },
                                onCancel: () => {
                                    var n;
                                    p.default.track(I.rMx.RPC_OPEN_EXTERNAL_LINK_CALLED, {
                                        application_id: null == (n = t.application) ? void 0 : n.id,
                                        url: a,
                                        opened: !1,
                                    }),
                                        e({ opened: !1 });
                                },
                            },
                            void 0,
                            void 0,
                            (0, s.z)({
                                application: m,
                                channelId: _,
                            }),
                        ),
                    );
                } catch (e) {
                    throw new _.Z({ errorCode: I.lTL.INVALID_COMMAND }, "Invalid URL: ".concat(n));
                }
            },
        },
        [I.Etm.NAVIGATE_TO_CONNECTIONS]: {
            validation: (e) => (0, E.Z)(e),
            scope: { [O.Gp.ANY]: [O.wE] },
            handler(e) {
                let { socket: t } = e;
                (0, b.bu)(t.transport);
                let r = (0, b._f)(t.application);
                if (!C.has(r))
                    throw new _.Z(
                        { errorCode: I.lTL.UNAUTHORIZED_FOR_APPLICATION },
                        "Command not available for this application",
                    );
                {
                    let { openUserSettings: e } = n(518596);
                    e(d.n.CONNECTIONS_PANEL, { section: I.oAB.CONNECTIONS });
                }
            },
        },
        [I.Etm.SHARE_LINK]: (0, r.S)(I.Etm.SHARE_LINK, {
            scope: { [O.Gp.ANY]: [O.wE] },
            handler(e) {
                var t;
                let {
                    socket: n,
                    args: { custom_id: r, message: i, link_id: l },
                } = e;
                (0, b.bu)(n.transport);
                let a = (0, b._f)(n.application);
                if (null == a) throw new _.Z({ errorCode: I.lTL.INVALID_COMMAND }, "No application.");
                if (!(0, m.yE)(null != (t = n.application.flags) ? t : 0, I.udG.EMBEDDED))
                    throw new _.Z({ errorCode: I.lTL.INVALID_COMMAND }, "This application cannot access this API");
                return new Promise((e) => {
                    (0, o._)({
                        applicationId: a,
                        customId: r,
                        linkId: l,
                        message: i,
                        onShare: (t, n) => {
                            e({
                                success: n || t,
                                didCopyLink: n,
                                didSendMessage: t,
                            });
                        },
                    });
                });
            },
        }),
    };
