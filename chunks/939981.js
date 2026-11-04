var i = l(773669);
l.d(
    s,
    {},
    {
        A: function (e) {
            let s =
                arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { month: "numeric", day: "numeric" };
            return new Date(e).toLocaleDateString(i.default.locale, { ...s, timeZone: "UTC" });
        },
    },
);
