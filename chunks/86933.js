n.d(t, { A: () => g });
var i = n(627968);
n(64700);
var l = n(73939),
    s = n(36525),
    r = n(834730),
    a = n(871682),
    o = n(627794),
    d = n(928348),
    c = n(268749),
    u = n(985018),
    m = n(974362);
function g(e) {
    let { guildId: t, existingRules: n } = e,
        {
            cancelEditingRule: g,
            isLoading: h,
            hasChanges: x,
            editingRule: _,
            errorMessage: p,
            saveEditingRule: A,
        } = (0, c.S)(),
        { updateRule: E } = (0, d.wP)(t),
        f = null != _,
        j = f && !(0, o.wC)(_),
        N = f || x || j,
        I = async () => {
            if (!x && !j) return g();
            null == _ || j || E(_);
            let e = n.find((e) => {
                let { id: t } = e;
                return t === _?.id;
            });
            try {
                let e = await A(n);
                null != e && E(e);
            } catch (t) {
                null != e && E(e);
            }
        },
        C = u.intl.string(u.t["ETE/oC"]),
        b = !x && f ? u.intl.formatToPlainString(u.t.nula34, { ruleName: _?.name }) : void 0;
    return (
        null != p &&
            (b = (0, i.jsx)(r.E, {
                variant: "text-md/normal",
                color: "text-feedback-critical",
                className: m.i,
                children: p,
            })),
        (0, i.jsx)(l.F, {
            component: "div",
            className: m.n,
            children:
                N &&
                (0, i.jsx)(a.F, {
                    children: (0, i.jsx)(s.A, {
                        submitting: h,
                        disabled: h,
                        onSave: I,
                        onReset: g,
                        onResetText: C,
                        message: b,
                    }),
                }),
        })
    );
}
