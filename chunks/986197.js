r.d(t, { Z: () => f }), r(301563);
var n = r(990547),
    i = r(544891),
    s = r(570140),
    o = r(881052),
    a = r(626135),
    l = r(573261),
    c = r(545851),
    u = r(109488),
    d = r(794099),
    g = r(981631);
r(135200);
var m = r(388032);
let f = {
    resetSuggestions: () => s.Z.dispatch({ type: 'POMELO_SUGGESTIONS_RESET' }),
    async fetchSuggestionsRegistration(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1500;
        if ((0, d.vc)()) {
            s.Z.dispatch({ type: 'POMELO_SUGGESTIONS_RESET' });
            try {
                var r;
                let n = await i.tn.get({
                    url: g.ANM.POMELO_SUGGESTIONS_UNAUTHED,
                    query: null == e ? void 0 : { global_name: e },
                    timeout: t,
                    rejectWithError: !0
                });
                if (n.ok && (null == (r = n.body) ? void 0 : r.username) != null)
                    return s.Z.dispatch({
                        type: 'POMELO_REGISTRATION_SUGGESTIONS_SUCCESS',
                        suggestion: n.body,
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
                let r = await i.tn.get({
                    url: g.ANM.POMELO_SUGGESTIONS,
                    timeout: e,
                    rejectWithError: !0
                });
                if (r.ok && (null == (t = r.body) ? void 0 : t.username) != null)
                    return s.Z.dispatch({
                        type: 'POMELO_SUGGESTIONS_SUCCESS',
                        suggestion: r.body
                    });
            } catch (e) {
                return;
            }
    },
    async attemptPomelo(e) {
        var t;
        let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'modal',
            i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            u = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            d =
                !1 === /^[A-Za-z0-9_.]*$/.test(e)
                    ? m.NW.string(m.t.z7c4bG)
                    : e.includes('..')
                      ? m.NW.string(m.t['C7G+go'])
                      : e.length < 2 || e.length > 32
                        ? m.NW.formatToPlainString(m.t.IpijXF, {
                              maxNum: 32,
                              minNum: 2
                          })
                        : void 0;
        if (null != d)
            return (
                a.default.track(g.rMx.POMELO_ERRORS, {
                    reason: d,
                    username_error: !0,
                    location: r,
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
                let t = await l.Z.post({
                    url: i ? g.ANM.POMELO_ATTEMPT_UNAUTHED : g.ANM.POMELO_ATTEMPT,
                    body: { username: e },
                    trackedActionData: {
                        event: n.NetworkActionNames.POMELO_ATTEMPT,
                        properties: { requested_username: e }
                    },
                    rejectWithError: !1
                });
                t.body.taken &&
                    a.default.track(g.rMx.POMELO_ERRORS, {
                        reason: 'already_taken',
                        username_error: !0,
                        location: r,
                        one_click_flow: u
                    }),
                    s.Z.dispatch({
                        type: 'POMELO_ATTEMPT_SUCCESS',
                        username: e,
                        taken: t.body.taken
                    });
            } catch (l) {
                let n = new o.Hx(l),
                    i = null != (t = n.getAnyErrorMessage()) ? t : void 0;
                a.default.track(g.rMx.POMELO_ERRORS, {
                    reason: i,
                    username_error: !0,
                    location: r,
                    one_click_flow: u
                }),
                    s.Z.dispatch({
                        username: e,
                        type: 'POMELO_ATTEMPT_FAILURE',
                        error: null != n.status && n.status < 500 && 401 !== n.status ? i : void 0,
                        statusCode: n.status,
                        retryAfter: n.retryAfter
                    });
            }
    },
    async createPomelo(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            r = await l.Z.post({
                body: e,
                url: g.ANM.POMELO_CREATE,
                trackedActionData: {
                    event: n.NetworkActionNames.POMELO_CREATE,
                    properties: { one_click_flow: t }
                },
                rejectWithError: !1
            });
        return (
            s.Z.dispatch({
                type: 'CURRENT_USER_UPDATE',
                user: r.body
            }),
            r.body
        );
    }
};
