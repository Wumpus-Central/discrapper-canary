n.d(t, { A: () => g }), n(938796);
var i = n(627968),
    l = n(64700),
    a = n(665260),
    r = n(311907),
    s = n(732955),
    o = n(397927),
    c = n(274372),
    d = n(239450),
    u = n(794905),
    m = n(320501),
    _ = n(998218),
    A = n(888675),
    E = n(652215),
    f = n(985018),
    h = n(633232);
function g(e) {
    let { message: t, compact: n } = e,
        g = t.channel_id,
        p = (0, r.bG)(
            [m.A],
            () =>
                null != t.messageReference
                    ? m.A.getMessage(t.messageReference.channel_id, t.messageReference.message_id)
                    : null,
            [t.messageReference],
        ),
        { clipId: x, remoteTriggerClipId: C } = l.useMemo(
            () =>
                null != p
                    ? (function (e) {
                          let t = "__CLIP_METADATA__",
                              n = e.indexOf(t);
                          if (-1 === n) return {};
                          let i = n + t.length,
                              l = e.substring(i);
                          try {
                              let e = JSON.parse(l);
                              return { clipId: e.id, remoteTriggerClipId: e.remoteTriggerClipId };
                          } catch (e) {
                              return {};
                          }
                      })(p.content)
                    : {},
            [p],
        ),
        I = (0, r.bG)([c.A], () => c.A.getMatchingGroupClip(x, C)),
        T = (0, r.bG)([c.A], () => null != I && null != g && c.A.wasClipSharedInChannel(I.id, g)),
        { onShareClick: N } = (0, u.A)(g),
        S = l.useCallback(() => {
            null != I &&
                null != g &&
                t.messageReference?.message_id != null &&
                N({ clips: [I], messageReference: { channel_id: g, message_id: t.messageReference.message_id } });
        }, [I, g, t.messageReference, N]);
    if (null == p || (null == x && null == C) || null == I || T) return null;
    let R = p.attachments.find((e) => (0, a.Lt)(e.flags ?? 0, E.sbO.IS_CLIP)),
        v = null;
    if (R?.proxy_url != null) {
        let e = _.A.toURLSafe(R.proxy_url);
        null != e && (e.searchParams.append("format", "webp"), (v = e.toString()));
    }
    let O = null != v ? [v, I.thumbnail] : [I.thumbnail];
    return (0, i.jsx)(A.A, {
        iconNode: (0, i.jsx)(o.xgA, { size: "md", color: "currentColor" }),
        timestamp: t.timestamp,
        compact: n,
        additionalContent: (0, i.jsxs)("div", {
            className: h.i,
            children: [
                (0, i.jsx)(d.A, { thumbnails: O, variant: "stacked" }),
                (0, i.jsx)(s.$nd, { size: "sm", onClick: S, text: f.intl.string(f.t["5qb8EX"]), icon: o.W4J }),
            ],
        }),
        children: f.intl.string(f.t.ThhsNG),
    });
}
