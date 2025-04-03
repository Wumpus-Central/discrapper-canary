n.d(t, { Z: () => T }), n(47120), n(315314), n(309749), n(610138), n(216116), n(78328), n(815648), n(789020);
var r = n(252258),
    i = n(45792),
    l = n(230711),
    a = n(782568),
    o = n(636449),
    s = n(317381),
    c = n(611577),
    u = n(840074),
    d = n(16609),
    p = n(812206),
    h = n(12647),
    f = n(630388),
    g = n(49012),
    m = n(358085),
    b = n(996106),
    _ = n(914946),
    E = n(452426),
    O = n(186901),
    N = n(981631),
    y = n(701488),
    I = n(674563);
let v = new Set([y.Fu, y.JT]),
    C = new Set(['www.nytimes.com', 'apps.apple.com', 'play.google.com']),
    S = new Map([
        [
            I.Vt,
            {
                trustedHosts: C,
                trustedUntilEpochMs: new Date('2027-01-15T00:00:00').valueOf()
            }
        ],
        [
            I.fd,
            {
                trustedHosts: C,
                trustedUntilEpochMs: new Date('2027-01-15T00:00:00').valueOf()
            }
        ],
        [
            I.He,
            {
                trustedHosts: C,
                trustedUntilEpochMs: new Date('2027-01-15T00:00:00').valueOf()
            }
        ]
    ]),
    T = {
        [N.Etm.OPEN_EXTERNAL_LINK]: {
            scope: {
                [O.Gp.ANY]: [O.wE, O.b_]
            },
            validation: (e) => (0, E.Z)(e).required().keys({ url: e.string().required() }),
            handler(e) {
                let {
                    socket: t,
                    args: { url: n }
                } = e;
                (0, _.bu)(t.transport);
                let i = s.ZP.getCurrentEmbeddedActivity();
                try {
                    let e = new URL(n),
                        t = e.toString();
                    if (m.isPlatformEmbedded) {
                        let e = (0, o.R)({ isContextless: (null == i ? void 0 : i.location.kind) === r.E.CONTEXTLESS }) ? N.KJ3.ACTIVITY_POPOUT : null;
                        h.Z.focus(e, !0);
                    }
                    let l = p.Z.getApplication(null == i ? void 0 : i.applicationId),
                        s = (0, d.pY)(null == i ? void 0 : i.location),
                        u = (null == l ? void 0 : l.id) !== void 0 ? S.get(l.id) : void 0;
                    if (void 0 !== u && u.trustedUntilEpochMs >= Date.now() && u.trustedHosts.has(e.host)) return (0, a.Z)(t), Promise.resolve({ opened: !0 });
                    return new Promise((e) =>
                        (0, g.q)(
                            {
                                href: t,
                                shouldConfirm: !0,
                                onConfirm: () => {
                                    (0, a.Z)(t), e({ opened: !0 });
                                },
                                onCancel: () => {
                                    e({ opened: !1 });
                                }
                            },
                            void 0,
                            void 0,
                            (0, c.z)({
                                application: l,
                                channelId: s
                            })
                        )
                    );
                } catch (e) {
                    throw new b.Z({ errorCode: N.lTL.INVALID_COMMAND }, 'Invalid URL: '.concat(n));
                }
            }
        },
        [N.Etm.NAVIGATE_TO_CONNECTIONS]: {
            validation: (e) => (0, E.Z)(e),
            scope: { [O.Gp.ANY]: [O.wE] },
            handler(e) {
                let { socket: t } = e;
                (0, _.bu)(t.transport);
                let n = (0, _._f)(t.application);
                if (!v.has(n)) throw new b.Z({ errorCode: N.lTL.UNAUTHORIZED_FOR_APPLICATION }, 'Command not available for this application');
                l.Z.open(N.oAB.CONNECTIONS);
            }
        },
        [N.Etm.SHARE_LINK]: (0, i.S)(N.Etm.SHARE_LINK, {
            scope: { [O.Gp.ANY]: [O.wE] },
            handler(e) {
                var t;
                let {
                    socket: n,
                    args: { custom_id: r, message: i, link_id: l, referrer_id: a }
                } = e;
                (0, _.bu)(n.transport);
                let o = (0, _._f)(n.application);
                if (null == o) throw new b.Z({ errorCode: N.lTL.INVALID_COMMAND }, 'No application.');
                if (!(0, f.yE)(null != (t = n.application.flags) ? t : 0, N.udG.EMBEDDED)) throw new b.Z({ errorCode: N.lTL.INVALID_COMMAND }, 'This application cannot access this API');
                return new Promise((e) => {
                    (0, u._)({
                        applicationId: o,
                        customId: r,
                        linkId: l,
                        message: i,
                        onShare: (t, n) => {
                            e({
                                success: n || t,
                                didCopyLink: n,
                                didSendMessage: t
                            });
                        },
                        referrerId: a
                    });
                });
            }
        })
    };
