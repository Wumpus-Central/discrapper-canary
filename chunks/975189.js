let i = new Map();
n.d(
    t,
    {},
    {
        KY: function (e) {
            return i.get(e);
        },
        Sm: function (e, t) {
            i.set(e, t);
        },
        b4: function (e, t, n) {
            let r = i.get(e);
            try {
                if (null == r) throw Error("Not connected");
                return (n(r), !0);
            } catch (e) {
                return (console.error(`[conjure] ${t} send failed`, e), !1);
            }
        },
        ng: function (e) {
            i.delete(e);
        },
    },
);
