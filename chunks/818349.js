n.d(
    t,
    {},
    {
        K: function (e) {
            return "off" === e ? { clipsEnabled: !1 } : { clipsEnabled: !0, enableAutoclipping: "auto" === e };
        },
        r: function (e, t) {
            return e ? (t ? "auto" : "manual") : "off";
        },
    },
);
