n.d(t, {
    b: function () {
        return u;
    }
});
var i = n(200651);
n(192379);
var r = n(481060),
    l = n(846027),
    a = n(468026),
    o = n(388032);
let s = null;
function c() {
    null !== s && (0, r.closeModal)(s), (s = null);
}
function d() {
    l.Z.setSilenceWarning(!1), c();
}
function u() {
    s = (0, r.openModal)((e) =>
        (0, i.jsx)(a.default, {
            title: o.intl.string(o.t['zQ1+Jy']),
            body: o.intl.string(o.t.K1gWXl),
            secondaryConfirmText: o.intl.string(o.t.XAiAgI),
            onConfirmSecondary: d,
            onConfirm: c,
            confirmText: o.intl.string(o.t.BddRzc),
            ...e
        })
    );
}
