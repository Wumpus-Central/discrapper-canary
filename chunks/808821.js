n.d(t, { A: () => b }), n(938796);
var r = n(627968),
    i = n(64700),
    a = n(665260),
    s = n(311907),
    o = n(732955),
    l = n(397927),
    c = n(274372),
    u = n(239450),
    d = n(794905),
    f = n(320501),
    p = n(998218),
    _ = n(888675),
    h = n(652215),
    m = n(985018),
    g = n(633232);
function E(e) {
    let t = "__CLIP_METADATA__",
        n = e.indexOf(t);
    if (-1 === n) return {};
    let r = n + t.length,
        i = e.substring(r);
    try {
        let e = JSON.parse(i);
        return {
            clipId: e.id,
            remoteTriggerClipId: e.remoteTriggerClipId,
        };
    } catch (e) {
        return {};
    }
}
function b(e) {
    let { message: t, compact: n } = e,
        b = t.channel_id,
        y = (0, s.bG)(
            [f.A],
            () =>
                null != t.messageReference
                    ? f.A.getMessage(t.messageReference.channel_id, t.messageReference.message_id)
                    : null,
            [t.messageReference],
        ),
        { clipId: O, remoteTriggerClipId: A } = i.useMemo(() => (null != y ? E(y.content) : {}), [y]),
        v = (0, s.bG)([c.A], () => c.A.getMatchingGroupClip(O, A)),
        S = (0, s.bG)([c.A], () => null != v && null != b && c.A.wasClipSharedInChannel(v.id, b)),
        { onShareClick: I } = (0, d.A)(b),
        T = i.useCallback(() => {
            var e;
            null != v &&
                null != b &&
                (null == (e = t.messageReference) ? void 0 : e.message_id) != null &&
                I({
                    clips: [v],
                    messageReference: {
                        channel_id: b,
                        message_id: t.messageReference.message_id,
                    },
                });
        }, [v, b, t.messageReference, I]);
    if (null == y || (null == O && null == A) || null == v || S) return null;
    let C = y.attachments.find((e) => {
            var t;
            return (0, a.Lt)(null != (t = e.flags) ? t : 0, h.sbO.IS_CLIP);
        }),
        N = null;
    if ((null == C ? void 0 : C.proxy_url) != null) {
        let e = p.A.toURLSafe(C.proxy_url);
        null != e && (e.searchParams.append("format", "webp"), (N = e.toString()));
    }
    let R = null != N ? [N, v.thumbnail] : [v.thumbnail];
    return (0, r.jsx)(_.A, {
        iconNode: (0, r.jsx)(l.xgA, {
            size: "md",
            color: "currentColor",
        }),
        timestamp: t.timestamp,
        compact: n,
        additionalContent: (0, r.jsxs)("div", {
            className: g.i,
            children: [
                (0, r.jsx)(u.A, {
                    thumbnails: R,
                    variant: "stacked",
                }),
                (0, r.jsx)(o.$nd, {
                    size: "sm",
                    onClick: T,
                    text: m.intl.string(m.t["5qb8EX"]),
                    icon: l.W4J,
                }),
            ],
        }),
        children: m.intl.string(m.t.ThhsNG),
    });
}
