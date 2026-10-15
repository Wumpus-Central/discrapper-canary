n.d(t, { l: () => r, x: () => a });
var i,
    r =
        (((i = {})[(i.UNSPECIFIED = 0)] = "UNSPECIFIED"),
        (i[(i.TOP_SONG_CHANGED = 1)] = "TOP_SONG_CHANGED"),
        (i[(i.TOP_ARTIST_CHANGED = 2)] = "TOP_ARTIST_CHANGED"),
        (i[(i.TOP_LISTENER_CHANGED = 3)] = "TOP_LISTENER_CHANGED"),
        i);
function a(e) {
    return null != e && null != e.event && 0 !== e.event && e.event in r
        ? { event: e.event, trackTitle: s(e.track_title), artistName: s(e.artist_name), userId: e.user_id ?? null }
        : null;
}
function s(e) {
    return null != e && e.length > 0 ? e : null;
}
