n.d(t, { A: () => f }), n(938796);
var i = n(627968),
    l = n(64700),
    a = n(665260),
    r = n(311907),
    s = n(732955),
    o = n(397927),
    d = n(274372),
    c = n(239450),
    u = n(794905),
    m = n(320501),
    _ = n(998218),
    h = n(888675),
    p = n(652215),
    g = n(985018),
    A = n(633232);
function f(e) {
    let { message: t, compact: n } = e,
        f = t.channel_id,
        x = (0, r.bG)(
            [m.A],
            () =>
                null != t.messageReference
                    ? m.A.getMessage(t.messageReference.channel_id, t.messageReference.message_id)
                    : null,
            [t.messageReference],
        ),
        { clipId: E, remoteTriggerClipId: C } = l.useMemo(
            () =>
                null != x
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
                      })(x.content)
                    : {},
            [x],
        ),
        I = (0, r.bG)([d.A], () => d.A.getMatchingGroupClip(E, C)),
        T = (0, r.bG)([d.A], () => null != I && null != f && d.A.wasClipSharedInChannel(I.id, f)),
        { onShareClick: v } = (0, u.A)(f),
        N = l.useCallback(() => {
            null != I &&
                null != f &&
                t.messageReference?.message_id != null &&
                v({ clips: [I], messageReference: { channel_id: f, message_id: t.messageReference.message_id } });
        }, [I, f, t.messageReference, v]);
    if (null == x || (null == E && null == C) || null == I || T) return null;
    let S = x.attachments.find((e) => (0, a.Lt)(e.flags ?? 0, p.sbO.IS_CLIP)),
        b = null;
    if (S?.proxy_url != null) {
        let e = _.A.toURLSafe(S.proxy_url);
        null != e && (e.searchParams.append("format", "webp"), (b = e.toString()));
    }
    let y = null != b ? [b, I.thumbnail] : [I.thumbnail];
    return (0, i.jsx)(h.A, {
        iconNode: (0, i.jsx)(o.xgA, { size: "md", color: "currentColor" }),
        timestamp: t.timestamp,
        compact: n,
        additionalContent: (0, i.jsxs)("div", {
            className: A.i,
            children: [
                (0, i.jsx)(c.A, { thumbnails: y, variant: "stacked" }),
                (0, i.jsx)(s.$nd, { size: "sm", onClick: N, text: g.intl.string(g.t["5qb8EX"]), icon: o.W4J }),
            ],
        }),
        children: g.intl.string(g.t.ThhsNG),
    });
}
