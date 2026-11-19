n.d(t, { e: () => v, A: () => I });
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
    p = n(834730),
    f = n(73153),
    g = n(31717),
    C = n(399263);
let A = {
    cancel(e, t) {
        f.h.dispatch({ type: "UPLOAD_CANCEL_REQUEST", channelId: e, file: t });
        let n = C.A.getMessageForFile(t.id);
        null == n ||
            ("" === g.A.getDraft(n.channel_id, g.C.ChannelMessage) &&
                f.h.dispatch({
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
    _ = n(745268);
function N(e) {
    let { filename: t } = e,
        s = (0, E.GD)(t),
        a = n(165025)(`./icon-file-${s}.svg`);
    return (0, l.jsx)("img", {
        className: _.Kk,
        src: a,
        alt: j.intl.formatToPlainString(j.t.g6KdFv, { fileType: s }),
        title: s,
    });
}
function v(e) {
    let { channelId: t, file: n } = e,
        a = (0, c.bG)([C.A], () => C.A.getMessageForFile(n.id)?.content),
        r = s.useMemo(() => {
            let e = n.items;
            return null == e
                ? j.intl.string(j.t.jfKTes)
                : 1 === e.length && null != e[0].filename
                  ? e[0].filename
                  : j.intl.formatToPlainString(j.t.D0noUt, { count: e.length });
        }, [n.items]),
        i = s.useCallback(() => {
            A.cancel(t, n);
        }, [t, n]),
        h = !0 === n.isPreparing || 100 === n.progress,
        p = !h && n.currentSize > 0,
        f =
            !0 === n.isPreparing && null != n.preparedTotal && n.preparedTotal > 1
                ? j.intl.formatToPlainString(j.t.V9LZxW, { prepared: n.preparedCount ?? 0, total: n.preparedTotal })
                : j.intl.string(j.t.jfKTes),
        g = s.useMemo(() => (null == a || "" === a.trim() ? null : x.A.parse(a)), [a]);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            null != g && (0, l.jsx)("div", { className: _.Qs, children: g }),
            (0, l.jsx)("div", {
                className: _.Ig,
                children: (0, l.jsxs)("div", {
                    className: _.NJ,
                    children: [
                        (0, l.jsx)(N, { filename: r }),
                        (0, l.jsxs)("div", {
                            className: _.Jg,
                            children: [
                                (0, l.jsxs)("div", {
                                    className: _.tP,
                                    children: [
                                        (0, l.jsx)("div", { className: _.iW, children: r }),
                                        p
                                            ? (0, l.jsx)("div", {
                                                  className: _.Ej,
                                                  children: `\u{2014} ${o().filesize(n.currentSize)}`,
                                              })
                                            : null,
                                    ],
                                }),
                                (0, l.jsx)("div", {
                                    className: _.L$,
                                    children:
                                        !0 === n.preparationFailed
                                            ? j.intl.string(j.t.B3vFdU)
                                            : h
                                              ? f
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
                                      className: _.x7,
                                  }),
                              }),
                    ],
                }),
            }),
        ],
    });
}
let I = function (e) {
    let { className: t, url: n, fileName: s, fileSize: a, onClick: i, onContextMenu: c, renderAdjacentContent: u } = e;
    return (0, l.jsxs)("div", {
        className: r()(_.Ig, t),
        children: [
            (0, l.jsxs)("div", {
                className: _.NJ,
                children: [
                    (0, l.jsx)(N, { filename: s }),
                    (0, l.jsxs)("div", {
                        className: _.Jg,
                        children: [
                            (0, l.jsx)("div", {
                                className: _.RT,
                                children: (0, l.jsx)(h.Anchor, {
                                    className: _.AD,
                                    href: n,
                                    onClick: i,
                                    onContextMenu: c,
                                    children: s,
                                }),
                            }),
                            (0, l.jsx)(p.E, {
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
