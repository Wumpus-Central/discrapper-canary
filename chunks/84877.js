t.d(n, { Z: () => r });
var l = t(17928),
    i = t(576705),
    a = t(652215);
function r(e) {
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
}
