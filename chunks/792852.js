"use strict";
n.d(t, { Pu: () => o, mp: () => a });
var i = n(353640),
    r = n(111994);
let s = {
    currentPage: r.fB.GALLERY,
    activeMainLink: r.oH.ALL_CLIPS,
    gameFacet: null,
    clippedWithFacet: null,
    selectedGameIds: new Set(),
    selectedUserIds: new Set(),
    selectedGuildId: null,
    selectedActivity: null,
    selectedYear: null,
    query: "",
    sortOrder: r.mu.MOST_RECENT,
};
function a(e) {
    return (
        "" !== e.query.trim() ||
        e.selectedGameIds.size > 0 ||
        e.selectedUserIds.size > 0 ||
        null != e.selectedActivity ||
        null != e.selectedGuildId ||
        null != e.selectedYear ||
        null != e.gameFacet ||
        null != e.clippedWithFacet ||
        e.activeMainLink !== r.oH.ALL_CLIPS
    );
}
let o = (0, i.v)((e) => ({
    ...s,
    setCurrentPage: (t) => e({ currentPage: t }),
    setActiveMainLink: (t) => e({ activeMainLink: t, currentPage: t === r.oH.HOME ? r.fB.HOME : r.fB.GALLERY }),
    setGameFacet: (t) =>
        e((e) => ({
            gameFacet: t,
            selectedGameIds: null != t && e.selectedGameIds.size > 0 ? new Set() : e.selectedGameIds,
        })),
    setClippedWithFacet: (t) =>
        e((e) => ({
            clippedWithFacet: t,
            selectedUserIds: null != t && e.selectedUserIds.size > 0 ? new Set() : e.selectedUserIds,
        })),
    toggleGameId: (t) =>
        e((e) => {
            let n = new Set(e.selectedGameIds);
            return n.has(t) ? n.delete(t) : n.add(t), { selectedGameIds: n };
        }),
    toggleUserId: (t) =>
        e((e) => {
            let n = new Set(e.selectedUserIds);
            return n.has(t) ? n.delete(t) : n.add(t), { selectedUserIds: n };
        }),
    setSelectedGuildId: (t) => e({ selectedGuildId: t }),
    setSelectedActivity: (t) => e({ selectedActivity: t }),
    setSelectedYear: (t) => e({ selectedYear: t }),
    setQuery: (t) => e({ query: t }),
    setSortOrder: (t) => e({ sortOrder: t }),
    clearFilters: () =>
        e({
            selectedGameIds: new Set(),
            selectedUserIds: new Set(),
            selectedGuildId: null,
            selectedActivity: null,
            selectedYear: null,
            query: "",
        }),
    resetAll: () => e(s),
}));
