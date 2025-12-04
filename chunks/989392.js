n.d(t, { T: () => o });
var r = n(473749),
    i = n(442837),
    a = n(5888);
function o(e) {
    let t = (0, r.useRef)(new Audio(e)),
        n = (0, i.e7)([a.Z], () => a.Z.volume),
        o = (0, i.e7)([a.Z], () => a.Z.isMuted);
    return () => {
        (t.current.currentTime = 0), (t.current.volume = o ? 0 : n), t.current.play();
    };
}
