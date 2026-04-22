"use strict";
a.d(t, { b: () => s });
var l = a(311907),
    i = a(836602),
    r = a(696451),
    n = a(427262);
function s(e, t) {
    let a = n.Ay.useName(e);
    return (
        (0, l.bG)([i.A, r.Ay], () => {
            let a = i.A.getPendingChanges(t);
            return null != t ? (a.pendingNickname ?? r.Ay.getNick(t, e?.id)) : a.pendingGlobalName;
        }, [t, e]) ??
        a ??
        ""
    );
}
