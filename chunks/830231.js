function n() {
    let e = "function" == typeof WeakSet,
        t = e ? new WeakSet() : [];
    return [
        function (r) {
            if (e) return !!t.has(r) || (t.add(r), !1);
            for (let e = 0; e < t.length; e++) if (t[e] === r) return !0;
            return t.push(r), !1;
        },
        function (r) {
            if (e) t.delete(r);
            else
                for (let e = 0; e < t.length; e++)
                    if (t[e] === r) {
                        t.splice(e, 1);
                        break;
                    }
        },
    ];
}
r.d(t, { i: () => n });
