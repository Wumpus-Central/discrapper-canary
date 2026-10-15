i.d(t, { default: () => M });
var n,
    l = i(477900),
    a = i(582128),
    s = i(284009),
    d = i.n(s),
    c = i(562708),
    r = i(17928),
    o = i(565787),
    C = i(189213),
    u = i(144228),
    h = i(289873),
    f = i(157559),
    g = i(546385),
    p = i(953727),
    E = i(628201),
    v = i(643501),
    _ = (((n = {}).CONNECT_VOICE = "connect_voice"), n),
    m = i(636537),
    S = i(73153),
    N = i(124697),
    O = i(350701),
    I = i(652215);
async function j(e, t, i) {
    (await N.A.maybeShowPTTAlert(e), await (0, E.ZG)());
    let n = await (0, E.uh)();
    (await y(e, t, i, n), (0, O.A)(i.id, e));
}
async function y(e, t, i, n) {
    let l;
    S.h.dispatch({ type: "GAME_CONSOLE_DEVICE_SEND_COMMAND_START", platform: e });
    try {
        l = await m.Bo.post({
            url: I.Rsh.CONSOLES_DEVICES_COMMANDS(e, t),
            body: { command: _.CONNECT_VOICE, channel_id: i.id, guild_id: i.guild_id, nonce: n },
            rejectWithError: !1,
        });
    } catch (t) {
        throw (S.h.dispatch({ type: "GAME_CONSOLE_DEVICE_SEND_COMMAND_FAIL", platform: e, error: t }), t);
    }
    let a = l.body.id;
    return (
        S.h.dispatch({
            type: "WAIT_FOR_REMOTE_SESSION",
            sessionType: e,
            nonce: n,
            channelId: i.id,
            deviceId: t,
            commandId: a,
        }),
        a
    );
}
var b = i(105292),
    w = i(510920);
