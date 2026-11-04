var i,
    r,
    a,
    s = (((i = {}).UP = "UP"), (i.DOWN = "DOWN"), i),
    l =
        (((r = {}).GUILD = "GUILD"),
        (r.TEXT_CHANNEL = "TEXT_CHANNEL"),
        (r.GROUP_DM = "GROUP_DM"),
        (r.VOICE_CHANNEL = "VOICE_CHANNEL"),
        (r.USER = "USER"),
        (r.USER_GLOBAL = "USER_GLOBAL"),
        (r.HEADER = "HEADER"),
        (r.APPLICATION = "APPLICATION"),
        (r.GAME_PROFILE = "GAME_PROFILE"),
        (r.SKU = "SKU"),
        (r.LINK = "LINK"),
        (r.IN_APP_NAVIGATION = "IN_APP_NAVIGATION"),
        (r.DM = "DM"),
        r),
    o =
        (((a = {}).USER = "@"),
        (a.TEXT_CHANNEL = "#"),
        (a.VOICE_CHANNEL = "!"),
        (a.GUILD = "*"),
        (a.GAME_PROFILE = "$"),
        a);
n.d(
    t,
    {},
    {
        AT: o,
        X9: class {
            id;
            text;
            constructor(e) {
                ((this.id = e), (this.text = e));
            }
        },
        rD: l,
        vB: s,
    },
);
