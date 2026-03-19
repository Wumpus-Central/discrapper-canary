"use strict";
n.d(t, { A: () => o });
var r = n(64700),
    i = n(206835),
    s = n(84540),
    a = n(355097);
function o(e) {
    let t = (0, i.A)({ scrollPosition: a._F.GUILD_TAG });
    return r.useCallback(() => {
        (0, s.p)({ primaryGuildId: e }), t();
    }, [e, t]);
}
