var l = n(855986),
    i = n(596344);
n.d(
    t,
    {},
    {
        D: function (e, t) {
            return (0, l.bG)(
                [i.A],
                () => {
                    if (null == t) return;
                    let n = i.A.getMessages(e),
                        l = n.findOldest((e) => e.author.id === t);
                    if (null != l) {
                        for (let e of n.toArray()) {
                            if (e.author.id !== t) break;
                            e.content.length > l?.content.length && (l = e);
                        }
                        return l;
                    }
                },
                [e, t],
            );
        },
    },
);
