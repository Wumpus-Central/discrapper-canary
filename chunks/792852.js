"use strict";
n.d(t, { Pu: () => a, mp: () => s });
var i = n(353640);
let r = {
    query: "",
    sortOrder: "descending",
    selectedGameId: null,
    selectedUserIds: new Set(),
    selectedActivity: null,
    selectedGuildId: null,
    selectedYear: null,
};
function s(e) {
    return (
        "" !== e.query.trim() ||
        null != e.selectedGameId ||
        e.selectedUserIds.size > 0 ||
        null != e.selectedActivity ||
        null != e.selectedGuildId ||
        null != e.selectedYear
    );
}
let a = (0, i.v)((e) => ({
    ...r,
    setQuery: (t) => e({ query: t }),
    setSortOrder: (t) => e({ sortOrder: t }),
    setSelectedGameId: (t) => e({ selectedGameId: t }),
    setSelectedUserIds: (t) => e({ selectedUserIds: t }),
    toggleUserId: (t) =>
        e((e) => {
            let n = new Set(e.selectedUserIds);
            return n.has(t) ? n.delete(t) : n.add(t), { selectedUserIds: n };
        }),
    setSelectedActivity: (t) => e({ selectedActivity: t }),
    setSelectedGuildId: (t) => e({ selectedGuildId: t }),
    setSelectedYear: (t) => e({ selectedYear: t }),
    clearFilters: () =>
        e({ selectedUserIds: new Set(), selectedActivity: null, selectedGuildId: null, selectedYear: null }),
    resetFilters: () => e(r),
}));
