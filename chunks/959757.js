n.d(t, { A: () => d });
var r = n(284009),
    i = n.n(r),
    l = n(975807),
    s = n(997509),
    a = n(555325),
    c = n(652215),
    o = n(985018);
function d(e) {
    let t = (0, a.dp)(e);
    switch (t) {
        case a.qS.NEEDS_COMMUNITY:
            return {
                visibility: t,
                noticeText: o.intl.string(o.t["0Z2Qxt"]),
                ctaLabel: o.intl.string(o.t.BOJpl0),
                ctaClickable: null != e,
                onCtaClicked() {
                    var t;
                    i()(null != e, "Guild must be not null open COMMUNITY settings"),
                        s.A.open(null != (t = null == e ? void 0 : e.id) ? t : "", c.BEX.COMMUNITY);
                },
            };
        case a.qS.WAITLIST_ONLY:
            return {
                visibility: t,
                noticeText: o.intl.string(o.t["5vz88G"]),
                ctaLabel: o.intl.string(o.t["6yjvmg"]),
                ctaClickable: !0,
                onCtaClicked() {
                    (0, l.A)("https://dis.gd/creators-waitlist");
                },
            };
        default:
            return;
    }
}
