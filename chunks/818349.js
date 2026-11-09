a.d(
    u,
    {},
    {
        K: function (n) {
            return "off" === n ? { clipsEnabled: !1 } : { clipsEnabled: !0, enableAutoclipping: "auto" === n };
        },
        r: function (n, u) {
            return n ? (u ? "auto" : "manual") : "off";
        },
    },
);
