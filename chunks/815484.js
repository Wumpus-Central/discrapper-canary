l.d(t, { A: () => a });
var n = l(284009),
    i = l.n(n),
    r = l(403918);
function a(e) {
    if (e !== r.yt.TODAY) return i()("number" == typeof e, "Invalid custom status clear timeout"), e;
    {
        let e = new Date();
        return new Date(e.getFullYear(), e.getMonth(), e.getDate() + 1).getTime() - e.getTime();
    }
}
