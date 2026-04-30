"use strict";
n.d(t, { A: () => o });
var i = n(64700),
    r = n(206835),
    s = n(84540),
    a = n(355097);
function o(e) {
    let t = (0, r.A)({ scrollPosition: a._F.GUILD_TAG });
    return i.useCallback(() => {
        (0, s.p)({ primaryGuildId: e }), t();
    }, [e, t]);
}
