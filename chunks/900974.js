n.d(t, { Z: () => s });
var r = n(200651);
n(192379);
var i = n(481060),
    l = n(570140);
let o = !1,
    a = null,
    s = {
        init() {
            l.Z.subscribe('CONNECTION_OPEN', (e) => {
                let { pendingPayments: t } = e;
                if (null != t && t.length > 0) {
                    var l;
                    if (a === t[0] || null == (a = t[0])) return;
                    (l = a),
                        o ||
                            ((o = !0),
                            (0, i.ZDy)(async () => {
                                let { default: e } = await n.e('7232').then(n.bind(n, 645586));
                                return (t) => {
                                    let { transitionState: n, onClose: i } = t;
                                    return (0, r.jsx)(e, {
                                        pendingPayment: l,
                                        transitionState: n,
                                        onClose: () => ((o = !1), i())
                                    });
                                };
                            }));
                }
            });
        }
    };
