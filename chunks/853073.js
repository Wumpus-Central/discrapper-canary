l.d(t, { F: () => m, j: () => h });
var n = l(477900),
    a = l(582128),
    i = l(435558),
    s = l(635793),
    r = l(362081),
    c = l(328820),
    o = l(16590),
    u = l(375708);
let d = a.createContext(null);
function m(e) {
    let { children: t } = e,
        { cropStart: l, cropEnd: m, setActiveTool: h, videoPlayerRef: f } = (0, r.T)(),
        [x, v] = a.useState([]),
        [p, j] = a.useState(null),
        g = a.useCallback(
            (e) => {
                h(s.Y.NONE), j(e);
            },
            [h],
        ),
        b = a.useCallback(() => {
            let e = crypto.randomUUID(),
                t = f.current?.videoElement?.currentTime ?? l,
                n = (0, i.clamp)(t, l, m - 1),
                a = Math.min(n + 5, m),
                r = {
                    id: e,
                    type: c.Me.TEXT,
                    startSec: n,
                    endSec: a,
                    data: { text: u.intl.string(o.default.v2jEIc), style: { ...c.QK }, position: { ...c._S } },
                };
            v((e) => [...e, r]), h(s.Y.NONE), j(e);
        }, [l, m, h, f]),
        C = a.useCallback((e) => {
            v((t) => t.filter((t) => t.id !== e)), j((t) => (t === e ? null : t));
        }, []),
        y = a.useCallback((e, t, l) => {
            v((n) => n.map((n) => (n.id === e ? { ...n, startSec: t, endSec: l } : n)));
        }, []),
        N = a.useCallback((e, t) => {
            v((l) => l.map((l) => (l.id === e ? { ...l, data: t(l.data) } : l)));
        }, []),
        E = a.useMemo(
            () => ({
                tracks: x,
                selectedTrackId: p,
                setSelectedTrackId: g,
                addTextTrack: b,
                removeTrack: C,
                updateTrackRange: y,
                updateTextTrackData: N,
            }),
            [x, p, g, b, C, y, N],
        );
    return (0, n.jsx)(d.Provider, { value: E, children: t });
}
function h() {
    let e = a.useContext(d);
    if (null == e) throw Error("useClipTracksContext must be used within a ClipTracksContextProvider");
    return e;
}
