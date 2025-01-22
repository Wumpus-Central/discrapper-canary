n.d(t, {
    b: function () {
        return d;
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
function u() {
    l.Z.setSilenceWarning(!1), c();
}
function d() {
    s = (0, r.openModal)((e) =>
        (0, i.jsx)(a.default, {
            title: o.intl.string(o.t['zQ1+Jy']),
            body: o.intl.string(o.t.K1gWXl),
            secondaryConfirmText: o.intl.string(o.t.XAiAgI),
            onConfirmSecondary: u,
            onConfirm: c,
            confirmText: o.intl.string(o.t.BddRzc),
            ...e
        })
    );
}
