"use strict";
n.d(t, { A: () => i }), n(938796);
var a = n(665260),
    r = n(652215);
function i(e) {
    return (
        e.type === r.lAJ.DEFAULT &&
        (0, a.Lt)(e.flags, r.pr7.IS_CROSSPOST) &&
        null != e.messageReference &&
        e.messageReference.type !== r.SH7.FORWARD
    );
}
