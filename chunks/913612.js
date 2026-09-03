n.d(t, { C: () => l, K: () => o });
var i = n(582128),
    r = n(506774),
    a = n(935671);
let s = "systemServiceAutoInstall";
function l() {
    r.w.set(s, !0);
}
function o() {
    i.useEffect(() => {
        null == r.w.get(s) && (l(), (0, a.sL)("first-start", !1));
    }, []);
}
