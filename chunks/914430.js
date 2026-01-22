n.d(t, {
    Al: () => o,
    Gv: () => i,
    fh: () => a,
    rZ: () => s,
});
var r = n(73153);

function i(e) {
    r.h.dispatch({
        type: "CATEGORY_COLLAPSE",
        id: e,
    });
}

function a(e) {
    r.h.dispatch({
        type: "CATEGORY_EXPAND",
        id: e,
    });
}

function s(e) {
    r.h.dispatch({
        type: "CATEGORY_COLLAPSE_ALL",
        guildId: e,
    });
}

function o(e) {
    r.h.dispatch({
        type: "CATEGORY_EXPAND_ALL",
        guildId: e,
    });
}
