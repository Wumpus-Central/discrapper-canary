"use strict";
l.d(t, { J: () => c });
var a = l(64700),
    n = l(417597),
    r = l(256311),
    s = l(773669),
    i = l(883600),
    o = l(559868);
function d(e, t) {
    let {
        changelog: l,
        loadState: s,
        defaultChangelog: d,
        defaultLoadState: c,
    } = (0, n.cf)([i.A], () => {
        let l = null != e ? i.A.getChangelog(e, t) : null,
            a = null != e ? i.A.getChangelog(e, "en-US") : null,
            n = null != e && i.A.getChangelogLoadStatus(e, "en-US");
        return {
            changelog: l,
            loadState: null != e && i.A.getChangelogLoadStatus(e, t),
            defaultChangelog: a,
            defaultLoadState: n,
        };
    }, [e, t]);
    return (a.useEffect(() => {
        null != e && null == l && s === o._f.NOT_LOADED && r.A.fetchChangelog(e, t);
    }, [e, l, s, t]),
    null == e)
        ? { id: e, changelog: null, loaded: !1 }
        : null == l && s === o._f.LOADED_FAILURE
          ? { id: e, changelog: d, loaded: c !== o._f.NOT_LOADED }
          : { id: e, changelog: l, loaded: s !== o._f.NOT_LOADED };
}
function c() {
    let e = (0, n.bG)([s.default], () => s.default.locale),
        t = (0, n.bG)([i.A], () => i.A.latestChangelogId()),
        l = (0, n.bG)([i.A], () => i.A.getConfig()),
        a = null != l && 0 === Object.keys(l).length,
        r = null != l && Object.keys(l).length > 0 && null == t,
        o = (0, n.bG)([i.A], () => i.A.overrideId()),
        { changelog: c, loaded: u } = d(t, e),
        { changelog: _, loaded: m } = d(o, e);
    return null == o || (null == _ && m)
        ? { id: t, changelog: c, loaded: !!a || u, clientTooOld: r }
        : { id: o, changelog: _, loaded: m, clientTooOld: !1 };
}
