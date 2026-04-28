"use strict";
n.d(t, { A: () => r });
var l = n(422936),
    i = n(234419),
    s = n(511484),
    a = n(985018);
let r = (e) => {
    let t = (0, i.V)(),
        n = (0, l.O)();
    return null != t && (null == e || t.subscription_trial?.sku_id === e)
        ? null != t.referrer_id
            ? a.intl.string(a.t.gtNqJQ)
            : a.intl.string(a.t.IBYG5U)
        : null != n && (null == e || (0, s.U9)(n, e))
          ? a.intl.formatToPlainString(a.t.iiLbvu, { percent: n.discount.amount })
          : null;
};
