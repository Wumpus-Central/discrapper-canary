n.d(t, { A: () => u }), n(323874), n(14289), n(35956);
var r = n(64700),
    a = n(671325),
    i = n(636537),
    o = n(799226),
    l = n(954571),
    s = n(676279),
    d = n(652215);
let u = (e) => {
    (0, r.useEffect)(() => {
        e && l.default.track(d.HAw.PREMIUM_BRAND_REFRESH_WOW_MOMENT_ASSETS_PREFETCHING);
    }, [e]);
    let {
            mediaUrls: t,
            isSuccess: n,
            isLoading: u,
        } = ((e) => {
            let t = (0, s.TM)(),
                [n, a] = (0, r.useState)({ modalGlowEntry: void 0, modalGlowIdle: void 0, modalGlowExit: void 0 }),
                [o, u] = (0, r.useState)(!1),
                [c, _] = (0, r.useState)(!1),
                [p, C] = (0, r.useState)(!1),
                h = (0, r.useRef)(!0);
            (0, r.useEffect)(
                () => (
                    (h.current = !0),
                    () => {
                        h.current = !1;
                    }
                ),
                [],
            );
            let E = (0, r.useCallback)(
                    () => null != n.modalGlowEntry && null != n.modalGlowIdle && null != n.modalGlowExit,
                    [n.modalGlowEntry, n.modalGlowIdle, n.modalGlowExit],
                ),
                m = (0, r.useCallback)(async () => {
                    if (!E() && !p) {
                        C(!0), _(!1), u(!1);
                        try {
                            let e = Date.now(),
                                [n, r, o] = await Promise.all([
                                    i.Bo.get({
                                        url: t
                                            ? "https://cdn.discordapp.com/assets/content/26968a6375b676097d7234b043b61312b8037f45d077c91b621ead07c6b0544b.mov"
                                            : "https://cdn.discordapp.com/assets/content/49d12c146442880c181fcc5502a49bd31d7537c2d6d5255aa2ad6b3d668553e7.webm",
                                        binary: !0,
                                        rejectWithError: !0,
                                    }),
                                    i.Bo.get({
                                        url: t
                                            ? "https://cdn.discordapp.com/assets/content/e1b69b796171027073273beebfee03fdf466010bf89a2ff116deccaec44d7c6f.mov"
                                            : "https://cdn.discordapp.com/assets/content/ad6e3d6f3a4bb6a1debd45bc21e47b7f522685c3facc578bd2129aa4cd795f40.webm",
                                        binary: !0,
                                        rejectWithError: !0,
                                    }),
                                    i.Bo.get({
                                        url: t
                                            ? "https://cdn.discordapp.com/assets/content/7c384bc29166872d908b60c5faec0d00d9bd960267a8943331c456018ede5e7d.mov"
                                            : "https://cdn.discordapp.com/assets/content/54bef6c79e1a3e1c2ec8f0d4a208643a7e203dc4c94e3463e6c6b38f6f4bdb23.webm",
                                        binary: !0,
                                        rejectWithError: !0,
                                    }),
                                ]);
                            h.current &&
                                (a({
                                    modalGlowEntry: window.URL.createObjectURL(n.body),
                                    modalGlowExit: window.URL.createObjectURL(r.body),
                                    modalGlowIdle: window.URL.createObjectURL(o.body),
                                }),
                                u(!0),
                                l.default.track(d.HAw.PREMIUM_BRAND_REFRESH_WOW_MOMENT_ASSETS_PREFETCH_SUCCESS, {
                                    load_duration_ms: Date.now() - e,
                                }));
                        } catch (e) {
                            h.current && _(!0);
                        } finally {
                            h.current && C(!1);
                        }
                    }
                }, [E, p, t]);
            return (
                (0, r.useEffect)(() => {
                    e && m();
                }, [e, m]),
                (0, r.useEffect)(
                    () => () => {
                        null != n.modalGlowEntry && window.URL.revokeObjectURL(n.modalGlowEntry),
                            null != n.modalGlowIdle && window.URL.revokeObjectURL(n.modalGlowIdle),
                            null != n.modalGlowExit && window.URL.revokeObjectURL(n.modalGlowExit);
                    },
                    [n.modalGlowEntry, n.modalGlowIdle, n.modalGlowExit],
                ),
                { mediaUrls: n, isSuccess: o, isFailure: c, isLoading: p }
            );
        })(e),
        { status: c } = (0, o.CE)(e ? a.A : null);
    return { mediaUrls: t, isSuccess: n && c === o.BW.Loaded, isLoading: u || c === o.BW.Loading };
};
