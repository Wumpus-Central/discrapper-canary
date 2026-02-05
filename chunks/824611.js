l.d(t, { J: () => c });
var n = l(64700),
    d = l(417597),
    a = l(256311),
    r = l(773669),
    o = l(883600),
    i = l(559868);
function s(e, t) {
    let {
        changelog: l,
        loadState: r,
        defaultChangelog: s,
        defaultLoadState: c,
    } = (0, d.cf)([o.A], () => {
        let l = null != e ? o.A.getChangelog(e, t) : null,
            n = null != e ? o.A.getChangelog(e, "en-US") : null,
            d = null != e && o.A.getChangelogLoadStatus(e, "en-US");
        return {
            changelog: l,
            loadState: null != e && o.A.getChangelogLoadStatus(e, t),
            defaultChangelog: n,
            defaultLoadState: d,
        };
    }, [e, t]);
    return (n.useEffect(() => {
        null != e && null == l && r === i._f.NOT_LOADED && a.A.fetchChangelog(e, t);
    }, [e, l, r, t]),
    null == e)
        ? { id: e, changelog: null, loaded: !1 }
        : null == l && r === i._f.LOADED_FAILURE
          ? { id: e, changelog: s, loaded: c !== i._f.NOT_LOADED }
          : { id: e, changelog: l, loaded: r !== i._f.NOT_LOADED };
}
function c() {
    let e = (0, d.bG)([r.default], () => r.default.locale),
        t = (0, d.bG)([o.A], () => o.A.latestChangelogId()),
        l = (0, d.bG)([o.A], () => o.A.getConfig()),
        n = null != l && 0 === Object.keys(l).length,
        a = null != l && Object.keys(l).length > 0 && null == t,
        i = (0, d.bG)([o.A], () => o.A.overrideId()),
        { changelog: c, loaded: _ } = s(t, e),
        { changelog: m, loaded: h } = s(i, e);
    return null == i || (null == m && h)
        ? { id: t, changelog: c, loaded: !!n || _, clientTooOld: a }
        : { id: i, changelog: m, loaded: h, clientTooOld: !1 };
}
