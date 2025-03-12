n.d(t, { Z: () => P }), n(47120), n(315314), n(309749), n(610138), n(216116), n(78328), n(815648), n(789020);
var r = n(115911),
    i = n(45792),
    l = n(230711),
    o = n(782568),
    a = n(636449),
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
    O = n(561205),
    N = n(186901),
    v = n(981631),
    y = n(701488),
    I = n(674563);
let C = new Set([y.Fu, y.JT]),
    S = new Set(['www.nytimes.com', 'apps.apple.com', 'play.google.com']),
    T = new Map([
        [
            I.Vt,
            {
                trustedHosts: S,
                trustedUntilEpochMs: new Date('2027-01-15T00:00:00').valueOf()
            }
        ],
        [
            I.fd,
            {
                trustedHosts: S,
                trustedUntilEpochMs: new Date('2027-01-15T00:00:00').valueOf()
            }
        ],
        [
            I.He,
            {
                trustedHosts: S,
                trustedUntilEpochMs: new Date('2027-01-15T00:00:00').valueOf()
            }
        ]
    ]),
    P = {
        [v.Etm.OPEN_EXTERNAL_LINK]: {
            scope: {
                [N.Gp.ANY]: [N.wE, N.b_]
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
                        let e = (0, a.R)({ isContextless: (null == i ? void 0 : i.location.kind) === r.X.CONTEXTLESS }) ? v.KJ3.ACTIVITY_POPOUT : null;
                        h.Z.focus(e, !0);
                    }
                    let l = p.Z.getApplication(null == i ? void 0 : i.applicationId),
                        s = (0, d.pY)(null == i ? void 0 : i.location),
                        u = (null == l ? void 0 : l.id) !== void 0 ? T.get(l.id) : void 0;
                    if (void 0 !== u && u.trustedUntilEpochMs >= Date.now() && u.trustedHosts.has(e.host)) return (0, o.Z)(t), Promise.resolve({ opened: !0 });
                    return new Promise((e) =>
                        (0, g.q)(
                            {
                                href: t,
                                shouldConfirm: !0,
                                onConfirm: () => {
                                    (0, o.Z)(t), e({ opened: !0 });
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
                    throw new b.Z({ errorCode: v.lTL.INVALID_COMMAND }, 'Invalid URL: '.concat(n));
                }
            }
        },
        [v.Etm.NAVIGATE_TO_CONNECTIONS]: {
            validation: (e) => (0, E.Z)(e),
            scope: { [N.Gp.ANY]: [N.wE] },
            handler(e) {
                let { socket: t } = e;
                (0, _.bu)(t.transport);
                let n = (0, _._f)(t.application);
                if (!C.has(n)) throw new b.Z({ errorCode: v.lTL.UNAUTHORIZED_FOR_APPLICATION }, 'Command not available for this application');
                l.Z.open(v.oAB.CONNECTIONS);
            }
        },
        [v.Etm.SHARE_LINK]: (0, i.S)(v.Etm.SHARE_LINK, {
            scope: { [N.Gp.ANY]: [N.wE] },
            handler(e) {
                var t;
                let {
                    socket: n,
                    args: { referrer_id: r, custom_id: i, message: l, link_id: o }
                } = e;
                (0, _.bu)(n.transport);
                let a = (0, _._f)(n.application);
                if (null == a) throw new b.Z({ errorCode: v.lTL.INVALID_COMMAND }, 'No application.');
                let s = (0, O.Z)();
                if (null == s) throw new b.Z({ errorCode: v.lTL.INVALID_COMMAND }, 'No channel found');
                if (!(0, f.yE)(null !== (t = n.application.flags) && void 0 !== t ? t : 0, v.udG.EMBEDDED)) throw new b.Z({ errorCode: v.lTL.INVALID_COMMAND }, 'This application cannot access this API');
                return new Promise((e) => {
                    (0, u._)({
                        applicationId: a,
                        channelId: s.id,
                        launchParams: {
                            referrerId: r,
                            customId: i,
                            linkId: o
                        },
                        message: l,
                        onShare: (t, n) => {
                            e({
                                success: t,
                                didCopyLink: n
                            });
                        }
                    });
                });
            }
        })
    };
