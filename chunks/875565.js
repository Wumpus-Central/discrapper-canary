let i = Object.prototype.toString;
s.d(
    e,
    {},
    {
        Qd: function (t) {
            return "[object Object]" === i.call(t);
        },
        Qg: function (t) {
            return !!(t && t.then && "function" == typeof t.then);
        },
    },
);
