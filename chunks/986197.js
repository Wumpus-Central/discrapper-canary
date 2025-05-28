n.d(t, { Z: () => h }), n(35282);
var r = n(990547),
    i = n(544891),
    l = n(570140),
    a = n(881052),
    o = n(626135),
    s = n(573261),
    c = n(109488),
    u = n(981631);
n(135200);
var d = n(388032);
let h = {
    resetSuggestions: () => l.Z.dispatch({ type: 'POMELO_SUGGESTIONS_RESET' }),
    async fetchSuggestionsRegistration(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1500;
        l.Z.dispatch({ type: 'POMELO_SUGGESTIONS_RESET' });
        try {
            var n;
            let r = await i.tn.get({
                url: u.ANM.POMELO_SUGGESTIONS_UNAUTHED,
                query: null == e ? void 0 : { global_name: e },
                timeout: t,
                rejectWithError: !0
            });
            if (r.ok && (null == (n = r.body) ? void 0 : n.username) != null)
                return l.Z.dispatch({
                    type: 'POMELO_REGISTRATION_SUGGESTIONS_SUCCESS',
                    suggestion: r.body,
                    source: e
                });
        } catch (e) {
            return;
        }
    },
    async fetchSuggestions(e) {
        if ((0, c.P)())
            try {
                var t;
                l.Z.dispatch({
                    type: 'POMELO_SUGGESTIONS_FETCH',
                    usernameSuggestionLoading: !0
                });
                let n = await i.tn.get({
                    url: u.ANM.POMELO_SUGGESTIONS,
                    timeout: e,
                    rejectWithError: !0
                });
                if (n.ok && (null == (t = n.body) ? void 0 : t.username) != null)
                    return l.Z.dispatch({
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
            c = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            h =
                !1 === /^[A-Za-z0-9_.]*$/.test(e)
                    ? d.intl.string(d.t.z7c4bG)
                    : e.includes('..')
                      ? d.intl.string(d.t['C7G+go'])
                      : e.length < 2 || e.length > 32
                        ? d.intl.formatToPlainString(d.t.IpijXF, {
                              maxNum: 32,
                              minNum: 2
                          })
                        : void 0;
        if (null != h)
            return (
                o.default.track(u.rMx.POMELO_ERRORS, {
                    reason: h,
                    username_error: !0,
                    location: n,
                    one_click_flow: c
                }),
                l.Z.dispatch({
                    type: 'POMELO_ATTEMPT_FAILURE',
                    username: e,
                    error: h
                })
            );
        try {
            let t = await s.Z.post({
                url: i ? u.ANM.POMELO_ATTEMPT_UNAUTHED : u.ANM.POMELO_ATTEMPT,
                body: { username: e },
                trackedActionData: {
                    event: r.NetworkActionNames.POMELO_ATTEMPT,
                    properties: { requested_username: e }
                },
                rejectWithError: !1
            });
            t.body.taken &&
                o.default.track(u.rMx.POMELO_ERRORS, {
                    reason: 'already_taken',
                    username_error: !0,
                    location: n,
                    one_click_flow: c
                }),
                l.Z.dispatch({
                    type: 'POMELO_ATTEMPT_SUCCESS',
                    username: e,
                    taken: t.body.taken
                });
        } catch (s) {
            let r = new a.Hx(s),
                i = null != (t = r.getAnyErrorMessage()) ? t : void 0;
            o.default.track(u.rMx.POMELO_ERRORS, {
                reason: i,
                username_error: !0,
                location: n,
                one_click_flow: c
            }),
                l.Z.dispatch({
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
            n = await s.Z.post({
                body: e,
                url: u.ANM.POMELO_CREATE,
                trackedActionData: {
                    event: r.NetworkActionNames.POMELO_CREATE,
                    properties: { one_click_flow: t }
                },
                rejectWithError: !1
            });
        return (
            l.Z.dispatch({
                type: 'CURRENT_USER_UPDATE',
                user: n.body
            }),
            n.body
        );
    }
};
