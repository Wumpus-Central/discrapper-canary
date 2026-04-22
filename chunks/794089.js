n.d(t, { p: () => T });
var i = n(627968),
    s = n(64700),
    l = n(331322),
    a = n(74848),
    r = n(419954),
    o = n(933297),
    d = n(843401),
    u = n(723702),
    c = n(780964),
    g = n(208039),
    m = n(801565),
    _ = n(89253),
    A = n(860787),
    h = n(731854),
    p = n(985018);
let x = u.isWindows() ? ["BTHENUM", "BTHHFENUM"] : [];
function E(e) {
    let { inputAndOutputAreBluetooth: t, canPromptSystemServiceInstallForVoice: n } = e;
    return (0, i.jsxs)(l.B, {
        children: [
            n && (0, i.jsx)(d.A, { sourcePage: "voice" }),
            t && (0, i.jsx)(g.A, { look: g.k.WARNING, children: p.intl.string(p.t.Ioz3gx) }),
        ],
    });
}
let T = (0, r.zZ)(c.X.VOICE_CATEGORY, {
    useTitle: () => p.intl.string(p.t.K3lovD),
    useInlineNotice: function () {
        let e = (0, d.I)("voice"),
            t = (0, a.x5)(h.oh.AUDIO_INPUT),
            n = (0, a.x5)(h.oh.AUDIO_OUTPUT),
            l = s.useMemo(() => {
                let e = x.some((e) => t?.hardwareId?.startsWith(e)),
                    i = x.some((e) => n?.hardwareId?.startsWith(e));
                return e && i && t?.containerId != null && t.containerId === n?.containerId;
            }, [t, n]);
        return s.useMemo(
            () =>
                e.canPrompt || l
                    ? {
                          type: o.lT.STRONGLY_DISCOURAGED_CUSTOM,
                          notice: () =>
                              (0, i.jsx)(E, {
                                  inputAndOutputAreBluetooth: l,
                                  canPromptSystemServiceInstallForVoice: e.canPrompt,
                              }),
                      }
                    : null,
            [e.canPrompt, l],
        );
    },
    buildLayout: () => [m.a, _.d, A.L],
});
