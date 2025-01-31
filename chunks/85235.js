n.d(t, { Z: () => o });
var i = n(544891),
    r = n(570140),
    a = n(718745),
    s = n(981631);
let o = {
    search(e, t) {
        null == a.Z.getResults(e, t) &&
            (r.Z.dispatch({
                type: 'INTEGRATION_QUERY',
                integration: e,
                query: t
            }),
            i.tn
                .get({
                    url: s.ANM.INTEGRATION_SEARCH('tenor'),
                    query: { q: t },
                    oldFormErrors: !0,
                    rejectWithError: !0
                })
                .then(
                    (n) => {
                        r.Z.dispatch({
                            type: 'INTEGRATION_QUERY_SUCCESS',
                            integration: e,
                            query: t,
                            results: n.body
                        });
                    },
                    () =>
                        r.Z.dispatch({
                            type: 'INTEGRATION_QUERY_FAILURE',
                            integration: e,
                            query: t
                        })
                ));
    }
};
