n.d(t, { A: () => N }), n(938796);
var i = n(627968),
    l = n(64700),
    a = n(665260),
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
    T = n(363866);
function N(e) {
    let { message: t, compact: n } = e,
        N = t.channel_id,
        f = (0, r.bG)(
            [_.A],
            () =>
                null != t.messageReference
                    ? _.A.getMessage(t.messageReference.channel_id, t.messageReference.message_id)
                    : null,
            [t.messageReference],
        ),
        { clipId: C, remoteTriggerClipId: g } = l.useMemo(
            () =>
                null != f
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
                      })(f.content)
                    : {},
            [f],
        ),
        h = (0, r.bG)([c.A], () => c.A.getMatchingGroupClip(C, g)),
        p = (0, r.bG)([c.A], () => null != h && null != N && c.A.wasClipSharedInChannel(h.id, N)),
        { onShareClick: R } = (0, u.A)(N),
        S = l.useCallback(() => {
            null != h &&
                null != N &&
                t.messageReference?.message_id != null &&
                R({ clips: [h], messageReference: { channel_id: N, message_id: t.messageReference.message_id } });
        }, [h, N, t.messageReference, R]);
    if (null == f || (null == C && null == g) || null == h || p) return null;
    let x = f.attachments.find((e) => (0, a.Lt)(e.flags ?? 0, E.sbO.IS_CLIP)),
        O = null;
    if (x?.proxy_url != null) {
        let e = m.A.toURLSafe(x.proxy_url);
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
                (0, i.jsx)(s.$nd, { size: "sm", onClick: S, text: I.intl.string(I.t["5qb8EX"]), icon: o.W4J }),
            ],
        }),
        children: I.intl.string(I.t.ThhsNG),
    });
}
