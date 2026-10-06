n.d(t, { A: () => c });
var i = n(811315),
    r = n.n(i),
    a = n(17928),
    s = n(73153);
let l = null;
function o(e) {
    let { searchContext: t } = e;
    if (r()(l, t)) return !1;
    l = t;
}
class d extends a.Ay.Store {
    static displayName = "SelectedSearchContextStore";
    getSelectedSearchContext() {
        return l;
    }
}
let c = new d(s.h, {
    SEARCH_AUTOCOMPLETE_INITIALIZE: o,
    SEARCH_AUTOCOMPLETE_QUERY_UPDATE: o,
    SEARCH_QUERY_TEXT_CLEAR: function () {
        l = null;
    },
});
