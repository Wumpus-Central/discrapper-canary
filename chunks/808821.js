"use strict";
n.d(t, { A: () => g }), n(938796);
var i = n(627968),
    r = n(64700),
    s = n(665260),
    l = n(311907),
    a = n(732955),
    c = n(397927),
    o = n(274372),
    u = n(17069),
    d = n(794905),
    _ = n(320501),
    E = n(998218),
    A = n(888675),
    m = n(652215),
    I = n(985018),
    T = n(419397);
function g(e) {
    let { message: t, compact: n } = e,
        g = t.channel_id,
        N = (0, l.bG)(
            [_.A],
            () =>
                null != t.messageReference
                    ? _.A.getMessage(t.messageReference.channel_id, t.messageReference.message_id)
                    : null,
            [t.messageReference],
        ),
        { clipId: f, remoteTriggerClipId: p } = r.useMemo(
            () =>
                null != N
                    ? (function (e) {
                          let t = "__CLIP_METADATA__",
                              n = e.indexOf(t);
                          if (-1 === n) return {};
                          let i = n + t.length,
                              r = e.substring(i);
                          try {
                              let e = JSON.parse(r);
                              return { clipId: e.id, remoteTriggerClipId: e.remoteTriggerClipId };
                          } catch (e) {
                              return {};
                          }
                      })(N.content)
                    : {},
            [N],
        ),
        C = (0, l.bG)([o.A], () => o.A.getMatchingGroupClip(f, p)),
        h = (0, l.bG)([o.A], () => null != C && null != g && o.A.wasClipSharedInChannel(C.id, g)),
        { onShareClick: S } = (0, d.A)(g),
        R = r.useCallback(() => {
            null != C &&
                null != g &&
                t.messageReference?.message_id != null &&
                S({ clips: [C], messageReference: { channel_id: g, message_id: t.messageReference.message_id } });
        }, [C, g, t.messageReference, S]);
    if (null == N || (null == f && null == p) || null == C || h) return null;
    let x = N.attachments.find((e) => (0, s.Lt)(e.flags ?? 0, m.sbO.IS_CLIP)),
        O = null;
    if (x?.proxy_url != null) {
        let e = E.A.toURLSafe(x.proxy_url);
        null != e && (e.searchParams.append("format", "webp"), (O = e.toString()));
    }
    let M = null != O ? [O, C.thumbnail] : [C.thumbnail];
    return (0, i.jsx)(A.A, {
        iconNode: (0, i.jsx)(c.xgA, { size: "md", color: "currentColor" }),
        timestamp: t.timestamp,
        compact: n,
        additionalContent: (0, i.jsxs)("div", {
            className: T.i,
            children: [
                (0, i.jsx)(u.A, { thumbnails: M, variant: "stacked" }),
                (0, i.jsx)(a.$nd, { size: "sm", onClick: R, text: I.intl.string(I.t["5qb8EX"]), icon: c.W4J }),
            ],
        }),
        children: I.intl.string(I.t.ThhsNG),
    });
}
