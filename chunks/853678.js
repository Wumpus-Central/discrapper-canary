n.d(t, { Z: () => S }), n(47120), n(315314), n(309749), n(610138), n(216116), n(78328), n(815648), n(789020);
var i = n(45792),
    l = n(230711),
    r = n(782568),
    a = n(636449),
    s = n(317381),
    o = n(611577),
    d = n(840074),
    c = n(16609),
    u = n(812206),
    h = n(12647),
    m = n(630388),
    p = n(49012),
    g = n(358085),
    _ = n(996106),
    f = n(914946),
    E = n(452426),
    I = n(561205),
    C = n(186901),
    N = n(981631),
    v = n(701488);
let T = new Set([v.Fu, v.JT]),
    S = {
        [N.Etm.OPEN_EXTERNAL_LINK]: {
            scope: {
                [C.Gp.ANY]: [C.wE, C.b_]
            },
            validation: (e) => (0, E.Z)(e).required().keys({ url: e.string().required() }),
            handler(e) {
                let {
                    socket: t,
                    args: { url: n }
                } = e;
                (0, f.bu)(t.transport);
                try {
                    let e = new URL(n).toString();
                    if (g.isPlatformEmbedded) {
                        let e = (0, a.R)() ? N.KJ3.ACTIVITY_POPOUT : null;
                        h.Z.focus(e, !0);
                    }
                    let t = s.ZP.getCurrentEmbeddedActivity(),
                        i = u.Z.getApplication(null == t ? void 0 : t.applicationId),
                        l = (0, c.pY)(null == t ? void 0 : t.location);
                    return new Promise((t) =>
                        (0, p.q)(
                            {
                                href: e,
                                shouldConfirm: !0,
                                onConfirm: () => {
                                    (0, r.Z)(e), t({ opened: !0 });
                                },
                                onCancel: () => {
                                    t({ opened: !1 });
                                }
                            },
                            void 0,
                            void 0,
                            (0, o.z)({
                                application: i,
                                channelId: l
                            })
                        )
                    );
                } catch (e) {
                    throw new _.Z({ errorCode: N.lTL.INVALID_COMMAND }, 'Invalid URL: '.concat(n));
                }
            }
        },
        [N.Etm.NAVIGATE_TO_CONNECTIONS]: {
            validation: (e) => (0, E.Z)(e),
            scope: { [C.Gp.ANY]: [C.wE] },
            handler(e) {
                let { socket: t } = e;
                (0, f.bu)(t.transport);
                let n = (0, f._f)(t.application);
                if (!T.has(n)) throw new _.Z({ errorCode: N.lTL.UNAUTHORIZED_FOR_APPLICATION }, 'Command not available for this application');
                l.Z.open(N.oAB.CONNECTIONS);
            }
        },
        [N.Etm.SHARE_LINK]: (0, i.S)(N.Etm.SHARE_LINK, {
            scope: { [C.Gp.ANY]: [C.wE] },
            handler(e) {
                var t;
                let {
                    socket: n,
                    args: { referrer_id: i, custom_id: l, message: r }
                } = e;
                (0, f.bu)(n.transport);
                let a = (0, f._f)(n.application);
                if (null == a) throw new _.Z({ errorCode: N.lTL.INVALID_COMMAND }, 'No application.');
                let s = (0, I.Z)();
                if (null == s) throw new _.Z({ errorCode: N.lTL.INVALID_COMMAND }, 'No channel found');
                if (!(0, m.yE)(null !== (t = n.application.flags) && void 0 !== t ? t : 0, N.udG.EMBEDDED)) throw new _.Z({ errorCode: N.lTL.INVALID_COMMAND }, 'This application cannot access this API');
                return new Promise((e) => {
                    (0, d._)({
                        applicationId: a,
                        channelId: s.id,
                        launchParams: {
                            referrerId: i,
                            customId: l
                        },
                        message: r,
                        onShare: (t) => {
                            e({ success: t });
                        }
                    });
                });
            }
        })
    };
