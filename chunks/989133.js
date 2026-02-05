"use strict";
function r(e, t) {
    if (e.score === t.score) {
        let n = e.sortable ?? e.comparator?.toLocaleLowerCase() ?? "",
            r = e.sortable ?? t.comparator?.toLocaleLowerCase() ?? "";
        if (n < r) return -1;
        if (n > r) return 1;
    }
    return t.score - e.score;
}
n.d(t, { A: () => r });
