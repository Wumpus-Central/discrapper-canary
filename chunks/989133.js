"use strict";
function i(e, t) {
    if (e.score === t.score) {
        let n = e.sortable ?? e.comparator?.toLocaleLowerCase() ?? "",
            i = e.sortable ?? t.comparator?.toLocaleLowerCase() ?? "";
        if (n < i) return -1;
        if (n > i) return 1;
    }
    return t.score - e.score;
}
n.d(t, { A: () => i });
