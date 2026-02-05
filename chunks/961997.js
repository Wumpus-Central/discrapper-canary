n.d(t, { k: () => C, o: () => E });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    r = n.n(a),
    s = n(508602),
    o = n(158954),
    d = n(630054),
    c = n(607470),
    u = n(77350),
    m = n(110168),
    _ = n(390248),
    h = n(961440),
    p = n(985018),
    g = n(954141);
let A = (e) => {
        let { attachment: t } = e,
            { url: n, description: l } = t;
        return null == n ? null : (0, i.jsx)(x, { url: n, description: l });
    },
    f = (e) => {
        let { embed: t } = e;
        if (!h.Tj.has(t.type)) return null;
        let n = void 0 !== t.video && t.type !== s.A.GIFV ? t.video.url : (t.thumbnail?.url ?? t.image?.url);
        return null == n ? null : (0, i.jsx)(x, { url: n });
    },
    x = (e) => {
        let { url: t, description: n } = e,
            l = (0, u.r1)(t);
        return (0, i.jsx)("div", {
            className: g.il,
            children: l
                ? (0, i.jsx)(c.A, { className: r()(g.Ki, g.$_), controls: !0, src: t })
                : (0, i.jsx)("img", { className: r()(g.Sl, g.$_), src: t, alt: n }),
        });
    };
function E(e) {
    d.A.pop(), (0, m.r)({ id: "explicit-media-false-positive-modal", text: p.intl.string(p.t.gFsTKu) }), e();
}
function C(e) {
    let {
            channelId: t,
            messageId: n,
            isReportFalsePositiveLoading: a,
            analyticsContext: r,
            attachmentPreview: s,
            embedPreview: d,
            onConfirmPress: c,
            transitionState: u,
            onClose: m,
        } = e,
        h = l.useCallback(() => {
            (0, _.hv)({
                action: _.rY.EXPLICIT_MEDIA_FALSE_POSITIVE_CLICK_CANCEL,
                channelId: t,
                messageId: n,
                context: r,
            }),
                m();
        }, [t, n, r, m]),
        g = l.useCallback(() => {
            c?.(),
                (0, _.hv)({
                    action: _.rY.EXPLICIT_MEDIA_FALSE_POSITIVE_CLICK_CONFIRM,
                    channelId: t,
                    messageId: n,
                    context: r,
                });
        }, [t, n, r, c]);
    return (
        l.useEffect(() => {
            (0, _.hv)({ action: _.rY.EXPLICIT_MEDIA_FALSE_POSITIVE_VIEWED, channelId: t, messageId: n, context: r });
        }, [t, n, r]),
        (0, i.jsxs)(o.Modal, {
            transitionState: u,
            onClose: m,
            title: p.intl.string(p.t.TPpVkI),
            subtitle: p.intl.string(p.t["z4du/I"]),
            actions: [
                { text: p.intl.string(p.t["ETE/oC"]), onClick: h, variant: "secondary", disabled: a },
                { text: p.intl.string(p.t["cY+Oob"]), onClick: g, loading: a, disabled: a },
            ],
            children: [null != s && (0, i.jsx)(A, { attachment: s }), null != d && (0, i.jsx)(f, { embed: d })],
        })
    );
}
