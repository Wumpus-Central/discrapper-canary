n.d(t, { a2: () => a, e0: () => r });
var i = n(228366),
    l = n(723702),
    s = n(19575);
function a() {
    if (!(0, l.isDesktop)()) throw Error("Attempted to observe candidate games on a non-desktop platform");
    s.Ay.setCandidateGamesCallback((e) => {
        i.h.dispatch({ type: "CANDIDATE_GAMES_CHANGE", games: e });
    }),
        i.h.dispatch({ type: "GAME_DETECTION_WATCH_CANDIDATE_GAMES_START" });
}
function r() {
    if (!(0, l.isDesktop)()) throw Error("Attempted to stop observing candidate games on a non-desktop platform");
    s.Ay.clearCandidateGamesCallback(), i.h.dispatch({ type: "GAME_DETECTION_WATCH_CANDIDATE_GAMES_STOP" });
}
n(223273).Lb.ALL;
