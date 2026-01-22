n.d(e, { A: () => i });
var l = n(284009),
    a = n.n(l),
    r = n(403918);
function i(t) {
    if (t !== r.yt.TODAY) return a()("number" == typeof t, "Invalid custom status clear timeout"), t;
    {
        let t = new Date();
        return new Date(t.getFullYear(), t.getMonth(), t.getDate() + 1).getTime() - t.getTime();
    }
}
