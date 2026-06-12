n.d(e, { k: () => A, o: () => x });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(508602),
    o = n(189213),
    c = n(982168),
    d = n(607470),
    u = n(59318),
    I = n(633387),
    E = n(390248),
    _ = n(961440),
    C = n(375708),
    p = n(515052);
let v = (t) => {
        let { attachment: e } = t,
            { url: n, description: l } = e;
        return null == n ? null : (0, i.jsx)(m, { url: n, description: l });
    },
    h = (t) => {
        let { embed: e } = t;
        if (!_.Tj.has(e.type)) return null;
        let n = void 0 !== e.video && e.type !== r.A.GIFV ? e.video.url : (e.thumbnail?.url ?? e.image?.url);
        return null == n ? null : (0, i.jsx)(m, { url: n });
    },
    m = (t) => {
        let { url: e, description: n } = t,
            l = (0, u.r1)(e);
        return (0, i.jsx)("div", {
            className: p.il,
            children: l
                ? (0, i.jsx)(d.A, { className: s()(p.Ki, p.$_), controls: !0, src: e })
                : (0, i.jsx)("img", { className: s()(p.Sl, p.$_), src: e, alt: n }),
        });
    };
function x(t) {
    c.A.pop(), (0, I.r)({ id: "explicit-media-false-positive-modal", text: C.intl.string(C.t.gFsTKu) }), t();
}
function A(t) {
    let {
            channelId: e,
            messageId: n,
            isReportFalsePositiveLoading: a,
            analyticsContext: s,
            attachmentPreview: r,
            embedPreview: c,
            onConfirmPress: d,
            transitionState: u,
            onClose: I,
        } = t,
        _ = l.useCallback(() => {
            (0, E.hv)({
                action: E.rY.EXPLICIT_MEDIA_FALSE_POSITIVE_CLICK_CANCEL,
                channelId: e,
                messageId: n,
                context: s,
            }),
                I();
        }, [e, n, s, I]),
        p = l.useCallback(() => {
            d?.(),
                (0, E.hv)({
                    action: E.rY.EXPLICIT_MEDIA_FALSE_POSITIVE_CLICK_CONFIRM,
                    channelId: e,
                    messageId: n,
                    context: s,
                });
        }, [e, n, s, d]);
    return (
        l.useEffect(() => {
            (0, E.hv)({ action: E.rY.EXPLICIT_MEDIA_FALSE_POSITIVE_VIEWED, channelId: e, messageId: n, context: s });
        }, [e, n, s]),
        (0, i.jsxs)(o.Modal, {
            transitionState: u,
            onClose: I,
            title: C.intl.string(C.t.TPpVkI),
            subtitle: C.intl.string(C.t["z4du/I"]),
            actions: [
                { text: C.intl.string(C.t["ETE/oC"]), onClick: _, variant: "secondary", disabled: a },
                { text: C.intl.string(C.t["cY+Oob"]), onClick: p, loading: a, disabled: a },
            ],
            children: [null != r && (0, i.jsx)(v, { attachment: r }), null != c && (0, i.jsx)(h, { embed: c })],
        })
    );
}
