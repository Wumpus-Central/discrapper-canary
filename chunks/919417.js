let i = (0, n(196765).v)(() => ({ hiddenApplicationIds: new Set() }));
n.d(
    e,
    {},
    {
        Gt: function (t, e) {
            i.setState((n) => {
                let { hiddenApplicationIds: i } = n;
                if (i.has(t) === !e) return { hiddenApplicationIds: i };
                let d = new Set(i);
                return (e ? d.delete(t) : d.add(t), { hiddenApplicationIds: d });
            });
        },
        V5: function (t) {
            return i((e) => null == t || !e.hiddenApplicationIds.has(t));
        },
        sI: function () {
            return i((t) => t.hiddenApplicationIds);
        },
    },
);
