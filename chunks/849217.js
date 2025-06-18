n.d(t, { Z: () => s });
var r = n(73800),
    l = n(704215),
    a = n(605236),
    i = n(681435),
    o = n(921944);
let s = () => {
    let { dismissShopButtonDC: e } = (0, i.Z)();
    r.useEffect(() => {
        e(),
            (0, a.un)(l.z.COLLECTIBLES_GIFTING_COACHMARK) ||
                (0, a.EW)(l.z.COLLECTIBLES_GIFTING_COACHMARK, {
                    dismissAction: o.L.AUTO_DISMISS,
                    forceTrack: !0
                });
    }, [e]);
};
