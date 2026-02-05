"use strict";
n.d(t, { A: () => c });
var i = n(284009),
    s = n.n(i),
    l = n(975807),
    r = n(997509),
    a = n(555325),
    o = n(652215),
    d = n(985018);
function c(e) {
    let t = (0, a.dp)(e);
    switch (t) {
        case a.qS.NEEDS_COMMUNITY:
            return {
                visibility: t,
                noticeText: d.intl.string(d.t["0Z2Qxt"]),
                ctaLabel: d.intl.string(d.t.BOJpl0),
                ctaClickable: null != e,
                onCtaClicked() {
                    s()(null != e, "Guild must be not null open COMMUNITY settings"),
                        r.A.open(e?.id ?? "", o.BEX.COMMUNITY);
                },
            };
        case a.qS.WAITLIST_ONLY:
            return {
                visibility: t,
                noticeText: d.intl.string(d.t["5vz88G"]),
                ctaLabel: d.intl.string(d.t["6yjvmg"]),
                ctaClickable: !0,
                onCtaClicked() {
                    (0, l.A)("https://dis.gd/creators-waitlist");
                },
            };
        default:
            return;
    }
}
