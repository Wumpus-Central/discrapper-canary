n.d(t, { A: () => y, closeBackgroundedConjureAppFrames: () => L, returnToConjureFrameSurface: () => P });
var i = n(582128),
    r = n(991690),
    a = n(933958),
    l = n(197184),
    u = n(625180),
    o = n(91242),
    d = n(457827),
    A = n(271982),
    c = n(409397),
    s = n(869146),
    p = n(976860),
    f = n(995802),
    I = n(964404),
    C = n(778597),
    E = n(734057),
    m = n(111534),
    g = n(754027),
    N = n(652215),
    V = n(165610);
function F() {
    return s.A.getWindowOpen(N.MLl.ACTIVITY_POPOUT);
}
function L(e, t) {
    if ((0, f.Pc)(e))
        for (let n of o.A.getAllFrames())
            n.applicationId === e &&
                n.id !== t &&
                (function (e) {
                    return (
                        !(
                            e.surface.type === r.U.OVERLAY ||
                            (0, g.Q5)(e.surface) ||
                            (e.intent === V.sV.MAIN && e.applicationId === m.A.getLastBuilderPreviewApplicationId())
                        ) &&
                        null == (0, c.A)(e) &&
                        (o.A.getMainFrame()?.id === e.id
                            ? !F() && (0, V.ny)(e)?.data.layoutMode === V.y0.PIP
                            : null == A.A.getWinningTarget(e.id))
                    );
                })(n) &&
                (0, d.r)(n.id);
}
function P(e) {
    if (e.intent !== V.sV.INLINE || (0, g.Q5)(e.surface) || !(0, f.Pc)(e.applicationId)) return !1;
    let t = E.A.getChannel((0, l.A)(e.surface));
    return null != t && ((0, p.pX)(N.BVt.CHANNEL(t.getGuildId() ?? N.ME, t.id)), !0);
}
function y(e, t) {
    let n = null != t ? (0, V.VA)(e, t) : null;
    i.useEffect(() => {
        if (null != n)
            return (
                L(e, n),
                !(function (e) {
                    let t = o.A.getFrame(e);
                    if (null == t || F()) return;
                    let n = o.A.getMainFrame()?.id === e;
                    t.intent === V.sV.MAIN
                        ? (n || u.A.promoteFrame(e), u.A.resetFrameLayoutModes(e))
                        : n && (0, f.Pc)(t.applicationId) && u.A.clearMainFrameSlot();
                })(n),
                () =>
                    (function (e) {
                        let t = o.A.getFrame(e);
                        if (null != t) {
                            var n;
                            let i;
                            (
                                !(0, V.x1)(t) ||
                                !t.data.runsInBackground ||
                                !I.Ay.allowConjureRunInBackground ||
                                !(0, f.Pc)(t.applicationId) ||
                                null != (0, c.A)(t) ||
                                F() ||
                                ((n = t.id),
                                (null != (i = o.A.getMainFrame()) && i.id !== n) ||
                                    null != a.Ay.getCurrentEmbeddedActivity())
                                    ? 1
                                    : t.surface.type !== r.U.VOICE_CHANNEL || (0, g.Q5)(t.surface)
                                      ? 0
                                      : !C.A.isAppVisible(t.surface.channelId, !0)
                            )
                                ? t.intent === V.sV.MAIN && u.A.demoteMainFrame(e)
                                : (t.intent === V.sV.INLINE && u.A.promoteFrame(e),
                                  u.A.updateFrameLayoutMode({ frameId: e, layoutMode: V.y0.PIP }));
                        }
                    })(n)
            );
    }, [e, n]);
}
