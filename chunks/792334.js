"use strict";
n.d(t, { B: () => i });
var r = n(64700);
function i(e) {
    return r.useMemo(() => e?.items.filter((e) => !0 !== e.isOwned) ?? [], [e]);
}
