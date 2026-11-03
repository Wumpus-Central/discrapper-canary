l.d(n, { Z: () => r });
var t = l(17928),
    i = l(576705),
    a = l(652215);
function r(e) {
    return (0, t.bG)(
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
