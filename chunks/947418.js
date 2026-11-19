var i = n(97352),
    l = n(83617);
n.d(
    t,
    {},
    {
        v: function (e, t) {
            let n = i.A.get(e.premiumPlanIdFromItems ?? "");
            if (null != n) {
                let i = (0, l._w)(n, t?.id, !1),
                    s = i.length > 0 ? i[0] : e.currency;
                if (1 === i.length && t?.id === e.paymentSourceId && (0, l.jJ)(n.id, s, t?.id)) return !0;
            }
            return !1;
        },
    },
);
