n.d(t, { Z: () => f }), n(35282);
var r = n(990547),
    i = n(544891),
    s = n(570140),
    o = n(881052),
    l = n(626135),
    a = n(573261),
    c = n(545851),
    u = n(109488),
    d = n(794099),
    g = n(981631);
n(135200);
var m = n(388032);
let f = {
    resetSuggestions: () => s.Z.dispatch({ type: 'POMELO_SUGGESTIONS_RESET' }),
    async fetchSuggestionsRegistration(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1500;
        if ((0, d.vc)()) {
            s.Z.dispatch({ type: 'POMELO_SUGGESTIONS_RESET' });
            try {
                var n;
                let r = await i.tn.get({
                    url: g.ANM.POMELO_SUGGESTIONS_UNAUTHED,
                    query: null == e ? void 0 : { global_name: e },
                    timeout: t,
                    rejectWithError: !0
                });
                if (r.ok && (null == (n = r.body) ? void 0 : n.username) != null)
                    return s.Z.dispatch({
                        type: 'POMELO_REGISTRATION_SUGGESTIONS_SUCCESS',
                        suggestion: r.body,
                        source: e
                    });
            } catch (e) {
                return;
            }
        }
    },
    async fetchSuggestions(e) {
        if ((0, u.P)())
            try {
                var t;
                s.Z.dispatch({
                    type: 'POMELO_SUGGESTIONS_FETCH',
                    usernameSuggestionLoading: !0
                });
                let n = await i.tn.get({
                    url: g.ANM.POMELO_SUGGESTIONS,
                    timeout: e,
                    rejectWithError: !0
                });
                if (n.ok && (null == (t = n.body) ? void 0 : t.username) != null)
                    return s.Z.dispatch({
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
            i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            u = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            d =
                !1 === /^[A-Za-z0-9_.]*$/.test(e)
                    ? m.intl.string(m.t.z7c4bG)
                    : e.includes('..')
                      ? m.intl.string(m.t['C7G+go'])
                      : e.length < 2 || e.length > 32
                        ? m.intl.formatToPlainString(m.t.IpijXF, {
                              maxNum: 32,
                              minNum: 2
                          })
                        : void 0;
        if (null != d)
            return (
                l.default.track(g.rMx.POMELO_ERRORS, {
                    reason: d,
                    username_error: !0,
                    location: n,
                    one_click_flow: u
                }),
                s.Z.dispatch({
                    type: 'POMELO_ATTEMPT_FAILURE',
                    username: e,
                    error: d
                })
            );
        if ((0, c.E)())
            try {
                let t = await a.Z.post({
                    url: i ? g.ANM.POMELO_ATTEMPT_UNAUTHED : g.ANM.POMELO_ATTEMPT,
                    body: { username: e },
                    trackedActionData: {
                        event: r.NetworkActionNames.POMELO_ATTEMPT,
                        properties: { requested_username: e }
                    },
                    rejectWithError: !1
                });
                t.body.taken &&
                    l.default.track(g.rMx.POMELO_ERRORS, {
                        reason: 'already_taken',
                        username_error: !0,
                        location: n,
                        one_click_flow: u
                    }),
                    s.Z.dispatch({
                        type: 'POMELO_ATTEMPT_SUCCESS',
                        username: e,
                        taken: t.body.taken
                    });
            } catch (a) {
                let r = new o.Hx(a),
                    i = null != (t = r.getAnyErrorMessage()) ? t : void 0;
                l.default.track(g.rMx.POMELO_ERRORS, {
                    reason: i,
                    username_error: !0,
                    location: n,
                    one_click_flow: u
                }),
                    s.Z.dispatch({
                        username: e,
                        type: 'POMELO_ATTEMPT_FAILURE',
                        error: null != r.status && r.status < 500 && 401 !== r.status ? i : void 0,
                        statusCode: r.status,
                        retryAfter: r.retryAfter
                    });
            }
    },
    async createPomelo(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = await a.Z.post({
                body: e,
                url: g.ANM.POMELO_CREATE,
                trackedActionData: {
                    event: r.NetworkActionNames.POMELO_CREATE,
                    properties: { one_click_flow: t }
                },
                rejectWithError: !1
            });
        return (
            s.Z.dispatch({
                type: 'CURRENT_USER_UPDATE',
                user: n.body
            }),
            n.body
        );
    }
};
