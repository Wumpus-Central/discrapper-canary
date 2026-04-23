n.d(t, { a2: () => a, e0: () => r });
var i = n(73153),
    s = n(723702),
    l = n(837921);
function a() {
    if (!(0, s.isDesktop)()) throw Error("Attempted to observe candidate games on a non-desktop platform");
    l.Ay.setCandidateGamesCallback((e) => {
        i.h.dispatch({ type: "CANDIDATE_GAMES_CHANGE", games: e });
    }),
        i.h.dispatch({ type: "GAME_DETECTION_WATCH_CANDIDATE_GAMES_START" });
}
function r() {
    if (!(0, s.isDesktop)()) throw Error("Attempted to stop observing candidate games on a non-desktop platform");
    l.Ay.clearCandidateGamesCallback(), i.h.dispatch({ type: "GAME_DETECTION_WATCH_CANDIDATE_GAMES_STOP" });
}
n(223273).Lb.ALL;
