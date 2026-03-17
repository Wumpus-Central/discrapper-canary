n.d(t, { Y: () => i });
var a = n(505779);
let l = [a.V.OFFICIAL, a.V.FACEBOOK, a.V.TWITTER, a.V.INSTAGRAM, a.V.YOUTUBE, a.V.BLUESKY, a.V.REDDIT, a.V.TWITCH];
function i(e) {
    return (e?.websites ?? [])
        .filter((e) => {
            let { category: t } = e;
            return l.includes(t);
        })
        .sort((e, t) => l.indexOf(e.category) - l.indexOf(t.category));
}
