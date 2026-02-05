n.d(e, { A: () => r });
var i = n(284009),
    l = n.n(i),
    a = n(403918);
function r(t) {
    if (t !== a.yt.TODAY) return l()("number" == typeof t, "Invalid custom status clear timeout"), t;
    {
        let t = new Date();
        return new Date(t.getFullYear(), t.getMonth(), t.getDate() + 1).getTime() - t.getTime();
    }
}
