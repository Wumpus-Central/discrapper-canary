var e = u(582128),
    s = u(256311);
u.d(
    n,
    {},
    {
        A: function (c) {
            e.useEffect(() => {
                if (null != c)
                    return (
                        s.A.lockChangeLog(c),
                        () => {
                            s.A.unlockChangeLog(c);
                        }
                    );
            }, [c]);
        },
    },
);
