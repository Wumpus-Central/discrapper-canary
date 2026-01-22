n.d(t, {
    A: () => f,
});
var r = n(627968);
n(64700);
var i = n(73939),
    l = n(36525),
    s = n(397927),
    a = n(627794),
    c = n(928348),
    o = n(268749),
    d = n(985018),
    u = n(181765);

function f(e) {
    let { guildId: t, existingRules: n } = e,
        {
            cancelEditingRule: f,
            isLoading: g,
            hasChanges: b,
            editingRule: m,
            errorMessage: p,
            saveEditingRule: x,
        } = (0, o.S)(),
        { updateRule: h } = (0, c.wP)(t),
        j = null != m,
        O = j && !(0, a.wC)(m),
        y = j || b || O,
        v = async () => {
            if (!b && !O) return f();
            null == m || O || h(m);
            let e = n.find((e) => {
                let { id: t } = e;
                return t === (null == m ? void 0 : m.id);
            });
            try {
                let e = await x(n);
                null != e && h(e);
            } catch (t) {
                null != e && h(e);
            }
        },
        A = d.intl.string(d.t["ETE/oC"]),
        E =
            !b && j
                ? d.intl.formatToPlainString(d.t.nula34, {
                      ruleName: null == m ? void 0 : m.name,
                  })
                : void 0;
    return (
        null != p &&
            (E = (0, r.jsx)(s.Text, {
                variant: "text-md/normal",
                color: "text-feedback-critical",
                className: u.i,
                children: p,
            })),
        (0, r.jsx)(i.F, {
            component: "div",
            className: u.n,
            children:
                y &&
                (0, r.jsx)(s.FQk, {
                    children: (0, r.jsx)(l.A, {
                        submitting: g,
                        disabled: g,
                        onSave: v,
                        onReset: f,
                        onResetText: A,
                        message: E,
                    }),
                }),
        })
    );
}
