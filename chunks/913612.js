n.d(t, {
    C: () => o,
    K: () => l,
});
var r = n(64700),
    i = n(506774),
    a = n(942405);
let s = "systemServiceAutoInstall";

function o() {
    i.w.set(s, !0);
}

function l() {
    r.useEffect(() => {
        null == i.w.get(s) && (o(), (0, a.sL)("first-start", !1));
    }, []);
}
