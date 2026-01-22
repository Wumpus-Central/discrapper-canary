var r = n(573750),
    i = n(696009),
    a = r.isPlatform("Mac OS X"),
    s = {
        isCtrlKeyCommand: function (e) {
            return !!e.ctrlKey && !e.altKey;
        },
        isOptionKeyCommand: function (e) {
            return a && e.altKey;
        },
        usesMacOSHeuristics: function () {
            return a;
        },
        hasCommandModifier: function (e) {
            return a ? !!e.metaKey && !e.altKey : s.isCtrlKeyCommand(e);
        },
        isSoftNewlineEvent: i,
    };
e.exports = s;
