n.d(t, { A: () => f }), n(938796);
var i = n(627968),
    a = n(64700),
    l = n(665260),
    r = n(311907),
    s = n(732955),
    o = n(397927),
    c = n(274372),
    d = n(17069),
    u = n(794905),
    _ = n(320501),
    m = n(998218),
    A = n(888675),
    E = n(652215),
    I = n(985018),
    T = n(419397);
function f(e) {
    let { message: t, compact: n } = e,
        f = t.channel_id,
        N = (0, r.bG)(
            [_.A],
            () =>
                null != t.messageReference
                    ? _.A.getMessage(t.messageReference.channel_id, t.messageReference.message_id)
                    : null,
            [t.messageReference],
        ),
        { clipId: g, remoteTriggerClipId: C } = a.useMemo(
            () =>
                null != N
                    ? (function (e) {
                          let t = "__CLIP_METADATA__",
                              n = e.indexOf(t);
                          if (-1 === n) return {};
                          let i = n + t.length,
                              a = e.substring(i);
                          try {
                              let e = JSON.parse(a);
                              return { clipId: e.id, remoteTriggerClipId: e.remoteTriggerClipId };
                          } catch (e) {
                              return {};
                          }
                      })(N.content)
                    : {},
            [N],
        ),
        h = (0, r.bG)([c.A], () => c.A.getMatchingGroupClip(g, C)),
        p = (0, r.bG)([c.A], () => null != h && null != f && c.A.wasClipSharedInChannel(h.id, f)),
        { onShareClick: x } = (0, u.A)(f),
        R = a.useCallback(() => {
            null != h &&
                null != f &&
                t.messageReference?.message_id != null &&
                x({ clips: [h], messageReference: { channel_id: f, message_id: t.messageReference.message_id } });
        }, [h, f, t.messageReference, x]);
    if (null == N || (null == g && null == C) || null == h || p) return null;
    let S = N.attachments.find((e) => (0, l.Lt)(e.flags ?? 0, E.sbO.IS_CLIP)),
        O = null;
    if (S?.proxy_url != null) {
        let e = m.A.toURLSafe(S.proxy_url);
        null != e && (e.searchParams.append("format", "webp"), (O = e.toString()));
    }
    let M = null != O ? [O, h.thumbnail] : [h.thumbnail];
    return (0, i.jsx)(A.A, {
        iconNode: (0, i.jsx)(o.xgA, { size: "md", color: "currentColor" }),
        timestamp: t.timestamp,
        compact: n,
        additionalContent: (0, i.jsxs)("div", {
            className: T.i,
            children: [
                (0, i.jsx)(d.A, { thumbnails: M, variant: "stacked" }),
                (0, i.jsx)(s.$nd, { size: "sm", onClick: R, text: I.intl.string(I.t["5qb8EX"]), icon: o.W4J }),
            ],
        }),
        children: I.intl.string(I.t.ThhsNG),
    });
}
