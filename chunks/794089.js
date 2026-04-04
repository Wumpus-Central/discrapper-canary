n.d(t, { p: () => f });
var i = n(627968),
    s = n(64700),
    l = n(158954),
    a = n(74848),
    r = n(419954),
    o = n(933297),
    d = n(843401),
    c = n(723702),
    u = n(780964),
    m = n(208039),
    g = n(801565),
    _ = n(89253),
    x = n(860787),
    A = n(731854),
    h = n(985018);
let p = c.isWindows() ? ["BTHENUM", "BTHHFENUM"] : [];
function T(e) {
    let { inputAndOutputAreBluetooth: t, canPromptSystemServiceInstallForVoice: n } = e;
    return (0, i.jsxs)(l.BJc, {
        children: [
            n && (0, i.jsx)(d.A, { sourcePage: "voice" }),
            t && (0, i.jsx)(m.A, { look: m.k.WARNING, children: h.intl.string(h.t.Ioz3gx) }),
        ],
    });
}
let f = (0, r.zZ)(u.X.VOICE_CATEGORY, {
    useTitle: () => h.intl.string(h.t.K3lovD),
    useInlineNotice: function () {
        let e = (0, d.I)("voice"),
            t = (0, a.x5)(A.oh.AUDIO_INPUT),
            n = (0, a.x5)(A.oh.AUDIO_OUTPUT),
            l = s.useMemo(() => {
                let e = p.some((e) => t?.hardwareId?.startsWith(e)),
                    i = p.some((e) => n?.hardwareId?.startsWith(e));
                return e && i && t?.containerId != null && t.containerId === n?.containerId;
            }, [t, n]);
        return s.useMemo(
            () =>
                e.canPrompt || l
                    ? {
                          type: o.lT.STRONGLY_DISCOURAGED_CUSTOM,
                          notice: () =>
                              (0, i.jsx)(T, {
                                  inputAndOutputAreBluetooth: l,
                                  canPromptSystemServiceInstallForVoice: e.canPrompt,
                              }),
                      }
                    : null,
            [e.canPrompt, l],
        );
    },
    buildLayout: () => [g.a, _.d, x.L],
});
