"use strict";
function r(e) {
    return e.applications.length > 0
        ? e.applications[0].id
        : e.windows.length > 0
          ? (e.windows[0].owningApplication?.id ?? null)
          : null;
}
n.d(t, { A: () => r });
