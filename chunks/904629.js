"use strict";
function i(e) {
    return e.filter((e) => null != e.ends_at).sort((e, t) => (e.ends_at < t.ends_at ? -1 : 1));
}
n.d(t, { k: () => i });
