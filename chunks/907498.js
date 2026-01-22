n.d(t, {
    A: () => c,
});
var r = n(397927),
    i = n(976860),
    a = n(240233),
    s = n(573879),
    o = n(652215),
    l = n(985018);
let c = new a.A({
    onSwitchSuccess(e, t) {
        setTimeout(() => {
            t && (0, i.pX)(o.BVt.ME),
                (0, r.showToast)(
                    (0, r.createToast)(
                        l.intl.formatToPlainString(l.t.wx7O3L, {
                            username: e.username,
                        }),
                        r.ToastType.SUCCESS,
                    ),
                );
        }, 100);
    },
    onSwitchError() {
        (0, r.showToast)((0, r.createToast)(l.intl.string(l.t.pqvKWA), r.ToastType.FAILURE));
    },
    onTokenSet() {
        (0, r.OoC)(s.ov), (0, r.OoC)(s.Gl);
    },
});
