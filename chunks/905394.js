n.d(t, { e: () => N, A: () => y });
var l = n(477900),
    s = n(582128),
    a = n(503698),
    r = n.n(a),
    i = n(796873),
    o = n.n(i),
    c = n(855986),
    u = n(911608),
    d = n(939249),
    m = n(789645),
    h = n(28863),
    f = n(834730),
    p = n(73153),
    g = n(31717),
    A = n(399263);
let C = {
    cancel(e, t) {
        p.h.dispatch({ type: "UPLOAD_CANCEL_REQUEST", channelId: e, file: t });
        let n = A.A.getMessageForFile(t.id);
        null == n ||
            ("" === g.A.getDraft(n.channel_id, g.C.ChannelMessage) &&
                p.h.dispatch({
                    type: "DRAFT_SAVE",
                    channelId: n.channel_id,
                    draft: n.content,
                    draftType: g.C.ChannelMessage,
                }));
    },
};
var x = n(46054),
    E = n(453771),
    j = n(792996),
    v = n(745268);
function _(e) {
    let { filename: t } = e,
        s = (0, E.GD)(t),
        a = n(165025)(`./icon-file-${s}.svg`);
    return (0, l.jsx)("img", {
        className: v.Kk,
        src: a,
        alt: j.intl.formatToPlainString(j.t.g6KdFv, { fileType: s }),
        title: s,
    });
}
function N(e) {
    let { channelId: t, file: n } = e,
        a = (0, c.bG)([A.A], () => A.A.getMessageForFile(n.id)?.content),
        r = s.useMemo(() => {
            let e = n.items;
            return null == e
                ? j.intl.string(j.t.jfKTes)
                : 1 === e.length && null != e[0].filename
                  ? e[0].filename
                  : j.intl.formatToPlainString(j.t.D0noUt, { count: e.length });
        }, [n.items]),
        i = s.useCallback(() => {
            C.cancel(t, n);
        }, [t, n]),
        h = !0 === n.isPreparing || 100 === n.progress,
        f = !h && n.currentSize > 0,
        p =
            !0 === n.isPreparing && null != n.preparedTotal && n.preparedTotal > 1
                ? j.intl.formatToPlainString(j.t.V9LZxW, { prepared: n.preparedCount ?? 0, total: n.preparedTotal })
                : j.intl.string(j.t.jfKTes),
        g = s.useMemo(() => (null == a || "" === a.trim() ? null : x.A.parse(a)), [a]);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            null != g && (0, l.jsx)("div", { className: v.Qs, children: g }),
            (0, l.jsx)("div", {
                className: v.Ig,
                children: (0, l.jsxs)("div", {
                    className: v.NJ,
                    children: [
                        (0, l.jsx)(_, { filename: r }),
                        (0, l.jsxs)("div", {
                            className: v.Jg,
                            children: [
                                (0, l.jsxs)("div", {
                                    className: v.tP,
                                    children: [
                                        (0, l.jsx)("div", { className: v.iW, children: r }),
                                        f
                                            ? (0, l.jsx)("div", {
                                                  className: v.Ej,
                                                  children: `\u{2014} ${o().filesize(n.currentSize)}`,
                                              })
                                            : null,
                                    ],
                                }),
                                (0, l.jsx)("div", {
                                    className: v.L$,
                                    children:
                                        !0 === n.preparationFailed
                                            ? j.intl.string(j.t.B3vFdU)
                                            : h
                                              ? p
                                              : (0, l.jsx)(u.z, { value: n.progress, "aria-label": r }),
                                }),
                            ],
                        }),
                        h
                            ? null
                            : (0, l.jsx)(d.D, {
                                  onClick: i,
                                  "aria-label": j.intl.string(!0 === n.preparationFailed ? j.t.oyYWHE : j.t["ETE/oC"]),
                                  children: (0, l.jsx)(m.XSmallIcon, {
                                      size: "md",
                                      color: "currentColor",
                                      className: v.x7,
                                  }),
                              }),
                    ],
                }),
            }),
        ],
    });
}
let y = function (e) {
    let { className: t, url: n, fileName: s, fileSize: a, onClick: i, onContextMenu: c, renderAdjacentContent: u } = e;
    return (0, l.jsxs)("div", {
        className: r()(v.Ig, t),
        children: [
            (0, l.jsxs)("div", {
                className: v.NJ,
                children: [
                    (0, l.jsx)(_, { filename: s }),
                    (0, l.jsxs)("div", {
                        className: v.Jg,
                        children: [
                            (0, l.jsx)("div", {
                                className: v.RT,
                                children: (0, l.jsx)(h.Anchor, {
                                    className: v.AD,
                                    href: n,
                                    onClick: i,
                                    onContextMenu: c,
                                    children: s,
                                }),
                            }),
                            (0, l.jsx)(f.E, {
                                variant: "body-xs/normal",
                                color: "text-muted",
                                children: o().filesize(a),
                            }),
                        ],
                    }),
                ],
            }),
            null != u && u(),
        ],
    });
};
