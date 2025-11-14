n.d(t, { _: () => c });
var r = n(544891),
    i = n(570140),
    a = n(480294),
    o = n(286715),
    s = n(752048),
    l = n(981631);
function c() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
    return s.Z.shouldFetch() && a.Z.hasConsented(l.pjP.PERSONALIZATION)
        ? (i.Z.dispatch({ type: "LOAD_USER_AFFINITIES_V2" }),
          r.tn
              .get({
                  url: l.ANM.USER_AFFINITIES_V2,
                  retries: 3 * !!e,
                  oldFormErrors: !0,
                  rejectWithError: !1,
                  query: { user_flags: o.r.RECENTLY_RETURNED },
              })
              .then(
                  (e) => {
                      var t;
                      let { body: n } = e;
                      i.Z.dispatch({
                          type: "LOAD_USER_AFFINITIES_V2_SUCCESS",
                          affineUsers: n.user_affinities.map((e) => {
                              var t, n, r, i, a, o, s, l;
                              return {
                                  otherUserId: e.other_user_id,
                                  userSegment: e.user_segment,
                                  otherUserSegment: e.other_user_segment,
                                  isFriend: e.is_friend,
                                  dmProbability: null != (t = e.dm_probability) ? t : 0,
                                  dmRank: null != (n = e.dm_rank) ? n : 0,
                                  vcProbability: null != (r = e.vc_probability) ? r : 0,
                                  vcRank: null != (i = e.vc_rank) ? i : 0,
                                  serverMessageProbability: null != (a = e.server_message_probability) ? a : 0,
                                  serverMessageRank: null != (o = e.server_message_rank) ? o : 0,
                                  communicationProbability: null != (s = e.communication_probability) ? s : 0,
                                  communicationRank: null != (l = e.communication_rank) ? l : 0,
                              };
                          }),
                          userFlags: null != (t = n.user_flags) ? t : {},
                      });
                  },
                  () => {
                      i.Z.dispatch({ type: "LOAD_USER_AFFINITIES_V2_FAILURE" });
                  },
              ))
        : Promise.resolve();
}
