r.d(t, { G: () => l }), r(896048), r(492834);
var n = r(417597),
    i = r(73153),
    s = r(964486),
    a = r(32120),
    o = r(574454);
let l = (e) => {
    let [t, r] = (0, n.yK)([o.A], () => [o.A.usernameSuggestion(), o.A.usernameSuggestionLoading()]);
    return (
        (0, s.Ay)(
            () => (
                o.A.wasSuggestionsFetched()
                    ? i.h.dispatch({
                          type: "POMELO_SUGGESTIONS_FETCH",
                          usernameSuggestionLoading: !1,
                      })
                    : a.A.fetchSuggestions(e).finally(() => {
                          i.h.dispatch({
                              type: "POMELO_SUGGESTIONS_FETCH",
                              usernameSuggestionLoading: !1,
                          });
                      }),
                () => {
                    a.A.resetSuggestions();
                }
            ),
        ),
        {
            usernameSuggestion: t,
            usernameSuggestionLoading: r,
        }
    );
};
