n.d(
    t,
    {},
    {
        dr: function (e) {
            let { andFail: t = !0 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            if (t) throw Error();
        },
        e0: function (e) {
            return e;
        },
        pp: function (e, t) {
            return Object.setPrototypeOf(e, t.prototype);
        },
    },
);
