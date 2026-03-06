"use strict";
n.d(t, { Y: () => i });
var l = n(505779);
let a = [l.V.OFFICIAL, l.V.FACEBOOK, l.V.TWITTER, l.V.INSTAGRAM, l.V.YOUTUBE, l.V.BLUESKY, l.V.REDDIT, l.V.TWITCH];
function i(e) {
    return (e?.websites ?? [])
        .filter((e) => {
            let { category: t } = e;
            return a.includes(t);
        })
        .sort((e, t) => a.indexOf(e.category) - a.indexOf(t.category));
}
