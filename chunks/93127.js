n.d(t, {
    W: () => c,
    _: () => u
});
var r = n(544891),
    i = n(570140),
    o = n(480294),
    a = n(814443),
    s = n(752048),
    l = n(981631);
function c() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
    return a.Z.needsRefresh()
        ? (i.Z.dispatch({ type: 'LOAD_USER_AFFINITIES' }),
          r.tn
              .get({
                  url: l.ANM.USER_AFFINITIES,
                  retries: 3 * !!e,
                  oldFormErrors: !0,
                  rejectWithError: !1
              })
              .then(
                  (e) => {
                      let { body: t } = e;
                      i.Z.dispatch({
                          type: 'LOAD_USER_AFFINITIES_SUCCESS',
                          affinities: t
                      });
                  },
                  () => {
                      i.Z.dispatch({ type: 'LOAD_USER_AFFINITIES_FAILURE' });
                  }
              ))
        : Promise.resolve();
}
function u() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
    return s.Z.shouldFetch() && o.Z.hasConsented(l.pjP.PERSONALIZATION)
        ? (i.Z.dispatch({ type: 'LOAD_USER_AFFINITIES_V2' }),
          r.tn
              .get({
                  url: l.ANM.USER_AFFINITIES_V2,
                  retries: 3 * !!e,
                  oldFormErrors: !0,
                  rejectWithError: !1
              })
              .then(
                  (e) => {
                      let { body: t } = e;
                      i.Z.dispatch({
                          type: 'LOAD_USER_AFFINITIES_V2_SUCCESS',
                          affineUsers: t.user_affinities.map((e) => {
                              var t, n, r, i, o, a, s, l;
                              return {
                                  otherUserId: e.other_user_id,
                                  userSegment: e.user_segment,
                                  otherUserSegment: e.other_user_segment,
                                  isFriend: e.is_friend,
                                  dmProbability: null != (t = e.dm_probability) ? t : 0,
                                  dmRank: null != (n = e.dm_rank) ? n : 0,
                                  vcProbability: null != (r = e.vc_probability) ? r : 0,
                                  vcRank: null != (i = e.vc_rank) ? i : 0,
                                  serverMessageProbability: null != (o = e.server_message_probability) ? o : 0,
                                  serverMessageRank: null != (a = e.server_message_rank) ? a : 0,
                                  communicationProbability: null != (s = e.communication_probability) ? s : 0,
                                  communicationRank: null != (l = e.communication_rank) ? l : 0
                              };
                          })
                      });
                  },
                  () => {
                      i.Z.dispatch({ type: 'LOAD_USER_AFFINITIES_V2_FAILURE' });
                  }
              ))
        : Promise.resolve();
}
