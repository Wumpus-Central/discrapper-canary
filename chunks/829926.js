"use strict";
n.d(t, { u: () => s }), n(417635), n(827343), n(792251);
var i = n(837921);
async function s(e) {
    try {
        return (await i.Ay.getSetting("USERNAME_PREFIX", "")) + e;
    } catch (e) {}
    return e;
}
n(945041);
