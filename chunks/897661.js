var t = n(855986),
    i = n(836602),
    d = n(696451),
    E = n(427262);
n.d(
    s,
    {},
    {
        b: function (e, s) {
            let n = E.Ay.useName(e);
            return (
                (0, t.bG)(
                    [i.A, d.Ay],
                    () => {
                        let n = i.A.getPendingChanges(s);
                        if (null == s) return n.pendingGlobalName;
                        let { pendingNickname: t } = n;
                        return "" === t ? null : (t ?? d.Ay.getNick(s, e?.id));
                    },
                    [s, e],
                ) ??
                n ??
                ""
            );
        },
    },
);
