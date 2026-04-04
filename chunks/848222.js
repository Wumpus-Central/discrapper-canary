n.d(t, { U: () => A });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    o = n.n(l),
    r = n(311907),
    a = n(843282),
    d = n(582754),
    u = n(397927),
    h = n(827343),
    c = n(688810),
    p = n(544028),
    g = n(944993),
    m = n(347481),
    _ = n(430452),
    C = n(74848),
    b = n(731854),
    v = n(985018),
    x = n(789520);
function A(e) {
    let {
            deviceType: t,
            location: l,
            selectedDeviceId: A,
            onSelectDevice: D,
            hideDeviceTypeIcon: f = !1,
            label: E,
            ...O
        } = e,
        {
            setDevice: R,
            Icon: I,
            getCanSetDevice: T,
            getWarningMessage: V,
            getLocation: U,
        } = {
            [b.oh.AUDIO_INPUT]: {
                setDevice: h.A.setInputDevice,
                Icon: u.cNw,
                getCanSetDevice: (e) => e.supports(b.O5.AUDIO_INPUT_DEVICE),
                getWarningMessage: () =>
                    v.intl.format(v.t["1iK6UW"], { onDownloadClick: () => (0, g._)("Help Text Input Devices") }),
                getLocation: (e) => `${e}.SingleSelectInputDevices`,
            },
            [b.oh.AUDIO_OUTPUT]: {
                setDevice: h.A.setOutputDevice,
                Icon: u.LoC,
                getCanSetDevice: (e) => e.supports(b.O5.AUDIO_OUTPUT_DEVICE),
                getWarningMessage: () =>
                    v.intl.format(v.t.Ow0dbF, { onDownloadClick: () => (0, g._)("Help Text Output Devices") }),
                getLocation: (e) => `${e}.SingleSelectOutputDevices`,
            },
            [b.oh.VIDEO_INPUT]: {
                setDevice: h.A.setVideoDevice,
                Icon: u.xpe,
                getCanSetDevice: (e) => e.isVideoAvailable() || !e.hasVideoDevice(),
                getWarningMessage: () =>
                    v.intl.format(v.t["1iK6UW"], { onDownloadClick: () => (0, g._)("Help Text Video Devices") }),
                getLocation: (e) => `${e}.SingleSelectVideoDevices`,
            },
        }[t],
        { analyticsLocations: N } = (0, c.Ay)(),
        S = (0, r.bG)([p.A], () => p.A.theme),
        y = U(l),
        j = (0, C.tR)(t),
        { id: M } = (0, C.x5)(t),
        k = (0, r.bG)([_.Ay], () => T(_.Ay)),
        L = (0, i.jsx)(u.po8, { messageType: u.YCn.WARNING, children: V() }),
        w = s.useCallback(
            (e) => {
                (D?.(e) ?? !0) && R(e, { location: y, analyticsLocations: N });
            },
            [y, N, D, R],
        );
    function P(e) {
        let t,
            s,
            { label: l, value: r } = e,
            a = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            h = l,
            c = (0, C.d)(l);
        null != c && ((h = c.prefix), (t = c.subName));
        let p = m.A.getCertifiedDeviceName(r, h);
        if (m.A.isCertified(r)) {
            let e = (0, d.qB)(S) ? n(961392) : n(848672);
            s = (0, i.jsx)("img", { src: e, alt: v.intl.string(v.t.smSKsj) });
        }
        return (0, i.jsxs)("div", {
            className: o()(x.Mg, { [x.S2]: a && null != t, [x.Sy]: !f }),
            children: [
                !f &&
                    (0, i.jsx)("div", {
                        className: x.Kt,
                        children: (0, i.jsx)(I, { size: "custom", width: 20, height: 20, color: "currentColor" }),
                    }),
                (0, i.jsx)(u.Text, {
                    lineClamp: 2,
                    variant: "text-md/medium",
                    color: a ? "text-subtle" : "text-default",
                    className: x.hV,
                    children: p,
                }),
                null != t &&
                    (0, i.jsx)(u.Text, {
                        lineClamp: 2,
                        variant: a ? "text-xs/medium" : "text-md/medium",
                        color: "text-muted",
                        className: x.VT,
                        children: t,
                    }),
                null != s && (0, i.jsx)("div", { className: x.pN, children: s }),
            ],
        });
    }
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(a.Te, {
                label: E,
                value: A ?? M,
                onChange: w,
                options: j.map((e) => {
                    let { id: t, name: n } = e;
                    return { value: t, label: n };
                }),
                isDisabled: !k,
                popoutPosition: "bottom",
                renderOptionLabel: (e) => P(e, !0),
                renderOptionValue: (e) => {
                    let [t] = e;
                    return P(t);
                },
                optionClassName: x.OS,
                ...O,
                "data-migration-pending": !0,
            }),
            !k && L,
        ],
    });
}
