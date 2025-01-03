n(47120), n(315314), n(610138), n(216116), n(78328), n(815648);
var i = n(230711),
    r = n(782568),
    l = n(636449),
    a = n(317381),
    s = n(611577),
    o = n(16609),
    c = n(812206),
    d = n(12647),
    u = n(49012),
    h = n(358085),
    m = n(996106),
    p = n(914946),
    g = n(452426),
    f = n(186901),
    _ = n(981631),
    E = n(701488);
let I = new Set([E.Fu, E.JT]);
t.Z = {
    [_.Etm.OPEN_EXTERNAL_LINK]: {
        scope: {
            [f.Gp.ANY]: [f.wE, f.b_]
        },
        validation: (e) => (0, g.Z)(e).required().keys({ url: e.string().required() }),
        handler(e) {
            let {
                socket: t,
                args: { url: n }
            } = e;
            (0, p.bu)(t.transport);
            try {
                let e = new URL(n).toString();
                if (h.isPlatformEmbedded) {
                    let e = (0, l.R)() ? _.KJ3.ACTIVITY_POPOUT : null;
                    d.Z.focus(e, !0);
                }
                let t = a.ZP.getCurrentEmbeddedActivity(),
                    i = c.Z.getApplication(null == t ? void 0 : t.applicationId),
                    m = (0, o.p)(null == t ? void 0 : t.location);
                return new Promise((t) =>
                    (0, u.q)(
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
                        (0, s.z)({
                            application: i,
                            channelId: m
                        })
                    )
                );
            } catch (e) {
                throw new m.Z({ errorCode: _.lTL.INVALID_COMMAND }, 'Invalid URL: '.concat(n));
            }
        }
    },
    [_.Etm.NAVIGATE_TO_CONNECTIONS]: {
        validation: (e) => (0, g.Z)(e),
        scope: { [f.Gp.ANY]: [f.wE] },
        handler(e) {
            let { socket: t } = e;
            (0, p.bu)(t.transport);
            let n = (0, p._f)(t.application);
            if (!I.has(n)) throw new m.Z({ errorCode: _.lTL.UNAUTHORIZED_FOR_APPLICATION }, 'Command not available for this application');
            i.Z.open(_.oAB.CONNECTIONS);
        }
    }
};
