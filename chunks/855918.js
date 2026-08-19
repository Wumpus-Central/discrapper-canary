"use strict";
n.d(t, { AN: () => l, Uj: () => o, iR: () => s });
var i = n(136722),
    r = n(34457),
    a = n(652215);
function s(e) {
    return (0, r._m)(e, a.xBc.VIEW_CHANNEL);
}
function l(e, t) {
    return null != t && (!!i.zy(t.deny, a.xBc.VIEW_CHANNEL) || (e.isGuildVocal() && i.zy(t.deny, a.xBc.CONNECT)));
}
function o(e, t) {
    return (
        !(null == t || l(e, t)) &&
        !!i.zy(t.allow, a.xBc.VIEW_CHANNEL) &&
        (!e.isGuildVocal() || i.zy(t.allow, a.xBc.CONNECT))
    );
}
