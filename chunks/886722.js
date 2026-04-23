n.d(i, { A: () => m });
var e = n(627968);
n(64700);
var r = n(732159),
    a = n(417597),
    l = n(157559),
    s = n(287809),
    d = n(954571),
    o = n(652215),
    u = n(985018);
function m(t) {
    let {
            header: i,
            children: n,
            sku_id: m,
            sku_name: c,
            guild_id: f,
            cancelLabel: _,
            confirmLabel: g,
            transitionState: k,
            onClose: T,
            ...h
        } = t,
        C = (0, a.bG)([s.default], () => s.default.getCurrentUser());
    return (0, e.jsx)(r.ConfirmModal, {
        title: i ?? u.intl.string(u.t["+78Pfm"]),
        cancelText: _ ?? u.intl.string(u.t["ETE/oC"]),
        confirmText: g ?? u.intl.string(u.t["+78Pfm"]),
        onConfirm: () => {
            d.default.track(o.HAw.TNS_SKU_REPORT_SUBMITTED, { sku_id: m, guild_id: f, user_id: C?.id }),
                l.A.show({ title: u.intl.string(u.t.sUvCKU), body: u.intl.format(u.t["7KJnk0"], { skuName: c }) });
        },
        transitionState: k,
        onClose: T,
        ...h,
        children: n,
    });
}
