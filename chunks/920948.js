"use strict";
n.d(t, { U: () => d }), n(64700);
var i = n(735438),
    r = n.n(i),
    s = n(29814),
    a = n(46054),
    o = n(551965);
let l = ["heading", "list", "blockQuote"],
    u = r().once(() =>
        r().omit(
            (0, o.A)([s.A.EMBED_TITLE_RULES, a.A.createReactRules({ enableBuildOverrides: !1, enableEmojiClick: !0 })]),
            l,
        ),
    ),
    c = r().once(() => a.A.reactParserFor(u()));
function d(e) {
    return c()(e, !0);
}
