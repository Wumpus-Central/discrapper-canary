"use strict";
l.d(e, { B: () => n });
var i = l(64700);
function n(t) {
    return i.useMemo(() => t?.items.filter((t) => !0 !== t.isOwned) ?? [], [t]);
}
