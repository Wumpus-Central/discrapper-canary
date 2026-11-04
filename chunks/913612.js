var i = n(582128),
    r = n(506774),
    a = n(526919);
let s = "systemServiceAutoInstall";
function l() {
    r.w.set(s, !0);
}
n.d(
    t,
    {},
    {
        C: l,
        K: function () {
            i.useEffect(() => {
                null == r.w.get(s) && (l(), (0, a.sL)("first-start", !1));
            }, []);
        },
    },
);
