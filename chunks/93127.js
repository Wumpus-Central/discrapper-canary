r.d(n, {
    W: function () {
        return c;
    },
    _: function () {
        return d;
    }
});
var i = r(544891),
    a = r(570140),
    o = r(480294),
    s = r(814443),
    l = r(428598),
    u = r(981631);
function c() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
    return s.Z.needsRefresh()
        ? (a.Z.dispatch({ type: 'LOAD_USER_AFFINITIES' }),
          i.tn
              .get({
                  url: u.ANM.USER_AFFINITIES,
                  retries: e ? 3 : 0,
                  oldFormErrors: !0,
                  rejectWithError: !1
              })
              .then(
                  (e) => {
                      let { body: n } = e;
                      a.Z.dispatch({
                          type: 'LOAD_USER_AFFINITIES_SUCCESS',
                          affinities: n
                      });
                  },
                  () => {
                      a.Z.dispatch({ type: 'LOAD_USER_AFFINITIES_FAILURE' });
                  }
              ))
        : Promise.resolve();
}
function d() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
    return l.Z.shouldFetch() && o.Z.hasConsented(u.pjP.PERSONALIZATION)
        ? (a.Z.dispatch({ type: 'LOAD_USER_AFFINITIES_V2' }),
          i.tn
              .get({
                  url: u.ANM.USER_AFFINITIES_V2,
                  retries: e ? 3 : 0,
                  oldFormErrors: !0,
                  rejectWithError: !1
              })
              .then(
                  (e) => {
                      let { body: n } = e;
                      a.Z.dispatch({
                          type: 'LOAD_USER_AFFINITIES_V2_SUCCESS',
                          affineUsers: n.user_affinities.map((e) => {
                              var n, r, i, a, o, s, l, u;
                              return {
                                  otherUserId: e.other_user_id,
                                  userSegment: e.user_segment,
                                  otherUserSegment: e.other_user_segment,
                                  isFriend: e.is_friend,
                                  dmProbability: null !== (n = e.dm_probability) && void 0 !== n ? n : 0,
                                  dmRank: null !== (r = e.dm_rank) && void 0 !== r ? r : 0,
                                  vcProbability: null !== (i = e.vc_probability) && void 0 !== i ? i : 0,
                                  vcRank: null !== (a = e.vc_rank) && void 0 !== a ? a : 0,
                                  serverMessageProbability: null !== (o = e.server_message_probability) && void 0 !== o ? o : 0,
                                  serverMessageRank: null !== (s = e.server_message_rank) && void 0 !== s ? s : 0,
                                  communicationProbability: null !== (l = e.communication_probability) && void 0 !== l ? l : 0,
                                  communicationRank: null !== (u = e.communication_rank) && void 0 !== u ? u : 0
                              };
                          })
                      });
                  },
                  () => {
                      a.Z.dispatch({ type: 'LOAD_USER_AFFINITIES_V2_FAILURE' });
                  }
              ))
        : Promise.resolve();
}
