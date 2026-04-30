n.d(t, { A: () => _ }), n(323874), n(14289), n(35956);
var o = n(64700),
    r = n(671325),
    a = n(636537),
    i = n(799226),
    l = n(954571),
    u = n(676279),
    s = n(652215);
let _ = (e) => {
    (0, o.useEffect)(() => {
        e && l.default.track(s.HAw.PREMIUM_BRAND_REFRESH_WOW_MOMENT_ASSETS_PREFETCHING);
    }, [e]);
    let {
            mediaUrls: t,
            isSuccess: n,
            isLoading: _,
        } = ((e) => {
            let t = (0, u.TM)(),
                [n, r] = (0, o.useState)({ modalGlowEntry: void 0, modalGlowIdle: void 0, modalGlowExit: void 0 }),
                [i, _] = (0, o.useState)(!1),
                [d, C] = (0, o.useState)(!1),
                [E, p] = (0, o.useState)(!1),
                h = (0, o.useRef)(!0);
            (0, o.useEffect)(
                () => (
                    (h.current = !0),
                    () => {
                        h.current = !1;
                    }
                ),
                [],
            );
            let c = (0, o.useCallback)(
                    () => null != n.modalGlowEntry && null != n.modalGlowIdle && null != n.modalGlowExit,
                    [n.modalGlowEntry, n.modalGlowIdle, n.modalGlowExit],
                ),
                A = (0, o.useCallback)(async () => {
                    if (!c() && !E) {
                        p(!0), C(!1), _(!1);
                        try {
                            let e = Date.now(),
                                [n, o, i] = await Promise.all([
                                    a.Bo.get({
                                        url: t
                                            ? "https://cdn.discordapp.com/assets/content/26968a6375b676097d7234b043b61312b8037f45d077c91b621ead07c6b0544b.mov"
                                            : "https://cdn.discordapp.com/assets/content/49d12c146442880c181fcc5502a49bd31d7537c2d6d5255aa2ad6b3d668553e7.webm",
                                        binary: !0,
                                        rejectWithError: !0,
                                    }),
                                    a.Bo.get({
                                        url: t
                                            ? "https://cdn.discordapp.com/assets/content/e1b69b796171027073273beebfee03fdf466010bf89a2ff116deccaec44d7c6f.mov"
                                            : "https://cdn.discordapp.com/assets/content/ad6e3d6f3a4bb6a1debd45bc21e47b7f522685c3facc578bd2129aa4cd795f40.webm",
                                        binary: !0,
                                        rejectWithError: !0,
                                    }),
                                    a.Bo.get({
                                        url: t
                                            ? "https://cdn.discordapp.com/assets/content/7c384bc29166872d908b60c5faec0d00d9bd960267a8943331c456018ede5e7d.mov"
                                            : "https://cdn.discordapp.com/assets/content/54bef6c79e1a3e1c2ec8f0d4a208643a7e203dc4c94e3463e6c6b38f6f4bdb23.webm",
                                        binary: !0,
                                        rejectWithError: !0,
                                    }),
                                ]);
                            h.current &&
                                (r({
                                    modalGlowEntry: window.URL.createObjectURL(n.body),
                                    modalGlowExit: window.URL.createObjectURL(o.body),
                                    modalGlowIdle: window.URL.createObjectURL(i.body),
                                }),
                                _(!0),
                                l.default.track(s.HAw.PREMIUM_BRAND_REFRESH_WOW_MOMENT_ASSETS_PREFETCH_SUCCESS, {
                                    load_duration_ms: Date.now() - e,
                                }));
                        } catch (e) {
                            h.current && C(!0);
                        } finally {
                            h.current && p(!1);
                        }
                    }
                }, [c, E, t]);
            return (
                (0, o.useEffect)(() => {
                    e && A();
                }, [e, A]),
                (0, o.useEffect)(
                    () => () => {
                        null != n.modalGlowEntry && window.URL.revokeObjectURL(n.modalGlowEntry),
                            null != n.modalGlowIdle && window.URL.revokeObjectURL(n.modalGlowIdle),
                            null != n.modalGlowExit && window.URL.revokeObjectURL(n.modalGlowExit);
                    },
                    [n.modalGlowEntry, n.modalGlowIdle, n.modalGlowExit],
                ),
                { mediaUrls: n, isSuccess: i, isFailure: d, isLoading: E }
            );
        })(e),
        { status: d } = (0, i.CE)(e ? r.A : null);
    return { mediaUrls: t, isSuccess: n && d === i.BW.Loaded, isLoading: _ || d === i.BW.Loading };
};
