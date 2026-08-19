l.d(t, { As: () => d, JQ: () => c, fn: () => u });
var n = l(477900),
    a = l(582128),
    i = l(553933),
    s = l(635793),
    r = l(362081);
let o = a.createContext(null);
function c(e) {
    let { children: t, isCropEnabled: l = !0 } = e,
        {
            setActiveTool: c,
            tracks: u,
            addTextTrack: d,
            removeTrack: m,
            updateTrackRange: h,
            updateTextTrackData: f,
        } = (0, r.T)(),
        { enabled: x } = i.O.useConfig({ location: "ClipsEditorContextProvider" }),
        [v, p] = a.useState(null),
        g = a.useCallback(
            (e) => {
                c(s.Y.NONE), p(e);
            },
            [c],
        ),
        j = a.useCallback(() => {
            p(d());
        }, [d]),
        b = a.useCallback(
            (e) => {
                m(e), p((t) => (t === e ? null : t));
            },
            [m],
        ),
        C = a.useMemo(() => ({ isCropEnabled: l, isTextTrackEnabled: x }), [l, x]),
        y = a.useMemo(
            () => ({
                tracks: u,
                selectedTrackId: v,
                setSelectedTrackId: g,
                addTextTrack: j,
                removeTrack: b,
                updateTrackRange: h,
                updateTextTrackData: f,
                editorFeatures: C,
            }),
            [u, v, g, j, b, h, f, C],
        );
    return (0, n.jsx)(o.Provider, { value: y, children: t });
}
function u() {
    let e = a.useContext(o);
    if (null == e) throw Error("useClipsEditorContext must be used within a ClipsEditorContextProvider");
    return e;
}
function d() {
    return u().editorFeatures;
}
