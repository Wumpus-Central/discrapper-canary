"use strict";
n.d(t, { A: () => r });
var i = n(627968),
    s = n(64700),
    l = n(397927);
function r(e, t) {
    return s.useCallback(() => {
        (0, l.mMO)(async () => {
            let { default: s } = await n.e("74488").then(n.bind(n, 285899));
            return (n) => (0, i.jsx)(s, { guildId: e, powerup: t, ...n });
        });
    }, [e, t]);
}
