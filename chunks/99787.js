n.d(t, { A: () => d });
var i = n(627968),
    l = n(64700),
    s = n(372598),
    r = n(53594),
    a = n(449585),
    o = n(864557);
function d(e) {
    let { rule: t, onChangeRule: n } = e,
        d = l.useMemo(() => (0, r.J6)(t.triggerType), [t.triggerType]),
        c = a.Bx(t.guildId),
        u = l.useMemo(() => (0, s.XO)(), []),
        m = (e, i) => {
            if (null == i) return;
            let l = t.actions.some((e) => e.type === i.type),
                s = [...t.actions, i];
            if (l) {
                let n = t.actions.filter((e) => e.type !== i.type);
                s = e ? [...n, i] : n;
            }
            n({ ...t, actions: s });
        };
    return (0, i.jsx)(i.Fragment, {
        children: d.map((e) => {
            let n = t.actions.find((t) => t.type === e);
            return (0, i.jsx)(
                o.A,
                {
                    guildId: t.guildId,
                    triggerType: t.triggerType,
                    action: n ?? u[e],
                    toggled: null != n,
                    onToggleAction: async (n) => {
                        let i = t.actions.find((t) => t.type === e),
                            l = null != i,
                            s = u[e],
                            r = n ? i : s;
                        if (null != r && (!l || n)) {
                            let n = c[e];
                            null != n ? m(!0, await n(t, r)) : m(!0, r);
                        } else m(!1, l ? i : s);
                    },
                },
                e,
            );
        }),
    });
}
