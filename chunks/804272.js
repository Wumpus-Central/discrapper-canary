var n = e(257943),
    o = e(503628),
    i = e(447280);
r.exports =
    !n &&
    !o(function () {
        return (
            7 !==
            Object.defineProperty(i("div"), "a", {
                get: function () {
                    return 7;
                },
            }).a
        );
    });
