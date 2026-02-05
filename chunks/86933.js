"use strict";
n.d(t, { A: () => m });
var i = n(627968);
n(64700);
var s = n(73939),
    l = n(36525),
    r = n(397927),
    a = n(627794),
    o = n(928348),
    d = n(268749),
    c = n(985018),
    u = n(181765);
function m(e) {
    let { guildId: t, existingRules: n } = e,
        {
            cancelEditingRule: m,
            isLoading: g,
            hasChanges: x,
            editingRule: h,
            errorMessage: _,
            saveEditingRule: A,
        } = (0, d.S)(),
        { updateRule: p } = (0, o.wP)(t),
        f = null != h,
        j = f && !(0, a.wC)(h),
        N = f || x || j,
        E = async () => {
            if (!x && !j) return m();
            null == h || j || p(h);
            let e = n.find((e) => {
                let { id: t } = e;
                return t === h?.id;
            });
            try {
                let e = await A(n);
                null != e && p(e);
            } catch (t) {
                null != e && p(e);
            }
        },
        b = c.intl.string(c.t["ETE/oC"]),
        T = !x && f ? c.intl.formatToPlainString(c.t.nula34, { ruleName: h?.name }) : void 0;
    return (
        null != _ &&
            (T = (0, i.jsx)(r.Text, {
                variant: "text-md/normal",
                color: "text-feedback-critical",
                className: u.i,
                children: _,
            })),
        (0, i.jsx)(s.F, {
            component: "div",
            className: u.n,
            children:
                N &&
                (0, i.jsx)(r.FQk, {
                    children: (0, i.jsx)(l.A, {
                        submitting: g,
                        disabled: g,
                        onSave: E,
                        onReset: m,
                        onResetText: b,
                        message: T,
                    }),
                }),
        })
    );
}
