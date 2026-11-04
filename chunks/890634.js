n.d(t, { AH: () => l, Mc: () => d, uh: () => s, xv: () => E, vY: () => _, oN: () => u });
var r,
    a,
    i,
    o,
    l =
        (((r = {})[(r.BLOCK_MESSAGE = 1)] = "BLOCK_MESSAGE"),
        (r[(r.FLAG_TO_CHANNEL = 2)] = "FLAG_TO_CHANNEL"),
        (r[(r.USER_COMMUNICATION_DISABLED = 3)] = "USER_COMMUNICATION_DISABLED"),
        (r[(r.QUARANTINE_USER = 4)] = "QUARANTINE_USER"),
        r),
    d =
        (((a = {})[(a.UNKNOWN = 0)] = "UNKNOWN"),
        (a[(a.MESSAGE_SEND = 1)] = "MESSAGE_SEND"),
        (a[(a.GUILD_MEMBER_JOIN_OR_UPDATE = 2)] = "GUILD_MEMBER_JOIN_OR_UPDATE"),
        a),
    s =
        (((i = {})[(i.KEYWORD = 1)] = "KEYWORD"),
        (i[(i.SPAM_LINK = 2)] = "SPAM_LINK"),
        (i[(i.ML_SPAM = 3)] = "ML_SPAM"),
        (i[(i.DEFAULT_KEYWORD_LIST = 4)] = "DEFAULT_KEYWORD_LIST"),
        (i[(i.MENTION_SPAM = 5)] = "MENTION_SPAM"),
        (i[(i.USER_PROFILE = 6)] = "USER_PROFILE"),
        (i[(i.SERVER_POLICY = 7)] = "SERVER_POLICY"),
        (i[(i.APPLICATION = 8)] = "APPLICATION"),
        i),
    _ =
        (((o = {})[(o.PROFANITY = 1)] = "PROFANITY"),
        (o[(o.SEXUAL_CONTENT = 2)] = "SEXUAL_CONTENT"),
        (o[(o.SLURS = 3)] = "SLURS"),
        o);
(s.USER_PROFILE, s.SERVER_POLICY, s.MENTION_SPAM, s.ML_SPAM, s.DEFAULT_KEYWORD_LIST, s.KEYWORD);
let E = "^b(a|@)d$\nw(o|0)rd(s|$)",
    u = "automod-profile-quarantine-alert";
