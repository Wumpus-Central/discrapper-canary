n.d(t, { Z: () => N }), n(388685), n(190126), n(368063), n(65234), n(111804), n(490233), n(97749), n(997841);
var r = n(45792),
    i = n(230711),
    l = n(782568),
    a = n(636449),
    o = n(317381),
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
    E = n(186901),
    O = n(981631),
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
    N = {
        [O.Etm.OPEN_EXTERNAL_LINK]: {
            scope: {
                [E.Gp.ANY]: [E.wE, E.b_]
            },
            validation: (e) => (0, _.Z)(e).required().keys({ url: e.string().required() }),
            handler(e) {
                let {
                    socket: t,
                    args: { url: n }
                } = e;
                (0, b.bu)(t.transport);
                let r = o.ZP.getCurrentEmbeddedActivity();
                try {
                    let e = new URL(n),
                        t = e.toString();
                    if (g.isPlatformEmbedded) {
                        let e = (0, a.R)() ? O.KJ3.ACTIVITY_POPOUT : null;
                        p.Z.focus(e, !0);
                    }
                    let i = d.Z.getApplication(null == r ? void 0 : r.applicationId),
                        o = (0, u.pY)(null == r ? void 0 : r.location),
                        c = (null == i ? void 0 : i.id) !== void 0 ? S.get(i.id) : void 0;
                    if (void 0 !== c && c.trustedUntilEpochMs >= Date.now() && c.trustedHosts.has(e.host)) return (0, l.Z)(t), Promise.resolve({ opened: !0 });
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
                                channelId: o
                            })
                        )
                    );
                } catch (e) {
                    throw new m.Z({ errorCode: O.lTL.INVALID_COMMAND }, 'Invalid URL: '.concat(n));
                }
            }
        },
        [O.Etm.NAVIGATE_TO_CONNECTIONS]: {
            validation: (e) => (0, _.Z)(e),
            scope: { [E.Gp.ANY]: [E.wE] },
            handler(e) {
                let { socket: t } = e;
                (0, b.bu)(t.transport);
                let n = (0, b._f)(t.application);
                if (!v.has(n)) throw new m.Z({ errorCode: O.lTL.UNAUTHORIZED_FOR_APPLICATION }, 'Command not available for this application');
                i.Z.open(O.oAB.CONNECTIONS);
            }
        },
        [O.Etm.SHARE_LINK]: (0, r.S)(O.Etm.SHARE_LINK, {
            scope: { [E.Gp.ANY]: [E.wE] },
            handler(e) {
                var t;
                let {
                    socket: n,
                    args: { custom_id: r, message: i, link_id: l }
                } = e;
                (0, b.bu)(n.transport);
                let a = (0, b._f)(n.application);
                if (null == a) throw new m.Z({ errorCode: O.lTL.INVALID_COMMAND }, 'No application.');
                if (!(0, h.yE)(null != (t = n.application.flags) ? t : 0, O.udG.EMBEDDED)) throw new m.Z({ errorCode: O.lTL.INVALID_COMMAND }, 'This application cannot access this API');
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
                                didSendMessage: t
                            });
                        }
                    });
                });
            }
        })
    };
