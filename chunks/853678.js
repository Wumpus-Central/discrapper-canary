n.d(t, { Z: () => N }), n(388685), n(190126), n(368063), n(65234), n(111804), n(490233), n(97749), n(997841);
var r = n(95015),
    i = n(45792),
    l = n(782568),
    a = n(636449),
    o = n(317381),
    s = n(611577),
    c = n(840074),
    u = n(16609),
    d = n(812206),
    p = n(313789),
    f = n(626135),
    g = n(12647),
    h = n(49012),
    m = n(358085),
    b = n(996106),
    _ = n(914946),
    E = n(452426),
    O = n(186901),
    v = n(981631),
    y = n(701488),
    I = n(674563);
let C = new Set([y.Fu, y.JT]),
    S = new Set(["www.nytimes.com", "apps.apple.com", "play.google.com"]),
    T = new Map([
        [
            I.Vt,
            {
                trustedHosts: S,
                trustedUntilEpochMs: new Date("2027-01-15T00:00:00").valueOf(),
            },
        ],
        [
            I.fd,
            {
                trustedHosts: S,
                trustedUntilEpochMs: new Date("2027-01-15T00:00:00").valueOf(),
            },
        ],
        [
            I.He,
            {
                trustedHosts: S,
                trustedUntilEpochMs: new Date("2027-01-15T00:00:00").valueOf(),
            },
        ],
    ]),
    N = {
        [v.Etm.OPEN_EXTERNAL_LINK]: {
            scope: {
                [O.Gp.ANY]: [O.wE, O.b_],
            },
            validation: (e) => (0, E.Z)(e).required().keys({ url: e.string().required() }),
            handler(e) {
                let {
                    socket: t,
                    args: { url: n },
                } = e;
                (0, _.bu)(t.transport);
                let r = o.ZP.getCurrentEmbeddedActivity();
                try {
                    var i, c;
                    let e = new URL(n),
                        o = e.toString();
                    if (m.isPlatformEmbedded) {
                        let e = (0, a.R)() ? v.KJ3.ACTIVITY_POPOUT : null;
                        g.Z.focus(e, !0);
                    }
                    let p = d.Z.getApplication(null == (i = t.application) ? void 0 : i.id),
                        b = (0, u.p)(null == r ? void 0 : r.location),
                        _ = (null == p ? void 0 : p.id) !== void 0 ? T.get(p.id) : void 0;
                    if (void 0 !== _ && _.trustedUntilEpochMs >= Date.now() && _.trustedHosts.has(e.host))
                        return (
                            (0, l.Z)(o),
                            f.default.track(v.rMx.RPC_OPEN_EXTERNAL_LINK_CALLED, {
                                application_id: null == (c = t.application) ? void 0 : c.id,
                                url: o,
                                opened: !0,
                            }),
                            Promise.resolve({ opened: !0 })
                        );
                    return new Promise((e) =>
                        (0, h.q)(
                            {
                                href: o,
                                shouldConfirm: !0,
                                onConfirm: () => {
                                    var n;
                                    (0, l.Z)(o),
                                        f.default.track(v.rMx.RPC_OPEN_EXTERNAL_LINK_CALLED, {
                                            application_id: null == (n = t.application) ? void 0 : n.id,
                                            url: o,
                                            opened: !0,
                                        }),
                                        e({ opened: !0 });
                                },
                                onCancel: () => {
                                    var n;
                                    f.default.track(v.rMx.RPC_OPEN_EXTERNAL_LINK_CALLED, {
                                        application_id: null == (n = t.application) ? void 0 : n.id,
                                        url: o,
                                        opened: !1,
                                    }),
                                        e({ opened: !1 });
                                },
                            },
                            void 0,
                            void 0,
                            (0, s.z)({
                                application: p,
                                channelId: b,
                            }),
                        ),
                    );
                } catch (e) {
                    throw new b.Z({ errorCode: v.lTL.INVALID_COMMAND }, "Invalid URL: ".concat(n));
                }
            },
        },
        [v.Etm.NAVIGATE_TO_CONNECTIONS]: {
            validation: (e) => (0, E.Z)(e),
            scope: { [O.Gp.ANY]: [O.wE] },
            handler(e) {
                let { socket: t } = e;
                (0, _.bu)(t.transport);
                let r = (0, _._f)(t.application);
                if (!C.has(r))
                    throw new b.Z(
                        { errorCode: v.lTL.UNAUTHORIZED_FOR_APPLICATION },
                        "Command not available for this application",
                    );
                {
                    let { openUserSettings: e } = n(518596);
                    e(p.n.CONNECTIONS_PANEL, { section: v.oAB.CONNECTIONS });
                }
            },
        },
        [v.Etm.SHARE_LINK]: (0, i.S)(v.Etm.SHARE_LINK, {
            scope: { [O.Gp.ANY]: [O.wE] },
            handler(e) {
                var t;
                let {
                    socket: n,
                    args: { custom_id: i, message: l, link_id: a },
                } = e;
                (0, _.bu)(n.transport);
                let o = (0, _._f)(n.application);
                if (null == o) throw new b.Z({ errorCode: v.lTL.INVALID_COMMAND }, "No application.");
                if (!(0, r.yE)(null != (t = n.application.flags) ? t : 0, v.udG.EMBEDDED))
                    throw new b.Z({ errorCode: v.lTL.INVALID_COMMAND }, "This application cannot access this API");
                return new Promise((e) => {
                    (0, c._)({
                        applicationId: o,
                        customId: i,
                        linkId: a,
                        message: l,
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