let x = (0, o.k)(function (e) {
    let { width: t = 24, height: i = 24, color: n = "currentColor", foreground: a, ...s } = e;
    return (0, l.jsxs)("svg", {
        ...(0, p.A)(s),
        width: t,
        height: i,
        viewBox: "0 0 24 25",
        children: [
            (0, l.jsx)("path", {
                className: a,
                fill: n,
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M7.72934 2.36505C7.91813 1.79235 8.34289 1.84008 8.76766 1.8878C9.99478 2.03098 11.2219 2.2696 12.449 2.41277C13.1098 2.50822 13.3457 2.84229 13.3929 3.51044C13.4873 7.66249 13.4873 11.8145 13.9593 15.9189C14.0065 16.2529 14.1009 16.6824 13.6289 16.8256C11.7882 17.446 11.3635 19.1164 10.9859 20.739C10.4195 23.2685 10.4667 23.2685 8.01252 23.698C5.93587 24.032 5.93587 24.032 6.03026 21.9322C6.36064 15.5371 6.97419 9.18968 7.68214 2.84229C7.58775 2.69912 7.58775 2.55595 7.72934 2.36505Z",
                "aria-hidden": !0,
            }),
            (0, l.jsx)("path", {
                className: a,
                fill: n,
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M21 22.2862C21 22.4246 21 22.7474 20.9042 23.0703C20.8083 23.5316 20.4729 23.7622 19.9937 23.8545C19.4667 23.9006 19.1312 23.7161 19.0354 23.2548C18.7479 21.9633 17.7896 21.8249 16.5916 21.8249C15.3937 21.8249 14.2437 21.7788 13.9562 23.2548C13.8604 23.67 13.6208 23.9006 13.0937 23.8545C12.5666 23.8083 12.1354 23.5777 12.0874 23.0703C11.7999 21.3637 12.2312 19.7493 13.2374 18.3194C13.5729 17.8582 14.1958 17.7659 14.7229 17.9504C15.8729 18.2733 17.0229 18.2733 18.2208 17.9504C19.1792 17.6737 19.8021 18.181 20.1854 18.9652C20.7125 19.9338 21 20.9486 21 22.2862Z",
                "aria-hidden": !0,
            }),
            (0, l.jsx)("path", {
                className: a,
                fill: n,
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M7 2.14794C7 2.28884 7 2.47672 7 2.61763C4.78283 2.57066 3.89596 3.4161 3.9403 5.81153C4.02899 11.0721 4.20636 16.2856 4.29505 21.5462C4.29505 21.9689 4.42808 22.4386 4.11767 22.8613C3.80727 22.6265 3.89596 22.3447 3.89596 22.1098C3.85161 15.8629 3.67424 9.61603 3.05343 3.36913C2.9204 1.81915 2.9204 1.77218 4.47242 1.91309C5.31495 2.00703 6.15747 2.10097 7 2.14794Z",
                "aria-hidden": !0,
            }),
        ],
    });
});
function A(e) {
    let { devices: t, selectedDeviceId: i, onSelectDeviceId: n } = e,
        a = t.map((e) => {
            let { id: t, name: i } = e;
            return { value: t, name: i, leadingIcon: x };
        });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(u.z, { value: i, options: a, onChange: (e) => n(e) }),
            (0, l.jsx)(g.A, { children: b.intl.string(b.t.dI4HFq) }),
        ],
    });
}
function D() {
    return (0, l.jsx)("div", {
        className: w.jK,
        children: (0, l.jsx)("img", { src: "/assets/2a4eb770bd5005dd.svg", width: "189", height: "177", alt: "" }),
    });
}
function M(e) {
    let t,
        i,
        n,
        s,
        { channel: o, platform: u, transitionState: g, onClose: p } = e,
        _ = (0, r.bG)([v.default], () => v.default.getDevicesForPlatform(u), [u]),
        m = (0, r.bG)([v.default], () => v.default.getLastSelectedDeviceByPlatform(u)),
        S = a.useMemo(() => Object.values(_), [_]),
        N = (0, r.bG)([v.default], () => v.default.getFetchingDevices(u)),
        O = (0, r.bG)([v.default], () => v.default.getAwaitingRemoteSessionInfo()?.deviceId),
        [I, y] = a.useState(!1),
        [x, M] = a.useState(() => _[O ?? ""]?.id ?? null);
    async function R() {
        let e = _[x ?? ""];
        d()(null != e, "Cannot transfer without selected device");
        try {
            (y(!0), await j(u, e.id, o), p());
        } catch (t) {
            (y(!1),
                f.A.show({
                    title: b.intl.string(b.t.QL1y93),
                    body: b.intl.formatToPlainString(b.t["6ZyNH/"], { deviceName: e.name }),
                }));
        }
    }
    return (
        a.useEffect(() => {
            E.Uc(u);
        }, [u]),
        a.useEffect(() => {
            1 === S.length ? M(S[0].id) : null != m && M(m);
        }, [S, m]),
        N
            ? ((i = b.intl.string(b.t["+d9SH8"])),
              (t = (0, l.jsx)("div", { className: w.dc, children: (0, l.jsx)(h.y, {}) })))
            : 0 === S.length
              ? ((i = b.intl.string(b.t.OkJf1e)), (n = b.intl.string(b.t["of/l5Z"])), (t = (0, l.jsx)(D, {})))
              : ((i = b.intl.string(b.t["+d9SH8"])),
                (n = b.intl.string(b.t["5DtaWg"])),
                (s = [{ text: b.intl.string(b.t.FJR4bD), onClick: R, loading: I || null != O, disabled: null == x }]),
                (t = (0, l.jsx)(A, {
                    devices: S,
                    selectedDeviceId: x,
                    onSelectDeviceId: function (e) {
                        (M(e), (0, E.Jm)(u, e));
                    },
                }))),
        (0, l.jsx)(C.a, {
            title: i,
            subtitle: n,
            actions: s,
            transitionState: g,
            trackingProps: { impression: { impressionName: c.ImpressionNames.GAME_CONSOLE_DEVICE_LIST } },
            onClose: p,
            children: t,
        })
    );
}
