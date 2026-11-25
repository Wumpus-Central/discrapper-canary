e.d(
    t,
    {},
    {
        l: function (n) {
            return "live_outdated" === n || "live_current" === n || "live_auto_synced" === n;
        },
        n: ["preparing", "approval", "approved_by_grant", "setup", "build", "deploy", "discord", "activating"],
    },
);
