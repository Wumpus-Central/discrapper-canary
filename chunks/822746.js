n.d(t, { Z: () => u }), n(789020);
var i = n(45792),
    l = n(338269),
    r = n(630388),
    a = n(996106),
    s = n(914946),
    o = n(561205),
    c = n(186901),
    d = n(981631);
let u = {
    [d.Etm.SHARE_LINK]: (0, i.S)(d.Etm.SHARE_LINK, {
        scope: { [c.Gp.ANY]: [c.wE] },
        handler(e) {
            var t;
            let {
                socket: n,
                args: { referrer_id: i, custom_id: c, message: u }
            } = e;
            (0, s.bu)(n.transport);
            let h = (0, s._f)(n.application);
            if (null == h) throw new a.Z({ errorCode: d.lTL.INVALID_COMMAND }, 'No application.');
            let m = (0, o.Z)();
            if (null == m) throw new a.Z({ errorCode: d.lTL.INVALID_COMMAND }, 'No channel found');
            if (!(0, r.yE)(null !== (t = n.application.flags) && void 0 !== t ? t : 0, d.udG.EMBEDDED)) throw new a.Z({ errorCode: d.lTL.INVALID_COMMAND }, 'This application cannot access this API');
            return new Promise((e) => {
                (0, l._)({
                    applicationId: h,
                    channelId: m.id,
                    launchParams: {
                        referrerId: i,
                        customId: c
                    },
                    message: u,
                    onShare: (t) => {
                        e({ success: t });
                    }
                });
            });
        }
    })
};
