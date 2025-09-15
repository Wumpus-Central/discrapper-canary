n.d(t, { Z: () => N }), n(388685), n(190126), n(368063), n(65234), n(111804), n(490233), n(97749), n(997841);
var r = n(45792),
    i = n(782568),
    l = n(636449),
    a = n(317381),
    o = n(611577),
    s = n(840074),
    c = n(16609),
    u = n(812206),
    d = n(313789),
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
                let r = a.ZP.getCurrentEmbeddedActivity();
                try {
                    var s, d;
                    let e = new URL(n),
                        a = e.toString();
                    if (m.isPlatformEmbedded) {
                        let e = (0, l.R)() ? y.KJ3.ACTIVITY_POPOUT : null;
                        f.Z.focus(e, !0);
                    }
                    let h = u.Z.getApplication(null == (s = t.application) ? void 0 : s.id),
                        b = (0, c.p)(null == r ? void 0 : r.location),
                        _ = (null == h ? void 0 : h.id) !== void 0 ? T.get(h.id) : void 0;
                    if (void 0 !== _ && _.trustedUntilEpochMs >= Date.now() && _.trustedHosts.has(e.host))
                        return (
                            (0, i.Z)(a),
                            p.default.track(y.rMx.RPC_OPEN_EXTERNAL_LINK_CALLED, {
                                application_id: null == (d = t.application) ? void 0 : d.id,
                                url: a,
                                opened: !0,
                            }),
                            Promise.resolve({ opened: !0 })
                        );
                    return new Promise((e) =>
                        (0, g.q)(
                            {
                                href: a,
                                shouldConfirm: !0,
                                onConfirm: () => {
                                    var n;
                                    (0, i.Z)(a),
                                        p.default.track(y.rMx.RPC_OPEN_EXTERNAL_LINK_CALLED, {
                                            application_id: null == (n = t.application) ? void 0 : n.id,
                                            url: a,
                                            opened: !0,
                                        }),
                                        e({ opened: !0 });
                                },
                                onCancel: () => {
                                    var n;
                                    p.default.track(y.rMx.RPC_OPEN_EXTERNAL_LINK_CALLED, {
                                        application_id: null == (n = t.application) ? void 0 : n.id,
                                        url: a,
                                        opened: !1,
                                    }),
                                        e({ opened: !1 });
                                },
                            },
                            void 0,
                            void 0,
                            (0, o.z)({
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
                let r = (0, _._f)(t.application);
                if (!C.has(r))
                    throw new b.Z(
                        { errorCode: y.lTL.UNAUTHORIZED_FOR_APPLICATION },
                        "Command not available for this application",
                    );
                {
                    let { openUserSettings: e } = n(518596);
                    e(d.n.CONNECTIONS_PANEL, { section: y.oAB.CONNECTIONS });
                }
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
                    (0, s._)({
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
