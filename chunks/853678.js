n.d(t, { Z: () => T }), n(388685), n(190126), n(368063), n(65234), n(111804), n(490233), n(97749), n(997841);
var r = n(45792),
    i = n(230711),
    l = n(782568),
    a = n(636449),
    o = n(317381),
    s = n(611577),
    c = n(840074),
    u = n(16609),
    d = n(812206),
    p = n(626135),
    f = n(12647),
    h = n(630388),
    g = n(49012),
    m = n(358085),
    b = n(996106),
    _ = n(914946),
    O = n(452426),
    E = n(186901),
    y = n(981631),
    v = n(701488),
    I = n(674563);
let C = new Set([v.Fu, v.JT]),
    S = new Set(["www.nytimes.com", "apps.apple.com", "play.google.com"]),
    N = new Map([
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
    T = {
        [y.Etm.OPEN_EXTERNAL_LINK]: {
            scope: {
                [E.Gp.ANY]: [E.wE, E.b_],
            },
            validation: (e) => (0, O.Z)(e).required().keys({ url: e.string().required() }),
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
                        let e = (0, a.R)() ? y.KJ3.ACTIVITY_POPOUT : null;
                        f.Z.focus(e, !0);
                    }
                    let h = d.Z.getApplication(null == (i = t.application) ? void 0 : i.id),
                        b = (0, u.p)(null == r ? void 0 : r.location),
                        _ = (null == h ? void 0 : h.id) !== void 0 ? N.get(h.id) : void 0;
                    if (void 0 !== _ && _.trustedUntilEpochMs >= Date.now() && _.trustedHosts.has(e.host))
                        return (
                            (0, l.Z)(o),
                            p.default.track(y.rMx.RPC_OPEN_EXTERNAL_LINK_CALLED, {
                                application_id: null == (c = t.application) ? void 0 : c.id,
                                url: o,
                                opened: !0,
                            }),
                            Promise.resolve({ opened: !0 })
                        );
                    return new Promise((e) =>
                        (0, g.q)(
                            {
                                href: o,
                                shouldConfirm: !0,
                                onConfirm: () => {
                                    var n;
                                    (0, l.Z)(o),
                                        p.default.track(y.rMx.RPC_OPEN_EXTERNAL_LINK_CALLED, {
                                            application_id: null == (n = t.application) ? void 0 : n.id,
                                            url: o,
                                            opened: !0,
                                        }),
                                        e({ opened: !0 });
                                },
                                onCancel: () => {
                                    var n;
                                    p.default.track(y.rMx.RPC_OPEN_EXTERNAL_LINK_CALLED, {
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
                                application: h,
                                channelId: b,
                            }),
                        ),
                    );
                } catch (e) {
                    throw new b.Z({ errorCode: y.lTL.INVALID_COMMAND }, "Invalid URL: ".concat(n));
                }
            },
        },
        [y.Etm.NAVIGATE_TO_CONNECTIONS]: {
            validation: (e) => (0, O.Z)(e),
            scope: { [E.Gp.ANY]: [E.wE] },
            handler(e) {
                let { socket: t } = e;
                (0, _.bu)(t.transport);
                let n = (0, _._f)(t.application);
                if (!C.has(n))
                    throw new b.Z(
                        { errorCode: y.lTL.UNAUTHORIZED_FOR_APPLICATION },
                        "Command not available for this application",
                    );
                i.Z.open(y.oAB.CONNECTIONS);
            },
        },
        [y.Etm.SHARE_LINK]: (0, r.S)(y.Etm.SHARE_LINK, {
            scope: { [E.Gp.ANY]: [E.wE] },
            handler(e) {
                var t;
                let {
                    socket: n,
                    args: { custom_id: r, message: i, link_id: l },
                } = e;
                (0, _.bu)(n.transport);
                let a = (0, _._f)(n.application);
                if (null == a) throw new b.Z({ errorCode: y.lTL.INVALID_COMMAND }, "No application.");
                if (!(0, h.yE)(null != (t = n.application.flags) ? t : 0, y.udG.EMBEDDED))
                    throw new b.Z({ errorCode: y.lTL.INVALID_COMMAND }, "This application cannot access this API");
                return new Promise((e) => {
                    (0, c._)({
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
