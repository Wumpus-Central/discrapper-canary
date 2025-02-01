n.d(t, { Z: () => E });
var i = n(990547),
    s = n(544891),
    a = n(570140),
    l = n(881052),
    r = n(626135),
    o = n(573261),
    u = n(545851),
    d = n(109488),
    c = n(794099),
    m = n(981631);
n(135200);
var g = n(388032);
let E = {
    resetSuggestions: () => a.Z.dispatch({ type: 'POMELO_SUGGESTIONS_RESET' }),
    async fetchSuggestionsRegistration(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1500;
        if ((0, c.vc)()) {
            a.Z.dispatch({ type: 'POMELO_SUGGESTIONS_RESET' });
            try {
                var n;
                let i = await s.tn.get({
                    url: m.ANM.POMELO_SUGGESTIONS_UNAUTHED,
                    query: null == e ? void 0 : { global_name: e },
                    timeout: t,
                    rejectWithError: !0
                });
                if (i.ok && (null === (n = i.body) || void 0 === n ? void 0 : n.username) != null)
                    return a.Z.dispatch({
                        type: 'POMELO_REGISTRATION_SUGGESTIONS_SUCCESS',
                        suggestion: i.body,
                        source: e
                    });
            } catch (e) {
                return;
            }
        }
    },
    async fetchSuggestions(e) {
        if ((0, d.P)())
            try {
                var t;
                a.Z.dispatch({
                    type: 'POMELO_SUGGESTIONS_FETCH',
                    usernameSuggestionLoading: !0
                });
                let n = await s.tn.get({
                    url: m.ANM.POMELO_SUGGESTIONS,
                    timeout: e,
                    rejectWithError: !0
                });
                if (n.ok && (null === (t = n.body) || void 0 === t ? void 0 : t.username) != null)
                    return a.Z.dispatch({
                        type: 'POMELO_SUGGESTIONS_SUCCESS',
                        suggestion: n.body
                    });
            } catch (e) {
                return;
            }
    },
    async attemptPomelo(e) {
        var t;
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'modal',
            s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            d = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            c =
                !1 === /^[A-Za-z0-9_.]*$/.test(e)
                    ? g.intl.string(g.t.z7c4bG)
                    : e.includes('..')
                      ? g.intl.string(g.t['C7G+go'])
                      : e.length < 2 || e.length > 32
                        ? g.intl.formatToPlainString(g.t.IpijXF, {
                              maxNum: 32,
                              minNum: 2
                          })
                        : void 0;
        if (null != c)
            return (
                r.default.track(m.rMx.POMELO_ERRORS, {
                    reason: c,
                    username_error: !0,
                    location: n,
                    one_click_flow: d
                }),
                a.Z.dispatch({
                    type: 'POMELO_ATTEMPT_FAILURE',
                    username: e,
                    error: c
                })
            );
        if ((0, u.E)())
            try {
                let t = await o.Z.post({
                    url: s ? m.ANM.POMELO_ATTEMPT_UNAUTHED : m.ANM.POMELO_ATTEMPT,
                    body: { username: e },
                    trackedActionData: {
                        event: i.NetworkActionNames.POMELO_ATTEMPT,
                        properties: { requested_username: e }
                    },
                    rejectWithError: !1
                });
                t.body.taken &&
                    r.default.track(m.rMx.POMELO_ERRORS, {
                        reason: 'already_taken',
                        username_error: !0,
                        location: n,
                        one_click_flow: d
                    }),
                    a.Z.dispatch({
                        type: 'POMELO_ATTEMPT_SUCCESS',
                        username: e,
                        taken: t.body.taken
                    });
            } catch (o) {
                let i = new l.Hx(o),
                    s = null !== (t = i.getAnyErrorMessage()) && void 0 !== t ? t : void 0;
                r.default.track(m.rMx.POMELO_ERRORS, {
                    reason: s,
                    username_error: !0,
                    location: n,
                    one_click_flow: d
                }),
                    a.Z.dispatch({
                        username: e,
                        type: 'POMELO_ATTEMPT_FAILURE',
                        error: null != i.status && i.status < 500 && 401 !== i.status ? s : void 0,
                        statusCode: i.status,
                        retryAfter: i.retryAfter
                    });
            }
    },
    async createPomelo(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = await o.Z.post({
                body: e,
                url: m.ANM.POMELO_CREATE,
                trackedActionData: {
                    event: i.NetworkActionNames.POMELO_CREATE,
                    properties: { one_click_flow: t }
                },
                rejectWithError: !1
            });
        return (
            a.Z.dispatch({
                type: 'CURRENT_USER_UPDATE',
                user: n.body
            }),
            n.body
        );
    }
};
