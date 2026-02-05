i.d(t, { G: () => o });
var n = i(417597),
    s = i(73153),
    a = i(964486),
    r = i(32120),
    l = i(574454);
let o = (e) => {
    let [t, i] = (0, n.yK)([l.A], () => [l.A.usernameSuggestion(), l.A.usernameSuggestionLoading()]);
    return (
        (0, a.Ay)(
            () => (
                l.A.wasSuggestionsFetched()
                    ? s.h.dispatch({ type: "POMELO_SUGGESTIONS_FETCH", usernameSuggestionLoading: !1 })
                    : r.A.fetchSuggestions(e).finally(() => {
                          s.h.dispatch({ type: "POMELO_SUGGESTIONS_FETCH", usernameSuggestionLoading: !1 });
                      }),
                () => {
                    r.A.resetSuggestions();
                }
            ),
        ),
        { usernameSuggestion: t, usernameSuggestionLoading: i }
    );
};
