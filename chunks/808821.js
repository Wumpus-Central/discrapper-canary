n.d(t, {
    A: () => b,
}),
    n(938796);
var r = n(627968),
    i = n(64700),
    l = n(665260),
    a = n(311907),
    s = n(732955),
    o = n(397927),
    c = n(274372),
    u = n(239450),
    d = n(794905),
    p = n(320501),
    m = n(998218),
    f = n(888675),
    g = n(652215),
    h = n(985018),
    _ = n(633232);

function b(e) {
    let { message: t, compact: n } = e,
        b = t.channel_id,
        A = (0, a.bG)(
            [p.A],
            () =>
                null != t.messageReference
                    ? p.A.getMessage(t.messageReference.channel_id, t.messageReference.message_id)
                    : null,
            [t.messageReference],
        ),
        { clipId: y, remoteTriggerClipId: v } = i.useMemo(
            () =>
                null != A
                    ? (function (e) {
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
                      })(A.content)
                    : {},
            [A],
        ),
        x = (0, a.bG)([c.A], () => c.A.getMatchingGroupClip(y, v)),
        O = (0, a.bG)([c.A], () => null != x && null != b && c.A.wasClipSharedInChannel(x.id, b)),
        { onShareClick: E } = (0, d.A)(b),
        j = i.useCallback(() => {
            var e;
            null != x &&
                null != b &&
                (null == (e = t.messageReference) ? void 0 : e.message_id) != null &&
                E({
                    clips: [x],
                    messageReference: {
                        channel_id: b,
                        message_id: t.messageReference.message_id,
                    },
                });
        }, [x, b, t.messageReference, E]);
    if (null == A || (null == y && null == v) || null == x || O) return null;
    let C = A.attachments.find((e) => {
            var t;
            return (0, l.Lt)(null != (t = e.flags) ? t : 0, g.sbO.IS_CLIP);
        }),
        I = null;
    if ((null == C ? void 0 : C.proxy_url) != null) {
        let e = m.A.toURLSafe(C.proxy_url);
        null != e && (e.searchParams.append("format", "webp"), (I = e.toString()));
    }
    let S = null != I ? [I, x.thumbnail] : [x.thumbnail];
    return (0, r.jsx)(f.A, {
        iconNode: (0, r.jsx)(o.xgA, {
            size: "md",
            color: "currentColor",
        }),
        timestamp: t.timestamp,
        compact: n,
        additionalContent: (0, r.jsxs)("div", {
            className: _.i,
            children: [
                (0, r.jsx)(u.A, {
                    thumbnails: S,
                    variant: "stacked",
                }),
                (0, r.jsx)(s.$nd, {
                    size: "sm",
                    onClick: j,
                    text: h.intl.string(h.t["5qb8EX"]),
                    icon: o.W4J,
                }),
            ],
        }),
        children: h.intl.string(h.t.ThhsNG),
    });
}
