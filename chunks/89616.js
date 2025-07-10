function n() {
    var e = new Date(),
        t = e.getFullYear(),
        r = e.getMonth(),
        n = e.getDate(),
        o = new Date(0);
    return (o.setFullYear(t, r, n - 1), o.setHours(23, 59, 59, 999), o);
}
r.d(t, { Z: () => n });
