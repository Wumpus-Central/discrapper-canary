n.d(t, {
    A: () => o,
});
var r = n(422936),
    i = n(234419),
    a = n(511484),
    s = n(985018);
let o = (e) => {
    var t;
    let n = (0, i.V)(),
        o = (0, r.O)();
    return null != n && (null == e || (null == (t = n.subscription_trial) ? void 0 : t.sku_id) === e)
        ? null != n.referrer_id
            ? s.intl.string(s.t.gtNqJQ)
            : s.intl.string(s.t.IBYG5U)
        : null != o && (null == e || (0, a.U9)(o, e))
          ? s.intl.formatToPlainString(s.t.iiLbvu, {
                percent: o.discount.amount,
            })
          : null;
};
