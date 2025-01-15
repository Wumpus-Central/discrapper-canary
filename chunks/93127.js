o.d(t, {
    W: function () {
        return d;
    },
    _: function () {
        return c;
    }
});
var r = o(544891),
    n = o(570140),
    i = o(480294),
    a = o(814443),
    s = o(428598),
    l = o(981631);
function d() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
    return a.Z.needsRefresh()
        ? (n.Z.dispatch({ type: 'LOAD_USER_AFFINITIES' }),
          r.tn
              .get({
                  url: l.ANM.USER_AFFINITIES,
                  retries: e ? 3 : 0,
                  oldFormErrors: !0,
                  rejectWithError: !1
              })
              .then(
                  (e) => {
                      let { body: t } = e;
                      n.Z.dispatch({
                          type: 'LOAD_USER_AFFINITIES_SUCCESS',
                          affinities: t
                      });
                  },
                  () => {
                      n.Z.dispatch({ type: 'LOAD_USER_AFFINITIES_FAILURE' });
                  }
              ))
        : Promise.resolve();
}
function c() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
    return s.Z.shouldFetch() && i.Z.hasConsented(l.pjP.PERSONALIZATION)
        ? (n.Z.dispatch({ type: 'LOAD_USER_AFFINITIES_V2' }),
          r.tn
              .get({
                  url: l.ANM.USER_AFFINITIES_V2,
                  retries: e ? 3 : 0,
                  oldFormErrors: !0,
                  rejectWithError: !1
              })
              .then(
                  (e) => {
                      let { body: t } = e;
                      n.Z.dispatch({
                          type: 'LOAD_USER_AFFINITIES_V2_SUCCESS',
                          affineUsers: t.user_affinities.map((e) => {
                              var t, o, r, n, i, a, s, l;
                              return {
                                  otherUserId: e.other_user_id,
                                  userSegment: e.user_segment,
                                  otherUserSegment: e.other_user_segment,
                                  isFriend: e.is_friend,
                                  dmProbability: null !== (t = e.dm_probability) && void 0 !== t ? t : 0,
                                  dmRank: null !== (o = e.dm_rank) && void 0 !== o ? o : 0,
                                  vcProbability: null !== (r = e.vc_probability) && void 0 !== r ? r : 0,
                                  vcRank: null !== (n = e.vc_rank) && void 0 !== n ? n : 0,
                                  serverMessageProbability: null !== (i = e.server_message_probability) && void 0 !== i ? i : 0,
                                  serverMessageRank: null !== (a = e.server_message_rank) && void 0 !== a ? a : 0,
                                  communicationProbability: null !== (s = e.communication_probability) && void 0 !== s ? s : 0,
                                  communicationRank: null !== (l = e.communication_rank) && void 0 !== l ? l : 0
                              };
                          })
                      });
                  },
                  () => {
                      n.Z.dispatch({ type: 'LOAD_USER_AFFINITIES_V2_FAILURE' });
                  }
              ))
        : Promise.resolve();
}
