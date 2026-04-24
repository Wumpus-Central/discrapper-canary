"use strict";
var n = r(573750),
    i = r(696009),
    o = n.isPlatform("Mac OS X"),
    a = {
        isCtrlKeyCommand: function (t) {
            return !!t.ctrlKey && !t.altKey;
        },
        isOptionKeyCommand: function (t) {
            return o && t.altKey;
        },
        usesMacOSHeuristics: function () {
            return o;
        },
        hasCommandModifier: function (t) {
            return o ? !!t.metaKey && !t.altKey : a.isCtrlKeyCommand(t);
        },
        isSoftNewlineEvent: i,
    };
t.exports = a;
