"use strict";
n.d(t, { A: () => g }), n(938796);
var i = n(627968),
    r = n(64700),
    l = n(665260),
    s = n(311907),
    a = n(821609),
    o = n(176781),
    c = n(110384),
    u = n(274372),
    d = n(17069),
    _ = n(794905),
    E = n(320501),
    A = n(998218),
    m = n(888675),
    I = n(652215),
    T = n(985018),
    N = n(970677);
function g(e) {
    let { message: t, compact: n } = e,
        g = t.channel_id,
        p = (0, s.bG)(
            [E.A],
            () =>
                null != t.messageReference
                    ? E.A.getMessage(t.messageReference.channel_id, t.messageReference.message_id)
                    : null,
            [t.messageReference],
        ),
        { clipId: C, remoteTriggerClipId: f } = r.useMemo(
            () =>
                null != p
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
                      })(p.content)
                    : {},
            [p],
        ),
        h = (0, s.bG)([u.A], () => u.A.getMatchingGroupClip(C, f)),
        R = (0, s.bG)([u.A], () => null != h && null != g && u.A.wasClipSharedInChannel(h.id, g)),
        { onShareClick: S } = (0, _.A)(g),
        O = r.useCallback(() => {
            null != h &&
                null != g &&
                t.messageReference?.message_id != null &&
                S({ clips: [h], messageReference: { channel_id: g, message_id: t.messageReference.message_id } });
        }, [h, g, t.messageReference, S]);
    if (null == p || (null == C && null == f) || null == h || R) return null;
    let x = p.attachments.find((e) => (0, l.Lt)(e.flags ?? 0, I.sbO.IS_CLIP)),
        M = null;
    if (x?.proxy_url != null) {
        let e = A.A.toURLSafe(x.proxy_url);
        null != e && (e.searchParams.append("format", "webp"), (M = e.toString()));
    }
    let D = null != M ? [M, h.thumbnail] : [h.thumbnail];
    return (0, i.jsx)(m.A, {
        iconNode: (0, i.jsx)(o.x, { size: "md", color: "currentColor" }),
        timestamp: t.timestamp,
        compact: n,
        additionalContent: (0, i.jsxs)("div", {
            className: N.i,
            children: [
                (0, i.jsx)(d.A, { thumbnails: D, variant: "stacked" }),
                (0, i.jsx)(a.$, { size: "sm", onClick: O, text: T.intl.string(T.t["5qb8EX"]), icon: c.W }),
            ],
        }),
        children: T.intl.string(T.t.ThhsNG),
    });
}
