var n = e(414123),
    o = e(486816),
    s = e(273900);
t.exports =
    !n &&
    !o(function () {
        return (
            7 !==
            Object.defineProperty(s("div"), "a", {
                get: function () {
                    return 7;
                },
            }).a
        );
    });
