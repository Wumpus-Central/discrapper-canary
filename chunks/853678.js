n.d(t, { Z: () => T }), n(388685), n(190126), n(368063), n(65234), n(111804), n(490233), n(97749), n(997841);
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
    y = n(981631),
    I = n(701488),
    v = n(674563);
let C = new Set([I.Fu, I.JT]),
    S = new Set(['www.nytimes.com', 'apps.apple.com', 'play.google.com']),
    N = new Map([
        [
            v.Vt,
            {
                trustedHosts: S,
                trustedUntilEpochMs: new Date('2027-01-15T00:00:00').valueOf()
            }
        ],
        [
            v.fd,
            {
                trustedHosts: S,
                trustedUntilEpochMs: new Date('2027-01-15T00:00:00').valueOf()
            }
        ],
        [
            v.He,
            {
                trustedHosts: S,
                trustedUntilEpochMs: new Date('2027-01-15T00:00:00').valueOf()
            }
        ]
    ]),
    T = {
        [y.Etm.OPEN_EXTERNAL_LINK]: {
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
                        let e = (0, o.R)({ isContextless: (null == i ? void 0 : i.location.kind) === r.E.CONTEXTLESS }) ? y.KJ3.ACTIVITY_POPOUT : null;
                        h.Z.focus(e, !0);
                    }
                    let l = p.Z.getApplication(null == i ? void 0 : i.applicationId),
                        s = (0, d.pY)(null == i ? void 0 : i.location),
                        u = (null == l ? void 0 : l.id) !== void 0 ? N.get(l.id) : void 0;
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
                    throw new b.Z({ errorCode: y.lTL.INVALID_COMMAND }, 'Invalid URL: '.concat(n));
                }
            }
        },
        [y.Etm.NAVIGATE_TO_CONNECTIONS]: {
            validation: (e) => (0, E.Z)(e),
            scope: { [O.Gp.ANY]: [O.wE] },
            handler(e) {
                let { socket: t } = e;
                (0, _.bu)(t.transport);
                let n = (0, _._f)(t.application);
                if (!C.has(n)) throw new b.Z({ errorCode: y.lTL.UNAUTHORIZED_FOR_APPLICATION }, 'Command not available for this application');
                l.Z.open(y.oAB.CONNECTIONS);
            }
        },
        [y.Etm.SHARE_LINK]: (0, i.S)(y.Etm.SHARE_LINK, {
            scope: { [O.Gp.ANY]: [O.wE] },
            handler(e) {
                var t;
                let {
                    socket: n,
                    args: { custom_id: r, message: i, link_id: l }
                } = e;
                (0, _.bu)(n.transport);
                let a = (0, _._f)(n.application);
                if (null == a) throw new b.Z({ errorCode: y.lTL.INVALID_COMMAND }, 'No application.');
                if (!(0, f.yE)(null != (t = n.application.flags) ? t : 0, y.udG.EMBEDDED)) throw new b.Z({ errorCode: y.lTL.INVALID_COMMAND }, 'This application cannot access this API');
                return new Promise((e) => {
                    (0, u._)({
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
