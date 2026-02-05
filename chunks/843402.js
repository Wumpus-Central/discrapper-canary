n.d(t, { a2: () => a, e0: () => l });
var i = n(73153),
    s = n(723702),
    r = n(837921);
function a() {
    if (!(0, s.isDesktop)()) throw Error("Attempted to observe candidate games on a non-desktop platform");
    r.Ay.setCandidateGamesCallback((e) => {
        i.h.dispatch({ type: "CANDIDATE_GAMES_CHANGE", games: e });
    }),
        i.h.dispatch({ type: "GAME_DETECTION_WATCH_CANDIDATE_GAMES_START" });
}
function l() {
    if (!(0, s.isDesktop)()) throw Error("Attempted to stop observing candidate games on a non-desktop platform");
    r.Ay.clearCandidateGamesCallback(), i.h.dispatch({ type: "GAME_DETECTION_WATCH_CANDIDATE_GAMES_STOP" });
}
n(223273).Lb.ALL;
