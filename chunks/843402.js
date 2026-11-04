var o = e(73153),
    s = e(723702),
    d = e(253400);
(e(970917).L.ALL,
    e.d(
        a,
        {},
        {
            a2: function () {
                if (!(0, s.xl)()) throw Error("Attempted to observe candidate games on a non-desktop platform");
                (d.Ay.setCandidateGamesCallback((t) => {
                    o.h.dispatch({ type: "CANDIDATE_GAMES_CHANGE", games: t });
                }),
                    o.h.dispatch({ type: "GAME_DETECTION_WATCH_CANDIDATE_GAMES_START" }));
            },
            e0: function () {
                if (!(0, s.xl)()) throw Error("Attempted to stop observing candidate games on a non-desktop platform");
                (d.Ay.clearCandidateGamesCallback(),
                    o.h.dispatch({ type: "GAME_DETECTION_WATCH_CANDIDATE_GAMES_STOP" }));
            },
        },
    ));
