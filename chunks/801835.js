l.d(t, { As: () => d, JQ: () => o, fn: () => u });
var n = l(477900),
    a = l(582128),
    i = l(553933),
    s = l(635793),
    r = l(362081);
let c = a.createContext(null);
function o(e) {
    let { children: t, isCropEnabled: l = !0 } = e,
        {
            setActiveTool: o,
            tracks: u,
            addTextTrack: d,
            removeTrack: m,
            updateTrackRange: f,
            updateTextTrackData: h,
        } = (0, r.T)(),
        { enabled: x } = i.O.useConfig({ location: "ClipsEditorContextProvider" }),
        [v, p] = a.useState(null),
        g = a.useCallback(
            (e) => {
                o(s.Y.NONE), p(e);
            },
            [o],
        ),
        j = a.useCallback(() => {
            p(d());
        }, [d]),
        C = a.useCallback(
            (e) => {
                m(e), p((t) => (t === e ? null : t));
            },
            [m],
        ),
        b = a.useMemo(() => ({ isCropEnabled: l, isTextTrackEnabled: x }), [l, x]),
        y = a.useMemo(
            () => ({
                tracks: u,
                selectedTrackId: v,
                setSelectedTrackId: g,
                addTextTrack: j,
                removeTrack: C,
                updateTrackRange: f,
                updateTextTrackData: h,
                editorFeatures: b,
            }),
            [u, v, g, j, C, f, h, b],
        );
    return (0, n.jsx)(c.Provider, { value: y, children: t });
}
function u() {
    let e = a.useContext(c);
    if (null == e) throw Error("useClipsEditorContext must be used within a ClipsEditorContextProvider");
    return e;
}
function d() {
    return u().editorFeatures;
}
