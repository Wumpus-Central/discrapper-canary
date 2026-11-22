e.d(
    n,
    {},
    {
        l: function (t) {
            return "live_outdated" === t || "live_current" === t || "live_auto_synced" === t;
        },
        n: ["preparing", "approval", "approved_by_grant", "setup", "build", "deploy", "discord", "activating"],
    },
);
