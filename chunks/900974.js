n.d(t, { Z: () => o });
var i = n(200651);
n(192379);
var l = n(481060),
    r = n(570140);
let a = !1,
    s = null,
    o = {
        init() {
            r.Z.subscribe('CONNECTION_OPEN', (e) => {
                let { pendingPayments: t } = e;
                if (null != t && t.length > 0) {
                    var r;
                    if (s === t[0] || null == (s = t[0])) return;
                    (r = s),
                        a ||
                            ((a = !0),
                            (0, l.ZDy)(async () => {
                                let { default: e } = await n.e('7232').then(n.bind(n, 645586));
                                return (t) => {
                                    let { transitionState: n, onClose: l } = t;
                                    return (0, i.jsx)(e, {
                                        pendingPayment: r,
                                        transitionState: n,
                                        onClose: () => ((a = !1), l())
                                    });
                                };
                            }));
                }
            });
        }
    };
