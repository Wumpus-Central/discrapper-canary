n.d(t, {
    IS: () => d,
    MH: () => p,
    UE: () => _,
    as: () => l,
    fP: () => c,
    m1: () => u,
    wz: () => f
});
var i = n(772848),
    r = n(146282),
    a = n(626135),
    s = n(981631),
    o = n(206583),
    l = (function (e) {
        return (e[(e.FollowGame = 0)] = 'FollowGame'), (e[(e.UnfollowGame = 1)] = 'UnfollowGame'), (e[(e.ClickMessageUser = 2)] = 'ClickMessageUser'), (e[(e.SendMessageUser = 3)] = 'SendMessageUser'), (e[(e.JoinVC = 4)] = 'JoinVC'), (e[(e.WatchStream = 5)] = 'WatchStream'), (e[(e.ClickSimilarGame = 6)] = 'ClickSimilarGame'), (e[(e.WebsiteLink = 7)] = 'WebsiteLink'), (e[(e.XLink = 8)] = 'XLink'), (e[(e.YouTubeLink = 9)] = 'YouTubeLink'), (e[(e.ShowMore = 10)] = 'ShowMore'), (e[(e.ShowLess = 11)] = 'ShowLess'), (e[(e.JoinOfficialServer = 12)] = 'JoinOfficialServer'), (e[(e.ClickImage = 13)] = 'ClickImage'), e;
    })({}),
    u = (function (e) {
        return (e.ActivityCard = 'activity_card'), (e.ActivityCardContextMenu = 'activity_card_context_menu'), (e.UserProfile = 'user_profile'), (e.UserProfileCardContextMenu = 'user_profile_card_context_menu'), (e.SimilarGames = 'similar_games'), (e.DevTools = 'dev_tools'), (e.Embed = 'embed'), (e.RtcPanel = 'rtc_panel'), (e.FriendsActivityFeed = 'friends_activity_feed'), e;
    })({});
let c = () => (0, i.Z)(),
    d = (e) => {
        let { viewId: t, source: n, gameName: i, applicationId: l, authorId: u } = e;
        return (
            a.default.track(s.rMx.GAME_PROFILE_OPEN, {
                view_id: t,
                source: n,
                game_name: i,
                application_id: l,
                author_id: u,
                request_id: r.Z.getFeedRequestId(o.YN.GAME_PROFILE_FEED)
            }),
            t
        );
    },
    f = (e) => {
        let { viewId: t, gameName: n, applicationId: i, playedFriendIds: l, playedFriendsData: u, similarGames: c, officialGuildId: d } = e;
        a.default.track(s.rMx.GAME_PROFILE_CLOSE, {
            view_id: t,
            game_name: n,
            application_id: i,
            played_friend_ids: l,
            played_friends_data: u,
            similar_games: c,
            request_id: r.Z.getFeedRequestId(o.YN.GAME_PROFILE_FEED),
            official_guild_id: d
        });
    },
    _ = (e) => {
        let { gameName: t, applicationId: n, action: i, recipientUserId: r, similarGameId: o, viewId: l, officialGuildId: u } = e;
        a.default.track(s.rMx.GAME_PROFILE_ACTION, {
            game_name: t,
            application_id: n,
            action: i,
            recipient_user_id: r,
            similar_game_id: o,
            view_id: l,
            official_guild_id: u
        });
    },
    p = (e) => {
        let { viewId: t, applicationId: n, suggestedGameName: i, suggestedGameApplicationId: r, feedback: o, submitted: l } = e;
        return a.default.track(s.rMx.GAME_PROFILE_FEEDBACK, {
            view_id: t,
            application_id: n,
            suggested_game_name: i,
            suggested_game_application_id: r,
            feedback: o,
            submitted: l
        });
    };
