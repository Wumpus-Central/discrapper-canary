n.d(t, { C: () => s, K: () => o });
var i = n(64700),
    r = n(506774),
    a = n(935671);
let l = "systemServiceAutoInstall";
function s() {
    r.w.set(l, !0);
}
function o() {
    i.useEffect(() => {
        null == r.w.get(l) && (s(), (0, a.sL)("first-start", !1));
    }, []);
}
