var l = t(855986),
    i = t(576705),
    a = t(652215);
t.d(
    n,
    {},
    {
        Z: function (e) {
            return (0, l.bG)(
                [i.A],
                () =>
                    null != e &&
                    (e.isThread()
                        ? i.A.can(a.xBc.SEND_MESSAGES_IN_THREADS, e) &&
                          (!e.isLockedThread() || i.A.can(a.xBc.MANAGE_THREADS, e))
                        : i.A.can(a.xBc.SEND_MESSAGES, e)),
                [e],
            );
        },
    },
);
