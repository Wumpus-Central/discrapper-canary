n.d(t, {
    A: () => h,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(311907),
    s = n(625841),
    o = n(74848),
    l = n(430452),
    c = n(723702),
    u = n(801264),
    d = n(731854),
    f = n(985018),
    p = n(637462);
let _ = c.isWindows() ? ["BTHENUM", "BTHHFENUM"] : [];

function h() {
    var e, t;
    let { canSetInputDevice: n, canSetOutputDevice: c } = (0, a.cf)([l.A], () => ({
            canSetInputDevice: l.A.supports(d.O5.AUDIO_INPUT_DEVICE),
            canSetOutputDevice: l.A.supports(d.O5.AUDIO_OUTPUT_DEVICE),
        })),
        h = (0, o.x5)(d.oh.AUDIO_INPUT),
        m = (0, o.x5)(d.oh.AUDIO_OUTPUT),
        [g, E] = (0, o.tR)(d.oh.AUDIO_INPUT, {
            location: "UserSettingsDevices",
        }),
        [b, y] = (0, o.tR)(d.oh.AUDIO_OUTPUT, {
            location: "UserSettingsDevices",
        }),
        O = g.concat(E),
        A = b.concat(y),
        v = i.useMemo(() => {
            let e = _.some((e) => {
                    var t;
                    return null == h || null == (t = h.hardwareId) ? void 0 : t.startsWith(e);
                }),
                t = _.some((e) => {
                    var t;
                    return null == m || null == (t = m.hardwareId) ? void 0 : t.startsWith(e);
                });
            return (
                e &&
                t &&
                (null == h ? void 0 : h.containerId) != null &&
                h.containerId === (null == m ? void 0 : m.containerId)
            );
        }, [h, m]),
        S = O[0],
        I = A[0],
        T = null != (e = null == S ? void 0 : S.disabled) ? e : !n,
        C = null != (t = null == I ? void 0 : I.disabled) ? t : !c;
    return (0, r.jsxs)("div", {
        className: p.y0,
        children: [
            (0, r.jsxs)("div", {
                className: p.o6,
                children: [
                    (0, r.jsx)("div", {
                        className: p.fi,
                        children: (0, r.jsx)(s.U, {
                            label: f.intl.string(f.t.hHMYbb),
                            deviceType: d.oh.AUDIO_INPUT,
                            location: "UserSettingsDevices",
                            hideDeviceTypeIcon: !0,
                            isDisabled: T,
                        }),
                    }),
                    (0, r.jsx)("div", {
                        className: p.fi,
                        children: (0, r.jsx)(s.U, {
                            label: f.intl.string(f.t.dl18zb),
                            deviceType: d.oh.AUDIO_OUTPUT,
                            location: "UserSettingsDevices",
                            hideDeviceTypeIcon: !0,
                            isDisabled: C,
                        }),
                    }),
                ],
            }),
            v &&
                (0, r.jsx)(u.A, {
                    look: u.k.WARNING,
                    children: f.intl.string(f.t.Ioz3gx),
                }),
        ],
    });
}
