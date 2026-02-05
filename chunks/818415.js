"use strict";
n.d(t, { A: () => o });
var r = n(422936),
    i = n(234419),
    a = n(511484),
    s = n(985018);
let o = (e) => {
    let t = (0, i.V)(),
        n = (0, r.O)();
    return null != t && (null == e || t.subscription_trial?.sku_id === e)
        ? null != t.referrer_id
            ? s.intl.string(s.t.gtNqJQ)
            : s.intl.string(s.t.IBYG5U)
        : null != n && (null == e || (0, a.U9)(n, e))
          ? s.intl.formatToPlainString(s.t.iiLbvu, { percent: n.discount.amount })
          : null;
};
