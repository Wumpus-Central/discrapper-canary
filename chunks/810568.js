n.d(t, {
    IS: () => d,
    MH: () => p,
    UE: () => _,
    as: () => l,
    fP: () => u,
    m1: () => c,
    wz: () => f
});
var r = n(772848),
    i = n(146282),
    o = n(626135),
    a = n(981631),
    s = n(206583),
    l = (function (e) {
        return (e[(e.FollowGame = 0)] = 'FollowGame'), (e[(e.UnfollowGame = 1)] = 'UnfollowGame'), (e[(e.ClickMessageUser = 2)] = 'ClickMessageUser'), (e[(e.SendMessageUser = 3)] = 'SendMessageUser'), (e[(e.JoinVC = 4)] = 'JoinVC'), (e[(e.WatchStream = 5)] = 'WatchStream'), (e[(e.ClickSimilarGame = 6)] = 'ClickSimilarGame'), (e[(e.WebsiteLink = 7)] = 'WebsiteLink'), (e[(e.XLink = 8)] = 'XLink'), (e[(e.YouTubeLink = 9)] = 'YouTubeLink'), (e[(e.ShowMore = 10)] = 'ShowMore'), (e[(e.ShowLess = 11)] = 'ShowLess'), (e[(e.JoinOfficialServer = 12)] = 'JoinOfficialServer'), (e[(e.ClickImage = 13)] = 'ClickImage'), e;
    })({}),
    c = (function (e) {
        return (e.ActivityCard = 'activity_card'), (e.ActivityCardContextMenu = 'activity_card_context_menu'), (e.UserProfile = 'user_profile'), (e.UserProfileCardContextMenu = 'user_profile_card_context_menu'), (e.SimilarGames = 'similar_games'), (e.DevTools = 'dev_tools'), (e.Embed = 'embed'), (e.RtcPanel = 'rtc_panel'), (e.FriendsActivityFeed = 'friends_activity_feed'), e;
    })({});
let u = () => (0, r.Z)(),
    d = (e) => {
        let { viewId: t, source: n, gameName: r, applicationId: l, authorId: c } = e;
        return (
            o.default.track(a.rMx.GAME_PROFILE_OPEN, {
                view_id: t,
                source: n,
                game_name: r,
                application_id: l,
                author_id: c,
                request_id: i.Z.getFeedRequestId(s.YN.GAME_PROFILE_FEED)
            }),
            t
        );
    },
    f = (e) => {
        let { viewId: t, gameName: n, applicationId: r, playedFriendIds: l, playedFriendsData: c, similarGames: u, officialGuildId: d } = e;
        o.default.track(a.rMx.GAME_PROFILE_CLOSE, {
            view_id: t,
            game_name: n,
            application_id: r,
            played_friend_ids: l,
            played_friends_data: c,
            similar_games: u,
            request_id: i.Z.getFeedRequestId(s.YN.GAME_PROFILE_FEED),
            official_guild_id: d
        });
    },
    _ = (e) => {
        let { gameName: t, applicationId: n, action: r, recipientUserId: i, similarGameId: s, viewId: l, officialGuildId: c } = e;
        o.default.track(a.rMx.GAME_PROFILE_ACTION, {
            game_name: t,
            application_id: n,
            action: r,
            recipient_user_id: i,
            similar_game_id: s,
            view_id: l,
            official_guild_id: c
        });
    },
    p = (e) => {
        let { viewId: t, applicationId: n, suggestedGameName: r, suggestedGameApplicationId: i, feedback: s, submitted: l } = e;
        return o.default.track(a.rMx.GAME_PROFILE_FEEDBACK, {
            view_id: t,
            application_id: n,
            suggested_game_name: r,
            suggested_game_application_id: i,
            feedback: s,
            submitted: l
        });
    };
