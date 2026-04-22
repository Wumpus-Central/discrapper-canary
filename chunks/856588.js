n.d(t, { A: () => o });
var i = n(627968);
n(64700);
var r = n(192308),
    a = n(73153);
let l = !1,
    s = null,
    o = {
        init() {
            a.h.subscribe("CONNECTION_OPEN", (e) => {
                let { pendingPayments: t } = e;
                if (null != t && t.length > 0) {
                    var a;
                    if (s === t[0] || null == (s = t[0])) return;
                    (a = s),
                        l ||
                            ((l = !0),
                            (0, r.openModalLazy)(async () => {
                                let { default: e } = await n.e("56999").then(n.bind(n, 302810));
                                return (t) => {
                                    let { transitionState: n, onClose: r } = t;
                                    return (0, i.jsx)(e, {
                                        pendingPayment: a,
                                        transitionState: n,
                                        onClose: () => ((l = !1), r()),
                                    });
                                };
                            }));
                }
            });
        },
    };
