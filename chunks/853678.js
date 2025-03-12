n.d(t, { Z: () => T }), n(47120), n(315314), n(309749), n(610138), n(216116), n(78328), n(815648), n(789020);
var r = n(45792),
    i = n(230711),
    l = n(782568),
    o = n(636449),
    a = n(317381),
    s = n(611577),
    c = n(840074),
    u = n(16609),
    d = n(812206),
    p = n(12647),
    h = n(630388),
    f = n(49012),
    g = n(358085),
    m = n(996106),
    b = n(914946),
    _ = n(452426),
    E = n(561205),
    O = n(186901),
    N = n(981631),
    v = n(701488),
    y = n(674563);
let I = new Set([v.Fu, v.JT]),
    C = new Set(['www.nytimes.com', 'apps.apple.com', 'play.google.com']),
    S = new Map([
        [
            y.Vt,
            {
                trustedHosts: C,
                trustedUntilEpochMs: new Date('2027-01-15T00:00:00').valueOf()
            }
        ],
        [
            y.fd,
            {
                trustedHosts: C,
                trustedUntilEpochMs: new Date('2027-01-15T00:00:00').valueOf()
            }
        ],
        [
            y.He,
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
            validation: (e) => (0, _.Z)(e).required().keys({ url: e.string().required() }),
            handler(e) {
                let {
                    socket: t,
                    args: { url: n }
                } = e;
                (0, b.bu)(t.transport);
                try {
                    let e = new URL(n),
                        t = e.toString();
                    if (g.isPlatformEmbedded) {
                        let e = (0, o.R)() ? N.KJ3.ACTIVITY_POPOUT : null;
                        p.Z.focus(e, !0);
                    }
                    let r = a.ZP.getCurrentEmbeddedActivity(),
                        i = d.Z.getApplication(null == r ? void 0 : r.applicationId),
                        c = (0, u.pY)(null == r ? void 0 : r.location),
                        h = (null == i ? void 0 : i.id) !== void 0 ? S.get(i.id) : void 0;
                    if (void 0 !== h && h.trustedUntilEpochMs >= Date.now() && h.trustedHosts.has(e.host)) return (0, l.Z)(t), Promise.resolve({ opened: !0 });
                    return new Promise((e) =>
                        (0, f.q)(
                            {
                                href: t,
                                shouldConfirm: !0,
                                onConfirm: () => {
                                    (0, l.Z)(t), e({ opened: !0 });
                                },
                                onCancel: () => {
                                    e({ opened: !1 });
                                }
                            },
                            void 0,
                            void 0,
                            (0, s.z)({
                                application: i,
                                channelId: c
                            })
                        )
                    );
                } catch (e) {
                    throw new m.Z({ errorCode: N.lTL.INVALID_COMMAND }, 'Invalid URL: '.concat(n));
                }
            }
        },
        [N.Etm.NAVIGATE_TO_CONNECTIONS]: {
            validation: (e) => (0, _.Z)(e),
            scope: { [O.Gp.ANY]: [O.wE] },
            handler(e) {
                let { socket: t } = e;
                (0, b.bu)(t.transport);
                let n = (0, b._f)(t.application);
                if (!I.has(n)) throw new m.Z({ errorCode: N.lTL.UNAUTHORIZED_FOR_APPLICATION }, 'Command not available for this application');
                i.Z.open(N.oAB.CONNECTIONS);
            }
        },
        [N.Etm.SHARE_LINK]: (0, r.S)(N.Etm.SHARE_LINK, {
            scope: { [O.Gp.ANY]: [O.wE] },
            handler(e) {
                var t;
                let {
                    socket: n,
                    args: { referrer_id: r, custom_id: i, message: l, link_id: o }
                } = e;
                (0, b.bu)(n.transport);
                let a = (0, b._f)(n.application);
                if (null == a) throw new m.Z({ errorCode: N.lTL.INVALID_COMMAND }, 'No application.');
                let s = (0, E.Z)();
                if (null == s) throw new m.Z({ errorCode: N.lTL.INVALID_COMMAND }, 'No channel found');
                if (!(0, h.yE)(null !== (t = n.application.flags) && void 0 !== t ? t : 0, N.udG.EMBEDDED)) throw new m.Z({ errorCode: N.lTL.INVALID_COMMAND }, 'This application cannot access this API');
                return new Promise((e) => {
                    (0, c._)({
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
