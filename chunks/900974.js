n.d(t, { Z: () => o });
var r = n(54381);
n(473749);
var i = n(481060),
    l = n(570140);
let a = !1,
    s = null,
    o = {
        init() {
            l.Z.subscribe("CONNECTION_OPEN", (e) => {
                let { pendingPayments: t } = e;
                if (null != t && t.length > 0) {
                    var l;
                    if (s === t[0] || null == (s = t[0])) return;
                    (l = s),
                        a ||
                            ((a = !0),
                            (0, i.ZDy)(async () => {
                                let { default: e } = await n.e("7232").then(n.bind(n, 645586));
                                return (t) => {
                                    let { transitionState: n, onClose: i } = t;
                                    return (0, r.jsx)(e, {
                                        pendingPayment: l,
                                        transitionState: n,
                                        onClose: () => ((a = !1), i()),
                                    });
                                };
                            }));
                }
            });
        },
    };
